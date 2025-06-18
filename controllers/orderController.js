const { Order, OrderItem } = require('../models');
const { orderSchema } = require('../validators/orderValidator');

exports.createOrder = async(req, res) => {
    const { error, value } = orderSchema.validate(req.body);

    if (error) return res.status(400).json({ error: error.details[0].message });

    const t = await Order.sequelize.transaction();

    try {
        const { customer_id, order_date, total, order_items } = value;

        const order = await Order.create({ customer_id, order_date, total }, { transaction: t });

        for (const item of order_items) {
            await OrderItem.create({...item, order_id: order.id }, { transaction: t });
        }

        await t.commit();
        return res.status(201).json({ message: 'Order created', order_id: order.id });
    } catch (err) {
        await t.rollback();
        return res.status(500).json({ error: 'Server error', details: err.message });
    }
};