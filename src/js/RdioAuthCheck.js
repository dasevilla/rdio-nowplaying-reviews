var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      isAuthenticated: false
    };
  },
  componentDidMount: function() {
    this.setState({
      isAuthenticated: R.authenticated()
    });
  },
  handleAuthenticate: function() {
    R.authenticate();
  },
  render: function() {
    if (!this.state.isAuthenticated) {
      return (
        <p>
          <button className="btn btn-primary btn-lg" onClick={this.handleAuthenticate}>Sign in with Rdio</button>
        </p>
      )
    } else {
      return (
        <p>Authenticated</p>
      )
    }
  }
});
