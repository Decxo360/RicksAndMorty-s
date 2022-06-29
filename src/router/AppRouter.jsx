import { BrowserRouter, Routes, Route} from "react-router-dom"
import {App} from "../App"
import { DetailsScreen } from "../components/DetailsScreen"
import { SearchScreen } from "../components/Search/SearchScreen"
import { Footer } from "../components/ui/Footer"
import { NavBar } from "../components/ui/NavBar"

export const AppRouter = () => {
  return (
        <BrowserRouter>
          <NavBar/>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/search'} element={<SearchScreen/>}/>
                <Route path={'/details/:name/:id'} element={<DetailsScreen/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
  )
}
