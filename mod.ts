/**
 * A pure typescript implementation of the [caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher?scrlybrkr=7b5d6ae7).
 * 
 * @param input - The input to shift through
 * @param shift - The number to shift (can be any number, positive or negative).
 * Negative shifts cancel positive shifts (5 to -5)
 * A 0 shift will not shift the text over.
 * @param alphabet - The alphabet to use (all upper/lower case transformations use locale). 
 * Do note that the alphabet must be entirely in the locale's lower case.
 * @returns The shifted text.
 * 
 * For example:
 * ```ts
 * caesar("Test", 5) // Yjxy
 * ```
 */
export function caesar(input: string, shift: number, alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")): string {
    if (shift < 0) {
        shift = alphabet.length + (shift % alphabet.length);
    }

    return input.split("").map(character => {
        const isUpperCase = character.toLocaleUpperCase() == character;
        
        const shiftedCharacter = alphabet[(alphabet.indexOf(character.toLocaleLowerCase()) + shift) % alphabet.length]

        if (isUpperCase) {
            return shiftedCharacter.toLocaleUpperCase()
        }

        return shiftedCharacter;
    }).join("");
}