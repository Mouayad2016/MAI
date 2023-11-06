const { OpenAI } = require('openai');
// const openai = new OpenAI();
const { get_encoding, encoding_for_model } = require("@dqbd/tiktoken");
const fs = require('fs');

module.exports = OpenAIController = {
    async generateText(req, res) {
        const openai = new OpenAI({
            key: process.env.OPENAI_API_KEY
        });
        try {
            var documentText;
            await new Promise((resolve, reject) => {
                fs.readFile('./controllers/AI/text.txt', 'utf8', (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                        documentText = data
                        console.log(data)
                    }
                })
            })


            const enc = encoding_for_model("text-davinci-002");
            const prompt = `skapa en sammanfattning av följande text: ${documentText}`;
            const encodedText = enc.encode(prompt);
            const maxTokens = Math.floor(encodedText.length * 0.5);
            const response = await openai.completions.create({
                prompt: prompt,
                max_tokens: maxTokens,
                model: "davinci-002", // Use the model ID of the davinci model you want to use 
                temperature: 0.2 // Adjust as needed
            });
            const summary = response.choices[0].text.trim();
            enc.free();
            console.log(response);
            res.status(200).json({ summary: summary, documentText: prompt, max_tokens: maxTokens }); // Sending the summary back as a response
        } catch (e) {
            console.log(e);
            res.status(500).json({ error: "An error occurred while generating the summary." });

        }
    }

}