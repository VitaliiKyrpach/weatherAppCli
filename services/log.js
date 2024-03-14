const chalk = require('chalk')
const printError = (error) =>{
    console.log(chalk.bgRed(`Error ${error}`))
};

const printSuccess = (msg) =>{
    console.log(chalk.bgGreen(`Success ${msg}`))
};

const printHelp = () =>{
    console.log(
        `${chalk.bgCyan('HELP')}
        Без параметрів - вивід погоди.

        -h для виклику домопоги 
        -c [city] для встановлення міста
        -t [API_KEY] для збереження токену  
        ` 
    )
}

const printWeather = (res) =>{
    console.log(
        `${chalk.bgYellow(' WEATHER ')} Погода в місті ${res.name}
        
		Небо: ${res.weather[0].description}
		Температура: ${res.main.temp} (відчувається як ${res.main.feels_like})
		Вологість: ${res.main.humidity}%
		Швидкість вітру: ${res.wind.speed}
		`
    )
}

module.exports = {printError,printSuccess,printHelp, printWeather }