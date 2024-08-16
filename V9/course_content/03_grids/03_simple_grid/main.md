There's a number of different ways with which we can create grids in P5JS, most of them revolve around for loops in one way or another.

### How do we make a simple grid?

A nested for loop is the answer! Here's a very simple p5js sketch that does this, where we fill the entire canvas with rectangles: 

```
function setup() {
	let canvasSize = 400
    
	createCanvas(canvasSize, canvasSize);
	background(220);
    
	for (x = 0; x < canvasSize; x += 20) {
        for (y = 0; y < canvasSize; y += 20) {
            rect(x, y, 20, 20)
        }
	}
    
	noLoop()
}
```

What's happening here? We are essentially using two loops, one to create the columns and the other to create the rows of rectangles. The looping parameters increment by 20 pixels each iteration and stop once they reach the size of the canvas. These looping parameters are then used as the input coordinates to draw the rectangles onto the canvas. And here's what this would look like in action:

<iframe src="https://openprocessing.org/sketch/2326360/embed/?plusEmbedHash=a317aa07&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>

This isn't ideal however, we can improve this to make it look better!


### Improvements

In programming it's never really that good to hard-code exact numbers into certain parts of our program, rather we want to use variables that we can easily change in one place and will then be replaced automatically inside the code when it is run. For example, what if we want the rectangles in our grid to not always be 20 pixels in size? We can isolate this part of the code as its own variable - just like we already have the size of the canvas stored in a variable:

```
function setup() {
	let canvasSize = 400;
    let rectangleSize = 20;
    
	createCanvas(canvasSize, canvasSize);
	background(220);
    
	for (x = 0; x < canvasSize; x += rectangleSize) {
        for (y = 0; y < canvasSize; y += rectangleSize) {
            rect(x, y, rectangleSize, rectangleSize);
        }
	}
    
	noLoop()
}
```

And we'd end up with the following:

<iframe src="https://openprocessing.org/sketch/2326363/embed/?plusEmbedHash=24b72d4a&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>

Visually there's something that bothers me, it's that the grid lines up directly with the edges of the canvas, let's add another variable that lets us control the amount of padding between the 4 sides of the grid and the 4 sides of the canvas:

```
function setup() {
	let canvasSize = 400;
    let rectangleSize = 20;
    let padding = 20;
    
	createCanvas(canvasSize, canvasSize);
	background(220);
    
	for (x = padding; x < canvasSize-padding; x += rectangleSize) {
        for (y = padding; y < canvasSize-padding; y += rectangleSize) {
            rect(x, y, rectangleSize, rectangleSize);
        }
	}
    
	noLoop()
}
```

In essence, we are now running our loops starting at an offset instead of zero, and also subtracting that offset from the size of the canvas that serves as a stopping condition of the loop. And visually this would result in the following:

<iframe src="https://openprocessing.org/sketch/2326364/embed/?plusEmbedHash=53da4afb&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>

Much nicer, right?

### Making Exact Grids

We can improve our little grid even more! This part will be a little bit more complicated, but lets us take all of the variables outside of the loops. You might have noticed that the for loops are getting a bit ugly at this point with all of the stuff we've crammed into them. 

Besides that, what if we want our grid to have an exact number of rows and columns? Let's say we specify these with two variables:

```
let cols = 5;
let rows = 5;
```

And we also still need to consider the size of the canvas and the specified padding:

```
let canvasSize = 800;
let padding = 20;
```

How do we calculate the size of the rectangles (their width and height) to fill out this space? We can do this with a somewhat tricky formula:

```
let rectangleWidth = (canvasSize - padding*2) / cols;
let rectangleHeight = (canvasSize - padding*2) / rows;
```

And this should give us the exact size of the rectangles width and height to fill out the canvas (minus the padding of course). Then we can go back and make our for loops very simple:

```
for (x = 0; x < cols; x ++) {
    for (y = 0; y < rows; y ++) {
        let positionX = x * rectangleWidth + padding
        let positionY = y * rectangleHeight + padding
        rect(positionX, positionY, rectangleWidth, rectangleHeight);
    }
}

```

 The code would then look as follows:


```
function setup(){
    let canvasSize = 800;
    let padding = 20;

    let cols = 5;
    let rows = 5;

    let rectangleWidth = (canvasSize - padding*2) / cols;
    let rectangleHeight = (canvasSize - padding*2) / rows;


    createCanvas(canvasSize, canvasSize);
	background(220);
    
	for (x = 0; x < cols; x ++) {
        for (y = 0; y < rows; y ++) {
            let positionX = x * rectangleWidth + padding
            let positionY = y * rectangleHeight + padding
            rect(positionX, positionY, rectangleWidth, rectangleHeight);
        }
    }
    
	noLoop()
}
```

And in action:

<iframe src="https://openprocessing.org/sketch/2326368/embed/?plusEmbedHash=87493004&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>

Now we can simply modify the size of our grid very easily.