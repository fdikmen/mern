function asenkronFuc(result,callback) {
   console.log(result); 
   callback();
}
asenkronFuc(2 ,function (result) {
    console.log(result);
    asenkronFuc(4,function(result) {
        console.log(result);
        asenkronFuc(6,function(result) {
            console.log(result);
            asenkronFuc(8,function(result) {
                console.log(result);
            })
        })
    })
})