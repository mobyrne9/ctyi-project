var list = ["For Tomorrow - Blur", "Menial - Mt Eddy", "Fluorescent Adolescent - Arctic Monkeys", "Hostiles - Damon Albarn", "No Surprises - Radiohead", "ZIPPER - Brockhampton"];

function buttonClicked() {
  document.getElementById("displayme").innerHTML = 
    list[Math.floor(Math.random()*list.length)];
}