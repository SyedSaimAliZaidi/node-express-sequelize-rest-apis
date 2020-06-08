module.exports = (sequelize, Sequelize) => {
    const Experience = sequelize.define("experience", {

        experience_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        position: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },    
    
    });
    Experience.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Experience.belongsTo('users', {foreignKey: 'experience_id'});
    
    };
    return Experience;
};
  