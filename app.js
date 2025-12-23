let heading = document.getElementById('heading') ;
let btn = document.getElementById('btn');
let img = document.getElementById('bulb') ;
let isOn = false;
function bulbOnOff(){if(img.src.includes('off_bulb.jfif')){
    heading.innerHTML = 'Bulb On';
    btn.innerHTML = 'Bulb Off';
    img.src = "./assets/on-bulb.jfif";
}
else{
    heading.innerHTML = 'Bulb off';
    btn.innerHTML = 'Bulb on';
    img.src = './assets/off_bulb.jfif';

}}