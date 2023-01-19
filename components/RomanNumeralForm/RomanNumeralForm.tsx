import RomanNumeralCalculator from "@/lib/classes/RomanNumeralCalculator"
import React, { useState } from "react"

export default function RomanNumeralForm() {
    const [userNumber, setUserNumber] = useState<number | null>(null)
    const updateUserNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const n = +e.target.value
        if (!n || isNaN(n)) {
            setUserNumber(null)
            return false
        }
        if (n < 1 || n > 1000) {
            window.alert('Kindly choose a number between 1 and 1000 inclusive.')
            return false
        }
        setUserNumber(n)
    }
    const handleUserKeyDowns = (e: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * This regex will allow the user to use numbers and backspace keys only
         * No (Ctrl+A) or Delete so far :/ 
         */
        if (!/^([0-9]|Backspace)$/.test(e.key)) {
            e.preventDefault()
            return false
        }
    }
    return (
        <>
            <p>Please type a number between 1 and 1000 to get the equivalent roman numeral</p>
            <input type='number' min={1} max={1000} onChange={updateUserNumber} onKeyDown={handleUserKeyDowns} />
            <p>
                <>Result: {
                    userNumber ?
                        new RomanNumeralCalculator(userNumber).convert() :
                        <small><i>Type a number above</i></small>
                }
                </>
            </p>
        </>
    )
}