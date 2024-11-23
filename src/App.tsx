import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import UserPage from "./pages/UserPage"
import InputPage from "./pages/InputPage"
import Home from "./pages/Home"

function App(){
  return (
    <>
        <Header/>
      <Routes>
      <Route element={<Home/>} path='/'/>
        <Route element={<InputPage/>} path='/input'/>
        <Route element={<UserPage/>} path='/user'/>
      </Routes>
    </>
  )
}
export default App