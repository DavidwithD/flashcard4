function _d(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jd = { exports: {} },
  li = {},
  Td = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fo = Symbol.for("react.element"),
  Yh = Symbol.for("react.portal"),
  Gh = Symbol.for("react.fragment"),
  Xh = Symbol.for("react.strict_mode"),
  Zh = Symbol.for("react.profiler"),
  Jh = Symbol.for("react.provider"),
  qh = Symbol.for("react.context"),
  bh = Symbol.for("react.forward_ref"),
  em = Symbol.for("react.suspense"),
  tm = Symbol.for("react.memo"),
  nm = Symbol.for("react.lazy"),
  Fs = Symbol.iterator;
function rm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fs && e[Fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ld = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Dd = Object.assign,
  zd = {};
function jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zd),
    (this.updater = n || Ld);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Md() {}
Md.prototype = jr.prototype;
function Eu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zd),
    (this.updater = n || Ld);
}
var Cu = (Eu.prototype = new Md());
Cu.constructor = Eu;
Dd(Cu, jr.prototype);
Cu.isPureReactComponent = !0;
var $s = Array.isArray,
  Od = Object.prototype.hasOwnProperty,
  Pu = { current: null },
  Id = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Od.call(t, r) && !Id.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Fo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Pu.current,
  };
}
function om(e, t) {
  return {
    $$typeof: Fo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fo;
}
function lm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var As = /\/+/g;
function $i(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? lm("" + e.key)
    : t.toString(36);
}
function pl(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Fo:
          case Yh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + $i(i, 0) : r),
      $s(o)
        ? ((n = ""),
          e != null && (n = e.replace(As, "$&/") + "/"),
          pl(o, t, n, "", function (s) {
            return s;
          }))
        : o != null &&
          (Ru(o) &&
            (o = om(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(As, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), $s(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var u = r + $i(l, a);
      i += pl(l, t, n, u, o);
    }
  else if (((u = rm(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + $i(l, a++)), (i += pl(l, t, n, u, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Go(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    pl(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function im(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  hl = { transition: null },
  am = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: hl,
    ReactCurrentOwner: Pu,
  };
Y.Children = {
  map: Go,
  forEach: function (e, t, n) {
    Go(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Go(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Go(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ru(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = jr;
Y.Fragment = Gh;
Y.Profiler = Zh;
Y.PureComponent = Eu;
Y.StrictMode = Xh;
Y.Suspense = em;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = am;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Dd({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Pu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Od.call(t, u) &&
        !Id.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Fo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: qh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Jh, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = Fd;
Y.createFactory = function (e) {
  var t = Fd.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: bh, render: e };
};
Y.isValidElement = Ru;
Y.lazy = function (e) {
  return { $$typeof: nm, _payload: { _status: -1, _result: e }, _init: im };
};
Y.memo = function (e, t) {
  return { $$typeof: tm, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = hl.transition;
  hl.transition = {};
  try {
    e();
  } finally {
    hl.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Ve.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
Y.useId = function () {
  return Ve.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Ve.current.useRef(e);
};
Y.useState = function (e) {
  return Ve.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Ve.current.useTransition();
};
Y.version = "18.2.0";
Td.exports = Y;
var C = Td.exports;
const On = Nd(C),
  um = _d({ __proto__: null, default: On }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sm = C,
  cm = Symbol.for("react.element"),
  dm = Symbol.for("react.fragment"),
  fm = Object.prototype.hasOwnProperty,
  pm = sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function $d(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) fm.call(t, r) && !hm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: cm,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: pm.current,
  };
}
li.Fragment = dm;
li.jsx = $d;
li.jsxs = $d;
jd.exports = li;
var k = jd.exports,
  ya = {},
  Ad = { exports: {} },
  rt = {},
  Ud = { exports: {} },
  Bd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, F) {
    var A = L.length;
    L.push(F);
    e: for (; 0 < A; ) {
      var Q = (A - 1) >>> 1,
        q = L[Q];
      if (0 < o(q, F)) (L[Q] = F), (L[A] = q), (A = Q);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var F = L[0],
      A = L.pop();
    if (A !== F) {
      L[0] = A;
      e: for (var Q = 0, q = L.length, Me = q >>> 1; Q < Me; ) {
        var we = 2 * (Q + 1) - 1,
          qe = L[we],
          He = we + 1,
          lt = L[He];
        if (0 > o(qe, A))
          He < q && 0 > o(lt, qe)
            ? ((L[Q] = lt), (L[He] = A), (Q = He))
            : ((L[Q] = qe), (L[we] = A), (Q = we));
        else if (He < q && 0 > o(lt, A)) (L[Q] = lt), (L[He] = A), (Q = He);
        else break e;
      }
    }
    return F;
  }
  function o(L, F) {
    var A = L.sortIndex - F.sortIndex;
    return A !== 0 ? A : L.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    m = null,
    p = 3,
    w = !1,
    g = !1,
    x = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(L) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= L)
        r(s), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(s);
    }
  }
  function f(L) {
    if (((x = !1), v(L), !g))
      if (n(u) !== null) (g = !0), _t(P);
      else {
        var F = n(s);
        F !== null && Je(f, F.startTime - L);
      }
  }
  function P(L, F) {
    (g = !1), x && ((x = !1), h(_), (_ = -1)), (w = !0);
    var A = p;
    try {
      for (
        v(F), m = n(u);
        m !== null && (!(m.expirationTime > F) || (L && !Z()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var q = Q(m.expirationTime <= F);
          (F = e.unstable_now()),
            typeof q == "function" ? (m.callback = q) : m === n(u) && r(u),
            v(F);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var Me = !0;
      else {
        var we = n(s);
        we !== null && Je(f, we.startTime - F), (Me = !1);
      }
      return Me;
    } finally {
      (m = null), (p = A), (w = !1);
    }
  }
  var j = !1,
    y = null,
    _ = -1,
    z = 5,
    I = -1;
  function Z() {
    return !(e.unstable_now() - I < z);
  }
  function fe() {
    if (y !== null) {
      var L = e.unstable_now();
      I = L;
      var F = !0;
      try {
        F = y(!0, L);
      } finally {
        F ? pe() : ((j = !1), (y = null));
      }
    } else j = !1;
  }
  var pe;
  if (typeof c == "function")
    pe = function () {
      c(fe);
    };
  else if (typeof MessageChannel < "u") {
    var mt = new MessageChannel(),
      ie = mt.port2;
    (mt.port1.onmessage = fe),
      (pe = function () {
        ie.postMessage(null);
      });
  } else
    pe = function () {
      R(fe, 0);
    };
  function _t(L) {
    (y = L), j || ((j = !0), pe());
  }
  function Je(L, F) {
    _ = R(function () {
      L(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), _t(P));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = p;
      }
      var A = p;
      p = F;
      try {
        return L();
      } finally {
        p = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, F) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var A = p;
      p = L;
      try {
        return F();
      } finally {
        p = A;
      }
    }),
    (e.unstable_scheduleCallback = function (L, F, A) {
      var Q = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? Q + A : Q))
          : (A = Q),
        L)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = A + q),
        (L = {
          id: d++,
          callback: F,
          priorityLevel: L,
          startTime: A,
          expirationTime: q,
          sortIndex: -1,
        }),
        A > Q
          ? ((L.sortIndex = A),
            t(s, L),
            n(u) === null &&
              L === n(s) &&
              (x ? (h(_), (_ = -1)) : (x = !0), Je(f, A - Q)))
          : ((L.sortIndex = q), t(u, L), g || w || ((g = !0), _t(P))),
        L
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (L) {
      var F = p;
      return function () {
        var A = p;
        p = F;
        try {
          return L.apply(this, arguments);
        } finally {
          p = A;
        }
      };
    });
})(Bd);
Ud.exports = Bd;
var mm = Ud.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd = C,
  nt = mm;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wd = new Set(),
  go = {};
function Wn(e, t) {
  gr(e, t), gr(e + "Capture", t);
}
function gr(e, t) {
  for (go[e] = t, e = 0; e < t.length; e++) Wd.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wa = Object.prototype.hasOwnProperty,
  vm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Us = {},
  Bs = {};
function gm(e) {
  return wa.call(Bs, e)
    ? !0
    : wa.call(Us, e)
    ? !1
    : vm.test(e)
    ? (Bs[e] = !0)
    : ((Us[e] = !0), !1);
}
function ym(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wm(e, t, n, r) {
  if (t === null || typeof t > "u" || ym(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ze[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ze[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ze[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _u = /[\-:]([a-z])/g;
function Nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Nu);
    ze[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_u, Nu);
    ze[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_u, Nu);
  ze[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ju(e, t, n, r) {
  var o = ze.hasOwnProperty(t) ? ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (wm(t, n, o, r) && (n = null),
    r || o === null
      ? gm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xo = Symbol.for("react.element"),
  Zn = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  Tu = Symbol.for("react.strict_mode"),
  Sa = Symbol.for("react.profiler"),
  Hd = Symbol.for("react.provider"),
  Kd = Symbol.for("react.context"),
  Lu = Symbol.for("react.forward_ref"),
  xa = Symbol.for("react.suspense"),
  ka = Symbol.for("react.suspense_list"),
  Du = Symbol.for("react.memo"),
  tn = Symbol.for("react.lazy"),
  Qd = Symbol.for("react.offscreen"),
  Vs = Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vs && e[Vs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  Ai;
function qr(e) {
  if (Ai === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ai = (t && t[1]) || "";
    }
  return (
    `
` +
    Ai +
    e
  );
}
var Ui = !1;
function Bi(e, t) {
  if (!e || Ui) return "";
  Ui = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ui = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qr(e) : "";
}
function Sm(e) {
  switch (e.tag) {
    case 5:
      return qr(e.type);
    case 16:
      return qr("Lazy");
    case 13:
      return qr("Suspense");
    case 19:
      return qr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bi(e.type, !1)), e;
    case 11:
      return (e = Bi(e.type.render, !1)), e;
    case 1:
      return (e = Bi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ea(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jn:
      return "Fragment";
    case Zn:
      return "Portal";
    case Sa:
      return "Profiler";
    case Tu:
      return "StrictMode";
    case xa:
      return "Suspense";
    case ka:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kd:
        return (e.displayName || "Context") + ".Consumer";
      case Hd:
        return (e._context.displayName || "Context") + ".Provider";
      case Lu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Du:
        return (
          (t = e.displayName || null), t !== null ? t : Ea(e.type) || "Memo"
        );
      case tn:
        (t = e._payload), (e = e._init);
        try {
          return Ea(e(t));
        } catch {}
    }
  return null;
}
function xm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ea(t);
    case 8:
      return t === Tu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function km(e) {
  var t = Yd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Zo(e) {
  e._valueTracker || (e._valueTracker = km(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Tl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ca(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ws(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xd(e, t) {
  (t = t.checked), t != null && ju(e, "checked", t, !1);
}
function Pa(e, t) {
  Xd(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ra(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ra(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ra(e, t, n) {
  (t !== "number" || Tl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var br = Array.isArray;
function cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ks(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (br(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function Zd(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Jo,
  qd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Jo = Jo || document.createElement("div"),
          Jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Jo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function yo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ro = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Em = ["Webkit", "ms", "Moz", "O"];
Object.keys(ro).forEach(function (e) {
  Em.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ro[t] = ro[e]);
  });
});
function bd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ro.hasOwnProperty(e) && ro[e])
    ? ("" + t).trim()
    : t + "px";
}
function ef(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = bd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Cm = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ja(e, t) {
  if (t) {
    if (Cm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var La = null;
function zu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Da = null,
  dr = null,
  fr = null;
function Ys(e) {
  if ((e = Uo(e))) {
    if (typeof Da != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = ci(t)), Da(e.stateNode, e.type, t));
  }
}
function tf(e) {
  dr ? (fr ? fr.push(e) : (fr = [e])) : (dr = e);
}
function nf() {
  if (dr) {
    var e = dr,
      t = fr;
    if (((fr = dr = null), Ys(e), t)) for (e = 0; e < t.length; e++) Ys(t[e]);
  }
}
function rf(e, t) {
  return e(t);
}
function of() {}
var Vi = !1;
function lf(e, t, n) {
  if (Vi) return e(t, n);
  Vi = !0;
  try {
    return rf(e, t, n);
  } finally {
    (Vi = !1), (dr !== null || fr !== null) && (of(), nf());
  }
}
function wo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ci(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var za = !1;
if (Ht)
  try {
    var Ur = {};
    Object.defineProperty(Ur, "passive", {
      get: function () {
        za = !0;
      },
    }),
      window.addEventListener("test", Ur, Ur),
      window.removeEventListener("test", Ur, Ur);
  } catch {
    za = !1;
  }
function Pm(e, t, n, r, o, l, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var oo = !1,
  Ll = null,
  Dl = !1,
  Ma = null,
  Rm = {
    onError: function (e) {
      (oo = !0), (Ll = e);
    },
  };
function _m(e, t, n, r, o, l, i, a, u) {
  (oo = !1), (Ll = null), Pm.apply(Rm, arguments);
}
function Nm(e, t, n, r, o, l, i, a, u) {
  if ((_m.apply(this, arguments), oo)) {
    if (oo) {
      var s = Ll;
      (oo = !1), (Ll = null);
    } else throw Error(T(198));
    Dl || ((Dl = !0), (Ma = s));
  }
}
function Hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function af(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gs(e) {
  if (Hn(e) !== e) throw Error(T(188));
}
function jm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Gs(o), e;
        if (l === r) return Gs(o), t;
        l = l.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function uf(e) {
  return (e = jm(e)), e !== null ? sf(e) : null;
}
function sf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cf = nt.unstable_scheduleCallback,
  Xs = nt.unstable_cancelCallback,
  Tm = nt.unstable_shouldYield,
  Lm = nt.unstable_requestPaint,
  ye = nt.unstable_now,
  Dm = nt.unstable_getCurrentPriorityLevel,
  Mu = nt.unstable_ImmediatePriority,
  df = nt.unstable_UserBlockingPriority,
  zl = nt.unstable_NormalPriority,
  zm = nt.unstable_LowPriority,
  ff = nt.unstable_IdlePriority,
  ii = null,
  Mt = null;
function Mm(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(ii, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : Fm,
  Om = Math.log,
  Im = Math.LN2;
function Fm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Om(e) / Im) | 0)) | 0;
}
var qo = 64,
  bo = 4194304;
function eo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = eo(a)) : ((l &= i), l !== 0 && (r = eo(l)));
  } else (i = n & ~o), i !== 0 ? (r = eo(i)) : l !== 0 && (r = eo(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function $m(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Am(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Et(l),
      a = 1 << i,
      u = o[i];
    u === -1
      ? (!(a & n) || a & r) && (o[i] = $m(a, t))
      : u <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pf() {
  var e = qo;
  return (qo <<= 1), !(qo & 4194240) && (qo = 64), e;
}
function Wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $o(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n);
}
function Um(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Et(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var b = 0;
function hf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mf,
  Iu,
  vf,
  gf,
  yf,
  Ia = !1,
  el = [],
  un = null,
  sn = null,
  cn = null,
  So = new Map(),
  xo = new Map(),
  rn = [],
  Bm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      cn = null;
      break;
    case "pointerover":
    case "pointerout":
      So.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xo.delete(t.pointerId);
  }
}
function Br(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Uo(t)), t !== null && Iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Vm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (un = Br(un, e, t, n, r, o)), !0;
    case "dragenter":
      return (sn = Br(sn, e, t, n, r, o)), !0;
    case "mouseover":
      return (cn = Br(cn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return So.set(l, Br(So.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), xo.set(l, Br(xo.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function wf(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = af(n)), t !== null)) {
          (e.blockedOn = t),
            yf(e.priority, function () {
              vf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (La = r), n.target.dispatchEvent(r), (La = null);
    } else return (t = Uo(n)), t !== null && Iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Js(e, t, n) {
  ml(e) && n.delete(t);
}
function Wm() {
  (Ia = !1),
    un !== null && ml(un) && (un = null),
    sn !== null && ml(sn) && (sn = null),
    cn !== null && ml(cn) && (cn = null),
    So.forEach(Js),
    xo.forEach(Js);
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ia ||
      ((Ia = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Wm)));
}
function ko(e) {
  function t(o) {
    return Vr(o, e);
  }
  if (0 < el.length) {
    Vr(el[0], e);
    for (var n = 1; n < el.length; n++) {
      var r = el[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && Vr(un, e),
      sn !== null && Vr(sn, e),
      cn !== null && Vr(cn, e),
      So.forEach(t),
      xo.forEach(t),
      n = 0;
    n < rn.length;
    n++
  )
    (r = rn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rn.length && ((n = rn[0]), n.blockedOn === null); )
    wf(n), n.blockedOn === null && rn.shift();
}
var pr = Gt.ReactCurrentBatchConfig,
  Ol = !0;
function Hm(e, t, n, r) {
  var o = b,
    l = pr.transition;
  pr.transition = null;
  try {
    (b = 1), Fu(e, t, n, r);
  } finally {
    (b = o), (pr.transition = l);
  }
}
function Km(e, t, n, r) {
  var o = b,
    l = pr.transition;
  pr.transition = null;
  try {
    (b = 4), Fu(e, t, n, r);
  } finally {
    (b = o), (pr.transition = l);
  }
}
function Fu(e, t, n, r) {
  if (Ol) {
    var o = Fa(e, t, n, r);
    if (o === null) bi(e, t, r, Il, n), Zs(e, r);
    else if (Vm(o, e, t, n, r)) r.stopPropagation();
    else if ((Zs(e, r), t & 4 && -1 < Bm.indexOf(e))) {
      for (; o !== null; ) {
        var l = Uo(o);
        if (
          (l !== null && mf(l),
          (l = Fa(e, t, n, r)),
          l === null && bi(e, t, r, Il, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else bi(e, t, r, null, n);
  }
}
var Il = null;
function Fa(e, t, n, r) {
  if (((Il = null), (e = zu(r)), (e = Rn(e)), e !== null))
    if (((t = Hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = af(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Il = e), null;
}
function Sf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dm()) {
        case Mu:
          return 1;
        case df:
          return 4;
        case zl:
        case zm:
          return 16;
        case ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null,
  $u = null,
  vl = null;
function xf() {
  if (vl) return vl;
  var e,
    t = $u,
    n = t.length,
    r,
    o = "value" in ln ? ln.value : ln.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (vl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function gl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function tl() {
  return !0;
}
function qs() {
  return !1;
}
function ot(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? tl
        : qs),
      (this.isPropagationStopped = qs),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = tl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = tl));
      },
      persist: function () {},
      isPersistent: tl,
    }),
    t
  );
}
var Tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Au = ot(Tr),
  Ao = de({}, Tr, { view: 0, detail: 0 }),
  Qm = ot(Ao),
  Hi,
  Ki,
  Wr,
  ai = de({}, Ao, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Uu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === "mousemove"
              ? ((Hi = e.screenX - Wr.screenX), (Ki = e.screenY - Wr.screenY))
              : (Ki = Hi = 0),
            (Wr = e)),
          Hi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ki;
    },
  }),
  bs = ot(ai),
  Ym = de({}, ai, { dataTransfer: 0 }),
  Gm = ot(Ym),
  Xm = de({}, Ao, { relatedTarget: 0 }),
  Qi = ot(Xm),
  Zm = de({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jm = ot(Zm),
  qm = de({}, Tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bm = ot(qm),
  ev = de({}, Tr, { data: 0 }),
  ec = ot(ev),
  tv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ov(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rv[e]) ? !!t[e] : !1;
}
function Uu() {
  return ov;
}
var lv = de({}, Ao, {
    key: function (e) {
      if (e.key) {
        var t = tv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = gl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uu,
    charCode: function (e) {
      return e.type === "keypress" ? gl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? gl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  iv = ot(lv),
  av = de({}, ai, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tc = ot(av),
  uv = de({}, Ao, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uu,
  }),
  sv = ot(uv),
  cv = de({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = ot(cv),
  fv = de({}, ai, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  pv = ot(fv),
  hv = [9, 13, 27, 32],
  Bu = Ht && "CompositionEvent" in window,
  lo = null;
Ht && "documentMode" in document && (lo = document.documentMode);
var mv = Ht && "TextEvent" in window && !lo,
  kf = Ht && (!Bu || (lo && 8 < lo && 11 >= lo)),
  nc = String.fromCharCode(32),
  rc = !1;
function Ef(e, t) {
  switch (e) {
    case "keyup":
      return hv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qn = !1;
function vv(e, t) {
  switch (e) {
    case "compositionend":
      return Cf(t);
    case "keypress":
      return t.which !== 32 ? null : ((rc = !0), nc);
    case "textInput":
      return (e = t.data), e === nc && rc ? null : e;
    default:
      return null;
  }
}
function gv(e, t) {
  if (qn)
    return e === "compositionend" || (!Bu && Ef(e, t))
      ? ((e = xf()), (vl = $u = ln = null), (qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function oc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yv[e.type] : t === "textarea";
}
function Pf(e, t, n, r) {
  tf(r),
    (t = Fl(t, "onChange")),
    0 < t.length &&
      ((n = new Au("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var io = null,
  Eo = null;
function wv(e) {
  If(e, 0);
}
function ui(e) {
  var t = tr(e);
  if (Gd(t)) return e;
}
function Sv(e, t) {
  if (e === "change") return t;
}
var Rf = !1;
if (Ht) {
  var Yi;
  if (Ht) {
    var Gi = "oninput" in document;
    if (!Gi) {
      var lc = document.createElement("div");
      lc.setAttribute("oninput", "return;"),
        (Gi = typeof lc.oninput == "function");
    }
    Yi = Gi;
  } else Yi = !1;
  Rf = Yi && (!document.documentMode || 9 < document.documentMode);
}
function ic() {
  io && (io.detachEvent("onpropertychange", _f), (Eo = io = null));
}
function _f(e) {
  if (e.propertyName === "value" && ui(Eo)) {
    var t = [];
    Pf(t, Eo, e, zu(e)), lf(wv, t);
  }
}
function xv(e, t, n) {
  e === "focusin"
    ? (ic(), (io = t), (Eo = n), io.attachEvent("onpropertychange", _f))
    : e === "focusout" && ic();
}
function kv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ui(Eo);
}
function Ev(e, t) {
  if (e === "click") return ui(t);
}
function Cv(e, t) {
  if (e === "input" || e === "change") return ui(t);
}
function Pv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rt = typeof Object.is == "function" ? Object.is : Pv;
function Co(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wa.call(t, o) || !Rt(e[o], t[o])) return !1;
  }
  return !0;
}
function ac(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uc(e, t) {
  var n = ac(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ac(n);
  }
}
function Nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jf() {
  for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tl(e.document);
  }
  return t;
}
function Vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rv(e) {
  var t = jf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = uc(n, l));
        var i = uc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var _v = Ht && "documentMode" in document && 11 >= document.documentMode,
  bn = null,
  $a = null,
  ao = null,
  Aa = !1;
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Aa ||
    bn == null ||
    bn !== Tl(r) ||
    ((r = bn),
    "selectionStart" in r && Vu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ao && Co(ao, r)) ||
      ((ao = r),
      (r = Fl($a, "onSelect")),
      0 < r.length &&
        ((t = new Au("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bn))));
}
function nl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var er = {
    animationend: nl("Animation", "AnimationEnd"),
    animationiteration: nl("Animation", "AnimationIteration"),
    animationstart: nl("Animation", "AnimationStart"),
    transitionend: nl("Transition", "TransitionEnd"),
  },
  Xi = {},
  Tf = {};
Ht &&
  ((Tf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete er.animationend.animation,
    delete er.animationiteration.animation,
    delete er.animationstart.animation),
  "TransitionEvent" in window || delete er.transitionend.transition);
function si(e) {
  if (Xi[e]) return Xi[e];
  if (!er[e]) return e;
  var t = er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tf) return (Xi[e] = t[n]);
  return e;
}
var Lf = si("animationend"),
  Df = si("animationiteration"),
  zf = si("animationstart"),
  Mf = si("transitionend"),
  Of = new Map(),
  cc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yn(e, t) {
  Of.set(e, t), Wn(t, [e]);
}
for (var Zi = 0; Zi < cc.length; Zi++) {
  var Ji = cc[Zi],
    Nv = Ji.toLowerCase(),
    jv = Ji[0].toUpperCase() + Ji.slice(1);
  yn(Nv, "on" + jv);
}
yn(Lf, "onAnimationEnd");
yn(Df, "onAnimationIteration");
yn(zf, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(Mf, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var to =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Tv = new Set("cancel close invalid load scroll toggle".split(" ").concat(to));
function dc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Nm(r, t, void 0, e), (e.currentTarget = null);
}
function If(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== l && o.isPropagationStopped())) break e;
          dc(o, a, s), (l = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          dc(o, a, s), (l = u);
        }
    }
  }
  if (Dl) throw ((e = Ma), (Dl = !1), (Ma = null), e);
}
function re(e, t) {
  var n = t[Ha];
  n === void 0 && (n = t[Ha] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ff(t, e, 2, !1), n.add(r));
}
function qi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ff(n, e, r, t);
}
var rl = "_reactListening" + Math.random().toString(36).slice(2);
function Po(e) {
  if (!e[rl]) {
    (e[rl] = !0),
      Wd.forEach(function (n) {
        n !== "selectionchange" && (Tv.has(n) || qi(n, !1, e), qi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rl] || ((t[rl] = !0), qi("selectionchange", !1, t));
  }
}
function Ff(e, t, n, r) {
  switch (Sf(t)) {
    case 1:
      var o = Hm;
      break;
    case 4:
      o = Km;
      break;
    default:
      o = Fu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !za ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function bi(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Rn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  lf(function () {
    var s = l,
      d = zu(n),
      m = [];
    e: {
      var p = Of.get(e);
      if (p !== void 0) {
        var w = Au,
          g = e;
        switch (e) {
          case "keypress":
            if (gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = iv;
            break;
          case "focusin":
            (g = "focus"), (w = Qi);
            break;
          case "focusout":
            (g = "blur"), (w = Qi);
            break;
          case "beforeblur":
          case "afterblur":
            w = Qi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = bs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Gm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = sv;
            break;
          case Lf:
          case Df:
          case zf:
            w = Jm;
            break;
          case Mf:
            w = dv;
            break;
          case "scroll":
            w = Qm;
            break;
          case "wheel":
            w = pv;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = bm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = tc;
        }
        var x = (t & 4) !== 0,
          R = !x && e === "scroll",
          h = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var c = s, v; c !== null; ) {
          v = c;
          var f = v.stateNode;
          if (
            (v.tag === 5 &&
              f !== null &&
              ((v = f),
              h !== null && ((f = wo(c, h)), f != null && x.push(Ro(c, f, v)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((p = new w(p, g, null, n, d)), m.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== La &&
            (g = n.relatedTarget || n.fromElement) &&
            (Rn(g) || g[Kt]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = s),
              (g = g ? Rn(g) : null),
              g !== null &&
                ((R = Hn(g)), g !== R || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = s)),
          w !== g)
        ) {
          if (
            ((x = bs),
            (f = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = tc),
              (f = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (R = w == null ? p : tr(w)),
            (v = g == null ? p : tr(g)),
            (p = new x(f, c + "leave", w, n, d)),
            (p.target = R),
            (p.relatedTarget = v),
            (f = null),
            Rn(d) === s &&
              ((x = new x(h, c + "enter", g, n, d)),
              (x.target = v),
              (x.relatedTarget = R),
              (f = x)),
            (R = f),
            w && g)
          )
            t: {
              for (x = w, h = g, c = 0, v = x; v; v = Yn(v)) c++;
              for (v = 0, f = h; f; f = Yn(f)) v++;
              for (; 0 < c - v; ) (x = Yn(x)), c--;
              for (; 0 < v - c; ) (h = Yn(h)), v--;
              for (; c--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = Yn(x)), (h = Yn(h));
              }
              x = null;
            }
          else x = null;
          w !== null && fc(m, p, w, x, !1),
            g !== null && R !== null && fc(m, R, g, x, !0);
        }
      }
      e: {
        if (
          ((p = s ? tr(s) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var P = Sv;
        else if (oc(p))
          if (Rf) P = Cv;
          else {
            P = kv;
            var j = xv;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (P = Ev);
        if (P && (P = P(e, s))) {
          Pf(m, P, n, d);
          break e;
        }
        j && j(e, p, s),
          e === "focusout" &&
            (j = p._wrapperState) &&
            j.controlled &&
            p.type === "number" &&
            Ra(p, "number", p.value);
      }
      switch (((j = s ? tr(s) : window), e)) {
        case "focusin":
          (oc(j) || j.contentEditable === "true") &&
            ((bn = j), ($a = s), (ao = null));
          break;
        case "focusout":
          ao = $a = bn = null;
          break;
        case "mousedown":
          Aa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Aa = !1), sc(m, n, d);
          break;
        case "selectionchange":
          if (_v) break;
        case "keydown":
        case "keyup":
          sc(m, n, d);
      }
      var y;
      if (Bu)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        qn
          ? Ef(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (kf &&
          n.locale !== "ko" &&
          (qn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && qn && (y = xf())
            : ((ln = d),
              ($u = "value" in ln ? ln.value : ln.textContent),
              (qn = !0))),
        (j = Fl(s, _)),
        0 < j.length &&
          ((_ = new ec(_, e, null, n, d)),
          m.push({ event: _, listeners: j }),
          y ? (_.data = y) : ((y = Cf(n)), y !== null && (_.data = y)))),
        (y = mv ? vv(e, n) : gv(e, n)) &&
          ((s = Fl(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new ec("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: s }),
            (d.data = y)));
    }
    If(m, t);
  });
}
function Ro(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = wo(e, n)),
      l != null && r.unshift(Ro(e, l, o)),
      (l = wo(e, t)),
      l != null && r.push(Ro(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fc(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      o
        ? ((u = wo(n, l)), u != null && i.unshift(Ro(n, u, a)))
        : o || ((u = wo(n, l)), u != null && i.push(Ro(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Lv = /\r\n?/g,
  Dv = /\u0000|\uFFFD/g;
function pc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lv,
      `
`
    )
    .replace(Dv, "");
}
function ol(e, t, n) {
  if (((t = pc(t)), pc(e) !== t && n)) throw Error(T(425));
}
function $l() {}
var Ua = null,
  Ba = null;
function Va(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wa = typeof setTimeout == "function" ? setTimeout : void 0,
  zv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hc = typeof Promise == "function" ? Promise : void 0,
  Mv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hc < "u"
      ? function (e) {
          return hc.resolve(null).then(e).catch(Ov);
        }
      : Wa;
function Ov(e) {
  setTimeout(function () {
    throw e;
  });
}
function ea(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ko(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ko(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Lr = Math.random().toString(36).slice(2),
  zt = "__reactFiber$" + Lr,
  _o = "__reactProps$" + Lr,
  Kt = "__reactContainer$" + Lr,
  Ha = "__reactEvents$" + Lr,
  Iv = "__reactListeners$" + Lr,
  Fv = "__reactHandles$" + Lr;
function Rn(e) {
  var t = e[zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kt] || n[zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = mc(e); e !== null; ) {
          if ((n = e[zt])) return n;
          e = mc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Uo(e) {
  return (
    (e = e[zt] || e[Kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function ci(e) {
  return e[_o] || null;
}
var Ka = [],
  nr = -1;
function wn(e) {
  return { current: e };
}
function le(e) {
  0 > nr || ((e.current = Ka[nr]), (Ka[nr] = null), nr--);
}
function ne(e, t) {
  nr++, (Ka[nr] = e.current), (e.current = t);
}
var gn = {},
  $e = wn(gn),
  Ge = wn(!1),
  In = gn;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Al() {
  le(Ge), le($e);
}
function vc(e, t, n) {
  if ($e.current !== gn) throw Error(T(168));
  ne($e, t), ne(Ge, n);
}
function $f(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, xm(e) || "Unknown", o));
  return de({}, n, r);
}
function Ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
    (In = $e.current),
    ne($e, e),
    ne(Ge, Ge.current),
    !0
  );
}
function gc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = $f(e, t, In)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(Ge),
      le($e),
      ne($e, e))
    : le(Ge),
    ne(Ge, n);
}
var At = null,
  di = !1,
  ta = !1;
function Af(e) {
  At === null ? (At = [e]) : At.push(e);
}
function $v(e) {
  (di = !0), Af(e);
}
function Sn() {
  if (!ta && At !== null) {
    ta = !0;
    var e = 0,
      t = b;
    try {
      var n = At;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (At = null), (di = !1);
    } catch (o) {
      throw (At !== null && (At = At.slice(e + 1)), cf(Mu, Sn), o);
    } finally {
      (b = t), (ta = !1);
    }
  }
  return null;
}
var rr = [],
  or = 0,
  Bl = null,
  Vl = 0,
  ut = [],
  st = 0,
  Fn = null,
  Ut = 1,
  Bt = "";
function Cn(e, t) {
  (rr[or++] = Vl), (rr[or++] = Bl), (Bl = e), (Vl = t);
}
function Uf(e, t, n) {
  (ut[st++] = Ut), (ut[st++] = Bt), (ut[st++] = Fn), (Fn = e);
  var r = Ut;
  e = Bt;
  var o = 32 - Et(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Et(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ut = (1 << (32 - Et(t) + o)) | (n << o) | r),
      (Bt = l + e);
  } else (Ut = (1 << l) | (n << o) | r), (Bt = e);
}
function Wu(e) {
  e.return !== null && (Cn(e, 1), Uf(e, 1, 0));
}
function Hu(e) {
  for (; e === Bl; )
    (Bl = rr[--or]), (rr[or] = null), (Vl = rr[--or]), (rr[or] = null);
  for (; e === Fn; )
    (Fn = ut[--st]),
      (ut[st] = null),
      (Bt = ut[--st]),
      (ut[st] = null),
      (Ut = ut[--st]),
      (ut[st] = null);
}
var tt = null,
  et = null,
  ae = !1,
  kt = null;
function Bf(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: Ut, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ya(e) {
  if (ae) {
    var t = et;
    if (t) {
      var n = t;
      if (!yc(e, t)) {
        if (Qa(e)) throw Error(T(418));
        t = dn(n.nextSibling);
        var r = tt;
        t && yc(e, t)
          ? Bf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (tt = e));
      }
    } else {
      if (Qa(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (tt = e);
    }
  }
}
function wc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function ll(e) {
  if (e !== tt) return !1;
  if (!ae) return wc(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Va(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (Qa(e)) throw (Vf(), Error(T(418)));
    for (; t; ) Bf(e, t), (t = dn(t.nextSibling));
  }
  if ((wc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vf() {
  for (var e = et; e; ) e = dn(e.nextSibling);
}
function wr() {
  (et = tt = null), (ae = !1);
}
function Ku(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var Av = Gt.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wl = wn(null),
  Hl = null,
  lr = null,
  Qu = null;
function Yu() {
  Qu = lr = Hl = null;
}
function Gu(e) {
  var t = Wl.current;
  le(Wl), (e._currentValue = t);
}
function Ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hr(e, t) {
  (Hl = e),
    (Qu = lr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (Qu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), lr === null)) {
      if (Hl === null) throw Error(T(308));
      (lr = e), (Hl.dependencies = { lanes: 0, firstContext: e });
    } else lr = lr.next = e;
  return t;
}
var _n = null;
function Xu(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function Wf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Xu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nn = !1;
function Zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Xu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function yl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ou(e, n);
  }
}
function Sc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Kl(e, t, n, r) {
  var o = e.updateQueue;
  nn = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (l = s) : (i.next = s), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
        (d.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var m = o.baseState;
    (i = 0), (d = s = u = null), (a = l);
    do {
      var p = a.lane,
        w = a.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            x = a;
          switch (((p = t), (w = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == "function")) {
                m = g.call(w, m, p);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (p = typeof g == "function" ? g.call(w, m, p) : g),
                p == null)
              )
                break e;
              m = de({}, m, p);
              break e;
            case 2:
              nn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = w), (u = m)) : (d = d.next = w),
          (i |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = m),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (An |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function xc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Kf = new Vd.Component().refs;
function Xa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      o = hn(e),
      l = Vt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = fn(e, l, o)),
      t !== null && (Ct(t, e, o, r), yl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      o = hn(e),
      l = Vt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = fn(e, l, o)),
      t !== null && (Ct(t, e, o, r), yl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = hn(e),
      o = Vt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = fn(e, o, r)),
      t !== null && (Ct(t, e, r, n), yl(t, e, r));
  },
};
function kc(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Co(n, r) || !Co(o, l)
      : !0
  );
}
function Qf(e, t, n) {
  var r = !1,
    o = gn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = ft(l))
      : ((o = Xe(t) ? In : $e.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? yr(e, o) : gn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ec(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fi.enqueueReplaceState(t, t.state, null);
}
function Za(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Kf), Zu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = ft(l))
    : ((l = Xe(t) ? In : $e.current), (o.context = yr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Xa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && fi.enqueueReplaceState(o, o.state, null),
      Kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            a === Kf && (a = o.refs = {}),
              i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function il(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cc(e) {
  var t = e._init;
  return t(e._payload);
}
function Yf(e) {
  function t(h, c) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [c]), (h.flags |= 16)) : v.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function o(h, c) {
    return (h = mn(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, c, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < c ? ((h.flags |= 2), c) : v)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, c, v, f) {
    return c === null || c.tag !== 6
      ? ((c = ua(v, h.mode, f)), (c.return = h), c)
      : ((c = o(c, v)), (c.return = h), c);
  }
  function u(h, c, v, f) {
    var P = v.type;
    return P === Jn
      ? d(h, c, v.props.children, f, v.key)
      : c !== null &&
        (c.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === tn &&
            Cc(P) === c.type))
      ? ((f = o(c, v.props)), (f.ref = Hr(h, c, v)), (f.return = h), f)
      : ((f = Cl(v.type, v.key, v.props, null, h.mode, f)),
        (f.ref = Hr(h, c, v)),
        (f.return = h),
        f);
  }
  function s(h, c, v, f) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== v.containerInfo ||
      c.stateNode.implementation !== v.implementation
      ? ((c = sa(v, h.mode, f)), (c.return = h), c)
      : ((c = o(c, v.children || [])), (c.return = h), c);
  }
  function d(h, c, v, f, P) {
    return c === null || c.tag !== 7
      ? ((c = Dn(v, h.mode, f, P)), (c.return = h), c)
      : ((c = o(c, v)), (c.return = h), c);
  }
  function m(h, c, v) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ua("" + c, h.mode, v)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Xo:
          return (
            (v = Cl(c.type, c.key, c.props, null, h.mode, v)),
            (v.ref = Hr(h, null, c)),
            (v.return = h),
            v
          );
        case Zn:
          return (c = sa(c, h.mode, v)), (c.return = h), c;
        case tn:
          var f = c._init;
          return m(h, f(c._payload), v);
      }
      if (br(c) || Ar(c))
        return (c = Dn(c, h.mode, v, null)), (c.return = h), c;
      il(h, c);
    }
    return null;
  }
  function p(h, c, v, f) {
    var P = c !== null ? c.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return P !== null ? null : a(h, c, "" + v, f);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Xo:
          return v.key === P ? u(h, c, v, f) : null;
        case Zn:
          return v.key === P ? s(h, c, v, f) : null;
        case tn:
          return (P = v._init), p(h, c, P(v._payload), f);
      }
      if (br(v) || Ar(v)) return P !== null ? null : d(h, c, v, f, null);
      il(h, v);
    }
    return null;
  }
  function w(h, c, v, f, P) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (h = h.get(v) || null), a(c, h, "" + f, P);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Xo:
          return (h = h.get(f.key === null ? v : f.key) || null), u(c, h, f, P);
        case Zn:
          return (h = h.get(f.key === null ? v : f.key) || null), s(c, h, f, P);
        case tn:
          var j = f._init;
          return w(h, c, v, j(f._payload), P);
      }
      if (br(f) || Ar(f)) return (h = h.get(v) || null), d(c, h, f, P, null);
      il(c, f);
    }
    return null;
  }
  function g(h, c, v, f) {
    for (
      var P = null, j = null, y = c, _ = (c = 0), z = null;
      y !== null && _ < v.length;
      _++
    ) {
      y.index > _ ? ((z = y), (y = null)) : (z = y.sibling);
      var I = p(h, y, v[_], f);
      if (I === null) {
        y === null && (y = z);
        break;
      }
      e && y && I.alternate === null && t(h, y),
        (c = l(I, c, _)),
        j === null ? (P = I) : (j.sibling = I),
        (j = I),
        (y = z);
    }
    if (_ === v.length) return n(h, y), ae && Cn(h, _), P;
    if (y === null) {
      for (; _ < v.length; _++)
        (y = m(h, v[_], f)),
          y !== null &&
            ((c = l(y, c, _)), j === null ? (P = y) : (j.sibling = y), (j = y));
      return ae && Cn(h, _), P;
    }
    for (y = r(h, y); _ < v.length; _++)
      (z = w(y, h, _, v[_], f)),
        z !== null &&
          (e && z.alternate !== null && y.delete(z.key === null ? _ : z.key),
          (c = l(z, c, _)),
          j === null ? (P = z) : (j.sibling = z),
          (j = z));
    return (
      e &&
        y.forEach(function (Z) {
          return t(h, Z);
        }),
      ae && Cn(h, _),
      P
    );
  }
  function x(h, c, v, f) {
    var P = Ar(v);
    if (typeof P != "function") throw Error(T(150));
    if (((v = P.call(v)), v == null)) throw Error(T(151));
    for (
      var j = (P = null), y = c, _ = (c = 0), z = null, I = v.next();
      y !== null && !I.done;
      _++, I = v.next()
    ) {
      y.index > _ ? ((z = y), (y = null)) : (z = y.sibling);
      var Z = p(h, y, I.value, f);
      if (Z === null) {
        y === null && (y = z);
        break;
      }
      e && y && Z.alternate === null && t(h, y),
        (c = l(Z, c, _)),
        j === null ? (P = Z) : (j.sibling = Z),
        (j = Z),
        (y = z);
    }
    if (I.done) return n(h, y), ae && Cn(h, _), P;
    if (y === null) {
      for (; !I.done; _++, I = v.next())
        (I = m(h, I.value, f)),
          I !== null &&
            ((c = l(I, c, _)), j === null ? (P = I) : (j.sibling = I), (j = I));
      return ae && Cn(h, _), P;
    }
    for (y = r(h, y); !I.done; _++, I = v.next())
      (I = w(y, h, _, I.value, f)),
        I !== null &&
          (e && I.alternate !== null && y.delete(I.key === null ? _ : I.key),
          (c = l(I, c, _)),
          j === null ? (P = I) : (j.sibling = I),
          (j = I));
    return (
      e &&
        y.forEach(function (fe) {
          return t(h, fe);
        }),
      ae && Cn(h, _),
      P
    );
  }
  function R(h, c, v, f) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Jn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Xo:
          e: {
            for (var P = v.key, j = c; j !== null; ) {
              if (j.key === P) {
                if (((P = v.type), P === Jn)) {
                  if (j.tag === 7) {
                    n(h, j.sibling),
                      (c = o(j, v.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  j.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === tn &&
                    Cc(P) === j.type)
                ) {
                  n(h, j.sibling),
                    (c = o(j, v.props)),
                    (c.ref = Hr(h, j, v)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, j);
                break;
              } else t(h, j);
              j = j.sibling;
            }
            v.type === Jn
              ? ((c = Dn(v.props.children, h.mode, f, v.key)),
                (c.return = h),
                (h = c))
              : ((f = Cl(v.type, v.key, v.props, null, h.mode, f)),
                (f.ref = Hr(h, c, v)),
                (f.return = h),
                (h = f));
          }
          return i(h);
        case Zn:
          e: {
            for (j = v.key; c !== null; ) {
              if (c.key === j)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === v.containerInfo &&
                  c.stateNode.implementation === v.implementation
                ) {
                  n(h, c.sibling),
                    (c = o(c, v.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = sa(v, h.mode, f)), (c.return = h), (h = c);
          }
          return i(h);
        case tn:
          return (j = v._init), R(h, c, j(v._payload), f);
      }
      if (br(v)) return g(h, c, v, f);
      if (Ar(v)) return x(h, c, v, f);
      il(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = o(c, v)), (c.return = h), (h = c))
          : (n(h, c), (c = ua(v, h.mode, f)), (c.return = h), (h = c)),
        i(h))
      : n(h, c);
  }
  return R;
}
var Sr = Yf(!0),
  Gf = Yf(!1),
  Bo = {},
  Ot = wn(Bo),
  No = wn(Bo),
  jo = wn(Bo);
function Nn(e) {
  if (e === Bo) throw Error(T(174));
  return e;
}
function Ju(e, t) {
  switch ((ne(jo, t), ne(No, e), ne(Ot, Bo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Na(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Na(t, e));
  }
  le(Ot), ne(Ot, t);
}
function xr() {
  le(Ot), le(No), le(jo);
}
function Xf(e) {
  Nn(jo.current);
  var t = Nn(Ot.current),
    n = Na(t, e.type);
  t !== n && (ne(No, e), ne(Ot, n));
}
function qu(e) {
  No.current === e && (le(Ot), le(No));
}
var se = wn(0);
function Ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var na = [];
function bu() {
  for (var e = 0; e < na.length; e++)
    na[e]._workInProgressVersionPrimary = null;
  na.length = 0;
}
var wl = Gt.ReactCurrentDispatcher,
  ra = Gt.ReactCurrentBatchConfig,
  $n = 0,
  ce = null,
  Ee = null,
  Pe = null,
  Yl = !1,
  uo = !1,
  To = 0,
  Uv = 0;
function Oe() {
  throw Error(T(321));
}
function es(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function ts(e, t, n, r, o, l) {
  if (
    (($n = l),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wl.current = e === null || e.memoizedState === null ? Hv : Kv),
    (e = n(r, o)),
    uo)
  ) {
    l = 0;
    do {
      if (((uo = !1), (To = 0), 25 <= l)) throw Error(T(301));
      (l += 1),
        (Pe = Ee = null),
        (t.updateQueue = null),
        (wl.current = Qv),
        (e = n(r, o));
    } while (uo);
  }
  if (
    ((wl.current = Gl),
    (t = Ee !== null && Ee.next !== null),
    ($n = 0),
    (Pe = Ee = ce = null),
    (Yl = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function ns() {
  var e = To !== 0;
  return (To = 0), e;
}
function Lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (ce.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function pt() {
  if (Ee === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Pe === null ? ce.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Ee = e);
  else {
    if (e === null) throw Error(T(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Pe === null ? (ce.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function Lo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oa(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = l;
    do {
      var d = s.lane;
      if (($n & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = m), (i = r)) : (u = u.next = m),
          (ce.lanes |= d),
          (An |= d);
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? (i = r) : (u.next = a),
      Rt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ce.lanes |= l), (An |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function la(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Rt(l, t.memoizedState) || (Qe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Zf() {}
function Jf(e, t) {
  var n = ce,
    r = pt(),
    o = t(),
    l = !Rt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Qe = !0)),
    (r = r.queue),
    rs(ep.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Do(9, bf.bind(null, n, r, o, t), void 0, null),
      _e === null)
    )
      throw Error(T(349));
    $n & 30 || qf(n, t, o);
  }
  return o;
}
function qf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tp(t) && np(e);
}
function ep(e, t, n) {
  return n(function () {
    tp(t) && np(e);
  });
}
function tp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function np(e) {
  var t = Qt(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Pc(e) {
  var t = Lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wv.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function Do(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rp() {
  return pt().memoizedState;
}
function Sl(e, t, n, r) {
  var o = Lt();
  (ce.flags |= e),
    (o.memoizedState = Do(1 | t, n, void 0, r === void 0 ? null : r));
}
function pi(e, t, n, r) {
  var o = pt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Ee !== null) {
    var i = Ee.memoizedState;
    if (((l = i.destroy), r !== null && es(r, i.deps))) {
      o.memoizedState = Do(t, n, l, r);
      return;
    }
  }
  (ce.flags |= e), (o.memoizedState = Do(1 | t, n, l, r));
}
function Rc(e, t) {
  return Sl(8390656, 8, e, t);
}
function rs(e, t) {
  return pi(2048, 8, e, t);
}
function op(e, t) {
  return pi(4, 2, e, t);
}
function lp(e, t) {
  return pi(4, 4, e, t);
}
function ip(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ap(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pi(4, 4, ip.bind(null, t, e), n)
  );
}
function os() {}
function up(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && es(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sp(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && es(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cp(e, t, n) {
  return $n & 21
    ? (Rt(n, t) || ((n = pf()), (ce.lanes |= n), (An |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function Bv(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ra.transition;
  ra.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (ra.transition = r);
  }
}
function dp() {
  return pt().memoizedState;
}
function Vv(e, t, n) {
  var r = hn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fp(e))
  )
    pp(t, n);
  else if (((n = Wf(e, t, n, r)), n !== null)) {
    var o = Be();
    Ct(n, e, r, o), hp(n, t, r);
  }
}
function Wv(e, t, n) {
  var r = hn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fp(e)) pp(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Rt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Xu(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wf(e, t, o, r)),
      n !== null && ((o = Be()), Ct(n, e, r, o), hp(n, t, r));
  }
}
function fp(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function pp(e, t) {
  uo = Yl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ou(e, n);
  }
}
var Gl = {
    readContext: ft,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  Hv = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: Rc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Sl(4194308, 4, ip.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Sl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Sl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vv.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Pc,
    useDebugValue: os,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Pc(!1),
        t = e[0];
      return (e = Bv.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        o = Lt();
      if (ae) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(T(349));
        $n & 30 || qf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Rc(ep.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Do(9, bf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = _e.identifierPrefix;
      if (ae) {
        var n = Bt,
          r = Ut;
        (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = To++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kv = {
    readContext: ft,
    useCallback: up,
    useContext: ft,
    useEffect: rs,
    useImperativeHandle: ap,
    useInsertionEffect: op,
    useLayoutEffect: lp,
    useMemo: sp,
    useReducer: oa,
    useRef: rp,
    useState: function () {
      return oa(Lo);
    },
    useDebugValue: os,
    useDeferredValue: function (e) {
      var t = pt();
      return cp(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(Lo)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zf,
    useSyncExternalStore: Jf,
    useId: dp,
    unstable_isNewReconciler: !1,
  },
  Qv = {
    readContext: ft,
    useCallback: up,
    useContext: ft,
    useEffect: rs,
    useImperativeHandle: ap,
    useInsertionEffect: op,
    useLayoutEffect: lp,
    useMemo: sp,
    useReducer: la,
    useRef: rp,
    useState: function () {
      return la(Lo);
    },
    useDebugValue: os,
    useDeferredValue: function (e) {
      var t = pt();
      return Ee === null ? (t.memoizedState = e) : cp(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = la(Lo)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zf,
    useSyncExternalStore: Jf,
    useId: dp,
    unstable_isNewReconciler: !1,
  };
function kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ia(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yv = typeof WeakMap == "function" ? WeakMap : Map;
function mp(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zl || ((Zl = !0), (au = r)), Ja(e, t);
    }),
    n
  );
}
function vp(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ja(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Ja(e, t),
          typeof r != "function" &&
            (pn === null ? (pn = new Set([this])) : pn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function _c(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ag.bind(null, e, t, n)), t.then(e, e));
}
function Nc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Vt(-1, 1)), (t.tag = 2), fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gv = Gt.ReactCurrentOwner,
  Qe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? Gf(t, null, n, r) : Sr(t, e.child, n, r);
}
function Tc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    hr(t, o),
    (r = ts(e, t, n, r, l, o)),
    (n = ns()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (ae && n && Wu(t), (t.flags |= 1), Ue(e, t, r, o), t.child)
  );
}
function Lc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !fs(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), gp(e, t, l, r, o))
      : ((e = Cl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Co), n(i, r) && e.ref === t.ref)
    )
      return Yt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = mn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Co(l, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), Yt(e, t, o);
  }
  return qa(e, t, n, r, o);
}
function yp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(ar, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(ar, be),
          (be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        ne(ar, be),
        (be |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(ar, be),
      (be |= r);
  return Ue(e, t, o, n), t.child;
}
function wp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qa(e, t, n, r, o) {
  var l = Xe(n) ? In : $e.current;
  return (
    (l = yr(t, l)),
    hr(t, o),
    (n = ts(e, t, n, r, l, o)),
    (r = ns()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (ae && r && Wu(t), (t.flags |= 1), Ue(e, t, n, o), t.child)
  );
}
function Dc(e, t, n, r, o) {
  if (Xe(n)) {
    var l = !0;
    Ul(t);
  } else l = !1;
  if ((hr(t, o), t.stateNode === null))
    xl(e, t), Qf(t, n, r), Za(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((s = Xe(n) ? In : $e.current), (s = yr(t, s)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Ec(t, i, r, s)),
      (nn = !1);
    var p = t.memoizedState;
    (i.state = p),
      Kl(t, r, i, o),
      (u = t.memoizedState),
      a !== r || p !== u || Ge.current || nn
        ? (typeof d == "function" && (Xa(t, n, d, r), (u = t.memoizedState)),
          (a = nn || kc(t, n, a, r, p, u, s))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Hf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : wt(t.type, a)),
      (i.props = s),
      (m = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ft(u))
        : ((u = Xe(n) ? In : $e.current), (u = yr(t, u)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || p !== u) && Ec(t, i, r, u)),
      (nn = !1),
      (p = t.memoizedState),
      (i.state = p),
      Kl(t, r, i, o);
    var g = t.memoizedState;
    a !== m || p !== g || Ge.current || nn
      ? (typeof w == "function" && (Xa(t, n, w, r), (g = t.memoizedState)),
        (s = nn || kc(t, n, s, r, p, g, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ba(e, t, n, r, l, o);
}
function ba(e, t, n, r, o, l) {
  wp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && gc(t, n, !1), Yt(e, t, l);
  (r = t.stateNode), (Gv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Sr(t, e.child, null, l)), (t.child = Sr(t, null, a, l)))
      : Ue(e, t, a, l),
    (t.memoizedState = r.state),
    o && gc(t, n, !0),
    t.child
  );
}
function Sp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vc(e, t.context, !1),
    Ju(e, t.containerInfo);
}
function zc(e, t, n, r, o) {
  return wr(), Ku(o), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xp(e, t, n) {
  var r = t.pendingProps,
    o = se.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(se, o & 1),
    e === null)
  )
    return (
      Ya(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = vi(i, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = tu(n)),
              (t.memoizedState = eu),
              e)
            : ls(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Xv(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = mn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = mn(a, l)) : ((l = Dn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? tu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = eu),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = mn(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ls(e, t) {
  return (
    (t = vi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function al(e, t, n, r) {
  return (
    r !== null && Ku(r),
    Sr(t, e.child, null, n),
    (e = ls(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xv(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ia(Error(T(422)))), al(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = vi({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Dn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Sr(t, e.child, null, i),
        (t.child.memoizedState = tu(i)),
        (t.memoizedState = eu),
        l);
  if (!(t.mode & 1)) return al(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(T(419))), (r = ia(l, r, void 0)), al(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Qe || a)) {
    if (((r = _e), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Qt(e, o), Ct(r, e, o, -1));
    }
    return ds(), (r = ia(Error(T(421)))), al(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ug.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (et = dn(o.nextSibling)),
      (tt = t),
      (ae = !0),
      (kt = null),
      e !== null &&
        ((ut[st++] = Ut),
        (ut[st++] = Bt),
        (ut[st++] = Fn),
        (Ut = e.id),
        (Bt = e.overflow),
        (Fn = t)),
      (t = ls(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ga(e.return, t, n);
}
function aa(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function kp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ue(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t);
        else if (e.tag === 19) Mc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ql(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          aa(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ql(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        aa(t, !0, n, null, l);
        break;
      case "together":
        aa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (An |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zv(e, t, n) {
  switch (t.tag) {
    case 3:
      Sp(t), wr();
      break;
    case 5:
      Xf(t);
      break;
    case 1:
      Xe(t.type) && Ul(t);
      break;
    case 4:
      Ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(Wl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xp(e, t, n)
          : (ne(se, se.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yp(e, t, n);
  }
  return Yt(e, t, n);
}
var Ep, nu, Cp, Pp;
Ep = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nu = function () {};
Cp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Nn(Ot.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ca(e, o)), (r = Ca(e, r)), (l = []);
        break;
      case "select":
        (o = de({}, o, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = _a(e, o)), (r = _a(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $l);
    }
    ja(n, r);
    var i;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var a = o[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (go.hasOwnProperty(s)
              ? l || (l = [])
              : (l = l || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (l || (l = []), l.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (l = l || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (go.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && re("scroll", e),
                  l || a === u || (l = []))
                : (l = l || []).push(s, u));
    }
    n && (l = l || []).push("style", n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Pp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kr(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jv(e, t, n) {
  var r = t.pendingProps;
  switch ((Hu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Xe(t.type) && Al(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xr(),
        le(Ge),
        le($e),
        bu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (cu(kt), (kt = null)))),
        nu(e, t),
        Ie(t),
        null
      );
    case 5:
      qu(t);
      var o = Nn(jo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Ie(t), null;
        }
        if (((e = Nn(Ot.current)), ll(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[zt] = t), (r[_o] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < to.length; o++) re(to[o], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Ws(r, l), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              Ks(r, l), re("invalid", r);
          }
          ja(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      ol(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      ol(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : go.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              Zo(r), Hs(r, l, !0);
              break;
            case "textarea":
              Zo(r), Qs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = $l);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[zt] = t),
            (e[_o] = r),
            Ep(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ta(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < to.length; o++) re(to[o], e);
                o = r;
                break;
              case "source":
                re("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (o = r);
                break;
              case "details":
                re("toggle", e), (o = r);
                break;
              case "input":
                Ws(e, r), (o = Ca(e, r)), re("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = de({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Ks(e, r), (o = _a(e, r)), re("invalid", e);
                break;
              default:
                o = r;
            }
            ja(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var u = a[l];
                l === "style"
                  ? ef(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && qd(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && yo(e, u)
                    : typeof u == "number" && yo(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (go.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && re("scroll", e)
                      : u != null && ju(e, l, u, i));
              }
            switch (n) {
              case "input":
                Zo(e), Hs(e, r, !1);
                break;
              case "textarea":
                Zo(e), Qs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? cr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = $l);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Pp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Nn(jo.current)), Nn(Ot.current), ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[zt] = t),
            (l = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ol(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ol(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[zt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (le(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && et !== null && t.mode & 1 && !(t.flags & 128))
          Vf(), wr(), (t.flags |= 98560), (l = !1);
        else if (((l = ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(T(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(T(317));
            l[zt] = t;
          } else
            wr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (l = !1);
        } else kt !== null && (cu(kt), (kt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? Ce === 0 && (Ce = 3) : ds())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        xr(), nu(e, t), e === null && Po(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return Gu(t.type._context), Ie(t), null;
    case 17:
      return Xe(t.type) && Al(), Ie(t), null;
    case 19:
      if ((le(se), (l = t.memoizedState), l === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Kr(l, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ql(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Kr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ye() > Er &&
            ((t.flags |= 128), (r = !0), Kr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ql(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !ae)
            )
              return Ie(t), null;
          } else
            2 * ye() - l.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ye()),
          (t.sibling = null),
          (n = se.current),
          ne(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        cs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? be & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function qv(e, t) {
  switch ((Hu(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && Al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xr(),
        le(Ge),
        le($e),
        bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qu(t), null;
    case 13:
      if (
        (le(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        wr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(se), null;
    case 4:
      return xr(), null;
    case 10:
      return Gu(t.type._context), null;
    case 22:
    case 23:
      return cs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ul = !1,
  Fe = !1,
  bv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function ru(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Oc = !1;
function eg(e, t) {
  if (((Ua = Ol), (e = jf()), Vu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (o !== 0 && m.nodeType !== 3) || (a = i + o),
                m !== l || (r !== 0 && m.nodeType !== 3) || (u = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++s === o && (a = i),
                p === l && ++d === r && (u = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ba = { focusedElem: e, selectionRange: n }, Ol = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    R = g.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : wt(t.type, x),
                      R
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (f) {
          he(t, t.return, f);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (g = Oc), (Oc = !1), g;
}
function so(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ru(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function hi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ou(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[zt], delete t[_o], delete t[Ha], delete t[Iv], delete t[Fv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ic(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _p(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $l));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), (e = e.sibling);
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
var Le = null,
  St = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) Np(e, t, n), (n = n.sibling);
}
function Np(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(ii, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || ir(n, t);
    case 6:
      var r = Le,
        o = St;
      (Le = null),
        qt(e, t, n),
        (Le = r),
        (St = o),
        Le !== null &&
          (St
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null &&
        (St
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? ea(e.parentNode, n)
              : e.nodeType === 1 && ea(e, n),
            ko(e))
          : ea(Le, n.stateNode));
      break;
    case 4:
      (r = Le),
        (o = St),
        (Le = n.stateNode.containerInfo),
        (St = !0),
        qt(e, t, n),
        (Le = r),
        (St = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && ru(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (ir(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), qt(e, t, n), (Fe = r))
        : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function Fc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bv()),
      t.forEach(function (r) {
        var o = sg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Le = a.stateNode), (St = !1);
              break e;
            case 3:
              (Le = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (Le = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (Le === null) throw Error(T(160));
        Np(l, i, o), (Le = null), (St = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (s) {
        he(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jp(t, e), (t = t.sibling);
}
function jp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Tt(e), r & 4)) {
        try {
          so(3, e, e.return), hi(3, e);
        } catch (x) {
          he(e, e.return, x);
        }
        try {
          so(5, e, e.return);
        } catch (x) {
          he(e, e.return, x);
        }
      }
      break;
    case 1:
      yt(t, e), Tt(e), r & 512 && n !== null && ir(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Tt(e),
        r & 512 && n !== null && ir(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          yo(o, "");
        } catch (x) {
          he(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Xd(o, l),
              Ta(a, i);
            var s = Ta(a, l);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                m = u[i + 1];
              d === "style"
                ? ef(o, m)
                : d === "dangerouslySetInnerHTML"
                ? qd(o, m)
                : d === "children"
                ? yo(o, m)
                : ju(o, d, m, s);
            }
            switch (a) {
              case "input":
                Pa(o, l);
                break;
              case "textarea":
                Zd(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var w = l.value;
                w != null
                  ? cr(o, !!l.multiple, w, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? cr(o, !!l.multiple, l.defaultValue, !0)
                      : cr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[_o] = l;
          } catch (x) {
            he(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (x) {
          he(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ko(t.containerInfo);
        } catch (x) {
          he(e, e.return, x);
        }
      break;
    case 4:
      yt(t, e), Tt(e);
      break;
    case 13:
      yt(t, e),
        Tt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (us = ye())),
        r & 4 && Fc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (s = Fe) || d), yt(t, e), (Fe = s)) : yt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (m = M = d; M !== null; ) {
              switch (((p = M), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  so(4, p, p.return);
                  break;
                case 1:
                  ir(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (x) {
                      he(r, n, x);
                    }
                  }
                  break;
                case 5:
                  ir(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ac(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (M = w)) : Ac(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (o = m.stateNode),
                  s
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = bd("display", i)));
              } catch (x) {
                he(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
              } catch (x) {
                he(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Tt(e), r & 4 && Fc(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (yo(o, ""), (r.flags &= -33));
          var l = Ic(e);
          iu(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ic(e);
          lu(e, a, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (u) {
      he(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tg(e, t, n) {
  (M = e), Tp(e);
}
function Tp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ul;
      if (!i) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || Fe;
        a = ul;
        var s = Fe;
        if (((ul = i), (Fe = u) && !s))
          for (M = o; M !== null; )
            (i = M),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Uc(o)
                : u !== null
                ? ((u.return = i), (M = u))
                : Uc(o);
        for (; l !== null; ) (M = l), Tp(l), (l = l.sibling);
        (M = o), (ul = a), (Fe = s);
      }
      $c(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (M = l)) : $c(e);
  }
}
function $c(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || hi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && xc(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && ko(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Fe || (t.flags & 512 && ou(t));
      } catch (p) {
        he(t, t.return, p);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ac(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Uc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hi(4, t);
          } catch (u) {
            he(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              he(t, o, u);
            }
          }
          var l = t.return;
          try {
            ou(t);
          } catch (u) {
            he(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ou(t);
          } catch (u) {
            he(t, i, u);
          }
      }
    } catch (u) {
      he(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var ng = Math.ceil,
  Xl = Gt.ReactCurrentDispatcher,
  is = Gt.ReactCurrentOwner,
  dt = Gt.ReactCurrentBatchConfig,
  X = 0,
  _e = null,
  ke = null,
  De = 0,
  be = 0,
  ar = wn(0),
  Ce = 0,
  zo = null,
  An = 0,
  mi = 0,
  as = 0,
  co = null,
  Ke = null,
  us = 0,
  Er = 1 / 0,
  Ft = null,
  Zl = !1,
  au = null,
  pn = null,
  sl = !1,
  an = null,
  Jl = 0,
  fo = 0,
  uu = null,
  kl = -1,
  El = 0;
function Be() {
  return X & 6 ? ye() : kl !== -1 ? kl : (kl = ye());
}
function hn(e) {
  return e.mode & 1
    ? X & 2 && De !== 0
      ? De & -De
      : Av.transition !== null
      ? (El === 0 && (El = pf()), El)
      : ((e = b),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sf(e.type))),
        e)
    : 1;
}
function Ct(e, t, n, r) {
  if (50 < fo) throw ((fo = 0), (uu = null), Error(T(185)));
  $o(e, n, r),
    (!(X & 2) || e !== _e) &&
      (e === _e && (!(X & 2) && (mi |= n), Ce === 4 && on(e, De)),
      Ze(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Er = ye() + 500), di && Sn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Am(e, t);
  var r = Ml(e, e === _e ? De : 0);
  if (r === 0)
    n !== null && Xs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xs(n), t === 1))
      e.tag === 0 ? $v(Bc.bind(null, e)) : Af(Bc.bind(null, e)),
        Mv(function () {
          !(X & 6) && Sn();
        }),
        (n = null);
    else {
      switch (hf(r)) {
        case 1:
          n = Mu;
          break;
        case 4:
          n = df;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = ff;
          break;
        default:
          n = zl;
      }
      n = $p(n, Lp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lp(e, t) {
  if (((kl = -1), (El = 0), X & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (mr() && e.callbackNode !== n) return null;
  var r = Ml(e, e === _e ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ql(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var l = zp();
    (_e !== e || De !== t) && ((Ft = null), (Er = ye() + 500), Ln(e, t));
    do
      try {
        lg();
        break;
      } catch (a) {
        Dp(e, a);
      }
    while (1);
    Yu(),
      (Xl.current = l),
      (X = o),
      ke !== null ? (t = 0) : ((_e = null), (De = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Oa(e)), o !== 0 && ((r = o), (t = su(e, o)))), t === 1)
    )
      throw ((n = zo), Ln(e, 0), on(e, r), Ze(e, ye()), n);
    if (t === 6) on(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !rg(o) &&
          ((t = ql(e, r)),
          t === 2 && ((l = Oa(e)), l !== 0 && ((r = l), (t = su(e, l)))),
          t === 1))
      )
        throw ((n = zo), Ln(e, 0), on(e, r), Ze(e, ye()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Pn(e, Ke, Ft);
          break;
        case 3:
          if (
            (on(e, r), (r & 130023424) === r && ((t = us + 500 - ye()), 10 < t))
          ) {
            if (Ml(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Wa(Pn.bind(null, e, Ke, Ft), t);
            break;
          }
          Pn(e, Ke, Ft);
          break;
        case 4:
          if ((on(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Et(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ng(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wa(Pn.bind(null, e, Ke, Ft), r);
            break;
          }
          Pn(e, Ke, Ft);
          break;
        case 5:
          Pn(e, Ke, Ft);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ze(e, ye()), e.callbackNode === n ? Lp.bind(null, e) : null;
}
function su(e, t) {
  var n = co;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = ql(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && cu(t)),
    e
  );
}
function cu(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function rg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Rt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function on(e, t) {
  for (
    t &= ~as,
      t &= ~mi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bc(e) {
  if (X & 6) throw Error(T(327));
  mr();
  var t = Ml(e, 0);
  if (!(t & 1)) return Ze(e, ye()), null;
  var n = ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oa(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = zo), Ln(e, 0), on(e, t), Ze(e, ye()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pn(e, Ke, Ft),
    Ze(e, ye()),
    null
  );
}
function ss(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Er = ye() + 500), di && Sn());
  }
}
function Un(e) {
  an !== null && an.tag === 0 && !(X & 6) && mr();
  var t = X;
  X |= 1;
  var n = dt.transition,
    r = b;
  try {
    if (((dt.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (dt.transition = n), (X = t), !(X & 6) && Sn();
  }
}
function cs() {
  (be = ar.current), le(ar);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zv(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((Hu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Al();
          break;
        case 3:
          xr(), le(Ge), le($e), bu();
          break;
        case 5:
          qu(r);
          break;
        case 4:
          xr();
          break;
        case 13:
          le(se);
          break;
        case 19:
          le(se);
          break;
        case 10:
          Gu(r.type._context);
          break;
        case 22:
        case 23:
          cs();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (ke = e = mn(e.current, null)),
    (De = be = t),
    (Ce = 0),
    (zo = null),
    (as = mi = An = 0),
    (Ke = co = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function Dp(e, t) {
  do {
    var n = ke;
    try {
      if ((Yu(), (wl.current = Gl), Yl)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Yl = !1;
      }
      if (
        (($n = 0),
        (Pe = Ee = ce = null),
        (uo = !1),
        (To = 0),
        (is.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (zo = t), (ke = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            d = a,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = Nc(i);
          if (w !== null) {
            (w.flags &= -257),
              jc(w, i, a, l, t),
              w.mode & 1 && _c(l, s, t),
              (t = w),
              (u = s);
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              _c(l, s, t), ds();
              break e;
            }
            u = Error(T(426));
          }
        } else if (ae && a.mode & 1) {
          var R = Nc(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              jc(R, i, a, l, t),
              Ku(kr(u, a));
            break e;
          }
        }
        (l = u = kr(u, a)),
          Ce !== 4 && (Ce = 2),
          co === null ? (co = [l]) : co.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = mp(l, u, t);
              Sc(l, h);
              break e;
            case 1:
              a = u;
              var c = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (pn === null || !pn.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var f = vp(l, a, t);
                Sc(l, f);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Op(n);
    } catch (P) {
      (t = P), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zp() {
  var e = Xl.current;
  return (Xl.current = Gl), e === null ? Gl : e;
}
function ds() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    _e === null || (!(An & 268435455) && !(mi & 268435455)) || on(_e, De);
}
function ql(e, t) {
  var n = X;
  X |= 2;
  var r = zp();
  (_e !== e || De !== t) && ((Ft = null), Ln(e, t));
  do
    try {
      og();
      break;
    } catch (o) {
      Dp(e, o);
    }
  while (1);
  if ((Yu(), (X = n), (Xl.current = r), ke !== null)) throw Error(T(261));
  return (_e = null), (De = 0), Ce;
}
function og() {
  for (; ke !== null; ) Mp(ke);
}
function lg() {
  for (; ke !== null && !Tm(); ) Mp(ke);
}
function Mp(e) {
  var t = Fp(e.alternate, e, be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Op(e) : (ke = t),
    (is.current = null);
}
function Op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qv(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (ke = null);
        return;
      }
    } else if (((n = Jv(n, t, be)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Pn(e, t, n) {
  var r = b,
    o = dt.transition;
  try {
    (dt.transition = null), (b = 1), ig(e, t, n, r);
  } finally {
    (dt.transition = o), (b = r);
  }
  return null;
}
function ig(e, t, n, r) {
  do mr();
  while (an !== null);
  if (X & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Um(e, l),
    e === _e && ((ke = _e = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      sl ||
      ((sl = !0),
      $p(zl, function () {
        return mr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = dt.transition), (dt.transition = null);
    var i = b;
    b = 1;
    var a = X;
    (X |= 4),
      (is.current = null),
      eg(e, n),
      jp(n, e),
      Rv(Ba),
      (Ol = !!Ua),
      (Ba = Ua = null),
      (e.current = n),
      tg(n),
      Lm(),
      (X = a),
      (b = i),
      (dt.transition = l);
  } else e.current = n;
  if (
    (sl && ((sl = !1), (an = e), (Jl = o)),
    (l = e.pendingLanes),
    l === 0 && (pn = null),
    Mm(n.stateNode),
    Ze(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zl) throw ((Zl = !1), (e = au), (au = null), e);
  return (
    Jl & 1 && e.tag !== 0 && mr(),
    (l = e.pendingLanes),
    l & 1 ? (e === uu ? fo++ : ((fo = 0), (uu = e))) : (fo = 0),
    Sn(),
    null
  );
}
function mr() {
  if (an !== null) {
    var e = hf(Jl),
      t = dt.transition,
      n = b;
    try {
      if (((dt.transition = null), (b = 16 > e ? 16 : e), an === null))
        var r = !1;
      else {
        if (((e = an), (an = null), (Jl = 0), X & 6)) throw Error(T(331));
        var o = X;
        for (X |= 4, M = e.current; M !== null; ) {
          var l = M,
            i = l.child;
          if (M.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (M = s; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      so(8, d, l);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (M = m);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var p = d.sibling,
                        w = d.return;
                      if ((Rp(d), d === s)) {
                        M = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (M = p);
                        break;
                      }
                      M = w;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var R = x.sibling;
                    (x.sibling = null), (x = R);
                  } while (x !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (M = i);
          else
            e: for (; M !== null; ) {
              if (((l = M), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    so(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (M = h);
                break e;
              }
              M = l.return;
            }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          i = M;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (M = v);
          else
            e: for (i = c; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(9, a);
                  }
                } catch (P) {
                  he(a, a.return, P);
                }
              if (a === i) {
                M = null;
                break e;
              }
              var f = a.sibling;
              if (f !== null) {
                (f.return = a.return), (M = f);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((X = o), Sn(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        )
          try {
            Mt.onPostCommitFiberRoot(ii, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (dt.transition = t);
    }
  }
  return !1;
}
function Vc(e, t, n) {
  (t = kr(n, t)),
    (t = mp(e, t, 1)),
    (e = fn(e, t, 1)),
    (t = Be()),
    e !== null && ($o(e, 1, t), Ze(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) Vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pn === null || !pn.has(r)))
        ) {
          (e = kr(n, e)),
            (e = vp(t, e, 1)),
            (t = fn(t, e, 1)),
            (e = Be()),
            t !== null && ($o(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ag(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (De & n) === n &&
      (Ce === 4 || (Ce === 3 && (De & 130023424) === De && 500 > ye() - us)
        ? Ln(e, 0)
        : (as |= n)),
    Ze(e, t);
}
function Ip(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bo), (bo <<= 1), !(bo & 130023424) && (bo = 4194304))
      : (t = 1));
  var n = Be();
  (e = Qt(e, t)), e !== null && ($o(e, t, n), Ze(e, n));
}
function ug(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ip(e, n);
}
function sg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Ip(e, n);
}
var Fp;
Fp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), Zv(e, t, n);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), ae && t.flags & 1048576 && Uf(t, Vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xl(e, t), (e = t.pendingProps);
      var o = yr(t, $e.current);
      hr(t, n), (o = ts(null, t, r, e, o, n));
      var l = ns();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((l = !0), Ul(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Zu(t),
            (o.updater = fi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Za(t, r, e, n),
            (t = ba(null, t, r, !0, l, n)))
          : ((t.tag = 0), ae && l && Wu(t), Ue(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dg(r)),
          (e = wt(r, e)),
          o)
        ) {
          case 0:
            t = qa(null, t, r, e, n);
            break e;
          case 1:
            t = Dc(null, t, r, e, n);
            break e;
          case 11:
            t = Tc(null, t, r, e, n);
            break e;
          case 14:
            t = Lc(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        qa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Dc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Sp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Hf(e, t),
          Kl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = kr(Error(T(423)), t)), (t = zc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = kr(Error(T(424)), t)), (t = zc(e, t, r, n, o));
            break e;
          } else
            for (
              et = dn(t.stateNode.containerInfo.firstChild),
                tt = t,
                ae = !0,
                kt = null,
                n = Gf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wr(), r === o)) {
            t = Yt(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xf(t),
        e === null && Ya(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Va(r, o) ? (i = null) : l !== null && Va(r, l) && (t.flags |= 32),
        wp(e, t),
        Ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ya(t), null;
    case 13:
      return xp(e, t, n);
    case 4:
      return (
        Ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Tc(e, t, r, o, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          ne(Wl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Rt(l.value, i)) {
            if (l.children === o.children && !Ge.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = Vt(-1, n & -n)), (u.tag = 2);
                      var s = l.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (s.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Ga(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(T(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ga(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ue(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        hr(t, n),
        (o = ft(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = wt(r, t.pendingProps)),
        (o = wt(r.type, o)),
        Lc(e, t, r, o, n)
      );
    case 15:
      return gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        xl(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), Ul(t)) : (e = !1),
        hr(t, n),
        Qf(t, r, o),
        Za(t, r, o, n),
        ba(null, t, r, !0, e, n)
      );
    case 19:
      return kp(e, t, n);
    case 22:
      return yp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function $p(e, t) {
  return cf(e, t);
}
function cg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(e, t, n, r) {
  return new cg(e, t, n, r);
}
function fs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dg(e) {
  if (typeof e == "function") return fs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Lu)) return 11;
    if (e === Du) return 14;
  }
  return 2;
}
function mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Cl(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) fs(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Jn:
        return Dn(n.children, o, l, t);
      case Tu:
        (i = 8), (o |= 8);
        break;
      case Sa:
        return (
          (e = ct(12, n, t, o | 2)), (e.elementType = Sa), (e.lanes = l), e
        );
      case xa:
        return (e = ct(13, n, t, o)), (e.elementType = xa), (e.lanes = l), e;
      case ka:
        return (e = ct(19, n, t, o)), (e.elementType = ka), (e.lanes = l), e;
      case Qd:
        return vi(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hd:
              i = 10;
              break e;
            case Kd:
              i = 9;
              break e;
            case Lu:
              i = 11;
              break e;
            case Du:
              i = 14;
              break e;
            case tn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Dn(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function vi(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = Qd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ua(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function sa(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function fg(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wi(0)),
    (this.expirationTimes = Wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ps(e, t, n, r, o, l, i, a, u) {
  return (
    (e = new fg(e, t, n, a, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ct(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zu(l),
    e
  );
}
function pg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ap(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (Hn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return $f(e, n, t);
  }
  return t;
}
function Up(e, t, n, r, o, l, i, a, u) {
  return (
    (e = ps(n, r, !0, e, o, l, i, a, u)),
    (e.context = Ap(null)),
    (n = e.current),
    (r = Be()),
    (o = hn(n)),
    (l = Vt(r, o)),
    (l.callback = t ?? null),
    fn(n, l, o),
    (e.current.lanes = o),
    $o(e, o, r),
    Ze(e, r),
    e
  );
}
function gi(e, t, n, r) {
  var o = t.current,
    l = Be(),
    i = hn(o);
  return (
    (n = Ap(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fn(o, t, i)),
    e !== null && (Ct(e, o, i, l), yl(e, o, i)),
    i
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hs(e, t) {
  Wc(e, t), (e = e.alternate) && Wc(e, t);
}
function hg() {
  return null;
}
var Bp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ms(e) {
  this._internalRoot = e;
}
yi.prototype.render = ms.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  gi(e, t, null, null);
};
yi.prototype.unmount = ms.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      gi(null, e, null, null);
    }),
      (t[Kt] = null);
  }
};
function yi(e) {
  this._internalRoot = e;
}
yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++);
    rn.splice(n, 0, e), n === 0 && wf(e);
  }
};
function vs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hc() {}
function mg(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var s = bl(i);
        l.call(s);
      };
    }
    var i = Up(t, r, e, 0, null, !1, !1, "", Hc);
    return (
      (e._reactRootContainer = i),
      (e[Kt] = i.current),
      Po(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = bl(u);
      a.call(s);
    };
  }
  var u = ps(e, 0, !1, null, null, !1, !1, "", Hc);
  return (
    (e._reactRootContainer = u),
    (e[Kt] = u.current),
    Po(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      gi(t, u, n, r);
    }),
    u
  );
}
function Si(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = bl(i);
        a.call(u);
      };
    }
    gi(t, i, e, o);
  } else i = mg(n, t, e, o, r);
  return bl(i);
}
mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = eo(t.pendingLanes);
        n !== 0 &&
          (Ou(t, n | 1), Ze(t, ye()), !(X & 6) && ((Er = ye() + 500), Sn()));
      }
      break;
    case 13:
      Un(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var o = Be();
          Ct(r, e, 1, o);
        }
      }),
        hs(e, 1);
  }
};
Iu = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Be();
      Ct(t, e, 134217728, n);
    }
    hs(e, 134217728);
  }
};
vf = function (e) {
  if (e.tag === 13) {
    var t = hn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = Be();
      Ct(n, e, t, r);
    }
    hs(e, t);
  }
};
gf = function () {
  return b;
};
yf = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
Da = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ci(r);
            if (!o) throw Error(T(90));
            Gd(r), Pa(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zd(e, n);
      break;
    case "select":
      (t = n.value), t != null && cr(e, !!n.multiple, t, !1);
  }
};
rf = ss;
of = Un;
var vg = { usingClientEntryPoint: !1, Events: [Uo, tr, ci, tf, nf, ss] },
  Qr = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  gg = {
    bundleType: Qr.bundleType,
    version: Qr.version,
    rendererPackageName: Qr.rendererPackageName,
    rendererConfig: Qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = uf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qr.findFiberByHostInstance || hg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cl.isDisabled && cl.supportsFiber)
    try {
      (ii = cl.inject(gg)), (Mt = cl);
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vs(t)) throw Error(T(200));
  return pg(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!vs(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = Bp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ps(e, 1, !1, null, null, n, !1, r, o)),
    (e[Kt] = t.current),
    Po(e.nodeType === 8 ? e.parentNode : e),
    new ms(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = uf(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return Un(e);
};
rt.hydrate = function (e, t, n) {
  if (!wi(t)) throw Error(T(200));
  return Si(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!vs(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Bp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Up(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Kt] = t.current),
    Po(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new yi(t);
};
rt.render = function (e, t, n) {
  if (!wi(t)) throw Error(T(200));
  return Si(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!wi(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Un(function () {
        Si(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kt] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = ss;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wi(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Si(e, t, n, !1, r);
};
rt.version = "18.2.0-next-9e3b772b8-20220608";
function Vp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp);
    } catch (e) {
      console.error(e);
    }
}
Vp(), (Ad.exports = rt);
var gs = Ad.exports;
const yg = Nd(gs),
  wg = _d({ __proto__: null, default: yg }, [gs]);
var Kc = gs;
(ya.createRoot = Kc.createRoot), (ya.hydrateRoot = Kc.hydrateRoot);
/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
var ve;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ve || (ve = {}));
const Qc = "popstate";
function Sg(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: a } = r.location;
    return Mo(
      "",
      { pathname: l, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Vn(o);
  }
  return kg(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xg() {
  return Math.random().toString(36).substr(2, 8);
}
function Yc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    me(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xt(t) : t,
      { state: n, key: (t && t.key) || r || xg() }
    )
  );
}
function Vn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Xt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function kg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    a = ve.Pop,
    u = null,
    s = d();
  s == null && ((s = 0), i.replaceState(me({}, i.state, { idx: s }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    a = ve.Pop;
    let R = d(),
      h = R == null ? null : R - s;
    (s = R), u && u({ action: a, location: x.location, delta: h });
  }
  function p(R, h) {
    a = ve.Push;
    let c = Mo(x.location, R, h);
    n && n(c, R), (s = d() + 1);
    let v = Yc(c, s),
      f = x.createHref(c);
    try {
      i.pushState(v, "", f);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      o.location.assign(f);
    }
    l && u && u({ action: a, location: x.location, delta: 1 });
  }
  function w(R, h) {
    a = ve.Replace;
    let c = Mo(x.location, R, h);
    n && n(c, R), (s = d());
    let v = Yc(c, s),
      f = x.createHref(c);
    i.replaceState(v, "", f),
      l && u && u({ action: a, location: x.location, delta: 0 });
  }
  function g(R) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof R == "string" ? R : Vn(R);
    return (
      W(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, h)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(R) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Qc, m),
        (u = R),
        () => {
          o.removeEventListener(Qc, m), (u = null);
        }
      );
    },
    createHref(R) {
      return t(o, R);
    },
    createURL: g,
    encodeLocation(R) {
      let h = g(R);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: w,
    go(R) {
      return i.go(R);
    },
  };
  return x;
}
var ge;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ge || (ge = {}));
const Eg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Cg(e) {
  return e.index === !0;
}
function du(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, l) => {
      let i = [...n, l],
        a = typeof o.id == "string" ? o.id : i.join("-");
      if (
        (W(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Cg(o))
      ) {
        let u = me({}, o, t(o), { id: a });
        return (r[a] = u), u;
      } else {
        let u = me({}, o, t(o), { id: a, children: void 0 });
        return (
          (r[a] = u), o.children && (u.children = du(o.children, t, i, r)), u
        );
      }
    })
  );
}
function ur(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Xt(t) : t,
    o = Dr(r.pathname || "/", n);
  if (o == null) return null;
  let l = Wp(e);
  Rg(l);
  let i = null;
  for (let a = 0; i == null && a < l.length; ++a) i = Og(l[a], $g(o));
  return i;
}
function Pg(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Wp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, a) => {
    let u = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Wt([r, u.relativePath]),
      d = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (W(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Wp(l.children, t, d, s)),
      !(l.path == null && !l.index) &&
        t.push({ path: s, score: zg(s, l.index), routesMeta: d });
  };
  return (
    e.forEach((l, i) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) o(l, i);
      else for (let u of Hp(l.path)) o(l, i, u);
    }),
    t
  );
}
function Hp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = Hp(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? l : [l, u].join("/")))),
    o && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Rg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Mg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _g = /^:\w+$/,
  Ng = 3,
  jg = 2,
  Tg = 1,
  Lg = 10,
  Dg = -2,
  Gc = (e) => e === "*";
function zg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Gc) && (r += Dg),
    t && (r += jg),
    n
      .filter((o) => !Gc(o))
      .reduce((o, l) => o + (_g.test(l) ? Ng : l === "" ? Tg : Lg), r)
  );
}
function Mg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Og(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = o === "/" ? t : t.slice(o.length) || "/",
      d = Ig(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let m = a.route;
    l.push({
      params: r,
      pathname: Wt([o, d.pathname]),
      pathnameBase: Vg(Wt([o, d.pathnameBase])),
      route: m,
    }),
      d.pathnameBase !== "/" && (o = Wt([o, d.pathnameBase]));
  }
  return l;
}
function Ig(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fg(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((s, d, m) => {
      let { paramName: p, isOptional: w } = d;
      if (p === "*") {
        let x = a[m] || "";
        i = l.slice(0, l.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[m];
      return w && !g ? (s[p] = void 0) : (s[p] = Ag(g || "", p)), s;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Fg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function $g(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Bn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ag(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Bn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Dr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ug(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Xt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Bg(n, t)) : t,
    search: Wg(r),
    hash: Hg(o),
  };
}
function Bg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ca(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xi(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ys(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Xt(e))
    : ((o = me({}, e)),
      W(
        !o.pathname || !o.pathname.includes("?"),
        ca("?", "pathname", "search", o)
      ),
      W(
        !o.pathname || !o.pathname.includes("#"),
        ca("#", "pathname", "hash", o)
      ),
      W(!o.search || !o.search.includes("#"), ca("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    i = l ? "/" : o.pathname,
    a;
  if (i == null) a = n;
  else if (r) {
    let m = t[t.length - 1].replace(/^\//, "").split("/");
    if (i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), m.pop();
      o.pathname = p.join("/");
    }
    a = "/" + m.join("/");
  } else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (m -= 1);
      o.pathname = p.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let u = Ug(o, a),
    s = i && i !== "/" && i.endsWith("/"),
    d = (l || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || d) && (u.pathname += "/"), u;
}
const Wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Hg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ws {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Kp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qp = ["post", "put", "patch", "delete"],
  Kg = new Set(Qp),
  Qg = ["get", ...Qp],
  Yg = new Set(Qg),
  Gg = new Set([301, 302, 303, 307, 308]),
  Xg = new Set([307, 308]),
  da = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Zg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Yr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Yp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Jg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Gp = "remix-router-transitions";
function qg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    o = (E) => ({ hasErrorBoundary: S(E) });
  } else o = Jg;
  let l = {},
    i = du(e.routes, o, void 0, l),
    a,
    u = e.basename || "/",
    s = me(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    d = null,
    m = new Set(),
    p = null,
    w = null,
    g = null,
    x = e.hydrationData != null,
    R = ur(i, e.history.location, u),
    h = null;
  if (R == null) {
    let S = at(404, { pathname: e.history.location.pathname }),
      { matches: E, route: N } = nd(i);
    (R = E), (h = { [N.id]: S });
  }
  let c =
      !R.some((S) => S.route.lazy) &&
      (!R.some((S) => S.route.loader) || e.hydrationData != null),
    v,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: R,
      initialized: c,
      navigation: da,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = ve.Pop,
    j = !1,
    y,
    _ = !1,
    z = new Map(),
    I = null,
    Z = !1,
    fe = !1,
    pe = [],
    mt = [],
    ie = new Map(),
    _t = 0,
    Je = -1,
    L = new Map(),
    F = new Set(),
    A = new Map(),
    Q = new Map(),
    q = new Set(),
    Me = new Map(),
    we = new Map(),
    qe = !1;
  function He() {
    if (
      ((d = e.history.listen((S) => {
        let { action: E, location: N, delta: D } = S;
        if (qe) {
          qe = !1;
          return;
        }
        Bn(
          we.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let O = zs({
          currentLocation: f.location,
          nextLocation: N,
          historyAction: E,
        });
        if (O && D != null) {
          (qe = !0),
            e.history.go(D * -1),
            Qo(O, {
              state: "blocked",
              location: N,
              proceed() {
                Qo(O, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  e.history.go(D);
              },
              reset() {
                let H = new Map(f.blockers);
                H.set(O, Yr), Ne({ blockers: H });
              },
            });
          return;
        }
        return kn(E, N);
      })),
      n)
    ) {
      s0(t, z);
      let S = () => c0(t, z);
      t.addEventListener("pagehide", S),
        (I = () => t.removeEventListener("pagehide", S));
    }
    return f.initialized || kn(ve.Pop, f.location), v;
  }
  function lt() {
    d && d(),
      I && I(),
      m.clear(),
      y && y.abort(),
      f.fetchers.forEach((S, E) => Ko(E)),
      f.blockers.forEach((S, E) => Ds(E));
  }
  function It(S) {
    return m.add(S), () => m.delete(S);
  }
  function Ne(S, E) {
    E === void 0 && (E = {}), (f = me({}, f, S));
    let N = [],
      D = [];
    s.v7_fetcherPersist &&
      f.fetchers.forEach((O, H) => {
        O.state === "idle" && (q.has(H) ? D.push(H) : N.push(H));
      }),
      [...m].forEach((O) =>
        O(f, {
          deletedFetchers: D,
          unstable_viewTransitionOpts: E.viewTransitionOpts,
          unstable_flushSync: E.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (N.forEach((O) => f.fetchers.delete(O)), D.forEach((O) => Ko(O)));
  }
  function Nt(S, E, N) {
    var D, O;
    let { flushSync: H } = N === void 0 ? {} : N,
      B =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        xt(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((D = S.state) == null ? void 0 : D._isRedirect) !== !0,
      U;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (U = E.actionData)
        : (U = null)
      : B
      ? (U = f.actionData)
      : (U = null);
    let $ = E.loaderData
        ? td(f.loaderData, E.loaderData, E.matches || [], E.errors)
        : f.loaderData,
      G = f.blockers;
    G.size > 0 && ((G = new Map(G)), G.forEach((ee, ue) => G.set(ue, Yr)));
    let je =
      j === !0 ||
      (f.navigation.formMethod != null &&
        xt(f.navigation.formMethod) &&
        ((O = S.state) == null ? void 0 : O._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      Z ||
        P === ve.Pop ||
        (P === ve.Push
          ? e.history.push(S, S.state)
          : P === ve.Replace && e.history.replace(S, S.state));
    let K;
    if (P === ve.Pop) {
      let ee = z.get(f.location.pathname);
      ee && ee.has(S.pathname)
        ? (K = { currentLocation: f.location, nextLocation: S })
        : z.has(S.pathname) &&
          (K = { currentLocation: S, nextLocation: f.location });
    } else if (_) {
      let ee = z.get(f.location.pathname);
      ee
        ? ee.add(S.pathname)
        : ((ee = new Set([S.pathname])), z.set(f.location.pathname, ee)),
        (K = { currentLocation: f.location, nextLocation: S });
    }
    Ne(
      me({}, E, {
        actionData: U,
        loaderData: $,
        historyAction: P,
        location: S,
        initialized: !0,
        navigation: da,
        revalidation: "idle",
        restoreScrollPosition: Os(S, E.matches || f.matches),
        preventScrollReset: je,
        blockers: G,
      }),
      { viewTransitionOpts: K, flushSync: H === !0 }
    ),
      (P = ve.Pop),
      (j = !1),
      (_ = !1),
      (Z = !1),
      (fe = !1),
      (pe = []),
      (mt = []);
  }
  async function vt(S, E) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let N = fu(
        f.location,
        f.matches,
        u,
        s.v7_prependBasename,
        S,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: D,
        submission: O,
        error: H,
      } = Xc(s.v7_normalizeFormMethod, !1, N, E),
      B = f.location,
      U = Mo(f.location, D, E && E.state);
    U = me({}, U, e.history.encodeLocation(U));
    let $ = E && E.replace != null ? E.replace : void 0,
      G = ve.Push;
    $ === !0
      ? (G = ve.Replace)
      : $ === !1 ||
        (O != null &&
          xt(O.formMethod) &&
          O.formAction === f.location.pathname + f.location.search &&
          (G = ve.Replace));
    let je =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      K = (E && E.unstable_flushSync) === !0,
      ee = zs({ currentLocation: B, nextLocation: U, historyAction: G });
    if (ee) {
      Qo(ee, {
        state: "blocked",
        location: U,
        proceed() {
          Qo(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            vt(S, E);
        },
        reset() {
          let ue = new Map(f.blockers);
          ue.set(ee, Yr), Ne({ blockers: ue });
        },
      });
      return;
    }
    return await kn(G, U, {
      submission: O,
      pendingError: H,
      preventScrollReset: je,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
      flushSync: K,
    });
  }
  function Oh() {
    if (
      (Di(),
      Ne({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        kn(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      kn(P || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function kn(S, E, N) {
    y && y.abort(),
      (y = null),
      (P = S),
      (Z = (N && N.startUninterruptedRevalidation) === !0),
      Hh(f.location, f.matches),
      (j = (N && N.preventScrollReset) === !0),
      (_ = (N && N.enableViewTransition) === !0);
    let D = a || i,
      O = N && N.overrideNavigation,
      H = ur(D, E, u),
      B = (N && N.flushSync) === !0;
    if (!H) {
      let ue = at(404, { pathname: E.pathname }),
        { matches: Ae, route: jt } = nd(D);
      zi(),
        Nt(
          E,
          { matches: Ae, loaderData: {}, errors: { [jt.id]: ue } },
          { flushSync: B }
        );
      return;
    }
    if (
      f.initialized &&
      !fe &&
      r0(f.location, E) &&
      !(N && N.submission && xt(N.submission.formMethod))
    ) {
      Nt(E, { matches: H }, { flushSync: B });
      return;
    }
    y = new AbortController();
    let U = Xr(e.history, E, y.signal, N && N.submission),
      $,
      G;
    if (N && N.pendingError) G = { [po(H).route.id]: N.pendingError };
    else if (N && N.submission && xt(N.submission.formMethod)) {
      let ue = await Ih(U, E, N.submission, H, {
        replace: N.replace,
        flushSync: B,
      });
      if (ue.shortCircuited) return;
      ($ = ue.pendingActionData),
        (G = ue.pendingActionError),
        (O = fa(E, N.submission)),
        (B = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: je,
      loaderData: K,
      errors: ee,
    } = await Fh(
      U,
      E,
      H,
      O,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      B,
      $,
      G
    );
    je ||
      ((y = null),
      Nt(
        E,
        me({ matches: H }, $ ? { actionData: $ } : {}, {
          loaderData: K,
          errors: ee,
        })
      ));
  }
  async function Ih(S, E, N, D, O) {
    O === void 0 && (O = {}), Di();
    let H = a0(E, N);
    Ne({ navigation: H }, { flushSync: O.flushSync === !0 });
    let B,
      U = hu(D, E);
    if (!U.route.action && !U.route.lazy)
      B = {
        type: ge.error,
        error: at(405, {
          method: S.method,
          pathname: E.pathname,
          routeId: U.route.id,
        }),
      };
    else if (((B = await Gr("action", S, U, D, l, o, u)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (vr(B)) {
      let $;
      return (
        O && O.replace != null
          ? ($ = O.replace)
          : ($ = B.location === f.location.pathname + f.location.search),
        await Ir(f, B, { submission: N, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (ho(B)) {
      let $ = po(D, U.route.id);
      return (
        (O && O.replace) !== !0 && (P = ve.Push),
        { pendingActionData: {}, pendingActionError: { [$.route.id]: B.error } }
      );
    }
    if (jn(B)) throw at(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: B.data } };
  }
  async function Fh(S, E, N, D, O, H, B, U, $, G) {
    let je = D || fa(E, O),
      K = O || H || ld(je),
      ee = a || i,
      [ue, Ae] = Zc(e.history, f, N, K, E, fe, pe, mt, A, F, ee, u, $, G);
    if (
      (zi(
        (te) =>
          !(N && N.some((it) => it.route.id === te)) ||
          (ue && ue.some((it) => it.route.id === te))
      ),
      (Je = ++_t),
      ue.length === 0 && Ae.length === 0)
    ) {
      let te = Ts();
      return (
        Nt(
          E,
          me(
            { matches: N, loaderData: {}, errors: G || null },
            $ ? { actionData: $ } : {},
            te ? { fetchers: new Map(f.fetchers) } : {}
          ),
          { flushSync: U }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Z) {
      Ae.forEach((it) => {
        let Se = f.fetchers.get(it.key),
          En = Zr(void 0, Se ? Se.data : void 0);
        f.fetchers.set(it.key, En);
      });
      let te = $ || f.actionData;
      Ne(
        me(
          { navigation: je },
          te
            ? Object.keys(te).length === 0
              ? { actionData: null }
              : { actionData: te }
            : {},
          Ae.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        ),
        { flushSync: U }
      );
    }
    Ae.forEach((te) => {
      ie.has(te.key) && Jt(te.key),
        te.controller && ie.set(te.key, te.controller);
    });
    let jt = () => Ae.forEach((te) => Jt(te.key));
    y && y.signal.addEventListener("abort", jt);
    let {
      results: $r,
      loaderResults: Mi,
      fetcherResults: Kn,
    } = await _s(f.matches, N, ue, Ae, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    y && y.signal.removeEventListener("abort", jt),
      Ae.forEach((te) => ie.delete(te.key));
    let gt = rd($r);
    if (gt) {
      if (gt.idx >= ue.length) {
        let te = Ae[gt.idx - ue.length].key;
        F.add(te);
      }
      return await Ir(f, gt.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: Yo, errors: Oi } = ed(f, N, ue, Mi, G, Ae, Kn, Me);
    Me.forEach((te, it) => {
      te.subscribe((Se) => {
        (Se || te.done) && Me.delete(it);
      });
    });
    let Ii = Ts(),
      Fi = Ls(Je),
      Qn = Ii || Fi || Ae.length > 0;
    return me(
      { loaderData: Yo, errors: Oi },
      Qn ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function $h(S, E, N, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ie.has(S) && Jt(S);
    let O = (D && D.unstable_flushSync) === !0,
      H = a || i,
      B = fu(
        f.location,
        f.matches,
        u,
        s.v7_prependBasename,
        N,
        E,
        D == null ? void 0 : D.relative
      ),
      U = ur(H, B, u);
    if (!U) {
      Fr(S, E, at(404, { pathname: B }), { flushSync: O });
      return;
    }
    let {
      path: $,
      submission: G,
      error: je,
    } = Xc(s.v7_normalizeFormMethod, !0, B, D);
    if (je) {
      Fr(S, E, je, { flushSync: O });
      return;
    }
    let K = hu(U, $);
    if (((j = (D && D.preventScrollReset) === !0), G && xt(G.formMethod))) {
      Ah(S, E, $, K, U, O, G);
      return;
    }
    A.set(S, { routeId: E, path: $ }), Uh(S, E, $, K, U, O, G);
  }
  async function Ah(S, E, N, D, O, H, B) {
    if ((Di(), A.delete(S), !D.route.action && !D.route.lazy)) {
      let Se = at(405, { method: B.formMethod, pathname: N, routeId: E });
      Fr(S, E, Se, { flushSync: H });
      return;
    }
    let U = f.fetchers.get(S);
    Zt(S, u0(B, U), { flushSync: H });
    let $ = new AbortController(),
      G = Xr(e.history, N, $.signal, B);
    ie.set(S, $);
    let je = _t,
      K = await Gr("action", G, D, O, l, o, u);
    if (G.signal.aborted) {
      ie.get(S) === $ && ie.delete(S);
      return;
    }
    if (q.has(S)) {
      Zt(S, bt(void 0));
      return;
    }
    if (vr(K))
      if ((ie.delete(S), Je > je)) {
        Zt(S, bt(void 0));
        return;
      } else return F.add(S), Zt(S, Zr(B)), Ir(f, K, { fetcherSubmission: B });
    if (ho(K)) {
      Fr(S, E, K.error);
      return;
    }
    if (jn(K)) throw at(400, { type: "defer-action" });
    let ee = f.navigation.location || f.location,
      ue = Xr(e.history, ee, $.signal),
      Ae = a || i,
      jt =
        f.navigation.state !== "idle"
          ? ur(Ae, f.navigation.location, u)
          : f.matches;
    W(jt, "Didn't find any matches after fetcher action");
    let $r = ++_t;
    L.set(S, $r);
    let Mi = Zr(B, K.data);
    f.fetchers.set(S, Mi);
    let [Kn, gt] = Zc(
      e.history,
      f,
      jt,
      B,
      ee,
      fe,
      pe,
      mt,
      A,
      F,
      Ae,
      u,
      { [D.route.id]: K.data },
      void 0
    );
    gt
      .filter((Se) => Se.key !== S)
      .forEach((Se) => {
        let En = Se.key,
          Is = f.fetchers.get(En),
          Qh = Zr(void 0, Is ? Is.data : void 0);
        f.fetchers.set(En, Qh),
          ie.has(En) && Jt(En),
          Se.controller && ie.set(En, Se.controller);
      }),
      Ne({ fetchers: new Map(f.fetchers) });
    let Yo = () => gt.forEach((Se) => Jt(Se.key));
    $.signal.addEventListener("abort", Yo);
    let {
      results: Oi,
      loaderResults: Ii,
      fetcherResults: Fi,
    } = await _s(f.matches, jt, Kn, gt, ue);
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", Yo),
      L.delete(S),
      ie.delete(S),
      gt.forEach((Se) => ie.delete(Se.key));
    let Qn = rd(Oi);
    if (Qn) {
      if (Qn.idx >= Kn.length) {
        let Se = gt[Qn.idx - Kn.length].key;
        F.add(Se);
      }
      return Ir(f, Qn.result);
    }
    let { loaderData: te, errors: it } = ed(
      f,
      f.matches,
      Kn,
      Ii,
      void 0,
      gt,
      Fi,
      Me
    );
    if (f.fetchers.has(S)) {
      let Se = bt(K.data);
      f.fetchers.set(S, Se);
    }
    Ls($r),
      f.navigation.state === "loading" && $r > Je
        ? (W(P, "Expected pending action"),
          y && y.abort(),
          Nt(f.navigation.location, {
            matches: jt,
            loaderData: te,
            errors: it,
            fetchers: new Map(f.fetchers),
          }))
        : (Ne({
            errors: it,
            loaderData: td(f.loaderData, te, jt, it),
            fetchers: new Map(f.fetchers),
          }),
          (fe = !1));
  }
  async function Uh(S, E, N, D, O, H, B) {
    let U = f.fetchers.get(S);
    Zt(S, Zr(B, U ? U.data : void 0), { flushSync: H });
    let $ = new AbortController(),
      G = Xr(e.history, N, $.signal);
    ie.set(S, $);
    let je = _t,
      K = await Gr("loader", G, D, O, l, o, u);
    if (
      (jn(K) && (K = (await Jp(K, G.signal, !0)) || K),
      ie.get(S) === $ && ie.delete(S),
      !G.signal.aborted)
    ) {
      if (q.has(S)) {
        Zt(S, bt(void 0));
        return;
      }
      if (vr(K))
        if (Je > je) {
          Zt(S, bt(void 0));
          return;
        } else {
          F.add(S), await Ir(f, K);
          return;
        }
      if (ho(K)) {
        Fr(S, E, K.error);
        return;
      }
      W(!jn(K), "Unhandled fetcher deferred data"), Zt(S, bt(K.data));
    }
  }
  async function Ir(S, E, N) {
    let {
      submission: D,
      fetcherSubmission: O,
      replace: H,
    } = N === void 0 ? {} : N;
    E.revalidate && (fe = !0);
    let B = Mo(S.location, E.location, { _isRedirect: !0 });
    if ((W(B, "Expected a location on the redirect navigation"), n)) {
      let ee = !1;
      if (E.reloadDocument) ee = !0;
      else if (Yp.test(E.location)) {
        const ue = e.history.createURL(E.location);
        ee = ue.origin !== t.location.origin || Dr(ue.pathname, u) == null;
      }
      if (ee) {
        H ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    y = null;
    let U = H === !0 ? ve.Replace : ve.Push,
      { formMethod: $, formAction: G, formEncType: je } = S.navigation;
    !D && !O && $ && G && je && (D = ld(S.navigation));
    let K = D || O;
    if (Xg.has(E.status) && K && xt(K.formMethod))
      await kn(U, B, {
        submission: me({}, K, { formAction: E.location }),
        preventScrollReset: j,
      });
    else {
      let ee = fa(B, D);
      await kn(U, B, {
        overrideNavigation: ee,
        fetcherSubmission: O,
        preventScrollReset: j,
      });
    }
  }
  async function _s(S, E, N, D, O) {
    let H = await Promise.all([
        ...N.map(($) => Gr("loader", O, $, E, l, o, u)),
        ...D.map(($) =>
          $.matches && $.match && $.controller
            ? Gr(
                "loader",
                Xr(e.history, $.path, $.controller.signal),
                $.match,
                $.matches,
                l,
                o,
                u
              )
            : { type: ge.error, error: at(404, { pathname: $.path }) }
        ),
      ]),
      B = H.slice(0, N.length),
      U = H.slice(N.length);
    return (
      await Promise.all([
        od(
          S,
          N,
          B,
          B.map(() => O.signal),
          !1,
          f.loaderData
        ),
        od(
          S,
          D.map(($) => $.match),
          U,
          D.map(($) => ($.controller ? $.controller.signal : null)),
          !0
        ),
      ]),
      { results: H, loaderResults: B, fetcherResults: U }
    );
  }
  function Di() {
    (fe = !0),
      pe.push(...zi()),
      A.forEach((S, E) => {
        ie.has(E) && (mt.push(E), Jt(E));
      });
  }
  function Zt(S, E, N) {
    N === void 0 && (N = {}),
      f.fetchers.set(S, E),
      Ne(
        { fetchers: new Map(f.fetchers) },
        { flushSync: (N && N.flushSync) === !0 }
      );
  }
  function Fr(S, E, N, D) {
    D === void 0 && (D = {});
    let O = po(f.matches, E);
    Ko(S),
      Ne(
        { errors: { [O.route.id]: N }, fetchers: new Map(f.fetchers) },
        { flushSync: (D && D.flushSync) === !0 }
      );
  }
  function Ns(S) {
    return (
      s.v7_fetcherPersist &&
        (Q.set(S, (Q.get(S) || 0) + 1), q.has(S) && q.delete(S)),
      f.fetchers.get(S) || Zg
    );
  }
  function Ko(S) {
    let E = f.fetchers.get(S);
    ie.has(S) && !(E && E.state === "loading" && L.has(S)) && Jt(S),
      A.delete(S),
      L.delete(S),
      F.delete(S),
      q.delete(S),
      f.fetchers.delete(S);
  }
  function Bh(S) {
    if (s.v7_fetcherPersist) {
      let E = (Q.get(S) || 0) - 1;
      E <= 0 ? (Q.delete(S), q.add(S)) : Q.set(S, E);
    } else Ko(S);
    Ne({ fetchers: new Map(f.fetchers) });
  }
  function Jt(S) {
    let E = ie.get(S);
    W(E, "Expected fetch controller: " + S), E.abort(), ie.delete(S);
  }
  function js(S) {
    for (let E of S) {
      let N = Ns(E),
        D = bt(N.data);
      f.fetchers.set(E, D);
    }
  }
  function Ts() {
    let S = [],
      E = !1;
    for (let N of F) {
      let D = f.fetchers.get(N);
      W(D, "Expected fetcher: " + N),
        D.state === "loading" && (F.delete(N), S.push(N), (E = !0));
    }
    return js(S), E;
  }
  function Ls(S) {
    let E = [];
    for (let [N, D] of L)
      if (D < S) {
        let O = f.fetchers.get(N);
        W(O, "Expected fetcher: " + N),
          O.state === "loading" && (Jt(N), L.delete(N), E.push(N));
      }
    return js(E), E.length > 0;
  }
  function Vh(S, E) {
    let N = f.blockers.get(S) || Yr;
    return we.get(S) !== E && we.set(S, E), N;
  }
  function Ds(S) {
    f.blockers.delete(S), we.delete(S);
  }
  function Qo(S, E) {
    let N = f.blockers.get(S) || Yr;
    W(
      (N.state === "unblocked" && E.state === "blocked") ||
        (N.state === "blocked" && E.state === "blocked") ||
        (N.state === "blocked" && E.state === "proceeding") ||
        (N.state === "blocked" && E.state === "unblocked") ||
        (N.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + N.state + " -> " + E.state
    );
    let D = new Map(f.blockers);
    D.set(S, E), Ne({ blockers: D });
  }
  function zs(S) {
    let { currentLocation: E, nextLocation: N, historyAction: D } = S;
    if (we.size === 0) return;
    we.size > 1 && Bn(!1, "A router only supports one blocker at a time");
    let O = Array.from(we.entries()),
      [H, B] = O[O.length - 1],
      U = f.blockers.get(H);
    if (
      !(U && U.state === "proceeding") &&
      B({ currentLocation: E, nextLocation: N, historyAction: D })
    )
      return H;
  }
  function zi(S) {
    let E = [];
    return (
      Me.forEach((N, D) => {
        (!S || S(D)) && (N.cancel(), E.push(D), Me.delete(D));
      }),
      E
    );
  }
  function Wh(S, E, N) {
    if (((p = S), (g = E), (w = N || null), !x && f.navigation === da)) {
      x = !0;
      let D = Os(f.location, f.matches);
      D != null && Ne({ restoreScrollPosition: D });
    }
    return () => {
      (p = null), (g = null), (w = null);
    };
  }
  function Ms(S, E) {
    return (
      (w &&
        w(
          S,
          E.map((D) => Pg(D, f.loaderData))
        )) ||
      S.key
    );
  }
  function Hh(S, E) {
    if (p && g) {
      let N = Ms(S, E);
      p[N] = g();
    }
  }
  function Os(S, E) {
    if (p) {
      let N = Ms(S, E),
        D = p[N];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function Kh(S) {
    (l = {}), (a = du(S, o, void 0, l));
  }
  return (
    (v = {
      get basename() {
        return u;
      },
      get state() {
        return f;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: He,
      subscribe: It,
      enableScrollRestoration: Wh,
      navigate: vt,
      fetch: $h,
      revalidate: Oh,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: Ns,
      deleteFetcher: Bh,
      dispose: lt,
      getBlocker: Vh,
      deleteBlocker: Ds,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: Me,
      _internalSetRoutes: Kh,
    }),
    v
  );
}
function bg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function fu(e, t, n, r, o, l, i) {
  let a, u;
  if (l) {
    a = [];
    for (let d of t)
      if ((a.push(d), d.route.id === l)) {
        u = d;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = ys(
    o || ".",
    xi(a).map((d) => d.pathnameBase),
    Dr(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    o == null && ((s.search = e.search), (s.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Ss(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Wt([n, s.pathname])),
    Vn(s)
  );
}
function Xc(e, t, n, r) {
  if (!r || !bg(r)) return { path: n };
  if (r.formMethod && !i0(r.formMethod))
    return { path: n, error: at(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: at(400, { type: "invalid-body" }) }),
    l = r.formMethod || "get",
    i = e ? l.toUpperCase() : l.toLowerCase(),
    a = Zp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!xt(i)) return o();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((w, g) => {
              let [x, R] = g;
              return (
                "" +
                w +
                x +
                "=" +
                R +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!xt(i)) return o();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = pu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = pu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = bc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = bc(u));
    } catch {
      return o();
    }
  let d = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (xt(d.formMethod)) return { path: n, submission: d };
  let m = Xt(n);
  return (
    t && m.search && Ss(m.search) && u.append("index", ""),
    (m.search = "?" + u),
    { path: Vn(m), submission: d }
  );
}
function e0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Zc(e, t, n, r, o, l, i, a, u, s, d, m, p, w) {
  let g = w ? Object.values(w)[0] : p ? Object.values(p)[0] : void 0,
    x = e.createURL(t.location),
    R = e.createURL(o),
    h = w ? Object.keys(w)[0] : void 0,
    v = e0(n, h).filter((P, j) => {
      if (P.route.lazy) return !0;
      if (P.route.loader == null) return !1;
      if (t0(t.loaderData, t.matches[j], P) || i.some((z) => z === P.route.id))
        return !0;
      let y = t.matches[j],
        _ = P;
      return Jc(
        P,
        me(
          {
            currentUrl: x,
            currentParams: y.params,
            nextUrl: R,
            nextParams: _.params,
          },
          r,
          {
            actionResult: g,
            defaultShouldRevalidate:
              l ||
              x.pathname + x.search === R.pathname + R.search ||
              x.search !== R.search ||
              Xp(y, _),
          }
        )
      );
    }),
    f = [];
  return (
    u.forEach((P, j) => {
      if (!n.some((Z) => Z.route.id === P.routeId)) return;
      let y = ur(d, P.path, m);
      if (!y) {
        f.push({
          key: j,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let _ = t.fetchers.get(j),
        z = hu(y, P.path),
        I = !1;
      s.has(j)
        ? (I = !1)
        : a.includes(j)
        ? (I = !0)
        : _ && _.state !== "idle" && _.data === void 0
        ? (I = l)
        : (I = Jc(
            z,
            me(
              {
                currentUrl: x,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: R,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: g, defaultShouldRevalidate: l }
            )
          )),
        I &&
          f.push({
            key: j,
            routeId: P.routeId,
            path: P.path,
            matches: y,
            match: z,
            controller: new AbortController(),
          });
    }),
    [v, f]
  );
}
function t0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Xp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Jc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function qc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  W(o, "No route found in manifest");
  let l = {};
  for (let i in r) {
    let u = o[i] !== void 0 && i !== "hasErrorBoundary";
    Bn(
      !u,
      'Route "' +
        o.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Eg.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, me({}, t(o), { lazy: void 0 }));
}
async function Gr(e, t, n, r, o, l, i, a) {
  a === void 0 && (a = {});
  let u,
    s,
    d,
    m = (g) => {
      let x,
        R = new Promise((h, c) => (x = c));
      return (
        (d = () => x()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          g({ request: t, params: n.params, context: a.requestContext }),
          R,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let x,
          R = await Promise.all([
            m(g).catch((h) => {
              x = h;
            }),
            qc(n.route, l, o),
          ]);
        if (x) throw x;
        s = R[0];
      } else if ((await qc(n.route, l, o), (g = n.route[e]), g)) s = await m(g);
      else if (e === "action") {
        let x = new URL(t.url),
          R = x.pathname + x.search;
        throw at(405, { method: t.method, pathname: R, routeId: n.route.id });
      } else return { type: ge.data, data: void 0 };
    else if (g) s = await m(g);
    else {
      let x = new URL(t.url),
        R = x.pathname + x.search;
      throw at(404, { pathname: R });
    }
    W(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (g) {
    (u = ge.error), (s = g);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (l0(s)) {
    let g = s.status;
    if (Gg.has(g)) {
      let h = s.headers.get("Location");
      if (
        (W(
          h,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Yp.test(h))
      )
        h = fu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, h);
      else if (!a.isStaticRequest) {
        let c = new URL(t.url),
          v = h.startsWith("//") ? new URL(c.protocol + h) : new URL(h),
          f = Dr(v.pathname, i) != null;
        v.origin === c.origin && f && (h = v.pathname + v.search + v.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set("Location", h), s);
      return {
        type: ge.redirect,
        status: g,
        location: h,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === ge.error ? ge.error : ge.data, response: s };
    let x,
      R = s.headers.get("Content-Type");
    return (
      R && /\bapplication\/json\b/.test(R)
        ? (x = await s.json())
        : (x = await s.text()),
      u === ge.error
        ? { type: u, error: new ws(g, s.statusText, x), headers: s.headers }
        : { type: ge.data, data: x, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === ge.error) return { type: u, error: s };
  if (o0(s)) {
    var p, w;
    return {
      type: ge.deferred,
      deferredData: s,
      statusCode: (p = s.init) == null ? void 0 : p.status,
      headers:
        ((w = s.init) == null ? void 0 : w.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: ge.data, data: s };
}
function Xr(e, t, n, r) {
  let o = e.createURL(Zp(t)).toString(),
    l = { signal: n };
  if (r && xt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (l.method = i.toUpperCase()),
      a === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": a })),
          (l.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (l.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (l.body = pu(r.formData))
        : (l.body = r.formData);
  }
  return new Request(o, l);
}
function pu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function bc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function n0(e, t, n, r, o) {
  let l = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((d, m) => {
      let p = t[m].route.id;
      if (
        (W(!vr(d), "Cannot handle redirect results in processLoaderData"),
        ho(d))
      ) {
        let w = po(e, p),
          g = d.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[w.route.id] == null && (i[w.route.id] = g),
          (l[p] = void 0),
          u || ((u = !0), (a = Kp(d.error) ? d.error.status : 500)),
          d.headers && (s[p] = d.headers);
      } else
        jn(d)
          ? (o.set(p, d.deferredData), (l[p] = d.deferredData.data))
          : (l[p] = d.data),
          d.statusCode != null &&
            d.statusCode !== 200 &&
            !u &&
            (a = d.statusCode),
          d.headers && (s[p] = d.headers);
    }),
    r && ((i = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function ed(e, t, n, r, o, l, i, a) {
  let { loaderData: u, errors: s } = n0(t, n, r, o, a);
  for (let d = 0; d < l.length; d++) {
    let { key: m, match: p, controller: w } = l[d];
    W(
      i !== void 0 && i[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let g = i[d];
    if (!(w && w.signal.aborted))
      if (ho(g)) {
        let x = po(e.matches, p == null ? void 0 : p.route.id);
        (s && s[x.route.id]) || (s = me({}, s, { [x.route.id]: g.error })),
          e.fetchers.delete(m);
      } else if (vr(g)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (jn(g)) W(!1, "Unhandled fetcher deferred data");
      else {
        let x = bt(g.data);
        e.fetchers.set(m, x);
      }
  }
  return { loaderData: u, errors: s };
}
function td(e, t, n, r) {
  let o = me({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (o[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return o;
}
function po(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function nd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function at(e, t) {
  let { pathname: n, routeId: r, method: o, type: l } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        o && n && r
          ? (a =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l === "defer-action"
          ? (a = "defer() is not supported in actions")
          : l === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        o && n && r
          ? (a =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ws(e || 500, i, new Error(a), !0)
  );
}
function rd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (vr(n)) return { result: n, idx: t };
  }
}
function Zp(e) {
  let t = typeof e == "string" ? Xt(e) : e;
  return Vn(me({}, t, { hash: "" }));
}
function r0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function jn(e) {
  return e.type === ge.deferred;
}
function ho(e) {
  return e.type === ge.error;
}
function vr(e) {
  return (e && e.type) === ge.redirect;
}
function o0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function l0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function i0(e) {
  return Yg.has(e.toLowerCase());
}
function xt(e) {
  return Kg.has(e.toLowerCase());
}
async function od(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((m) => m.route.id === u.route.id),
      d = s != null && !Xp(s, u) && (l && l[u.route.id]) !== void 0;
    if (jn(a) && (o || d)) {
      let m = r[i];
      W(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Jp(a, m, o).then((p) => {
          p && (n[i] = p || n[i]);
        });
    }
  }
}
async function Jp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ge.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: ge.error, error: o };
      }
    return { type: ge.data, data: e.deferredData.data };
  }
}
function Ss(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function hu(e, t) {
  let n = typeof t == "string" ? Xt(t).search : t.search;
  if (e[e.length - 1].route.index && Ss(n || "")) return e[e.length - 1];
  let r = xi(e);
  return r[r.length - 1];
}
function ld(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function fa(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function a0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Zr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function u0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function bt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function s0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Gp);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, l] of Object.entries(r || {}))
        l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {}
}
function c0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Gp, JSON.stringify(n));
    } catch (r) {
      Bn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ei.apply(this, arguments)
  );
}
const ki = C.createContext(null),
  qp = C.createContext(null),
  zr = C.createContext(null),
  Ei = C.createContext(null),
  xn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  bp = C.createContext(null);
function d0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Vo() || W(!1);
  let { basename: r, navigator: o } = C.useContext(zr),
    { hash: l, pathname: i, search: a } = rh(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Wt([r, i])),
    o.createHref({ pathname: u, search: a, hash: l })
  );
}
function Vo() {
  return C.useContext(Ei) != null;
}
function Ci() {
  return Vo() || W(!1), C.useContext(Ei).location;
}
function eh(e) {
  C.useContext(zr).static || C.useLayoutEffect(e);
}
function th() {
  let { isDataRoute: e } = C.useContext(xn);
  return e ? E0() : f0();
}
function f0() {
  Vo() || W(!1);
  let e = C.useContext(ki),
    { basename: t, navigator: n } = C.useContext(zr),
    { matches: r } = C.useContext(xn),
    { pathname: o } = Ci(),
    l = JSON.stringify(xi(r).map((u) => u.pathnameBase)),
    i = C.useRef(!1);
  return (
    eh(() => {
      i.current = !0;
    }),
    C.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let d = ys(u, JSON.parse(l), o, s.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Wt([t, d.pathname])),
          (s.replace ? n.replace : n.push)(d, s.state, s);
      },
      [t, n, l, o, e]
    )
  );
}
function nh() {
  let { matches: e } = C.useContext(xn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function rh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(xn),
    { pathname: o } = Ci(),
    l = JSON.stringify(
      xi(r).map((i, a) => (a === r.length - 1 ? i.pathname : i.pathnameBase))
    );
  return C.useMemo(() => ys(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function p0(e, t, n) {
  Vo() || W(!1);
  let { navigator: r } = C.useContext(zr),
    { matches: o } = C.useContext(xn),
    l = o[o.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Ci(),
    s;
  if (t) {
    var d;
    let x = typeof t == "string" ? Xt(t) : t;
    a === "/" || ((d = x.pathname) != null && d.startsWith(a)) || W(!1),
      (s = x);
  } else s = u;
  let m = s.pathname || "/",
    p = a === "/" ? m : m.slice(a.length) || "/",
    w = ur(e, { pathname: p }),
    g = y0(
      w &&
        w.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, i, x.params),
            pathname: Wt([
              a,
              r.encodeLocation
                ? r.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : Wt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && g
    ? C.createElement(
        Ei.Provider,
        {
          value: {
            location: ei(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: ve.Pop,
          },
        },
        g
      )
    : g;
}
function h0() {
  let e = k0(),
    t = Kp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: o }, n) : null,
    l
  );
}
const m0 = C.createElement(h0, null);
class v0 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          xn.Provider,
          { value: this.props.routeContext },
          C.createElement(bp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function g0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = C.useContext(ki);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(xn.Provider, { value: t }, r)
  );
}
function y0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = l.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id])
    );
    a >= 0 || W(!1), (l = l.slice(0, Math.min(l.length, a + 1)));
  }
  return l.reduceRight((a, u, s) => {
    let d = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
      m = null;
    n && (m = u.route.errorElement || m0);
    let p = t.concat(l.slice(0, s + 1)),
      w = () => {
        let g;
        return (
          d
            ? (g = m)
            : u.route.Component
            ? (g = C.createElement(u.route.Component, null))
            : u.route.element
            ? (g = u.route.element)
            : (g = a),
          C.createElement(g0, {
            match: u,
            routeContext: { outlet: a, matches: p, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? C.createElement(v0, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: d,
          children: w(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var oh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(oh || {}),
  ti = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ti || {});
function w0(e) {
  let t = C.useContext(ki);
  return t || W(!1), t;
}
function S0(e) {
  let t = C.useContext(qp);
  return t || W(!1), t;
}
function x0(e) {
  let t = C.useContext(xn);
  return t || W(!1), t;
}
function lh(e) {
  let t = x0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function k0() {
  var e;
  let t = C.useContext(bp),
    n = S0(ti.UseRouteError),
    r = lh(ti.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function E0() {
  let { router: e } = w0(oh.UseNavigateStable),
    t = lh(ti.UseNavigateStable),
    n = C.useRef(!1);
  return (
    eh(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ei({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
function Xn(e) {
  W(!1);
}
function C0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ve.Pop,
    navigator: l,
    static: i = !1,
  } = e;
  Vo() && W(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(() => ({ basename: a, navigator: l, static: i }), [a, l, i]);
  typeof r == "string" && (r = Xt(r));
  let {
      pathname: s = "/",
      search: d = "",
      hash: m = "",
      state: p = null,
      key: w = "default",
    } = r,
    g = C.useMemo(() => {
      let x = Dr(s, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: m, state: p, key: w },
            navigationType: o,
          };
    }, [a, s, d, m, p, w, o]);
  return g == null
    ? null
    : C.createElement(
        zr.Provider,
        { value: u },
        C.createElement(Ei.Provider, { children: n, value: g })
      );
}
new Promise(() => {});
function mu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, o) => {
      if (!C.isValidElement(r)) return;
      let l = [...t, o];
      if (r.type === C.Fragment) {
        n.push.apply(n, mu(r.props.children, l));
        return;
      }
      r.type !== Xn && W(!1), !r.props.index || !r.props.children || W(!1);
      let i = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = mu(r.props.children, l)), n.push(i);
    }),
    n
  );
}
function P0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oo() {
  return (
    (Oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oo.apply(this, arguments)
  );
}
function R0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function _0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function N0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_0(e);
}
const j0 = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function T0(e, t) {
  return qg({
    basename: t == null ? void 0 : t.basename,
    future: Oo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Sg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || L0(),
    routes: e,
    mapRouteProperties: P0,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function L0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Oo({}, t, { errors: D0(t.errors) })), t;
}
function D0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new ws(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let i = new l(o.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        (l.stack = ""), (n[r] = l);
      }
    } else n[r] = o;
  return n;
}
const z0 = C.createContext({ isTransitioning: !1 }),
  M0 = C.createContext(new Map()),
  O0 = "startTransition",
  id = um[O0],
  I0 = "flushSync",
  ad = wg[I0];
function F0(e) {
  id ? id(e) : e();
}
function Jr(e) {
  ad ? ad(e) : e();
}
class $0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function A0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, l] = C.useState(n.state),
    [i, a] = C.useState(),
    [u, s] = C.useState({ isTransitioning: !1 }),
    [d, m] = C.useState(),
    [p, w] = C.useState(),
    [g, x] = C.useState(),
    R = C.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    c = C.useCallback(
      (y) => {
        h ? F0(y) : y();
      },
      [h]
    ),
    v = C.useCallback(
      (y, _) => {
        let {
          deletedFetchers: z,
          unstable_flushSync: I,
          unstable_viewTransitionOpts: Z,
        } = _;
        z.forEach((pe) => R.current.delete(pe)),
          y.fetchers.forEach((pe, mt) => {
            pe.data !== void 0 && R.current.set(mt, pe.data);
          });
        let fe =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Z || fe) {
          I ? Jr(() => l(y)) : c(() => l(y));
          return;
        }
        if (I) {
          Jr(() => {
            p && (d && d.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Z.currentLocation,
                nextLocation: Z.nextLocation,
              });
          });
          let pe = n.window.document.startViewTransition(() => {
            Jr(() => l(y));
          });
          pe.finished.finally(() => {
            Jr(() => {
              m(void 0), w(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Jr(() => w(pe));
          return;
        }
        p
          ? (d && d.resolve(),
            p.skipTransition(),
            x({
              state: y,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }))
          : (a(y),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }));
      },
      [n.window, p, d, R, c]
    );
  C.useLayoutEffect(() => n.subscribe(v), [n, v]),
    C.useEffect(() => {
      u.isTransitioning && !u.flushSync && m(new $0());
    }, [u]),
    C.useEffect(() => {
      if (d && i && n.window) {
        let y = i,
          _ = d.promise,
          z = n.window.document.startViewTransition(async () => {
            c(() => l(y)), await _;
          });
        z.finished.finally(() => {
          m(void 0), w(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          w(z);
      }
    }, [c, i, d, n.window]),
    C.useEffect(() => {
      d && i && o.location.key === i.location.key && d.resolve();
    }, [d, p, o.location, i]),
    C.useEffect(() => {
      !u.isTransitioning &&
        g &&
        (a(g.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        x(void 0));
    }, [u.isTransitioning, g]);
  let f = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (y) => n.navigate(y),
        push: (y, _, z) =>
          n.navigate(y, {
            state: _,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
        replace: (y, _, z) =>
          n.navigate(y, {
            replace: !0,
            state: _,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
      }),
      [n]
    ),
    P = n.basename || "/",
    j = C.useMemo(
      () => ({ router: n, navigator: f, static: !1, basename: P }),
      [n, f, P]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      ki.Provider,
      { value: j },
      C.createElement(
        qp.Provider,
        { value: o },
        C.createElement(
          M0.Provider,
          { value: R.current },
          C.createElement(
            z0.Provider,
            { value: u },
            C.createElement(
              C0,
              {
                basename: P,
                location: o.location,
                navigationType: o.historyAction,
                navigator: f,
              },
              o.initialized
                ? C.createElement(U0, { routes: n.routes, state: o })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function U0(e) {
  let { routes: t, state: n } = e;
  return p0(t, void 0, n);
}
const B0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  V0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mo = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: d,
        unstable_viewTransition: m,
      } = t,
      p = R0(t, j0),
      { basename: w } = C.useContext(zr),
      g,
      x = !1;
    if (typeof s == "string" && V0.test(s) && ((g = s), B0))
      try {
        let v = new URL(window.location.href),
          f = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          P = Dr(f.pathname, w);
        f.origin === v.origin && P != null
          ? (s = P + f.search + f.hash)
          : (x = !0);
      } catch {}
    let R = d0(s, { relative: o }),
      h = W0(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: o,
        unstable_viewTransition: m,
      });
    function c(v) {
      r && r(v), v.defaultPrevented || h(v);
    }
    return C.createElement(
      "a",
      Oo({}, p, { href: g || R, onClick: x || l ? r : c, ref: n, target: u })
    );
  });
var ud;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ud || (ud = {}));
var sd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(sd || (sd = {}));
function W0(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = th(),
    s = Ci(),
    d = rh(e, { relative: i });
  return C.useCallback(
    (m) => {
      if (N0(m, n)) {
        m.preventDefault();
        let p = r !== void 0 ? r : Vn(s) === Vn(d);
        u(e, {
          replace: p,
          state: o,
          preventScrollReset: l,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, d, r, o, n, e, l, i, a]
  );
}
const H0 = (e, t) => (t ? (localStorage[e] = JSON.stringify(t)) : null),
  K0 = (e) => {
    const t = localStorage[e];
    return t ? JSON.parse(t) : void 0;
  },
  Q0 = (e, t) => (n) => t(e(n)),
  Y0 = (...e) => e.reduce((t, n) => Q0(t, n)),
  ih = C.createContext(null),
  Pi = () => C.useContext(ih);
function xs({ children: e }) {
  const [t, n] = C.useState(K0("books") || []),
    r = (a) => t.find((u) => u.id === a),
    o = (a) => n([...t, a]),
    l = (a) => n(t.filter((u) => u.id !== a)),
    i = (a, u) => {
      const s = t.map((d) => (d.id === a ? u : d));
      n(s);
    };
  return (
    C.useEffect(() => {
      H0("books", t);
    }, [t]),
    k.jsx(ih.Provider, {
      value: {
        books: t,
        getBook: r,
        addBook: o,
        removeBook: l,
        replaceBook: i,
      },
      children: e,
    })
  );
}
let dl;
const G0 = new Uint8Array(16);
function X0() {
  if (
    !dl &&
    ((dl =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !dl)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return dl(G0);
}
const Te = [];
for (let e = 0; e < 256; ++e) Te.push((e + 256).toString(16).slice(1));
function Z0(e, t = 0) {
  return (
    Te[e[t + 0]] +
    Te[e[t + 1]] +
    Te[e[t + 2]] +
    Te[e[t + 3]] +
    "-" +
    Te[e[t + 4]] +
    Te[e[t + 5]] +
    "-" +
    Te[e[t + 6]] +
    Te[e[t + 7]] +
    "-" +
    Te[e[t + 8]] +
    Te[e[t + 9]] +
    "-" +
    Te[e[t + 10]] +
    Te[e[t + 11]] +
    Te[e[t + 12]] +
    Te[e[t + 13]] +
    Te[e[t + 14]] +
    Te[e[t + 15]]
  );
}
const J0 =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  cd = { randomUUID: J0 };
function Ri(e, t, n) {
  if (cd.randomUUID && !t && !e) return cd.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || X0)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    n = n || 0;
    for (let o = 0; o < 16; ++o) t[n + o] = r[o];
    return t;
  }
  return Z0(r);
}
function ah({ book: e, mode: t, onCancel: n }) {
  const [r, o] = C.useState((e == null ? void 0 : e.name) ?? ""),
    [l, i] = C.useState((e == null ? void 0 : e.description) ?? ""),
    { addBook: a, replaceBook: u } = Pi(),
    s = (d) => {
      d.preventDefault(),
        e
          ? u(e.id, { id: e.id, name: r, description: l, cards: e.cards })
          : a({ id: Ri(), name: r, description: l, cards: [] });
    };
  return k.jsx("div", {
    className: "book-creator",
    children: k.jsxs("form", {
      className: "book-creator-form",
      children: [
        k.jsx(dd, {
          itemName: "name",
          defaultValue: e == null ? void 0 : e.name,
          consumeValue: o,
        }),
        k.jsx(dd, {
          itemName: "description",
          defaultValue: e == null ? void 0 : e.description,
          consumeValue: i,
        }),
        k.jsx("button", {
          className: "btn btn-light",
          onClick: s,
          children: t,
        }),
        n &&
          k.jsx("button", {
            className: "btn btn-light",
            onClick: n,
            children: "cancel",
          }),
      ],
    }),
  });
}
function dd({ itemName: e, defaultValue: t, consumeValue: n }) {
  return k.jsxs("div", {
    className: "labeled-text-input",
    children: [
      k.jsxs("label", {
        children: [
          k.jsxs("span", { children: [e, ":"] }),
          k.jsx("br", {}),
          k.jsx("input", {
            type: "text",
            placeholder: e,
            defaultValue: t,
            onChange: (r) => n(r.target.value),
          }),
        ],
      }),
      k.jsx("br", {}),
    ],
  });
}
function uh({ onClick: e, myStyle: t, myClass: n, fillColor: r }) {
  return k.jsxs("svg", {
    onClick: e,
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: r || "currentColor",
    className: `bi bi-pencil-square ${n}`,
    viewBox: "0 0 16 16",
    style: t,
    children: [
      k.jsx("path", {
        d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
      }),
      k.jsx("path", {
        fillRule: "evenodd",
        d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z",
      }),
    ],
  });
}
function sh({ onClick: e, myClass: t, fillColor: n }) {
  return k.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: n || "currentColor",
    className: `bi bi-trash3 ${t}`,
    viewBox: "0 0 16 16",
    onClick: e,
    children: k.jsx("path", {
      d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z",
    }),
  });
}
function q0({ book: e }) {
  const { removeBook: t } = Pi(),
    [n, r] = C.useState(!1),
    o = "rgba(0,0,0,0.2)";
  return k.jsxs("div", {
    className: "book",
    children: [
      k.jsxs("div", {
        className: "book-head",
        children: [
          k.jsx(uh, {
            className: "edit-button",
            onClick: () => r((l) => !l),
            fillColor: o,
          }),
          k.jsx(sh, {
            className: "delete-button",
            onClick: () => {
              confirm("delete?") && t(e.id);
            },
            fillColor: o,
          }),
        ],
      }),
      !n && k.jsx("p", { children: e.name }),
      !n && k.jsx("p", { children: e.description }),
      n && k.jsx(ah, { book: e, mode: "edit", onCancel: () => r(!1) }),
      k.jsx(mo, { to: `list/${e.id}`, children: "open" }),
    ],
  });
}
function b0() {
  const { books: e } = Pi();
  return k.jsx("div", {
    children: k.jsxs("div", {
      className: "book-list",
      children: [
        e.length === 0 &&
          k.jsx("h3", { children: "Please create a new book." }),
        e.map((t) => k.jsx(q0, { book: t }, Ri())),
        k.jsx(ah, { mode: "create" }),
      ],
    }),
  });
}
function ey() {
  return k.jsxs(xs, {
    children: [k.jsx("h2", { children: "Books" }), k.jsx(b0, {})],
  });
}
const ch = C.createContext(null),
  Mr = () => C.useContext(ch);
function dh({ bookId: e, children: t }) {
  const { getBook: n, replaceBook: r } = Pi(),
    o = n(e);
  if (!o) throw new Error("Book does not exist. ID" + e);
  const [l, i] = C.useState((o == null ? void 0 : o.cards) ?? []),
    a = () => ({
      id: Ri(),
      quiz: "",
      hint: "",
      answer: "",
      note: "",
      correct: 0,
      uncorrect: 0,
      rating: 0,
    }),
    u = (w) => {
      i([...l, ...w]);
    },
    s = (w) => {
      i(l.filter((g) => g.id !== w));
    },
    d = (w) => {
      i(l.map((g) => (g.id === w.id ? w : g)));
    },
    m = (w) => {
      i(w);
    },
    p = (w, g) => {
      const x = (R, h) => Math.round((R / h) * 100);
      i(
        l.map((R) =>
          R.id !== w
            ? { ...R }
            : g
            ? {
                ...R,
                correct: R.correct + 1,
                rating: x(R.correct + 1, R.correct + R.uncorrect + 1),
              }
            : {
                ...R,
                uncorrect: R.uncorrect + 1,
                rating: x(R.correct, R.correct + R.uncorrect + 1),
              }
        )
      );
    };
  return (
    C.useEffect(() => {
      r(e, { ...o, cards: l });
    }, [l]),
    k.jsx(ch.Provider, {
      value: {
        book: o,
        cards: l,
        newCard: a,
        addCards: u,
        deleteCard: s,
        replaceCard: d,
        replaceAllCards: m,
        updateResult: p,
      },
      children: t,
    })
  );
}
function ty({
  id: e,
  input: t,
  setInput: n,
  prevResult: r,
  setPrevResult: o,
  answer: l,
  updateResult: i,
  onfocus: a,
}) {
  const u = (c) => (c == null ? void 0 : c.replaceAll(/\s/g, "")) ?? "",
    s = (c, v) => (c.startsWith(v) ? v.length / c.length : 0),
    d = (c) => {
      switch (c) {
        case 0:
          return { color: "red" };
        case 1:
          return {
            color: "rgba(20, 255, 20, 1)",
            border: "thick solid rgb(20, 255, 20)",
          };
        default:
          return { color: `rgba(20, ${c * 255}, 20, 0.7)` };
      }
    },
    m = u(l),
    p = u(t),
    w = s(m, p);
  let g = w === 1,
    x = d(w);
  if (!r && g) {
    var R = document.getElementsByClassName("cards")[0];
    R == null || R.classList.add("cards-correct"),
      setTimeout(
        () => (R == null ? void 0 : R.classList.remove("cards-correct")),
        200
      ),
      o(!0);
  }
  r && !g && o(!1);
  const h = (c) => {
    c.key === "Tab" && !c.shiftKey && c.keyCode !== 229 && i(e, g);
  };
  return l
    ? k.jsx("div", {
        className: "blank",
        children: k.jsx("input", {
          className: "blank-input form-control",
          style: { fontSize: "1.5rem", ...x },
          value: t,
          placeholder: "input here",
          onChange: (c) => n(c.target.value),
          onKeyDown: h,
          onFocus: a,
        }),
      })
    : null;
}
function ny({ card: e, onSuccess: t, onCancel: n }) {
  const { replaceCard: r } = Mr(),
    [o, l] = C.useState(e),
    i = (s) => l({ ...o, [s.target.name]: s.target.value }),
    a = (s) => {
      s.key === "Escape" && n();
    },
    u = (s) => {
      s.preventDefault(), r(o), t && t();
    };
  return k.jsx("div", {
    className: "create-panel container",
    children: k.jsxs("form", {
      name: "cardCreatorForm",
      onSubmit: u,
      children: [
        k.jsx("input", {
          className: "form-control",
          name: "quiz",
          placeholder: "quiz",
          defaultValue: e.quiz,
          onChange: i,
          onKeyDown: a,
        }),
        k.jsx("input", {
          className: "form-control",
          name: "hint",
          placeholder: "hint",
          defaultValue: e.hint,
          onChange: i,
          onKeyDown: a,
        }),
        k.jsx("input", {
          className: "form-control",
          name: "answer",
          placeholder: "answer",
          defaultValue: e.answer,
          onChange: i,
          onKeyDown: a,
        }),
        k.jsx("input", {
          className: "form-control",
          name: "note",
          placeholder: "note",
          defaultValue: e.note,
          onChange: i,
          onKeyDown: a,
        }),
        k.jsx("button", {
          className: "btn btn-light",
          type: "submit",
          children: "edit",
        }),
        k.jsx("button", {
          className: "btn btn-light",
          onClick: n,
          type: "button",
          children: "cancel",
        }),
      ],
    }),
  });
}
function ry({ onClick: e, fillColor: t }) {
  return k.jsx(uh, { onClick: e, myClass: "edit-button", fillColor: t });
}
function oy({ onClick: e, fillColor: t }) {
  return k.jsx(sh, {
    onClick: () => {
      confirm("delete?") && e();
    },
    myClass: "delete-button",
    fillColor: t,
  });
}
function ly({ card: e, mode: t }) {
  const {
    id: n,
    quiz: r,
    hint: o,
    answer: l,
    note: i,
    correct: a,
    uncorrect: u,
    rating: s,
  } = e;
  if (r === "") return;
  const [d, m] = C.useState(!0),
    [p, w] = C.useReducer((_) => !_, !1),
    [g, x] = C.useState(""),
    [R, h] = C.useState(!1),
    { deleteCard: c, updateResult: v } = Mr(),
    f = C.useRef(null),
    P = () => m((_) => !_),
    j = `rgba(
    ${(u / (u + a + Number.MIN_VALUE)) * 255},
    ${(a / (u + a + Number.MIN_VALUE)) * 255},
    0, 1)`,
    y = (_) => {
      var z;
      return (z = f.current) == null ? void 0 : z.scrollIntoView(_);
    };
  return (
    C.useEffect(() => {
      n === localStorage.currentCard && y({ behavior: "instant" });
    }, []),
    k.jsxs("div", {
      ref: f,
      className: "container card flash-card",
      onClick: () => (localStorage.currentCard = n),
      children: [
        k.jsxs("div", {
          className: "card-head",
          children: [
            k.jsx(ry, {
              className: "edit-button",
              onClick: w,
              fillColor: "rgb(1,1,1)",
            }),
            k.jsx(oy, {
              className: "delete-button",
              onClick: () => c(n),
              fillColor: "rgb(1,1,1)",
            }),
            k.jsxs("div", {
              className: "statistics",
              style: { color: j },
              children: [
                a,
                "/",
                u + a,
                k.jsx("span", { className: "mr-3", children: " " }),
                s,
                "%",
              ],
            }),
          ],
        }),
        k.jsxs("div", {
          className: "card-body",
          children: [
            !p &&
              k.jsxs(k.Fragment, {
                children: [
                  r &&
                    ((t === "practice" && d) || t === "preview") &&
                    k.jsx("p", { className: "quiz", children: r }),
                  o &&
                    t === "practice" &&
                    d &&
                    k.jsx("p", { className: "hint", children: o }),
                  l &&
                    t === "practice" &&
                    d &&
                    k.jsx(ty, {
                      id: n,
                      input: g,
                      setInput: x,
                      prevResult: R,
                      setPrevResult: h,
                      answer: l,
                      updateResult: v,
                      onfocus: () => y({ behavior: "smooth" }),
                    }),
                  l &&
                    ((t === "practice" && !d) || t === "preview") &&
                    k.jsx("p", { className: "answer", children: l }),
                  i &&
                    ((t === "practice" && !d) || t === "preview") &&
                    k.jsx("p", { className: "note", children: i }),
                  t === "practice" &&
                    k.jsx("div", { className: "flip-button", onClick: P }),
                ],
              }),
            p && k.jsx(ny, { card: e, onSuccess: w, onCancel: w }),
          ],
        }),
      ],
    })
  );
}
const iy = C.memo(ly);
function ay() {
  const [e, t] = C.useState(localStorage.theme),
    n = () => {
      const r = e === "light" ? "dark" : "light";
      (localStorage.theme = r),
        t(r),
        (document.documentElement.className = "theme-" + r);
    };
  return (
    (document.documentElement.className = "theme-" + e),
    k.jsx("button", { className: "theme-selector", onClick: n, children: e })
  );
}
const uy = C.memo(function ({ id: t }) {
  const { cards: n, book: r } = Mr(),
    [o, l] = C.useState("practice"),
    [i, a] = C.useState(() => {}),
    u = [...n];
  return k.jsxs("div", {
    className: "card-page",
    children: [
      k.jsxs("header", {
        children: [
          k.jsx(ay, {}),
          k.jsx("h3", { children: r.name }),
          k.jsxs("p", { children: ["total ", n.length, " cards"] }),
          k.jsx(mo, { to: "../", children: "back" }),
          k.jsx("span", { children: " " }),
          k.jsx(mo, { to: "../add/" + t, children: "add new" }),
          k.jsx("span", { children: " " }),
          k.jsx(mo, { to: "../edit/" + t, children: "edit all" }),
          k.jsx("br", {}),
          k.jsxs("label", {
            children: [
              "mode:",
              k.jsxs("select", {
                onChange: (s) => l(s.target.value),
                children: [
                  k.jsx("option", { children: "practice" }),
                  k.jsx("option", { children: "preview" }),
                ],
              }),
            ],
          }),
          k.jsx("span", { children: " " }),
          k.jsxs("label", {
            children: [
              "sort:",
              k.jsxs("select", {
                onChange: (s) => {
                  switch (s.target.value) {
                    case "default":
                      console.log("default"), a(() => {});
                      break;
                    case "ascendent":
                      console.log("ascendent"),
                        a(() => (m, p) => m.rating - p.rating);
                      break;
                    case "descendent":
                      console.log("descendent"),
                        a(() => (m, p) => p.rating - m.rating);
                      break;
                  }
                },
                children: [
                  k.jsx("option", { children: "default" }),
                  k.jsx("option", { children: "ascendent" }),
                  k.jsx("option", { children: "descendent" }),
                ],
              }),
            ],
          }),
        ],
      }),
      k.jsxs("div", {
        className: "cards",
        children: [
          n.length === 0 &&
            k.jsx("h4", { children: "Please create new cards" }),
          u.sort(i).map((s) => k.jsx(iy, { card: s, mode: o }, s.id)),
        ],
      }),
    ],
  });
});
function sy() {
  const { id: e } = nh();
  return k.jsx(xs, {
    children: k.jsx(dh, { bookId: e, children: k.jsx(uy, { id: e }) }),
  });
}
var Ye = function () {
  return (
    (Ye =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var l in n)
            Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
        }
        return t;
      }),
    Ye.apply(this, arguments)
  );
};
function ni(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, l; r < o; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var oe = "-ms-",
  vo = "-moz-",
  J = "-webkit-",
  fh = "comm",
  _i = "rule",
  ks = "decl",
  cy = "@import",
  ph = "@keyframes",
  dy = "@layer",
  fy = Math.abs,
  Es = String.fromCharCode,
  vu = Object.assign;
function py(e, t) {
  return Re(e, 0) ^ 45
    ? (((((((t << 2) ^ Re(e, 0)) << 2) ^ Re(e, 1)) << 2) ^ Re(e, 2)) << 2) ^
        Re(e, 3)
    : 0;
}
function hh(e) {
  return e.trim();
}
function $t(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function V(e, t, n) {
  return e.replace(t, n);
}
function Pl(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function Cr(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function mh(e) {
  return e.length;
}
function no(e, t) {
  return t.push(e), e;
}
function hy(e, t) {
  return e.map(t).join("");
}
function fd(e, t) {
  return e.filter(function (n) {
    return !$t(n, t);
  });
}
var Ni = 1,
  Pr = 1,
  vh = 0,
  ht = 0,
  xe = 0,
  Or = "";
function ji(e, t, n, r, o, l, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: l,
    line: Ni,
    column: Pr,
    length: i,
    return: "",
    siblings: a,
  };
}
function en(e, t) {
  return vu(
    ji("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Gn(e) {
  for (; e.root; ) e = en(e.root, { children: [e] });
  no(e, e.siblings);
}
function my() {
  return xe;
}
function vy() {
  return (
    (xe = ht > 0 ? Re(Or, --ht) : 0), Pr--, xe === 10 && ((Pr = 1), Ni--), xe
  );
}
function Pt() {
  return (
    (xe = ht < vh ? Re(Or, ht++) : 0), Pr++, xe === 10 && ((Pr = 1), Ni++), xe
  );
}
function zn() {
  return Re(Or, ht);
}
function Rl() {
  return ht;
}
function Ti(e, t) {
  return Cr(Or, e, t);
}
function gu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gy(e) {
  return (Ni = Pr = 1), (vh = Dt((Or = e))), (ht = 0), [];
}
function yy(e) {
  return (Or = ""), e;
}
function pa(e) {
  return hh(Ti(ht - 1, yu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wy(e) {
  for (; (xe = zn()) && xe < 33; ) Pt();
  return gu(e) > 2 || gu(xe) > 3 ? "" : " ";
}
function Sy(e, t) {
  for (
    ;
    --t &&
    Pt() &&
    !(xe < 48 || xe > 102 || (xe > 57 && xe < 65) || (xe > 70 && xe < 97));

  );
  return Ti(e, Rl() + (t < 6 && zn() == 32 && Pt() == 32));
}
function yu(e) {
  for (; Pt(); )
    switch (xe) {
      case e:
        return ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yu(xe);
        break;
      case 40:
        e === 41 && yu(e);
        break;
      case 92:
        Pt();
        break;
    }
  return ht;
}
function xy(e, t) {
  for (; Pt() && e + xe !== 47 + 10; )
    if (e + xe === 42 + 42 && zn() === 47) break;
  return "/*" + Ti(t, ht - 1) + "*" + Es(e === 47 ? e : Pt());
}
function ky(e) {
  for (; !gu(zn()); ) Pt();
  return Ti(e, ht);
}
function Ey(e) {
  return yy(_l("", null, null, null, [""], (e = gy(e)), 0, [0], e));
}
function _l(e, t, n, r, o, l, i, a, u) {
  for (
    var s = 0,
      d = 0,
      m = i,
      p = 0,
      w = 0,
      g = 0,
      x = 1,
      R = 1,
      h = 1,
      c = 0,
      v = "",
      f = o,
      P = l,
      j = r,
      y = v;
    R;

  )
    switch (((g = c), (c = Pt()))) {
      case 40:
        if (g != 108 && Re(y, m - 1) == 58) {
          Pl((y += V(pa(c), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += pa(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += wy(g);
        break;
      case 92:
        y += Sy(Rl() - 1, 7);
        continue;
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            no(Cy(xy(Pt(), Rl()), t, n, u), u);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * x:
        a[s++] = Dt(y) * h;
      case 125 * x:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            R = 0;
          case 59 + d:
            h == -1 && (y = V(y, /\f/g, "")),
              w > 0 &&
                Dt(y) - m &&
                no(
                  w > 32
                    ? hd(y + ";", r, n, m - 1, u)
                    : hd(V(y, " ", "") + ";", r, n, m - 2, u),
                  u
                );
            break;
          case 59:
            y += ";";
          default:
            if (
              (no(
                (j = pd(y, t, n, s, d, o, a, v, (f = []), (P = []), m, l)),
                l
              ),
              c === 123)
            )
              if (d === 0) _l(y, t, j, j, f, l, m, a, P);
              else
                switch (p === 99 && Re(y, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _l(
                      e,
                      j,
                      j,
                      r && no(pd(e, j, j, 0, 0, o, a, v, o, (f = []), m, P), P),
                      o,
                      P,
                      m,
                      a,
                      r ? f : P
                    );
                    break;
                  default:
                    _l(y, j, j, j, [""], P, 0, a, P);
                }
        }
        (s = d = w = 0), (x = h = 1), (v = y = ""), (m = i);
        break;
      case 58:
        (m = 1 + Dt(y)), (w = g);
      default:
        if (x < 1) {
          if (c == 123) --x;
          else if (c == 125 && x++ == 0 && vy() == 125) continue;
        }
        switch (((y += Es(c)), c * x)) {
          case 38:
            h = d > 0 ? 1 : ((y += "\f"), -1);
            break;
          case 44:
            (a[s++] = (Dt(y) - 1) * h), (h = 1);
            break;
          case 64:
            zn() === 45 && (y += pa(Pt())),
              (p = zn()),
              (d = m = Dt((v = y += ky(Rl())))),
              c++;
            break;
          case 45:
            g === 45 && Dt(y) == 2 && (x = 0);
        }
    }
  return l;
}
function pd(e, t, n, r, o, l, i, a, u, s, d, m) {
  for (
    var p = o - 1, w = o === 0 ? l : [""], g = mh(w), x = 0, R = 0, h = 0;
    x < r;
    ++x
  )
    for (var c = 0, v = Cr(e, p + 1, (p = fy((R = i[x])))), f = e; c < g; ++c)
      (f = hh(R > 0 ? w[c] + " " + v : V(v, /&\f/g, w[c]))) && (u[h++] = f);
  return ji(e, t, n, o === 0 ? _i : a, u, s, d, m);
}
function Cy(e, t, n, r) {
  return ji(e, t, n, fh, Es(my()), Cr(e, 2, -2), 0, r);
}
function hd(e, t, n, r, o) {
  return ji(e, t, n, ks, Cr(e, 0, r), Cr(e, r + 1, -1), r, o);
}
function gh(e, t, n) {
  switch (py(e, t)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 4789:
      return vo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + vo + e + oe + e + e;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return J + e + oe + V(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + oe + V(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + oe + V(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return J + e + oe + e + e;
    case 6165:
      return J + e + oe + "flex-" + e + e;
    case 5187:
      return (
        J + e + V(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + oe + "flex-$1$2") + e
      );
    case 5443:
      return (
        J +
        e +
        oe +
        "flex-item-" +
        V(e, /flex-|-self/g, "") +
        ($t(e, /flex-|baseline/)
          ? ""
          : oe + "grid-row-" + V(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        J +
        e +
        oe +
        "flex-line-pack" +
        V(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return J + e + oe + V(e, "shrink", "negative") + e;
    case 5292:
      return J + e + oe + V(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        J +
        "box-" +
        V(e, "-grow", "") +
        J +
        e +
        oe +
        V(e, "grow", "positive") +
        e
      );
    case 4554:
      return J + V(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return (
        V(V(V(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return (
        V(
          V(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + oe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        J +
        e +
        e
      );
    case 4200:
      if (!$t(e, /flex-|baseline/))
        return oe + "grid-column-align" + Cr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return oe + V(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), $t(r.props, /grid-\w+-end/);
        })
        ? ~Pl(e + (n = n[t].value), "span")
          ? e
          : oe +
            V(e, "-start", "") +
            e +
            oe +
            "grid-row-span:" +
            (~Pl(n, "span") ? $t(n, /\d+/) : +$t(n, /\d+/) - +$t(e, /\d+/)) +
            ";"
        : oe + V(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return $t(r.props, /grid-\w+-start/);
        })
        ? e
        : oe + V(V(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dt(e) - 1 - t > 6)
        switch (Re(e, t + 1)) {
          case 109:
            if (Re(e, t + 4) !== 45) break;
          case 102:
            return (
              V(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  J +
                  "$2-$3$1" +
                  vo +
                  (Re(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Pl(e, "stretch")
              ? gh(V(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return V(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, l, i, a, u, s) {
          return (
            oe +
            o +
            ":" +
            l +
            s +
            (i ? oe + o + "-span:" + (a ? u : +u - +l) + s : "") +
            e
          );
        }
      );
    case 4949:
      if (Re(e, t + 6) === 121) return V(e, ":", ":" + J) + e;
      break;
    case 6444:
      switch (Re(e, Re(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            V(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                J +
                (Re(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                J +
                "$2$3$1" +
                oe +
                "$2box$3"
            ) + e
          );
        case 100:
          return V(e, ":", ":" + oe) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return V(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ri(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Py(e, t, n, r) {
  switch (e.type) {
    case dy:
      if (e.children.length) break;
    case cy:
    case ks:
      return (e.return = e.return || e.value);
    case fh:
      return "";
    case ph:
      return (e.return = e.value + "{" + ri(e.children, r) + "}");
    case _i:
      if (!Dt((e.value = e.props.join(",")))) return "";
  }
  return Dt((n = ri(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Ry(e) {
  var t = mh(e);
  return function (n, r, o, l) {
    for (var i = "", a = 0; a < t; a++) i += e[a](n, r, o, l) || "";
    return i;
  };
}
function _y(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Ny(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ks:
        e.return = gh(e.value, e.length, n);
        return;
      case ph:
        return ri([en(e, { value: V(e.value, "@", "@" + J) })], r);
      case _i:
        if (e.length)
          return hy((n = e.props), function (o) {
            switch ($t(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Gn(en(e, { props: [V(o, /:(read-\w+)/, ":" + vo + "$1")] })),
                  Gn(en(e, { props: [o] })),
                  vu(e, { props: fd(n, r) });
                break;
              case "::placeholder":
                Gn(
                  en(e, { props: [V(o, /:(plac\w+)/, ":" + J + "input-$1")] })
                ),
                  Gn(en(e, { props: [V(o, /:(plac\w+)/, ":" + vo + "$1")] })),
                  Gn(en(e, { props: [V(o, /:(plac\w+)/, oe + "input-$1")] })),
                  Gn(en(e, { props: [o] })),
                  vu(e, { props: fd(n, r) });
                break;
            }
            return "";
          });
    }
}
var jy = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Rr =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  Cs = typeof window < "u" && "HTMLElement" in window,
  Ty = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  Li = Object.freeze([]),
  _r = Object.freeze({});
function Ly(e, t, n) {
  return (
    n === void 0 && (n = _r), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var yh = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Dy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  zy = /(^-|-$)/g;
function md(e) {
  return e.replace(Dy, "-").replace(zy, "");
}
var My = /(a)(d)/gi,
  vd = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function wu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = vd(t % 52) + n;
  return (vd(t % 52) + n).replace(My, "$1-$2");
}
var ha,
  sr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  wh = function (e) {
    return sr(5381, e);
  };
function Oy(e) {
  return wu(wh(e) >>> 0);
}
function Iy(e) {
  return e.displayName || e.name || "Component";
}
function ma(e) {
  return typeof e == "string" && !0;
}
var Sh = typeof Symbol == "function" && Symbol.for,
  xh = Sh ? Symbol.for("react.memo") : 60115,
  Fy = Sh ? Symbol.for("react.forward_ref") : 60112,
  $y = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Ay = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  kh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Uy =
    (((ha = {})[Fy] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ha[xh] = kh),
    ha);
function gd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === xh
    ? kh
    : "$$typeof" in e
    ? Uy[e.$$typeof]
    : $y;
  var t;
}
var By = Object.defineProperty,
  Vy = Object.getOwnPropertyNames,
  yd = Object.getOwnPropertySymbols,
  Wy = Object.getOwnPropertyDescriptor,
  Hy = Object.getPrototypeOf,
  wd = Object.prototype;
function Eh(e, t, n) {
  if (typeof t != "string") {
    if (wd) {
      var r = Hy(t);
      r && r !== wd && Eh(e, r, n);
    }
    var o = Vy(t);
    yd && (o = o.concat(yd(t)));
    for (var l = gd(e), i = gd(t), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!(u in Ay || (n && n[u]) || (i && u in i) || (l && u in l))) {
        var s = Wy(t, u);
        try {
          By(e, u, s);
        } catch {}
      }
    }
  }
  return e;
}
function Nr(e) {
  return typeof e == "function";
}
function Ps(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Tn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Sd(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Io(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Su(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Io(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Su(e[r], t[r]);
  else if (Io(t)) for (var r in t) e[r] = Su(e[r], t[r]);
  return e;
}
function Rs(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Wo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Ky = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, l = o; t >= l; )
            if ((l <<= 1) < 0) throw Wo(16, "".concat(t));
          (this.groupSizes = new Uint32Array(l)),
            this.groupSizes.set(r),
            (this.length = l);
          for (var i = o; i < l; i++) this.groupSizes[i] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), u = ((i = 0), n.length);
          i < u;
          i++
        )
          this.tag.insertRule(a, n[i]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var l = r; l < o; l++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            l = o + r,
            i = o;
          i < l;
          i++
        )
          n += "".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  Nl = new Map(),
  oi = new Map(),
  jl = 1,
  fl = function (e) {
    if (Nl.has(e)) return Nl.get(e);
    for (; oi.has(jl); ) jl++;
    var t = jl++;
    return Nl.set(e, t), oi.set(t, e), t;
  },
  Qy = function (e, t) {
    (jl = t + 1), Nl.set(e, t), oi.set(t, e);
  },
  Yy = "style["
    .concat(Rr, "][")
    .concat("data-styled-version", '="')
    .concat("6.1.1", '"]'),
  Gy = new RegExp(
    "^".concat(Rr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Xy = function (e, t, n) {
    for (var r, o = n.split(","), l = 0, i = o.length; l < i; l++)
      (r = o[l]) && e.registerName(t, r);
  },
  Zy = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        o = [],
        l = 0,
        i = r.length;
      l < i;
      l++
    ) {
      var a = r[l].trim();
      if (a) {
        var u = a.match(Gy);
        if (u) {
          var s = 0 | parseInt(u[1], 10),
            d = u[2];
          s !== 0 && (Qy(d, s), Xy(e, d, u[3]), e.getTag().insertRules(s, o)),
            (o.length = 0);
        } else o.push(a);
      }
    }
  };
function Jy() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ch = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (a) {
        var u = Array.from(a.querySelectorAll("style[".concat(Rr, "]")));
        return u[u.length - 1];
      })(n),
      l = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Rr, "active"),
      r.setAttribute("data-styled-version", "6.1.1");
    var i = Jy();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, l), r;
  },
  qy = (function () {
    function e(t) {
      (this.element = Ch(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, l = r.length; o < l; o++) {
            var i = r[o];
            if (i.ownerNode === n) return i;
          }
          throw Wo(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  by = (function () {
    function e(t) {
      (this.element = Ch(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  e1 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  xd = Cs,
  t1 = { isServer: !Cs, useCSSOMInjection: !Ty },
  Ph = (function () {
    function e(t, n, r) {
      t === void 0 && (t = _r), n === void 0 && (n = {});
      var o = this;
      (this.options = Ye(Ye({}, t1), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Cs &&
          xd &&
          ((xd = !1),
          (function (l) {
            for (
              var i = document.querySelectorAll(Yy), a = 0, u = i.length;
              a < u;
              a++
            ) {
              var s = i[a];
              s &&
                s.getAttribute(Rr) !== "active" &&
                (Zy(l, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this)),
        Rs(this, function () {
          return (function (l) {
            for (
              var i = l.getTag(),
                a = i.length,
                u = "",
                s = function (m) {
                  var p = (function (h) {
                    return oi.get(h);
                  })(m);
                  if (p === void 0) return "continue";
                  var w = l.names.get(p),
                    g = i.getGroup(m);
                  if (w === void 0 || g.length === 0) return "continue";
                  var x = ""
                      .concat(Rr, ".g")
                      .concat(m, '[id="')
                      .concat(p, '"]'),
                    R = "";
                  w !== void 0 &&
                    w.forEach(function (h) {
                      h.length > 0 && (R += "".concat(h, ","));
                    }),
                    (u += "".concat(g).concat(x, '{content:"').concat(R, '"}')
                      .concat(`/*!sc*/
`));
                },
                d = 0;
              d < a;
              d++
            )
              s(d);
            return u;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return fl(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Ye(Ye({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new e1(o) : r ? new qy(o) : new by(o);
            })(this.options)),
            new Ky(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((fl(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(fl(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(fl(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  n1 = /&/g,
  r1 = /^\s*\/\/.*$/gm;
function Rh(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Rh(n.children, t)),
      n
    );
  });
}
function o1(e) {
  var t,
    n,
    r,
    o = e === void 0 ? _r : e,
    l = o.options,
    i = l === void 0 ? _r : l,
    a = o.plugins,
    u = a === void 0 ? Li : a,
    s = function (p, w, g) {
      return g === n ||
        (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : p;
    },
    d = u.slice();
  d.push(function (p) {
    p.type === _i &&
      p.value.includes("&") &&
      (p.props[0] = p.props[0].replace(n1, n).replace(r, s));
  }),
    i.prefix && d.push(Ny),
    d.push(Py);
  var m = function (p, w, g, x) {
    w === void 0 && (w = ""),
      g === void 0 && (g = ""),
      x === void 0 && (x = "&"),
      (t = x),
      (n = w),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var R = p.replace(r1, ""),
      h = Ey(g || w ? "".concat(g, " ").concat(w, " { ").concat(R, " }") : R);
    i.namespace && (h = Rh(h, i.namespace));
    var c = [];
    return (
      ri(
        h,
        Ry(
          d.concat(
            _y(function (v) {
              return c.push(v);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (m.hash = u.length
      ? u
          .reduce(function (p, w) {
            return w.name || Wo(15), sr(p, w.name);
          }, 5381)
          .toString()
      : ""),
    m
  );
}
var l1 = new Ph(),
  xu = o1(),
  _h = On.createContext({
    shouldForwardProp: void 0,
    styleSheet: l1,
    stylis: xu,
  });
_h.Consumer;
On.createContext(void 0);
function kd() {
  return C.useContext(_h);
}
var i1 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, l) {
        l === void 0 && (l = xu);
        var i = r.name + l.hash;
        o.hasNameForId(r.id, i) ||
          o.insertRules(r.id, i, l(r.rules, i, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Rs(this, function () {
          throw Wo(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = xu), this.name + t.hash;
      }),
      e
    );
  })(),
  a1 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Ed(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    a1(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Nh = function (e) {
    return e == null || e === !1 || e === "";
  },
  jh = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var l = e[o];
      e.hasOwnProperty(o) &&
        !Nh(l) &&
        ((Array.isArray(l) && l.isCss) || Nr(l)
          ? r.push("".concat(Ed(o), ":"), l, ";")
          : Io(l)
          ? r.push.apply(r, ni(ni(["".concat(o, " {")], jh(l), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Ed(o), ": ")
                .concat(
                  ((t = o),
                  (n = l) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in jy ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Mn(e, t, n, r) {
  if (Nh(e)) return [];
  if (Ps(e)) return [".".concat(e.styledComponentId)];
  if (Nr(e)) {
    if (!Nr((l = e)) || (l.prototype && l.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return Mn(o, t, n, r);
  }
  var l;
  return e instanceof i1
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Io(e)
    ? jh(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Li,
        e.map(function (i) {
          return Mn(i, t, n, r);
        })
      )
    : [e.toString()];
}
function u1(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Nr(n) && !Ps(n)) return !1;
  }
  return !0;
}
var s1 = wh("6.1.1"),
  c1 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && u1(t)),
        (this.componentId = n),
        (this.baseHash = sr(s1, n)),
        (this.baseStyle = r),
        Ph.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Tn(o, this.staticRulesId);
          else {
            var l = Sd(Mn(this.rules, t, n, r)),
              i = wu(sr(this.baseHash, l) >>> 0);
            if (!n.hasNameForId(this.componentId, i)) {
              var a = r(l, ".".concat(i), void 0, this.componentId);
              n.insertRules(this.componentId, i, a);
            }
            (o = Tn(o, i)), (this.staticRulesId = i);
          }
        else {
          for (
            var u = sr(this.baseHash, r.hash), s = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var m = this.rules[d];
            if (typeof m == "string") s += m;
            else if (m) {
              var p = Sd(Mn(m, t, n, r));
              (u = sr(u, p + d)), (s += p);
            }
          }
          if (s) {
            var w = wu(u >>> 0);
            n.hasNameForId(this.componentId, w) ||
              n.insertRules(
                this.componentId,
                w,
                r(s, ".".concat(w), void 0, this.componentId)
              ),
              (o = Tn(o, w));
          }
        }
        return o;
      }),
      e
    );
  })(),
  Th = On.createContext(void 0);
Th.Consumer;
var va = {};
function d1(e, t, n) {
  var r = Ps(e),
    o = e,
    l = !ma(e),
    i = t.attrs,
    a = i === void 0 ? Li : i,
    u = t.componentId,
    s =
      u === void 0
        ? (function (f, P) {
            var j = typeof f != "string" ? "sc" : md(f);
            va[j] = (va[j] || 0) + 1;
            var y = "".concat(j, "-").concat(Oy("6.1.1" + j + va[j]));
            return P ? "".concat(P, "-").concat(y) : y;
          })(t.displayName, t.parentComponentId)
        : u,
    d = t.displayName,
    m =
      d === void 0
        ? (function (f) {
            return ma(f) ? "styled.".concat(f) : "Styled(".concat(Iy(f), ")");
          })(e)
        : d,
    p =
      t.displayName && t.componentId
        ? "".concat(md(t.displayName), "-").concat(t.componentId)
        : t.componentId || s,
    w = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a,
    g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var R = t.shouldForwardProp;
      g = function (f, P) {
        return x(f, P) && R(f, P);
      };
    } else g = x;
  }
  var h = new c1(n, p, r ? o.componentStyle : void 0);
  function c(f, P) {
    return (function (j, y, _) {
      var z = j.attrs,
        I = j.componentStyle,
        Z = j.defaultProps,
        fe = j.foldedComponentIds,
        pe = j.styledComponentId,
        mt = j.target,
        ie = On.useContext(Th),
        _t = kd(),
        Je = j.shouldForwardProp || _t.shouldForwardProp,
        L = (function (we, qe, He) {
          for (
            var lt,
              It = Ye(Ye({}, qe), { className: void 0, theme: He }),
              Ne = 0;
            Ne < we.length;
            Ne += 1
          ) {
            var Nt = Nr((lt = we[Ne])) ? lt(It) : lt;
            for (var vt in Nt)
              It[vt] =
                vt === "className"
                  ? Tn(It[vt], Nt[vt])
                  : vt === "style"
                  ? Ye(Ye({}, It[vt]), Nt[vt])
                  : Nt[vt];
          }
          return (
            qe.className && (It.className = Tn(It.className, qe.className)), It
          );
        })(z, y, Ly(y, ie, Z) || _r),
        F = L.as || mt,
        A = {};
      for (var Q in L)
        L[Q] === void 0 ||
          Q[0] === "$" ||
          Q === "as" ||
          Q === "theme" ||
          (Q === "forwardedAs"
            ? (A.as = L.forwardedAs)
            : (Je && !Je(Q, F)) || (A[Q] = L[Q]));
      var q = (function (we, qe) {
          var He = kd(),
            lt = we.generateAndInjectStyles(qe, He.styleSheet, He.stylis);
          return lt;
        })(I, L),
        Me = Tn(fe, pe);
      return (
        q && (Me += " " + q),
        L.className && (Me += " " + L.className),
        (A[ma(F) && !yh.has(F) ? "class" : "className"] = Me),
        (A.ref = _),
        C.createElement(F, A)
      );
    })(v, f, P);
  }
  c.displayName = m;
  var v = On.forwardRef(c);
  return (
    (v.attrs = w),
    (v.componentStyle = h),
    (v.displayName = m),
    (v.shouldForwardProp = g),
    (v.foldedComponentIds = r
      ? Tn(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (v.styledComponentId = p),
    (v.target = r ? o.target : e),
    Object.defineProperty(v, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (f) {
        this._foldedDefaultProps = r
          ? (function (P) {
              for (var j = [], y = 1; y < arguments.length; y++)
                j[y - 1] = arguments[y];
              for (var _ = 0, z = j; _ < z.length; _++) Su(P, z[_], !0);
              return P;
            })({}, o.defaultProps, f)
          : f;
      },
    }),
    Rs(v, function () {
      return ".".concat(v.styledComponentId);
    }),
    l &&
      Eh(v, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    v
  );
}
function Cd(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Pd = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Lh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Nr(e) || Io(e)) {
    var r = e;
    return Pd(Mn(Cd(Li, ni([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string"
    ? Mn(o)
    : Pd(Mn(Cd(o, t)));
}
function ku(e, t, n) {
  if ((n === void 0 && (n = _r), !t)) throw Wo(1, t);
  var r = function (o) {
    for (var l = [], i = 1; i < arguments.length; i++) l[i - 1] = arguments[i];
    return e(t, n, Lh.apply(void 0, ni([o], l, !1)));
  };
  return (
    (r.attrs = function (o) {
      return ku(
        e,
        t,
        Ye(Ye({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return ku(e, t, Ye(Ye({}, n), o));
    }),
    r
  );
}
var Dh = function (e) {
    return ku(d1, e);
  },
  Ho = Dh;
yh.forEach(function (e) {
  Ho[e] = Dh(e);
});
const f1 = Ho.div`
  border: 1px solid grey;
  border-radius: 2px;
  width: -webkit-fill-available;
  height: 100%;
`,
  zh = Lh`
  margin: 0;
  padding: 10px 0;
  height: 200px;
  border-radius: 0;
  resize: none;
  outline: none;
  font-family: monospace;
  font-size: 16px;
  line-height: 1.2;
  &:focus-visible {
    outline: none;
  }
`,
  p1 = Ho.textarea`
  ${zh}
  margin-left:4%;
  width: calc(100% - 3.5rem);
  border: none;
  &::placeholder {
    color: grey;
  }
`,
  h1 = Ho.div`
  ${zh}
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  text-align: right;
  box-shadow: none;
  position: absolute;
  color: grey;
  border: none;
  background-color: lightgrey;
  padding: 10px;
  width: 4%;
`,
  m1 = Ho.div`
  color: ${(e) => (e.active ? "blue" : "inherit")};
`,
  v1 = ({
    value: e,
    numOfLines: t,
    onValueChange: n,
    placeholder: r = "Enter Message",
    name: o,
  }) => {
    const l = C.useMemo(
        () =>
          e.split(`
`).length,
        [e]
      ),
      i = C.useMemo(
        () => Array.from({ length: Math.max(t, l) }, (m, p) => p + 1),
        [l, t]
      ),
      a = C.useRef(null),
      u = C.useRef(null),
      s = (m) => {
        n(m.target.value);
      },
      d = () => {
        a.current && u.current && (a.current.scrollTop = u.current.scrollTop);
      };
    return k.jsxs(f1, {
      children: [
        k.jsx(h1, {
          ref: a,
          children: i.map((m) => k.jsx(m1, { active: m <= l, children: m }, m)),
        }),
        k.jsx(p1, {
          name: o,
          onChange: s,
          onScroll: d,
          placeholder: r,
          ref: u,
          value: e,
          wrap: "off",
        }),
      ],
    });
  };
function Mh({ items: e, onClick: t }) {
  const [n, r] = C.useState(e[0]);
  return k.jsx(k.Fragment, {
    children: e.map((o) =>
      k.jsx(
        "button",
        {
          className: o === n ? "selected" : "unSelected",
          onClick: () => {
            t(n, o), r(o);
          },
          children: o,
        },
        Ri()
      )
    ),
  });
}
function g1({ mode: e }) {
  const t = ["answer", "quiz", "hint", "note"],
    { cards: n, newCard: r } = Mr(),
    o = e === "add" ? [r()] : n,
    [l, i] = C.useState(o),
    [a, u] = C.useState(!1),
    s = () => u(!0),
    d = () => u(!1);
  return k.jsxs("div", {
    className: "cards-creator",
    children: [
      !a &&
        k.jsx(y1, { keys: t, pageCards: l, setPageCards: i, startPreview: s }),
      a && k.jsx(x1, { keys: t, pageCards: l, endPrevirew: d, mode: e }),
    ],
  });
}
function y1({ keys: e, pageCards: t, setPageCards: n, startPreview: r }) {
  const { newCard: o } = Mr(),
    [l, i] = C.useState("all"),
    [a, u] = C.useState(""),
    s = (y) => y.split(/\n|\.|\?|。|？|:/),
    d = (y) => y.map((_) => _.trim()),
    m = (y) => y.filter((_) => _.match(/^[^\n]+$/)),
    p = Y0(s, d, m),
    w = (y) => y.split(/\n/),
    g = (y) => {
      const _ = s(y),
        z = e.map((fe, pe) => [fe, _[pe] ?? ""]),
        I = Object.fromEntries(z);
      return { ...o(), ...I };
    },
    x = (y, _, z) => {
      const I = Math.max(y.length, _.length);
      return [...Array(I)].map((Z, fe) => ({
        ...(y[fe] ?? o()),
        [z]: _[fe] ?? "",
      }));
    },
    R = (y) => {
      if (l === "all") return;
      const _ = x(t, w(y), l);
      n(_);
    },
    h = (y, _) => {
      (t[_] = y), n([...t]);
    },
    c = () => n([...t, o()]),
    v = () => {
      R(a), r();
    },
    f = (y) => {
      const _ = y.target.files[0];
      if (!_) {
        alert("Fail to read file.");
        return;
      }
      l === "all"
        ? _.text()
            .then(w)
            .then(d)
            .then(m)
            .then((z) => z.map((I) => g(I)))
            .then((z) => n(z))
            .catch(console.error)
        : _.text()
            .then(p)
            .then((z) => x(t, z, l))
            .then((z) => n(z))
            .catch(console.error);
    },
    P = () => {
      l === "all"
        ? navigator.clipboard
            .readText()
            .then(w)
            .then(d)
            .then(m)
            .then((y) => y.map((_) => g(_)))
            .then((y) => n(y))
            .catch(console.error)
        : navigator.clipboard
            .readText()
            .then(p)
            .then((y) => x(t, y, l))
            .then((y) => n(y))
            .catch(console.error);
    },
    j = (y, _) => {
      y !== _ && (y !== "all" && R(a), i(_));
    };
  return (
    C.useEffect(() => {
      if (l !== "all")
        if (t.length === 0) u("");
        else {
          const y = t
            .map((_) => _[l] ?? "")
            .reduce(
              (_, z) => `${_}
${z}`
            );
          u(y);
        }
    }, [t, l]),
    k.jsxs("div", {
      className: "editor",
      children: [
        k.jsx("div", {
          className: "item-button-box",
          children: k.jsx(Mh, { items: ["all", ...e], onClick: j }),
        }),
        k.jsxs("div", {
          className: "input-box",
          children: [
            k.jsx("input", { type: "file", onChange: f }),
            k.jsx("button", { onClick: P, children: "read clipboard" }),
          ],
        }),
        k.jsxs("div", {
          className: "edit-area",
          children: [
            l !== "all" &&
              k.jsx(v1, { numOfLines: t.length, value: a, onValueChange: u }),
            l === "all" &&
              k.jsx(w1, { pageCards: t, items: e, updateCard: h, addCard: c }),
          ],
        }),
        k.jsx("div", {
          className: "edit-button-box",
          children: k.jsx("button", { onClick: v, children: "preview" }),
        }),
      ],
    })
  );
}
function w1({ pageCards: e, updateCard: t, addCard: n, items: r }) {
  return k.jsxs("div", {
    className: "all-editor",
    children: [
      k.jsx("ol", {
        children: e.map((o, l) =>
          k.jsx(S1, { card: o, index: l, items: r, updateCard: t }, l)
        ),
      }),
      k.jsx("button", { onClick: n, children: "add" }),
    ],
  });
}
function S1({ card: e, index: t, items: n, updateCard: r }) {
  const [o, l] = C.useState(e),
    [i, a] = C.useState(!1);
  return (
    C.useEffect(() => {
      l({ ...e });
    }, [e]),
    k.jsx("li", {
      children: k.jsxs(
        "form",
        {
          onSubmit: (u) => {
            u.preventDefault(), a(!1), r(o, t);
          },
          children: [
            k.jsx("div", {
              className: "form-input",
              children: n.map((u) =>
                k.jsxs(
                  "div",
                  {
                    children: [
                      k.jsxs("label", { htmlFor: u + t, children: [u, ":"] }),
                      k.jsx("input", {
                        type: "text",
                        name: u,
                        id: u + t,
                        "data-index": t,
                        value: o[u],
                        onChange: (s) => {
                          l({ ...o, [u]: s.target.value }), a(!0);
                        },
                      }),
                    ],
                  },
                  u
                )
              ),
            }),
            i && k.jsx("input", { type: "submit", name: "ok", value: "ok" }),
          ],
        },
        t
      ),
    })
  );
}
function x1({ keys: e, pageCards: t, endPrevirew: n, mode: r }) {
  const { addCards: o, replaceAllCards: l } = Mr(),
    [i, a] = C.useState("all"),
    u = () => {
      const d = t.filter((p) => p.quiz && p.quiz !== "");
      r === "add" ? o(t) : r === "edit" && l(d),
        alert(`${t.length} cards ${r}ed.`);
      const m = th();
      setTimeout(() => m(-1), 1e3);
    },
    s = (d, m) => {
      a(m);
    };
  return k.jsxs("div", {
    className: "previer",
    children: [
      k.jsx(Mh, { items: ["all", ...e], onClick: s }),
      t.length === 0 && k.jsx("p", { children: "no content" }),
      k.jsxs("ol", {
        className: "list",
        children: [
          i === "all" &&
            t.map((d) =>
              k.jsx(
                "li",
                {
                  children: e.map((m, p) =>
                    k.jsxs("p", { children: [m, ":", d[m] ?? ""] }, p)
                  ),
                },
                d.id
              )
            ),
          i !== "all" && t.map((d) => k.jsx("li", { children: d[i] }, d.id)),
        ],
      }),
      k.jsxs("div", {
        className: "edit-button-box",
        children: [
          k.jsx("button", { onClick: u, children: "submit" }),
          k.jsx("button", { onClick: n, children: "edit" }),
        ],
      }),
    ],
  });
}
function Rd({ mode: e }) {
  const { id: t } = nh();
  return k.jsx(xs, {
    children: k.jsx(dh, {
      bookId: t,
      children: k.jsxs("div", {
        className: "create-page",
        children: [
          k.jsxs("section", {
            className: "create-page-head",
            children: [
              k.jsx("h3", { children: "Cards" }),
              k.jsxs("h3", { children: [e, " "] }),
              k.jsx(mo, { to: `../list/${t}`, children: "back" }),
            ],
          }),
          k.jsx(g1, { mode: e }),
        ],
      }),
    }),
  });
}
const k1 = T0(
  mu(
    k.jsxs(Xn, {
      path: "flashcard4",
      children: [
        k.jsx(Xn, { index: !0, element: k.jsx(ey, {}) }),
        k.jsx(Xn, { path: "list/:id", element: k.jsx(sy, {}) }),
        k.jsx(Xn, { path: "add/:id", element: k.jsx(Rd, { mode: "add" }) }),
        k.jsx(Xn, { path: "edit/:id", element: k.jsx(Rd, { mode: "edit" }) }),
      ],
    })
  )
);
function E1() {
  return k.jsx(A0, { router: k1 });
}
const C1 = C.createContext(null),
  ga = { didCatch: !1, error: null };
class P1 extends C.Component {
  constructor(t) {
    super(t),
      (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
      (this.state = ga);
  }
  static getDerivedStateFromError(t) {
    return { didCatch: !0, error: t };
  }
  resetErrorBoundary() {
    const { error: t } = this.state;
    if (t !== null) {
      for (var n, r, o = arguments.length, l = new Array(o), i = 0; i < o; i++)
        l[i] = arguments[i];
      (n = (r = this.props).onReset) === null ||
        n === void 0 ||
        n.call(r, { args: l, reason: "imperative-api" }),
        this.setState(ga);
    }
  }
  componentDidCatch(t, n) {
    var r, o;
    (r = (o = this.props).onError) === null || r === void 0 || r.call(o, t, n);
  }
  componentDidUpdate(t, n) {
    const { didCatch: r } = this.state,
      { resetKeys: o } = this.props;
    if (r && n.error !== null && R1(t.resetKeys, o)) {
      var l, i;
      (l = (i = this.props).onReset) === null ||
        l === void 0 ||
        l.call(i, { next: o, prev: t.resetKeys, reason: "keys" }),
        this.setState(ga);
    }
  }
  render() {
    const {
        children: t,
        fallbackRender: n,
        FallbackComponent: r,
        fallback: o,
      } = this.props,
      { didCatch: l, error: i } = this.state;
    let a = t;
    if (l) {
      const u = { error: i, resetErrorBoundary: this.resetErrorBoundary };
      if (typeof n == "function") a = n(u);
      else if (r) a = C.createElement(r, u);
      else if (o === null || C.isValidElement(o)) a = o;
      else throw i;
    }
    return C.createElement(
      C1.Provider,
      {
        value: {
          didCatch: l,
          error: i,
          resetErrorBoundary: this.resetErrorBoundary,
        },
      },
      a
    );
  }
}
function R1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
function _1({ error: e }) {
  return k.jsxs("p", { children: ["something went wrong! ", e.message] });
}
ya.createRoot(document.getElementById("root")).render(
  k.jsx(On.StrictMode, {
    children: k.jsx(P1, { FallbackComponent: _1, children: k.jsx(E1, {}) }),
  })
);
