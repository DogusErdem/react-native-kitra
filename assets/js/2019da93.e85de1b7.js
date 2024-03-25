"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[2694],{6772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=t(5893),r=t(1151);const o={sidebar_position:19},s="Swipe",c={id:"components/swipe",title:"Swipe",description:"The Swipe component is a swipeable container for content with left and/or right swipe actions.",source:"@site/versioned_docs/version-1.x/components/swipe.md",sourceDirName:"components",slug:"/components/swipe",permalink:"/react-native-kitra/docs/components/swipe",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/versioned_docs/version-1.x/components/swipe.md",tags:[],version:"1.x",lastUpdatedAt:1711353219,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"ComponentsSidebar",previous:{title:"Speed Dial",permalink:"/react-native-kitra/docs/components/speed-dial"},next:{title:"Switch",permalink:"/react-native-kitra/docs/components/switch"}},d={},a=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3},{value:"Types",id:"types",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"swipe",children:"Swipe"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Swipe"})," component is a swipeable container for content with left and/or right swipe actions."]}),"\n",(0,i.jsx)(n.h3,{id:"import",children:"Import"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Swipe } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Swipe, Icon } from '@tra-tech/react-native-kitra';\nimport { TouchableOpacity, Image } from 'react-native';\n\nconst App = () => (\n  <Swipe\n    variant=\"radius\"\n    rightActions={[\n      {\n        icon: <Icon type=\"feather\" name=\"send\" size={18} color=\"white\" />,\n        style: {\n          backgroundColor: '#67A7C1',\n          width: 82,\n        },\n      },\n      {\n        text: 'Sil',\n        style: {\n          backgroundColor: 'red',\n        },\n      },\n      {\n        icon: <Icon type=\"evilicon\" name=\"trash\" size={18} color=\"white\" />,\n        text: 'Di\u011fer',\n        style: {\n          backgroundColor: 'orange',\n        },\n      },\n    ]}\n    leftAction={{\n      icon: <Icon type=\"evilicon\" name=\"trash\" size={18} color=\"white\" />,\n      text: 'Sil',\n      style: {\n        backgroundColor: '#FF3434',\n      },\n    }}\n  >\n    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: 'white', height: 82 }}>\n      <Image style={{ height: 82, width: '100%', overflow: 'hidden' }} source={{ uri: 'https://freepngdownload.com/image/thumb/tiger-cat-png.png' }} />\n    </TouchableOpacity>\n  </Swipe>\n);\n\nexport default App;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"children"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/react-node",children:(0,i.jsx)(n.code,{children:"React.ReactNode"})})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["The content to be wrapped by the ",(0,i.jsx)(n.code,{children:"Swipeable"})," component."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"'radius'|"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.code,{children:"'no-radius'  "})]}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["Determines whether to use a rounded border radius on the component. Default value: ",(0,i.jsx)(n.code,{children:"'no-radius'"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rightActions"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<ActionProps>"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["An array of objects representing the right swipe actions to be rendered. Each object can optionally contain a ",(0,i.jsx)(n.code,{children:"text"})," string and can optionally contain an ",(0,i.jsx)(n.code,{children:"icon"})," React component."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"leftAction"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ActionProps"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["An object representing the left swipe action to be rendered. The object can optionally contain a ",(0,i.jsx)(n.code,{children:"text"})," string and can optionally contain an ",(0,i.jsx)(n.code,{children:"icon"})," React component."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"theme"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"UITheme"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"An object containing colors and other styling properties used by the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"typography"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"UITypography"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"An object containing font sizes and styles used by the component."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ActionProps"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"text?: string, style?: StyleProp<ViewStyle>, icon?: React.ReactNode,"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.code,{children:" textStyle?: StyleProp<TextStyle>, onPress: (ref:React.RefObject<Swipeable>)=>void"})]})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);