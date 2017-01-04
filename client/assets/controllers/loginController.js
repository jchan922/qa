//  *****************************************  //
//  *                                       *  //
//  *           LOGIN CONTROLLER            *  //
//  *                                       *  //
//  *****************************************  //

app.controller('loginController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory) {

// TEST FOR ANGULAR =======================================================================
    $scope.test = "This Angular Thing Working?";

// REGISTER A USER ========================================================================
    $scope.registerUser = function() {
        // console.log("***************** Got to CLIENT loginController.js registerUser".green);
        usersFactory.register($scope.regUser, function(returnDataFromFactory){
            // console.log(returnDataFromFactory);
            if(returnDataFromFactory.hasOwnProperty('errors')){
                $scope.regErrors = returnDataFromFactory.errors;
                $scope.regUser = {};
            } else {
                $location.url('/dashboard')
            }
        });
    };

// LOG IN A USER ==========================================================================
    $scope.loginUser = function() {
        // console.log("***************** Got to CLIENT loginController.js loginUser".green);
        // console.log($scope.loginUserAttempt);
        usersFactory.login($scope.loginUserAttempt, function(returnDataFromFactory){
            // console.log(returnDataFromFactory);
            if(returnDataFromFactory.hasOwnProperty('errors')){
                $scope.loginErrors = returnDataFromFactory.errors;
                $scope.loginUserAttempt = {};
            } else {
                $location.url('/dashboard')
            }
        });
    };

// LOG OUT A USER ==========================================================================
    $scope.logout = function() {
        console.log("***************** Got to CLIENT loginController.js logoutUser");
        usersFactory.logout(function(){
            $location.url('/login')
        });
    };

}]);