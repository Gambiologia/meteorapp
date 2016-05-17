# meteorapp

Exemplo de App em meteor do início ao server

Existe um instalador para maquinas Windows:

* https://www.meteor.com/install

## Ferramentas

Para editar os arquivos do aplicativo utilize o Sublime:

* https://www.sublimetext.com/

Crie uma conta no Github para criar novos projetos:

* https://github.com/

Instale o SourceTree para poder controlar seus arquivos de projeto.

* https://www.sourcetreeapp.com

Para transferir seus arquivos de projeto para um servidor na Web, você precisa de uma ferramenta de FTP, para isso instale o Filezilla

* https://filezilla-project.org/

A instalação em um servidor na Web será pelo Heroku, crie uma conta em heroku.com e instale o pacote de ferramenta deles

* https://toolbelt.heroku.com/



## Aplicativo

Exemplo de como criar um aplicativo, é bem simples.

* https://www.meteor.com/tutorials/angular/creating-an-app

Mas o melhor é fazer um fork deste projeto para a sua conta no github e começar a desenvolver, veja no topo direito desta pagina a opçao de fork, ele irá criar um reposítorio na sua conta como por exemplo:

* https://github.com/mariohmol/meteorapp

Este cógido agora deverá vir para sua máquina, aonde você poderá alterar e criar seu projeto. Abra o Sourcetree e ele pode te pedir uma conta na attlassian (bitbucket), se pedir faça. 
Depois de entrar na sua conta conecte com sua conta do github, assim você poderá ver o repositório que você fez fork.

Veja em qual diretório ele copiou o código para sua máquina e entre nele usando o terminal do windows (Windows->Executar->cmd).
Trabalhe no terminal sempre no diretório do seu projeto, você verá mais uso do terminal em outras etapas.

Para iniciar a aplicação digite `meteor` no terminal e tecle enter. Ele deverá exibir algumas mensagens, pode demorar um pouco mais nas primeiras vezes porque ele baixa alguns pacotes mas ao final deve mostrar algo como localhost 3000. Abra seu navegador e acesse a url http://localhost:3000

### TODO

* Fazer um aplicativo de exemplo com CRUD
* Fazer versando ios e android



## Servidor

Existe alguns servidores que trabalham facilmente com o Meteor. 

Um exemplo é o modulus que tem um micro server por 7 dolares por mês

* https://modulus.io/pricing

Aqui este aplicativo de exemplo no modulus:

* http://meteorapp-63045.onmodulus.net/



* Fazer uma instalacao de teste no heroku e documentar (https://www.heroku.com/)


Crie um novo aplicativo, clique em Github account e dê autorização de acesso.
Escolha o projeto que deseja publicar e depois ao final clique e Deploy Branch.

Para possibilitar a execução de apps Meteor é necessáiro configurar o Heroku. 
Acesse a aba Settings e em Buildpacks adicione o seguinte link:

* https://github.com/jordansissel/heroku-buildpack-meteor.git


Exemplo de aplicativo funcionando no Heroku:

* gambiologia-meteorapp.herokuapp.com



Existe diversos addons que podem ser adicionados, como banco de dados, envio de sms entre outros:

* https://elements.heroku.com/addons


Para gravar os dados utilizaremos o bando de dados MongoDB. No heroku tem uma versão gratuita, adicione ele:

* https://elements.heroku.com/addons/mongolab

Utilizando o Toolbelt da Heroku poderemos ter mais controle do que acontece no servidor. Para isso abra o terminal e execute o comando heorku.


Para ver mensagens de sistema, muito necessário para encontrar erros e realizar testes:

* heroku logs --tail

## Executando

### TODO

* Testar app comunicando no deploy real
* Fazer uma pagina no GHPages mostrando o app rodando na sua versao web