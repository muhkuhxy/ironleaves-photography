export function SliderPreview({ slides }: { slides: string[] }) {
  return (
    <div className="h-[50vh] !pb-8">
      <div className="relative">
        <swiper-container
          className="overflow-x-hidden w-full"
          autoplay-delay="5000"
          loop="true"
          space-between="2"
          slides-per-view="auto"
          centered-slides="true"
          slide-to-clicked-slide="true"
          navigation="true"
        >
          {slides.map((url, index) => (
            <swiper-slide
              key={index}
              class="!w-auto flex items-center max-w-[90%]"
            >
              <img class="object-cover h-full" src={url} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
}
