import { CardContainer } from './style'

function CardProducts({ data }) {
  return (
    <CardContainer>
      <img
        src="https://http2.mlstatic.com/D_957717-MLA70842622219_082023-W.jpg"
        alt="imagem do celular"
      />
      <p>+</p>
      <div>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>
    </CardContainer>
  )
}

export default CardProducts
