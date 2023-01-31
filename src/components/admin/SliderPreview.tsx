import { Swiper, SwiperSlide } from 'swiper/react';

export function SliderPreview({ slides }: { slides: string[]; }) {
  return <div>
    <Swiper
      className="!pb-8"
      spaceBetween={2}
      slidesPerView="auto"
      loopedSlides={slides.length}
      centeredSlides={true}
      slideToClickedSlide={true}
    >
      {slides.map(slide => <SwiperSlide className="!w-auto flex items-center max-w-[90%]"
        key={`slide-${slide}`}>
        <img className="object-cover h-full" src={slide}></img>
      </SwiperSlide>
      )}
    </Swiper>
  </div>;
}
