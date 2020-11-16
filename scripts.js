function myFunction() {
    var x = document.getElementsByClassName("link")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}