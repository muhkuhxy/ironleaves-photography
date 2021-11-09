<template>
  <SectionParent class="bg-sunset text-white">
    <SectionContent class="flex">
      <div class="xl:w-1/2 flex-initial">
        <SectionHeader>
          <template #roofline><span class="text-white">Kontakt</span></template>
          Ich freue mich auf eure Nachrichten!
        </SectionHeader>
        <IlSpacer />
        <p class="max-w-prose">
          Ich bin schon ganz gespannt darauf, eure Geschichte zu hören und euch
          kennenzulernen! Erzählt mir gerne in einer Nachricht ein bisschen mehr
          von euch. Ich werde versuchen, euch so schnell wie möglich zu antworten.
        </p>
        <IlSpacer class="md:mt-4 xl:mt-8" />
        <FormulateForm v-model="form" class="grid gap-2 grid-cols-1 sm:grid-cols-2" @submit="submit">
          <FormulateInput
            v-for="{type, name, label, validation, inputClass = [], outerClass = []} in formSchema"
            :key="name"
            v-bind="{
              type,
              name,
              label,
              validation,
              'validation-name': label,
              'input-class': baseClasses.input.concat(inputClass || []),
              'outer-class': outerClass,
            }" />
          <IlSpacer class="col-span-full" :ms="2" />
          <div class="col-span-full justify-self-center">
            <ButtonEffect type="submit">Abschicken</ButtonEffect>
          </div>
        </FormulateForm>
      </div>
      <div class="hidden xl:block mx-auto">
        <SvgHeroFlower class="h-full text-white fill-current transform translate-x-12"/>
      </div>
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
        inputClass: ['min-h-24'],
        outerClass: ['col-span-full']
      }
    ],
    baseClasses: () => ({
      input: ['border-2 border-solid border-color-white bg-sunset w-full p-1 focus:outline-none focus:ring-2 focus:ring-bluegray focus:ring-opacity-60 my-1'],
    })
  },
  methods: {
    submit(/* event: Form */) {
      // console.log(event)
    }
  }
})
</script>
