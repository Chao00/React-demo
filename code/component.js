class MyComponent extends React.Component {
    constructor() {
        this.state = {
            value: ''
        };
    }

    onClick(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <>
                <p>{this.state.value} Component</p>
                <input
                    onChange={e => this.onClick(e)}
                    value={this.state.value}/>
                <p>
                The render method is required for all components. You can think of this as your template.
                </p>
                <hr></hr>
                <p>
                Rendering returns a tree of React component descriptions, which will eventually be turned into HTML
                </p>
            </>
        );
    }
}