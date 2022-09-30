import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Home from './pages/Home'
import Login from './pages/Login'



const App = () => {

  return (
    
      <Router>
        <Switch>
          <Route path="/login">
            <TemplateClean title="Acesso Restrito" Component={Login} />
          </Route>

          <TemplateDefault>  
            <Switch>
              <Route path="/customers/edit/:id">
                <TemplatePage title="Editar Clientes" Component={CustomersEdit} />
              </Route>

              <Route path="/customers/add">
                <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
              </Route>
              
              <Route path="/customers">
                <TemplatePage title="Lista de Clientes" Component={CustomersList} />
              </Route>
            
              <Route path="/">
                <TemplatePage title="Página Inicial" Component={Home} />
              </Route>
            </Switch>
          </TemplateDefault>
        </Switch>
      </Router>
    
  )
}

export default App
