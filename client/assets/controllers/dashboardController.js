//  *****************************************  //
//  *                                       *  //
//  *           DASHBOARD CONTROLLER        *  //
//  *                                       *  //
//  *****************************************  //

app.controller('dashboardController', ['$scope', '$location', 'usersFactory', 'questionsFactory', function($scope, $location, usersFactory, questionsFactory) {

// TEST FOR ANGULAR =========================================================================
    $scope.test = "This Angular Thing Working?";

// GET CURRENT USER =======================================================================
    var getCurrentUser = function(){
        usersFactory.getCurrentUser(function(user){
            $scope.current_user = user;
            // console.log("**** Now useable as $scope variable", user);
        })
    };
    getCurrentUser();

    var getAllQuestions = function(){
        questionsFactory.getAllQuestions(function(questions){
            $scope.allQuestions = questions;
        })
    }
    getAllQuestions();

// LOG OUT A USER ==========================================================================
    $scope.logout = function() {
        // console.log("***************** Got to CLIENT dashboardController.js logoutUser");
        usersFactory.logout(function(){
            $location.url('/login')
        });
    };
}]);
