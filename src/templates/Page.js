import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'



//.JSS = CSS em JS.
const useStyles = makeStyles(() => ({
  container:{
    padding: '15px 25px', //Sempre passando os valores como 'string'.
    //background: 'grey',
  }
})) // retorno implícito

const Page = ({ title, Component }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3">
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default Page