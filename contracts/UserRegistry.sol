// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UserRegistry {
    struct User {
       string name;
       uint256 age;
       bool exists;
    }

    mapping(address => User) public users; 
    address[] public userList;

    function register(string calldata _name, uint256 _age) external {
        if (users[msg.sender].exists){
            revert("User already registered");
        }
        users[msg.sender] = User({
            name: _name,
            age: _age,
            exists: true
        });
        userList.push(msg.sender);
    }

    function getUserCount() external view returns (uint256){
        return userList.length;
    }

    function getUserByIndex(uint256 index) external view returns (address){
        return userList[index];
    }

    function isRegistered(address user) external view returns (bool) {
        return users[user].exists;
    }
}