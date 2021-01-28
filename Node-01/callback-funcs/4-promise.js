const promiseFunc = (number) =>{
    return new Promise((resolve,reject)=>
    {
        if (number<10) {
            resolve('Promise Test. (resolve)');
        } else {
            reject('Promise Test. (reject)');  
        }
        
    })
}

promiseFunc(99)
.then((item)=>{console.log(item);return 1;})
.then((item2)=>{console.log(item2);return 2;})
.then((item3)=>{console.log(item3);return 3;})
.then((item4)=>{console.log(item4);return 4;})
.catch((error)=>{console.log(error);})