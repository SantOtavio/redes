# Projeto de Envio de E-mails com Node.js e Nodemailer

Este projeto é um exemplo simples de como configurar um servidor Node.js usando o Express para enviar e-mails via SMTP utilizando o Nodemailer. As credenciais de e-mail são gerenciadas de maneira segura através de variáveis de ambiente definidas em um arquivo `.env`.

## Funcionalidades
- Envio de e-mails utilizando o serviço SMTP do Gmail.
- Configuração das credenciais de e-mail via variáveis de ambiente.
- Endpoint `/enviar-email` que aceita requisições POST com as informações do e-mail (remetente, destinatário, assunto, conteúdo).
- Exibe logs no console com detalhes do envio do e-mail (como sucesso ou erro).

## Requisitos
- Node.js (versão 14 ou superior)
- Um serviço SMTP (no exemplo, usamos Gmail)
- Dependências:
  - `express`
  - `dotenv`
  - `nodemailer`

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-envio-email.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd projeto-envio-email
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Crie o arquivo `.env` no diretório raiz do projeto e configure as credenciais de e-mail (veja a seção "Configurar o arquivo .env").

## Configurar o arquivo .env

O arquivo `.env` deve conter as informações de autenticação do servidor SMTP. Se você estiver usando o Gmail, siga os passos abaixo para gerar uma senha de aplicativo.

```sh
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seugmail@gmail.com
SMTP_PASS=sua_senha_gerada
```

### Criar uma senha de aplicativo para o Gmail

Para usar o Gmail como serviço de SMTP, é necessário gerar uma senha de aplicativo, já que o Gmail pode bloquear acessos diretos via senha padrão.

1. Acesse o seguinte link: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Faça login com sua conta do Gmail.
3. Na seção "Senhas de app", selecione o aplicativo e o dispositivo para o qual deseja gerar a senha.
4. Gere a senha de aplicativo e copie-a.
5. Cole a senha gerada no campo `SMTP_PASS` do arquivo `.env`.

## Como Usar

1. Após configurar o arquivo `.env`, inicie o servidor:

   ```sh
   node app.js
   ```

2. O servidor estará rodando na porta 3000. Agora, você pode enviar requisições POST para o endpoint `/enviar-email` com o seguinte formato JSON no corpo da requisição:

   ```json
   {
       "from": "seu_email@exemplo.com",
       "to": "destinatario@exemplo.com",
       "subject": "Assunto do e-mail",
       "text": "Conteúdo em texto plano",
       "html": "<h1>Conteúdo em HTML</h1>"
   }
   ```

3. Ao enviar a requisição, o servidor processará os dados e enviará o e-mail para o destinatário especificado. O resultado será exibido no console, confirmando o sucesso ou relatando um erro.

## Estrutura do Projeto

- `app.js`: Contém toda a lógica do servidor Express, incluindo a configuração do Nodemailer e o endpoint para envio de e-mails.
- `.env`: Arquivo que contém as credenciais e informações sensíveis para a autenticação SMTP. **Este arquivo nunca deve ser enviado ao repositório.**
- `package.json`: Arquivo de configuração do projeto, que inclui as dependências e scripts de inicialização.
