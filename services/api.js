const axios = require ('axios');
const { getKeyValue, objKeys } = require('./storage');

const getWeather = async(city) =>{
    const token = await getKeyValue(objKeys.token);
    if(!token){
        throw new Error('Не заданий ключ API, будь-ласка задайте його через команду -t [API_KEY]')
    }
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            units: 'metric',
            lang: 'uk',
        }
    })
    return data;
}

module.exports = getWeather;