(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{N8DM:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var r=n(a("QL1J"));t.ThemeToggler=r.default},QL1J:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("PJYZ")),l=n(a("VbXa")),o=n(a("lSNA")),i=n(a("q1tI")),s=n(a("17x9")),c=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,(0,o.default)((0,r.default)(t),"state",{theme:null}),t}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);c.propTypes={children:s.default.func.isRequired};var u=c;t.default=u},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),r=a.n(n),l=a("q1tI"),o=a.n(l),i=a("mwIZ"),s=a.n(i),c=a("TJpk"),u=a.n(c),d=(a("f3/d"),a("9eSz")),m=a.n(d),h=a("3dzV"),p=a.n(h),f=function(e){var t=e.data;return o.a.createElement("div",{className:p.a.hero},o.a.createElement(m.a,{className:p.a.heroImage,alt:t.name,fluid:t.heroImage.fluid}),o.a.createElement("div",{className:p.a.heroDetails},o.a.createElement("h3",{className:p.a.heroHeadline},t.name),o.a.createElement("p",{className:p.a.heroTitle},t.title),o.a.createElement("p",null,t.shortBio.shortBio)))},g=a("Bl7J"),v=a("aWpR"),w=a("N8DM");o.a.Component;a.d(t,"pageQuery",(function(){return T}));var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.allContentfulBlogPost.edges"),a=s()(this,"props.data.allContentfulPerson.edges")[0];return o.a.createElement(g.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(u.a,{title:e}),o.a.createElement(f,{data:a.node}),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"section-headline"},"Recent articles"),o.a.createElement("ul",{className:"article-list"},t.map((function(e){var t=e.node;return o.a.createElement("li",{key:t.slug},o.a.createElement(v.a,{article:t}))}))))))},t}(o.a.Component),T=(t.default=E,"1561776064")}}]);
//# sourceMappingURL=component---src-pages-index-js-9bf8bd730b88be507b51.js.map