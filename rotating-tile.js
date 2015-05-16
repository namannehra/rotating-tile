'use strict';
Polymer({
	ready: function() {
		this.colors = this.$.color.querySelectorAll('core-animation-prop');
		this.$.animation.target = this.$.tile;
		this.play();
	},
	play: function() {
		this.$.animation.play()
	},
	pause: function() {
		this.$.animation.pause()
	},
	durationChanged: function(e, f) {
		this.$.animation.cancel();
		this.$.rotate.duration = f;
		this.$.color.duration = f;
		this.$.color.delay = f/8;
		this.play();
	},
	color1Changed: function(e ,f) {
		this.$.tile.style.background = f;
		this.colors[3].value = f;
		this.play();
	},
	color2Changed: function(e ,f) {
		this.colors[0].value = f;
		this.colors[4].value = f;
		this.play();
	},
	color3Changed: function(e ,f) {
		this.colors[1].value = f;
		this.play();
	},
	color4Changed: function(e ,f) {
		this.colors[2].value = f;
		this.play();
	}
});