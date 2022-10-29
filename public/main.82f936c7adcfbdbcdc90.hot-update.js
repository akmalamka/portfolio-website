/*! For license information please see main.82f936c7adcfbdbcdc90.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_website("main",{"./src/pages/Works/index.js":(e,n,i)=>{i.r(n),i.d(n,{default:()=>o});var t=i("./node_modules/lodash/each.js"),s=i.n(t),a=i("./node_modules/gsap/index.js"),r=i("./src/classes/Page.js");class o extends r.default{constructor(){super({id:"works",element:".works",elements:{openingTitles:".works__opening__title",navigation:document.querySelector(".navigation"),openingWrapper:".works__opening",wrapper:".works__wrapper",infiniteGalleryWrapper:".works__header__wrapper"}})}create(){super.create()}addEventListeners(){s()(this.elements.openingTitles,(e=>{e.innerText;e.addEventListener("click",this.onHideOpening.bind(this))}))}onHideOpening(){this.animateOnHideOpening=a.default.timeline(),s()(this.elements.openingTitles,(e=>{this.animateOnHideOpening.to(e,{autoAlpha:0,duration:.75},"-=0.5")})),this.animateOnHideOpening.to(this.elements.openingWrapper,{height:0,ease:"ease.out",duration:1})}destroy(){super.destroy()}}}},(function(e){e.h=()=>"dc216ce30fa75cd83c66"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MmY5MzZjN2FkY2ZiZGJjZGM5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1BBS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDbENDLGNBQ0NDLE1BQU0sQ0FDTEMsR0FBSSxRQUNKQyxRQUFTLFNBQ1RDLFNBQVUsQ0FDVEMsY0FBZSx5QkFDZkMsV0FBWUMsU0FBU0MsY0FBYyxlQUNuQ0MsZUFBZ0Isa0JBQ2hCQyxRQUFTLGtCQUNUQyx1QkFBd0IsNEJBRzFCLENBRURDLFNBQ0NYLE1BQU1XLFFBQ04sQ0FFREMsb0JBQ0NDLElBQUtDLEtBQUtYLFNBQVNDLGVBQWdCRixJQUNoQkEsRUFBUWEsVUFDMUJiLEVBQVFjLGlCQUFpQixRQUFTRixLQUFLRyxjQUFjQyxLQUFLSixNQUExRCxHQUVELENBRURHLGdCQUVDSCxLQUFLSyxxQkFBdUJDLEVBQUFBLFFBQUFBLFdBRTVCUCxJQUFLQyxLQUFLWCxTQUFTQyxlQUFnQkYsSUFDbENZLEtBQUtLLHFCQUFxQkUsR0FDekJuQixFQUNBLENBQUVvQixVQUFXLEVBQUdDLFNBQVUsS0FDMUIsUUFIRCxJQU1EVCxLQUFLSyxxQkFBcUJFLEdBQUdQLEtBQUtYLFNBQVNLLGVBQWdCLENBQzFEZ0IsT0FBUSxFQUNSQyxLQUFNLFdBQ05GLFNBQVUsR0FFWCxDQUtERyxVQUNDMUIsTUFBTTBCLFNBQ04sa0JDdERGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvcGFnZXMvV29ya3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IFBhZ2UgZnJvbSAnY2xhc3Nlcy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrcyBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcih7XG5cdFx0XHRpZDogJ3dvcmtzJyxcblx0XHRcdGVsZW1lbnQ6ICcud29ya3MnLFxuXHRcdFx0ZWxlbWVudHM6IHtcblx0XHRcdFx0b3BlbmluZ1RpdGxlczogJy53b3Jrc19fb3BlbmluZ19fdGl0bGUnLFxuXHRcdFx0XHRuYXZpZ2F0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpLFxuXHRcdFx0XHRvcGVuaW5nV3JhcHBlcjogJy53b3Jrc19fb3BlbmluZycsXG5cdFx0XHRcdHdyYXBwZXI6ICcud29ya3NfX3dyYXBwZXInLFxuXHRcdFx0XHRpbmZpbml0ZUdhbGxlcnlXcmFwcGVyOiAnLndvcmtzX19oZWFkZXJfX3dyYXBwZXInLFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHN1cGVyLmNyZWF0ZSgpXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHRlYWNoKHRoaXMuZWxlbWVudHMub3BlbmluZ1RpdGxlcywgKGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IGlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkhpZGVPcGVuaW5nLmJpbmQodGhpcykpXG5cdFx0fSlcblx0fVxuXG5cdG9uSGlkZU9wZW5pbmcoKSB7XG5cdFx0Ly9UT0RPIHVwZGF0ZSBhbmltYXRpb25zIHRvIGV4cGVjdGVkIGJlaGF2aW9yXG5cdFx0dGhpcy5hbmltYXRlT25IaWRlT3BlbmluZyA9IEdTQVAudGltZWxpbmUoKVxuXG5cdFx0ZWFjaCh0aGlzLmVsZW1lbnRzLm9wZW5pbmdUaXRsZXMsIChlbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFuaW1hdGVPbkhpZGVPcGVuaW5nLnRvKFxuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHR7IGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDAuNzUgfSxcblx0XHRcdFx0Jy09MC41J1xuXHRcdFx0KVxuXHRcdH0pXG5cdFx0dGhpcy5hbmltYXRlT25IaWRlT3BlbmluZy50byh0aGlzLmVsZW1lbnRzLm9wZW5pbmdXcmFwcGVyLCB7XG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHRlYXNlOiAnZWFzZS5vdXQnLFxuXHRcdFx0ZHVyYXRpb246IDEsXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXN0cm95LlxuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGMyMTZjZTMwZmE3NWNkODNjNjZcIikiXSwibmFtZXMiOlsiV29ya3MiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwib3BlbmluZ1RpdGxlcyIsIm5hdmlnYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuaW5nV3JhcHBlciIsIndyYXBwZXIiLCJpbmZpbml0ZUdhbGxlcnlXcmFwcGVyIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJlYWNoIiwidGhpcyIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkhpZGVPcGVuaW5nIiwiYmluZCIsImFuaW1hdGVPbkhpZGVPcGVuaW5nIiwiR1NBUCIsInRvIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJoZWlnaHQiLCJlYXNlIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==