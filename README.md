
# Enambo Api

Desarroollo de api basica para el registro de usuarios, login y crud de clientes.


## Run Locally

Clone the project 

```bash
  git clone https://github.com/ericknambo/enambo_api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies YARN

```bash
  yarn install
```

Run Docker Imager
```bash
 docker-compose up -d
```

Run Migrations
```bash
    yarn migration:run
```


Start the server

```bash
  yarn start:dev 
```


## Authors

- [@ericknambo](https://github.com/ericknambo)


## Technologies
- NestJs 11
- TypeORM
- JWT
- Passport
- MySQL