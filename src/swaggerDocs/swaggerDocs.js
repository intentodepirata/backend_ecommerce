const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Ecommerce MYSQL API",
    version: "1.0.0",
    description: "API para la gestión de usuarios en un ecommerce",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
  paths: {
    "/usuarios/register": {
      post: {
        summary: "Crear un nuevo usuario",
        description: "Crea un nuevo usuario y lo guarda en la base de datos.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Usuario",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Usuario creado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UsuarioResponse",
                },
              },
            },
          },
          400: {
            description: "Campos obligatorios faltantes",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          409: {
            description: "El correo electrónico ya está en uso",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "boolean",
                      default: true,
                    },
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Usuario: {
        type: "object",
        properties: {
          nombre: {
            type: "string",
          },
          apellidos: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      UsuarioResponse: {
        type: "object",
        properties: {
          error: {
            type: "boolean",
            default: false,
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Usuario",
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
