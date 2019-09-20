var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');

slider1.addEventListener('click', function() {
  slider1.setAttribute('class', 'selected-slider');
  slider2.setAttribute('class', 'slider');
  slider3.setAttribute('class', 'slider');
  image1.setAttribute('src', 'image1.png');
  image2.setAttribute('src', 'image2.png');
  image3.setAttribute('src', 'image3.png');
})

slider2.addEventListener('click', function() {
  slider2.setAttribute('class', 'selected-slider');
  slider1.setAttribute('class', 'slider');
  slider3.setAttribute('class', 'slider');
  image1.setAttribute('src', 'image2.png');
  image2.setAttribute('src', 'image3.png');
  image3.setAttribute('src', 'image4.png');
})

slider3.addEventListener('click', function() {
  slider3.setAttribute('class', 'selected-slider');
  slider1.setAttribute('class', 'slider');
  slider2.setAttribute('class', 'slider');
  image1.setAttribute('src', 'image3.png');
  image2.setAttribute('src', 'image4.png');
  image3.setAttribute('src', 'image5.png');
})
