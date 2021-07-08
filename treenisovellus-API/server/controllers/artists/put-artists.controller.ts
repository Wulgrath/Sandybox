import { Context, Next } from 'koa';
import { v4 as uuidv4 } from 'uuid';
import { dynamodbPutArtists } from '../../services/dynamodb/artists/dynamodb-put-artists';

export const putArtists = async (ctx: Context, next: Next) => {
  const body = ctx.request.body as any;

  const newArtist = {
    id: uuidv4(),
    ...body,
  };

  const response = await dynamodbPutArtists(newArtist);

  if (response) {
    ctx.status = 200;
    ctx.body = newArtist;
  } else {
    ctx.status = 400;
  }
};
