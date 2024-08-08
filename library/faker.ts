import type { PersonModule, StringModule } from "@faker-js/faker"
import { base, Faker, faker } from "@faker-js/faker"

// @ts-expect-error
class PersonExtension extends PersonModule {
    /**
     * Generates a random CPF (Cadastro de Pessoas Físicas) number.
     * 
     * @returns {string} The generated CPF number.
     */
    cpf() {
        return faker.helpers.fromRegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}")
    }

    /**
     * Generates a random CNPJ (Cadastro Nacional da Pessoa Jurídica) number.
     * 
     * @returns {string} The generated CNPJ number.
     */
    cnpj() {
        return faker.helpers.fromRegExp("[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}")
    }
}

// @ts-expect-error
class DateExtension extends StringModule {
    /**
     * Generates a future date in the format YYYY-MM-DD.
     * 
     * @returns The future date in the format YYYY-MM-DD.
     */
    futureDate() {
        return faker.date.future().toISOString().slice(0, 10) // YYYY-MM-DD format
    }

    /**
     * Generates a past date in the format YYYY-MM-DD.
     * 
     * @returns {string} The past date in the format YYYY-MM-DD.
     */
    pastDate() {
        return faker.date.past().toISOString().slice(0, 10) // YYYY-MM-DD format
    }
}

class FakerExtensions extends Faker {
    person = new PersonExtension(faker)
    string = new DateExtension(faker)
}

export const fakerExt = new FakerExtensions({ locale: [base] })

export { fakerExt as faker }
