const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Game-Backend',
      version: '1.0.0',
      description:
        'A Basic Backend CRUD APIs build using Nodejs (Expressjs) and MongoDB database',
    },
  },
  apis: ['./swagger/routes.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
};
