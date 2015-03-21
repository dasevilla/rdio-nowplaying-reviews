var React = require('react');

module.exports = React.createClass({
  render: function() {
    if (this.props.release.title) {
      return <h2>Reviews of <em>{this.props.release.title}</em></h2>
    } else {
      return <h2>Unable to find on Musikki</h2>
    }
  }
});
