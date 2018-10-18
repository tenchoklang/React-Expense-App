function count(str){
    let word = str.toLowerCase();
    let wordArr = word.split('');

    let obj = {}

    for(let i = 0;i<wordArr.length; i++){
        if(obj[wordArr[i]]){
            console.log(`${wordArr[i]} exists`);
            obj[wordArr[i]] = obj[wordArr[i]] + 1;
        }else{
            obj[wordArr[i]] = 1;
        }
    }
    return obj;
}

console.log(count("apple"));
