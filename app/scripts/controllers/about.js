'use strict';

/**
 * @ngdoc function
 * @name tweenLiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tweenLiteApp
 */
angular.module('tweenLiteApp')
  .controller('AboutCtrl', function ($scope, $q, pwPage, $window) {

  	$scope.slides = [];			// contenedor de slides
  	var numSlides = 0;			// numero de slides
  	var segundos = 4000;
  	var galeria = '1088';			//1051=chicas  1074=platos

  	function getSlides() {
  		var deferred = $q.defer();
  		pwPage.getPage(galeria)    // cabana
  		.then(function(response){
  			console.debug("todo",response);
  			var ids = response.slide_A.split('|');
			numSlides = ids.length;
  			angular.forEach(ids, function(id, key) {
			  	pwPage.getPage(id)    
  				.then(function(slide){
  					slide.imagen = id + '/' +slide.imagen;						// ruta + imagen
  					$scope.slides.push(slide);
  					if(numSlides == key + 1) deferred.resolve($scope.slides);	// no hay mas slides
  				})
			});
  		})
  		return deferred.promise; 
	}


	/**
	 * comienza bucle carousel
	 */
	getSlides()
	.then(function(response){
		var i = 0;
		$scope.slide = $scope.slides[0]; 
	    var timer = setInterval(function(){
	    	i++; if(i >= numSlides ) { i = 0 }		// no hay mas slides cicla
	    	$scope.$apply();
			$scope.slide = $scope.slides[i]; 
			animateSlide();	
	    }, segundos); 
	})


	/**
	 * GSAP animacion
	 * @return {[type]} [description]
	 */
	function animateSlide(){
		var head = ("h1"),
			todo = (".todo"),
		    subhead = ("h2"),
		    bg_image = ("#bg_image"),
		    description = ("#description"),
		    icons = ("#nav img");
		 
		// TweenLite.set(content, {visibility:"visible"})
		
		var startPoint = $window.innerWidth * 0.5
		//instantiate a TimelineLite    
		var tl = new TimelineLite();


		tl.fromTo(todo, 4, { alpha: 0.5}, {alpha: 1})
		.fromTo(todo, 2, { alpha: 1}, {alpha: 0.5})
		// tl.fromTo(bg_image, 4, { alpha: 0}, {alpha: 1})
		// .fromTo(head, 1, { left: startPoint, alpha: 0}, {left: 50, alpha: 1, ease: Ease.easeInOut})
		// .fromTo(subhead, 1, { left: startPoint, alpha: 0}, {left: 50, alpha: 1, ease: Ease.easeInOut})

	}


  });
