<template>
  <LayoutContainer>
    <h1>Stories</h1>
    <transition-group
      name="asdf"
      tag="ul"
      class="w-full flex flex-wrap flex-initial place-content-center gap-8 text-white">
      <li
        v-for="item in list"
        :key="item"
        class="w-[40%] flex items-center justify-center flex-shrink text-center h-[20vh] bg-gray-500"
        @click="remove(item)">
        {{ item }}
      </li>
    </transition-group>
  </LayoutContainer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    list: [1,2,3,4,5]
  }),
  methods: {
    remove(item: number) {
      this.list = this.list.filter(x => x !== item)
    }
  }
})
</script>

<style lang="postcss" scoped>

.asdf-enter-active, .asdf-leave-active, .asdf-move {
  transition: all 1s;
}

/* .asdf-move {
  transition: transform 1s;
} */

.asdf-enter, .asdf-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.asdf-leave-active {
  position: absolute;
}
</style>
