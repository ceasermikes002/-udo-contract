// import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { expect } from "chai";
// import hre from "hardhat";

// describe("Ludo", function () {
//   // Fixture to deploy the Ludo contract
//   async function deployLudoFixture() {
//     const [owner, playerRed, playerBlue] = await hre.ethers.getSigners();
    
//     const Ludo = await hre.ethers.getContractFactory("Ludo");
//     const ludo = await Ludo.deploy();

//     await ludo.deployed();

//     return { ludo, owner, playerRed, playerBlue };
//   }

//   describe("Deployment", function () {
//     it("Should initialize player positions to 0", async function () {
//       const { ludo } = await loadFixture(deployLudoFixture);

//       // Expect all players' initial positions to be 0
//       expect(await ludo.getPlayerPosition(0)).to.equal(0); // Red
//       expect(await ludo.getPlayerPosition(1)).to.equal(0); // Blue
//       expect(await ludo.getPlayerPosition(2)).to.equal(0); // Green
//       expect(await ludo.getPlayerPosition(3)).to.equal(0); // Yellow
//     });
//   });

//   describe("Dice Rolling and Player Movement", function () {
//     it("Should move player after rolling dice", async function () {
//       const { ludo, playerRed } = await loadFixture(deployLudoFixture);

//       // Roll the dice and move the Red player
//       await ludo.connect(playerRed).movePlayer(0); // Player.RED

//       // Check that the player position has changed
//       const position = await ludo.getPlayerPosition(0); // Red player's position
//       expect(position).to.be.gt(0); // Should be greater than 0 after moving
//     });

//     it("Should keep player position within the board size", async function () {
//       const { ludo, playerRed } = await loadFixture(deployLudoFixture);

//       // Simulate multiple moves for Red player
//       for (let i = 0; i < 10; i++) {
//         await ludo.connect(playerRed).movePlayer(0); // Player.RED
//       }

//       // Player position should always be less than or equal to BOARD_SIZE (40)
//       const position = await ludo.getPlayerPosition(0);
//       expect(position).to.be.lte(40);
//     });
//   });

//   describe("Game Completion", function () {
//     it("Should mark player as completed when reaching the board size", async function () {
//       const { ludo, playerRed } = await loadFixture(deployLudoFixture);

//       // Move Red player to complete the game
//       while (await ludo.getPlayerPosition(0) < 40) {
//         await ludo.connect(playerRed).movePlayer(0);
//       }

//       const hasCompleted = await ludo.hasCompleted(0); // Player.RED
//       expect(hasCompleted).to.equal(true);
//     });
//   });
// });
