module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {

    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },

  });
    
  User.associate = function (models) {
    // associations can be defined here
    
    User.hasOne('objective', { foreignKey: 'objective_id' });
    
    User.hasMany('skills', { foreignKey: 'skill_id' });
    User.hasMany('achivements', { foreignKey: 'achivement_id' });
    User.hasMany('projects', { foreignKey: 'project_id' });
    User.hasMany('products', { foreignKey: 'product_id' });
    User.hasMany('experiences', { foreignKey: 'experience_id' });
    User.hasMany('educations', { foreignKey: 'education_id' });


  };

  return User;
};
  