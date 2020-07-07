import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
	const title = "Andrew Bell";
	return (
		<Layout location={title}>
			<div className="grid-y full">
				<div className="cell header">
					<h2 className="text-center bold white">
						<strong>Hello,</strong><br/>
						some of my hobbies are<br/>
						Rock Climbing, Photography, Coding
					</h2>
					<h4 className="text-center">
						Sites
					</h4>
				</div>
				<div className="cell expand">
					<div className="grid-x grid-padding-x">
						<div className="medium-1 cell" />

						<div className="medium-5 cell">
							<Link href="/Portfolio">
								<a>
									<div className="Card small text-center">
									<img src="/images/Keyboard.jpeg"alt="Keyboard" className="CardImg"></img>
									<br/>Portfolio
									</div>
								</a>
							</Link>
						</div>
						<div className="medium-5 cell">
							<a href="/japan">
								{/*<Link to="/Japan"> change back when gallery is working*/}
								<div className="Card small text-center">
									<img src="/images/WaterTori.jpg" alt="Japan" className="CardImg"></img>
									<br/>Japan Trips
								</div>
								{/*</Link>*/}
							</a>
						</div>

						<div className="medium-1 cell" />
						{/* TODO add key projects here I guess */}
						{/*
						<div className="large-3 medium-4 cell">
							<Link href="/CSUMBPortfolio">
								<a>
									<div className="Card small text-center">
										<img src="/images/CSUMBLogo.png"alt="CSUMB" className="CardImg"></img>
										<br/>CSUMB Portfolio
									</div>
								</a>
							</Link>
						</div>
						*/}
					</div>
				</div>
			</div>

		</Layout>
	)
}

