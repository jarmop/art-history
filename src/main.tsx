import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient } from '@tanstack/react-query'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, maxAge: MAX_CACHE_AGE }}
    >
      <App />
    </PersistQueryClientProvider>
  </React.StrictMode>
)
