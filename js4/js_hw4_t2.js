const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawai'];
const myBakesPizzas = ['4 season', 'Peperoni', 'caprichosa', 'Vegetarian', 'Cheff Pizza', 'hawai'];

const lowerCasecompetitorPizzas = competitorPizzas.map(competitorPizzas => competitorPizzas.toLowerCase());
const lowerCasemyBakesPizzas = myBakesPizzas.map(myBakesPizzas => myBakesPizzas.toLowerCase());

const diffPizzas = [];

for (let i = 0; i < lowerCasemyBakesPizzas.length; i++) {

    if (!lowerCasecompetitorPizzas.includes(lowerCasemyBakesPizzas[i])) {
        diffPizzas.push(lowerCasemyBakesPizzas[i]);
    }

}
console.log(diffPizzas.length ? diffPizzas : null);
 

