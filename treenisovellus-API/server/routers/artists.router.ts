import Router from 'koa-router';
import { getArtists } from '../controllers/artists/get-artists.controller';
import { putArtists } from '../controllers/artists/put-artists.controller';

const artistsRouter = new Router({ prefix: '/artists' });

artistsRouter.get('/', getArtists);
artistsRouter.post('/', putArtists);

export { artistsRouter };
