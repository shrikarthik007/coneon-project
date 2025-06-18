module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        order_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL(10, 2),
    });

    OrderItem.associate = models => {
        OrderItem.belongsTo(models.Order, { foreignKey: 'order_id' });
    };

    return OrderItem;
};