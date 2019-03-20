console.log("I am the loop file :p")

var list = ["banana","apple","mango","peach"];

console.log (list [0]); //banana
console.log (list [1]); //apple
console.log (list [2]); //mango
console.log (list [3]); //peach
console.log (list [4]); //undefined

// BEHOLD THE FOR LOOP !
for (let i = 0; i<list.length; i += 1) {
    console.log ("index =>" +i)
    console.log (i)
}