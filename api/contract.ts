// contract.ts

import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const example = c.router({
  delete: {
    method: 'DELETE',
    path: '/posts/:id',
    query: z.object({ example: z.string() }),
    pathParams: z.object({ id: z.string() }),
    responses: {
      200: z.object({ id: z.string() }),
    },
    body: c.noBody()
  },
  deleteNoBody: {
    method: 'DELETE',
    path: `/posts-no-body/:id`,
    query: z.object({ example: z.string() }),
    pathParams: z.object({ id: z.string() }),
    responses: {
      200: z.object({ id: z.string() }),
    }
  },
});

export const contract = c.router({
  example
})