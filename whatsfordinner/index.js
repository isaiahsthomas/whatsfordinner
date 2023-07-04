

myfoodlist = new foodlist('Quesadillas');
myfoodlist.push('Chicken Tacos');
myfoodlist.push('Roasted Chicken and Veggies');
myfoodlist.push('Salmon and Roasted Veggies');
myfoodlist.push('Chicken Alfredo')
myfoodlist.push('Steak and Potatoes')

myfoodlist.loop();
console.log(myfoodlist.grabvalue(Math.floor(Math.random() * 100)))

console.log(myfoodlist);

