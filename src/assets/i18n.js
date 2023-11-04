import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					common: require('../../public/locales/en/common.json')
				}
			},
			ru: {
				translation: {
					common: require('../../public/locales/ru/common.json')
				}
			},
			ua: {
				translation: {
					common: require('../../public/locales/ua/common.json')
				}
			},
		},
		lng: 'en', // Язык по умолчанию
		fallbackLng: 'en', // Язык для запаса
		keySeparator: false, // Опционально
		interpolation: {
			escapeValue: false,
		},
	});