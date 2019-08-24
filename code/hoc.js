

    import { withRouter } from "react-router";

    const NavbarWithRouter = withRouter(Navbar);

    import { connect } from "react-redux"

    const ConnectedComment = connect(mapStateToProps, mapDispatchToProps)(CommentList);

    import { withStyles } from 'react-with-styles';

    const styledComponent = withStyles(({ color }) => ({}))(MyComponent);


    const App = withRouter(
        connect(mapStateToProps, mapDispatchToProps)(
            withStyles(({ color }) => ({}))(MyComponent)))

    const enhance = compose(
        withRouter,
        connect(mapStateToProps, mapDispatchToProps),
        withStyles(({ color }) => ({}))
    )
    const betterApp = enhance(MyComponent)



