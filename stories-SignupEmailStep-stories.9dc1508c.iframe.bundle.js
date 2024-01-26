"use strict";(self.webpackChunkmajorfolio=self.webpackChunkmajorfolio||[]).push([[435],{"./src/stories/SignupEmailStep.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmailConfirmed:()=>EmailConfirmed,EmailNotConfirmed:()=>EmailNotConfirmed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SignupEmailStep_stories}),__webpack_require__("./node_modules/react/index.js");var Text=__webpack_require__("./src/components/common/Text/index.tsx"),TextField=__webpack_require__("./src/components/common/TextField/index.tsx"),HelperText=__webpack_require__("./src/components/common/HelperText/index.tsx"),index_styles=__webpack_require__("./src/components/common/HelperText/index.styles.tsx"),Button=__webpack_require__("./src/components/common/Button/index.tsx"),icons=__webpack_require__("./src/assets/icons/index.js"),Tag=__webpack_require__("./src/components/common/Tag/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SignupEmailStep(_ref){let{onNext,isEmailConfirmed=!1}=_ref,transition=isEmailConfirmed?(0,jsx_runtime.jsx)(Button.Z,{type:"submit",backgroundColor:"main_color/blue_p",children:(0,jsx_runtime.jsx)(Text.Z,{color:"gray/white",size:16,weight:"bold",lineHeight:"sm",children:"다음으로"})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{backgroundColor:"sub_color/indigo/c",children:(0,jsx_runtime.jsx)(Text.Z,{color:"main_color/blue_p",size:16,weight:"bold",lineHeight:"sm",children:"다음에 하기"})}),(0,jsx_runtime.jsx)(Button.Z,{backgroundColor:"gray/gray100",children:(0,jsx_runtime.jsx)(Text.Z,{color:"gray/gray400",size:16,weight:"bold",lineHeight:"sm",children:"인증메일 전송"})})]}),textfieldIcon=isEmailConfirmed?(0,jsx_runtime.jsx)(Tag.Z,{type:"lg",size:12,weight:"bold",lineHeight:"sm",color:"sub_color/indigo/p",backgroundColor:"sub_color/indigo/c",children:"인증됨"}):(0,jsx_runtime.jsx)(icons.wR,{});return(0,jsx_runtime.jsxs)("form",{method:"post",onSubmit:onNext,children:[(0,jsx_runtime.jsxs)(index_styles.oF,{htmlFor:"email",children:[(0,jsx_runtime.jsx)(Text.Z,{as:"div",size:22,lineHeight:"lg",children:"학교 인증을 위해"}),(0,jsx_runtime.jsx)(Text.Z,{as:"div",size:22,weight:"bold",lineHeight:"lg",children:"학교 이메일을 입력해주세요"})]}),(0,jsx_runtime.jsx)(TextField.Z,{id:"email",type:"email",borderColor:"gray/gray100",borderColorOnHover:"gray/gray150",borderColorOnFocus:"main_color/blue_p",icon:textfieldIcon,placeholder:"이메일"}),(0,jsx_runtime.jsx)(HelperText.Z,{children:"해당 메일주소로 메일을 보내드립니다."}),(0,jsx_runtime.jsx)(index_styles.qt,{children:transition})]})}try{SignupEmailStep.displayName="SignupEmailStep",SignupEmailStep.__docgenInfo={description:"",displayName:"SignupEmailStep",props:{onNext:{defaultValue:null,description:"",name:"onNext",required:!0,type:{name:"() => void"}},isEmailConfirmed:{defaultValue:{value:"false"},description:"",name:"isEmailConfirmed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/Signup/SignupEmailStep/index.tsx#SignupEmailStep"]={docgenInfo:SignupEmailStep.__docgenInfo,name:"SignupEmailStep",path:"src/pages/Signup/SignupEmailStep/index.tsx#SignupEmailStep"})}catch(__react_docgen_typescript_loader_error){}let SignupEmailStep_stories={title:"SignupEmailStep",component:SignupEmailStep,tags:["autodocs"]},EmailNotConfirmed={},EmailConfirmed={args:{isEmailConfirmed:!0}};EmailNotConfirmed.parameters={...EmailNotConfirmed.parameters,docs:{...EmailNotConfirmed.parameters?.docs,source:{originalSource:"{}",...EmailNotConfirmed.parameters?.docs?.source}}},EmailConfirmed.parameters={...EmailConfirmed.parameters,docs:{...EmailConfirmed.parameters?.docs,source:{originalSource:"{\n  args: {\n    isEmailConfirmed: true\n  }\n}",...EmailConfirmed.parameters?.docs?.source}}};let __namedExportsOrder=["EmailNotConfirmed","EmailConfirmed"]},"./src/components/common/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button}),__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/components/common/theme/index.ts");let StyledButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  background-color: ",";\n  padding: 16px 0 17px 0;\n  border: ",";\n  border-radius: 6px;\n  width: 100%;\n"])),props=>theme.Z.color[props.backgroundColor],props=>props.isOutlined?"1px #4340DB solid;":0);try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/index.styles.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/common/Button/index.styles.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,backgroundColor="main_color/blue_p",isOutlined=!1,onClick=()=>{},...props}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{backgroundColor:backgroundColor,isOutlined:isOutlined,onClick:onClick,...props,children:children})}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},backgroundColor:{defaultValue:{value:"main_color/blue_p"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},isOutlined:{defaultValue:{value:"false"},description:"",name:"isOutlined",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/HelperText/index.styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,oF:()=>StyledTextContainer,qt:()=>StyledButtonContainer});var _templateObject,_templateObject2,_templateObject3,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let StyledHelperText=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.span(_templateObject||(_templateObject=(0,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"]))),StyledTextContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.label(_templateObject2||(_templateObject2=(0,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  margin-top: 32px;\n  margin-bottom: 28px;\n"]))),StyledButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject3||(_templateObject3=(0,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  column-gap: 14px;\n  margin-top: 40px;\n"]))),__WEBPACK_DEFAULT_EXPORT__=StyledHelperText;try{StyledTextContainer.displayName="StyledTextContainer",StyledTextContainer.__docgenInfo={description:"",displayName:"StyledTextContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/HelperText/index.styles.tsx#StyledTextContainer"]={docgenInfo:StyledTextContainer.__docgenInfo,name:"StyledTextContainer",path:"src/components/common/HelperText/index.styles.tsx#StyledTextContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledButtonContainer.displayName="StyledButtonContainer",StyledButtonContainer.__docgenInfo={description:"",displayName:"StyledButtonContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/HelperText/index.styles.tsx#StyledButtonContainer"]={docgenInfo:StyledButtonContainer.__docgenInfo,name:"StyledButtonContainer",path:"src/components/common/HelperText/index.styles.tsx#StyledButtonContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/HelperText/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HelperText}),__webpack_require__("./node_modules/react/index.js");var _assets_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/icons/index.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Text/index.tsx"),_index_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/HelperText/index.styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function HelperText(_ref){let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_index_styles__WEBPACK_IMPORTED_MODULE_3__.ZP,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_1__.Ho,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{size:12,color:"gray/gray200",lineHeight:"lg",children:children})]})}try{HelperText.displayName="HelperText",HelperText.__docgenInfo={description:"",displayName:"HelperText",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/HelperText/index.tsx#HelperText"]={docgenInfo:HelperText.__docgenInfo,name:"HelperText",path:"src/components/common/HelperText/index.tsx#HelperText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tag}),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/components/common/theme/index.ts"),Text=__webpack_require__("./src/components/common/Text/index.tsx");let StyledLargeTag=(0,styled_components_browser_esm.zo)(Text.Z)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n  padding: 4px 8px;\n  border-radius: 4px;\n"])),props=>theme.Z.color[props.backgroundColor]),StyledSmallTag=(0,styled_components_browser_esm.zo)(Text.Z)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n  padding: 2px 6px 3px 6px;\n  border-radius: 2px;\n"])),props=>theme.Z.color[props.backgroundColor]);try{StyledLargeTag.displayName="StyledLargeTag",StyledLargeTag.__docgenInfo={description:"",displayName:"StyledLargeTag",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Tag/index.styles.tsx#StyledLargeTag"]={docgenInfo:StyledLargeTag.__docgenInfo,name:"StyledLargeTag",path:"src/components/common/Tag/index.styles.tsx#StyledLargeTag"})}catch(__react_docgen_typescript_loader_error){}try{StyledSmallTag.displayName="StyledSmallTag",StyledSmallTag.__docgenInfo={description:"",displayName:"StyledSmallTag",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Tag/index.styles.tsx#StyledSmallTag"]={docgenInfo:StyledSmallTag.__docgenInfo,name:"StyledSmallTag",path:"src/components/common/Tag/index.styles.tsx#StyledSmallTag"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Tag(_ref){let{children,type,...props}=_ref;if("lg"===type)return(0,jsx_runtime.jsx)(StyledLargeTag,{...props,children:children});if("sm"===type)return(0,jsx_runtime.jsx)(StyledSmallTag,{...props,children:children});throw Error("type not defined")}try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"10"},{value:"12"},{value:"14"},{value:"16"},{value:"18"},{value:"20"},{value:"22"}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"md"'}]}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"lg"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/common/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TextField});var _templateObject,_templateObject2,_templateObject3,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/components/common/theme/index.ts"),index_styles=__webpack_require__("./src/components/common/Text/index.styles.tsx");let StyledContainer=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n  box-sizing: content-box;\n"]))),StyledTextField=(0,styled_components_browser_esm.zo)(index_styles.q).attrs({as:"input"})(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  padding: 13px 16px;\n  border: 1px solid ",";\n  &&::placeholder {\n    color: ",";\n  }\n  &&:hover {\n    border: 1px solid ",";\n  }\n  &&:focus {\n    border: 1px solid ",";\n  }\n  &&:disabled {\n    border: 1px solid ",";\n    background-color: ",";\n  }\n  &&:invalid {\n    border: 1px solid ",";\n  }\n  outline: none;\n  background-color: ",";\n  width: 100%;\n  border-radius: 6px;\n"])),theme.Z.color["gray/gray100"],theme.Z.color["gray/gray400"],theme.Z.color["gray/gray150"],theme.Z.color["main_color/blue_p"],theme.Z.color["gray/gray150"],theme.Z.color["gray/gray100"],theme.Z.color["error/error_color"],theme.Z.color["gray/grayBG"]),StyledButton=styled_components_browser_esm.zo.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  border: none;\n  padding: 10px;\n  background-color: transparent;\n  line-height: 0;\n  &:hover {\n    cursor: pointer;\n  }\n  right: 0px;\n"])));try{StyledContainer.displayName="StyledContainer",StyledContainer.__docgenInfo={description:"",displayName:"StyledContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextField/index.styles.tsx#StyledContainer"]={docgenInfo:StyledContainer.__docgenInfo,name:"StyledContainer",path:"src/components/common/TextField/index.styles.tsx#StyledContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextField/index.styles.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/common/TextField/index.styles.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TextField(_ref){let{type="text",disabled=!1,active=!0,icon,placeholder,...props}=_ref,[email,setEmail]=(0,react.useState)("");switch(type){case"text":return(0,jsx_runtime.jsxs)(StyledContainer,{children:[(0,jsx_runtime.jsx)(StyledTextField,{type:"text",placeholder:placeholder,color:"gray/gray900",size:16,weight:"md",lineHeight:"lg",disabled:disabled,...props}),!disabled&&(0,jsx_runtime.jsx)(StyledButton,{type:"button",children:icon})]});case"password":return(0,jsx_runtime.jsxs)(StyledContainer,{children:[(0,jsx_runtime.jsx)(StyledTextField,{type:"password",placeholder:placeholder,color:"gray/gray900",size:16,weight:"md",lineHeight:"lg",disabled:disabled,...props}),!disabled&&active&&(0,jsx_runtime.jsx)(StyledButton,{type:"button",children:icon})]});case"email":return(0,jsx_runtime.jsxs)(StyledContainer,{children:[(0,jsx_runtime.jsx)(StyledTextField,{type:"email",placeholder:placeholder,color:"gray/gray900",size:16,weight:"md",lineHeight:"lg",disabled:disabled,name:"email",value:email,onChange:event=>setEmail(event.target.value),...props}),(0,jsx_runtime.jsx)(StyledButton,{type:"button",children:icon})]});default:return(0,jsx_runtime.jsx)("input",{type:"text",placeholder:"제목"})}}try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!0,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},borderColorOnHover:{defaultValue:null,description:"",name:"borderColorOnHover",required:!0,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},borderColorOnFocus:{defaultValue:null,description:"",name:"borderColorOnFocus",required:!0,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/common/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>StyledText});var _templateObject,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/theme/index.ts");let StyledText=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span(_templateObject||(_templateObject=(0,C_Users_LG_Desktop_Projects_majorfolio_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n"])),props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.color[props.color],props=>"".concat(props.size,"px"),props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.weight[props.weight],props=>_theme__WEBPACK_IMPORTED_MODULE_0__.Z.lineHeight[props.lineHeight]);try{StyledText.displayName="StyledText",StyledText.__docgenInfo={description:"",displayName:"StyledText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/index.styles.tsx#StyledText"]={docgenInfo:StyledText.__docgenInfo,name:"StyledText",path:"src/components/common/Text/index.styles.tsx#StyledText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Text}),__webpack_require__("./node_modules/react/index.js");var _index_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Text/index.styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(_ref){let{children,color="gray/black",size=16,weight="md",lineHeight="md",...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index_styles__WEBPACK_IMPORTED_MODULE_1__.q,{color:color,size:size,weight:weight,lineHeight:lineHeight,...props,children:children})}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{color:{defaultValue:{value:"gray/black"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray/white"'},{value:'"gray/grayBG"'},{value:'"gray/gray50"'},{value:'"gray/gray100"'},{value:'"gray/gray150"'},{value:'"gray/gray200"'},{value:'"gray/gray400"'},{value:'"gray/gray500"'},{value:'"gray/gray600"'},{value:'"gray/gray800"'},{value:'"gray/gray900"'},{value:'"gray/black"'},{value:'"main_color/yellow_p"'},{value:'"main_color/yellow_s"'},{value:'"main_color/blue_p"'},{value:'"main_color/blue_s"'},{value:'"sub_color/red/p"'},{value:'"sub_color/red/s"'},{value:'"sub_color/red/c"'},{value:'"sub_color/orange/p"'},{value:'"sub_color/orange/s"'},{value:'"sub_color/orange/c"'},{value:'"sub_color/orange/bg"'},{value:'"sub_color/yellow/p"'},{value:'"sub_color/yellow/s"'},{value:'"sub_color/yellow/c"'},{value:'"sub_color/yellow/bg"'},{value:'"sub_color/green/p"'},{value:'"sub_color/green/s"'},{value:'"sub_color/green/c"'},{value:'"sub_color/green/bg"'},{value:'"sub_color/blue/p"'},{value:'"sub_color/blue/s"'},{value:'"sub_color/blue/c"'},{value:'"sub_color/blue/bg"'},{value:'"sub_color/indigo/p"'},{value:'"sub_color/indigo/s"'},{value:'"sub_color/indigo/h"'},{value:'"sub_color/indigo/c"'},{value:'"sub_color/indigo/bg"'},{value:'"sub_color/purple/p"'},{value:'"sub_color/purple/s"'},{value:'"sub_color/purple/c"'},{value:'"sub_color/purple/bg"'},{value:'"error/error_color"'}]}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"10"},{value:"12"},{value:"14"},{value:"16"},{value:"18"},{value:"20"},{value:"22"}]}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"md"'}]}},lineHeight:{defaultValue:{value:"md"},description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"lg"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/common/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={color:{"gray/white":"#FFFFFF","gray/grayBG":"#FBFCFD","gray/gray50":"#F2F5F8","gray/gray100":"#EBEEF2","gray/gray150":"#DCE2E7","gray/gray200":"#CED3DA","gray/gray400":"#A3ABB3","gray/gray500":"#767D86","gray/gray600":"#4B535A","gray/gray800":"#2C2F34","gray/gray900":"#232629","gray/black":"#111111","main_color/yellow_p":"#FFA722","main_color/yellow_s":"#FF7A00","main_color/blue_p":"#4340DB","main_color/blue_s":"#302DAC","sub_color/red/p":"#F53165","sub_color/red/s":"#FFABC1","sub_color/red/c":"#FEE0E8","sub_color/orange/p":"#FF7052","sub_color/orange/s":"#FFBCAE","sub_color/orange/c":"#FFDBD3","sub_color/orange/bg":"#FFF1EE","sub_color/yellow/p":"#FFAA00","sub_color/yellow/s":"#FFD88C","sub_color/yellow/c":"#FFE9BF","sub_color/yellow/bg":"#FFF7E6","sub_color/green/p":"#26BF66","sub_color/green/s":"#B3E9CA","sub_color/green/c":"#D4F2E0","sub_color/green/bg":"#EAF9F0","sub_color/blue/p":"#4DA1F7","sub_color/blue/s":"#AFD4FB","sub_color/blue/c":"#D2E7FD","sub_color/blue/bg":"#EEF6FF","sub_color/indigo/p":"#4340DB","sub_color/indigo/s":"#CAC8FA","sub_color/indigo/h":"#DBDBFF","sub_color/indigo/c":"#E3E3FF","sub_color/indigo/bg":"#F0F0FF","sub_color/purple/p":"#7E4FF6","sub_color/purple/s":"#C6B0FF","sub_color/purple/c":"#E5DCFD","sub_color/purple/bg":"#F5F1FF","error/error_color":"#FF4C24"},weight:{bold:700,md:500},lineHeight:{sm:1.2,md:1.4,lg:1.6},buttonWidth:{sm:92,md:154,lg:320,popup:134}}}}]);