'use strict';

var config = require('outfield');

function outfielder(server, opts, done){

  function onLoad(err, env){
    if(err){
      done(err);
      return;
    }

    server.expose(env);
    done();
  }

  config(opts.schema, opts.options, onLoad);
}

outfielder.attributes = {
  pkg: require('./package.json')
};

module.exports = {
  register: outfielder
};
