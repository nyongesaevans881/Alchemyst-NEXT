import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from './storage'
import profilesReducer from './profilesSlice'
import profileDetailsReducer from './profileDetailsSlice'
import uiReducer from './uiSlice'

const isClient = typeof window !== 'undefined'

// Persist configuration for profiles
const profilesPersistConfig = {
  key: 'profiles',
  storage,
  whitelist: ['allProfiles', 'lastFetchTime', 'countyProfiles'],
  timeout: 300000
}

// Persist configuration for profile details (cache individual profiles)
const profileDetailsPersistConfig = {
  key: 'profileDetails',
  storage,
  whitelist: ['profileCache'],
  timeout: 300000
}

// Persist configuration for UI
const uiPersistConfig = {
  key: 'ui',
  storage,
  whitelist: ['filters', 'selectedCounty']
}

const store = configureStore({
  reducer: {
    profiles: isClient
      ? persistReducer(profilesPersistConfig, profilesReducer)
      : profilesReducer,
    profileDetails: isClient
      ? persistReducer(profileDetailsPersistConfig, profileDetailsReducer)
      : profileDetailsReducer,
    ui: isClient ? persistReducer(uiPersistConfig, uiReducer) : uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

// Export function to create persistor (called from client-side only)
const createPersistor = (appStore) => {
  if (!isClient) return null
  return persistStore(appStore)
}

export default store
export { createPersistor }
