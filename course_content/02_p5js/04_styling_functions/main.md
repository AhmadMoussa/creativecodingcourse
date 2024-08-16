
P5 doesn't only allow you to draw shapes, but also control the style and color of the drawn shapes, there's three important functions to this end: `strokeWeight()`, `stroke()`, and `fill()`. Calling these functions before your drawing functions changes their appearance and aesthetic. Let's have a closer look at them:

### Outline thickness with `strokeWeight()`

The `strokeWeight()` function accepts a number and essentially lets you specify the thickness of a shape's outline. Example:

```javascript
function setup(){
    createCanvas(400, 400);
    background(220);
    
    strokeWeight(1);
    ellipse(100,200,50);
    
    strokeWeight(2);
    ellipse(200,200,50);
    
    strokeWeight(4);
    ellipse(300,200,50);
    
    noLoop()
}
```

<iframe src="https://editor.p5js.org/AhmadMoussa/full/dtP24pCHS" width="100%" height="400px"></iframe>

### Outline color with `stroke()`

The `stroke()` function accepts a color as input (number/RGB values/hex value) and essentially lets you specify the color of a shape's outline. Example:

```javascript
function setup(){
    createCanvas(400, 400);
    background(220);
    
    stroke(255,0,0);
    ellipse(100,200,50);
    
    stroke(0,255,0);
    ellipse(200,200,50);
    
    stroke(0,0,255);
    ellipse(300,200,50);
    
    noLoop()
}
```

<iframe src="https://editor.p5js.org/AhmadMoussa/full/IIVJ1Gb1E" width="100%" height="400px"></iframe>

### Shape color with `fill()`

The `fill()` function accepts a color as input (number/RGB values/hex value) and essentially lets you specify the color of a shape. Example:

```javascript
function setup(){
    createCanvas(400, 400);
    background(220);
    
    fill(255,0,0);
    ellipse(100,200,50);
    
    fill(0,255,0);
    ellipse(200,200,50);
    
    fill(0,0,255);
    ellipse(300,200,50);
    
    noLoop()
}
```

<iframe src="https://editor.p5js.org/AhmadMoussa/full/hrCVJHhDI" width="100%" height="400px"></iframe>

### Removing outlines and fills with `noStroke()` and `noFill()`

As their names suggest, these functions let you remove the stroke or fill color of a shape entirely.

```javascript
function setup(){
    createCanvas(400, 400);
    background(220);
    
    fill(255,0,0);
    ellipse(100,200,50);
    
    noFill()
    ellipse(200,200,50);
    
    fill(255,0,0);
    noStroke()
    ellipse(300,200,50);
    
    noLoop()
}
```

<iframe src="https://editor.p5js.org/AhmadMoussa/full/tHFcT88cX" width="100%" height="400px"></iframe>

### Order Matters

It's important to note that the order of these operations with respect to the drawing functions matter, to obtain the results that you are envisioning.