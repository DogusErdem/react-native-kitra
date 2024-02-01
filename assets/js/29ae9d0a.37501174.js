"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[473],{2099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=r(5893),i=r(1151);const d={sidebar_position:14},s="Pagerview",o={id:"components/pagerview",title:"Pagerview",description:'The PagerView component is that is designed to create a tab-based view with a sliding indicator on top of it.  It uses the "react-native-pager-view" library to handle animations.',source:"@site/docs/components/pagerview.md",sourceDirName:"components",slug:"/components/pagerview",permalink:"/react-native-kitra/docs/components/pagerview",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/docs/components/pagerview.md",tags:[],version:"current",lastUpdatedAt:1706775982,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"ComponentsSidebar",previous:{title:"Modal",permalink:"/react-native-kitra/docs/components/modal"},next:{title:"Progress Bar",permalink:"/react-native-kitra/docs/components/progress-bar"}},c={},l=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pagerview",children:"Pagerview"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"PagerView"}),' component is that is designed to create a tab-based view with a sliding indicator on top of it.  It uses the "react-native-pager-view" library to handle animations.']}),"\n",(0,n.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { PagerView } from '@tra-tech/react-native-kitra';\n \n"})}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { PagerView } from '@tra-tech/react-native-kitra';\n\nimport { Text, View, StyleSheet } from 'react-native';\n\nconst App = () => (\n  <View style={{  flex: 1 }}>\n    <PagerView containerStyle={{ marginTop: 10 }} >\n      <View key=\"React\" style={style.itemContainer}>\n        <Text>Pager</Text>\n      </View>\n      <View key=\"Native\" style={style.itemContainer}>\n        <Text>View</Text>\n      </View>\n      <View key=\"Kitra\" style={style.itemContainer}>\n        <Text>Component</Text>\n      </View>\n    </PagerView>\n  </View>\n);\n\nconst style = StyleSheet.create({\n  itemContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },\n});\n\nexport default App;\n \n"})}),"\n",(0,n.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prop name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"children"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,n.jsx)(t.code,{children:"React.ReactNode"})})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"A required prop that represents the content to display within the PagerView component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"containerStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional styles to apply to the pager view container."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pageContainerStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional styles to apply to the page container."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headerTextColor"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"{select: string,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" default: string}"})]}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Text colors of header text."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headerSliderStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Style of header slider."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headerContainerStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Style of header slider container."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headerTextStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Text style of header text."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"injectPagerRef"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["An optional boolean prop that determines whether to inject the PagerView reference into each child component's props. Default value: ",(0,n.jsx)(t.code,{children:"false"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"showDivider"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["Determines whether the divider is shown or not. Default value:",(0,n.jsx)(t.code,{children:"true"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dividerStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Style of divider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dividerColor"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Color of divider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"icons"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"React.ReactElement<typeof "}),"    ",(0,n.jsx)(t.a,{href:"http://localhost:3000/docs/components/icon",children:(0,n.jsx)(t.code,{children:"Icon>"})})," []"]}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Icon list for header texts."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"theme"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UITheme "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"typography"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UITypography"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The typography to use for the component."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(7294);const i={},d=n.createContext(i);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);