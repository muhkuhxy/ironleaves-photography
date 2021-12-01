<template>
  <SectionParent class="bg-sunset text-white relative">
    <SectionLines class="xl:block">
      <div class="absolute right-0 w-[70%] h-full">
        <div class="relative w-full h-full">
        <SvgHeroLine1 class="absolute text-white opacity-25 stroke-current stroke-1 fill-none h-[106%] right-0 top-0 rotate-[-18deg] mt-[-5%] mr-[-39%]" />
        <SvgHeroLine2 class="absolute text-bluegray opacity-50 stroke-current stroke-1 fill-none h-[110%] mt-[-2.5%] scale-x-[-1] right-0" />
        <SvgHeroFlower class="absolute right-0 top-0 h-[84%] mt-[1%] mr-[6%] fill-current"/>
      </div>
      </div>
    </SectionLines>
    <SectionContent class="relative grid grid-cols-1 xl:grid-cols-2">
      <div class="max-w-prose">
        <SectionHeader>
          <template #roofline><span class="text-white">Kontakt</span></template>
          Ich freue mich auf Eure Nachrichten!
        </SectionHeader>
        <LayoutSpacer />
        <p class="mb-4">
          Super gerne begleite ich Euren besonderen Tag als Hochzeitsfotograf – Egal, ob in Monschau, Aachen, NRW oder irgendwo anders in Deutschland oder der Welt! Gerne gehe ich auch auf eure individuellen Wünsche ein.
        </p>
        <p>
          Ich bin schon ganz gespannt darauf, eure Geschichte zu hören und euch kennenzulernen! Erzählt mir gerne in einer Nachricht ein bisschen mehr von euch und Eurer Hochzeit. Wir können uns persönlich auf einen Kaffee treffen, gemeinsam telefonieren oder einen Video-Call machen um uns etwas zu beschnuppern. Ich nehme mir sehr gerne Zeit für alle eure Fragen und Wünsche! Füllt einfach das Kontaktformular aus und ich werde euch innerhalb von 48 Stunden antworten.
        </p>
        <LayoutSpacer />
        <FormulateForm
          v-model="form"
          class="grid gap-x-2 gap-y-6 grid-cols-1 sm:grid-cols-2"
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
          <LayoutSpacer />
          <FormulateErrors class="sm:col-span-2" />
          <ButtonEffect class="sm:col-span-2" type="submit">
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
    </SectionContent>
  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
import Botpoison from "@botpoison/browser";
import { composeMail } from '@/lib/mail'

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

const botpoison = new Botpoison({
  publicKey: "pk_0ab7175c-f232-43a7-a50d-671477c36db3",
});

function pick(keys: string[], object: Record<string, any>): Record<string, object> {
  return keys.reduce((result, key) => {
    result[key] = object[key]
    return result
  }, {} as Record<string, object>)
}

async function sendForm(form: Form, fake: boolean): Promise<Response> {
  const solution = fake ? 'fake' : (await botpoison.challenge()).solution
  const payload = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      ...pick(['name', 'email', 'phone', 'date', 'kind', 'date', 'place', 'message'], form),
      _email: {
        subject: `Ironleaves Photography - Neue Anfrage von ${form.name}`
      },
      _botpoison: solution,
      _redirect: false
    })
  }
  if (fake) {
    return fakeSendForm(payload)
  }
  return await fetch('https://submit-form.com/ccaegGs4', payload)
}

function fakeSendForm(payload: any): Promise<Response> {
  console.log('sending', payload)
  return new Promise((resolve, reject) => {
    if (Date.now() % 2 === 0) {
      setTimeout(() => resolve({ok: true} as Response), 3000)
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
        label: 'Ich habe die Datenschutzerklärung und AGBs zur Kenntnis genommen. Ich stimme zu, dass meine Daten und Angaben zur Bearbeitung meines Anliegens elektronisch verarbeitet werden. Mir ist bewusst, dass ich meine Einwilligung jederzeit mit Wirkung für die Zukunft durch eine einfache Erklärung, zum Beispiel durch eine Erklärung mittels dieses Kontaktformulars oder per E-Mail widerrufen kann.',
        validation: 'required',
        outerClass: ['col-span-full'],
        extra: {
          'validation-messages': {
            required: 'Zustimmung ist erforderlich.'
          },
          'wrapper-class': ['flex gap-2 items-start'],
          'element-class': ['flex items-center'],
          'label-class': ['text-sm mb-1'],
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
    async submit(form: Form) {
      const { transit } = this
      if (transit.sending || transit.success) {
        return;
      }

      const interval = setInterval(() => {
          this.dots += '.'
        }, 750 )
      transit.sending = true

      try {
        const response = await sendForm(form, false)
        transit.success = response.ok
      } catch (error) {
        console.error(error)
        transit.error = true
      } finally {
        clearInterval(interval)
        transit.sending = false
        this.dots = ''
      }
    },
    composeMail
  }
})
</script>
