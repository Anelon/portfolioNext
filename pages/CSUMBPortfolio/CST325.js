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
			classDesc: "This course teaches the students the fundamentals of game programming and skills needed for game development, including GPU programming, matrix and quaternion algebra for physics calculation, animation, lighting and basics of implementing 3D models into a framework.",
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
				desc:"I added the ability to jump between all of the different planets because I didn't like being locked to just one. I used noise to give some animation to the sun texture and make the stars twinkle in the background. Adding clouds as an atmosphere around the earth was really cool to show how levels of detail can be added with transparency.",
				link:"//anelon.github.io/SolarSystem",
				ghLink:"//github.com/Anelon/SolarSystem",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">
						{desc}
						<br/>
						<br/>
						Being someone that is interested in game development, I found this class very interesting to see how 3D environments are made. It was also intriguing to see how you can interact with the GPU. Since taking this class I have learned about compute shaders which are using the GPU for calculations.
					</p>
					<Imgs imgs={projects} imgDir={this.state.imgDir} lang={"text"}/>
				</div>
			</Layout>
		);
	}
}

export default CST325;
