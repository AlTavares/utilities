import { Command } from "commander"
import { consola } from "consola"
import process from "node:process"

export class CLI {
    static async create(handler: (cli: Command) => Promise<void>): Promise<Command> {
        const command = new Command()
        command
            .helpCommand(true)
            .allowExcessArguments(false)
            .allowUnknownOption(false)

        command
            .option("-v, --verbose", "verbose output")
            .on("option:verbose", () => {
                consola.level = command.opts().verbose ? +999 : 3
            })

        command.option("-q, --quiet", "quiet output").on("option:quiet", () => {
            consola.level = command.opts().quiet ? -999 : 3
        })

        command.on("command:*", function () {
            consola.error(
                "Invalid command: %s\nSee --help for a list of available commands.",
                command.args.join(" "),
            )
            process.exit(1)
        })

        await handler(command)
        return command
    }
}
