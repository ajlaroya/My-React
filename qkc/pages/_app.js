import React from 'react';
import { Toaster } from 'react-hot-toast'

import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    // state context passes data to all components
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
