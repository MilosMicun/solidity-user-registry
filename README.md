# Solidity User Registry

Protocol-grade smart contract implementing a user registry using Solidity and Hardhat.

This project demonstrates correct storage architecture using mapping + array pattern, which is standard in real blockchain protocols.

---

## Features

- O(1) user lookup using mapping(address => User)
- User enumeration using address array
- Struct-based storage design
- Duplicate registration protection
- Full test coverage using Hardhat

---

## Storage Architecture

mapping(address => User) users → fast lookup  
address[] userList → enumeration  

This pattern allows efficient storage and scalable access.

---

## Smart Contract Functions

register(string name, uint256 age)  
Registers new user and stores data in mapping and array

getUserCount()  
Returns total number of users

getUserByIndex(uint256 index)  
Returns user address by index

isRegistered(address user)  
Checks if address is registered

---

## Tech Stack

Solidity ^0.8.20  
Hardhat  
Ethers.js  
Mocha / Chai  

---

## Run Tests

```bash
npx hardhat test
Purpose
This project is part of Solidity core learning path focused on:

storage layout

mappings

structs

state management

protocol-level smart contract design