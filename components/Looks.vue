<template>
  <SectionParent class="bg-emerald text-white lg:relative overflow-y-hidden">
    <IlFigure class="lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:left-0">
      <picture>
        <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-bildlooks-mobile.jpg">
        <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-bildlooks.jpg">
        <img
          class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full scale-[1.23]"
          alt="Paarshooting im Freien">
      </picture>
      <IlGradient :half-height="true" />
    </IlFigure>
    <SectionLines class="xl:block">
      <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full 2xl:h-[124%] 2xl:top-[-16%] ml-[42%] 2xl:ml-[31%] 2xl:rotate-[24deg]" />
    </SectionLines>
    <SectionContent>
      <SvgThreeStraws class="fill-current float-right lg:float-none w-[28%] md:w-1/4 lg:w-auto lg:h-[60%] relative lg:absolute right-0 lg:bottom-0 lg:right-0 -mt-48 md:-mt-56 lg:mt-0 -mr-6 lg:mr-[45%] 2xl:mr-[55%] mb-8 lg:-mb-4 ml-4 lg:pr-8" />
      <div class="lg:py-24 lg:ml-[55%] 2xl:ml-[45%]">
        <SectionHeader>
          <template #roofline>Bildlooks</template>
          Die Welt ist bunt &ndash; und ihr seid es auch!
        </SectionHeader>
        <IlSpacer />
        <p class="max-w-prose mb-4">
          Immerhin ist es euer besonderer Tag! Die Fotos
          sollten also euch widerspiegeln. Ihr bestimmt
          also den Bildlook eurer Bilder in
          Zusammenarbeit mit mir. Dabei könnt ihr unter
          unterschiedlichen Atmosphären den Look
          auswählen, der am besten zu euch passt!
        </p>
        <IlTextExpander class="items-start">
          <p>
            Natürlich stehe ich euch dabei tatkräftig
            beratend zur Seite und erkläre euch, worauf es
            ankommt.
            Seid ihr schon gespannt auf Eure Hochzeit? Ich halte eure unvergesslichen Momente, die zahlreichen Emotionen, eure ganz besondere
            intime Bindung zueinander und diesen wichtigen Tag in eurem Leben für euch mit viel Leidenschaft fest!
          </p>
        </IlTextExpander>
      </div>
    </SectionContent>
  </SectionParent>
</template>
