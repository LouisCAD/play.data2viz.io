!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function o(e){let t=!1;window.addEventListener("scroll",n=>{t||window.requestAnimationFrame(()=>{e(),t=!1}),t=!0})}function i(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}var r;n.r(t),function(e){e.CODE_AREA=".code-area",e.CONTENT="#d2v-content",e.CURRENT_SECTION_NAME="#current-section-name",e.TOP_HEADER="#d2v-header",e.NAVIGATION_MENU="#site-navigation"}(r||(r={}));class s{constructor(e,t){this._element=e,this._elementInMenu=this.getElementInMenu(t)}get isActive(){return this._element.getBoundingClientRect().top<=window.innerHeight/2}set classname(e){"active"===e?this._elementInMenuContainsActiveClass||this._elementInMenu.classList.add("active"):this._elementInMenuContainsActiveClass&&this._elementInMenu.classList.remove("active")}getElementInMenu(e){const t=document.querySelectorAll(`${r.NAVIGATION_MENU} > li > ul > li > a`);for(const e of t)if(e.getAttribute("href")==="#"+this._element.getAttribute("id"))return e}get _elementInMenuContainsActiveClass(){return void 0!==this._elementInMenu&&this._elementInMenu.classList.contains("active")}}class c{constructor(e,t){this.codeArea=e,this.kotlinEditor=t,this._hasBeenExecuted=!1}get hasNotBeenExecuted(){return!this._hasBeenExecuted}get isOnScreen(){return this.codeArea.getBoundingClientRect().bottom>=0&&this.codeArea.getBoundingClientRect().bottom<=window.innerHeight}execute(){return new Promise((e,t)=>{this._hasBeenExecuted=!0,this.kotlinEditor.execute(),e(),t(new Error("can't execute kotlin playground editor"))})}}class u{constructor(e){this.editors=[],this.setEditors(e),this.setListenerForEditorsAutoExecution()}setEditors(e){for(const t in e){const n=e[t],o=n.nodes[0].querySelector(r.CODE_AREA);null!==o?this.editors.push(new c(o,n)):console.error(`codeArea of ${t+1} kotlin editor`)}}setListenerForEditorsAutoExecution(){o(()=>{for(const e of this.editors)e.isOnScreen&&e.hasNotBeenExecuted&&e.execute()})}}const l=[];KotlinPlayground(".kotlin-code",{getInstance:e=>{l.push(e)}}).then(()=>{new u(l)}),function(e,t){const n=document.body,r=void 0===t?0:t.getBoundingClientRect().height;o(()=>{const t=parseInt(window.getComputedStyle(e).paddingTop)-r;i()>=t&&!n.classList.contains("menu-fixed")?n.classList.add("menu-fixed"):i()<=t&&n.classList.contains("menu-fixed")&&n.classList.remove("menu-fixed")})}(document.querySelector(r.CONTENT),document.querySelector(r.TOP_HEADER)),document.querySelector(r.CURRENT_SECTION_NAME).innerHTML=function(){const e=document.querySelector("h1");return null!==e?e.innerHTML:""}(),function(){const e=document.querySelectorAll(`${r.NAVIGATION_MENU} > li > a`),t=document.querySelector("h1");if(null!==t)for(const n of e)n.innerHTML===t.innerHTML&&n.classList.add("active")}(),new Promise((e,t)=>{const n=[],o=document.querySelectorAll(`${r.CONTENT} h2`),i=document.querySelector(`${r.NAVIGATION_MENU}`);for(const e of o)n.push(new s(e,i));e(n.reverse()),t(new Error("can't get list of level two in navigation menu"))}).then(e=>{o(()=>{!function(e){let t=!0;for(const n of e)n.isActive&&t?(t=!1,n.classname="active"):n.classname="unactive"}(e)})});n(0)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRQYWdlU2Nyb2xsUG9zaXRpb25Ub3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvSFRNTF9TRUxFQ1RPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2aWdhdGlvbk1lbnUvc2V0TmF2aWdhdGlvbk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZWRpdG9yL0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lZGl0b3IvRDJWS290bGluRWRpdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lZGl0b3Ivc2V0RWRpdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZW51UG9zaXRpb25PYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL25hdmlnYXRpb25NZW51L3NldEN1cnJlbnRTZWN0aW9uTmFtZS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImFkZFNjcm9sbEV2ZW50TGlzdGVuZXIiLCJmdW4iLCJ0aWNraW5nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wIiwidW5kZWZpbmVkIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJwYXJlbnROb2RlIiwic2Nyb2xsVG9wIiwiSFRNTF9TRUxFQ1RPUlMiLCJzZXROYXZpZ2F0aW9uTWVudV9UaXRsZUxldmVsVHdvIiwiW29iamVjdCBPYmplY3RdIiwiZWxlbWVudCIsIm5hdmlnYXRpb25NZW51RWxlbWVudCIsInRoaXMiLCJfZWxlbWVudCIsIl9lbGVtZW50SW5NZW51IiwiZ2V0RWxlbWVudEluTWVudSIsImlzQWN0aXZlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJjbGFzc25hbWUiLCJfZWxlbWVudEluTWVudUNvbnRhaW5zQWN0aXZlQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsaXN0T2ZMZXZlbFR3b0luTWVudSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJOQVZJR0FUSU9OX01FTlUiLCJsZXZlbFR3b0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjb250YWlucyIsIkVkaXRvciIsImNvZGVBcmVhIiwia290bGluRWRpdG9yIiwiX2hhc0JlZW5FeGVjdXRlZCIsImhhc05vdEJlZW5FeGVjdXRlZCIsImlzT25TY3JlZW4iLCJib3R0b20iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImV4ZWN1dGUiLCJFcnJvciIsIkQyVktvdGxpbkVkaXRvcnNfRDJWS290bGluRWRpdG9ycyIsImtvdGxpbkVkaXRvcnMiLCJlZGl0b3JzIiwic2V0RWRpdG9ycyIsInNldExpc3RlbmVyRm9yRWRpdG9yc0F1dG9FeGVjdXRpb24iLCJlZGl0b3IiLCJub2RlcyIsInF1ZXJ5U2VsZWN0b3IiLCJDT0RFX0FSRUEiLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwibGlzdE9mS290bGluUGxheWdyb3VuZEVkaXRvcnMiLCJLb3RsaW5QbGF5Z3JvdW5kIiwiZ2V0SW5zdGFuY2UiLCJrb3RsaW5QbGF5Z3JvdW5kRWRpdG9yIiwidGhlbiIsInJlZmVyZW5jZUVsZW1lbnRGb3JGaXhlZE1lbnUiLCJ0b3BFbGVtZW50Rml4ZWRPdmVyTWVudSIsImhlaWdodE9mRml4ZWRFbGVtZW50VGhhdEhpZGVzTWVudSIsImhlaWdodCIsInJlZlBvc2l0aW9uRm9yRml4ZWRNZW51IiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFkZGluZ1RvcCIsIm1lbnVQb3NpdGlvbk9ic2VydmVyIiwiQ09OVEVOVCIsIlRPUF9IRUFERVIiLCJDVVJSRU5UX1NFQ1RJT05fTkFNRSIsImlubmVySFRNTCIsInBhZ2VUaXRsZUVsZW1lbnQiLCJnZXRDdXJyZW50U2VjdGlvbk5hbWUiLCJMRVZFTF9PTl9OQVZJR0FUSU9OX0VMRU1FTlRTIiwiY3VycmVudFRpdGxlUGFnZSIsImxldmVsMU1lbnVOYXZpZ2F0aW9uRWxlbWVudCIsInNldExldmVsTmF2T25lIiwibGlzdFRvUmV0dXJuIiwiVElUTEVfVFdPX0VMRU1FTlRTIiwiTkFWSUdBVElPTl9NRU5VX0VMRU1FTlQiLCJuYXZpZ2F0aW9uVHdvRWxlbWVudCIsInJldmVyc2UiLCJsaXN0T2ZUaXRsZUxldmVsVHdvIiwibGFzdFRpdGxlSXNOb3RGb3VuZCIsInRpdGxlTGV2ZWxUd28iLCJ1cGRhdGVMZXZlbFR3b0luTmF2aWdhdGlvbk1lbnUiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVB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QWR6RCxlQWV0QjFCLEVBQUtrQixVQUFVRSxPQWZPLGdCQ0NsQzRDLENBQ0lsRSxTQUFTZ0QsY0FBYzNDLEVBQWU4RCxTQUN0Q25FLFNBQVNnRCxjQUFjM0MsRUFBZStELGFDUHJDcEUsU0FBU2dELGNBQWMzQyxFQUFlZ0Usc0JBQXNDQyxVQUdqRixXQUNJLE1BQU1DLEVBQW1CdkUsU0FBU2dELGNBQWMsTUFDaEQsT0FBd0IsT0FBckJ1QixFQUNRQSxFQUFpQkQsVUFFakIsR0FSOEVFLEdOSzdGLFdBQ0ksTUFFTUMsRUFBK0J6RSxTQUFTd0Isb0JBQW9CbkIsRUFBZW9CLDRCQUUzRWlELEVBQW1CMUUsU0FBU2dELGNBQWMsTUFFaEQsR0FBd0IsT0FBckIwQixFQUNDLElBQUksTUFBTUMsS0FBK0JGLEVBQ2xDRSxFQUE0QkwsWUFBY0ksRUFBaUJKLFdBQzFESyxFQUE0QnZELFVBQVVDLElBVGhCLFVBTGxDdUQsR0EwQ08sSUFBSXhDLFFBQVEsQ0FBQ0MsRUFBU0MsS0FDekIsTUFBTXVDLEtBRUFDLEVBQXFCOUUsU0FBU3dCLG9CQUFvQm5CLEVBQWU4RCxjQUNqRVksRUFBMEIvRSxTQUFTZ0QsaUJBQWlCM0MsRUFBZW9CLG1CQUV6RSxJQUFJLE1BQU11RCxLQUF3QkYsRUFDOUJELEVBQWEzQixLQUFLLElBQUk1QyxFQUFjMEUsRUFBc0JELElBRzlEMUMsRUFBUXdDLEVBQWFJLFdBRXJCM0MsRUFBTyxJQUFJRSxNQUFNLHFEQWpDU2lCLEtBQU1sRixJQUNoQ2UsRUFBdUIsTUFNL0IsU0FBd0M0RixHQUNwQyxJQUFJQyxHQUFzQixFQUUxQixJQUFJLE1BQU1DLEtBQWlCRixFQUNwQkUsRUFBY3RFLFVBQVlxRSxHQUN6QkEsR0FBc0IsRUFDdEJDLEVBQWNsRSxVQUFZLFVBRTFCa0UsRUFBY2xFLFVBQVksV0FiMUJtRSxDQUErQjlHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcihmdW46ICgpID0+IHZvaWQpIHtcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGV2KSA9PiB7XG4gICAgICAgIGlmKCF0aWNraW5nKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmdW4oKVxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aWNraW5nID0gdHJ1ZVxuICAgIH0pXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcFxufSIsImV4cG9ydCBlbnVtIEhUTUxfU0VMRUNUT1JTIHtcbiAgICBDT0RFX0FSRUEgICAgICAgICAgICAgICA9IFwiLmNvZGUtYXJlYVwiLFxuICAgIENPTlRFTlQgICAgICAgICAgICAgICAgID0gXCIjZDJ2LWNvbnRlbnRcIixcbiAgICBDVVJSRU5UX1NFQ1RJT05fTkFNRSAgICA9IFwiI2N1cnJlbnQtc2VjdGlvbi1uYW1lXCIsXG4gICAgVE9QX0hFQURFUiAgICAgICAgICAgICAgPSBcIiNkMnYtaGVhZGVyXCIsXG4gICAgTkFWSUdBVElPTl9NRU5VICAgICAgICAgPSBcIiNzaXRlLW5hdmlnYXRpb25cIlxufSIsImltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5pbXBvcnQge2FkZFNjcm9sbEV2ZW50TGlzdGVuZXJ9IGZyb20gXCIuLi9hZGRTY3JvbGxFdmVudExpc3RlbmVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdmlnYXRpb25NZW51KCkge1xuICAgIHNldExldmVsTmF2T25lKClcbiAgICBzZXRMZXZlbE5hdlR3bygpXG59XG5cbmZ1bmN0aW9uIHNldExldmVsTmF2T25lKCkge1xuICAgIGNvbnN0IENVUlJFTlRfU0VDVElPTl9DTEFTU05BTUUgPSBcImFjdGl2ZVwiXG5cbiAgICBjb25zdCBMRVZFTF9PTl9OQVZJR0FUSU9OX0VMRU1FTlRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtIVE1MX1NFTEVDVE9SUy5OQVZJR0FUSU9OX01FTlV9ID4gbGkgPiBhYClcblxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIilcblxuICAgIGlmKGN1cnJlbnRUaXRsZVBhZ2UgIT09IG51bGwpe1xuICAgICAgICBmb3IoY29uc3QgbGV2ZWwxTWVudU5hdmlnYXRpb25FbGVtZW50IG9mIExFVkVMX09OX05BVklHQVRJT05fRUxFTUVOVFMpIHtcbiAgICAgICAgICAgIGlmKGxldmVsMU1lbnVOYXZpZ2F0aW9uRWxlbWVudC5pbm5lckhUTUwgPT09IGN1cnJlbnRUaXRsZVBhZ2UuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWwxTWVudU5hdmlnYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoQ1VSUkVOVF9TRUNUSU9OX0NMQVNTTkFNRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0TGV2ZWxOYXZUd28oKSB7XG4gICAgZ2VuZXJhdGVMaXN0T2ZUaXRsZUxldmVsVHdvKCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVMZXZlbFR3b0luTmF2aWdhdGlvbk1lbnUodmFsdWUpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGV2ZWxUd29Jbk5hdmlnYXRpb25NZW51KGxpc3RPZlRpdGxlTGV2ZWxUd286IFRpdGxlTGV2ZWxUd29bXSkge1xuICAgIGxldCBsYXN0VGl0bGVJc05vdEZvdW5kID0gdHJ1ZVxuXG4gICAgZm9yKGNvbnN0IHRpdGxlTGV2ZWxUd28gb2YgbGlzdE9mVGl0bGVMZXZlbFR3bykge1xuICAgICAgICBpZih0aXRsZUxldmVsVHdvLmlzQWN0aXZlICYmIGxhc3RUaXRsZUlzTm90Rm91bmQpIHtcbiAgICAgICAgICAgIGxhc3RUaXRsZUlzTm90Rm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdGl0bGVMZXZlbFR3by5jbGFzc25hbWUgPSBcImFjdGl2ZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZUxldmVsVHdvLmNsYXNzbmFtZSA9IFwidW5hY3RpdmVcIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RPZlRpdGxlTGV2ZWxUd28oKTogUHJvbWlzZTxUaXRsZUxldmVsVHdvW10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0VG9SZXR1cm4gPSBbXVxuXG4gICAgICAgIGNvbnN0IFRJVExFX1RXT19FTEVNRU5UUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7SFRNTF9TRUxFQ1RPUlMuQ09OVEVOVH0gaDJgKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICAgICBjb25zdCBOQVZJR0FUSU9OX01FTlVfRUxFTUVOVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7SFRNTF9TRUxFQ1RPUlMuTkFWSUdBVElPTl9NRU5VfWApIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgZm9yKGNvbnN0IG5hdmlnYXRpb25Ud29FbGVtZW50IG9mIFRJVExFX1RXT19FTEVNRU5UUykge1xuICAgICAgICAgICAgbGlzdFRvUmV0dXJuLnB1c2gobmV3IFRpdGxlTGV2ZWxUd28obmF2aWdhdGlvblR3b0VsZW1lbnQsIE5BVklHQVRJT05fTUVOVV9FTEVNRU5UKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUobGlzdFRvUmV0dXJuLnJldmVyc2UoKSlcblxuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiY2FuJ3QgZ2V0IGxpc3Qgb2YgbGV2ZWwgdHdvIGluIG5hdmlnYXRpb24gbWVudVwiKSlcbiAgICB9KVxufVxuXG5jbGFzcyBUaXRsZUxldmVsVHdvIHtcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSBfZWxlbWVudEluTWVudTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBuYXZpZ2F0aW9uTWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgIHRoaXMuX2VsZW1lbnRJbk1lbnUgPSB0aGlzLmdldEVsZW1lbnRJbk1lbnUobmF2aWdhdGlvbk1lbnVFbGVtZW50KVxuICAgIH1cblxuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICB9XG5cbiAgICBzZXQgY2xhc3NuYW1lKGNsYXNzbmFtZTogXCJhY3RpdmVcInxcInVuYWN0aXZlXCIpIHtcbiAgICAgICAgaWYoY2xhc3NuYW1lID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICBpZighIHRoaXMuX2VsZW1lbnRJbk1lbnVDb250YWluc0FjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX2VsZW1lbnRJbk1lbnUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2VsZW1lbnRJbk1lbnVDb250YWluc0FjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX2VsZW1lbnRJbk1lbnUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RWxlbWVudEluTWVudShuYXZpZ2F0aW9uTWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxpc3RPZkxldmVsVHdvSW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtIVE1MX1NFTEVDVE9SUy5OQVZJR0FUSU9OX01FTlV9ID4gbGkgPiB1bCA+IGxpID4gYWApIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XG5cbiAgICAgICAgZm9yKGNvbnN0IGxldmVsVHdvRWxlbWVudCBvZiBsaXN0T2ZMZXZlbFR3b0luTWVudSkge1xuICAgICAgICAgICAgaWYobGV2ZWxUd29FbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiICsgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZXZlbFR3b0VsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9lbGVtZW50SW5NZW51Q29udGFpbnNBY3RpdmVDbGFzcygpIHtcbiAgICAgICAgaWYodGhpcy5fZWxlbWVudEluTWVudSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudEluTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJS290bGluUGxheWdyb3VuZEVkaXRvcn0gZnJvbSBcIi4vSUtvdGxpblBsYXlncm91bmRFZGl0b3JcIlxuXG5leHBvcnQgY2xhc3MgRWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGNvZGVBcmVhOiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHVibGljIGtvdGxpbkVkaXRvcjogSUtvdGxpblBsYXlncm91bmRFZGl0b3IsXG4gICAgKSB7fVxuXG4gICAgcHJpdmF0ZSBfaGFzQmVlbkV4ZWN1dGVkID0gZmFsc2VcbiAgICBnZXQgaGFzTm90QmVlbkV4ZWN1dGVkKCkgeyByZXR1cm4gIXRoaXMuX2hhc0JlZW5FeGVjdXRlZH1cblxuICAgIGdldCBpc09uU2NyZWVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPj0gMCAmJiB0aGlzLmNvZGVBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkV4ZWN1dGVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5rb3RsaW5FZGl0b3IuZXhlY3V0ZSgpXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJjYW4ndCBleGVjdXRlIGtvdGxpbiBwbGF5Z3JvdW5kIGVkaXRvclwiKSlcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUtvdGxpblBsYXlncm91bmRFZGl0b3J9IGZyb20gXCIuL0lLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yXCJcbmltcG9ydCB7RWRpdG9yfSBmcm9tIFwiLi9FZGl0b3JcIlxuaW1wb3J0IHthZGRTY3JvbGxFdmVudExpc3RlbmVyfSBmcm9tIFwiLi4vYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lclwiXG5pbXBvcnQge0hUTUxfU0VMRUNUT1JTfSBmcm9tIFwiLi4vSFRNTF9TRUxFQ1RPUlNcIlxuXG5leHBvcnQgY2xhc3MgRDJWS290bGluRWRpdG9ycyB7XG4gICAgY29uc3RydWN0b3Ioa290bGluRWRpdG9yczogSUtvdGxpblBsYXlncm91bmRFZGl0b3JbXSkge1xuXG4gICAgICAgIHRoaXMuc2V0RWRpdG9ycyhrb3RsaW5FZGl0b3JzKVxuXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJGb3JFZGl0b3JzQXV0b0V4ZWN1dGlvbigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0b3JzOiBFZGl0b3JbXSA9IFtdXG5cbiAgICBwcml2YXRlIHNldEVkaXRvcnMoa290bGluRWRpdG9yczogSUtvdGxpblBsYXlncm91bmRFZGl0b3JbXSkge1xuICAgICAgICBmb3IoY29uc3QgaSBpbiBrb3RsaW5FZGl0b3JzKSB7XG4gICAgICAgICAgICBjb25zdCBlZGl0b3IgPSBrb3RsaW5FZGl0b3JzW2ldXG4gICAgICAgICAgICBjb25zdCBjb2RlQXJlYSA9IGVkaXRvci5ub2Rlc1swXS5xdWVyeVNlbGVjdG9yKEhUTUxfU0VMRUNUT1JTLkNPREVfQVJFQSlcblxuICAgICAgICAgICAgaWYoY29kZUFyZWEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvcnMucHVzaChuZXcgRWRpdG9yKGNvZGVBcmVhIGFzIEhUTUxEaXZFbGVtZW50LCBlZGl0b3IpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBjb2RlQXJlYSBvZiAke2kgKyAxfSBrb3RsaW4gZWRpdG9yYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TGlzdGVuZXJGb3JFZGl0b3JzQXV0b0V4ZWN1dGlvbigpIHtcbiAgICAgICAgYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBmb3IoY29uc3QgZWRpdG9yIG9mIHRoaXMuZWRpdG9ycykge1xuICAgICAgICAgICAgICAgIGlmKGVkaXRvci5pc09uU2NyZWVuICYmIGVkaXRvci5oYXNOb3RCZWVuRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWN1dGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0lLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yfSBmcm9tIFwiLi9JS290bGluUGxheWdyb3VuZEVkaXRvclwiXG5pbXBvcnQge0QyVktvdGxpbkVkaXRvcnN9IGZyb20gXCIuL0QyVktvdGxpbkVkaXRvcnNcIlxuXG5kZWNsYXJlIGZ1bmN0aW9uIEtvdGxpblBsYXlncm91bmQoc2VsZWN0b3I6IHN0cmluZywgZXZlbnRGdW5jdGlvbnM/OiBJRXZlbnRGdW5jdGlvbnMpOiBQcm9taXNlPElLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yW10+XG5cbmludGVyZmFjZSBJRXZlbnRGdW5jdGlvbnMge1xuICAgIGNhbGxiYWNrPzogKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50LCBtb3VudE5vZGU6IEhUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgIGdldEluc3RhbmNlPzogKGluc3RhbmNlOiBJS290bGluUGxheWdyb3VuZEVkaXRvcikgPT4gdm9pZFxuICAgIG9uQ2hhbmdlPzogKGNvZGU6IHN0cmluZykgPT4gdm9pZCxcbiAgICBvblRlc3RQYXNzZWQ/OiAoKSA9PiB2b2lkLFxufVxuXG5jb25zdCBsaXN0T2ZLb3RsaW5QbGF5Z3JvdW5kRWRpdG9yczogSUtvdGxpblBsYXlncm91bmRFZGl0b3JbXSA9IFtdXG5cbmNvbnN0IGV2ZW50RnVuY3Rpb25zID0ge1xuICAgIGdldEluc3RhbmNlOiAoa290bGluUGxheWdyb3VuZEVkaXRvcjogSUtvdGxpblBsYXlncm91bmRFZGl0b3IpID0+IHtcbiAgICAgICAgbGlzdE9mS290bGluUGxheWdyb3VuZEVkaXRvcnMucHVzaChrb3RsaW5QbGF5Z3JvdW5kRWRpdG9yKVxuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRFZGl0b3JzKCkge1xuICAgIEtvdGxpblBsYXlncm91bmQoJy5rb3RsaW4tY29kZScsIGV2ZW50RnVuY3Rpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV3IEQyVktvdGxpbkVkaXRvcnMobGlzdE9mS290bGluUGxheWdyb3VuZEVkaXRvcnMpXG4gICAgfSlcbn1cbiIsImltcG9ydCB7YWRkU2Nyb2xsRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vYWRkU2Nyb2xsRXZlbnRMaXN0ZW5lclwiXG5pbXBvcnQge2dldFBhZ2VTY3JvbGxQb3NpdGlvblRvcH0gZnJvbSBcIi4vZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuL0hUTUxfU0VMRUNUT1JTXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gbWVudVBvc2l0aW9uT2JzZXJ2ZXIocmVmZXJlbmNlRWxlbWVudEZvckZpeGVkTWVudTogSFRNTEVsZW1lbnQsIHRvcEVsZW1lbnRGaXhlZE92ZXJNZW51PzogSFRNTEVsZW1lbnQpIHtcblxuICAgIGNvbnN0IEZJWEVEX01FTlVfQ0xBU1NfTkFNRSA9IFwibWVudS1maXhlZFwiXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuXG4gICAgY29uc3QgaGVpZ2h0T2ZGaXhlZEVsZW1lbnRUaGF0SGlkZXNNZW51ID0gdG9wRWxlbWVudEZpeGVkT3Zlck1lbnUgPT09IHVuZGVmaW5lZCA/ICAwIDogdG9wRWxlbWVudEZpeGVkT3Zlck1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cbiAgICBhZGRTY3JvbGxFdmVudExpc3RlbmVyKCgpID0+IHtcblxuICAgICAgICBjb25zdCBwb3NpdGlvblRvcE9mUmVmRWxlbWVudCA9IHBhcnNlSW50KCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyZWZlcmVuY2VFbGVtZW50Rm9yRml4ZWRNZW51KS5wYWRkaW5nVG9wIGFzIHN0cmluZyApXG5cbiAgICAgICAgY29uc3QgcmVmUG9zaXRpb25Gb3JGaXhlZE1lbnUgPSBwb3NpdGlvblRvcE9mUmVmRWxlbWVudCAtIGhlaWdodE9mRml4ZWRFbGVtZW50VGhhdEhpZGVzTWVudVxuXG4gICAgICAgIGlmKGdldFBhZ2VTY3JvbGxQb3NpdGlvblRvcCgpID49IHJlZlBvc2l0aW9uRm9yRml4ZWRNZW51ICYmICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhGSVhFRF9NRU5VX0NMQVNTX05BTUUpKXtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChGSVhFRF9NRU5VX0NMQVNTX05BTUUpXG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0UGFnZVNjcm9sbFBvc2l0aW9uVG9wKCkgPD0gcmVmUG9zaXRpb25Gb3JGaXhlZE1lbnUgJiYgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoRklYRURfTUVOVV9DTEFTU19OQU1FKSkge1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKEZJWEVEX01FTlVfQ0xBU1NfTkFNRSlcbiAgICAgICAgfVxuXG4gICAgfSlcbn1cbiIsImltcG9ydCB7bWVudVBvc2l0aW9uT2JzZXJ2ZXJ9IGZyb20gXCIuL21lbnVQb3NpdGlvbk9ic2VydmVyXCJcbmltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuL0hUTUxfU0VMRUNUT1JTXCJcbmltcG9ydCB7c2V0Q3VycmVudFNlY3Rpb25OYW1lfSBmcm9tIFwiLi9uYXZpZ2F0aW9uTWVudS9zZXRDdXJyZW50U2VjdGlvbk5hbWVcIlxuaW1wb3J0IHtzZXROYXZpZ2F0aW9uTWVudX0gZnJvbSBcIi4vbmF2aWdhdGlvbk1lbnUvc2V0TmF2aWdhdGlvbk1lbnVcIlxuaW1wb3J0IHtzZXRFZGl0b3JzfSBmcm9tIFwiLi9lZGl0b3Ivc2V0RWRpdG9yc1wiXG5cbnNldEVkaXRvcnMoKVxuXG5tZW51UG9zaXRpb25PYnNlcnZlcihcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEhUTUxfU0VMRUNUT1JTLkNPTlRFTlQpIGFzIEhUTUxFbGVtZW50LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSFRNTF9TRUxFQ1RPUlMuVE9QX0hFQURFUikgYXMgSFRNTEVsZW1lbnQsXG4pXG5cblxuc2V0Q3VycmVudFNlY3Rpb25OYW1lKClcblxuc2V0TmF2aWdhdGlvbk1lbnUoKSIsImltcG9ydCB7SFRNTF9TRUxFQ1RPUlN9IGZyb20gXCIuLi9IVE1MX1NFTEVDVE9SU1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50U2VjdGlvbk5hbWUoKSB7XG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSFRNTF9TRUxFQ1RPUlMuQ1VSUkVOVF9TRUNUSU9OX05BTUUpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBnZXRDdXJyZW50U2VjdGlvbk5hbWUoKVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2VjdGlvbk5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYWdlVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpXG4gICAgaWYocGFnZVRpdGxlRWxlbWVudCAhPT0gbnVsbCApIHtcbiAgICAgICAgcmV0dXJuIHBhZ2VUaXRsZUVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9