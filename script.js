function changeColor() {
    var body = document.querySelector("body");
    var currentColor = body.style.backgroundColor;
    if (currentColor === "rgb(245, 145, 239)") {
      body.style.backgroundColor = "black";
    } else {
      body.style.backgroundColor = "rgb(245, 145, 239)";
    }
    var body2 = document.querySelector("div");
    var currentcolor2 = body2.style.backgroundColor;
    if (currentcolor2 === "rgb(245, 145, 239)") {
        body2.style.backgroundColor = "black";
    } else {
        body2.style.backgroundColor = "rgb(245, 145, 239)";
    }
  }