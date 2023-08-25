import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import Logo from '../../assets/logoCell.png'
import { HeaderContainer, Image, HeaderLeft, HeaderRight } from './style'
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <MenuIcon />
        <p>Menu</p>
        <input placeholder="Pesquisar" />
      </HeaderLeft>

      <Image src={Logo} />

      <HeaderRight>
        <p>Informe seu cep</p>
        <KeyboardArrowDownIcon />
        <PersonIcon />
        <FavoriteIcon />
        <ShoppingBagIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
