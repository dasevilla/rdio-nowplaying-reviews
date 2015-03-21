var React = require('react');

var BootStrapColumn = require('./BootStrapColumn');
var BootstrapRow = require('./BootstrapRow');
var NowPlayingFooter = require('./NowPlayingFooter');
var RdioAuthCheck = require('./RdioAuthCheck');
var ReviewBox = require('./ReviewBox');

module.exports = React.createClass({
  componentDidMount: function() {
    R.on('change:authenticated', this.render);
  },
  render: function() {
    var mainClass;

    if (R.authenticated()) {
      mainClass = <ReviewBox musikkiAppId="eb09bd0c88d0a0d1b6ce4811f4e64729" musikkiAppKey="c7261efcb5a83bc4ecf1417ffc4350ea" />;
    } else {
      console.log('Not authenticated');
      mainClass = (
        <BootstrapRow>
          <BootStrapColumn className="col-md-12">
            <RdioAuthCheck />
          </BootStrapColumn>
        </BootstrapRow>
      )
    }

    return (
      <div>
        {mainClass}
        <NowPlayingFooter />
      </div>
    )
  }
});
