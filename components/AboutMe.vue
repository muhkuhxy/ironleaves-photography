<template>
  <SectionParent class="text-bluegray relative">
    <Spacer class="mt-8" />
    <div class="flex flex-center absolute w-full justify-center transform -translate-y-12">
      <IconBase class="text-sunset w-16">
        <IconArrow />
      </IconBase>
    </div>
    <SectionContent>
      <figure class="">
        <img class="mx-auto transform -translate-x-4 w-1/2"
          src="~/assets/images/IMG_20190206_161314.jpg"
          alt="Tamara Loeffen Portrait">
      </figure>
      <SvgFlowerGrass class="text-sunset fill-current w-1/3 float-right relative transform -translate-y-32 -translate-x-6"/>
      <Spacer class="mb-8"/>
      <SectionHeader>
        <template #roofline>Über mich</template>
        Hoch&shy;zeits&shy;foto&shy;grafin&nbsp;&amp; Gestalterin
      </SectionHeader>
      <Spacer class="mb-8"/>
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aspernatur aut distinctio iste saepe id incidunt, quod est sit labore facere. Quod ipsam possimus amet sit veniam et dolores omnis!</p>
      <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde dolorem, quaerat dolores reprehenderit sit at quae explicabo nam itaque exercitationem dolore architecto esse harum soluta, mollitia nulla consectetur repellendus.</p>
      <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae fuga corporis, quasi quis ducimus? Corrupti soluta cupiditate voluptatum velit dicta! Minus reiciendis soluta ad cumque quaerat libero nostrum corrupti?</p>
      <Spacer class="mt-4" />
      <button class="flex items-center gap-2">
        <IconBase class="text-sunset transform -rotate-90 w-8"><IconArrow/></IconBase>
        Weiterlesen &mldr;
      </button>
      <Spacer class="mb-8"/>
      <ButtonEffect class="text-sunset">Schreibt mir!</ButtonEffect>
    </SectionContent>
    <IconBase class="text-sunset w-16 w-full h-16 mb-4">
      <IconArrow />
    </IconBase>
  </SectionParent>
</template>
