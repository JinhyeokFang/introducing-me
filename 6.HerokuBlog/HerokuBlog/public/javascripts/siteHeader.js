function repeat() {
  var a = 1;
  window.setInterval(() => {
    document.getElementById("site_header").style.backgroundColor = "rgba(255, 255, 255, "+a+")";
    if (document.body.scrollTop == 0) {
      if (a < 1)
        a += 0.03;
      document.getElementById("site_header").style.boxShadow = "0px 5px 3px silver";
    } else {
      if (a > 0.3)
        a -= 0.02;
      document.getElementById("site_header").style.boxShadow = "none";
    }
  }, 10);
}

repeat();