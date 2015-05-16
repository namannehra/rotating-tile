rotating-tile
=============

See the [component page](https://namannehra.github.io/rotating-tile/) for more information.

Element providing rotating tile.
##### Example:
	<rotating-tile></rotating-tile>

The default tile cycles between four colors; by default they are blue, red, yellow and green. These colors and duration on animation can be customized.
##### Example:
	<rotating-tile duration="8000" color1="rgba(0,0,0,0.54)" color2="pink" color3="black" color4="pink"></rotating-tile>

Add 'circle' class changes the shape of the tile to circle (by setting border-radius to 50%).
##### Example:
	<rotating-tile class="circle"></rotating-tile>

Content can be inserted inside the tile.
##### Example:
	<rotating-tile>Some content</rotating-tile>

Can be styled using CSS.
##### Example:
	<style>
		rotating-tile {
			border-radius: 32px;
			height: 128px;
			width: 128px;
			opacity: 0.7;
			perspective: 256px;
		}
	</style>