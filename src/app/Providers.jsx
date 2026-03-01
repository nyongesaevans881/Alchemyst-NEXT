'use client'

import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'
import store, { createPersistor } from '@/redux/index'

export function Providers({ children }) {
  const [persistor, setPersistor] = useState(null)

  useEffect(() => {
    const newPersistor = createPersistor(store)
    if (newPersistor) setPersistor(newPersistor)
  }, [])

  return (
    <Provider store={store}>
      {persistor ? (
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <Toaster position="top-right" />
          {children}
        </PersistGate>
      ) : (
        <>
          <Toaster position="top-right" />
          {children}
        </>
      )}
    </Provider>
  )
}
