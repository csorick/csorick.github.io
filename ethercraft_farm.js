

var farmerClient = (function() {
  //var farmers = document.getElementsByClassName("farmer-screen");
  //var inventories = document.getElementsByClassName("withdraw-screen");
var farm_help = document.getElementsByClassName("withdraw-screen");

var helper = false;

var items = document.getElementsByClassName("checker");
var amounts = document.getElementsByClassName("farm-count");
var inventories = document.getElementsByClassName("total");
console.log(inventories);

var farmerContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"shop_addresses","type":"address[]"},{"name":"buy_amounts","type":"uint256[]"}],"name":"farmItems2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"shops","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shop_addresses","type":"address[]"},{"name":"token_addresses","type":"address[]"}],"name":"set_Shops","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shop_addresses","type":"address[]"}],"name":"initialBuy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"total_buy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token_addresses","type":"address[]"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokenInventory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shop_addresses","type":"address[]"},{"name":"buy_amounts","type":"uint256[]"}],"name":"farmItems","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"buy_val","type":"uint256"}],"name":"set_Total","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gas_val","type":"uint256"}],"name":"set_Gas","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shop_addresses","type":"address[]"},{"name":"buy_amounts","type":"uint256[]"}],"name":"backupfarmItems","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gas_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]);
var farmer = farmerContract.at('0x06050D23DdC685c9E695216B7229ceD5d85d6923');
//console.log("this is farmer");
//console.log(farmer);




setTimeout(function(){ 
  var farmbutton = document.getElementById("farmbutton");
  var checks = document.getElementsByClassName("checkmark");
  for (var j = 0; j < checks.length; j++){     
    checks[j].addEventListener("click", function(){
      farmerClient.getFarms()
    });
  }
}, 500);
 
 return {
    /*swapInv: function () {
      for (var i = 0; i < farmers.length; i++) {
        farmers[i].style.display = "none";
      }
      for (var i = 0; i < inventories.length; i++) {
        inventories[i].style.display = "block";
      }
    },

    swapFarm: function () {
      for (var i = 0; i < farmers.length; i++) {
        farmers[i].style.display = "inline-block";
      }
      for (var i = 0; i < inventories.length; i++) {
        inventories[i].style.display = "none";
      }
    },*/

    showHelper: function () {
      if(helper == false){ 
        for (var i = 0; i < farm_help.length; i++) {
          farm_help[i].style.display = "block";
        }
        helper = true;
      }
      else if(helper == true){
        for (var i = 0; i < farm_help.length; i++) {
          farm_help[i].style.display = "none";
        }
        helper = false;
      }
    },

    getFarms: function () {    
      setTimeout(function(){  
        var shopAddrs = new Array();
        var buyAmounts = new Array();
        var total = 0;

        for (var i = 0; i < items.length; i++){
            if(items[i].checked){            
              if(!amounts[i].value){
                total+=0;
                console.log(items[i].value + "is undefined");
              }
              else if(amounts[i].value > 0){
                total += parseInt(amounts[i].value);
                shopAddrs.push(items[i].value.substring(0,42));
                buyAmounts.push(parseInt(amounts[i].value));
              }
            }
        }

        if(total > 150)
          farmbutton.style.backgroundColor = "red";
        else{
          farmbutton.style.backgroundColor ="rgb(230, 230, 230)";
        }
        console.log(shopAddrs);
        console.log(buyAmounts);
        console.log(total);
      }, 100);
    },

    getWithdraws: function () {    
      setTimeout(function(){  
        //var items = document.getElementsByClassName("checker");
        //var amounts = document.getElementsByClassName("farm-count");
        var tokenAddrs = new Array();

        for (var i = 0; i < items.length; i++){
            if(items[i].checked){                        
              tokenAddrs.push(items[i].value.substring(42,84));             
            }
        }      
        
        console.log(tokenAddrs);
        
      }, 100);
      return tokenAddrs;
    },

    testsend1: function (){

      var txItems = "";
      var txAmounts = "";     
          //var items = document.getElementsByClassName("checker");
          //var amounts = document.getElementsByClassName("farm-count");
      var shopAddrs = new Array();
      var buyAmounts = new Array();
      var total = 0;

      for (var i = 0; i < items.length; i++){
          if(items[i].checked){            
            if(!amounts[i].value){
              total+=0;
              console.log(items[i].value + "is undefined");
            }
            else if(amounts[i].value > 0){
              total += parseInt(amounts[i].value);
              shopAddrs.push(items[i].value.substring(0,42));
              buyAmounts.push(parseInt(amounts[i].value));
            }
          }
      }

      if(total > 150)
        farmbutton.style.backgroundColor = "red";
      else{
        farmbutton.style.backgroundColor ="rgb(230, 230, 230)";
      }
        //console.log(shopAddrs);
        //console.log(buyAmounts);
        //console.log(total);
      for(var i = 0; i < shopAddrs.length; i++)
      {
          txItems += shopAddrs[i] + " ";
          txAmounts += buyAmounts[i] + " ";
      }       

      console.log(txItems);
      console.log(txAmounts);
      console.log(farmer);


      farmer.backupfarmItems(shopAddrs, buyAmounts, function(error){
        if(!error)
            console.log("tx worked");
        else
            console.error(error);
      });
    },

  getInventories: function (){
    var inventory = 0;
    var tokensT = new Array();
    tokensT = farmerClient.getWithdraws();
    
    for (var i = 0; i < inventories.length;){
      //farmer.total_buy.call(function(err,res){console.log(res)});
      /*farmer.tokenInventory("0xf55B92b635bb745F65Be9f9E84a5509905298aAF","0x9c10e2c8c583e74f3513cce5d68cb6d162a8062e", function(errors,res)
      {
        console.log(res);
      });*/
      console.log(tokensT[i]);
      inventories[i].set
    }
    
  }

}


})();

