//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        let j = dog_names[i].toLowerCase();
        let k = dog_string.toLowerCase();
        if (k.includes(j)){
            console.log('Matched dog_name');
        } else {
            console.log('No Matches');
        };
    };
};

findWords();

function findWords2(){
    for(dog_name of dog_names){
        if ((dog_string.toLowerCase()).includes(dog_name.toLowerCase())){
            console.log('Matched dog_name');
        } else {
            console.log('No Matches');
        };
    };
};

findWords2();

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
let arr = [];
let arr2 = [];

function replaceEvens(){
    for(let i = 0; i < array.length; i++){
        if (i === 0){
            arr.push('even index')
        } else if (i % 2 === 0){
            arr.push('even index')
        } else {
            arr.push(array[i])
        };
    };
    console.log(arr)
};

replaceEvens();

function replaceEvens2(){
    for(let i = 2; i < (array.length + 2); i++){
        if (i % 2 === 0){
            arr2.push('even index')
        } else {
            arr2.push(array[i-2])
        };
    };
    console.log(arr2);
};

replaceEvens2();


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
