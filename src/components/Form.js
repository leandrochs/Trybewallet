import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _uniqueId from 'lodash/uniqueId';
import { initialsValue, walletValue } from '../actions';
import currenceApi, { initialsApi } from '../helpers/getApi';

const curDefault = 'USD';
const metDefault = 'Dinheiro';
const tagDefault = 'Alimentação';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: '',
      description: '',
      currency: curDefault,
      method: metDefault,
      tag: tagDefault,
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.resetValues = this.resetValues.bind(this);
  }

  async componentDidMount() {
    const { currenceDispatch } = this.props;

    const initials = await initialsApi();
    currenceDispatch(initials);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  resetValues() {
    this.setState({
      expense: '',
      description: '',
      currency: curDefault,
      method: metDefault,
      tag: tagDefault,
    });
  }

  async submit(e) {
    e.preventDefault();
    const {
      expense,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const expenses = {
      id: _uniqueId() - 1,
      value: expense,
      description,
      currency,
      method,
      tag,
      exchangeRates: await currenceApi(),
    };

    const { submitDispatch } = this.props;
    submitDispatch(expenses);

    this.resetValues();
  }

  render() {
    const { expense, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        <input
          data-testid="value-input"
          type="number"
          name="expense"
          value={ expense }
          onChange={ this.onChange }
        />

        <input
          data-testid="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ this.onChange }
        />

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.onChange }
          >
            {
              currencies.map((ini) => <option key={ ini } value={ ini }>{ ini }</option>)
            }
          </select>
        </label>

        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.onChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.onChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button
          type="submit"
          onClick={ (e) => this.submit(e) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitDispatch: (e) => dispatch(walletValue(e)),
  currenceDispatch: (e) => dispatch(initialsValue(e)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  submitDispatch: PropTypes.func.isRequired,
  currenceDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
