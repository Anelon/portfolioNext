import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST338 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 338",
			oldClassDesc: "The Software Design course focused on software development with an intro to the Java language. This course illustrated the software life-cycle and development process. For students that wish to build applications from the ground up, this course was crucial in providing the necessary framework/structure. For those that don’t, understanding the development process will still be beneficial. As Java is a cross platform, language as well as the language of choice for mobile development, the language is especially important to learn.",
			classDesc: "Provides students with the fundamental concepts to develop large-scale software, focusing on the object-oriented programming techniques. Coverage includes the introduction to Java programming language, object-oriented programming, software life cycle and development processes, requirements analysis, and graphical user interface development.",
			imgDir: "/images/338images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let imgDir = this.state.imgDir;
		let pokeBattleVideo = [
			["Run of PokeBattle", "https://youtu.be/NwFBZQ4ytwQ"],
		];
		let slotGameVideo = [
			["Casino Game", "https://youtu.be/kpo8mRvB-5U"],
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					{/* requires 2 items in */}
					<Tabs>
						<div label="Poke Battle">
							<div>
								{/* make link look better at some point */}
								<div className="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											I wanted to make something that is a really good connection of a lot of the introductory parts of a language. So I made a very simplified version of Pokemon. This requires the user to select two Pokemon, then 4 moves for each Pokemon. This shows how file input and output works as well as classes and inheritance. It requires at least 3 classes with the base Pokemon class that holds all of the base stats and a move class which holds all of the move stats and name. Finally a UserPokemon class that inherits from Pokemon and adds a vector of 4 moves and adds a current health (which could be expanded to hold current stats).
										</p>
										<a href="https://github.com/Anelon/CSUMBfolio/tree/master/CST338/PokeBattleAndroid" className="codeLink">Code in Github</a>
									</div>
									<div className="cell medium-6 large-6" >
										<Videos videos={pokeBattleVideo}/>
									</div>
								</div>
							</div>
						</div>
						<div label="Casino Game">
							<div>
								{/* make link look better at some point */}
								<div className="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											We were tasked with making a simple slot game as a way of randomizing strings based on simple percentages. The video included shows much of the approach taken. One of the challenging spots I ran into while working on this assignment was the strange stats compared to what should be expected from a slot game. For example, giving the user way too many chances of winning.
										</p>
										<a href="https://github.com/Anelon/CSUMBfolio/blob/master/CST338/Assig2/Assig2.java" className="codeLink">Code in Github</a>
									</div>
									<div className="cell medium-6 large-6" >
										<Videos videos={slotGameVideo}/>
									</div>
								</div>
							</div>
						</div>
						<div label="Card Game">
							<div>
								{/* make link look better at some point */}
								<div className="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											This project was a  card game based off of a previous assignment using Java's Swing library. The game is meant to allow the user to select a card and then a pile of cards. It would then verify if the card is playable (the card is one number value above or below the card last played on that pile), then the AI will run it's turn. If both are unable to play new hands are dealt until the deck runs out of cards.
										</p>
										<a href="https://github.com/Anelon/CST338/blob/master/Assig6/src/MVC.java" className="codeLink">Code in Github</a>
									</div>
									<div className="cell medium-6 large-6" >
										<h2 className="text-center">Card Game</h2>
										<img src={`${imgDir}cardGame.jpg`} alt="Card Game" />
									</div>
								</div>
							</div>
						</div>
					</Tabs>
				</div>
			</Layout>
											);
	}
}

export default CST338;
