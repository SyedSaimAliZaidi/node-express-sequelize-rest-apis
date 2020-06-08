module.exports = (sequelize, Sequelize) => {
    const Achivement = sequelize.define("achivement", {

        achivement_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: Sequelize.STRING
        },

    });
    Achivement.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Achivement.belongsTo('users', {foreignKey: 'achivement_id'});
    
    };
    return Achivement;
};
  