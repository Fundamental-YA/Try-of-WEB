! function(r) {
    var n = {};

    function o(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return r[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    o.m = r, o.c = n, o.d = function(t, e, r) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 185)
}([function(t, e) {
    var r = Array.isArray;
    t.exports = r
}, function(t, e, r) {
    var n = r(43),
        r = "object" == typeof self && self && self.Object === Object && self,
        r = n || r || Function("return this")();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, r) {
    var n = r(96),
        o = r(99);
    t.exports = function(t, e) {
        return e = o(t, e), n(e) ? e : void 0
    }
}, function(t, e, r) {
    var n = r(42),
        o = r(81),
        i = r(10);
    t.exports = function(t) {
        return (i(t) ? n : o)(t)
    }
}, function(t, e, r) {
    var n = r(7),
        o = r(77),
        i = r(78),
        u = n ? n.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : (u && u in Object(t) ? o : i)(t)
    }
}, function(t, e, r) {
    r = r(1).Symbol;
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return null === t ? null : [t[1], t[2], t[3]].map(function(t) {
            return parseInt(t, 16)
        })
    }

    function o(t, e, r) {
        return e /= 255, r /= 255, t = .04045 < (t /= 255) ? Math.pow((t + .005) / 1.055, 2.4) : t / 12.92, e = .04045 < e ? Math.pow((e + .005) / 1.055, 2.4) : e / 12.92, r = .04045 < r ? Math.pow((r + .005) / 1.055, 2.4) : r / 12.92, [.4124 * (t *= 100) + .3576 * (e *= 100) + .1805 * (r *= 100), .2126 * t + .7152 * e + .0722 * r, .0193 * t + .1192 * e + .9505 * r]
    }

    function i(t, e, r) {
        return e /= 100, r /= 108.883, t = .008856 < (t /= 95.047) ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (e = .008856 < e ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116) - 16, 500 * (t - e), 200 * (e - (r = .008856 < r ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
    }

    function u(t, e, r) {
        r = o(t, e, r);
        return i(r[0], r[1], r[2])
    }

    function a(t, e) {
        var r = t[0],
            n = t[1],
            o = t[2],
            i = e[0],
            u = e[1],
            a = e[2],
            s = r - i,
            t = n - u,
            e = o - a,
            o = Math.sqrt(n * n + o * o),
            r = i - r,
            a = Math.sqrt(u * u + a * a) - o,
            e = Math.sqrt(s * s + t * t + e * e),
            e = Math.sqrt(e) > Math.sqrt(Math.abs(r)) + Math.sqrt(Math.abs(a)) ? Math.sqrt(e * e - r * r - a * a) : 0;
        return r /= 1, a /= 1 + .045 * o, e /= 1 + .015 * o, Math.sqrt(r * r + a * a + e * e)
    }

    function s(t, e) {
        return a(u.apply(void 0, t), u.apply(void 0, e))
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getColorIndex = n.getColorDiffStatus = n.hexDiff = n.rgbDiff = n.deltaE94 = n.rgbToCIELab = n.xyzToCIELab = n.rgbToXyz = n.hslToRgb = n.rgbToHsl = n.rgbToHex = n.hexToRgb = n.defer = n.RSHIFT = n.SIGBITS = n.DELTAE94_DIFF_STATUS = void 0, n.DELTAE94_DIFF_STATUS = {
        NA: 0,
        PERFECT: 1,
        CLOSE: 2,
        GOOD: 10,
        SIMILAR: 50
    }, n.SIGBITS = 5, n.RSHIFT = 8 - n.SIGBITS, n.defer = function() {
        var r, n, t = new Promise(function(t, e) {
            r = t, n = e
        });
        return {
            resolve: r,
            reject: n,
            promise: t
        }
    }, n.hexToRgb = r, n.rgbToHex = function(t, e, r) {
        return "#" + ((1 << 24) + (t << 16) + (e << 8) + r).toString(16).slice(1, 7)
    }, n.rgbToHsl = function(t, e, r) {
        t /= 255, e /= 255, r /= 255;
        var n, o = Math.max(t, e, r),
            i = Math.min(t, e, r),
            u = (o + i) / 2;
        if (o === i) n = s = 0;
        else {
            var a = o - i,
                s = .5 < u ? a / (2 - o - i) : a / (o + i);
            switch (o) {
                case t:
                    n = (e - r) / a + (e < r ? 6 : 0);
                    break;
                case e:
                    n = (r - t) / a + 2;
                    break;
                case r:
                    n = (t - e) / a + 4
            }
            n /= 6
        }
        return [n, s, u]
    }, n.hslToRgb = function(t, e, r) {
        var n, o, i;

        function u(t, e, r) {
            return r < 0 && (r += 1), 1 < r && --r, r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        return 0 === e ? n = o = i = r : (n = u(e = 2 * r - (r = r < .5 ? r * (1 + e) : r + e - r * e), r, t + 1 / 3), o = u(e, r, t), i = u(e, r, t - 1 / 3)), [255 * n, 255 * o, 255 * i]
    }, n.rgbToXyz = o, n.xyzToCIELab = i, n.rgbToCIELab = u, n.deltaE94 = a, n.rgbDiff = s, n.hexDiff = function(t, e) {
        return s(r(t), r(e))
    }, n.getColorDiffStatus = function(t) {
        return t < n.DELTAE94_DIFF_STATUS.NA ? "N/A" : t <= n.DELTAE94_DIFF_STATUS.PERFECT ? "Perfect" : t <= n.DELTAE94_DIFF_STATUS.CLOSE ? "Close" : t <= n.DELTAE94_DIFF_STATUS.GOOD ? "Good" : t < n.DELTAE94_DIFF_STATUS.SIMILAR ? "Similar" : "Wrong"
    }, n.getColorIndex = function(t, e, r) {
        return (t << 2 * n.SIGBITS) + (e << n.SIGBITS) + r
    }
}, function(t, e, r) {
    var n = r(47),
        o = r(24);
    t.exports = function(t) {
        return null != t && o(t.length) && !n(t)
    }
}, function(t, e, r) {
    var n = r(21);
    t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
    }
}, function(t, e, r) {
    var c = r(58),
        f = r(59);
    t.exports = function(t, e, r, n) {
        var o = !r;
        r = r || {};
        for (var i = -1, u = e.length; ++i < u;) {
            var a = e[i],
                s = n ? n(r[a], t[a], a, r, t) : void 0;
            void 0 === s && (s = t[a]), (o ? f : c)(r, a, s)
        }
        return r
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, r) {
    var n = r(86),
        o = r(87),
        i = r(88),
        u = r(89),
        r = r(90);

    function a(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    a.prototype.clear = n, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = u, a.prototype.set = r, t.exports = a
}, function(t, e, r) {
    var n = r(8);
    t.exports = function(t, e) {
        for (var r = t.length; r--;)
            if (n(t[r][0], e)) return r;
        return -1
    }
}, function(t, e, r) {
    r = r(4)(Object, "create");
    t.exports = r
}, function(t, e, r) {
    var n = r(108);
    t.exports = function(t, e) {
        return t = t.__data__, n(e) ? t["string" == typeof e ? "string" : "hash"] : t.map
    }
}, function(t, e, r) {
    var n = r(122),
        o = r(29),
        i = r(123),
        u = r(124),
        a = r(125),
        s = r(6),
        c = r(49),
        f = "[object Map]",
        l = "[object Promise]",
        h = "[object Set]",
        p = "[object WeakMap]",
        v = "[object DataView]",
        b = c(n),
        d = c(o),
        g = c(i),
        y = c(u),
        m = c(a),
        r = s;
    (n && r(new n(new ArrayBuffer(1))) != v || o && r(new o) != f || i && r(i.resolve()) != l || u && r(new u) != h || a && r(new a) != p) && (r = function(t) {
        var e = s(t),
            t = "[object Object]" == e ? t.constructor : void 0,
            t = t ? c(t) : "";
        if (t) switch (t) {
            case b:
                return v;
            case d:
                return f;
            case g:
                return l;
            case y:
                return h;
            case m:
                return p
        }
        return e
    }), t.exports = r
}, function(t, e, r) {
    var n = r(42),
        o = r(145),
        i = r(10);
    t.exports = function(t) {
        return i(t) ? n(t, !0) : o(t)
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Swatch = void 0;
    var n = r(9),
        o = r(69),
        r = (i.applyFilter = function(t, n) {
            return "function" == typeof n ? o(t, function(t) {
                var e = t.r,
                    r = t.g,
                    t = t.b;
                return n(e, r, t, 255)
            }) : t
        }, Object.defineProperty(i.prototype, "r", {
            get: function() {
                return this._rgb[0]
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "g", {
            get: function() {
                return this._rgb[1]
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "b", {
            get: function() {
                return this._rgb[2]
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "rgb", {
            get: function() {
                return this._rgb
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "hsl", {
            get: function() {
                var t, e, r;
                return this._hsl || (t = (r = this._rgb)[0], e = r[1], r = r[2], this._hsl = n.rgbToHsl(t, e, r)), this._hsl
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "hex", {
            get: function() {
                var t, e, r;
                return this._hex || (t = (r = this._rgb)[0], e = r[1], r = r[2], this._hex = n.rgbToHex(t, e, r)), this._hex
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "population", {
            get: function() {
                return this._population
            },
            enumerable: !1,
            configurable: !0
        }), i.prototype.toJSON = function() {
            return {
                rgb: this.rgb,
                population: this.population
            }
        }, i.prototype.getRgb = function() {
            return this._rgb
        }, i.prototype.getHsl = function() {
            return this.hsl
        }, i.prototype.getPopulation = function() {
            return this._population
        }, i.prototype.getHex = function() {
            return this.hex
        }, i.prototype.getYiq = function() {
            var t;
            return this._yiq || (t = this._rgb, this._yiq = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3), this._yiq
        }, Object.defineProperty(i.prototype, "titleTextColor", {
            get: function() {
                return this._titleTextColor || (this._titleTextColor = this.getYiq() < 200 ? "#fff" : "#000"), this._titleTextColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(i.prototype, "bodyTextColor", {
            get: function() {
                return this._bodyTextColor || (this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000"), this._bodyTextColor
            },
            enumerable: !1,
            configurable: !0
        }), i.prototype.getTitleTextColor = function() {
            return this.titleTextColor
        }, i.prototype.getBodyTextColor = function() {
            return this.bodyTextColor
        }, i);

    function i(t, e) {
        this._rgb = t, this._population = e
    }
    e.Swatch = r
}, function(t, e, r) {
    var n = r(6),
        o = r(2);
    t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t)
    }
}, function(t, i, u) {
    (function(t) {
        var e = u(1),
            r = u(79),
            n = i && !i.nodeType && i,
            o = n && "object" == typeof t && t && !t.nodeType && t,
            e = o && o.exports === n ? e.Buffer : void 0,
            r = (e ? e.isBuffer : void 0) || r;
        t.exports = r
    }).call(this, u(13)(t))
}, function(t, e) {
    var n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var r = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && n.test(t)) && -1 < t && t % 1 == 0 && t < e
    }
}, function(t, e) {
    t.exports = function(t) {
        return "number" == typeof t && -1 < t && t % 1 == 0 && t <= 9007199254740991
    }
}, function(t, e) {
    t.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, function(t, i, u) {
    (function(t) {
        var e = u(43),
            r = i && !i.nodeType && i,
            n = r && "object" == typeof t && t && !t.nodeType && t,
            o = n && n.exports === r && e.process,
            e = function() {
                try {
                    var t = n && n.require && n.require("util").types;
                    return t ? t : o && o.binding && o.binding("util")
                } catch (t) {}
            }();
        t.exports = e
    }).call(this, u(13)(t))
}, function(t, e) {
    var r = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
}, function(t, e, r) {
    var n = r(14),
        o = r(91),
        i = r(92),
        u = r(93),
        a = r(94),
        r = r(95);

    function s(t) {
        t = this.__data__ = new n(t);
        this.size = t.size
    }
    s.prototype.clear = o, s.prototype.delete = i, s.prototype.get = u, s.prototype.has = a, s.prototype.set = r, t.exports = s
}, function(t, e, r) {
    r = r(4)(r(1), "Map");
    t.exports = r
}, function(t, e, r) {
    var n = r(100),
        o = r(107),
        i = r(109),
        u = r(110),
        r = r(111);

    function a(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    a.prototype.clear = n, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = u, a.prototype.set = r, t.exports = a
}, function(t, e, r) {
    var n = r(41),
        r = r(55),
        o = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        r = i ? function(e) {
            return null == e ? [] : (e = Object(e), n(i(e), function(t) {
                return o.call(e, t)
            }))
        } : r;
    t.exports = r
}, function(t, e, r) {
    var n = r(0),
        o = r(33),
        i = r(129),
        u = r(132);
    t.exports = function(t, e) {
        return n(t) ? t : o(t, e) ? [t] : i(u(t))
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(21),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;
    t.exports = function(t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !o(t)) || (u.test(t) || !i.test(t) || null != e && t in Object(e))
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, r) {
    var n = r(52);
    t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new n(e).set(new n(t)), e
    }
}, function(t, e, r) {
    var n = r(76),
        o = r(2),
        r = Object.prototype,
        i = r.hasOwnProperty,
        u = r.propertyIsEnumerable,
        n = n(function() {
            return arguments
        }()) ? n : function(t) {
            return o(t) && i.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = n
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
        return t
    }
}, function(t, e, r) {
    var o = r(32),
        i = r(11);
    t.exports = function(t, e) {
        for (var r = 0, n = (e = o(e, t)).length; null != t && r < n;) t = t[i(e[r++])];
        return r && r == n ? t : void 0
    }
}, function(t, e, r) {
    r = r(46)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
            void 0 === n && (n = r), Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        } : function(t, e, r, n) {
            void 0 === n && (n = r), t[n] = e[r]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        } : function(t, e) {
            t.default = e
        }),
        i = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && n(e, t, r);
            return o(e, t), e
        },
        u = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = r(20),
        s = u(r(140)),
        c = i(r(9)),
        f = i(r(163)),
        u = i(r(167)),
        l = i(r(175)),
        h = r(62),
        f = (p.from = function(t) {
            return new s.default(t)
        }, p.prototype._process = function(t, e) {
            var r = e.quantizer,
                n = e.generator;
            return t.scaleDown(e), t.applyFilter(e.combinedFilter).then(function(t) {
                return r(t.data, e)
            }).then(function(t) {
                return a.Swatch.applyFilter(t, e.combinedFilter)
            }).then(function(t) {
                return Promise.resolve(n(t))
            })
        }, p.prototype.palette = function() {
            return this.swatches()
        }, p.prototype.swatches = function() {
            return this._palette
        }, p.prototype.getPalette = function(e) {
            var r = this,
                n = new this.opts.ImageClass,
                t = n.load(this._src).then(function(t) {
                    return r._process(t, r.opts)
                }).then(function(t) {
                    return r._palette = t, n.remove(), t
                }, function(t) {
                    throw n.remove(), t
                });
            return e && t.then(function(t) {
                return e(null, t)
            }, function(t) {
                return e(t)
            }), t
        }, p.Builder = s.default, p.Quantizer = f, p.Generator = u, p.Filter = l, p.Util = c, p.Swatch = a.Swatch, p.DefaultOpts = {
            colorCount: 64,
            quality: 5,
            generator: u.Default,
            ImageClass: null,
            quantizer: f.MMCQ,
            filters: [l.Default]
        }, p);

    function p(t, e) {
        this._src = t, this.opts = h({}, e, p.DefaultOpts), this.opts.combinedFilter = l.combineFilters(this.opts.filters)
    }
    e.default = f
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
            var u = t[r];
            e(u, r, t) && (i[o++] = u)
        }
        return i
    }
}, function(t, e, r) {
    var f = r(75),
        l = r(36),
        h = r(0),
        p = r(22),
        v = r(23),
        b = r(45),
        d = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var r, n = h(t),
            o = !n && l(t),
            i = !n && !o && p(t),
            u = !n && !o && !i && b(t),
            a = n || o || i || u,
            s = a ? f(t.length, String) : [],
            c = s.length;
        for (r in t) !e && !d.call(t, r) || a && ("length" == r || i && ("offset" == r || "parent" == r) || u && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || v(r, c)) || s.push(r);
        return s
    }
}, function(e, t, r) {
    (function(t) {
        t = "object" == typeof t && t && t.Object === Object && t;
        e.exports = t
    }).call(this, r(44))
}, function(t, e) {
    var r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    var n = r(80),
        o = r(25),
        r = r(26),
        r = r && r.isTypedArray,
        n = r ? o(r) : n;
    t.exports = n
}, function(t, e) {
    t.exports = function(e, r) {
        return function(t) {
            return e(r(t))
        }
    }
}, function(t, e, r) {
    var n = r(6),
        o = r(3);
    t.exports = function(t) {
        return !!o(t) && ("[object Function]" == (t = n(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t)
    }
}, function(t, e, r) {
    var n = r(84),
        o = r(127),
        i = r(34),
        u = r(0),
        a = r(137);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? u(t) ? o(t[0], t[1]) : n(t) : a(t)
    }
}, function(t, e) {
    var r = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return r.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, r) {
    var u = r(112),
        a = r(2);
    t.exports = function t(e, r, n, o, i) {
        return e === r || (null == e || null == r || !a(e) && !a(r) ? e != e && r != r : u(e, r, n, o, t, i))
    }
}, function(t, e, r) {
    var d = r(113),
        g = r(116),
        y = r(117);
    t.exports = function(t, e, r, n, o, i) {
        var u = 1 & r,
            a = t.length,
            s = e.length;
        if (a != s && !(u && a < s)) return !1;
        var c = i.get(t),
            s = i.get(e);
        if (c && s) return c == e && s == t;
        var f = -1,
            l = !0,
            h = 2 & r ? new d : void 0;
        for (i.set(t, e), i.set(e, t); ++f < a;) {
            var p, v = t[f],
                b = e[f];
            if (n && (p = u ? n(b, v, f, e, t, i) : n(v, b, f, t, e, i)), void 0 !== p) {
                if (p) continue;
                l = !1;
                break
            }
            if (h) {
                if (!g(e, function(t, e) {
                        if (!y(h, e) && (v === t || o(v, t, r, n, i))) return h.push(e)
                    })) {
                    l = !1;
                    break
                }
            } else if (v !== b && !o(v, b, r, n, i)) {
                l = !1;
                break
            }
        }
        return i.delete(t), i.delete(e), l
    }
}, function(t, e, r) {
    r = r(1).Uint8Array;
    t.exports = r
}, function(t, e, r) {
    var n = r(54),
        o = r(31),
        i = r(5);
    t.exports = function(t) {
        return n(t, i, o)
    }
}, function(t, e, r) {
    var n = r(37),
        o = r(0);
    t.exports = function(t, e, r) {
        return e = e(t), o(t) ? e : n(e, r(t))
    }
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, r) {
    var n = r(3);
    t.exports = function(t) {
        return t == t && !n(t)
    }
}, function(t, e) {
    t.exports = function(e, r) {
        return function(t) {
            return null != t && (t[e] === r && (void 0 !== r || e in Object(t)))
        }
    }
}, function(t, e, r) {
    var o = r(59),
        i = r(8),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r) {
        var n = t[e];
        u.call(t, e) && i(n, r) && (void 0 !== r || e in t) || o(t, e, r)
    }
}, function(t, e, r) {
    var n = r(60);
    t.exports = function(t, e, r) {
        "__proto__" == e && n ? n(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
}, function(t, e, r) {
    var n = r(4),
        r = function() {
            try {
                var t = n(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = r
}, function(t, e, r) {
    var n = r(37),
        o = r(39),
        i = r(31),
        r = r(55),
        r = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) n(e, i(t)), t = o(t);
            return e
        } : r;
    t.exports = r
}, function(t, e, r) {
    var n = r(169),
        l = r(8),
        h = r(174),
        p = r(19),
        v = Object.prototype,
        b = v.hasOwnProperty,
        n = n(function(t, e) {
            t = Object(t);
            var r = -1,
                n = e.length,
                o = 2 < n ? e[2] : void 0;
            for (o && h(e[0], e[1], o) && (n = 1); ++r < n;)
                for (var i = e[r], u = p(i), a = -1, s = u.length; ++a < s;) {
                    var c = u[a],
                        f = t[c];
                    (void 0 === f || l(f, v[c]) && !b.call(t, c)) && (t[c] = i[c])
                }
            return t
        });
    t.exports = n
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
        return o
    }
}, function(t, e, r) {
    var v = r(28),
        b = r(142),
        d = r(58),
        g = r(143),
        y = r(144),
        m = r(147),
        _ = r(148),
        x = r(149),
        j = r(150),
        w = r(53),
        O = r(65),
        S = r(18),
        A = r(151),
        M = r(152),
        I = r(157),
        T = r(0),
        P = r(22),
        C = r(159),
        D = r(3),
        L = r(161),
        F = r(5),
        E = r(19),
        k = 1,
        V = 2,
        z = 4,
        R = "[object Arguments]",
        U = "[object Function]",
        q = "[object GeneratorFunction]",
        H = "[object Object]",
        N = {};
    N[R] = N["[object Array]"] = N["[object ArrayBuffer]"] = N["[object DataView]"] = N["[object Boolean]"] = N["[object Date]"] = N["[object Float32Array]"] = N["[object Float64Array]"] = N["[object Int8Array]"] = N["[object Int16Array]"] = N["[object Int32Array]"] = N["[object Map]"] = N["[object Number]"] = N[H] = N["[object RegExp]"] = N["[object Set]"] = N["[object String]"] = N["[object Symbol]"] = N["[object Uint8Array]"] = N["[object Uint8ClampedArray]"] = N["[object Uint16Array]"] = N["[object Uint32Array]"] = !0, N["[object Error]"] = N[U] = N["[object WeakMap]"] = !1, t.exports = function r(n, o, i, t, e, u) {
        var a, s = o & k,
            c = o & V,
            f = o & z;
        if (i && (a = e ? i(n, t, e, u) : i(n)), void 0 !== a) return a;
        if (!D(n)) return n;
        var l = T(n);
        if (l) {
            if (a = A(n), !s) return _(n, a)
        } else {
            var h = S(n),
                t = h == U || h == q;
            if (P(n)) return m(n, s);
            if (h == H || h == R || t && !e) {
                if (a = c || t ? {} : I(n), !s) return c ? j(n, y(a, n)) : x(n, g(a, n))
            } else {
                if (!N[h]) return e ? n : {};
                a = M(n, h, s)
            }
        }
        s = (u = u || new v).get(n);
        if (s) return s;
        u.set(n, a), L(n) ? n.forEach(function(t) {
            a.add(r(t, o, i, t, n, u))
        }) : C(n) && n.forEach(function(t, e) {
            a.set(e, r(t, o, i, e, n, u))
        });
        var p = l ? void 0 : (f ? c ? O : w : c ? E : F)(n);
        return b(p || n, function(t, e) {
            p && (t = n[e = t]), d(a, e, r(t, o, i, e, n, u))
        }), a
    }
}, function(t, e, r) {
    var n = r(54),
        o = r(61),
        i = r(19);
    t.exports = function(t) {
        return n(t, i, o)
    }
}, function(t, e, r) {
    var s = r(170),
        c = Math.max;
    t.exports = function(i, u, a) {
        return u = c(void 0 === u ? i.length - 1 : u, 0),
            function() {
                for (var t = arguments, e = -1, r = c(t.length - u, 0), n = Array(r); ++e < r;) n[e] = t[u + e];
                e = -1;
                for (var o = Array(u + 1); ++e < u;) o[e] = t[e];
                return o[u] = a(n), s(i, this, o)
            }
    }
}, function(t, e, r) {
    var n = r(171),
        n = r(173)(n);
    t.exports = n
}, function(t, e, r) {
    "use strict";
    var n = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        },
        o = n(r(40)),
        r = n(r(177));
    o.default.DefaultOpts.ImageClass = r.default, t.exports = o.default
}, function(t, e, r) {
    var n = r(41),
        o = r(70),
        i = r(48),
        u = r(0);
    t.exports = function(t, e) {
        return (u(t) ? n : o)(t, i(e, 3))
    }
}, function(t, e, r) {
    var i = r(71);
    t.exports = function(t, n) {
        var o = [];
        return i(t, function(t, e, r) {
            n(t, e, r) && o.push(t)
        }), o
    }
}, function(t, e, r) {
    var n = r(72),
        n = r(83)(n);
    t.exports = n
}, function(t, e, r) {
    var n = r(73),
        o = r(5);
    t.exports = function(t, e) {
        return t && n(t, e, o)
    }
}, function(t, e, r) {
    r = r(74)();
    t.exports = r
}, function(t, e) {
    t.exports = function(s) {
        return function(t, e, r) {
            for (var n = -1, o = Object(t), i = r(t), u = i.length; u--;) {
                var a = i[s ? u : ++n];
                if (!1 === e(o[a], a, o)) break
            }
            return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
}, function(t, e, r) {
    var n = r(6),
        o = r(2);
    t.exports = function(t) {
        return o(t) && "[object Arguments]" == n(t)
    }
}, function(t, e, r) {
    var n = r(7),
        r = Object.prototype,
        i = r.hasOwnProperty,
        u = r.toString,
        a = n ? n.toStringTag : void 0;
    t.exports = function(t) {
        var e = i.call(t, a),
            r = t[a];
        try {
            var n = !(t[a] = void 0)
        } catch (t) {}
        var o = u.call(t);
        return n && (e ? t[a] = r : delete t[a]), o
    }
}, function(t, e) {
    var r = Object.prototype.toString;
    t.exports = function(t) {
        return r.call(t)
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, r) {
    var n = r(6),
        o = r(24),
        i = r(2),
        u = {};
    u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = function(t) {
        return i(t) && o(t.length) && !!u[n(t)]
    }
}, function(t, e, r) {
    var n = r(27),
        o = r(82),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!n(t)) return o(t);
        var e, r = [];
        for (e in Object(t)) i.call(t, e) && "constructor" != e && r.push(e);
        return r
    }
}, function(t, e, r) {
    r = r(46)(Object.keys, Object);
    t.exports = r
}, function(t, e, r) {
    var a = r(10);
    t.exports = function(i, u) {
        return function(t, e) {
            if (null == t) return t;
            if (!a(t)) return i(t, e);
            for (var r = t.length, n = u ? r : -1, o = Object(t);
                (u ? n-- : ++n < r) && !1 !== e(o[n], n, o););
            return t
        }
    }
}, function(t, e, r) {
    var n = r(85),
        o = r(126),
        i = r(57);
    t.exports = function(e) {
        var r = o(e);
        return 1 == r.length && r[0][2] ? i(r[0][0], r[0][1]) : function(t) {
            return t === e || n(t, e, r)
        }
    }
}, function(t, e, r) {
    var p = r(28),
        v = r(50);
    t.exports = function(t, e, r, n) {
        var o = r.length,
            i = o,
            u = !n;
        if (null == t) return !i;
        for (t = Object(t); o--;) {
            var a = r[o];
            if (u && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
        }
        for (; ++o < i;) {
            var s = (a = r[o])[0],
                c = t[s],
                f = a[1];
            if (u && a[2]) {
                if (void 0 === c && !(s in t)) return !1
            } else {
                var l, h = new p;
                if (n && (l = n(c, f, s, t, e, h)), !(void 0 === l ? v(f, c, 3, n, h) : l)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, r) {
    var n = r(15),
        o = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__;
        return !((t = n(e, t)) < 0) && (t == e.length - 1 ? e.pop() : o.call(e, t, 1), --this.size, !0)
    }
}, function(t, e, r) {
    var n = r(15);
    t.exports = function(t) {
        var e = this.__data__;
        return (t = n(e, t)) < 0 ? void 0 : e[t][1]
    }
}, function(t, e, r) {
    var n = r(15);
    t.exports = function(t) {
        return -1 < n(this.__data__, t)
    }
}, function(t, e, r) {
    var o = r(15);
    t.exports = function(t, e) {
        var r = this.__data__,
            n = o(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
}, function(t, e, r) {
    var n = r(14);
    t.exports = function() {
        this.__data__ = new n, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            t = e.delete(t);
        return this.size = e.size, t
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, r) {
    var o = r(14),
        i = r(29),
        u = r(30);
    t.exports = function(t, e) {
        var r = this.__data__;
        if (r instanceof o) {
            var n = r.__data__;
            if (!i || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new u(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
}, function(t, e, r) {
    var n = r(47),
        o = r(97),
        i = r(3),
        u = r(49),
        a = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        r = Object.prototype,
        s = s.toString,
        r = r.hasOwnProperty,
        c = RegExp("^" + s.call(r).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!i(t) || o(t)) && (n(t) ? c : a).test(u(t))
    }
}, function(t, e, r) {
    var r = r(98),
        n = (r = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!n && n in t
    }
}, function(t, e, r) {
    r = r(1)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, r) {
    var n = r(101),
        o = r(14),
        i = r(29);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(i || o),
            string: new n
        }
    }
}, function(t, e, r) {
    var n = r(102),
        o = r(103),
        i = r(104),
        u = r(105),
        r = r(106);

    function a(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    a.prototype.clear = n, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = u, a.prototype.set = r, t.exports = a
}, function(t, e, r) {
    var n = r(16);
    t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t
    }
}, function(t, e, r) {
    var n = r(16),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (n) {
            var r = e[t];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, r) {
    var n = r(16),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t)
    }
}, function(t, e, r) {
    var n = r(16);
    t.exports = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }
}, function(t, e, r) {
    var n = r(17);
    t.exports = function(t) {
        return t = n(this, t).delete(t), this.size -= t ? 1 : 0, t
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, r) {
    var n = r(17);
    t.exports = function(t) {
        return n(this, t).get(t)
    }
}, function(t, e, r) {
    var n = r(17);
    t.exports = function(t) {
        return n(this, t).has(t)
    }
}, function(t, e, r) {
    var o = r(17);
    t.exports = function(t, e) {
        var r = o(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
}, function(t, e, r) {
    var l = r(28),
        h = r(51),
        p = r(118),
        v = r(121),
        b = r(18),
        d = r(0),
        g = r(22),
        y = r(45),
        m = "[object Arguments]",
        _ = "[object Array]",
        x = "[object Object]",
        j = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r, n, o, i) {
        var u = d(t),
            a = d(e),
            s = u ? _ : b(t),
            c = a ? _ : b(e),
            f = (s = s == m ? x : s) == x,
            a = (c = c == m ? x : c) == x;
        if ((c = s == c) && g(t)) {
            if (!g(e)) return !1;
            f = !(u = !0)
        }
        if (c && !f) return i = i || new l, u || y(t) ? h(t, e, r, n, o, i) : p(t, e, s, r, n, o, i);
        if (!(1 & r)) {
            f = f && j.call(t, "__wrapped__"), a = a && j.call(e, "__wrapped__");
            if (f || a) return o(f ? t.value() : t, a ? e.value() : e, r, n, i = i || new l)
        }
        return !!c && (i = i || new l, v(t, e, r, n, o, i))
    }
}, function(t, e, r) {
    var n = r(30),
        o = r(114),
        r = r(115);

    function i(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.__data__ = new n; ++e < r;) this.add(t[e])
    }
    i.prototype.add = i.prototype.push = o, i.prototype.has = r, t.exports = i
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, r) {
    var n = r(7),
        s = r(52),
        c = r(8),
        f = r(51),
        l = r(119),
        h = r(120),
        n = n ? n.prototype : void 0,
        p = n ? n.valueOf : void 0;
    t.exports = function(t, e, r, n, o, i, u) {
        switch (r) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case "[object ArrayBuffer]":
                return t.byteLength == e.byteLength && i(new s(t), new s(e)) ? !0 : !1;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return c(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var a = l;
            case "[object Set]":
                r = 1 & n, a = a || h;
                if (t.size != e.size && !r) return !1;
                r = u.get(t);
                if (r) return r == e;
                n |= 2, u.set(t, e);
                i = f(a(t), a(e), n, o, i, u);
                return u.delete(t), i;
            case "[object Symbol]":
                if (p) return p.call(t) == p.call(e)
        }
        return !1
    }
}, function(t, e) {
    t.exports = function(t) {
        var r = -1,
            n = Array(t.size);
        return t.forEach(function(t, e) {
            n[++r] = [e, t]
        }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function(t) {
            r[++e] = t
        }), r
    }
}, function(t, e, r) {
    var y = r(53),
        m = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r, n, o, i) {
        var u = 1 & r,
            a = y(t),
            s = a.length;
        if (s != y(e).length && !u) return !1;
        for (var c = s; c--;) {
            var f = a[c];
            if (!(u ? f in e : m.call(e, f))) return !1
        }
        var l = i.get(t),
            h = i.get(e);
        if (l && h) return l == e && h == t;
        var p = !0;
        i.set(t, e), i.set(e, t);
        for (var v = u; ++c < s;) {
            var b, d = t[f = a[c]],
                g = e[f];
            if (n && (b = u ? n(g, d, f, e, t, i) : n(d, g, f, t, e, i)), !(void 0 === b ? d === g || o(d, g, r, n, i) : b)) {
                p = !1;
                break
            }
            v = v || "constructor" == f
        }
        return !p || v || (l = t.constructor) != (h = e.constructor) && "constructor" in t && "constructor" in e && !("function" == typeof l && l instanceof l && "function" == typeof h && h instanceof h) && (p = !1), i.delete(t), i.delete(e), p
    }
}, function(t, e, r) {
    r = r(4)(r(1), "DataView");
    t.exports = r
}, function(t, e, r) {
    r = r(4)(r(1), "Promise");
    t.exports = r
}, function(t, e, r) {
    r = r(4)(r(1), "Set");
    t.exports = r
}, function(t, e, r) {
    r = r(4)(r(1), "WeakMap");
    t.exports = r
}, function(t, e, r) {
    var i = r(56),
        u = r(5);
    t.exports = function(t) {
        for (var e = u(t), r = e.length; r--;) {
            var n = e[r],
                o = t[n];
            e[r] = [n, o, i(o)]
        }
        return e
    }
}, function(t, e, r) {
    var o = r(50),
        i = r(128),
        u = r(134),
        a = r(33),
        s = r(56),
        c = r(57),
        f = r(11);
    t.exports = function(r, n) {
        return a(r) && s(n) ? c(f(r), n) : function(t) {
            var e = i(t, r);
            return void 0 === e && e === n ? u(t, r) : o(n, e, 3)
        }
    }
}, function(t, e, r) {
    var n = r(38);
    t.exports = function(t, e, r) {
        return void 0 === (e = null == t ? void 0 : n(t, e)) ? r : e
    }
}, function(t, e, r) {
    var r = r(130),
        n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        r = r(function(t) {
            var o = [];
            return 46 === t.charCodeAt(0) && o.push(""), t.replace(n, function(t, e, r, n) {
                o.push(r ? n.replace(i, "$1") : e || t)
            }), o
        });
    t.exports = r
}, function(t, e, r) {
    var n = r(131);
    t.exports = function(t) {
        var e = (t = n(t, function(t) {
            return 500 === e.size && e.clear(), t
        })).cache;
        return t
    }
}, function(t, e, r) {
    var u = r(30),
        a = "Expected a function";

    function s(n, o) {
        if ("function" != typeof n || null != o && "function" != typeof o) throw new TypeError(a);
        var i = function() {
            var t = arguments,
                e = o ? o.apply(this, t) : t[0],
                r = i.cache;
            if (r.has(e)) return r.get(e);
            t = n.apply(this, t);
            return i.cache = r.set(e, t) || r, t
        };
        return i.cache = new(s.Cache || u), i
    }
    s.Cache = u, t.exports = s
}, function(t, e, r) {
    var n = r(133);
    t.exports = function(t) {
        return null == t ? "" : n(t)
    }
}, function(t, e, r) {
    var n = r(7),
        o = r(63),
        i = r(0),
        u = r(21),
        a = 1 / 0,
        n = n ? n.prototype : void 0,
        s = n ? n.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (u(e)) return s ? s.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -a ? "-0" : r
    }
}, function(t, e, r) {
    var n = r(135),
        o = r(136);
    t.exports = function(t, e) {
        return null != t && o(t, e, n)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, r) {
    var a = r(32),
        s = r(36),
        c = r(0),
        f = r(23),
        l = r(24),
        h = r(11);
    t.exports = function(t, e, r) {
        for (var n = -1, o = (e = a(e, t)).length, i = !1; ++n < o;) {
            var u = h(e[n]);
            if (!(i = null != t && r(t, u))) break;
            t = t[u]
        }
        return i || ++n != o ? i : !!(o = null == t ? 0 : t.length) && l(o) && f(u, o) && (c(t) || s(t))
    }
}, function(t, e, r) {
    var n = r(138),
        o = r(139),
        i = r(33),
        u = r(11);
    t.exports = function(t) {
        return i(t) ? n(u(t)) : o(t)
    }
}, function(t, e) {
    t.exports = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
}, function(t, e, r) {
    var n = r(38);
    t.exports = function(e) {
        return function(t) {
            return n(t, e)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(r(40)),
        i = r(141),
        r = (u.prototype.maxColorCount = function(t) {
            return this._opts.colorCount = t, this
        }, u.prototype.maxDimension = function(t) {
            return this._opts.maxDimension = t, this
        }, u.prototype.addFilter = function(t) {
            return this._opts.filters.push(t), this
        }, u.prototype.removeFilter = function(t) {
            t = this._opts.filters.indexOf(t);
            return 0 < t && this._opts.filters.splice(t), this
        }, u.prototype.clearFilters = function() {
            return this._opts.filters = [], this
        }, u.prototype.quality = function(t) {
            return this._opts.quality = t, this
        }, u.prototype.useImageClass = function(t) {
            return this._opts.ImageClass = t, this
        }, u.prototype.useGenerator = function(t) {
            return this._opts.generator = t, this
        }, u.prototype.useQuantizer = function(t) {
            return this._opts.quantizer = t, this
        }, u.prototype.build = function() {
            return new o.default(this._src, this._opts)
        }, u.prototype.getPalette = function(t) {
            return this.build().getPalette(t)
        }, u.prototype.getSwatches = function(t) {
            return this.build().getPalette(t)
        }, u);

    function u(t, e) {
        void 0 === e && (e = {}), this._src = t, this._opts = e, this._opts.filters = i(o.default.DefaultOpts.filters)
    }
    e.default = r
}, function(t, e, r) {
    var n = r(64);
    t.exports = function(t) {
        return n(t, 4)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
    }
}, function(t, e, r) {
    var n = r(12),
        o = r(5);
    t.exports = function(t, e) {
        return t && n(e, o(e), t)
    }
}, function(t, e, r) {
    var n = r(12),
        o = r(19);
    t.exports = function(t, e) {
        return t && n(e, o(e), t)
    }
}, function(t, e, r) {
    var o = r(3),
        i = r(27),
        u = r(146),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!o(t)) return u(t);
        var e, r = i(t),
            n = [];
        for (e in t)("constructor" != e || !r && a.call(t, e)) && n.push(e);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var r in Object(t)) e.push(r);
        return e
    }
}, function(t, i, u) {
    (function(t) {
        var e = u(1),
            r = i && !i.nodeType && i,
            n = r && "object" == typeof t && t && !t.nodeType && t,
            e = n && n.exports === r ? e.Buffer : void 0,
            o = e ? e.allocUnsafe : void 0;
        t.exports = function(t, e) {
            return e ? t.slice() : (e = t.length, e = o ? o(e) : new t.constructor(e), t.copy(e), e)
        }
    }).call(this, u(13)(t))
}, function(t, e) {
    t.exports = function(t, e) {
        var r = -1,
            n = t.length;
        for (e = e || Array(n); ++r < n;) e[r] = t[r];
        return e
    }
}, function(t, e, r) {
    var n = r(12),
        o = r(31);
    t.exports = function(t, e) {
        return n(t, o(t), e)
    }
}, function(t, e, r) {
    var n = r(12),
        o = r(61);
    t.exports = function(t, e) {
        return n(t, o(t), e)
    }
}, function(t, e) {
    var n = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = t.length,
            r = new t.constructor(e);
        return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r
    }
}, function(t, e, r) {
    var o = r(35),
        i = r(153),
        u = r(154),
        a = r(155),
        s = r(156);
    t.exports = function(t, e, r) {
        var n = t.constructor;
        switch (e) {
            case "[object ArrayBuffer]":
                return o(t);
            case "[object Boolean]":
            case "[object Date]":
                return new n(+t);
            case "[object DataView]":
                return i(t, r);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return s(t, r);
            case "[object Map]":
                return new n;
            case "[object Number]":
            case "[object String]":
                return new n(t);
            case "[object RegExp]":
                return u(t);
            case "[object Set]":
                return new n;
            case "[object Symbol]":
                return a(t)
        }
    }
}, function(t, e, r) {
    var n = r(35);
    t.exports = function(t, e) {
        return e = e ? n(t.buffer) : t.buffer, new t.constructor(e, t.byteOffset, t.byteLength)
    }
}, function(t, e) {
    var r = /\w*$/;
    t.exports = function(t) {
        var e = new t.constructor(t.source, r.exec(t));
        return e.lastIndex = t.lastIndex, e
    }
}, function(t, e, r) {
    var r = r(7),
        r = r ? r.prototype : void 0,
        n = r ? r.valueOf : void 0;
    t.exports = function(t) {
        return n ? Object(n.call(t)) : {}
    }
}, function(t, e, r) {
    var n = r(35);
    t.exports = function(t, e) {
        return e = e ? n(t.buffer) : t.buffer, new t.constructor(e, t.byteOffset, t.length)
    }
}, function(t, e, r) {
    var n = r(158),
        o = r(39),
        i = r(27);
    t.exports = function(t) {
        return "function" != typeof t.constructor || i(t) ? {} : n(o(t))
    }
}, function(t, e, r) {
    var n = r(3),
        o = Object.create,
        r = function(t) {
            if (!n(t)) return {};
            if (o) return o(t);
            i.prototype = t;
            t = new i;
            return i.prototype = void 0, t
        };

    function i() {}
    t.exports = r
}, function(t, e, r) {
    var n = r(160),
        o = r(25),
        r = r(26),
        r = r && r.isMap,
        n = r ? o(r) : n;
    t.exports = n
}, function(t, e, r) {
    var n = r(18),
        o = r(2);
    t.exports = function(t) {
        return o(t) && "[object Map]" == n(t)
    }
}, function(t, e, r) {
    var n = r(162),
        o = r(25),
        r = r(26),
        r = r && r.isSet,
        n = r ? o(r) : n;
    t.exports = n
}, function(t, e, r) {
    var n = r(18),
        o = r(2);
    t.exports = function(t) {
        return o(t) && "[object Set]" == n(t)
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WebWorker = void 0;
    var n = r(164);
    Object.defineProperty(e, "MMCQ", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), e.WebWorker = null
}, function(t, e, r) {
    "use strict";
    var n = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(20),
        i = n(r(165)),
        u = n(r(166));

    function a(t, e) {
        for (var r = t.size(); t.size() < e;) {
            var n = t.pop();
            if (!(n && 0 < n.count())) break;
            var o = n.split(),
                n = o[0],
                o = o[1];
            if (t.push(n), o && 0 < o.count() && t.push(o), t.size() === r) break;
            r = t.size()
        }
    }
    e.default = function(t, e) {
        if (0 === t.length || e.colorCount < 2 || 256 < e.colorCount) throw new Error("Wrong MMCQ parameters");
        var r = i.default.build(t),
            t = r.hist,
            t = (Object.keys(t).length, new u.default(function(t, e) {
                return t.count() - e.count()
            }));
        t.push(r), a(t, .75 * e.colorCount);
        r = new u.default(function(t, e) {
            return t.count() * t.volume() - e.count() * e.volume()
        });
        return r.contents = t.contents, a(r, e.colorCount - r.size()),
            function(t) {
                var e = [];
                for (; t.size();) {
                    var r = t.pop(),
                        n = r.avg();
                    n[0], n[1], n[2];
                    e.push(new o.Swatch(n, r.count()))
                }
                return e
            }(r)
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var j = r(9),
        r = (d.build = function(t, e) {
            for (var r, n, o, i, u, a, s, c = 1 << 3 * j.SIGBITS, f = new Uint32Array(c), l = r = o = 0, h = n = i = Number.MAX_VALUE, p = t.length / 4, v = 0; v < p;) {
                var b = 4 * v;
                v++, u = t[0 + b], a = t[1 + b], s = t[2 + b], 0 !== t[3 + b] && (u >>= j.RSHIFT, a >>= j.RSHIFT, s >>= j.RSHIFT, f[j.getColorIndex(u, a, s)] += 1, l < u && (l = u), u < h && (h = u), r < a && (r = a), a < n && (n = a), o < s && (o = s), s < i && (i = s))
            }
            return new d(h, l, n, r, i, o, f)
        }, d.prototype.invalidate = function() {
            this._volume = this._count = -1, this._avg = null
        }, d.prototype.volume = function() {
            var t, e, r, n, o, i;
            return this._volume < 0 && (t = (i = this.dimension).r1, e = i.r2, r = i.g1, n = i.g2, o = i.b1, i = i.b2, this._volume = (e - t + 1) * (n - r + 1) * (i - o + 1)), this._volume
        }, d.prototype.count = function() {
            if (this._count < 0) {
                for (var t = this.hist, e = this.dimension, r = e.r1, n = e.r2, o = e.g1, i = e.g2, u = e.b1, a = e.b2, s = 0, c = r; c <= n; c++)
                    for (var f = o; f <= i; f++)
                        for (var l = u; l <= a; l++) {
                            s += t[j.getColorIndex(c, f, l)]
                        }
                this._count = s
            }
            return this._count
        }, d.prototype.clone = function() {
            var t = this.hist,
                e = this.dimension;
            return new d(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, t)
        }, d.prototype.avg = function() {
            if (!this._avg) {
                for (var t = this.hist, e = this.dimension, r = e.r1, n = e.r2, o = e.g1, i = e.g2, u = e.b1, a = e.b2, s = 0, c = 1 << 8 - j.SIGBITS, f = void 0, l = void 0, h = void 0, f = l = h = 0, p = r; p <= n; p++)
                    for (var v = o; v <= i; v++)
                        for (var b = u; b <= a; b++) {
                            var d = t[j.getColorIndex(p, v, b)];
                            s += d, f += d * (p + .5) * c, l += d * (v + .5) * c, h += d * (b + .5) * c
                        }
                this._avg = s ? [~~(f / s), ~~(l / s), ~~(h / s)] : [~~(c * (r + n + 1) / 2), ~~(c * (o + i + 1) / 2), ~~(c * (u + a + 1) / 2)]
            }
            return this._avg
        }, d.prototype.contains = function(t) {
            var e = t[0],
                r = t[1],
                n = t[2],
                o = this.dimension,
                i = o.r1,
                u = o.r2,
                a = o.g1,
                s = o.g2,
                t = o.b1,
                o = o.b2;
            return e >>= j.RSHIFT, r >>= j.RSHIFT, n >>= j.RSHIFT, i <= e && e <= u && a <= r && r <= s && t <= n && n <= o
        }, d.prototype.split = function() {
            var t = this.hist,
                e = this.dimension,
                r = e.r1,
                n = e.r2,
                o = e.g1,
                i = e.g2,
                u = e.b1,
                a = e.b2,
                s = this.count();
            if (!s) return [];
            if (1 === s) return [this.clone()];
            var c, f = n - r + 1,
                l = i - o + 1,
                e = a - u + 1,
                s = Math.max(f, l, e),
                h = null,
                p = c = 0,
                e = null;
            if (s === f) {
                e = "r", h = new Uint32Array(n + 1);
                for (var v = r; v <= n; v++) {
                    p = 0;
                    for (var b = o; b <= i; b++)
                        for (var d = u; d <= a; d++) {
                            p += t[j.getColorIndex(v, b, d)]
                        }
                    c += p, h[v] = c
                }
            } else if (s === l) {
                e = "g", h = new Uint32Array(i + 1);
                for (b = o; b <= i; b++) {
                    p = 0;
                    for (v = r; v <= n; v++)
                        for (d = u; d <= a; d++) {
                            p += t[j.getColorIndex(v, b, d)]
                        }
                    c += p, h[b] = c
                }
            } else {
                e = "b", h = new Uint32Array(a + 1);
                for (d = u; d <= a; d++) {
                    p = 0;
                    for (v = r; v <= n; v++)
                        for (b = o; b <= i; b++) {
                            p += t[j.getColorIndex(v, b, d)]
                        }
                    c += p, h[d] = c
                }
            }
            for (var g = -1, y = new Uint32Array(h.length), m = 0; m < h.length; m++) {
                var _ = h[m];
                g < 0 && c / 2 < _ && (g = m), y[m] = c - _
            }
            var x = this;
            return function(t) {
                for (var e = t + "1", r = t + "2", n = x.dimension[e], o = x.dimension[r], i = x.clone(), u = x.clone(), a = g - n, o = a <= (t = o - g) ? (o = Math.min(o - 1, ~~(g + t / 2)), Math.max(0, o)) : (o = Math.max(n, ~~(g - 1 - a / 2)), Math.min(x.dimension[r], o)); !h[o];) o++;
                for (var s = y[o]; !s && h[o - 1];) s = y[--o];
                return i.dimension[r] = o, u.dimension[e] = o + 1, [i, u]
            }(e)
        }, d);

    function d(t, e, r, n, o, i, u) {
        this._volume = -1, this._count = -1, this.dimension = {
            r1: t,
            r2: e,
            g1: r,
            g2: n,
            b1: o,
            b2: i
        }, this.hist = u
    }
    e.default = r
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = (o.prototype._sort = function() {
        this._sorted || (this.contents.sort(this._comparator), this._sorted = !0)
    }, o.prototype.push = function(t) {
        this.contents.push(t), this._sorted = !1
    }, o.prototype.peek = function(t) {
        return this._sort(), t = "number" == typeof t ? t : this.contents.length - 1, this.contents[t]
    }, o.prototype.pop = function() {
        return this._sort(), this.contents.pop()
    }, o.prototype.size = function() {
        return this.contents.length
    }, o.prototype.map = function(t) {
        return this._sort(), this.contents.map(t)
    }, o);

    function o(t) {
        this._comparator = t, this.contents = [], this._sorted = !1
    }
    e.default = n
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(168);
    Object.defineProperty(e, "Default", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    })
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var p = r(20),
        v = r(9),
        b = r(62),
        d = {
            targetDarkLuma: .26,
            maxDarkLuma: .45,
            minLightLuma: .55,
            targetLightLuma: .74,
            minNormalLuma: .3,
            targetNormalLuma: .5,
            maxNormalLuma: .7,
            targetMutesSaturation: .3,
            maxMutesSaturation: .4,
            targetVibrantSaturation: 1,
            minVibrantSaturation: .35,
            weightSaturation: 3,
            weightLuma: 6.5,
            weightPopulation: .5
        };

    function g(t, e, r, n, o, i, u) {
        function a(t, e) {
            return 1 - Math.abs(t - e)
        }
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var r = 0, n = 0, o = 0; o < t.length; o += 2) {
                var i = t[o],
                    u = t[o + 1];
                r += i * u, n += u
            }
            return r / n
        }(a(t, e), u.weightSaturation, a(r, n), u.weightLuma, o / i, u.weightPopulation)
    }

    function y(i, t, u, a, s, c, f, l, h, p) {
        var v = null,
            b = 0;
        return t.forEach(function(t) {
            var e, r = t.getHsl(),
                n = r[1],
                o = r[2];
            l <= n && n <= h && s <= o && o <= c && (e = t, (r = i).Vibrant !== e && r.DarkVibrant !== e && r.LightVibrant !== e && r.Muted !== e && r.DarkMuted !== e && r.LightMuted !== e) && (o = g(n, f, o, a, t.getPopulation(), u, p), (null === v || b < o) && (v = t, b = o))
        }), v
    }
    e.default = function(t, e) {
        e = b({}, e, d);
        var r, n, o, i, u, a, s, c, f, l, h = (r = 0, t.forEach(function(t) {
                r = Math.max(r, t.getPopulation())
            }), r),
            h = ((o = {}).Vibrant = y(o, n = t, t = h, (h = e).targetNormalLuma, h.minNormalLuma, h.maxNormalLuma, h.targetVibrantSaturation, h.minVibrantSaturation, 1, h), o.LightVibrant = y(o, n, t, h.targetLightLuma, h.minLightLuma, 1, h.targetVibrantSaturation, h.minVibrantSaturation, 1, h), o.DarkVibrant = y(o, n, t, h.targetDarkLuma, 0, h.maxDarkLuma, h.targetVibrantSaturation, h.minVibrantSaturation, 1, h), o.Muted = y(o, n, t, h.targetNormalLuma, h.minNormalLuma, h.maxNormalLuma, h.targetMutesSaturation, 0, h.maxMutesSaturation, h), o.LightMuted = y(o, n, t, h.targetLightLuma, h.minLightLuma, 1, h.targetMutesSaturation, 0, h.maxMutesSaturation, h), o.DarkMuted = y(o, n, t, h.targetDarkLuma, 0, h.maxDarkLuma, h.targetMutesSaturation, 0, h.maxMutesSaturation, h), o);
        return o = e, null === (e = h).Vibrant && null === e.DarkVibrant && null === e.LightVibrant && (null === e.DarkVibrant && null !== e.DarkMuted && (c = (l = e.DarkMuted.getHsl())[0], f = l[1], l = l[2], l = o.targetDarkLuma, e.DarkVibrant = new p.Swatch(v.hslToRgb(c, f, l), 0)), null === e.LightVibrant && null !== e.LightMuted && (c = (i = e.LightMuted.getHsl())[0], f = i[1], l = i[2], l = o.targetDarkLuma, e.DarkVibrant = new p.Swatch(v.hslToRgb(c, f, l), 0))), null === e.Vibrant && null !== e.DarkVibrant ? (c = (i = e.DarkVibrant.getHsl())[0], f = i[1], l = i[2], l = o.targetNormalLuma, e.Vibrant = new p.Swatch(v.hslToRgb(c, f, l), 0)) : null === e.Vibrant && null !== e.LightVibrant && (c = (u = e.LightVibrant.getHsl())[0], f = u[1], l = u[2], l = o.targetNormalLuma, e.Vibrant = new p.Swatch(v.hslToRgb(c, f, l), 0)), null === e.DarkVibrant && null !== e.Vibrant && (c = (u = e.Vibrant.getHsl())[0], f = u[1], l = u[2], l = o.targetDarkLuma, e.DarkVibrant = new p.Swatch(v.hslToRgb(c, f, l), 0)), null === e.LightVibrant && null !== e.Vibrant && (c = (a = e.Vibrant.getHsl())[0], f = a[1], l = a[2], l = o.targetLightLuma, e.LightVibrant = new p.Swatch(v.hslToRgb(c, f, l), 0)), null === e.Muted && null !== e.Vibrant && (c = (a = e.Vibrant.getHsl())[0], f = a[1], l = a[2], l = o.targetMutesSaturation, e.Muted = new p.Swatch(v.hslToRgb(c, f, l), 0)), null === e.DarkMuted && null !== e.DarkVibrant && (c = (s = e.DarkVibrant.getHsl())[0], f = s[1], l = s[2], l = o.targetMutesSaturation, e.DarkMuted = new p.Swatch(v.hslToRgb(c, f, l), 0)), null === e.LightMuted && null !== e.LightVibrant && (c = (s = e.LightVibrant.getHsl())[0], f = s[1], l = s[2], l = o.targetMutesSaturation, e.LightMuted = new p.Swatch(v.hslToRgb(c, f, l), 0)), h
    }
}, function(t, e, r) {
    var n = r(34),
        o = r(66),
        i = r(67);
    t.exports = function(t, e) {
        return i(o(t, e, n), t + "")
    }
}, function(t, e) {
    t.exports = function(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    }
}, function(t, e, r) {
    var n = r(172),
        o = r(60),
        r = r(34),
        r = o ? function(t, e) {
            return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0
            })
        } : r;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var i = Date.now;
    t.exports = function(r) {
        var n = 0,
            o = 0;
        return function() {
            var t = i(),
                e = 16 - (t - o);
            if (o = t, 0 < e) {
                if (800 <= ++n) return arguments[0]
            } else n = 0;
            return r.apply(void 0, arguments)
        }
    }
}, function(t, e, r) {
    var o = r(8),
        i = r(10),
        u = r(23),
        a = r(3);
    t.exports = function(t, e, r) {
        if (!a(r)) return !1;
        var n = typeof e;
        return !!("number" == n ? i(r) && u(e, r.length) : "string" == n && e in r) && o(r[e], t)
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.combineFilters = void 0;
    var n = r(176);
    Object.defineProperty(e, "Default", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), e.combineFilters = function(i) {
        return Array.isArray(i) && 0 !== i.length ? function(t, e, r, n) {
            if (0 === n) return !1;
            for (var o = 0; o < i.length; o++)
                if (!i[o](t, e, r, n)) return !1;
            return !0
        } : null
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e, r, n) {
        return 125 <= n && !(250 < t && 250 < e && 250 < r)
    }
}, function(t, e, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        i = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
            void 0 === n && (n = r), Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        } : function(t, e, r, n) {
            void 0 === n && (n = r), t[n] = e[r]
        }),
        u = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        } : function(t, e) {
            t.default = e
        }),
        a = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && i(e, t, r);
            return u(e, t), e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = r(178),
        c = a(r(179));
    var f, o = (f = s.ImageBase, o(l, f), l.prototype._initCanvas = function() {
        var t = this.image,
            e = this._canvas = document.createElement("canvas"),
            r = this._context = e.getContext("2d");
        e.className = "vibrant-canvas", e.style.display = "none", this._width = e.width = t.width, this._height = e.height = t.height, r.drawImage(t, 0, 0), document.body.appendChild(e)
    }, l.prototype.load = function(t) {
        var e, r, n = this,
            o = null,
            i = null;
        if ("string" == typeof t) o = document.createElement("img"), r = t, null === (r = c.parse(r)).protocol && null === r.host && null === r.port || (e = window.location.href, r = t, e = c.parse(e), r = c.parse(r), e.protocol === r.protocol && e.hostname === r.hostname && e.port === r.port) || (o.crossOrigin = "anonymous"), i = o.src = t;
        else {
            if (!(t instanceof HTMLImageElement)) return Promise.reject(new Error("Cannot load buffer as an image in browser"));
            i = (o = t).src
        }
        return this.image = o, new Promise(function(t, e) {
            function r() {
                n._initCanvas(), t(n)
            }
            o.complete ? r() : (o.onload = r, o.onerror = function(t) {
                return e(new Error("Fail to load image: " + i))
            })
        })
    }, l.prototype.clear = function() {
        this._context.clearRect(0, 0, this._width, this._height)
    }, l.prototype.update = function(t) {
        this._context.putImageData(t, 0, 0)
    }, l.prototype.getWidth = function() {
        return this._width
    }, l.prototype.getHeight = function() {
        return this._height
    }, l.prototype.resize = function(t, e, r) {
        var n = this._canvas,
            o = this._context,
            i = this.image;
        this._width = n.width = t, this._height = n.height = e, o.scale(r, r), o.drawImage(i, 0, 0)
    }, l.prototype.getPixelCount = function() {
        return this._width * this._height
    }, l.prototype.getImageData = function() {
        return this._context.getImageData(0, 0, this._width, this._height)
    }, l.prototype.remove = function() {
        this._canvas && this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas)
    }, l);

    function l() {
        return null !== f && f.apply(this, arguments) || this
    }
    e.default = o
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ImageBase = void 0;
    var n = (o.prototype.scaleDown = function(t) {
        var e, r = this.getWidth(),
            n = this.getHeight(),
            o = 1;
        0 < t.maxDimension ? (e = Math.max(r, n)) > t.maxDimension && (o = t.maxDimension / e) : o = 1 / t.quality, o < 1 && this.resize(r * o, n * o, o)
    }, o.prototype.applyFilter = function(t) {
        var e = this.getImageData();
        if ("function" == typeof t)
            for (var r, n = e.data, o = n.length / 4, i = 0; i < o; i++) t(n[0 + (r = 4 * i)], n[1 + r], n[2 + r], n[3 + r]) || (n[3 + r] = 0);
        return Promise.resolve(e)
    }, o);

    function o() {}
    e.ImageBase = n
}, function(t, e, r) {
    "use strict";
    var A = r(180),
        M = r(181);

    function x() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    e.parse = o, e.resolve = function(t, e) {
        return o(t, !1, !0).resolve(e)
    }, e.resolveObject = function(t, e) {
        return t ? o(t, !1, !0).resolveObject(e) : e
    }, e.format = function(t) {
        M.isString(t) && (t = o(t));
        return t instanceof x ? t.format() : x.prototype.format.call(t)
    }, e.Url = x;
    var I = /^([a-z0-9.+-]+:)/i,
        n = /:[0-9]*$/,
        T = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        e = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        P = ["'"].concat(e),
        C = ["%", "/", "?", ";", "#"].concat(P),
        D = ["/", "?", "#"],
        L = /^[+a-z0-9A-Z_-]{0,63}$/,
        F = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        E = {
            javascript: !0,
            "javascript:": !0
        },
        k = {
            javascript: !0,
            "javascript:": !0
        },
        V = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        z = r(182);

    function o(t, e, r) {
        if (t && M.isObject(t) && t instanceof x) return t;
        var n = new x;
        return n.parse(t, e, r), n
    }
    x.prototype.parse = function(t, e, r) {
        if (!M.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var n = t.indexOf("?"),
            o = -1 !== n && n < t.indexOf("#") ? "?" : "#",
            n = t.split(o);
        n[0] = n[0].replace(/\\/g, "/");
        var i = (i = t = n.join(o)).trim();
        if (!r && 1 === t.split("#").length) {
            var u = T.exec(i);
            if (u) return this.path = i, this.href = i, this.pathname = u[1], u[2] ? (this.search = u[2], this.query = e ? z.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var a, u = I.exec(i);
        if (u && (S = (u = u[0]).toLowerCase(), this.protocol = S, i = i.substr(u.length)), (r || u || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(a = "//" === i.substr(0, 2)) || u && k[u] || (i = i.substr(2), this.slashes = !0)), !k[u] && (a || u && !V[u])) {
            for (var s = -1, c = 0; c < D.length; c++) {
                -1 !== (f = i.indexOf(D[c])) && (-1 === s || f < s) && (s = f)
            } - 1 !== (x = -1 === s ? i.lastIndexOf("@") : i.lastIndexOf("@", s)) && (j = i.slice(0, x), i = i.slice(x + 1), this.auth = decodeURIComponent(j)), s = -1;
            for (var f, c = 0; c < C.length; c++) {
                -1 !== (f = i.indexOf(C[c])) && (-1 === s || f < s) && (s = f)
            } - 1 === s && (s = i.length), this.host = i.slice(0, s), i = i.slice(s), this.parseHost(), this.hostname = this.hostname || "";
            var l = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!l)
                for (var h = this.hostname.split(/\./), c = 0, p = h.length; c < p; c++) {
                    var v = h[c];
                    if (v && !v.match(L)) {
                        for (var b = "", d = 0, g = v.length; d < g; d++) 127 < v.charCodeAt(d) ? b += "x" : b += v[d];
                        if (!b.match(L)) {
                            var y = h.slice(0, c),
                                m = h.slice(c + 1),
                                _ = v.match(F);
                            _ && (y.push(_[1]), m.unshift(_[2])), m.length && (i = "/" + m.join(".") + i), this.hostname = y.join(".");
                            break
                        }
                    }
                }
            255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), l || (this.hostname = A.toASCII(this.hostname));
            var x = this.port ? ":" + this.port : "",
                j = this.hostname || "";
            this.host = j + x, this.href += this.host, l && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
        }
        if (!E[S])
            for (c = 0, p = P.length; c < p; c++) {
                var w, O = P[c]; - 1 !== i.indexOf(O) && ((w = encodeURIComponent(O)) === O && (w = escape(O)), i = i.split(O).join(w))
            }
        l = i.indexOf("#"); - 1 !== l && (this.hash = i.substr(l), i = i.slice(0, l));
        var S, l = i.indexOf("?");
        return -1 !== l ? (this.search = i.substr(l), this.query = i.substr(l + 1), e && (this.query = z.parse(this.query)), i = i.slice(0, l)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), V[S] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (x = this.pathname || "", S = this.search || "", this.path = x + S), this.href = this.format(), this
    }, x.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            o = !1,
            i = "";
        this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && M.isObject(this.query) && Object.keys(this.query).length && (i = z.stringify(this.query));
        i = this.search || i && "?" + i || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || V[e]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o = o || "", n && "#" !== n.charAt(0) && (n = "#" + n), i && "?" !== i.charAt(0) && (i = "?" + i), e + o + (r = r.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        })) + (i = i.replace("#", "%23")) + n
    }, x.prototype.resolve = function(t) {
        return this.resolveObject(o(t, !1, !0)).format()
    }, x.prototype.resolveObject = function(t) {
        M.isString(t) && ((p = new x).parse(t, !1, !0), t = p);
        for (var e = new x, r = Object.keys(this), n = 0; n < r.length; n++) {
            var o = r[n];
            e[o] = this[o]
        }
        if (e.hash = t.hash, "" === t.href) return e.href = e.format(), e;
        if (t.slashes && !t.protocol) {
            for (var i = Object.keys(t), u = 0; u < i.length; u++) {
                var a = i[u];
                "protocol" !== a && (e[a] = t[a])
            }
            return V[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/"), e.href = e.format(), e
        }
        if (t.protocol && t.protocol !== e.protocol) {
            if (!V[t.protocol]) {
                for (var s = Object.keys(t), c = 0; c < s.length; c++) {
                    var f = s[c];
                    e[f] = t[f]
                }
                return e.href = e.format(), e
            }
            if (e.protocol = t.protocol, t.host || k[t.protocol]) e.pathname = t.pathname;
            else {
                for (var l = (t.pathname || "").split("/"); l.length && !(t.host = l.shift()););
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== l[0] && l.unshift(""), l.length < 2 && l.unshift(""), e.pathname = l.join("/")
            }
            return e.search = t.search, e.query = t.query, e.host = t.host || "", e.auth = t.auth, e.hostname = t.hostname || t.host, e.port = t.port, (e.pathname || e.search) && (v = e.pathname || "", b = e.search || "", e.path = v + b), e.slashes = e.slashes || t.slashes, e.href = e.format(), e
        }
        var h = e.pathname && "/" === e.pathname.charAt(0),
            p = t.host || t.pathname && "/" === t.pathname.charAt(0),
            v = p || h || e.host && t.pathname,
            b = v,
            d = e.pathname && e.pathname.split("/") || [],
            l = t.pathname && t.pathname.split("/") || [],
            h = e.protocol && !V[e.protocol];
        if (h && (e.hostname = "", e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === l[0] ? l[0] = t.host : l.unshift(t.host)), t.host = null), v = v && ("" === l[0] || "" === d[0])), p) e.host = (t.host || "" === t.host ? t : e).host, e.hostname = (t.hostname || "" === t.hostname ? t : e).hostname, e.search = t.search, e.query = t.query, d = l;
        else if (l.length)(d = d || []).pop(), d = d.concat(l), e.search = t.search, e.query = t.query;
        else if (!M.isNullOrUndefined(t.search)) {
            return h && (e.hostname = e.host = d.shift(), (_ = !!(e.host && 0 < e.host.indexOf("@")) && e.host.split("@")) && (e.auth = _.shift(), e.host = e.hostname = _.shift())), e.search = t.search, e.query = t.query, M.isNull(e.pathname) && M.isNull(e.search) || (e.path = (e.pathname || "") + (e.search || "")), e.href = e.format(), e
        }
        if (!d.length) return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e;
        for (var g = d.slice(-1)[0], p = (e.host || t.host || 1 < d.length) && ("." === g || ".." === g) || "" === g, y = 0, m = d.length; 0 <= m; m--) "." === (g = d[m]) ? d.splice(m, 1) : ".." === g ? (d.splice(m, 1), y++) : y && (d.splice(m, 1), y--);
        if (!v && !b)
            for (; y--;) d.unshift("..");
        !v || "" === d[0] || d[0] && "/" === d[0].charAt(0) || d.unshift(""), p && "/" !== d.join("/").substr(-1) && d.push("");
        var _, p = "" === d[0] || d[0] && "/" === d[0].charAt(0);
        return h && (e.hostname = e.host = !p && d.length ? d.shift() : "", (_ = !!(e.host && 0 < e.host.indexOf("@")) && e.host.split("@")) && (e.auth = _.shift(), e.host = e.hostname = _.shift())), (v = v || e.host && d.length) && !p && d.unshift(""), d.length ? e.pathname = d.join("/") : (e.pathname = null, e.path = null), M.isNull(e.pathname) && M.isNull(e.search) || (e.path = (e.pathname || "") + (e.search || "")), e.auth = t.auth || e.auth, e.slashes = e.slashes || t.slashes, e.href = e.format(), e
    }, x.prototype.parseHost = function() {
        var t = this.host,
            e = n.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    }
}, function(t, P, C) {
    (function(p, b) {
        var d; /*! https://mths.be/punycode v1.3.2 by @mathias */
        ! function() {
            P && P.nodeType, p && p.nodeType;
            var t = "object" == typeof b && b;
            t.global !== t && t.window !== t && t.self;
            var e, g = 2147483647,
                y = 36,
                m = 1,
                _ = 26,
                o = 38,
                i = 700,
                x = 72,
                j = 128,
                w = "-",
                r = /^xn--/,
                n = /[^\x20-\x7E]/,
                u = /[\x2E\u3002\uFF0E\uFF61]/g,
                a = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                s = y - m,
                O = Math.floor,
                S = String.fromCharCode;

            function A(t) {
                throw RangeError(a[t])
            }

            function c(t, e) {
                for (var r = t.length, n = []; r--;) n[r] = e(t[r]);
                return n
            }

            function f(t, e) {
                var r = t.split("@"),
                    n = "";
                return 1 < r.length && (n = r[0] + "@", t = r[1]), n + c((t = t.replace(u, ".")).split("."), e).join(".")
            }

            function M(t) {
                for (var e, r, n = [], o = 0, i = t.length; o < i;) 55296 <= (e = t.charCodeAt(o++)) && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);
                return n
            }

            function v(t) {
                return c(t, function(t) {
                    var e = "";
                    return 65535 < t && (e += S((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += S(t)
                }).join("")
            }

            function I(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function T(t, e, r) {
                var n = 0;
                for (t = r ? O(t / i) : t >> 1, t += O(t / e); s * _ >> 1 < t; n += y) t = O(t / s);
                return O(n + (s + 1) * t / (t + o))
            }

            function l(t) {
                var e, r, n, o, i, u, a, s = [],
                    c = t.length,
                    f = 0,
                    l = j,
                    h = x,
                    p = t.lastIndexOf(w);
                for (p < 0 && (p = 0), r = 0; r < p; ++r) 128 <= t.charCodeAt(r) && A("not-basic"), s.push(t.charCodeAt(r));
                for (n = 0 < p ? p + 1 : 0; n < c;) {
                    for (o = f, i = 1, u = y; c <= n && A("invalid-input"), a = t.charCodeAt(n++), (y <= (a = a - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : y) || a > O((g - f) / i)) && A("overflow"), f += a * i, !(a < (a = u <= h ? m : h + _ <= u ? _ : u - h)); u += y) i > O(g / (a = y - a)) && A("overflow"), i *= a;
                    h = T(f - o, e = s.length + 1, 0 == o), O(f / e) > g - l && A("overflow"), l += O(f / e), f %= e, s.splice(f++, 0, l)
                }
                return v(s)
            }

            function h(t) {
                for (var e, r, n, o, i, u, a, s, c, f, l, h = [], p = (t = M(t)).length, v = j, b = x, d = e = 0; d < p; ++d)(s = t[d]) < 128 && h.push(S(s));
                for (r = n = h.length, n && h.push(w); r < p;) {
                    for (o = g, d = 0; d < p; ++d) v <= (s = t[d]) && s < o && (o = s);
                    for (o - v > O((g - e) / (c = r + 1)) && A("overflow"), e += (o - v) * c, v = o, d = 0; d < p; ++d)
                        if ((s = t[d]) < v && ++e > g && A("overflow"), s == v) {
                            for (i = e, u = y; !(i < (a = u <= b ? m : b + _ <= u ? _ : u - b)); u += y) l = i - a, f = y - a, h.push(S(I(a + l % f, 0))), i = O(l / f);
                            h.push(S(I(i, 0))), b = T(e, c, r == n), e = 0, ++r
                        }++e, ++v
                }
                return h.join("")
            }
            e = {
                version: "1.3.2",
                ucs2: {
                    decode: M,
                    encode: v
                },
                decode: l,
                encode: h,
                toASCII: function(t) {
                    return f(t, function(t) {
                        return n.test(t) ? "xn--" + h(t) : t
                    })
                },
                toUnicode: function(t) {
                    return f(t, function(t) {
                        return r.test(t) ? l(t.slice(4).toLowerCase()) : t
                    })
                }
            }, void 0 === (d = function() {
                return e
            }.call(P, C, P, p)) || (p.exports = d)
        }()
    }).call(this, C(13)(t), C(44))
}, function(t, e, r) {
    "use strict";
    t.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isObject: function(t) {
            return "object" == typeof t && null !== t
        },
        isNull: function(t) {
            return null === t
        },
        isNullOrUndefined: function(t) {
            return null == t
        }
    }
}, function(t, e, r) {
    "use strict";
    e.decode = e.parse = r(183), e.encode = e.stringify = r(184)
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r, n) {
        e = e || "&", r = r || "=";
        var o = {};
        if ("string" != typeof t || 0 === t.length) return o;
        var i = /\+/g;
        t = t.split(e);
        e = 1e3;
        n && "number" == typeof n.maxKeys && (e = n.maxKeys);
        var u = t.length;
        0 < e && e < u && (u = e);
        for (var a = 0; a < u; ++a) {
            var s, c = t[a].replace(i, "%20"),
                f = c.indexOf(r),
                l = 0 <= f ? (s = c.substr(0, f), c.substr(f + 1)) : (s = c, ""),
                h = decodeURIComponent(s),
                f = decodeURIComponent(l);
            c = o, l = h, Object.prototype.hasOwnProperty.call(c, l) ? p(o[h]) ? o[h].push(f) : o[h] = [o[h], f] : o[h] = f
        }
        return o
    };
    var p = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function(t, e, r) {
    "use strict";

    function i(t) {
        switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    }
    t.exports = function(r, n, o, t) {
        return n = n || "&", o = o || "=", null === r && (r = void 0), "object" == typeof r ? a(s(r), function(t) {
            var e = encodeURIComponent(i(t)) + o;
            return u(r[t]) ? a(r[t], function(t) {
                return e + encodeURIComponent(i(t))
            }).join(n) : e + encodeURIComponent(i(r[t]))
        }).join(n) : t ? encodeURIComponent(i(t)) + o + encodeURIComponent(i(r)) : ""
    };
    var u = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function a(t, e) {
        if (t.map) return t.map(e);
        for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
        return r
    }
    var s = Object.keys || function(t) {
        var e, r = [];
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
        return r
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    r = r(68);
    ("object" == typeof window && window instanceof Window ? window : t.exports).Vibrant = r
}]);