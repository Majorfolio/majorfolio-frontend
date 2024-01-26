"use strict";(self.webpackChunkmajorfolio=self.webpackChunkmajorfolio||[]).push([[950],{"./src/stories/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"Dropdown",component:__webpack_require__("./src/components/common/Dropdown/index.tsx").Z,tags:["autodocs"]},Default={args:{options:["건국대학교","국민대학교"],category:"학교"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: ['건국대학교', '국민대학교'],\n    category: '학교'\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button}),__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/components/common/theme/index.ts");let StyledButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  background-color: ",";\n  padding: 16px 0 17px 0;\n  border: ",";\n  border-radius: 6px;\n  width: 100%;\n"])),props=>theme.Z.color[props.backgroundColor],props=>props.isOutlined?"1px #4340DB solid;":0);try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/index.styles.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/common/Button/index.styles.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,backgroundColor="main_color/blue_p",isOutlined=!1,onClick=()=>{},...props}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{backgroundColor:backgroundColor,isOutlined:isOutlined,onClick:onClick,...props,children:children})}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},backgroundColor:{defaultValue:{value:"main_color/blue_p"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},isOutlined:{defaultValue:{value:"false"},description:"",name:"isOutlined",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Dropdown});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/components/common/theme/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.tsx"),Button=__webpack_require__("./src/components/common/Button/index.tsx");let StyledDropdownContainer=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  width: 100%;\n"]))),StyledCombobox=(0,styled_components_browser_esm.zo)(Button.Z)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 52px;\n  padding-left: 13px;\n  border: 1px "," solid;\n  border-radius: 6px;\n  background-color: ",";\n  cursor: pointer;\n  /* margin-left: 20px; */\n  /* margin-right: 20px; */\n\n  &:focus {\n    border: 1px "," solid;\n  }\n"])),theme.Z.color["gray/gray100"],theme.Z.color["gray/white"],theme.Z.color["main_color/blue_p"]),StyledDropdownIcon=styled_components_browser_esm.zo.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  padding: 10px;\n  height: 24px;\n"]))),StyledListbox=styled_components_browser_esm.zo.ul(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  width: 100%;\n  box-shadow: 0px 0px 16px rgba(35, 38, 41, 0.04);\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 6px;\n  margin-top: 4px;\n  max-height: 200px;\n  overflow-y: auto;\n\n  & li {\n    cursor: pointer;\n    display: flex;\n    width: 100%;\n    justify-content: start;\n  }\n\n  & li:hover {\n    background-color: ",";\n  }\n\n  & li label {\n    padding: 13px 0 13px 16px;\n    width: 100%;\n    position: relative;\n  }\n\n  & li label input {\n    position: absolute;\n    left: 0;\n    opacity: 0;\n  }\n\n  // scrollbar\n  scrollbar-color: "," transparent;\n  scrollbar-width: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ",";\n    border-radius: 4px;\n  }\n"])),theme.Z.color["gray/white"],theme.Z.color["gray/gray100"],theme.Z.color["gray/gray50"],theme.Z.color["gray/gray150"],theme.Z.color["gray/gray150"]),ListBoxItem=(0,styled_components_browser_esm.zo)(Text.Z)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)([""]))),StyledOption=styled_components_browser_esm.zo.option(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)([""])));try{StyledDropdownContainer.displayName="StyledDropdownContainer",StyledDropdownContainer.__docgenInfo={description:"",displayName:"StyledDropdownContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.styles.tsx#StyledDropdownContainer"]={docgenInfo:StyledDropdownContainer.__docgenInfo,name:"StyledDropdownContainer",path:"src/components/common/Dropdown/index.styles.tsx#StyledDropdownContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledDropdownIcon.displayName="StyledDropdownIcon",StyledDropdownIcon.__docgenInfo={description:"",displayName:"StyledDropdownIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.styles.tsx#StyledDropdownIcon"]={docgenInfo:StyledDropdownIcon.__docgenInfo,name:"StyledDropdownIcon",path:"src/components/common/Dropdown/index.styles.tsx#StyledDropdownIcon"})}catch(__react_docgen_typescript_loader_error){}try{StyledListbox.displayName="StyledListbox",StyledListbox.__docgenInfo={description:"",displayName:"StyledListbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.styles.tsx#StyledListbox"]={docgenInfo:StyledListbox.__docgenInfo,name:"StyledListbox",path:"src/components/common/Dropdown/index.styles.tsx#StyledListbox"})}catch(__react_docgen_typescript_loader_error){}try{ListBoxItem.displayName="ListBoxItem",ListBoxItem.__docgenInfo={description:"",displayName:"ListBoxItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.styles.tsx#ListBoxItem"]={docgenInfo:ListBoxItem.__docgenInfo,name:"ListBoxItem",path:"src/components/common/Dropdown/index.styles.tsx#ListBoxItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledOption.displayName="StyledOption",StyledOption.__docgenInfo={description:"",displayName:"StyledOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.styles.tsx#StyledOption"]={docgenInfo:StyledOption.__docgenInfo,name:"StyledOption",path:"src/components/common/Dropdown/index.styles.tsx#StyledOption"})}catch(__react_docgen_typescript_loader_error){}try{indexstyles.displayName="indexstyles",indexstyles.__docgenInfo={description:"",displayName:"indexstyles",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.styles.tsx#indexstyles"]={docgenInfo:indexstyles.__docgenInfo,name:"indexstyles",path:"src/components/common/Dropdown/index.styles.tsx#indexstyles"})}catch(__react_docgen_typescript_loader_error){}var icons=__webpack_require__("./src/assets/icons/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Dropdown(_ref){let{category,options}=_ref,[selectedSchool,setSelectedSchool]=(0,react.useState)(""),[listBoxToggle,setListboxToggle]=(0,react.useState)(!1),onSchoolInputChange=currentSchool=>{setSelectedSchool(currentSchool),setListboxToggle(previousListboxToggle=>!previousListboxToggle)},dropdownListItem=options.map(option=>(0,jsx_runtime.jsx)("li",{role:"option","aria-selected":"false",onClick:()=>onSchoolInputChange(option),onKeyDown:()=>onSchoolInputChange(option),children:(0,jsx_runtime.jsxs)("label",{htmlFor:option,children:[(0,jsx_runtime.jsx)("input",{id:option,type:"radio",name:"school"}),(0,jsx_runtime.jsx)(Text.Z,{size:16,lineHeight:"lg",color:"gray/gray500",children:option})]})}));return(0,jsx_runtime.jsxs)(StyledDropdownContainer,{children:[(0,jsx_runtime.jsxs)(StyledCombobox,{type:"button",role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"select-dropdown",onClick:()=>setListboxToggle(previousListboxToggle=>!previousListboxToggle),children:[selectedSchool?(0,jsx_runtime.jsx)(Text.Z,{color:"gray/gray900",size:16,lineHeight:"lg",children:selectedSchool}):(0,jsx_runtime.jsx)(Text.Z,{color:"gray/gray400",size:16,lineHeight:"lg",children:category}),(0,jsx_runtime.jsx)(StyledDropdownIcon,{children:(0,jsx_runtime.jsx)(icons.w6,{})})]}),listBoxToggle&&(0,jsx_runtime.jsx)(StyledListbox,{role:"listbox",children:dropdownListItem})]})}try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>StyledText});var _templateObject,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/theme/index.ts");let StyledText=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span(_templateObject||(_templateObject=(0,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n"])),props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.color[props.color],props=>"".concat(props.size,"px"),props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.weight[props.weight],props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.lineHeight[props.lineHeight]);try{StyledText.displayName="StyledText",StyledText.__docgenInfo={description:"",displayName:"StyledText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/index.styles.tsx#StyledText"]={docgenInfo:StyledText.__docgenInfo,name:"StyledText",path:"src/components/common/Text/index.styles.tsx#StyledText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Text}),__webpack_require__("./node_modules/react/index.js");var _index_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Text/index.styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(_ref){let{children,color="gray/black",size=16,weight="md",lineHeight="md",...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index_styles__WEBPACK_IMPORTED_MODULE_1__.q,{color:color,size:size,weight:weight,lineHeight:lineHeight,...props,children:children})}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{color:{defaultValue:{value:"gray/black"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"10"},{value:"12"},{value:"14"},{value:"16"},{value:"18"},{value:"20"},{value:"22"}]}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"md"'}]}},lineHeight:{defaultValue:{value:"md"},description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"lg"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/common/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={color:{"gray/white":"#FFFFFF","gray/grayBG":"#FBFCFD","gray/gray50":"#F2F5F8","gray/gray100":"#EBEEF2","gray/gray150":"#DCE2E7","gray/gray200":"#CED3DA","gray/gray400":"#A3ABB3","gray/gray500":"#767D86","gray/gray600":"#4B535A","gray/gray800":"#2C2F34","gray/gray900":"#232629","gray/black":"#111111","main_color/yellow_p":"#FFA722","main_color/yellow_s":"#FF7A00","main_color/blue_p":"#4340DB","main_color/blue_s":"#302DAC","sub_color/red/p":"#F53165","sub_color/red/s":"#FFABC1","sub_color/red/c":"#FEE0E8","sub_color/orange/p":"#FF7052","sub_color/orange/s":"#FFBCAE","sub_color/orange/c":"#FFDBD3","sub_color/orange/bg":"#FFF1EE","sub_color/yellow/p":"#FFAA00","sub_color/yellow/s":"#FFD88C","sub_color/yellow/c":"#FFE9BF","sub_color/yellow/bg":"#FFF7E6","sub_color/green/p":"#26BF66","sub_color/green/s":"#B3E9CA","sub_color/green/c":"#D4F2E0","sub_color/green/bg":"#EAF9F0","sub_color/blue/p":"#4DA1F7","sub_color/blue/s":"#AFD4FB","sub_color/blue/c":"#D2E7FD","sub_color/blue/bg":"#EEF6FF","sub_color/indigo/p":"#4340DB","sub_color/indigo/s":"#CAC8FA","sub_color/indigo/h":"#DBDBFF","sub_color/indigo/c":"#E3E3FF","sub_color/indigo/bg":"#F0F0FF","sub_color/purple/p":"#7E4FF6","sub_color/purple/s":"#C6B0FF","sub_color/purple/c":"#E5DCFD","sub_color/purple/bg":"#F5F1FF","error/error_color":"#FF4C24"},weight:{bold:700,md:500},lineHeight:{sm:1.2,md:1.4,lg:1.6},buttonWidth:{sm:92,md:154,lg:320,popup:134}}}}]);