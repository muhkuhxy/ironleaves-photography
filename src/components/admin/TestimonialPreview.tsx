export function TestimonialPreview({ testimonial: {
  imgSrc, text, name
} }: { testimonial: { imgSrc?: string; text?: string; name?: string; }; }) {
  return <div
    className="grid grid-rows-[auto,auto] lg:grid-rows-1 grid-cols-1 lg:grid-cols-2"
  >
    {imgSrc ? <img
      className="object-cover w-full h-full lg:order-2"
      src={imgSrc} /> : 'KEIN BILD'}
    {/* <SectionContent */}
    <div
      className="bg-emerald text-white lg:order-1 flex flex-col justify-center py-12 lg:py-16 xl:py-20 xl:mx-auto xl:px-16 px-8 md:px-16"
    >
      <h3 className="caption font-normal">Kundenstimme</h3>
      <div className="w-full h-8" />
      <div className="relative flex flex-nowrap justify-self-center">
        <div className="relative self-end -ml-4 sm:ml-0 pr-4 sm:pr-6">
          <div
            className="relative caption text-[7rem] sm:text-[15rem] leading-[0] top-[-4.5rem] sm:-top-24 opacity-50"
          >
            &bdquo;
          </div>
        </div>
        <div className="flex flex-col">
          <div>{text}</div>
          <div className="text-right mt-4">&ndash; {name}</div>
        </div>
        <div
          className="relative caption text-[7rem] sm:text-[15rem] sm:-ml-2 leading-[0] top-8 sm:top-14 opacity-50"
        >
          &ldquo;
        </div>
      </div>
    </div>
  </div>;
}
