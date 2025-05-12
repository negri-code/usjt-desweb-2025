require ('dotenv').config()
// endpoint: receber requisições HTTP
const express = require ('express')
const {GoogleGenAI} = require ('@google/genai') // import google gemini
const app = express ()
//criar função modular
app.use (express.json())


// endpoint: tem um  método HTTP, padrão de acesso, funcionalidade
//GET (obter), POST(postar/lançar), PUT (atualizar), DELETE (deletar)
//exemplo.com/livros
//primeiro escolhe um metodo,  segundo um padrão de acesso.(o que o cliente digita para aparecer)
//terceiro funcionalidade () => {} 
// API coleção de endpoint's
app.post('/pergunte-ao-gemini', async (req, res) => {
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
    const prompt = req.body.prompt //recebe requsição
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
    res.json({"resposta": response.text}) //responde uma requisição
})

app.listen(3000, () => console.log("Beleza, rodando"))

