import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from "./modules/App";
import About from "./modules/About";
import Repos from "./modules/Repos";
import Repo from "./modules/Repo";
import Home from "./modules/Home";

// 基于browserHistory的history在显示页面URL路径时更加友好;
// 因为IndexRoute组件的意义在于针对入口组件，显示默认的Index组件
// 类似在目录中默认显示index.html文件或者react中目录下默认加载index.js
render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById("app")
);
