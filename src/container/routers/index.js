/** 路由页 - 真正意义上的根组件，已挂载到redux上，可获取store中的内容 **/

/** 所需的各种插件 **/
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// antd的多语言
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";

// import {createBrowserHistory as createHistory} from "history/"; // URL模式的history
import { createHashHistory as createHistory } from "history"; // 锚点模式的history

import Loadable from "react-loadable"; // 用于代码分割时动态加载模块

/** 普通组件 **/
import Menu from "../../component/menu";
import Footer from "../../component/footer";
import Loading from "../../component/loading"; // loading动画，用于动态加载模块进行中时显示

import "./index.less";

/** 下面是代码分割异步加载的方式引入各页面 webpackChunkName设置生成后的js名字 **/
const Home = Loadable({
  loader: () => import(/* webpackChunkName:'home' */ "../home"),
  loading: Loading, // 自定义的Loading动画组件
  timeout: 10000, // 可以设置一个超时时间(s)来应对网络慢的情况（在Loading动画组件中可以配置error信息）
});
const Test = Loadable({
  loader: () => import(/* webpackChunkName:'test' */ "../test"),
  loading: Loading,
});
const TestClass = Loadable({
  loader: () => import(/* webpackChunkName:'testclass' */ "../testclass"),
  loading: Loading,
});
const Features = Loadable({
  loader: () => import(/* webpackChunkName:'features' */ "../features"),
  loading: Loading,
});
const List = Loadable({
  loader: () => import(/* webpackChunkName:'list' */ "../list"),
  loading: Loading,
});
const Posts = Loadable({
  loader: () => import(/* webpackChunkName:'posts' */ "../posts"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import(/* webpackChunkName:'notfound' */ "../notfound"),
  loading: Loading,
});

const history = createHistory(); // 实例化history对象

/** 组件 **/
function RootRouterContainer(props) {
  // 在组件加载完毕后触发
  useEffect(() => {
    // 可以手动在此预加载指定的模块：
    //Features.preload(); // 预加载Features页面
    //Test.preload(); // 预加载Test页面
    // 也可以直接预加载所有的异步模块
    // Loadable.preloadAll();
  }, []);

  /** 简单权限控制 **/
  function onEnter(Component, props) {
    // 例子：如果没有登录，直接跳转至login页
    // if (sessionStorage.getItem('userInfo')) {
    //   return <Component {...props} />;
    // } else {
    //   return <Redirect to='/login' />;
    // }
    return <Component {...props} />;
  }

  return (
    <ConfigProvider locale={zhCN}>
      <>
        <Router history={history}>
          <Route
            render={() => {
              return (
                <div className="boss">
                  <button id="app-update" className="app-update">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z" />
                      <path
                        d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
                      />
                    </svg>
                  </button>
                  <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route
                      path="/home"
                      render={(props) => onEnter(Home, props)}
                    />
                    <Route
                      path="/features"
                      render={(props) => onEnter(Features, props)}
                    />
                    <Route
                      path="/list"
                      render={(props) => onEnter(List, props)}
                    />
                    <Route
                      path="/posts"
                      render={(props) => onEnter(Posts, props)}
                    />
                    <Route
                      path="/test"
                      render={(props) => onEnter(Test, props)}
                    />
                    <Route
                      path="/testclass"
                      render={(props) => onEnter(TestClass, props)}
                    />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              );
            }}
          />
        </Router>
      </>
    </ConfigProvider>
  );
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    actions: {},
  })
)(RootRouterContainer);
