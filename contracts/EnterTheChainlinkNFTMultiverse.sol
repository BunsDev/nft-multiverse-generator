// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";

import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract EnterTheChainlinkNFTMultiverse is
    ERC721,
    FunctionsClient,
    VRFConsumerBaseV2Plus
{
    using FunctionsRequest for FunctionsRequest.Request;

    /** STRUCTS */

    struct VRFRequestStatus {
        bool fulfilled;
        bool exists;
        uint256 tokenId;
        address userWallet;
        uint256[] randomWords;
    }

    struct FunctionsRequestInfo {
        uint256 tokenId;
        address userWallet;
        bool isPending;
    }

    /** NFT VARIABLES */

    bool public isPaused;

    uint256 public tokenIdCounter;

    string[] public multiverseApiSources;

    string public lastFunctionCallbackStringResult;

    mapping(uint256 => string) public tokenIdToNFTData;

    /** CHAINLINK FUNCTIONS VARIABLES */

    // Chainlink Functions subscription id, needed for the FunctionsClient
    uint64 functionsSubscriptionId = 67;

    // Mapping to track the request id for the Chainlink Functions node along with the user wallet and tokenId
    mapping(bytes32 => FunctionsRequestInfo)
        public chainlinkFunctionsRequestIdTracker;

    // Arbitrum sepolia router, needed for the FunctionsClient
    address public router = 0x234a5fb5Bd614a7AA2FfAB244D603abFA0Ac5C5C;

    // Arbitrum Sepolia DON id, needed for the FunctionsClient
    bytes32 donId =
        0x66756e2d617262697472756d2d7365706f6c69612d3100000000000000000000;

    // Function config, needed for the FunctionsClient
    bytes32 public functionCallbackLastRequestId;
    bytes public functionCallbackLastResponse;
    bytes public functionCallbackLastError;
    uint32 public functionGasLimit = 300000;

    /** CHAINLINK VRF VARIABLES */

    // Chainlink VRF subscription id, needed for the VRFConsumerBaseV2Plus
    uint256 public vrfSubscriptionId =
        40196134761291745625553019149610031040241889441326525117128810163757352880767;

    // Mapping to track the request id for the Chainlink VRF node along with the tokenId and user wallet
    mapping(uint256 => VRFRequestStatus) public chainlinkVRFRequestIdTracker;

    // Arbitrum Sepolia key hash, needed for the VRFConsumerBaseV2Plus
    bytes32 public arbitrumSepoliaKeyHash =
        0x027f94ff1465b3525f9fc03e9ff7d6d2c0953482246dd6ae07570c45d6631414;

    // VRF config, needed for the VRFConsumerBaseV2Plus
    uint16 public vrfRequestConfirmations = 1;
    uint32 public vrfNumWords = 1;
    uint256[] public vrfRequestIds;
    uint256 public vrfLastRequestId;
    uint32 public vrfCallbackGasLimit = 100000;

    // The VRF Coordinator address for the Arbitrum Sepolia network, needed for the VRFConsumerBaseV2Plus
    address public vrfCoordinator = 0x5CE8D5A2BC84beb22a398CCA51996F7930313D61;

    /** CHAINLINK FUNCTIONS EVENTS */

    /** CHAINLINK VRF EVENTS */

    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    /** ERRORS */

    error UnexpectedRequestID(bytes32 requestId);

    /** API Sources , hardcoded but can be updated through helpers */

    string public gameOfThronesSource =
        "const gotURL = `https://thronesapi.com/api/v2/Characters`;const rand = Math.floor(Math.random() * 50);const gotRequest = Functions.makeHttpRequest({url: gotURL,method: `GET`,});const gotResponse = await gotRequest;const gotData = gotResponse.data;const myData = {name: gotData[rand].fullName,image: gotData[rand].imageUrl,};return Functions.encodeString(JSON.stringify(myData));";
    string public pokeSource =
        "const pokiURL = `https://pokeapi.co/api/v2/pokemon`;const rand = Math.floor(Math.random() * 1000);const pokemonCharacter = rand;const pokiRequest = Functions.makeHttpRequest({url: `${pokiURL}/${pokemonCharacter}`,method: `GET`,});const pokiResponse = await pokiRequest;const reqData = pokiResponse.data;const myData = {name: reqData.species.name,image: reqData.sprites.other.home.front_default,};return Functions.encodeString(JSON.stringify(myData));";
    string public disneySource =
        "const disneyURL = `https://api.disneyapi.dev/character`;const rand = Math.floor(Math.random() * 50);const disneyRequest = Functions.makeHttpRequest({url: disneyURL,method: `GET`,});const disneyResponse = await disneyRequest;const disneyData = disneyResponse.data.data;const myData = {name: disneyData[rand].name,image: disneyData[rand].imageUrl,};return Functions.encodeString(JSON.stringify(myData));";
    string public hpSource =
        "const hpURL = `https://hp-api.onrender.com/api/characters`;const rand = Math.floor(Math.random() * 20);const hpRequest = Functions.makeHttpRequest({url: hpURL,method: `GET`,});const hpResponse = await hpRequest;const hpData = hpResponse.data;const myData = {name: hpData[rand].name,image: hpData[rand].image,};return Functions.encodeString(JSON.stringify(myData));";

    /** CONSTRUCTOR */

    // Constructor inherits from the ERC721, FunctionsClient, and VRFConsumerBaseV2Plus contracts
    constructor()
        ERC721("ChainlinkMultiverse", "CLM")
        FunctionsClient(router)
        VRFConsumerBaseV2Plus(vrfCoordinator)
    {
        // Fill the multiverseApiSources array with the API sources
        multiverseApiSources.push(gameOfThronesSource);
        multiverseApiSources.push(pokeSource);
        multiverseApiSources.push(disneySource);
        multiverseApiSources.push(hpSource);
    }

    /** EXTERNAL */

    /**
     * @notice Entry point for the user to mint an NFT, will kick off the VRF request
     */
    function mintRandomNFTRequest(address userWallet) external {
        require(!isPaused, "Contract is paused");
        // Increment the tokenId, this is the NFT id that will be minted to the user
        tokenIdCounter++;
        // Make request to the Chainlink node for a random number
        uint256 requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: arbitrumSepoliaKeyHash,
                subId: vrfSubscriptionId,
                requestConfirmations: vrfRequestConfirmations,
                callbackGasLimit: vrfCallbackGasLimit,
                numWords: vrfNumWords,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );
        // Store the request id and the request status
        chainlinkVRFRequestIdTracker[requestId] = VRFRequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            tokenId: tokenIdCounter,
            userWallet: userWallet,
            fulfilled: false
        });
        vrfRequestIds.push(requestId);
        vrfLastRequestId = requestId;
        emit RequestSent(requestId, vrfNumWords);
    }

    /** CHAINLINK SERVICES CALLBACK FUNCS */

    /**
     * @notice Callback function used by VRF Coordinator
     * @dev Use the RandomWordsRequest response to select a random api source
     */
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] calldata randomWords
    ) internal override {
        // Update the VRF request status
        VRFRequestStatus storage request = chainlinkVRFRequestIdTracker[
            requestId
        ];
        request.randomWords = randomWords;
        request.fulfilled = true;
        // Pull the VRF random number from the response array
        uint256 randomNumber = randomWords[0] % multiverseApiSources.length;
        // Use the random number to select a random api source
        string memory randomApiSource = multiverseApiSources[randomNumber];
        // Use the random api source to make a request to the Chainlink node
        // Build and initialize the request
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(randomApiSource);
        // Send request to the Chainlink node
        functionCallbackLastRequestId = _sendRequest(
            req.encodeCBOR(),
            functionsSubscriptionId,
            functionGasLimit,
            donId
        );
        // Track the request id for the Chainlink Function request
        chainlinkFunctionsRequestIdTracker[
            functionCallbackLastRequestId
        ] = FunctionsRequestInfo({
            tokenId: request.tokenId,
            userWallet: request.userWallet,
            isPending: true
        });
        // Emit the RequestFulfilled event
        emit RequestFulfilled(requestId, randomWords);
    }

    /**
     * @notice Callback function used by Chainlink Functions node
     * @dev Use the response to get the metadata for an NFT and execute the mint of that NFT
     */
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        require(
            chainlinkFunctionsRequestIdTracker[requestId].isPending == true,
            "Invalid request id"
        );
        // Store the callback response and error
        functionCallbackLastError = err;
        functionCallbackLastResponse = response;
        // Store the last response as a string
        lastFunctionCallbackStringResult = string(response);
        // Set the request as not pending anymore
        chainlinkFunctionsRequestIdTracker[requestId].isPending = false;
        // Set the metadata string for the NFT
        tokenIdToNFTData[
            chainlinkFunctionsRequestIdTracker[requestId].tokenId
        ] = lastFunctionCallbackStringResult;
        // Mint the NFT
        _safeMint(
            chainlinkFunctionsRequestIdTracker[requestId].userWallet,
            chainlinkFunctionsRequestIdTracker[requestId].tokenId
        );
    }

    /** HELPERS */

    /**
     * @notice Pause the contract
     */
    function pause() external onlyOwner {
        isPaused = true;
    }

    /**
     * @notice Unpause the contract
     */
    function unpause() external onlyOwner {
        isPaused = false;
    }

    /**
     * @notice Add an API source to the multiverseApiSources array
     */
    function appendApiSource(string memory apiSource) external onlyOwner {
        multiverseApiSources.push(apiSource);
    }

    /**
     * @notice Remove an API source at a specific index
     */
    function removeApiSource(uint256 index) external onlyOwner {
        require(index < multiverseApiSources.length, "Index out of bounds");
        multiverseApiSources[index] = multiverseApiSources[
            multiverseApiSources.length - 1
        ];
        multiverseApiSources.pop();
    }

    /**
     * @notice Update an API source at a specific index
     */
    function updateApiSource(
        uint256 index,
        string memory apiSource
    ) external onlyOwner {
        require(index < multiverseApiSources.length, "Index out of bounds");
        multiverseApiSources[index] = apiSource;
    }
}
