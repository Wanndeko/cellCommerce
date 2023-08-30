import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import formatCurrency from '../../utils/formatCurrency'
import { CardContainer } from './style'
function CardProducts({ data }) {
  return (
    <CardContainer>
      <img
        src={data.thumbnail.replace(/\w\.jpg/gi, 'W.jpg ')}
        alt="imagem do celular"
      />
      <button>
        <FavoriteBorderIcon />
      </button>
      <div>
        <p>{data.title}</p>
        <p className="currency">{formatCurrency(data.price)}</p>
      </div>
    </CardContainer>
  )
}

export default CardProducts
