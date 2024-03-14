const getArgs = (input) =>{
    const [one, two, ...args] = input;
    let obj = {}
    args.forEach((arg, i, array) => {
    if(arg.charAt(0) === '-'){
        if(i === array.length -1){
            obj[arg.substring(1)] = true
        }else if(array[i+1].charAt(0) !== '-'){
            obj[arg.substring(1)] = array[i+1]
        }else { obj[arg.substring(1)] = true}
    }        
    });
    return obj
}

module.exports = getArgs;