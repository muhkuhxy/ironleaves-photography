<template>
  <SectionParent>
    <SectionContent class="slide-up text-bluegray">
      <div class="flex flex-col lg:flex-row items-center md:gap-8">
        <figure class="slide-up lg:order-2 relative w-full sm:w-2/3 mb-12 pl-8 lg:pl-16" data-delay="0.3">
          <picture class="after:absolute after:inset-0 after:w-1/2 after:bg-gradient-to-r after:from-white">
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-blog-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-blog.jpg">
            <img
              class="w-full object-cover"
              src="~/assets/images/desktop/ironleaves-photography-blog.jpg"
              alt="Tamara Loeffen Portrait">
          </picture>
          <SvgPetalFlower class="text-emerald fill-current w-[min(30%,7rem)] xl:w-32 absolute bottom-0 left-0 -mb-8 sm:-mb-12 lg:ml-6 rotate-[-20deg]"/>
        </figure>
        <div class="slide-up lg:order-1 lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>Kleiner Lebenslauf</template>
            Hoch&shy;zeits&shy;foto&shy;grafin &amp;&nbsp;Gestalterin
          </SectionHeader>
          <LayoutSpacer />
          <div class="max-w-prose flex flex-col gap-y-4">
            <p>Aufgewachsen bin ich in Bayreuth in Bayern. Seit 2021 wohne ich in der wunderschönen Eifel bei Monschau in Nordrhein-Westfalen.</p>
            <p>Gelernt habe ich den wunderbaren Job als Mediengestalterin. Wenn ich also gerade keine Fotos mache, gestalte ich als <a class="underline" href="ironleaves-design.com" target="_blank">Grafikdesign-Freelancerin</a> Websites, Logos und sehr gerne auch Eure Hochzeitspapeterie.</p>
            <p>Hochzeiten darf ich nun seit 5 Jahren begleiten. Angefangen hat das Ganze, als mich eine Kollegin spontan als Hochzeitsfotografin auserkoren hat (Glaubt mir, von selbst hätte ich mir diese Verantwortung nicht zugetraut ;D). Mundpropaganda hat das Alles zum Selbstläufer gemacht und inzwischen ist es einfach eine große aufregende und ehrenvolle Reise für mich geworden.</p>
          </div>
        </div>
      </div>
    </SectionContent>
  </SectionParent>
</template>
