const max_tutlan_rakam = 10;
const max_hak_sayisi = 4;
//Random wagon numbers from 1 to 10 are generated and stored in this wagon
const suspiciousWagon = Math.floor((Math.random() * max_tutlan_rakam) + 1);
console.log(suspiciousWagon);
let numberOfPredictions = 0;
//the user will have to find the wagon with the problem in max 4 attempts
//the user will be guided by the expressions in the front wagon or the rear wagon to help him find which wagon he is in

for (numberOfPredictions = 0; numberOfPredictions < max_hak_sayisi; numberOfPredictions++) {
    let prediction = +prompt("Tahmininizi giriniz lütfen : ");
    if (suspiciousWagon === prediction) {
        console.log("congratulations correct guess..");
        break;
    } else if (prediction == "") {
        console.log("enter a number")

    } else if (prediction > suspiciousWagon) {
        console.log("see front wagons..")
    } else if (prediction < suspiciousWagon) {
        console.log("see back wagons..")
    }
}
//how many times the user knows and his score (out of 100) will be printed on the console
if (numberOfPredictions < max_hak_sayisi) {
    console.log(`congratulations you have known ${numberOfPredictions + 1} times. you got ${25 * (max_hak_sayisi - numberOfPredictions)} `)
} else {
    console.log("your lost your points 0");
}