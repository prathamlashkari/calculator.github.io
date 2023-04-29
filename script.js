let inputs = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let aud  = new Audio("resource/Click.mp3")

let values = "";
// Here we convert all the buttons to the array form so we apply for each loop

let btnarr = Array.from(buttons)
// now each btn will iterate by item variable
btnarr.forEach(item => {
    item.addEventListener('click', (e) => {
        aud.play()
        if (e.target.innerHTML == '=') {
            values = eval(values)
            input.value = values;
        }
        else if (e.target.innerHTML == "AC") {
            values = "";
            inputs.value = values;
        }
        else if (e.target.innerHTML == "DEL") {
            values = values.substring(0, values.length - 1);
            inputs.value = values;
        }
        else {
            values += e.target.innerHTML;
            inputs.value = values;
        }
    })
})