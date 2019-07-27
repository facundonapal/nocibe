var fasterizeutils = {
    t: function(e, t, s) {
        return e.addEventListener(t, s, !1)
    }
};
window.fasterizeNs = window.fasterizeNs || {};
var fasterize = window.fasterizeNs;
fasterize.s = {};
var deferJsNs = fasterize.s;
deferJsNs.i = function() {
    this.o = [],
    this.logs = [],
    this.u = 0,
    this.h = 0,
    this.N = [],
    this.J = "",
    this.v = {},
    this.l = ["application/ecmascript", "application/javascript", "application/x-ecmascript", "application/x-javascript", "text/ecmascript", "text/javascript", "text/javascript1.0", "text/javascript1.1", "text/javascript1.2", "text/javascript1.3", "text/javascript1.4", "text/javascript1.5", "text/jscript", "text/livescript", "text/x-ecmascript", "text/x-javascript"],
    this.m = !0,
    this.p = document.getElementById,
    this._ = document.getElementsByTagName,
    this.S = document.write,
    this.g = document.writeln,
    this.j = document.open,
    this.T = document.close,
    this.D = document.addEventListener,
    this.O = window.addEventListener,
    this.C = document.createElement,
    this.R = document.createElementNS,
    this.A = Element.prototype.insertBefore,
    this.I = Element.prototype.appendChild,
    this.L = deferJsNs.i.F.P,
    Object.defineProperty(this, "state_", {
        get: function() {
            return this.L
        },
        set: function(e) {
            switch (e) {
            case deferJsNs.i.F.M:
                this.mark("executing");
                break;
            case deferJsNs.i.F.U:
                this.mark("sync_done")
            }
            this.L = e
        }
    }),
    this.q = deferJsNs.i.G.P,
    this.k = null,
    this.H = 0,
    this.W = [],
    this.Y = "",
    this.X = "",
    this.B = -1
}
,
deferJsNs.i.F = {
    P: 0,
    K: 1,
    M: 2,
    U: 3,
    V: 4,
    Z: 5
},
deferJsNs.i.G = {
    P: 0,
    $: 1,
    ee: 2
},
deferJsNs.i.te = "frz_not_processed",
deferJsNs.i.se = "frz_current_node",
deferJsNs.i.re = "text/frzjs",
deferJsNs.i.ie = "frz_orig_type",
deferJsNs.i.ne = "frz_orig_src",
deferJsNs.i.fe = "orig_index",
deferJsNs.i.de = "data-frz-onload",
deferJsNs.i.prototype.mark = function(e) {
    window.performance && window.performance.mark && window.performance.mark("frz_deferjs_" + e)
}
,
deferJsNs.i.prototype.log = function(e, t) {
    this.logs && (this.logs.push("" + e),
    t && (this.logs.push(t),
    "undefined" != typeof console && void 0 !== console.error && console.error(e, t.stack)))
}
,
deferJsNs.i.prototype.oe = function(e, t) {
    var s = t || this.o.length;
    this.o.splice(s, 0, e)
}
,
deferJsNs.i.prototype.ce = function(e, t) {
    var s = this.ae(t);
    s.text = e,
    s.setAttribute("type", "text/javascript");
    var r = this.ue();
    return this.A.call(r.parentNode, s, r),
    s
}
,
deferJsNs.i.prototype.he = function(e, t) {
    var s = e.getAttribute(deferJsNs.i.ne) || e.getAttribute("src");
    if (s)
        this.Ne(s, e, t);
    else {
        var r = e.innerHTML || e.textContent || e.data || "";
        this.Je(r, e, t)
    }
}
,
deferJsNs.i.prototype.Je = function(e, t, s) {
    if (this.ve()) {
        this.Ne("data:text/javascript;charset=UTF-8," + encodeURIComponent("(function () {let currentSrc = document.currentScript.getAttribute('src');currentSrc = currentSrc.replace('data:text/javascript;charset=UTF-8,','');document.currentScript.innerHTML = decodeURIComponent(currentSrc);document.currentScript.removeAttribute('src');})();" + e), t, s)
    } else {
        s ? this.log("Add to queue str at the position " + s + ": " + e) : this.log("Add to queue str: " + e);
        var r = this;
        this.oe(function() {
            r.le(t),
            r.me(t).setAttribute(deferJsNs.i.se, "");
            try {
                r.ce(e, t)
            } catch (e) {
                r.log("Exception while evaluating the script : ", e)
            }
            r.log("Evaluated: " + e),
            r.pe()
        }, s)
    }
}
,
deferJsNs.i.prototype.Je = deferJsNs.i.prototype.Je,
deferJsNs.i.prototype.ae = function(e) {
    var t = this.C.call(document, "script");
    if (e)
        for (var s = e.attributes, r = s.length - 1; 0 <= r; --r)
            "type" != s[r].name && "src" != s[r].name && s[r].name != deferJsNs.i.ie && s[r].name != deferJsNs.i.ne && s[r].name != deferJsNs.i.fe && s[r].name != deferJsNs.i.se && s[r].name != this.X && (t.setAttribute(s[r].name, s[r].value),
            e.removeAttribute(s[r].name));
    return t
}
,
deferJsNs.i.prototype.Ne = function(f, d, e) {
    void 0 !== e ? this.log("Insert to queue url at the position " + e + ": " + f) : this.log("Push to queue url: " + f);
    var o = this;
    this.oe(function() {
        o.le(d);
        var e = o.ae(d);
        e.setAttribute("type", "text/javascript");
        var t = e.hasAttribute("async");
        if (t) {
            var s = function() {
                o.log("Executed async onload/onerror: " + f),
                o.h--,
                o.we() && o.ze()
            };
            fasterizeutils.t(e, "load", s),
            fasterizeutils.t(e, "error", s)
        } else {
            var r = function() {
                o.log("Executed onload/onerror: " + f),
                o.pe()
            };
            fasterizeutils.t(e, "load", r),
            fasterizeutils.t(e, "error", r)
        }
        o.log("Inserting external script: " + f),
        e.setAttribute("src", f);
        var i = d.innerHTML || d.textContent || d.data;
        i && e.appendChild(document.createTextNode(i));
        var n = o.me(d);
        n.setAttribute(deferJsNs.i.se, ""),
        o.A.call(n.parentNode, e, n),
        t && (o.h++,
        o.pe())
    }, e)
}
,
deferJsNs.i.prototype.Ne = deferJsNs.i.prototype.Ne,
deferJsNs.i.prototype.le = function(e) {
    if (document.querySelectorAll)
        for (var t = document.querySelectorAll("[" + this.X + "]"), s = 0; s < t.length; s++) {
            var r = t.item(s);
            if (r == e)
                return;
            r.removeAttribute(this.X)
        }
}
,
deferJsNs.i.prototype.xe = function() {
    for (var e = this._.call(document, "*"), t = 0; t < e.length; t++) {
        e.item(t).setAttribute(this.X, "")
    }
}
,
deferJsNs.i.prototype.me = function(e) {
    if (document.querySelector) {
        var t = document.querySelectorAll('[type="' + this.Y + '"]')
          , s = e.cloneNode();
        s.removeAttribute(this.X);
        for (var r = 0; r < t.length; r++) {
            var i = t.item(r);
            if (i.isEqualNode(s))
                return i
        }
    }
    return e
}
,
deferJsNs.i.prototype.ue = function() {
    var e;
    return document.querySelector && (e = document.querySelector("[" + deferJsNs.i.se + "]")),
    e || this._.call(document, "psanode")[0]
}
,
deferJsNs.i.prototype.ye = function() {
    var e = this.ue();
    "SCRIPT" == e.nodeName && e.parentNode.removeChild(e)
}
,
deferJsNs.i.prototype.ze = function() {
    if (!(this.state_ >= deferJsNs.i.F.V)) {
        Object.defineProperty && delete document.readyState,
        this.m = !1,
        this.state_ = deferJsNs.i.F.V;
        var e = this;
        "complete" != document.readyState ? deferJsNs.Ee(window, function() {
            e._e()
        }) : (document.onreadystatechange && this.exec(document.onreadystatechange, document),
        window.onload && (psaAddEventListener(window, "onload", window.onload),
        window.onload = null),
        this._e())
    }
}
,
deferJsNs.i.prototype._e = function() {
    this.Se(),
    this.fireEvent(deferJsNs.i.G.ee);
    for (var e = document.body.getElementsByTagName("psanode"), t = e.length - 1; 0 <= t; t--)
        document.body.removeChild(e[t]);
    this.state_ = deferJsNs.i.F.Z
}
,
deferJsNs.i.prototype.ge = function(e) {
    for (; e = e.parentNode; )
        if (e == document)
            return !0;
    return !1
}
,
deferJsNs.i.prototype.je = function(e) {
    for (var t = 0, s = e.length, r = 0; r < s; ++r) {
        var i = e[r]
          , n = i.src;
        this.ge(i) && "" != n || t++
    }
    return t
}
,
deferJsNs.i.prototype.we = function() {
    if (this.state_ != deferJsNs.i.F.U)
        return !1;
    var e = 0;
    return 0 != this.h && (e = this.je(this.N)),
    this.h == e
}
,
deferJsNs.i.prototype.Te = function() {
    return this.state_ === deferJsNs.i.F.Z
}
,
deferJsNs.i.prototype.Te = deferJsNs.i.prototype.Te,
deferJsNs.i.prototype.pe = function() {
    this.De(),
    this.ye(),
    this.u < this.o.length ? (this.u++,
    this.o[this.u - 1].call(window)) : (this.state_ = deferJsNs.i.F.U,
    this.le(),
    this.fireEvent(deferJsNs.i.G.$),
    this.we() && this.ze())
}
,
deferJsNs.i.prototype.Oe = function(e) {
    for (var t = [], s = e.length, r = 0; r < s; ++r)
        t.push(e.item(r));
    return t
}
,
deferJsNs.i.prototype.Ce = function() {
    var r = this
      , e = document.createElement("psanode");
    if (e.setAttribute("psa_dw_target", "true"),
    document.body.appendChild(e),
    Object.defineProperty)
        try {
            var t = {
                configurable: !0,
                get: function() {
                    return r.state_ >= deferJsNs.i.F.U ? "interactive" : "loading"
                }
            };
            Object.defineProperty(document, "readyState", t)
        } catch (e) {
            this.log("Exception while overriding document.readyState.", e)
        }
    function i(e, t) {
        if (r.m && "script" == t.toLowerCase()) {
            var s = function() {
                r.log("Receive onload event : " + this.getAttribute("src")),
                r.h--;
                var e = r.N.indexOf(this);
                -1 != e && (r.N.splice(e, 1),
                r.we() && r.ze())
            };
            deferJsNs.Ee(e, s),
            fasterizeutils.t(e, "error", s)
        }
    }
    this.Re(),
    document.writeln = function(e) {
        r.be(e + "\n")
    }
    ,
    document.write = function(e) {
        r.be(e)
    }
    ,
    document.open = function() {
        r.m || r.j.call(document)
    }
    ,
    document.close = function() {
        r.m || r.T.call(document)
    }
    ,
    document.getElementById = function(e) {
        r.De();
        var t = r.p.call(document, e);
        return null == t || t.hasAttribute(r.X) ? null : t
    }
    ,
    document.querySelectorAll && (document.getElementsByTagName = function(e) {
        if (r.m)
            try {
                return document.querySelectorAll(e + ":not([" + r.X + "])")
            } catch (e) {}
        return r._.call(document, e)
    }
    ),
    document.createElement = function(e) {
        var t = r.C.call(document, e);
        return i(t, e),
        t
    }
    ,
    document.createElementNS = function(e, t) {
        var s = r.R.call(document, e, t);
        return i(s, t),
        s
    }
}
,
deferJsNs.i.prototype.Ae = function() {
    if (this.state_ == deferJsNs.i.F.K) {
        var e = 0;
        0 != this.H && (e = this.je(this.W)),
        this.H == e && this.Ie()
    }
}
,
deferJsNs.i.prototype.Ae = deferJsNs.i.prototype.Ae,
deferJsNs.i.prototype.Ie = function() {
    this.state_ == deferJsNs.i.F.K && (this.state_ = deferJsNs.i.F.M,
    this.Ce(),
    this.pe())
}
,
deferJsNs.i.prototype.Ie = deferJsNs.i.prototype.Ie,
deferJsNs.i.prototype.Le = function(e) {
    var t = this.C.call(document, "div");
    return t.innerHTML = "<div>_</div>" + e,
    t.removeChild(t.firstChild),
    t
}
,
deferJsNs.i.prototype.Pe = function(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}
,
deferJsNs.i.prototype.Fe = function(e, t) {
    for (var s = this.Oe(e), r = s.length, i = t.parentNode, n = 0; n < r; ++n) {
        var f = s[n];
        this.Pe(f),
        this.A.call(i, f, t)
    }
}
,
deferJsNs.i.prototype.Me = function(e) {
    if ("SCRIPT" != e.nodeName)
        return !1;
    if (e.hasAttribute("type")) {
        var t = e.getAttribute("type");
        return !t || -1 != this.l.indexOf(t)
    }
    if (e.hasAttribute("language")) {
        var s = e.getAttribute("language");
        return !s || -1 != this.l.indexOf("text/" + s.toLowerCase())
    }
    return !0
}
,
deferJsNs.i.prototype.Ue = function(e, t) {
    if (e.childNodes)
        for (var s = this.Oe(e.childNodes), r = s.length, i = 0; i < r; ++i) {
            var n = s[i];
            "SCRIPT" == n.nodeName ? this.Me(n) && (t.push(n),
            n.setAttribute(deferJsNs.i.ie, n.type),
            n.setAttribute("type", this.Y),
            n.setAttribute(deferJsNs.i.ne, n.src),
            n.setAttribute("src", ""),
            n.setAttribute(this.X, "")) : this.Ue(n, t)
        }
}
,
deferJsNs.i.prototype.qe = function(e, t) {
    for (var s = e.length, r = 0; r < s; ++r)
        this.he(e[r], t + r)
}
,
deferJsNs.i.prototype.Ge = function(e, t, s) {
    var r = this.Le(e)
      , i = [];
    this.Ue(r, i),
    s ? this.Fe(r.childNodes, s) : this.log("Unable to insert nodes, no context element found"),
    this.qe(i, t)
}
,
deferJsNs.i.prototype.De = function() {
    if ("" != this.J) {
        this.log("handle_dw: " + this.J);
        var e = this.J;
        this.J = "";
        var t = this.ue();
        this.Ge(e, this.u, t)
    }
}
,
deferJsNs.i.prototype.be = function(e) {
    this.m ? (this.log("Document write: " + e),
    this.J += e) : this.S.call(document, e)
}
,
deferJsNs.i.prototype.Se = function() {
    var e;
    document.querySelectorAll && (e = document.querySelectorAll("[" + deferJsNs.i.de + "][data-frz-loaded]"));
    for (var t = 0; t < e.length; t++) {
        var s = e.item(t)
          , r = "var psaFunc=function() {" + s.getAttribute(deferJsNs.i.de) + "};";
        window.eval.call(window, r),
        "function" == typeof window.psaFunc ? psaAddEventListener(s, "onload", window.psaFunc) : this.log("Function is not defined", new Error(""))
    }
}
,
deferJsNs.i.prototype.fireEvent = function(e) {
    this.q = e,
    this.log("Firing Event: " + (1 === e ? "DOM Content Loaded" : "Window Onload"));
    for (var t = this.v[e] || [], s = 0; s < t.length; ++s)
        this.exec(t[s]);
    t.length = 0
}
,
deferJsNs.i.prototype.exec = function(e, t) {
    try {
        e.call(t || window)
    } catch (e) {
        this.log("Exception while evaluating the script : ", e)
    }
}
,
deferJsNs.i.prototype.Re = function() {
    var r = this;
    document.addEventListener = function(e, t, s) {
        psaAddEventListener(document, e, t, r.D, s)
    }
    ,
    window.addEventListener = function(e, t, s) {
        psaAddEventListener(window, e, t, r.O, s)
    }
}
;
var psaAddEventListener = function(t, e, s, r, i) {
    var n, f, d = fasterize.deferJs;
    if (d.state_ >= deferJsNs.i.F.V) {
        if (r)
            return void r.call(t, e, s, i);
        if (d.state_ >= deferJsNs.i.F.Z)
            return
    }
    if (d.q < deferJsNs.i.G.$ && ("DOMContentLoaded" == e || "readystatechange" == e || "onDOMContentLoaded" == e || "onreadystatechange" == e))
        n = deferJsNs.i.G.$,
        f = "DOMContentLoaded";
    else {
        if (!(t !== document && d.q < deferJsNs.i.G.ee) || "load" != e && "onload" != e)
            return void (r && r.call(t, e, s, i));
        n = deferJsNs.i.G.ee,
        f = "load"
    }
    d.v[n] || (d.v[n] = []),
    d.v[n].push(function() {
        var e = {
            bubbles: !1,
            cancelable: !1,
            eventPhase: 2
        };
        e.timeStamp = (new Date).getTime(),
        e.type = f,
        e.target = t != window ? t : document,
        e.currentTarget = t,
        s.call(t, e)
    })
};
deferJsNs.i.prototype.ke = function() {
    if (!(this.state_ >= deferJsNs.i.F.K)) {
        this.state_ = deferJsNs.i.F.K;
        for (var e = document.getElementsByTagName("script"), t = e.length, s = 0, r = 0, i = 0; i < t; ++i) {
            var n = e[i];
            n.getAttribute("type") == this.Y && (n.hasAttribute("async") ? this.he(n) : n.hasAttribute("defer") ? (this.he(n, s + r),
            r++) : (this.he(n, s),
            s++))
        }
    }
}
,
deferJsNs.i.prototype.ke = deferJsNs.i.prototype.ke,
deferJsNs.Ee = function(e, t) {
    fasterizeutils.t(e, "load", t)
}
,
fasterize.Ee = deferJsNs.Ee,
deferJsNs.i.prototype.ve = function() {
    return -1 != navigator.userAgent.indexOf("Firefox")
}
,
deferJsNs.i.prototype.He = function(e) {
    this.Y = e
}
,
deferJsNs.i.prototype.We = function(e) {
    this.X = e
}
,
deferJsNs.i.prototype.Ye = function() {
    var r = this;
    document.createElement = function(e) {
        var t = r.C.call(document, e);
        if (r.m && "script" == e.toLowerCase()) {
            r.W.push(t),
            r.H++;
            var s = function() {
                var e = r.W.indexOf(this);
                -1 != e && (r.W.splice(e, 1),
                r.H--,
                r.Ae())
            };
            deferJsNs.Ee(t, s),
            fasterizeutils.t(t, "error", s)
        }
        return t
    }
}
,
deferJsNs.i.prototype.Xe = function(s, r) {
    var i = this;
    return i.Me(s) && s.getAttribute("src") ? (i.N.push(s),
    i.h++,
    i.state_ < deferJsNs.i.F.U ? (s.Be = s.getAttribute("src"),
    i.log("Defer insertion of " + s.getAttribute("src")),
    i.oe(function() {
        s.currentSrc = s.getAttribute("src"),
        s.setAttribute("src", s.Be),
        i.log("Dynamically insert: " + s.getAttribute("src"));
        try {
            r()
        } catch (e) {
            i.log("Fallback to an insertion before the first script for " + s.getAttribute("src"));
            var t = document.getElementsByTagName("script")[0];
            r(t)
        } finally {
            s.setAttribute("src", s.currentSrc)
        }
        i.pe()
    }),
    s) : (i.log("Dynamically insert without delay: " + s.getAttribute("src")),
    r())) : r()
}
,
deferJsNs.i.prototype.Ke = function() {
    var i = this;
    Element.prototype.insertBefore = function(t, s) {
        var r = this;
        return i.Xe(t, function(e) {
            return e ? i.A.call(e.parentNode, t, e) : i.A.call(r, t, s)
        })
    }
    ,
    Element.prototype.appendChild = function(t) {
        var s = this;
        return i.Xe(t, function(e) {
            return e ? i.I.call(firstScript, t) : i.I.call(s, t)
        })
    }
}
,
deferJsNs.Qe = function() {
    fasterize.deferJs || (fasterize.deferJs = new deferJsNs.i,
    fasterize.deferJs.He(deferJsNs.i.re),
    fasterize.deferJs.We(deferJsNs.i.te),
    fasterize.deferJs.xe(),
    fasterize.deferJs.Ye(),
    fasterize.deferJs.Ke(),
    fasterize.deferJs = fasterize.deferJs)
}
,
fasterize.Ve = !1,
deferJsNs.Ze = function() {
    if (!fasterize.Ve) {
        if (0 < window.preventDeferJSStart)
            return window.preventDeferJSStart -= 1,
            void setTimeout(function() {
                deferJsNs.Ze()
            }, 50);
        deferJsNs.Qe(),
        fasterize.Ve = !0,
        fasterize.deferJs.ke(),
        fasterize.deferJs.Ae()
    }
}
,
deferJsNs.Ze = deferJsNs.Ze,
fasterizeutils.t(document, "DOMContentLoaded", deferJsNs.Ze),
deferJsNs.Ee(window, deferJsNs.Ze);
