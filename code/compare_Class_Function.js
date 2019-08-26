// Class Component
import React from "react";
class ClassSyntax extends React.Component {
  render() {
    return (
        <div>
            Hello World!
        </div>
    );
  }
}
ReactDOM.render(
    <ClassSyntax />,
    document.getElementById("root")
);

//Functional Component
function FunctionalComponentSyntax(props) {
    return (
        <div>
            Hello World!
        </div>
    );
}
ReactDOM.render(
    <FunctionalComponentSyntax />,
    document.getElementById("root")
);