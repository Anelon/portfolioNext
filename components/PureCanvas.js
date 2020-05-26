import { Component } from 'react';

class PureCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
        }
    }
    shouldComponentUpdate() {
        return false;
    }

    render() {
        //todo update width and height to be full
        return (
            <canvas
                width={this.state.width}
                height={this.state.height}
                ref={node =>
                        node ? this.props.contextRef(node.getContext('2d')) : null
                }
            />
        );
    }
}

export default PureCanvas;
