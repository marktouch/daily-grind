// alert("can you see this");
function coffeeTemplate(coffee){
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
</p>
    `;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);
if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}

myDay = parseInt(myDay);



switch(myDay){
    case 0:
        today = "Sunday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "a picture of a pumpkin spice latte",
            color: "orange",
            day: "Sunday",
            desc: `I like me some PSL!`
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "a picture of a caramel latte",
            color: "BurlyWood",
            day: "Monday",
            desc: `I like me some caramel latte!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "a picture of a bubble tea",
            color: "pink",
            day: "Tuesday",
            desc: `I like me some Bubble Tea!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "a picture of a cold brew",
            color: "CornflowerBlue",
            day: "Wednesday",
            desc: `I like me some Cold Brew!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "a picture of a drip coffee",
            color: "black",
            day: "Thursday",
            desc: `I like me some Drip Coffee!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "a picture of a frappaccino",
            color: "green",
            day: "Friday",
            desc: `I like me some Frappaccino!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "a picture of a mocha",
            color: "DarkGrey",
            day: "Saturday",
            desc: `I like me some Mocha!`
        };
    break;

    default:
        today = "Something went wrong!";
    
}


// inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);

// console.log(coffee);