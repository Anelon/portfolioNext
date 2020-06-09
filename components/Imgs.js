import { Component } from 'react';
import Link from 'next/link';
import Lowlight from 'react-lowlight';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript'
import java from 'highlight.js/lib/languages/java'      

// Then register them with lowlight                                  
Lowlight.registerLanguage('python', python);
Lowlight.registerLanguage('javascript', javascript);
Lowlight.registerLanguage('java', java);                            


class Imgs extends Component {    
	constructor(props) {    
		super(props);    
		this.state = {    
			imgs: this.props.imgs,    
			imgDir: this.props.imgDir,
			lang: this.props.lang,    
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
			let singleImg = src.length === 4;    
			let image;    
			let desc = <div><br/><p>{singleImg ? src[3] : src[4]}</p></div>;
			if(!singleImg) {    
				image = (     
					<div>    
						<h2 className="text-center">Before</h2>    
						<img src={`${imgDir}${src[3]}`} alt={src[3]} />    

						<h2 className="text-center">After</h2>    
						<img src={`${imgDir}${src[2]}`} alt={src[2]} />    
					</div>    
				);    
			} else {    
				image = (     
					<div>    
						<h2 className="text-center">Result</h2>    
						<img src={`${imgDir}${src[2]}`} alt={src[2]} />    
					</div>    
				);    
			}    
			//set up the code vs text side pannel    
			let code;    
			if(isCode)    
				code = (<Lowlight language={lang} value={src[1]} />);    
			else code = (<p>{src[1]}</p>);    
			let place;    
			if(left) { 
				place = (
					<div class="grid-x code">
						<div className={"cell " + size + " holder"}>{image}{singleImg && desc}</div>
						<div className={"cell " + size + " holder"}>{code}{!singleImg && desc}</div>
					</div>
				);
			} else {
				place = (
					<div class="grid-x code">
						<div className={"cell " + size + " holder"}>{image}{singleImg && desc}</div>
						<div className={"cell " + size + " holder"}>{code}{!singleImg && desc}</div>
					</div>
				);
			}
			left = !left;

			return (
				<div className="imageDiv">
					<h2 className="text-center"><strong>{src[0]}</strong></h2>
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
