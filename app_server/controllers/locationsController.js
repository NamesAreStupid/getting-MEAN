module.exports = {
  /* Get 'home' page */
  homelist: function(req, res) {
    res.render('index', { title: 'Home' });
  },

  /* Get 'location info' page */
  locationInfo: function(req, res) {
    res.render('index', {title: 'Location info' });
  },

  /* Get 'Add review' page */
  addReview: function(req, res) {
    res.render('index', { title: 'Add review' });
  }

}
