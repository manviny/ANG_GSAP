'use strict';

/**
 * @ngdoc function
 * @name tweenLiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tweenLiteApp
 */
angular.module('tweenLiteApp')
  .controller('MainCtrl', function ($scope) {

		var head = ("h1"),
			content = ("#content"),
		    subhead = ("h2"),
		    feature = ("#feature"),
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
		tl.from(feature, 0.5, {scale:.5, autoAlpha:0}, "+=0.5");

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



  });
