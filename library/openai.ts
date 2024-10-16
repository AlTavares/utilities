import OpenAI from "openai"
import { env } from "./env.ts"

export class AI {
    private static openAI = new OpenAI({ apiKey: env.openAI.key })
    static async prompt(prompt: string) {
        const chat = await this.openAI.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: env.openAI.model,
        })
        return chat.choices[0].message.content
    }
}

