const button = document.querySelector("button");
button.addEventListener("click", answer);
function answer(){
let input = document.getElementById("input")
let city = input.options[input.selectedIndex].value;
let population = 0;
let literacyRate = 0;
let language = "";

switch(city){
    case "Bengaluru":
        console.log(city)
        population = 12345
        literacyRate = 90.2
        language = "kanadam"
    break
    case "Chennai":
        population = 1234;
        literacyRate = 80.2;
        language = "Tamil";
    break;
    case "Delhi":
        population = 123;
        literacyRate = 60.2;
        language = "Hindhi";
    break;
    case "Mumbai":
        population = 12;
        literacyRate = 40.2;
        language = "Mariti";
    break;
}
let text = `My native is ${city} and the population is ${population} and the`
console.log(text)       
}