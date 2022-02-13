const mongoose  = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug',true);
    }
    mongoose.connect('mongodb://root:sh6130lim@localhost:27017/admin',{
        dbName:'nodejs',
        useNewUrlParser:true,
        useCreateIndex:true,
    },(error)=>{
        if(error){
            console.log('몽고디비 연결 에러',error);
        }else{
            console.log('몽고디비 연결 성공');
        }
    });
    mongoose.connection.on('error',(error)=>{
        console.error('몽고디비 연결 에러',error);
    });
    mongoose.connection.on('disconnected',()=>{
        console.error('몽고디비 연결 끊겻습니다',);
        connect();
    })
}