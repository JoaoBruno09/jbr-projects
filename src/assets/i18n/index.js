import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import ENGB from '../i18n/locales/en/en-gb.json'
import PTPT from '../i18n/locales/pt/pt-pt.json'

const resources = {
  'en-GB': ENGB[0],
  'en-GB_jobs': ENGB[1].jobs,
  'en-GB_facs': ENGB[2].facs,
  'pt-PT': PTPT[0],
  'pt-PT_jobs': PTPT[1].jobs,
  'pt-PT_facs': PTPT[2].facs
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-GB',
    interpolation: { escapeValue: false },
  })

export default i18n;