import * as awsServerlessExpress from 'aws-serverless-express';
import Koa from 'koa';
import { Context, APIGatewayProxyEvent } from 'aws-lambda';

import { app } from './app';

const serverless =
  (koaApp: Koa) => (event: APIGatewayProxyEvent, ctx: Context) => {
    console.log(`EVENT ${JSON.stringify(event, null, 4)}`);
    console.log(`CONTEXT ${JSON.stringify(ctx, null, 4)}`);
    awsServerlessExpress.proxy(
      awsServerlessExpress.createServer(koaApp.callback()),
      event,
      ctx
    );
  };

const handler = serverless(app);

export { handler };
