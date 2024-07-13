import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient } from '@tanstack/react-query'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const MAX_CACHE_AGE = Infinity

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: MAX_CACHE_AGE,
    },
  },
})

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
  {
    path: '/:artistId',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, maxAge: MAX_CACHE_AGE }}
    >
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  </React.StrictMode>
)
