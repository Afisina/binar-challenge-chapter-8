const swaggerJsdoc = require("swagger-jsdoc");
const playerSchema = require("./schemas/player-schema");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Dokumentasi API Game Gunting Batu Kertas",
      version: "1.0.0",
      description: "Ini adalah dokumentasi dari API Game Gunting Batu Kertas",
    },
    servers: [{ url: "http://localhost:4000/api/v1" }],
    tags: [
      {
        name: "Player",
        description: "Player endpoint",
      },
    ],
    components: {
      schemas: {
        Players: playerSchema,
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./server/routes/v1/*.js"], // lokasi endpoint Anda
};

const specs = swaggerJsdoc(options);

module.exports = specs;
