import { docClient } from '../../../instances/aws';

export const dynamodbPutAlbums = (newAlbum: any) =>
  docClient
    .put({
      TableName: 'musakorneri-production-albums',
      Item: newAlbum,
    })
    .promise()
    .then((response) => response);
