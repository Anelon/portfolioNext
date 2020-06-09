import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
	const title = "Kass and Andrew";
	return (
		<Layout location={title}>
			<div className="grid-y full">
				<div className="cell header">
					<h4 className="text-center">
						Sites
					</h4>  
				</div>   
				<div className="cell expand">
					<div className="grid-x grid-padding-x">
						<div className="medium-4 cell">
							<Link href="/Portfolio">
								<div className="Card small text-center">
									<img src="/images/Keyboard.jpeg"alt="Keyboard" className="CardImg"></img>
									<br/>Portfolio Site
								</div>
							</Link> 
						</div>    
						<div className="medium-4 cell">
							<Link href="/CSUMBPortfolio">  
								<div className="Card small text-center">
									<img src="/images/CSUMBLogo.png"alt="CSUMB" className="CardImg"></img>
									<br/>CSUMB Portfolio
								</div>
							</Link> 
						</div>    
						<div className="medium-4 cell">
							<a href="/japan">
								{/*<Link to="/Japan"> change back when galery is working*/}
								<div className="Card small text-center">
									<img src="/images/WaterTori.jpg" alt="Japan" className="CardImg"></img>
									<br/>Japan Trip
								</div>
								{/*</Link>*/}
							</a>
						</div>
					</div>  
				</div>    
			</div>    

		</Layout>
	)
}

