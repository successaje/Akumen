// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract UserManager {
    
    struct User {
        string username;
        string bio;
        string profilePicture;
        address[] friends;
        address[] followers;
        address[] subscriptions;
    }

    mapping(address => User) private users;
    mapping(address => bool) private registered;

    modifier onlyRegistered() {
        require(registered[msg.sender], "User not registered");
        _;
    }

    function registerUser(string memory username, string memory bio, string memory profilePicture) public returns (bool) {
        require(!registered[msg.sender], "User already registered");
        User storage newUser = users[msg.sender];
        newUser.username = username;
        newUser.bio = bio;
        newUser.profilePicture = profilePicture;
        registered[msg.sender] = true;
        return true;
    }

    function updateProfile(string memory newBio, string memory newProfilePicture) public onlyRegistered returns (bool) {
        User storage user = users[msg.sender];
        user.bio = newBio;
        user.profilePicture = newProfilePicture;
        return true;
    }

    function addFriend(address friendAddress) public onlyRegistered returns (bool) {
        require(registered[friendAddress], "Friend not registered");
        User storage user = users[msg.sender];
        user.friends.push(friendAddress);
        return true;
    }

    function removeFriend(address friendAddress) public onlyRegistered returns (bool) {
        User storage user = users[msg.sender];
        for (uint i = 0; i < user.friends.length; i++) {
            if (user.friends[i] == friendAddress) {
                user.friends[i] = user.friends[user.friends.length - 1];
                user.friends.pop();
                break;
            }
        }
        return true;
    }

    function followUser(address contentCreator) public onlyRegistered returns (bool) {
        require(registered[contentCreator], "Content creator not registered");
        User storage user = users[msg.sender];
        user.followers.push(contentCreator);
        return true;
    }

    function unfollowUser(address contentCreator) public onlyRegistered returns (bool) {
        User storage user = users[msg.sender];
        for (uint i = 0; i < user.followers.length; i++) {
            if (user.followers[i] == contentCreator) {
                user.followers[i] = user.followers[user.followers.length - 1];
                user.followers.pop();
                break;
            }
        }
        return true;
    }

    // Additional functions for managing subscriptions can be added similarly.
}