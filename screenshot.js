#! /usr/local/bin/casperjs 

var casper = require("casper").create(),
    url = casper.cli.args[0],
    selector = casper.cli.args[1] || 'body',
    vw = casper.cli.get('vw') || 1280,
    vh = casper.cli.get('vh') || 960,
    filename = casper.cli.get('filename') || (url+'-'+selector).replace(/[^a-zA-Z0-9]/gi, '-').replace(/^https?-+/, '')+'.png';
 
casper.start();

casper.thenOpen(url, function() {
    //set the viewport to the desired height and width
    this.viewport(vw, vh);

    //Capture selector captures the whole body
    this.captureSelector(filename, selector);

    this.echo('Screenshot saved as ' + filename);
});
 
casper.run();
