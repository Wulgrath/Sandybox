import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-west-1',
});

export const docClient = new AWS.DynamoDB.DocumentClient();
