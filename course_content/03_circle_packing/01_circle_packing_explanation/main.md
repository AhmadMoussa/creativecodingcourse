## Circle Packing

*In this section we'll tackle our first full sketch: Circle Packing. A fun algorithm that lets us draw cool and quirky patterns with circles.*

### What's Circle Packing?

Circle packing is like trying to fit as many non-overlapping circles as possible into a specific area, like a box or a canvas. Imagine you have a big sheet of paper and a lot of circular stickers. The goal is to place these stickers on the paper without any of them touching or overlapping each other, and without any stickers hanging off the edges of the paper.

To do this, you would start by placing one sticker on the paper. Then, for each new sticker, you would check if it can fit without overlapping any of the already placed stickers. If it fits, you stick it on; if it doesn't, you try a different position. By repeating this process many times, you end up filling the paper with as many stickers as possible, each one in its own space, creating an interesting pattern of circles that are all touching but not overlapping.

And here's what essentially what we'll be making - click the refresh button a couple of times to generate new variations:

<iframe src="https://openprocessing.org/sketch/2320206/embed/?plusEmbedHash=a3d6a4cb&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>


### Initialization and Setup

Let's start with the first sections of the code:

```javascript
let circles = [];
let numAttempts = 20000;

let canvas_width = 800;
let canvas_height = 800;
let padding = 50;

function setup() {
  createCanvas(canvas_width, canvas_height);
  
  background(0);
  strokeWeight(255);
}
```

In this part of the code, we're setting up some initial values:

- `circles` is an empty list where we'll keep track of all the circles we successfully place on the canvas.
- `numAttempts` is the number of times we'll try to place a new circle. Here, we're going to try 20,000 times.
- `canvas_width` and `canvas_height` are the dimensions of our canvas, which is 800 by 800 pixels. We will write our code in such a way that we can adjust these values.
- `padding` is an empty zone around the edges of the canvas to make sure our circles don't go too close to the edge. This is not necessary, but it makes things look nicer!
- `createCanvas(canvas_width, canvas_height);`: This creates a canvas of 800 by 800 units where we'll draw our circles.

This basically sets up the basic parameters for our circle-packing process, and ensures our canvas is ready for us to start trying to place circles on it.


### Circle Placement Logic

#### Assigning Circle Positions and Sizes

This part of the code randomly determines where and how big each circle will be for each of the 20,000 attempts.

```javascript
for(let n = 0; n < numAttempts; n++){
  
  let randX = random(padding, canvas_width-padding)
  let randY = random(padding, canvas_height-padding)
  let randR = random(5, 120)
```

In this part, we're starting the process of trying to place circles on the canvas. This loop will run 20,000 times (as defined by `numAttempts`). For each attempt, we do the following:

- `let randX = random(padding, canvas_width-padding)`: This picks a random x-coordinate for the circle, ensuring it stays within the padded area of the canvas.
- `let randY = random(padding, canvas_height-padding)`: This picks a random y-coordinate for the circle, also within the padded area.
- `let randR = random(5, 120)`: This picks a random radius for the circle, making sure the circle's size is between 5 and 120 units.

#### Placement Check

In this part, we check if the randomly chosen circle can be placed on the canvas without overlapping any of the circles that are already there. Here's what happens:

```javascript
  let placeable = true
  for(let circle of circles){
    let d = dist(
      randX, randY, circle.x, circle.y
    )
    
    if(d < randR + circle.r + 5){
      placeable = false
    }
  }
```

- `let placeable = true`: We start by assuming that the circle can be placed.
- `for(let circle of circles)`: We loop through all the circles we've already placed.
- `let d = dist(randX, randY, circle.x, circle.y)`: We calculate the distance (`d`) between the center of the new circle and the center of each existing circle.
- `if(d < randR + circle.r + 5)`: We check if this distance is less than the sum of the radii of the two circles plus a small margin (5 units). If it is, it means the circles would overlap.
- `placeable = false`: If the circles would overlap, we set `placeable` to `false`.

This ensures that the new circle does not overlap any existing circles.

#### Boundary Check

In this part, we check if the randomly chosen circle would go off the edges of the canvas. Here's what happens:

```javascript
  if(
    (randX + randR > canvas_width-padding) ||
    (randX - randR < padding) ||
    (randY + randR > canvas_height-padding) ||
    (randY - randR < padding)
  ){
      placeable = false
  }
```

- We check if the right edge of the circle (`randX + randR`) goes beyond the right boundary of the canvas (`canvas_width - padding`).
- We check if the left edge of the circle (`randX - randR`) goes beyond the left boundary of the canvas (`padding`).
- We check if the bottom edge of the circle (`randY + randR`) goes beyond the bottom boundary of the canvas (`canvas_height - padding`).
- We check if the top edge of the circle (`randY - randR`) goes beyond the top boundary of the canvas (`padding`).

If any of these conditions are true, it means the circle would go off the edge of the canvas, and we set `placeable` to `false`. This ensures that the new circle stays within the padded boundaries of the canvas.

#### Finalizing Circle Placement

In this part, we finalize the placement of the circle if it meets all the criteria:

```javascript
  if(placeable){
    circles.push(
      {
        x: randX, y: randY, r: randR
      }
    )
  }
}
```

- `if(placeable)`: We check if the `placeable` flag is still `true`, meaning the circle does not overlap any existing circles and stays within the canvas boundaries.
- `circles.push({ x: randX, y: randY, r: randR })`: If the circle is placeable, we add it to the `circles` array. We store the circle's center coordinates (`randX`, `randY`) and radius (`randR`).

This adds the successfully placed circle to our list of circles.

### Drawing the Circles

In this part, we handle the drawing of the circles on the canvas:

```javascript
strokeWeight(2)
noFill()
for(let circle of circles){
  ellipse(
    circle.x,
    circle.y,
    circle.r * 2
  )
}

noLoop()
```

- `strokeWeight(2)`: This sets the thickness of the circle outlines to 2 units. It makes the borders of the circles a bit thicker.
- `noFill()`: This ensures that the circles are not filled with any color, so only the outlines are drawn.
- `for(let circle of circles)`: We loop through each circle in the `circles` array.
- `ellipse(circle.x, circle.y, circle.r * 2)`: For each circle, we draw it on the canvas using the `ellipse` function. This function takes the center coordinates (`circle.x`, `circle.y`) and the diameter (`circle.r * 2`), which is twice the radius.
- `noLoop()`: This stops the `draw` function from continuously running. It is not necessary here since we're drawing everything in the setup() function, but is good practice to have it so that the draw() function doesn't run unnecessarily.

This section finalizes the visual representation of the circles and stops further drawing.


### Summary

And this covers the entire code already! The last section we went through handles the drawing of the circles and ensures that the drawing loop only runs once.

To summarize:

1. **Initialization and Setup**: We initialized variables, set up the canvas, and prepared it for drawing.
2. **Circle Placement Attempts**: We randomly determined where and how big each circle would be, and checked if it could be placed without overlapping or going off the canvas.
3. **Circle Validation**: We validated that the new circle didn't overlap existing ones and stayed within the canvas boundaries and stored it in an array to later draw it.
4. **Drawing the Circles**: We drew the circles on the canvas, set the outline thickness.





