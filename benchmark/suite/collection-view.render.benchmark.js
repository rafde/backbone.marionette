import Benchmark from 'benchmark';
import collectionMock from '../mocks/collection.mocks';
const suite = new Benchmark.Suite('collection view render');
const tpl = _.template('<%= name %> <%= description %>');

function setCollectionView(Mn, data) {
  this.collectionView = new Mn.CollectionView({
    collection: new Backbone.Collection(data),
    childView: Mn.View,
    childViewOptions: {
      template: tpl
    }
  });
}

function setupCurrent() {
  setCollectionView.call(this, MarionetteCurrent, collectionMock.getFirst50());
}

function setupLatest() {
  setCollectionView.call(this, Marionette, collectionMock.getFirst50());
}

suite.add(
  'Current: render',
  {
    fn() {
      this.collectionView.render();
    },
    onStart: setupCurrent,
    onCycle: setupCurrent
  }
);

suite.add(
  'Latest: render',
  {
    fn() {
      this.collectionView.render();
    },
    onStart: setupLatest,
    onCycle: setupLatest
  }
);

module.exports = suite;
