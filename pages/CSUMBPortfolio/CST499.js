import { Component } from 'react';

import Videos from '../../components/Video';
import Tabs from '../../components/Tabs';
import Layout, { siteTitle } from '../../components/layout';
import Imgs from '../../components/Imgs';
import PDF from '../../components/PDF'
import Link from 'next/link';

class CST499 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 499",
			oldClassDesc: "The Capstone is a demonstration of knowledge and experience gained within the program. The project acts a transition from student to professional. The most common formats for the project are 1. Platforms and programs, 2. Applied research projects, and 3. Business ventures. The experience in this course can directly translate to experiences in the workplace.",
			classDesc: "Students will work on a project in large groups (up to 5 students in each group), developing requirements specification, a solution plan followed by design and implementation of the solution. The problem statement for the projects will be selected by the faculty. Faculty will also play the role of a project manager directing the schedule and deliverables for these projects.",
			imgDir: "/images/499images/",
			renderClientSide: false,
		}
	}

	componentDidMount() {
		this.setState({
			renderClientSide: true,
		});
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
		let videos = [
			["Video Presentation", "https://youtu.be/Bd1Ao7UIJuU"]
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					<p className="desc">
						{desc}
						<br/>
						<br/>
                        For my capstone I decided to go with making a project, instead of a research paper, as I wanted to see what I could make and I figured it would be a great way of building my portfolio. For my project I decided that making a multiplayer game would be the best way to show off all of the skills that I had learned in my Computer Science education. Being web based it demonstrates my knowledge of web development and the technologies around it. Games are also a great showcase of algorithms as you have to be able to optimize the program so it is fast enough to update and draw every frame. There are also data structures as I am using lots of javascript Maps and Sets for quick look up of information and QuadTrees for collision lookup to name a few. The game being multiplayer there is also a demonstration of networking using the socket.io library. Watch the video presentation for an overview, and read the final report for a more detailed description of the project.
						<br/>
						<br/>
						<Link href={`//github.com/Anelon/Mirrored-Fantasy`}>
							<a>
								<b>
									Code on Github
								</b>
							</a>
						</Link>
					</p>
					{/* requires 2 items in */}
					<Tabs>
						<div label="Video Presentation">
							<Videos videos={videos} />
						</div>
						<div label="Final Report">
							{this.state.renderClientSide && <PDF pdfPath='CST499/CapstoneReport.pdf'/>} 
						</div>
						<div label="Proposal">
							{this.state.renderClientSide && <PDF pdfPath='CST499/ProjectProposal.pdf'/>} 
						</div>
					</Tabs>
				</div>
			</Layout>
		);
	}
}

export default CST499;
