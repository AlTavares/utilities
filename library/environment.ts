import consola from "consola"

export class EnvironmentVariable<T> {
    constructor(public name: string) {
        this.name = name
    }

    required(): T {
        return this.get(true) as T
    }

    optional(): T | undefined {
        return this.get(false)
    }

    private get(required: boolean): T | undefined {
        const value = process.env[this.name] as T
        if (value === undefined) {
            const message = `Missing environment variable ${this.name}`
            if (required) {
                throw new Error(message)
            }
            consola.warn(message)
        }
        return value
    }
}


