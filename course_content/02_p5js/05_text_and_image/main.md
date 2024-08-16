
### Text

- **`text(string, x, y)`**: Displays the specified `string` of text at the coordinates `(x, y)`.

```javascript
text("Hello, P5.js!", 50, 50); // Displays "Hello, P5.js!" at (50, 50)
```

- **`textSize(size)`**: Sets the size of the text for subsequent `text()` calls.

```javascript
textSize(24);
text("Big Text", 50, 50); // Displays "Big Text" at (50, 50) with size 24
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