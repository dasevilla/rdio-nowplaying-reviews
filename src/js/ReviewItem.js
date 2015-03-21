var React = require('react');

var BootStrapColumn = require('./BootStrapColumn');
var BootstrapRow = require('./BootstrapRow');

module.exports = React.createClass({
  render: function() {
    return (
      <BootstrapRow>
        <BootStrapColumn className="col-md-12">
          <blockquote>
            <p className="summary">
              {this.props.review.summary}
            </p>
            <footer>
              <a href={this.props.review.url}  target="_blank">
                <img src={this.props.review.source.avatar} height="20" />
              </a> (<span className="rating">{this.props.review.rating.value}/{this.props.review.rating.scale}</span>)
            </footer>
          </blockquote>
        </BootStrapColumn>
      </BootstrapRow>
    )
  }
});
