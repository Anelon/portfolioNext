import { Component } from 'react'
import Layout, { siteTitle } from '../../components/layout'
import ClassCards from '../../components/ClassCards'
import Tabs from '../../components/Tabs'


class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Portfolio"
		}
	}
	render() {
		//TODO order classes by coolness/relavance
		let classesCSUMB = [
			//[Class Name, hasTaken]
			["CST 300 - Major Proseminar", true],
			["CST 205 - Multimedia and Design Programming (Python)", true],
			["CST 338 - Software Design (Java)", true],
			["CST 361 - CS and Community Service (Service Learning)", false],
			["CST 363 - Database Management (MySQL)", false],
			["CST 311 - Intro to Computer Networking", false],
			["CST 336 - Internet programming (JavaScript)", false],
			["CST 325 - Graphics Programming (JavaScript)", false],
			["CST 370 - Algorithms (C++)", false],
			["CST 438 - Software Engineering", false],
			["CST 499 - Directed Group Capstone", false],
		];
		//TODO make these classes
		let classesLowerDiv = [
			//[Class Name, hasTaken]
			["CSCI 40 - Programming Concepts (C++)", false],
			["CSCI 41 - Data Structures (C++)", false],
			["CSCI 26 - Descrete Math (C++)", false],
			["CSCI 45 - Assembly (Raspi, arm32, C, python)", false],
			["CSCI 150 - Software Engineering 1 (JavaScript)", false],
			["CSCI 152 - Software Engineering 2 (JavaScript, PHP, Python)", false],
		];
		return(
			<Layout location={this.state.title}>
				<div className="grid-x grid-padding-x full">
					<div className="medium-6 cell">
						<h2 className="text-center bold">
							<strong>Hello, my name is Andrew Bell</strong><br/>
						</h2>
						<p>
							Bell lives in Fresno where he tutors computer science a Clovis Community College. He got into tech at a young age mostly playing video games with his older brothers. In more recent years, he enjoys playing video games, watching anime and rock climbing.<br/>
							He is currently working on compleating his bachelors degree through CSUMB's online computer science degree completeion which at the end of he wishes to become a software engineer.
							{/*need to add description of the program (outcomes), and your goals*/}
						</p>
						<div className="small text-center">
							<img src="/images/CSUMBLogo.png" alt="CSUMB" className="CardImg"></img>
						</div>
					</div>
					<div className="medium-6 cell">
						<Tabs>
							{/* Add highlight projets */}
							<div label="CSUMB">
								<div className="small text-center">
									<h2><strong>CSU Monterey Bay</strong></h2>
								</div>
								<ClassCards classes={classesCSUMB}/>
							</div>
							<div label="Lower Division">
								<div className="small text-center">
									<h2><strong>Lower Division</strong></h2>
								</div>
								<ClassCards classes={classesLowerDiv}/>
							</div>
						</Tabs>
					</div>
				</div>

			</Layout>
		);
	}
}

export default Portfolio;
