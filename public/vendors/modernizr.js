/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-objectfit-touchevents-addtest-setclasses !*/
!(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, i, s, a;
    for (var l in w)
      if (w.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = w[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (o = r(n.fn, 'function') ? n.fn() : n.fn, i = 0; i < e.length; i++)
          (s = e[i]),
            (a = s.split('.')),
            1 === a.length
              ? (Modernizr[a[0]] = o)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = o)),
            C.push((o ? '' : 'no-') + a.join('-'));
      }
  }
  function i(e) {
    var n = b.className,
      t = Modernizr._config.classPrefix || '';
    if ((T && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)');
      n = n.replace(r, '$1' + t + 'js$2');
    }
    Modernizr._config.enableClasses &&
      ((n += ' ' + t + e.join(' ' + t)),
      T ? (b.className.baseVal = n) : (b.className = n));
  }
  function s(e, n) {
    if ('object' == typeof e) for (var t in e) S(e, t) && s(t, e[t]);
    else {
      e = e.toLowerCase();
      var r = e.split('.'),
        o = Modernizr[r[0]];
      if ((2 == r.length && (o = o[r[1]]), 'undefined' != typeof o))
        return Modernizr;
      (n = 'function' == typeof n ? n() : n),
        1 == r.length
          ? (Modernizr[r[0]] = n)
          : (!Modernizr[r[0]] ||
              Modernizr[r[0]] instanceof Boolean ||
              (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            (Modernizr[r[0]][r[1]] = n)),
        i([(n && 0 != n ? '' : 'no-') + r.join('-')]),
        Modernizr._trigger(e, n);
    }
    return Modernizr;
  }
  function a(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, '');
  }
  function l() {
    return 'function' != typeof n.createElement
      ? n.createElement(arguments[0])
      : T
      ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function u() {
    var e = n.body;
    return e || ((e = l(T ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function f(e, t, r, o) {
    var i,
      s,
      a,
      f,
      c = 'modernizr',
      p = l('div'),
      d = u();
    if (parseInt(r, 10))
      for (; r--; )
        (a = l('div')), (a.id = o ? o[r] : c + (r + 1)), p.appendChild(a);
    return (
      (i = l('style')),
      (i.type = 'text/css'),
      (i.id = 's' + c),
      (d.fake ? d : p).appendChild(i),
      d.appendChild(p),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(n.createTextNode(e)),
      (p.id = c),
      d.fake &&
        ((d.style.background = ''),
        (d.style.overflow = 'hidden'),
        (f = b.style.overflow),
        (b.style.overflow = 'hidden'),
        b.appendChild(d)),
      (s = t(p, e)),
      d.fake
        ? (d.parentNode.removeChild(d), (b.style.overflow = f), b.offsetHeight)
        : p.parentNode.removeChild(p),
      !!s
    );
  }
  function c(e, n) {
    return !!~('' + e).indexOf(n);
  }
  function p(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function d(e, n, t) {
    var o;
    for (var i in e)
      if (e[i] in n)
        return t === !1
          ? e[i]
          : ((o = n[e[i]]), r(o, 'function') ? p(o, t || n) : o);
    return !1;
  }
  function h(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return '-' + n.toLowerCase();
      })
      .replace(/^ms-/, '-ms-');
  }
  function m(n, t, r) {
    var o;
    if ('getComputedStyle' in e) {
      o = getComputedStyle.call(e, n, t);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? 'error' : 'log';
        i[s].call(
          i,
          'getComputedStyle returning null, its possible modernizr test results are inaccurate'
        );
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];
    return o;
  }
  function v(n, r) {
    var o = n.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--; ) if (e.CSS.supports(h(n[o]), r)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in e) {
      for (var i = []; o--; ) i.push('(' + h(n[o]) + ':' + r + ')');
      return (
        (i = i.join(' or ')),
        f(
          '@supports (' + i + ') { #modernizr { position: absolute; } }',
          function (e) {
            return 'absolute' == m(e, null, 'position');
          }
        )
      );
    }
    return t;
  }
  function g(e, n, o, i) {
    function s() {
      f && (delete O.style, delete O.modElem);
    }
    if (((i = r(i, 'undefined') ? !1 : i), !r(o, 'undefined'))) {
      var u = v(e, o);
      if (!r(u, 'undefined')) return u;
    }
    for (
      var f, p, d, h, m, g = ['modernizr', 'tspan', 'samp'];
      !O.style && g.length;

    )
      (f = !0), (O.modElem = l(g.shift())), (O.style = O.modElem.style);
    for (d = e.length, p = 0; d > p; p++)
      if (
        ((h = e[p]),
        (m = O.style[h]),
        c(h, '-') && (h = a(h)),
        O.style[h] !== t)
      ) {
        if (i || r(o, 'undefined')) return s(), 'pfx' == n ? h : !0;
        try {
          O.style[h] = o;
        } catch (y) {}
        if (O.style[h] != m) return s(), 'pfx' == n ? h : !0;
      }
    return s(), !1;
  }
  function y(e, n, t, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + ' ' + E.join(s + ' ') + s).split(' ');
    return r(n, 'string') || r(n, 'undefined')
      ? g(a, n, o, i)
      : ((a = (e + ' ' + N.join(s + ' ') + s).split(' ')), d(a, n, t));
  }
  function _(e, n, r) {
    return y(e, t, t, n, r);
  }
  var C = [],
    w = [],
    x = {
      _version: '3.5.0',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        w.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        w.push({ name: null, fn: e });
      }
    },
    Modernizr = function () {};
  (Modernizr.prototype = x), (Modernizr = new Modernizr());
  var S,
    b = n.documentElement,
    T = 'svg' === b.nodeName.toLowerCase();
  !(function () {
    var e = {}.hasOwnProperty;
    S =
      r(e, 'undefined') || r(e.call, 'undefined')
        ? function (e, n) {
            return n in e && r(e.constructor.prototype[n], 'undefined');
          }
        : function (n, t) {
            return e.call(n, t);
          };
  })(),
    (x._l = {}),
    (x.on = function (e, n) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (x._trigger = function (e, n) {
      if (this._l[e]) {
        var t = this._l[e];
        setTimeout(function () {
          var e, r;
          for (e = 0; e < t.length; e++) (r = t[e])(n);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      x.addTest = s;
    });
  var j = x._config.usePrefixes
    ? ' -webkit- -moz- -o- -ms- '.split(' ')
    : ['', ''];
  x._prefixes = j;
  var P = (x.testStyles = f);
  Modernizr.addTest('touchevents', function () {
    var t;
    if ('ontouchstart' in e || (e.DocumentTouch && n instanceof DocumentTouch))
      t = !0;
    else {
      var r = [
        '@media (',
        j.join('touch-enabled),('),
        'heartz',
        ')',
        '{#modernizr{top:9px;position:absolute}}'
      ].join('');
      P(r, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  });
  var z = 'Moz O ms Webkit',
    E = x._config.usePrefixes ? z.split(' ') : [];
  x._cssomPrefixes = E;
  var k = function (n) {
    var r,
      o = j.length,
      i = e.CSSRule;
    if ('undefined' == typeof i) return t;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, '')),
      (r = n.replace(/-/g, '_').toUpperCase() + '_RULE'),
      r in i)
    )
      return '@' + n;
    for (var s = 0; o > s; s++) {
      var a = j[s],
        l = a.toUpperCase() + '_' + r;
      if (l in i) return '@-' + a.toLowerCase() + '-' + n;
    }
    return !1;
  };
  x.atRule = k;
  var N = x._config.usePrefixes ? z.toLowerCase().split(' ') : [];
  x._domPrefixes = N;
  var L = { elem: l('modernizr') };
  Modernizr._q.push(function () {
    delete L.elem;
  });
  var O = { style: L.elem.style };
  Modernizr._q.unshift(function () {
    delete O.style;
  }),
    (x.testAllProps = y),
    (x.testAllProps = _),
    Modernizr.addTest('backgroundcliptext', function () {
      return _('backgroundClip', 'text');
    });
  var q = (x.prefixed = function (e, n, t) {
    return 0 === e.indexOf('@')
      ? k(e)
      : (-1 != e.indexOf('-') && (e = a(e)), n ? y(e, n, t) : y(e, 'pfx'));
  });
  Modernizr.addTest('objectfit', !!q('objectFit'), { aliases: ['object-fit'] }),
    o(),
    i(C),
    delete x.addTest,
    delete x.addAsyncTest;
  for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A]();
  e.Modernizr = Modernizr;
})(window, document);
