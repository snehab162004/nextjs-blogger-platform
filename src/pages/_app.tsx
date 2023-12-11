import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'

import  {Hydrate} from 'react-query/hydration';


import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryclient] = useState(() => new QueryClient());
  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryclient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>  
    </ClerkProvider>
  )
}
export default MyApp
