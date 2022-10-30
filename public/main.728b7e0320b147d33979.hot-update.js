/*! For license information please see main.728b7e0320b147d33979.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_website("main",{"./src/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var o=t("./node_modules/ogl/src/core/Renderer.js"),i=t("./node_modules/ogl/src/core/Camera.js"),h=t("./node_modules/ogl/src/core/Transform.js"),n=t("./src/components/Canvas/Blog/index.js");t("./src/components/Canvas/Home/index.js");Object(function(){var e=new Error("Cannot find module './HomeNew'");throw e.code="MODULE_NOT_FOUND",e}());var r=t("./src/components/Canvas/Works/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){console.log("createHome"),this.home=new Object(function(){var e=new Error("Cannot find module './HomeNew'");throw e.code="MODULE_NOT_FOUND",e}())({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createBlog(){this.blog=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyBlog(){this.blog&&(this.blog.destroy(),this.blog=null)}createWorks(){this.works=new r.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyWorks(){this.works&&(this.works.destroy(),this.works=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(e,s){this.blog&&this.blog.hide(),this.home&&this.home.hide(),this.works&&this.works.hide()}onChangeEnd(e){console.log({template:e}),"blog"===e?this.createBlog():this.destroyBlog(),"home"===e?this.createHome():this.destroyHome(),"works"===e?this.createWorks():this.destroyWorks(),this.template=e}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t};const o={sizes:this.sizes};this.blog&&this.blog.onResize(o),this.home&&this.home.onResize(o),this.works&&this.works.onResize(o)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const s={x:this.x,y:this.y};this.blog&&this.blog.onTouchDown(s),this.home&&this.home.onTouchDown(s),this.works&&this.works.onTouchDown(s)}onTouchMove(e){if(!this.isDown)return;const s=e.touches?e.touches[0].clientX:e.clientX,t=e.touches?e.touches[0].clientY:e.clientY;this.x.end=s,this.y.end=t;const o={x:this.x,y:this.y};this.blog&&this.blog.onTouchMove(o),this.home&&this.home.onTouchMove(o),this.works&&this.works.onTouchMove(o)}onTouchUp(e){this.isDown=!1;const s=e.changedTouches?e.changedTouches[0].clientX:e.clientX,t=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=s,this.y.end=t;const o={x:this.x,y:this.y};this.blog&&this.blog.onTouchUp(o),this.home&&this.home.onTouchUp(o),this.works&&this.works.onTouchUp(o)}onWheel(e){this.home&&this.home.onWheel(e),this.works&&this.works.onWheel(e)}update(e){this.blog&&this.blog.update(e),this.home&&this.home.update(),this.works&&this.works.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"f7fe46ee366a1912f710"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RFEsVUFBVU4sR0FDVDVELEtBQUs2RCxRQUFTLEVBQ2QsTUFBTTVELEVBQUkyRCxFQUFNTyxlQUNiUCxFQUFNTyxlQUFlLEdBQUdKLFFBQ3hCSCxFQUFNRyxRQUNIMUQsRUFBSXVELEVBQU1PLGVBQ2JQLEVBQU1PLGVBQWUsR0FBR0gsUUFDeEJKLEVBQU1JLFFBRVRoRSxLQUFLQyxFQUFFRyxJQUFNSCxFQUNiRCxLQUFLSyxFQUFFRCxJQUFNQyxFQUViLE1BQU1xRCxFQUFTLENBQUV6RCxFQUFHRCxLQUFLQyxFQUFHSSxFQUFHTCxLQUFLSyxHQUNoQ0wsS0FBS2tDLE1BQ1JsQyxLQUFLa0MsS0FBS2dDLFVBQVVSLEdBRWpCMUQsS0FBSzRCLE1BQ1I1QixLQUFLNEIsS0FBS3NDLFVBQVVSLEdBRWpCMUQsS0FBS3NDLE9BQ1J0QyxLQUFLc0MsTUFBTTRCLFVBQVVSLEVBRXRCLENBRURVLFFBQVFSLEdBQ0g1RCxLQUFLNEIsTUFDUjVCLEtBQUs0QixLQUFLd0MsUUFBUVIsR0FFZjVELEtBQUtzQyxPQUNSdEMsS0FBS3NDLE1BQU04QixRQUFRUixFQUVwQixDQU1EUyxPQUFPQyxHQUNGdEUsS0FBS2tDLE1BQ1JsQyxLQUFLa0MsS0FBS21DLE9BQU9DLEdBRWR0RSxLQUFLNEIsTUFDUjVCLEtBQUs0QixLQUFLeUMsU0FFUHJFLEtBQUtzQyxPQUNSdEMsS0FBS3NDLE1BQU0rQixTQUdackUsS0FBS1UsU0FBUzZELE9BQU8sQ0FDcEJwRCxPQUFRbkIsS0FBS21CLE9BQ2JJLE1BQU92QixLQUFLdUIsT0FFYixrQkN0UUZpRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEJsb2cgZnJvbSAnLi9CbG9nJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEhvbWVOZXcgZnJvbSAnLi9Ib21lTmV3J1xuaW1wb3J0IFdvcmtzIGZyb20gJy4vV29ya3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuXHRcdFx0YWxwaGE6IHRydWUsXG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHQvKipcblx0ICogSG9tZVxuXHQgKi9cblx0Y3JlYXRlSG9tZSgpIHtcblx0XHRjb25zb2xlLmxvZygnY3JlYXRlSG9tZScpXG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWVOZXcoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qKlxuXHQgKiBCbG9nXG5cdCAqL1xuXHRjcmVhdGVCbG9nKCkge1xuXHRcdHRoaXMuYmxvZyA9IG5ldyBCbG9nKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUJsb2coKSB7XG5cdFx0aWYgKCF0aGlzLmJsb2cpIHJldHVyblxuXHRcdHRoaXMuYmxvZy5kZXN0cm95KClcblx0XHR0aGlzLmJsb2cgPSBudWxsXG5cdH1cblxuXHQvKipcblx0ICogV29ya3Ncblx0ICovXG5cdGNyZWF0ZVdvcmtzKCkge1xuXHRcdHRoaXMud29ya3MgPSBuZXcgV29ya3Moe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95V29ya3MoKSB7XG5cdFx0aWYgKCF0aGlzLndvcmtzKSByZXR1cm5cblx0XHR0aGlzLndvcmtzLmRlc3Ryb3koKVxuXHRcdHRoaXMud29ya3MgPSBudWxsXG5cdH1cblxuXHQvKipcblx0ICogRXZlbnRzXG5cdCAqL1xuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcblx0fVxuXG5cdG9uQ2hhbmdlU3RhcnQodGVtcGxhdGUsIHVybCkge1xuXHRcdGlmICh0aGlzLmJsb2cpIHtcblx0XHRcdHRoaXMuYmxvZy5oaWRlKClcblx0XHR9XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLmhpZGUoKVxuXHRcdH1cblx0XHRpZiAodGhpcy53b3Jrcykge1xuXHRcdFx0dGhpcy53b3Jrcy5oaWRlKClcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZUVuZCh0ZW1wbGF0ZSkge1xuXHRcdGNvbnNvbGUubG9nKHsgdGVtcGxhdGUgfSlcblx0XHRpZiAodGVtcGxhdGUgPT09ICdibG9nJykge1xuXHRcdFx0dGhpcy5jcmVhdGVCbG9nKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95QmxvZygpXG5cdFx0fVxuXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ3dvcmtzJykge1xuXHRcdFx0dGhpcy5jcmVhdGVXb3JrcygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveVdvcmtzKClcblx0XHR9XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7IHNpemVzOiB0aGlzLnNpemVzIH1cblxuXHRcdGlmICh0aGlzLmJsb2cpIHtcblx0XHRcdHRoaXMuYmxvZy5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0fVxuXHRcdGlmICh0aGlzLmhvbWUpIHtcblx0XHRcdHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0fVxuXHRcdGlmICh0aGlzLndvcmtzKSB7XG5cdFx0XHR0aGlzLndvcmtzLm9uUmVzaXplKHZhbHVlcylcblx0XHR9XG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9XG5cdFx0aWYgKHRoaXMuYmxvZykge1xuXHRcdFx0dGhpcy5ibG9nLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHR9XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHR9XG5cdFx0aWYgKHRoaXMud29ya3MpIHtcblx0XHRcdHRoaXMud29ya3Mub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdH1cblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfVxuXHRcdGlmICh0aGlzLmJsb2cpIHtcblx0XHRcdHRoaXMuYmxvZy5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0fVxuXHRcdGlmICh0aGlzLmhvbWUpIHtcblx0XHRcdHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0fVxuXHRcdGlmICh0aGlzLndvcmtzKSB7XG5cdFx0XHR0aGlzLndvcmtzLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHR9XG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cdFx0Y29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzXG5cdFx0XHQ/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcblx0XHRcdDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1xuXHRcdFx0PyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG5cdFx0XHQ6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfVxuXHRcdGlmICh0aGlzLmJsb2cpIHtcblx0XHRcdHRoaXMuYmxvZy5vblRvdWNoVXAodmFsdWVzKVxuXHRcdH1cblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHR9XG5cdFx0aWYgKHRoaXMud29ya3MpIHtcblx0XHRcdHRoaXMud29ya3Mub25Ub3VjaFVwKHZhbHVlcylcblx0XHR9XG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0fVxuXHRcdGlmICh0aGlzLndvcmtzKSB7XG5cdFx0XHR0aGlzLndvcmtzLm9uV2hlZWwoZXZlbnQpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIExvb3Bcblx0ICovXG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICh0aGlzLmJsb2cpIHtcblx0XHRcdHRoaXMuYmxvZy51cGRhdGUoc2Nyb2xsKVxuXHRcdH1cblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUudXBkYXRlKClcblx0XHR9XG5cdFx0aWYgKHRoaXMud29ya3MpIHtcblx0XHRcdHRoaXMud29ya3MudXBkYXRlKClcblx0XHR9XG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjdmZTQ2ZWUzNjZhMTkxMmY3MTBcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiY29uc29sZSIsImxvZyIsImhvbWUiLCJIb21lTmV3Iiwic2l6ZXMiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJjcmVhdGVCbG9nIiwiYmxvZyIsIkJsb2ciLCJkZXN0cm95QmxvZyIsImNyZWF0ZVdvcmtzIiwid29ya3MiLCJXb3JrcyIsImRlc3Ryb3lXb3JrcyIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJvbkNoYW5nZVN0YXJ0IiwidXJsIiwiaGlkZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9