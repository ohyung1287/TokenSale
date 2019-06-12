pragma solidity ^0.5.0;
import './Libs/Ownable.sol';
import './Libs/SafeMath.sol';
import "./Token.sol";

contract Sale is Ownable{
    Token public tokenContract;
    uint256 public tokenPrice=1000;//000000000000;//0.001eth
    uint256 public tokensSold;

    using SafeMath for uint256;

    event Sell(address _buyer, uint256 _amount);

    constructor (Token _tokenContract)public{
        tokenContract = _tokenContract;
    }
    function onlyForTest() public payable returns(uint){
        return tokenContract.balanceOf(_owner);
    }
    function buyTokens(uint256 _numberOfTokens) public payable {
        //msg.value == _numberOfTokens.mul(tokenPrice)
        if(tokenContract.balanceOf(_owner) >= _numberOfTokens){
            tokenContract.transfer(msg.sender, _numberOfTokens);
            tokensSold+=_numberOfTokens;
            emit Sell(msg.sender, _numberOfTokens);
        }
    }

}
