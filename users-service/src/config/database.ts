import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "store_db",     s
  process.env.DB_USER || "admin",        
  process.env.DB_PASSWORD || "admin123",  
  {
    host: process.env.DB_HOST || "mysql", 
    dialect: "mysql",
    port: 3306,
    logging: false,
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con MySQL.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    throw error; // opcional: para que el contenedor falle si no puede conectar
  }
}
