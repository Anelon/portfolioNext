import { Component } from 'react';
import Layout from '../../components/layout';
import Tabs from '../../components/Tabs';
import Videos from '../../components/Video';

//import { Document, Page } from 'react-pdf'

class CST300 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 300",
			classDesc: "This class is an extended orientation. It also focuses on ethics and writing applications to prepare students for professional communications. Students are encouraged do develop various skills early on that lend to success (time management, project management, goal setting/achieving, etc.)."
		}
	}
	render() {
		//var name = this.state.title;
		var desc = this.state.classDesc;
		var videos = [
			["Long Version", "https://youtu.be/52cHRIwtUb0"],
			["Short Version", "https://youtu.be/4Rnkn92Qlhg"]
		];
		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					{/*<h1 className="text-center">{name}</h1>*/}
					<p className="desc">{desc}</p>
					<Tabs>
						<div label="Human Augmentation (Final Video)">
							<Videos videos={videos}/>
						</div>
						<div label="Tourism WebDev (Industy Analysis)">
							{/*<h2 className="text-center">Industy Analysis Paper</h2>*/}
							<iframe className="paper" title="Industry Analysis" src="https://docs.google.com/document/d/e/2PACX-1vTBsOkz2iZCbXj2SLgNI6kWct4NFvAOe3X5qNcbxJKpxh0EwaKIEdcrGqMLUwO6R5WFNpO_739i1Z30/pub?embedded=true"></iframe>
						</div>
						<div label="Right to Repair (Ethics Paper)">
							{/*<h2 className="text-center">Right to Repair (Ethics Paper)</h2>*/}
							<iframe className="paper" title="Ethics Paper" src="https://docs.google.com/document/d/e/2PACX-1vTPZvplFWv_Sm2uSu_6kS66VJZDJdryuONY-LBq1ePooFKCpPhsUJXscmEeeTqe9A6v6hg4zz2e3j04/pub?embedded=true"></iframe>
						</div>
					</Tabs>
				</div>
			</Layout>
		)
	}
}

export default CST300;