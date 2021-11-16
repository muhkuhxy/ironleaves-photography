<template>
  <SectionParent class="bg-emerald text-white lg:relative overflow-y-hidden">
    <IlFigure class="lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:left-0">
      <img
       class="object-cover w-full h-full"
        src="~/assets/images/Sandra-und-Jonas-Standesamt-Shooting-6105.jpg"
        alt="Happy couple">
      <IlGradient :half-height="true" />
    </IlFigure>
    <SvgHeroLine2 class="hidden 2xl:block absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-[110%] mt-[-2.5%] ml-[37%]" />
    <SectionContent>
      <SvgThreeStraws class="fill-current float-right lg:float-none w-[28%] md:w-1/4 lg:w-auto lg:h-[60%] relative lg:absolute right-0 lg:bottom-0 lg:right-0 -mt-48 md:-mt-56 lg:mt-0 -mr-6 lg:mr-[45%] 2xl:mr-[55%] mb-8 lg:-mb-4 ml-4 lg:pr-8" />
      <div class="lg:py-24 lg:ml-[55%] 2xl:ml-[45%]">
        <SectionHeader>
          <template #roofline>Bildlooks</template>
          Die Welt ist bunt &ndash; und ihr seid es auch!
        </SectionHeader>
        <IlSpacer class="md:mt-4 xl:mt-8" />
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
