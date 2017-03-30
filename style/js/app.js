! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e }

    function r(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n });
        if (t.nodeType) return it.grep(e, function(e) {
            return e === t !== n });
        if ("string" == typeof t) {
            if (ft.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e) }
        return it.grep(e, function(e) {
            return it.inArray(e, t) >= 0 !== n }) }

    function i(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
        return e }

    function o(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function(e, n) { t[n] = !0 }), t }

    function a() { ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready()) }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? it.parseJSON(n) : n } catch (i) {}
                it.data(e, t, n) } else n = void 0 }
        return n }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0 }

    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, o, a = it.expando,
                s = e.nodeType,
                u = s ? it.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = Q.pop() || it.guid++ : a), u[l] || (u[l] = s ? {} : { toJSON: it.noop }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = it.extend(u[l], t) : u[l].data = it.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i } }

    function d(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? it.cache : e,
                s = o ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) { it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !it.isEmptyObject(r)) return }(n || (delete a[s].data, l(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } }

    function f() {
        return !0 }

    function p() {
        return !1 }

    function h() {
        try {
            return ht.activeElement } catch (e) {} }

    function m(e) {
        var t = $t.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== kt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== kt ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o }

    function v(e) { Lt.test(e.type) && (e.defaultChecked = e.checked) }

    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e }

    function x(e) {
        var t = Vt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval")) }

    function T(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, o = it._data(e),
                a = it._data(t, o),
                s = o.events;
            if (s) { delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r]) }
            a.data && (a.data = it.extend({}, a.data)) } }

    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) { i = it._data(t);
                for (r in i.events) it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando) } "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Lt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } }

    function C(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o }

    function E(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = C(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Kt.detach()), Zt[e] = n), n }

    function N(e, t) {
        return { get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0 } } }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;)
            if (t = pn[i] + n, t in e) return t;
        return r }

    function j(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && jt(r) && (o[a] = it._data(r, "olddisplay", E(r.nodeName)))) : (i = jt(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e }

    function A(e, t, n) {
        var r = ln.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function L(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += it.css(e, n + St[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + St[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + St[o] + "Width", !0, i))) : (a += it.css(e, "padding" + St[o], !0, i), "padding" !== n && (a += it.css(e, "border" + St[o] + "Width", !0, i)));
        return a }

    function D(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = en(e),
            a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
            r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0 }
        return i + L(e, t, n || (a ? "border" : "content"), r, o) + "px" }

    function q(e, t, n, r, i) {
        return new q.prototype.init(e, t, n, r, i) }

    function H() {
        return setTimeout(function() { hn = void 0 }), hn = it.now() }

    function O(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = St[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r }

    function _(e, t, n) {
        for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r }

    function $(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && jt(e),
            m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() { s.unqueued || u() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, it.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = it.css(e, "display"), c = "none" === l ? it._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t)
            if (i = t[r], gn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0 }
                f[r] = m && m[r] || it.style(e, r) } else l = void 0;
        if (it.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else { m ? "hidden" in m && (h = m.hidden) : m = it._data(e, "fxshow", {}), o && (m.hidden = !h), h ? it(e).show() : d.done(function() { it(e).hide() }), d.done(function() {
                var t;
                it._removeData(e, "fxshow");
                for (t in f) it.style(e, t, f[t]) });
            for (r in f) a = _(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } }

    function M(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i }

    function F(e, t, n) {
        var r, i, o = 0,
            a = bn.length,
            s = it.Deferred().always(function() { delete u.elem }),
            u = function() {
                if (i) return !1;
                for (var t = hn || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) },
            l = s.promise({ elem: e, props: it.extend({}, t), opts: it.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: hn || H(), duration: n.duration, tweens: [], createTween: function(t, n) {
                    var r = it.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r }, stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }),
            c = l.props;
        for (M(c, l.opts.specialEasing); a > o; o++)
            if (r = bn[o].call(l, e, c, l.opts)) return r;
        return it.map(c, _, l), it.isFunction(l.opts.start) && l.opts.start.call(e, l), it.fx.timer(it.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) }

    function B(e) {
        return function(t, n) { "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } }

    function R(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, it.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u }
        var o = {},
            a = e === In;
        return i(t.dataTypes[0]) || !o["*"] && i("*") }

    function P(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e }

    function W(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) { u.unshift(a);
                    break }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) { o = a;
                    break }
                r || (r = a) }
            o = o || r }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0 }

    function z(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (d) {
                    return { state: "parsererror", error: a ? d : "No conversion from " + u + " to " + o } } }
        return { state: "success", data: t } }

    function I(e, t, n, r) {
        var i;
        if (it.isArray(t)) it.each(t, function(t, i) { n || Qn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== it.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r) }

    function X() {
        try {
            return new e.XMLHttpRequest } catch (t) {} }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function V(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    var Q = [],
        J = Q.slice,
        Y = Q.concat,
        G = Q.push,
        K = Q.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        rt = "1.11.3",
        it = function(e, t) {
            return new it.fn.init(e, t) },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        ut = function(e, t) {
            return t.toUpperCase() };
    it.fn = it.prototype = { jquery: rt, constructor: it, selector: "", length: 0, toArray: function() {
            return J.call(this) }, get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this) }, pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t }, each: function(e, t) {
            return it.each(this, e, t) }, map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t) })) }, slice: function() {
            return this.pushStack(J.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function() {
            return this.prevObject || this.constructor(null) }, push: G, sort: Q.sort, splice: Q.splice }, it.extend = it.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a }, it.extend({ expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
            throw new Error(e) }, noop: function() {}, isFunction: function(e) {
            return "function" === it.type(e) }, isArray: Array.isArray || function(e) {
            return "array" === it.type(e) }, isWindow: function(e) {
            return null != e && e == e.window }, isNumeric: function(e) {
            return !it.isArray(e) && e - parseFloat(e) + 1 >= 0 }, isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0 }, isPlainObject: function(e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) {
                return !1 }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t) }, type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e }, globalEval: function(t) { t && it.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, ut) }, nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e }, trim: function(e) {
            return null == e ? "" : (e + "").replace(ot, "") }, makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r }, inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n }
            return -1 }, merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e }, grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i }, map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return Y.apply([], u) }, guid: 1, proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = J.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(J.call(arguments))) }, r.guid = e.guid = e.guid || it.guid++, r) : void 0 }, now: function() {
            return +new Date }, support: nt }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Z["[object " + t + "]"] = t.toLowerCase() });
    var lt = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== q && D(t), t = t || q, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && O) {
                if (11 !== s && (i = yt.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o), n } else {
                        if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n }
                if (w.qsa && (!_ || !_.test(e))) {
                    if (p = d = B, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                        h = bt.test(e) && c(t.parentNode) || t, m = l.join(",") }
                    if (m) try {
                        return K.apply(n, h.querySelectorAll(m)), n } catch (g) {} finally { d || t.removeAttribute("id") } } }
            return S(e.replace(ut, "$1"), t, n, r) }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r }
            var t = [];
            return e }

        function r(e) {
            return e[B] = !0, e }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t) } catch (n) {
                return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e } }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e } }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o) } : function(t, n, a) {
                var s, u, l = [P, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0 } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[B] || (t[B] = {}), (s = u[r]) && s[0] === P && s[1] === o) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0 } } }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0 } : e[0] }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a }

        function v(e, t, n, i, o, a) {
            return i && !i[B] && (i = v(i)), o && !o[B] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, u),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            o(null, b = [], l, u) }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? et(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d)) } } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b) }) }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                    return e === t }, a, !0), l = p(function(e) {
                    return et(t, e) > -1 }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                    c.push(n) }
            return h(c) }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = j,
                        b = r || o && T.find.TAG("*", l),
                        x = P += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (j = a !== q && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) { u.push(c);
                                    break }
                            l && (P = x) }
                        i && ((c = !f && c) && p--, r && m.push(c)) }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Y.call(u));
                            v = g(v) }
                        K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u) }
                    return l && (P = x, j = y), m };
            return i ? r(a) : a }
        var x, w, T, k, C, E, N, S, j, A, L, D, q, H, O, _, $, M, F, B = "sizzle" + 1 * new Date,
            R = e.document,
            P = 0,
            W = 0,
            z = n(),
            I = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (L = !0), 0 },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            J = [],
            Y = J.pop,
            G = J.push,
            K = J.push,
            Z = J.slice,
            et = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1 },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = rt.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ft = new RegExp(at),
            pt = new RegExp("^" + it + "$"),
            ht = { ID: new RegExp("^#(" + rt + ")"), CLASS: new RegExp("^\\.(" + rt + ")"), TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ot), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"), bool: new RegExp("^(?:" + tt + ")$", "i"), needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i") },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            xt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            kt = function() { D() };
        try { K.apply(J = Z.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType } catch (Ct) { K = { apply: J.length ? function(e, t) { G.apply(e, Z.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1 } } }
        w = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1 }, D = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), O = !C(r), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function(e) {
                return H.appendChild(e).id = B, !r.getElementsByName || !r.getElementsByName(B).length }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [] } }, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t } }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r }
                return o }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0 }, $ = [], _ = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function(e) { H.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + B + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || _.push(".#.+[+~]") }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:") })), (w.matchesSelector = vt.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) { w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), $.push("!=", at) }), _ = _.length && new RegExp(_.join("|")), $ = $.length && new RegExp($.join("|")), t = vt.test(H.compareDocumentPosition), F = t || vt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, U = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && F(R, e) ? -1 : t === r || t.ownerDocument === R && F(R, t) ? 1 : A ? et(A, e) - et(A, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : A ? et(A, e) - et(A, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0 }, r) : q }, t.matches = function(e, n) {
            return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && D(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !O || $ && $.test(n) || _ && _.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (i) {}
            return t(n, q, null, [e]).length > 0 }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && D(e), F(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (L = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), L) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1) }
            return A = null, e }, k = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                for (; t = e[r++];) n += k(t);
            return n }, T = t.selectors = { cacheLength: 50, createPseudo: r, match: ht, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0 } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0 } }, CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode } : function(t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling" }
                                return !0 }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[B] || (g[B] = {}), l = c[e] || [], p = l[0] === P && l[1], f = l[0] === P && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) { c[e] = [P, p, f];
                                        break } } else if (y && (l = (t[B] || (t[B] = {}))[e]) && l[0] === P) f = l[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[B] || (d[B] = {}))[e] = [P, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0 } } }, PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = et(e, i[a]), e[r] = !(t[r] = i[a]) }) : function(e) {
                        return o(e, 0, i) }) : o } }, pseudos: { not: r(function(e) {
                    var t = [],
                        n = [],
                        i = N(e.replace(ut, "$1"));
                    return i[B] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() } }), has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0 } }), contains: r(function(e) {
                    return e = e.replace(wt, Tt),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1 } }), lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1 } }), target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id }, root: function(e) {
                    return e === H }, focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                    return e.disabled === !1 }, disabled: function(e) {
                    return e.disabled === !0 }, checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) {
                    return !T.pseudos.empty(e) }, header: function(e) {
                    return gt.test(e.nodeName) }, input: function(e) {
                    return mt.test(e.nodeName) }, button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: l(function() {
                    return [0] }), last: l(function(e, t) {
                    return [t - 1] }), eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n] }), even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e }), odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e }), lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e }), gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e }) } }, T.pseudos.nth = T.pseudos.eq;
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = s(x);
        for (x in { submit: !0, reset: !0 }) T.pseudos[x] = u(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ut, " ") }), s = s.slice(r.length));
                for (a in T.filter) !(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, N = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[B] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e }
            return o }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                d = !r && E(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n;
                        break } }
            return (l || N(e, d))(r, t, !O, n, bt.test(e) && c(t.parentNode) || t), n }, w.sortStable = B.split("").sort(U).join("") === B, w.detectDuplicates = !!L, D(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div")) }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), i(function(e) {
            return null == e.getAttribute("disabled") }) || o(tt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
    }(e);
    it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
    var ct = it.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType })) }, it.fn.extend({ find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (it.contains(r[t], this)) return !0 }));
            for (t = 0; i > t; t++) it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) {
            return this.pushStack(r(this, e || [], !1)) }, not: function(e) {
            return this.pushStack(r(this, e || [], !0)) }, is: function(e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length } });
    var pt, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = it.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && it.isPlainObject(t))
                        for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this }
                if (r = ht.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = r }
                return this.context = ht, this.selector = e, this }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this)) };
    gt.prototype = it.fn, pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = { children: !0, contents: !0, next: !0, prev: !0 };
    it.extend({ dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r }, sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n } }), it.fn.extend({ has: function(e) {
            var t, n = it(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (it.contains(this, n[t])) return !0 }) }, closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) { o.push(n);
                        break }
            return this.pushStack(o.length > 1 ? it.unique(o) : o) }, index: function(e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t)))) }, addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), it.each({ parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
            return it.dir(e, "parentNode") }, parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n) }, next: function(e) {
            return i(e, "nextSibling") }, prev: function(e) {
            return i(e, "previousSibling") }, nextAll: function(e) {
            return it.dir(e, "nextSibling") }, prevAll: function(e) {
            return it.dir(e, "previousSibling") }, nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n) }, siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) {
            return it.sibling(e.firstChild) }, contents: function(e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes) } }, function(e, t) { it.fn[e] = function(n, r) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i) } });
    var bt = /\S+/g,
        xt = {};
    it.Callbacks = function(e) { e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) { n = !1;
                        break }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable()) },
            d = { add: function() {
                    if (u) {
                        var r = u.length;! function o(t) { it.each(t, function(t, n) {
                                var r = it.type(n); "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n) }) }(arguments), t ? i = u.length : n && (s = r, c(n)) }
                    return this }, remove: function() {
                    return u && it.each(arguments, function(e, n) {
                        for (var r;
                            (r = it.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--) }), this }, has: function(e) {
                    return e ? it.inArray(e, u) > -1 : !(!u || !u.length) }, empty: function() {
                    return u = [], i = 0, this }, disable: function() {
                    return u = l = n = void 0, this }, disabled: function() {
                    return !u }, lock: function() {
                    return l = void 0, n || d.disable(), this }, locked: function() {
                    return !l }, fireWith: function(e, n) {
                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this }, fire: function() {
                    return d.fireWith(this, arguments), this }, fired: function() {
                    return !!r } };
        return d }, it.extend({ Deferred: function(e) {
            var t = [
                    ["resolve", "done", it.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", it.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", it.Callbacks("memory")]
                ],
                n = "pending",
                r = { state: function() {
                        return n }, always: function() {
                        return i.done(arguments).fail(arguments), this }, then: function() {
                        var e = arguments;
                        return it.Deferred(function(n) { it.each(t, function(t, o) {
                                var a = it.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                        return null != e ? it.extend(e, r) : r } },
                i = {};
            return r.pipe = r.then, it.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function(e) {
            var t, n, r, i = 0,
                o = J.call(arguments),
                a = o.length,
                s = 1 !== a || e && it.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : it.Deferred(),
                l = function(e, n, r) {
                    return function(i) { n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) } };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise() } });
    var wt;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e), this }, it.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? it.readyWait++ : it.ready(!0) }, ready: function(e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body) return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready"))) } } }), it.ready.promise = function(t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else { ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try { n = null == e.frameElement && ht.documentElement } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try { n.doScroll("left") } catch (e) {
                        return setTimeout(i, 50) }
                    a(), it.ready() } }() }
        return wt.promise(t) };
    var Tt, kt = "undefined";
    for (Tt in it(nt)) break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, it(function() {
            var e, t, n, r;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== kt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r)) }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) { nt.deleteExpando = !0;
                try { delete e.test } catch (t) { nt.deleteExpando = !1 } }
            e = null }(), it.acceptData = function(e) {
            var t = it.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /([A-Z])/g;
    it.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !l(e) }, data: function(e, t, n) {
            return c(e, t, n) }, removeData: function(e, t) {
            return d(e, t) }, _data: function(e, t, n) {
            return c(e, t, n, !0) }, _removeData: function(e, t) {
            return d(e, t, !0) } }), it.fn.extend({ data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), u(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0) }
                return i }
            return "object" == typeof e ? this.each(function() { it.data(this, e) }) : arguments.length > 1 ? this.each(function() { it.data(this, e, t) }) : o ? u(o, e, it.data(o, e)) : void 0 }, removeData: function(e) {
            return this.each(function() { it.removeData(this, e) }) } }), it.extend({ queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0 }, dequeue: function(e, t) { t = t || "fx";
            var n = it.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = it._queueHooks(e, t),
                a = function() { it.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, { empty: it.Callbacks("once memory").add(function() { it._removeData(e, t + "queue"), it._removeData(e, n) }) }) } }), it.fn.extend({ queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e) }) }, dequeue: function(e) {
            return this.each(function() { it.dequeue(this, e) }) }, clearQueue: function(e) {
            return this.queue(e || "fx", []) }, promise: function(e, t) {
            var n, r = 1,
                i = it.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t) } });
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        St = ["Top", "Right", "Bottom", "Left"],
        jt = function(e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e) },
        At = it.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === it.type(n)) { i = !0;
                for (s in n) it.access(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(it(e), n) })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        Lt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { nt.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == nt.deleteExpando) { nt.deleteExpando = !0;
            try { delete t.test } catch (r) { nt.deleteExpando = !1 } } }(),
    function() {
        var t, n, r = ht.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null }();
    var Dt = /^(?:input|select|textarea)$/i,
        qt = /^key/,
        Ht = /^(?:mouse|pointer|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        _t = /^([^.]*)(?:\.(.+)|)$/;
    it.event = { global: {}, add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = it._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof it === kt || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments) }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = _t.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = it.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = it.event.special[p] || {}, d = it.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && it.expr.match.needsContext.test(i), namespace: h.join(".") }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), it.event.global[p] = !0);
                e = null } }, remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], l = t.length; l--;)
                    if (s = _t.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = it.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete c[p]) } else
                        for (p in c) it.event.remove(e, p + t[l], n, r, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events")) } }, trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || ht],
                p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ht, 3 !== r.nodeType && 8 !== r.nodeType && !Ot.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), l = it.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !it.isWindow(r)) {
                    for (u = l.delegateType || p, Ot.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || ht) && f.push(c.defaultView || c.parentWindow || e) }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && it.acceptData(r) && a && r[p] && !it.isWindow(r)) { c = r[a], c && (r[a] = null), it.event.triggered = p;
                    try { r[p]() } catch (m) {}
                    it.event.triggered = void 0, c && (r[a] = c) }
                return t.result } }, dispatch: function(e) { e = it.event.fix(e);
            var t, n, r, i, o, a = [],
                s = J.call(arguments),
                u = (it._data(this, "events") || {})[e.type] || [],
                l = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result } }, handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(u) >= 0 : it.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({ elem: u, handlers: i }) }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a }, fix: function(e) {
            if (e[it.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ht.test(i) ? this.mouseHooks : qt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ht, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) {
                    return it.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n, r) {
            var i = it.extend(new it.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, it.removeEvent = ht.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === kt && (e[r] = null), e.detachEvent(r, n)) }, it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t) }, it.Event.prototype = { isDefaultPrevented: p, isPropagationStopped: p, isImmediatePropagationStopped: p, preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, it.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { it.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), nt.submitBubbles || (it.event.special.submit = { setup: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), it._data(n, "submitBubbles", !0)) }) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit") } }), nt.changeBubbles || (it.event.special.change = { setup: function() {
            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), it.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0) })), !1) : void it.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Dt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0) }), it._data(t, "changeBubbles", !0)) }) }, handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
            return it.event.remove(this, "._change"), !Dt.test(this.nodeName) } }), nt.focusinBubbles || it.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { it.event.simulate(t, e.target, it.event.fix(e), !0) };
        it.event.special[t] = { setup: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1) }, teardown: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t)) } } }), it.fn.extend({ on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return it().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function() { it.event.add(this, e, r, n, t) }) }, one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1) }, off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() { it.event.remove(this, e, n, t) }) }, trigger: function(e, t) {
            return this.each(function() { it.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0 } });
    var $t = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Mt = / jQuery\d+="(?:null|\d+)"/g,
        Ft = new RegExp("<(?:" + $t + ")[\\s/>]", "i"),
        Bt = /^\s+/,
        Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        Wt = /<tbody/i,
        zt = /<|&#?\w+;/,
        It = /<(?:script|style|link)/i,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        Vt = /^true\/(.*)/,
        Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Jt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        Yt = m(ht),
        Gt = Yt.appendChild(ht.createElement("div"));
    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, it.extend({ clone: function(e, t, n) {
            var r, i, o, a, s, u = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Ft.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o }, buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === it.type(o)) it.merge(p, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (Pt.exec(o) || ["", ""])[1].toLowerCase(), c = Jt[u] || Jt._default, s.innerHTML = c[1] + o.replace(Rt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Bt.test(o) && p.push(t.createTextNode(Bt.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== u || Wt.test(o) ? "<table>" !== c[1] || Wt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), nt.appendChecked || it.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
            return s = null, f }, cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = it.expando, u = it.cache, l = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== kt ? n.removeAttribute(s) : n[s] = null, Q.push(i)) } } }), it.fn.extend({ text: function(e) {
            return At(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e)) }, null, e, arguments.length) }, append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e) } }) }, prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() {
            return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
            return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function(e, t) {
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this }, empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0) }
            return this }, clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return it.clone(this, e, t) }) }, html: function(e) {
            return At(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Mt, "") : void 0;
                if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && Ft.test(e) || !nt.leadingWhitespace && Bt.test(e) || Jt[(Pt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0 } catch (i) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) { e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() }, detach: function(e) {
            return this.remove(e, !0) }, domManip: function(e, t) { e = Y.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                d = l - 1,
                f = e[0],
                p = it.isFunction(f);
            if (p || l > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t) });
            if (l && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = it.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== d && (r = it.clone(r, !0, !0), i && it.merge(o, g(r, "script"))), t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, it.map(o, x), u = 0; i > u; u++) r = o[u], Ut.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Qt, "")));
                s = n = null }
            return this } }), it.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { it.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), it(o[r])[t](n), G.apply(i, n.get());
            return this.pushStack(i) } });
    var Kt, Zt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== kt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0 } }();
    var en, tn, nn = /^margin/,
        rn = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null) }, tn = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : ht.documentElement.currentStyle && (en = function(e) {
        return e.currentStyle }, tn = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto" }), ! function() {
        function t() {
            var t, n, r, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r)) }
        var n, r, i, o, a, s, u;
        n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (r = i && i.style) && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, { reliableHiddenOffsets: function() {
                return null == s && t(), s }, boxSizingReliable: function() {
                return null == a && t(), a }, pixelPosition: function() {
                return null == o && t(), o }, reliableMarginRight: function() {
                return null == u && t(), u } })) }(), it.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        un = /^(none|table(?!-c[ea]).+)/,
        ln = new RegExp("^(" + Nt + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + Nt + ")", "i"),
        dn = { position: "absolute", visibility: "hidden", display: "block" },
        fn = { letterSpacing: "0", fontWeight: "400" },
        pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({ cssHooks: { opacity: { get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": nt.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = it.camelCase(t),
                    u = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = S(u, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try { u[t] = n } catch (l) {} } }, css: function(e, t, n, r) {
            var i, o, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = S(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in fn && (o = fn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o } }), it.each(["height", "width"], function(e, t) { it.cssHooks[t] = { get: function(e, n, r) {
                return n ? un.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function() {
                    return D(e, t, r) }) : D(e, t, r) : void 0 }, set: function(e, n, r) {
                var i = r && en(e);
                return A(e, n, r ? L(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0) } } }), nt.opacity || (it.cssHooks.opacity = { get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i) } }), it.cssHooks.marginRight = N(nt.reliableMarginRight, function(e, t) {
        return t ? it.swap(e, { display: "inline-block" }, tn, [e, "marginRight"]) : void 0 }), it.each({ margin: "", padding: "", border: "Width" }, function(e, t) { it.cssHooks[e + t] = { expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
                return i } }, nn.test(e) || (it.cssHooks[e + t].set = A) }), it.fn.extend({ css: function(e, t) {
            return At(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
                    return o }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
            return j(this, !0) }, hide: function() {
            return j(this) }, toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { jt(this) ? it(this).show() : it(this).hide() }) } }), it.Tween = q, q.prototype = { constructor: q, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px") }, cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this) }, run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this } }, q.prototype.init.prototype = q.prototype, q.propHooks = { _default: { get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, q.propHooks.scrollTop = q.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, it.easing = { linear: function(e) {
            return e }, swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2 } }, it.fx = q.prototype.init, it.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [$],
        xn = { "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = vn.exec(t),
                    o = i && i[3] || (it.cssNumber[e] ? "" : "px"),
                    a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, it.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u) }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n }] };
    it.Animation = it.extend(F, { tweener: function(e, t) { it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t) }, prefilter: function(e, t) { t ? bn.unshift(e) : bn.push(e) } }), it.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? it.extend({}, e) : { complete: n || !n && t || it.isFunction(e) && e, duration: e, easing: n && t || t && !it.isFunction(t) && t };
            return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue) }, r }, it.fn.extend({ fadeTo: function(e, t, n, r) {
                return this.filter(jt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) {
                var i = it.isEmptyObject(e),
                    o = it.speed(t, n, r),
                    a = function() {
                        var t = F(this, it.extend({}, e), o);
                        (i || it._data(this, "finish")) && t.stop(!0) };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n) };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = it.timers,
                        a = it._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && it.dequeue(this, e) }) }, finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = it._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = it.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish }) } }), it.each(["toggle", "show", "hide"], function(e, t) {
            var n = it.fn[t];
            it.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i) } }), it.each({ slideDown: O("show"), slideUp: O("hide"), slideToggle: O("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { it.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r) } }), it.timers = [], it.fx.tick = function() {
            var e, t = it.timers,
                n = 0;
            for (hn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || it.fx.stop(), hn = void 0 }, it.fx.timer = function(e) { it.timers.push(e), e() ? it.fx.start() : it.timers.pop() }, it.fx.interval = 13, it.fx.start = function() { mn || (mn = setInterval(it.fx.tick, it.fx.interval)) }, it.fx.stop = function() { clearInterval(mn), mn = null }, it.fx.speeds = { slow: 600, fast: 200, _default: 400 }, it.fn.delay = function(e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) } }) },
        function() {
            var e, t, n, r, i;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value }();
    var wn = /\r/g;
    it.fn.extend({ val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = it.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                    return null == e ? "" : e + "" })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) })) : i ? (t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)) : void 0 } }), it.extend({ valHooks: { option: { get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e)) } }, select: { get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), o) return t;
                            a.push(t) }
                    return a }, set: function(e, t) {
                    for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;)
                        if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0) try { r.selected = n = !0 } catch (s) { r.scrollHeight } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i } } } }), it.each(["radio", "checkbox"], function() { it.valHooks[this] = { set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0 } }, nt.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value }) });
    var Tn, kn, Cn = it.expr.attrHandle,
        En = /^(?:checked|selected)$/i,
        Nn = nt.getSetAttribute,
        Sn = nt.input;
    it.fn.extend({ attr: function(e, t) {
            return At(this, it.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
            return this.each(function() { it.removeAttr(this, e) }) } }), it.extend({ attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === kt ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? kn : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t)) : void 0 }, removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(bt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? Sn && Nn || !En.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(Nn ? n : r) }, attrHooks: { type: { set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t } } } } }), kn = { set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Sn && Nn || !En.test(n) ? e.setAttribute(!Nn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n } }, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Cn[t] || it.find.attr;
        Cn[t] = Sn && Nn || !En.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Cn[t], Cn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Cn[t] = o), i } : function(e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null } }), Sn && Nn || (it.attrHooks.value = { set: function(e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n) } }), Nn || (Tn = { set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, Cn.id = Cn.name = Cn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null }, it.valHooks.button = { get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0 }, set: Tn.set }, it.attrHooks.contenteditable = { set: function(e, t, n) { Tn.set(e, "" === t ? !1 : t, n) } }, it.each(["width", "height"], function(e, t) { it.attrHooks[t] = { set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), nt.style || (it.attrHooks.style = { get: function(e) {
            return e.style.cssText || void 0 }, set: function(e, t) {
            return e.style.cssText = t + "" } });
    var jn = /^(?:input|select|textarea|button|object)$/i,
        An = /^(?:a|area)$/i;
    it.fn.extend({ prop: function(e, t) {
            return At(this, it.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
            return e = it.propFix[e] || e, this.each(function() {
                try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), it.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0 }, propHooks: { tabIndex: { get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jn.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1 } } } }), nt.hrefNormalized || it.each(["href", "src"], function(e, t) { it.propHooks[t] = { get: function(e) {
                return e.getAttribute(t, 4) } } }), nt.optSelected || (it.propHooks.selected = { get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { it.propFix[this.toLowerCase()] = this }), nt.enctype || (it.propFix.enctype = "encoding");
    var Ln = /[\t\r\n\f]/g;
    it.fn.extend({ addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) { it(this).addClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(bt) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ln, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = it.trim(r), n.className !== a && (n.className = a) }
            return this }, removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) { it(this).removeClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(bt) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ln, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? it.trim(r) : "", n.className !== a && (n.className = a) }
            return this }, toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) { it(this).toggleClass(e.call(this, n, this.className, t), t) } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === kt || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "") }) }, hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ln, " ").indexOf(t) >= 0) return !0;
            return !1 } }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), it.fn.extend({ hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) {
            return this.on(e, null, t, n) }, unbind: function(e, t) {
            return this.off(e, null, t) }, delegate: function(e, t, n, r) {
            return this.on(t, e, n, r) }, undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var Dn = it.now(),
        qn = /\?/,
        Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = it.trim(t + "");
        return i && !it.trim(i.replace(Hn, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "") })) ? Function("return " + i)() : it.error("Invalid JSON: " + t) }, it.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try { e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (i) { n = void 0 }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n };
    var On, _n, $n = /#.*$/,
        Mn = /([?&])_=[^&]*/,
        Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Pn = /^\/\//,
        Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zn = {},
        In = {},
        Xn = "*/".concat("*");
    try { _n = location.href } catch (Un) { _n = ht.createElement("a"), _n.href = "", _n = _n.href }
    On = Wn.exec(_n.toLowerCase()) || [], it.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: _n, type: "GET", isLocal: Bn.test(On[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Xn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": it.parseJSON, "text xml": it.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
            return t ? P(P(e, it.ajaxSettings), t) : P(it.ajaxSettings, e) }, ajaxPrefilter: B(zn), ajaxTransport: B(In), ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = W(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, d = it.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? it(f) : it.event,
                h = it.Deferred(),
                m = it.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = { readyState: 0, getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Fn.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()] }
                        return null == t ? null : t }, getAllResponseHeaders: function() {
                        return 2 === b ? a : null }, setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this }, overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this }, statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this }, abort: function(e) {
                        var t = e || x;
                        return l && l.abort(t), n(0, t), this } };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _n) + "").replace($n, "").replace(Pn, On[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (r = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === On[1] && r[2] === On[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), R(zn, d, t, w), 2 === b) return w;
            u = it.event && d.global, u && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (qn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mn.test(o) ? o.replace(Mn, "$1_=" + Dn++) : o + (qn.test(o) ? "&" : "?") + "_=" + Dn++)), d.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in { success: 1, error: 1, complete: 1 }) w[i](d[i]);
            if (l = R(In, d, t, w)) { w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() { w.abort("timeout") }, d.timeout));
                try { b = 1, l.send(v, n) } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T) } } else n(-1, "No Transport");
            return w }, getJSON: function(e, t, n) {
            return it.get(e, t, n, "json") }, getScript: function(e, t) {
            return it.get(e, void 0, t, "script") } }), it.each(["get", "post"], function(e, t) { it[t] = function(e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({ url: e, type: t, dataType: i, data: n, success: r }) } }), it._evalUrl = function(e) {
        return it.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, it.fn.extend({ wrapAll: function(e) {
            if (it.isFunction(e)) return this.each(function(t) { it(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e }).append(this) }
            return this }, wrapInner: function(e) {
            return this.each(it.isFunction(e) ? function(t) { it(this).wrapInner(e.call(this, t)) } : function() {
                var t = it(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) { it(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
            return this.parent().each(function() { it.nodeName(this, "body") || it(this).replaceWith(this.childNodes) }).end() } }), it.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display")) }, it.expr.filters.visible = function(e) {
        return !it.expr.filters.hidden(e) };
    var Vn = /%20/g,
        Qn = /\[\]$/,
        Jn = /\r?\n/g,
        Yn = /^(?:submit|button|image|reset|file)$/i,
        Gn = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, r = [],
            i = function(e, t) { t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Vn, "+") }, it.fn.extend({ serialize: function() {
            return it.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Gn.test(this.nodeName) && !Yn.test(e) && (this.checked || !Lt.test(e)) }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return { name: t.name, value: e.replace(Jn, "\r\n") } }) : { name: t.name, value: n.replace(Jn, "\r\n") } }).get() } }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U() } : X;
    var Kn = 0,
        Zn = {},
        er = it.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Zn) Zn[e](void 0, !0) }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return { send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Kn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete Zn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
                            else { l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try { u = o.statusText } catch (c) { u = "" }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404 }
                        l && r(s, u, l, o.getAllResponseHeaders()) }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t() }, abort: function() { t && t(void 0, !0) } } } }), it.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
                return it.globalEval(e), e } } }), it.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return { send: function(r, i) { t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(void 0, !0) } } } });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var e = tr.pop() || it.expando + "_" + Dn++;
            return this[e] = !0, e } }), it.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (qn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || it.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0 }), "script") : void 0 }), it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var r = dt.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes)) };
    var rr = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e) }).complete(n && function(e, t) { a.each(n, i || [e.responseText, t, e]) }), this }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { it.fn[t] = function(e) {
            return this.on(t, e) } }), it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem }).length };
    var ir = e.document.documentElement;
    it.offset = { setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = it.css(e, "position"),
                d = it(e),
                f = {}; "static" === c && (e.style.position = "relative"), s = d.offset(), o = it.css(e, "top"), u = it.css(e, "left"), l = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f) } }, it.fn.extend({ offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) { it.offset.setOffset(this, e, t) });
            var t, n, r = { top: 0, left: 0 },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== kt && (r = i.getBoundingClientRect()), n = V(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r) : void 0 }, position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - it.css(r, "marginTop", !0), left: t.left - n.left - it.css(r, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                return e || ir }) } }), it.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function(r) {
            return At(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i) }, e, r, arguments.length, null) } }), it.each(["top", "left"], function(e, t) { it.cssHooks[t] = N(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0 }) }), it.each({ Height: "height", Width: "width" }, function(e, t) {
        it.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            it.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return At(this, function(t, n, r) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), it.fn.size = function() {
        return this.length }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return it });
    var or = e.jQuery,
        ar = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it }, typeof t === kt && (e.jQuery = e.$ = it), it
}), define("jquery-private", ["jquery"], function() {
        return jQuery.noConflict(!0) }),
    function(e, t) { "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define("pubsub", t) : e.PubSub = t() }("object" == typeof window && window || this, function() {
        function e(e) {
            return function() {
                throw e } }

        function t(t, n, r) {
            try { t(n, r) } catch (i) { setTimeout(e(i), 0) } }

        function n(e, t, n) { e(t, n) }

        function r(e, r, i, o) {
            var a, s, l = u[r],
                c = o ? n : t;
            if (u.hasOwnProperty(r))
                for (a = 0, s = l.length; s > a; a++) c(l[a].func, e, i) }

        function i(e, t, n) {
            return function() {
                var i = String(e),
                    o = i.lastIndexOf(".");
                for (r(e, e, t, n); - 1 !== o;) i = i.substr(0, o), o = i.lastIndexOf("."), r(e, i, t) } }

        function o(e) {
            for (var t = String(e), n = u.hasOwnProperty(t), r = t.lastIndexOf("."); !n && -1 !== r;) t = t.substr(0, r), r = t.lastIndexOf("."), n = u.hasOwnProperty(t);
            return n }

        function a(e, t, n, r) {
            var a = i(e, t, r),
                s = o(e);
            return s ? (n === !0 ? a() : setTimeout(a, 0), !0) : !1 }
        var s = { name: "PubSubJS", version: "1.3.6" },
            u = {},
            l = -1;
        return s.publish = function(e, t) {
            return a(e, t, !1, s.immediateExceptions) }, s.publishSync = function(e, t) {
            return a(e, t, !0, s.immediateExceptions) }, s.subscribe = function(e, t) { u.hasOwnProperty(e) || (u[e] = []);
            var n = String(++l);
            return u[e].push({ token: n, func: t }), n }, s.unsubscribe = function(e) {
            var t, n, r = "string" == typeof e,
                i = r ? "token" : "func",
                o = r ? e : !0,
                a = !1;
            for (t in u)
                if (u.hasOwnProperty(t))
                    for (n = u[t].length - 1; n >= 0; n--)
                        if (u[t][n][i] === e && (u[t].splice(n, 1), a = o, r)) return a;
            return a }, s }), define("utils/Utils", ["require", "exports", "module", "jquery", "pubsub"], function(e) {
        var t = e("jquery"),
            n = (e("pubsub"), { arrayRemove: function(e, n) {
                    var r = t.inArray(n, e);
                    return r > -1 && e.splice(r, 1), e }, setcookie: function(e, t, n, r, i, o) {
                    if (("" == t || 0 > n) && (t = "", n = -2592e3), n) {
                        var a = new Date;
                        a.setTime(a.getTime() + 1e3 * n) }
                    i = i ? i : cookiedomain, r = r ? r : cookiepath, document.cookie = escape(cookiepre + e) + "=" + escape(t) + (a ? "; expires=" + a.toGMTString() : "") + (r ? "; path=" + r : "/") + (i ? "; domain=" + i : "") + (o ? "; secure" : "") }, getcookie: function(e, t) { e = cookiepre + e;
                    var n = document.cookie.indexOf(e),
                        r = document.cookie.indexOf(";", n);
                    if (-1 == n) return "";
                    var i = document.cookie.substring(n + e.length + 1, r > n ? r : document.cookie.length);
                    return t ? i : unescape(i) }, updatestring: function(e, t, n) {
                    return t = "_" + t + "_", n ? e.replace(t, "") : -1 == e.indexOf(t) ? e + t : e }, isMobile: { Android: function() {
                        return navigator.userAgent.match(/Android/i) ? !0 : !1 }, BlackBerry: function() {
                        return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1 }, iOS: function() {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1 }, Windows: function() {
                        return navigator.userAgent.match(/IEMobile/i) ? !0 : !1 }, any: function() {
                        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows() } }, tmpl: function(e, t) {
                    var r = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n.cache[e] = n.cache[e] || n.tmpl(document.getElementById(e).innerHTML);
                    return t ? r(t) : r }, formatDate: function(e, t) {
                    var n, r = "ymdhis";
                    e || (e = "y-m-d h:i:s"), n = t ? new Date(t) : new Date;
                    for (var i = [n.getFullYear().toString(), (n.getMonth() + 1).toString(), n.getDate().toString(), n.getHours().toString(), n.getMinutes().toString(), n.getSeconds().toString()], o = 0; o < i.length; o++) e = e.replace(r.charAt(o), i[o]);
                    return e } });
        return n }), define("common/MainSubList", ["require", "exports", "module", "jquery"], function(e) {
        var t = e("jquery");
        return function(e, n) {
            var r, i = "",
                o = null,
                a = function(e) {
                    var e = e || window.event;
                    return e.relatedTarget ? e.relatedTarget : e.toElement ? e.toElement : null },
                s = function() { n.show(), e.find("a").addClass("active"), e.unbind("mouseover") },
                u = function() { n.hide(), e.find("a").removeClass("active"), e.bind("mouseover", s) };
            e.bind("mouseenter", function() { r = setTimeout(s, 300) }).bind("mouseleave", function() { clearTimeout(r), n.mouseover(s).mouseout(function(n) {
                    var r = a(n);
                    r && !this.contains(r) && (0 == t(n.relatedTarget).hasClass("fold") ? u() : e.mouseout(function() { 0 == t(n.relatedTarget).hasClass("header-sub") && u() })) }) }), 4 == n.find("ul").size() && n.find(".container-sm").addClass("four-row"), n.find("ul").size() > 0 || t.ajax({ type: "POST", url: "/api/web/index.php?version=5&module=newIndex&action=catalog", data: {}, dataType: "json" }).done(function(e) {
                if (0 == e.code) { i = '<div class="container-sm">';
                    for (var t = 0; t < e.data.length; t++) { o = e.data[t], i += '<ul><li><a href="forum.php?gid=' + o.fid + '">' + o.name + "</a></li>";
                        for (var r = 0; r < o.forum.length; r++) i += '<li><a href="forum.php?mod=forumdisplay&fid=' + o.forum[r].fid + '">' + o.forum[r].name + "</a></li>";
                        i += "</ul>" }
                    i += "</div>", n.html(i), 4 == e.data.length && n.find(".container-sm").addClass("four-row") } else window.alert(e.message) }).fail(function(e) { console && console.log(e) }) } }), define("common/BackTop", ["require", "exports", "module", "jquery"], function(e) {
        var t = e("jquery");
        return function() {
            var e = t(".back-top");
            t(window).on("scroll", function() { t(window).scrollTop() > 600 ? e.addClass("active") : e.removeClass("active") }), e.bind("click", function() { t("html,body").animate({ scrollTop: t("body").offset().top }, { queue: !1 }, 500) }) } }), define("basic/Class", [], function() {
        function e(e, t) {
            return function() {
                var n = this._super;
                this._super = e;
                var r = t.apply(this, arguments);
                return this._super = n, r } }
        var t = !1,
            n = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/,
            r = function() {};
        return r.extend = function(r) {
            function i() {!t && this.init && this.init.apply(this, arguments) }
            var o = this.prototype;
            t = !0;
            var a = new this;
            t = !1;
            for (var s in r) a[s] = "function" == typeof r[s] && "function" == typeof o[s] && n.test(r[s]) ? e(o[s], r[s]) : r[s];
            return i.prototype = a, i.constructor = i, i.extend = arguments.callee, i }, r }), define("modules/common/FloatAppQR", ["require", "exports", "module", "basic/Class", "jquery"], function(e) {
        var t = e("basic/Class"),
            n = e("jquery"),
            r = t.extend({ initialized: !1, $elem: null, config: { layerPosition: "bottom" }, $floatLayer: null, init: function(e) { this.$elem = e || n(".js-from-app"), this.$elem.data("layerposition") && this.$elem.data("layerposition").match(/^(top)|(bottom)$/i) && (this.config.layerPosition = this.$elem.data("layerposition")), this.$floatLayer = n('<div id="floatAppQRLayer"><img src="http://bbs-static.smartisan.cn/template/smartisan/src/img/modules/floatAppQR/floatAppQR.png"/><span>æ‰«æä¸‹è½½å®¢æˆ·ç«¯</span></div>').appendTo(document.body), this.bindEvent() }, bindEvent: function() { this.$elem.bind("mouseover", n.proxy(this.showLayer, this)), this.$elem.bind("mouseout", n.proxy(this.hideLayer, this)) }, showLayer: function() { this.$floatLayer.css({ position: "absolute", left: this.$elem.offset().left + this.$elem.outerWidth() / 2, top: "bottom" == this.config.layerPosition ? this.$elem.offset().top + this.$elem.outerHeight() + 12 : this.$elem.offset().top - this.$floatLayer.outerHeight() - 12 }).show() }, hideLayer: function() { this.$floatLayer.hide() } });
        return r }), define("modules/thread/Tags", ["require", "exports", "module", "jquery"], function(e) {
        var t = e("jquery");
        return function(e) { t.get("/api/web/index.php?version=5&module=threadKeyword", function(n) {
                if (0 == n.code && "0" != n.data.open_flag)
                    for (var r = n.data, i = [], o = e.text(), a = null, s = t(".thread-tags").empty(), u = "", l = "", c = 0; c < r.keywords.length; c++) i = r.keywords[c].split("|"), i.splice(0, 2), a = new RegExp(i.join("|"), "igm"), a.test(o) && (l = r.keywords[c].split("|")[0], u = l.match(/os$/i) ? "thread-tag thread-tag-blue" : "thread-tag", s.append('<a target="_blank" href="' + r.keywords[c].split("|")[1] + '" class="' + u + '"><em>' + l + "</em></a>")) }) } }),
    function(e) { "function" == typeof define && define.amd ? define("jquery.cookie", ["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery) }(function(e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e) }

        function n(e) {
            return s.raw ? e : decodeURIComponent(e) }

        function r(e) {
            return t(s.json ? JSON.stringify(e) : String(e)) }

        function i(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e } catch (t) {} }

        function o(t, n) {
            var r = s.raw ? t : i(t);
            return e.isFunction(n) ? n(r) : r }
        var a = /\+/g,
            s = e.cookie = function(i, a, u) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (u = e.extend({}, s.defaults, u), "number" == typeof u.expires) {
                        var l = u.expires,
                            c = u.expires = new Date;
                        c.setTime(+c + 864e5 * l) }
                    return document.cookie = [t(i), "=", r(a), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("") }
                for (var d = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; h > p; p++) {
                    var m = f[p].split("="),
                        g = n(m.shift()),
                        v = m.join("=");
                    if (i && i === g) { d = o(v, a);
                        break }
                    i || void 0 === (v = o(v)) || (d[g] = v) }
                return d };
        s.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) } }), define("app/Common", ["require", "exports", "module", "jquery", "utils/Utils", "common/MainSubList", "common/BackTop", "modules/common/FloatAppQR", "modules/thread/Tags", "jquery.cookie"], function(e) {
        var t = function() {
            var t = e("jquery"),
                n = e("utils/Utils"),
                r = e("common/MainSubList"),
                i = e("common/BackTop"),
                o = e("modules/common/FloatAppQR"),
                a = e("modules/thread/Tags");
            e("jquery.cookie");
            var s = t("#user-login");
            s.size() > 0 && s.attr("href", s.attr("href").replace(/referer\=.*/i, "referer=" + encodeURIComponent(window.location.href) + "&deal=true"));
            var u = t("#user-register");
            u.size() > 0 && u.attr("href", u.attr("href").replace(/referer\=.*/i, "referer=" + encodeURIComponent(window.location.href) + "&deal=true"));
            var l = t("#messagelogin, .content-login");
            if (l.size() > 0) {
                var c = window.location.href;
                if (c.indexOf("deal=true") > 0) return;
                c.indexOf("referer") < 0 ? window.location.href += "&referer=" + encodeURIComponent(document.referrer) + "&deal=true" : window.location.href = c.replace(/referer\=[\w\%\&\=\/\.]*/i, "referer=" + encodeURIComponent(document.referrer)) + "&deal=true" }
            var d = t(".js-from-app");
            if (d.size() > 0 && d.each(function() { new o(t(this)) }), new r(t("#header-fold"), t("#forumList")), new i, n.isMobile.Android() && !t.cookie("mobileTipsClose")) {
                var f = t("#mobileTips");
                f.delegate(".js-close", "click", function() { f.remove(), t.cookie("mobileTipsClose", !0, { expires: 7 }) });
                var p = function() { t(document.body).height() < window.innerHeight && t(document.body).css({ height: window.innerHeight }) };
                t(document.body).bind("touchend", function() { p() }), p(), f.show();
                var h = innerWidth;
                setInterval(function() { h !== innerWidth ? f.hide() : f.show() }, 200) }
            t("a.switchMobile").click(function() { t.removeCookie("go2web", { path: "/", domain: "bbs.smartisan.com" });
                var e = window.location.href;
                window.location.href = e.match(/(fid\=|forum\-)([0-9]+)/i) ? "/m/#!/forum/" + e.match(/(fid\=|forum\-)([0-9]+)/i)[2] : e.match(/(tid\=|thread\-)([0-9]+)/i) ? "/m/#!/thread/" + e.match(/(tid\=|thread\-)([0-9]+)/i)[2] : "/m/" }), t(".js-thread-content").size() > 0 && new a(t(".js-thread-content")) };
        return t }), define("elements/Select", ["require", "exports", "module", "jquery"], function(e) {
        var t = e("jquery");
        return function(e, n) {
            var r = e.find("select"),
                i = e.find("ul"),
                o = e.find(".element-select-current a"),
                n = n || {};
            e.find(".element-select-current").bind("click", function() { e.hasClass("disabled") || e.toggleClass("on") }), i.delegate("a", "click", function(i) {
                var a = t(i.currentTarget);
                o.html(a.html()), r.size() > 0 && r.val(a.data("value")), e.removeClass("on"), "undefined" != typeof n.callbackFn && n.callbackFn(i) }) } }), define("elements/CheckBox", ["require", "exports", "module", "basic/Class", "jquery", "pubsub"], function(e) {
        var t = e("basic/Class"),
            n = e("jquery"),
            r = e("pubsub"),
            i = t.extend({ data: {}, $elem: null, $checkbox: null, eventType: null, init: function(e, t, n) { this.$elem = e, this.eventType = t, this.config = "undefined" != typeof n ? n : {}, this.boxSelector = "undefined" != typeof this.config.boxSelector ? this.config.boxSelector : ".element-checkbox", this.$checkbox = e.find("input[type=checkbox]"), "undefined" != typeof n && n.value && (data.value = n.value), this.broadcastEvent(), this.bindEvent() }, bindEvent: function() { this.$elem.find(this.boxSelector).hasClass("disabled") || this.$elem.bind("click", n.proxy(this.handler, this)) }, click: function() { this.$checkbox.size() > 0 ? this.$checkbox.click() : this.$elem.click() }, eventOn: function() { r.publish(this.eventType + ":on", { value: this.$elem.data("value"), $trigger: this.$elem }) }, eventOff: function() { r.publish(this.eventType + ":off", { value: this.$elem.data("value"), $trigger: this.$elem }) }, switchOn: function() { this.$elem.find(this.boxSelector).hasClass("on") || this.click() }, switchOff: function() { this.$elem.find(this.boxSelector).hasClass("on") && this.click() }, handler: function() { this.$elem.find(this.boxSelector).hasClass("on") ? (this.$elem.find(this.boxSelector).removeClass("on"), this.eventOff()) : (this.$elem.find(this.boxSelector).addClass("on"), this.eventOn()) }, broadcastEvent: function() { this.$elem.find(this.boxSelector).hasClass("on") && this.eventOn() } });
        return i }), define("modules/moderator/ThreadListOperationBox", ["require", "exports", "module", "jquery", "pubsub", "utils/Utils"], function(e) {
        var t = (e("jquery"), e("pubsub")),
            n = e("utils/Utils");
        return function(e, r, i) {
            var o = [],
                a = e.find(".num"),
                s = e.find(".checkall-trigger"),
                u = function() { a.html(o.length), o.length > 0 ? e.show() : e.hide() };
            s.bind("click", function() { t.publish(i) }), t.subscribe(r + ":on", function(e, t) { o.push(t.value), u(t.$trigger) }), t.subscribe(r + ":off", function(e, t) { o = n.arrayRemove(o, t.value), u(t.$trigger) }) } }), define("modules/common/FoldableBox", ["require", "exports", "module", "jquery", "utils/Utils", "jquery.cookie"], function(e) {
        var t = e("jquery"),
            n = e("utils/Utils");
        return e("jquery.cookie"),
            function(e, r) { e.find(".btn-fold").bind("click", function() {
                    var i = n.getcookie("collapse");
                    e.toggleClass("fold"), e.hasClass("fold") ? "undefined" != typeof r ? t.cookie(r, !0) : (i = n.updatestring(i, e.data("node"), !1), n.setcookie("collapse", i, i ? 2592e3 : -2592e3)) : "undefined" != typeof r ? t.removeCookie(r) : (i = n.updatestring(i, e.data("node"), !0), n.setcookie("collapse", i, i ? 2592e3 : -2592e3)) }) } }), define("modules/forum/FastPost", ["require", "exports", "module", "jquery"], function(e) { e("jquery");
        return function(e) {
            var t = e.find(".js-subject");
            t.find("input").bind("focus", function() { t.addClass("focus") }), t.find("input").bind("blur", function() { t.removeClass("focus") }) } }), define("app/forum/DisplayApp", ["require", "exports", "module", "jquery", "app/Common", "elements/Select", "elements/CheckBox", "pubsub", "modules/moderator/ThreadListOperationBox", "modules/common/FoldableBox", "modules/forum/FastPost"], function(e) {
        var t = e("jquery"),
            n = e("app/Common"),
            r = e("elements/Select"),
            i = e("elements/CheckBox"),
            o = e("pubsub"),
            a = e("modules/moderator/ThreadListOperationBox"),
            s = e("modules/common/FoldableBox"),
            u = e("modules/forum/FastPost"),
            l = function() {
                var e = t(".element-select"),
                    l = t(".popwin-trigger"),
                    c = t(".js-threadList"),
                    d = [],
                    f = [],
                    p = c.find(".checkbox-trigger");
                new n;
                var h = t(".foldableBox");
                h.each(function() { new s(t(this)) }), e.each(function() { new r(t(this)) }), new u(t("#fastpost")), c.delegate("li", "mouseover", function(e) {
                    var n = t(e.currentTarget).find(".checkbox-trigger"),
                        r = n.find("input[type=checkbox]").val();
                    t.inArray(r, d) < 0 && (d.push(r), f.push(new i(n, "threadList:item:checkbox", { boxSelector: ".js-checkbox" }))) }), p.size() > 0 && new a(t("#operationBox"), "threadList:item:checkbox", "threadList:opbox:checkall"), new i(l, "filter:popwin");
                var m = t(".forum-list-content").find("a");
                o.subscribe("filter:popwin:on", function() { setcookie("atarget", 1, 2592e3), m.unbind("click"), m.bind("click", function() { t(this).get(0).target = "_blank" }) }), o.subscribe("filter:popwin:off", function() { setcookie("atarget", -1, 2592e3), m.unbind("click"), m.bind("click", function() { t(this).get(0).target = "" }) }), o.subscribe("threadList:opbox:checkall", function() {
                    var e;
                    c.find(".checkbox-trigger").each(function() { e = t(this).find("input[type=checkbox]").val(), t.inArray(e, d) < 0 && (d.push(e), f.push(new i(t(this), "threadList:item:checkbox", { boxSelector: ".js-checkbox" }))) });
                    for (var n = 0; n < f.length; n++) f[n].switchOn() }) };
        return l }), define("Router", ["require", "exports", "module", "jquery", "app/forum/DisplayApp", "app/Common"], function(e) {
        var t = e("jquery"),
            n = e("app/forum/DisplayApp"),
            r = e("app/Common");
        return function() {
            var e = t("#main"),
                i = e.size() > 0 ? e.data("page") : "";
            switch (i) {
                case "forumdisplay":
                    new n;
                    break;
                default:
                    new r } } }),
    function() {! function() { require(["jquery", "Router"], function(e, t) { new t }) }() }(), define("app", function() {});
