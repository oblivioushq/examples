// Load the SDK for JavaScript
var AWS = require('oblivious');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  oblivious: {
    passphrase: process.env.OBLIVIOUS_PASSPHRASE || '<make something up>',
    token: process.env.OBLIVIOUS_TOKEN || '<token from the API>',
  }
});

// Call S3 to list current buckets
s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});
