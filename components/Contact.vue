<template>
  <SectionParent class="bg-sunset text-white">
    <SectionContent class="grid grid-cols-1 xl:grid-cols-2">
      <div class="">
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
        <FormulateForm
          v-model="form" class="grid gap-x-2 gap-y-6 grid-cols-1 sm:grid-cols-2"
          invalid-message="Leider ist das Formular noch nicht vollständig. Bitte überprüfe deine Angaben."
          @submit="submit">
          <FormulateInput
            v-for="{
              type,
              name,
              label,
              validation = '',
              inputClass = [],
              outerClass = [],
              extra = {}
            } in formSchema"
            :key="name"
            v-bind="{
              type,
              name,
              label: validation.includes('required') ? `${label}*` : label,
              validation,
              'validation-name': label,
              'input-class': (baseClasses.input[type] || []).concat(inputClass || []),
              'outer-class': outerClass,
              'errors-class': baseClasses.errors,
              ...extra
            }" />
          <IlSpacer class="md:mt-4 xl:mt-8" />
          <FormulateErrors class="sm:col-span-2" />
          <ButtonEffect type="submit">
            Abschicken
          </ButtonEffect>
        </FormulateForm>
      </div>
      <div class="hidden xl:block w-1/2 place-self-center row-span-2">
        <SvgHeroFlower class="fill-current transform translate-x-12"/>
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
  date: string,
  kind: string,
  place: string,
  message: string,
  acceptedAgbs: boolean
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
      message: '',
      acceptedAgbs: false
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
        validation: 'required',
        inputClass: ['min-h-24'],
        outerClass: ['col-span-full']
      },
      {
        name: 'acceptedAgbs',
        type: 'checkbox',
        label: 'AGBs zugestimmt',
        validation: 'required',
        extra: {
          'validation-messages': {
            required: 'Bitte stimm\' den AGBs zu.'
          },
          'wrapper-class': ['flex gap-2'],
          'element-class': ['flex items-center'],
          'decorator-class': ['border-2 border-solid border-white']
        }
      },
    ],
    baseClasses: () => {
      const textBaseClasses = ['border-2 border-solid border-white bg-sunset w-full p-1 focus:outline-none focus:ring-2 focus:ring-bluegray focus:ring-opacity-60 my-1']
      return {
        input: {
          email: textBaseClasses,
          text: textBaseClasses,
          textarea: textBaseClasses,
          checkbox: ['appearance-none']
        },
        errors: ['text-sm']
      }
    }
  },
  methods: {
    submit(/* event: Form */) {
      // console.log(event)
    }
  }
})
</script>
