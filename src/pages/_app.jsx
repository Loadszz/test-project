import '@/styles/globals.css'
import i18n from '@/assets/i18n';
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default appWithTranslation(MyApp)
// export default function App({ Component, pageProps }) {
// 	return <Component {...pageProps} />
// }
