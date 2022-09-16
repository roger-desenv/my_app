import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

import CustomersCard from '../components/CustomerCard'




const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}))



const Customers = () => {
  const classes = useStyles()
  const [customers, setCustomers] = useState([])

 
  
  useEffect(() => {

    axios.get('https://reqres.in/api/users') // poderia também usar o 'fetch', porém o axios é mais completo.
      .then(response => {
        const { data } = response.data // O caminho no console.log seria responde.data.data

        setCustomers(data)

      })

  }, [])// Será chamado quando iniciar o componente
  
  return (
    <Grid container>
      {
        customers.map(item => (
          <Grid item xs={12} md={4}>
            <CustomersCard 
              name={item.first_name}
              lastname={item.last_name}
              email={item.email}
              avatar={item.avatar}
              className={classes.card}
            />
          </Grid>
        ))
      }
    </Grid>
  
  )
}

export default Customers
