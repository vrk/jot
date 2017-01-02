/* @flow */

const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3100));


app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop');
});

