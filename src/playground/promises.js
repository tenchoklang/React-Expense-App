const promise = new Promise((resolve, reject) => {
    reject("ERROR");
});


promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('error')
});