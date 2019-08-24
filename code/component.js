class MyComponent extends React.PureComponent {
    constructor() {
        this.state = {
            value: ''
        };
        onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        //window.document.title = `${this.state.value} Component`
        document.title = "WHY React"
    }

    componentDidUpdate() {
        //window.document.title = `${this.state.value} Component`
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
            </>
        );
    }
}