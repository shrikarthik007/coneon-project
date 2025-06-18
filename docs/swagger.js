const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Order API',
            version: '1.0.0',
        },
        components: {
            schemas: {
                Order: {
                    type: 'object',
                    properties: {
                        customer_id: { type: 'integer' },
                        order_date: { type: 'string', format: 'date-time' },
                        total: { type: 'number' },
                        order_items: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    product_id: { type: 'integer' },
                                    quantity: { type: 'integer' },
                                    price: { type: 'number' }
                                }
                            }
                        }
                    },
                    required: ['customer_id', 'order_date', 'total', 'order_items']
                }
            }
        }
    },
    apis: ['./routes/*.js']
};

module.exports = swaggerJsDoc(options);