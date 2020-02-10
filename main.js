var pizza = {
    crust: 'thin',
    cheese: 'mozzarella',
    sauce: 'red',
    addToppings: function() {
        console.log('Please add pepperoni and sausage');
    }
}

function orderPizza() {
    console.log(pizza[0]);
    console.log(pizza[1]);
    console.log(pizza[2]);
    console.log(pizza.addToppings())

}

orderPizza();