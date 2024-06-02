<!-- @format -->

# Chainlink 2024 Hackathon Project

### _Enter The Chainlink NFT Multiverse_

##### Random NFT Generation utilizing Chainlink VRF and Chainlink Functions Service

**Deployed & Verified on Arbitrum Sepolia** : `EnterTheChainlinkNFTMultiverse.sol` : [https://sepolia.arbiscan.io/address/0x5853B3A8482444170c9bF48F27eFd8C53Aa4F74F#code]

#### How does it work?

My Chainlink 2024 Hackathon project submission is an ERC721 NFT contract that utilizes Chainlinks VRF Service and Chainlinks Functions Service to allow users to random generate and mint NFTs that pull their metadata from external APIs that have access to tens of thousands of records allowing for a vast selection of different possible NFTs.

The NFT minting process is split up into 3 steps (due to gas limitations by the oracle services).

### Step 1: Get a verifiably random universe.

This is done by executing the **`mintRandomNFTRequest`** function.

This function takes a wallet address as an input which will be the address that ultimately the NFT will be minted to.

This function increments the local NFT token id counter and assigns it to the wallet provided and attaches both user wallet and token id to the VRF request kicked off to the Chainlink Oracle.

Once the Chainlink Oracle callback returns with a random number, the random number is used to randomly choose an API Source.

Currently the contract is deployed with 4 APIs (an API to the Harry Potter universe, an API to the Game Of Thrones universe, an API to the Disney universe, and an API to the Pokemon universe).

We can always expand this array of API sources to expand our multiverse.

One of these randomly chosen APIs will get attached the token id that is associated with the VRF request returned.

Now that the token id has a verifiably random API attached , its time to find a random character in that universe and assign its metadata to the NFT.

### Step 2 : Get a random universe character.

This is done by executing the **`exploreTheMultiverse`** function.

This function takes in a token id as an input.

This token id must have a verifiably random API attached to it which can only be accomplished in Step 1.

Using the random API source attached to the token id, we kick off a Chainlink Functions request.

We attach the token id to this request.

The code inside the random API source queries the API universe for a random character and returns its metadata.

After the callback for the Chainlink Functions request returns we then have a random character metadata (name & image) that we then assign it to the token id as its metadata.

Now that we have the random character metadata for the token id we are now ready to let the user mint their NFT.

### Step 3 : Mint your multiverse NFT.

This is done by executing the **`enterTheMultiverse`** function.

This function takes in a token id as an input.

The token id must have a random universe associated with it otherwise the function will revert.

If all expected data pieces are present then the user is able to mint the NFT and receive the token.
