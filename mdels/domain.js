

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
                //ENUM => 넣을수 있는 데이터값을 제한할수 있는 형식
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