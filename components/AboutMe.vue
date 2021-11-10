<template>
  <SectionParent class="text-bluegray relative">
    <IconBase class="text-sunset w-full h-16 transform -translate-y-4">
      <IconArrow />
    </IconBase>
    <SectionContent class="flex flex-col lg:flex-row items-center">
      <figure class="relative w-2/3 sm:w-1/2 mb-12 pr-8 lg:pr-16">
        <img
          src="~/assets/images/IMG_20190206_161314@2x.jpg"
          alt="Tamara Loeffen">
        <SvgFlowerGrass class="text-sunset fill-current w-45% lg:w-40% absolute bottom-0 right-0 -mb-8 md:-mb-12"/>
      </figure>
      <div class="lg:flex-initial lg:w-1/2 md:mt-8 text-center lg:text-left">
        <SectionHeader class="max-w-prose">
          <template #roofline>Über mich</template>
          Hoch&shy;zeits&shy;foto&shy;grafin&nbsp;&amp; Gestalterin
        </SectionHeader>
        <IlSpacer class="md:mt-4 xl:mt-8" />
        <div class="lg:pl-8 xl:lp-16 max-w-prose flex flex-col gap-4">
          <p>
            Ich freue mich, euch kennenzulernen. Mein Name ist Tamara und ich
            komme aus Bayreuth. Seit ein paar Monaten wohne ich in der
            wunderschönen Eifel in Nordrhein-Westfalen bei Monschau.
          </p>
          <p>
            Ich habe den wunderbaren Beruf der Mediengestalterin gelernt und liebe
            es, mich kreativ auszutoben. Neben dem Marketing habe ich mich daher
            auch auf <IlLink target="papeterie">Hochzeits-Papeterie</IlLink> spezialisiert. Ich freue mich immer wieder
            über das Vertrauen, das mir wunderbare Hochzeitspaare entgegen bringen,
            damit ich ihre Hochzeit gestalterisch und fotografisch begleiten darf.
          </p>
          <p>
            Auf Hochzeiten fotografiere ich besonders gerne, weil mich die
            Emotionen, die Aufregung und die ganz intimen und einzigartigen
            Momente immer wieder in den Bann ziehen. Ich liebe Bilder, mit denen
            man einen ganzen Tag in seinen Erinnerungen komplett wieder erleben
            kann. Und ich bin gerne mit den Menschen zusammen, die zueinander
            gefunden haben und sich mit ganz viel Liebe und Vertrauen einander
            zugewendet haben und das feiern möchten.
          </p>
          <IlSpacer class="md:mt-4 xl:mt-8" />
          <ButtonEffect class="text-sunset mx-auto lg:mx-0" @click="scrollTo('contact')">
            Schreibt mich gerne an!
          </ButtonEffect>
        </div>
      </div>
    </SectionContent>
    <IlSpacer class="md:mt-4 xl:mt-8" />
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    scrollTo(target: string) {
      this.$nuxt.$emit('scrollTo', target)
    }
  }
})
</script>
