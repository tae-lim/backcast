var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('dog');
    this.render(this.videos);
  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },


  render: function() {
    this.$el.html(this.template());
    var allVideos = new VideoListView({collection: this.videos});
    allVideos.render();

    new VideoPlayerView({
      //grabs the first item in the collection .at(0)
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
