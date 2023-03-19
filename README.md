# NestJS Simple Microservices

![NestJS logo](https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.png)

---

O intuíto dessa aplicação foi implementar a arquitetura de microserviços usando NestJS apenas para fins de estudo.

## Como rodar

Abra três terminais e rode os seguinte comandos em cada um deles

```bash
# Acessa a pasta do serviço
$ cd <nome_da_pasta>

# Instala as dependências
$ yarn

# Executa a aplicação em modo watch
$ yarn start:dev
```

O Api Gateway estará rodando na porta 3000 e as rotas disponíveis são as seguintes:

- POST `/`

  - Cria um novo usuário. Recebe um objeto JSON contendo os campos `email` e `password`;;
  - Ao criar o novo usuário, o evento `user_created` é emitido para os serviços `communication` e `analytics`;
  - O serviço `communication` emite um log no console com os dados recebidos na requisição;
  - O serviço `analytics` salva em memória um objeto contendo o `email` junto de um `timestamp`;

- GET `/analytics`

  - Envia uma mensagem para o serviço `analytics` com o seguinte pattern `{ cmd: 'get_analytics' }`;
  - O serviço retorna todos os registros salvos em memória;
