import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ParticleBackground from './ParticleBackground';

const name = 'Andrew Bell'
export let siteTitle = 'Kass and Andrew'

export default function Layout({ children, location }) {
	let Navi = ( //default navbar (home)
		<li>
			<Link href="/">
				<img
					src="/images/logo.svg"
					className={`${styles.AppLogo2} ${utilStyles.borderCircle}`}
					alt={name}
				/>
			</Link>
		</li>
	);
	if (location === "Portfolio") { //portfolio navbar
		Navi = (
			<li>
				<li><Link href="/Portfolio">
					<a className={styles.NavLink}>Home</a>
				</Link></li>
				<li><Link href="/Portfolio/Code">
					<a className={styles.NavLink}>Code</a>
				</Link></li>
				<li><Link href="/Portfolio/Video">
					<a className={styles.NavLink}>Video</a>
				</Link></li>
			</li>
		);
	} else if (location === "Andrew Bell ILP" || location[0] === "C") { //csumb portfolio navbar
		Navi = (
			<li>
				<li><Link href="/CSUMBPortfolio">
					<a className={styles.NavLink}>Home</a>
				</Link></li>
				<li><Link href="/CSUMBPortfolio/CST338">
					<a className={styles.NavLink}>Recent Class</a>
				</Link></li>
			</li>
		);
	} else if (location === "Japan Trip") { //gallery navbar
	}
	return (
		<div className="grid-y medium-grid-frame">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="Andrew Bell"
					content="Andrew Bell's portfolio website"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={location || siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{location || siteTitle}</title>
			</Head>
			<div className="cell shrink">    
				<header className={styles.AppHeader}>    
					<ul className="menu align-center">    
						<li>    
							<Link href="/">    
								<img
									src="/images/logo.svg"
									className={`${styles.AppLogo} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</Link>    
						</li>    
						<li><h2 className={styles.AppTitle}>{location || siteTitle}</h2></li>
						{Navi}    
					</ul>    
				</header>    
			</div>    

			<main className="cell auto background">
				{/* TODO add the particle background here I think */}
                {/*<ParticleBackground />*/}
				{children}
			</main>
		</div>
	)
}

