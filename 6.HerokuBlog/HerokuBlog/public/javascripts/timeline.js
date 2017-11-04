function loadNumberOfPost () {
    var number_xhr = new XMLHttpRequest();
    number_xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(number_xhr.responseText);
        length = data.length / 2;
        addContents(length);
      }
    }
    number_xhr.open("GET", "https://lastbranchpost.herokuapp.com/data", true);
    number_xhr.send();        
}

function addContents (number) {
  var title_xhr = new XMLHttpRequest();
  title_xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(title_xhr.responseText);
        var title = data.title
        contentsDiv.innerHTML = "<h2 id='"+number+"_Title'>"+title+"</h2>";
        if(number > 1)
          addContents(number - 1);
    }
  };
  title_xhr.open("GET", "https://lastbranchpost.herokuapp.com/post/"+number, true);
  title_xhr.send();

  contentsDiv = document.createElement("div");
  contentsDiv.className = "contents";
  contentsDiv.id = number;
  contentsDiv.onclick = function () {
    loadPost(number);
  }

  contentsArticle = document.getElementById("contentsArticle");
  contentsArticle.appendChild(contentsDiv, contentsArticle);
}

function loadPost(number) {
    var post_xhr = new XMLHttpRequest();
    post_xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(post_xhr.responseText);
        postDescriptionCallback(number,data.description);
        postTitleCallback(number,data.title);
      }
    };
    post_xhr.open("GET", "https://lastbranchpost.herokuapp.com/post/"+number, true);
    post_xhr.send();
}

function postDescriptionCallback(number,description) {
  document.getElementById(number).innerHTML = description;
}

function postTitleCallback(number,title) {
  document.getElementById("contents_titleName").innerHTML = title;
  document.getElementById("contents_titleName").id = "contents_title";
}

loadNumberOfPost();
