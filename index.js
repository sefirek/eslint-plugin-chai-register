const Mocha = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect, assert } = chai;

const g = global || window;
/**
 * @type {expect}
 */
g.expect = expect;
g.assert = assert;
g.Mocha = Mocha;

