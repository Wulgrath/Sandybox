import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { albumsRouter } from './routers/albums.router';
import { artistsRouter } from './routers/artists.router';

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(cors());
console.log('setting up routes now');

app.use(albumsRouter.routes()).use(albumsRouter.allowedMethods());
app.use(artistsRouter.routes()).use(artistsRouter.allowedMethods());

export { app };
