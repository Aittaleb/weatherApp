var getUser = (id,callback) => {
    var user = {
        id : id ,
        name : 'Hamid',
    };
    debugger;
    setTimeout(()=>{
        callback(user);  
    },2000)
};

getUser(1,(user) =>{
    console.log(user);
});