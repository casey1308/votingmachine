pragma solidity ^0.8.0;

contract VotingContract {
    mapping(string => uint256) public votes;

    event VoteCast(address indexed voter, string candidate);

    function vote(string memory candidate) public {
        // Increment the vote count for the specified candidate
        votes[candidate]++;

        // Emit an event to notify that a vote has been casted
        emit VoteCast(msg.sender, candidate);
    }
}
