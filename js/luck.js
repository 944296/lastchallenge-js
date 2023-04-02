const lucks = [
  { luck: "할 수 있어!" },
  { luck: "괜찮아 그럴 수 있음!" },
  { luck: "행복은 생각에 따라 달라질 수 있습니다." },
  { luck: "객관적으로 생각할 때 입니다." },
  { luck: "위풍당당" },
  { luck: "현재에 집중하라!" },
  { luck: "노력이 천재를 이긴다." },
  { luck: "말보다는 실천" },
  { luck: "배려하며 살자" },
  { luck: "남에게 상처주지말자! 돌아온다!" },
];

const luck = document.querySelector(".luck-box span");

const todaysLuck = lucks[Math.floor(Math.random() * lucks.length)];

luck.innerText = todaysLuck.luck;
