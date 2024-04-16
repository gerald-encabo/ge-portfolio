import Layout from "./structure/Layout"
import { Analytics } from '@vercel/analytics/react';
import '@/styles/global-style.scss'
import { useState } from "react";

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className="App" data-theme={ darkTheme ? "dark" : "light" }>
          <Layout setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Analytics />
       </div>
    </>
  )
}

export default App
