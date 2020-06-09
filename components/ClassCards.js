import { Component } from 'react';
import Link from 'next/link';

class ClassCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Andrew Bell ILP",
			className: this.props.className,
			available: this.props.available,
			thumbnail: this.props.thumbnail,
			//vidsrc: this.props.src,
		}
	}
	render() {
		let name = this.state.className;
		let shortName = name.split(' ').slice(0,2).join('');//takes first 2 words of name
		let box;
		if(this.state.available) {
			//{/*render={(props) => <Class {...props} handler={this.handler} />}*/}
			box = (
				<Link href={"/CSUMBPortfolio/"+shortName}>
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
				<ClassCard className={classe.name} available={classe.hasTaken} thumbnail={classe.thumbnail} />
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
