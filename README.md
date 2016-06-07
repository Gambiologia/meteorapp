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

Instale o SourceTree para poder controlar seus arquivos de projeto. Abra o Sourcetree e ele pode te pedir uma conta na attlassian (bitbucket), se pedir faça. Depois deste passo escolha a conta do Github e entre com seu usuário/senha que você criou no Github. Isto irá linkar seu Sourcetree com sua conta no Github, para trabalhar neste projeto. Se houver outros passos além deste no sourcetree, pode pular ou continuar sem fazer.

* https://www.sourcetreeapp.com


Para transferir seus arquivos de projeto para um servidor na Web, você precisa de uma ferramenta de FTP, para isso instale o Filezilla

* https://filezilla-project.org/

A instalação em um servidor na Web será pelo Heroku, crie uma conta em heroku.com e instale o pacote de ferramenta deles. Ao criar o cadastro no Heroku ele pode pedir o nome da sua empresa e qual linguagem usa, são campos não obrigatórios portanto escolha o que quiser.

* https://toolbelt.heroku.com/

Para desenvolver Android você poderá ter qualquer sistema operacional (Windows, Linux ou OSx). Será necessário instalar alguns pré requisitos, são eles:

Java JDK - Kit de desenvolvimento para aplicativos java, baixe no link abaixo conforme seu sistema operacional (Windows / Mac / Linux). Se tiver dúvidas se seu sistema operacional é 64 ou 32, baixe o 32 e instale ele.

* http://www.oracle.com/technetwork/pt/java/javase/downloads/index.html

Android SDK - Kit de desenvolvimento para aplicativos Android, que executa utilizando a linguagem Java. Faça o download na seção "Get just the command line tools" conforme o link abaixo, escolhendo de acordo com seu sistema operacional (Windows / Mac / Linux ):

* https://developer.android.com/studio/index.html#downloads

Se quiser o link direto para instalar em windows:

* https://dl.google.com/android/installer_r24.4.1-windows.exe

OPCIONAL : Você poderá instalar o Android Studio, que facilita o desenvolvimento para Android. Não utilizaremos neste tutorial, mas caso queira conhecer poderá baixar em:

* https://developer.android.com/studio/index.html

Em caso de desenvolvimento para iOS você precisará de um MAC, caso tenha instale o XCode, que é a ferramenta que faz a compilação do código meteor para um aplicativo iOS:

* https://developer.apple.com/xcode/download/

Por fim precisamos instalar o NPM, que é uma ferramenta para instalar bibliotecas utilizadas pela nossa aplicação. Provavelmente a versão recomendada será a v4.4.5LTS. Baixe e instale no seu PC.

* https://nodejs.org/en/


----


## Aplicativo


Mas o melhor é fazer um fork deste projeto para a sua conta no github e começar a desenvolver, veja no topo direito desta pagina a opçao de fork, ele irá criar um reposítorio na sua conta como por exemplo:

* https://github.com/Gambiologia/meteorapp

Este cógido agora deverá vir para sua máquina, aonde você poderá alterar e criar seu projeto. Para isso abre o SourceTree, programa que você instalou a pouco, Clica em Clonar/Novo (ícone no canto superior esquerdo). Abrirá uma janela onde você deverá clicar no ícone do globo, no canto superior direito da tela. Selecione o meteorapp, clique em OK e depois no botão Clonar. 

Espere até o final para que ele possa baixar todo o código, veja que ele irá informar aonde está sendo clonado, como exemplo C:\Users\<username>\Documentos\meteorapp. Terá um botão de *Abrir no Explorer*, tome nota deste camino.

Agora abra o terminal do Windows (Windows->Executar->cmd), no caso do Linux e OSx é chamado Temrinal.
Trabalhe no terminal sempre no diretório do seu projeto, você verá mais uso do terminal em outras etapas. Para entrar no diretorio escreva *cd <nome do diretorio>* e pressione ente. Como exemplo do windows será algo como:

* C:\Users\<username>\Documentos\meteorapp

Para iniciar a aplicação digite `meteor` no terminal e tecle enter. Em máquinas windows ele poderá abrir uma janela para pedir permissão para execução, escolha a opção sim.

Ele deverá exibir algumas mensagens, pode demorar um pouco mais nas primeiras vezes porque ele baixa alguns pacotes mas ao final deve mostrar algo como localhost 3000. Abra seu navegador e acesse a url http://localhost:3000

Se quiser para o aplicativo tecle no terminal Ctrl+C, ele irá perguntar se deseja para e escerva S (de sim). Agora instale as bibliotecas utilizadas pelo aplicativo, digitando no terminal:

* npm install



### Novo aplicativo

Caso não queira usar este projeto como exemplo (Não recomendável), você poderá criar conforme a página abaixo:

* [Criando Novo Aplicativo](NovoAplicativo.md)



----


## Servidor

Caso queira fazer a instalação desta aplicação em um servidor real, siga as instruções na página abaixo:

* [Instalando em um Servidor](Servidor.md)


----



## Executando

Com seu aplicativo instalado na sua máquina você executá-lo através do comando:

* meteor

Acessar o aplicativo através do navegador por meio do link:

* http://localhost:3000

Para executar a versão android execute:

* meteor run android

Faça edições do seu código utilizando o Sublime, abra ele e clique em File -> Abrir e escolha a pasta aonde está o clone do projeto que você realizou.


### TODO

* Fazer um aplicativo de exemplo com CRUD
* Fazer versando ios e android (parcial)
* Testar app comunicando no deploy real
* Fazer uma pagina no GHPages mostrando o app rodando na sua versao web