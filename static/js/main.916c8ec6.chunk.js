(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,t){e.exports={owmKey:"7921c77339db9c5a51db3edf4b3059c7"}},18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=(a(23),a(2)),l=a(3),s=a(5),m=a(4),d=(a(24),a(16)),u=a.n(d),h=a(17),p=a.n(h),f=a(42);var y=function(e){var t=e.reading,a=e.degreeType,n=new Date,c=1e3*t.dt;n.setTime(c);var o=Math.round(t.main.temp),i=Math.round(5*(o-32)/9),l="owf owf-".concat(t.weather[0].id," owf-5x");return r.a.createElement("div",{className:"col-sm-2 border-color"},r.a.createElement("div",{className:"card bg-info"},r.a.createElement("h5",{className:"card-title"},f(n).format("dddd")),r.a.createElement("p",{className:"card-text text-white"},f(n).format("MMMM Do, h:mm a")),r.a.createElement("i",{className:l}),r.a.createElement("h2",{className:"text-white"},"celsius"===a?i+"\xb0C":o+"\xb0F"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-text "},function(e){var t=e.weather[0].description;return t[0].toUpperCase()+t.slice(1)}(t)))))},g=function(e){var t=e.updateDegree,a=e.degreeType;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",name:"degree-type",id:"celsius",value:"celsius",checked:"celsius"===a,onChange:t}),r.a.createElement("label",{htmlFor:"celsius",className:"form-check-label"},"Celsius")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",name:"degree-type",id:"farenheit",value:"fahrenheit",checked:"fahrenheit"===a,onChange:t}),r.a.createElement("label",{htmlFor:"farenheit",className:"form-check-label"},"Farenheit")))},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={fullData:[],dailyData:[],degreeType:"fahrenheit"},e.updateDegree=function(t){e.setState({degreeType:t.target.value},(function(){return console.log(e.state)}))},e.formatDayCards=function(){return e.state.dailyData.map((function(t,a){return r.a.createElement(y,{reading:t,degreeType:e.state.degreeType,key:a})}))},e.componentDidMount=function(){var t="http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=".concat(u.a.owmKey);p.a.get(t).then((function(t){var a=t.data.list.filter((function(e){return e.dt_txt.includes("06:00:00")}));e.setState({fullData:t.data.list,dailyData:a})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container col-sm-9"},r.a.createElement("h3",{className:"bg-info text-white display-2 jumbotron jumbotron-fluid"},"5-Day Forecast"),r.a.createElement("h6",{className:"display-4 text-dark"},"New York, US"),r.a.createElement(g,{updateDegree:this.updateDegree,degreeType:this.state.degreeType}),r.a.createElement("div",{className:"row justify-content-center"},this.formatDayCards()))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.916c8ec6.chunk.js.map