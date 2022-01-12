//----- დავალება1-----

/*function isEven(value){
    if (value % 2 == 0){
        return true;
    }else{
        return false;
    }     
}
console.log(isEven(100));
*/
const isEven = (value) =>{
    if (value % 2 == 0){
        return true;
    }else{
        return false;
    } 
}
console.log(isEven(99));

//----- დავალება 2------
/*function  getCurrencySymbolFromCode(chooseValuta){
    if(chooseValuta === "USD"){
        console.log("$");
    }else if(chooseValuta === "EUR"){
        console.log("€")
    }else if(chooseValuta === "GEL"){
        console.log("ლ")
    }
    else if(chooseValuta !== "GEL" || chooseValuta !== "USD" ||  chooseValuta !== "EUR"){
        console.log(chooseValuta) 
    }
}
getCurrencySymbolFromCode("ss");   */
const  getCurrencySymbolFromCode = (chooseValuta) =>{
    if(chooseValuta === "USD"){
        return "$";
    }else if(chooseValuta === "EUR"){
        return "€";
    }else if(chooseValuta === "GEL"){
        return "ლ";
    }
    else if(chooseValuta !== "GEL" || chooseValuta !== "USD" ||  chooseValuta !== "EUR"){
        return chooseValuta;
    }
}
console.log(getCurrencySymbolFromCode("GEL"));
// -----დავალება 3------
/*function toLowCase(texts){
    let lower = texts.toLowerCase();
    console.log(lower);
}
toLowCase("MY NAME IS JOHN");  */

const toLowCase = (texts) =>{
    let lower = texts.toLowerCase();
    return lower;
}
console.log(toLowCase("MY NAME IS JOHN"));

//-----დავალება 4----
const lessonArray = [5, 2, 4, 6, 7, 9, 11, 100, 34, 59];
const onlyEvenNums = (numbers) =>{
    let evenNums = numbers.filter(number => (number % 2 == 0));
    return evenNums;
}
console.log(onlyEvenNums(lessonArray)); 
//------დავალება 5-----
const userArrays =[
    {name:"Nika", age: 23},
    {name:"Gio", age: 25},
    {name:"Lasha", age: 27},
]
const FindByName = userArrays.find((user) => {
    return user.name === "Nika";
});
console.log(FindByName);