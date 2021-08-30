<template>
  <SectionParent class="bg-sunset text-white">
    <SectionContent>
      <SectionHeader>
        <template #roofline><span class="text-white">Kontakt</span></template>
        Ich freue mich auf eure Nachrichten!
      </SectionHeader>
      <IlSpacer />
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, enim, dolores, provident molestias esse ab quibusdam quas quos nam pariatur nisi nemo. Nesciunt, suscipit vel? Facilis eveniet numquam recusandae sed.</div>
      <IlSpacer />
      <FormulateForm v-model="form" @submit="submit">
        <FormulateInput name="name" label="Name" validation="required" :input-class="inputClass" :outer-class="wrapperClass" />
        <FormulateInput name="email" label="E-Mail-Adresse" type="email" validation-name="E-Mail-Adresse" validation="required|email" :input-class="inputClass" :outer-class="wrapperClass" />
        <FormulateInput name="phone" label="Telefonnummer" validation-name="Telefonnummer" validation="required" :input-class="inputClass" :outer-class="wrapperClass" />
        <FormulateInput name="kind" label="Art der Trauung" :input-class="inputClass" :outer-class="wrapperClass" />
        <FormulateInput name="date" label="Wunschdatum" :input-class="inputClass" :outer-class="wrapperClass" />
        <FormulateInput name="place" label="Wo wird die Hochzeit stattfinden?" :input-class="inputClass" :outer-class="wrapperClass" />
        <FormulateInput name="message" label="Nachricht" validation-name="Nachricht"  type="textarea" validation="required" :input-class="inputClass" :outer-class="wrapperClass" />
        <IlSpacer :m="2"/>
        <ButtonEffect type="submit">Abschicken</ButtonEffect>
      </FormulateForm>
    </SectionContent>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
interface Form {
  name: string,
  email: string,
  phone: string,
  date: string | null,
  kind: string | null,
  place: string | null,
  message: string
}
export default Vue.extend({
  data: () => ({
    form: {
      name: '',
      email: '',
      phone: '',
      date: '',
      kind: '',
      place: '',
      message: ''
    }
  }),
  computed: {
    inputClass() {
      return 'border-2 border-solid border-color-white bg-sunset w-full p-1'
    },
    wrapperClass() {
      return 'mb-4'
    }
  },
  methods: {
    submit( event: Form ) {
      console.log(event)
    }
  }
})
</script>
