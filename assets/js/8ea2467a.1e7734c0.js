"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[4431],{2059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(5893),d=n(1151);const i={sidebar_position:4},s="Badge",c={id:"components/badge",title:"Badge",description:"The Badge is used to place a number or text label in a specific position. It's especially useful for notifications or alerts.",source:"@site/docs/components/badge.md",sourceDirName:"components",slug:"/components/badge",permalink:"/react-native-kitra/docs/next/components/badge",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/docs/components/badge.md",tags:[],version:"current",lastUpdatedAt:1707292754,formattedLastUpdatedAt:"Feb 7, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ComponentsSidebar",previous:{title:"Avatar",permalink:"/react-native-kitra/docs/next/components/avatar"},next:{title:"Button",permalink:"/react-native-kitra/docs/next/components/button"}},o={},l=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"badge",children:"Badge"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Badge"})," is used to place a number or text label in a specific position. It's especially useful for notifications or alerts."]}),"\n",(0,r.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { Badge } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { Avatar, Chip, Icon } from '@tra-tech/react-native-kitra';\nimport { View, StyleSheet } from 'react-native';\nimport Badge from '../../components/Badge';\n\nconst App = () => (\n  <View style={{ alignItems: 'center', flexDirection: 'row' }}>\n    <Badge containerStyle={{ margin: 10, backgroundColor: '#9A9A9A' }} borderStyle=\"rectangular\" size=\"medium\" icon={<AntDesign name=\"apple1\" color=\"#fff\" />} />\n    <Badge containerStyle={{ margin: 10, backgroundColor: '#FF3434' }} borderStyle=\"rectangular\" size=\"medium\" icon={<AntDesign name=\"android1\" color=\"#fff\" />} />\n  </View>\n);\n\nconst style = StyleSheet.create({\n  container: { flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 20 },\n});\n\nexport default App;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prop name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"visible"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["Visibility status.  Default value: ",(0,r.jsx)(t.code,{children:"true"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"label"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:" string | number "})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The number or text to be written in the badge."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"size"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:" 'small' | 'medium'"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["The size of the badge. Default value: ",(0,r.jsx)(t.code,{children:"'medium'"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"containerStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,r.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Additional styles to apply to the badge container."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"labelStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,r.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Additional styles to apply to the children text."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"borderStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"'circular'  | 'rectangular'"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["Specifies the border type of the badge. Default value: ",(0,r.jsx)(t.code,{children:"'circular'"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"icon"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,r.jsx)(t.code,{children:"React.ReactNode"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Icon to be added to badge."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,r.jsx)(t.code,{children:"React.ReactNode"})})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"A required prop that represents the content to display within the Badge component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"position"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"'top-right'| 'top-left' | 'bottom-left' | 'bottom-right'"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["Position the Badge component. Default value: ",(0,r.jsx)(t.code,{children:"'top-right'"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"theme"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UITheme "})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"typography"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UITypography"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The typography to use for the component."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(7294);const d={},i=r.createContext(d);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);