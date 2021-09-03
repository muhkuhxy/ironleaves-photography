<template>
  <button class="text-sunset flex items-center gap-2" @click="$emit('click')">
    <IconBase class="transform -rotate-90 w-8"><IconArrow/></IconBase>
    <slot>Weiterlesen &mldr;</slot>
  </button>
</template>
