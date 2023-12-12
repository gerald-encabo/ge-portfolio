import Layout from "./structure/Layout"
import { Analytics } from '@vercel/analytics/react';
import '@/styles/global-style.scss'

function App() {

  return (
    <>
      <div className="App">
          <Layout />
          <Analytics />
       </div>
    </>
  )
}

export default App
