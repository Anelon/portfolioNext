import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST325 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 325",
			classDesc: "This course covers the concepts of fundamental game programming. In this course, it covers GPU programming, matrix linear algebra for graphics programming. Quaternion algebra which would allow one to use physics to calculate the locations of the graphics when implementing the game. The gaming industry has seen incredible growth, overtaking all other media in some regions.  This course will help keep students competitive in the market. In the orientation, the course’s professor mentioned that the applications of this course go beyond gaming and have potential with AI and machine learning. AI is seeing increased use across a wide range of software applications, from predictions to photo-editing, making these skills especially useful in the current market.",
			imgDir: "/images/325images/"
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

export default CST325;
