//Sequelize 의 model 설정을 위한 model.js 설정을 위한 model.js 파일 ->

module.exports = (sequelizeConfig, Sequelize) => {
  //set model
  const Tutorial = sequelizeConfig.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    publisheed: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Tutorial;
};
