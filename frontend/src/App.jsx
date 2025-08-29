import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import useLocalStorage from './components/useLocalStorage'

const App = () => {

  const [darkMode, setDarkMode] = useLocalStorage("theme", false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path='/blog' element={<Blog />} />


        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App