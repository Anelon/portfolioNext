import { Component } from 'react'
import Layout, { siteTitle } from '../../components/layout'
class Portfolio extends Component {    
  constructor(props) {    
    super(props);    
    this.state = {    
      title: "Portfolio"    
    }    
  }    
  render() {    
    return(    
			<Layout location={this.state.title}>
        <div className="valign-center">    
              <h2 className="text-center bold white">    
                <strong>Hello, my name is Andrew Bell,</strong><br/>    
                some of my hobbies are<br/>    
                Rock Climbing, Graphic Design, and Coding.    
              </h2>    
        </div>    
			</Layout>
    );    
  }    
}    
    
export default Portfolio;    
