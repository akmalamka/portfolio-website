/*! For license information please see main.a4386b6e862d94b90235.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_website("main",{"./src/shaders/works-fragment.glsl":(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec4 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texture = texture2D(tMap, vUv);\n  gl_FragColor = texture;\n  gl_FragColor.a = uAlpha;\n}"}},(function(e){e.h=()=>"c303213ecfbe6ef1a3be"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNDM4NmI2ZTg2MmQ5NGI5MDIzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d0lBQUEsc1JDQUFBLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9zaGFkZXJzL3dvcmtzLWZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSBmbG9hdCB1QWxwaGE7XFxudW5pZm9ybSBzYW1wbGVyMkQgdE1hcDtcXG5cXG52YXJ5aW5nIHZlYzQgdlBvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgdmVjNCB0ZXh0dXJlID0gdGV4dHVyZTJEKHRNYXAsIHZVdik7XFxuICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlO1xcbiAgZ2xfRnJhZ0NvbG9yLmEgPSB1QWxwaGE7XFxufVwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMzMDMyMTNlY2ZiZTZlZjFhM2JlXCIpIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==