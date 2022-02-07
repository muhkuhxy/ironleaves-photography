<template>
  <SectionParent class="bg-emerald text-white relative overflow-y-hidden">
    <div class="relative lg:absolute lg:w-[50%] 2xl:w-[40%] lg:inset-y-0 lg:right-0">
      <IlFigure class="slide-up lg:h-full lg:w-full" data-delay="0.3">
        <picture>
          <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-werte-mobile.jpg">
          <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-werte.jpg">
          <img
            class="parallax-pic object-cover w-full max-h-[75vh] lg:max-h-full lg:h-full translate-y-[-10%] scale-[1.23]"
            alt="Ehrliche Schnappschüsse">
        </picture>
        <IlGradient direction="disabled" :half-height="true" class="bg-gradient-to-t lg:bg-gradient-to-br lg:top-0 lg:opacity-25 translate-y-2 lg:translate-y-0" />
      </IlFigure>
      <IlFigureCaption class="lg:text-right lg:left-0 lg:top-0 lg:pt-12 lg:px-0 lg:ml-[-40%] z-20">
        <div class="slide-up" data-delay="0.8">Invest in beautiful<br>memories</div>
      </IlFigureCaption>
    </div>
    <SectionLines class="slide-up xl:block z-10" data-delay="1" data-y="0">
      <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-2 fill-none h-[calc(100%+2rem)] mt-[-0.5rem] ml-[37%] 2xl:ml-[50%]" />
      <SvgHeroLine2 class="absolute text-sunset opacity-75 stroke-current stroke-2 fill-none h-full ml-[49%] 2xl:ml-[55%]" />
    </SectionLines>
    <SectionContent class="relative z-10">
      <div class="lg:py-32 lg:mr-[55%] 2xl:mr-[45%]">
        <SvgSingleGrass
          class="slide-up relative lg:absolute w-[39%] sm:w-[30%] lg:w-[18%] float-right mt-[-25%] md:mr-6 2xl:mr-[28%] mb-4 lg:-mb-2 lg:ml-[45%] 2xl:ml-[55%] text-white fill-current lg:bottom-0 lg:left-0 z-10"
          data-y="0"/>
        <div class="slide-up">
          <SectionHeader>
            <template #roofline>Wertvolle Erinnerungen</template>
            Eine Investition in den Rest Eures Lebens
          </SectionHeader>
          <LayoutSpacer />
          <div class="max-w-prose space-y-4">
            <p class="font-bold">Fotos sind wertvolle Erinnerungen. Ein Fotoshooting ist eine Investition in Erinnerungen für den Rest eures Lebens. All diese Momente verdienen es liebevoll festgehalten und von euch mit Freude und Hingabe angesehen zu werden. Ich möchte Euch etwas geben, was ihr den Rest eures Lebens ehrt und liebt wie ihr es miteinander tut.</p>
            <p>Bei den Preisen für den Hochzeitsfotografen könnte man im ersten Moment vielleicht zusammenzucken. Doch es steckt viel mehr dahinter als nur die reine Shootings-Dauer.</p>
            <p>Umfassende Vorbereitungen, Fahrten und Marketing sind Dinge, die nicht explizit im Preis mitberechnet sind. Und nach dem eigentlichen Shooting kommt die Nachbearbeitung. <span class="font-bold">Auf 1 Stunde Shooting kommen rund 2–3 Stunden Bildbearbeitung.</span> Und zu guter letzt hat professionelles Equipment einen stolzen Preis.</p>
            <p>Fotografen tragen gerade an Hochzeiten auch noch eine riesige Verantwortung. Wer für wichtige Momente schon mal eine Kamera in die Hand gedrückt bekommen hat, weiß, wovon ich rede. Man darf keinen Moment verpassen und muss in jeder Sekunde hochkonzentriert sein. Ihr seht – Fotografen werden bei Shootings nicht wirklich reich, wie es auf den ersten Blick scheinen könnte.</p>
          </div>
        </div>
      </div>
    </SectionContent>
  </SectionParent>
</template>
