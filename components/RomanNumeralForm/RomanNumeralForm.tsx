export default function RomanNumeralForm() {
    return (
        <>
            <p>Please type a number between 1 and 1000 to get the equivalent roman numeral</p>
            <input type='number' min={1} max={1000}  />
            <p>
                Result: <small><i>Type a number above</i></small>
            </p>
        </>
    )
}