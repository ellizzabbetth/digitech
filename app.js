	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAria']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/featured', {
				templateUrl : 'pages/featured.html',
				controller  : 'featuredController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			
			// route for the list page
			.when('/list', {
				templateUrl: 'pages/list.html',
				controller: 'listController'
			})
			
			// route for the table page
			.when('/detail/:id/', {
				templateUrl : 'pages/detail.html',
				controller  : 'detailController',
				resolve: {
					load: function ($route, dataService) {
						return dataService.load($route.current.params.id);
					}
				}
			})
			
			.otherwise({
                redirectTo: '/',
                controller: 'homeController'
            });
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('homeController', function($scope) {
		// maps to home.html in index.html
	});

	scotchApp.controller('featuredController', function($scope) {
		$scope.title = 'SpaceX\'s  Dragon';
		$scope.message = 'Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations. Dragon made history in 2012 when it became the first commercial '+
		'spacecraft in history to deliver cargo to the International Space Station and safely return cargo to Earth, a feat previously achieved only by governments. It is the only spacecraft currently flying that is capable of '+
		'returning significant amounts of cargo to Earth. Currently Dragon carries cargo to space, but it was designed from the beginning to carry humans. '+
		'Under an agreement with NASA, SpaceX is now developing the refinements that will enable Dragon to fly crew. Dragon\'s first manned test flight is expected to take place as early as 2018.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.title = 'Innovators'
		$scope.message = 'submit your ideas to show off what you got';
	});
	
	scotchApp.controller('listController', function ($scope, $location, dataService) {
	   $scope.title = 'Contributing Artists';
	   $scope.message = 'better Art through Science';
	   $scope.items = dataService.items;
	   $scope.showform = false;
	   $scope.toggleForm = function() {
		  $scope.showform = !$scope.showform;
	   }
	   $scope.saveContact = function() {
		  if(!$scope.form) return;
		  
		  var contact = {
			 id : $scope.items.length + 1,
			 name : $scope.form.name,
			 email : $scope.form.email,
			 trophies : [
				  {
					 id: 1, type: 'Glassblowing', class: 'Novice', points: 1
				  },
				  {
					 id: 2, type: 'Music', class: 'Novice', points: 1
				  },
				  {
					 id: 3, type: 'Career', class: 'Novice', points: 1
				  }
			   ],
			  images : [
			  {
				  id: 1, image : 'https://placekitten.com/g/200/100'
			  },
			  {
				  id: 2, image : 'https://placekitten.com/g/200/300'
			  },
			  {
				  id: 3, image : 'https://placekitten.com/g/200/300'
			  }			  
		   ]
		  };
		  $scope.items.push(contact);
		  
		  $scope.form.name = '';
		  $scope.form.email = '';
		  $scope.showform = false;
	   }
	   $scope.cancelForm = function() {
		  if($scope.form) {
			 $scope.form.name = '';
			 $scope.form.email = '';
		  }
		  $scope.showform = false;
	   }
	});
	
	scotchApp.controller('detailController', function ($scope, $location, dataService) {
		$scope.title = 'Artist Detail';
		$scope.data = dataService.data;
		$scope.back = function () {
	        $location.path('/list');
		};
		$scope.removeContact = function (item) {
		   var id = item["id"];
		   //  $scope.items.splice(id, 1); // no backend for this app
		   Materialize.toast('Record deleted', 4000); 
		};
    });
	
	
	scotchApp.factory('dataService', function ($q, $timeout) {
    return { 
        data : {},
        items : [{
           id : 1, name : "Lin-Manuel Miranda", email : "usnavi@hamilton.com", trophies : [
              {
                 id: 1, type: 'Career', class: 'Expert', points: 10
              },
              {
                 id: 2, type: 'Music', class: 'Rockstar', points: 10
              }
           ], images : [
			  {
				  id: 1, image : 'images/into_the_heights.jpg'
			  },
			   {
				  id: 2, image : 'images/hamilton.jpg'
			  },
			   {
				  id: 3, image : 'images/moana.jpg'
			  }			  
		   ]
        },
        {
           id : 2, name : "Dale Chihuly", email : "dale@chihuly.com", trophies : [
              {
                 id: 1, type: 'Glassblowing', class: 'Guru', points: 10
              },
              {
                 id: 2, type: 'Career', class: 'Expert', points: 9
              }
           ], images : [
			  {
				  id: 1, image : 'images/chihuly1.jpg'
			  },
			   {
				  id: 2, image : 'images/chihuly8.jpg'
			  },
			   {
				  id: 3, image : 'images/chihuly3.jpg'
			  }
			  
		   ]
        }],
        load : function(id) {
            var defer = $q.defer();
            var data = this.data;
            var items = this.items;
            
            $timeout(function () {
                data.id = items[id - 1].id;
                data.name = items[id - 1].name;
                data.email = items[id - 1].email;
                data.trophies = items[id - 1].trophies;
                data.images = items[id - 1].images;
				
                defer.resolve(data);
            }, 10);
            return defer.promise;
        }
    };
});