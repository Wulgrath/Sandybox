"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbums = void 0;
const dynamodb_get_albums_1 = require("../../services/dynamodb/albums/dynamodb-get-albums");
const getAlbums = async (ctx, next) => {
    const albums = await dynamodb_get_albums_1.dynamodbGetAlbums();
    if (albums) {
        ctx.status = 200;
        ctx.body = albums;
    }
    else {
        ctx.status = 400;
    }
    await next();
};
exports.getAlbums = getAlbums;
//# sourceMappingURL=get-albums.controller.js.map