// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract ChessGame {


    struct ChessMatch {
        uint256 matchId;
        address[2] players;
        uint256 startTime;
        uint256 endTime;
        string moves;
        bool isActive;
        // string matchURI;
    }

    uint256 public nextMatchId;
    mapping(uint256 => ChessMatch) public matches;
    mapping(address => uint256[]) public playerMatches;

    event MatchCreated(uint256 matchId, address player1, address player2, uint256 startTime);
    event MoveMade(uint256 matchId, string moves);
    event MatchEnded(uint256 matchId, uint256 endTime);

    constructor() {
        nextMatchId = 1;
    }

    function createMatch(address _opponent) public {
        matches[nextMatchId] = ChessMatch({
            matchId: nextMatchId,
            players: [msg.sender, _opponent],
            startTime: block.timestamp,
            endTime: 0,
            moves: "",
            isActive: true
            // matchURI : _matchURI
        });

        playerMatches[msg.sender].push(nextMatchId);
        playerMatches[_opponent].push(nextMatchId);

        emit MatchCreated(nextMatchId, msg.sender, _opponent, block.timestamp);

        nextMatchId++;
    }

    function makeMove(uint256 _matchId, string memory _moves) public {
        require(matches[_matchId].isActive, "Match is not active");
        require(msg.sender == matches[_matchId].players[0] || msg.sender == matches[_matchId].players[1], "Not a player in this match");

        matches[_matchId].moves = _moves;

        emit MoveMade(_matchId, _moves);
    }

    function endMatch(uint256 _matchId) public {
        require(matches[_matchId].isActive, "Match is not active");
        require(msg.sender == matches[_matchId].players[0] || msg.sender == matches[_matchId].players[1], "Not a player in this match");

        matches[_matchId].isActive = false;
        matches[_matchId].endTime = block.timestamp;

        emit MatchEnded(_matchId, block.timestamp);
    }

    function getMatchDetails(uint256 _matchId) public view returns (ChessMatch memory) {
        return matches[_matchId];
    }

    function getPlayerMatches(address _player) public view returns (uint256[] memory) {
        return playerMatches[_player];
    }
}