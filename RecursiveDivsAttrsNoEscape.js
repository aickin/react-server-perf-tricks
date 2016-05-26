import React from "react";

class RecursiveDivs extends React.Component {
	render() {
		const {depth, breadth} = this.props;

		if (depth <= 0) {
			return <div tabIndex="2" hidden={true} width="30">{"abcdefghij"}</div>;
		}

		let children = [];
		for (let i = 0; i < breadth; i++) {
			children.push(<RecursiveDivs key={i} depth={depth-1} breadth={breadth}/>);
		}
		return <div>{children}</div>;
	}

	click() {
		alert("clicked!");
	}

}

export default RecursiveDivs;
