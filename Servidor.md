Existe alguns servidores que trabalham facilmente com o Meteor.  Vamos tomar como principal exemplo o mais popular, Heroku:

* https://www.heroku.com/


# Heroku

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


## Banco de dados

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


# Modulus

Um exemplo é o modulus que tem um micro server por 7 dolares por mês

* https://modulus.io/pricing

Aqui este aplicativo de exemplo no modulus:

* http://meteorapp-63045.onmodulus.net/

