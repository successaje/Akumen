// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract GameManager {

    
    struct Game {
        uint256 gameId;
        address player1;
        address player2;
        string gameType; // e.g., "chess"
        uint256 startTime;
        uint256 endTime;
        string[] moves;
        bool isActive;
        address winner;
    }

    uint256 public nextGameId;
    mapping(uint256 => Game) public games;
    mapping(address => uint256[]) public playerGames;

    event GameCreated(uint256 gameId, address player1, string gameType, uint256 startTime);
    event GameJoined(uint256 gameId, address player2);
    event MoveMade(uint256 gameId, address player, string move);
    event GameEnded(uint256 gameId, address winner, uint256 endTime);

    constructor() {
        nextGameId = 1;
    }

    function createGame(string memory _gameType) public {
        string[] memory empty; 

        games[nextGameId] = Game({
            gameId: nextGameId,
            player1: msg.sender,
            player2: address(0),
            gameType: _gameType,
            startTime: block.timestamp,
            endTime: 0,
            moves: empty,
            isActive: true,
            winner: address(0)
        });

        playerGames[msg.sender].push(nextGameId);

        emit GameCreated(nextGameId, msg.sender, _gameType, block.timestamp);

        nextGameId++;
    }

    function joinGame(uint256 _gameId) public {
        require(games[_gameId].isActive, "Game is not active");
        require(games[_gameId].player2 == address(0), "Game already has two players");
        
        games[_gameId].player2 = msg.sender;
        playerGames[msg.sender].push(_gameId);

        emit GameJoined(_gameId, msg.sender);
    }

    function makeMove(uint256 _gameId, string memory _move) public {
        require(games[_gameId].isActive, "Game is not active");
        require(msg.sender == games[_gameId].player1 || msg.sender == games[_gameId].player2, "Only players can make moves");

        games[_gameId].moves.push(_move);

        emit MoveMade(_gameId, msg.sender, _move);
    }

    function endGame(uint256 _gameId, address _winner) public {
        require(games[_gameId].isActive, "Game is not active");
        require(msg.sender == games[_gameId].player1 || msg.sender == games[_gameId].player2, "Only players can end the game");

        games[_gameId].isActive = false;
        games[_gameId].endTime = block.timestamp;
        games[_gameId].winner = _winner;

        emit GameEnded(_gameId, _winner, block.timestamp);
    }

    function getGameDetails(uint256 _gameId) public view returns (Game memory) {
        return games[_gameId];
    }

    function getPlayerGames(address _player) public view returns (uint256[] memory) {
        return playerGames[_player];
    }
}