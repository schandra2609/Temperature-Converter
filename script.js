function toCelsius(temp) {
    return 5*(temp-32)/9;
}

function toFahrenheit(temp) {
    return (9*temp/5)+32;
}

function convert(){
    let temp = parseFloat(document.getElementById("ip-val").value);
    let fromUnit = document.getElementById("from").value;
    let toUnit = document.getElementById("to").value;
    let result = document.getElementById("result");
    let val, msg;

    switch(fromUnit) {
        case "Fahrenheit":
            switch (toUnit) {
                case "Fahrenheit":
                    val = temp;
                    msg = "Temperature in Fahrenheit: " + val.toFixed(2) + "\u00B0F";
                    break;
                case "Celsius":
                    val = toCelsius(temp);
                    msg = "Temperature in Celsius: " + val.toFixed(2) + "\u00B0C";
                    break;
                case "Kelvin":
                    val = toCelsius(temp) + 273;
                    msg = "Temperature in Kelvin: " + val.toFixed(2) + "K";
                    break;
            }
            break;
        case "Celsius":
            switch (toUnit) {
                case "Fahrenheit":
                    val = toFahrenheit(temp);
                    msg = "Temperature in Fahrenheit: " + val.toFixed(2) + "\u00B0F";
                    break;
                case "Celsius":
                    val = temp;
                    msg = "Temperature in Celsius: " + val.toFixed(2) + "\u00B0C";
                    break;
                case "Kelvin":
                    val = temp + 273;
                    msg = "Temperature in Kelvin: " + val.toFixed(2) + "K";
                    break;
            }
            break;
        case "Kelvin":
            switch (toUnit) {
                case "Fahrenheit":
                    val = toFahrenheit(temp -  273);
                    msg = "Temperature in Fahrenheit: " + val.toFixed(2) + "\u00B0F";
                    break;
                case "Celsius":
                    val = temp - 273;
                    msg = "Temperature in Celsius: " + val.toFixed(2) + "\u00B0C";
                    break;
                case "Kelvin":
                    val = temp;
                    msg = "Temperature in Kelvin: " + val.toFixed(2) + "K";
                    break;
            }
            break;
    }
    result.innerHTML = msg;
}