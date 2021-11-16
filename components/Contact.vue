<template>
  <SectionParent class="bg-sunset text-white relative">
    <div class="hidden xl:block absolute inset-0 overflow-hidden">
      <div class="relative max-w-screen-xl mx-auto h-full">
        <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-1 fill-none max-w-[100%] h-[106%] right-0 top-0 rotate-[-18deg] mt-[-5%] mr-[-24%]" />
        <SvgHeroLine2 class="absolute text-bluegray opacity-50 stroke-current stroke-1 fill-none max-w-[100%] h-[110%] mt-[-2.5%] scale-x-[-1] right-0" />
      </div>
    </div>
    <SectionContent class="relative grid grid-cols-1 xl:grid-cols-2">
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
          <ButtonEffect class="sm:col-span-2" type="submit" @click="resetTransmit">
            {{ transit.sending ? `Wird gesendet ${dots}` :
              transit.error ? 'Schade :(' :
              transit.success ? 'Vielen Dank :)' :
              'Abschicken' }}
          </ButtonEffect>
          <div class="max-w-prose sm:col-span-2">
            <p v-if="transit.error">
              Leider gab es ein technisches Problem, bitte versuch es später nochmal,
              oder schreib mir eine <IlLink @click="composeMail">E-Mail</IlLink>.
            </p>
            <p v-if="transit.success">
              Ich melde mich so bald wie möglich.
            </p>
          </div>
        </FormulateForm>
      </div>
      <div class="hidden xl:block place-self-center w-[60%]">
        <SvgHeroFlower class="fill-current translate-x-12"/>
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
interface Transit {
  sending: boolean
  error: boolean
  success: boolean
}

function fakeFetch(form: Form): Promise<void> {
  console.log('sending', {form})
  return new Promise((resolve, reject) => {
    if (Date.now() % 2 === 0) {
      setTimeout(resolve, 3000)
    } else {
      setTimeout(reject, 3000)
    }
  })
}

export default Vue.extend({
  data: () : { form: Form, transit: Transit, dots: string } => ({
    form: {
      name: '',
      email: '',
      phone: '',
      date: '',
      kind: '',
      place: '',
      message: '',
      acceptedAgbs: false
    },
    transit: {
      sending: false,
      error: false,
      success: false,
    },
    dots: ''
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
          'decorator-class': ['border-2 border-solid border-white'],
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
    resetTransmit() {
      const { transit } = this
      transit.success = false
      transit.error = false
    },
    async submit(form: Form) {
      const { transit } = this
      if (transit.sending) {
        return;
      }

      const interval = setInterval(() => {
          this.dots += '.'
        }, 750 )
      transit.sending = true
      try {
        await fakeFetch(form);
        transit.success = true
      } catch (error) {
        transit.error = true
      } finally {
        clearInterval(interval)
        transit.sending = false
        this.dots = ''
      }
    },
    composeMail() {
      const el = document.createElement('a')
      el.href = 'mailto:' + rot13('uryyb@vebayrnirf-qrfvta.pbz')
      el.click()
    },
  }
})

function rot13(str: string) {
  const input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  const index = (x: string) => input.indexOf(x);
  const translate = (x: string) => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}
</script>
