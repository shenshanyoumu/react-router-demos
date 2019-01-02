// modules/NavLink.js
import React from "react";
import { Link } from "react-router";

// 注意下面Link组件的activeClassName属性，用于在点击链接时的颜色设置
export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active" />;
  }
});
