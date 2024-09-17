// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Ludo {
    enum Player { NONE, RED, BLUE, GREEN, YELLOW }

    // Board size and player positions
    uint8 constant BOARD_SIZE = 40;
    mapping(Player => uint8) public playerPositions;
    mapping(Player => bool) public hasCompleted;

    // Events for game actions
    event PlayerMoved(Player player, uint8 newPosition);

    constructor() {
        // Initialize player positions
        playerPositions[Player.RED] = 0;
        playerPositions[Player.BLUE] = 0;
        playerPositions[Player.GREEN] = 0;
        playerPositions[Player.YELLOW] = 0;
    }

    // Function to roll the dice
    function rollDice(uint8 seed) internal view returns (uint8) {
        uint8 diceResult = (uint8(block.timestamp) + seed) % 6 + 1;
        return diceResult;
    }

    // Function to move a player
    function movePlayer(Player player) external {
        require(player != Player.NONE, "Invalid player");
        require(!hasCompleted[player], "Player has already completed the game");

        uint8 diceResult = rollDice(playerPositions[player]);
        uint8 newPosition = playerPositions[player] + diceResult;

        // Check if player completes a round
        if (newPosition >= BOARD_SIZE) {
            hasCompleted[player] = true;
            newPosition -= BOARD_SIZE;
        }

        playerPositions[player] = newPosition;

        emit PlayerMoved(player, newPosition);
    }

    // Function to get current position of a player
    function getPlayerPosition(Player player) external view returns (uint8) {
        return playerPositions[player];
    }
}
// LudoModule#Ludo - 0xa464Ec98437e1A813D8E8d4c5e4e9BAf76482b79