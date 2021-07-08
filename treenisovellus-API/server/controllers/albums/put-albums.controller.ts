import { Context, Next } from 'koa';
import { v4 as uuidv4 } from 'uuid';
import { dynamodbPutAlbums } from '../../services/dynamodb/albums/dynamodb-put-albums';

export const putAlbums = async (ctx: Context, next: Next) => {
  const body = ctx.request.body as any;

  const newAlbum = {
    id: uuidv4(),
    ...body,
  };

  const response = await dynamodbPutAlbums(newAlbum);

  if (response) {
    ctx.status = 200;
    ctx.body = newAlbum;
  } else {
    ctx.status = 400;
  }
};
