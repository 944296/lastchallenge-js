const any = document.querySelector("#any");

const ANY_CLASSNAME = "moving";

function handlemouseenter() {
  any.classList.add(ANY_CLASSNAME);
}
function handlemouseleave() {
  any.classList.remove(ANY_CLASSNAME);
}

any.addEventListener("mouseenter", handlemouseenter);
any.addEventListener("mouseleave", handlemouseleave);
