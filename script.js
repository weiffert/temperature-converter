const app = {
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
            this.celsius.value = this.convertToCelsius(input.value);
        else
            this.fahrenheit.value = this.convertToFahrenheit(input.value);
        this.updateCSS();
    },

    clearInput() {
        event.target.value = '';
    },

    updateCSS(colors) {
        const body = document.querySelector('body');
        body.style.backgroundColor = this.hex.value;

        let count = 0;
        colors.forEach(color => {
            if(color >= 90)
                count++;
        });

        body.classList.remove('black');
        body.classList.remove('white');
        body.classList.add(count >= 2 ? 'black' : 'white');
    },
}

app.init({
    fahrenheit: 'input[name="fahrenheit"]',
    celsius: 'input[name="celsius"]',
});

