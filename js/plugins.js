/*

Template:  Sheltek Real Estate HTML5 Template
Author: http://devitems.com/
Version: 1
Design and Developed by: http://devitems.com/

NOTE:  

*/


/*================================================
[  Table of contents  ]
================================================
    1. Avoid `console` errors in browsers that lack a console.
    2. scrollup jquery 
    3. jQuery UI / price range 
    4. WOW / scrolling animation
    5. meanMenu jquery menu plugin / mobile menu
    6. Bootstrap-select
    7. Slick slider jquery
    8. jquery.counterup.min js
    9. jQuery.Waypoints.min js
    10. Lightbox js
    11. animate Textillate
    12. Style Customizer js
    13. jquery.mb.YTPlayer
    14. Maplace.js
    15. Vimeo Player
 
======================================
[ End table content ]
======================================*/




/*-------------------------------------------------------------
  1. Avoid `console` errors in browsers that lack a console.
---------------------------------------------------------------*/


(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*-------------------------------------------------------------
    2. scrollup jquery 
---------------------------------------------------------------*/

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
! function(l, o, e) {
    "use strict";
    l.fn.scrollUp = function(o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function(r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) {
            o.preventDefault(), l("html, body").animate({
                scrollTop: a
            }, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function(r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);




/*-------------------------------------------------------------
   3. jQuery UI / price range 
---------------------------------------------------------------*/

/*! jQuery UI - v1.11.4 - 2017-06-07
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
            return e.isFunction(s) ? (h[t] = function() {
                var e = function() {
                        return i.prototype[t].apply(this, arguments)
                    },
                    n = function(e) {
                        return i.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || t : t
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
            for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var o = "string" == typeof a,
                r = n.call(arguments, 1),
                h = this;
            return o ? this.each(function() {
                var i, n = e.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
            })), h
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var a = !1;
    e(document).mouseup(function() {
        a = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!a) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    s = 1 === t.which,
                    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, s, n, a, o, r, h, l, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - u.values(t));
                (n > i || n === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (n = i, a = e(this), o = t)
            }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - h.left - a.width() / 2,
                top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, s, n, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var t, i, s, n, a, o = this.options.range,
                r = this.options,
                h = this,
                l = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), t = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                }
                switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - a)
                }
                this._slide(t, o, n)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
});

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
! function(a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;
        b._touchStart = function(a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function(a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function(a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function() {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function() {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);


/*-------------------------------------------------------------
  4. WOW / scrolling animation
---------------------------------------------------------------*/

/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);



/*-------------------------------------------------------------
  5. meanMenu jquery menu plugin / mobile menu
---------------------------------------------------------------*/


/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
(function($) {
    "use strict";
    $.fn.meanmenu = function(options) {
        var defaults = {
            meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
            meanMenuContainer: '.mobile-menu-area .container', // Choose where meanmenu will be placed within the HTML
            meanMenuClose: "X", // single character you want to represent the close menu button
            meanMenuCloseSize: "18px", // set font size of close button
            meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
            meanRevealPosition: "right", // left right or center positions
            meanRevealPositionDistance: "0", // Tweak the position of the menu
            meanRevealColour: "", // override CSS colours for the reveal background
            meanScreenWidth: "767", // set the screen width you want meanmenu to kick in at
            meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
            meanShowChildren: true, // true to show children in the menu, false to hide them
            meanExpandableChildren: true, // true to allow expand/collapse children
            meanExpand: "+", // single character you want to represent the expand for ULs
            meanContract: "-", // single character you want to represent the contract for ULs
            meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
            onePage: false, // set to true for one page sites
            meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
            removeElements: "" // set to hide page elements
        };
        options = $.extend(defaults, options);

        // get browser width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth;

        return this.each(function() {
            var meanMenu = options.meanMenuTarget;
            var meanContainer = options.meanMenuContainer;
            var meanMenuClose = options.meanMenuClose;
            var meanMenuCloseSize = options.meanMenuCloseSize;
            var meanMenuOpen = options.meanMenuOpen;
            var meanRevealPosition = options.meanRevealPosition;
            var meanRevealPositionDistance = options.meanRevealPositionDistance;
            var meanRevealColour = options.meanRevealColour;
            var meanScreenWidth = options.meanScreenWidth;
            var meanNavPush = options.meanNavPush;
            var meanRevealClass = ".meanmenu-reveal";
            var meanShowChildren = options.meanShowChildren;
            var meanExpandableChildren = options.meanExpandableChildren;
            var meanExpand = options.meanExpand;
            var meanContract = options.meanContract;
            var meanRemoveAttrs = options.meanRemoveAttrs;
            var onePage = options.onePage;
            var meanDisplay = options.meanDisplay;
            var removeElements = options.removeElements;

            //detect known mobile/tablet usage
            var isMobile = false;
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
                isMobile = true;
            }

            if ((navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i))) {
                // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
                jQuery('html').css("overflow-y", "scroll");
            }

            var meanRevealPos = "";
            var meanCentered = function() {
                if (meanRevealPosition === "center") {
                    var newWidth = window.innerWidth || document.documentElement.clientWidth;
                    var meanCenter = ((newWidth / 2) - 22) + "px";
                    meanRevealPos = "left:" + meanCenter + ";right:auto;";

                    if (!isMobile) {
                        jQuery('.meanmenu-reveal').css("left", meanCenter);
                    } else {
                        jQuery('.meanmenu-reveal').animate({
                            left: meanCenter
                        });
                    }
                }
            };

            var menuOn = false;
            var meanMenuExist = false;


            if (meanRevealPosition === "right") {
                meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
            }
            if (meanRevealPosition === "left") {
                meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
            }
            // run center function
            meanCentered();

            // set all styles for mean-reveal
            var $navreveal = "";

            var meanInner = function() {
                // get last class name
                if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
                    $navreveal.html(meanMenuClose);
                } else {
                    $navreveal.html(meanMenuOpen);
                }
            };

            // re-instate original nav (and call this on window.width functions)
            var meanOriginal = function() {
                jQuery('.mean-bar,.mean-push').remove();
                jQuery(meanContainer).removeClass("mean-container");
                jQuery(meanMenu).css('display', meanDisplay);
                menuOn = false;
                meanMenuExist = false;
                jQuery(removeElements).removeClass('mean-remove');
            };

            // navigation reveal
            var showMeanMenu = function() {
                var meanStyles = "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos;
                if (currentWidth <= meanScreenWidth) {
                    jQuery(removeElements).addClass('mean-remove');
                    meanMenuExist = true;
                    // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
                    jQuery(meanContainer).addClass("mean-container");
                    jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>');

                    //push meanMenu navigation into .mean-nav
                    var meanMenuContents = jQuery(meanMenu).html();
                    jQuery('.mean-nav').html(meanMenuContents);

                    // remove all classes from EVERYTHING inside meanmenu nav
                    if (meanRemoveAttrs) {
                        jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
                            // First check if this has mean-remove class
                            if (jQuery(this).is('.mean-remove')) {
                                jQuery(this).attr('class', 'mean-remove');
                            } else {
                                jQuery(this).removeAttr("class");
                            }
                            jQuery(this).removeAttr("id");
                        });
                    }

                    // push in a holder div (this can be used if removal of nav is causing layout issues)
                    jQuery(meanMenu).before('<div class="mean-push" />');
                    jQuery('.mean-push').css("margin-top", meanNavPush);

                    // hide current navigation and reveal mean nav link
                    jQuery(meanMenu).hide();
                    jQuery(".meanmenu-reveal").show();

                    // turn 'X' on or off
                    jQuery(meanRevealClass).html(meanMenuOpen);
                    $navreveal = jQuery(meanRevealClass);

                    //hide mean-nav ul
                    jQuery('.mean-nav ul').hide();

                    // hide sub nav
                    if (meanShowChildren) {
                        // allow expandable sub nav(s)
                        if (meanExpandableChildren) {
                            jQuery('.mean-nav ul ul').each(function() {
                                if (jQuery(this).children().length) {
                                    jQuery(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
                                }
                            });
                            jQuery('.mean-expand').on("click", function(e) {
                                e.preventDefault();
                                if (jQuery(this).hasClass("mean-clicked")) {
                                    jQuery(this).text(meanExpand);
                                    jQuery(this).prev('ul').slideUp(300, function() {});
                                } else {
                                    jQuery(this).text(meanContract);
                                    jQuery(this).prev('ul').slideDown(300, function() {});
                                }
                                jQuery(this).toggleClass("mean-clicked");
                            });
                        } else {
                            jQuery('.mean-nav ul ul').show();
                        }
                    } else {
                        jQuery('.mean-nav ul ul').hide();
                    }

                    // add last class to tidy up borders
                    jQuery('.mean-nav ul li').last().addClass('mean-last');
                    $navreveal.removeClass("meanclose");
                    jQuery($navreveal).click(function(e) {
                        e.preventDefault();
                        if (menuOn === false) {
                            $navreveal.css("text-align", "center");
                            $navreveal.css("text-indent", "0");
                            $navreveal.css("font-size", meanMenuCloseSize);
                            jQuery('.mean-nav ul:first').slideDown();
                            menuOn = true;
                        } else {
                            jQuery('.mean-nav ul:first').slideUp();
                            menuOn = false;
                        }
                        $navreveal.toggleClass("meanclose");
                        meanInner();
                        jQuery(removeElements).addClass('mean-remove');
                    });

                    // for one page websites, reset all variables...
                    if (onePage) {
                        jQuery('.mean-nav ul > li > a:first-child').on("click", function() {
                            jQuery('.mean-nav ul:first').slideUp();
                            menuOn = false;
                            jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
                        });
                    }
                } else {
                    meanOriginal();
                }
            };

            if (!isMobile) {
                // reset menu on resize above meanScreenWidth
                jQuery(window).resize(function() {
                    currentWidth = window.innerWidth || document.documentElement.clientWidth;
                    if (currentWidth > meanScreenWidth) {
                        meanOriginal();
                    } else {
                        meanOriginal();
                    }
                    if (currentWidth <= meanScreenWidth) {
                        showMeanMenu();
                        meanCentered();
                    } else {
                        meanOriginal();
                    }
                });
            }

            jQuery(window).resize(function() {
                // get browser width
                currentWidth = window.innerWidth || document.documentElement.clientWidth;

                if (!isMobile) {
                    meanOriginal();
                    if (currentWidth <= meanScreenWidth) {
                        showMeanMenu();
                        meanCentered();
                    }
                } else {
                    meanCentered();
                    if (currentWidth <= meanScreenWidth) {
                        if (meanMenuExist === false) {
                            showMeanMenu();
                        }
                    } else {
                        meanOriginal();
                    }
                }
            });

            // run main menuMenu function on load
            showMeanMenu();
        });
    };
})(jQuery);


