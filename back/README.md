## Como rodar o back

Requisitos: 

* Node packager manager (npm)

#### Instalar o prisma

Para isso rode o seguinte comando:

`npm install -g prisma`

#### Atualizando npm

Para isso, navegue até a pasta `/back` e rode o seguinte comando:

`npm install`

Dessa forma os pacotes do npm serão devidamente instalados

#### Rodando migrate

Execute o seguinte comando para criar e aplicar as migrações do banco de dados:

`npm migrate dev`

#### Subindo o back-end

Por último, finalize a subida do back com:
`npm run dev`
