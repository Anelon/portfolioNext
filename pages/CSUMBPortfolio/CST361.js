import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST361 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 361",
			classDesc: 'The Service Learning project gives students an early opportunity to provide professional services and interact with a client. This was a valuable experience for making the transition from “student” to “professional”. This was also an opportunity for students to be creative in initiating their own ideas. Students get what may be their first experience working in a professional setting with those less familiar with the technical side of projects. Good communication skills were key to success here.',
			imgDir: "/images/361images/"
		}
	}
	render() {
		const desc = this.state.classDesc;
		const imgDir = this.state.imgDir;
		const documentary = [
			["Service Learning Documentary", "https://youtu.be/9HbUxkHxgis"],
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					{/* requires 2 items in */}
					<div label="Documentary">
						<div>
							{/* make link look better at some point */}
							<div class="grid-x grid-margin-x">
								<div className="cell medium-12 text-center background">
									<h2>Service Learning</h2>
								</div>
								<div className="cell medium-6 large-6" >
									<p>
										This class was a way to reach out to the community and get involved in a project. Since I was working as a tutor, I took the opportunity to do more to help people learn about computer science in a fun way. There was a game development class going on at the time so I offered to help with that. This was a great experience as teaching others is another form of learning, and other points of view always breed new ideas. This was a really fun learning experience as I got to work more with the Unreal engine, and it gave me a great introduction to the linear algebra that is used in rendering and game development.
									</p>
								</div>
								<div className="cell medium-6 large-6" >
									<Videos videos={documentary}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default CST361;
