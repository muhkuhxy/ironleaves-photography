<template>
  <SectionParent class="bg-bluegray text-white relative">
    <IconBase class="text-sunset w-full h-16 absolute top-0 -mt-12 z-20">
      <IconArrow />
    </IconBase>
    <div class="relative lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0 z-10">
      <IlFigure class="lg:h-full lg:w-full">
        <img
          class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full scale-[1.23]"
          src="~/assets/images/Gruppe_310.jpg"
          alt="Happy guests">
        <IlGradient direction="disabled" :half-height="true" class="bg-gradient-to-t lg:bg-gradient-to-br lg:top-0 lg:opacity-25 translate-y-2 lg:translate-y-0" />
      </IlFigure>
      <IlFigureCaption class="lg:text-right lg:left-0 lg:top-0 lg:pt-12 lg:px-0 lg:ml-[-40%] z-20">
        Embrace the flaws<br class=""> and the gems
      </IlFigureCaption>
    </div>
    <SectionLines class="xl:block">
      <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+2rem)] mt-[-0.5rem] ml-[37%] 2xl:ml-[50%]" />
      <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full ml-[49%] 2xl:ml-[55%]" />
    </SectionLines>
    <SectionContent class="bg-bluegray relative">
      <div class="lg:py-32 lg:mr-[55%] 2xl:mr-[45%]">
        <SvgSingleGrass class="relative lg:absolute w-[39%] sm:w-[30%] lg:w-[18%] float-right mt-[-25%] md:mr-6 2xl:mr-[28%] mb-4 lg:-mb-2 lg:ml-[45%] 2xl:ml-[55%] text-white fill-current lg:bottom-0 lg:left-0 z-10"/>
        <SectionHeader>
          <template #roofline>Meine Werte</template>
          Ganz ehrlich
        </SectionHeader>
        <IlSpacer class="md:mt-4 xl:mt-8" />
        <p class="max-w-prose mb-4">
          Ich glaube daran, dass jeder Mensch schön ist. Denn alle scheinbar
          unperfekten Sachen machen etwas erst zu etwas ganz Besonderem. Ich
          fotografiere keinen Glanz und Glamour, sondern die pure Wahrheit.
          Perfekte Unperfektheit. Denn auch das Leben ist einfach nicht perfekt und
          jede Geschichte ist einzigartig und jeder Moment ist speziell. Und genau
          so sollten eure Fotos auch sein.
        </p>
        <IlTextExpander class="items-start">
          <p>
            Hautretuschen, bis man keine Poren mehr sehen kann, gehören einfach
            nicht in mein Programm. Ebensowenig gestellte Posen mit
            herausgestreckten Brüsten und aufgesetztem Lächeln. Das seid nicht ihr.
            Ihr seid authentisch. Liebt euch so wie ihr seid.
          </p>
          <p>
            Und was mir ganz wichtig ist: Habt einfach Spaß vor der Kamera! :)
          </p>
        </IlTextExpander>
      </div>
    </SectionContent>
  </SectionParent>
</template>
