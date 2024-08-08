import consola from "consola"

export function assertNoError(error: unknown): asserts error is null {
    if (!error) return // Do nothing if there is no error

    if (error instanceof Error) {
        consola.error(error.stack)
    } else {
        consola.error(error)
    }

    throw error
}

export function assert(condition: unknown, message?: string): asserts condition {
    if (!condition) {
        throw new Error(message)
    }
}
