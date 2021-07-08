"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumsRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const get_albums_controller_1 = require("../controllers/albums/get-albums.controller");
const put_albums_controller_1 = require("../controllers/albums/put-albums.controller");
const albumsRouter = new koa_router_1.default({ prefix: '/albums' });
exports.albumsRouter = albumsRouter;
albumsRouter.get('/', get_albums_controller_1.getAlbums);
albumsRouter.post('/', put_albums_controller_1.putAlbums);
//# sourceMappingURL=albums.router.js.map