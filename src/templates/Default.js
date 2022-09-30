import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Header from "../partials/Header/Header"

import useAuth from '../state/auth'

//.JSS = CSS em JS.
const useStyles = makeStyles(() => ({
  container:{
    padding: '15px 25px', //Sempre passando os valores como 'string'.
    //background: 'grey',
  }
})) // retorno implícito

const Default = ({ children }) => {
  const classes = useStyles()

  const { user } = useAuth()

  return (
    <>
      <Header user={user}/>
      <Container className={classes.container}>
        { children }
      </Container>
    </>
  )
}

export default Default