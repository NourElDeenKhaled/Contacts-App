import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Home from './components/home'
import StudentDetails from './containers/student-details'
import NotFound from './components/not-found'
import AddStudent from './containers/add-student'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#modelId" style={{cursor: 'pointer'}}>Add Student</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="conatainer">
                    <div className="row">
                        <div className="col">
                            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" data-backdrop="static" data-keyboard="false" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                        </div>
                                        <div className="modal-body">
                                            <AddStudent/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/students/:id" component={StudentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App
