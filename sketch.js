let Clap;
function preload() {
  soundFile = loadSound('lonely.mp3'); 
	Clap = loadImage("clapping.png")
}

function setup() {
  createCanvas(400, 400);
  fft = new p5.FFT();
  fft.setInput(soundFile);
  soundFile.play();
	Time = millis();
}

function mousePressed() {
    if (!soundFile.isPlaying()) {
      soundFile.play();
    }

function draw() {
  background(225, 152, 188);
	stroke(255);
	noFill();
	
	
	
  let spectrum = fft.analyze();
  let bassEnergy = fft.getEnergy("bass");

  let threshold = 205;
	
	
	
	var wave = fft.waveform();
	
	beginShape()
	for (var i = 0; i< width; i++) {
		var index = floor(map(i, 0, width, 0, wave.length))
		var x = i
		var y = wave[index] * 300 + height / 2
		vertex(x, y)
	}
	endShape()
	
	heart(-10, -10);
	
 if (bassEnergy > threshold) {
    fill(255, 0, 0);
    image(Clap, 50, 50, 75, 75);
	 image(Clap, 180, 50, 75, 75);
	 image(Clap, 300, 50, 75, 75)
  
}
// fill(255)
// ellipse(207, 320, 50, 50);
// triangle (100, )

// text(mouseX, 10)

function heart(x,y){
	translate(x,y)
	push()
	fill(255);
		ellipse (200, 200, 20, 20);
		ellipse (215, 200, 20, 20);
		triangle (191.5, 205, 223.5, 205, 207.5, 222);
	pop()
	
	fill(0)
	text(mouseX, 10, 10);
  text(mouseY, 10, 20);
}

//im super confused because it was working on open processor and now it doesnt work i added a mouse pressed function and it still doesn't work