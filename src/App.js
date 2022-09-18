import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import Customers from './pages/Customers'
import Home from './pages/Home'
import { StrictMode } from 'react'

const App = () => {
  return (
    
    <Router>
      
        <TemplateDefault>
          <Switch>
            <Route path="/customers">
              <TemplatePage title="Clientes" Component={Customers} />
            </Route>
            <Route path="/">
              <TemplatePage title="Página Inicial" Component={Home} />
            </Route>
          </Switch>
        </TemplateDefault>
      
    </Router>
    
    
  )
}

export default App
