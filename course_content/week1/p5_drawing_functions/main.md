P5.js provides a variety of drawing functions that allow you to create shapes, text, and manipulate pixels on the canvas. These functions are essential for creating visual content in your P5.js sketches. Here are some of the primary drawing functions provided by P5.js:

### 1. Primitive Shapes

- **`point(x, y)`**: Draws a point at the specified coordinates `(x, y)`.

  ```javascript
  point(100, 200); // Draws a point at (100, 200)
  ```

- **`line(x1, y1, x2, y2)`**: Draws a line from `(x1, y1)` to `(x2, y2)`.

  ```javascript
  line(50, 50, 150, 150); // Draws a line from (50, 50) to (150, 150)
  ```

- **`rect(x, y, width, height)`**: Draws a rectangle with the top-left corner at `(x, y)` and specified `width` and `height`.

  ```javascript
  rect(50, 50, 100, 75); // Draws a rectangle at (50, 50) with width 100 and height 75
  ```

- **`ellipse(x, y, width, height)`**: Draws an ellipse (or circle if `width` equals `height`) with its center at `(x, y)`.

  ```javascript
  ellipse(200, 200, 100, 80); // Draws an ellipse at (200, 200) with width 100 and height 80
  ```

- **`arc(x, y, width, height, startAngle, stopAngle, mode)`**: Draws an arc or a portion of an ellipse with the specified dimensions and angles.

  ```javascript
  arc(300, 300, 100, 100, 0, PI); // Draws a half-circle at (300, 300) with radius 50
  ```

### 2. Curves

- **`beginShape()` / `endShape()`**: Defines and ends a series of vertices to create complex shapes or curves.

  ```javascript
  beginShape();
  vertex(50, 50);
  vertex(100, 100);
  vertex(150, 50);
  endShape(CLOSE); // Draws a triangle with vertices (50, 50), (100, 100), (150, 50)
  ```

- **`vertex(x, y)`**: Specifies a vertex for use with `beginShape()`.

### 3. Text

- **`text(string, x, y)`**: Displays the specified `string` of text at the coordinates `(x, y)`.

  ```javascript
  text("Hello, P5.js!", 50, 50); // Displays "Hello, P5.js!" at (50, 50)
  ```

- **`textSize(size)`**: Sets the size of the text for subsequent `text()` calls.

  ```javascript
  textSize(24);
  text("Big Text", 50, 50); // Displays "Big Text" at (50, 50) with size 24
  ```

### 4. Color

- **`fill(color)`**: Sets the fill color for shapes.

  ```javascript
  fill(255, 0, 0); // Sets the fill color to red (RGB)
  rect(50, 50, 100, 100); // Draws a red rectangle at (50, 50) with width 100 and height 100
  ```

- **`stroke(color)`**: Sets the stroke (outline) color for shapes.

  ```javascript
  stroke(0); // Sets the stroke color to black (RGB)
  ellipse(200, 200, 50, 50); // Draws a black outlined ellipse at (200, 200) with width 50 and height 50
  ```

### 5. Image Manipulation

- **`image(img, x, y, width, height)`**: Displays an image (`img`) at the specified coordinates and dimensions.

  ```javascript
  let img;
  function preload() {
    img = loadImage('image.jpg');
  }
  function setup() {
    createCanvas(400, 400);
    image(img, 50, 50, 200, 200); // Displays 'image.jpg' at (50, 50) with width 200 and height 200
  }
  ```

### 6. Pixel Manipulation

- **`get(x, y)`**: Retrieves the color of the pixel at `(x, y)`.

  ```javascript
  let col = get(100, 100); // Retrieves the color of the pixel at (100, 100)
  ```

- **`set(x, y, color)`**: Sets the color of the pixel at `(x, y)`.

  ```javascript
  set(200, 200, color(255, 0, 0)); // Sets the pixel at (200, 200) to red (RGB)
  ```

- **`loadPixels()` / `updatePixels()`**: Loads and updates the pixel array for direct manipulation.

### Summary

These drawing functions form the core of P5.js's capabilities, allowing you to create a wide range of visual effects and interactive elements in your sketches. By combining these functions with JavaScript logic and event handling, you can create dynamic and engaging visual experiences.
