(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),m=(n(12),n(0)),d=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:new Date},e.timer=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){e.setState({time:new Date}),console.info(e.state.time.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.time,t=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.righClickHandler=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.leftClickHandler=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.righClickHandler),document.addEventListener("click",this.leftClickHandler)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,c=n.clockName,a=n.hasClock;c!==t.clockName&&a&&console.debug("Renamed from ".concat(t.clockName," to ").concat(c))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.righClickHandler)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsx)(d,{clockName:t})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.38bdafae.chunk.js.map