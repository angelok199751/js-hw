const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myBakesPizzas = ['4 season', 'Peperoni', 'Caprichosa', 'Vegetarian', 'Cheff Pizza'];

const diffPizzas = [];

for (let i = 0; i < myBakesPizzas.length; i++) {
    
    if (!competitorPizzas.includes(myBakesPizzas[i])) {
        diffPizzas.push(myBakesPizzas[i].toLowerCase());
    }
 
}
console.log(diffPizzas.length ? diffPizzas : null);
