const path = require ('node:path');
const fs = require('fs').promises;

const filePath = path.join(__dirname, '../weather-data.json');

const objKeys = {
    city: 'city',
    token: 'token',
}

const saveKeyValue = async(key, value) =>{
    let data = {}
    console.log(key, value, 'start')
    if(await isExist(filePath)){
        const file = await fs.readFile(filePath, 'utf-8')
        data = JSON.parse(file);
    }
   data[key] = value;
   console.log(data, 'data')
   await fs.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async(key) =>{
    if(await isExist(filePath)){
        const file = await fs.readFile(filePath, 'utf-8')
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
} 

const isExist = async(path) =>{
    try{
        await fs.stat(path)
    return true
    }catch(e){
        return false;
    }
}
module.exports = {saveKeyValue,getKeyValue, objKeys};