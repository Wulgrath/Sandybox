"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamodbPutAlbums = void 0;
const aws_1 = require("../../../instances/aws");
const dynamodbPutAlbums = (newAlbum) => aws_1.docClient
    .put({
    TableName: 'musakorneri-production-albums',
    Item: newAlbum,
})
    .promise()
    .then((response) => response);
exports.dynamodbPutAlbums = dynamodbPutAlbums;
//# sourceMappingURL=dynamodb-put-albums.js.map