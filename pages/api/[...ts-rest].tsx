import { contract } from "@/api/contract";
import { createNextRoute, createNextRouter } from "@ts-rest/next";

const route = createNextRoute(contract, { 
  example: {
    delete: async (args) => {
      console.log('deletePost.query', args.query);
      console.log('deletePost.path', args.params);
      return {
        status: 201,
        body: { id: '1' },
      };
    },
    deleteNoBody: async (args) => {
      console.log('deletePostNoBody.query', args.query);
      console.log('deletePostNoBody.path', args.params);
      return {
        status: 200,
        body: { id: '1' },
      };
    }
  }
});

const router = createNextRoute(contract, route);

// Actually initiate the collective endpoints
export default createNextRouter(contract, router);