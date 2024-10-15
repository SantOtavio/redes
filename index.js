// Carrega as variáveis de ambiente a partir do arquivo .env
require('dotenv').config();

const express = require("express");
const app = express();

// Configura o servidor Express para processar requisições com corpo JSON
app.use(express.json());

// Define a rota POST para o envio de e-mails
app.post("/enviar-email", (req, res) => {    
    // Extrai os dados do corpo da requisição (from, to, subject, text, html)
    const { from, to, subject, text, html } = req.body;
    
    // Chama a função de envio de e-mail com os parâmetros recebidos
    sendEmail({ to, from, subject, text, html });
    
    // Retorna uma resposta JSON contendo as informações do e-mail enviado
    res.json({message: { from, to, subject, text, html }});
});

// Inicia o servidor na porta 3000 e exibe uma mensagem quando ele está ativo
app.listen("3000", function () {
    console.log("SUBIU, GLORIAS!!");  // Mensagem de confirmação no console
});

// Importa o módulo nodemailer para envio de e-mails
const nodemailer = require('nodemailer');

// Configura o transporter com os detalhes do servidor SMTP
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,  // Endereço do servidor SMTP
    port: process.env.SMTP_PORT,  // Porta do servidor SMTP
    secure: false,                // Define se a conexão é segura (SSL/TLS)
    debug: true,                  // Habilita o modo de depuração
    logger: true,                 // Habilita o log de informações
    auth: {
        user: process.env.SMTP_USER,  // Usuário para autenticação SMTP
        pass: process.env.SMTP_PASS,  // Senha para autenticação SMTP
    },
});

// Função assíncrona para enviar o e-mail usando o nodemailer
async function sendEmail({ from, to, subject, text, html }) {
    try {
        // Envia o e-mail com os detalhes fornecidos
        const info = await transporter.sendMail({
            from,    // Remetente
            to,      // Destinatário(s)
            subject, // Assunto do e-mail
            text,    // Conteúdo em texto plano
            html     // Conteúdo em HTML (opcional)
        });

        // Exibe uma mensagem de sucesso com o ID da mensagem enviada
        console.log('E-mail enviado com sucesso:', info.messageId);
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console
        console.error('Erro ao enviar e-mail:', error);
    }
}
