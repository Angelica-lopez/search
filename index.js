const input = document.querySelector(".content__seeker-space");
const button = document.querySelector(".content__seeker-button");
const guest = ["jorge", "lizet", "nicole", "pipe", "camilo"];


button.addEventListener('click', function() {
    for(i=0; i<=2; i++) {
        if(guest.includes( input.value) ) {
            alert("Felicidades si has sido invitado");
            break;
        }else {
            alert("Lo siento no has sido invitado :(");
            break;
        }
    }
})


