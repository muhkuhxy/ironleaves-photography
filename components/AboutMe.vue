<template>
  <SectionParent class="text-bluegray relative">
    <IlSpacer />
    <div class="flex flex-center absolute w-full justify-center transform -translate-y-12">
      <IconBase class="text-sunset w-16">
        <IconArrow />
      </IconBase>
    </div>
    <SectionContent>
      <figure class="">
        <img class="mx-auto transform -translate-x-4 w-1/2"
          src="~/assets/images/IMG_20190206_161314@2x.jpg"
          alt="Tamara Loeffen">
      </figure>
      <SvgFlowerGrass class="text-sunset fill-current w-1/3 float-right relative transform -translate-y-32 -translate-x-6"/>
      <IlSpacer />
      <SectionHeader>
        <template #roofline>Über mich</template>
        Hoch&shy;zeits&shy;foto&shy;grafin&nbsp;&amp; Gestalterin
      </SectionHeader>
      <IlSpacer />
      <p class="max-w-prose">
        Ich freue mich, euch kennenzulernen. Mein Name ist Tamara und ich
        komme aus Bayreuth. Seit ein paar Monaten wohne ich in der
        wunderschönen Eifel in Nordrhein-Westfalen bei Monschau.
      </p>
      <p class="max-prose mt-4">
        Ich habe den wunderbaren Beruf der Mediengestalterin gelernt und liebe
        es, mich kreativ auszutoben. Neben dem Marketing habe ich mich daher
        auch auf Hochzeits-Papeterie spezialisiert. Ich freue mich immer wieder
        über das Vertrauen, das mir wunderbare Hochzeitspaare entgegen bringen,
        damit ich ihre Hochzeit gestalterisch und fotografisch begleiten darf.
      </p>
      <p class="max-prose mt-4">
        Auf Hochzeiten fotografiere ich besonders gerne, weil mich die
        Emotionen, die Aufregung und die ganz intimen und einzigartigen
        Momente immer wieder in den Bann ziehen. Ich liebe Bilder, mit denen
        man einen ganzen Tag in seinen Erinnerungen komplett wieder erleben
        kann. Und ich bin gerne mit den Menschen zusammen, die zueinander
        gefunden haben und sich mit ganz viel Liebe und Vertrauen einander
        zugewendet haben und das feiern möchten.
      </p>
      <IlSpacer />
      <ButtonEffect class="text-sunset" @click="scrollTo('contact')">
        Schreibt mich gerne an!
      </ButtonEffect>
    </SectionContent>
    <IconBase class="text-sunset w-16 w-full h-16 mb-4">
      <IconArrow />
    </IconBase>
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
