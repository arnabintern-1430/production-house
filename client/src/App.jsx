import { useState } from 'react'

import PhoneValidator from './PhoneValidator'
import UserForm from './pages/UserForm'
import PaymentButton from './pages/PaymentButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhoneValidator/>
      <UserForm/>
      <PaymentButton/>
    </>
  )
}

export default App
