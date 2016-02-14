angular.module('starter.controllers', [])
.controller('MainCtrl',function($scope,$ionicSideMenuDelegate){
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft()
  }
})
.controller('DashCtrl', function($scope) {})

.controller('CoursesCtrl', function($scope, Courses) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.courses = Courses.all();
  $scope.remove = function(course) {
    Courses.remove(course);
  };
})

.controller('CourseDetailCtrl', function($scope, $stateParams, Courses) {
  $scope.course = Courses.get($stateParams.courseId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
