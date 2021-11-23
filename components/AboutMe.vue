<template>
  <SectionParent class="text-bluegray relative">
    <IconBase class="text-sunset w-full h-16 -translate-y-4">
      <IconArrow />
    </IconBase>
    <SectionContent class="flex flex-col lg:flex-row items-center">
      <figure class="relative w-2/3 sm:w-1/2 mb-12 pr-8 lg:pr-16">
        <img
          srcset="~/assets/images/mobile/ironleaves-photography-ueber-mich-tamara-loeffen-SW-mobile.jpg 768w,
            ~/assets/images/desktop/ironleaves-photography-ueber-mich-tamara-loeffen-SW.jpg 1920w"
          sizes="(max-width: 768px) 768px,
            1920px"
          alt="Tamara Loeffen Portrait">
        <SvgFlowerGrass class="text-sunset fill-current w-[45%] lg:w-[40%] absolute bottom-0 right-0 mr-[max(-2.5rem,-8%)] sm:mr-[-11%] lg:mr-0 -mb-8 md:-mb-12"/>
      </figure>
      <div class="lg:flex-initial max-w-prose lg:max-w-[none] lg:w-1/2 md:mt-8 text-center lg:text-left">
        <SectionHeader>
          <template #roofline>Über mich</template>
          Hoch&shy;zeits&shy;foto&shy;grafin&nbsp;&amp; Gestalterin
        </SectionHeader>
        <IlSpacer />
        <div class="lg:pl-8 xl:lp-16 flex flex-col gap-4">
          <p>
            Ich heiße Tamara und freue mich jetzt schon sehr darauf, euch kennenzulernen!
          </p>
          <p>
            Aufgewachsen bin ich in Bayreuth, aber inzwischen wohne ich in der wunderschönen Eifel bei Monschau. Ich bin leidenschaftlich gerne mit meiner Kamera unterwegs und liebe die Natur, Sonnenuntergänge, gutes Essen, viel Lachen und warmen Kakao an kalten Herbsttagen.
          </p>
          <IlTextExpander>
            <p>
              Gelernt habe ich den wunderbaren Job der Mediengestalterin. Wenn ich also gerade keine Fotos mache, gestalte ich als Freelancerin Websites, Logos und sehr gerne auch Eure Hochzeitspapeterie.
            </p>
            <p>
              Auf Hochzeiten ziehen mich die Emotionen, die Aufregung und die ganz intimen und einzigartigen Momente besonders in den Bann. Ich denke, dass es im Leben unglaublich wichtig ist, das zu tun, was man liebt und ich kann mir nichts Schöneres vorstellen, als Liebe, Glück und Vertrautheit in meinen Fotos für Euch festzuhalten und euch damit ein Lächeln ins Gesicht zu zaubern. Ich empfinde es immer als eine sehr große Ehre, wenn ich mit Menschen zusammen sein darf, die sich mit ganz viel Liebe und Hingabe einander zugewendet haben und den Anfang ihres gemeinsamen, restlichen Lebens miteinander feiern möchten. Ich würde mich sehr freuen, wenn ich das für Euch als Hochzeitsfotografin machen darf.
            </p>
          </IlTextExpander>
          <IlSpacer />
          <ButtonEffect class="text-sunset mx-auto lg:mx-0" @click="scrollTo('contact')">
            Schreibt mich gerne an!
          </ButtonEffect>
        </div>
      </div>
    </SectionContent>
    <IlSpacer />
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
