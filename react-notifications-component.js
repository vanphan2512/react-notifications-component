module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isBottomContainer=l,e.isTopContainer=c,e.shouldNotificationHaveSliding=d,e.cssWidth=f,e.getHtmlClassesForType=T,e.getNotificationsForMobileView=function(t){var e=r.CONTAINER.TOP_LEFT,i=r.CONTAINER.TOP_RIGHT,n=r.CONTAINER.BOTTOM_LEFT,o=r.CONTAINER.BOTTOM_RIGHT,a=[],s=[];return t.forEach(function(t){switch(t.container.toLowerCase()){case e:case i:s.push(t);break;case n:case o:a.push(t);break;default:throw new Error("Container "+t.container+" is not valid")}}),{top:s,bottom:a}},e.getNotificationsForEachContainer=function(t){var e=[],i=[],n=[],o=[];return t.forEach(function(t){var a=r.CONTAINER.TOP_LEFT,s=r.CONTAINER.TOP_RIGHT,u=r.CONTAINER.BOTTOM_LEFT,l=r.CONTAINER.BOTTOM_RIGHT;switch(t.container.toLowerCase()){case a:e.push(t);break;case s:i.push(t);break;case u:n.push(t);break;case l:o.push(t);break;default:throw new Error("Container "+t.container+" is not valid")}}),{topLeft:e,topRight:i,bottomLeft:n,bottomRight:o}},e.getInitialSlidingState=function(t){var e=t.notification,i=t.isFirstNotification,n=d(e)&&!i,o={};return o.animatedElementClasses=T(e),o.rootElementStyle={height:"0",marginBottom:0,overflow:"hidden",width:f(e.width)},n?o.animatedElementClasses.push("invisible"):e.animationIn&&e.animationIn.length>0&&e.animationIn.forEach(function(t){return o.animatedElementClasses.push(t)}),o.hasSliding=n,o},e.handleStageTransition=function(t,e){var i=void 0,n=void 0,a=e.animatedElementClasses,s=e.rootElementStyle,u=e.currentX,l=e.startX;return t.stage===r.NOTIFICATION_STAGE.TOUCH_SLIDING_ANIMATION_EXIT?(0,o.handleTouchSlidingAnimationExit)(t,u,l):t.stage===r.NOTIFICATION_STAGE.SLIDING_ANIMATION_EXIT?(0,o.handleSlidingAnimationExit)(t):(t.resized?(n=s,i=T(t)):(n=s,i=a),{rootElementStyle:n,animatedElementClasses:i})},e.getCubicBezierTransition=I,e.hasFullySwiped=function(t){return Math.abs(t)>=.4*window.innerWidth},e.getRootHeightStyle=function(t,e){return{height:e+"px",width:f(t.width),transition:I(t.slidingExit.duration,t.slidingExit.cubicBezier,t.slidingExit.delay)}},e.getIconHtmlContent=function(t,e){return t.dismissIcon?n.default.createElement("div",{className:t.dismissIcon.className,onClick:e},t.icon):n.default.createElement("div",{className:"notification-close",onClick:e},n.default.createElement("span",null,"×"))},e.validateDismissIconOption=h,e.validateAnimationIn=E,e.validateAnimationOut=N,e.validateTimeoutDismissOption=m,e.validateTransition=S,e.validateTitle=O,e.validateMessage=g,e.validateType=p,e.validateContainer=_,e.validateDismissable=v,e.validateInsert=A,e.validateWidth=C,e.validateUserDefinedTypes=y,e.getNotificationOptions=function(t,e){var i=t,n=i.insert,o=i.container,r=i.dismissIcon,s=i.animationIn,u=i.animationOut,l=i.slidingEnter,c=i.slidingExit,d=i.touchSlidingBack,f=i.touchSlidingExit,T=i.dismissable,I=i.dismiss,b=i.width;return i.id=Math.random(),O(i),g(i),i.type=p(i,e),e&&!i.content&&(i.userDefinedTypes=y(i,e)),i.container=_(o),i.insert=A(n),i.dismissable=v(T),h(r),i.animationIn=E(s),i.animationOut=N(u),(0,a.isNullOrUndefined)(b)||(i.width=C(b)),i.slidingEnter=S(l,{duration:600,cubicBezier:"linear",delay:0}),i.slidingExit=S(c,{duration:600,cubicBezier:"linear",delay:0}),i.touchSlidingBack=S(d,{duration:600,cubicBezier:"ease-in",delay:0}),i.touchSlidingExit=i.touchSlidingExit||{},i.touchSlidingExit.swipe=S(f.swipe||{},{duration:600,cubicBezier:"ease-in",delay:0}),i.touchSlidingExit.fade=S(f.fade||{},{duration:300,cubicBezier:"ease-in",delay:0}),m(I),i};var n=u(i(2)),o=i(5),r=i(1),a=i(3),s=u(i(4));function u(t){return t&&t.__esModule?t:{default:t}}function l(t){return t===r.CONTAINER.BOTTOM_LEFT||t===r.CONTAINER.BOTTOM_RIGHT}function c(t){return t===r.CONTAINER.TOP_LEFT||t===r.CONTAINER.TOP_RIGHT}function d(t){return t.insert===r.INSERTION.TOP&&c(t.container)||t.insert===r.INSERTION.BOTTOM&&l(t.container)}function f(t){return t?t+"px":void 0}function T(t){var e=t.type,i=t.userDefinedTypes;if(t.content)return[r.NOTIFICATION_BASE_CLASS];if((0,a.isNullOrUndefined)(i))return function(t){switch(t.toLowerCase()){case r.NOTIFICATION_TYPE.DEFAULT:return[r.NOTIFICATION_BASE_CLASS,"notification-default"];case r.NOTIFICATION_TYPE.SUCCESS:return[r.NOTIFICATION_BASE_CLASS,"notification-success"];case r.NOTIFICATION_TYPE.DANGER:return[r.NOTIFICATION_BASE_CLASS,"notification-danger"];case r.NOTIFICATION_TYPE.WARNING:return[r.NOTIFICATION_BASE_CLASS,"notification-warning"];case r.NOTIFICATION_TYPE.INFO:return[r.NOTIFICATION_BASE_CLASS,"notification-info"];default:throw new Error("Type '"+t+"' is not valid nor user-defined")}}(e);var n=i.find(function(t){return t.name===e});if(!n)throw new Error(s.default.TYPE_NOT_FOUND);return n.htmlClasses.concat(r.NOTIFICATION_BASE_CLASS)}function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t+"ms "+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"height")+" "+e+" "+i+"ms"}function h(t){if(!(0,a.isNullOrUndefined)(t)){var e=t.className,i=t.content;if(!e)throw new Error(s.default.DISMISS_ICON_CLASS);if(!(0,a.isString)(e))throw new Error(s.default.DISMISS_ICON_STRING);if(!i)throw new Error(s.default.DISMISS_ICON_CONTENT);if(!n.default.isValidElement(i))throw new Error(s.default.DISMISS_ICON_INVALID)}}function E(t){if((0,a.isNullOrUndefined)(t))return[];if(!(0,a.isArray)(t))throw new Error(s.default.ANIMATION_IN);return t}function N(t){if((0,a.isNullOrUndefined)(t))return[];if(!(0,a.isArray)(t))throw new Error(s.default.ANIMATION_OUT);return t}function m(t){if(!(0,a.isNullOrUndefined)(t)){if((0,a.isNullOrUndefined)(t.duration))throw new Error(s.default.DISMISS_REQUIRED);if(!(0,a.isNumber)(t.duration))throw new Error(s.default.DISMISS_NUMBER);if(t.duration<0)throw new Error(s.default.DISMISS_POSITIVE)}}function S(t,e){var i=e.duration,n=e.cubicBezier,o=e.delay,r=t||{};if((0,a.isNullOrUndefined)(r.duration)?r.duration=i:(0,a.isNullOrUndefined)(r.cubicBezier)?r.cubicBezier=n:(0,a.isNullOrUndefined)(r.delay)&&(r.delay=o),!(0,a.isNumber)(r.duration))throw new Error(s.default.TRANSITION_DURATION_NUMBER);if(!(0,a.isString)(r.cubicBezier))throw new Error(s.default.TRANSITION_CUBICBEZIER_NUMBER);if(!(0,a.isNumber)(r.delay))throw new Error(s.default.TRANSITION_DELAY_NUMBER);return r}function O(t){var e=t.content,i=t.title;if(!e){if(null===i||void 0===i)throw new Error(s.default.TITLE_REQUIRED);if(!(0,a.isString)(i))throw new Error(s.default.TITLE_STRING)}}function g(t){var e=t.content,i=t.message;if(!e){if(null===i||void 0===i)throw new Error(s.default.MESSAGE_REQUIRED);if(!(0,a.isString)(i))throw new Error(s.default.MESSAGE_STRING)}}function p(t,e){var i=t.content,n=t.type;if(!i){if((0,a.isNullOrUndefined)(n))throw new Error(s.default.TYPE_REQUIRED);if(!(0,a.isString)(n))throw new Error(s.default.TYPE_STRING);if((0,a.isNullOrUndefined)(e)&&n!==r.NOTIFICATION_TYPE.SUCCESS&&n!==r.NOTIFICATION_TYPE.DANGER&&n!==r.NOTIFICATION_TYPE.INFO&&n!==r.NOTIFICATION_TYPE.DEFAULT&&n!==r.NOTIFICATION_TYPE.WARNING)throw new Error(s.default.TYPE_NOT_EXISTENT);return n.toLowerCase()}}function _(t){if((0,a.isNullOrUndefined)(t))throw new Error(s.default.CONTAINER_REQUIRED);if(!(0,a.isString)(t))throw new Error(s.default.CONTAINER_STRING);return t.toLowerCase()}function v(t){if((0,a.isNullOrUndefined)(t))return{click:!0,touch:!0};var e=t;if((0,a.isNullOrUndefined)(e.click))e.click=!0;else if((0,a.isNullOrUndefined)(e.touch))e.touch=!0;else if(!(0,a.isBoolean)(e.click))throw new Error(s.default.DISMISSABLE_CLICK_BOOL);if(!(0,a.isBoolean)(e.touch))throw new Error(s.default.DISMISSABLE_TOUCH_BOOL);return e}function A(t){if((0,a.isNullOrUndefined)(t))return"top";if(!(0,a.isString)(t))throw new Error(s.default.INSERT_STRING);return t}function C(t){if(!(0,a.isNumber)(t))throw new Error(s.default.WIDTH_NUMBER);return t}function y(t,e){var i=t.content,n=t.type;if(!i&&n!==r.NOTIFICATION_TYPE.SUCCESS&&n!==r.NOTIFICATION_TYPE.DANGER&&n!==r.NOTIFICATION_TYPE.INFO&&n!==r.NOTIFICATION_TYPE.DEFAULT&&n!==r.NOTIFICATION_TYPE.WARNING&&!(0,a.isNullOrUndefined)(e)){if(!e.find(function(t){return t.name===n}))throw new Error(s.default.TYPE_NOT_FOUND);return e}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NOTIFICATION_BASE_CLASS="notification-item",e.CONTAINER={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"},e.INSERTION={TOP:"top",BOTTOM:"bottom"},e.NOTIFICATION_TYPE={SUCCESS:"success",DANGER:"danger",INFO:"info",DEFAULT:"default",WARNING:"warning"},e.NOTIFICATION_STAGE={SLIDING_ANIMATION_EXIT:"SLIDING_ANIMATION_EXIT",TOUCH_SLIDING_ANIMATION_EXIT:"TOUCH_SLIDING_ANIMATION_EXIT",REMOVAL:"REMOVAL"}},function(t,e){t.exports=require("react")},function(t,e,i){"use strict";function n(t){return null===t||void 0===t}Object.defineProperty(e,"__esModule",{value:!0}),e.isNullOrUndefined=n,e.isString=function(t){return"string"==typeof t},e.isNumber=function(t){return"number"==typeof t},e.isBoolean=function(t){return"boolean"==typeof t},e.isArray=function(t){return!n(t)&&t.constructor===Array}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={DISMISS_ICON_CLASS:"`className` property of `dismissIcon` is required",DISMISS_ICON_CONTENT:"`content` property of `dismissIcon` is required",DISMISS_ICON_STRING:"`className` property of `dismissIcon` must be a String",DISMISS_ICON_INVALID:"`content` property of `dismissIcon` must be a valid React element",ANIMATION_IN:"`animationIn' must be an array",ANIMATION_OUT:"`animationOut' must be an array",DISMISS_REQUIRED:"Dismiss `duration` is required",DISMISS_NUMBER:"Dismiss `duration` must be a Number",DISMISS_POSITIVE:"Dismiss `duration` must be a positive Number",TITLE_REQUIRED:"`title` is required.",TITLE_STRING:"`title` must be a String.",MESSAGE_REQUIRED:"`message` is required",MESSAGE_STRING:"`message` must be a String",TYPE_REQUIRED:"`type` is required",TYPE_STRING:"`type` must be a String",TYPE_NOT_EXISTENT:"`type` could not be found in existing types. Typo maybe?",CONTAINER_REQUIRED:"`container` is required",CONTAINER_STRING:"`container` must be a String",DISMISSABLE_CLICK_BOOL:"`click` property from `dismissable` must be a Boolean",DISMISSABLE_TOUCH_BOOL:"`touch` property from `dismissable` must be a Boolean",WIDTH_NUMBER:"`width` must be a Number",INSERT_STRING:"`insert` must be a String",TRANSITION_DURATION_NUMBER:"`duration` property of transition must be a Number",TRANSITION_CUBICBEZIER_NUMBER:"`cubicBezier` property of transition must be a String",TRANSITION_DELAY_NUMBER:"`delay` property of transition must be a Number",TYPE_NOT_FOUND:"Custom type not found. Typo maybe?"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.touchSwipeTransition=function(t){var e=t.touchSlidingExit.swipe;return(0,n.getCubicBezierTransition)(e.duration,e.cubicBezier,e.delay,"left")},e.touchFadeTransition=function(t){var e=t.touchSlidingExit.fade;return(0,n.getCubicBezierTransition)(e.duration,e.cubicBezier,e.delay,"opacity")},e.slidingExitTransition=o,e.getChildStyleForTouchTransitionExit=r,e.handleTouchSlidingAnimationExit=function(t,i,o){var a=(0,n.getHtmlClassesForType)(t);return{childElementStyle:r(t,i,o),animatedElementClasses:a,rootElementStyle:{height:0,marginBottom:0,transition:e.slidingExitTransition(t),width:(0,n.cssWidth)(t.width)}}},e.handleSlidingAnimationExit=function(t){var e=t.animationOut,i=(0,n.getHtmlClassesForType)(t);return e&&e.forEach(function(t){return i.push(t)}),{rootElementStyle:{height:0,marginBottom:0,transition:o(t),width:(0,n.cssWidth)(t.width)},animatedElementClasses:i}};var n=i(0);function o(t){return(0,n.getCubicBezierTransition)(t.slidingExit.duration,t.slidingExit.cubicBezier,t.slidingExit.delay)}function r(t,i,n){var o=2*window.innerWidth,r=e.touchSwipeTransition(t),a=e.touchFadeTransition(t);return{opacity:0,position:"relative",left:(i-n>=0?o:-o)+"px",transition:r+", "+a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=(n=i(2))&&n.__esModule?n:{default:n},a=i(1),s=i(0),u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.onTransitionEnd=i.onTransitionEnd.bind(i),i.onNotificationClick=i.onNotificationClick.bind(i),i.setDismissTimeout=i.setDismissTimeout.bind(i),i.onAnimationEnd=i.onAnimationEnd.bind(i),i.onSmartSlidingEnd=i.onSmartSlidingEnd.bind(i),i.onTouchSmartSlidingEnd=i.onTouchSmartSlidingEnd.bind(i),i.onTouchStart=i.onTouchStart.bind(i),i.onTouchMove=i.onTouchMove.bind(i),i.onTouchEnd=i.onTouchEnd.bind(i),i.rootDOM=null,i.childDOM=null,i.state=(0,s.getInitialSlidingState)(t),i.timeoutId=null,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default.Component),o(e,[{key:"componentDidMount",value:function(){this.smartSliding()}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"setDismissTimeout",value:function(t){var e=this,i=this.props,n=i.notification,o=i.toggleTimeoutRemoval;this.timeoutId=setTimeout(function(){e.setState({rootElementStyle:(0,s.getRootHeightStyle)(n,e.rootDOM.scrollHeight)},function(){return requestAnimationFrame(function(){return o(n)})})},t)}},{key:"setRemovalTimeout",value:function(t){t&&t.duration&&this.setDismissTimeout(t.duration)}},{key:"onAnimationEnd",value:function(){this.setRemovalTimeout(this.props.notification.dismiss)}},{key:"onTransitionEnd",value:function(){var t=this.props.notification,e=(0,s.getHtmlClassesForType)(t);e.push("visible"),t.animationIn&&t.animationIn.length>0&&t.animationIn.forEach(function(t){return e.push(t)}),this.setState({animatedElementClasses:e,rootElementStyle:{height:"auto",width:(0,s.cssWidth)(t.width)}})}},{key:"onTouchSmartSlidingEnd",value:function(t){t.stopPropagation(),t.target.isSameNode(this.rootDOM)&&(this.endOfSmartSliding&&this.props.toggleRemoval(this.props.notification),this.endOfSmartSliding=!0)}},{key:"onSmartSlidingEnd",value:function(){var t=this.props,e=t.toggleRemoval,i=t.notification;this.endOfSmartSliding&&e(i),this.endOfSmartSliding=!0}},{key:"smartSliding",value:function(){var t=this.props.notification,e=t.slidingEnter,i=(0,s.getHtmlClassesForType)(t),n={transition:t.resized?void 0:(0,s.getCubicBezierTransition)(e.duration,e.cubicBezier,e.delay),width:(0,s.cssWidth)(t.width),height:this.rootDOM.scrollHeight+"px"};!t.resized&&t.animationIn&&t.animationIn.length>0&&t.animationIn.forEach(function(t){return i.push(t)}),this.setState({rootElementStyle:n,animatedElementClasses:i})}},{key:"onNotificationClick",value:function(){var t=this,e=this.props.notification;this.setState({rootElementStyle:(0,s.getRootHeightStyle)(e,this.rootDOM.scrollHeight)},function(){return requestAnimationFrame(function(){return t.props.onClickHandler(e)})})}},{key:"onTouchStart",value:function(t){this.setState({startX:t.touches[0].pageX,currentX:t.touches[0].pageX})}},{key:"onTouchMove",value:function(t){var e=this.props,i=e.notification,n=e.toggleTouchEnd,o=t.touches[0].pageX-this.state.startX;(0,s.hasFullySwiped)(o)?this.setState({animatedElementClasses:(0,s.getHtmlClassesForType)(i),rootElementStyle:(0,s.getRootHeightStyle)(i,this.rootDOM.scrollHeight)},function(){requestAnimationFrame(function(){return n(i)})}):this.setState({currentX:t.touches[0].pageX,childElementStyle:{position:"relative",left:0+o+"px"}})}},{key:"onTouchEnd",value:function(){var t=this.props.notification.touchSlidingBack;this.setState({childElementStyle:{left:"0",position:"relative",transition:(0,s.getCubicBezierTransition)(t.duration,t.cubicBezier,t.delay,"left")}})}},{key:"render",value:function(){var t=this,e=this.props.notification,i=this.state.childElementStyle,n=this.onAnimationEnd,o=null,u=null,l=!1;this.state.hasSliding&&(u=this.onTransitionEnd);var c=(0,s.handleStageTransition)(e,this.state),d=(c.animatedElementClasses||[]).join(" "),f=c.rootElementStyle;if(e.dismissable.click&&(o=this.onNotificationClick),e.stage===a.NOTIFICATION_STAGE.REMOVAL?(n=null,f=(0,s.getRootHeightStyle)(e,this.rootDOM.scrollHeight)):e.stage===a.NOTIFICATION_STAGE.SLIDING_ANIMATION_EXIT?(n=this.onSmartSlidingEnd,u=this.onSmartSlidingEnd):e.stage===a.NOTIFICATION_STAGE.TOUCH_SLIDING_ANIMATION_EXIT&&(n=this.onTouchSmartSlidingEnd,u=this.onTouchSmartSlidingEnd,o=null,i=c.childElementStyle,l=!0),e.content)return r.default.createElement("div",{onTouchStart:l?null:this.onTouchStart,onTouchMove:l?null:this.onTouchMove,onTouchEnd:l?null:this.onTouchEnd,onTouchCancel:l?null:this.onTouchEnd,onClick:o,className:"notification-item-root",onAnimationEnd:n,onTransitionEnd:u,ref:function(e){t.rootDOM=e},style:f},r.default.createElement("div",{className:d,ref:function(e){t.childDOM=e},style:i},e.content));var T=(0,s.getIconHtmlContent)(e,this.onClickHandler);return r.default.createElement("div",{onTouchStart:l?null:this.onTouchStart,onTouchMove:l?null:this.onTouchMove,onTouchEnd:l?null:this.onTouchEnd,onTouchCancel:l?null:this.onTouchCancel,onClick:o,className:"notification-item-root",onAnimationEnd:n,onTransitionEnd:u,ref:function(e){t.rootDOM=e},style:f},r.default.createElement("div",{className:d,ref:function(e){t.childDOM=e},style:i},r.default.createElement("div",{className:"notification-content"},T,r.default.createElement("div",{className:"notification-close",onClick:this.onClickHandler},r.default.createElement("span",null,"×")),r.default.createElement("h4",{className:"notification-title"},this.props.notification.title),r.default.createElement("p",{className:"notification-message"},this.props.notification.message))))}}]),e}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=l(i(2)),r=l(i(6)),a=i(3),s=i(0),u=i(1);function l(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.state={width:window.innerWidth,notifications:[]},(0,a.isArray)(t.types)&&(i.state.userDefinedTypes=t.types),i.addNotification=i.addNotification.bind(i),i.onNotificationClick=i.onNotificationClick.bind(i),i.toggleRemoval=i.toggleRemoval.bind(i),i.toggleTimeoutRemoval=i.toggleTimeoutRemoval.bind(i),i.handleResize=i.handleResize.bind(i),i.renderReactNotifications=i.renderReactNotifications.bind(i),i.toggleTouchEnd=i.toggleTouchEnd.bind(i),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),n(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.setState({width:window.innerWidth,notifications:this.state.notifications.map(function(t){var e=t;return e.resized=!0,e})})}},{key:"toggleTimeoutRemoval",value:function(t){this.setState({notifications:this.state.notifications.map(function(e){var i=e;return i.stage=i.id===t.id?u.NOTIFICATION_STAGE.SLIDING_ANIMATION_EXIT:i.stage,i})})}},{key:"addNotification",value:function(t){var e=(0,s.getNotificationOptions)(t,this.state.userDefinedTypes),i=e.insert.toLowerCase()===u.INSERTION.TOP?[e].concat(this.state.notifications):this.state.notifications.concat([e]);return this.setState({notifications:i}),e.id}},{key:"removeNotification",value:function(t){var e=this;this.setState({notifications:this.state.notifications.map(function(e){var i=e;return i.stage=i.id===t?u.NOTIFICATION_STAGE.REMOVAL:i.stage,i})},function(){requestAnimationFrame(function(){e.setState({notifications:e.state.notifications.map(function(e){var i=e;return i.stage=i.id===t?u.NOTIFICATION_STAGE.SLIDING_ANIMATION_EXIT:i.stage,i})})})})}},{key:"onNotificationClick",value:function(t){var e=this;(t.dismissable.click||t.dismissable.icon)&&requestAnimationFrame(function(){e.setState({notifications:e.state.notifications.map(function(e){var i=e;return i.stage=i.id===t.id?u.NOTIFICATION_STAGE.SLIDING_ANIMATION_EXIT:i.stage,i})})})}},{key:"toggleTouchEnd",value:function(t){this.setState({notifications:this.state.notifications.map(function(e){var i=e;return i.stage=i.id===t.id?u.NOTIFICATION_STAGE.TOUCH_SLIDING_ANIMATION_EXIT:i.stage,i})})}},{key:"toggleRemoval",value:function(t){this.setState({notifications:this.state.notifications.filter(function(e){return e.id!==t.id})})}},{key:"renderReactNotifications",value:function(t){var e=this;return t.map(function(i){return o.default.createElement(r.default,{key:i.id,notification:i,isFirstNotification:1===t.length,onClickHandler:e.onNotificationClick,toggleRemoval:e.toggleRemoval,toggleTimeoutRemoval:e.toggleTimeoutRemoval,toggleTouchEnd:e.toggleTouchEnd})})}},{key:"render",value:function(){var t=this.state,e=this.props,i=void 0===e.width?768:e.width,n=t.width<=i;if(e.isMobile&&n){var r=(0,s.getNotificationsForMobileView)(t.notifications),a=this.renderReactNotifications(r.top),u=this.renderReactNotifications(r.bottom);return o.default.createElement("div",{className:"react-notification-root"},o.default.createElement("div",{className:"notification-container-mobile-top"},a.length>0&&a),o.default.createElement("div",{className:"notification-container-mobile-bottom"},u.length>0&&u))}var l=(0,s.getNotificationsForEachContainer)(t.notifications),c=this.renderReactNotifications(l.topLeft),d=this.renderReactNotifications(l.topRight),f=this.renderReactNotifications(l.bottomLeft),T=this.renderReactNotifications(l.bottomRight);return o.default.createElement("div",{className:"react-notification-root"},o.default.createElement("div",{className:"notification-container-top-left"},c.length>0&&c),o.default.createElement("div",{className:"notification-container-top-right"},d.length>0&&d),o.default.createElement("div",{className:"notification-container-bottom-left"},f.length>0&&f),o.default.createElement("div",{className:"notification-container-bottom-right"},T.length>0&&T))}}]),e}();e.default=c}]);
//# sourceMappingURL=react-notifications-component.js.map