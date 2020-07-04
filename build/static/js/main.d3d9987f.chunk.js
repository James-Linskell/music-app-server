(this["webpackJsonpmusic-web-app"]=this["webpackJsonpmusic-web-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/hellify.aede5c89.png"},25:function(e,t,a){e.exports=a(41)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),o=(a(30),a(10)),i=a.n(o),l=a(13),u=a(5),m=a(7),h=a(14),p=a(9),d=a(8),f=a(22),v=a.n(f),b=(a(32),a(16)),g=a(1),E=(a(33),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Result-card"},r.a.createElement("table",{className:"Card-table"},r.a.createElement("tr",{className:"Class-row"},r.a.createElement("td",{rowSpan:"0",className:"Col-art"},r.a.createElement("img",{className:"Album-art",src:this.props.artwork,alt:"album artwork"})),r.a.createElement("div",{style:{opacity:.25,position:"absolute",maxWidth:"21vh",maxHeight:"18vh",overflow:"hidden",textIndent:"-10vh"}},r.a.createElement("img",{src:this.props.artwork,style:{height:"45vh",width:"45vh"},alt:"album art"})),r.a.createElement("td",{className:"Song-info"},r.a.createElement("div",{className:"Info-name"},this.props.name),r.a.createElement("div",{className:"Info"},this.props.album),r.a.createElement("div",{className:"Info"},this.props.artist)),r.a.createElement("div",{style:{backgroundImage:"url("+this.props.artwork+")",opacity:.2}}))))}}]),a}(r.a.Component)),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"populateGrid",value:function(){if(null==this.props.data)return null;for(var e=[],t=0;t<this.props.data.length;t++){var a=this.props.data[t].name,n=this.props.data[t].album,s=this.props.data[t].artist;this.props.data[t].name.length>30&&(a=this.props.data[t].name.substring(0,30)+"..."),this.props.data[t].album.length>20&&(n=this.props.data[t].album.substring(0,20)+"..."),this.props.data[t].artist.length>40&&(s=this.props.data[t].artist.substring(0,40)+"..."),e.push(r.a.createElement("p",{key:t},r.a.createElement(E,{name:a,album:n,artist:s,artwork:this.props.data[t].art})))}return e}},{key:"render",value:function(){return r.a.createElement("div",null,this.populateGrid())}}]),a}(r.a.Component),w=(a(34),a(24)),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",null,"Explore your song"),r.a.createElement("p",{className:"column"},"Discover detailed analytics for your music. Go deeper and find out what Spotify's algorithms say about your songs!")),r.a.createElement("div",{className:"column"},r.a.createElement("h1",null,"Find the right playlist for your song"),r.a.createElement("p",{className:"column"},"Hello!")))))}}]),a}(r.a.Component),N=(a(35),r.a.Component,function e(){Object(u.a)(this,e)});N.fetchData=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r,s,c,o,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",r=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/authenticate");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=4,r();case 4:return s=e.sent,c=s.myToken,o={headers:{Authorization:"Bearer "+c}},t=t.replace(/\\|#|%|{|}|\^|\||`/g,""),console.log(t),"https://api.spotify.com/v1/search?",u="https://api.spotify.com/v1/search?"+("q="+t)+("&type="+a),e.next=15,fetch(u,o);case 15:return m=e.sent,e.next=18,m.json();case 18:return n=e.sent,console.log(n),e.abrupt("return",n);case 21:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var S=N,j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),""!==n.state.searchQuery&&n.waitForFetch()},n.waitForFetch=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){n.setState({results:r.a.createElement("div",{className:"Margin"},"Searching for results...")})}),1e3),e.next=3,S.fetchData(n.state.searchQuery,"track");case 3:for(t=e.sent,a=setTimeout((function(){}),0);a--;)window.clearTimeout(a);if(n.setState({songListRaw:t}),0!==t.tracks.items.length){e.next=10;break}return n.setState({results:r.a.createElement("div",{className:"Margin"},"No results found!")}),e.abrupt("return");case 10:n.generateSongInfo(),n.setState({results:r.a.createElement("div",{className:"Cards"},r.a.createElement(y,{data:n.state.simplifiedSongList}))});case 12:case"end":return e.stop()}}),e)}))),n.state={token:"NO_TOKEN(CLIENT)",songListRaw:null,simplifiedSongList:null,searchQuery:"",currentRoute:null,results:r.a.createElement("div",{className:"Margin"})},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){fetch("/")}},{key:"handleChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"generateSongInfo",value:function(){var e=[];this.state.songListRaw.tracks.items.forEach((function(t){e.push({name:t.name,artist:t.artists[0].name,album:t.album.name,art:t.album.images[1].url})})),this.setState({simplifiedSongList:e})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"Search"},r.a.createElement("header",{className:"Search-header"},r.a.createElement("img",{src:v.a,className:"Search-logo",alt:"logo"}),r.a.createElement("p",null,"Search for a song to get started!"),r.a.createElement("div",{className:"searchbar"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.value,placeholder:"Search..",onChange:this.handleChange}),r.a.createElement("button",{id:"searchclick",type:"submit"},"Search")))),this.state.results,r.a.createElement("div",null,r.a.createElement(g.a,{path:"/",exact:!0,component:this.state.currentRoute}),r.a.createElement(g.a,{path:"/home",component:k}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d3d9987f.chunk.js.map