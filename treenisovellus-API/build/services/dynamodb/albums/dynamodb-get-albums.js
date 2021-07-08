"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamodbGetAlbums = void 0;
const aws_1 = require("../../../instances/aws");
const dynamodbGetAlbums = () => aws_1.docClient
    .scan({
    TableName: 'musakorneri-production-albums',
})
    .promise()
    .then((response) => response.Items);
exports.dynamodbGetAlbums = dynamodbGetAlbums;
//# sourceMappingURL=dynamodb-get-albums.js.map