import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Imgs from '../../components/Imgs';

class CST499 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 499",
			oldClassDesc: "The Capstone is a demonstration of knowledge and experience gained within the program. The project acts a transition from student to professional. The most common formats for the project are 1. Platforms and programs, 2. Applied research projects, and 3. Business ventures. The experience in this course can directly translate to experiences in the workplace.",
			classDesc: "Students will work on a project in large groups (up to 5 students in each group), developing requirements specification, a solution plan followed by design and implementation of the solution. The problem statement for the projects will be selected by the faculty. Faculty will also play the role of a project manager directing the schedule and deliverables for these projects.",
			imgDir: "/images/499images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let projects = [
			{
				title:"Mirrored Fantasy",
				img1:"mirroredFantasy.png",
				desc:"Still a work in progress this project has already been the biggest project I have had the pleasure of working on. It has been really fun and so far already I can say there are a few things that I would change, the first being using typescript rather than javascript as keeping track of types on your own on a big project has been a lot of work. I am already thinking of ways of altering and how to improve the project.",
                link:"//mirrored-fantasy.herokuapp.com/",
				ghLink:"//github.com/Anelon/Mirrored-Fantasy",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					<p className="desc">
						{desc}
						<br/>
						<br/>
                        For my capstone I decided to go with making a project as I wanted to see what I could make and I figured it would be a great way of building my portfolio. For my project I decided that making a multiplayer game would be the best way to show off all of the skills that I had learned in my computer science education. Being web based it demonstrates my knowledge of web development and the technologies around it. Games are also a great showcase of algorithms as you have to be able to optimize the program so it is fast enough to update every frame. There are also data structures as I am using lots of Hash Maps for quick look up of informatin and a QuadTree for collision lookup to name a few. The game being multiplayer there is also a demonstration of networking using the socket.io library.
					</p>
					<Imgs imgs={projects} imgDir={this.state.imgDir} lang={"text"}/>
				</div>
			</Layout>
		);
	}
}

export default CST499;
