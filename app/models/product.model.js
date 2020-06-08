module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {

        product_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        status:{
            type: Sequelize.STRING
        }

    });
    Product.associate = function(models) {
        // associations can be defined here
    
        // Complaint belongs to a user
        Product.belongsTo('users', {foreignKey: 'product_id'});
    
    };
    return Product;
};
  