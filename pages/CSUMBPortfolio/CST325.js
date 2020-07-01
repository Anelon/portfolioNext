import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST370 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 370",
			classDesc: "This class covers the data structures that are used in computer science in the C++ or Java  language. This class covers topics such as hash tables, stacks, heaps, trees, and graph structures. As well as sorting and searching algorithms and graph traversal. This class will help with understanding how data is stored efficiently in computers and how to use algorithms efficiently. Applying the knowledge from this course will help in creating optimized software. Algorithms are also used regularly in the hiring process for multiple companies to weed out the uninitiated. Proficiency developed in this course will be crucial to getting a foot in the door and landing a job.",
			imgDir: "/images/370images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let imgDir = this.state.imgDir;
		let projects = [
			{
				title:"Solar System",
				img1:"solarSystem.png",
				desc:"This was a really cool summary of all that we did in the class. I added the ability to jump between all of the different planets because I didn't like being locked to one. I used some random noise to give some animation to the sun texture and make the stars twinkle in the back ground. Adding clouds as an atmosphere around the earth was really cool to show how levels of detail can be added with transparency.",
				link:"//anelon.github.io/SolarSystem",
				ghLink:"//github.com/Anelon/SolarSystem",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					{/* requires 2 items in */}
					<p>
						Being someone that is intereted in game development I found this class really cool to see how you make 3d environments. It was also really interesting to see how you can interact with the GPU, sense taking this class I have learned about compute shaders which is using the GPU for calculations.
					</p>
					<Imgs imgs={projects} imgDir={this.state.imgDir} lang={"text"}/>
				</div>
			</Layout>
		);
	}
}

export default CST370;
