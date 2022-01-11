import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userValue } from '../actions';

const MIN_SIZE_PASS = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.login = this.login.bind(this);
    this.validation = this.validation.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value.replace(/\s/g, '') }, () => {
      this.validation();
    });
  }

  validation() {
    const { email, password } = this.state;

    if (password.length >= MIN_SIZE_PASS && email.match(/@/) && email.match(/\..../)) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  login(e) {
    e.preventDefault();
    const { email } = this.state;
    const { loginDispatch, history } = this.props;
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <div>
        <h3>Login Page</h3>
        <form>
          <input
            autoComplete="off"
            data-testid="email-input"
            // onChange={ (e) => this.setState({ email: e.target.value }) }
            onChange={ this.onChange }
            name="email"
            placeholder="E-mail"
            type="email"
            value={ email }
          />
          <input
            autoComplete="current-password"
            data-testid="password-input"
            // onChange={ (e) => this.setState({ password: e.target.value }) }
            onChange={ this.onChange }
            name="password"
            placeholder="Senha"
            type="password"
            value={ password }
          />

          <button
            disabled={ disabled }
            onClick={ (e) => this.login(e) }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (e) => dispatch(userValue(e)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
