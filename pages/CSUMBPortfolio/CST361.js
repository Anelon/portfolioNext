import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST338 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 361",
			classDesc: "The Service Learning project gives students an early opportunity to provide professional services and interact with a client.  This will be a valuable experience for making the transition from “student” to “professional”. This will also be an opportunity for students to be creative in initiating their own idea. Students will get what may be their first experience working in a professional setting with those less familiar with the technical side of projects.  Good communication skills will be key to success here.",
			imgDir: "/images/361images/"
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
								{/* make link look better at somepoint */}
								<div class="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											I wanted to make something similar to a project that I find is a really good conection of a lot of the intrductory parts of a language, Pokemon, a very very simplified version of pokemon. This requires the user to select two Pokemon, then 4 moves for each Pokemon. This gives a really good idea for how file input and output works as well as classes and inheritance as it requres at least 3 classes with the base Pokemonclass that holds all of the base stats. A Move class which holds all of the move stats and name. Finally a UserPokemon class that inherites from Pokemon and adds a vector of 4 moves and adds a current health (could be expanded to hold current stats.
										</p>
										<a href="https://github.com/Anelon/CSUMBfolio/tree/master/CST338/PokeBattleAndroid" className="codeLink">Code in Github</a>
									</div>
									<div className="cell medium-6 large-6" >
										<Videos videos={pokeBattleVideo}/>
									</div>
								</div>
							</div>
						</div>
						<div label="Text Slot Game">
							<div>
								{/* make link look better at somepoint */}
								<div class="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											This was an interesting but not that challenging project. We were tasked with making a simple slot game as a way of randomizing strings based on simple percentages. The video included shows much of the aproach took but it was. One of the weird spots I ran into while working on this assignment was the strange stats compared to what should be expected from a slot game (giving the user way too many chances of winning).
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
								{/* make link look better at somepoint */}
								<div class="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											A card game that was made based off of a previous assignment using Java's Swing library. The game is ment to allow the user to select a card and then a pile of cards, it would then verify if the card is playable (the card is one number value above or below the card last played on that pile), then the AI will run it's turn. If both are can not play new hands are delt untill the deck runs out of card.
										</p>
										<a href="https://github.com/Anelon/CST338/blob/master/Assig6/src/MVC.java" className="codeLink">Code in Github</a>
									</div>
									<div className="cell medium-6 large-6" >
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
