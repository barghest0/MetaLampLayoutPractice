/*! For license information please see slider.f15d130766fd7ced8178.js.LICENSE.txt */
!(function (e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define([], t)
		: 'object' == typeof exports
		? (exports.slider = t())
		: (e.slider = t());
})(self, function () {
	return (
		(e = {
			8563: function (e, t) {
				var n;
				!(function (t, n) {
					'use strict';
					'object' == typeof e.exports
						? (e.exports = t.document
								? n(t, !0)
								: function (e) {
										if (!e.document) throw new Error('jQuery requires a window with a document');
										return n(e);
								  })
						: n(t);
				})('undefined' != typeof window ? window : this, function (i, r) {
					'use strict';
					var s = [],
						o = Object.getPrototypeOf,
						a = s.slice,
						u = s.flat
							? function (e) {
									return s.flat.call(e);
							  }
							: function (e) {
									return s.concat.apply([], e);
							  },
						l = s.push,
						c = s.indexOf,
						f = {},
						d = f.toString,
						h = f.hasOwnProperty,
						p = h.toString,
						m = p.call(Object),
						v = {},
						g = function (e) {
							return (
								'function' == typeof e &&
								'number' != typeof e.nodeType &&
								'function' != typeof e.item
							);
						},
						y = function (e) {
							return null != e && e === e.window;
						},
						b = i.document,
						x = { type: !0, src: !0, nonce: !0, noModule: !0 };
					function T(e, t, n) {
						var i,
							r,
							s = (n = n || b).createElement('script');
						if (((s.text = e), t))
							for (i in x)
								(r = t[i] || (t.getAttribute && t.getAttribute(i))) && s.setAttribute(i, r);
						n.head.appendChild(s).parentNode.removeChild(s);
					}
					function w(e) {
						return null == e
							? e + ''
							: 'object' == typeof e || 'function' == typeof e
							? f[d.call(e)] || 'object'
							: typeof e;
					}
					var S = '3.6.0',
						C = function (e, t) {
							return new C.fn.init(e, t);
						};
					function _(e) {
						var t = !!e && 'length' in e && e.length,
							n = w(e);
						return (
							!g(e) &&
							!y(e) &&
							('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e))
						);
					}
					(C.fn = C.prototype =
						{
							jquery: S,
							constructor: C,
							length: 0,
							toArray: function () {
								return a.call(this);
							},
							get: function (e) {
								return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
							},
							pushStack: function (e) {
								var t = C.merge(this.constructor(), e);
								return (t.prevObject = this), t;
							},
							each: function (e) {
								return C.each(this, e);
							},
							map: function (e) {
								return this.pushStack(
									C.map(this, function (t, n) {
										return e.call(t, n, t);
									}),
								);
							},
							slice: function () {
								return this.pushStack(a.apply(this, arguments));
							},
							first: function () {
								return this.eq(0);
							},
							last: function () {
								return this.eq(-1);
							},
							even: function () {
								return this.pushStack(
									C.grep(this, function (e, t) {
										return (t + 1) % 2;
									}),
								);
							},
							odd: function () {
								return this.pushStack(
									C.grep(this, function (e, t) {
										return t % 2;
									}),
								);
							},
							eq: function (e) {
								var t = this.length,
									n = +e + (e < 0 ? t : 0);
								return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
							},
							end: function () {
								return this.prevObject || this.constructor();
							},
							push: l,
							sort: s.sort,
							splice: s.splice,
						}),
						(C.extend = C.fn.extend =
							function () {
								var e,
									t,
									n,
									i,
									r,
									s,
									o = arguments[0] || {},
									a = 1,
									u = arguments.length,
									l = !1;
								for (
									'boolean' == typeof o && ((l = o), (o = arguments[a] || {}), a++),
										'object' == typeof o || g(o) || (o = {}),
										a === u && ((o = this), a--);
									a < u;
									a++
								)
									if (null != (e = arguments[a]))
										for (t in e)
											(i = e[t]),
												'__proto__' !== t &&
													o !== i &&
													(l && i && (C.isPlainObject(i) || (r = Array.isArray(i)))
														? ((n = o[t]),
														  (s = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}),
														  (r = !1),
														  (o[t] = C.extend(l, s, i)))
														: void 0 !== i && (o[t] = i));
								return o;
							}),
						C.extend({
							expando: 'jQuery' + (S + Math.random()).replace(/\D/g, ''),
							isReady: !0,
							error: function (e) {
								throw new Error(e);
							},
							noop: function () {},
							isPlainObject: function (e) {
								var t, n;
								return !(
									!e ||
									'[object Object]' !== d.call(e) ||
									((t = o(e)) &&
										('function' != typeof (n = h.call(t, 'constructor') && t.constructor) ||
											p.call(n) !== m))
								);
							},
							isEmptyObject: function (e) {
								var t;
								for (t in e) return !1;
								return !0;
							},
							globalEval: function (e, t, n) {
								T(e, { nonce: t && t.nonce }, n);
							},
							each: function (e, t) {
								var n,
									i = 0;
								if (_(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
								else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
								return e;
							},
							makeArray: function (e, t) {
								var n = t || [];
								return (
									null != e &&
										(_(Object(e)) ? C.merge(n, 'string' == typeof e ? [e] : e) : l.call(n, e)),
									n
								);
							},
							inArray: function (e, t, n) {
								return null == t ? -1 : c.call(t, e, n);
							},
							merge: function (e, t) {
								for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
								return (e.length = r), e;
							},
							grep: function (e, t, n) {
								for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
									!t(e[r], r) !== o && i.push(e[r]);
								return i;
							},
							map: function (e, t, n) {
								var i,
									r,
									s = 0,
									o = [];
								if (_(e)) for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && o.push(r);
								else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
								return u(o);
							},
							guid: 1,
							support: v,
						}),
						'function' == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]),
						C.each(
							'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
							function (e, t) {
								f['[object ' + t + ']'] = t.toLowerCase();
							},
						);
					var E = (function (e) {
						var t,
							n,
							i,
							r,
							s,
							o,
							a,
							u,
							l,
							c,
							f,
							d,
							h,
							p,
							m,
							v,
							g,
							y,
							b,
							x = 'sizzle' + 1 * new Date(),
							T = e.document,
							w = 0,
							S = 0,
							C = ue(),
							_ = ue(),
							E = ue(),
							O = ue(),
							M = function (e, t) {
								return e === t && (f = !0), 0;
							},
							D = {}.hasOwnProperty,
							k = [],
							N = k.pop,
							A = k.push,
							F = k.push,
							j = k.slice,
							P = function (e, t) {
								for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
								return -1;
							},
							L =
								'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
							V = '[\\x20\\t\\r\\n\\f]',
							R =
								'(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
							H =
								'\\[[\\x20\\t\\r\\n\\f]*(' +
								R +
								')(?:' +
								V +
								'*([*^$|!~]?=)' +
								V +
								'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
								R +
								'))|)' +
								V +
								'*\\]',
							q =
								':(' +
								R +
								')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
								H +
								')*)|.*)\\)|)',
							I = new RegExp(V + '+', 'g'),
							B = new RegExp(
								'^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$',
								'g',
							),
							z = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'),
							$ = new RegExp(
								'^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*',
							),
							U = new RegExp(V + '|>'),
							W = new RegExp(q),
							X = new RegExp('^' + R + '$'),
							Y = {
								ID: new RegExp('^#(' + R + ')'),
								CLASS: new RegExp('^\\.(' + R + ')'),
								TAG: new RegExp('^(' + R + '|[*])'),
								ATTR: new RegExp('^' + H),
								PSEUDO: new RegExp('^' + q),
								CHILD: new RegExp(
									'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
									'i',
								),
								bool: new RegExp('^(?:' + L + ')$', 'i'),
								needsContext: new RegExp(
									'^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
									'i',
								),
							},
							G = /HTML$/i,
							Q = /^(?:input|select|textarea|button)$/i,
							J = /^h\d$/i,
							K = /^[^{]+\{\s*\[native \w/,
							Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
							ee = /[+~]/,
							te = new RegExp('\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])', 'g'),
							ne = function (e, t) {
								var n = '0x' + e.slice(1) - 65536;
								return (
									t ||
									(n < 0
										? String.fromCharCode(n + 65536)
										: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
								);
							},
							ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
							re = function (e, t) {
								return t
									? '\0' === e
										? '�'
										: e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
									: '\\' + e;
							},
							se = function () {
								d();
							},
							oe = xe(
								function (e) {
									return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
								},
								{ dir: 'parentNode', next: 'legend' },
							);
						try {
							F.apply((k = j.call(T.childNodes)), T.childNodes), k[T.childNodes.length].nodeType;
						} catch (e) {
							F = {
								apply: k.length
									? function (e, t) {
											A.apply(e, j.call(t));
									  }
									: function (e, t) {
											for (var n = e.length, i = 0; (e[n++] = t[i++]); );
											e.length = n - 1;
									  },
							};
						}
						function ae(e, t, i, r) {
							var s,
								a,
								l,
								c,
								f,
								p,
								g,
								y = t && t.ownerDocument,
								T = t ? t.nodeType : 9;
							if (((i = i || []), 'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T)))
								return i;
							if (!r && (d(t), (t = t || h), m)) {
								if (11 !== T && (f = Z.exec(e)))
									if ((s = f[1])) {
										if (9 === T) {
											if (!(l = t.getElementById(s))) return i;
											if (l.id === s) return i.push(l), i;
										} else if (y && (l = y.getElementById(s)) && b(t, l) && l.id === s)
											return i.push(l), i;
									} else {
										if (f[2]) return F.apply(i, t.getElementsByTagName(e)), i;
										if ((s = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
											return F.apply(i, t.getElementsByClassName(s)), i;
									}
								if (
									n.qsa &&
									!O[e + ' '] &&
									(!v || !v.test(e)) &&
									(1 !== T || 'object' !== t.nodeName.toLowerCase())
								) {
									if (((g = e), (y = t), 1 === T && (U.test(e) || $.test(e)))) {
										for (
											((y = (ee.test(e) && ge(t.parentNode)) || t) === t && n.scope) ||
												((c = t.getAttribute('id'))
													? (c = c.replace(ie, re))
													: t.setAttribute('id', (c = x))),
												a = (p = o(e)).length;
											a--;

										)
											p[a] = (c ? '#' + c : ':scope') + ' ' + be(p[a]);
										g = p.join(',');
									}
									try {
										return F.apply(i, y.querySelectorAll(g)), i;
									} catch (t) {
										O(e, !0);
									} finally {
										c === x && t.removeAttribute('id');
									}
								}
							}
							return u(e.replace(B, '$1'), t, i, r);
						}
						function ue() {
							var e = [];
							return function t(n, r) {
								return e.push(n + ' ') > i.cacheLength && delete t[e.shift()], (t[n + ' '] = r);
							};
						}
						function le(e) {
							return (e[x] = !0), e;
						}
						function ce(e) {
							var t = h.createElement('fieldset');
							try {
								return !!e(t);
							} catch (e) {
								return !1;
							} finally {
								t.parentNode && t.parentNode.removeChild(t), (t = null);
							}
						}
						function fe(e, t) {
							for (var n = e.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = t;
						}
						function de(e, t) {
							var n = t && e,
								i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
							if (i) return i;
							if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
							return e ? 1 : -1;
						}
						function he(e) {
							return function (t) {
								return 'input' === t.nodeName.toLowerCase() && t.type === e;
							};
						}
						function pe(e) {
							return function (t) {
								var n = t.nodeName.toLowerCase();
								return ('input' === n || 'button' === n) && t.type === e;
							};
						}
						function me(e) {
							return function (t) {
								return 'form' in t
									? t.parentNode && !1 === t.disabled
										? 'label' in t
											? 'label' in t.parentNode
												? t.parentNode.disabled === e
												: t.disabled === e
											: t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
										: t.disabled === e
									: 'label' in t && t.disabled === e;
							};
						}
						function ve(e) {
							return le(function (t) {
								return (
									(t = +t),
									le(function (n, i) {
										for (var r, s = e([], n.length, t), o = s.length; o--; )
											n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
									})
								);
							});
						}
						function ge(e) {
							return e && void 0 !== e.getElementsByTagName && e;
						}
						for (t in ((n = ae.support = {}),
						(s = ae.isXML =
							function (e) {
								var t = e && e.namespaceURI,
									n = e && (e.ownerDocument || e).documentElement;
								return !G.test(t || (n && n.nodeName) || 'HTML');
							}),
						(d = ae.setDocument =
							function (e) {
								var t,
									r,
									o = e ? e.ownerDocument || e : T;
								return o != h && 9 === o.nodeType && o.documentElement
									? ((p = (h = o).documentElement),
									  (m = !s(h)),
									  T != h &&
											(r = h.defaultView) &&
											r.top !== r &&
											(r.addEventListener
												? r.addEventListener('unload', se, !1)
												: r.attachEvent && r.attachEvent('onunload', se)),
									  (n.scope = ce(function (e) {
											return (
												p.appendChild(e).appendChild(h.createElement('div')),
												void 0 !== e.querySelectorAll &&
													!e.querySelectorAll(':scope fieldset div').length
											);
									  })),
									  (n.attributes = ce(function (e) {
											return (e.className = 'i'), !e.getAttribute('className');
									  })),
									  (n.getElementsByTagName = ce(function (e) {
											return (
												e.appendChild(h.createComment('')), !e.getElementsByTagName('*').length
											);
									  })),
									  (n.getElementsByClassName = K.test(h.getElementsByClassName)),
									  (n.getById = ce(function (e) {
											return (
												(p.appendChild(e).id = x),
												!h.getElementsByName || !h.getElementsByName(x).length
											);
									  })),
									  n.getById
											? ((i.filter.ID = function (e) {
													var t = e.replace(te, ne);
													return function (e) {
														return e.getAttribute('id') === t;
													};
											  }),
											  (i.find.ID = function (e, t) {
													if (void 0 !== t.getElementById && m) {
														var n = t.getElementById(e);
														return n ? [n] : [];
													}
											  }))
											: ((i.filter.ID = function (e) {
													var t = e.replace(te, ne);
													return function (e) {
														var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
														return n && n.value === t;
													};
											  }),
											  (i.find.ID = function (e, t) {
													if (void 0 !== t.getElementById && m) {
														var n,
															i,
															r,
															s = t.getElementById(e);
														if (s) {
															if ((n = s.getAttributeNode('id')) && n.value === e) return [s];
															for (r = t.getElementsByName(e), i = 0; (s = r[i++]); )
																if ((n = s.getAttributeNode('id')) && n.value === e) return [s];
														}
														return [];
													}
											  })),
									  (i.find.TAG = n.getElementsByTagName
											? function (e, t) {
													return void 0 !== t.getElementsByTagName
														? t.getElementsByTagName(e)
														: n.qsa
														? t.querySelectorAll(e)
														: void 0;
											  }
											: function (e, t) {
													var n,
														i = [],
														r = 0,
														s = t.getElementsByTagName(e);
													if ('*' === e) {
														for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
														return i;
													}
													return s;
											  }),
									  (i.find.CLASS =
											n.getElementsByClassName &&
											function (e, t) {
												if (void 0 !== t.getElementsByClassName && m)
													return t.getElementsByClassName(e);
											}),
									  (g = []),
									  (v = []),
									  (n.qsa = K.test(h.querySelectorAll)) &&
											(ce(function (e) {
												var t;
												(p.appendChild(e).innerHTML =
													"<a id='" +
													x +
													"'></a><select id='" +
													x +
													"-\r\\' msallowcapture=''><option selected=''></option></select>"),
													e.querySelectorAll("[msallowcapture^='']").length &&
														v.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
													e.querySelectorAll('[selected]').length ||
														v.push('\\[[\\x20\\t\\r\\n\\f]*(?:value|' + L + ')'),
													e.querySelectorAll('[id~=' + x + '-]').length || v.push('~='),
													(t = h.createElement('input')).setAttribute('name', ''),
													e.appendChild(t),
													e.querySelectorAll("[name='']").length ||
														v.push(
															'\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")',
														),
													e.querySelectorAll(':checked').length || v.push(':checked'),
													e.querySelectorAll('a#' + x + '+*').length || v.push('.#.+[+~]'),
													e.querySelectorAll('\\\f'),
													v.push('[\\r\\n\\f]');
											}),
											ce(function (e) {
												e.innerHTML =
													"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
												var t = h.createElement('input');
												t.setAttribute('type', 'hidden'),
													e.appendChild(t).setAttribute('name', 'D'),
													e.querySelectorAll('[name=d]').length &&
														v.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
													2 !== e.querySelectorAll(':enabled').length &&
														v.push(':enabled', ':disabled'),
													(p.appendChild(e).disabled = !0),
													2 !== e.querySelectorAll(':disabled').length &&
														v.push(':enabled', ':disabled'),
													e.querySelectorAll('*,:x'),
													v.push(',.*:');
											})),
									  (n.matchesSelector = K.test(
											(y =
												p.matches ||
												p.webkitMatchesSelector ||
												p.mozMatchesSelector ||
												p.oMatchesSelector ||
												p.msMatchesSelector),
									  )) &&
											ce(function (e) {
												(n.disconnectedMatch = y.call(e, '*')),
													y.call(e, "[s!='']:x"),
													g.push('!=', q);
											}),
									  (v = v.length && new RegExp(v.join('|'))),
									  (g = g.length && new RegExp(g.join('|'))),
									  (t = K.test(p.compareDocumentPosition)),
									  (b =
											t || K.test(p.contains)
												? function (e, t) {
														var n = 9 === e.nodeType ? e.documentElement : e,
															i = t && t.parentNode;
														return (
															e === i ||
															!(
																!i ||
																1 !== i.nodeType ||
																!(n.contains
																	? n.contains(i)
																	: e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
															)
														);
												  }
												: function (e, t) {
														if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
														return !1;
												  }),
									  (M = t
											? function (e, t) {
													if (e === t) return (f = !0), 0;
													var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
													return (
														i ||
														(1 &
															(i =
																(e.ownerDocument || e) == (t.ownerDocument || t)
																	? e.compareDocumentPosition(t)
																	: 1) ||
														(!n.sortDetached && t.compareDocumentPosition(e) === i)
															? e == h || (e.ownerDocument == T && b(T, e))
																? -1
																: t == h || (t.ownerDocument == T && b(T, t))
																? 1
																: c
																? P(c, e) - P(c, t)
																: 0
															: 4 & i
															? -1
															: 1)
													);
											  }
											: function (e, t) {
													if (e === t) return (f = !0), 0;
													var n,
														i = 0,
														r = e.parentNode,
														s = t.parentNode,
														o = [e],
														a = [t];
													if (!r || !s)
														return e == h
															? -1
															: t == h
															? 1
															: r
															? -1
															: s
															? 1
															: c
															? P(c, e) - P(c, t)
															: 0;
													if (r === s) return de(e, t);
													for (n = e; (n = n.parentNode); ) o.unshift(n);
													for (n = t; (n = n.parentNode); ) a.unshift(n);
													for (; o[i] === a[i]; ) i++;
													return i ? de(o[i], a[i]) : o[i] == T ? -1 : a[i] == T ? 1 : 0;
											  }),
									  h)
									: h;
							}),
						(ae.matches = function (e, t) {
							return ae(e, null, null, t);
						}),
						(ae.matchesSelector = function (e, t) {
							if (
								(d(e),
								n.matchesSelector && m && !O[t + ' '] && (!g || !g.test(t)) && (!v || !v.test(t)))
							)
								try {
									var i = y.call(e, t);
									if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType))
										return i;
								} catch (e) {
									O(t, !0);
								}
							return ae(t, h, null, [e]).length > 0;
						}),
						(ae.contains = function (e, t) {
							return (e.ownerDocument || e) != h && d(e), b(e, t);
						}),
						(ae.attr = function (e, t) {
							(e.ownerDocument || e) != h && d(e);
							var r = i.attrHandle[t.toLowerCase()],
								s = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
							return void 0 !== s
								? s
								: n.attributes || !m
								? e.getAttribute(t)
								: (s = e.getAttributeNode(t)) && s.specified
								? s.value
								: null;
						}),
						(ae.escape = function (e) {
							return (e + '').replace(ie, re);
						}),
						(ae.error = function (e) {
							throw new Error('Syntax error, unrecognized expression: ' + e);
						}),
						(ae.uniqueSort = function (e) {
							var t,
								i = [],
								r = 0,
								s = 0;
							if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(M), f)) {
								for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
								for (; r--; ) e.splice(i[r], 1);
							}
							return (c = null), e;
						}),
						(r = ae.getText =
							function (e) {
								var t,
									n = '',
									i = 0,
									s = e.nodeType;
								if (s) {
									if (1 === s || 9 === s || 11 === s) {
										if ('string' == typeof e.textContent) return e.textContent;
										for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
									} else if (3 === s || 4 === s) return e.nodeValue;
								} else for (; (t = e[i++]); ) n += r(t);
								return n;
							}),
						(i = ae.selectors =
							{
								cacheLength: 50,
								createPseudo: le,
								match: Y,
								attrHandle: {},
								find: {},
								relative: {
									'>': { dir: 'parentNode', first: !0 },
									' ': { dir: 'parentNode' },
									'+': { dir: 'previousSibling', first: !0 },
									'~': { dir: 'previousSibling' },
								},
								preFilter: {
									ATTR: function (e) {
										return (
											(e[1] = e[1].replace(te, ne)),
											(e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
											'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
											e.slice(0, 4)
										);
									},
									CHILD: function (e) {
										return (
											(e[1] = e[1].toLowerCase()),
											'nth' === e[1].slice(0, 3)
												? (e[3] || ae.error(e[0]),
												  (e[4] = +(e[4]
														? e[5] + (e[6] || 1)
														: 2 * ('even' === e[3] || 'odd' === e[3]))),
												  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
												: e[3] && ae.error(e[0]),
											e
										);
									},
									PSEUDO: function (e) {
										var t,
											n = !e[6] && e[2];
										return Y.CHILD.test(e[0])
											? null
											: (e[3]
													? (e[2] = e[4] || e[5] || '')
													: n &&
													  W.test(n) &&
													  (t = o(n, !0)) &&
													  (t = n.indexOf(')', n.length - t) - n.length) &&
													  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
											  e.slice(0, 3));
									},
								},
								filter: {
									TAG: function (e) {
										var t = e.replace(te, ne).toLowerCase();
										return '*' === e
											? function () {
													return !0;
											  }
											: function (e) {
													return e.nodeName && e.nodeName.toLowerCase() === t;
											  };
									},
									CLASS: function (e) {
										var t = C[e + ' '];
										return (
											t ||
											((t = new RegExp('(^|[\\x20\\t\\r\\n\\f])' + e + '(' + V + '|$)')) &&
												C(e, function (e) {
													return t.test(
														('string' == typeof e.className && e.className) ||
															(void 0 !== e.getAttribute && e.getAttribute('class')) ||
															'',
													);
												}))
										);
									},
									ATTR: function (e, t, n) {
										return function (i) {
											var r = ae.attr(i, e);
											return null == r
												? '!=' === t
												: !t ||
														((r += ''),
														'=' === t
															? r === n
															: '!=' === t
															? r !== n
															: '^=' === t
															? n && 0 === r.indexOf(n)
															: '*=' === t
															? n && r.indexOf(n) > -1
															: '$=' === t
															? n && r.slice(-n.length) === n
															: '~=' === t
															? (' ' + r.replace(I, ' ') + ' ').indexOf(n) > -1
															: '|=' === t && (r === n || r.slice(0, n.length + 1) === n + '-'));
										};
									},
									CHILD: function (e, t, n, i, r) {
										var s = 'nth' !== e.slice(0, 3),
											o = 'last' !== e.slice(-4),
											a = 'of-type' === t;
										return 1 === i && 0 === r
											? function (e) {
													return !!e.parentNode;
											  }
											: function (t, n, u) {
													var l,
														c,
														f,
														d,
														h,
														p,
														m = s !== o ? 'nextSibling' : 'previousSibling',
														v = t.parentNode,
														g = a && t.nodeName.toLowerCase(),
														y = !u && !a,
														b = !1;
													if (v) {
														if (s) {
															for (; m; ) {
																for (d = t; (d = d[m]); )
																	if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
																		return !1;
																p = m = 'only' === e && !p && 'nextSibling';
															}
															return !0;
														}
														if (((p = [o ? v.firstChild : v.lastChild]), o && y)) {
															for (
																b =
																	(h =
																		(l =
																			(c =
																				(f = (d = v)[x] || (d[x] = {}))[d.uniqueID] ||
																				(f[d.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2],
																	d = h && v.childNodes[h];
																(d = (++h && d && d[m]) || (b = h = 0) || p.pop());

															)
																if (1 === d.nodeType && ++b && d === t) {
																	c[e] = [w, h, b];
																	break;
																}
														} else if (
															(y &&
																(b = h =
																	(l =
																		(c =
																			(f = (d = t)[x] || (d[x] = {}))[d.uniqueID] ||
																			(f[d.uniqueID] = {}))[e] || [])[0] === w && l[1]),
															!1 === b)
														)
															for (
																;
																(d = (++h && d && d[m]) || (b = h = 0) || p.pop()) &&
																((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) ||
																	!++b ||
																	(y &&
																		((c =
																			(f = d[x] || (d[x] = {}))[d.uniqueID] ||
																			(f[d.uniqueID] = {}))[e] = [w, b]),
																	d !== t));

															);
														return (b -= r) === i || (b % i == 0 && b / i >= 0);
													}
											  };
									},
									PSEUDO: function (e, t) {
										var n,
											r =
												i.pseudos[e] ||
												i.setFilters[e.toLowerCase()] ||
												ae.error('unsupported pseudo: ' + e);
										return r[x]
											? r(t)
											: r.length > 1
											? ((n = [e, e, '', t]),
											  i.setFilters.hasOwnProperty(e.toLowerCase())
													? le(function (e, n) {
															for (var i, s = r(e, t), o = s.length; o--; )
																e[(i = P(e, s[o]))] = !(n[i] = s[o]);
													  })
													: function (e) {
															return r(e, 0, n);
													  })
											: r;
									},
								},
								pseudos: {
									not: le(function (e) {
										var t = [],
											n = [],
											i = a(e.replace(B, '$1'));
										return i[x]
											? le(function (e, t, n, r) {
													for (var s, o = i(e, null, r, []), a = e.length; a--; )
														(s = o[a]) && (e[a] = !(t[a] = s));
											  })
											: function (e, r, s) {
													return (t[0] = e), i(t, null, s, n), (t[0] = null), !n.pop();
											  };
									}),
									has: le(function (e) {
										return function (t) {
											return ae(e, t).length > 0;
										};
									}),
									contains: le(function (e) {
										return (
											(e = e.replace(te, ne)),
											function (t) {
												return (t.textContent || r(t)).indexOf(e) > -1;
											}
										);
									}),
									lang: le(function (e) {
										return (
											X.test(e || '') || ae.error('unsupported lang: ' + e),
											(e = e.replace(te, ne).toLowerCase()),
											function (t) {
												var n;
												do {
													if (
														(n = m ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
													)
														return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
												} while ((t = t.parentNode) && 1 === t.nodeType);
												return !1;
											}
										);
									}),
									target: function (t) {
										var n = e.location && e.location.hash;
										return n && n.slice(1) === t.id;
									},
									root: function (e) {
										return e === p;
									},
									focus: function (e) {
										return (
											e === h.activeElement &&
											(!h.hasFocus || h.hasFocus()) &&
											!!(e.type || e.href || ~e.tabIndex)
										);
									},
									enabled: me(!1),
									disabled: me(!0),
									checked: function (e) {
										var t = e.nodeName.toLowerCase();
										return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
									},
									selected: function (e) {
										return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
									},
									empty: function (e) {
										for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
										return !0;
									},
									parent: function (e) {
										return !i.pseudos.empty(e);
									},
									header: function (e) {
										return J.test(e.nodeName);
									},
									input: function (e) {
										return Q.test(e.nodeName);
									},
									button: function (e) {
										var t = e.nodeName.toLowerCase();
										return ('input' === t && 'button' === e.type) || 'button' === t;
									},
									text: function (e) {
										var t;
										return (
											'input' === e.nodeName.toLowerCase() &&
											'text' === e.type &&
											(null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
										);
									},
									first: ve(function () {
										return [0];
									}),
									last: ve(function (e, t) {
										return [t - 1];
									}),
									eq: ve(function (e, t, n) {
										return [n < 0 ? n + t : n];
									}),
									even: ve(function (e, t) {
										for (var n = 0; n < t; n += 2) e.push(n);
										return e;
									}),
									odd: ve(function (e, t) {
										for (var n = 1; n < t; n += 2) e.push(n);
										return e;
									}),
									lt: ve(function (e, t, n) {
										for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
										return e;
									}),
									gt: ve(function (e, t, n) {
										for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
										return e;
									}),
								},
							}),
						(i.pseudos.nth = i.pseudos.eq),
						{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
							i.pseudos[t] = he(t);
						for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
						function ye() {}
						function be(e) {
							for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
							return i;
						}
						function xe(e, t, n) {
							var i = t.dir,
								r = t.next,
								s = r || i,
								o = n && 'parentNode' === s,
								a = S++;
							return t.first
								? function (t, n, r) {
										for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
										return !1;
								  }
								: function (t, n, u) {
										var l,
											c,
											f,
											d = [w, a];
										if (u) {
											for (; (t = t[i]); ) if ((1 === t.nodeType || o) && e(t, n, u)) return !0;
										} else
											for (; (t = t[i]); )
												if (1 === t.nodeType || o)
													if (
														((c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
														r && r === t.nodeName.toLowerCase())
													)
														t = t[i] || t;
													else {
														if ((l = c[s]) && l[0] === w && l[1] === a) return (d[2] = l[2]);
														if (((c[s] = d), (d[2] = e(t, n, u)))) return !0;
													}
										return !1;
								  };
						}
						function Te(e) {
							return e.length > 1
								? function (t, n, i) {
										for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
										return !0;
								  }
								: e[0];
						}
						function we(e, t, n, i, r) {
							for (var s, o = [], a = 0, u = e.length, l = null != t; a < u; a++)
								(s = e[a]) && ((n && !n(s, i, r)) || (o.push(s), l && t.push(a)));
							return o;
						}
						function Se(e, t, n, i, r, s) {
							return (
								i && !i[x] && (i = Se(i)),
								r && !r[x] && (r = Se(r, s)),
								le(function (s, o, a, u) {
									var l,
										c,
										f,
										d = [],
										h = [],
										p = o.length,
										m =
											s ||
											(function (e, t, n) {
												for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
												return n;
											})(t || '*', a.nodeType ? [a] : a, []),
										v = !e || (!s && t) ? m : we(m, d, e, a, u),
										g = n ? (r || (s ? e : p || i) ? [] : o) : v;
									if ((n && n(v, g, a, u), i))
										for (l = we(g, h), i(l, [], a, u), c = l.length; c--; )
											(f = l[c]) && (g[h[c]] = !(v[h[c]] = f));
									if (s) {
										if (r || e) {
											if (r) {
												for (l = [], c = g.length; c--; ) (f = g[c]) && l.push((v[c] = f));
												r(null, (g = []), l, u);
											}
											for (c = g.length; c--; )
												(f = g[c]) && (l = r ? P(s, f) : d[c]) > -1 && (s[l] = !(o[l] = f));
										}
									} else (g = we(g === o ? g.splice(p, g.length) : g)), r ? r(null, o, g, u) : F.apply(o, g);
								})
							);
						}
						function Ce(e) {
							for (
								var t,
									n,
									r,
									s = e.length,
									o = i.relative[e[0].type],
									a = o || i.relative[' '],
									u = o ? 1 : 0,
									c = xe(
										function (e) {
											return e === t;
										},
										a,
										!0,
									),
									f = xe(
										function (e) {
											return P(t, e) > -1;
										},
										a,
										!0,
									),
									d = [
										function (e, n, i) {
											var r =
												(!o && (i || n !== l)) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
											return (t = null), r;
										},
									];
								u < s;
								u++
							)
								if ((n = i.relative[e[u].type])) d = [xe(Te(d), n)];
								else {
									if ((n = i.filter[e[u].type].apply(null, e[u].matches))[x]) {
										for (r = ++u; r < s && !i.relative[e[r].type]; r++);
										return Se(
											u > 1 && Te(d),
											u > 1 &&
												be(
													e.slice(0, u - 1).concat({ value: ' ' === e[u - 2].type ? '*' : '' }),
												).replace(B, '$1'),
											n,
											u < r && Ce(e.slice(u, r)),
											r < s && Ce((e = e.slice(r))),
											r < s && be(e),
										);
									}
									d.push(n);
								}
							return Te(d);
						}
						return (
							(ye.prototype = i.filters = i.pseudos),
							(i.setFilters = new ye()),
							(o = ae.tokenize =
								function (e, t) {
									var n,
										r,
										s,
										o,
										a,
										u,
										l,
										c = _[e + ' '];
									if (c) return t ? 0 : c.slice(0);
									for (a = e, u = [], l = i.preFilter; a; ) {
										for (o in ((n && !(r = z.exec(a))) ||
											(r && (a = a.slice(r[0].length) || a), u.push((s = []))),
										(n = !1),
										(r = $.exec(a)) &&
											((n = r.shift()),
											s.push({ value: n, type: r[0].replace(B, ' ') }),
											(a = a.slice(n.length))),
										i.filter))
											!(r = Y[o].exec(a)) ||
												(l[o] && !(r = l[o](r))) ||
												((n = r.shift()),
												s.push({ value: n, type: o, matches: r }),
												(a = a.slice(n.length)));
										if (!n) break;
									}
									return t ? a.length : a ? ae.error(e) : _(e, u).slice(0);
								}),
							(a = ae.compile =
								function (e, t) {
									var n,
										r = [],
										s = [],
										a = E[e + ' '];
									if (!a) {
										for (t || (t = o(e)), n = t.length; n--; )
											(a = Ce(t[n]))[x] ? r.push(a) : s.push(a);
										(a = E(
											e,
											(function (e, t) {
												var n = t.length > 0,
													r = e.length > 0,
													s = function (s, o, a, u, c) {
														var f,
															p,
															v,
															g = 0,
															y = '0',
															b = s && [],
															x = [],
															T = l,
															S = s || (r && i.find.TAG('*', c)),
															C = (w += null == T ? 1 : Math.random() || 0.1),
															_ = S.length;
														for (c && (l = o == h || o || c); y !== _ && null != (f = S[y]); y++) {
															if (r && f) {
																for (
																	p = 0, o || f.ownerDocument == h || (d(f), (a = !m));
																	(v = e[p++]);

																)
																	if (v(f, o || h, a)) {
																		u.push(f);
																		break;
																	}
																c && (w = C);
															}
															n && ((f = !v && f) && g--, s && b.push(f));
														}
														if (((g += y), n && y !== g)) {
															for (p = 0; (v = t[p++]); ) v(b, x, o, a);
															if (s) {
																if (g > 0) for (; y--; ) b[y] || x[y] || (x[y] = N.call(u));
																x = we(x);
															}
															F.apply(u, x),
																c && !s && x.length > 0 && g + t.length > 1 && ae.uniqueSort(u);
														}
														return c && ((w = C), (l = T)), b;
													};
												return n ? le(s) : s;
											})(s, r),
										)),
											(a.selector = e);
									}
									return a;
								}),
							(u = ae.select =
								function (e, t, n, r) {
									var s,
										u,
										l,
										c,
										f,
										d = 'function' == typeof e && e,
										h = !r && o((e = d.selector || e));
									if (((n = n || []), 1 === h.length)) {
										if (
											(u = h[0] = h[0].slice(0)).length > 2 &&
											'ID' === (l = u[0]).type &&
											9 === t.nodeType &&
											m &&
											i.relative[u[1].type]
										) {
											if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
											d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
										}
										for (
											s = Y.needsContext.test(e) ? 0 : u.length;
											s-- && ((l = u[s]), !i.relative[(c = l.type)]);

										)
											if (
												(f = i.find[c]) &&
												(r = f(
													l.matches[0].replace(te, ne),
													(ee.test(u[0].type) && ge(t.parentNode)) || t,
												))
											) {
												if ((u.splice(s, 1), !(e = r.length && be(u)))) return F.apply(n, r), n;
												break;
											}
									}
									return (
										(d || a(e, h))(r, t, !m, n, !t || (ee.test(e) && ge(t.parentNode)) || t), n
									);
								}),
							(n.sortStable = x.split('').sort(M).join('') === x),
							(n.detectDuplicates = !!f),
							d(),
							(n.sortDetached = ce(function (e) {
								return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
							})),
							ce(function (e) {
								return (
									(e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href')
								);
							}) ||
								fe('type|href|height|width', function (e, t, n) {
									if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
								}),
							(n.attributes &&
								ce(function (e) {
									return (
										(e.innerHTML = '<input/>'),
										e.firstChild.setAttribute('value', ''),
										'' === e.firstChild.getAttribute('value')
									);
								})) ||
								fe('value', function (e, t, n) {
									if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
								}),
							ce(function (e) {
								return null == e.getAttribute('disabled');
							}) ||
								fe(L, function (e, t, n) {
									var i;
									if (!n)
										return !0 === e[t]
											? t.toLowerCase()
											: (i = e.getAttributeNode(t)) && i.specified
											? i.value
											: null;
								}),
							ae
						);
					})(i);
					(C.find = E),
						(C.expr = E.selectors),
						(C.expr[':'] = C.expr.pseudos),
						(C.uniqueSort = C.unique = E.uniqueSort),
						(C.text = E.getText),
						(C.isXMLDoc = E.isXML),
						(C.contains = E.contains),
						(C.escapeSelector = E.escape);
					var O = function (e, t, n) {
							for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
								if (1 === e.nodeType) {
									if (r && C(e).is(n)) break;
									i.push(e);
								}
							return i;
						},
						M = function (e, t) {
							for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
							return n;
						},
						D = C.expr.match.needsContext;
					function k(e, t) {
						return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
					}
					var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
					function A(e, t, n) {
						return g(t)
							? C.grep(e, function (e, i) {
									return !!t.call(e, i, e) !== n;
							  })
							: t.nodeType
							? C.grep(e, function (e) {
									return (e === t) !== n;
							  })
							: 'string' != typeof t
							? C.grep(e, function (e) {
									return c.call(t, e) > -1 !== n;
							  })
							: C.filter(t, e, n);
					}
					(C.filter = function (e, t, n) {
						var i = t[0];
						return (
							n && (e = ':not(' + e + ')'),
							1 === t.length && 1 === i.nodeType
								? C.find.matchesSelector(i, e)
									? [i]
									: []
								: C.find.matches(
										e,
										C.grep(t, function (e) {
											return 1 === e.nodeType;
										}),
								  )
						);
					}),
						C.fn.extend({
							find: function (e) {
								var t,
									n,
									i = this.length,
									r = this;
								if ('string' != typeof e)
									return this.pushStack(
										C(e).filter(function () {
											for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0;
										}),
									);
								for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
								return i > 1 ? C.uniqueSort(n) : n;
							},
							filter: function (e) {
								return this.pushStack(A(this, e || [], !1));
							},
							not: function (e) {
								return this.pushStack(A(this, e || [], !0));
							},
							is: function (e) {
								return !!A(this, 'string' == typeof e && D.test(e) ? C(e) : e || [], !1).length;
							},
						});
					var F,
						j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
					((C.fn.init = function (e, t, n) {
						var i, r;
						if (!e) return this;
						if (((n = n || F), 'string' == typeof e)) {
							if (
								!(i =
									'<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
										? [null, e, null]
										: j.exec(e)) ||
								(!i[1] && t)
							)
								return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
							if (i[1]) {
								if (
									((t = t instanceof C ? t[0] : t),
									C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
									N.test(i[1]) && C.isPlainObject(t))
								)
									for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
								return this;
							}
							return (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
						}
						return e.nodeType
							? ((this[0] = e), (this.length = 1), this)
							: g(e)
							? void 0 !== n.ready
								? n.ready(e)
								: e(C)
							: C.makeArray(e, this);
					}).prototype = C.fn),
						(F = C(b));
					var P = /^(?:parents|prev(?:Until|All))/,
						L = { children: !0, contents: !0, next: !0, prev: !0 };
					function V(e, t) {
						for (; (e = e[t]) && 1 !== e.nodeType; );
						return e;
					}
					C.fn.extend({
						has: function (e) {
							var t = C(e, this),
								n = t.length;
							return this.filter(function () {
								for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
							});
						},
						closest: function (e, t) {
							var n,
								i = 0,
								r = this.length,
								s = [],
								o = 'string' != typeof e && C(e);
							if (!D.test(e))
								for (; i < r; i++)
									for (n = this[i]; n && n !== t; n = n.parentNode)
										if (
											n.nodeType < 11 &&
											(o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))
										) {
											s.push(n);
											break;
										}
							return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s);
						},
						index: function (e) {
							return e
								? 'string' == typeof e
									? c.call(C(e), this[0])
									: c.call(this, e.jquery ? e[0] : e)
								: this[0] && this[0].parentNode
								? this.first().prevAll().length
								: -1;
						},
						add: function (e, t) {
							return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
						},
						addBack: function (e) {
							return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
						},
					}),
						C.each(
							{
								parent: function (e) {
									var t = e.parentNode;
									return t && 11 !== t.nodeType ? t : null;
								},
								parents: function (e) {
									return O(e, 'parentNode');
								},
								parentsUntil: function (e, t, n) {
									return O(e, 'parentNode', n);
								},
								next: function (e) {
									return V(e, 'nextSibling');
								},
								prev: function (e) {
									return V(e, 'previousSibling');
								},
								nextAll: function (e) {
									return O(e, 'nextSibling');
								},
								prevAll: function (e) {
									return O(e, 'previousSibling');
								},
								nextUntil: function (e, t, n) {
									return O(e, 'nextSibling', n);
								},
								prevUntil: function (e, t, n) {
									return O(e, 'previousSibling', n);
								},
								siblings: function (e) {
									return M((e.parentNode || {}).firstChild, e);
								},
								children: function (e) {
									return M(e.firstChild);
								},
								contents: function (e) {
									return null != e.contentDocument && o(e.contentDocument)
										? e.contentDocument
										: (k(e, 'template') && (e = e.content || e), C.merge([], e.childNodes));
								},
							},
							function (e, t) {
								C.fn[e] = function (n, i) {
									var r = C.map(this, t, n);
									return (
										'Until' !== e.slice(-5) && (i = n),
										i && 'string' == typeof i && (r = C.filter(i, r)),
										this.length > 1 && (L[e] || C.uniqueSort(r), P.test(e) && r.reverse()),
										this.pushStack(r)
									);
								};
							},
						);
					var R = /[^\x20\t\r\n\f]+/g;
					function H(e) {
						return e;
					}
					function q(e) {
						throw e;
					}
					function I(e, t, n, i) {
						var r;
						try {
							e && g((r = e.promise))
								? r.call(e).done(t).fail(n)
								: e && g((r = e.then))
								? r.call(e, t, n)
								: t.apply(void 0, [e].slice(i));
						} catch (e) {
							n.apply(void 0, [e]);
						}
					}
					(C.Callbacks = function (e) {
						e =
							'string' == typeof e
								? (function (e) {
										var t = {};
										return (
											C.each(e.match(R) || [], function (e, n) {
												t[n] = !0;
											}),
											t
										);
								  })(e)
								: C.extend({}, e);
						var t,
							n,
							i,
							r,
							s = [],
							o = [],
							a = -1,
							u = function () {
								for (r = r || e.once, i = t = !0; o.length; a = -1)
									for (n = o.shift(); ++a < s.length; )
										!1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = s.length), (n = !1));
								e.memory || (n = !1), (t = !1), r && (s = n ? [] : '');
							},
							l = {
								add: function () {
									return (
										s &&
											(n && !t && ((a = s.length - 1), o.push(n)),
											(function t(n) {
												C.each(n, function (n, i) {
													g(i)
														? (e.unique && l.has(i)) || s.push(i)
														: i && i.length && 'string' !== w(i) && t(i);
												});
											})(arguments),
											n && !t && u()),
										this
									);
								},
								remove: function () {
									return (
										C.each(arguments, function (e, t) {
											for (var n; (n = C.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= a && a--;
										}),
										this
									);
								},
								has: function (e) {
									return e ? C.inArray(e, s) > -1 : s.length > 0;
								},
								empty: function () {
									return s && (s = []), this;
								},
								disable: function () {
									return (r = o = []), (s = n = ''), this;
								},
								disabled: function () {
									return !s;
								},
								lock: function () {
									return (r = o = []), n || t || (s = n = ''), this;
								},
								locked: function () {
									return !!r;
								},
								fireWith: function (e, n) {
									return (
										r || ((n = [e, (n = n || []).slice ? n.slice() : n]), o.push(n), t || u()), this
									);
								},
								fire: function () {
									return l.fireWith(this, arguments), this;
								},
								fired: function () {
									return !!i;
								},
							};
						return l;
					}),
						C.extend({
							Deferred: function (e) {
								var t = [
										['notify', 'progress', C.Callbacks('memory'), C.Callbacks('memory'), 2],
										[
											'resolve',
											'done',
											C.Callbacks('once memory'),
											C.Callbacks('once memory'),
											0,
											'resolved',
										],
										[
											'reject',
											'fail',
											C.Callbacks('once memory'),
											C.Callbacks('once memory'),
											1,
											'rejected',
										],
									],
									n = 'pending',
									r = {
										state: function () {
											return n;
										},
										always: function () {
											return s.done(arguments).fail(arguments), this;
										},
										catch: function (e) {
											return r.then(null, e);
										},
										pipe: function () {
											var e = arguments;
											return C.Deferred(function (n) {
												C.each(t, function (t, i) {
													var r = g(e[i[4]]) && e[i[4]];
													s[i[1]](function () {
														var e = r && r.apply(this, arguments);
														e && g(e.promise)
															? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
															: n[i[0] + 'With'](this, r ? [e] : arguments);
													});
												}),
													(e = null);
											}).promise();
										},
										then: function (e, n, r) {
											var s = 0;
											function o(e, t, n, r) {
												return function () {
													var a = this,
														u = arguments,
														l = function () {
															var i, l;
															if (!(e < s)) {
																if ((i = n.apply(a, u)) === t.promise())
																	throw new TypeError('Thenable self-resolution');
																(l =
																	i && ('object' == typeof i || 'function' == typeof i) && i.then),
																	g(l)
																		? r
																			? l.call(i, o(s, t, H, r), o(s, t, q, r))
																			: (s++,
																			  l.call(
																					i,
																					o(s, t, H, r),
																					o(s, t, q, r),
																					o(s, t, H, t.notifyWith),
																			  ))
																		: (n !== H && ((a = void 0), (u = [i])),
																		  (r || t.resolveWith)(a, u));
															}
														},
														c = r
															? l
															: function () {
																	try {
																		l();
																	} catch (i) {
																		C.Deferred.exceptionHook &&
																			C.Deferred.exceptionHook(i, c.stackTrace),
																			e + 1 >= s &&
																				(n !== q && ((a = void 0), (u = [i])), t.rejectWith(a, u));
																	}
															  };
													e
														? c()
														: (C.Deferred.getStackHook &&
																(c.stackTrace = C.Deferred.getStackHook()),
														  i.setTimeout(c));
												};
											}
											return C.Deferred(function (i) {
												t[0][3].add(o(0, i, g(r) ? r : H, i.notifyWith)),
													t[1][3].add(o(0, i, g(e) ? e : H)),
													t[2][3].add(o(0, i, g(n) ? n : q));
											}).promise();
										},
										promise: function (e) {
											return null != e ? C.extend(e, r) : r;
										},
									},
									s = {};
								return (
									C.each(t, function (e, i) {
										var o = i[2],
											a = i[5];
										(r[i[1]] = o.add),
											a &&
												o.add(
													function () {
														n = a;
													},
													t[3 - e][2].disable,
													t[3 - e][3].disable,
													t[0][2].lock,
													t[0][3].lock,
												),
											o.add(i[3].fire),
											(s[i[0]] = function () {
												return s[i[0] + 'With'](this === s ? void 0 : this, arguments), this;
											}),
											(s[i[0] + 'With'] = o.fireWith);
									}),
									r.promise(s),
									e && e.call(s, s),
									s
								);
							},
							when: function (e) {
								var t = arguments.length,
									n = t,
									i = Array(n),
									r = a.call(arguments),
									s = C.Deferred(),
									o = function (e) {
										return function (n) {
											(i[e] = this),
												(r[e] = arguments.length > 1 ? a.call(arguments) : n),
												--t || s.resolveWith(i, r);
										};
									};
								if (
									t <= 1 &&
									(I(e, s.done(o(n)).resolve, s.reject, !t),
									'pending' === s.state() || g(r[n] && r[n].then))
								)
									return s.then();
								for (; n--; ) I(r[n], o(n), s.reject);
								return s.promise();
							},
						});
					var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
					(C.Deferred.exceptionHook = function (e, t) {
						i.console &&
							i.console.warn &&
							e &&
							B.test(e.name) &&
							i.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
					}),
						(C.readyException = function (e) {
							i.setTimeout(function () {
								throw e;
							});
						});
					var z = C.Deferred();
					function $() {
						b.removeEventListener('DOMContentLoaded', $),
							i.removeEventListener('load', $),
							C.ready();
					}
					(C.fn.ready = function (e) {
						return (
							z.then(e).catch(function (e) {
								C.readyException(e);
							}),
							this
						);
					}),
						C.extend({
							isReady: !1,
							readyWait: 1,
							ready: function (e) {
								(!0 === e ? --C.readyWait : C.isReady) ||
									((C.isReady = !0), (!0 !== e && --C.readyWait > 0) || z.resolveWith(b, [C]));
							},
						}),
						(C.ready.then = z.then),
						'complete' === b.readyState ||
						('loading' !== b.readyState && !b.documentElement.doScroll)
							? i.setTimeout(C.ready)
							: (b.addEventListener('DOMContentLoaded', $), i.addEventListener('load', $));
					var U = function (e, t, n, i, r, s, o) {
							var a = 0,
								u = e.length,
								l = null == n;
							if ('object' === w(n)) for (a in ((r = !0), n)) U(e, t, a, n[a], !0, s, o);
							else if (
								void 0 !== i &&
								((r = !0),
								g(i) || (o = !0),
								l &&
									(o
										? (t.call(e, i), (t = null))
										: ((l = t),
										  (t = function (e, t, n) {
												return l.call(C(e), n);
										  }))),
								t)
							)
								for (; a < u; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
							return r ? e : l ? t.call(e) : u ? t(e[0], n) : s;
						},
						W = /^-ms-/,
						X = /-([a-z])/g;
					function Y(e, t) {
						return t.toUpperCase();
					}
					function G(e) {
						return e.replace(W, 'ms-').replace(X, Y);
					}
					var Q = function (e) {
						return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
					};
					function J() {
						this.expando = C.expando + J.uid++;
					}
					(J.uid = 1),
						(J.prototype = {
							cache: function (e) {
								var t = e[this.expando];
								return (
									t ||
										((t = {}),
										Q(e) &&
											(e.nodeType
												? (e[this.expando] = t)
												: Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
									t
								);
							},
							set: function (e, t, n) {
								var i,
									r = this.cache(e);
								if ('string' == typeof t) r[G(t)] = n;
								else for (i in t) r[G(i)] = t[i];
								return r;
							},
							get: function (e, t) {
								return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
							},
							access: function (e, t, n) {
								return void 0 === t || (t && 'string' == typeof t && void 0 === n)
									? this.get(e, t)
									: (this.set(e, t, n), void 0 !== n ? n : t);
							},
							remove: function (e, t) {
								var n,
									i = e[this.expando];
								if (void 0 !== i) {
									if (void 0 !== t) {
										n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(R) || [])
											.length;
										for (; n--; ) delete i[t[n]];
									}
									(void 0 === t || C.isEmptyObject(i)) &&
										(e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
								}
							},
							hasData: function (e) {
								var t = e[this.expando];
								return void 0 !== t && !C.isEmptyObject(t);
							},
						});
					var K = new J(),
						Z = new J(),
						ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
						te = /[A-Z]/g;
					function ne(e, t, n) {
						var i;
						if (void 0 === n && 1 === e.nodeType)
							if (
								((i = 'data-' + t.replace(te, '-$&').toLowerCase()),
								'string' == typeof (n = e.getAttribute(i)))
							) {
								try {
									n = (function (e) {
										return (
											'true' === e ||
											('false' !== e &&
												('null' === e ? null : e === +e + '' ? +e : ee.test(e) ? JSON.parse(e) : e))
										);
									})(n);
								} catch (e) {}
								Z.set(e, t, n);
							} else n = void 0;
						return n;
					}
					C.extend({
						hasData: function (e) {
							return Z.hasData(e) || K.hasData(e);
						},
						data: function (e, t, n) {
							return Z.access(e, t, n);
						},
						removeData: function (e, t) {
							Z.remove(e, t);
						},
						_data: function (e, t, n) {
							return K.access(e, t, n);
						},
						_removeData: function (e, t) {
							K.remove(e, t);
						},
					}),
						C.fn.extend({
							data: function (e, t) {
								var n,
									i,
									r,
									s = this[0],
									o = s && s.attributes;
								if (void 0 === e) {
									if (
										this.length &&
										((r = Z.get(s)), 1 === s.nodeType && !K.get(s, 'hasDataAttrs'))
									) {
										for (n = o.length; n--; )
											o[n] &&
												0 === (i = o[n].name).indexOf('data-') &&
												((i = G(i.slice(5))), ne(s, i, r[i]));
										K.set(s, 'hasDataAttrs', !0);
									}
									return r;
								}
								return 'object' == typeof e
									? this.each(function () {
											Z.set(this, e);
									  })
									: U(
											this,
											function (t) {
												var n;
												if (s && void 0 === t)
													return void 0 !== (n = Z.get(s, e)) || void 0 !== (n = ne(s, e))
														? n
														: void 0;
												this.each(function () {
													Z.set(this, e, t);
												});
											},
											null,
											t,
											arguments.length > 1,
											null,
											!0,
									  );
							},
							removeData: function (e) {
								return this.each(function () {
									Z.remove(this, e);
								});
							},
						}),
						C.extend({
							queue: function (e, t, n) {
								var i;
								if (e)
									return (
										(t = (t || 'fx') + 'queue'),
										(i = K.get(e, t)),
										n &&
											(!i || Array.isArray(n) ? (i = K.access(e, t, C.makeArray(n))) : i.push(n)),
										i || []
									);
							},
							dequeue: function (e, t) {
								t = t || 'fx';
								var n = C.queue(e, t),
									i = n.length,
									r = n.shift(),
									s = C._queueHooks(e, t);
								'inprogress' === r && ((r = n.shift()), i--),
									r &&
										('fx' === t && n.unshift('inprogress'),
										delete s.stop,
										r.call(
											e,
											function () {
												C.dequeue(e, t);
											},
											s,
										)),
									!i && s && s.empty.fire();
							},
							_queueHooks: function (e, t) {
								var n = t + 'queueHooks';
								return (
									K.get(e, n) ||
									K.access(e, n, {
										empty: C.Callbacks('once memory').add(function () {
											K.remove(e, [t + 'queue', n]);
										}),
									})
								);
							},
						}),
						C.fn.extend({
							queue: function (e, t) {
								var n = 2;
								return (
									'string' != typeof e && ((t = e), (e = 'fx'), n--),
									arguments.length < n
										? C.queue(this[0], e)
										: void 0 === t
										? this
										: this.each(function () {
												var n = C.queue(this, e, t);
												C._queueHooks(this, e),
													'fx' === e && 'inprogress' !== n[0] && C.dequeue(this, e);
										  })
								);
							},
							dequeue: function (e) {
								return this.each(function () {
									C.dequeue(this, e);
								});
							},
							clearQueue: function (e) {
								return this.queue(e || 'fx', []);
							},
							promise: function (e, t) {
								var n,
									i = 1,
									r = C.Deferred(),
									s = this,
									o = this.length,
									a = function () {
										--i || r.resolveWith(s, [s]);
									};
								for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; o--; )
									(n = K.get(s[o], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
								return a(), r.promise(t);
							},
						});
					var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
						re = new RegExp('^(?:([+-])=|)(' + ie + ')([a-z%]*)$', 'i'),
						se = ['Top', 'Right', 'Bottom', 'Left'],
						oe = b.documentElement,
						ae = function (e) {
							return C.contains(e.ownerDocument, e);
						},
						ue = { composed: !0 };
					oe.getRootNode &&
						(ae = function (e) {
							return C.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
						});
					var le = function (e, t) {
						return (
							'none' === (e = t || e).style.display ||
							('' === e.style.display && ae(e) && 'none' === C.css(e, 'display'))
						);
					};
					function ce(e, t, n, i) {
						var r,
							s,
							o = 20,
							a = i
								? function () {
										return i.cur();
								  }
								: function () {
										return C.css(e, t, '');
								  },
							u = a(),
							l = (n && n[3]) || (C.cssNumber[t] ? '' : 'px'),
							c = e.nodeType && (C.cssNumber[t] || ('px' !== l && +u)) && re.exec(C.css(e, t));
						if (c && c[3] !== l) {
							for (u /= 2, l = l || c[3], c = +u || 1; o--; )
								C.style(e, t, c + l),
									(1 - s) * (1 - (s = a() / u || 0.5)) <= 0 && (o = 0),
									(c /= s);
							(c *= 2), C.style(e, t, c + l), (n = n || []);
						}
						return (
							n &&
								((c = +c || +u || 0),
								(r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
								i && ((i.unit = l), (i.start = c), (i.end = r))),
							r
						);
					}
					var fe = {};
					function de(e) {
						var t,
							n = e.ownerDocument,
							i = e.nodeName,
							r = fe[i];
						return (
							r ||
							((t = n.body.appendChild(n.createElement(i))),
							(r = C.css(t, 'display')),
							t.parentNode.removeChild(t),
							'none' === r && (r = 'block'),
							(fe[i] = r),
							r)
						);
					}
					function he(e, t) {
						for (var n, i, r = [], s = 0, o = e.length; s < o; s++)
							(i = e[s]).style &&
								((n = i.style.display),
								t
									? ('none' === n &&
											((r[s] = K.get(i, 'display') || null), r[s] || (i.style.display = '')),
									  '' === i.style.display && le(i) && (r[s] = de(i)))
									: 'none' !== n && ((r[s] = 'none'), K.set(i, 'display', n)));
						for (s = 0; s < o; s++) null != r[s] && (e[s].style.display = r[s]);
						return e;
					}
					C.fn.extend({
						show: function () {
							return he(this, !0);
						},
						hide: function () {
							return he(this);
						},
						toggle: function (e) {
							return 'boolean' == typeof e
								? e
									? this.show()
									: this.hide()
								: this.each(function () {
										le(this) ? C(this).show() : C(this).hide();
								  });
						},
					});
					var pe,
						me,
						ve = /^(?:checkbox|radio)$/i,
						ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
						ye = /^$|^module$|\/(?:java|ecma)script/i;
					(pe = b.createDocumentFragment().appendChild(b.createElement('div'))),
						(me = b.createElement('input')).setAttribute('type', 'radio'),
						me.setAttribute('checked', 'checked'),
						me.setAttribute('name', 't'),
						pe.appendChild(me),
						(v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
						(pe.innerHTML = '<textarea>x</textarea>'),
						(v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
						(pe.innerHTML = '<option></option>'),
						(v.option = !!pe.lastChild);
					var be = {
						thead: [1, '<table>', '</table>'],
						col: [2, '<table><colgroup>', '</colgroup></table>'],
						tr: [2, '<table><tbody>', '</tbody></table>'],
						td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
						_default: [0, '', ''],
					};
					function xe(e, t) {
						var n;
						return (
							(n =
								void 0 !== e.getElementsByTagName
									? e.getElementsByTagName(t || '*')
									: void 0 !== e.querySelectorAll
									? e.querySelectorAll(t || '*')
									: []),
							void 0 === t || (t && k(e, t)) ? C.merge([e], n) : n
						);
					}
					function Te(e, t) {
						for (var n = 0, i = e.length; n < i; n++)
							K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
					}
					(be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
						(be.th = be.td),
						v.option ||
							(be.optgroup = be.option = [1, "<select multiple='multiple'>", '</select>']);
					var we = /<|&#?\w+;/;
					function Se(e, t, n, i, r) {
						for (
							var s, o, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length;
							h < p;
							h++
						)
							if ((s = e[h]) || 0 === s)
								if ('object' === w(s)) C.merge(d, s.nodeType ? [s] : s);
								else if (we.test(s)) {
									for (
										o = o || f.appendChild(t.createElement('div')),
											a = (ge.exec(s) || ['', ''])[1].toLowerCase(),
											u = be[a] || be._default,
											o.innerHTML = u[1] + C.htmlPrefilter(s) + u[2],
											c = u[0];
										c--;

									)
										o = o.lastChild;
									C.merge(d, o.childNodes), ((o = f.firstChild).textContent = '');
								} else d.push(t.createTextNode(s));
						for (f.textContent = '', h = 0; (s = d[h++]); )
							if (i && C.inArray(s, i) > -1) r && r.push(s);
							else if (((l = ae(s)), (o = xe(f.appendChild(s), 'script')), l && Te(o), n))
								for (c = 0; (s = o[c++]); ) ye.test(s.type || '') && n.push(s);
						return f;
					}
					var Ce = /^([^.]*)(?:\.(.+)|)/;
					function _e() {
						return !0;
					}
					function Ee() {
						return !1;
					}
					function Oe(e, t) {
						return (
							(e ===
								(function () {
									try {
										return b.activeElement;
									} catch (e) {}
								})()) ==
							('focus' === t)
						);
					}
					function Me(e, t, n, i, r, s) {
						var o, a;
						if ('object' == typeof t) {
							for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
								Me(e, a, n, i, t[a], s);
							return e;
						}
						if (
							(null == i && null == r
								? ((r = n), (i = n = void 0))
								: null == r &&
								  ('string' == typeof n
										? ((r = i), (i = void 0))
										: ((r = i), (i = n), (n = void 0))),
							!1 === r)
						)
							r = Ee;
						else if (!r) return e;
						return (
							1 === s &&
								((o = r),
								(r = function (e) {
									return C().off(e), o.apply(this, arguments);
								}),
								(r.guid = o.guid || (o.guid = C.guid++))),
							e.each(function () {
								C.event.add(this, t, r, i, n);
							})
						);
					}
					function De(e, t, n) {
						n
							? (K.set(e, t, !1),
							  C.event.add(e, t, {
									namespace: !1,
									handler: function (e) {
										var i,
											r,
											s = K.get(this, t);
										if (1 & e.isTrigger && this[t]) {
											if (s.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();
											else if (
												((s = a.call(arguments)),
												K.set(this, t, s),
												(i = n(this, t)),
												this[t](),
												s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : (r = {}),
												s !== r)
											)
												return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
										} else
											s.length &&
												(K.set(this, t, {
													value: C.event.trigger(
														C.extend(s[0], C.Event.prototype),
														s.slice(1),
														this,
													),
												}),
												e.stopImmediatePropagation());
									},
							  }))
							: void 0 === K.get(e, t) && C.event.add(e, t, _e);
					}
					(C.event = {
						global: {},
						add: function (e, t, n, i, r) {
							var s,
								o,
								a,
								u,
								l,
								c,
								f,
								d,
								h,
								p,
								m,
								v = K.get(e);
							if (Q(e))
								for (
									n.handler && ((n = (s = n).handler), (r = s.selector)),
										r && C.find.matchesSelector(oe, r),
										n.guid || (n.guid = C.guid++),
										(u = v.events) || (u = v.events = Object.create(null)),
										(o = v.handle) ||
											(o = v.handle =
												function (t) {
													return void 0 !== C && C.event.triggered !== t.type
														? C.event.dispatch.apply(e, arguments)
														: void 0;
												}),
										l = (t = (t || '').match(R) || ['']).length;
									l--;

								)
									(h = m = (a = Ce.exec(t[l]) || [])[1]),
										(p = (a[2] || '').split('.').sort()),
										h &&
											((f = C.event.special[h] || {}),
											(h = (r ? f.delegateType : f.bindType) || h),
											(f = C.event.special[h] || {}),
											(c = C.extend(
												{
													type: h,
													origType: m,
													data: i,
													handler: n,
													guid: n.guid,
													selector: r,
													needsContext: r && C.expr.match.needsContext.test(r),
													namespace: p.join('.'),
												},
												s,
											)),
											(d = u[h]) ||
												(((d = u[h] = []).delegateCount = 0),
												(f.setup && !1 !== f.setup.call(e, i, p, o)) ||
													(e.addEventListener && e.addEventListener(h, o))),
											f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
											r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
											(C.event.global[h] = !0));
						},
						remove: function (e, t, n, i, r) {
							var s,
								o,
								a,
								u,
								l,
								c,
								f,
								d,
								h,
								p,
								m,
								v = K.hasData(e) && K.get(e);
							if (v && (u = v.events)) {
								for (l = (t = (t || '').match(R) || ['']).length; l--; )
									if (
										((h = m = (a = Ce.exec(t[l]) || [])[1]),
										(p = (a[2] || '').split('.').sort()),
										h)
									) {
										for (
											f = C.event.special[h] || {},
												d = u[(h = (i ? f.delegateType : f.bindType) || h)] || [],
												a = a[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
												o = s = d.length;
											s--;

										)
											(c = d[s]),
												(!r && m !== c.origType) ||
													(n && n.guid !== c.guid) ||
													(a && !a.test(c.namespace)) ||
													(i && i !== c.selector && ('**' !== i || !c.selector)) ||
													(d.splice(s, 1),
													c.selector && d.delegateCount--,
													f.remove && f.remove.call(e, c));
										o &&
											!d.length &&
											((f.teardown && !1 !== f.teardown.call(e, p, v.handle)) ||
												C.removeEvent(e, h, v.handle),
											delete u[h]);
									} else for (h in u) C.event.remove(e, h + t[l], n, i, !0);
								C.isEmptyObject(u) && K.remove(e, 'handle events');
							}
						},
						dispatch: function (e) {
							var t,
								n,
								i,
								r,
								s,
								o,
								a = new Array(arguments.length),
								u = C.event.fix(e),
								l = (K.get(this, 'events') || Object.create(null))[u.type] || [],
								c = C.event.special[u.type] || {};
							for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
							if (
								((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))
							) {
								for (
									o = C.event.handlers.call(this, u, l), t = 0;
									(r = o[t++]) && !u.isPropagationStopped();

								)
									for (
										u.currentTarget = r.elem, n = 0;
										(s = r.handlers[n++]) && !u.isImmediatePropagationStopped();

									)
										(u.rnamespace && !1 !== s.namespace && !u.rnamespace.test(s.namespace)) ||
											((u.handleObj = s),
											(u.data = s.data),
											void 0 !==
												(i = ((C.event.special[s.origType] || {}).handle || s.handler).apply(
													r.elem,
													a,
												)) &&
												!1 === (u.result = i) &&
												(u.preventDefault(), u.stopPropagation()));
								return c.postDispatch && c.postDispatch.call(this, u), u.result;
							}
						},
						handlers: function (e, t) {
							var n,
								i,
								r,
								s,
								o,
								a = [],
								u = t.delegateCount,
								l = e.target;
							if (u && l.nodeType && !('click' === e.type && e.button >= 1))
								for (; l !== this; l = l.parentNode || this)
									if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
										for (s = [], o = {}, n = 0; n < u; n++)
											void 0 === o[(r = (i = t[n]).selector + ' ')] &&
												(o[r] = i.needsContext
													? C(r, this).index(l) > -1
													: C.find(r, this, null, [l]).length),
												o[r] && s.push(i);
										s.length && a.push({ elem: l, handlers: s });
									}
							return (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
						},
						addProp: function (e, t) {
							Object.defineProperty(C.Event.prototype, e, {
								enumerable: !0,
								configurable: !0,
								get: g(t)
									? function () {
											if (this.originalEvent) return t(this.originalEvent);
									  }
									: function () {
											if (this.originalEvent) return this.originalEvent[e];
									  },
								set: function (t) {
									Object.defineProperty(this, e, {
										enumerable: !0,
										configurable: !0,
										writable: !0,
										value: t,
									});
								},
							});
						},
						fix: function (e) {
							return e[C.expando] ? e : new C.Event(e);
						},
						special: {
							load: { noBubble: !0 },
							click: {
								setup: function (e) {
									var t = this || e;
									return ve.test(t.type) && t.click && k(t, 'input') && De(t, 'click', _e), !1;
								},
								trigger: function (e) {
									var t = this || e;
									return ve.test(t.type) && t.click && k(t, 'input') && De(t, 'click'), !0;
								},
								_default: function (e) {
									var t = e.target;
									return (
										(ve.test(t.type) && t.click && k(t, 'input') && K.get(t, 'click')) || k(t, 'a')
									);
								},
							},
							beforeunload: {
								postDispatch: function (e) {
									void 0 !== e.result &&
										e.originalEvent &&
										(e.originalEvent.returnValue = e.result);
								},
							},
						},
					}),
						(C.removeEvent = function (e, t, n) {
							e.removeEventListener && e.removeEventListener(t, n);
						}),
						(C.Event = function (e, t) {
							if (!(this instanceof C.Event)) return new C.Event(e, t);
							e && e.type
								? ((this.originalEvent = e),
								  (this.type = e.type),
								  (this.isDefaultPrevented =
										e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
											? _e
											: Ee),
								  (this.target =
										e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
								  (this.currentTarget = e.currentTarget),
								  (this.relatedTarget = e.relatedTarget))
								: (this.type = e),
								t && C.extend(this, t),
								(this.timeStamp = (e && e.timeStamp) || Date.now()),
								(this[C.expando] = !0);
						}),
						(C.Event.prototype = {
							constructor: C.Event,
							isDefaultPrevented: Ee,
							isPropagationStopped: Ee,
							isImmediatePropagationStopped: Ee,
							isSimulated: !1,
							preventDefault: function () {
								var e = this.originalEvent;
								(this.isDefaultPrevented = _e), e && !this.isSimulated && e.preventDefault();
							},
							stopPropagation: function () {
								var e = this.originalEvent;
								(this.isPropagationStopped = _e), e && !this.isSimulated && e.stopPropagation();
							},
							stopImmediatePropagation: function () {
								var e = this.originalEvent;
								(this.isImmediatePropagationStopped = _e),
									e && !this.isSimulated && e.stopImmediatePropagation(),
									this.stopPropagation();
							},
						}),
						C.each(
							{
								altKey: !0,
								bubbles: !0,
								cancelable: !0,
								changedTouches: !0,
								ctrlKey: !0,
								detail: !0,
								eventPhase: !0,
								metaKey: !0,
								pageX: !0,
								pageY: !0,
								shiftKey: !0,
								view: !0,
								char: !0,
								code: !0,
								charCode: !0,
								key: !0,
								keyCode: !0,
								button: !0,
								buttons: !0,
								clientX: !0,
								clientY: !0,
								offsetX: !0,
								offsetY: !0,
								pointerId: !0,
								pointerType: !0,
								screenX: !0,
								screenY: !0,
								targetTouches: !0,
								toElement: !0,
								touches: !0,
								which: !0,
							},
							C.event.addProp,
						),
						C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
							C.event.special[e] = {
								setup: function () {
									return De(this, e, Oe), !1;
								},
								trigger: function () {
									return De(this, e), !0;
								},
								_default: function () {
									return !0;
								},
								delegateType: t,
							};
						}),
						C.each(
							{
								mouseenter: 'mouseover',
								mouseleave: 'mouseout',
								pointerenter: 'pointerover',
								pointerleave: 'pointerout',
							},
							function (e, t) {
								C.event.special[e] = {
									delegateType: t,
									bindType: t,
									handle: function (e) {
										var n,
											i = this,
											r = e.relatedTarget,
											s = e.handleObj;
										return (
											(r && (r === i || C.contains(i, r))) ||
												((e.type = s.origType),
												(n = s.handler.apply(this, arguments)),
												(e.type = t)),
											n
										);
									},
								};
							},
						),
						C.fn.extend({
							on: function (e, t, n, i) {
								return Me(this, e, t, n, i);
							},
							one: function (e, t, n, i) {
								return Me(this, e, t, n, i, 1);
							},
							off: function (e, t, n) {
								var i, r;
								if (e && e.preventDefault && e.handleObj)
									return (
										(i = e.handleObj),
										C(e.delegateTarget).off(
											i.namespace ? i.origType + '.' + i.namespace : i.origType,
											i.selector,
											i.handler,
										),
										this
									);
								if ('object' == typeof e) {
									for (r in e) this.off(r, t, e[r]);
									return this;
								}
								return (
									(!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
									!1 === n && (n = Ee),
									this.each(function () {
										C.event.remove(this, e, n, t);
									})
								);
							},
						});
					var ke = /<script|<style|<link/i,
						Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
						Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
					function Fe(e, t) {
						return (
							(k(e, 'table') &&
								k(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
								C(e).children('tbody')[0]) ||
							e
						);
					}
					function je(e) {
						return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
					}
					function Pe(e) {
						return (
							'true/' === (e.type || '').slice(0, 5)
								? (e.type = e.type.slice(5))
								: e.removeAttribute('type'),
							e
						);
					}
					function Le(e, t) {
						var n, i, r, s, o, a;
						if (1 === t.nodeType) {
							if (K.hasData(e) && (a = K.get(e).events))
								for (r in (K.remove(t, 'handle events'), a))
									for (n = 0, i = a[r].length; n < i; n++) C.event.add(t, r, a[r][n]);
							Z.hasData(e) && ((s = Z.access(e)), (o = C.extend({}, s)), Z.set(t, o));
						}
					}
					function Ve(e, t) {
						var n = t.nodeName.toLowerCase();
						'input' === n && ve.test(e.type)
							? (t.checked = e.checked)
							: ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
					}
					function Re(e, t, n, i) {
						t = u(t);
						var r,
							s,
							o,
							a,
							l,
							c,
							f = 0,
							d = e.length,
							h = d - 1,
							p = t[0],
							m = g(p);
						if (m || (d > 1 && 'string' == typeof p && !v.checkClone && Ne.test(p)))
							return e.each(function (r) {
								var s = e.eq(r);
								m && (t[0] = p.call(this, r, s.html())), Re(s, t, n, i);
							});
						if (
							d &&
							((s = (r = Se(t, e[0].ownerDocument, !1, e, i)).firstChild),
							1 === r.childNodes.length && (r = s),
							s || i)
						) {
							for (a = (o = C.map(xe(r, 'script'), je)).length; f < d; f++)
								(l = r),
									f !== h && ((l = C.clone(l, !0, !0)), a && C.merge(o, xe(l, 'script'))),
									n.call(e[f], l, f);
							if (a)
								for (c = o[o.length - 1].ownerDocument, C.map(o, Pe), f = 0; f < a; f++)
									(l = o[f]),
										ye.test(l.type || '') &&
											!K.access(l, 'globalEval') &&
											C.contains(c, l) &&
											(l.src && 'module' !== (l.type || '').toLowerCase()
												? C._evalUrl &&
												  !l.noModule &&
												  C._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') }, c)
												: T(l.textContent.replace(Ae, ''), l, c));
						}
						return e;
					}
					function He(e, t, n) {
						for (var i, r = t ? C.filter(t, e) : e, s = 0; null != (i = r[s]); s++)
							n || 1 !== i.nodeType || C.cleanData(xe(i)),
								i.parentNode && (n && ae(i) && Te(xe(i, 'script')), i.parentNode.removeChild(i));
						return e;
					}
					C.extend({
						htmlPrefilter: function (e) {
							return e;
						},
						clone: function (e, t, n) {
							var i,
								r,
								s,
								o,
								a = e.cloneNode(!0),
								u = ae(e);
							if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
								for (o = xe(a), i = 0, r = (s = xe(e)).length; i < r; i++) Ve(s[i], o[i]);
							if (t)
								if (n)
									for (s = s || xe(e), o = o || xe(a), i = 0, r = s.length; i < r; i++)
										Le(s[i], o[i]);
								else Le(e, a);
							return (o = xe(a, 'script')).length > 0 && Te(o, !u && xe(e, 'script')), a;
						},
						cleanData: function (e) {
							for (var t, n, i, r = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
								if (Q(n)) {
									if ((t = n[K.expando])) {
										if (t.events)
											for (i in t.events)
												r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
										n[K.expando] = void 0;
									}
									n[Z.expando] && (n[Z.expando] = void 0);
								}
						},
					}),
						C.fn.extend({
							detach: function (e) {
								return He(this, e, !0);
							},
							remove: function (e) {
								return He(this, e);
							},
							text: function (e) {
								return U(
									this,
									function (e) {
										return void 0 === e
											? C.text(this)
											: this.empty().each(function () {
													(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
														(this.textContent = e);
											  });
									},
									null,
									e,
									arguments.length,
								);
							},
							append: function () {
								return Re(this, arguments, function (e) {
									(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
										Fe(this, e).appendChild(e);
								});
							},
							prepend: function () {
								return Re(this, arguments, function (e) {
									if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
										var t = Fe(this, e);
										t.insertBefore(e, t.firstChild);
									}
								});
							},
							before: function () {
								return Re(this, arguments, function (e) {
									this.parentNode && this.parentNode.insertBefore(e, this);
								});
							},
							after: function () {
								return Re(this, arguments, function (e) {
									this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
								});
							},
							empty: function () {
								for (var e, t = 0; null != (e = this[t]); t++)
									1 === e.nodeType && (C.cleanData(xe(e, !1)), (e.textContent = ''));
								return this;
							},
							clone: function (e, t) {
								return (
									(e = null != e && e),
									(t = null == t ? e : t),
									this.map(function () {
										return C.clone(this, e, t);
									})
								);
							},
							html: function (e) {
								return U(
									this,
									function (e) {
										var t = this[0] || {},
											n = 0,
											i = this.length;
										if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
										if (
											'string' == typeof e &&
											!ke.test(e) &&
											!be[(ge.exec(e) || ['', ''])[1].toLowerCase()]
										) {
											e = C.htmlPrefilter(e);
											try {
												for (; n < i; n++)
													1 === (t = this[n] || {}).nodeType &&
														(C.cleanData(xe(t, !1)), (t.innerHTML = e));
												t = 0;
											} catch (e) {}
										}
										t && this.empty().append(e);
									},
									null,
									e,
									arguments.length,
								);
							},
							replaceWith: function () {
								var e = [];
								return Re(
									this,
									arguments,
									function (t) {
										var n = this.parentNode;
										C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this));
									},
									e,
								);
							},
						}),
						C.each(
							{
								appendTo: 'append',
								prependTo: 'prepend',
								insertBefore: 'before',
								insertAfter: 'after',
								replaceAll: 'replaceWith',
							},
							function (e, t) {
								C.fn[e] = function (e) {
									for (var n, i = [], r = C(e), s = r.length - 1, o = 0; o <= s; o++)
										(n = o === s ? this : this.clone(!0)), C(r[o])[t](n), l.apply(i, n.get());
									return this.pushStack(i);
								};
							},
						);
					var qe = new RegExp('^(' + ie + ')(?!px)[a-z%]+$', 'i'),
						Ie = function (e) {
							var t = e.ownerDocument.defaultView;
							return (t && t.opener) || (t = i), t.getComputedStyle(e);
						},
						Be = function (e, t, n) {
							var i,
								r,
								s = {};
							for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
							for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
							return i;
						},
						ze = new RegExp(se.join('|'), 'i');
					function $e(e, t, n) {
						var i,
							r,
							s,
							o,
							a = e.style;
						return (
							(n = n || Ie(e)) &&
								('' !== (o = n.getPropertyValue(t) || n[t]) || ae(e) || (o = C.style(e, t)),
								!v.pixelBoxStyles() &&
									qe.test(o) &&
									ze.test(t) &&
									((i = a.width),
									(r = a.minWidth),
									(s = a.maxWidth),
									(a.minWidth = a.maxWidth = a.width = o),
									(o = n.width),
									(a.width = i),
									(a.minWidth = r),
									(a.maxWidth = s))),
							void 0 !== o ? o + '' : o
						);
					}
					function Ue(e, t) {
						return {
							get: function () {
								if (!e()) return (this.get = t).apply(this, arguments);
								delete this.get;
							},
						};
					}
					!(function () {
						function e() {
							if (c) {
								(l.style.cssText =
									'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
									(c.style.cssText =
										'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
									oe.appendChild(l).appendChild(c);
								var e = i.getComputedStyle(c);
								(n = '1%' !== e.top),
									(u = 12 === t(e.marginLeft)),
									(c.style.right = '60%'),
									(o = 36 === t(e.right)),
									(r = 36 === t(e.width)),
									(c.style.position = 'absolute'),
									(s = 12 === t(c.offsetWidth / 3)),
									oe.removeChild(l),
									(c = null);
							}
						}
						function t(e) {
							return Math.round(parseFloat(e));
						}
						var n,
							r,
							s,
							o,
							a,
							u,
							l = b.createElement('div'),
							c = b.createElement('div');
						c.style &&
							((c.style.backgroundClip = 'content-box'),
							(c.cloneNode(!0).style.backgroundClip = ''),
							(v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
							C.extend(v, {
								boxSizingReliable: function () {
									return e(), r;
								},
								pixelBoxStyles: function () {
									return e(), o;
								},
								pixelPosition: function () {
									return e(), n;
								},
								reliableMarginLeft: function () {
									return e(), u;
								},
								scrollboxSize: function () {
									return e(), s;
								},
								reliableTrDimensions: function () {
									var e, t, n, r;
									return (
										null == a &&
											((e = b.createElement('table')),
											(t = b.createElement('tr')),
											(n = b.createElement('div')),
											(e.style.cssText =
												'position:absolute;left:-11111px;border-collapse:separate'),
											(t.style.cssText = 'border:1px solid'),
											(t.style.height = '1px'),
											(n.style.height = '9px'),
											(n.style.display = 'block'),
											oe.appendChild(e).appendChild(t).appendChild(n),
											(r = i.getComputedStyle(t)),
											(a =
												parseInt(r.height, 10) +
													parseInt(r.borderTopWidth, 10) +
													parseInt(r.borderBottomWidth, 10) ===
												t.offsetHeight),
											oe.removeChild(e)),
										a
									);
								},
							}));
					})();
					var We = ['Webkit', 'Moz', 'ms'],
						Xe = b.createElement('div').style,
						Ye = {};
					function Ge(e) {
						return (
							C.cssProps[e] ||
							Ye[e] ||
							(e in Xe
								? e
								: (Ye[e] =
										(function (e) {
											for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--; )
												if ((e = We[n] + t) in Xe) return e;
										})(e) || e))
						);
					}
					var Qe = /^(none|table(?!-c[ea]).+)/,
						Je = /^--/,
						Ke = { position: 'absolute', visibility: 'hidden', display: 'block' },
						Ze = { letterSpacing: '0', fontWeight: '400' };
					function et(e, t, n) {
						var i = re.exec(t);
						return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
					}
					function tt(e, t, n, i, r, s) {
						var o = 'width' === t ? 1 : 0,
							a = 0,
							u = 0;
						if (n === (i ? 'border' : 'content')) return 0;
						for (; o < 4; o += 2)
							'margin' === n && (u += C.css(e, n + se[o], !0, r)),
								i
									? ('content' === n && (u -= C.css(e, 'padding' + se[o], !0, r)),
									  'margin' !== n && (u -= C.css(e, 'border' + se[o] + 'Width', !0, r)))
									: ((u += C.css(e, 'padding' + se[o], !0, r)),
									  'padding' !== n
											? (u += C.css(e, 'border' + se[o] + 'Width', !0, r))
											: (a += C.css(e, 'border' + se[o] + 'Width', !0, r)));
						return (
							!i &&
								s >= 0 &&
								(u +=
									Math.max(
										0,
										Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - s - u - a - 0.5),
									) || 0),
							u
						);
					}
					function nt(e, t, n) {
						var i = Ie(e),
							r = (!v.boxSizingReliable() || n) && 'border-box' === C.css(e, 'boxSizing', !1, i),
							s = r,
							o = $e(e, t, i),
							a = 'offset' + t[0].toUpperCase() + t.slice(1);
						if (qe.test(o)) {
							if (!n) return o;
							o = 'auto';
						}
						return (
							((!v.boxSizingReliable() && r) ||
								(!v.reliableTrDimensions() && k(e, 'tr')) ||
								'auto' === o ||
								(!parseFloat(o) && 'inline' === C.css(e, 'display', !1, i))) &&
								e.getClientRects().length &&
								((r = 'border-box' === C.css(e, 'boxSizing', !1, i)), (s = a in e) && (o = e[a])),
							(o = parseFloat(o) || 0) + tt(e, t, n || (r ? 'border' : 'content'), s, i, o) + 'px'
						);
					}
					function it(e, t, n, i, r) {
						return new it.prototype.init(e, t, n, i, r);
					}
					C.extend({
						cssHooks: {
							opacity: {
								get: function (e, t) {
									if (t) {
										var n = $e(e, 'opacity');
										return '' === n ? '1' : n;
									}
								},
							},
						},
						cssNumber: {
							animationIterationCount: !0,
							columnCount: !0,
							fillOpacity: !0,
							flexGrow: !0,
							flexShrink: !0,
							fontWeight: !0,
							gridArea: !0,
							gridColumn: !0,
							gridColumnEnd: !0,
							gridColumnStart: !0,
							gridRow: !0,
							gridRowEnd: !0,
							gridRowStart: !0,
							lineHeight: !0,
							opacity: !0,
							order: !0,
							orphans: !0,
							widows: !0,
							zIndex: !0,
							zoom: !0,
						},
						cssProps: {},
						style: function (e, t, n, i) {
							if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
								var r,
									s,
									o,
									a = G(t),
									u = Je.test(t),
									l = e.style;
								if ((u || (t = Ge(a)), (o = C.cssHooks[t] || C.cssHooks[a]), void 0 === n))
									return o && 'get' in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
								'string' == (s = typeof n) &&
									(r = re.exec(n)) &&
									r[1] &&
									((n = ce(e, t, r)), (s = 'number')),
									null != n &&
										n == n &&
										('number' !== s || u || (n += (r && r[3]) || (C.cssNumber[a] ? '' : 'px')),
										v.clearCloneStyle ||
											'' !== n ||
											0 !== t.indexOf('background') ||
											(l[t] = 'inherit'),
										(o && 'set' in o && void 0 === (n = o.set(e, n, i))) ||
											(u ? l.setProperty(t, n) : (l[t] = n)));
							}
						},
						css: function (e, t, n, i) {
							var r,
								s,
								o,
								a = G(t);
							return (
								Je.test(t) || (t = Ge(a)),
								(o = C.cssHooks[t] || C.cssHooks[a]) && 'get' in o && (r = o.get(e, !0, n)),
								void 0 === r && (r = $e(e, t, i)),
								'normal' === r && t in Ze && (r = Ze[t]),
								'' === n || n ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r) : r
							);
						},
					}),
						C.each(['height', 'width'], function (e, t) {
							C.cssHooks[t] = {
								get: function (e, n, i) {
									if (n)
										return !Qe.test(C.css(e, 'display')) ||
											(e.getClientRects().length && e.getBoundingClientRect().width)
											? nt(e, t, i)
											: Be(e, Ke, function () {
													return nt(e, t, i);
											  });
								},
								set: function (e, n, i) {
									var r,
										s = Ie(e),
										o = !v.scrollboxSize() && 'absolute' === s.position,
										a = (o || i) && 'border-box' === C.css(e, 'boxSizing', !1, s),
										u = i ? tt(e, t, i, a, s) : 0;
									return (
										a &&
											o &&
											(u -= Math.ceil(
												e['offset' + t[0].toUpperCase() + t.slice(1)] -
													parseFloat(s[t]) -
													tt(e, t, 'border', !1, s) -
													0.5,
											)),
										u &&
											(r = re.exec(n)) &&
											'px' !== (r[3] || 'px') &&
											((e.style[t] = n), (n = C.css(e, t))),
										et(0, n, u)
									);
								},
							};
						}),
						(C.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
							if (t)
								return (
									(parseFloat($e(e, 'marginLeft')) ||
										e.getBoundingClientRect().left -
											Be(e, { marginLeft: 0 }, function () {
												return e.getBoundingClientRect().left;
											})) + 'px'
								);
						})),
						C.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
							(C.cssHooks[e + t] = {
								expand: function (n) {
									for (var i = 0, r = {}, s = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
										r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
									return r;
								},
							}),
								'margin' !== e && (C.cssHooks[e + t].set = et);
						}),
						C.fn.extend({
							css: function (e, t) {
								return U(
									this,
									function (e, t, n) {
										var i,
											r,
											s = {},
											o = 0;
										if (Array.isArray(t)) {
											for (i = Ie(e), r = t.length; o < r; o++) s[t[o]] = C.css(e, t[o], !1, i);
											return s;
										}
										return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
									},
									e,
									t,
									arguments.length > 1,
								);
							},
						}),
						(C.Tween = it),
						(it.prototype = {
							constructor: it,
							init: function (e, t, n, i, r, s) {
								(this.elem = e),
									(this.prop = n),
									(this.easing = r || C.easing._default),
									(this.options = t),
									(this.start = this.now = this.cur()),
									(this.end = i),
									(this.unit = s || (C.cssNumber[n] ? '' : 'px'));
							},
							cur: function () {
								var e = it.propHooks[this.prop];
								return e && e.get ? e.get(this) : it.propHooks._default.get(this);
							},
							run: function (e) {
								var t,
									n = it.propHooks[this.prop];
								return (
									this.options.duration
										? (this.pos = t =
												C.easing[this.easing](
													e,
													this.options.duration * e,
													0,
													1,
													this.options.duration,
												))
										: (this.pos = t = e),
									(this.now = (this.end - this.start) * t + this.start),
									this.options.step && this.options.step.call(this.elem, this.now, this),
									n && n.set ? n.set(this) : it.propHooks._default.set(this),
									this
								);
							},
						}),
						(it.prototype.init.prototype = it.prototype),
						(it.propHooks = {
							_default: {
								get: function (e) {
									var t;
									return 1 !== e.elem.nodeType ||
										(null != e.elem[e.prop] && null == e.elem.style[e.prop])
										? e.elem[e.prop]
										: (t = C.css(e.elem, e.prop, '')) && 'auto' !== t
										? t
										: 0;
								},
								set: function (e) {
									C.fx.step[e.prop]
										? C.fx.step[e.prop](e)
										: 1 !== e.elem.nodeType ||
										  (!C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
										? (e.elem[e.prop] = e.now)
										: C.style(e.elem, e.prop, e.now + e.unit);
								},
							},
						}),
						(it.propHooks.scrollTop = it.propHooks.scrollLeft =
							{
								set: function (e) {
									e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
								},
							}),
						(C.easing = {
							linear: function (e) {
								return e;
							},
							swing: function (e) {
								return 0.5 - Math.cos(e * Math.PI) / 2;
							},
							_default: 'swing',
						}),
						(C.fx = it.prototype.init),
						(C.fx.step = {});
					var rt,
						st,
						ot = /^(?:toggle|show|hide)$/,
						at = /queueHooks$/;
					function ut() {
						st &&
							(!1 === b.hidden && i.requestAnimationFrame
								? i.requestAnimationFrame(ut)
								: i.setTimeout(ut, C.fx.interval),
							C.fx.tick());
					}
					function lt() {
						return (
							i.setTimeout(function () {
								rt = void 0;
							}),
							(rt = Date.now())
						);
					}
					function ct(e, t) {
						var n,
							i = 0,
							r = { height: e };
						for (t = t ? 1 : 0; i < 4; i += 2 - t) r['margin' + (n = se[i])] = r['padding' + n] = e;
						return t && (r.opacity = r.width = e), r;
					}
					function ft(e, t, n) {
						for (
							var i, r = (dt.tweeners[t] || []).concat(dt.tweeners['*']), s = 0, o = r.length;
							s < o;
							s++
						)
							if ((i = r[s].call(n, t, e))) return i;
					}
					function dt(e, t, n) {
						var i,
							r,
							s = 0,
							o = dt.prefilters.length,
							a = C.Deferred().always(function () {
								delete u.elem;
							}),
							u = function () {
								if (r) return !1;
								for (
									var t = rt || lt(),
										n = Math.max(0, l.startTime + l.duration - t),
										i = 1 - (n / l.duration || 0),
										s = 0,
										o = l.tweens.length;
									s < o;
									s++
								)
									l.tweens[s].run(i);
								return (
									a.notifyWith(e, [l, i, n]),
									i < 1 && o ? n : (o || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
								);
							},
							l = a.promise({
								elem: e,
								props: C.extend({}, t),
								opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n),
								originalProperties: t,
								originalOptions: n,
								startTime: rt || lt(),
								duration: n.duration,
								tweens: [],
								createTween: function (t, n) {
									var i = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
									return l.tweens.push(i), i;
								},
								stop: function (t) {
									var n = 0,
										i = t ? l.tweens.length : 0;
									if (r) return this;
									for (r = !0; n < i; n++) l.tweens[n].run(1);
									return (
										t
											? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
											: a.rejectWith(e, [l, t]),
										this
									);
								},
							}),
							c = l.props;
						for (
							(function (e, t) {
								var n, i, r, s, o;
								for (n in e)
									if (
										((r = t[(i = G(n))]),
										(s = e[n]),
										Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
										n !== i && ((e[i] = s), delete e[n]),
										(o = C.cssHooks[i]) && ('expand' in o))
									)
										for (n in ((s = o.expand(s)), delete e[i], s))
											(n in e) || ((e[n] = s[n]), (t[n] = r));
									else t[i] = r;
							})(c, l.opts.specialEasing);
							s < o;
							s++
						)
							if ((i = dt.prefilters[s].call(l, e, c, l.opts)))
								return g(i.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
						return (
							C.map(c, ft, l),
							g(l.opts.start) && l.opts.start.call(e, l),
							l
								.progress(l.opts.progress)
								.done(l.opts.done, l.opts.complete)
								.fail(l.opts.fail)
								.always(l.opts.always),
							C.fx.timer(C.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
							l
						);
					}
					(C.Animation = C.extend(dt, {
						tweeners: {
							'*': [
								function (e, t) {
									var n = this.createTween(e, t);
									return ce(n.elem, e, re.exec(t), n), n;
								},
							],
						},
						tweener: function (e, t) {
							g(e) ? ((t = e), (e = ['*'])) : (e = e.match(R));
							for (var n, i = 0, r = e.length; i < r; i++)
								(n = e[i]), (dt.tweeners[n] = dt.tweeners[n] || []), dt.tweeners[n].unshift(t);
						},
						prefilters: [
							function (e, t, n) {
								var i,
									r,
									s,
									o,
									a,
									u,
									l,
									c,
									f = 'width' in t || 'height' in t,
									d = this,
									h = {},
									p = e.style,
									m = e.nodeType && le(e),
									v = K.get(e, 'fxshow');
								for (i in (n.queue ||
									(null == (o = C._queueHooks(e, 'fx')).unqueued &&
										((o.unqueued = 0),
										(a = o.empty.fire),
										(o.empty.fire = function () {
											o.unqueued || a();
										})),
									o.unqueued++,
									d.always(function () {
										d.always(function () {
											o.unqueued--, C.queue(e, 'fx').length || o.empty.fire();
										});
									})),
								t))
									if (((r = t[i]), ot.test(r))) {
										if ((delete t[i], (s = s || 'toggle' === r), r === (m ? 'hide' : 'show'))) {
											if ('show' !== r || !v || void 0 === v[i]) continue;
											m = !0;
										}
										h[i] = (v && v[i]) || C.style(e, i);
									}
								if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
									for (i in (f &&
										1 === e.nodeType &&
										((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
										null == (l = v && v.display) && (l = K.get(e, 'display')),
										'none' === (c = C.css(e, 'display')) &&
											(l
												? (c = l)
												: (he([e], !0),
												  (l = e.style.display || l),
												  (c = C.css(e, 'display')),
												  he([e]))),
										('inline' === c || ('inline-block' === c && null != l)) &&
											'none' === C.css(e, 'float') &&
											(u ||
												(d.done(function () {
													p.display = l;
												}),
												null == l && ((c = p.display), (l = 'none' === c ? '' : c))),
											(p.display = 'inline-block'))),
									n.overflow &&
										((p.overflow = 'hidden'),
										d.always(function () {
											(p.overflow = n.overflow[0]),
												(p.overflowX = n.overflow[1]),
												(p.overflowY = n.overflow[2]);
										})),
									(u = !1),
									h))
										u ||
											(v
												? 'hidden' in v && (m = v.hidden)
												: (v = K.access(e, 'fxshow', { display: l })),
											s && (v.hidden = !m),
											m && he([e], !0),
											d.done(function () {
												for (i in (m || he([e]), K.remove(e, 'fxshow'), h)) C.style(e, i, h[i]);
											})),
											(u = ft(m ? v[i] : 0, i, d)),
											i in v || ((v[i] = u.start), m && ((u.end = u.start), (u.start = 0)));
							},
						],
						prefilter: function (e, t) {
							t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
						},
					})),
						(C.speed = function (e, t, n) {
							var i =
								e && 'object' == typeof e
									? C.extend({}, e)
									: {
											complete: n || (!n && t) || (g(e) && e),
											duration: e,
											easing: (n && t) || (t && !g(t) && t),
									  };
							return (
								C.fx.off
									? (i.duration = 0)
									: 'number' != typeof i.duration &&
									  (i.duration in C.fx.speeds
											? (i.duration = C.fx.speeds[i.duration])
											: (i.duration = C.fx.speeds._default)),
								(null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
								(i.old = i.complete),
								(i.complete = function () {
									g(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
								}),
								i
							);
						}),
						C.fn.extend({
							fadeTo: function (e, t, n, i) {
								return this.filter(le)
									.css('opacity', 0)
									.show()
									.end()
									.animate({ opacity: t }, e, n, i);
							},
							animate: function (e, t, n, i) {
								var r = C.isEmptyObject(e),
									s = C.speed(t, n, i),
									o = function () {
										var t = dt(this, C.extend({}, e), s);
										(r || K.get(this, 'finish')) && t.stop(!0);
									};
								return (o.finish = o), r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
							},
							stop: function (e, t, n) {
								var i = function (e) {
									var t = e.stop;
									delete e.stop, t(n);
								};
								return (
									'string' != typeof e && ((n = t), (t = e), (e = void 0)),
									t && this.queue(e || 'fx', []),
									this.each(function () {
										var t = !0,
											r = null != e && e + 'queueHooks',
											s = C.timers,
											o = K.get(this);
										if (r) o[r] && o[r].stop && i(o[r]);
										else for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
										for (r = s.length; r--; )
											s[r].elem !== this ||
												(null != e && s[r].queue !== e) ||
												(s[r].anim.stop(n), (t = !1), s.splice(r, 1));
										(!t && n) || C.dequeue(this, e);
									})
								);
							},
							finish: function (e) {
								return (
									!1 !== e && (e = e || 'fx'),
									this.each(function () {
										var t,
											n = K.get(this),
											i = n[e + 'queue'],
											r = n[e + 'queueHooks'],
											s = C.timers,
											o = i ? i.length : 0;
										for (
											n.finish = !0,
												C.queue(this, e, []),
												r && r.stop && r.stop.call(this, !0),
												t = s.length;
											t--;

										)
											s[t].elem === this &&
												s[t].queue === e &&
												(s[t].anim.stop(!0), s.splice(t, 1));
										for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
										delete n.finish;
									})
								);
							},
						}),
						C.each(['toggle', 'show', 'hide'], function (e, t) {
							var n = C.fn[t];
							C.fn[t] = function (e, i, r) {
								return null == e || 'boolean' == typeof e
									? n.apply(this, arguments)
									: this.animate(ct(t, !0), e, i, r);
							};
						}),
						C.each(
							{
								slideDown: ct('show'),
								slideUp: ct('hide'),
								slideToggle: ct('toggle'),
								fadeIn: { opacity: 'show' },
								fadeOut: { opacity: 'hide' },
								fadeToggle: { opacity: 'toggle' },
							},
							function (e, t) {
								C.fn[e] = function (e, n, i) {
									return this.animate(t, e, n, i);
								};
							},
						),
						(C.timers = []),
						(C.fx.tick = function () {
							var e,
								t = 0,
								n = C.timers;
							for (rt = Date.now(); t < n.length; t++)
								(e = n[t])() || n[t] !== e || n.splice(t--, 1);
							n.length || C.fx.stop(), (rt = void 0);
						}),
						(C.fx.timer = function (e) {
							C.timers.push(e), C.fx.start();
						}),
						(C.fx.interval = 13),
						(C.fx.start = function () {
							st || ((st = !0), ut());
						}),
						(C.fx.stop = function () {
							st = null;
						}),
						(C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
						(C.fn.delay = function (e, t) {
							return (
								(e = (C.fx && C.fx.speeds[e]) || e),
								(t = t || 'fx'),
								this.queue(t, function (t, n) {
									var r = i.setTimeout(t, e);
									n.stop = function () {
										i.clearTimeout(r);
									};
								})
							);
						}),
						(function () {
							var e = b.createElement('input'),
								t = b.createElement('select').appendChild(b.createElement('option'));
							(e.type = 'checkbox'),
								(v.checkOn = '' !== e.value),
								(v.optSelected = t.selected),
								((e = b.createElement('input')).value = 't'),
								(e.type = 'radio'),
								(v.radioValue = 't' === e.value);
						})();
					var ht,
						pt = C.expr.attrHandle;
					C.fn.extend({
						attr: function (e, t) {
							return U(this, C.attr, e, t, arguments.length > 1);
						},
						removeAttr: function (e) {
							return this.each(function () {
								C.removeAttr(this, e);
							});
						},
					}),
						C.extend({
							attr: function (e, t, n) {
								var i,
									r,
									s = e.nodeType;
								if (3 !== s && 8 !== s && 2 !== s)
									return void 0 === e.getAttribute
										? C.prop(e, t, n)
										: ((1 === s && C.isXMLDoc(e)) ||
												(r =
													C.attrHooks[t.toLowerCase()] ||
													(C.expr.match.bool.test(t) ? ht : void 0)),
										  void 0 !== n
												? null === n
													? void C.removeAttr(e, t)
													: r && 'set' in r && void 0 !== (i = r.set(e, n, t))
													? i
													: (e.setAttribute(t, n + ''), n)
												: r && 'get' in r && null !== (i = r.get(e, t))
												? i
												: null == (i = C.find.attr(e, t))
												? void 0
												: i);
							},
							attrHooks: {
								type: {
									set: function (e, t) {
										if (!v.radioValue && 'radio' === t && k(e, 'input')) {
											var n = e.value;
											return e.setAttribute('type', t), n && (e.value = n), t;
										}
									},
								},
							},
							removeAttr: function (e, t) {
								var n,
									i = 0,
									r = t && t.match(R);
								if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
							},
						}),
						(ht = {
							set: function (e, t, n) {
								return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
							},
						}),
						C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
							var n = pt[t] || C.find.attr;
							pt[t] = function (e, t, i) {
								var r,
									s,
									o = t.toLowerCase();
								return (
									i || ((s = pt[o]), (pt[o] = r), (r = null != n(e, t, i) ? o : null), (pt[o] = s)),
									r
								);
							};
						});
					var mt = /^(?:input|select|textarea|button)$/i,
						vt = /^(?:a|area)$/i;
					function gt(e) {
						return (e.match(R) || []).join(' ');
					}
					function yt(e) {
						return (e.getAttribute && e.getAttribute('class')) || '';
					}
					function bt(e) {
						return Array.isArray(e) ? e : ('string' == typeof e && e.match(R)) || [];
					}
					C.fn.extend({
						prop: function (e, t) {
							return U(this, C.prop, e, t, arguments.length > 1);
						},
						removeProp: function (e) {
							return this.each(function () {
								delete this[C.propFix[e] || e];
							});
						},
					}),
						C.extend({
							prop: function (e, t, n) {
								var i,
									r,
									s = e.nodeType;
								if (3 !== s && 8 !== s && 2 !== s)
									return (
										(1 === s && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (r = C.propHooks[t])),
										void 0 !== n
											? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
												? i
												: (e[t] = n)
											: r && 'get' in r && null !== (i = r.get(e, t))
											? i
											: e[t]
									);
							},
							propHooks: {
								tabIndex: {
									get: function (e) {
										var t = C.find.attr(e, 'tabindex');
										return t
											? parseInt(t, 10)
											: mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
											? 0
											: -1;
									},
								},
							},
							propFix: { for: 'htmlFor', class: 'className' },
						}),
						v.optSelected ||
							(C.propHooks.selected = {
								get: function (e) {
									var t = e.parentNode;
									return t && t.parentNode && t.parentNode.selectedIndex, null;
								},
								set: function (e) {
									var t = e.parentNode;
									t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
								},
							}),
						C.each(
							[
								'tabIndex',
								'readOnly',
								'maxLength',
								'cellSpacing',
								'cellPadding',
								'rowSpan',
								'colSpan',
								'useMap',
								'frameBorder',
								'contentEditable',
							],
							function () {
								C.propFix[this.toLowerCase()] = this;
							},
						),
						C.fn.extend({
							addClass: function (e) {
								var t,
									n,
									i,
									r,
									s,
									o,
									a,
									u = 0;
								if (g(e))
									return this.each(function (t) {
										C(this).addClass(e.call(this, t, yt(this)));
									});
								if ((t = bt(e)).length)
									for (; (n = this[u++]); )
										if (((r = yt(n)), (i = 1 === n.nodeType && ' ' + gt(r) + ' '))) {
											for (o = 0; (s = t[o++]); ) i.indexOf(' ' + s + ' ') < 0 && (i += s + ' ');
											r !== (a = gt(i)) && n.setAttribute('class', a);
										}
								return this;
							},
							removeClass: function (e) {
								var t,
									n,
									i,
									r,
									s,
									o,
									a,
									u = 0;
								if (g(e))
									return this.each(function (t) {
										C(this).removeClass(e.call(this, t, yt(this)));
									});
								if (!arguments.length) return this.attr('class', '');
								if ((t = bt(e)).length)
									for (; (n = this[u++]); )
										if (((r = yt(n)), (i = 1 === n.nodeType && ' ' + gt(r) + ' '))) {
											for (o = 0; (s = t[o++]); )
												for (; i.indexOf(' ' + s + ' ') > -1; ) i = i.replace(' ' + s + ' ', ' ');
											r !== (a = gt(i)) && n.setAttribute('class', a);
										}
								return this;
							},
							toggleClass: function (e, t) {
								var n = typeof e,
									i = 'string' === n || Array.isArray(e);
								return 'boolean' == typeof t && i
									? t
										? this.addClass(e)
										: this.removeClass(e)
									: g(e)
									? this.each(function (n) {
											C(this).toggleClass(e.call(this, n, yt(this), t), t);
									  })
									: this.each(function () {
											var t, r, s, o;
											if (i)
												for (r = 0, s = C(this), o = bt(e); (t = o[r++]); )
													s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
											else
												(void 0 !== e && 'boolean' !== n) ||
													((t = yt(this)) && K.set(this, '__className__', t),
													this.setAttribute &&
														this.setAttribute(
															'class',
															t || !1 === e ? '' : K.get(this, '__className__') || '',
														));
									  });
							},
							hasClass: function (e) {
								var t,
									n,
									i = 0;
								for (t = ' ' + e + ' '; (n = this[i++]); )
									if (1 === n.nodeType && (' ' + gt(yt(n)) + ' ').indexOf(t) > -1) return !0;
								return !1;
							},
						});
					var xt = /\r/g;
					C.fn.extend({
						val: function (e) {
							var t,
								n,
								i,
								r = this[0];
							return arguments.length
								? ((i = g(e)),
								  this.each(function (n) {
										var r;
										1 === this.nodeType &&
											(null == (r = i ? e.call(this, n, C(this).val()) : e)
												? (r = '')
												: 'number' == typeof r
												? (r += '')
												: Array.isArray(r) &&
												  (r = C.map(r, function (e) {
														return null == e ? '' : e + '';
												  })),
											((t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) &&
												'set' in t &&
												void 0 !== t.set(this, r, 'value')) ||
												(this.value = r));
								  }))
								: r
								? (t = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) &&
								  'get' in t &&
								  void 0 !== (n = t.get(r, 'value'))
									? n
									: 'string' == typeof (n = r.value)
									? n.replace(xt, '')
									: null == n
									? ''
									: n
								: void 0;
						},
					}),
						C.extend({
							valHooks: {
								option: {
									get: function (e) {
										var t = C.find.attr(e, 'value');
										return null != t ? t : gt(C.text(e));
									},
								},
								select: {
									get: function (e) {
										var t,
											n,
											i,
											r = e.options,
											s = e.selectedIndex,
											o = 'select-one' === e.type,
											a = o ? null : [],
											u = o ? s + 1 : r.length;
										for (i = s < 0 ? u : o ? s : 0; i < u; i++)
											if (
												((n = r[i]).selected || i === s) &&
												!n.disabled &&
												(!n.parentNode.disabled || !k(n.parentNode, 'optgroup'))
											) {
												if (((t = C(n).val()), o)) return t;
												a.push(t);
											}
										return a;
									},
									set: function (e, t) {
										for (var n, i, r = e.options, s = C.makeArray(t), o = r.length; o--; )
											((i = r[o]).selected = C.inArray(C.valHooks.option.get(i), s) > -1) &&
												(n = !0);
										return n || (e.selectedIndex = -1), s;
									},
								},
							},
						}),
						C.each(['radio', 'checkbox'], function () {
							(C.valHooks[this] = {
								set: function (e, t) {
									if (Array.isArray(t)) return (e.checked = C.inArray(C(e).val(), t) > -1);
								},
							}),
								v.checkOn ||
									(C.valHooks[this].get = function (e) {
										return null === e.getAttribute('value') ? 'on' : e.value;
									});
						}),
						(v.focusin = 'onfocusin' in i);
					var Tt = /^(?:focusinfocus|focusoutblur)$/,
						wt = function (e) {
							e.stopPropagation();
						};
					C.extend(C.event, {
						trigger: function (e, t, n, r) {
							var s,
								o,
								a,
								u,
								l,
								c,
								f,
								d,
								p = [n || b],
								m = h.call(e, 'type') ? e.type : e,
								v = h.call(e, 'namespace') ? e.namespace.split('.') : [];
							if (
								((o = d = a = n = n || b),
								3 !== n.nodeType &&
									8 !== n.nodeType &&
									!Tt.test(m + C.event.triggered) &&
									(m.indexOf('.') > -1 && ((v = m.split('.')), (m = v.shift()), v.sort()),
									(l = m.indexOf(':') < 0 && 'on' + m),
									((e = e[C.expando] ? e : new C.Event(m, 'object' == typeof e && e)).isTrigger = r
										? 2
										: 3),
									(e.namespace = v.join('.')),
									(e.rnamespace = e.namespace
										? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
										: null),
									(e.result = void 0),
									e.target || (e.target = n),
									(t = null == t ? [e] : C.makeArray(t, [e])),
									(f = C.event.special[m] || {}),
									r || !f.trigger || !1 !== f.trigger.apply(n, t)))
							) {
								if (!r && !f.noBubble && !y(n)) {
									for (
										u = f.delegateType || m, Tt.test(u + m) || (o = o.parentNode);
										o;
										o = o.parentNode
									)
										p.push(o), (a = o);
									a === (n.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || i);
								}
								for (s = 0; (o = p[s++]) && !e.isPropagationStopped(); )
									(d = o),
										(e.type = s > 1 ? u : f.bindType || m),
										(c =
											(K.get(o, 'events') || Object.create(null))[e.type] && K.get(o, 'handle')) &&
											c.apply(o, t),
										(c = l && o[l]) &&
											c.apply &&
											Q(o) &&
											((e.result = c.apply(o, t)), !1 === e.result && e.preventDefault());
								return (
									(e.type = m),
									r ||
										e.isDefaultPrevented() ||
										(f._default && !1 !== f._default.apply(p.pop(), t)) ||
										!Q(n) ||
										(l &&
											g(n[m]) &&
											!y(n) &&
											((a = n[l]) && (n[l] = null),
											(C.event.triggered = m),
											e.isPropagationStopped() && d.addEventListener(m, wt),
											n[m](),
											e.isPropagationStopped() && d.removeEventListener(m, wt),
											(C.event.triggered = void 0),
											a && (n[l] = a))),
									e.result
								);
							}
						},
						simulate: function (e, t, n) {
							var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
							C.event.trigger(i, null, t);
						},
					}),
						C.fn.extend({
							trigger: function (e, t) {
								return this.each(function () {
									C.event.trigger(e, t, this);
								});
							},
							triggerHandler: function (e, t) {
								var n = this[0];
								if (n) return C.event.trigger(e, t, n, !0);
							},
						}),
						v.focusin ||
							C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
								var n = function (e) {
									C.event.simulate(t, e.target, C.event.fix(e));
								};
								C.event.special[t] = {
									setup: function () {
										var i = this.ownerDocument || this.document || this,
											r = K.access(i, t);
										r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1);
									},
									teardown: function () {
										var i = this.ownerDocument || this.document || this,
											r = K.access(i, t) - 1;
										r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t));
									},
								};
							});
					var St = i.location,
						Ct = { guid: Date.now() },
						_t = /\?/;
					C.parseXML = function (e) {
						var t, n;
						if (!e || 'string' != typeof e) return null;
						try {
							t = new i.DOMParser().parseFromString(e, 'text/xml');
						} catch (e) {}
						return (
							(n = t && t.getElementsByTagName('parsererror')[0]),
							(t && !n) ||
								C.error(
									'Invalid XML: ' +
										(n
											? C.map(n.childNodes, function (e) {
													return e.textContent;
											  }).join('\n')
											: e),
								),
							t
						);
					};
					var Et = /\[\]$/,
						Ot = /\r?\n/g,
						Mt = /^(?:submit|button|image|reset|file)$/i,
						Dt = /^(?:input|select|textarea|keygen)/i;
					function kt(e, t, n, i) {
						var r;
						if (Array.isArray(t))
							C.each(t, function (t, r) {
								n || Et.test(e)
									? i(e, r)
									: kt(e + '[' + ('object' == typeof r && null != r ? t : '') + ']', r, n, i);
							});
						else if (n || 'object' !== w(t)) i(e, t);
						else for (r in t) kt(e + '[' + r + ']', t[r], n, i);
					}
					(C.param = function (e, t) {
						var n,
							i = [],
							r = function (e, t) {
								var n = g(t) ? t() : t;
								i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
							};
						if (null == e) return '';
						if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
							C.each(e, function () {
								r(this.name, this.value);
							});
						else for (n in e) kt(n, e[n], t, r);
						return i.join('&');
					}),
						C.fn.extend({
							serialize: function () {
								return C.param(this.serializeArray());
							},
							serializeArray: function () {
								return this.map(function () {
									var e = C.prop(this, 'elements');
									return e ? C.makeArray(e) : this;
								})
									.filter(function () {
										var e = this.type;
										return (
											this.name &&
											!C(this).is(':disabled') &&
											Dt.test(this.nodeName) &&
											!Mt.test(e) &&
											(this.checked || !ve.test(e))
										);
									})
									.map(function (e, t) {
										var n = C(this).val();
										return null == n
											? null
											: Array.isArray(n)
											? C.map(n, function (e) {
													return { name: t.name, value: e.replace(Ot, '\r\n') };
											  })
											: { name: t.name, value: n.replace(Ot, '\r\n') };
									})
									.get();
							},
						});
					var Nt = /%20/g,
						At = /#.*$/,
						Ft = /([?&])_=[^&]*/,
						jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
						Pt = /^(?:GET|HEAD)$/,
						Lt = /^\/\//,
						Vt = {},
						Rt = {},
						Ht = '*/'.concat('*'),
						qt = b.createElement('a');
					function It(e) {
						return function (t, n) {
							'string' != typeof t && ((n = t), (t = '*'));
							var i,
								r = 0,
								s = t.toLowerCase().match(R) || [];
							if (g(n))
								for (; (i = s[r++]); )
									'+' === i[0]
										? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
										: (e[i] = e[i] || []).push(n);
						};
					}
					function Bt(e, t, n, i) {
						var r = {},
							s = e === Rt;
						function o(a) {
							var u;
							return (
								(r[a] = !0),
								C.each(e[a] || [], function (e, a) {
									var l = a(t, n, i);
									return 'string' != typeof l || s || r[l]
										? s
											? !(u = l)
											: void 0
										: (t.dataTypes.unshift(l), o(l), !1);
								}),
								u
							);
						}
						return o(t.dataTypes[0]) || (!r['*'] && o('*'));
					}
					function zt(e, t) {
						var n,
							i,
							r = C.ajaxSettings.flatOptions || {};
						for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
						return i && C.extend(!0, e, i), e;
					}
					(qt.href = St.href),
						C.extend({
							active: 0,
							lastModified: {},
							etag: {},
							ajaxSettings: {
								url: St.href,
								type: 'GET',
								isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
									St.protocol,
								),
								global: !0,
								processData: !0,
								async: !0,
								contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
								accepts: {
									'*': Ht,
									text: 'text/plain',
									html: 'text/html',
									xml: 'application/xml, text/xml',
									json: 'application/json, text/javascript',
								},
								contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
								responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
								converters: {
									'* text': String,
									'text html': !0,
									'text json': JSON.parse,
									'text xml': C.parseXML,
								},
								flatOptions: { url: !0, context: !0 },
							},
							ajaxSetup: function (e, t) {
								return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e);
							},
							ajaxPrefilter: It(Vt),
							ajaxTransport: It(Rt),
							ajax: function (e, t) {
								'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
								var n,
									r,
									s,
									o,
									a,
									u,
									l,
									c,
									f,
									d,
									h = C.ajaxSetup({}, t),
									p = h.context || h,
									m = h.context && (p.nodeType || p.jquery) ? C(p) : C.event,
									v = C.Deferred(),
									g = C.Callbacks('once memory'),
									y = h.statusCode || {},
									x = {},
									T = {},
									w = 'canceled',
									S = {
										readyState: 0,
										getResponseHeader: function (e) {
											var t;
											if (l) {
												if (!o)
													for (o = {}; (t = jt.exec(s)); )
														o[t[1].toLowerCase() + ' '] = (
															o[t[1].toLowerCase() + ' '] || []
														).concat(t[2]);
												t = o[e.toLowerCase() + ' '];
											}
											return null == t ? null : t.join(', ');
										},
										getAllResponseHeaders: function () {
											return l ? s : null;
										},
										setRequestHeader: function (e, t) {
											return (
												null == l &&
													((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (x[e] = t)),
												this
											);
										},
										overrideMimeType: function (e) {
											return null == l && (h.mimeType = e), this;
										},
										statusCode: function (e) {
											var t;
											if (e)
												if (l) S.always(e[S.status]);
												else for (t in e) y[t] = [y[t], e[t]];
											return this;
										},
										abort: function (e) {
											var t = e || w;
											return n && n.abort(t), _(0, t), this;
										},
									};
								if (
									(v.promise(S),
									(h.url = ((e || h.url || St.href) + '').replace(Lt, St.protocol + '//')),
									(h.type = t.method || t.type || h.method || h.type),
									(h.dataTypes = (h.dataType || '*').toLowerCase().match(R) || ['']),
									null == h.crossDomain)
								) {
									u = b.createElement('a');
									try {
										(u.href = h.url),
											(u.href = u.href),
											(h.crossDomain = qt.protocol + '//' + qt.host != u.protocol + '//' + u.host);
									} catch (e) {
										h.crossDomain = !0;
									}
								}
								if (
									(h.data &&
										h.processData &&
										'string' != typeof h.data &&
										(h.data = C.param(h.data, h.traditional)),
									Bt(Vt, h, t, S),
									l)
								)
									return S;
								for (f in ((c = C.event && h.global) &&
									0 == C.active++ &&
									C.event.trigger('ajaxStart'),
								(h.type = h.type.toUpperCase()),
								(h.hasContent = !Pt.test(h.type)),
								(r = h.url.replace(At, '')),
								h.hasContent
									? h.data &&
									  h.processData &&
									  0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') &&
									  (h.data = h.data.replace(Nt, '+'))
									: ((d = h.url.slice(r.length)),
									  h.data &&
											(h.processData || 'string' == typeof h.data) &&
											((r += (_t.test(r) ? '&' : '?') + h.data), delete h.data),
									  !1 === h.cache &&
											((r = r.replace(Ft, '$1')),
											(d = (_t.test(r) ? '&' : '?') + '_=' + Ct.guid++ + d)),
									  (h.url = r + d)),
								h.ifModified &&
									(C.lastModified[r] && S.setRequestHeader('If-Modified-Since', C.lastModified[r]),
									C.etag[r] && S.setRequestHeader('If-None-Match', C.etag[r])),
								((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
									S.setRequestHeader('Content-Type', h.contentType),
								S.setRequestHeader(
									'Accept',
									h.dataTypes[0] && h.accepts[h.dataTypes[0]]
										? h.accepts[h.dataTypes[0]] +
												('*' !== h.dataTypes[0] ? ', ' + Ht + '; q=0.01' : '')
										: h.accepts['*'],
								),
								h.headers))
									S.setRequestHeader(f, h.headers[f]);
								if (h.beforeSend && (!1 === h.beforeSend.call(p, S, h) || l)) return S.abort();
								if (
									((w = 'abort'),
									g.add(h.complete),
									S.done(h.success),
									S.fail(h.error),
									(n = Bt(Rt, h, t, S)))
								) {
									if (((S.readyState = 1), c && m.trigger('ajaxSend', [S, h]), l)) return S;
									h.async &&
										h.timeout > 0 &&
										(a = i.setTimeout(function () {
											S.abort('timeout');
										}, h.timeout));
									try {
										(l = !1), n.send(x, _);
									} catch (e) {
										if (l) throw e;
										_(-1, e);
									}
								} else _(-1, 'No Transport');
								function _(e, t, o, u) {
									var f,
										d,
										b,
										x,
										T,
										w = t;
									l ||
										((l = !0),
										a && i.clearTimeout(a),
										(n = void 0),
										(s = u || ''),
										(S.readyState = e > 0 ? 4 : 0),
										(f = (e >= 200 && e < 300) || 304 === e),
										o &&
											(x = (function (e, t, n) {
												for (var i, r, s, o, a = e.contents, u = e.dataTypes; '*' === u[0]; )
													u.shift(),
														void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
												if (i)
													for (r in a)
														if (a[r] && a[r].test(i)) {
															u.unshift(r);
															break;
														}
												if (u[0] in n) s = u[0];
												else {
													for (r in n) {
														if (!u[0] || e.converters[r + ' ' + u[0]]) {
															s = r;
															break;
														}
														o || (o = r);
													}
													s = s || o;
												}
												if (s) return s !== u[0] && u.unshift(s), n[s];
											})(h, S, o)),
										!f &&
											C.inArray('script', h.dataTypes) > -1 &&
											C.inArray('json', h.dataTypes) < 0 &&
											(h.converters['text script'] = function () {}),
										(x = (function (e, t, n, i) {
											var r,
												s,
												o,
												a,
												u,
												l = {},
												c = e.dataTypes.slice();
											if (c[1]) for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
											for (s = c.shift(); s; )
												if (
													(e.responseFields[s] && (n[e.responseFields[s]] = t),
													!u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
													(u = s),
													(s = c.shift()))
												)
													if ('*' === s) s = u;
													else if ('*' !== u && u !== s) {
														if (!(o = l[u + ' ' + s] || l['* ' + s]))
															for (r in l)
																if (
																	(a = r.split(' '))[1] === s &&
																	(o = l[u + ' ' + a[0]] || l['* ' + a[0]])
																) {
																	!0 === o
																		? (o = l[r])
																		: !0 !== l[r] && ((s = a[0]), c.unshift(a[1]));
																	break;
																}
														if (!0 !== o)
															if (o && e.throws) t = o(t);
															else
																try {
																	t = o(t);
																} catch (e) {
																	return {
																		state: 'parsererror',
																		error: o ? e : 'No conversion from ' + u + ' to ' + s,
																	};
																}
													}
											return { state: 'success', data: t };
										})(h, x, S, f)),
										f
											? (h.ifModified &&
													((T = S.getResponseHeader('Last-Modified')) && (C.lastModified[r] = T),
													(T = S.getResponseHeader('etag')) && (C.etag[r] = T)),
											  204 === e || 'HEAD' === h.type
													? (w = 'nocontent')
													: 304 === e
													? (w = 'notmodified')
													: ((w = x.state), (d = x.data), (f = !(b = x.error))))
											: ((b = w), (!e && w) || ((w = 'error'), e < 0 && (e = 0))),
										(S.status = e),
										(S.statusText = (t || w) + ''),
										f ? v.resolveWith(p, [d, w, S]) : v.rejectWith(p, [S, w, b]),
										S.statusCode(y),
										(y = void 0),
										c && m.trigger(f ? 'ajaxSuccess' : 'ajaxError', [S, h, f ? d : b]),
										g.fireWith(p, [S, w]),
										c &&
											(m.trigger('ajaxComplete', [S, h]),
											--C.active || C.event.trigger('ajaxStop')));
								}
								return S;
							},
							getJSON: function (e, t, n) {
								return C.get(e, t, n, 'json');
							},
							getScript: function (e, t) {
								return C.get(e, void 0, t, 'script');
							},
						}),
						C.each(['get', 'post'], function (e, t) {
							C[t] = function (e, n, i, r) {
								return (
									g(n) && ((r = r || i), (i = n), (n = void 0)),
									C.ajax(
										C.extend(
											{ url: e, type: t, dataType: r, data: n, success: i },
											C.isPlainObject(e) && e,
										),
									)
								);
							};
						}),
						C.ajaxPrefilter(function (e) {
							var t;
							for (t in e.headers)
								'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
						}),
						(C._evalUrl = function (e, t, n) {
							return C.ajax({
								url: e,
								type: 'GET',
								dataType: 'script',
								cache: !0,
								async: !1,
								global: !1,
								converters: { 'text script': function () {} },
								dataFilter: function (e) {
									C.globalEval(e, t, n);
								},
							});
						}),
						C.fn.extend({
							wrapAll: function (e) {
								var t;
								return (
									this[0] &&
										(g(e) && (e = e.call(this[0])),
										(t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
										this[0].parentNode && t.insertBefore(this[0]),
										t
											.map(function () {
												for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
												return e;
											})
											.append(this)),
									this
								);
							},
							wrapInner: function (e) {
								return g(e)
									? this.each(function (t) {
											C(this).wrapInner(e.call(this, t));
									  })
									: this.each(function () {
											var t = C(this),
												n = t.contents();
											n.length ? n.wrapAll(e) : t.append(e);
									  });
							},
							wrap: function (e) {
								var t = g(e);
								return this.each(function (n) {
									C(this).wrapAll(t ? e.call(this, n) : e);
								});
							},
							unwrap: function (e) {
								return (
									this.parent(e)
										.not('body')
										.each(function () {
											C(this).replaceWith(this.childNodes);
										}),
									this
								);
							},
						}),
						(C.expr.pseudos.hidden = function (e) {
							return !C.expr.pseudos.visible(e);
						}),
						(C.expr.pseudos.visible = function (e) {
							return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
						}),
						(C.ajaxSettings.xhr = function () {
							try {
								return new i.XMLHttpRequest();
							} catch (e) {}
						});
					var $t = { 0: 200, 1223: 204 },
						Ut = C.ajaxSettings.xhr();
					(v.cors = !!Ut && 'withCredentials' in Ut),
						(v.ajax = Ut = !!Ut),
						C.ajaxTransport(function (e) {
							var t, n;
							if (v.cors || (Ut && !e.crossDomain))
								return {
									send: function (r, s) {
										var o,
											a = e.xhr();
										if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
											for (o in e.xhrFields) a[o] = e.xhrFields[o];
										for (o in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
										e.crossDomain ||
											r['X-Requested-With'] ||
											(r['X-Requested-With'] = 'XMLHttpRequest'),
										r))
											a.setRequestHeader(o, r[o]);
										(t = function (e) {
											return function () {
												t &&
													((t =
														n =
														a.onload =
														a.onerror =
														a.onabort =
														a.ontimeout =
														a.onreadystatechange =
															null),
													'abort' === e
														? a.abort()
														: 'error' === e
														? 'number' != typeof a.status
															? s(0, 'error')
															: s(a.status, a.statusText)
														: s(
																$t[a.status] || a.status,
																a.statusText,
																'text' !== (a.responseType || 'text') ||
																	'string' != typeof a.responseText
																	? { binary: a.response }
																	: { text: a.responseText },
																a.getAllResponseHeaders(),
														  ));
											};
										}),
											(a.onload = t()),
											(n = a.onerror = a.ontimeout = t('error')),
											void 0 !== a.onabort
												? (a.onabort = n)
												: (a.onreadystatechange = function () {
														4 === a.readyState &&
															i.setTimeout(function () {
																t && n();
															});
												  }),
											(t = t('abort'));
										try {
											a.send((e.hasContent && e.data) || null);
										} catch (e) {
											if (t) throw e;
										}
									},
									abort: function () {
										t && t();
									},
								};
						}),
						C.ajaxPrefilter(function (e) {
							e.crossDomain && (e.contents.script = !1);
						}),
						C.ajaxSetup({
							accepts: {
								script:
									'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
							},
							contents: { script: /\b(?:java|ecma)script\b/ },
							converters: {
								'text script': function (e) {
									return C.globalEval(e), e;
								},
							},
						}),
						C.ajaxPrefilter('script', function (e) {
							void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
						}),
						C.ajaxTransport('script', function (e) {
							var t, n;
							if (e.crossDomain || e.scriptAttrs)
								return {
									send: function (i, r) {
										(t = C('<script>')
											.attr(e.scriptAttrs || {})
											.prop({ charset: e.scriptCharset, src: e.url })
											.on(
												'load error',
												(n = function (e) {
													t.remove(), (n = null), e && r('error' === e.type ? 404 : 200, e.type);
												}),
											)),
											b.head.appendChild(t[0]);
									},
									abort: function () {
										n && n();
									},
								};
						});
					var Wt,
						Xt = [],
						Yt = /(=)\?(?=&|$)|\?\?/;
					C.ajaxSetup({
						jsonp: 'callback',
						jsonpCallback: function () {
							var e = Xt.pop() || C.expando + '_' + Ct.guid++;
							return (this[e] = !0), e;
						},
					}),
						C.ajaxPrefilter('json jsonp', function (e, t, n) {
							var r,
								s,
								o,
								a =
									!1 !== e.jsonp &&
									(Yt.test(e.url)
										? 'url'
										: 'string' == typeof e.data &&
										  0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
										  Yt.test(e.data) &&
										  'data');
							if (a || 'jsonp' === e.dataTypes[0])
								return (
									(r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
									a
										? (e[a] = e[a].replace(Yt, '$1' + r))
										: !1 !== e.jsonp && (e.url += (_t.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
									(e.converters['script json'] = function () {
										return o || C.error(r + ' was not called'), o[0];
									}),
									(e.dataTypes[0] = 'json'),
									(s = i[r]),
									(i[r] = function () {
										o = arguments;
									}),
									n.always(function () {
										void 0 === s ? C(i).removeProp(r) : (i[r] = s),
											e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
											o && g(s) && s(o[0]),
											(o = s = void 0);
									}),
									'script'
								);
						}),
						(v.createHTMLDocument =
							(((Wt = b.implementation.createHTMLDocument('').body).innerHTML =
								'<form></form><form></form>'),
							2 === Wt.childNodes.length)),
						(C.parseHTML = function (e, t, n) {
							return 'string' != typeof e
								? []
								: ('boolean' == typeof t && ((n = t), (t = !1)),
								  t ||
										(v.createHTMLDocument
											? (((i = (t = b.implementation.createHTMLDocument('')).createElement(
													'base',
											  )).href = b.location.href),
											  t.head.appendChild(i))
											: (t = b)),
								  (s = !n && []),
								  (r = N.exec(e))
										? [t.createElement(r[1])]
										: ((r = Se([e], t, s)),
										  s && s.length && C(s).remove(),
										  C.merge([], r.childNodes)));
							var i, r, s;
						}),
						(C.fn.load = function (e, t, n) {
							var i,
								r,
								s,
								o = this,
								a = e.indexOf(' ');
							return (
								a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
								g(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (r = 'POST'),
								o.length > 0 &&
									C.ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
										.done(function (e) {
											(s = arguments), o.html(i ? C('<div>').append(C.parseHTML(e)).find(i) : e);
										})
										.always(
											n &&
												function (e, t) {
													o.each(function () {
														n.apply(this, s || [e.responseText, t, e]);
													});
												},
										),
								this
							);
						}),
						(C.expr.pseudos.animated = function (e) {
							return C.grep(C.timers, function (t) {
								return e === t.elem;
							}).length;
						}),
						(C.offset = {
							setOffset: function (e, t, n) {
								var i,
									r,
									s,
									o,
									a,
									u,
									l = C.css(e, 'position'),
									c = C(e),
									f = {};
								'static' === l && (e.style.position = 'relative'),
									(a = c.offset()),
									(s = C.css(e, 'top')),
									(u = C.css(e, 'left')),
									('absolute' === l || 'fixed' === l) && (s + u).indexOf('auto') > -1
										? ((o = (i = c.position()).top), (r = i.left))
										: ((o = parseFloat(s) || 0), (r = parseFloat(u) || 0)),
									g(t) && (t = t.call(e, n, C.extend({}, a))),
									null != t.top && (f.top = t.top - a.top + o),
									null != t.left && (f.left = t.left - a.left + r),
									'using' in t ? t.using.call(e, f) : c.css(f);
							},
						}),
						C.fn.extend({
							offset: function (e) {
								if (arguments.length)
									return void 0 === e
										? this
										: this.each(function (t) {
												C.offset.setOffset(this, e, t);
										  });
								var t,
									n,
									i = this[0];
								return i
									? i.getClientRects().length
										? ((t = i.getBoundingClientRect()),
										  (n = i.ownerDocument.defaultView),
										  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
										: { top: 0, left: 0 }
									: void 0;
							},
							position: function () {
								if (this[0]) {
									var e,
										t,
										n,
										i = this[0],
										r = { top: 0, left: 0 };
									if ('fixed' === C.css(i, 'position')) t = i.getBoundingClientRect();
									else {
										for (
											t = this.offset(),
												n = i.ownerDocument,
												e = i.offsetParent || n.documentElement;
											e &&
											(e === n.body || e === n.documentElement) &&
											'static' === C.css(e, 'position');

										)
											e = e.parentNode;
										e &&
											e !== i &&
											1 === e.nodeType &&
											(((r = C(e).offset()).top += C.css(e, 'borderTopWidth', !0)),
											(r.left += C.css(e, 'borderLeftWidth', !0)));
									}
									return {
										top: t.top - r.top - C.css(i, 'marginTop', !0),
										left: t.left - r.left - C.css(i, 'marginLeft', !0),
									};
								}
							},
							offsetParent: function () {
								return this.map(function () {
									for (var e = this.offsetParent; e && 'static' === C.css(e, 'position'); )
										e = e.offsetParent;
									return e || oe;
								});
							},
						}),
						C.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
							var n = 'pageYOffset' === t;
							C.fn[e] = function (i) {
								return U(
									this,
									function (e, i, r) {
										var s;
										if ((y(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView), void 0 === r))
											return s ? s[t] : e[i];
										s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : (e[i] = r);
									},
									e,
									i,
									arguments.length,
								);
							};
						}),
						C.each(['top', 'left'], function (e, t) {
							C.cssHooks[t] = Ue(v.pixelPosition, function (e, n) {
								if (n) return (n = $e(e, t)), qe.test(n) ? C(e).position()[t] + 'px' : n;
							});
						}),
						C.each({ Height: 'height', Width: 'width' }, function (e, t) {
							C.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, i) {
								C.fn[i] = function (r, s) {
									var o = arguments.length && (n || 'boolean' != typeof r),
										a = n || (!0 === r || !0 === s ? 'margin' : 'border');
									return U(
										this,
										function (t, n, r) {
											var s;
											return y(t)
												? 0 === i.indexOf('outer')
													? t['inner' + e]
													: t.document.documentElement['client' + e]
												: 9 === t.nodeType
												? ((s = t.documentElement),
												  Math.max(
														t.body['scroll' + e],
														s['scroll' + e],
														t.body['offset' + e],
														s['offset' + e],
														s['client' + e],
												  ))
												: void 0 === r
												? C.css(t, n, a)
												: C.style(t, n, r, a);
										},
										t,
										o ? r : void 0,
										o,
									);
								};
							});
						}),
						C.each(
							['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
							function (e, t) {
								C.fn[t] = function (e) {
									return this.on(t, e);
								};
							},
						),
						C.fn.extend({
							bind: function (e, t, n) {
								return this.on(e, null, t, n);
							},
							unbind: function (e, t) {
								return this.off(e, null, t);
							},
							delegate: function (e, t, n, i) {
								return this.on(t, e, n, i);
							},
							undelegate: function (e, t, n) {
								return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
							},
							hover: function (e, t) {
								return this.mouseenter(e).mouseleave(t || e);
							},
						}),
						C.each(
							'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
								' ',
							),
							function (e, t) {
								C.fn[t] = function (e, n) {
									return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
								};
							},
						);
					var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
					(C.proxy = function (e, t) {
						var n, i, r;
						if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
							return (
								(i = a.call(arguments, 2)),
								(r = function () {
									return e.apply(t || this, i.concat(a.call(arguments)));
								}),
								(r.guid = e.guid = e.guid || C.guid++),
								r
							);
					}),
						(C.holdReady = function (e) {
							e ? C.readyWait++ : C.ready(!0);
						}),
						(C.isArray = Array.isArray),
						(C.parseJSON = JSON.parse),
						(C.nodeName = k),
						(C.isFunction = g),
						(C.isWindow = y),
						(C.camelCase = G),
						(C.type = w),
						(C.now = Date.now),
						(C.isNumeric = function (e) {
							var t = C.type(e);
							return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
						}),
						(C.trim = function (e) {
							return null == e ? '' : (e + '').replace(Gt, '');
						}),
						void 0 ===
							(n = function () {
								return C;
							}.apply(t, [])) || (e.exports = n);
					var Qt = i.jQuery,
						Jt = i.$;
					return (
						(C.noConflict = function (e) {
							return i.$ === C && (i.$ = Jt), e && i.jQuery === C && (i.jQuery = Qt), C;
						}),
						void 0 === r && (i.jQuery = i.$ = C),
						C
					);
				});
			},
			4829: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(4524)),
					s = n(3502),
					o = i(n(225)),
					a = i(n(3541)),
					u = n(3553);
				class l extends r.default {
					constructor(e, t) {
						super(),
							(this.DOMroot = e),
							(this.stance = t),
							(this.step = 1),
							(this.value = 0),
							(this.stepCount = 0),
							(this.stepPercent = 0),
							(this.offset = 0),
							(this.stepOffset = 0),
							(this.cursorOffset = 0),
							(this.isDecimal = !1),
							(this.decimalPlaces = 0),
							(this.endsValidation = a.default.bind(this)),
							(this.prepareOffset = o.default.bind(this));
					}
					setStep(e, t) {
						(this.step = e),
							(this.stepCount = (t.max - t.min) / e),
							(this.stepPercent = 100 / this.stepCount);
					}
					calculateValue(e) {
						return (this.stepOffset / this.stepPercent) * this.step + e.min;
					}
					setValue(e) {
						this.value = e;
					}
					setStance(e) {
						this.stance = e;
					}
					setIsDecimal(e, t) {
						(this.isDecimal = e), (this.decimalPlaces = t);
					}
					calculateOffset(e, t) {
						return this.prepareOffset((this.value - e.min) / ((e.max - e.min) / 100), t);
					}
					setOffset(e) {
						this.offset = e;
					}
					setStepOffset(e) {
						this.stepOffset = e;
					}
					calculateStepOffset() {
						return Math.round(this.cursorOffset / this.stepPercent) * this.stepPercent;
					}
					setCursorOffset(e) {
						this.cursorOffset = e;
					}
					updateThumbValue(e, t, n, i) {
						'horizontal' === i ? this.setCursorOffset(n) : this.setCursorOffset(u.MAX_OFFSET - n),
							this.setStepOffset(this.calculateStepOffset()),
							this.setValue(this.calculateValue(t)),
							this.setOffset(this.calculateOffset(t, i)),
							this.endsValidation(t, i),
							this.notify(
								s.SubscribersNames.updateThumbView,
								this.value,
								this.offset,
								e,
								this.cursorOffset,
							),
							this.notify(s.SubscribersNames.updateTipView, e, this.offset, this.value),
							this.notify(s.SubscribersNames.updatePanelValues, this.value, e);
					}
					getValue() {
						return this.value;
					}
					getOffset() {
						return this.offset;
					}
					getState() {
						return {
							step: this.step,
							stepCount: this.stepCount,
							stepPercent: this.stepPercent,
							value: this.value,
							offset: this.offset,
							stepOffset: this.stepOffset,
							isDecimal: this.isDecimal,
							decimalPlaces: this.decimalPlaces,
						};
					}
				}
				t.default = l;
			},
			3541: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3553);
				t.default = function (e, t) {
					this.getOffset() > i.MAX_OFFSET &&
						(this.setOffset(i.MAX_OFFSET), this.setValue('horizontal' === t ? e.max : e.min)),
						this.getOffset() < i.MIN_OFFSET &&
							(this.setOffset(i.MIN_OFFSET), this.setValue('horizontal' === t ? e.min : e.max));
				};
			},
			225: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3553);
				t.default = function (e, t) {
					return 'horizontal' === t ? e : i.MAX_OFFSET - e;
				};
			},
			610: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(4524)),
					s = n(3553),
					o = n(3502);
				class a extends r.default {
					constructor(e) {
						super(),
							(this.DOMroot = e),
							(this.ends = { min: 1, max: 100 }),
							(this.size = 200),
							(this.isRange = !1),
							(this.direction = 'horizontal'),
							(this.fillSize = 0),
							(this.fillOffset = 0),
							(this.hasFill = !0),
							(this.hasTips = !0),
							(this.hasScale = !0);
					}
					setEnds({ min: e, max: t }) {
						this.ends = { min: e, max: t };
					}
					setSize(e) {
						this.size = e;
					}
					setIsRange(e) {
						this.isRange = e;
					}
					setDirection(e) {
						this.direction = e;
					}
					setSubViews(e, t, n) {
						(this.hasScale = n), (this.hasTips = t), (this.hasFill = e);
					}
					calculateFillSize(e) {
						return this.isRange
							? 'horizontal' === this.direction
								? e[s.SECOND_OFFSET] - e[s.FIRST_OFFSET]
								: e[s.FIRST_OFFSET] - e[s.SECOND_OFFSET]
							: 'horizontal' === this.direction
							? e[s.FIRST_OFFSET]
							: s.MAX_OFFSET - e[s.FIRST_OFFSET];
					}
					setFillSize(e) {
						this.fillSize = e;
					}
					calculateFillOffset(e) {
						return this.isRange
							? 'horizontal' === this.direction
								? e[s.FIRST_OFFSET]
								: e[s.SECOND_OFFSET]
							: s.MIN_OFFSET;
					}
					setFillOffset(e) {
						this.fillOffset = e;
					}
					updateTrackFill(e) {
						this.setFillSize(this.calculateFillSize(e)),
							this.setFillOffset(this.calculateFillOffset(e)),
							this.notify(o.SubscribersNames.updateTrackFillView, this.fillSize, this.fillOffset);
					}
					prepareChooseStance(e) {
						let t = s.FIRST_THUMB_STANCE;
						e > this.fillSize / 2 + this.fillOffset && (t = s.SECOND_THUMB_STANCE),
							'vertical' === this.direction && (t = +!t),
							this.isRange || (t = s.FIRST_THUMB_STANCE),
							this.notify(o.SubscribersNames.updateThumbModel, t, e, this.direction, this.size);
					}
					getState() {
						return {
							ends: this.ends,
							size: this.size,
							isRange: this.isRange,
							direction: this.direction,
							hasFill: this.hasFill,
							hasTips: this.hasTips,
							hasScale: this.hasScale,
						};
					}
					getFillSize() {
						return this.fillSize;
					}
					getFillOffset() {
						return this.fillOffset;
					}
					getFillState() {
						return { fillSize: this.getFillSize(), fillOffset: this.getFillOffset() };
					}
				}
				t.default = a;
			},
			4524: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = class {
						constructor(e = {}) {
							this.subscribers = e;
						}
						subscribe(e, t) {
							const n = this.subscribers[e];
							n ? n.push(t) : (this.subscribers[e] = [t]);
						}
						unsubscribe(e, t) {
							this.subscribers[e].filter(e => t !== e);
						}
						notify(e, ...t) {
							this.subscribers[e].forEach(e => {
								e(...t);
							});
						}
					});
			},
			5015: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(8892)),
					s = i(n(610)),
					o = i(n(4829)),
					a = i(n(5617)),
					u = i(n(7868)),
					l = i(n(349)),
					c = i(n(2691)),
					f = i(n(9102)),
					d = i(n(9148)),
					h = i(n(5664)),
					p = i(n(1819)),
					m = i(n(4185)),
					v = i(n(8707));
				t.default = class {
					constructor(e, t) {
						(this.root = e),
							(this.DOMroot = document.querySelector(e)),
							(this.trackModel = new s.default(this.DOMroot)),
							(this.view = new r.default(this.DOMroot)),
							(this.thumbs = []),
							(this.params = t),
							(this.thumbStance = 0),
							(this.clearHTML = a.default.bind(this)),
							(this.removeListeners = u.default.bind(this)),
							(this.subscribe = l.default.bind(this)),
							(this.updateThumbModelBeforeTrackClick = c.default.bind(this)),
							(this.updateThumbModel = m.default.bind(this)),
							(this.updateTrackFillModel = f.default.bind(this)),
							(this.updateThumbView = d.default.bind(this)),
							(this.updateTipView = h.default.bind(this)),
							(this.addListeners = v.default.bind(this)),
							(this.updateTrackFillView = p.default.bind(this));
					}
					init(e, t) {
						'rebuild' === t &&
							((this.params = e),
							(this.view.isRange = !1),
							this.removeListeners(),
							this.clearHTML(e.direction),
							(this.thumbStance = 0),
							(this.thumbs = []),
							(this.view.thumbView.thumbs = []),
							(this.view.tipView.tips = [])),
							this.addSliderClasses(e.direction),
							this.setTrackModelState(e),
							this.setViewState(),
							this.createSlider(e),
							this.subscribe(),
							this.addListeners(e.isRange);
					}
					setTrackModelState({
						min: e,
						max: t,
						isRange: n,
						direction: i,
						hasFill: r,
						hasTips: s,
						hasScale: o,
					}) {
						const a =
							'horizontal' === i
								? this.DOMroot.getBoundingClientRect().width
								: this.DOMroot.getBoundingClientRect().height;
						return (
							this.trackModel.setSize(a),
							this.trackModel.setEnds({ min: e, max: t }),
							this.trackModel.setIsRange(n),
							this.trackModel.setDirection(i),
							this.trackModel.setSubViews(r, s, o),
							this
						);
					}
					setViewState() {
						return this.view.setState(this.trackModel.getState()), this;
					}
					addSliderClasses(e) {
						const t = this.DOMroot.parentElement;
						this.DOMroot.classList.add(`slider_${e}`), t.classList.add(`slider-parent_${e}`);
					}
					createThumb(
						{
							step: e,
							value: t,
							min: n,
							max: i,
							direction: r,
							hasTips: s,
							isDecimal: o,
							decimalPlaces: a,
						},
						u,
					) {
						this.createThumbModel(u),
							this.setThumbModelState(u, e, Array.isArray(t) ? t[u] : t, n, i, o, a, r),
							this.renderThumb(u),
							this.setThumbView(u, r),
							this.setThumbPlacement(u),
							s && this.createTip(u, r);
					}
					createTip(e, t) {
						this.setTipView(e), this.renderTip(t, e), this.setTipPlacement(e);
					}
					createSlider(e) {
						this.createThumb(e, this.thumbStance),
							this.createSubViewsView(e),
							e.isRange && ((this.thumbStance += 1), this.createThumb(e, this.thumbStance)),
							this.createTrackFill();
					}
					createTrackFill() {
						this.setTrackFillModel(), this.setTrackFillView(), this.setTrackFillPlacement();
					}
					setThumbModelState(e, t, n, i, r, s, o, a) {
						this.thumbs.forEach(e => {
							e.setStep(t, { min: i, max: r });
						}),
							this.thumbs[e].setStance(e),
							this.thumbs[e].setValue(n),
							this.thumbs[e].setOffset(this.thumbs[e].calculateOffset({ min: i, max: r }, a)),
							this.thumbs[e].setIsDecimal(s, o);
					}
					setThumbView(e, t) {
						const {
							step: n,
							stepCount: i,
							stepPercent: r,
							value: s,
							offset: o,
							isDecimal: a,
							decimalPlaces: u,
						} = this.thumbs[e].getState();
						this.view.thumbView.setStep(n, r, i),
							this.view.thumbView.setValue(s, e),
							this.view.thumbView.setOffset(o, e),
							this.view.thumbView.setIsDecimal(a, u),
							this.view.prepareDirectionForInteraction(t);
					}
					setThumbPlacement(e) {
						const { offset: t } = this.thumbs[e].getState();
						this.view.initialThumbPlacement(t, e);
					}
					setTrackFillModel() {
						const e = [];
						this.thumbs.forEach(t => e.push(t.getState().offset)),
							this.trackModel.setFillSize(this.trackModel.calculateFillSize(e)),
							this.trackModel.setFillOffset(this.trackModel.calculateFillOffset(e));
					}
					setTrackFillView() {
						this.view.setFillState(this.trackModel.getFillState());
					}
					setTrackFillPlacement() {
						this.view.initialFillPlacement();
					}
					setTipPlacement(e) {
						this.view.initialTipPlacement(e);
					}
					createThumbModel(e) {
						this.thumbs.push(new o.default(this.DOMroot, e));
					}
					renderThumb(e) {
						this.view.thumbView.createThumb(e);
					}
					renderTrack(e) {
						this.view.trackView.createTrack(e);
					}
					renderScale(e, t, n, i) {
						this.view.scaleView.createScale(e), this.view.scaleView.createScaleMarks(t, n, i, e);
					}
					renderFill(e) {
						this.view.fillView.createFill(e);
					}
					renderTip(e, t) {
						this.view.tipView.createTip(e, t);
					}
					setTipView(e) {
						const t = this.thumbs[e].getOffset(),
							n = this.thumbs[e].getValue();
						this.view.tipView.setOffset(t, e), this.view.tipView.setValue(n, e);
					}
					createSubViewsView({ direction: e, step: t, max: n, min: i, hasFill: r, hasScale: s }) {
						this.renderTrack(e), s && this.renderScale(e, t, n, i), r && this.renderFill(e);
					}
				};
			},
			8707: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3553);
				t.default = function (e) {
					this.view.thumbView.dragAndDropThumb(i.FIRST_THUMB_STANCE),
						this.view.trackView.clickTrack(),
						e && this.view.thumbView.dragAndDropThumb(i.SECOND_THUMB_STANCE);
				};
			},
			5302: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3553);
				t.default = function (e, t) {
					const n = t.dataset,
						r = n.firstValue && n.secondValue ? [+n.firstValue, +n.secondValue] : 0;
					let {
						min: s = Number(n.min) || 0,
						max: o = Number(n.max) || 100,
						value: a = r,
						decimalPlaces: u = Number(n.decimalPlaces) || 0,
					} = e;
					const {
						step: l = Number(n.step) || 10,
						isRange: c = Boolean(n.isRange) || !1,
						direction: f = n.direction || 'horizontal',
						hasFill: d = Boolean(n.hasFill) || !0,
						hasTips: h = Boolean(n.hasTips) || !0,
						hasScale: p = Boolean(n.hasScale) || !0,
						isDecimal: m = Boolean(n.isDecimal) || !1,
					} = e;
					Array.isArray(a) || (a = [a]),
						c && 1 === a.length && a.push(a[i.FIRST_THUMB_STANCE]),
						(a[i.FIRST_THUMB_STANCE] = Math.max(s, a[i.FIRST_THUMB_STANCE])),
						(a[i.FIRST_THUMB_STANCE] = Math.min(o, a[i.FIRST_THUMB_STANCE])),
						c &&
							((a[i.SECOND_THUMB_STANCE] = Math.max(s, a[i.SECOND_THUMB_STANCE])),
							(a[i.SECOND_THUMB_STANCE] = Math.min(o, a[i.SECOND_THUMB_STANCE])),
							(a[i.SECOND_THUMB_STANCE] = Math.max(
								a[i.FIRST_THUMB_STANCE],
								a[i.SECOND_THUMB_STANCE],
							))),
						s >= o - l && (s = o - l),
						o <= s + l && (o = s + l),
						(u = Math.min(u, 3));
					const v = {
						min: s,
						max: o,
						step: l,
						value: a,
						isRange: c,
						direction: f,
						hasFill: d,
						hasTips: h,
						hasScale: p,
						isDecimal: m,
						decimalPlaces: u,
					};
					return e.onChange && (v.onChange = e.onChange), v;
				};
			},
			5617: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e) {
						const t = 'horizontal' === e ? 'vertical' : 'horizontal',
							n = this.DOMroot.parentElement;
						this.DOMroot.classList.remove(`slider_${t}`),
							n.classList.remove(`slider-parent_${t}`),
							(this.DOMroot.innerHTML = '');
					});
			},
			4185: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t, n) {
						this.thumbs[e].updateThumbValue(e, this.view.ends, t, n);
					});
			},
			2691: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e) {
						this.trackModel.prepareChooseStance(e);
					});
			},
			9102: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e) {
						this.trackModel.updateTrackFill(e);
					});
			},
			9148: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t, n) {
						this.view.thumbView.setOffset(t, n),
							this.view.thumbView.setValue(e, n),
							this.view.thumbView.updateThumbPosition(t, n),
							(this.view.thumbView.activeStance = n),
							this.params.onChange && this.params.onChange(this.params);
					});
			},
			5664: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t, n) {
						this.view.tipView.setOffset(t, e),
							this.view.tipView.setValue(n, e),
							this.view.tipView.updateTipsPosition(e);
					});
			},
			1819: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t) {
						this.view.fillView.setSize(e),
							this.view.fillView.setOffset(t),
							this.view.fillView.updateFill();
					});
			},
			7868: (e, t, n) => {
				'use strict';
				var i = n(8563);
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function () {
						i(this.root).off();
					});
			},
			349: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3502);
				t.default = function () {
					this.view.thumbView.subscribe(i.SubscribersNames.updateThumbModel, this.updateThumbModel),
						this.view.thumbView.subscribe(
							i.SubscribersNames.updateTrackFillModel,
							this.updateTrackFillModel,
						),
						this.view.trackView.subscribe(
							i.SubscribersNames.updateThumbModelBeforeTrackClick,
							this.updateThumbModelBeforeTrackClick,
						),
						this.view.trackView.subscribe(
							i.SubscribersNames.updateTrackFillModel,
							this.updateTrackFillModel,
						),
						this.thumbs.forEach(e =>
							e.subscribe(i.SubscribersNames.updateTipView, this.updateTipView),
						),
						this.thumbs.forEach(e =>
							e.subscribe(i.SubscribersNames.updateThumbView, this.updateThumbView),
						),
						this.trackModel.subscribe(i.SubscribersNames.updateThumbModel, this.updateThumbModel),
						this.trackModel.subscribe(
							i.SubscribersNames.updateTrackFillView,
							this.updateTrackFillView,
						);
				};
			},
			1932: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(5015)),
					s = i(n(5302));
				t.default = class {
					constructor(e, t) {
						(this.root = e),
							(this.DOMroot = document.querySelector(e)),
							(this.params = (0, s.default)(t, this.DOMroot)),
							(this.presenter = new r.default(e, (0, s.default)(t, this.DOMroot))),
							this.init(this.params, 'init');
					}
					init(e, t) {
						this.presenter.init(e, t);
					}
				};
			},
			8892: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(6746)),
					s = i(n(4617)),
					o = i(n(4524)),
					a = i(n(4002)),
					u = i(n(9336)),
					l = i(n(7348)),
					c = i(n(2755)),
					f = i(n(3543)),
					d = i(n(9347)),
					h = i(n(1181)),
					p = i(n(2578));
				class m extends o.default {
					constructor(e) {
						super(),
							(this.DOMroot = e),
							(this.thumbView = new r.default(this)),
							(this.trackView = new s.default(this)),
							(this.scaleView = new a.default(this)),
							(this.fillView = new u.default(this)),
							(this.tipView = new f.default(this)),
							(this.ends = { min: 0, max: 0 }),
							(this.size = 200),
							(this.isRange = !1),
							(this.direction = 'horizontal'),
							(this.hasFill = !0),
							(this.hasTips = !0),
							(this.hasScale = !0),
							(this.offsetDirection = 'left'),
							(this.fillDirection = 'width'),
							(this.initialThumbPlacement = l.default.bind(this)),
							(this.initialFillPlacement = c.default.bind(this)),
							(this.initialTipPlacement = d.default.bind(this)),
							(this.prepareDirectionForInteraction = h.default.bind(this)),
							(this.calculateCursorCoordinate = p.default.bind(this));
					}
					setState({
						isRange: e,
						direction: t,
						ends: n,
						size: i,
						hasTips: r,
						hasScale: s,
						hasFill: o,
					}) {
						(this.ends = n),
							(this.size = i),
							(this.isRange = e),
							(this.direction = t),
							(this.hasTips = r),
							(this.hasFill = o),
							(this.hasScale = s);
					}
					setFillState({ fillSize: e, fillOffset: t }) {
						this.fillView.setSize(e), this.fillView.setOffset(t);
					}
				}
				t.default = m;
			},
			9336: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(4524)),
					s = i(n(9110));
				class o extends r.default {
					constructor(e) {
						super(),
							(this.fill = document.querySelector('.slider__fill')),
							(this.view = e),
							(this.size = 0),
							(this.offset = 0),
							(this.updateFill = s.default.bind(this));
					}
					setSize(e) {
						this.size = e;
					}
					setOffset(e) {
						this.offset = e;
					}
					getSize() {
						return this.size;
					}
					getOffset() {
						return this.offset;
					}
					createFill(e) {
						const t = document.createElement('div');
						t.classList.add('slider__fill'),
							t.classList.add(`slider__fill_${e}`),
							(t.dataset.testid = 'test-fill'),
							(this.fill = t),
							this.view.DOMroot.appendChild(t);
					}
				}
				t.default = o;
			},
			9110: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function () {
						this.view.isRange
							? ((this.fill.style[this.view.offsetDirection] = `${this.getOffset()}%`),
							  (this.fill.style[this.view.fillDirection] = `${this.getSize()}%`))
							: (this.fill.style[this.view.fillDirection] = `${this.getSize()}%`);
					});
			},
			4002: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(3025));
				t.default = class {
					constructor(e) {
						(this.view = e),
							(this.scale = document.querySelector('.slider__scale')),
							(this.createScaleMarks = r.default.bind(this));
					}
					createScale(e) {
						const t = document.createElement('div');
						t.classList.add('slider__scale'),
							t.classList.add(`slider__scale_${e}`),
							(t.dataset.testid = 'test-scale'),
							(this.scale = t),
							this.view.DOMroot.appendChild(t);
					}
				};
			},
			3025: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(4396));
				t.default = function (e, t, n, i) {
					const s = (0, r.default)(n, t, e);
					'vertical' === i && s.reverse();
					for (let e = 0; e < s.length; e += 1) {
						const t = document.createElement('div');
						t.classList.add('slider__scale-mark'),
							t.classList.add(`slider__scale-mark_${i}`),
							(t.dataset.testid = 'test-scale-mark');
						const n = document.createElement('div');
						n.classList.add('slider__scale-number'),
							n.classList.add(`slider__scale-number_${i}`),
							(n.innerHTML = s[e].toString()),
							t.appendChild(n),
							this.scale.appendChild(t);
					}
				};
			},
			4396: (e, t) => {
				'use strict';
				function n(e, t) {
					for (let n = 0; n < t.length; n += 1) if (e % t[n] == 0) return t[n];
					return n(e - 1, t);
				}
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t, i) {
						const r = Math.round((t - e) / i + 1),
							s = r - 1,
							o = n(s, [3, 5, 7, 11]);
						let a = Math.max(Math.floor(s / o), 1);
						a = a < 15 ? Math.min(a, o) : a;
						const u = [];
						for (let t = 0; t < Math.ceil(r / a); t += 1) u.push(+(i * t * a + e).toFixed(3));
						return u;
					});
			},
			6746: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(4524)),
					s = i(n(9085)),
					o = i(n(7989)),
					a = i(n(247));
				class u extends r.default {
					constructor(e) {
						super(),
							(this.view = e),
							(this.step = 0),
							(this.stepPercent = 0),
							(this.stepCount = 0),
							(this.value = []),
							(this.offset = []),
							(this.isDecimal = !1),
							(this.decimalPlaces = 0),
							(this.activeStance = 0),
							(this.thumbs = []),
							(this.updateThumbPosition = s.default.bind(this)),
							(this.validateCollision = o.default.bind(this)),
							(this.dragAndDropThumb = a.default.bind(this));
					}
					createThumb(e) {
						const t = document.createElement('div');
						t.classList.add('slider__thumb'),
							t.classList.add(`slider__thumb-${e}`),
							(t.dataset.testid = `test-thumb-${e}`),
							this.thumbs.push(t),
							this.view.DOMroot.appendChild(t);
					}
					setStep(e, t, n) {
						(this.step = e), (this.stepPercent = t), (this.stepCount = n);
					}
					getStep() {
						return { step: this.step, stepPercent: this.stepPercent, stepCount: this.stepCount };
					}
					setValue(e, t) {
						this.value[t] = e;
					}
					getValue() {
						return this.value;
					}
					setOffset(e, t) {
						this.offset[t] = e;
					}
					getOffset() {
						return this.offset;
					}
					setIsDecimal(e, t) {
						this.decimalPlaces = e ? t : 0;
					}
				}
				t.default = u;
			},
			247: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(5422));
				t.default = function (e) {
					const t = this.view.DOMroot.querySelector(`.slider__thumb-${e}`),
						n = t => {
							(0, r.default)(t, this, e);
						},
						i = e => {
							e.preventDefault(), e.stopPropagation(), document.addEventListener('pointermove', n);
						};
					t.addEventListener('pointerdown', i),
						t.addEventListener('touchstart', i),
						document.addEventListener('pointerup', () => {
							document.removeEventListener('pointermove', n);
						});
				};
			},
			5422: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3502);
				t.default = function (e, t, n) {
					const { direction: r } = t.view,
						s = 'horizontal' === r ? e.pageX : e.pageY,
						o = t.view.calculateCursorCoordinate(s, r, t.view.DOMroot, t.view.size),
						a = t.view.isRange ? t.validateCollision(n) : n;
					t.notify(i.SubscribersNames.updateThumbModel, a, o, r, t.view.size),
						t.notify(i.SubscribersNames.updateTrackFillModel, t.getOffset());
				};
			},
			9085: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t) {
						this.thumbs[t].style[this.view.offsetDirection] = `${e}%`;
					});
			},
			7989: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3553);
				t.default = function (e) {
					const t = +!e;
					if (e === i.FIRST_THUMB_STANCE) {
						if (this.getValue()[i.FIRST_VALUE] > this.getValue()[i.SECOND_VALUE])
							return this.setOffset(i.SECOND_THUMB_STANCE, this.getOffset()[i.FIRST_OFFSET]), t;
					} else if (this.getValue()[i.SECOND_VALUE] < this.getValue()[i.FIRST_VALUE])
						return this.setOffset(i.FIRST_THUMB_STANCE, this.getOffset()[i.SECOND_OFFSET]), t;
					return e;
				};
			},
			3543: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(4524)),
					s = i(n(8106));
				class o extends r.default {
					constructor(e) {
						super(),
							(this.view = e),
							(this.offset = []),
							(this.tips = []),
							(this.value = []),
							(this.updateTipsPosition = s.default.bind(this));
					}
					setOffset(e, t) {
						this.offset[t] = e;
					}
					getOffset() {
						return this.offset;
					}
					setValue(e, t) {
						this.value[t] = e;
					}
					getValue() {
						return this.value;
					}
					createTip(e, t) {
						const n = document.createElement('div');
						n.classList.add('slider__tip'),
							n.classList.add(`slider__tip-${t}`),
							n.classList.add(`slider__tip_${e}`),
							(n.dataset.testid = 'test-tip'),
							this.tips.push(n),
							this.view.DOMroot.appendChild(n);
					}
				}
				t.default = o;
			},
			8106: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e) {
						0 !== this.tips.length &&
							((this.tips[e].style[this.view.offsetDirection] = `${this.getOffset()[e]}%`),
							(this.tips[e].innerHTML = this.getValue()[e].toFixed(
								this.view.thumbView.decimalPlaces,
							)));
					});
			},
			4617: function (e, t, n) {
				'use strict';
				var i =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, '__esModule', { value: !0 });
				const r = i(n(8050)),
					s = i(n(4524));
				class o extends s.default {
					constructor(e) {
						super(), (this.view = e), (this.track = document.querySelector('.slider__track'));
					}
					createTrack(e) {
						const t = document.createElement('div');
						t.classList.add('slider__track'),
							t.classList.add(`slider__track_${e}`),
							(t.dataset.testid = 'test-track'),
							(this.track = t),
							this.view.DOMroot.appendChild(t);
					}
					clickTrack() {
						this.view.DOMroot.addEventListener('mousedown', e => (0, r.default)(e, this));
					}
				}
				t.default = o;
			},
			8050: (e, t, n) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 });
				const i = n(3502);
				t.default = function (e, t) {
					const { direction: n } = t.view,
						r = 'horizontal' === n ? e.pageX : e.pageY,
						s = t.view.calculateCursorCoordinate(r, n, t.view.DOMroot, t.view.size);
					t.notify(i.SubscribersNames.updateThumbModelBeforeTrackClick, s),
						t.notify(i.SubscribersNames.updateTrackFillModel, t.view.thumbView.getOffset());
				};
			},
			2578: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t, n, i) {
						return 'horizontal' === t
							? ((e - n.offsetLeft) / i) * 100
							: ((e - n.offsetTop) / i) * 100;
					});
			},
			2755: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function () {
						this.fillView.updateFill();
					});
			},
			7348: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e, t) {
						this.thumbView.updateThumbPosition(e, t);
					});
			},
			9347: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e) {
						this.tipView.updateTipsPosition(e);
					});
			},
			1181: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = function (e) {
						(this.offsetDirection = 'horizontal' === e ? 'left' : 'top'),
							(this.fillDirection = 'horizontal' === e ? 'width' : 'height');
					});
			},
			3553: (e, t) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.SECOND_OFFSET =
						t.FIRST_OFFSET =
						t.MIN_OFFSET =
						t.MAX_OFFSET =
						t.SECOND_VALUE =
						t.FIRST_VALUE =
						t.SECOND_THUMB_STANCE =
						t.FIRST_THUMB_STANCE =
						t.DEFAULT_SLIDER_PARAMS =
							void 0),
					(t.DEFAULT_SLIDER_PARAMS = {
						min: 0,
						max: 100,
						step: 10,
						value: [0],
						isRange: !1,
						direction: 'horizontal',
						hasFill: !0,
						hasTips: !0,
						hasScale: !0,
						isDecimal: !1,
						decimalPlaces: 0,
					}),
					(t.FIRST_THUMB_STANCE = 0),
					(t.SECOND_THUMB_STANCE = 1),
					(t.FIRST_VALUE = 0),
					(t.SECOND_VALUE = 1),
					(t.FIRST_OFFSET = 0),
					(t.SECOND_OFFSET = 1),
					(t.MAX_OFFSET = 100),
					(t.MIN_OFFSET = 0);
			},
			3502: (e, t) => {
				'use strict';
				var n;
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.SubscribersNames = void 0),
					(function (e) {
						(e.updateThumbModel = 'UpdateThumbModel'),
							(e.updateTrackFillModel = 'UpdateTrackFillModel'),
							(e.updateThumbModelBeforeTrackClick = 'UpdateThumbModelBeforeTrackClick'),
							(e.updateTipView = 'UpdateTipView'),
							(e.updateThumbView = 'UpdateThumbView'),
							(e.updateTrackFillView = 'UpdateTrackFillView'),
							(e.updatePanelValues = 'UpdatePanelValues');
					})(n || (n = {})),
					(t.SubscribersNames = n);
			},
		}),
		(t = {}),
		(function n(i) {
			var r = t[i];
			if (void 0 !== r) return r.exports;
			var s = (t[i] = { exports: {} });
			return e[i].call(s.exports, s, s.exports, n), s.exports;
		})(1932).default
	);
	var e, t;
});
