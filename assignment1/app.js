(function(){
'use strict';

angular.module('CheckLunch',[])
.controller('CheckLunchController', CheckLunchController);

CheckLunchController.$inject = ['$scope'];
function CheckLunchController($scope) {
    $scope.lunch= "";
    $scope.howmuch="Waiting for input...";

    $scope.check = function(){
        
        const splited = $scope.lunch.split(',');
        var howmuch ="";

        if($scope.lunch==''){
    
            howmuch= "error!";
                   
            }else if (splited.length>=5){
                howmuch = "Too much!"
            }else if(splited.length<=4){
                howmuch = "Enjoy!"
            }

        $scope.howmuch= howmuch;


    }




}

})();