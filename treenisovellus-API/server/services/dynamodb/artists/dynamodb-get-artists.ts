import { docClient } from '../../../instances/aws';

export const dynamodbGetArtists = () =>
  docClient
    .scan({
      TableName: 'musakorneri-production-artists',
    })
    .promise()
    .then((response) => response.Items);
