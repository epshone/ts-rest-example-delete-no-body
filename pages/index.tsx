
import { initClient } from '@ts-rest/core';
import { contract } from '../api/contract';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { initQueryClient } from '@ts-rest/react-query';

const queryClient = initQueryClient(contract, {
  baseUrl: '/api',
});

export const client = initClient(contract, {
  baseUrl: 'http://localhost:3000/api'
});


export const tsr = initTsrReactQuery(contract, {
  baseUrl: 'http://localhost:3000/api'
});

export default function Home() {
  const handleDelete = async () => {
    await client.example.delete({
      params: { id: 'test' },
      query: { example: 'example' }
    });

    await tsr.example.delete.mutate({
      params: { id: 'test' },
      query: { example: 'example' }
    })
    await queryClient.example.delete.mutation({
      params: { id: 'test' },
      query: { example: 'example' }
    })
  }
  const handleDeleteNoBody = async () => {
    await client.example.deleteNoBody({
      params: { id: 'test' },
      query: { example: 'example' }
    });
    await tsr.example.deleteNoBody.mutate({
      params: { id: 'test' },
      query: { example: 'example' }
    })
    await queryClient.example.deleteNoBody.mutation({
      params: { id: 'test' },
      query: { example: 'example' }
    })
  }

  return (
    <>
      <button className="bg-white p-2 text-gray-900"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button className="ml-2 bg-white p-2 text-gray-900"
        onClick={handleDeleteNoBody}
      >
        Delete No Body
      </button>      
    </> 
  );
}
