// script.js
function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById("display");
    display.value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("display");
    let lastChar = display.value[display.value.length - 1];
    
    // Avoid consecutive operators
    if (!["+", "-", "*", "/", "%", "^"].includes(lastChar)) {
        display.value += operator;
    }
}

function appendPi() {
    let display = document.getElementById("display");
    display.value += Math.PI.toFixed(4); // Menampilkan nilai π hingga 4 desimal
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;

    // Deteksi operasi perpangkatan (^) dan konversi ke Math.pow()
    if (expression.includes("^")) {
        let parts = expression.split("^");
        if (parts.length === 2) {
            let base = parseFloat(parts[0]);
            let exponent = parseFloat(parts[1]);
            if (!isNaN(base) && !isNaN(exponent)) {
                display.value = Math.pow(base, exponent);
                return;
            }
        }
        display.value = "Error"; // Tampilkan error jika format tidak valid
        return;
    }

    // Hitung ekspresi lainnya
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
