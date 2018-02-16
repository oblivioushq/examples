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

// Create the parameters for calling createBucket
var bucketParams = {
   Bucket : process.argv[2] || "BUCKET_NAME"
};                    

 // Call S3 to create the bucket
s3.listObjects(bucketParams, function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Success", data);
   }
});

