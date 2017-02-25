angular.module('directives').controller('mainCtrl', function($scope) {
  $scope.test = "Test";
  $scope.modalTitle = "Confirmation Modal";
  $scope.modal2Title = "Confirmation Modal 2";
  $scope.modalMessage = "Are you sure you want to continue?";
  $scope.modal2Message = "This will be really bad.  Are you sure you want to continue?";

  $scope.modalConfirm = function() {
    alert('confirm');
  }

  $scope.modalCancel = function() {
    alert('cancel')
  }
})
