//도메인 추가
//도메인 모델에는 인터넷주소,도메인종류,클라이언트 비밀키가 들어간다.

const Sequelize = require('sequelize');

module.exports = class Domain extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            host : {
                type:Sequelize.STRING(80),
                allowNull:false,
            },

            type:{
                type:Sequelize.ENUM('free','premium'),
                allowNull:false,
            },
            clientSecret:{
                type:Sequelize.UUID,
                allowNull:false,
                  },

        },{
            sequelize,  
            timestamps:true,
            paranoid:true,
            modelName:'Domain',
            tableName:'domains',
        });
    }

    static associate(db){
        db.Domain.belongsTo(db.User);
    }
}