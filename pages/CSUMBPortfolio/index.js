import { Component } from 'react'
import Layout, { siteTitle } from '../../components/layout'
import ClassCards from '../../components/ClassCards'


class Portfolio extends Component {    
	constructor(props) {    
		super(props);    
		this.state = {    
			title: "Andrew Bell ILP"    
		}    
	}    
	render() {    
		return(    
			<Layout location={this.state.title}>
				<div className="grid-x grid-padding-x full">    
					<div className="medium-6 cell">    
						<h2 className="text-center bold">    
							<strong>Hello, my name is Andrew Bell</strong><br/>    
						</h2>    
						<p>    
							Bell lives in Fresno where he tutors computer science a Clovis Community College. He got into tech at a young age mostly playing video games with his older brothers. In more recent years, he enjoys playing video games, watching anime and rock climbing.<br/>
							He is currently working on completing his bachelors degree through CSUMB's online computer science degree completion which at the end of he wishes to become a software engineer.
							{/*need to add description of the program (outcomes), and your goals*/}
						</p>
						{/*Center me later I guess and get rid of white?*/}
						<div className="grid-x grid-padding-x">
							<div className="medium-1 cell"/>
							<div className="medium-10 cell">    
								<div className="small text-center">
									<img src="/images/CSUMBLogo.png" alt="CSUMB" className="CardImg"></img>
								</div>
							</div>
						</div>
						{/*<img src={CSUMBLogo}alt="CSUMB" className="CardImg middle"></img>*/}
					</div>
					<div className="medium-6 cell scroll">
						{/*<ClassCards/>*/}
					</div>
				</div>

			</Layout>
		);    
	}    
}    

export default Portfolio;    