/*-------------------------------------------------------------
  6. Bootstrap-select v1.11.2
---------------------------------------------------------------*/
/*!
 * Bootstrap-select v1.13.9 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

! function(e, t) {
    void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    ! function(z) {
        "use strict";
        var d = ["sanitize", "whiteList", "sanitizeFn"],
            l = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            e = {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function v(e, t) {
            var i = e.nodeName.toLowerCase();
            if (-1 !== z.inArray(i, t)) return -1 === z.inArray(i, l) || Boolean(e.nodeValue.match(r) || e.nodeValue.match(a));
            for (var s = z(t).filter(function(e, t) {
                    return t instanceof RegExp
                }), n = 0, o = s.length; n < o; n++)
                if (i.match(s[n])) return !0;
            return !1
        }

        function B(e, t, i) {
            if (i && "function" == typeof i) return i(e);
            for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
                for (var l = e[n].querySelectorAll("*"), r = 0, a = l.length; r < a; r++) {
                    var c = l[r],
                        d = c.nodeName.toLowerCase();
                    if (-1 !== s.indexOf(d))
                        for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
                            var m = h[u];
                            v(m, p) || c.removeAttribute(m.nodeName)
                        } else c.parentNode.removeChild(c)
                }
        }
        "classList" in document.createElement("_") || function(e) {
            if ("Element" in e) {
                var t = "classList",
                    i = "prototype",
                    s = e.Element[i],
                    n = Object,
                    o = function() {
                        var i = z(this);
                        return {
                            add: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e)
                            },
                            remove: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e)
                            },
                            toggle: function(e, t) {
                                return i.toggleClass(e, t)
                            },
                            contains: function(e) {
                                return i.hasClass(e)
                            }
                        }
                    };
                if (n.defineProperty) {
                    var l = {
                        get: o,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        n.defineProperty(s, t, l)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (l.enumerable = !1, n.defineProperty(s, t, l))
                    }
                } else n[i].__defineGetter__ && s.__defineGetter__(t, o)
            }
        }(window);
        var t, c, i, s = document.createElement("_");
        if (s.classList.add("c1", "c2"), !s.classList.contains("c2")) {
            var n = DOMTokenList.prototype.add,
                o = DOMTokenList.prototype.remove;
            DOMTokenList.prototype.add = function() {
                Array.prototype.forEach.call(arguments, n.bind(this))
            }, DOMTokenList.prototype.remove = function() {
                Array.prototype.forEach.call(arguments, o.bind(this))
            }
        }
        if (s.classList.toggle("c3", !1), s.classList.contains("c3")) {
            var h = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : h.call(this, e)
            }
        }

        function E(e) {
            var t, i = [],
                s = e.selectedOptions;
            if (e.multiple)
                for (var n = 0, o = s.length; n < o; n++) t = s[n], i.push(t.value || t.text);
            else i = e.value;
            return i
        }
        s = null, String.prototype.startsWith || (t = function() {
            try {
                var e = {},
                    t = Object.defineProperty,
                    i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(), c = {}.toString, i = function(e) {
            if (null == this) throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == c.call(e)) throw new TypeError;
            var i = t.length,
                s = String(e),
                n = s.length,
                o = 1 < arguments.length ? arguments[1] : void 0,
                l = o ? Number(o) : 0;
            l != l && (l = 0);
            var r = Math.min(Math.max(l, 0), i);
            if (i < n + r) return !1;
            for (var a = -1; ++a < n;)
                if (t.charCodeAt(r + a) != s.charCodeAt(a)) return !1;
            return !0
        }, t ? t(String.prototype, "startsWith", {
            value: i,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = i), Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
            get: function() {
                return this.querySelectorAll(":checked")
            }
        });
        var p = {
            useDefault: !1,
            _set: z.valHooks.select.set
        };
        z.valHooks.select.set = function(e, t) {
            return t && !p.useDefault && z(e).data("selected", !0), p._set.apply(this, arguments)
        };
        var C = null,
            u = function() {
                try {
                    return new Event("change"), !0
                } catch (e) {
                    return !1
                }
            }();

        function $(e, t, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, l = 0; l < n.length; l++) {
                var r = n[l],
                    a = e[r];
                if (a && (a = a.toString(), "display" === r && (a = a.replace(/<[^>]+>/g, "")), s && (a = w(a)), a = a.toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break
            }
            return o
        }

        function L(e) {
            return parseInt(e, 10) || 0
        }
        z.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (u ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e)
        };
        var f = {
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\xc3": "A",
                "\xc4": "A",
                "\xc5": "A",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\xe3": "a",
                "\xe4": "a",
                "\xe5": "a",
                "\xc7": "C",
                "\xe7": "c",
                "\xd0": "D",
                "\xf0": "d",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\xcb": "E",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\xeb": "e",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\xcf": "I",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\xef": "i",
                "\xd1": "N",
                "\xf1": "n",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\xd5": "O",
                "\xd6": "O",
                "\xd8": "O",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\xf5": "o",
                "\xf6": "o",
                "\xf8": "o",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\xdc": "U",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\xfc": "u",
                "\xdd": "Y",
                "\xfd": "y",
                "\xff": "y",
                "\xc6": "Ae",
                "\xe6": "ae",
                "\xde": "Th",
                "\xfe": "th",
                "\xdf": "ss",
                "\u0100": "A",
                "\u0102": "A",
                "\u0104": "A",
                "\u0101": "a",
                "\u0103": "a",
                "\u0105": "a",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\u010e": "D",
                "\u0110": "D",
                "\u010f": "d",
                "\u0111": "d",
                "\u0112": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\u0118": "E",
                "\u011a": "E",
                "\u0113": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\u0119": "e",
                "\u011b": "e",
                "\u011c": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u0122": "G",
                "\u011d": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u0123": "g",
                "\u0124": "H",
                "\u0126": "H",
                "\u0125": "h",
                "\u0127": "h",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u012e": "I",
                "\u0130": "I",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\u012f": "i",
                "\u0131": "i",
                "\u0134": "J",
                "\u0135": "j",
                "\u0136": "K",
                "\u0137": "k",
                "\u0138": "k",
                "\u0139": "L",
                "\u013b": "L",
                "\u013d": "L",
                "\u013f": "L",
                "\u0141": "L",
                "\u013a": "l",
                "\u013c": "l",
                "\u013e": "l",
                "\u0140": "l",
                "\u0142": "l",
                "\u0143": "N",
                "\u0145": "N",
                "\u0147": "N",
                "\u014a": "N",
                "\u0144": "n",
                "\u0146": "n",
                "\u0148": "n",
                "\u014b": "n",
                "\u014c": "O",
                "\u014e": "O",
                "\u0150": "O",
                "\u014d": "o",
                "\u014f": "o",
                "\u0151": "o",
                "\u0154": "R",
                "\u0156": "R",
                "\u0158": "R",
                "\u0155": "r",
                "\u0157": "r",
                "\u0159": "r",
                "\u015a": "S",
                "\u015c": "S",
                "\u015e": "S",
                "\u0160": "S",
                "\u015b": "s",
                "\u015d": "s",
                "\u015f": "s",
                "\u0161": "s",
                "\u0162": "T",
                "\u0164": "T",
                "\u0166": "T",
                "\u0163": "t",
                "\u0165": "t",
                "\u0167": "t",
                "\u0168": "U",
                "\u016a": "U",
                "\u016c": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u0172": "U",
                "\u0169": "u",
                "\u016b": "u",
                "\u016d": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u0173": "u",
                "\u0174": "W",
                "\u0175": "w",
                "\u0176": "Y",
                "\u0177": "y",
                "\u0178": "Y",
                "\u0179": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u017a": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u0132": "IJ",
                "\u0133": "ij",
                "\u0152": "Oe",
                "\u0153": "oe",
                "\u0149": "'n",
                "\u017f": "s"
            },
            m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            g = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

        function b(e) {
            return f[e]
        }

        function w(e) {
            return (e = e.toString()) && e.replace(m, b).replace(g, "")
        }
        var x, I, k, y, S, O = (x = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, I = function(e) {
                return x[e]
            }, k = "(?:" + Object.keys(x).join("|") + ")", y = RegExp(k), S = RegExp(k, "g"), function(e) {
                return e = null == e ? "" : "" + e, y.test(e) ? e.replace(S, I) : e
            }),
            T = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            },
            A = 27,
            N = 13,
            D = 32,
            H = 9,
            P = 38,
            W = 40,
            M = {
                success: !1,
                major: "3"
            };
        try {
            M.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), M.major = M.full[0], M.success = !0
        } catch (e) {}
        var R = 0,
            U = ".bs.select",
            j = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title",
                ICONBASE: "glyphicon",
                TICKICON: "glyphicon-ok"
            },
            V = {
                MENU: "." + j.MENU
            },
            F = {
                span: document.createElement("span"),
                i: document.createElement("i"),
                subtext: document.createElement("small"),
                a: document.createElement("a"),
                li: document.createElement("li"),
                whitespace: document.createTextNode("\xa0"),
                fragment: document.createDocumentFragment()
            };
        F.a.setAttribute("role", "option"), F.subtext.className = "text-muted", F.text = F.span.cloneNode(!1), F.text.className = "text", F.checkMark = F.span.cloneNode(!1);
        var _ = new RegExp(P + "|" + W),
            q = new RegExp("^" + H + "$|" + A),
            G = function(e, t, i) {
                var s = F.li.cloneNode(!1);
                return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s
            },
            K = function(e, t, i) {
                var s = F.a.cloneNode(!0);
                return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && (s.className = t), "4" === M.major && s.classList.add("dropdown-item"), i && s.setAttribute("style", i), s
            },
            Y = function(e, t) {
                var i, s, n = F.text.cloneNode(!1);
                if (e.content) n.innerHTML = e.content;
                else {
                    if (n.textContent = e.text, e.icon) {
                        var o = F.whitespace.cloneNode(!1);
                        (s = (!0 === t ? F.i : F.span).cloneNode(!1)).className = e.iconBase + " " + e.icon, F.fragment.appendChild(s), F.fragment.appendChild(o)
                    }
                    e.subtext && ((i = F.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(i))
                }
                if (!0 === t)
                    for (; 0 < n.childNodes.length;) F.fragment.appendChild(n.childNodes[0]);
                else F.fragment.appendChild(n);
                return F.fragment
            },
            Z = function(e) {
                var t, i, s = F.text.cloneNode(!1);
                if (s.innerHTML = e.label, e.icon) {
                    var n = F.whitespace.cloneNode(!1);
                    (i = F.span.cloneNode(!1)).className = e.iconBase + " " + e.icon, F.fragment.appendChild(i), F.fragment.appendChild(n)
                }
                return e.subtext && ((t = F.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(t)), F.fragment.appendChild(s), F.fragment
            },
            J = function(e, t) {
                var i = this;
                p.useDefault || (z.valHooks.select.set = p._set, p.useDefault = !0), this.$element = z(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = {
                    main: {},
                    current: {},
                    search: {},
                    view: {},
                    keydown: {
                        keyHistory: "",
                        resetKeyHistory: {
                            start: function() {
                                return setTimeout(function() {
                                    i.selectpicker.keydown.keyHistory = ""
                                }, 800)
                            }
                        }
                    }
                }, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var s = this.options.windowPadding;
                "number" == typeof s && (this.options.windowPadding = [s, s, s, s]), this.val = J.prototype.val, this.render = J.prototype.render, this.refresh = J.prototype.refresh, this.setStyle = J.prototype.setStyle, this.selectAll = J.prototype.selectAll, this.deselectAll = J.prototype.deselectAll, this.destroy = J.prototype.destroy, this.remove = J.prototype.remove, this.show = J.prototype.show, this.hide = J.prototype.hide, this.init()
            };

        function Q(e) {
            var r, a = arguments,
                c = e;
            if ([].shift.apply(a), !M.success) {
                try {
                    M.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (e) {
                    J.BootstrapVersion ? M.full = J.BootstrapVersion.split(" ")[0].split(".") : (M.full = [M.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e))
                }
                M.major = M.full[0], M.success = !0
            }
            if ("4" === M.major) {
                var t = [];
                J.DEFAULTS.style === j.BUTTONCLASS && t.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }), J.DEFAULTS.iconBase === j.ICONBASE && t.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }), J.DEFAULTS.tickIcon === j.TICKICON && t.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }), j.DIVIDER = "dropdown-divider", j.SHOW = "show", j.BUTTONCLASS = "btn-light", j.POPOVERHEADER = "popover-header", j.ICONBASE = "", j.TICKICON = "bs-ok-default";
                for (var i = 0; i < t.length; i++) {
                    e = t[i];
                    J.DEFAULTS[e.name] = j[e.className]
                }
            }
            var s = this.each(function() {
                var e = z(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker"),
                        i = "object" == typeof c && c;
                    if (t) {
                        if (i)
                            for (var s in i) i.hasOwnProperty(s) && (t.options[s] = i[s])
                    } else {
                        var n = e.data();
                        for (var o in n) n.hasOwnProperty(o) && -1 !== z.inArray(o, d) && delete n[o];
                        var l = z.extend({}, J.DEFAULTS, z.fn.selectpicker.defaults || {}, n, i);
                        l.template = z.extend({}, J.DEFAULTS.template, z.fn.selectpicker.defaults ? z.fn.selectpicker.defaults.template : {}, n.template, i.template), e.data("selectpicker", t = new J(this, l))
                    }
                    "string" == typeof c && (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c])
                }
            });
            return void 0 !== r ? r : s
        }
        J.VERSION = "1.13.9", J.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: j.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: j.ICONBASE,
            tickIcon: j.TICKICON,
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: e
        }, J.prototype = {
            constructor: J,
            init: function() {
                var i = this,
                    e = this.$element.attr("id");
                this.selectId = R++, this.$element[0].classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.options.showTick = this.$element[0].classList.contains("show-tick"), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(V.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element[0].classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(j.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + U, function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0],
                            t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild), e.scrollTop = 0
                    }
                }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !1), i.$element.trigger("hide" + U, e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden" + U, e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !0), i.$element.trigger("show" + U, e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown" + U, e)
                    }
                }), i.$element[0].hasAttribute("required") && this.$element.on("invalid" + U, function() {
                    i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + U + ".invalid", function() {
                        i.$element.val(i.$element.val()).off("shown" + U + ".invalid")
                    }).on("rendered" + U, function() {
                        this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + U)
                    }), i.$button.on("blur" + U, function() {
                        i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + U)
                    })
                }), setTimeout(function() {
                    i.createLi(), i.$element.trigger("loaded" + U)
                })
            },
            createDropdown: function() {
                var e = this.multiple || this.options.showTick ? " show-tick" : "",
                    t = "",
                    i = this.autofocus ? " autofocus" : "";
                M.major < 4 && this.$element.parent().hasClass("input-group") && (t = " input-group-btn");
                var s, n = "",
                    o = "",
                    l = "",
                    r = "";
                return this.options.header && (n = '<div class="' + j.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (o = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + O(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>'), this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + j.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + j.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (r = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + j.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), s = '<div class="dropdown bootstrap-select' + e + t + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + i + ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === M.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + j.MENU + " " + ("4" === M.major ? "" : j.SHOW) + '" role="combobox">' + n + o + l + '<div class="inner ' + j.SHOW + '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' + j.MENU + " inner " + ("4" === M.major ? j.SHOW : "") + '"></ul></div>' + r + "</div></div>", z(s)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e],
                        i = !0;
                    "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(T, e) {
                e = e || 0;
                var A = this;
                this.selectpicker.current = T ? this.selectpicker.search : this.selectpicker.main;
                var N, D, H = [];

                function i(e, t) {
                    var i, s, n, o, l, r, a, c, d, h, p = A.selectpicker.current.elements.length,
                        u = [],
                        f = !0,
                        m = A.isVirtual();
                    A.selectpicker.view.scrollTop = e, !0 === m && A.sizeInfo.hasScrollBar && A.$menu[0].offsetWidth > A.sizeInfo.totalMenuWidth && (A.sizeInfo.menuWidth = A.$menu[0].offsetWidth, A.sizeInfo.totalMenuWidth = A.sizeInfo.menuWidth + A.sizeInfo.scrollBarWidth, A.$menu.css("min-width", A.sizeInfo.menuWidth)), i = Math.ceil(A.sizeInfo.menuInnerHeight / A.sizeInfo.liHeight * 1.5), s = Math.round(p / i) || 1;
                    for (var v = 0; v < s; v++) {
                        var g = (v + 1) * i;
                        if (v === s - 1 && (g = p), u[v] = [v * i + (v ? 1 : 0), g], !p) break;
                        void 0 === l && e <= A.selectpicker.current.data[g - 1].position - A.sizeInfo.menuInnerHeight && (l = v)
                    }
                    if (void 0 === l && (l = 0), r = [A.selectpicker.view.position0, A.selectpicker.view.position1], n = Math.max(0, l - 1), o = Math.min(s - 1, l + 1), A.selectpicker.view.position0 = !1 === m ? 0 : Math.max(0, u[n][0]) || 0, A.selectpicker.view.position1 = !1 === m ? p : Math.min(p, u[o][1]) || 0, a = r[0] !== A.selectpicker.view.position0 || r[1] !== A.selectpicker.view.position1, void 0 !== A.activeIndex && (D = A.selectpicker.main.elements[A.prevActiveIndex], H = A.selectpicker.main.elements[A.activeIndex], N = A.selectpicker.main.elements[A.selectedIndex], t && (A.activeIndex !== A.selectedIndex && H && H.length && (H.classList.remove("active"), H.firstChild && H.firstChild.classList.remove("active")), A.activeIndex = void 0), A.activeIndex && A.activeIndex !== A.selectedIndex && N && N.length && (N.classList.remove("active"), N.firstChild && N.firstChild.classList.remove("active"))), void 0 !== A.prevActiveIndex && A.prevActiveIndex !== A.activeIndex && A.prevActiveIndex !== A.selectedIndex && D && D.length && (D.classList.remove("active"), D.firstChild && D.firstChild.classList.remove("active")), (t || a) && (c = A.selectpicker.view.visibleElements ? A.selectpicker.view.visibleElements.slice() : [], A.selectpicker.view.visibleElements = !1 === m ? A.selectpicker.current.elements : A.selectpicker.current.elements.slice(A.selectpicker.view.position0, A.selectpicker.view.position1), A.setOptionStatus(), (T || !1 === m && t) && (d = c, h = A.selectpicker.view.visibleElements, f = !(d.length === h.length && d.every(function(e, t) {
                            return e === h[t]
                        }))), (t || !0 === m) && f)) {
                        var b, w, x = A.$menuInner[0],
                            I = document.createDocumentFragment(),
                            k = x.firstChild.cloneNode(!1),
                            $ = A.selectpicker.view.visibleElements,
                            y = [];
                        x.replaceChild(k, x.firstChild);
                        v = 0;
                        for (var S = $.length; v < S; v++) {
                            var E, C, O = $[v];
                            A.options.sanitize && (E = O.lastChild) && (C = A.selectpicker.current.data[v + A.selectpicker.view.position0]) && C.content && !C.sanitized && (y.push(E), C.sanitized = !0), I.appendChild(O)
                        }
                        A.options.sanitize && y.length && B(y, A.options.whiteList, A.options.sanitizeFn), !0 === m && (b = 0 === A.selectpicker.view.position0 ? 0 : A.selectpicker.current.data[A.selectpicker.view.position0 - 1].position, w = A.selectpicker.view.position1 > p - 1 ? 0 : A.selectpicker.current.data[p - 1].position - A.selectpicker.current.data[A.selectpicker.view.position1 - 1].position, x.firstChild.style.marginTop = b + "px", x.firstChild.style.marginBottom = w + "px"), x.firstChild.appendChild(I)
                    }
                    if (A.prevActiveIndex = A.activeIndex, A.options.liveSearch) {
                        if (T && t) {
                            var z, L = 0;
                            A.selectpicker.view.canHighlight[L] || (L = 1 + A.selectpicker.view.canHighlight.slice(1).indexOf(!0)), z = A.selectpicker.view.visibleElements[L], A.selectpicker.view.currentActive && (A.selectpicker.view.currentActive.classList.remove("active"), A.selectpicker.view.currentActive.firstChild && A.selectpicker.view.currentActive.firstChild.classList.remove("active")), z && (z.classList.add("active"), z.firstChild && z.firstChild.classList.add("active")), A.activeIndex = (A.selectpicker.current.data[L] || {}).index
                        }
                    } else A.$menuInner.trigger("focus")
                }
                this.setPositionData(), i(e, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, t) {
                    A.noScroll || i(this.scrollTop, t), A.noScroll = !1
                }), z(window).off("resize" + U + "." + this.selectId + ".createView").on("resize" + U + "." + this.selectId + ".createView", function() {
                    A.$newElement.hasClass(j.SHOW) && i(A.$menuInner[0].scrollTop)
                })
            },
            setPlaceholder: function() {
                var e = !1;
                if (this.options.title && !this.multiple) {
                    this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), e = !0;
                    var t = this.$element[0],
                        i = !1,
                        s = !this.selectpicker.view.titleOption.parentNode;
                    if (s) this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", i = void 0 === z(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected");
                    (s || 0 !== this.selectpicker.view.titleOption.index) && t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), i && (t.selectedIndex = 0)
                }
                return e
            },
            createLi: function() {
                var a = this,
                    f = this.options.iconBase,
                    m = ':not([hidden]):not([data-hidden="true"])',
                    v = [],
                    g = [],
                    c = 0,
                    b = 0,
                    e = this.setPlaceholder() ? 1 : 0;
                this.options.hideDisabled && (m += ":not(:disabled)"), !a.options.showTick && !a.multiple || F.checkMark.parentNode || (F.checkMark.className = f + " " + a.options.tickIcon + " check-mark", F.a.appendChild(F.checkMark));
                var t = this.$element[0].querySelectorAll("select > *" + m);

                function w(e) {
                    var t = g[g.length - 1];
                    t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", v.push(G(!1, j.DIVIDER, e.optID ? e.optID + "div" : void 0)), g.push(e))
                }

                function x(e, t) {
                    if ((t = t || {}).divider = "true" === e.getAttribute("data-divider"), t.divider) w({
                        optID: t.optID
                    });
                    else {
                        var i = g.length,
                            s = e.style.cssText,
                            n = s ? O(s) : "",
                            o = (e.className || "") + (t.optgroupClass || "");
                        t.optID && (o = "opt " + o), t.text = e.textContent, t.content = e.getAttribute("data-content"), t.tokens = e.getAttribute("data-tokens"), t.subtext = e.getAttribute("data-subtext"), t.icon = e.getAttribute("data-icon"), t.iconBase = f;
                        var l = Y(t);
                        v.push(G(K(l, o, n), "", t.optID)), e.liIndex = i, t.display = t.content || t.text, t.type = "option", t.index = i, t.option = e, t.disabled = t.disabled || e.disabled, g.push(t);
                        var r = 0;
                        t.display && (r += t.display.length), t.subtext && (r += t.subtext.length), t.icon && (r += 1), c < r && (c = r, a.selectpicker.view.widestOption = v[v.length - 1])
                    }
                }

                function i(e, t) {
                    var i = t[e],
                        s = t[e - 1],
                        n = t[e + 1],
                        o = i.querySelectorAll("option" + m);
                    if (o.length) {
                        var l, r, a = {
                                label: O(i.label),
                                subtext: i.getAttribute("data-subtext"),
                                icon: i.getAttribute("data-icon"),
                                iconBase: f
                            },
                            c = " " + (i.className || "");
                        b++, s && w({
                            optID: b
                        });
                        var d = Z(a);
                        v.push(G(d, "dropdown-header" + c, b)), g.push({
                            display: a.label,
                            subtext: a.subtext,
                            type: "optgroup-label",
                            optID: b
                        });
                        for (var h = 0, p = o.length; h < p; h++) {
                            var u = o[h];
                            0 === h && (r = (l = g.length - 1) + p), x(u, {
                                headerIndex: l,
                                lastIndex: r,
                                optID: b,
                                optgroupClass: c,
                                disabled: i.disabled
                            })
                        }
                        n && w({
                            optID: b
                        })
                    }
                }
                for (var s = t.length; e < s; e++) {
                    var n = t[e];
                    "OPTGROUP" !== n.tagName ? x(n, {}) : i(e, t)
                }
                this.selectpicker.main.elements = v, this.selectpicker.main.data = g, this.selectpicker.current = this.selectpicker.main
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                this.setPlaceholder();
                var e, t, i = this,
                    s = this.$element[0].selectedOptions,
                    n = s.length,
                    o = this.$button[0],
                    l = o.querySelector(".filter-option-inner-inner"),
                    r = document.createTextNode(this.options.multipleSeparator),
                    a = F.fragment.cloneNode(!1),
                    c = !1;
                if (this.togglePlaceholder(), this.tabIndex(), "static" === this.options.selectedTextFormat) a = Y({
                    text: this.options.title
                }, !0);
                else if ((e = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < n) && (e = 1 < (t = this.options.selectedTextFormat.split(">")).length && n > t[1] || 1 === t.length && 2 <= n), !1 === e) {
                    for (var d = 0; d < n && d < 50; d++) {
                        var h = s[d],
                            p = {},
                            u = {
                                content: h.getAttribute("data-content"),
                                subtext: h.getAttribute("data-subtext"),
                                icon: h.getAttribute("data-icon")
                            };
                        this.multiple && 0 < d && a.appendChild(r.cloneNode(!1)), h.title ? p.text = h.title : u.content && i.options.showContent ? (p.content = u.content.toString(), c = !0) : (i.options.showIcon && (p.icon = u.icon, p.iconBase = this.options.iconBase), i.options.showSubtext && !i.multiple && u.subtext && (p.subtext = " " + u.subtext), p.text = h.textContent.trim()), a.appendChild(Y(p, !0))
                    }
                    49 < n && a.appendChild(document.createTextNode("..."))
                } else {
                    var f = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                    this.options.hideDisabled && (f += ":not(:disabled)");
                    var m = this.$element[0].querySelectorAll("select > option" + f + ", optgroup" + f + " option" + f).length,
                        v = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(n, m) : this.options.countSelectedText;
                    a = Y({
                        text: v.replace("{0}", n.toString()).replace("{1}", m.toString())
                    }, !0)
                }
                if (null == this.options.title && (this.options.title = this.$element.attr("title")), a.childNodes.length || (a = Y({
                        text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText
                    }, !0)), o.title = a.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && c && B([a], i.options.whiteList, i.options.sanitizeFn), l.innerHTML = "", l.appendChild(a), M.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
                    var g = o.querySelector(".filter-expand"),
                        b = l.cloneNode(!0);
                    b.className = "filter-expand", g ? o.replaceChild(b, g) : o.appendChild(b)
                }
                this.$element.trigger("rendered" + U)
            },
            setStyle: function(e, t) {
                var i, s = this.$button[0],
                    n = this.$newElement[0],
                    o = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), M.major < 4 && (n.classList.add("bs3"), n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")), i = e ? e.trim() : o, "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")), i && s.classList.add.apply(s.classList, i.split(" ")))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var t = document.createElement("div"),
                        i = document.createElement("div"),
                        s = document.createElement("div"),
                        n = document.createElement("ul"),
                        o = document.createElement("li"),
                        l = document.createElement("li"),
                        r = document.createElement("li"),
                        a = document.createElement("a"),
                        c = document.createElement("span"),
                        d = this.options.header && 0 < this.$menu.find("." + j.POPOVERHEADER).length ? this.$menu.find("." + j.POPOVERHEADER)[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? document.createElement("div") : null,
                        p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                        f = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (f ? f.className : ""), t.className = this.$menu[0].parentNode.className + " " + j.SHOW, t.style.width = this.sizeInfo.selectWidth + "px", "auto" === this.options.width && (i.style.minWidth = 0), i.className = j.MENU + " " + j.SHOW, s.className = "inner " + j.SHOW, n.className = j.MENU + " inner " + ("4" === M.major ? j.SHOW : ""), o.className = j.DIVIDER, l.className = "dropdown-header", c.appendChild(document.createTextNode("\u200b")), a.appendChild(c), r.appendChild(a), l.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(r), n.appendChild(o), n.appendChild(l), d && i.appendChild(d), h) {
                        var m = document.createElement("input");
                        h.className = "bs-searchbox", m.className = "form-control", h.appendChild(m), i.appendChild(h)
                    }
                    p && i.appendChild(p), s.appendChild(n), i.appendChild(s), u && i.appendChild(u), t.appendChild(i), document.body.appendChild(t);
                    var v, g = r.offsetHeight,
                        b = l ? l.offsetHeight : 0,
                        w = d ? d.offsetHeight : 0,
                        x = h ? h.offsetHeight : 0,
                        I = p ? p.offsetHeight : 0,
                        k = u ? u.offsetHeight : 0,
                        $ = z(o).outerHeight(!0),
                        y = !!window.getComputedStyle && window.getComputedStyle(i),
                        S = i.offsetWidth,
                        E = y ? null : z(i),
                        C = {
                            vert: L(y ? y.paddingTop : E.css("paddingTop")) + L(y ? y.paddingBottom : E.css("paddingBottom")) + L(y ? y.borderTopWidth : E.css("borderTopWidth")) + L(y ? y.borderBottomWidth : E.css("borderBottomWidth")),
                            horiz: L(y ? y.paddingLeft : E.css("paddingLeft")) + L(y ? y.paddingRight : E.css("paddingRight")) + L(y ? y.borderLeftWidth : E.css("borderLeftWidth")) + L(y ? y.borderRightWidth : E.css("borderRightWidth"))
                        },
                        O = {
                            vert: C.vert + L(y ? y.marginTop : E.css("marginTop")) + L(y ? y.marginBottom : E.css("marginBottom")) + 2,
                            horiz: C.horiz + L(y ? y.marginLeft : E.css("marginLeft")) + L(y ? y.marginRight : E.css("marginRight")) + 2
                        };
                    s.style.overflowY = "scroll", v = i.offsetWidth - S, document.body.removeChild(t), this.sizeInfo.liHeight = g, this.sizeInfo.dropdownHeaderHeight = b, this.sizeInfo.headerHeight = w, this.sizeInfo.searchHeight = x, this.sizeInfo.actionsHeight = I, this.sizeInfo.doneButtonHeight = k, this.sizeInfo.dividerHeight = $, this.sizeInfo.menuPadding = C, this.sizeInfo.menuExtras = O, this.sizeInfo.menuWidth = S, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = v, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = z(window),
                    i = this.$newElement.offset(),
                    s = z(this.options.container);
                this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var n = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - n[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - n[1], this.sizeInfo.selectOffsetTop -= n[0], this.sizeInfo.selectOffsetLeft -= n[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, s, n, o, l, r, a = this.sizeInfo.selectWidth,
                    c = this.sizeInfo.liHeight,
                    d = this.sizeInfo.headerHeight,
                    h = this.sizeInfo.searchHeight,
                    p = this.sizeInfo.actionsHeight,
                    u = this.sizeInfo.doneButtonHeight,
                    f = this.sizeInfo.dividerHeight,
                    m = this.sizeInfo.menuPadding,
                    v = 0;
                if (this.options.dropupAuto && (r = c * this.selectpicker.current.elements.length + m.vert, this.$newElement.toggleClass(j.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)), "auto" === this.options.size) n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + d + h + p + u, l = Math.max(n - m.vert, 0), this.$newElement.hasClass(j.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++) "divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = c * this.options.size + v * f + m.vert) - m.vert, o = i + d + h + p + u, s = l = ""
                }
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(j.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a), this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }), this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": l + "px"
                }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth, this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var t, i = this,
                        s = z(window),
                        n = 0;
                    if (this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                            return i.setMenuSize()
                        }), "auto" === this.options.size ? s.off("resize" + U + "." + this.selectId + ".setMenuSize scroll" + U + "." + this.selectId + ".setMenuSize").on("resize" + U + "." + this.selectId + ".setMenuSize scroll" + U + "." + this.selectId + ".setMenuSize", function() {
                            return i.setMenuSize()
                        }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && s.off("resize" + U + "." + this.selectId + ".setMenuSize scroll" + U + "." + this.selectId + ".setMenuSize"), e) n = this.$menuInner[0].scrollTop;
                    else if (!i.multiple) {
                        var o = i.$element[0];
                        "number" == typeof(t = (o.options[o.selectedIndex] || {}).liIndex) && !1 !== i.options.size && (n = (n = i.sizeInfo.liHeight * t) - i.sizeInfo.menuInnerHeight / 2 + i.sizeInfo.liHeight / 2)
                    }
                    i.createView(!1, n)
                }
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"), i.$element.on("loaded" + U, function() {
                        i.liHeight(), i.setMenuSize();
                        var e = i.$newElement.clone().appendTo("body"),
                            t = e.css("width", "auto").children("button").outerWidth();
                        e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                    })
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = z('<div class="bs-container" />');
                var s, n, o, l = this,
                    r = z(this.options.container),
                    e = function(e) {
                        var t = {},
                            i = l.options.display || !!z.fn.dropdown.Constructor.Default && z.fn.dropdown.Constructor.Default.display;
                        l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(j.DROPUP, e.hasClass(j.DROPUP)), s = e.offset(), r.is("body") ? n = {
                            top: 0,
                            left: 0
                        } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), o = e.hasClass(j.DROPUP) ? 0 : e[0].offsetHeight, (M.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, l.$bsContainer.css(t)
                    };
                this.$button.on("click.bs.dropdown.data-api", function() {
                    l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(j.SHOW, !l.$button.hasClass(j.SHOW)).append(l.$menu))
                }), z(window).off("resize" + U + "." + this.selectId + " scroll" + U + "." + this.selectId).on("resize" + U + "." + this.selectId + " scroll" + U + "." + this.selectId, function() {
                    l.$newElement.hasClass(j.SHOW) && e(l.$newElement)
                }), this.$element.on("hide" + U, function() {
                    l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach()
                })
            },
            setOptionStatus: function() {
                var e = this;
                if (e.noScroll = !1, e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length)
                    for (var t = 0; t < e.selectpicker.view.visibleElements.length; t++) {
                        var i = e.selectpicker.current.data[t + e.selectpicker.view.position0],
                            s = i.option;
                        s && (e.setDisabled(i.index, i.disabled), e.setSelected(i.index, s.selected))
                    }
            },
            setSelected: function(e, t) {
                var i, s, n = this.selectpicker.main.elements[e],
                    o = this.selectpicker.main.data[e],
                    l = void 0 !== this.activeIndex,
                    r = this.activeIndex === e || t && !this.multiple && !l;
                o.selected = t, s = n.firstChild, t && (this.selectedIndex = e), n.classList.toggle("selected", t), n.classList.toggle("active", r), r && (this.selectpicker.view.currentActive = n, this.activeIndex = e), s && (s.classList.toggle("selected", t), s.classList.toggle("active", r), s.setAttribute("aria-selected", t)), r || !l && t && void 0 !== this.prevActiveIndex && ((i = this.selectpicker.main.elements[this.prevActiveIndex]).classList.remove("active"), i.firstChild && i.firstChild.classList.remove("active"))
            },
            setDisabled: function(e, t) {
                var i, s = this.selectpicker.main.elements[e];
                this.selectpicker.main.data[e].disabled = t, i = s.firstChild, s.classList.toggle(j.DISABLED, t), i && ("4" === M.major && i.classList.toggle(j.DISABLED, t), i.setAttribute("aria-disabled", t), t ? i.setAttribute("tabindex", -1) : i.setAttribute("tabindex", 0))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement[0].classList.add(j.DISABLED), this.$button.addClass(j.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button[0].classList.contains(j.DISABLED) && (this.$newElement[0].classList.remove(j.DISABLED), this.$button.removeClass(j.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.on("click", function() {
                    return !e.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var e = this.$element[0],
                    t = e.selectedIndex,
                    i = -1 === t;
                i || e.options[t].value || (i = !0), this.$button.toggleClass("bs-placeholder", i)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var S = this,
                    t = z(document);

                function e() {
                    S.options.liveSearch ? S.$searchbox.trigger("focus") : S.$menuInner.trigger("focus")
                }

                function i() {
                    S.dropdown && S.dropdown._popper && S.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1))
                }), this.$newElement.on("show.bs.dropdown", function() {
                    3 < M.major && !S.dropdown && (S.dropdown = S.$button.data("bs.dropdown"), S.dropdown._menu = S.$menu[0])
                }), this.$button.on("click.bs.dropdown.data-api", function() {
                    S.$newElement.hasClass(j.SHOW) || S.setSize()
                }), this.$element.on("shown" + U, function() {
                    S.$menuInner[0].scrollTop !== S.selectpicker.view.scrollTop && (S.$menuInner[0].scrollTop = S.selectpicker.view.scrollTop), 3 < M.major ? requestAnimationFrame(i) : e()
                }), this.$menuInner.on("click", "li a", function(e, t) {
                    var i = z(this),
                        s = S.isVirtual() ? S.selectpicker.view.position0 : 0,
                        n = S.selectpicker.current.data[i.parent().index() + s],
                        o = n.index,
                        l = E(S.$element[0]),
                        r = S.$element.prop("selectedIndex"),
                        a = !0;
                    if (S.multiple && 1 !== S.options.maxOptions && e.stopPropagation(), e.preventDefault(), !S.isDisabled() && !i.parent().hasClass(j.DISABLED)) {
                        var c = S.$element.find("option"),
                            d = n.option,
                            h = z(d),
                            p = d.selected,
                            u = h.parent("optgroup"),
                            f = u.find("option"),
                            m = S.options.maxOptions,
                            v = u.data("maxOptions") || !1;
                        if (o === S.activeIndex && (t = !0), t || (S.prevActiveIndex = S.activeIndex, S.activeIndex = void 0), S.multiple) {
                            if (d.selected = !p, S.setSelected(o, !p), i.trigger("blur"), !1 !== m || !1 !== v) {
                                var g = m < c.filter(":selected").length,
                                    b = v < u.find("option:selected").length;
                                if (m && g || v && b)
                                    if (m && 1 == m) {
                                        c.prop("selected", !1), h.prop("selected", !0);
                                        for (var w = 0; w < c.length; w++) S.setSelected(w, !1);
                                        S.setSelected(o, !0)
                                    } else if (v && 1 == v) {
                                    u.find("option:selected").prop("selected", !1), h.prop("selected", !0);
                                    for (w = 0; w < f.length; w++) {
                                        d = f[w];
                                        S.setSelected(c.index(d), !1)
                                    }
                                    S.setSelected(o, !0)
                                } else {
                                    var x = "string" == typeof S.options.maxOptionsText ? [S.options.maxOptionsText, S.options.maxOptionsText] : S.options.maxOptionsText,
                                        I = "function" == typeof x ? x(m, v) : x,
                                        k = I[0].replace("{n}", m),
                                        $ = I[1].replace("{n}", v),
                                        y = z('<div class="notify"></div>');
                                    I[2] && (k = k.replace("{var}", I[2][1 < m ? 0 : 1]), $ = $.replace("{var}", I[2][1 < v ? 0 : 1])), h.prop("selected", !1), S.$menu.append(y), m && g && (y.append(z("<div>" + k + "</div>")), a = !1, S.$element.trigger("maxReached" + U)), v && b && (y.append(z("<div>" + $ + "</div>")), a = !1, S.$element.trigger("maxReachedGrp" + U)), setTimeout(function() {
                                        S.setSelected(o, !1)
                                    }, 10), y.delay(750).fadeOut(300, function() {
                                        z(this).remove()
                                    })
                                }
                            }
                        } else c.prop("selected", !1), d.selected = !0, S.setSelected(o, !0);
                        !S.multiple || S.multiple && 1 === S.options.maxOptions ? S.$button.trigger("focus") : S.options.liveSearch && S.$searchbox.trigger("focus"), a && (l != E(S.$element[0]) && S.multiple || r != S.$element.prop("selectedIndex") && !S.multiple) && (C = [d.index, h.prop("selected"), l], S.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li." + j.DISABLED + " a, ." + j.POPOVERHEADER + ", ." + j.POPOVERHEADER + " :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), S.options.liveSearch && !z(e.target).hasClass("close") ? S.$searchbox.trigger("focus") : S.$button.trigger("focus"))
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), S.options.liveSearch ? S.$searchbox.trigger("focus") : S.$button.trigger("focus")
                }), this.$menu.on("click", "." + j.POPOVERHEADER + " .close", function() {
                    S.$button.trigger("click")
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(e) {
                    S.options.liveSearch ? S.$searchbox.trigger("focus") : S.$button.trigger("focus"), e.preventDefault(), e.stopPropagation(), z(this).hasClass("bs-select-all") ? S.selectAll() : S.deselectAll()
                }), this.$element.on("change" + U, function() {
                    S.render(), S.$element.trigger("changed" + U, C), C = null
                }).on("focus" + U, function() {
                    S.options.mobile || S.$button.trigger("focus")
                })
            },
            liveSearchListener: function() {
                var u = this,
                    f = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api", function() {
                    u.$searchbox.val() && u.$searchbox.val("")
                }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    var e = u.$searchbox.val();
                    if (u.selectpicker.search.elements = [], u.selectpicker.search.data = [], e) {
                        var t = [],
                            i = e.toUpperCase(),
                            s = {},
                            n = [],
                            o = u._searchStyle(),
                            l = u.options.liveSearchNormalize;
                        l && (i = w(i)), u._$lisSelected = u.$menuInner.find(".selected");
                        for (var r = 0; r < u.selectpicker.main.data.length; r++) {
                            var a = u.selectpicker.main.data[r];
                            s[r] || (s[r] = $(a, i, o, l)), s[r] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0, n.push(a.headerIndex - 1)), s[a.headerIndex] = !0, n.push(a.headerIndex), s[a.lastIndex + 1] = !0), s[r] && "optgroup-label" !== a.type && n.push(r)
                        }
                        r = 0;
                        for (var c = n.length; r < c; r++) {
                            var d = n[r],
                                h = n[r - 1],
                                p = (a = u.selectpicker.main.data[d], u.selectpicker.main.data[h]);
                            ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== r) && (u.selectpicker.search.data.push(a), t.push(u.selectpicker.main.elements[d]))
                        }
                        u.activeIndex = void 0, u.noScroll = !0, u.$menuInner.scrollTop(0), u.selectpicker.search.elements = t, u.createView(!0), t.length || (f.className = "no-results", f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + O(e) + '"'), u.$menuInner[0].firstChild.appendChild(f))
                    } else u.$menuInner.scrollTop(0), u.createView(!1)
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                if (void 0 === e) return this.$element.val();
                var t = E(this.$element[0]);
                return C = [null, null, t], this.$element.val(e).trigger("changed" + U, C), this.render(), C = null, this.$element
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element[0],
                        i = 0,
                        s = 0,
                        n = E(t);
                    t.classList.add("bs-select-hidden");
                    for (var o = 0, l = this.selectpicker.current.elements.length; o < l; o++) {
                        var r = this.selectpicker.current.data[o],
                            a = r.option;
                        a && !r.disabled && "divider" !== r.type && (r.selected && i++, (a.selected = e) && s++)
                    }
                    t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), this.togglePlaceholder(), C = [null, null, n], this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(e) {
                var t, i, s, n, o, l = z(this),
                    r = l.hasClass("dropdown-toggle"),
                    a = (r ? l.closest(".dropdown") : l.closest(V.MENU)).data("this"),
                    c = a.findLis(),
                    d = !1,
                    h = e.which === H && !r && !a.options.selectOnTab,
                    p = _.test(e.which) || h,
                    u = a.$menuInner[0].scrollTop,
                    f = a.isVirtual(),
                    m = !0 === f ? a.selectpicker.view.position0 : 0;
                if (!(i = a.$newElement.hasClass(j.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus");
                else {
                    if (e.which === A && i && (e.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), p) {
                        if (!c.length) return;
                        void 0 === (t = !0 === f ? c.index(c.filter(".active")) : a.activeIndex) && (t = -1), -1 !== t && ((s = a.selectpicker.current.elements[t + m]).classList.remove("active"), s.firstChild && s.firstChild.classList.remove("active")), e.which === P ? (-1 !== t && t--, t + m < 0 && (t += c.length), a.selectpicker.view.canHighlight[t + m] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + m).lastIndexOf(!0) - m) && (t = c.length - 1)) : (e.which === W || h) && (++t + m >= a.selectpicker.view.canHighlight.length && (t = 0), a.selectpicker.view.canHighlight[t + m] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + m + 1).indexOf(!0))), e.preventDefault();
                        var v = m + t;
                        e.which === P ? 0 === m && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, v = a.selectpicker.current.elements.length - 1) : d = (o = (n = a.selectpicker.current.data[v]).position - n.height) < u : (e.which === W || h) && (0 === t ? v = a.$menuInner[0].scrollTop = 0 : d = u < (o = (n = a.selectpicker.current.data[v]).position - a.sizeInfo.menuInnerHeight)), (s = a.selectpicker.current.elements[v]) && (s.classList.add("active"), s.firstChild && s.firstChild.classList.add("active")), a.activeIndex = a.selectpicker.current.data[v].index, a.selectpicker.view.currentActive = s, d && (a.$menuInner[0].scrollTop = o), a.options.liveSearch ? a.$searchbox.trigger("focus") : l.trigger("focus")
                    } else if (!l.is("input") && !q.test(e.which) || e.which === D && a.selectpicker.keydown.keyHistory) {
                        var g, b, w = [];
                        e.preventDefault(), a.selectpicker.keydown.keyHistory += T[e.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), b = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(b) && (b = b.charAt(0));
                        for (var x = 0; x < a.selectpicker.current.data.length; x++) {
                            var I = a.selectpicker.current.data[x];
                            $(I, b, "startsWith", !0) && a.selectpicker.view.canHighlight[x] && w.push(I.index)
                        }
                        if (w.length) {
                            var k = 0;
                            c.removeClass("active").find("a").removeClass("active"), 1 === b.length && (-1 === (k = w.indexOf(a.activeIndex)) || k === w.length - 1 ? k = 0 : k++), g = w[k], d = 0 < u - (n = a.selectpicker.main.data[g]).position ? (o = n.position - n.height, !0) : (o = n.position - a.sizeInfo.menuInnerHeight, n.position > u + a.sizeInfo.menuInnerHeight), (s = a.selectpicker.main.elements[g]).classList.add("active"), s.firstChild && s.firstChild.classList.add("active"), a.activeIndex = w[k], s.firstChild.focus(), d && (a.$menuInner[0].scrollTop = o), l.trigger("focus")
                        }
                    }
                    i && (e.which === D && !a.selectpicker.keydown.keyHistory || e.which === N || e.which === H && a.options.selectOnTab) && (e.which !== D && e.preventDefault(), a.options.liveSearch && e.which === D || (a.$menuInner.find(".active a").trigger("click", !0), l.trigger("focus"), a.options.liveSearch || (e.preventDefault(), z(document).data("spaceSelect", !0))))
                }
            },
            mobile: function() {
                this.$element[0].classList.add("mobile-device")
            },
            refresh: function() {
                var e = z.extend({}, this.options, this.$element.data());
                this.options = e, this.checkDisabled(), this.setStyle(), this.render(), this.createLi(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + U)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(U).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), z(window).off(U + "." + this.selectId)
            }
        };
        var X = z.fn.selectpicker;
        z.fn.selectpicker = Q, z.fn.selectpicker.Constructor = J, z.fn.selectpicker.noConflict = function() {
            return z.fn.selectpicker = X, this
        }, z(document).off("keydown.bs.dropdown.data-api").on("keydown" + U, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', J.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), z(window).on("load" + U + ".data-api", function() {
            z(".selectpicker").each(function() {
                var e = z(this);
                Q.call(e, e.data())
            })
        })
    }(e)
});
//# sourceMappingURL=bootstrap-select.min.js.map



/*-------------------------------------------------------------
    7. Slick slider jquery
---------------------------------------------------------------*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }), b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }, e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});


/*-------------------------------------------------------------
    8. jquery.counterup js
---------------------------------------------------------------*/
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);



