
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTBlock = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , type , finishingmove , attack , defense , age) {
    let NFT = {
        name: name,
        type: type,
        finishingmove: finishingmove,
        attack: attack,
        defense: defense,
        age: age
    }
    NFTBlock.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTBlock.length; i++) {
        console.log("\n\n-------------------- Wrestler "+(i+1)+" ------------------------\n\n" );
        console.log("Name: " + NFTBlock[i].name);
        console.log("Type: " + NFTBlock[i].type);
        console.log("Finishing Move: " + NFTBlock[i].finishingmove);
        console.log("Attack: " + NFTBlock[i].attack);
        console.log("Defense: " + NFTBlock[i].defense);
        console.log("Age: " + NFTBlock[i].age);
        console.log("\n\n---------------------* * * * *--------------------------\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted:" + NFTBlock.length);

}

// call your functions below this line
mintNFT("Roman Reigns", "PowerHouse", "Spear", 99, 85, 38);
mintNFT("Seth Rollins", "Technician", "Stomp", 90, 80, 37);
mintNFT("The Rock", "Highflyer", "People's Elbow", 85, 90, 52);
mintNFT("The UnderTaker", "PowerHouse", "Tombstone Piledriver", 89, 88, 59);
listNFTs();
getTotalSupply();
