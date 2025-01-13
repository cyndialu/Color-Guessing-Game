const changeButtonColor = () => {
    const r = Math.floor(Math.random() * 256);  //generate random rgb number
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;  //create the color string
    document.getElementById("btnStart").style.backgroundColor = color;  //set the background color of the button
}

setInterval(changeButtonColor, 1000);   //change color every second

const COLORS_ARRAY=["blue","cyan","magenta","yellow","green","gray","gold","red","white","orange"]; //array created in non-alphabetical order

function runGame(){
    let guess = "";
    let correct = false;
    let numTries = 0;
    const targetIndex = Math.floor(Math.random()* COLORS_ARRAY.length); //generate a random number between 0(inclusive) and the length of color array(10 exclusive)
    const target = COLORS_ARRAY[targetIndex]; //get the targeted color that has the index of the generated random number
    console.log(targetIndex+" "+target);
    do{
        //sort the list of colors in the COLORS_ARRAY alphabetically and display them to the user separated by a comma and space 
        guess = prompt(`I am thinking of one of these colors:\n\n${COLORS_ARRAY.sort().join(", ")}\n\nWhat color am I thinking of?\n`);
        if(guess===null){
            alert(`You didn't make a guess.\nGame over. Try again next time!`);
            return;
        }
        correct = checkGuess(guess.toLowerCase(),target); //coverts user guess to lowercase letters
        numTries+=1;
        alert(`Number of attemp: ${numTries}`);
    }while(!correct)
    alert(`Congratulations!\nThe color I am thinking of is: ${target}\nYour total tries: ${numTries} time(s)`);
    document.body.style.backgroundColor = guess; //change background color to the correctly guessed color
}

const checkGuess = (guess, target) =>{
    let correct = false;               
    if(COLORS_ARRAY.includes(guess)===false){ //check if the color array contains the user guess input
        alert(`Sorry, your color is not recognized.\n\nPlease choose a valid color.`);
    }
    else if(guess>target){
        alert(`Sorry, "${guess}" is not the color.\n\nPlease try again.\n\nHint: your color is alphabetically higher than mine.`);
    }
    else if(guess<target){
        alert(`Sorry, "${guess}" is not the color.\n\nPlease try again.\n\nHint: your color is alphabetically lower than mine.`);
    }
    else{
        correct = true;
        alert(`You got it!`);
    }
    return correct;
}