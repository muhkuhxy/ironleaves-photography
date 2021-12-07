<template>
  <SectionParent class="">
    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>
    <LayoutSpacer />

    <SectionContent class="slide-up text-bluegray">
      <div class="flex flex-col lg:flex-row items-center md:gap-8">
        <figure class="slide-up lg:order-2 relative w-2/3 sm:w-1/2 mb-12 pr-8 lg:pr-16" data-delay="0.3">
          <picture>
            <source media="(max-width: 767px)" srcset="~/assets/images/mobile/ironleaves-photography-ueber-mich-tamara-loeffen-SW-mobile.jpg">
            <source media="(min-width: 768px)" srcset="~/assets/images/desktop/ironleaves-photography-ueber-mich-tamara-loeffen-SW.jpg">
            <img
              src="~/assets/images/desktop/ironleaves-photography-ueber-mich-tamara-loeffen-SW.jpg"
              alt="Tamara Loeffen Portrait">
          </picture>
          <SvgFlowerGrass class="text-sunset fill-current w-[45%] lg:w-[40%] absolute bottom-0 right-0 mr-[max(-2.5rem,-8%)] sm:mr-[-11%] lg:mr-0 -mb-8 md:-mb-12"/>
        </figure>
        <div class="slide-up lg:order-1 lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 text-center lg:text-left">
          <SectionHeader>
            <template #roofline>Stories</template>
            Echte Emotionen
          </SectionHeader>
          <LayoutSpacer />
          <p>
            Hier gebe ich Euch einen Einblick in die wunderschönen Hochzeiten, die ich schon begleiten durfte. Außerdem spreche ich ein bisschen aus dem Nähkästchen und gebe Euch Tipps &amp; Tricks, wie ihr Eure Hochzeit am besten gestalten könnt, wie ich drauf bin und was hinter der Kamera so abläuft.
          </p>
          <LayoutSpacer />
          <NuxtLink to="/stories">
            <ButtonEffect class="text-sunset w-[fit-content] mx-auto lg:mx-0">
              Hier gibt's alle Beiträge
            </ButtonEffect>
          </NuxtLink>
        </div>
      </div>

      <LayoutSpacer :ms="5" />
      <SectionHeader class="text-center">
        Aktuellste Hochzeiten
      </SectionHeader>
    </SectionContent>

    <IlStory :slides="slides[0]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial">
          <img
            class="w-7/8 border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/stories/valerie_max/ironleaves-photography-stories-valerie-max.jpg"
            alt="Valerie und Max Hochzeits-Shooting">
          <SvgSingleBranch class="w-1/4 text-emerald fill-current absolute right-0 bottom-0 -translate-x-1 translate-y-4" />
        </div>
      </template>

      <template #title>Valerie&nbsp;&amp; Max</template>

      <template #content>
        <p>
          Das Pärchen, das mir wohl das größte Vertrauen entgegengebracht hat. So durfte ich zum ersten Mal als Fotografin und Gestalterin ihre aufregende Reise bis zur Hochzeit begleiten. Neben der kompletten Papeterie durfte ich auch hautnah die Planungen unterstützen – und natürlich viel fotografieren.
        </p>
      </template>

      <template #moreContent>
        <p>
          Durch die enge Zusammenarbeit ab der Verlobung, konnten wir viele Elemente miteinander verbinden. Der Wald- und Wiesenstil hat perfekt zu den beiden gepasst und wurde von Anfang an auch in die Papeterie integriert. Und auch bei den Fotos kann man sehen, wie naturverbunden die beiden sind. Valerie ist eine wahre Frohnatur und ich finde, dass ihre Bilder wirklich ansteckend wirken.
        </p>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IlStory :slides="slides[1]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial lg:order-2">
          <img
            class="w-5/6 ml-auto border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/stories/sandra_jonas_standesamt/ironleaves-photography-stories-sandra-jonas-standesamt.jpg"
            alt="Sandra und Jonas Standesamt Shooting">
          <SvgSingleFlower class="w-1/4 text-bluegray fill-current absolute left-0 bottom-0 translate-y-6 translate-x-4" />
        </div>
      </template>

      <template #title>Sandra&nbsp;&amp; Jonas (Standesamt)</template>

      <template #content>
        <p>
          Für Sandra und Jonas durfte ich auch das volle Programm machen – Beratung bei der Planung und das Design der Papeterie.
        </p>
      </template>

      <template #moreContent>
        <p>
          Die beiden haben sich für eine entspannte Hochzeit entschieden. Sie haben sich ganz intim und im Beisein der engsten Freunde und Familien im Standesamt das Ja-Wort gegeben und den Tag dann in Ruhe ausklingen lassen. Die große Feier im richtigen Dress sollte dann ein paar Wochen später stattfinden. So konnten sie sich vor dem Standesamt vor der Kamera von ihrer Nervosität ablenken.
        </p>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IlStory :slides="slides[2]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial">
          <img
            class="w-5/6 border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/stories/samira_kerem/ironleaves-photography-stories-samira-kerem.jpg"
            alt="Samira und Kerem Hochzeits-Shooting">
          <SvgFlowerSunset class="w-1/4 text-sunset fill-current absolute right-0 bottom-0 -translate-x-1 translate-y-3" />
        </div>
      </template>

      <template #title>Samira&nbsp;&amp; Kerem</template>

      <template #content>
        <p>
          Samira und Kerem wollten eigentlich im August heiraten. Im sehr großen Stil.
        </p>
      </template>

      <template #moreContent>
        <p>
          Individuell gestaltete Einladungskarten mit Gold-Veredelung inklusive. Doch dann kam Corona und der erste, größere Lockdown in Bayern und die beiden änderten ihre Pläne und heirateten am nächsten freien Termin in ihrem Standesamt. Und da ja nichts groß mit Feierlichkeiten war, fuhr das Brautpaar, nach den Glückwunschen über Zoom zu mir. Wir machten einen schönen langen Spaziergang und genossen den Sonnenuntergang gemeinsam. Samira und Kerem wählten für ihre Bilder passenderweise einen schönen warmen Bildstil.
        </p>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IlStory :slides="slides[3]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial lg:order-2">
          <img
            class="w-5/6 ml-auto border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/stories/julia_martin/ironleaves-photography-stories-julia-martin.jpg"
            alt="Julia und Martin Hochzeits-Shooting">
          <SvgSingleFlower class="w-1/4 text-bluegray fill-current absolute left-0 bottom-0 translate-y-6 translate-x-4" />
        </div>
      </template>

      <template #title>Julia&nbsp;&amp; Martin</template>

      <template #content>
        <p>
          Diese Hochzeit war für mich in vielerlei Hinsicht sehr besonders. Julia und Martin kenne ich gefühlt schon seit Ewigkeiten. Für ihre Hochzeit wäre ich 100 Stunden gefahren um dabei sein zu können.
        </p>
      </template>

      <template #moreContent>
        <p>
          Ich hatte die riesige Ehre, dass ich in diesem kleinen Kreis mit dabei sein durfte – Erst als Fotografin beim Standesamt und für die Pärchenfotos und anschließend auch als Gast bei der Feier.
        </p>
        <p>
          Das Shooting fand am Magedburger Dom und dann im Stadtpark statt und war somit die erste "Urban-Hochzeit" für mich. Sehen die beiden nicht absolut bezaubernd aus?
        </p>
      </template>
    </IlStory>

    <LayoutSpacer :responsive="false" :ms="4" />

    <IlStory :slides="slides[4]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial">
          <img
            class="w-5/6 border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/stories/sandra_jonas_hochzeit/ironleaves-photography-stories-sandra-jonas-hochzeit.jpg"
            alt="Sandra und Jonas Hochzeits-Shooting">
          <SvgBranchSunset class="w-3/10 text-sunset fill-current absolute right-0 bottom-0 scale-x-[-1] -translate-x-2 translate-y-4" />
        </div>
      </template>

      <template #title>Sandra&nbsp;&amp; Jonas (Feier)</template>

      <template #content>
        <p>
          Am Tag der Hochzeit hat es die ganze Zeit geregnet. Nach der Kirche sogar so schlimm, dass das Shooting nicht stattfinden konnte. Und ganz ehrlich? Das hat den Tag sogar noch besser gemacht, als ursprünglich geplant!
        </p>
      </template>

      <template #moreContent>
        <p>
          Sandra und Jonas konnten sich ihren Traum erfüllen und im Autokonvoi zur Location fahren – Blechdosen inklusive. In der freien Zeit nach dem Kuchen am Nachmittag ließ sich sogar die Sonne blicken und das Shooting konnte spontan nach den Gruppenfotos nachgeholt werden. Nachdem viele Highlights des Tages schon vorbei waren, waren die beiden beim Shooting viel entspannter.
        </p>
      </template>
    </IlStory>

    <IconBase class="text-sunset w-full h-16 mt-8 mb-12">
      <IconArrow />
    </IconBase>

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import { stories } from './slides'

const slides = stories.map(({dir, files}) =>
  files.map(file => `stories/${dir}/${file}`))

export default Vue.extend({
  computed: {
    slides: () => slides
  },
  methods: {
    goToStories() {
      this.$router.push({ path: '/stories' })
    }
  }
})
</script>

