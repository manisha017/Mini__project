(this.webpackJsonpipod=this.webpackJsonpipod||[]).push([[0],{14:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(8),a=s.n(c),l=(s(14),s(2)),d=s(3),o=s(5),r=s(4),h=s(0),j=function(e){return Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("div",{className:"Select",onClick:e.selectIsClick,children:Object(h.jsx)("h3",{children:"Press"})}),Object(h.jsx)("div",{className:"Menu",onClick:e.displayMenu,children:Object(h.jsx)("i",{className:"fas fa-bars"})}),Object(h.jsx)("div",{className:"Play",children:Object(h.jsx)("i",{className:"fas fa-play"})}),Object(h.jsx)("div",{className:"Forward",children:Object(h.jsx)("i",{className:"fas fa-forward"})}),Object(h.jsx)("div",{className:"Backward",onClick:e.backwardClicked,children:Object(h.jsx)("i",{className:"fas fa-backward"})})]})},m=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=this.props.OptionList;return Object(h.jsxs)(i.a.Fragment,{children:[t.map((function(t,s){return Object(h.jsx)("div",{className:e.props.Selected===s?"Selected":"",children:Object(h.jsx)("p",{children:t})},s)})),3===t.length?Object(h.jsx)("div",{style:{color:"red"},children:Object(h.jsxs)("p",{style:{fontSize:"13px",padding:"5px"},children:[' click "',Object(h.jsx)("i",{className:"fas fa-backward"}),'" to go back']})}):""]})}}]),s}(i.a.Component),p=function(e){return Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("div",{className:"Menu-heading",children:Object(h.jsx)("h3",{children:"IPOD"})}),Object(h.jsx)(m,{OptionList:e.OptionList,Selected:e.Selected})]})},u={flowcover:{textAlign:"center",width:"100%",height:"60%",backgroundColor:"white",zIndex:"1",position:"absolute",top:0,left:0,borderTopLeftRadius:"37px",borderTopRightRadius:"37px"}},b=function(){return Object(h.jsx)("div",{style:u.flowcover,children:Object(h.jsx)("h3",{id:"flowcover-heading",children:" FlowCover"})})},g={games:{textAlign:"center",width:"100%",height:"60%",backgroundColor:"white",zIndex:"1S",position:"absolute",top:0,left:0,borderTopLeftRadius:"37px",borderTopRightRadius:"37px"},DiceImg:{width:100,height:100},divTwo:{marginTop:"10vh"}},O=function(){return Object(h.jsx)("div",{style:g.games,children:Object(h.jsxs)("div",{style:g.divTwo,children:[Object(h.jsx)("img",{style:g.DiceImg,alt:"Game",src:"https://image.flaticon.com/icons/png/512/246/246569.png"}),Object(h.jsx)("h3",{children:"Games"})]})})},x={setting:{textAlign:"center",width:"100%",height:"60%",backgroundColor:"white",zIndex:"1",position:"absolute",top:0,left:0,borderTopLeftRadius:"37px",borderTopRightRadius:"37px"},SettingImg:{width:100,height:100},DivTwo:{marginTop:"10vh"}},f=function(){return Object(h.jsx)("div",{style:x.setting,children:Object(h.jsxs)("div",{style:x.DivTwo,children:[Object(h.jsx)("img",{style:x.SettingImg,alt:"setting",src:"https://image.flaticon.com/icons/png/512/126/126472.png"}),Object(h.jsx)("h3",{children:" Setting "})]})})},v=s(9),w=s.n(v),_=s(7),S=s.n(_),k=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).displayMenu=function(){document.getElementsByClassName("menu")[0].classList.contains("width-50")?S()(".menu").removeClass("width-50"):S()(".menu").addClass("width-50")},e.selectIsClick=function(){if(console.log("option",e.state.Selected),1===e.state.Selected&&4==e.state.mainList.length)return e.setState({mainList:e.state.songList,Option:-1,Selected:0}),void(e.temp_selected=0);e.setState({Option:e.state.Selected,Selected:0}),e.temp_selected=0,e.displayMenu()},e.backwardClicked=function(){3===e.state.mainList.length&&document.getElementsByClassName("menu")[0].classList.contains("width-50")&&e.setState({mainList:e.state.gen_sub_menu,Selected:0})},e.temp_change_in_angle=0,e.temp_selected=0,e.state={Option:-1,mainList:["Games","Music","CoverFlow","Setting"],Selected:0,songList:["All Songs","Albums","Artists"],gen_sub_menu:["Games","Music","CoverFlow","Setting"]},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;new w.a.Region(document.getElementsByClassName("button-container")[0]).bind(document.getElementsByClassName("button-container")[0],"rotate",(function(t){if(document.getElementsByClassName("menu")[0].classList.contains("width-50")){var s=t.detail.distanceFromLast;e.temp_change_in_angle+=s,e.temp_change_in_angle>60?(e.temp_selected++,e.temp_selected=e.temp_selected%e.state.mainList.length,e.setState({Selected:e.temp_selected}),e.temp_change_in_angle=0):e.temp_change_in_angle<-60&&(e.temp_selected--,-1===e.temp_selected&&(e.temp_selected=e.state.mainList.length-1),e.temp_selected=e.temp_selected%e.state.mainList-1,e.setState({Selected:e.temp_selected}),e.temp_change_in_angle=0)}}))}},{key:"render",value:function(){this.state.Option;return Object(h.jsxs)("div",{id:"screen",children:[Object(h.jsxs)("div",{className:"rest-screen",children:[Object(h.jsx)(p,{OptionList:this.state.mainList,Selected:this.state.Selected}),0===this.state.Option&&4===this.state.mainList.length?Object(h.jsx)(O,{}):"",2===this.state.Option&&4===this.state.mainList.length?Object(h.jsx)(b,{}):"",3===this.state.Option&&4===this.state.mainList.length?Object(h.jsx)(f,{}):""]}),Object(h.jsx)("div",{class:"btn-area",children:Object(h.jsx)(j,{displayMenu:this.displayMenu,selectIsClick:this.selectIsClick,backwardClicked:this.backwardClicked})})]})}}]),s}(i.a.Component),y=function(e){return Object(h.jsx)("div",{className:"Ipod",children:Object(h.jsx)(k,{})})},C=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(y,{})})}}]),s}(i.a.Component);a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f9633cd4.chunk.js.map