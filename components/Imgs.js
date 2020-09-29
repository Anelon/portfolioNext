import { Component } from 'react';
import Link from 'next/link';
import Lowlight from 'react-lowlight';


class Imgs extends Component {    
	constructor(props) {    
		super(props);    

		if(this.props.lang !== "text") {
			//register language
			Lowlight.registerLanguage(this.props.lang, require('highlight.js/lib/languages/' + this.props.lang));
		}

		this.state = {    
			imgs: this.props.imgs,    
			imgDir: this.props.imgDir,
			lang: this.props.lang,    
		}    
	}    

	// update the outer class of code blocks
	componentDidMount() {
		const codeList = document.getElementsByTagName("code");
		for(let elem of codeList) {
			elem.classList.add("gruv");
			elem.classList.remove("hljs");
		}
	}

	render() {    
		let lang = this.state.lang;    
		let imgs = this.state.imgs;
		let imgDir = this.state.imgDir;
		let isCode = this.state.lang !== "text";    
		let size = "medium-6 large-6";    
		let left = true;    

		let imgList = imgs.map(function(src, index){    
			let singleImg = !src.img2; //convert to bool

			let links;
			if(src.link || src.ghLink) {
				links = (
					<p className="text-center">
						{src.link ? (
							<Link href={`${src.link}`}>
								<a>
									<strong>
										View Site
									</strong>
								</a>
							</Link>
						) : null }

						{src.link && src.ghLink ? <br/> : null}

						{src.ghLink ? (
							<Link href={`${src.ghLink}`}>
								<a>
									<strong>
										Code on Github
									</strong>
								</a>
							</Link>
						) : null }
					</p>
				);
			}

			//set up description with links
			let desc = (
				<div>
					<p>{src.desc}</p>
					{links}
				</div>
			);

			//set up image
			let image;    
			if(!singleImg) {
				image = (     
					<div style={{textAlign: "center"}}>    
						<h2 className="text-center">After</h2>    
						<img src={`${imgDir}${src.img1}`} alt={src.img1} />    

						<h2 className="text-center">Before</h2>    
						<img src={`${imgDir}${src.img2}`} alt={src.img2} />    
					</div>    
				);    
			} else {    
				image = (     
					<div style={{textAlign: "center"}}>    
						{/*<h2 className="text-center">Result</h2>*/}
						<img src={`${imgDir}${src.img1}`} alt={src.img1} />    
					</div>    
				);    
			}    

			//set up the code or text side pannel    
			let code;    
			if(src.code) {
				if(isCode)    
					code = (<Lowlight language={lang} value={src.code} prefix="gruv-"/>);    
				else code = (<p>{src.code}</p>);    
			}

			//set up sides of the demo
			//if there is no code put description on oppoisite side of image
			let side1 = (
				<div className={"cell " + size + " holder"}>
					{image}
					{code ? (singleImg && desc) : null}
				</div>
			);
			let side2 = (
				<div className={"cell " + size + " holder"}>
					{code ? (!singleImg && desc) : desc}
					{code}
				</div>
			);

			//set up alternating placeing of code and images
			let place;    
			if(left) { 
				place = (
					<div className="grid-x code">
						{side1}
						{side2}
					</div>
				);
			} else {
				place = (
					<div className="grid-x code">
						{side2}
						{side1}
					</div>
				);
			}
			left = !left;

			return (
				<div className="imageDiv" key={src.title}>
					<h2 className="text-center"><strong>{src.title}</strong></h2>
					{place}
				</div>
			)
		});

		return (
			<div>
				<link
					rel="stylesheet"
					href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css"
				/>
				{imgList}
			</div>
		)
	}
}

export default Imgs;
