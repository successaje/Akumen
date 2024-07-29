// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract StreamingManager {
    
    struct Stream {
        uint256 streamId;
        address contentCreator;
        string title;
        string description;
        uint256 startTime;
        uint256 endTime;
        bool isActive;
        address[] viewers;
        address[] subscribers;
    }

    uint256 public nextStreamId;
    mapping(uint256 => Stream) public streams;
    mapping(address => uint256[]) public creatorStreams;
    mapping(address => uint256[]) public viewerStreams;
    mapping(address => uint256[]) public subscriberStreams;

    event StreamCreated(uint256 streamId, address contentCreator, string title, uint256 startTime);
    event ViewerAdded(uint256 streamId, address viewer);
    event SubscriberAdded(uint256 streamId, address subscriber);
    event StreamEnded(uint256 streamId, uint256 endTime);

    constructor() {
        nextStreamId = 1;
    }

    function createStream(string memory _title, string memory _description) public {

        address[] memory emptyAddressArray;

        streams[nextStreamId] = Stream({
            streamId: nextStreamId,
            contentCreator: msg.sender,
            title: _title,
            description: _description,
            startTime: block.timestamp,
            endTime: 0,
            isActive: true,
            viewers: emptyAddressArray,
            subscribers: emptyAddressArray  
        });

        creatorStreams[msg.sender].push(nextStreamId);

        emit StreamCreated(nextStreamId, msg.sender, _title, block.timestamp);

        nextStreamId++;
    }

    // 
    function addViewer(uint256 _streamId, address _viewer) public {
        require(streams[_streamId].isActive, "Stream is not active");
        require(msg.sender == streams[_streamId].contentCreator, "Only the content creator can add viewers");

        streams[_streamId].viewers.push(_viewer);
        viewerStreams[_viewer].push(_streamId);

        emit ViewerAdded(_streamId, _viewer);
    }

    function addSubscriber(uint256 _streamId, address _subscriber) public {
        require(streams[_streamId].isActive, "Stream is not active");
        require(msg.sender == streams[_streamId].contentCreator, "Only the content creator can add subscribers");

        streams[_streamId].subscribers.push(_subscriber);
        subscriberStreams[_subscriber].push(_streamId);

        emit SubscriberAdded(_streamId, _subscriber);
    }

    function endStream(uint256 _streamId) public {
        require(streams[_streamId].isActive, "Stream is not active");
        require(msg.sender == streams[_streamId].contentCreator, "Only the content creator can end the stream");

        streams[_streamId].isActive = false;
        streams[_streamId].endTime = block.timestamp;

        emit StreamEnded(_streamId, block.timestamp);
    }

    function getStreamDetails(uint256 _streamId) public view returns (Stream memory) {
        return streams[_streamId];
    }

    function getCreatorStreams(address _creator) public view returns (uint256[] memory) {
        return creatorStreams[_creator];
    }

    function getViewerStreams(address _viewer) public view returns (uint256[] memory) {
        return viewerStreams[_viewer];
    }

    function getSubscriberStreams(address _subscriber) public view returns (uint256[] memory) {
        return subscriberStreams[_subscriber];
    }
}