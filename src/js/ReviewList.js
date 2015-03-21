var React = require('react');

var ReviewItem = require('./ReviewItem');

module.exports = React.createClass({
  render: function() {
    if (this.props.reviews.length) {
      var reviewItems = this.props.reviews.map(function(review){
        return (
          <ReviewItem key={review.mkid} review={review} />
        )
      })
      return (
        <div className="reviewList">
          {reviewItems}
        </div>
      )
    } else {
      return (
        <p>No reviews found</p>
      )
    }
  }
});
