# Linux - Desafio 03: Criar um container de uma aplicação WEB
Repositório com o código do desafio da aula "Criando um container de uma aplicação WEB". Bootcamp Jornada DevOps com AWS - Impulso, DIO.

## O que foi desenvolvido nesse projeto?
O desafio inicial era criar um docker-compose com as definições de um servidor Apache, mas o instrutor deixou em aberto para fazer com outras tecnologias. Sendo assim, fiz uma simples API utilizando Node e conectando a mesma em um banco de dados PostgreSQL. A aplicação faz uma query SELECT simples (ver nos logs, comando no tópico seguinte) e apresenta uma mensagem ao acessar o endereço **localhost:3000**.

## Comandos

* Como rodar o projeto:

```$ docker-compose up -d```

* Visualizar os logs da aplicação e banco de dados:

```$ docker-compose logs -f```


> Link do bootcamp [AQUI](https://web.dio.me/track/jornada-devops-com-aws-impulso)!

![Logo do bootcamp](https://hermes.digitalinnovation.one/tracks/7b035b91-8625-493c-a816-6740a4a25e9b.png)