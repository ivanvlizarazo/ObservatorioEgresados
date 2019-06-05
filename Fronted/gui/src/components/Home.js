import React from 'react';
import CreateAdmin from './CreateAdmin';
import { Route } from 'react-router-dom';
import CustomLayout from '../containers/Layout';
import ModAdmin from './ModAdmin';
import AdminListView from '../containers/AdminListView';

class Home extends React.Component {
    render() {
        return(
            <div>
                <CustomLayout>
                    <Route exact path="/editar-admin/:id" component={ModAdmin} />
                    <Route exact path="/crear-admin" component={CreateAdmin} />
                    <Route exact path="/ver-admins" component={AdminListView} />
                </CustomLayout>
            </div>
        );
    }
}

export default Home;