/*-------------------------------------------------------------
    9. jQuery.Waypoints.min js
---------------------------------------------------------------*/

/*!
Waypoints - 4.0.1
Copyright © 2011-2017 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();


/*-------------------------------------------------------------
    10. Lightbox js
---------------------------------------------------------------*/
/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery)
}(this, function(a) {
    function b(b) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b)
    }
    return b.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    }, b.prototype.option = function(b) {
        a.extend(this.options, b)
    }, b.prototype.imageCountLabel = function(a, b) {
        return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b)
    }, b.prototype.init = function() {
        var b = this;
        a(document).ready(function() {
            b.enable(), b.build()
        })
    }, b.prototype.enable = function() {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
            return b.start(a(c.currentTarget)), !1
        })
    }, b.prototype.build = function() {
        var b = this;
        a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
            top: parseInt(this.$container.css("padding-top"), 10),
            right: parseInt(this.$container.css("padding-right"), 10),
            bottom: parseInt(this.$container.css("padding-bottom"), 10),
            left: parseInt(this.$container.css("padding-left"), 10)
        }, this.imageBorderWidth = {
            top: parseInt(this.$image.css("border-top-width"), 10),
            right: parseInt(this.$image.css("border-right-width"), 10),
            bottom: parseInt(this.$image.css("border-bottom-width"), 10),
            left: parseInt(this.$image.css("border-left-width"), 10)
        }, this.$overlay.hide().on("click", function() {
            return b.end(), !1
        }), this.$lightbox.hide().on("click", function(c) {
            return "lightbox" === a(c.target).attr("id") && b.end(), !1
        }), this.$outerContainer.on("click", function(c) {
            return "lightbox" === a(c.target).attr("id") && b.end(), !1
        }), this.$lightbox.find(".lb-prev").on("click", function() {
            return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1
        }), this.$lightbox.find(".lb-next").on("click", function() {
            return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1
        }), this.$nav.on("mousedown", function(a) {
            3 === a.which && (b.$nav.css("pointer-events", "none"), b.$lightbox.one("contextmenu", function() {
                setTimeout(function() {
                    this.$nav.css("pointer-events", "auto")
                }.bind(b), 0)
            }))
        }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
            return b.end(), !1
        })
    }, b.prototype.start = function(b) {
        function c(a) {
            d.album.push({
                link: a.attr("href"),
                title: a.attr("data-title") || a.attr("title")
            })
        }
        var d = this,
            e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
            visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var f, g = 0,
            h = b.attr("data-lightbox");
        if (h) {
            f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
            for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
        } else if ("lightbox" === b.attr("rel")) c(b);
        else {
            f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
            for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
        }
        var k = e.scrollTop() + this.options.positionFromTop,
            l = e.scrollLeft();
        this.$lightbox.css({
            top: k + "px",
            left: l + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g)
    }, b.prototype.changeImage = function(b) {
        var c = this;
        this.disableKeyboardNav();
        var d = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var e = new Image;
        e.onload = function() {
            var f, g, h, i, j, k, l;
            d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20, i = k - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - 120, c.options.maxWidth && c.options.maxWidth < j && (j = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (i = c.options.maxHeight), (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height())
        }, e.src = this.album[b].link, this.currentImageIndex = b
    }, b.prototype.sizeOverlay = function() {
        this.$overlay.width(a(document).width()).height(a(document).height())
    }, b.prototype.sizeContainer = function(a, b) {
        function c() {
            d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage()
        }
        var d = this,
            e = this.$outerContainer.outerWidth(),
            f = this.$outerContainer.outerHeight(),
            g = a + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            h = b + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
        e !== g || f !== h ? this.$outerContainer.animate({
            width: g,
            height: h
        }, this.options.resizeDuration, "swing", function() {
            c()
        }) : c()
    }, b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, b.prototype.updateNav = function() {
        var a = !1;
        try {
            document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
        } catch (b) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, b.prototype.updateDetails = function() {
        var b = this;
        if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var c = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? c.text(this.album[this.currentImageIndex].title) : c.html(this.album[this.currentImageIndex].title), c.fadeIn("fast").find("a").on("click", function(b) {
                void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : location.href = a(this).attr("href")
            })
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var d = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(d).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return b.sizeOverlay()
        })
    }, b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            var a = new Image;
            a.src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            var b = new Image;
            b.src = this.album[this.currentImageIndex - 1].link
        }
    }, b.prototype.enableKeyboardNav = function() {
        a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
    }, b.prototype.disableKeyboardNav = function() {
        a(document).off(".keyboard")
    }, b.prototype.keyboardAction = function(a) {
        var b = 27,
            c = 37,
            d = 39,
            e = a.keyCode,
            f = String.fromCharCode(e).toLowerCase();
        e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }, b.prototype.end = function() {
        this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
            visibility: "visible"
        }), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling")
    }, new b
});
//# sourceMappingURL=lightbox.min.map





