function doSomething(callback){
    setTimeout(() => {
        //did something
        callback('First Data')
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(() => {
        //did something
        callback('Second Data')
    }, 1000);
}

//callback Hell
function doAll(){
    try {
        doSomething(function(data){
            var processedData = data.split('')
            try{
                doOtherThing(function(data){
                    var processedData2 = data.split('')
                    
                    try{
                        setTimeout(() => {
                            console.log(processedData,processedData2)
                        }, 1000);
                    }catch(err){
                        //handle error
                    }
                })
            }catch(err){
                //handle error
            }
        })
    }catch(err){
        //handle error
    }
}

doAll()