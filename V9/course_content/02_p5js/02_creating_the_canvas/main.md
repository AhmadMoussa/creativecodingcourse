To be able to draw any kind of visuals with P5 we need to designate a specific area of our webpage for this purpose - we call this drawing area the canvas. We've already seen the function that lets us create this drawing area, the **createCanvas()** function. This function is usually the first function that we invoked at the very top of the **setup()** function, to ensure that the drawing area is actually created first thing.

In fact, this canvas element is actually a part of HTML and provides its own set of drawing functions, which makes P5 possible in the first place since it's built on top of this provided functionality. If you want to learn more about that, I attached relevant links in the self-study section about the topic.


### The `createCanvas()` Function

As mentioned, the `createCanvas()` function lets us create our digital canvas. And it also accepts input paramteres to specify the size of the drawing area - essentially its width and height, respectively in pixels. For example, `createCanvas(400, 300)` makes a canvas 400 pixels wide and 300 pixels tall, here's an example:

**Example:**

```javascript
function setup() {
  createCanvas(400, 300);
}
```

This code will create a canvas that is 400 pixels wide and 300 pixels tall when your program starts. Of course, these values are entirely up to you, you can make a square canvas, where the width and height are equal, or a rectangular canvas where one of the dimensions is larger than the other - it entirely depends on what kind of artwork you are making.

If we run this code we won't actually see anything yet because the canvas is blank, we need to still give it a color! Just like a painter would prepare their canvas with a certain color before getting started with their artwork - this is where the `background()` function comes in, that we also already seen previously.

### The `background()` Function

The **background()** function is a special function that fills the entire canvas with a solid color. When we're drawing a static artwork (that isn't animated) we can call it at the very start of our sketch directly after the **createCanvas()** function. But it can also be used to refresh the canvas during animations when we invoke it at the start of the **draw()** function - basically to clear the canvas before drawing new things. This essentially prevents old drawings from piling up, remember the example of the circle that follows our mouse coordinates? Here's what that would look like without clearing the canvas with the background function:

```javascript
function setup() {
  createCanvas(400, 400);
  background(220); // Light grey background
}

function draw() {
  ellipse(mouseX, mouseY, 50);
}
```

<iframe src="https://editor.p5js.org/AhmadMoussa/full/6oiPSNqZT"></iframe>

Because the canvas is not cleared, the moving circle will leave a visible trail.

So, `background()` is like painting the entire canvas with a single color before you start drawing your masterpiece - but what is that number that we're passing as an input to it? The number here basically represents the color, and different numbers can be used to get different colors. For example, `background(0)` is black, and `background(255)` is white. You can also use color names like `background('red')`, and even use RGB and HEXADECIMAL values as well: `background(255,0,0)` would color the canvas red, and `background('#000000')` would color the canvas black. More info about the background function in the self-study section.


### Filling the Entire Window

Sometimes you might want the canvas to fill out the entire size of the browser window, or the webpage that it lives in. To do this, you can use the `windowWidth` and `windowHeight` values that browser window provides, and are equal to its dimensions:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}
```

This will basically make the canvas fill the entire width and height of the available space that it has in its containing area on the webpage.

### Making Your Canvas Flexible

Sometimes you might want your canvas to resize along with the browser window when it changes dimensions, there's two useful function for this, namely the `windowResized()` and `resizeCanvas()` function. In p5.js, the `windowResized()` is automatically called whenever the browser window's size changes, we can us it to call the other function `resizeCanvas()` which then changes the dimensions of our canvas accordingly.

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



