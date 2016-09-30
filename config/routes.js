/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'post /one1' : 'OneController.create',
  'get /one1' : 'OneController.show',
  'put /one1/:id' : 'OneController.update',
  'delete /one1/:id' : 'OneController.destroy',

  'post /two2' : 'TwoController.create',
  'get /two2' : 'TwoController.show',
  'put /two2/:id' : 'TwoController.update',
  'delete /two2/:id' : 'TwoController.destroy',


  'post /three3' : 'ThreeController.create',
  'get /three3' : 'ThreeController.show',
  'put /three3/:id' : 'ThreeController.update',
  'delete /three3/:id' : 'ThreeController.destroy',

  'post /four4' : 'FourController.create',
  'get /four4' : 'FourController.show',
  'put /four4/:id' : 'FourController.update',
  'delete /four4/:id' : 'FourController.destroy',

  'post /five5' : 'FiveController.create',
  'get /five5' : 'FiveController.show',
  'put /five5/:id' : 'FiveController.update',
  'delete /five5/:id' : 'FiveController.destroy'

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
