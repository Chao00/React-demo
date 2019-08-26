class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentDidUpdate() {
        // console.log('componentDidUpdate')
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.whatever !== this.props.whatever){

        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // return true if want it to update
        // return false if not
        return true
    }
  
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, React!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }