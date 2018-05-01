

var farmerClient = (function() {
  //var farmers = document.getElementsByClassName("farmer-screen");
  //var inventories = document.getElementsByClassName("withdraw-screen");
var farm_help = document.getElementsByClassName("withdraw-screen");

var helper = false;

var items = document.getElementsByClassName("checker");
var amounts = document.getElementsByClassName("farm-count");
var inventories = document.getElementsByClassName("total");








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
                //console.log(items[i].value + "is undefined");
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
      }, 100);
    },

    getWithdraws: function () {
      var tokenAddrs = new Array();
      for (var i = 0; i < items.length; i++){
          if(items[i].checked){                        
            tokenAddrs.push(items[i].value.substring(42,84));             
          }
      }    
        
      
        
      
      
      //console.log(tokenAddrs);
      farmer.withdrawTokens(tokenAddrs, function(error){
          if(!error)
              console.log("tx worked");
          else
              console.error(error);
        });
      
    },
   
    farmItems: function (){

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
              //console.log(items[i].value + "is undefined");
            }
            else if(amounts[i].value > 0){
              total += parseInt(amounts[i].value);
              shopAddrs.push(items[i].value.substring(0,42));
              buyAmounts.push(parseInt(amounts[i].value));
            }
          }
      }
      if (!shopAddrs.length == 0){
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

        //console.log(txItems);
        //console.log(txAmounts);
        //console.log(farmer);


        farmer.backupfarmItems(shopAddrs, buyAmounts, function(error){
          if(!error)
              console.log("tx worked");
          else
              console.error(error);
        });
      }
      
    },
   
  getTokens: function() {
      var tokenAddrs = new Array();
      setTimeout(function(){               

        for (var i = 0; i < items.length; i++){
            if(items[i]){                        
              tokenAddrs.push(items[i].value.substring(42,84));             
            }
        }            
        
      }, 100);
     return tokenAddrs;
      
    },

getInventories: function(){
        
    setTimeout(function(){
        var tokensT = farmerClient.getTokens();
        //console.log("dog test");
        //console.log(tokensT);
        var addrFinals = new Array();
        setTimeout(function(){
            //console.log("this is individual tokensT" + tokensT[0]);
            
                
            farmer.tokenInventory(web3.eth.defaultAccount,tokensT[0], function(errors, res)
            {
              //console.log("this is inside token amount " + res.c[0]);
              addrFinals.push(res.c[0]);
              inventories[0].innerHTML = res.c[0];
                farmer.tokenInventory(web3.eth.defaultAccount,tokensT[1], function(errors, res)
                {
                  //console.log("this is inside token amount " + res.c[0]);
                  addrFinals.push(res.c[0]);
                    inventories[1].innerHTML = res.c[0];
                    farmer.tokenInventory(web3.eth.defaultAccount,tokensT[2], function(errors, res)
                    {
                      //console.log("this is inside token amount " + res.c[0]);
                        addrFinals.push(res.c[0]);
                        inventories[2].innerHTML = res.c[0];
                        farmer.tokenInventory(web3.eth.defaultAccount,tokensT[3], function(errors, res)
                        {
                          //console.log("this is inside token amount " + res.c[0]);
                          addrFinals.push(res.c[0]);
                            inventories[3].innerHTML = res.c[0];
                            farmer.tokenInventory(web3.eth.defaultAccount,tokensT[4], function(errors, res)
                            {
                              //console.log("this is inside token amount " + res.c[0]);
                              addrFinals.push(res.c[0]);
                                inventories[4].innerHTML = res.c[0];
                                farmer.tokenInventory(web3.eth.defaultAccount,tokensT[5], function(errors, res)
                                {
                                  //console.log("this is inside token amount " + res.c[0]);
                                  addrFinals.push(res.c[0]);
                                    inventories[5].innerHTML = res.c[0];
                                });
                            });
                        });
                    });
                    
                });   
            });                
            
        }, 100); 
        //console.log("this is addr final" + addrFinals);
        
        
    }, 100);          
          
  }

}


})();

