//clock
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//d-day
const clockTitle = document.querySelector(".js-clock");

function diffDay() {
  const masTime = new Date("2023-12-25");
  const todayTime = new Date();

  const diff = masTime - todayTime; //밀리세컨드단위로 출력된 날짜차이

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24))); //밀리세컨드단위로 출력된 날짜차이를 (밀리세컨드단위 * 초 * 분 * 하루)로 나눈 몫 =  날짜
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  ); //(밀리세컨드단위로 출력된 시간을) 하루로 나눈 나머지 = 시간
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  ); //(밀리세컨드단위로 출력된 분을) 한시간으로 나눈 나머지 = 분
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0"); //(밀리세컨드단위로 출력된 초를) 1분으로 나눈 나머지 = 초

  clockTitle.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);
