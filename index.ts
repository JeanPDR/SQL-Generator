import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const app: Application = express();
const port =  process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const API_KEY: string = "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";

const configuration = new Configuration({ 
    apiKey: API_KEY 
})
const openai = new OpenAIApi(configuration)

app.post("/completions", async (req: Request, res: Response) => {
  try {
    const completion = await openai.createChatCompletion({
   model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Hello!"}]
    })
    res.send(completion.data.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`));
