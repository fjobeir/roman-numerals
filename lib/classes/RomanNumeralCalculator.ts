/**
 * Kindly check this url to learn in details about converting rules
 * https://en.wikipedia.org/wiki/Roman_numerals
 * 
 * So basically, we have the following matches:
 * I   1
 * V   5
 * X   10
 * L   50
 * C   100
 * D   500
 * M   1000
 * Additionally:
 * If the "I" comes before "V" and "X" it makes 4 and 9.
 * If the "X" comes before "L" and "C" it makes 40 and 90.
 * If the "C" comes before "D" and "M" it makes 400 and 900.
 * 
 * Taking a look at the converting rule, we notice a common pattern between the different decimal places
 * 1 -> 4 -> 5 -> 9
 * 10 -> 40 -> 50 -> 90
 * 100 -> 400 -> 500 -> 900
 * 1000
 * 
 */

export default class RomanNumeralCalculator {
    private _number: number = 0;
    romanUnits: { [key: string]: number } = {
        /**
         * Those keys must have a descending order by their value.
         * The algorithm asssumes that we should start calculating the "Thousands" then "Hundreds", "Tens", and lastly "Units".
         */

        M: 1000,
        // ----
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        // ----
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        // ----
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    constructor(number: number) {
        this.number = number
    }
    public set number(n: number) {
        /**
         * Allowing from 1 to 3999
         * This class is nuteral and has no relation with the condition of accepting a number between 1 and 1000 only 
         */
        if (!isNaN(n) && (n > 0) && (n < 4000)) {
            this._number = n
        } else {
            throw new Error('Please enter a number between 1 and 3999 inclusive.')
        }
    }
    convert(): string {
        let result = ''
        for (let key in this.romanUnits) {
            /**
             * Here, we are looping on all roman units to check if the number accept division on the unit.
             * If the division result is > 0, we will repeat that key for {division result} times in the final result
             */
            result += key.repeat(Math.floor(this._number / this.romanUnits[key]));
            /**
             * Then we should change the value of the number.
             * It will also let us move to the next check where we can decide the next letter(s) to be added
             */
            this._number %= this.romanUnits[key];
        }
        return result
    }
}