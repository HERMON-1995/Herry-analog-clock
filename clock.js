const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const setElementColor = (element, variableName) => {
    const randomColor = getRandomColor();
    element.style.setProperty('--clr', randomColor);
    document.querySelector(variableName).style.setProperty('--clr2', randomColor);
};

const setClockHands = () => {
    const hh = document.getElementById('hh');
    const mm = document.getElementById('mm');
    const ss = document.getElementById('ss');
    const secDot = document.querySelector('.sec_dot');
    const minDot = document.querySelector('.min_dot');
    const hrDot = document.querySelector('.hr_dot');
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    hh.style.strokeDashoffset = 510 - (510 * h) / 12;
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;

    hr.style.transform = `rotateZ(${h * 30}deg)`;
    sc.style.transform = `rotateZ(${s * 6}deg)`;
    mn.style.transform = `rotateZ(${m * 6}deg)`;
};

document.querySelector('.changeColorBtn').addEventListener('click', () => {
    setElementColor(document.querySelector('.sec_dot'), '#sc');
    setElementColor(document.querySelector('.min_dot'), '#mn');
    setElementColor(document.querySelector('.hr_dot'), '#hr');
});

setInterval(setClockHands, 1000);
