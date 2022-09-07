import { makeStyles } from '@material-ui/core/styles'

//.JSS = CSS em JS.
const useStyles = makeStyles(() => ({
  title:{
    flexGrow: 1,
    marginLeft: 2 // Não precisa usar 2px, apenas o numeral.
  }
})) // retorno implícito

export default useStyles