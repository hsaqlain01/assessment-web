'use client';

import React from 'react';
import TodoListing from '@/components/todo-listing';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TodoListing />
    </QueryClientProvider>
  );
}
