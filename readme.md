# Docker

- Rodar o Docker a partir do `docker-compose.yml`

`docker-compose up -d`

- Verificar se possui containers rodando

`docker ps`

- Encerrar processo em alguma porta quando ela já estiver sendo usada

`lsof -i :5432`

`kill <pid>`

- Definir senha do user `root`

`docker exec -itu 0 {container} passwd`

- Redefinir senha do banco Postgres

You should be able to do that by logging into the container `docker exec -it -u root <container_id> bash`, then use `psql` cli to change the password.

Criar um novo usuário: createuser --interactive --pwprompt

# Prisma

- rodar as migrations após alterar schema

`npx prisma migrate dev`

- criar guards

`nest generate guard <nome_do_serviço> --no-spec`

- criar serviços

`nest generate service <nome_do_serviço>`

# GraphQL

**query** => buscar dado

```graphql
query {
  hello
}
```

hello = nome da função criada dentro do resolver

Consultando apenas alguns campos específicos

```graphql
query {
  products {
    title
  }
}
```

**mutation** => criar/deletar/alterar dado

```graphql
mutation {
  createProduct(data: { title: "Teste" }) {
    id
    title
    slug
  }
}
```
