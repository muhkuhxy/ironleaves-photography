<template>
  <SectionParent>
    <SectionContent class="slide-up text-bluegray" :fluffy="true">
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
            <template #roofline>Spontan, locker &amp; natürlich</template>
            Mein Fotografie-Style
          </SectionHeader>
          <LayoutSpacer />
          <div class="max-w-prose flex flex-col gap-y-4">
            <p>Meinen Fotografie-Stil würde ich als spontan und locker beschreiben. Ich bin kein Fan von gestellten und gezwungenen Fotos. Beim Fotografieren laufe ich gerne viel herum, um möglichst dynamische und vielfältige Pärchenfotos festzuhalten. Ich arbeite mit natürlichem Licht und schleppe keinen Blitz mit mir rum. Dadurch bin ich flexibler und kann schneller agieren.</p>
            <p>Ich weiß, dass Paaren vor dem Shooting oftmals viele Gedanken durch den Kopf gehen. Wichtig ist mir, dass ihr Euch wohlfühlt und fallen lassen könnt. Deswegen versuche ich Euch das Shooting so locker wie möglich zu gestalten. Ich plappere viel mit Euch und schwärme lautstark, wenn ihr besonders knuffig ausseht. Bei Hochzeitsreportagen versuche ich einen Ausgleich zwischen unsichtbar und aufdringlich zu finden. Ich mache gerne spontane Schnappschüsse und ehrliche Momentaufnahmen.  Gleichzeit mische ich mich gerne unter die Gäste und interagiere mit ihnen.</p>
          </div>
        </div>
      </div>
    </SectionContent>
  </SectionParent>
</template>
