import { useState, useEffect } from 'react'
import axios from 'axios'

import CustomersCard from '../components/CustomerCard'

const Customers = () => {

  const [customers, setCustomers] = useState([])

  console.log(customers)
  
  useEffect(() => {

    axios.get('https://reqres.in/api/users') // poderia também usar o 'fetch', porém o axios é mais completo.
      .then(response => {
        const { data } = response.data // O caminho no console.log seria responde.data.data

        setCustomers(data)

      })

  }, [])// Será chamado quando iniciar o componente
  
  return (
    <>
      <h1>Customers</h1>
      {
        customers.map(item => (
          <CustomersCard 
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
          />
        ))
      }
    </>
  )
}

export default Customers
