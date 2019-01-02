import React from "react";

export default React.createClass({
  render() {
    // this.props.params用于动态路由时保存路径对象中的键值对
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    );
  }
});
