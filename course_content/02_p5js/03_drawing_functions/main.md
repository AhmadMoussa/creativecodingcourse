Now that we've created the canvas we actually want to draw a bunch of shapes and colors to it - P5JS provides a big variety of drawing functions that allow us to do that, to draw all sorts of different shapes, text, and also let us manipulate pixels on the canvas. 

### Coordinate System in P5JS

Before we draw any shapes though, let's quickly talk about the coordinate system in P5, as it's important to understand for the purpose of positioning items in P5. In p5.js, the coordinate system is based on a 2D grid with the origin point (0, 0) located at the top-left corner of the canvas. The horizontal axis (x-axis) extends to the right, while the vertical axis (y-axis) extends downward.

- **X-coordinate:** Increases from left to right. For example, `x = 50` is 50 pixels to the right of the origin.
- **Y-coordinate:** Increases from top to bottom. For example, `y = 50` is 50 pixels down from the origin.
  
Coordinates are specified as `(x, y)`, where `x` is the horizontal position and `y` is the vertical position. This system is used for all the following shape functions that we cover, that take as input a set of coordinates for positioning purposes, besides other inputs. With that out of the way, gere are some of the primary drawing functions provided by P5:

### Primitive Shapes

- `point(x, y)`: Draws a point at the specified coordinates `(x, y)`.

```javascript
point(100, 200); // Draws a point at (100, 200)
```

- `line(x1, y1, x2, y2)`: Draws a line from `(x1, y1)` to `(x2, y2)`.

```javascript
line(50, 50, 150, 150); // Draws a line from (50, 50) to (150, 150)
```

- `rect(x, y, width, height)`: Draws a rectangle with the top-left corner at `(x, y)` and specified `width` and `height`.

```javascript
rect(50, 50, 100, 75); // Draws a rectangle at (50, 50) with width 100 and height 75
```

- `ellipse(x, y, width, height)`: Draws an ellipse (or circle if `width` equals `height`) with its center at `(x, y)`.

```javascript
ellipse(200, 200, 100, 80); // Draws an ellipse at (200, 200) with width 100 and height 80
```

- `arc(x, y, width, height, startAngle, stopAngle, mode)`: Draws an arc or a portion of an ellipse with the specified dimensions and angles.

```javascript
arc(300, 300, 100, 100, 0, PI); // Draws a half-circle at (300, 300) with radius 50
```

### Custom Shapes and Curves

- `beginShape()` / `endShape()`: Defines and ends a series of vertices to create complex shapes or curves.

```javascript
beginShape();
vertex(50, 50);
vertex(100, 100);
vertex(150, 50);
endShape(CLOSE); // Draws a triangle with vertices (50, 50), (100, 100), (150, 50)
```

- `vertex(x, y)`: Specifies a vertex for use with `beginShape()`.
- `curveVertex(x, y)`: Specifies a vertex for use with `beginShape()`.

These drawing functions form the core of P5.js's capabilities, allowing you to create a wide range of visual effects and interactive elements in your sketches - combining these functions with different kinds of algorithms you'll be able to express a wide range of visual ideas.
