import { Component } from 'react';
import Link from 'next/link';

class ClassCard extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.classe);
		this.state = {
			title: "Andrew Bell ILP",
			className: this.props.classe.name,
			available: this.props.classe.hasTaken,
			thumbnail: this.props.classe.thumbnail,
			link: this.props.classe.link,
			//vidsrc: this.props.src,
		}
	}
	render() {
		let name = this.state.className;
		let shortName = name.split(' ').slice(0,2).join('');//takes first 2 words of name
		let link = "/CSUMBPortfolio/"+shortName;
		if(this.state.link) link = this.state.link;
		console.log(this.state.link);
		let box;
		if(this.state.available) {
			//{/*render={(props) => <Class {...props} handler={this.handler} />}*/}
			box = (
				<Link href={link}>
					<a>
						<div className="Card small fit">
							<h4 className="text-center">{name}</h4>
						</div>
					</a>
				</Link>
			);
		} else {
			box = (
				<div className="deadCard small fit">
					<h4 className="text-center">{name}</h4>
				</div>
			);
		}
		return (
			<div className="fit">
				{box}
			</div>
		)
	}
}

class ClassCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Andrew Bell ILP",
			classes: this.props.classes
		}
	}
	render() {
		let classList = this.state.classes.map(function(classe, index){
			return (
				<ClassCard classe={classe} />
			)
		});
		return (
			<div className="scroll">
				{classList}
			</div>
		)
	}
}

export default ClassCards;
