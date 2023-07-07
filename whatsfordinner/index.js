

const button1 = document.getElementById("clickme")
const input = document.getElementById("enterbox")


// Initialize a linked list to hold the food items

const myfoodlist = new foodlist("Eat Out");
myfoodlist.push('Chicken Tacos')
myfoodlist.push('Salmon')
myfoodlist.push('Spaghetti')
myfoodlist.push('Quesadillas')
myfoodlist.push('Steak and potatoes')
myfoodlist.push('Chicken and rice')
myfoodlist.push('Chicken wings')
myfoodlist.loop();

// create function where if the button :clickme is clicked the button pushes a random value into the 

button1.addEventListener('click', ()=> {
    input.innerHTML = myfoodlist.grabvalue(Math.floor(Math.random() * 100))
});
