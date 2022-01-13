import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { editMode } = this.props;

    return (
      <div>
        <Header />
        {
          (editMode) ? <FormEdit /> : <Form />
        }
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editMode: state.wallet.editMode,
});

Wallet.propTypes = {
  editMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
