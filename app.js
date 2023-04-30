//numPlanets = 8
//yearNepDiscov = 1846

//{yearNepDiscov: 1846, yearMarsDiscov: 1659}

//your name is Alejandro and you like purple
//your name is Melissa and you like green
//your name is undefined and you like green

//first= Maya
//second= Marisa
//third= Chi

//raindrops = "raindrops on rose"
//whiskers = "whiskers on kittens"
//aFewOfMyFavThings = ["line2", "line3", "line4"] (I dont want to type the whole poem)

//numbers = [10,30,20]

const obj = {
    numbers: {
        a:1,
        b:2
    }
};
const {a,b} = obj.numbers



var arr = [1,2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];



raceResults(['Tom', 'Marg', 'Ally', 'Dave', 'Pete'])

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})