module.exports = (sequelizeConfig,Sequelize)=>{
    //set Model 

    const Tutirial = sequelizeConfig.define(
        'tutorial',
        {
            title:{
                type:Sequelize.STRING
            },
            description : {
                type:Sequelize.STRING
            },
            published:{
                type:Sequelize.BOOLEAN
            }
        }
    );

    return Tutirial;
}