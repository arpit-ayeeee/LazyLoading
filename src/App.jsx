import React, { Suspense } from 'react'
import './App.css'
//import LazyLoading from './LazyLoading'

const Lazy = React.lazy(() => import('./LazyLoading'));

const Loading = () => {
  return <div>Loading...</div>
}
function App() {

  return (
    <>
      <div className="app">
        <h1>Lazy Loading</h1>
        <Suspense fallback={<Loading />}>
          <Lazy />
        </Suspense>
      </div>
    </>
  )
}

export default App
