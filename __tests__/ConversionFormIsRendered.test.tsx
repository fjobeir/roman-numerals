import { render } from '@testing-library/react'
import Home from '@/pages/index'

it('Homepage has the numeral converter form', () => {
  const { container } = render(<Home />)
  expect(container).toHaveTextContent('Please type a number between 1 and 1000 to get the equivalent roman numeral')
})
