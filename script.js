const app = 
    init(selectors) {
        this.fahrenheit = document.querySelector(selectors.fahrenheit);
        this.celsius = document.querySelector(selectors.celsius);

        this.fahrenheit.addEventListener('keyup', event => {
            this.handleInput(event)
        });
        this.celsius.addEventListener('keyup', event => {
            this.handleInput(event);
        });

        this.fahrenheit.addEventListener('click', event => {
            this.clearInput(event);
        });
        this.celsius.addEventListener('click', event => {
            this.clearInput(event);
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
            celsius.value = this.convertToCelsius(input.value);
        else
            fahrenheit.value = this.convertToFahrenheit(input.value);
    },

    clearInput() {
        event.target.value = '';
    },
}

app.init({
    fahrenheit: 'input[name="fahrenheit"]',
    celsius: 'input[name="celsius"]',
});

