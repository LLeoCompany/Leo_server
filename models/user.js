const Sequelize = require('sequelize');

//모델 -> mysql 테이블 매칭
module.exports = class User extends Sequelize.Model{
    static init(sequelize){ // *static -> 테이블과 연동
        return super.init({
            email : {
                //시퀄라이즈는 pk 생략
                type: Sequelize.STRING(40),
                allowNull : true, //비어잇어도댐
                unique:true,//고유해야됨 중복x
            },
            nick:{
                type:Sequelize.STRING(15),
                allowNull:false,
            },
            password : {
                type:Sequelize.STRING(10),
                allowNull:true,
            },
            provider:{ //로그인 제공자
                type:Sequelize.STRING(10),
                allowNull:false,
                defaultValue:'local', // 카카오면 카카오로 로그인한것
            },
            snsid:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
        },{
            sequelize,
            timestamps:true, //cdate
            underscored:false,
            modelName:"User",
            tableName:'users',
            paranoid:true, //cdate  n,y
            charset:'utf8',
            collate:"utf8_general_ci"
        })
    }

    static associate(db){
        db.User.hasMany(db.Post); //사용자 간의 관계
        db.User.belongsToMany(db.User,{
            foreignKey : 'followingId',
            as:'Follwers',
            through:'Follow',
        });
        db.User.belongsToMany(db.User,{
            foreignKey:'followerId',
            as:'Followings', 
            through:'Follow',
        })
    }

}