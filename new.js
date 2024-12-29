const keys = document.getElementById('keys');
const display = document.getElementById('display');

keys.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const value = e.target.value;
        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    }
});
