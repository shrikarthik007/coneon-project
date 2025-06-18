const Joi = require('joi');

exports.orderSchema = Joi.object({
    customer_id: Joi.number().integer().required(),
    order_date: Joi.date().required(),
    total: Joi.number().required(),
    order_items: Joi.array().items(
        Joi.object({
            product_id: Joi.number().required(),
            quantity: Joi.number().required(),
            price: Joi.number().required()
        })
    ).required()
});