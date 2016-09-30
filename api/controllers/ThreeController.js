/**
 * ThreeController
 *
 * @description :: Server-side logic for managing threes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ThreeController.craete()`
   */
  craete: function (req, res) {
    Three.craete(req.params.all(),function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `ThreeController.show()`
   */
  show: function (req, res) {
   Three.find().exec(function(err,craete){
    if (err) {
      res.send(err,500);
    }
    res.json(craete);
   });
  },


  /**
   * `ThreeController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `ThreeController.destroy()`
   */
  destroy: function (req, res) {
     Three.destroy(req.param('id'),function(err,destroy){
    if (err) {
      return res.send(err,500);
    }
    res.json('deleted');
   });
  }
};

