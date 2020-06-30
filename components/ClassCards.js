import { Component } from 'react';
import Link from 'next/link';

class ClassCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Andrew Bell ILP",
			className: this.props.classe.name,
			available: this.props.classe.hasTaken,
			img: this.props.classe.img,
			link: this.props.classe.link,
			ghLink: this.props.classe.ghLink,
		}
	}

	render() {
		let name = this.state.className;
		let link = "/";
		if(this.state.link) link = this.state.link;
		else {
			let shortName = name.split(' ').slice(0,2).join('');//takes first 2 words of name
			link = "/CSUMBPortfolio/"+shortName;
		}

		let box;
		if(this.state.available) {
			//{/*render={(props) => <Class {...props} handler={this.handler} />}*/}
			box = (
				<Link href={link}>
					<a>
						<div className="Card small fit text-center">
							{this.state.img ? (
								<img className="CardImg" style={{maxHeight:150}} src={this.state.img} />
							) : null }

							<h4 className="text-center">{name}</h4>

							{this.state.ghLink ? (
								<h5>
									<strong>
										<Link href={this.state.ghLink}>
											<a>
												View in Github
											</a>
										</Link>
									</strong>
								</h5>
							) : null }
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
				<ClassCard classe={classe} key={classe.name} />
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
