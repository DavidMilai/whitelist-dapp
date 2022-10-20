// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Whitelist {
    uint8 maxListedAddresses;

    uint8 numWhitelistedAddresses;

    mapping(address => bool) public whitelistedAddresses;

    constructor(uint8 _maxListedAddresses) {
        maxListedAddresses = _maxListedAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddresses[msg.sender],
            "SendeAddress is already in the whitelist"
        );
        require(
            numWhitelistedAddresses < maxListedAddresses,
            "Max whitelist addresses has been reached"
        );

        whitelistedAddresses[msg.sender] = true;
        numWhitelistedAddresses += 1;
    }
}
