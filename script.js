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
        if (input.name === 'fahrenheit')
            this.celsius.value = this.convertToCelsius(input.value);
        else
            this.fahrenheit.value = this.convertToFahrenheit(input.value);
        this.updateCSS();
    },

    clearInput() {
        event.target.value = '';
    },

    updateCSS() {
        const body = document.querySelector('body');
        let color = [180, 240];
        if (this.fahrenheit.value != '') {
            let diff = (parseInt(this.fahrenheit.value) - 60) * 2;
            color[0] += diff;
            color[1] -= diff;
            color = color.map(item => {
                if (item < 0)
                    return 0;
                else if (item > 255)
                    return 255;
                else
                    return Math.floor(item);
            });
        }

        body.style.backgroundColor = `rgb(${color[0]}, 0, ${color[1]})`;
    },
}

app.init({
    fahrenheit: 'input[name="fahrenheit"]',
    celsius: 'input[name="celsius"]',
});

