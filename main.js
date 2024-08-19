let toggle;
let body;
let btn;
let iframe;
let tog;
let hRange;
let map = {}
let image = '';
let lightMode = localStorage.getItem('LightMode');

document.addEventListener('keydown', (event) => {
    map[event.keyCode] = event.type == 'keydown'

    if(map[17] && map[90]){
        execCmd('undo');
    }
})
document.addEventListener('keyup', (event) => {
    map[event.keyCode] = false;
})
function enableEditMode() {
    getElements();

    richTextField.document.designMode = 'On';
    richTextField.document.body.style.fontFamily = 'Arial';
    richTextField.document.body.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lacinia odio. Etiam non sollicitudin risus. Cras maximus, leo eget dictum porta, turpis sem convallis erat, ac viverra arcu nisl sit amet nibh. Nam posuere finibus enim et interdum. Mauris malesuada aliquet nulla a ultricies. Suspendisse non justo id risus luctus gravida. Nam a fermentum nisl, nec porttitor lorem.'

    if(lightMode == 'dark'){
        Dark();
    } else if(lightMode == 'light'){
        Light();
    } else {
        Dark();
    }
}
function getElements(){
    toggle = document.getElementById("toggle-mode");
    tog = document.getElementById("toggle");
    body = document.getElementById("body");
    btn = document.querySelectorAll("#btn");
    iframe = document.getElementById("TextArea");
    hRange = document.querySelector(".h-range");
}
function execCmd(command,argument = null) {
    richTextField.document.execCommand(command, false, argument);
}
function toggleMode() {
    if(event.target.className === 'fas fa-toggle-off'){
        Dark();
    } else {
        Light();
    }
}
function Dark(){
    localStorage.setItem('LightMode','dark');

    tog.className = 'fas fa-toggle-on'
    event.target.className = "fas fa-toggle-on";
    richTextField.document.body.style.color = '#fff';
    richTextField.document.body.classList.toggle('dark',true);
    iframe.classList.toggle('dark',true);
    toggle.classList.toggle('dark',true);
    body.classList.toggle('dark',true);
    
    for(i = 0;  i < btn.length; i++){
        btn[i].classList.add('dark');
    }
}
function Light(){
    localStorage.setItem('LightMode','light');

    event.target.className = "fas fa-toggle-off";
    richTextField.document.body.style.color = '#000';
    richTextField.document.body.classList.toggle('dark',false);
    iframe.classList.toggle('dark',false);
    toggle.classList.toggle('dark',false);
    body.classList.toggle('dark',false);

    for(i = btn.length - 1;  i > -1; i--){
        btn[i].classList.remove('dark');
    }
}