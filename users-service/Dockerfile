# Imagen base
FROM node:18
# Directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiamos la configuración primero (para aprovechar cache de dependencias)
COPY package*.json tsconfig.json ./
# Instalamos dependencias
RUN npm install
# Copiamos el resto del código fuente
COPY . .
#Construir la carpeta dist
RUN npm run build
# Exponemos el puerto en el que corre la app (ejemplo 3000)
EXPOSE 3000
# Comando de inicio
CMD ["npm", "start"]
