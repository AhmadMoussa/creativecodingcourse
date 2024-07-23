## Intro to P5JS

P5.js is a JavaScript library designed to make coding accessible and inclusive for artists, designers, educators, and beginners. It's a modern version of Processing, a programming language and environment initially developed to teach the fundamentals of computer programming within a visual context. P5.js retains the core principles of Processing while leveraging the capabilities of JavaScript and web technologies.

### Key Features of P5.js:
1. **Simplicity and Accessibility**: P5.js aims to make coding easy and approachable, especially for those with little or no programming experience.
2. **Creative Coding**: It emphasizes creating graphics, animations, and interactive content, making it popular in the arts and education.
3. **Web Integration**: Being a JavaScript library, P5.js runs directly in the browser, making it easy to share and deploy projects online. Here's an example of a sketch running directly in your browser, click on the refresh button for different variations:

<iframe src="https://openprocessing.org/sketch/1574623/embed/?plusEmbedHash=9088ce66&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>


4. **Extensive Documentation and Examples**: P5.js comes with a wealth of examples and detailed documentation, aiding learning and experimentation.
5. **Community and Ecosystem**: There's a vibrant community around P5.js, contributing tutorials, libraries, and tools that extend its capabilities.

### Core Components:
- **Canvas**: The drawing area where all visual elements are rendered.
- **Drawing Functions**: Methods for shapes, colors, images, and text.
- **Interaction**: Functions to handle user inputs like mouse and keyboard events.
- **Animation**: Built-in functions to create animations by continuously drawing frames.

### Basic Example:
Here's a simple P5.js sketch, just to give you an idea of what a P5 program looks like. Here we simply draw a circle in the center of the canvas and changes its color based on mouse position:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = 150;

  fill(r, g, b);
  ellipse(width / 2, height / 2, 100, 100);
}
```

In this example:
- The setup function `setup()` initializes the canvas size.
- The draw `draw()` function continuously updates the canvas, mapping the mouse position to RGB values to change the circle's color.

And here's an interactive version of the code for you to explore:

P5.js allows for quick iteration and exploration of visual ideas, making it a powerful tool for creative coding.
