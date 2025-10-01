import app from "./app";
import { connectDB } from "./infrastructure/config/database";
import { seedCategories, seedProducts } from "./infrastructure/config/seed";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  await seedCategories();
  await seedProducts();
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});