// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract UserProfile is ERC721, Ownable {

//     struct VideoData {
//         string name;
//         string videoURL;
//         string description;
//         bool hidden;
//     }

//     struct GameData {
//         uint256 gameId;
//         string gameName;
//         address[] players;
//     }

//     string public profileName;
//     string public profileDescription;

//     uint public tokenIdNumber;
//     uint public amountPublishedVideos;
//     uint public bronzeSubscription;
//     uint public silverSubscription;
//     uint public goldSubscription;
//     uint public subscriptionFee;
//     uint public amountCreator;
//     uint public totalDonated;

//     VideoData[] public publishedVideos;
//     mapping(string => uint) public videosIndex;

//     uint public gameCount;
//     mapping(uint => GameData) public games;

//     constructor(
//         string memory _tokenName,
//         string memory _tokenSymbol,
//         address _sender,
//         string memory _name,
//         string memory _description,
//         uint _bronzeSubscription,
//         uint _silverSubscription,
//         uint _goldSubscription,
//         uint _subscriptionFee
//     ) ERC721(_tokenName, _tokenSymbol) {
//         _transferOwnership(_sender);
//         profileName = _name;
//         profileDescription = _description;
//         bronzeSubscription = _bronzeSubscription * 1e6;
//         silverSubscription = _silverSubscription * 1e6;
//         goldSubscription = _goldSubscription * 1e6;
//         subscriptionFee = _subscriptionFee;
//     }

//     function subscribe(address to, uint subscriptionLevel) public payable {
//         uint subscriptionAmount;
//         if (subscriptionLevel == 1) {
//             subscriptionAmount = bronzeSubscription;
//         } else if (subscriptionLevel == 2) {
//             subscriptionAmount = silverSubscription;
//         } else if (subscriptionLevel == 3) {
//             subscriptionAmount = goldSubscription;
//         } else {
//             revert("Invalid subscription level");
//         }

//         require(msg.value >= subscriptionAmount, "Insufficient funds for subscription");

//         uint fee = (msg.value * subscriptionFee) / 100;
//         uint creatorAmount = msg.value - fee;

//         tokenIdNumber += 1;
//         _safeMint(to, tokenIdNumber);
//         amountCreator += creatorAmount;
//     }

//     function donate() public payable {
//         amountCreator += msg.value;
//         totalDonated += msg.value;
//     }

//     function addVideo(string memory _name, string memory _videoURL, string memory _description) public onlyOwner {
//         require(videosIndex[_videoURL] == 0, "Video already exists");
//         amountPublishedVideos += 1;
//         videosIndex[_videoURL] = amountPublishedVideos;
//         publishedVideos.push(VideoData(_name, _videoURL, _description, false));
//     }

//     function withdrawAmount() public onlyOwner {
//         address owner = owner();
//         payable(owner).transfer(amountCreator);
//         amountCreator = 0;
//     }

//     function getVideosData() public view returns (VideoData[] memory) {
//         return publishedVideos;
//     }

//     function hideVideo(string memory _videoUrl) public onlyOwner {
//         uint _videoIndex = videosIndex[_videoUrl];
//         require(_videoIndex > 0, "Video does not exist");
//         publishedVideos[_videoIndex - 1].hidden = true;
//     }

//     function showVideo(string memory _videoUrl) public onlyOwner {
//         uint _videoIndex = videosIndex[_videoUrl];
//         require(_videoIndex > 0, "Video does not exist");
//         publishedVideos[_videoIndex - 1].hidden = false;
//     }

//     function getProfileData() external view returns (string memory, string memory, uint, uint, uint, uint) {
//         return (profileName, profileDescription, tokenIdNumber, amountPublishedVideos, amountCreator, totalDonated);
//     }

//     function createGame(string memory _gameName) public onlyOwner {
//         gameCount += 1;
//         GameData storage newGame = games[gameCount];
//         newGame.gameId = gameCount;
//         newGame.gameName = _gameName;
//         newGame.players.push(msg.sender);
//     }

//     function joinGame(uint _gameId) public {
//         require(_gameId > 0 && _gameId <= gameCount, "Invalid game ID");
//         games[_gameId].players.push(msg.sender);
//     }

//     function getGameData(uint _gameId) public view returns (string memory, address[] memory) {
//         require(_gameId > 0 && _gameId <= gameCount, "Invalid game ID");
//         GameData storage game = games[_gameId];
//         return (game.gameName, game.players);
//     }
// }
