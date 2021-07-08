import { docClient } from '../../../instances/aws';

export const dynamodbPutArtists = (newArtist: any) =>
  docClient
    .put({
      TableName: 'musakorneri-production-artists',
      Item: newArtist,
    })
    .promise()
    .then((response) => response);
