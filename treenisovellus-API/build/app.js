"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const albums_router_1 = require("./routers/albums.router");
const app = new koa_1.default();
exports.app = app;
app.use(koa_json_1.default());
app.use(koa_bodyparser_1.default());
app.use(cors_1.default());
console.log('setting up routes now');
app.use(albums_router_1.albumsRouter.routes()).use(albums_router_1.albumsRouter.allowedMethods());
//# sourceMappingURL=app.js.map