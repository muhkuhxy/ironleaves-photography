<template>
  <SectionParent class="bg-bluegray text-white">
    <IlFigure>
      <picture>
        <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-valerie-max-heroshot-mobile.jpg">
        <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-valerie-max-heroshot.jpg">
        <img
          class="parallax-pic object-cover w-full max-h-[75vh] scale-[1.2] translate-y-[-10%] md:translate-y-0"
          data-start="top center"
          src="~/assets/images/desktop/ironleaves-photography-valerie-max-heroshot.jpg"
          alt="Tamara Loeffen, Hochzeitsfotografin">
      </picture>
    </IlFigure>
    <div class="relative">
      <SectionLines class="sm:block">
        <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-[110%] md:h-full right-0 mr-[23%] md:mr-[34%] rotate-[-20deg] md:rotate-0" />
        <SvgHeroLine1 class="absolute hidden md:block opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+2rem)] right-0 top-[-0.5rem] mr-[11%]" />
        <SvgHeroLine3 class="absolute hidden lg:block opacity-50 stroke-current stroke-2 fill-none h-full right-0 mr-[1%]" />
      </SectionLines>
      <SectionContent class="relative">
        <IlAnimatedHeroFlower
          animated-classes="relative float-right w-[50%] md:w-[min(53%,25rem)] lg:w-[40%] mt-[-61%] md:mt-[max(-57%,-25rem)] lg:mt-[-41%] mr-[max(-10%,-2rem)] md:mr-[max(-9%,-4rem)] lg:mr-0 xl:mr-[-2%]"
          static-classes="relative float-right fill-current w-[37%] lg:w-[30%] xl:w-[27%] mt-[-41%] md:mt-[-33%] lg:mt-[-27%] xl:mt-[-24%] -mr-4 lg:mr-[7%]" />
        <SectionHeader>
          <template #roofline>Über mich</template>
          Das geht hinter der Kamera!
        </SectionHeader>
        <LayoutSpacer />
        <div class="max-w-xs xl:max-w-sm">
          <p>
            Ich mag Eure Neugier! Immerhin wollt ihr ja wissen, wer da als Paparazzi rumspringt und Euch mit der Kamera auf den Leim geht, oder? ;)
          </p>
          <p>
            Ich liebe Bilder, mit denen man einen ganzen Tag in seinen Erinnerungen komplett wieder erleben kann. Und ich bin gerne mit den Menschen zusammen, die zueinander gefunden haben und sich mit ganz viel Liebe und Vertrauen einander zugewendet haben und das feiern möchten. Auf Hochzeiten fotografiere ich besonders gerne, weil mich die Emotionen, die Aufregung und die ganz intimen und einzigartigen Momente immer wieder in den Bann ziehen. Ich freue mich immer wieder über das Vertrauen, das mir wunderbare Hochzeitspaare entgegen bringen, damit ich ihre Hochzeit gestalterisch und fotografisch begleiten darf.
          </p>
        </div>
      </SectionContent>
    </div>
  </SectionParent>
</template>
