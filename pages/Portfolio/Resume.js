import { Component } from 'react';

import Videos from '../../components/Video';
import Tabs from '../../components/Tabs';
import Layout, { siteTitle } from '../../components/layout';
import Imgs from '../../components/Imgs';
import PDF from '../../components/PDF'
import Link from 'next/link';

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Resume",
			renderClientSide: false,
		}
	}

	componentDidMount() {
		this.setState({
			renderClientSide: true,
		});
	}

	componentWillUnmount() {
		this.setState({
			renderClientSide: false,
		});
	}

	render() {
		return (
			<Layout location={this.state.title}>
				<div className="fullScroll">
					<p className="desc" style={{textAlign: "center"}}>
						<Link href={`//github.com/Anelon`}>
							<a> <b> Github </b> </a>
						</Link>
						&nbsp;|&nbsp;
						<Link href={`//www.linkedin.com/in/bell-andrew/`}>
							<a> <b> LinkedIn </b> </a>
						</Link>
						&nbsp;|&nbsp;
						<Link href={`//twitter.com/DevAnelon`}>
							<a> <b> Twitter </b> </a>
						</Link>
					</p>
					<div>
						{this.state.renderClientSide && <PDF pdfPath='AndrewBell_ResumeWeb.pdf' />}
					</div>
				</div>
			</Layout>
		);
	}
}
