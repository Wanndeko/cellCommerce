import { Routes, Route } from 'react-router-dom'

import Home from '../Containers/Home'
import DefaultLayout from '../layout/DefaultLayout'

function MultRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default MultRoutes
