var React = require('react');

var BootStrapColumn = require('./BootStrapColumn');
var BootstrapRow = require('./BootstrapRow');

module.exports = React.createClass({
  render: function() {
    return (
      <BootstrapRow>
        <BootStrapColumn className="col-md-12">
          <p>
            <small>
              Built at <a href="sxsw.com/music/hackathon"  target="_blank">2015 SXSW Music Hackathon Championship</a>.
            </small>
          </p>
        </BootStrapColumn>
      </BootstrapRow>
    )
  }
})
