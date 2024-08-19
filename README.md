<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

 // PROJETO FEITO EM AMBIENTE WINDOWS // OS: Windows 11 (23h2)

Esse é um projeto feito em Node, junto com NestJs e Express.
Banco de dados utilizado: PostgreSQL
Ferramenta de Caching utilizada: Redis

Para roda-lo, você precisará ter de preferencia a IDE: VSCode. Instalado o Node.js, você pode obtê-lo através desse link: https://nodejs.org/en/download/package-manager

Após já ter todos os requisitos acima, você irá clonar o repositório no seu computador local e abrir a pasta do repositório pelo VSCode.

O primeiro comando que você irá usar é o: npm install --global yarn (CASO VOCÊ AINDA NÃO TENHA, SE JÁ TIVER, DESCONSIDERAR)

Porque usaremos o yarn para instalar os packages nesse projeto.

Agora você precisará configurar um banco de dados localmente, terá que ser usado o PostgreSQL.
Na repositório encontrará uma pasta chamada "backup_db", você irá pegar esse arquivo de backup e restaurar no PostgreSQL.
Lembrando para alterar porta, usuário e senha é no arquivo chamado:
app.module.ts

encontra-se em src/app.module.ts

Agora para rodar o Redis no Windows, você irá precisa ter o WSL.

Para isso você ira abrir o terminal PowerShell e digitar o seguinte comando:

wsl --install

Caso peça para reiniciar a máquina, reinicie.

Após ter reiniciado a máquina, o terminal irá abrir sozinho e pedirá pra você escolher um usuário e uma senha pro Linux.
Após isso você já poderá usar o terminal Linux e instalar o redis.

Faça os seguintes comandos:
sudo apt-get update
sudo apt-get install redis-server

Você irá iniciar o redis:
sudo service redis-server start

E testará se ele está rodando:
redis-cli ping
Caso responda PONG é porque está rodando!

Após isso na pasta raiz do projeto, você irá dar o próximo comando que é: yarn install

Esse comando fará com que todos os packages necessários para o projeto rodar sejam instalados. Após isso para rodar o projeto deverá digitar o seguinte comando: yarn start

Após isso poderá testar o projeto. Para encerra-lo, através do terminal aperte CTRL + C.
