module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {

        project_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },

    });
    Project.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Project.belongsTo('users', {foreignKey: 'project_id'});
    
    };
    return Project;
};
  