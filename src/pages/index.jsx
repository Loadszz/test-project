import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "next-i18next"
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Home() {
	const { t } = useTranslation()
	const { i18n } = useTranslation();
	const { locale, locales, push } = useRouter()

	const handleClick = l => () => {
		push('/', undefined, { locale: l })
		i18n.changeLanguage(l);
	}

	// console.log(t);
	// console.log(i18n);
	return (
		<main>
			<div>{locale}</div>
			{locales.map(l => (
				<Link href={'/'} locale={l} key={l} onClick={handleClick(l)}>
					{l}
				</Link>
			))}
			<h1>{t('home.welcomeMessage')}</h1>
			<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem labore voluptatibus assumenda impedit aut quisquam fugit amet libero dicta praesentium quam saepe, adipisci accusantium ratione quasi velit rem facilis quaerat?</div>
		</main>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
