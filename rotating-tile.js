'use strict';
Polymer({
	duration: 2400,
	color1: '#1976D2',
	color2: '#D32F2F',
	color3: '#388E3C',
	color4: '#FBC02D',
	ready: function() {
		this.$.rotate.duration = this.duration;
		this.$.color.duration = this.duration;
		this.$.color.delay = this.duration / 8;
		this.$.tile.style.backgroundColor = this.color1;
		this.colors = this.$.color.querySelectorAll('core-animation-prop');
		this.colors[0].value = this.color2;
		this.colors[1].value = this.color3;
		this.colors[2].value = this.color4;
		this.colors[3].value = this.color1;
		this.colors[4].value = this.color2;
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
		this.$.rotate.duration = f;
		this.$.color.duration = f;
		this.$.color.delay = f / 8;
	},
	color1Changed: function(e ,f) {
		this.$.tile.style.background = f;
		this.colors[3].value = f;
	},
	color2Changed: function(e ,f) {
		this.colors[0].value = f;
		this.colors[4].value = f;
	},
	color3Changed: function(e ,f) {
		this.colors[1].value = f;
	},
	color4Changed: function(e ,f) {
		this.colors[2].value = f;
	}
});