## Creating the Canvas with createCanvas()

**Imagine you want to draw on a computer.** To do this, you need a digital canvas. In p5.js, the `createCanvas()` function helps you create this canvas.

### What does `createCanvas()` do?

* **Creates a canvas:** It makes a special area on your webpage where you can draw. This area is like a digital whiteboard.
* **Sets the size:** You can tell the canvas how big you want it to be by giving it a width and a height. For example, `createCanvas(400, 300)` makes a canvas 400 pixels wide and 300 pixels tall.
* **Puts it on the page:** The canvas is then placed on your webpage so you can see it.

**Example:**

```javascript
function setup() {
  createCanvas(400, 300);
}
```

This code will create a canvas that is 400 pixels wide and 300 pixels tall when your program starts. Of course, these values are entirely up to you, you can make a square canvas, where the width and height are equal, or a rectangular canvas where one of the dimensions is larger than the other - it entirely depends on what kind of artwork you are making.

If we run this code we won't actually see anything yet because the canvas is blank, we need to still give it a color! Just like a painter would prepare their canvas with a certain color before getting started with their artwork - this is where the `background()` function comes in.

### The `background()` Function

* **Colors the canvas:** It fills the entire canvas with a solid color.
* **Refreshes the canvas:** If you're making an animation, `background()` is used in the `draw()` function to clear the canvas before drawing new things. This prevents old drawings from piling up.

**Example:**

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220); // Light grey background
  // Your drawing code goes here
}
```

In this example:
* `createCanvas(400, 300)` creates a canvas 400 pixels wide and 300 pixels tall.
* `background(220)` fills the canvas with a light grey color before drawing anything else.

So, `background()` is like painting the entire canvas with a single color before you start drawing your masterpiece! - and you can change this color by using different numbers. For example, `background(0)` is black, and `background(255)` is white. You can also use color names like `background('red')`, and even use RGB and HEXADECIMAL values as well: `background(255,0,0)` would color the canvas red, and `background('#000000')` would color the canvas black.

Of course when we are making a static sketch, we can also just leave the `background()` function inside of the `setup()` function, and we can disregard the `draw()` function entirely. 


### Filling the Entire Window

Sometimes you might want the canvas to fill out the entire size of the browser window, or the webpage that it lives in. To do this, you can use the `windowWidth` and `windowHeight` values that browser window provides, and are equal to its dimensions:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}
```

This will basically make the canvas fill the entire width and height of your browser window.

### Making Your Canvas Flexible

Sometimes you might want your canvas to resize along with the browser window when it changes dimensions, there's two useful function for this, namely `windowResized` and `resizeCanvas`. In p5.js, the `windowResized()` is automatically called whenever the browser window's size changes, we can us it to call the other function `resizeCanvas()` which then changes the dimensions of our canvas accordingly.

**Example:**

```javascript
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    // Your drawing code here
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
```

In this example:
* `createCanvas(windowWidth, windowHeight)` makes the canvas fill the entire window when the sketch starts.
* `windowResized()` checks if the window size has changed.
* `resizeCanvas(windowWidth, windowHeight)` changes the canvas size to match the new window size.

**So, `windowResized()` and `resizeCanvas()` work together to make your canvas adaptable to different screen sizes.** 



