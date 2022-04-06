const  Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            contents:{
                type:Sequelize.STRING(140),
                allowNull:false,
            },
            img:{
                type:Sequelize.STRING(200),
                allowNulL:true,

            },
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Post',
            tableName:"posts",
            paranoid:false,
            charset:'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    }

    static associate(db){
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag,{through:'PostHashtag'}); //belongsTomay => 다대다 관계
    }
}