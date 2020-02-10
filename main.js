console.log('hello world!');

var pizza = {
    crust: 'thin',
    cheese: 'mozzarella',
    sauce: 'red',
    addToppings: function () {
        console.log('Please add pepperoni and sausage');
    }
};

function orderPizza() {
    console.log(pizza[0]);
};