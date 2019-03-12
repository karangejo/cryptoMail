pragma solidity ^0.5.0;

contract MailBoxFactory {
    address[] public mailboxes;
    string[] public usernames;
    string[] public publicKeys;

    function createMailBox(string memory _userName, string memory _publicKey) public {
        address newMailBox = address(new MailBox(_publicKey,_userName,msg.sender));
        mailboxes.push(newMailBox);
        usernames.push(_userName);
        publicKeys.push(_publicKey);
    }

    function getDeployedMailBoxes() public view returns (address[] memory){
        return mailboxes;
    }

}

contract MailBox {
    string[] public mailbox;
    uint public numberOfMessages = 0;
    string public publicKey;
    string public userName;
    address public me;
    mapping(address=>bool) public trustedConnections;
    address[] public myTrustedConnections;
    address[] public myTrustedMailboxes;
    string[] public myTrustedPublicKeys;
    address public pendingTrustedConnections;
    address public pendingTrustedMailboxes;
    string public pendingTrustedPublicKeys;

    constructor(string memory _publicKey,string memory _userName, address _me) public {
        publicKey = _publicKey;
        userName = _userName;
        me = _me;
    }

    modifier pendingEmpty() {
        require(pendingTrustedConnections == address(0));
        _;
    }

    function connectWithMe(string memory _publicKey, address  _mailboxAddress) public pendingEmpty {
        pendingTrustedConnections = msg.sender;
        pendingTrustedMailboxes = _mailboxAddress;
        pendingTrustedPublicKeys = _publicKey;
    }

    modifier onlyMe() {
        require(msg.sender == me);
        _;
    }

    function approveConnection() public onlyMe {
        myTrustedConnections.push(pendingTrustedConnections);
        myTrustedMailboxes.push(pendingTrustedMailboxes);
        myTrustedPublicKeys.push(pendingTrustedPublicKeys);
        trustedConnections[pendingTrustedConnections] = true;
    }

    function disapproveConnection() public onlyMe {
        pendingTrustedConnections = address(0);
        pendingTrustedMailboxes = address(0);
        pendingTrustedPublicKeys = '';
    }

    modifier onlyTrusted() {
        require(trustedConnections[msg.sender]);
        _;
    }

    function sendMessage(string memory _message) public onlyTrusted {
        mailbox.push(_message);
        numberOfMessages = mailbox.length;
    }

    function deleteMessage() public onlyMe {
        delete mailbox[mailbox.length-1];
        mailbox.length--;
        numberOfMessages = mailbox.length;

    }

    function getMyTrustedConnections() public view onlyMe returns (address[] memory) {
        return myTrustedConnections;
    }

    function getMyTrustedMailBoxes() public view onlyMe returns (address[] memory) {
        return myTrustedMailboxes;
    }

}
