import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST336 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 336",
			classDesc: "This class covered JavaScript, MySQL, internet architecture, HTML and CSS. This class was important because it covers web programming with JavaScript using node.js and express.js language which would allow us to incorporate the MySql database in dynamic websites. As internet speeds continue to rise, a web-based approach is becoming the preferred method for many large companies. Additionally, large platforms such as ServiceNow allow for enterprise client specialists to insert proprietary scripts to enhance base functionality. Javascript specifically continues to remain rather high on the list of languages desired by employers.",
			imgDir: "/images/336images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let imgDir = this.state.imgDir;
		let websites = [
			{
				title:"Image Search",
				img1:"imageSearch.png",
				desc:"This was using the unsplash API to look up images by keyword and giving the user the option to save an image as a favorite. It was nice to integrate a database with a website. While this was something that I had experienced before, I had not done it with node.js. All of my previous server side coding experience was with PHP in the prior to this experience.",
				link:"//anbe19-lab5.herokuapp.com",
				ghLink:"//github.com/Anelon/CST336/tree/lab5",
			},
			{
				title:"Golems Quest (Basic RPG Game)",
				img1:"golemsQuest.png",
				desc:"I was tasked with making a site that has user intractable elements so I decided to make a game. I found this really fun to see how much I could produce quickly, as we were required to make a website that featured user interaction and make a quiz or something similar.",
				link:"//anelon.github.io/rpg2",
				ghLink:"//github.com/Anelon/rpg2",
			},
			{
				title:"Weather Boost Lookup",
				img1:"weatherBoostLookup.png",
				desc:"For this assignment we had to use the openweathermap API. Utilizing the weather API and Pokemon Go (which has a system that matches Pokemon types to weather types) I decided it would be fun to use the PokeAPI to get a few Pokemon of that type and display them to give the user an idea of what Pokemon to look for.",
				link:"//anbe19-hw3.herokuapp.com",
				ghLink:"//github.com/Anelon/CST336/tree/hw3",
			},
			{
				title:"WASM Information",
				img1:"WASMinfo.png",
				desc:"Tasked with making a basic informational site with multiple pages, I decided to research Web Assembly a bit more and see what interesting projects people have made with it. It was really exciting to see how much can be done in a web browser. This technology shows some exciting potential for the future of web apps.",
				link:"//anbe19-hw4.herokuapp.com",
				ghLink:"//github.com/Anelon/CST336/tree/hw4",
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
						This was a really fun class. Having done a little bit of web development previously, I got to have fun and be creative.
					</p>
					{/* requires 2 items in */}
					<Imgs imgs={websites} imgDir={this.state.imgDir} lang={"text"}/>
				</div>
			</Layout>
		);
	}
}

export default CST336;
