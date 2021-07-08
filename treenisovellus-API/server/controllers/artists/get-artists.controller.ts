import { Context, Next } from 'koa';
import { dynamodbGetArtists } from '../../services/dynamodb/artists/dynamodb-get-artists';

export const getArtists = async (ctx: Context, next: Next) => {
  const artists = await dynamodbGetArtists();

  if (artists) {
    ctx.status = 200;
    ctx.body = artists;
  } else {
    ctx.status = 400;
  }
  await next();
};
