const clockContainer = document.querySelector(".js-clock");
const clockTitle =  clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const day = getDay(date.getDay());
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${(day)}`;
    
}

function getDay(n) {
    answer = ''
    switch(n) {
        case 0:
            answer = '일';
            break;
        case 1:
            answer = '월';
            break;
        case 2:
            answer = '화';
            break;
        case 3:
            answer = '수';
            break;
        case 4:
            answer = '목';
            break;
        case 5:
            answer = '금';
            break;
        case 6:
            answer = '토';
            break;
    }
    return answer
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();
