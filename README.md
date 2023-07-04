# ChallengeTotalCoin

## Base de datos

Crear una base de datos en PostgreSQL 

```
CREATE DATABASE pruebatecnica;
```

Crear el archivo .env en la carpeta Api con los siguientes datos:

```
DB_USER= Usuario de postgre
DB_PASSWORD= Contraseña de postgre
DB_HOST= localhost
DB_PORT= puerto de postgre(5432)
DB_DATABASE= pruebatecnica
SERVER_PORT=3001
```

## Api

Para iniciar el servidor:

__Requiere archivo .env adentro de la carpeta Api__

```
cd /ChallengeTotalCoin/Api
npm install
npm start
```

## Client

Para iniciar el cliente:

```
cd /ChallengeTotalCoin/Client
npm install
npm run dev
```