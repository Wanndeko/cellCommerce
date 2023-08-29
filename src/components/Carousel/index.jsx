import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import CardProducts from '../CardProducts'
import { Container } from './style'

export default function Carousel({ data }) {
  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
        className="mySwiper"
      >
        {data &&
          data.map((iten) => (
            <SwiperSlide key={iten.id}>
              <CardProducts iten={iten} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}
