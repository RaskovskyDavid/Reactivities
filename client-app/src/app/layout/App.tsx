import React, { Fragment } from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityDashBoard from '../../features/activities/dashboard/ActivityDashBoard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
const location = useLocation();
  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route 
        path={'/(.+)'}
        render={() => (
          <Fragment>
             <NavBar />
            <Container style={{ marginTop: '7em' }}>
              
              <Route exact path='/activities' component={ActivityDashBoard} />
              <Route path='/activities/:id' component={ActivityDetails} />
            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
            </Container>
          </Fragment>
        )}
      />
      
    </Fragment>
  );
}
export default observer(App);