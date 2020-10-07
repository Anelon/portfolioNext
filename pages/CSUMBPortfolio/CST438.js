import { Component } from 'react';

import Layout, { siteTitle } from '../../components/layout';
import Tabs from '../../components/Tabs';
import { Video } from '../../components/Video';
import Imgs from '../../components/Imgs';

class CST438 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 438",
			oldClassDesc: "This course covers Software Engineering which covers the software development cycle, software testing and implementation. It covers the requirements for software specification and design. In this class, students are to work in a team on a software project. The course will give students the opportunity to work on a project in a more structured environment, applying software engineering and project management principles. This will be an excellent time to identify an individual’s areas of improvement that may hamper them in the professional world.",
			classDesc: "Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.",
			imgDir: "/images/438images/"
		}
	}
	render() {
		let desc = this.state.classDesc;
		let projects = [
			{
				title:"KANA Flights",
				img1:"kana.png",
				desc:"This was a really fun project because we got to work in an enviroment closer to a real work environment. My team was tasked with making the flights microservice for a travel app. I mostly worked on getting the front end and tying it to the backend SQL database.",
                link:"//kana-flight-service.herokuapp.com/",
				ghLink:"//github.com/Nhinds88/Team_KANA_Flight_Reservation_Service",
			},
		];

		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<Video title={"Kana Flights"} src={"https://youtu.be/Bby5tSKTRrA"} />    
					<p className="desc">
						{desc}
						<br/>
						<br/>
                        This class being the last class before the capstone it was a good intro to how large projects are made. Getting used to working with development branches of github and having a production branch was really nice as it gave a way to have something that is in a functioning state always avaiable while still having a good place to push changes. We also worked a lot with code reviews though pull requests and that was very helpful to have someone else look over your code before pushing it to production.
					</p>
					<Imgs imgs={projects} imgDir={this.state.imgDir} lang={"text"}/>
				</div>
			</Layout>
		);
	}
}

export default CST438;
