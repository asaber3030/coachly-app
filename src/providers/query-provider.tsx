import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { setupAppStateListener } from '@/services/query/appStateManager';
import '@/services/query/onlineManager';
import { asyncStoragePersister } from '@/services/query/presister';
import { queryClient } from '@/services/query/queryClient';
import { useEffect } from 'react';

export  function QueryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cleanup = setupAppStateListener();
    return cleanup;
  }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      {/* Slot / Stack from expo-router */}
    </PersistQueryClientProvider>
  );
}