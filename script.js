const app = {
    init(selectors) {
        this.fahrenheit = document.querySelector(selectors.fahrenheit);
        this.celsius = document.querySelector(selectors.celsius);

        this.fahrenheit.addEventListener('keyup', event => {
            handleInput(event)
        });
        this.celsius.addEventListener('keyup', event => {
            handleInput(event);
        });

        this.fahrenheit.addEventListener('click', event => {
            clearInput(event);
        });
        this.celsius.addEventListener('click', event => {
            clearInput(event);
        });
    },

    convertToFahrenheit(value) {
        return value * 9 / 5 + 32;
    },

    convertToCelsius(value) {
        return (value - 32) * 5 / 9;
    },

    handleInput(event) {
        const input = event.target;
        if (input.name === 'fahrenheit')
            celsius.value = convertToCelsius(input.value);
        else
            fahrenheit.value = convertToFahrenheit(input.value);
    },

    clearInput() {
        event.target.value = '';
    },
}

app.init({
    fahrenheit: 'input[name="fahrenheit"]',
    celsius: 'input[name="celsius"]',
});

