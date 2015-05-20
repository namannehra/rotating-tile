'use strict';
Polymer({
	duration: 2400,
	color1: '#1976D2',
	color2: '#D32F2F',
	color3: '#388E3C',
	color4: '#FBC02D',
	ready: function() {
		this.play();
	},
	play: function() {
		this.$.animation.play()
	},
	pause: function() {
		this.$.animation.pause()
	}
});