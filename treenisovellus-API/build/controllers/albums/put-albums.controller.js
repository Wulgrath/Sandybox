"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAlbums = void 0;
const uuid_1 = require("uuid");
const dynamodb_put_albums_1 = require("../../services/dynamodb/albums/dynamodb-put-albums");
const putAlbums = async (ctx, next) => {
    const body = ctx.request.body;
    const newAlbum = {
        id: uuid_1.v4(),
        ...body,
    };
    const response = await dynamodb_put_albums_1.dynamodbPutAlbums(newAlbum);
    if (response) {
        ctx.status = 200;
        ctx.body = newAlbum;
    }
    else {
        ctx.status = 400;
    }
};
exports.putAlbums = putAlbums;
//# sourceMappingURL=put-albums.controller.js.map