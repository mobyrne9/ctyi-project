var list = ["<iframe width="592" height="359"
src="https://www.youtube.com/embed/gghFPavXE7Q">
</iframe>" , "Menial - Mt Eddy", "Fluorescent Adolescent - Arctic Monkeys", "Hostiles - Damon Albarn", "No Surprises - Radiohead", "ZIPPER - Brockhampton", "Bethlehem - Declan McKenna", "Dancing In The Moonlight - Thin Lizzy", "Alright - Supergrass", "I Want To Break Free - Queen", "Rebel Rebel - David Bowie", "Changes - David Bowie", "End of a Century - Blur", "Coffee and TV - Blur", "In A Week - Hozier"];
function buttonClicked() {
  document.getElementById("displayme").innerHTML = 
    list[Math.floor(Math.random()*list.length)];
}