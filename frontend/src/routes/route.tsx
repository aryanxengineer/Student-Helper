import { Route, Routes } from 'react-router-dom';
import PagesLayout from '../layouts/PagesLayout';
import Home from '../pages/home/Page';
import Info from '../pages/info/Page';

const route = () => {
  return (
    <Routes>
        <Route path='/' element={<PagesLayout />}>
            <Route index element={<Home />} />
            <Route path='/info' element={<Info />} />
        </Route>
    </Routes>
  )
}

export default route