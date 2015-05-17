rotating-tile
=============

See the [component page](https://namannehra.github.io/rotating-tile/) for more information.

## Installing

Install using bower.
```
bower install --save namannehra/rotating-tile#latest
```

Import webcomponents.js for browser which lack native support for web components. Import rotating-tile.
```
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
<link rel="import" href="bower_components/rotating-tile/rotating-tile.html">
```

## Getting Started

Element providing rotating tile.
```
<rotating-tile></rotating-tile>
```

#### Play and Pause
Animation can be paused and played usign pause() and play() methods
```
var tile = document.querySelector('rotating-tile');
tile.pause();
```

#### Customize
The default tile cycles between four colors; by default they are blue, red, yellow and green. These colors and duration on animation can be customized using attributes.
```
<rotating-tile duration="4000" color1="rgba(0,0,0,0.54)" color2="purple" color3="rgba(0,0,0,0.54)" color4="purple"></rotating-tile>
```

#### Customize on run-time
play() method needs to be called for changed to take effect if properties are changed using javascript after element is created.
```
var tile = document.querySelector('rotating-tile');
tile.duration = 40000;
tile.color1 = 'black';
tile.play; //changes won't take effect if play() in not called
```

#### Circle
Add 'circle' class to change the shape of the tile to circle (same can to done by setting border-radius to 50% and perspective to none).
```
<rotating-tile class="circle"></rotating-tile>
```

#### Adding content
Content can be inserted inside the tile.
```
<rotating-tile>Some content</rotating-tile>
```

#### CSS
Can be styled using CSS.
```
<style>
	rotating-tile {
		border-radius: 32px;
		height: 128px;
		width: 128px; /* It is recommended to keep height and width equal */
		opacity: 0.7;
		perspective: 256px; /* It is recommended to set perspective equal to double of height */
	}
</style>
```