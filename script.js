const app = {
    init(selectors) {
        this.fahrenheit = document.querySelector(selectors.fahrenheit);
        this.celsius = document.querySelector(selectors.celsius);

        this.fahrenheit.addEventListener('keyup', handleInput);
        this.celsius.addEventListener('keyup', handleInput);

        this.fahrenheit.addEventListener('click', clearInput);
        this.celsius.addEventListener('click', clearInput);

    },


}

app.init({
    fahrenheit: 'input[name="fahrenheit"]',
    celsius: 'input[name="celsius"]',
});


function convertToFahrenheit(value) {
    return value * 9 / 5 + 32;
}

function convertToCelsius(value) {
    return (value - 32) * 5 / 9;
}

function handleInput(event) {
    const input = event.target;
    if (input.name === 'fahrenheit')
        celsius.value = convertToCelsius(input.value);
    else
        fahrenheit.value = convertToFahrenheit(input.value);
}

function clearInput() {
    event.target.value = '';
}