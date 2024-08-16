## Flow of a P5 Program

A basic P5.JS program usually consists of two main functions: `setup()` and `draw()`. They make up the basic structure of a P5 sketch and help you manage the initialization and continuous execution of your code, respectively. When you create a new, blank sketch on the online P5 editor or over on OpenProcessing, you'll notice that they directly provide these functions from the start - we will be writing most of our code inside of these two functions.


### What are Functions?

A **function** in JavaScript is a block of code that does something specific. It's like a little reusable container for code that we can assign a label. When we then **invoke** that label JavaScript will run the code that's contained inside of this function. That means that you write a function once, and can then run it as many times as you want. Here's an example:

```javascript
function sayHello() {
  console.log("Hello!");
}
```

In this example, `sayHello` is the function's name. Inside the curly braces `{}`, we tell the function what to do. Here, it prints "Hello!" to the console. To make the function run, you just write its name followed by `()` like this:

```javascript
sayHello();
```

And that's pretty much it. Functions help you organize your code and avoid writing the same instructions over and over again. The setup() and draw() functions in P5JS are a bit different though; we don't need to explicitely invoke them, P5 will do that automatically for us - we just need to put our P5 code inside of them.

### Setup Function: `setup()`:

The `setup()` function is called once at the start of the program. It's used to define initial environment properties such as screen size, background color, and to load media such as images and fonts. It's commonly used to set up the digital canvas that we'll be drawing to (more about the HTML canvas element in the next section), to intialize variables, and generally to performe any preparation work that only needs to happen once and that we need for the rest of our code. Here's a short example of what the **setup()** function in practice can contain:

```javascript
function setup() {
    createCanvas(400, 400); // Creates a 400x400 pixel canvas
    background(220); // Sets the background color to a light gray
}
```

Here we basically create a canvas element that is 400x400 pixels in size and color it in gray.

### Draw Function: `draw()`:

In contrast to the setup() function, that runs once at the start of our sketch, the `draw()` function is run continuously, executing the lines of code contained inside of it over and over until it is stopped manually or programmatically. It’s commonly used to create animations, update the visuals on the canvas, and handle interactive elements. In other words, it allos us to draw and update the positions of shapes, handle animations, and responding to user input. Here's a quicky example of an interactive sketch where a circle is drawn to the canvas such that it follows the mouse coordinates:

```javascript
function draw() {
    background(220); // Clears the canvas with a light gray background
    ellipse(mouseX, mouseY, 50, 50); // Draws a circle at the current mouse position
}
```

We often refer to the **draw()** function also as the draw loop, due to the fact that it keeps running over and over.

### Example

Combining what we covered in the previous two sections, the `setup()` and `draw()` functions let us put together a complete sketch - here's the what the full code would look like:

```javascript
function setup() {
    createCanvas(400, 400); // Create a canvas of size 400x400 pixels
}

function draw() {
    background(220); // Clear the canvas each frame by recoloring it
    fill(255, 0, 0); // Set the fill color to red
    ellipse(mouseX, mouseY, 50, 50); // Draw a red circle that follows the mouse
}
```

There's a bunch of cool things going on here that we'll cover in a later section (in the motion section to be specific). Here's the code in action for now:

<iframe src="https://editor.p5js.org/AhmadMoussa/full/NQTG0PUNo"></iframe>

P5.js also provides other functions that are a little less important than setup() and draw(), but can be useful in certain scenarios.
