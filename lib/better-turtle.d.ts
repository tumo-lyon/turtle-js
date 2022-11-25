/**
 * Wipes out the canvas.
 *
 * @returns {Turtle} For method chaining.
 */
declare function clear(): Turtle;
/**
 * Hide the turtle.
 *
 * @returns {Turtle} For method chaining.
 */
declare function hide(): Turtle;
/**
 * Show the turtle.
 *
 * @returns {Turtle} For method chaining.
 */
declare function show(): Turtle;
/**
 * Reset the turtle and the canvas.
 *
 * @returns {Turtle} For method chaining.
 */
declare function reset(): Turtle;
/**
 * @deprecated Use {@link setDelay} instead
 */
declare function setSpeed(ms: number): Turtle;
/**
 * Enable Step by Step mode and set the delay in ms between each steps.
 *
 * @param ms The delay between each steps
 * @returns {Turtle} For method chaining.
 */
declare function setDelay(ms: number): Turtle;
/**
 * Puts the pen up to stop drawing.
 *
 * @returns {Turtle} For method chaining.
 */
declare function putPenUp(): Turtle;
/**
 * Puts the pen down to start drawing.
 *
 * @returns {Turtle} For method chaining.
 */
declare function putPenDown(): Turtle;

/**
 * Sets a new color to be used for drawing.
 *
 * @param col Any value resolvable to a color.
 * @returns {Turtle} For method chaining.
 */
declare function setColor(col: ColorResolvable): Turtle;
/**
 * Sets a new width to be used for drawing lines.
 *
 * @returns {Turtle} For method chaining.
 */
declare function setWidth(size: number): Turtle;
/**
 * Change the line cap style of the lines being drawn.
 *
 * @returns {Turtle} For method chaining.
 */
declare function setLineCap(cap: LineCap): Turtle;
/**
 * Set the turtle to this angle.
 *
 * @returns {Turtle} For method chaining.
 */
declare function setAngle(ang: number): Turtle;
/**
 * Rotate the turtle on the left.
 *
 * @returns {Turtle} For method chaining.
 */
declare function left(ang: number): Turtle;
/**
 * Rotate the turtle on the right.
 *
 * @returns {Turtle} For method chaining.
 */
declare function right(ang: number): Turtle;
/**
 * Sends the turtle at a new position.
 *
 * @returns {Turtle} For method chaining.
 */
declare function goto(x: number, y: number): Turtle;

/**
 * Makes the turtle walk forward and draw a line.
 *
 * @param distance The distance in pixels for the turtle to travel.
 * @returns {Turtle} For method chaining.
 */
declare function forward(distance: number): Turtle;

/**
 * The different styles of the end caps for drawn lines.
 *
 * @note The value "round" and "square" make the lines slightly longer.
 *
 * @see https://www.w3schools.com/TAgs/canvas_linecap.asp
 */
type LineCap = 'butt' | 'round' | 'square';

type HTMLColorName = keyof typeof htmlColors;

type ColorResolvable = HTMLColorName | [number, number, number];

