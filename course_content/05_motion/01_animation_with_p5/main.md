
### Why motion is important in Art

Motion is crucial in digital art because it adds a sense of life and energy to the artwork. It's something that isn't possible in traditional art, where artworks are generally static pieces. In contrast, digital art can move and change, which helps to tell a story or express ideas in new ways. For example, animations can show how things evolve over time, making the art more engaging and interesting - the movement can then help capture attention and can make complex themes easier to understand, as the art isn’t just something you look at, but something that unfolds and develops.

Additionally, motion allows artists to experiment with new techniques and concepts that traditional art forms might not accommodate. By using motion, artists can explore how different elements interact and create effects that change over time. This dynamic approach opens up exciting possibilities for creativity, giving artists new ways to express their vision and connect with their audience.

### Moving Shapes on the Canvas and the draw() loop

In p5js the draw() function is crucial for creating any sort of animated or moving things, we've already covered it, but there's more to it. By default it runs 60 times per second - basically the code inside of the draw loop is executed 60 times per second. We refer to the speed that the draw loop is executing at with the term FPS: Frames Per Second - which might be a term you're familiar with if you are into video games.

Inside the draw() function, we can then include code that changes the position, color, or shape of elements on the screen. And because the draw() function runs over and over, any changes we make each time it runs will create the illusion of movement.

For example, if you want to animate a ball moving across the screen, you would update the ball’s position within the draw() function based on some logic, like adding a value to its current position each frame. This constant updating makes the ball appear to move smoothly. By using draw() to manage and update these changes, p5.js lets you create dynamic and lively animations that respond to the passage of time and user interactions. Let's have a look at how this works!


### Example: Animating a moving a Circle

<iframe src="https://openprocessing.org/sketch/2326404/embed/?plusEmbedHash=c8e6314d&userID=272186&plusEmbedTitle=true&show=sketch" width="100%" height="400"></iframe>

Variables: x tracks the circle's horizontal position, and speed determines how fast it moves.
Canvas Setup: createCanvas(400, 200) sets up a canvas 400 pixels wide and 200 pixels high.
Drawing and Moving: Each time draw() runs, it:

1. Clears the canvas using background(220).
2. Draws a circle at position (x, height / 2).
3. Increments x by speed to move the circle horizontally.
4. Reverses direction when the circle reaches the edges of the canvas.