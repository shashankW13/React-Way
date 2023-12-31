import styles from "./style"
import { Analytics } from '@vercel/analytics/react'
import { 
	Hero,
	Navbar, 
	Stats, 
	Business,
	Billing,
	CardDeal, 
	Testimonials, 
	Clients, 
	CTA, 
	Footer 
} from "./components"

export const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`bg-primary w-full ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`bg-primary w-full ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Stats /> 
				<Business /> 
				<Billing /> 
				<CardDeal /> 
				<Testimonials /> 
				<Clients /> 
				<CTA /> 
				<Footer />
				<Analytics />
			</div>
		</div>
	</div>
)
