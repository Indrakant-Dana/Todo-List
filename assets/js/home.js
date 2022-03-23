var cat = document.querySelectorAll(".task_type");
var val = document.getElementsByClassName("input-ctg");

// console.log(cat);
for (i of cat) {
  let task_type = i.innerHTML.trim();
  if (task_type === "Work") {
    i.classList.add("bg-clr-red");
  } else if (task_type === "Personel") {
    i.classList.add("bg-clr-green");
  } else if (task_type === "Home") {
    i.classList.add("bg-clr-blue");
  } else if (task_type === "College") {
    i.classList.add("bg-clr-cyan");
  }
}
