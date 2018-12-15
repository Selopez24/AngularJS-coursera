(function(){
'use strict';

angular.module('CheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var buy = this;

    buy.tobuy = ShoppingListCheckOffService.getToBuy();

    buy.boughtItem = function(itemIndex){
        ShoppingListCheckOffService.boughtItem(itemIndex);
    };
    


};



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.bought = ShoppingListCheckOffService.getBought();

};


function ShoppingListCheckOffService(){
    var service = this;

    var tobuy = [
        {name:"cookies", quantity: 10},
        {name:"milk", quantity:2},
        {name:"chocolate", quantity:3},
        {name:"chocoearly", quantity:0},
        {name:"bread", quantity:1}
    ];

    var bought = [];

    service.getBought = function(){
        return bought;
    }

    service.getToBuy = function () {
        return tobuy;
    };


    service.boughtItem = function(itemIndex){
        
        var addItem = tobuy.splice(itemIndex,1)[0];

        bought.push(addItem);

    }

}



})();