import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST338 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 311",
			classDesc: "The Software Design course focuses on software development with an intro to the Java language.  This course illustrates the software life-cycle and development process. For students that wish to build applications from the ground up, this course will be crucial in providing the necessary framework/structure. For those that don’t, understanding the development process will still be beneficial. As Java is a cross platform language as well as the language of choice for mobile development, the language is especially important to learn.",
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
						<div label="UDP Pinger">
							<div>
								{/* make link look better at somepoint */}
								<div class="grid-x grid-margin-x">
									<div className="cell medium-6 large-6" >
										<p>
											In this project I was the team leader which means I was in charge of coordinating who does which part of the assignement and write up the documentation. This is a client that sends a ping message to a UDP server which simulates dropped packages. It then calculates Sample RTT, Estimated RTT, the Timeout Interval, and uses that to calculate the minimum, max and average round trip time.
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