/*-------------------------------------------------------------
    11. animate Textillate
---------------------------------------------------------------*/

jQuery(document).ready(function($) {
    //set animation timing
    var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        //type effect
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();


    function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.cd-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.cd-headline'));
    }

    function singleLetters($words) {
        $words.each(function() {
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function() {
            var headline = $(this);

            if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function() {
                    headline.find('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting);
            } else if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type')) {
                //assign to .cd-words-wrapper the width of its longest word
                var words = headline.find('.cd-words-wrapper b'),
                    width = 0;
                words.each(function() {
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.cd-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function() {
                hideWord(headline.find('.is-visible').eq(0))
            }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        if ($word.parents('.cd-headline').hasClass('type')) {
            var parentSpan = $word.parent('.cd-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            setTimeout(function() {
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function() {
                showWord(nextWord, typeLettersDelay)
            }, typeAnimationDelay);

        } else if ($word.parents('.cd-headline').hasClass('letters')) {
            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
            hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                width: '2px'
            }, revealDuration, function() {
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
            $word.parents('.cd-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function() {
                hideWord(nextWord)
            }, barAnimationDelay);
            setTimeout(function() {
                $word.parents('.cd-words-wrapper').addClass('is-loading')
            }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function() {
                hideWord(nextWord)
            }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if ($word.parents('.cd-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                'width': $word.width() + 10
            }, revealDuration, function() {
                setTimeout(function() {
                    hideWord($word)
                }, revealAnimationDelay);
            });
        }
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function() {
                hideLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else if ($bool) {
            setTimeout(function() {
                hideWord(takeNext($word))
            }, animationDelay);
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function() {
                showLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else {
            if ($word.parents('.cd-headline').hasClass('type')) {
                setTimeout(function() {
                    $word.parents('.cd-words-wrapper').addClass('waiting');
                }, 200);
            }
            if (!$bool) {
                setTimeout(function() {
                    hideWord($word)
                }, animationDelay)
            }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});




/*-------------------------------------------------------------
    12. Style Customizer js
---------------------------------------------------------------*/

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */

! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function c(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function d(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function e(a) {
        return c(h.json ? JSON.stringify(a) : String(a))
    }

    function f(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a
        } catch (c) {}
    }

    function g(b, c) {
        var d = h.raw ? b : f(b);
        return a.isFunction(c) ? c(d) : d
    }
    var b = /\+/g,
        h = a.cookie = function(b, f, i) {
            if (arguments.length > 1 && !a.isFunction(f)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = d(p.shift()),
                    r = p.join("=");
                if (b && b === q) {
                    l = g(r, f);
                    break
                }
                b || void 0 === (r = g(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});


/*

  Template Name: Subas Ecommerce Responsive Bootstrap Template
  Description: This is html5 template
  Author: codecarnival
  Version: 1.0
  Design and Developed by: codecarnival

NOTE: This is js of style customizer, This file Change the styling of color, 
backgrond patterns, Background images and box layout of the actual Template. 
so you can change as your requirement.

*/

/* style-customizer */


jQuery(document).ready(function($) {

    /* ----------------------------
        Left sidebar
    ----------------------------- */
    style_switcher = $('.style-customizer'),
        panelWidth = style_switcher.outerWidth(true);
    $('.style-customizer .opener').on("click", function() {
        var $this = $(this);
        if ($(".style-customizer.closed").length > 0) {
            style_switcher.animate({
                "left": "0px"
            });
            $(".style-customizer.closed").removeClass("closed");
            $(".style-customizer").addClass("opened");
        } else {
            $(".style-customizer.opened").removeClass("opened");
            $(".style-customizer").addClass("closed");
            style_switcher.animate({
                "left": '-' + panelWidth
            });
        }
        return false;
    });

    /* ----------------------------------
        style change 
    ------------------------------------- */
    var link = $('link[data-style="styles"]'),
        link_no_cookie = $('link[data-style="styles-no-cookie"]');

    /* ----------------------------------
        Resume from last selected style
    ------------------------------------- */
    var tp_stylesheet = $.cookie('tp_stylesheet'),
        footer_bg = $.cookie('footer_bg'),
        customizer_mode = $.cookie('customizer_mode'),
        pattern = $.cookie('pattern');

    $(".style-customizer .selected").removeClass("selected");
    if (!($.cookie('tp_stylesheet'))) {
        $.cookie('tp_stylesheet', 'skin-default', 30);
        tp_stylesheet = $.cookie('tp_stylesheet');
        $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
    } else {
        if (link.length > 0) {
            link.attr('href', 'css/color/' + tp_stylesheet + '.css');
            $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
            if ($(".swicher-title-page-dark").length > 0) {
                document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet + ".png";
            } else {
                if ($("#logo_img").length > 0) {
                    document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo_dark_img").length > 0) {
                    document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo-footer").length > 0) {
                    document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
            };
        };
    };

    if (!($.cookie('customizer_mode'))) {
        $.cookie('customizer_mode', 'wide-layout', 30);
        customizer_mode = $.cookie('customizer_mode');
        $("body").addClass(customizer_mode);
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
    } else {
        if (customizer_mode == "boxed-layout") {
            $("body").addClass(customizer_mode);
            $("body").removeClass("wide-layout");
            $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
            $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
            $(".owl-carousel .container").css("marginLeft", "0");
        } else {
            $("body").addClass(customizer_mode);
            $("body").removeClass("boxed-layout pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");

            $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
            $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
            $(".owl-carousel .container").css("marginLeft", "auto");
        };
    };

    if ((customizer_mode == "boxed-layout") && $.cookie('pattern')) {
        $('.style-customizer .patternChange li[data-style="' + pattern + '"]').addClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");

        $("body").addClass(pattern);
    } else if (customizer_mode == "boxed-layout") {
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");

        $('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected");
    } else {
        $('.style-customizer .patternChange li.selected').removeClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");

    };

    /* ----------------------------------
        Color Changer
    ------------------------------------- */
    $('.style-customizer .styleChange li').on('click', function() {
        if (link.length > 0) {
            var $this = $(this),
                tp_stylesheet = $this.data('style');
            $(".style-customizer .styleChange .selected").removeClass("selected");
            $this.addClass("selected");
            link.attr('href', 'css/color/' + tp_stylesheet + '.css');
            if ($(".swicher-title-page-dark").length > 0) {
                document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet + ".png";
            } else {
                if ($("#logo_img").length > 0) {
                    document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo_dark_img").length > 0) {
                    document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo-footer").length > 0) {
                    document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
            };
            $.cookie('tp_stylesheet', tp_stylesheet, 30);
        } else {
            var $this = $(this),
                tp_stylesheet_no_cookie = $this.data('style');
            $(".style-customizer .styleChange .selected").removeClass("selected");
            $this.addClass("selected");
            link_no_cookie.attr('href', 'css/color/' + tp_stylesheet_no_cookie + '.css');
            if ($(".swicher-title-page-dark").length > 0) {
                document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet_no_cookie + ".png";
            } else {
                if ($("#logo_img").length > 0) {
                    document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet_no_cookie + ".png";
                };
                if ($("#logo_dark_img").length > 0) {
                    document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet_no_cookie + ".png";
                };
                if ($("#logo-footer").length > 0) {
                    document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet_no_cookie + ".png";
                };
            };
        };
    });


    /* ----------------------------------
        Patterns Changer
    ------------------------------------- */
    $('.style-customizer .patternChange li').on('click', function() {
        var $this = $(this),
            pattern = $this.data('style');
        $(".style-customizer .patternChange .selected").removeClass("selected");
        $this.addClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");

        $("body").addClass(pattern);
        $("body").addClass("boxed-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        $(".owl-carousel .container").css("marginLeft", "0");
        $(".style-customizer select").val("boxed-layout");
        $.cookie('pattern', pattern, 30);
        $.cookie('customizer_mode', 'boxed-layout', 30);
        $(window).trigger('resize');
    });


    /* ----------------------------------
        layout Changer (boxed Layout)
    ------------------------------------- */
    $('.style-customizer .layoutstyle li.boxed-layout').on('click', function() {
        $("body").addClass("boxed-layout");
        $("body").removeClass("wide-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        $(".owl-carousel .container").css("marginLeft", "0");
        $.cookie('customizer_mode', 'boxed-layout', 30);
        if ($.cookie('pattern')) {
            var pattern = $.cookie('pattern');
            $('.style-customizer .patternChange li[data-style="' + pattern + '"]').addClass("selected");
            $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");

            $("body").addClass(pattern);
        } else {
            $('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected");
        }
        $(window).trigger('resize');

    });

    /* ----------------------------------
        layout Changer (Wide Layout)
    ------------------------------------- */
    $('.style-customizer .layoutstyle li.wide-layout').on('click', function() {
        $("body").addClass("wide-layout");
        $("body").removeClass("boxed-layout pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $("body").removeClass("");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        $(".owl-carousel .container").css("marginLeft", "auto");
        $('.style-customizer .patternChange li.selected').removeClass("selected");
        $.cookie('customizer_mode', 'wide-layout', 30);
        $(window).trigger('resize');
    });


    /* ----------------------------------
        Reset all customize styles
    ------------------------------------- */
    $('.style-customizer .resetAll li a.button-reset').on('click', function() {
        $.cookie('customizer_mode', 'wide-layout', 30);
        $("body").addClass("wide-layout");
        $("body").removeClass("boxed-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        $(".owl-carousel .container").css("marginLeft", "auto");
        $('.style-customizer .patternChange li.selected').removeClass("selected");

        //patterns and backgrond change
        $.cookie('pattern', 'pattern-0', 30);
        $("body").removeClass("reset pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $(".style-customizer .patternChange .selected").removeClass("selected");

        //Logo change
        $.cookie('tp_stylesheet', 'skin-default', 30);
        var tp_stylesheet = 'skin-default';
        $('.style-customizer .styleChange li.selected').removeClass("selected");
        $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
        link.attr('href', 'css/color/' + tp_stylesheet + '.css');
        if ($("#logo_img").length > 0) {
            document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
        };
        if ($("#logo_dark_img").length > 0) {
            document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png";
        };
        if ($("#logo-footer").length > 0) {
            document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
        };
        $(window).trigger('resize');
        $('.desktopTopFixed').removeClass('desktopTopFixed');
    });

});




/*-------------------------------------------------------------
    13. jquery.mb.YTPlayer
---------------------------------------------------------------*/

/*jquery.mb.YTPlayer 01-12-2018
 _ jquery.mb.components
 _ email: matbicoc@gmail.com
 _ Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */

var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
var getYTPVideoID = function(e) {
    var r, t;
    return 0 < e.indexOf("youtu.be") || 0 < e.indexOf("youtube.com/embed") ? r = (t = 0 < (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : t = -1 < e.indexOf("http") ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], 0 < e.indexOf("list=") ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (r = 15 < e.length ? null : e) ? null : e, {
        videoID: r,
        playlistID: t
    }
};

function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
}! function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.2.8",
        build: "7398",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            videoURL: null,
            containment: "body",
            ratio: "auto",
            fadeOnStartTime: 1500,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            coverImage: !1,
            loop: !0,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            vol: 50,
            mute: !1,
            showControls: !0,
            anchor: "center,center",
            showAnnotations: !1,
            cc_load_policy: !1,
            showYTLogo: !0,
            useOnMobile: !0,
            mobileFallbackImage: null,
            playOnlyIfVisible: !1,
            onScreenPercentage: 30,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            optimizeDisplay: !0,
            abundance: .3,
            gaTrack: !0,
            remember_last_time: !1,
            addFilters: !1,
            onReady: function(e) {},
            onError: function(e, r) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        defaultFilters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            if (ytp.YTAPIReady || void 0 !== window.YT) setTimeout(function() {
                jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0
            }, 100);
            else {
                jQuery("#YTAPI").remove();
                var tag = jQuery("<script><\/script>").attr({
                    src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    id: "YTAPI"
                });
                jQuery("head").prepend(tag)
            }

            function isIframe() {
                var r = !1;
                try {
                    self.location.href != top.location.href && (r = !0)
                } catch (e) {
                    r = !0
                }
                return r
            }
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function() {
                    $YTPlayer.YTPPlay()
                }), console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
                var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realfullscreen = !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realfullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || 1 < window.devicePixelRatio, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), YTPlayer.orig_containment_background = YTPlayer.opt.containment.css("background-image"), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                var start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    if (YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }).addClass("YTPOverlay"), YTPlayer.opt.coverImage || "none" != YTPlayer.orig_containment_background) {
                        var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                        YTPlayer.opt.containment.css({
                            background: bgndURL,
                            backgroundColor: "#000",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        })
                    }
                    YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    }).addClass("mbYTP_wrapper"), YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function(e) {
                        $YTPlayer.YTPPlay(), e.stopPropagation()
                    }), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    }).css({
                        cursor: "pointer"
                    }));
                    var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                    if (playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            opacity: 1
                        }), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
                            position: "relative",
                            maxWidth: YTPlayer.opt.containment.css("width")
                        }), YTPlayer.opt.containment.css({
                            position: "relative",
                            paddingBottom: "56.25%",
                            overflow: "hidden",
                            height: 0
                        }), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), YTPlayer.wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        })) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
                            position: "relative"
                        }), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                        }), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.mobileFallbackImage && (YTPlayer.wrapper.css({
                        backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: 1
                    }), YTPlayer.wrapper.css({
                        opacity: 1
                    })), $YTPlayer;
                    jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function() {
                        YTPlayer.player.playVideo()
                    }), jQuery(document).one("YTAPIReady", function() {
                        $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0
                    }), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
                        var o = this,
                            t = jQuery(o);
                        o.isBackground && ytp.backgroundIsInited || o.isInit || (o.isBackground && (ytp.backgroundIsInited = !0), o.opt.autoPlay = void 0 === o.opt.autoPlay ? !!o.isBackground : o.opt.autoPlay, o.opt.vol = o.opt.vol ? o.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(o), jQuery(o).on("YTPChanged", function(e) {
                            if (!o.isInit) {
                                o.isInit = !0;
                                var r = {
                                    modestbranding: 1,
                                    autoplay: 0,
                                    controls: 0,
                                    showinfo: 0,
                                    rel: 0,
                                    enablejsapi: 1,
                                    version: 3,
                                    playerapiid: o.playerID,
                                    origin: "*",
                                    allowfullscreen: !0,
                                    wmode: "transparent",
                                    iv_load_policy: o.opt.showAnnotations,
                                    cc_load_policy: o.opt.cc_load_policy,
                                    playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                                    html5: document.createElement("video").canPlayType ? 1 : 0
                                };
                                new YT.Player(o.playerID, {
                                    playerVars: r,
                                    events: {
                                        onReady: function(e) {
                                            o.player = e.target, o.player.loadVideoById({
                                                videoId: o.videoID.toString(),
                                                suggestedQuality: o.opt.quality
                                            }), t.trigger("YTPlayerIsReady_" + o.id)
                                        },
                                        onStateChange: function(e) {
                                            if ("function" == typeof e.target.getPlayerState) {
                                                var r = e.target.getPlayerState();
                                                if (o.preventTrigger || o.isStarting) o.preventTrigger = !1;
                                                else {
                                                    var t;
                                                    switch (o.state = r) {
                                                        case -1:
                                                            t = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            t = "YTPRealEnd";
                                                            break;
                                                        case 1:
                                                            t = "YTPPlay", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), o.isPlayer && o.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
                                                            break;
                                                        case 2:
                                                            t = "YTPPause", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), o.isPlayer && o.inlinePlayButton.show();
                                                            break;
                                                        case 3:
                                                            o.player.setPlaybackQuality(o.opt.quality), t = "YTPBuffering", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            t = "YTPCued"
                                                    }
                                                    var a = jQuery.Event(t);
                                                    a.time = o.currentTime, jQuery(o).trigger(a)
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var r = e.target.getPlaybackQuality(),
                                                t = jQuery.Event("YTPQualityChange");
                                            t.quality = r, jQuery(o).trigger(t)
                                        },
                                        onError: function(e) {
                                            switch ("function" == typeof o.opt.onError && o.opt.onError(t, e), e.data) {
                                                case 2:
                                                    console.error("video ID:: " + o.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                                    break;
                                                case 5:
                                                    console.error("video ID:: " + o.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                                    break;
                                                case 100:
                                                    console.error("video ID:: " + o.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                                    break;
                                                case 101:
                                                case 150:
                                                    console.error("video ID:: " + o.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
                                            }
                                            o.isList && jQuery(o).YTPPlayNext()
                                        }
                                    }
                                }), t.on("YTPlayerIsReady_" + o.id, function() {
                                    if (o.isReady) return this;
                                    o.playerEl = o.player.getIframe(), jQuery(o.playerEl).unselectable(), t.optimizeDisplay(), jQuery(window).off("resize.YTP_" + o.id).on("resize.YTP_" + o.id, function() {
                                        t.optimizeDisplay()
                                    }), o.opt.remember_last_time && jQuery(window).on("unload.YTP_" + o.id, function() {
                                        var e = o.player.getCurrentTime();
                                        jQuery.mbCookie.set("YTPlayer_start_from" + o.videoID, e, 0)
                                    }), t.YTPCheckForState()
                                })
                            }
                        }))
                    }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        isOnScreen: function(e, r) {
            r = r || 10;
            var t = e.wrapper,
                a = jQuery(window).scrollTop(),
                o = a + jQuery(window).height(),
                n = t.height() * r / 100,
                i = t.offset().top + n;
            return t.offset().top + (t.height() - n) <= o && a <= i
        },
        getDataFromAPI: function(n) {
            n.videoData = jQuery.mbStorage.get("YTPlayer_data_" + n.videoID), n.videoData ? (setTimeout(function() {
                n.dataReceived = !0;
                var e = jQuery.Event("YTPChanged");
                e.time = n.currentTime, e.videoId = n.videoID, e.opt = n.opt, jQuery(n).trigger(e);
                var r = jQuery.Event("YTPData");
                for (var t in r.prop = {}, n.videoData) r.prop[t] = n.videoData[t];
                jQuery(n).trigger(r)
            }, n.opt.fadeOnStartTime), n.hasData = !0) : jQuery.mbYTPlayer.apiKey ? jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + n.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(e) {
                n.dataReceived = !0;
                var r, t = jQuery.Event("YTPChanged");
                t.time = n.currentTime, t.videoId = n.videoID, jQuery(n).trigger(t), e.items[0] ? (r = e.items[0].snippet, n.videoData = {}, n.videoData.id = n.videoID, n.videoData.channelTitle = r.channelTitle, n.videoData.title = r.title, n.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...", n.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null, n.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null, n.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + n.videoID, n.videoData), n.hasData = !0) : (n.videoData = {}, n.hasData = !1);
                var a = jQuery.Event("YTPData");
                for (var o in a.prop = {}, n.videoData) a.prop[o] = n.videoData[o];
                jQuery(n).trigger(a)
            }) : (setTimeout(function() {
                var e = jQuery.Event("YTPChanged");
                e.time = n.currentTime, e.videoId = n.videoID, jQuery(n).trigger(e)
            }, 10), n.videoData = null), n.opt.ratio = "auto" == n.opt.ratio ? 16 / 9 : n.opt.ratio, n.isPlayer && !n.opt.autoPlay && (n.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(n).append(n.loading), n.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            return this.get(0).videoData
        },
        getVideoID: function() {
            return this.get(0).videoID || !1
        },
        getPlaylistID: function() {
            return this.get(0).playlistID || !1
        },
        setVideoQuality: function(e) {
            return this.get(0).player.setPlaybackQuality(e), this
        },
        playlist: function(e, r, t) {
            var a = this.get(0);
            return a.isList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 1, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).YTPlayer()), "function" == typeof t && jQuery(a).one("YTPChanged", function() {
                t(a)
            }), jQuery(a).on("YTPEnd", function() {
                jQuery(a).YTPPlayNext()
            }), this
        },
        playNext: function() {
            var e = this.get(0);
            return e.videoCounter++, e.videoCounter > e.videoLength && (e.videoCounter = 1), jQuery(e).YTPPlayIndex(e.videoCounter), this
        },
        playPrev: function() {
            var e = this.get(0);
            return e.videoCounter--, e.videoCounter <= 0 && (e.videoCounter = e.videoLength), jQuery(e).YTPPlayIndex(e.videoCounter), this
        },
        playIndex: function(e) {
            var r = this.get(0);
            r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter = e, r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
            var t = r.videos[r.videoCounter - 1];
            return jQuery(r).YTPChangeVideo(t), this
        },
        changeVideo: function(e) {
            var r = this,
                t = r.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.opt.autoPlay = !0, t.opt.addFilters = !1, t.opt.coverImage = !1, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999), t.wrapper.css({
                background: "none"
            }), jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, t.opt.fadeOnStartTime, function() {
                jQuery.mbYTPlayer.getDataFromAPI(t), r.YTPGetPlayer().loadVideoById({
                    videoId: t.videoID,
                    suggestedQuality: t.opt.quality
                }), r.YTPPause(), r.optimizeDisplay(), r.YTPCheckForState()
            });
            var a = jQuery.Event("YTPChangeVideo");
            return a.time = t.currentTime, jQuery(t).trigger(a), jQuery.mbYTPlayer.applyMask(t), this
        },
        getPlayer: function() {
            var e = this.get(0);
            return e.isReady && e.player || null
        },
        playerDestroy: function() {
            var e = this.get(0);
            return e.isReady && (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)), this
        },
        fullscreen: function(real) {
            var YTPlayer = this.get(0);
            void 0 === real && (real = eval(YTPlayer.opt.realfullscreen));
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;
            else {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    })
                }
                jQuery(document).on("mousemove.YTPlayer", function(e) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                }), hideMouse(), real ? (videoWrapper.css({
                    opacity: 0
                }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                    videoWrapper.CSSAnimate({
                        opacity: 1
                    }, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
            }

            function RunPrefixMethod(e, r) {
                for (var t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0; n < o.length && !e[t];) {
                    if (t = r, "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), "undefined" != (a = typeof e[t = o[n] + t])) return o = [o[n]], "function" == a ? e[t]() : e[t];
                    n++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            return this
        },
        toggleLoops: function() {
            var e = this.get(0),
                r = e.opt;
            return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1), this
        },
        play: function() {
            var e = this.get(0),
                r = jQuery(e);
            return e.isReady && (setTimeout(function() {
                r.YTPSetAbundance(e.opt.abundance)
            }, 300), e.player.playVideo(), jQuery(e.playerEl).css({
                opacity: 1
            }), e.wrapper.css({
                backgroundImage: "none"
            }), e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1), this
        },
        togglePlay: function(e) {
            var r = this.get(0);
            return r.isReady && (1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state)), this
        },
        stop: function() {
            var e = this.get(0);
            return e.isReady && (jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()), this
        },
        pause: function() {
            var e = this.get(0);
            return e.isReady && (e.opt.abundance < .2 && this.YTPSetAbundance(.2), e.player.pauseVideo(), e.state = 2), this
        },
        seekTo: function(e) {
            var r = this.get(0);
            return r.isReady && r.player.seekTo(e, !0), this
        },
        setVolume: function(e) {
            var r = this.get(0);
            return r.isReady && (r.opt.vol = e, r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)), this
        },
        getVolume: function() {
            var e = this.get(0);
            return e.isReady ? e.player.getVolume() : this
        },
        toggleVolume: function() {
            var e = this.get(0);
            return e.isReady && (e.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol), this.YTPUnmute()) : this.YTPMute()), this
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isReady) return this;
            if (e.isMute) return this;
            e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && 10 < e.volumeBar.width() && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
            var r = jQuery.Event("YTPMuted");
            return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
        },
        unmute: function() {
            var e = this.get(0);
            if (!e.isReady) return this;
            if (!e.isMute) return this;
            e.player.unMute(), e.isMute = !1, jQuery(e).YTPSetVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(10 < e.opt.vol ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
            var r = jQuery.Event("YTPUnmuted");
            return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
        },
        applyFilter: function(e, r) {
            var t = this.get(0);
            if (!t.isReady) return this;
            t.filters[e].value = r, t.filtersEnabled && this.YTPEnableFilters()
        },
        applyFilters: function(e) {
            var r = this,
                t = r.get(0);
            if (!t.isReady) return this;
            if (!t.isReady) return jQuery(t).on("YTPReady", function() {
                r.YTPApplyFilters(e)
            }), this;
            for (var a in e) r.YTPApplyFilter(a, e[a]);
            r.trigger("YTPFiltersApplied")
        },
        toggleFilter: function(e, r) {
            var t = this.get(0);
            return t.isReady && (t.filters[e].value ? t.filters[e].value = 0 : t.filters[e].value = r, t.filtersEnabled && jQuery(t).YTPEnableFilters()), this
        },
        toggleFilters: function(e) {
            var r = this.get(0);
            return r.isReady && (r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled)), this
        },
        disableFilters: function() {
            var e = this.get(0);
            if (!e.isReady) return this;
            var r = jQuery(e.playerEl);
            return r.css("-webkit-filter", ""), r.css("filter", ""), e.filtersEnabled = !1, this
        },
        enableFilters: function() {
            var e = this.get(0);
            if (!e.isReady) return this;
            var r = jQuery(e.playerEl),
                t = "";
            for (var a in e.filters) e.filters[a].value && (t += a.replace("_", "-") + "(" + e.filters[a].value + e.filters[a].unit + ") ");
            return r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0, this
        },
        removeFilter: function(e, r) {
            var t = this.get(0);
            if (!t.isReady) return this;
            if ("function" == typeof e && (r = e, e = null), e) this.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
            else {
                for (var a in t.filters) this.YTPApplyFilter(a, 0);
                "function" == typeof r && r(a), t.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
            }
            var o = jQuery.Event("YTPFiltersApplied");
            return this.trigger(o), this
        },
        getFilters: function() {
            var e = this.get(0);
            return e.isReady ? e.filters : this
        },
        addMask: function(e) {
            var r = this.get(0);
            if (!r.isReady) return this;
            e || (e = r.actualMask);
            var t = jQuery("<img/>").attr("src", e).on("load", function() {
                r.overlay.CSSAnimate({
                    opacity: 0
                }, r.opt.fadeOnStartTime, function() {
                    r.hasMask = !0, t.remove(), r.overlay.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), r.overlay.CSSAnimate({
                        opacity: 1
                    }, r.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function() {
            var e = this.get(0);
            return e.isReady && e.overlay.CSSAnimate({
                opacity: 0
            }, e.opt.fadeOnStartTime, function() {
                e.hasMask = !1, e.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), e.overlay.CSSAnimate({
                    opacity: 1
                }, e.opt.fadeOnStartTime)
            }), this
        },
        applyMask: function(t) {
            var a = jQuery(t);
            if (!t.isReady) return this;
            if (a.off("YTPTime.mask"), t.opt.mask)
                if ("string" == typeof t.opt.mask) a.YTPAddMask(t.opt.mask), t.actualMask = t.opt.mask;
                else if ("object" == typeof t.opt.mask) {
                for (var e in t.opt.mask)
                    if (t.opt.mask[e]) jQuery("<img/>").attr("src", t.opt.mask[e]);
                t.opt.mask[0] && a.YTPAddMask(t.opt.mask[0]), a.on("YTPTime.mask", function(e) {
                    for (var r in t.opt.mask) e.time == r && (t.opt.mask[r] ? (a.YTPAddMask(t.opt.mask[r]), t.actualMask = t.opt.mask[r]) : a.YTPRemoveMask())
                })
            }
        },
        toggleMask: function() {
            var e = this.get(0);
            if (!e.isReady) return this;
            var r = jQuery(e);
            return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this
        },
        manageProgress: function() {
            var e = this.get(0),
                r = jQuery("#controlBar_" + e.id),
                t = r.find(".mb_YTPProgress"),
                a = r.find(".mb_YTPLoaded"),
                o = r.find(".mb_YTPseekbar"),
                n = t.outerWidth(),
                i = Math.floor(e.player.getCurrentTime()),
                l = Math.floor(e.player.getDuration()),
                s = i * n / l,
                u = 100 * e.player.getVideoLoadedFraction();
            return a.css({
                left: 0,
                width: u + "%"
            }), o.css({
                left: 0,
                width: s
            }), {
                totalTime: l,
                currentTime: i
            }
        },
        buildControls: function(YTPlayer) {
            if (jQuery("#controlBar_" + YTPlayer.id).remove(), YTPlayer.opt.showControls) {
                if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                    YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                        whiteSpace: "noWrap",
                        position: YTPlayer.isBackground ? "fixed" : "absolute",
                        zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                    }).hide().on("click", function(e) {
                        e.stopPropagation()
                    });
                    var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                        playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function(e) {
                            e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay()
                        }),
                        MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function(e) {
                            e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume()
                        }),
                        volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                            display: "inline-block"
                        });
                    YTPlayer.volumeBar = volumeBar;
                    var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                        vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
                    vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
                    var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                            window.open(vURL, "viewOnYT")
                        }),
                        onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function(e) {
                            e.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)
                        }),
                        progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function(e) {
                            e.stopPropagation(), timeBar.css({
                                width: e.clientX - timeBar.offset().left
                            }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                                width: 0
                            });
                            var r = Math.floor(YTPlayer.player.getDuration());
                            YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                                width: 0
                            })
                        }),
                        loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                        timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                    progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                        initialval: YTPlayer.opt.vol,
                        scale: 100,
                        orientation: "h",
                        callback: function(e) {
                            0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                        }
                    })
                }
            } else YTPlayer.controlBar = !1
        },
        checkForState: function() {
            var YTPlayer = this.get(0),
                $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            var interval = 100;
            if (!jQuery.contains(document, YTPlayer)) return $YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
            jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function() {
                var $YTPlayer = jQuery(YTPlayer);
                if (YTPlayer.isReady) {
                    var prog = jQuery(YTPlayer).YTPManageProgress(),
                        stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                    if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                        var YTPEvent = jQuery.Event("YTPTime");
                        YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
                    }
                    if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
                        var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                        isOnScreen || 1 != YTPlayer.state ? isOnScreen && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause())
                    }
                    if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && 400 < YTPlayer.controlBar.outerWidth() && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 0 < YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || 0 < stopAt && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                        if (YTPlayer.isEnded) return;
                        if (YTPlayer.isEnded = !0, setTimeout(function() {
                                YTPlayer.isEnded = !1
                            }, 1e3), YTPlayer.isList) {
                            if (!YTPlayer.opt.loop || 0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                                YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                                var YTPEnd = jQuery.Event("YTPEnd");
                                return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
                            }
                        } else if (!YTPlayer.opt.loop || 0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = void 0, YTPlayer.state = 2;
                            var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                            return YTPlayer.opt.containment.css({
                                background: bgndURL,
                                backgroundSize: "cover"
                            }), jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                                opacity: 0
                            }, YTPlayer.opt.fadeOnStartTime, function() {
                                YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                var e = jQuery.Event("YTPEnd");
                                e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                                var r = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                YTPlayer.opt.containment.css({
                                    background: r,
                                    backgroundSize: "cover"
                                })
                            })
                        }
                        YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0)
                    }
                }
            }, interval)
        },
        checkForStart: function(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            if (jQuery.contains(document, YTPlayer)) {
                if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay)
                    if (YTPlayer.opt.addRaster) {
                        var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
                        YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN)
                    } else YTPlayer.overlay.removeClass(function(e, r) {
                        var t = r.split(" "),
                            a = [];
                        return jQuery.each(t, function(e, r) {
                            /raster.*/.test(r) && a.push(r)
                        }), a.push("retina"), a.join(" ")
                    });
                YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.preventTrigger = !0, YTPlayer.player.mute(), YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
                var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                return YTPlayer.preventTrigger = !0, YTPlayer.checkForStartAt = setInterval(function() {
                    YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
                    var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                    if (0 < YTPlayer.player.getDuration() && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                        YTPlayer.start_from_last = null, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(), $YTPlayer.YTPEnableFilters();
                        var YTPready = jQuery.Event("YTPReady");
                        if (YTPready.time = YTPlayer.currentTime, $YTPlayer.trigger(YTPready), YTPlayer.state = 2, YTPlayer.opt.mute ? YTPlayer.player.mute() : (YTPlayer.player.unMute(), YTPlayer.opt.autoPlay && console.debug("To make the video 'auto-play' you must mute the audio according with the new vendor policy")), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
                            var YTPStart = jQuery.Event("YTPStart");
                            YTPStart.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPStart), YTPlayer.isStarting = !1, "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function() {
                                $YTPlayer.YTPPlay()
                            }), $YTPlayer.YTPPlay()
                        } else YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), setTimeout(function() {
                            YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), console.debug("YTPPause"), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
                                opacity: 0
                            }), setTimeout(function() {
                                var e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                YTPlayer.wrapper.css({
                                    background: e,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                })
                            }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
                                opacity: 1
                            }, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({
                                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                            }, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1
                        }, 500), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                        YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function() {
                            YTPlayer.loading.fadeOut()
                        }, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
                    }
                    "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), 0 <= startAt && YTPlayer.player.seekTo(startAt, !0))
                }, 100), $YTPlayer
            }
            $YTPlayer.YTPPlayerDestroy()
        },
        getTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function(e) {
            var r = this.get(0);
            return jQuery.mbYTPlayer.formatTime(r.totalTime)
        },
        formatTime: function(e) {
            var r = Math.floor(e / 60),
                t = Math.floor(e - 60 * r);
            return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t)
        },
        setAnchor: function(e) {
            this.optimizeDisplay(e)
        },
        getAnchor: function() {
            return this.get(0).opt.anchor
        },
        setAbundance: function(e, r) {
            var t = this.get(0);
            return r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
        },
        getAbundance: function() {
            return this.get(0).opt.abundance
        },
        setOption: function(e, r) {
            var t = this.get(0);
            return t.opt[e] = r, this
        }
    }, jQuery.fn.optimizeDisplay = function(anchor, abundanceX) {
        var YTPlayer = this.get(0),
            vid = {},
            el = YTPlayer.wrapper,
            iframe = jQuery(YTPlayer.playerEl);
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(","),
            ab = abundanceX || YTPlayer.opt.abundance;
        if (YTPlayer.opt.optimizeDisplay) {
            var abundance = el.height() * ab,
                win = {};
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width + abundance, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height) / 2), vid.marginLeft = -abundance / 2;
            var lowest = vid.height < win.height;
            for (var a in lowest && (vid.height = win.height + abundance, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = -abundance / 2, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2)), YTPAlign)
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                        case "top":
                            vid.marginTop = -abundance / 2;
                            break;
                        case "bottom":
                            vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
                            break;
                        case "left":
                            vid.marginLeft = -abundance / 2;
                            break;
                        case "right":
                            vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2);
                            break;
                        default:
                            vid.width > win.width && (vid.marginLeft = -(vid.width - win.width) / 2 + abundance / 2)
                    }
                }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }, jQuery.shuffle = function(e) {
        for (var r = e.slice(), t = r.length, a = t; a--;) {
            var o = parseInt(Math.random() * t),
                n = r[a];
            r[a] = r[o], r[o] = n
        }
        return r
    }, jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance, jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption
}(jQuery, ytp);
var nAgt = navigator.userAgent;

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints,
        r = "ontouchstart" in document.createElement("div");
    return !(!e && !r)
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
        var e = {
            version: "Unknown version",
            name: "Unknown OS"
        };
        return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && navigator.appVersion.indexOf("Mobile") < 0 && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
    },
    nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));

