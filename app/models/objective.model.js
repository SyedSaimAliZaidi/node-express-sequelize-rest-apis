module.exports = (sequelize, Sequelize) => {
    const Objective = sequelize.define("objective", {

        objective_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        description: {
            type: Sequelize.TEXT
        },

    });
    Objective.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Objective.belongsTo('users', {foreignKey: 'objective_id'});
    
    };
    return Objective;
};
  