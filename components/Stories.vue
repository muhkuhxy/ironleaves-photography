<template>
  <SectionParent class="">
    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>
    <SectionHeader class="my-8 text-center">
      <template #roofline>Stories</template>
      <span class="text-bluegray">Echte Emotionen</span>
    </SectionHeader>

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

    <IlSpacer :responsive="false" :ms="4" />

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

    <IlSpacer :responsive="false" :ms="4" />

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

    <IlSpacer :responsive="false" :ms="4" />

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

    <IlSpacer :responsive="false" :ms="4" />

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
const slides = [
  {
    dir: 'valerie_max',
    files: [
      'ironleaves-photography-stories-valerie-max-laecheln.jpg',
      'ironleaves-photography-stories-valerie-max-bank-waldrand.jpg',
      'ironleaves-photography-stories-valerie-max-blumenstrauss-wildblumen.jpg',
      'ironleaves-photography-stories-valerie-max-ehrlich-ungestellt.jpg',
      'ironleaves-photography-stories-valerie-max-eskimo.jpg',
      'ironleaves-photography-stories-valerie-max-wald-rueckenansicht.jpg',
      'ironleaves-photography-stories-valerie-max-hochformat.jpg',
      'ironleaves-photography-stories-valerie-max-hochzeitskleid.jpg',
      'ironleaves-photography-stories-valerie-max-wald.jpg',
      'ironleaves-photography-stories-valerie-max-tanzend.jpg',
      'ironleaves-photography-stories-valerie-max-standesamt.jpg',
      'ironleaves-photography-stories-valerie-max-frisur.jpg',
      'ironleaves-photography-stories-valerie-max-location-scheune.jpg',
      'ironleaves-photography-stories-valerie-max-blumenvasen-deko.jpg',
      'ironleaves-photography-stories-valerie-max-sitzplan.jpg',
    ],
  },
  {
    dir: 'sandra_jonas_standesamt',
    files: [
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-tanzend-ungestellt.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-shooting-standesamt.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-brautpaar-zeremonie.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-brautstrauss-beine.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-brautstrauss-detail.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-detail-haendchen-halten.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-inniger-kuss.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-kuss-verheiratet.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-natuerlich.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-park-haendchen-halten.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-ring-anstecken-detail.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-schlossgarten-eckersdorf.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-schlossgarten-pflanzenbogen.jpg',
      'ironleaves-photography-stories-sandra-jonas-standesamt-slider-reportage-spontaner-kuss.jpg',
    ]
  },
  {
    dir: 'samira_kerem',
    files: [
      'ironleaves-photography-stories-samira-kerem-slider-wald-ungestellt-momentaufnahme.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-autoschmuck-mercedes-sonnenuntergang.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-kuss-sonnenuntergang.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-autoschmuck-rosen.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-wald-verliebt.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-blick-in-die-augen.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-braeutigam-blumenschmuck-anstecker.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-braut-authentisch-natuerlich.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-brautkleid-prinzessin.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-kuss-wiese-sonnenuntergang.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-lens-flare.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-lensflare.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-naehe-vertraulichkeit.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-ringe-detailansicht.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-sonnenuntergang-kuss.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-sonnenuntergang-wiese.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-tanz-ungestellt.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-wald-natuerliches-licht.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-wald-panorama.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-wald-schnappschuss.jpg',
      'ironleaves-photography-stories-samira-kerem-slider-wald-shooting.jpg',
    ],
  },
  {
    dir: 'julia_martin',
    files: [
      'ironleaves-photography-stories-julia-martin-slider-blick-in-die-augen.jpg',
      'ironleaves-photography-stories-julia-martin-slider-braeutigam-blauer-anzug.jpg',
      'ironleaves-photography-stories-julia-martin-slider-braut-brautkleid-boho.jpg',
      'ironleaves-photography-stories-julia-martin-slider-braut-dom-magdeburg.jpg',
      'ironleaves-photography-stories-julia-martin-slider-brautpaar-laufend.jpg',
      'ironleaves-photography-stories-julia-martin-slider-bruecke-stadt.jpg',
      'ironleaves-photography-stories-julia-martin-slider-bruecke-urban.jpg',
      'ironleaves-photography-stories-julia-martin-slider-detail-ringe.jpg',
      'ironleaves-photography-stories-julia-martin-slider-dom-magdeburg.jpg',
      'ironleaves-photography-stories-julia-martin-slider-erster-tanz-abends.jpg',
      'ironleaves-photography-stories-julia-martin-slider-first-look.jpg',
      'ironleaves-photography-stories-julia-martin-slider-haendchen-halten.jpg',
      'ironleaves-photography-stories-julia-martin-slider-naehe-natuerlichkeit.jpg',
      'ironleaves-photography-stories-julia-martin-slider-natuerliche-braut-boho.jpg',
      'ironleaves-photography-stories-julia-martin-slider-sonnenuntergang-shooting.jpg',
      'ironleaves-photography-stories-julia-martin-slider-stadtpark.jpg',
      'ironleaves-photography-stories-julia-martin-slider-standesamt-magdeburg.jpg',
      'ironleaves-photography-stories-julia-martin-slider-tanzend-in-der-stadt.jpg',
      'ironleaves-photography-stories-julia-martin-slider-tradition-standesamt-herz-ausschneiden.jpg',
      'ironleaves-photography-stories-julia-martin-slider-ungestellt-ehrlich.jpg',
    ]
  },
  {
    dir: 'sandra_jonas_hochzeit',
    files: [
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-shooting-pfuetze-spiegelung-abends.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-seifenblasen-einmarsch.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-verliebt-vertraulichkeit.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-schnappschuss.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-auf-haenden-tragend-spass.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-blumen-fruehling.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-hofgarten-bayreuth.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-kuss-park-hofgarten-bayreuth.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-momentaufnahme-braut.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-shooting-probe-tanz-parkplatz.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-anschnitt-kuchen.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-brautstrass-kuchen.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-deko.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-erster-tanz.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-kirche-location-eckersdorf.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-kirche-segen.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-location-gluehbirnen-detail.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-location-liebesbier.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-regen-nass-hochzeitsauto.jpg',
      'ironleaves-photography-stories-sandra-jonas-hochzeit-slider-reportage-sitzplan-papeterie.jpg',
    ]
  },
].map(({dir, files}) => files.map(file => `stories/${dir}/${file}`))

export default Vue.extend({
  computed: {
    slides: () => slides
  },
})
</script>

