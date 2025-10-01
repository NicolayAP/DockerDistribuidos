import app from "./app";
import { connectDB } from "./infrastructure/config/database";
import { seedOrders, seedOrderDetails } from "./infrastructure/config/seed";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  await seedOrders();
  await seedOrderDetails();
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});