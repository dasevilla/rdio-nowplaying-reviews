var React = require('react');
var NowPlayingReviews = require('./NowPlayingReviews');

R.ready(function() {
  React.render(
    <NowPlayingReviews />,
    document.getElementById('content')
  );
});
