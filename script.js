const fahrenheit = document.querySelector('input[name="fahrenheit"]');
const celsius = document.querySelector('input[name="celsius"]');

fahrenheit.addEventListener('change', handleInput);
celsius.addEventListener('change', handleInput);

fahrenheit.addEventListener('click', clearInput);
celsius.addEventListener('click', clearInput);

function convertToFahrenheit(value) {
    return value * 9 / 5 + 32;
}

function convertToCelsius(value) {
    return (value - 32) * 5 / 9;
}

function handleInput(event) {
    const input = event.target;
    if(input.name === 'fahrenheit')
        celsius.value = convertToCelsius(input.value);
    else
        fahrenheit.value = convertToFahrenheit(input.value);
}

function clearInput() {
    event.target.value = '';
}