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
        <FormulateInput v-for="{type, name, label, validation, inputClass, outerClass} in formSchema"
          :key="name"
          v-bind="{ type, name, label, validation, 'validation-name': label, 'input-class': baseClasses.input.concat(inputClass || []), 'outer-class': baseClasses.outer.concat(outerClass || []) }" />
        <IlSpacer :ms="2" />
        <div class="flex justify-center">
          <ButtonEffect type="submit">Abschicken</ButtonEffect>
        </div>
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
  data: () : { form: Form } => ({
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
    formSchema: () => [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
        validation: 'required',
      },
      {
        name: 'email',
        type: 'email',
        label: 'E-Mail-Adresse',
        validation: 'required|email',
      },
      {
        name: 'phone',
        type: 'text',
        label: 'Telefonnummer',
        validation: 'required',
      },
      {
        name: 'kind',
        type: 'text',
        label: 'Art der Trauung',
      },
      {
        name: 'date',
        type: 'text',
        label: 'Wunschdatum',
      },
      {
        name: 'where',
        type: 'text',
        label: 'Wo wird die Hochzeit stattfinden?',
      },
      {
        name: 'message',
        type: 'textarea',
        label: 'Nachricht',
        inputClass: ['min-h-24']
      }
    ],
    baseClasses: () => ({
      input: ['border-2 border-solid border-color-white bg-sunset w-full p-1 focus:outline-none focus:ring-2 focus:ring-bluegray focus:ring-opacity-60 my-1'],
      outer: ['mb-4']
    })
  },
  methods: {
    submit(/* event: Form */) {
      // console.log(event)
    }
  }
})
</script>
