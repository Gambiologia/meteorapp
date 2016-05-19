# meteorapp

Exemplo de App em meteor da criação do aplicativo até a instalação em um server.
Este aplicativo tem um login e cadastro de usuário, além da edição de eventos a ser divulgado por quem instalar o Aplicativo.
A ideia é que este aplicativo seja utilizado como forma de mentoria e também possa ser reutilizado como uma ferramenta de comunicação.

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

Basta chamar a criação do projeto que el já monta os arquivos iniciais:

* meteor create simple-todos

Mas o melhor é fazer um fork deste projeto para a sua conta no github e começar a desenvolver, veja no topo direito desta pagina a opçao de fork, ele irá criar um reposítorio na sua conta como por exemplo:

* https://github.com/mariohmol/meteorapp

Este cógido agora deverá vir para sua máquina, aonde você poderá alterar e criar seu projeto. Abra o Sourcetree e ele pode te pedir uma conta na attlassian (bitbucket), se pedir faça. 
Depois de entrar na sua conta conecte com sua conta do github, assim você poderá ver o repositório que você fez fork.

Veja em qual diretório ele copiou o código para sua máquina e entre nele usando o terminal do windows (Windows->Executar->cmd).
Trabalhe no terminal sempre no diretório do seu projeto, você verá mais uso do terminal em outras etapas.

Para iniciar a aplicação digite `meteor` no terminal e tecle enter. Ele deverá exibir algumas mensagens, pode demorar um pouco mais nas primeiras vezes porque ele baixa alguns pacotes mas ao final deve mostrar algo como localhost 3000. Abra seu navegador e acesse a url http://localhost:3000


### Bibliotecas

Vamos utilizar o AngularJS para fazer as interações de telas:

* https://github.com/Urigo/angular-meteor

Para adicionar suporte a angular no seu projeto digite a linha de comando:

* meteor add angular
* meteor remove blaze-html-templates ecmascript
# meteor add angular-templates
# meteor npm install --save angular angular-meteor angular-component
* npm install stripe
* meteor add modules

O design da aplicação será com o Google Material, portanto uma biblioteca em AngularJS:

* https://material.angularjs.org/latest/

A instalação deve ser feita executando:

* bower install angular-material


Uma boa documentação para iniciar um projeto:

* https://www.meteor.com/tutorials/angular/templates

### Mobile

Existe uma integração do meteor na geração de aplicativos para diversas plataformas, usando o Cordova.

* http://guide.meteor.com/mobile.html#introduction


Para este exemplo adicionaremos para o Android e iOS:

* meteor add-platform android
* meteor add-platform ios

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


Crie um novo aplicativo escolhendo um nome para ele, no nosso exemplo vamos chamar de gambiologia-meteorapp.

Clique em Github account e dê autorização de acesso.Escolha o projeto que deseja publicar e depois ao final clique e Deploy Branch.

Para possibilitar a execução de apps Meteor é necessáiro configurar o Heroku. 
Acesse a aba Settings e em Buildpacks adicione o seguinte link:

* https://github.com/jordansissel/heroku-buildpack-meteor.git


Exemplo de aplicativo funcionando no Heroku:

* gambiologia-meteorapp.herokuapp.com



Existe diversos addons que podem ser adicionados, como banco de dados, envio de sms entre outros:

* https://elements.heroku.com/addons


Para gravar os dados utilizaremos o bando de dados MongoDB. No heroku tem uma versão gratuita, adicione ele:

* https://elements.heroku.com/addons/mongolab

Utilizando o Toolbelt da Heroku poderemos ter mais controle do que acontece no servidor. Para isso abra o terminal e execute o comando heroku.
Ele vai pedir seu email e senha para conectar.


Para ver mensagens de sistema, muito necessário para encontrar erros e realizar testes:

* heroku logs --tail --app gambiologia-meteorapp


### Banco de dados

Para conectar no banco de dados, você pode acessar no Heroku a parte de Resources e abrir a tela do banco, um link como esse:

* https://www.mlab.com/databases/heroku_0gk00c2s#users

Acessa a aba Users e clique em Add USer e adicione os seguintes parâmetros:

* username: meteorapp
* pass: meteorappPass

Na aba Collection clique em Add Collection, e crie uma chamado usuarios e outra eventos.

Veja que acima tem um exemplo de link para conectar sua aplicação ao banco de dados:

* mongodb://<dbuser>:<dbpassword>@ds023912.mlab.com:23912/heroku_0gk00c2s

Você deverá reescrever este link incluindo seu usuário e senha :

mongodb://meteorapp:meteorappPass@ds023912.mlab.com:23912/heroku_0gk00c2s


Para testar se você consegue conectar no banco de dados, execute o seguinte comando:

* mongo ds023912.mlab.com:23912/heroku_0gk00c2s -u heroku_0gk00c2s -p fld6oeq8metg2rqpiol9fvegeo

Dentro da sua aplicação no Heroku, em Settings -> Confi Variables você poderá ver uma variável chamada MONGODB_URI com a configuração de coneão com o banco de dados, como no exemplo abaixo:

* mongodb://heroku_0gk00c2s:fld6oeq8metg2rqpiol9fvegeo@ds023912.mlab.com:23912/heroku_0gk00c2s


## Executando

### TODO

* Testar app comunicando no deploy real
* Fazer uma pagina no GHPages mostrando o app rodando na sua versao web