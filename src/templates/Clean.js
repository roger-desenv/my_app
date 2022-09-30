import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'


//.JSS = CSS em JS.
const useStyles = makeStyles(() => ({
  container:{
    padding: '15px 25px', //Sempre passando os valores como 'string'.
    //background: 'grey',
  }
})) // retorno implícito

const Clean = ({ Component }) => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container}>
        <Component />
      </Container>
    </>
  )
}

export default Clean