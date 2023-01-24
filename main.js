// var declarations
let km,age,price;
const final_price = null;
const cost_per_km = 0.21;

//input
km = prompt("Quanti km devi percorrere? : ");
age = prompt("Inserisci la tua età: ");

//algorithm
price = (km * 0.21);

if(age < 18){
    //20% discount
    price = (price -(20 / 100) * price);
    
}else if(age >= 65){
    //40% discount
    price = (price - ((40 / 100) * price));
}

//output
document.getElementById("price").innerHTML= (price).toFixed(2);

