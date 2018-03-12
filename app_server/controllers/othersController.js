module.exports = {

  /* Get 'about' page */
  about: function(req, res) {
    res.render('index', { title: 'About' });
  }

}
