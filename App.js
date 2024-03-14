const getArgs = require ('./helpers/args.js')
const {saveKeyValue,getKeyValue, objKeys} = require ('./services/storage.js')
const {printError,printSuccess,printHelp, printWeather} = require ('./services/log.js');
const getWeather = require('./services/api.js');

const saveToken = async(token) =>{
    if(!token.length){
        printError("Не переданий токен");
        return;
    }
    try{
        await saveKeyValue(objKeys.token, token);
        printSuccess('Токен збережений')
    }
    catch(e){
        printError(e.message);
    }
    
}

const saveCity = async(city) =>{
    if(!city.length){
        printError('Не передане місто');
        return;
    }
    try{
        await saveKeyValue(objKeys.city, city)
        printSuccess('Місто збережене')
    }catch(e){
        printError(e.message);
    }
    
}

const getForcast = async() =>{
    try{
        const city = await getKeyValue(objKeys.city)
        const weather = await getWeather(city);
        printWeather(weather);
    }catch(e){
        if (e?.response?.status == 404) {
			printError('Невірно вказане місто');
		} else if (e?.response?.status == 401) {
			printError('Невірно вказаний токен');
		} else {
			printError(e.message);
		}
    }
    
}

const initCli = () =>{
    const args = getArgs(process.argv);
    if(args.h){
       return printHelp()
    }
    if(args.c){
       return saveCity(args.c)
    }
    if(args.t){
       return saveToken(args.t)
    }
    getForcast()
}
initCli()