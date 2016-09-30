/**
 * TwoController
 *
 * @description :: Server-side logic for managing twoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TwoController.craete()`
   */
  craete: function (req, res) {
    Two.craete(req.params.all(),function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `TwoController.show()`
   */
  show: function (req, res) {
    Two.find().exec(function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `TwoController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TwoController.destroy()`
   */
  destroy: function (req, res) {
   Two.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json('deleted');
   });
  }
};

