var SearchView = Backbone.View.extend({

  events: {
    'click .btn' : 'handleSearch'

  },



  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleSearch: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
    //"form-control"
  },



  template: templateURL('src/templates/search.html')

});
