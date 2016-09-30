/**
 * OneController
 *
 * @description :: Server-side logic for managing ones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OneController.craete()`
   */
  craete: function (req, res) {
   One.craete(req.params.all(),function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `OneController.show()`
   */
  show: function (req, res) {
  One.find().populate(['twoValues','threeValues','fourValues','fiveValues']).exec(function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `OneController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `OneController.destroy()`
   */
  destroy: function (req, res) {
   One.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json('deleted');
   });
  }
};

