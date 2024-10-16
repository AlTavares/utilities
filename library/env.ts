import { EnvironmentVariable } from "./environment.ts"

class Env {
    get openAI() {
        return {
            key: new EnvironmentVariable("OPENAI_API_KEY").required(),
            model: new EnvironmentVariable("OPENAI_MODEL").optional() ?? "gpt-4o"
        }
    }
}

export const env = new Env()