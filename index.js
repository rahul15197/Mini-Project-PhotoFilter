var image = null;
var canvas;
function loadimage() {
  var imgfileinput = document.getElementById("imageinput");
  image = new SimpleImage(imgfileinput);
  canvas = document.getElementById("c1");
  image.drawTo(canvas);
}
function doGray() {
  if (image == null || !image.complete()) {
    alert("Image Not properly uploaded");
    return;
  }
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  canvas = document.getElementById("c1");
  image.drawTo(canvas);
}
function doRed() {
  if (image == null || !image.complete()) {
    alert("Image Not properly uploaded");
    return;
  }
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  canvas = document.getElementById("c1");
  image.drawTo(canvas);
}
function doBlur() {
  if (image == null || !image.complete()) {
    alert("Image Not properly uploaded");
    return;
  }
  var output = new SimpleImage(image.getWidth(), image.getHeight());
  for (var pixel of image.values()) {
    if (Math.random(0, 1) < 0.5) {
      output.setPixel(pixel.getX(), pixel.getY(), pixel);
    } else {
      output.setPixel(
        Math.random(pixel.getX(), pixel.getX() + 10),
        Math.random(pixel.getY(), pixel.getY() + 10),
        pixel
      );
    }
  }
  canvas = document.getElementById("c1");
  output.drawTo(canvas);
}
function doReset() {
  if (image == null || !image.complete()) {
    alert("No image to Reset");
    return;
  } else {
    loadimage();
  }
}