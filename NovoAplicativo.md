Para criar um novo aplicativo utilizando a documentação abaixo:

* https://www.meteor.com/tutorials/angular/creating-an-app

Basta chamar a criação do projeto que el já monta os arquivos iniciais:

* meteor create simple-todos


# Bibliotecas

Vamos utilizar o AngularJS para fazer as interações de telas:

* https://github.com/Urigo/angular-meteor

Para adicionar suporte a angular no seu projeto digite a linha de comando:

* meteor add angular
* meteor remove blaze-html-templates ecmascript
# meteor add angular-templates
# meteor npm install --save angular angular-meteor angular-component
* npm install stripe
* meteor add modules
* meteor npm install --save angular-component
* meteor add accounts-base
* meteor npm install --save angular-animate angular-aria angular-material
* meteor npm install --save angular-ui-router

O design da aplicação será com o Google Material, portanto uma biblioteca em AngularJS:

* https://material.angularjs.org/latest/

Dicas de como usar o google material com o meteor:

* http://www.angular-meteor.com/tutorials/socially/angular1/angular-material-and-custom-angular-auth-forms



Uma boa documentação para iniciar um projeto:

* https://www.meteor.com/tutorials/angular/templates

# Mobile

Existe uma integração do meteor na geração de aplicativos para diversas plataformas, usando o Cordova.

* http://guide.meteor.com/mobile.html#introduction

Veja se você tem os prerequisitos para criar aplicativos através do link:

* http://guide.meteor.com/mobile.html#installing-prerequisites




## Android

Faça a instalação do Android SDK e após isto coloque no path do windows o diretório de instalação. Tome nota deste caminho, no caso do OSx o caminho deverá ser:

* /Users/<username>/Library/Android/sdk

Para incluir no path do OSx faça:

* nano ~/.bash_profile

E adicione os seguintes comandos:

```
export ANDROID_HOME="/Users/<username>/Library/Android/sdk"
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

Após ter todas as dependências instaladas, adicione a plataforma Android:

* meteor add-platform android

Instale também a versão mais nova do android para executar o projeto, execute portanto o comando:

* /Users/<username>/Library/Android/sdk/tools/android

Abrirá uma janela com o gerenciador de versões do Android, selecione a versão Android 6 (api 23) e instale.

Por fim crie um emulador de celular Android para poder testar seu aplicativo, para isso abra o AVD (Android Virtual Devices):

* /Users/<username>/Library/Android/sdk/tools/android avd

Clique create, dê um nome, escolha um device (ex. Nexus 5), escolha um CPU (ex. ARM geralmente é mais rápido), um skin (ex HVGA) e clique em OK.

Para executar sua aplicação no emulador execute:

* meteor run android


## iOS

Para adicionar a plataforma iOS faça:

* meteor add-platform ios

*TODO*: Ainda não temos um documentação para criação do aplicativo através 