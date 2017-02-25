angular.module('directives').directive('confirmationModal', function() {
  //camel case required on js library, converts to snake case
  return {
    // template: '<h1>Hello World</h1>',
    templateUrl: 'views/template.html',
    scope: {
      title:'=',
      message:'=', //= >> Bound, @ >> direct string, & >> function
      cancelClickHandler: '&',
      confirmClickHandler: '&'
    }
  }
})
