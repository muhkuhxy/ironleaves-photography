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
              alt="Tamara und Timon">
          </picture>
          <SvgPetalFlower class="text-emerald fill-current w-[min(30%,7rem)] xl:w-32 absolute bottom-0 left-0 -mb-8 sm:-mb-12 lg:ml-6 rotate-[-20deg]"/>
        </figure>
        <div class="slide-up lg:order-1 lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>Klartext</template>
            Faire Preise für wertvolle Momente
          </SectionHeader>
          <LayoutSpacer />
          <div class="max-w-prose space-y-4">
            <p>Mir ist Transparenz sehr wichtig. Ich persönlich mag auch keine Dienstleister, die ich erst anschreiben muss, bevor sie mir einen Preis nennen. Viele Fotografen behaaren auch erst auf ein Gespräch, bevor sie einen Preis nennen. Und ganz ehrlich? Das würde ich auch gerne, weil die Sympathie am Ende der entscheidende Faktor sein sollte!</p>
            <p>Ein gutes Miteinander basiert in erster Linie aber auf Kommunikation und Ehrlichkeit. Du bekommst mich für 260 Euro pro Stunde (zzgl. Reise- bzw.  Übernachtungskosten). Ihr könnt auch am selben tag noch entscheiden, ob ich etwas länger bleiben oder früher gehen soll. Ganz flexibel und ohne Gedöns.</p>
          </div>
        </div>
      </div>
    </SectionContent>
  </SectionParent>
</template>
