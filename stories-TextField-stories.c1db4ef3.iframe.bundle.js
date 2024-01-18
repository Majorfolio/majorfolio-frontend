"use strict";(self.webpackChunkmajorfolio=self.webpackChunkmajorfolio||[]).push([[412],{"./src/stories/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Password:()=>Password,PasswordDisabled:()=>PasswordDisabled,Title:()=>Title,TitleDisabled:()=>TitleDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextField_stories}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/components/common/theme/index.ts"),index_styles=__webpack_require__("./src/components/common/Text/index.styles.tsx");let StyledTextField=(0,styled_components_browser_esm.zo)(index_styles.q).attrs({as:"input"})(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding: 13px 16px;\n  border: none;\n  border-radius: 6px;\n  background-color: ",";\n  width: 288px;\n  border-radius: 6px;\n"])),theme.Z.color["gray/grayBG"]),StyledButton=styled_components_browser_esm.zo.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  border: none;\n  padding: 10px;\n  background-color: transparent;\n  line-height: 0;\n  &:hover {\n    cursor: pointer;\n  }\n  right: 0px;\n"]))),StyledContainer=styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  box-sizing: content-box;\n"])));try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextField/index.styles.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/common/TextField/index.styles.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledContainer.displayName="StyledContainer",StyledContainer.__docgenInfo={description:"",displayName:"StyledContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextField/index.styles.tsx#StyledContainer"]={docgenInfo:StyledContainer.__docgenInfo,name:"StyledContainer",path:"src/components/common/TextField/index.styles.tsx#StyledContainer"})}catch(__react_docgen_typescript_loader_error){}var icons=__webpack_require__("./src/assets/icons/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TextField(_ref){let{type="title",disabled=!1,active=!0}=_ref;switch(type){case"title":return(0,jsx_runtime.jsxs)(StyledContainer,{children:[(0,jsx_runtime.jsx)(StyledTextField,{type:"text",placeholder:"제목",color:"gray/gray400",size:16,weight:"md",lineHeight:"lg",disabled:disabled}),!disabled&&(0,jsx_runtime.jsx)(StyledButton,{type:"button",children:(0,jsx_runtime.jsx)(icons.wR,{})})]});case"password":return(0,jsx_runtime.jsxs)(StyledContainer,{children:[(0,jsx_runtime.jsx)(StyledTextField,{type:"password",placeholder:"비밀번호",color:"gray/gray400",size:16,weight:"md",lineHeight:"lg",disabled:disabled}),!disabled&&active&&(0,jsx_runtime.jsx)(StyledButton,{type:"button",children:(0,jsx_runtime.jsx)(icons.dY,{})})]});default:return(0,jsx_runtime.jsx)("input",{type:"text",placeholder:"제목"})}}try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:{value:"title"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"password"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/common/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}let TextField_stories={title:"TextField",component:TextField,tags:["autodocs"]},Title={args:{type:"title",disabled:!1,active:!0}},TitleDisabled={args:{type:"title",disabled:!0,active:!1}},Password={args:{type:"password",disabled:!1,active:!0}},PasswordDisabled={args:{type:"title",disabled:!0,active:!1}};Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'title',\n    disabled: false,\n    active: true\n  }\n}",...Title.parameters?.docs?.source}}},TitleDisabled.parameters={...TitleDisabled.parameters,docs:{...TitleDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'title',\n    disabled: true,\n    active: false\n  }\n}",...TitleDisabled.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'password',\n    disabled: false,\n    active: true\n  }\n}",...Password.parameters?.docs?.source}}},PasswordDisabled.parameters={...PasswordDisabled.parameters,docs:{...PasswordDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'title',\n    disabled: true,\n    active: false\n  }\n}",...PasswordDisabled.parameters?.docs?.source}}};let __namedExportsOrder=["Title","TitleDisabled","Password","PasswordDisabled"]},"./src/components/common/Text/index.styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>StyledText});var _templateObject,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/theme/index.ts");let StyledText=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span(_templateObject||(_templateObject=(0,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n"])),props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.color[props.color],props=>"".concat(props.size,"px"),props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.weight[props.weight],props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.lineHeight[props.lineHeight]);try{StyledText.displayName="StyledText",StyledText.__docgenInfo={description:"",displayName:"StyledText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/index.styles.tsx#StyledText"]={docgenInfo:StyledText.__docgenInfo,name:"StyledText",path:"src/components/common/Text/index.styles.tsx#StyledText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={color:{"gray/white":"#FFFFFF","gray/grayBG":"#FBFCFD","gray/gray50":"#F2F5F8","gray/gray100":"#EBEEF2","gray/gray150":"#DCE2E7","gray/gray200":"#CED3DA","gray/gray400":"#A3ABB3","gray/gray500":"#767D86","gray/gray600":"#4B535A","gray/gray800":"#2C2F34","gray/gray900":"#232629","gray/black":"#111111","main_color/yellow_p":"#FFA722","main_color/yellow_s":"#FF7A00","main_color/blue_p":"#4340DB","main_color/blue_s":"#302DAC","sub_color/red/p":"#F53165","sub_color/red/s":"#FFABC1","sub_color/red/c":"#FEE0E8","sub_color/orange/p":"#FF7052","sub_color/orange/s":"#FFBCAE","sub_color/orange/c":"#FFDBD3","sub_color/orange/bg":"#FFF1EE","sub_color/yellow/p":"#FFAA00","sub_color/yellow/s":"#FFD88C","sub_color/yellow/c":"#FFE9BF","sub_color/yellow/bg":"#FFF7E6","sub_color/green/p":"#26BF66","sub_color/green/s":"#B3E9CA","sub_color/green/c":"#D4F2E0","sub_color/green/bg":"#EAF9F0","sub_color/blue/p":"#4DA1F7","sub_color/blue/s":"#AFD4FB","sub_color/blue/c":"#D2E7FD","sub_color/blue/bg":"#EEF6FF","sub_color/indigo/p":"#4340DB","sub_color/indigo/s":"#CAC8FA","sub_color/indigo/h":"#DBDBFF","sub_color/indigo/c":"#E3E3FF","sub_color/indigo/bg":"#F0F0FF","sub_color/purple/p":"#7E4FF6","sub_color/purple/s":"#C6B0FF","sub_color/purple/c":"#E5DCFD","sub_color/purple/bg":"#F5F1FF"},weight:{bold:700,md:500},lineHeight:{sm:1.2,md:1.4,lg:1.6},buttonWidth:{sm:92,md:154,lg:320,popup:134}}}}]);