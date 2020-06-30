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
			classDesc: "This class focuses on Database Management and interaction.  Databases are used in most applications in some form and are an important type of external storage that allows for data changes in a program without needing to recompile. Databases used individually are a useful statistic and tracking tool as well as an efficient means of storing program related data.  Most languages have some ability to directly work with databases. The SQL language specifically is important as it is used broadly across multiple industries.",
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
				desc:"This was using the unsplash API to look up images by keyword and giving the user the option to save and image as a favorite. It was nice to integrate a database with a website, while this was something that I had experience with before I had not done it with node.js, all of my previous serverside coding experience was with PHP in the past.",
				link:"//anbe19-lab5.herokuapp.com",
				ghLink:"//github.com/Anelon/CST336/tree/lab5",
			},
			{
				title:"Weather Boost Lookup",
				img1:"weatherBoostLookup.png",
				desc:"For this assignement we had to use the openweathermap API. This API was cool, however they had changed somethings sense the class and I had to make a few changes to get it working again after the fact when preparing it for the portfolio. Having to use the weather API and casually playing Pokemon Go (they have a system where matching Pokemon types to a certain weather type gives them a boost in power) I decided it would be fun to use the PokeAPI to get a few Pokemon of that type and display them to give the user and idea of what Pokemon to look for.",
				link:"//anbe19-hw3.herokuapp.com",
				ghLink:"//github.com/Anelon/CST336/tree/hw3",
			},
			{
				title:"WASM Information",
				img1:"WASMinfo.png",
				desc:"Tasked with making a basic informational site with multiple pages I decided it would be cool to research Web Assembly a bit more and see what cool projects people have made with it. It was really exciting to see how much can be done in a web browser. This technology shows some exciting potential for the future of web apps.",
				link:"//anbe19-hw4.herokuapp.com",
				ghLink:"//github.com/Anelon/CST336/tree/hw4",
			},
			{
				title:"Golem's Quest (Basic RPG Game)",
				img1:"golemsQuest.png",
				desc:"I found this really fun to see how much I could make quickly, as we were required to make a website that used user interaction, while the expectation of the assignment was to make a quiz or something similar I decided to make a basic game.",
				link:"//anelon.github.io/rpg2",
				ghLink:"//github.com/Anelon/rpg2",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					{/* requires 2 items in */}
					<p>
						This was a really fun class, having done a little bit of web development before I got to have fun and be creative.
					</p>
					<Imgs imgs={websites} imgDir={this.state.imgDir} lang={"text"}/>
				</div>
			</Layout>
		);
	}
}

export default CST336;
