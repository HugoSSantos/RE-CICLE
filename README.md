# <center> ETL(Extract, Transform, Load) </center>
<p align="justify"> 
São três etapas necessárias para a análise de dados, onde se realiza a extração,onde transforma e carrega
os dados. Correspondendo a um processo de combinação de várias fontes de dados seu objetivo principal será
extrair os dados de bases de informações, organizar e limpar os dados brutos e armazená-los em um repositório
central (Data Warehouse) para que possam ser realizadas análises com base nesses dados.
</p>

## Pré-requisitos

---------
<div>
    <p>Antes de inciar veja se você atende aos seguintes requesitos</p>
    <input type='checkbox'> Ter o Docker instalado<br>
    <input type='checkbox'> Ser um usuário com permissão root ou sudo<br>
    <input type='checkbox'> Ter uma conta no kaggle<br>
    <input type='checkbox'> Ter baixado o arquivo de token da API do Kaggle<br>

[Guia da API do Kaggle](https://www.kaggle.com/docs/api)

</div>

## Como usar

---------
<p align="justify">
Para usar este ETL, será necessário seguir as seguintes etapas:

* Deverá realizar o clone do git
</p>


## Arquivos .py

---------
### Extract.py

---
<p align="justify">
Aquivo que executa a authentificação do usuário kaggle e faz o download dos datasets e os move para 
a pasta dados
</p>

### Transform.py

---
<p align="justify">
Arquivo que limpa e organiza os dados dos datasets e os unifica em um único arquivo .csv com todos 
os dados gerados nesta transformação, este arquivo também remove os dataset baixados anteriormente
e adiciona apenas o atualizado.
</p>

### Load.py

---
<p align="justify">
Arquivo que cria a conexão com o Banco de dados e contém os scripts SQL para realizar a inclusão das
informações do dataset no banco de dados para que possam ser utilizados.
</p>

### trash_prodution.csv

---
<p align="justify">
Este arquivo é gerado após a execução do arquivo de transform.py e contém os dados de forma organizada
</p>

### garbage.sqlite

---
<p align="justify">
Arquivo do Banco de dados, utilizado para passar as informações para os aplicativos de exibição, como
metabase e powerBI
</p>


## Bibliotecas usadas

---
<p align="justify">

* pandas
* kaggle
* sqlite3
* shutil
</p>

## Docker

---
### Requirements

<p align="justify">
É o arquivo .txt onde irá estar as bibliotecas necessárias para a execução do programa
não é necessário fazer qualquer alteração no requirements para que o docker funcione,
caso adicione alguma biblioteca não usada anteriomente no projeto será necessário sua
adição neste arquivo.
</p>

### Comando de criação da imagem:
```
docker build -t extract:1.0
```
### Comando de criação e execução do container:
```
docker run -d extract:1.0
```

