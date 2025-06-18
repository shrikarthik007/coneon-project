module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        customer_id: DataTypes.INTEGER,
        order_date: DataTypes.DATE,
        total: DataTypes.DECIMAL(10, 2),
    });

    Order.associate = models => {
        Order.hasMany(models.OrderItem, { foreignKey: 'order_id' });
    };

    return Order;
};