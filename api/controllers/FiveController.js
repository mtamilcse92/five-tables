/**
 * FiveController
 *
 * @description :: Server-side logic for managing fives
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FiveController.craete()`
   */
  craete: function (req, res) {
    Five.craete(req.params.all(),function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `FiveController.show()`
   */
  show: function (req, res) {
     Five.find().exec(function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `FiveController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `FiveController.destroy()`
   */
  destroy: function (req, res) {
    Five.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json('deleted');
   });
  }
};

