import{b as a}from"./_baseMap-0fe6a14c.js";import{a as u}from"./toString-cc90cb98.js";import{b as e}from"./pick-cb331611.js";import{g as i}from"./_baseClone-30f0ee31.js";var f="Expected a function";function l(n){if(typeof n!="function")throw new TypeError(f);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function c(n,r){if(n==null)return{};var s=u(i(n),function(t){return[t]});return r=a(r),e(n,s,function(t,o){return r(t,o[0])})}function g(n,r){return c(n,l(a(r)))}export{l as n,g as o,c as p};
//# sourceMappingURL=omitBy-88568e5d.js.map