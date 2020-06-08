module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("education", {

        education_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: Sequelize.STRING
        },
        institute: {
            type: Sequelize.STRING
        },
        marks: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },    
    
    });
    Education.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Education.belongsTo('users', {foreignKey: 'education_id'});
    
    };
    return Education;
};
  