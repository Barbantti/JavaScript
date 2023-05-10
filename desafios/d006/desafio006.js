function converter() {
    let celsius = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let conversor = celsius.toLocaleString()

   document.querySelector('#celsius').innerHTML = `<h2>A temperatura de ${conversor}°C, corresponde a...</h2> `

    let convertToKelvin = celsius + 273.15
    let celsius_kelvin = convertToKelvin.toLocaleString()
    document.querySelector('.kelvin').textContent = `${celsius_kelvin}°K (Kelvin)`

    let convertToFahrenheit = (celsius * 1.8) + 32
    let celsius_fahrenheit = convertToFahrenheit.toLocaleString()
    document.querySelector('.fahrenheit').textContent = `${celsius_fahrenheit}°F (Fahrenheit)`
}