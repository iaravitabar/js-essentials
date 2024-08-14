// 0 - Bajar repo, hacer hola mundo console.log
console.log("Hola mundo")

// 2 - Funciones:
// add(firstOperator, secondOperator),
function add(firstOperator, secondOperator){
    sum= firstOperator + secondOperator
    return sum;
}
console.log(add(2,2))
// subtract(firstOperator, secondOperator),
function substract(firstOperator, secondOperator){
    resta = firstOperator - secondOperator
    return resta;
}
console.log(substract(2,2))
// divide(firstOperator, secondOperator),
function divide(firstOperator, secondOperator){
    div = firstOperator / secondOperator
    return div;
}
console.log(divide(2,2))
// multiply(firstOperator, secondOperator)
function multiply(firstOperator, secondOperator){
    mult = firstOperator * secondOperator
    return mult;
}
console.log(multiply(2,2))

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress(temperature, isRaining){
    if (isRaining === true){
        console.log("llevar paraguas");
    }
    if (temperature < 10){
        console.log("ir en auto");
    }
    else if(temperature > 30){
        console.log("ir de short");
    }
    else if (temperature ===30){
        console.log("usar lentes");
    }
}
(dress(3,true));
(dress(40,true));
(dress(30,false));
// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator){
    return operation(firstOperator,secondOperator);
}
console.log(calculate(add,2,2));

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating(name, foods){
    foods.forEach(foods => console.log(`${name} come ${foods}`));
}
eating("juan",["uvas","manzanas","peras"])

// 6 - Funcion
// finalCountDown(count)
function finalCountDown(count){
    for (let i = count; i>= 0; i--){
        console.log(i)
    }
    console.log("tiempo!")
}
finalCountDown(5)

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
function getGrade(score){
    if (score ===0 || score <=40 ){
        console.log("D")
    }
    else if (score=== 41 || score <=60){
        console.log("R")
    }
    else if (score=== 61 || score <=74){
        console.log("B")
    }
    else if (score=== 75 || score <=84){
        console.log("BMB")
    }
    else if (score=== 85 || score <=96){
        console.log("MB")
    }
    else if (score=== 97 || score <=100){
        console.log("S")
    }
}
getGrade(86)

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles
function fillCart(person, articlesCollection){
    articlesCollection.forEach(article => {
        person.cart.push(article);
    });
}
let person = { name: 'Pepe', cart: [] };
let articlesCollection = [
    { article: '👟', amount: 1, price: 25 }];

fillCart(person, articlesCollection);
console.log(person.cart);
// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana (inventory){
    let count = 0;
    for (let i = 0; i< inventory.length; i++){
        if (inventory[i] === "banana"){
            count++;
        }
    }
    console.log(count);
    return count
}
countBanana(["banana", "palta", "banana","mango"])
// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
function getTotal(inventory){
    let total = 0;
    inventory.forEach(article => {
        total+= article.price * article.quantity;
    });
    return total;
}
let inventory = [
    { article: '🍔', price: 15, quantity: 1 },
    { article: '🍟', price: 10, quantity: 2 }
];

let total = getTotal(inventory);
console.log(total); 
