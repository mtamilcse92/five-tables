/**
 * FourController
 *
 * @description :: Server-side logic for managing fours
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FourController.craete()`
   */
  craete: function (req, res) {
    Four.craete(req.params.all(),function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `FourController.show()`
   */
  show: function (req, res) {
    Four.find().exec(function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `FourController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `FourController.destroy()`
   */
  destroy: function (req, res) {
     Four.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json('deleted');
   });
  }
};