declare const htmlColors: {
  readonly black: '#000000';
  readonly silver: '#C0C0C0';
  readonly gray: '#808080';
  readonly grey: '#808080';
  readonly white: '#FFFFFF';
  readonly maroon: '#800000';
  readonly red: '#FF0000';
  readonly purple: '#800080';
  readonly fuchsia: '#FF00FF';
  readonly green: '#008000';
  readonly lime: '#00FF00';
  readonly olive: '#808000';
  readonly yellow: '#FFFF00';
  readonly navy: '#000080';
  readonly blue: '#0000FF';
  readonly teal: '#008080';
  readonly aqua: '#00FFFF';
  readonly darkblue: '#00008B';
  readonly mediumblue: '#0000CD';
  readonly darkgreen: '#006400';
  readonly darkcyan: '#008B8B';
  readonly deepskyblue: '#00BFFF';
  readonly darkturquoise: '#00CED1';
  readonly mediumspringgreen: '#00FA9A';
  readonly springgreen: '#00FF7F';
  readonly cyan: '#00FFFF';
  readonly midnightblue: '#191970';
  readonly dodgerblue: '#1E90FF';
  readonly lightseagreen: '#20B2AA';
  readonly forestgreen: '#228B22';
  readonly seagreen: '#2E8B57';
  readonly darkslategray: '#2F4F4F';
  readonly darkslategrey: '#2F4F4F';
  readonly limegreen: '#32CD32';
  readonly mediumseagreen: '#3CB371';
  readonly turquoise: '#40E0D0';
  readonly royalblue: '#4169E1';
  readonly steelblue: '#4682B4';
  readonly darkslateblue: '#483D8B';
  readonly mediumturquoise: '#48D1CC';
  readonly indigo: '#4B0082';
  readonly darkolivegreen: '#556B2F';
  readonly cadetblue: '#5F9EA0';
  readonly cornflowerblue: '#6495ED';
  readonly rebeccapurple: '#663399';
  readonly mediumaquamarine: '#66CDAA';
  readonly dimgray: '#696969';
  readonly dimgrey: '#696969';
  readonly slateblue: '#6A5ACD';
  readonly olivedrab: '#6B8E23';
  readonly slategray: '#708090';
  readonly slategrey: '#708090';
  readonly lightslategray: '#778899';
  readonly lightslategrey: '#778899';
  readonly mediumslateblue: '#7B68EE';
  readonly lawngreen: '#7CFC00';
  readonly chartreuse: '#7FFF00';
  readonly aquamarine: '#7FFFD4';
  readonly skyblue: '#87CEEB';
  readonly lightskyblue: '#87CEFA';
  readonly blueviolet: '#8A2BE2';
  readonly darkred: '#8B0000';
  readonly darkmagenta: '#8B008B';
  readonly saddlebrown: '#8B4513';
  readonly darkseagreen: '#8FBC8F';
  readonly lightgreen: '#90EE90';
  readonly mediumpurple: '#9370DB';
  readonly darkviolet: '#9400D3';
  readonly palegreen: '#98FB98';
  readonly darkorchid: '#9932CC';
  readonly yellowgreen: '#9ACD32';
  readonly sienna: '#A0522D';
  readonly brown: '#A52A2A';
  readonly darkgray: '#A9A9A9';
  readonly darkgrey: '#A9A9A9';
  readonly lightblue: '#ADD8E6';
  readonly greenyellow: '#ADFF2F';
  readonly paleturquoise: '#AFEEEE';
  readonly lightsteelblue: '#B0C4DE';
  readonly powderblue: '#B0E0E6';
  readonly firebrick: '#B22222';
  readonly darkgoldenrod: '#B8860B';
  readonly mediumorchid: '#BA55D3';
  readonly rosybrown: '#BC8F8F';
  readonly darkkhaki: '#BDB76B';
  readonly mediumvioletred: '#C71585';
  readonly indianred: '#CD5C5C';
  readonly peru: '#CD853F';
  readonly chocolate: '#D2691E';
  readonly tan: '#D2B48C';
  readonly lightgray: '#D3D3D3';
  readonly lightgrey: '#D3D3D3';
  readonly thistle: '#D8BFD8';
  readonly orchid: '#DA70D6';
  readonly goldenrod: '#DAA520';
  readonly palevioletred: '#DB7093';
  readonly crimson: '#DC143C';
  readonly gainsboro: '#DCDCDC';
  readonly plum: '#DDA0DD';
  readonly burlywood: '#DEB887';
  readonly lightcyan: '#E0FFFF';
  readonly lavender: '#E6E6FA';
  readonly darksalmon: '#E9967A';
  readonly violet: '#EE82EE';
  readonly palegoldenrod: '#EEE8AA';
  readonly lightcoral: '#F08080';
  readonly khaki: '#F0E68C';
  readonly aliceblue: '#F0F8FF';
  readonly honeydew: '#F0FFF0';
  readonly azure: '#F0FFFF';
  readonly sandybrown: '#F4A460';
  readonly wheat: '#F5DEB3';
  readonly beige: '#F5F5DC';
  readonly whitesmoke: '#F5F5F5';
  readonly mintcream: '#F5FFFA';
  readonly ghostwhite: '#F8F8FF';
  readonly salmon: '#FA8072';
  readonly antiquewhite: '#FAEBD7';
  readonly linen: '#FAF0E6';
  readonly lightgoldenrodyellow: '#FAFAD2';
  readonly oldlace: '#FDF5E6';
  readonly magenta: '#FF00FF';
  readonly deeppink: '#FF1493';
  readonly orangered: '#FF4500';
  readonly tomato: '#FF6347';
  readonly hotpink: '#FF69B4';
  readonly coral: '#FF7F50';
  readonly darkorange: '#FF8C00';
  readonly lightsalmon: '#FFA07A';
  readonly orange: '#FFA500';
  readonly lightpink: '#FFB6C1';
  readonly pink: '#FFC0CB';
  readonly gold: '#FFD700';
  readonly peachpuff: '#FFDAB9';
  readonly navajowhite: '#FFDEAD';
  readonly moccasin: '#FFE4B5';
  readonly bisque: '#FFE4C4';
  readonly mistyrose: '#FFE4E1';
  readonly blanchedalmond: '#FFEBCD';
  readonly papayawhip: '#FFEFD5';
  readonly lavenderblush: '#FFF0F5';
  readonly seashell: '#FFF5EE';
  readonly cornsilk: '#FFF8DC';
  readonly lemonchiffon: '#FFFACD';
  readonly floralwhite: '#FFFAF0';
  readonly snow: '#FFFAFA';
  readonly lightyellow: '#FFFFE0';
  readonly ivory: '#FFFFF0';
};