function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, r) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e
}

function setFilter(e, r, t) {
    var a = uncamel(r),
        o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "", t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit), e[o + "filter"] += a + "(" + t + ") ", delete e[r]
} - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
        if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
        if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
    }
    return 0
}, jQuery.support.CSStransition = function() {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var r = jQuery.extend(!0, {}, e);
        for (var t in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", r) {
            if ("transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t], delete r[t]), "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t], delete r[t]), "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t], delete r[t]), "blur" === t && setFilter(r, "blur", e[t]), "brightness" === t && setFilter(r, "brightness", e[t]), "contrast" === t && setFilter(r, "contrast", e[t]), "grayscale" === t && setFilter(r, "grayscale", e[t]), "hueRotate" === t && setFilter(r, "hueRotate", e[t]), "invert" === t && setFilter(r, "invert", e[t]), "saturate" === t && setFilter(r, "saturate", e[t]), "sepia" === t && setFilter(r, "sepia", e[t]), "x" === t) {
                var a = jQuery.CSS.sfx + "transform";
                r[a] = r[a] || "", r[a] += " translateX(" + setUnit(e[t], "px") + ")", delete r[t]
            }
            "y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateY(" + setUnit(e[t], "px") + ")", delete r[t]), "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateZ(" + setUnit(e[t], "px") + ")", delete r[t]), "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotate(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateX(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateY(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")", delete r[t]), "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scale(" + setUnit(e[t], "") + ")", delete r[t]), "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleX(" + setUnit(e[t], "") + ")", delete r[t]), "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleY(" + setUnit(e[t], "") + ")", delete r[t]), "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleZ(" + setUnit(e[t], "") + ")", delete r[t]), "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skew(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewX(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewY(" + setUnit(e[t], "deg") + ")", delete r[t]), "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " perspective(" + setUnit(e[t], "px") + ")", delete r[t])
        }
        return r
    },
    getProp: function(e) {
        var r, t = [];
        for (r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
        return t.join(",")
    },
    animate: function(l, s, u, y, d) {
        return this.each(function() {
            function e() {
                r.called = !0, r.CSSAIsRunning = !1, t.off(jQuery.CSS.transitionEnd + "." + r.id), clearTimeout(r.timeout), t.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof d && d.apply(r), "function" == typeof r.CSSqueue && (r.CSSqueue(), r.CSSqueue = null)
            }
            var r = this,
                t = jQuery(this);
            r.id = r.id || "CSSA_" + (new Date).getTime();
            var a = a || {
                type: "noEvent"
            };
            if (r.CSSAIsRunning && r.eventType == a.type && !jQuery.browser.msie && jQuery.browser.version <= 9) r.CSSqueue = function() {
                t.CSSAnimate(l, s, u, y, d)
            };
            else if (r.CSSqueue = null, r.eventType = a.type, 0 !== t.length && l) {
                if (l = jQuery.normalizeCss(l), r.CSSAIsRunning = !0, "function" == typeof s && (d = s, s = jQuery.fx.speeds._default), "function" == typeof u && (y = u, u = 0), "string" == typeof u && (d = u, u = 0), "function" == typeof y && (d = y, y = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof s)
                    for (var o in jQuery.fx.speeds) {
                        if (s == o) {
                            s = jQuery.fx.speeds[o];
                            break
                        }
                        s = jQuery.fx.speeds._default
                    }
                if (s || (s = jQuery.fx.speeds._default), "string" == typeof d && (y = d, d = null), jQuery.support.CSStransition) {
                    var n = {
                        default: "ease",
                        in: "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    n[y] && (y = n[y]), t.off(jQuery.CSS.transitionEnd + "." + r.id), n = jQuery.CSS.getProp(l);
                    var i = {};
                    jQuery.extend(i, l), i[jQuery.CSS.sfx + "transition-property"] = n, i[jQuery.CSS.sfx + "transition-duration"] = s + "ms", i[jQuery.CSS.sfx + "transition-delay"] = u + "ms", i[jQuery.CSS.sfx + "transition-timing-function"] = y, setTimeout(function() {
                        t.one(jQuery.CSS.transitionEnd + "." + r.id, e), t.css(i)
                    }, 1), r.timeout = setTimeout(function() {
                        r.called || !d ? (r.called = !1, r.CSSAIsRunning = !1) : (t.css(jQuery.CSS.sfx + "transition", ""), d.apply(r), r.CSSAIsRunning = !1, "function" == typeof r.CSSqueue && (r.CSSqueue(), r.CSSqueue = null))
                    }, s + u + 10)
                } else {
                    for (n in l) "transform" === n && delete l[n], "filter" === n && delete l[n], "transform-origin" === n && delete l[n], "auto" === l[n] && delete l[n], "x" === n && (a = l[n], l[o = "left"] = a, delete l[n]), "y" === n && (a = l[n], l[o = "top"] = a, delete l[n]), "-ms-transform" !== n && "-ms-filter" !== n || delete l[n];
                    t.delay(u).animate(l, s, d)
                }
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(t) {
    return this.each(function() {
        var e = jQuery(this),
            r = jQuery.normalizeCss(t);
        e.css(r)
    })
};
var nAgt = navigator.userAgent;

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints,
        r = "ontouchstart" in document.createElement("div");
    return !(!e && !r)
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
        var e = {
            version: "Unknown version",
            name: "Unknown OS"
        };
        return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && navigator.appVersion.indexOf("Mobile") < 0 && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
    },
    nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, r) {
        if ("stringstring" != typeof e + typeof r) return !1;
        for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
            if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
            if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
        }
        return 0
    },
    function(o) {
        o.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: o.browser.mobile ? "touchstart" : "mousedown",
                end: o.browser.mobile ? "touchend" : "mouseup",
                move: o.browser.mobile ? "touchmove" : "mousemove"
            },
            init: function(a) {
                return this.each(function() {
                    var r = this,
                        t = o(r);
                    t.addClass("simpleSlider"), r.opt = {}, o.extend(r.opt, o.simpleSlider.defaults, a), o.extend(r.opt, t.data());
                    var e = "h" == r.opt.orientation ? "horizontal" : "vertical";
                    e = o("<div/>").addClass("level").addClass(e), t.prepend(e), r.level = e, t.css({
                        cursor: "default"
                    }), "auto" == r.opt.scale && (r.opt.scale = o(r).outerWidth()), t.updateSliderVal(), r.opt.readonly || (t.on(o.simpleSlider.events.start, function(e) {
                        o.browser.mobile && (e = e.changedTouches[0]), r.canSlide = !0, t.updateSliderVal(e), "h" == r.opt.orientation ? t.css({
                            cursor: "col-resize"
                        }) : t.css({
                            cursor: "row-resize"
                        }), o.browser.mobile || (e.preventDefault(), e.stopPropagation())
                    }), o(document).on(o.simpleSlider.events.move, function(e) {
                        o.browser.mobile && (e = e.changedTouches[0]), r.canSlide && (o(document).css({
                            cursor: "default"
                        }), t.updateSliderVal(e), o.browser.mobile || (e.preventDefault(), e.stopPropagation()))
                    }).on(o.simpleSlider.events.end, function() {
                        o(document).css({
                            cursor: "auto"
                        }), r.canSlide = !1, t.css({
                            cursor: "auto"
                        })
                    }))
                })
            },
            updateSliderVal: function(e) {
                var r = this.get(0);
                if (r.opt) {
                    r.opt.initialval = "number" == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);
                    var t = o(r).outerWidth(),
                        a = o(r).outerHeight();
                    r.x = "object" == typeof e ? e.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof e ? e * t / r.opt.scale : r.opt.initialval * t / r.opt.scale, r.y = "object" == typeof e ? e.clientY + document.body.scrollTop - this.offset().top : "number" == typeof e ? (r.opt.scale - r.opt.initialval - e) * a / r.opt.scale : r.opt.initialval * a / r.opt.scale, r.y = this.outerHeight() - r.y, r.scaleX = r.x * r.opt.scale / t, r.scaleY = r.y * r.opt.scale / a, r.outOfRangeX = r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0, r.outOfRangeY = r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0, r.outOfRange = "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY, r.value = void 0 !== e ? "h" == r.opt.orientation ? r.x >= this.outerWidth() ? r.opt.scale : r.x <= 0 ? 0 : r.scaleX : r.y >= this.outerHeight() ? r.opt.scale : r.y <= 0 ? 0 : r.scaleY : "h" == r.opt.orientation ? r.scaleX : r.scaleY, "h" == r.opt.orientation ? r.level.width(Math.floor(100 * r.x / t) + "%") : r.level.height(Math.floor(100 * r.y / a)), "function" == typeof r.opt.callback && r.opt.callback(r)
                }
            }
        }, o.fn.simpleSlider = o.simpleSlider.init, o.fn.updateSliderVal = o.simpleSlider.updateSliderVal
    }(jQuery),
    function(r) {
        r.mbCookie = {
            set: function(e, r, t, a) {
                "object" == typeof r && (r = JSON.stringify(r)), a = a ? "; domain=" + a : "";
                var o = new Date,
                    n = "";
                0 < t && (o.setTime(o.getTime() + 864e5 * t), n = "; expires=" + o.toGMTString()), document.cookie = e + "=" + r + n + "; path=/" + a
            },
            get: function(r) {
                r += "=";
                for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
                    for (var a = e[t];
                        " " == a.charAt(0);) a = a.substring(1, a.length);
                    if (0 == a.indexOf(r)) try {
                        return JSON.parse(a.substring(r.length, a.length))
                    } catch (e) {
                        return a.substring(r.length, a.length)
                    }
                }
                return null
            },
            remove: function(e) {
                r.mbCookie.set(e, "", -1)
            }
        }, r.mbStorage = {
            set: function(e, r) {
                "object" == typeof r && (r = JSON.stringify(r)), localStorage.setItem(e, r)
            },
            get: function(r) {
                if (!localStorage[r]) return null;
                try {
                    return JSON.parse(localStorage[r])
                } catch (e) {
                    return localStorage[r]
                }
            },
            remove: function(e) {
                e ? localStorage.removeItem(e) : localStorage.clear()
            }
        }
    }(jQuery);


