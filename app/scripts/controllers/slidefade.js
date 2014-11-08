'use strict';

/**
 * @ngdoc function
 * @name tweenLiteApp.controller:SlidefadeCtrl
 * @description
 * # SlidefadeCtrl
 * Controller of the tweenLiteApp
 */
angular.module('tweenLiteApp')
  .controller('SlidefadeCtrl', function ($scope) {


	
	var $slides = $(".slide");			//slides
	var $titulos = $(".titulo");		//slides
	var currentSlide = 0;				//keep track on the current slide
	var stayTime = 3;					//time the slide stays
	var slideTime = 1.3;				//fade in / fade out time
				
	TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0});	//we hide all images after the first one
	TweenLite.set($titulos.filter(":gt(0)"), {autoAlpha:0});	//we hide all images after the first one
	TweenLite.delayedCall(stayTime, nextSlide);				//start the slideshow
				
	function nextSlide(){			

			TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		//fade out the old slide
			TweenLite.to( $titulos.eq(currentSlide), slideTime, {left:-500, autoAlpha:0.5} );		//fade out the old slide

			currentSlide = ++currentSlide % $slides.length;							//find out the next slide			
			
			TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );		//fade in the next slide
			TweenLite.to( $titulos.eq(currentSlide), slideTime, {left:200, autoAlpha:1} );		//fade in the next slide
			
			TweenLite.delayedCall(stayTime, nextSlide);								//wait a couple of seconds before next slide
	

	}



  });
