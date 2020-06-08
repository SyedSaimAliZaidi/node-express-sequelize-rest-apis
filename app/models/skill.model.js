module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {

        skill_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.INTEGER
        },
        type: {
            type: Sequelize.STRING
        },
           
    });
    Skill.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Skill.belongsTo('users', {foreignKey: 'skill_id'});
    
    };
    return Skill;
  };
  