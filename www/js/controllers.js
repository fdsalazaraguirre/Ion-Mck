angular.module('starter.controllers', [])
.controller('MainCtrl',function($scope,$ionicSideMenuDelegate){
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft()
  }
})
.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  };
}])
.filter("linktype",function(){
  return function(type){
 switch(type){
  case 1:
  return "http://www.mckissock.com/commonimages/searchcourses/manditory.gif";
  break;
  case 2:
  return "http://www.mckissock.com/commonimages/searchcourses/elective.gif";
  break;
  case 3:
  return "http://www.mckissock.com/commonimages/searchcourses/noncredit.gif";
  break;
  case 4:
  return "http://www.mckissock.com/CommonImages/searchcourses/firsttimerenewal.gif";
  break;
  case 5:
  return "http://www.mckissock.com/CommonImages/searchcourses/testprep.gif";
  break;
  default:
  return "http://www.mckissock.com//CommonImages/searchcourses/badge_table.png";
  break;
    };
  }
})
.filter("linkstars",function(){
  return function(stars){
  switch(stars){
    case 1:
    return "http://www.mckissock.com/CommonImages/Star_empty2.gif";
    break;
    case 2:
    return "http://www.mckissock.com/CommonImages/Star_empty2.gif";
    break;
    case 3:
    return "http://www.mckissock.com/CommonImages/Star_full2.gif";
    break;
    case 4:
    return "http://www.mckissock.com/CommonImages/Star_full2.gif";
    break;
    case 5:
    return "http://www.mckissock.com/CommonImages/Star_full2.gif";
    break;
    default:
    return "http://www.mckissock.com/CommonImages/Star_empty2.gif";
    break;
  }
};
})
.controller('CorrespondenceCtrl', function($scope,Courses) {
    $scope.courses = Courses.all();


})

.controller('CoursesCtrl', function($scope, Courses) {
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
