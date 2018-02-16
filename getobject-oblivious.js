// Load the SDK for JavaScript
var fs = require('fs');
var AWS = require('oblivious');

// Set the region 
//AWS.config.update({region: 'REGION'});
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  oblivious: {
    passphrase: process.env.OBLIVIOUS_PASSPHRASE || '<make something up>',
    token: process.env.OBLIVIOUS_TOKEN || '<token from the API>',
  }
});

var file = fs.createWriteStream(process.argv[4]);

s3.getObject({
  Bucket: process.argv[2],
  Key: process.argv[3]
}).createReadStream().pipe(file);

// usage: node getobject-oblivious.js bucketname keyname outpufilename

