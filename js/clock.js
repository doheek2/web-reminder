const digitalClock = document.querySelector("#digitalClock");

function getClock() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hr_rotation = 30 * hr + min / 2;
    let min_rotation = 6 * min;
    let sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    let digitalHr = String(hr).padStart(2, "0");
    let digitalMin = String(min).padStart(2, "0");
    digitalClock.innerText = `${digitalHr} : ${digitalMin}`;
}

getClock();
setInterval(getClock, 1000);