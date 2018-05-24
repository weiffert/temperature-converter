const app = {
    init(selectors) {
        this.fahrenheit = document.querySelector(selectors.fahrenheit);
        this.celsius = document.querySelector(selectors.celsius);
        this.form = document.querySelector(selectors.form);

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

        this.form.addEventListener('submit', event => {
            event.preventDefault();
        });

        this.updateCSS();
    },

    convertToFahrenheit(value) {
        return value * 9 / 5 + 32;
    },

    convertToCelsius(value) {
        return (value - 32) * 5 / 9;
    },

    handleInput(event) {
        const input = event.target;
        if (input.value !== '') {
            if (input.name === 'fahrenheit')
                this.celsius.value = this.convertToCelsius(input.value);
            else
                this.fahrenheit.value = this.convertToFahrenheit(input.value);
        } else {
            // this.clearInput();
        }

        this.updateCSS();
    },

    clearInput() {
        this.fahrenheit.value = '';
        this.celsius.value = '';
    },

    updateCSS() {
        const body = document.querySelector('body');
        let color = [200, 200];
        let temperature = [];
        if (this.fahrenheit.value === '') {
            temperature.push(32);
        } else {
            temperature.push(this.fahrenheit.value);
        }

        let diff = (parseInt(temperature[0]) - 50);
        color[0] += diff * 4;
        color[1] -= diff * 4;
        color = color.map(item => {
            if (item < 0)
                return 0;
            else if (item > 255)
                return 255;
            else
                return Math.floor(item);
        });

        body.style.backgroundColor = `rgb(${color[0]}, 0, ${color[1]})`;
    },
}

app.init({
    fahrenheit: 'input[name="fahrenheit"]',
    celsius: 'input[name="celsius"]',
    form: 'form',
});

