(this.webpackJsonpgithub_search=this.webpackJsonpgithub_search||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},41:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),s=(a(35),a(6)),u=function(e){return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,"  ",e.title," ",r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/about"},"About"))))},o=(a(41),a(10)),i=Object(n.createContext)(),m=function(e,t){switch(t.type){case"SET_ALERT":return t.payload;case"REMOVE_ALERT":return null;default:return e}},E=function(e){var t=Object(n.useReducer)(m,null),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(i.Provider,{value:{alert:l,setAlert:function(e,t){c({type:"SET_ALERT",payload:{msg:e,type:t}}),setTimeout((function(){return c({type:"REMOVE_ALERT"})}),4e3)}}},e.children)},p=Object(n.createContext)(),d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(p),s=Object(n.useContext)(i),u=c.clearUsers,m=c.users,E=s.setAlert;return r.a.createElement("div",null,r.a.createElement("form",{className:"Form",onSubmit:function(e){e.preventDefault(),""===a?E("Please Enter something ","light"):(c.searchUsers(a),l(" "))}},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search Any user",value:a,onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{type:"Submit",className:"btn btn-dark btn-block"})),m.length>0&&r.a.createElement("button",{className:" btn btn-light btn-block",onClick:u}," ","Clear"))},b=function(e){var t=e.user,a=t.login,n=t.avatar_url;return r.a.createElement("div",null,r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:n,alt:" avatar",className:"round-img",style:{width:"60px"}}),r.a.createElement("h3",null," ",a),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(a),className:"btn btn-dark btn-sm my=1"}," More"))))},g={display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"1rem"},f=function(){var e=Object(n.useContext)(p).users;return r.a.createElement("div",{style:g},e.map((function(e){return r.a.createElement(b,{key:e.id,user:e})})))},h=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement(f,null))},v=function(e){var t=e.repo;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,r.a.createElement("a",{href:t.html_url},t.name)))},y=function(){return Object(n.useContext)(p).repos.map((function(e){return r.a.createElement(v,{repo:e,key:e.id})}))},_=function(e){var t=e.match,a=Object(n.useContext)(p),l=a.user,c=a.getUser,u=a.getUserRepos,o=a.repos;Object(n.useEffect)((function(){c(t.params.login),u(t.params.login)}),[]);var i=l.name,m=l.avatar_url,E=l.company,d=l.location,b=l.html_url,g=l.bio,f=l.blog,h=l.login,v=l.followers,_=l.following,N=l.public_repos,x=l.public_gists,O=l.hireable;return r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn btn-light"}," Back to the Search Component"),"Hireable : "," ",O?r.a.createElement("i",{className:"fas fa-check text-success"}):r.a.createElement("i",{className:"fas fa-times-circle text-danger"}),r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{src:m,alt:"Avatar pic",className:"round-img",style:{width:"150px"}}),r.a.createElement("h1",null,i),r.a.createElement("p",null," Location : ",d)),r.a.createElement("div",null,g&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Bio"),r.a.createElement("p",null,g)),r.a.createElement("a",{href:b,className:"btn btn-dark my-1"}," Visit my Github Profile"),r.a.createElement("ul",null,r.a.createElement("li",null,h&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Username : ")," ",h)),r.a.createElement("li",null,E&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Company : ")," ",E)),r.a.createElement("li",null,f&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"My Blog : ")," ",f))))),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"badge badge-primary"}," Followers : ",v),r.a.createElement("div",{className:"badge badge-success"}," Following : ",_),r.a.createElement("div",{className:"badge badge-light"}," public_repos : ",N),r.a.createElement("div",{className:"badge badge-dark"}," public_gists : ",x)),r.a.createElement(y,{repos:o}))},N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Page Not Found"))},x=function(){var e=Object(n.useContext)(i).alert;return null!=e&&r.a.createElement("div",{className:"alert alert-".concat(e.type)},r.a.createElement("i",{className:" fa fa-info-circle"},"$",e.msg))},O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null," This is the About Page"),r.a.createElement("p",null," App to Search Github Users"),r.a.createElement("p",null," Version 1.0.0"))},S=a(7),R=a(9),j=a.n(R),A=a(13),C=a.n(A),w=a(11),U=function(e,t){switch(t.type){case"SEARCH_USERS":return Object(w.a)({},e,{users:t.payload,loading:!1});case"GET_USER":return Object(w.a)({},e,{user:t.payload,loading:!1});case"CLEAR_USERS":return Object(w.a)({},e,{users:[],loading:!1});case"GET_REPOS":return Object(w.a)({},e,{repos:t.payload,loading:!1});case"SET_LOADING":return Object(w.a)({},e,{loading:!0});default:return e}},T=function(e){var t=Object(n.useReducer)(U,{users:[],user:{},repos:[],loading:!1}),a=Object(o.a)(t,2),l=a[0],c=a[1],s=function(){return c({type:"SET_LOADING"})};return r.a.createElement(p.Provider,{value:{users:l.users,user:l.user,repos:l.repos,loading:l.loading,searchUsers:function(e){var t;return j.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),s(),a.next=4,j.a.awrap(C.a.get("https://api.github.com/search/users?q=".concat(e,"&client_id=").concat("c6ce03a703ad7d814658","&client_secret=").concat("ea5429e93664997e97eedb91e9f523c7b69b0f7b")));case 4:t=a.sent,c({type:"SEARCH_USERS",payload:t.data.items});case 6:case"end":return a.stop()}}))},clearUsers:function(){c({type:"CLEAR_USERS"})},getUser:function(e){var t;return j.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return s(),a.next=3,j.a.awrap(C.a.get("https://api.github.com/users/".concat(e,"?client_id=").concat("c6ce03a703ad7d814658","&client_secret=").concat("ea5429e93664997e97eedb91e9f523c7b69b0f7b")));case 3:t=a.sent,c({type:"GET_USER",payload:t.data});case 5:case"end":return a.stop()}}))},getUserRepos:function(e){var t;return j.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return s(),a.next=3,j.a.awrap(C.a.get("https://api.github.com/users/".concat(e,"/repos?per_page=5&sort=created:asc&client_id=").concat("c6ce03a703ad7d814658","&client_secret=").concat("ea5429e93664997e97eedb91e9f523c7b69b0f7b")));case 3:t=a.sent,c({type:"GET_REPOS",payload:t.data,loading:!1});case 5:case"end":return a.stop()}}))}}},e.children)},k=function(){return r.a.createElement(T,null,r.a.createElement(E,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(u,{title:"Git Hub Finder Project "}),r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:h}),r.a.createElement(S.a,{exact:!0,path:"/about",component:O}),r.a.createElement(S.a,{exact:!0,path:"/user/:login",component:_}),r.a.createElement(S.a,{component:N}))))))))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1ff08646.chunk.js.map