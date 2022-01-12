import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, expenses } = this.props;
    const expenseValues = expenses.map(({ value, currency, exchangeRates }) => (
      parseFloat((value * exchangeRates[currency].ask))
    ));
    const reducer = (ac, cv) => (ac) + (cv);
    const total = expenseValues.reduce(reducer, 0);

    return (
      <div>
        <div data-testid="email-field">
          { user }
        </div>
        <div data-testid="total-field">
          { total.toFixed(2) }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
