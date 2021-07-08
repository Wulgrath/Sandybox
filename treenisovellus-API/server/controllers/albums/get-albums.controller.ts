import { Context, Next } from 'koa';
import { dynamodbGetAlbums } from '../../services/dynamodb/albums/dynamodb-get-albums';

export const getAlbums = async (ctx: Context, next: Next) => {
  const albums = await dynamodbGetAlbums();

  if (albums) {
    ctx.status = 200;
    ctx.body = albums;
  } else {
    ctx.status = 400;
  }
  await next();
};
