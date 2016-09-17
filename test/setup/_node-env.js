var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var chaiJq = require('chai-jq');

chai.use(sinonChai);
chai.use(chaiJq);

global.chai = chai;
global.sinon = sinon;
global.expect = global.chai.expect;

require('../../global/jsdom');
