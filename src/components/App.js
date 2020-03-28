import React, { Component } from 'react';
import Layout from './Layout';
import Loader from './Loader';
import { connect } from 'react-redux';
import { getLoader, getError } from '../redux/phoneBook/phoneBookSelectors';
import { fetchContacts } from '../redux/phoneBook/phoneBookOperations';
import PhoneBookPage from '../pages/PhoneBookPage';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const errorMessage = Object.keys(this.props.error).length;
    return (
      <Layout>
        {errorMessage && <h1>Ooops... Something went wrong</h1>}
        {this.props.loader && <Loader />}
        <PhoneBookPage />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loader: getLoader(state),
  error: getError(state),
});

const mapDispatchToProps = {
  getContacts: fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
