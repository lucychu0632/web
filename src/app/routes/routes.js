import { Route, IndexRoute } from 'react-router'
const ERROR_PATH = '/oops'
import Layout from '../containers/Layout/Layout'
import OopsRoute from './OopsRoute'
import NotFoundRoute from './NotFoundRoute'

export const makeRoutes = () => (
  <Route path="/" component={Layout}>
    /*<Route component={Layout} >
     <IndexRoute component={HomePage}/>
     <Route path="customer">
     <Route path="theme-design" component={ThemeDesign}/>
     </Route>
     </Route>
     <Route path="signin" component={SigninPage}/>
     <Route path="feature" component={FeaturePage}/>*/
    <Route path={ERROR_PATH} component={OopsRoute}/>
    <Route path="*" component={NotFoundRoute}/>
  </Route>
)

export default makeRoutes
