"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[75],{1465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=n(5893),s=n(1151);const i={sidebar_position:17},d="Slider",o={id:"components/slider",title:"Slider",description:"The Slider component is a customizable slider component that allows users to select a value within a given range by sliding a button along a horizontal bar.",source:"@site/versioned_docs/version-1.x/components/slider.md",sourceDirName:"components",slug:"/components/slider",permalink:"/react-native-kitra/docs/components/slider",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/versioned_docs/version-1.x/components/slider.md",tags:[],version:"1.x",lastUpdatedAt:1711353219,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"ComponentsSidebar",previous:{title:"Radio Button",permalink:"/react-native-kitra/docs/components/radio-button"},next:{title:"Speed Dial",permalink:"/react-native-kitra/docs/components/speed-dial"}},l={},a=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"slider",children:"Slider"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Slider"})," component is a customizable slider component that allows users to select a value within a given range by sliding a button along a horizontal bar."]}),"\n",(0,r.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { Slider } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { Slider } from '@tra-tech/react-native-kitra';\nimport { View } from 'react-native';\n\nconst App = () => (\n  <View>\n    <Slider onChangeEnd={e => console.log(e)} showPercentage value={20} />\n  </View>\n);\n\nexport default App;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prop Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"showPercentage"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Determines whether to show the percentage indicator above the slider button."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onChangeEnd"}),(0,r.jsx)(t.td,{children:"(value: number) => void"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"A callback function that is called when the user releases the slider button. The selected value is passed as an argument to the function."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The initial value of the slider. Should be a value between 0 and 100, representing the percentage of the slider's width."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"buttonStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,r.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Additional styles to apply to the slider button."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"barStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,r.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Additional styles to apply to the slider bar."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"progressStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,r.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Additional styles to apply to the progress bar."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"theme"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UITheme"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The theme to use for the component."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var r=n(7294);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);