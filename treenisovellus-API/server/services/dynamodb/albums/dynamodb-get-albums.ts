import { docClient } from '../../../instances/aws';

export const dynamodbGetAlbums = () =>
  docClient
    .scan({
      TableName: 'musakorneri-production-albums',
    })
    .promise()
    .then((response) => response.Items);
