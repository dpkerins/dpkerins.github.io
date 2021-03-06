// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkLgYm_g1UN-3z__g5V52B2Du2TRqqdJU",
  authDomain: "personalsites-80989.firebaseapp.com",
  databaseURL: "https://personalsites-80989.firebaseio.com",
  storageBucket: "personalsites-80989.appspot.com",
};
firebase.initializeApp(config);




angular.module('ngScrollTo', []);

angular.module('ngScrollTo')
  .directive('scrollTo', ['ScrollTo', function(ScrollTo){
    return {
      restrict : "AC",
      compile : function(){
        
        return function(scope, element, attr) {
          element.bind("click", function(event){
            ScrollTo.idOrName(attr.scrollTo, attr.offset);
          });
        };
      }
    };
  }])
  .service('ScrollTo', ['$window', 'ngScrollToOptions', function($window, ngScrollToOptions) {

    this.idOrName = function (idOrName, offset, focus) {//find element with the given id or name and scroll to the first element it finds
        var document = $window.document;
        
        if(!idOrName) {//move to top if idOrName is not provided
          $window.scrollTo(0, 0);
        }

        if(focus === undefined) { //set default action to focus element
            focus = true;
        }

        //check if an element can be found with id attribute
        var el = document.getElementById(idOrName);
        if(!el) {//check if an element can be found with name attribute if there is no such id
          el = document.getElementsByName(idOrName);

          if(el && el.length)
            el = el[0];
          else
            el = null;
        }

        if(el) { //if an element is found, scroll to the element
          if (focus) {
              el.focus();
          }

          ngScrollToOptions.handler(el, offset);
        }
        
        //otherwise, ignore
      }

  }])
  .provider("ngScrollToOptions", function() {
    this.options = {
      handler : function(el, offset) {
        if (offset) {
          var top = $(el).offset().top - offset;
          window.scrollTo(0, top);
        }
        else {
          el.scrollIntoView();
        }
      }
    };
    this.$get = function() {
      return this.options;
    };
    this.extend = function(options) {
      this.options = angular.extend(this.options, options);
    };
  });


  var app = angular.module('PortfolioApp', ['ngRoute', 'firebase', 'ngScrollTo']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeController'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioController'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        controller: 'AboutMeController'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuController'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });  



