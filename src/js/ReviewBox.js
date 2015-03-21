var React = require('react');
var $ = require('jquery');

var BootStrapColumn = require('./BootStrapColumn');
var BootstrapRow = require('./BootstrapRow');
var ReviewBoxTitle = require('./ReviewBoxTitle');
var ReviewList = require('./ReviewList');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      release: {},
      reviews: []
    };
  },
  componentDidMount: function() {
    R.player.on('change:playingTrack', this.handleTrackChange);
    this.releaseSearch();
  },
  handleTrackChange: function() {
    this.releaseSearch();
  },
  releaseSearch: function() {
    var track = R.player.playingTrack();
    var artistName = track.get('artist');
    var albumName = track.get('album');

    // Strip 'Deluxe' from names to increase chances of a match
    albumName = albumName.replace('(Deluxe)', '').replace('(Deluxe Edition)', '');

    $.ajax({
      url: 'https://music-api.musikki.com/v1/releases',
      data: {
        'q': '[artist-name:' + artistName + '],[release-title:' + albumName + ']'
      },
      dataType: 'json',
      headers: {
        'appid': this.props.musikkiAppId,
        'appkey': this.props.musikkiAppKey
      },
      success: function(data) {
        if (data.results.length === 0) {
          this.setState(this.getInitialState());
        } else {
          var mkid = data.results[0].mkid;
          this.releaseDetails(mkid);
          this.releaseReviews(mkid);
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
      }.bind(this)
    });
  },
  releaseDetails: function(mkid) {
    $.ajax({
      url: 'https://music-api.musikki.com/v1/releases/'+ mkid,
      dataType: 'json',
      headers: {
        'appid': this.props.musikkiAppId,
        'appkey': this.props.musikkiAppKey
      },
      success: function(data) {
        this.setState({release: data.result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('releaseDetails', xhr, status, err.toString());
      }.bind(this)
    });
  },
  releaseReviews: function(mkid) {
    $.ajax({
      url: 'https://music-api.musikki.com/v1/releases/'+ mkid + '/reviews',
      dataType: 'json',
      headers: {
        'appid': this.props.musikkiAppId,
        'appkey': this.props.musikkiAppKey
      },
      success: function(data) {
        this.setState({reviews: data.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('releaseReviews', xhr, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    if (this.state.release.title) {
      return (
        <div className="reviewBox">
          <BootstrapRow>
            <BootStrapColumn className="col-md-12">
              <ReviewBoxTitle release={this.state.release} />
            </BootStrapColumn>
          </BootstrapRow>
          <ReviewList reviews={this.state.reviews} />
        </div>
      );
    } else {
      return (
        <div className="reviewBox">
          <ReviewBoxTitle release={this.state.release} />
        </div>
      );
    }
  }
})
