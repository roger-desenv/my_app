import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles"

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import Toasty from '../../components/Toasty'


const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(2)
  }

}))

const Register = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    }
  })

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () => {
    setIsLoading(true)

    let hasError = false

    let newFormState = {
      ...form,
    }

    if (!form.name.value) {
      hasError = true


      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente!'
      }
    }
    

    if (!form.job.value) {
      hasError = true

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo job corretamente!'
      }
    }

    if(hasError) {
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/user', {
      name: form.name.value,
      job: form.job.value,
    }).then(() => {
      setIsLoading(false)
      setOpenToasty(true)
      
    })
  }
      

  return (
    <>
      <div className={classes.wrapper}>
        
        <TextField 
        error={form.name.error}
        helperText={form.name.error ? form.name.helperText : '' }
        //variant="outlined" 
        label="Digite seu nome" 
        name="name" 
        value={form.name.value} 
        onChange={handleInputChange} 
        />

      </div>

      <div className={classes.wrapper}>
        
        <TextField 
        error={form.job.error}
        helperText={form.job.error ? form.job.helperText : '' }
        //variant="outlined" 
        label="Digite seu cargo" 
        name="job" value={form.job.value} 
        onChange={handleInputChange} 
        />

      </div>

      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={handleRegisterButton} disabled={isLoading}>
          {
              isLoading ? 'Aguarde...' : 'Cadastrar'
          }
        </Button>
      </div>
      <Toasty 
      open={openToasty} 
      severity="success" 
      text="Cadastro Realizado com Sucesso!"
      onClose={() => setOpenToasty(false)}
      />
    </>
  )
}

export default Register