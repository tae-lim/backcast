var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    //old way
    this.collection.forEach(function (video) {
      var singleVideo = new VideoListEntryView({model: video}).el;
      $('.video-list').append(singleVideo);
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
