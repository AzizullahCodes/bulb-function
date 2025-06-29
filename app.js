let heading = document.getElementById('heading') ;
let btn = document.getElementById('btn');
let img = document.getElementById('bulb') ;
let isOn = false;
function bulbOnOff(){if(isOn){isOn = false;
    heading.innerHTML = 'Bulb On';
    btn.innerHTML = 'Bulb Off';
    img.src = "./assets/on-bulb.jfif";
}
else{isOn = true;
    heading.innerHTML = 'Bulb off';
    btn.innerHTML = 'Bulb on';
    img.src = './assets/off_bulb.jfif';

}}