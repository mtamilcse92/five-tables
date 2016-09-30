/**
 * One.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nameOne : { type: 'string' },

    twoValues: { collection: 'two', via: 'oneTwo' },

    threeValues: { collection: 'three', via: 'oneThree' },

    fourValues: { collection: 'four', via: 'oneFour' },

    fiveValues: { collection: 'five', via: 'oneFive' }
  }
};

