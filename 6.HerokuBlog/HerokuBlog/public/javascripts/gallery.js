function loadNumberOfImages () {
    var number_xhr = new XMLHttpRequest();
    number_xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(number_xhr.responseText);
        length = data.length;
        for (var i = length; i > 0; i--) {
          addImages(i);
        }
      }
    }
    number_xhr.open("GET", "https://lastbranchimage.herokuapp.com/data", true);
    number_xhr.send();        
}

function addImages (number) {
  image = document.createElement("img");
  image.src = "https://lastbranchimage.herokuapp.com/images/"+number+".jpg";

  imagesArticle = document.getElementsByTagName("article")[0];
  imagesArticle.appendChild(image, imagesArticle);
}

loadNumberOfImages();