/*-------------------------------------------------------------
    14. Maplace.js
---------------------------------------------------------------*/

/**
 * Maplace.js
 *
 * Copyright (c) 2013 Daniele Moraschi
 * Licensed under the MIT license
 * For all details and documentation:
 * http://maplacejs.com
 *
 * @version  0.2.10
 * @preserve
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.Maplace = b(a.jQuery)
}(this, function(a) {
    "use strict";

    function b(b) {
        this.VERSION = "0.2.10", this.loaded = !1, this.markers = [], this.circles = [], this.oMap = !1, this.view_all_key = "all", this.infowindow = null, this.maxZIndex = 0, this.ln = 0, this.oMap = !1, this.oBounds = null, this.map_div = null, this.canvas_map = null, this.controls_wrapper = null, this.current_control = null, this.current_index = null, this.Polyline = null, this.Polygon = null, this.Fusion = null, this.directionsService = null, this.directionsDisplay = null, this.o = {
            debug: !1,
            map_div: "#gmap",
            controls_div: "#controls",
            generate_controls: !0,
            controls_type: "dropdown",
            controls_cssclass: "",
            controls_title: "",
            controls_on_map: !0,
            controls_applycss: !0,
            controls_position: google.maps.ControlPosition.RIGHT_TOP,
            type: "marker",
            view_all: !0,
            view_all_text: "View All",
            pan_on_click: !0,
            start: 0,
            locations: [],
            shared: {},
            map_options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            stroke_options: {
                strokeColor: "#0000FF",
                strokeOpacity: .8,
                strokeWeight: 2,
                fillColor: "#0000FF",
                fillOpacity: .4
            },
            directions_options: {
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                optimizeWaypoints: !1,
                provideRouteAlternatives: !1,
                avoidHighways: !1,
                avoidTolls: !1
            },
            circle_options: {
                radius: 100,
                visible: !0
            },
            styles: {},
            fusion_options: {},
            directions_panel: null,
            draggable: !1,
            editable: !1,
            show_infowindows: !0,
            show_markers: !0,
            infowindow_type: "bubble",
            listeners: {},
            beforeViewAll: function() {},
            afterViewAll: function() {},
            beforeShow: function(a, b, c) {},
            afterShow: function(a, b, c) {},
            afterCreateMarker: function(a, b, c) {},
            beforeCloseInfowindow: function(a, b) {},
            afterCloseInfowindow: function(a, b) {},
            beforeOpenInfowindow: function(a, b, c) {},
            afterOpenInfowindow: function(a, b, c) {},
            afterRoute: function(a, b, c) {},
            onPolylineClick: function(a) {},
            onPolygonClick: function(a) {},
            circleRadiusChanged: function(a, b, c) {},
            circleCenterChanged: function(a, b, c) {},
            drag: function(a, b, c) {},
            dragEnd: function(a, b, c) {},
            dragStart: function(a, b, c) {}
        }, this.AddControl("dropdown", c), this.AddControl("list", d), b && "directions" === b.type && (!b.show_markers && (b.show_markers = !1), !b.show_infowindows && (b.show_infowindows = !1)), a.extend(!0, this.o, b)
    }
    var c, d;
    return c = {
        activateCurrent: function(a) {
            this.html_element.find("select").val(a)
        },
        getHtml: function() {
            var b, c, d = this,
                e = "";
            if (this.ln > 1) {
                for (e += '<select class="dropdown controls ' + this.o.controls_cssclass + '">', this.ShowOnMenu(this.view_all_key) && (e += '<option value="' + this.view_all_key + '">' + this.o.view_all_text + "</option>"), c = 0; c < this.ln; c += 1) this.ShowOnMenu(c) && (e += '<option value="' + (c + 1) + '">' + (this.o.locations[c].title || "#" + (c + 1)) + "</option>");
                e += "</select>", e = a(e).bind("change", function() {
                    d.ViewOnMap(this.value)
                })
            }
            return b = this.o.controls_title, this.o.controls_title && (b = a('<div class="controls_title"></div>').css(this.o.controls_applycss ? {
                fontWeight: "bold",
                fontSize: this.o.controls_on_map ? "12px" : "inherit",
                padding: "3px 10px 5px 0"
            } : {}).append(this.o.controls_title)), this.html_element = a('<div class="wrap_controls"></div>').append(b).append(e), this.html_element
        }
    }, d = {
        html_a: function(b, c, d) {
            var e = this,
                f = c || b + 1,
                g = d || this.o.locations[b].title,
                h = a('<a data-load="' + f + '" id="ullist_a_' + f + '" href="#' + f + '" title="' + g + '"><span>' + (g || "#" + (b + 1)) + "</span></a>");
            return h.css(this.o.controls_applycss ? {
                color: "#666",
                display: "block",
                padding: "5px",
                fontSize: this.o.controls_on_map ? "12px" : "inherit",
                textDecoration: "none"
            } : {}), h.on("click", function(b) {
                b.preventDefault();
                var c = a(this).attr("data-load");
                e.ViewOnMap(c)
            }), h
        },
        activateCurrent: function(a) {
            this.html_element.find("li").removeClass("active"), this.html_element.find("#ullist_a_" + a).parent().addClass("active")
        },
        getHtml: function() {
            var b, c, e = a("<ul class='ullist controls " + this.o.controls_cssclass + "'></ul>").css(this.o.controls_applycss ? {
                margin: 0,
                padding: 0,
                listStyleType: "none"
            } : {});
            for (this.ShowOnMenu(this.view_all_key) && e.append(a("<li></li>").append(d.html_a.call(this, !1, this.view_all_key, this.o.view_all_text))), c = 0; c < this.ln; c++) this.ShowOnMenu(c) && e.append(a("<li></li>").append(d.html_a.call(this, c)));
            return b = this.o.controls_title, this.o.controls_title && (b = a('<div class="controls_title"></div>').css(this.o.controls_applycss ? {
                fontWeight: "bold",
                padding: "3px 10px 5px 0",
                fontSize: this.o.controls_on_map ? "12px" : "inherit"
            } : {}).append(this.o.controls_title)), this.html_element = a('<div class="wrap_controls"></div>').append(b).append(e), this.html_element
        }
    }, b.prototype.controls = {}, b.prototype.create_objMap = function() {
        var b, c = this,
            d = 0;
        for (b in this.o.styles) this.o.styles.hasOwnProperty(b) && (0 === d && (this.o.map_options.mapTypeControlOptions = {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }), d++, this.o.map_options.mapTypeControlOptions.mapTypeIds.push("map_style_" + d));
        if (this.loaded) c.oMap.setOptions(this.o.map_options);
        else try {
            this.map_div.css({
                position: "relative",
                overflow: "hidden"
            }), this.canvas_map = a("<div>").addClass("canvas_map").css({
                width: "100%",
                height: "100%"
            }).appendTo(this.map_div), this.oMap = new google.maps.Map(this.canvas_map.get(0), this.o.map_options)
        } catch (e) {
            this.debug("create_objMap::" + this.map_div.selector, e.toString())
        }
        d = 0;
        for (b in this.o.styles) this.o.styles.hasOwnProperty(b) && (d++, this.oMap.mapTypes.set("map_style_" + d, new google.maps.StyledMapType(this.o.styles[b], {
            name: b
        })), this.oMap.setMapTypeId("map_style_" + d))
    }, b.prototype.add_markers_to_objMap = function() {
        var a, b, c = this.o.type || "marker";
        switch (c) {
            case "marker":
                for (a = 0; a < this.ln; a++) b = this.create_objPoint(a), this.create.marker.call(this, a, b);
                break;
            default:
                this.create[c].apply(this)
        }
    }, b.prototype.create_objPoint = function(b) {
        var c = a.extend({}, this.o.locations[b]),
            d = void 0 === c.visible ? void 0 : c.visible;
        return !c.type && (c.type = this.o.type), c.map = this.oMap, c.position = new google.maps.LatLng(c.lat, c.lon), c.zIndex = void 0 === c.zIndex ? 1e4 : c.zIndex + 100, c.visible = void 0 === d ? this.o.show_markers : d, this.o.maxZIndex = c.zIndex > this.maxZIndex ? c.zIndex : this.maxZIndex, c.image && (c.icon = new google.maps.MarkerImage(c.image, new google.maps.Size(c.image_w || 32, c.image_h || 32), new google.maps.Point(0, 0), new google.maps.Point((c.image_w || 32) / 2, (c.image_h || 32) / 2))), c
    }, b.prototype.create_objCircle = function(b) {
        var c, d, e;
        return e = a.extend({}, b), c = a.extend({}, this.o.stroke_options), d = a.extend({}, this.o.circle_options), a.extend(c, b.stroke_options || {}), a.extend(e, c), a.extend(d, b.circle_options || {}), a.extend(e, d), e.center = b.position, e.draggable = !1, e.zIndex = b.zIndex > 0 ? b.zIndex - 10 : 1, e
    }, b.prototype.add_markerEv = function(a, b, c) {
        var d = this;
        google.maps.event.addListener(c, "click", function(e) {
            d.CloseInfoWindow(), d.o.beforeShow.call(d, a, b, c), d.o.show_infowindows && b.show_infowindow !== !1 && d.open_infowindow(a, c, e), d.o.pan_on_click && b.pan_on_click !== !1 && (d.oMap.panTo(b.position), b.zoom && d.oMap.setZoom(b.zoom)), d.current_control && d.o.generate_controls && d.current_control.activateCurrent && d.current_control.activateCurrent.call(d, a + 1), d.current_index = a, d.o.afterShow.call(d, a, b, c)
        }), b.draggable && this.add_dragEv(a, b, c)
    }, b.prototype.add_circleEv = function(a, b, c) {
        var d = this;
        google.maps.event.addListener(c, "click", function() {
            d.ViewOnMap(a + 1)
        }), google.maps.event.addListener(c, "center_changed", function() {
            d.o.circleCenterChanged.call(d, a, b, c)
        }), google.maps.event.addListener(c, "radius_changed", function() {
            d.o.circleRadiusChanged.call(d, a, b, c)
        }), b.draggable && this.add_dragEv(a, b, c)
    }, b.prototype.add_dragEv = function(a, b, c) {
        var d = this;
        google.maps.event.addListener(c, "drag", function(e) {
            var f, g;
            if (c.getPosition) f = c.getPosition();
            else {
                if (!c.getCenter) return;
                f = c.getCenter()
            }
            if (d.circles[a] && d.circles[a].setCenter(f), d.Polyline ? g = "Polyline" : d.Polygon && (g = "Polygon"), g) {
                for (var h = d[g].getPath(), i = h.getArray(), j = [], k = 0; k < i.length; ++k) j[k] = a === k ? new google.maps.LatLng(f.lat(), f.lng()) : new google.maps.LatLng(i[k].lat(), i[k].lng());
                d[g].setPath(new google.maps.MVCArray(j)), d.add_polyEv(g)
            }
            d.o.drag.call(d, a, b, c)
        }), google.maps.event.addListener(c, "dragend", function() {
            d.o.dragEnd.call(d, a, b, c)
        }), google.maps.event.addListener(c, "dragstart", function() {
            d.o.dragStart.call(d, a, b, c)
        }), google.maps.event.addListener(c, "center_changed", function() {
            d.markers[a] && c.getCenter && d.markers[a].setPosition(c.getCenter()), d.o.drag.call(d, a, b, c)
        })
    }, b.prototype.add_polyEv = function(a) {
        var b = this;
        google.maps.event.addListener(this[a].getPath(), "set_at", function(c, d) {
            b.trigger_polyEv(a, c, d)
        }), google.maps.event.addListener(this[a].getPath(), "insert_at", function(c, d) {
            b.trigger_polyEv(a, c, d)
        })
    }, b.prototype.trigger_polyEv = function(a, b, c) {
        var d = this[a].getPath().getAt(b),
            e = new google.maps.LatLng(d.lat(), d.lng());
        this.markers[b] && this.markers[b].setPosition(e), this.circles[b] && this.circles[b].setCenter(e), this.o["on" + a + "Changed"](b, c, this[a].getPath().getArray())
    }, b.prototype.create = {
        marker: function(a, b, c) {
            if ("circle" === b.type && !c) {
                var d = this.create_objCircle(b);
                b.visible || (d.draggable = b.draggable), c = new google.maps.Circle(d), this.add_circleEv(a, d, c), this.circles[a] = c
            }
            return b.type = "marker", c = new google.maps.Marker(b), this.add_markerEv(a, b, c), this.oBounds.extend(b.position), this.markers[a] = c, this.o.afterCreateMarker.call(this, a, b, c), c
        },
        circle: function() {
            var a, b, c, d;
            for (a = 0; a < this.ln; a++) b = this.create_objPoint(a), "circle" === b.type && (c = this.create_objCircle(b), b.visible || (c.draggable = b.draggable), d = new google.maps.Circle(c), this.add_circleEv(a, c, d), this.circles[a] = d), b.type = "marker", this.create.marker.call(this, a, b, d)
        },
        polyline: function() {
            var b, c, d = a.extend({}, this.o.stroke_options);
            for (d.path = [], d.draggable = this.o.draggable, d.editable = this.o.editable, d.map = this.oMap, d.zIndex = this.o.maxZIndex + 100, b = 0; b < this.ln; b++) c = this.create_objPoint(b), this.create.marker.call(this, b, c), d.path.push(c.position);
            this.Polyline ? this.Polyline.setOptions(d) : this.Polyline = new google.maps.Polyline(d), this.add_polyEv("Polyline")
        },
        polygon: function() {
            var b, c, d = this,
                e = a.extend({}, this.o.stroke_options);
            for (e.path = [], e.draggable = this.o.draggable, e.editable = this.o.editable, e.map = this.oMap, e.zIndex = this.o.maxZIndex + 100, b = 0; b < this.ln; b++) c = this.create_objPoint(b), this.create.marker.call(this, b, c), e.path.push(c.position);
            this.Polygon ? this.Polygon.setOptions(e) : this.Polygon = new google.maps.Polygon(e), google.maps.event.addListener(this.Polygon, "click", function(a) {
                d.o.onPolygonClick.call(d, a)
            }), this.add_polyEv("Polygon")
        },
        fusion: function() {
            this.o.fusion_options.styles = [this.o.stroke_options], this.o.fusion_options.map = this.oMap, this.Fusion ? this.Fusion.setOptions(this.o.fusion_options) : this.Fusion = new google.maps.FusionTablesLayer(this.o.fusion_options)
        },
        directions: function() {
            var b, c, d, e, f, g = this,
                h = [],
                i = 0;
            for (b = 0; b < this.ln; b++) c = this.create_objPoint(b), 0 === b ? e = c.position : b === this.ln - 1 ? f = c.position : (d = this.o.locations[b].stopover === !0, h.push({
                location: c.position,
                stopover: d
            })), this.create.marker.call(this, b, c);
            this.o.directions_options.origin = e, this.o.directions_options.destination = f, this.o.directions_options.waypoints = h, this.directionsService || (this.directionsService = new google.maps.DirectionsService), this.directionsDisplay ? this.directionsDisplay.setOptions({
                draggable: this.o.draggable
            }) : this.directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: this.o.draggable
            }), this.directionsDisplay.setMap(this.oMap), this.o.directions_panel && (this.o.directions_panel = a(this.o.directions_panel), this.directionsDisplay.setPanel(this.o.directions_panel.get(0))), this.o.draggable && google.maps.event.addListener(this.directionsDisplay, "directions_changed", function() {
                var a = g.directionsDisplay.getDirections();
                i = g.compute_distance(g.directionsDisplay.directions), g.o.afterRoute.call(g, i, a.status, a)
            }), this.directionsService.route(this.o.directions_options, function(a, b) {
                b === google.maps.DirectionsStatus.OK && (i = g.compute_distance(a), g.directionsDisplay.setDirections(a)), g.o.afterRoute.call(g, i, b, a)
            })
        }
    }, b.prototype.compute_distance = function(a) {
        var b, c = 0,
            d = a.routes[0],
            e = d.legs.length;
        for (b = 0; b < e; b++) c += d.legs[b].distance.value;
        return c
    }, b.prototype.type_to_open = {
        bubble: function(a) {
            var b = this,
                c = {
                    content: a.html || ""
                };
            a.infoWindowMaxWidth && (c.maxWidth = a.infoWindowMaxWidth), this.infowindow = new google.maps.InfoWindow(c), google.maps.event.addListener(this.infowindow, "closeclick", function() {
                b.CloseInfoWindow()
            })
        }
    }, b.prototype.open_infowindow = function(a, b, c) {
        var d = this.o.locations[a],
            e = this.o.infowindow_type;
        d.html && this.type_to_open[e] && (this.o.beforeOpenInfowindow.call(this, a, d, b), this.type_to_open[e].call(this, d), this.infowindow.open(this.oMap, b), this.o.afterOpenInfowindow.call(this, a, d, b))
    }, b.prototype.get_html_controls = function() {
        return this.controls[this.o.controls_type] && this.controls[this.o.controls_type].getHtml ? (this.current_control = this.controls[this.o.controls_type], this.current_control.getHtml.apply(this)) : ""
    }, b.prototype.generate_controls = function() {
        if (!this.o.controls_on_map) return this.controls_wrapper.empty(), void this.controls_wrapper.append(this.get_html_controls());
        var b = a('<div class="on_gmap ' + this.o.controls_type + ' gmap_controls"></div>').css(this.o.controls_applycss ? {
                margin: "5px"
            } : {}),
            c = a(this.get_html_controls()).css(this.o.controls_applycss ? {
                background: "#fff",
                padding: "5px",
                border: "1px solid #eee",
                boxShadow: "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px",
                maxHeight: this.map_div.find(".canvas_map").outerHeight() - 80,
                minWidth: 100,
                overflowY: "auto",
                overflowX: "hidden"
            } : {});
        b.append(c), this.oMap.controls[this.o.controls_position].clear(), this.oMap.controls[this.o.controls_position].push(b.get(0))
    }, b.prototype.init_map = function() {
        var a = this;
        this.Polyline && this.Polyline.setMap(null), this.Polygon && this.Polygon.setMap(null), this.Fusion && this.Fusion.setMap(null), this.directionsDisplay && this.directionsDisplay.setMap(null);
        for (var b = this.markers.length - 1; b >= 0; b -= 1) try {
            this.markers[b] && this.markers[b].setMap(null)
        } catch (c) {
            a.debug("init_map::markers::setMap", c.stack)
        }
        this.markers.length = 0, this.markers = [];
        for (var d = this.circles.length - 1; d >= 0; d -= 1) try {
            this.circles[d] && this.circles[d].setMap(null)
        } catch (c) {
            a.debug("init_map::circles::setMap", c.stack)
        }
        this.circles.length = 0, this.circles = [], this.o.controls_on_map && this.oMap.controls && this.oMap.controls[this.o.controls_position].forEach(function(b, c) {
            try {
                a.oMap.controls[this.o.controls_position].removeAt(c)
            } catch (d) {
                a.debug("init_map::removeAt", d.stack)
            }
        }), this.oBounds = new google.maps.LatLngBounds
    }, b.prototype.perform_load = function() {
        this.CloseInfoWindow(), 1 === this.ln ? (this.o.map_options.set_center ? this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1])) : (this.oMap.fitBounds(this.oBounds), this.ViewOnMap(1)), this.o.map_options.zoom && this.oMap.setZoom(this.o.map_options.zoom)) : 0 === this.ln ? (this.o.map_options.set_center ? this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1])) : this.oMap.fitBounds(this.oBounds), this.oMap.setZoom(this.o.map_options.zoom || 1)) : (this.oMap.fitBounds(this.oBounds), "number" == typeof(this.o.start - 0) && this.o.start > 0 && this.o.start <= this.ln ? this.ViewOnMap(this.o.start) : this.o.map_options.set_center ? this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1])) : this.ViewOnMap(this.view_all_key), this.o.map_options.zoom && this.oMap.setZoom(this.o.map_options.zoom))
    }, b.prototype.debug = function(a, b) {
        return this.o.debug && console.log(a, b), this
    }, b.prototype.AddControl = function(a, b) {
        return a && b ? (this.controls[a] = b, this) : (self.debug("AddControl", 'Missing "name" and "func" callback.'), !1)
    }, b.prototype.CloseInfoWindow = function() {
        return this.infowindow && (this.current_index || 0 === this.current_index) && (this.o.beforeCloseInfowindow.call(this, this.current_index, this.o.locations[this.current_index]), this.infowindow.close(), this.infowindow = null, this.o.afterCloseInfowindow.call(this, this.current_index, this.o.locations[this.current_index])), this
    }, b.prototype.ShowOnMenu = function(a) {
        if (a === this.view_all_key && this.o.view_all && this.ln > 1) return !0;
        if (a = parseInt(a, 10), "number" == typeof(a - 0) && a >= 0 && a < this.ln) {
            var b = this.o.locations[a].on_menu !== !1;
            if (b) return !0
        }
        return !1
    }, b.prototype.ViewOnMap = function(a) {
        if (a === this.view_all_key) this.o.beforeViewAll.call(this), this.current_index = a, this.o.locations.length > 0 && this.o.generate_controls && this.current_control && this.current_control.activateCurrent && this.current_control.activateCurrent.apply(this, [a]), this.oMap.fitBounds(this.oBounds), this.o.afterViewAll.call(this);
        else if (a = parseInt(a, 10), "number" == typeof(a - 0) && a > 0 && a <= this.ln) try {
            google.maps.event.trigger(this.markers[a - 1], "click")
        } catch (b) {
            this.debug("ViewOnMap::trigger", b.stack)
        }
        return this
    }, b.prototype.SetLocations = function(a, b) {
        return this.o.locations = a, b && this.Load(), this
    }, b.prototype.AddLocations = function(b, c) {
        var d = this;
        return a.isArray(b) && a.each(b, function(a, b) {
            d.o.locations.push(b)
        }), a.isPlainObject(b) && this.o.locations.push(b), c && this.Load(), this
    }, b.prototype.AddLocation = function(b, c, d) {
        return a.isPlainObject(b) && this.o.locations.splice(c, 0, b), d && this.Load(), this
    }, b.prototype.RemoveLocations = function(b, c) {
        var d = this,
            e = 0;
        return a.isArray(b) ? a.each(b, function(a, b) {
            b - e < d.ln && d.o.locations.splice(b - e, 1), e++
        }) : b < this.ln && this.o.locations.splice(b, 1), c && this.Load(), this
    }, b.prototype.Loaded = function() {
        return this.loaded
    }, b.prototype._init = function() {
        this.ln = this.o.locations.length;
        for (var b = 0; b < this.ln; b++) {
            var c = a.extend({}, this.o.shared);
            this.o.locations[b] = a.extend(c, this.o.locations[b]), this.o.locations[b].html && (this.o.locations[b].html = this.o.locations[b].html.replace("%index", b + 1), this.o.locations[b].html = this.o.locations[b].html.replace("%title", this.o.locations[b].title || ""))
        }
        return this.map_div = a(this.o.map_div), this.controls_wrapper = a(this.o.controls_div), this
    }, b.prototype.Load = function(b) {
        a.extend(!0, this.o, b), b && b.locations && (this.o.locations = b.locations), this._init(), this.o.visualRefresh === !1 ? google.maps.visualRefresh = !1 : google.maps.visualRefresh = !0, this.init_map(), this.create_objMap(), this.add_markers_to_objMap(), this.ln > 1 && this.o.generate_controls || this.o.force_generate_controls ? (this.o.generate_controls = !0, this.generate_controls()) : this.o.generate_controls = !1;
        var c = this;
        if (this.loaded) this.perform_load();
        else {
            google.maps.event.addListenerOnce(this.oMap, "idle", function() {
                c.perform_load()
            });
            for (var d in this.o.listeners) this.o.listeners.hasOwnProperty(d) && google.maps.event.addListener(this.oMap, d, this.o.listeners[d])
        }
        return this.loaded = !0, this
    }, b
});



/*-------------------------------------------------------------
    15. Vimeo Player
---------------------------------------------------------------*/

