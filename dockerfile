# Use a imagem base oficial do Node.js 16
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo de definições do package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação para o contêiner
COPY . .

# Exponha a porta que o app utilizará (ex.: 3000)
EXPOSE 3000

# Defina o comando padrão para rodar o app
CMD ["npm", "start"]
