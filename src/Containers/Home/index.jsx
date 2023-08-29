import Products from '../../components/Products'
import SideBar from '../../components/SideBar'
import { Wrapper } from './style'

function Home() {
  return (
    <Wrapper>
      <SideBar />
      <Products />

      <footer>ala o footer</footer>
    </Wrapper>
  )
}

export default Home
