'use strict';

/**
 * @ngdoc function
 * @name tweenLiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tweenLiteApp
 */
angular.module('tweenLiteApp')
  .controller('AboutCtrl', function ($scope, $q, pwPage) {

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
			content = ("#content"),
		    subhead = ("h2"),
		    bg_image = ("#bg_image"),
		    description = ("#description"),
		    icons = ("#nav img");
		 
		TweenLite.set(content, {visibility:"visible"})

		//instantiate a TimelineLite    
		var tl = new TimelineLite();

		//add a from() tween at the beginning of the timline
		tl.from(head, 0.5, {left:100, opacity:0});

		//add another tween immediately after
		tl.from(subhead, 0.5, {left:-100, opacity:0});

		//use position parameter "+=0.5" to schedule next tween 0.5 seconds after previous tweens end
		tl.from(bg_image, 0.3, {autoAlpha:1, display:'block'});

		//use position parameter "-=0.5" to schedule next tween 0.25 seconds before previous tweens end.
		//great for overlapping
		tl.from(description, 0.5, {left:100, autoAlpha:0}, "-=0.25");

		//add a label 0.5 seconds later to mark the placement of the next tween
		tl.add("stagger", "+=0.5")
		//to jump to this label use: tl.play("stagger");

		//stagger the animation of all icons with 0.1s between each tween's start time
		//this tween is added
		tl.staggerFrom(icons, 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger");

		/* --- Control playback methods --- */
	}


  });
