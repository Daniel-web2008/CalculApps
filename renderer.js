let screen = document.getElementById("screen");
let touches = document.querySelector(".touches button");
let screentext = "";

touches.forEach(button =>{
    button.addEventListener("click", () =>{
        let value = button.getAttribute("date-value");
        let action = button.getAttribute("data-action");

        if(value){
            screentext = screen.value;
            screentext = screentext+value;
            screen.value = screentext;
        }

        if(action){
            switch(action){
                case "clear":
                    screentext = "";
                    screen.value = "";
                    break

                case "delete":
                    screentext = screentext.slice(0, -1);
                    screen.value = screentext;
                    break

                case "OFF":
                    screentext = "";
                    
            }
        }
    })
})