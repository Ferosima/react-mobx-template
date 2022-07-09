import React, { useEffect, useState } from 'react';
import RootView from './view/RootView';
import { create as createHydrator } from 'mobx-persist';
import { STORES } from './mobx/index';
import { Provider } from 'mobx-react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSources();
  }, []);

  const loadSources = async () => {
    setLoading(true);
    await hydrateStores();
    setLoading(false);
  };

  const hydrate = createHydrator({
    storage: localStorage,
    jsonify: true,
  });

  const hydrateStores = async () => {
    // hydrate all stores
    await Promise.all(
      Object.entries(STORES).map(async ([key, store]) => {
        if (!store) return;
        await hydrate(key, store);
        if (store.afterHydration) {
          await store.afterHydration();
        }
      })
    );
  };

  if (loading) return <h1>LOADING</h1>;

  return (
    <Provider {...STORES}>
      <RootView />
    </Provider>
  );
}

export default App;
