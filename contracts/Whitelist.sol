// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Whitelist {
    uint8 maxListedAddresses;

    uint8 numWhiteListedAddresses;

    mapping(address => bool) public whiteListedAddresses;

    constructor(uint8 _maxListedAddresses) {
        maxListedAddresses = _maxListedAddresses;
    }
}
