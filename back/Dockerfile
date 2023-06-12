FROM node:18.7.0

#Diretorio da imagem
WORKDIR /app

#Copia todo o projeto para a imagem
COPY . ./app

RUN npm install

#DEfine a porta
EXPOSE 5050

#Comando de execução
CMD ["npm", "dev"]