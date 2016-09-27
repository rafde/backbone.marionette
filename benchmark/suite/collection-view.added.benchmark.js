import Benchmark from 'benchmark';
import collectionMock from '../mocks/collection.mocks';
const suite = new Benchmark.Suite('collection view remove');
const tpl = _.template('<%= name %> <%= description %>');

function getNext250() {
  return collectionMock.getFirst500().slice(250);
}

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
  this.added = getNext250();
  setCollectionView.call(this, MarionetteCurrent, collectionMock.getFirst250());
  this.collectionView.render();
}

function setupLatest() {
  this.added = getNext250();
  setCollectionView.call(this, Marionette, collectionMock.getFirst250());
  this.collectionView.render();
}

function fn() {
  this.collectionView.collection.add(this.added);
}

suite.add(
  'Current: added (next 250)',
  {
    fn: fn,
    onStart: setupCurrent,
    onCycle: setupCurrent
  }
);

suite.add(
  'Latest: added (next 250)',
  {
    fn: fn,
    onStart: setupLatest,
    onCycle: setupLatest
  }
);

module.exports = suite;
