## Flow of a P5.js Program

Understanding the flow of a P5.js program is crucial for creating interactive sketches.

### The setup() Function:

- **Purpose:** The setup() function runs once when the program starts. It’s used to set up initial settings such as screen size, background color, and other configurations.
- **Common Uses:** Creating the canvas, setting frame rate, and initializing variables.

### The draw() Function:

- **Purpose:** The draw() function runs continuously after setup() has completed. It’s used to execute the code that needs to run repeatedly, allowing for animation and interactivity.
- **Common Uses:** Drawing shapes, updating positions of objects, and handling user interactions.

```
function setup(){

}

function draw(){
  background()
}
```
