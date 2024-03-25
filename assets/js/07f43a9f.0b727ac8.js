"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[5358],{2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(5893),i=n(1151);const s={sidebar_position:18},o="Speed Dial",d={id:"components/speed-dial",title:"Speed Dial",description:"Speed Dial component is a menu of related actions that allows a user to perform an action. These separations help to improve the user experience by not taking users away from the main separation for a specific action.",source:"@site/docs/components/speed-dial.md",sourceDirName:"components",slug:"/components/speed-dial",permalink:"/react-native-kitra/docs/next/components/speed-dial",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/docs/components/speed-dial.md",tags:[],version:"current",lastUpdatedAt:1711353219,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"ComponentsSidebar",previous:{title:"Slider",permalink:"/react-native-kitra/docs/next/components/slider"},next:{title:"Swipe",permalink:"/react-native-kitra/docs/next/components/swipe"}},c={},a=[{value:"Import",id:"import",level:3},{value:"Import",id:"import-1",level:3},{value:"Props",id:"props",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"speed-dial",children:"Speed Dial"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Speed Dial"})," component is a menu of related actions that allows a user to perform an action. These separations help to improve the user experience by not taking users away from the main separation for a specific action."]}),"\n",(0,r.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { SpeedDial } from '@tra-tech/react-native-kitra';\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"import-1",children:"Import"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { SpeedDial, Icon } from \'@tra-tech/react-native-kitra\';\n\nconst App = () => (\n\n  <SpeedDial\n    variant="flat"\n    baseItemBackground="#8973CD"\n    items={[\n      { icon: <Icon type="material-community" name="penguin" size={20} />, title: \'Penguin\', backgroundColor: \'blue\' },\n      { icon: <Icon type="material-community" name="close" size={20} />, title: \'Close\', backgroundColor: \'pink\' },\n      { icon: <Icon type="material-community" name="plus" size={20} />, title: \'Plus\', titleColor: \'red\' },\n      { icon: <Icon type="material-community" name="penguin" size={20} />, onPress: () => console.log(\'pressed\') },\n      { icon: <Icon type="material-community" name="penguin" size={20} /> },\n    ]}\n  />\n);\n\nexport default App;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prop name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"items"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"Array<{"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"icon?: React.ReactNode,"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:" title?:string,"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:" titleColor?:string,"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:" backgroundColor?:string,"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:" onPress?: ()=> void}>"})]}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"Items to be listed in the speed dial."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"baseItemBackground"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["Background color of base item. Default value: ",(0,r.jsx)(t.code,{children:"theme.tertiary"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"variant"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:" 'flat' | 'spread' "})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["Represents the opening animation. Default value: ",(0,r.jsx)(t.code,{children:"'flat'"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onChange"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(event:boolean)=>void "})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Returns whether the component is on or off."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"baseItemIcon"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,r.jsx)(t.code,{children:"React.ReactNode"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Icon of base item."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"theme"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UITheme "})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"typography"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UITypography"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The typography to use for the component."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);