/*jquery.mb.vimeo_player 18-05-2019
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2019. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints,
        b = "ontouchstart" in document.createElement("div");
    return !(!a && !b)
}

function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints,
        b = "ontouchstart" in document.createElement("div");
    return !(!a && !b)
}
var get_vimeo_videoID = function(a) {
    var b;
    return b = a.indexOf("vimeo.com") > 0 ? a.substr(a.lastIndexOf("/") + 1, a.length) : a.length > 15 ? null : a
};
! function($) {
    jQuery.vimeo_player = {
        name: "jquery.mb.vimeo_player",
        author: "Matteo Bicocchi (pupunzi)",
        version: "1.1.9",
        build: "546",
        defaults: {
            containment: "body",
            ratio: 16 / 9,
            videoURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            fadeTime: 1e3,
            vol: 5,
            addRaster: !1,
            opacity: 1,
            mute: !0,
            loop: !0,
            showControls: !0,
            show_vimeo_logo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            playOnMobile: !0,
            mobileFallbackImage: null,
            gaTrack: !1,
            optimizeDisplay: !0,
            mask: !1,
            align: "center,center",
            onReady: function(a) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            fullscreen: "O",
            showSite: "R",
            logo: "V"
        },
        buildPlayer: function(options) {
            var isIframe = function() {
                    var a = !1;
                    try {
                        self.location.href != top.location.href && (a = !0)
                    } catch (b) {
                        a = !0
                    }
                    return a
                },
                script = document.createElement("script");
            return script.src = "//player.vimeo.com/api/player.js", script.onload = function() {
                jQuery(document).trigger("vimeo_api_loaded")
            }, document.head.appendChild(script), this.each(function() {
                var vimeo_player = this,
                    $vimeo_player = jQuery(vimeo_player);
                vimeo_player.loop = 0, vimeo_player.opt = {}, vimeo_player.state = {}, vimeo_player.id = vimeo_player.id || "YTP_" + (new Date).getTime(), $vimeo_player.addClass("vimeo_player");
                var property = $vimeo_player.data("property") && "string" == typeof $vimeo_player.data("property") ? eval("(" + $vimeo_player.data("property") + ")") : $vimeo_player.data("property");
                if (jQuery.extend(vimeo_player.opt, jQuery.vimeo_player.defaults, options, property), vimeo_player.opt.ratio = "auto" == vimeo_player.opt.ratio ? 16 / 9 : vimeo_player.opt.ratio, eval(vimeo_player.opt.loop) && (vimeo_player.opt.loop = 9999), vimeo_player.isRetina = window.retina || window.devicePixelRatio > 1, vimeo_player.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), vimeo_player.canGoFullScreen || (vimeo_player.opt.realfullscreen = !1), vimeo_player.isAlone = !1, vimeo_player.hasFocus = !0, vimeo_player.videoID = this.opt.videoURL ? get_vimeo_videoID(this.opt.videoURL) : !!$vimeo_player.attr("href") && get_vimeo_videoID($vimeo_player.attr("href")), vimeo_player.isSelf = "self" == vimeo_player.opt.containment, vimeo_player.opt.containment = "self" == vimeo_player.opt.containment ? jQuery(this) : jQuery(vimeo_player.opt.containment), vimeo_player.opt.vol = vimeo_player.opt.vol / 10, vimeo_player.isBackground = vimeo_player.opt.containment.is("body"), !vimeo_player.isBackground || !vimeo_player.backgroundIsInited) {
                    vimeo_player.playOnMobile = vimeo_player.opt.playOnMobile && jQuery.browser.mobile, vimeo_player.isSelf || $vimeo_player.hide();
                    var overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("vimeo_player_overlay");
                    vimeo_player.isSelf && overlay.on("click", function() {
                        $vimeo_player.togglePlay()
                    });
                    var playerID = "vimeo_player_" + vimeo_player.id,
                        wrapper = jQuery("<div/>").addClass("vimeo_player_wrapper").attr("id", "vimeo_player_wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), vimeo_player.wrapper = wrapper, vimeo_player.opt.containment.prepend(wrapper), vimeo_player.opt.mobileFallbackImage && jQuery.browser.mobile) return wrapper.css({
                        backgroundImage: "url(" + vimeo_player.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: 1
                    }), setTimeout(function() {
                        var a = jQuery.Event("VPFallback");
                        $vimeo_player.trigger(a)
                    }, 1e3), $vimeo_player.hide(), $vimeo_player;
                    vimeo_player.opt.containment.children().not("script, style").each(function() {
                        "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                    }), vimeo_player.isBackground ? (jQuery("body").css({
                        boxSizing: "border-box"
                    }), wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    })) : "static" == vimeo_player.opt.containment.css("position") && vimeo_player.opt.containment.css({
                        position: "relative"
                    }), vimeo_player.videoWrapper = wrapper, vimeo_player.overlay = overlay, vimeo_player.isBackground || overlay.on("mouseenter", function() {
                        vimeo_player.controlBar && vimeo_player.controlBar.length && vimeo_player.controlBar.addClass("visible")
                    }).on("mouseleave", function() {
                        vimeo_player.controlBar && vimeo_player.controlBar.length && vimeo_player.controlBar.removeClass("visible")
                    }), jQuery(document).on("vimeo_api_loaded", function() {
                        var vURL = "//player.vimeo.com/video/" + vimeo_player.videoID,
                            options = {
                                id: vURL,
                                muted: vimeo_player.opt.mute ? 1 : 0,
                                background: 1,
                                autoplay: vimeo_player.playOnMobile ? 1 : 0
                            };
                        vimeo_player.player = new Vimeo.Player(vimeo_player.videoWrapper.get(0).id, options), vimeo_player.player.ready().then(function() {
                            function start() {
                                vimeo_player.isReady = !0, vimeo_player.opt.mute && setTimeout(function() {
                                    $vimeo_player.v_mute()
                                }, 1), vimeo_player.opt.showControls && jQuery.vimeo_player.buildControls(vimeo_player), vimeo_player.opt.autoPlay ? vimeo_player.playOnMobile ? setTimeout(function() {
                                    VEvent = jQuery.Event("VPStart"), $vimeo_player.trigger(VEvent), vimeo_player.videoWrapper.fadeTo(vimeo_player.opt.fadeTime, vimeo_player.opt.opacity)
                                }, 1e3) : setTimeout(function() {
                                    vimeo_player.player.pause(), $vimeo_player.v_play(), VEvent = jQuery.Event("VPStart"), $vimeo_player.trigger(VEvent), $vimeo_player.v_optimize_display()
                                }, vimeo_player.opt.fadeTime) : $vimeo_player.v_pause(), VEvent = jQuery.Event("VPReady"), VEvent.opt = vimeo_player.opt, $vimeo_player.trigger(VEvent), "function" == typeof vimeo_player.opt.onReady && vimeo_player.opt.onReady(vimeo_player), $vimeo_player.v_optimize_display()
                            }
                            vimeo_player.playerBox = vimeo_player.videoWrapper.find("iframe"), vimeo_player.playerBox.after(overlay);
                            var VEvent;
                            vimeo_player.opt.startAt ? (vimeo_player.player.play().then(function() {
                                vimeo_player.player.pause()
                            }), $vimeo_player.v_seekTo(vimeo_player.opt.startAt, function() {
                                start()
                            })) : start(), jQuery(window).off("resize.vimeo_player_" + vimeo_player.id).on("resize.vimeo_player_" + vimeo_player.id, function() {
                                clearTimeout(vimeo_player.optimizeD), vimeo_player.optimizeD = setTimeout(function() {
                                    $vimeo_player.v_optimize_display()
                                }, 250)
                            }), vimeo_player.player.on("progress", function(a) {
                                VEvent = jQuery.Event("VPProgress"), VEvent.data = a, $vimeo_player.trigger(VEvent)
                            }), vimeo_player.player.on("error", function(a) {
                                vimeo_player.state = -1, VEvent = jQuery.Event("VPError"), VEvent.error = a, $vimeo_player.trigger(VEvent)
                            }), vimeo_player.player.on("play", function(data) {
                                if (vimeo_player.state = 1, $vimeo_player.trigger("change_state"), vimeo_player.controlBar && vimeo_player.controlBar.length && vimeo_player.controlBar.find(".vimeo_player_pause").html(jQuery.vimeo_player.controls.pause), "undefined" != typeof _gaq && eval(vimeo_player.opt.gaTrack) && _gaq.push(["_trackEvent", "vimeo_player", "Play", vimeo_player.videoID]), "undefined" != typeof ga && eval(vimeo_player.opt.gaTrack) && ga("send", "event", "vimeo_player", "play", vimeo_player.videoID), VEvent = jQuery.Event("VPPlay"), VEvent.error = data, $vimeo_player.trigger(VEvent), vimeo_player.opt.addRaster) {
                                    var classN = "dot" == vimeo_player.opt.addRaster ? "raster-dot" : "raster";
                                    vimeo_player.overlay.addClass(vimeo_player.isRetina ? classN + " retina" : classN)
                                } else vimeo_player.overlay.removeClass(function(a, b) {
                                    var c = b.split(" "),
                                        d = [];
                                    return jQuery.each(c, function(a, b) {
                                        /raster.*/.test(b) && d.push(b)
                                    }), d.push("retina"), d.join(" ")
                                })
                            }), vimeo_player.player.on("pause", function(a) {
                                vimeo_player.state = 2, $vimeo_player.trigger("change_state"), vimeo_player.controlBar && vimeo_player.controlBar.length && vimeo_player.controlBar.find(".vimeo_player_pause").html(jQuery.vimeo_player.controls.play), VEvent = jQuery.Event("VPPause"), VEvent.time = a, $vimeo_player.trigger(VEvent)
                            }), vimeo_player.player.on("seeked", function(a) {
                                vimeo_player.state = 3, $vimeo_player.trigger("change_state")
                            }), vimeo_player.player.on("ended", function(a) {
                                vimeo_player.state = 0, $vimeo_player.trigger("change_state"), VEvent = jQuery.Event("VPEnd"), VEvent.time = a, $vimeo_player.trigger(VEvent)
                            }), vimeo_player.player.on("timeupdate", function(a) {
                                if (vimeo_player.duration = a.duration, vimeo_player.percent = a.percent, vimeo_player.seconds = a.seconds, vimeo_player.state = 1, vimeo_player.player.getPaused().then(function(a) {
                                        a && (vimeo_player.state = 2)
                                    }), vimeo_player.opt.stopMovieOnBlur && (document.hasFocus() || 1 == vimeo_player.state && (vimeo_player.hasFocus = !1, $vimeo_player.v_pause(), vimeo_player.document_focus = setInterval(function() {
                                        document.hasFocus() && !vimeo_player.hasFocus && (vimeo_player.hasFocus = !0, $vimeo_player.v_play(), clearInterval(vimeo_player.document_focus))
                                    }, 300))), vimeo_player.opt.showControls) {
                                    var b = jQuery("#controlBar_" + vimeo_player.id),
                                        c = b.find(".vimeo_player_pogress"),
                                        d = b.find(".vimeo_player_loaded"),
                                        e = b.find(".vimeo_player_seek_bar"),
                                        f = c.outerWidth(),
                                        g = Math.floor(a.seconds),
                                        h = Math.floor(a.duration),
                                        i = g * f / h,
                                        j = 0,
                                        k = 100 * a.percent;
                                    d.css({
                                        left: j,
                                        width: k + "%"
                                    }), e.css({
                                        left: 0,
                                        width: i
                                    }), a.duration ? vimeo_player.controlBar.find(".vimeo_player_time").html(jQuery.vimeo_player.formatTime(a.seconds) + " / " + jQuery.vimeo_player.formatTime(a.duration)) : vimeo_player.controlBar.find(".vimeo_player_time").html("-- : -- / -- : --")
                                }
                                vimeo_player.opt.stopAt = vimeo_player.opt.stopAt > a.duration ? a.duration - .5 : vimeo_player.opt.stopAt;
                                var l = vimeo_player.opt.stopAt || a.duration - .5;
                                a.seconds >= l && (vimeo_player.loop = vimeo_player.loop || 0, vimeo_player.opt.loop && vimeo_player.loop < vimeo_player.opt.loop ? ($vimeo_player.v_seekTo(vimeo_player.opt.startAt), vimeo_player.loop++) : ($vimeo_player.v_pause(), vimeo_player.state = 0, $vimeo_player.trigger("change_state"))), VEvent = jQuery.Event("VPTime"), VEvent.time = a.seconds, $vimeo_player.trigger(VEvent)
                            })
                        }), $vimeo_player.on("change_state", function() {
                            0 == vimeo_player.state && vimeo_player.videoWrapper.fadeOut(vimeo_player.opt.fadeTime, function() {
                                $vimeo_player.v_seekTo(0)
                            })
                        })
                    })
                }
            })
        },
        formatTime: function(a) {
            var b = Math.floor(a / 60),
                c = Math.floor(a - 60 * b);
            return (b <= 9 ? "0" + b : b) + " : " + (c <= 9 ? "0" + c : c)
        },
        play: function() {
            var a = this.get(0);
            if (!a.isReady) return this;
            a.player.pause(), a.player.play(), setTimeout(function() {
                a.videoWrapper.fadeTo(a.opt.fadeTime, a.opt.opacity)
            }, 1e3);
            var b = jQuery("#controlBar_" + a.id);
            if (b.length) {
                var c = b.find(".mb_YTPPvimeo_player_playpause");
                c.html(jQuery.vimeo_player.controls.pause)
            }
            return a.state = 1, jQuery(a).css("background-image", "none"), this
        },
        togglePlay: function(a) {
            var b = this.get(0);
            return 1 == b.state ? this.v_pause() : this.v_play(), "function" == typeof a && a(b.state), this
        },
        pause: function() {
            var a = this.get(0);
            return a.player.pause(), a.state = 2, this
        },
        seekTo: function(a, b) {
            var c = this.get(0),
                d = c.opt.stopAt && a >= c.opt.stopAt ? c.opt.stopAt - .5 : a;
            return c.player.setCurrentTime(d).then(function(a) {
                "function" == typeof b && b(a)
            }), this
        },
        setVolume: function(a) {
            var b = this.get(0);
            return b.isMute = !1, b.opt.vol = a || b.opt.vol, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(100 * a), this
        },
        toggleVolume: function() {
            var a = this.get(0);
            if (a) return a.isMute ? (jQuery(a).v_unmute(), !0) : (jQuery(a).v_mute(), !1)
        },
        mute: function() {
            var a = this.get(0);
            if (a.isMute) return this;
            a.playOnMobile && a.player.toggleMute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
            var b = jQuery("#controlBar_" + a.id),
                c = b.find(".vimeo_player_muteUnmute");
            return c.html(jQuery.vimeo_player.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted"), this
        },
        unmute: function() {
            var a = this.get(0);
            if (a.isMute) {
                a.isMute = !1, a.playOnMobile && a.player.toggleMute(), jQuery(a).v_set_volume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > .1 ? a.opt.vol : .1);
                var b = jQuery("#controlBar_" + a.id),
                    c = b.find(".vimeo_player_muteUnmute");
                return c.html(jQuery.vimeo_player.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted"), this
            }
        },
        playerDestroy: function() {
            var a = this.get(0);
            return a.isReady ? (a.player.destroy().then(function() {
                a.loop = 0, a.opt = {}, a.state = {}, a.wrapper.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.document_focus)
            }).catch(function(a) {
                console.error("Vimeo_player could not be destroyed. The error is: " + a)
            }), this) : this
        },
        changeMovie: function(a) {
            var b = this,
                c = b.get(0);
            c.opt.startAt = 0, c.opt.stopAt = 0, c.opt.mask = !1, c.opt.mute = !0, c.hasData = !1, c.hasChanged = !0, c.player.loopTime = void 0, a && jQuery.extend(c.opt, a), "true" == c.opt.loop && (c.opt.loop = 9999), c.player.loadVideo(a.videoURL).then(function(a) {
                b.v_optimize_display(), jQuery(c).v_play(), c.opt.startAt && b.v_seekTo(c.opt.startAt)
            })
        },
        buildControls: function(vimeo_player) {
            var data = vimeo_player.opt;
            if (!jQuery("#controlBar_" + vimeo_player.id).length) {
                vimeo_player.controlBar = jQuery("<span/>").attr("id", "controlBar_" + vimeo_player.id).addClass("vimeo_player_bar").css({
                    whiteSpace: "noWrap",
                    position: vimeo_player.isBackground ? "fixed" : "absolute",
                    zIndex: vimeo_player.isBackground ? 1e4 : 1e3
                });
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.vimeo_player.controls.play + "</span>").addClass("vimeo_player_pause vimeo_icon").click(function() {
                        1 == vimeo_player.state ? jQuery(vimeo_player).v_pause() : jQuery(vimeo_player).v_play()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.vimeo_player.controls.mute + "</span>").addClass("vimeo_player_muteUnmute vimeo_icon").click(function() {
                        vimeo_player.isMute ? jQuery(vimeo_player).v_unmute() : jQuery(vimeo_player).v_mute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("vimeo_player_volume_bar").css({
                        display: "inline-block"
                    });
                vimeo_player.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("vimeo_player_time"),
                    vURL = "https://vimeo.com/" + vimeo_player.videoID,
                    movieUrl = jQuery("<span/>").html(jQuery.vimeo_player.controls.logo).addClass("vimeo_url vimeo_icon").attr("title", "view on Vimeo").on("click", function() {
                        window.open(vURL, "viewOnVimeo")
                    }),
                    fullscreen = jQuery("<span/>").html(jQuery.vimeo_player.controls.fullscreen).addClass("vimeo_fullscreen vimeo_icon").on("click", function() {
                        jQuery(vimeo_player).v_fullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("vimeo_player_pogress").css("position", "absolute").click(function(a) {
                        timeBar.css({
                            width: a.clientX - timeBar.offset().left
                        }), vimeo_player.timeW = a.clientX - timeBar.offset().left, vimeo_player.controlBar.find(".vimeo_player_loaded").css({
                            width: 0
                        });
                        var b = Math.floor(vimeo_player.duration);
                        vimeo_player.goto = timeBar.outerWidth() * b / progressBar.outerWidth(), jQuery(vimeo_player).v_seekTo(parseFloat(vimeo_player.goto)), vimeo_player.controlBar.find(".vimeo_player_loaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("vimeo_player_loaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("vimeo_player_seek_bar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.show_vimeo_logo && buttonBar.append(movieUrl), (vimeo_player.isBackground || eval(vimeo_player.opt.realfullscreen) && !vimeo_player.isBackground) && buttonBar.append(fullscreen), vimeo_player.controlBar.append(buttonBar).append(progressBar), vimeo_player.isBackground ? jQuery("body").after(vimeo_player.controlBar) : vimeo_player.videoWrapper.before(vimeo_player.controlBar), volumeBar.simpleSlider({
                    initialval: vimeo_player.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(a) {
                        0 == a.value ? jQuery(vimeo_player).v_mute() : jQuery(vimeo_player).v_unmute(), vimeo_player.player.setVolume(a.value / 100), vimeo_player.isMute || (vimeo_player.opt.vol = a.value)
                    }
                })
            }
        },
        optimizeVimeoDisplay: function(align) {
            var vimeo_player = this.get(0),
                vid = {};
            vimeo_player.opt.align = align || vimeo_player.opt.align, vimeo_player.opt.align = "undefined " != typeof vimeo_player.opt.align ? vimeo_player.opt.align : "center,center";
            var VimeoAlign = vimeo_player.opt.align.split(",");
            if (vimeo_player.opt.optimizeDisplay) {
                var win = {},
                    el = vimeo_player.videoWrapper,
                    abundance = vimeo_player.isPlayer ? 0 : .15 * el.outerHeight();
                win.width = el.outerWidth() + abundance, win.height = el.outerHeight() + abundance, vimeo_player.opt.ratio = eval(vimeo_player.opt.ratio), vid.width = win.width, vid.height = Math.ceil(vid.width / vimeo_player.opt.ratio), vid.marginTop = Math.ceil(-((vid.height - win.height) / 2)), vid.marginLeft = 0, vimeo_player.playerBox.css({
                    top: 0,
                    opacity: 0,
                    width: 100,
                    height: Math.ceil(100 / vimeo_player.opt.ratio),
                    marginTop: 0,
                    marginLeft: 0,
                    frameBorder: 0
                });
                var lowest = vid.height < win.height;
                lowest && (vid.height = win.height, vid.width = Math.ceil(vid.height * vimeo_player.opt.ratio), vid.marginTop = 0, vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2)));
                for (var a in VimeoAlign)
                    if (VimeoAlign.hasOwnProperty(a)) {
                        var al = VimeoAlign[a].replace(/ /g, "");
                        switch (al) {
                            case "top":
                                vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                                break;
                            case "bottom":
                                vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                                break;
                            case "left":
                                vid.marginLeft = 0;
                                break;
                            case "right":
                                vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                                break;
                            default:
                                vid.width > win.width && (vid.marginLeft = -((vid.width - win.width) / 2))
                        }
                    }
            } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
            setTimeout(function() {
                vimeo_player.playerBox.css({
                    opacity: 1,
                    width: vid.width,
                    height: vid.height,
                    marginTop: vid.marginTop,
                    marginLeft: vid.marginLeft,
                    maxWidth: "initial"
                })
            }, 10)
        },
        setAlign: function(a) {
            var b = this;
            b.v_optimize_display(a)
        },
        getAlign: function() {
            var a = this.get(0);
            return a.opt.align
        },
        fullscreen: function(real) {
            function hideMouse() {
                vimeo_player.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(a, b) {
                for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) {
                    if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d) return e = [e[f]], "function" == d ? a[c]() : a[c];
                    f++
                }
            }

            function launchFullscreen(a) {
                RunPrefixMethod(a, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var vimeo_player = this.get(0),
                $vimeo_player = jQuery(vimeo_player),
                VEvent;
            "undefined" == typeof real && (real = vimeo_player.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + vimeo_player.id),
                fullScreenBtn = controls.find(".vimeo_fullscreen"),
                videoWrapper = vimeo_player.isSelf ? vimeo_player.opt.containment : vimeo_player.videoWrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    a ? (VEvent = jQuery.Event("VPFullScreenStart"), $vimeo_player.trigger(VEvent)) : (vimeo_player.isAlone = !1, fullScreenBtn.html(jQuery.vimeo_player.controls.fullscreen), videoWrapper.removeClass("vimeo_player_Fullscreen"), videoWrapper.fadeTo(vimeo_player.opt.fadeTime, vimeo_player.opt.opacity), videoWrapper.css({
                        zIndex: 0
                    }), vimeo_player.isBackground ? jQuery("body").after(controls) : vimeo_player.videoWrapper.before(controls), jQuery(window).resize(), VEvent = jQuery.Event("VPFullScreenEnd"), $vimeo_player.trigger(VEvent))
                })
            }
            return vimeo_player.isAlone ? (jQuery(document).off("mousemove.vimeo_player"), clearTimeout(vimeo_player.hideCursor), vimeo_player.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : videoWrapper.fadeTo(vimeo_player.opt.fadeTime, vimeo_player.opt.opacity).css({
                zIndex: 0
            }), fullScreenBtn.html(jQuery.vimeo_player.controls.fullscreen), vimeo_player.isAlone = !1) : (jQuery(document).on("mousemove.vimeo_player", function(a) {
                vimeo_player.overlay.css({
                    cursor: "auto"
                }), clearTimeout(vimeo_player.hideCursor), jQuery(a.target).parents().is(".vimeo_player_bar") || (vimeo_player.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("vimeo_player_Fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.fadeTo(vimeo_player.opt.fadeTime, 1), vimeo_player.videoWrapper.append(controls), jQuery(vimeo_player).v_optimize_display()
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).fadeTo(vimeo_player.opt.fadeTime, 1), fullScreenBtn.html(jQuery.vimeo_player.controls.showSite), vimeo_player.isAlone = !0), this
        }
    }, jQuery.fn.vimeo_player = jQuery.vimeo_player.buildPlayer, jQuery.fn.v_play = jQuery.vimeo_player.play, jQuery.fn.v_toggle_play = jQuery.vimeo_player.togglePlay, jQuery.fn.v_change_movie = jQuery.vimeo_player.changeMovie, jQuery.fn.v_pause = jQuery.vimeo_player.pause, jQuery.fn.v_seekTo = jQuery.vimeo_player.seekTo, jQuery.fn.v_optimize_display = jQuery.vimeo_player.optimizeVimeoDisplay, jQuery.fn.v_set_align = jQuery.vimeo_player.setAlign, jQuery.fn.v_get_align = jQuery.vimeo_player.getAlign, jQuery.fn.v_fullscreen = jQuery.vimeo_player.fullscreen, jQuery.fn.v_mute = jQuery.vimeo_player.mute, jQuery.fn.v_unmute = jQuery.vimeo_player.unmute, jQuery.fn.v_set_volume = jQuery.vimeo_player.setVolume, jQuery.fn.v_toggle_volume = jQuery.vimeo_player.toggleVolume
}(jQuery);
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"), a.name = a.name.toLowerCase(), a.major_version = "Unknown", a.minor_version = "Unknown", "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1])), a
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(a, b) {
    if ("stringstring" != typeof a + typeof b) return !1;
    for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); e < f; e++) {
        if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e])) return 1;
        if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e])) return -1
    }
    return 0
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"), a.name = a.name.toLowerCase(), a.major_version = "Unknown", a.minor_version = "Unknown", "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1])), a
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(a, b) {
        if ("stringstring" != typeof a + typeof b) return !1;
        for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); e < f; e++) {
            if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e])) return 1;
            if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e])) return -1
        }
        return 0
    },
    function(a) {
        a.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: a.browser.mobile ? "touchstart" : "mousedown",
                end: a.browser.mobile ? "touchend" : "mouseup",
                move: a.browser.mobile ? "touchmove" : "mousemove"
            },
            init: function(b) {
                return this.each(function() {
                    var c = this,
                        d = a(c);
                    d.addClass("simpleSlider"), c.opt = {}, a.extend(c.opt, a.simpleSlider.defaults, b), a.extend(c.opt, d.data());
                    var e = "h" == c.opt.orientation ? "horizontal" : "vertical";
                    e = a("<div/>").addClass("level").addClass(e), d.prepend(e), c.level = e, d.css({
                        cursor: "default"
                    }), "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()), d.updateSliderVal(), c.opt.readonly || (d.on(a.simpleSlider.events.start, function(b) {
                        a.browser.mobile && (b = b.changedTouches[0]), c.canSlide = !0, d.updateSliderVal(b), "h" == c.opt.orientation ? d.css({
                            cursor: "col-resize"
                        }) : d.css({
                            cursor: "row-resize"
                        }), a.browser.mobile || (b.preventDefault(), b.stopPropagation())
                    }), a(document).on(a.simpleSlider.events.move, function(b) {
                        a.browser.mobile && (b = b.changedTouches[0]), c.canSlide && (a(document).css({
                            cursor: "default"
                        }), d.updateSliderVal(b), a.browser.mobile || (b.preventDefault(), b.stopPropagation()))
                    }).on(a.simpleSlider.events.end, function() {
                        a(document).css({
                            cursor: "auto"
                        }), c.canSlide = !1, d.css({
                            cursor: "auto"
                        })
                    }))
                })
            },
            updateSliderVal: function(b) {
                var c = this.get(0);
                if (c.opt) {
                    c.opt.initialval = "number" == typeof c.opt.initialval ? c.opt.initialval : c.opt.initialval(c);
                    var d = a(c).outerWidth(),
                        e = a(c).outerHeight();
                    c.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof b ? b * d / c.opt.scale : c.opt.initialval * d / c.opt.scale, c.y = "object" == typeof b ? b.clientY + document.body.scrollTop - this.offset().top : "number" == typeof b ? (c.opt.scale - c.opt.initialval - b) * e / c.opt.scale : c.opt.initialval * e / c.opt.scale, c.y = this.outerHeight() - c.y, c.scaleX = c.x * c.opt.scale / d, c.scaleY = c.y * c.opt.scale / e, c.outOfRangeX = c.scaleX > c.opt.scale ? c.scaleX - c.opt.scale : 0 > c.scaleX ? c.scaleX : 0, c.outOfRangeY = c.scaleY > c.opt.scale ? c.scaleY - c.opt.scale : 0 > c.scaleY ? c.scaleY : 0, c.outOfRange = "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY, c.value = "undefined" != typeof b ? "h" == c.opt.orientation ? c.x >= this.outerWidth() ? c.opt.scale : 0 >= c.x ? 0 : c.scaleX : c.y >= this.outerHeight() ? c.opt.scale : 0 >= c.y ? 0 : c.scaleY : "h" == c.opt.orientation ? c.scaleX : c.scaleY, "h" == c.opt.orientation ? c.level.width(Math.floor(100 * c.x / d) + "%") : c.level.height(Math.floor(100 * c.y / e)), "function" == typeof c.opt.callback && c.opt.callback(c)
                }
            }
        }, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
    }(jQuery);