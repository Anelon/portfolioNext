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
		let highlightProjects = [
			//[Class Name, hasTaken]
			{
				name:"Robot Saga - Python", hasTaken:true,
				link:"/CSUMBPortfolio/CST205",
				img:"/images/205images/RobotSaga.png"
			},
			{
				name:"Solar System - webgl, JavaScript", hasTaken:true,
				link:"//anelon.github.io/SolarSystem",
				ghLink:"//github.com/Anelon/SolarSystem/",
				img:"/images/325images/solarSystem.png"
			},
			{
				name:"Basic RPG - JavaScript", hasTaken:true,
				link:"//anelon.github.io/rpg2/",
				ghLink:"//github.com/Anelon/rpg2/",
				img:"/images/336images/golemsQuest.png"
			},
			{
				name:"Parking Detection - HTML, JS, PHP, MySQL, Python, Raspberry Pi, OpenCV", hasTaken:true,
				link:"//github.com/Alipongoy/CSCI152Pi/wiki/How-it-works",
				img:"https://camo.githubusercontent.com/813de90b696ad7909f33a71f9c658668ba0b2e91/68747470733a2f2f692e696d6775722e636f6d2f63796f734138562e706e67",
			},
			{
				name:"Tic Tac Toe (AI) - React.js", hasTaken:true,
				link:"//anelon.github.io/reactjs-ttt/",
				ghLink:"//github.com/Anelon/reactjs-ttt",
			},
			/* need to figure out how to present or something
			{name:"Battle Ship Royale - C++, ZMQ (networking)", hasTaken:true,
				link:"",
			},
			*/
];
		//TODO order classes by coolness/relavance
		let classesCSUMB = [
			//[Class Name, hasTaken]
			{name:"CST 300 - Major Proseminar", hasTaken:true},
			{name:"CST 205 - Multimedia and Design Programming (Python)", hasTaken:true},
			{name:"CST 338 - Software Design (Java)", hasTaken:true},
			{name:"CST 361 - CS and Community Service (Service Learning)", hasTaken:true},
			{name:"CST 363 - Database Management (MySQL)", hasTaken:true},
			{name:"CST 311 - Intro to Computer Networking", hasTaken:true},
			{name:"CST 336 - Internet programming (JavaScript)", hasTaken:true},
			{name:"CST 325 - Graphics Programming (JavaScript)", hasTaken:false},
			{name:"CST 370 - Algorithms (C++)", hasTaken:false},
			{name:"CST 438 - Software Engineering", hasTaken:false},
			{name:"CST 499 - Directed Group Capstone", hasTaken:false},
		];
		//TODO make these classes
		let classesLowerDiv = [
			//[Class Name, hasTaken]
			{name:"CSCI 40 - Programming Concepts (C++)", hasTaken:false},
			{name:"CSCI 41 - Data Structures (C++)", hasTaken:false},
			{name:"CSCI 26 - Descrete Math (C++)", hasTaken:false},
			{name:"CSCI 45 - Assembly (Raspi, arm32, C, python)", hasTaken:false},
			{name:"CSCI 150 - Software Engineering 1 (JavaScript)", hasTaken:false},
			{name:"CSCI 152 - Software Engineering 2 (JavaScript, PHP, Python)", hasTaken:false},
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
							<div label="Projects">
								<div className="small text-center">
									<h2><strong>Hightlight Projects</strong></h2>
								</div>
								<ClassCards classes={highlightProjects}/>
							</div>
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
