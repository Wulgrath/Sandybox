import Router from 'koa-router';
import { getAlbums } from '../controllers/albums/get-albums.controller';
import { putAlbums } from '../controllers/albums/put-albums.controller';

const albumsRouter = new Router({ prefix: '/albums' });

albumsRouter.get('/', getAlbums);
albumsRouter.post('/', putAlbums);

export { albumsRouter };
