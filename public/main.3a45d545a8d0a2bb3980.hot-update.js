/*! For license information please see main.3a45d545a8d0a2bb3980.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_website("main",{"./src/animations/VerticalSlide.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a("./node_modules/gsap/index.js"),s=a("./src/classes/Animation.js");class l extends s.default{constructor({element:e,elements:t}){super({element:e,elements:t})}animateIn(){i.default.fromTo(this.element,{autoAlpha:0,delay:.5},{autoAlpha:1,duration:1})}animateOut(){i.default.set(this.element,{autoAlpha:0})}animateRepeat(){var e={slides:this.elements.currentText,list:this.element,duration:1,lineHeight:12},t=i.default.timeline({paused:!0,repeat:-1});e.slides.forEach((function(a,i){let s="slide"+i;t.add(s),i>0&&(t.to(e.list,{duration:e.duration,y:-1*i*e.lineHeight},s),t.to({},{duration:7}))})),t.play()}}}},(function(e){e.h=()=>"2a73c8974debd58bbc57"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYTQ1ZDU0NWE4ZDBhMmJiMzk4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a05BSWUsTUFBTUEsVUFBc0JDLEVBQUFBLFFBQzFDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDdEJDLE1BQU0sQ0FBRUYsVUFBU0MsWUFDakIsQ0FFREUsWUFDQ0MsRUFBQUEsUUFBQUEsT0FDQ0MsS0FBS0wsUUFDTCxDQUNDTSxVQUFXLEVBQ1hDLE1BQU8sSUFFUixDQUNDRCxVQUFXLEVBQ1hFLFNBQVUsR0FHWixDQUVEQyxhQUNDTCxFQUFBQSxRQUFBQSxJQUFTQyxLQUFLTCxRQUFTLENBQ3RCTSxVQUFXLEdBRVosQ0FFREksZ0JBQ0MsSUFBSUMsRUFBZ0IsQ0FDbkJDLE9BQVFQLEtBQUtKLFNBQVNZLFlBQ3RCQyxLQUFNVCxLQUFLTCxRQUNYUSxTQUFVLEVBQ1ZPLFdBQVksSUFHVEMsRUFBU1osRUFBQUEsUUFBQUEsU0FBYyxDQUMxQmEsUUFBUSxFQUNSQyxRQUFTLElBR1ZQLEVBQWNDLE9BQU9PLFNBQVEsU0FBVUMsRUFBT0MsR0FFN0MsSUFBSUMsRUFBUSxRQUFVRCxFQUN0QkwsRUFBT08sSUFBSUQsR0FFUEQsRUFBSSxJQUNQTCxFQUFPUSxHQUNOYixFQUFjRyxLQUNkLENBQ0NOLFNBQVVHLEVBQWNILFNBQ3hCaUIsR0FBUSxFQUFMSixFQUFTVixFQUFjSSxZQUUzQk8sR0FHRE4sRUFBT1EsR0FBRyxDQUFDLEVBQUcsQ0FBRWhCLFNBQVUsSUFFM0IsSUFFRFEsRUFBT1UsTUFDUCxrQkM5REZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9hbmltYXRpb25zL1ZlcnRpY2FsU2xpZGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsU2xpZGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcblx0XHRzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pXG5cdH1cblxuXHRhbmltYXRlSW4oKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLmVsZW1lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0ZGVsYXk6IDAuNSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHRcdFx0ZHVyYXRpb246IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cblx0YW5pbWF0ZU91dCgpIHtcblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHR9KVxuXHR9XG5cblx0YW5pbWF0ZVJlcGVhdCgpIHtcblx0XHR2YXIgdlNsaWRlT3B0aW9ucyA9IHtcblx0XHRcdHNsaWRlczogdGhpcy5lbGVtZW50cy5jdXJyZW50VGV4dCxcblx0XHRcdGxpc3Q6IHRoaXMuZWxlbWVudCxcblx0XHRcdGR1cmF0aW9uOiAxLFxuXHRcdFx0bGluZUhlaWdodDogMTIsXG5cdFx0fVxuXG5cdFx0dmFyIHZTbGlkZSA9IEdTQVAudGltZWxpbmUoe1xuXHRcdFx0cGF1c2VkOiB0cnVlLFxuXHRcdFx0cmVwZWF0OiAtMSxcblx0XHR9KVxuXG5cdFx0dlNsaWRlT3B0aW9ucy5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGkpIHtcblx0XHRcdC8vIENyZWF0ZSBhIGxhYmVsXG5cdFx0XHRsZXQgbGFiZWwgPSAnc2xpZGUnICsgaVxuXHRcdFx0dlNsaWRlLmFkZChsYWJlbClcblx0XHRcdC8vIE1vdmUgdGhlIHdob2xlIHdvcmRcblx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHR2U2xpZGUudG8oXG5cdFx0XHRcdFx0dlNsaWRlT3B0aW9ucy5saXN0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiB2U2xpZGVPcHRpb25zLmR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0eTogaSAqIC0xICogdlNsaWRlT3B0aW9ucy5saW5lSGVpZ2h0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGFiZWxcblx0XHRcdFx0KVxuXHRcdFx0XHQvLyBBZGQgc29tZSBibGFuayBzcGFjZSBiZWZvcmUgdGhlIG5leHQgYW5pbWF0aW9uXG5cdFx0XHRcdHZTbGlkZS50byh7fSwgeyBkdXJhdGlvbjogNyB9KVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR2U2xpZGUucGxheSgpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhNzNjODk3NGRlYmQ1OGJiYzU3XCIpIl0sIm5hbWVzIjpbIlZlcnRpY2FsU2xpZGUiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwiYW5pbWF0ZUluIiwiR1NBUCIsInRoaXMiLCJhdXRvQWxwaGEiLCJkZWxheSIsImR1cmF0aW9uIiwiYW5pbWF0ZU91dCIsImFuaW1hdGVSZXBlYXQiLCJ2U2xpZGVPcHRpb25zIiwic2xpZGVzIiwiY3VycmVudFRleHQiLCJsaXN0IiwibGluZUhlaWdodCIsInZTbGlkZSIsInBhdXNlZCIsInJlcGVhdCIsImZvckVhY2giLCJzbGlkZSIsImkiLCJsYWJlbCIsImFkZCIsInRvIiwieSIsInBsYXkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=