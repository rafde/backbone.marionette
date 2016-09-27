import Benchmark from 'benchmark';
import collectionMock from '../mocks/collection.mocks';
const suite = new Benchmark.Suite('collection view remove');
const tpl = _.template('<%= name %> <%= description %>');

function setCollectionView(Mn, data) {
  this.data = data;
  this.collectionView = new Mn.CollectionView({
    collection: new Backbone.Collection(data),
    childView: Mn.View,
    childViewOptions: {
      template: tpl
    }
  });
}

function setupCurrent() {
  setCollectionView.call(this, MarionetteCurrent, collectionMock.getFirst250());
  this.collectionView.render();
  this.removing = this.collectionView.collection.models;
}

function setupLatest() {
  setCollectionView.call(this, Marionette, collectionMock.getFirst250());
  this.collectionView.render();
  this.removing = this.collectionView.collection.models;
}

function fn() {
  this.collectionView.collection.remove(this.removing);
}

suite.add(
  'Current: remove',
  {
    fn: fn,
    onStart: setupCurrent,
    onCycle: setupCurrent
  }
);

suite.add(
  'Latest: remove',
  {
    fn: fn,
    onStart: setupLatest,
    onCycle: setupLatest
  }
);

module.exports = suite;
