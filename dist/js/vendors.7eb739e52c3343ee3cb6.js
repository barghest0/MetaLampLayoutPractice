/*! For license information please see vendors.7eb739e52c3343ee3cb6.js.LICENSE.txt */
(self.webpackChunkpractice = self.webpackChunkpractice || []).push([
  [216],
  {
    183: function (t) {
      t.exports = (function () {
        'use strict';
        var t = {
            d: function (e, i) {
              for (var n in i)
                t.o(i, n) &&
                  !t.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
            },
            o: function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            },
          },
          e = {};
        t.d(e, {
          default: function () {
            return V;
          },
        });
        var i = {
            days: 'days',
            months: 'months',
            years: 'years',
            day: 'day',
            month: 'month',
            year: 'year',
            eventChangeViewDate: 'changeViewDate',
            eventChangeCurrentView: 'changeCurrentView',
            eventChangeFocusDate: 'changeFocusDate',
            eventChangeSelectedDate: 'changeSelectedDate',
            eventChangeTime: 'changeTime',
            eventChangeLastSelectedDate: 'changeLastSelectedDate',
            actionSelectDate: 'selectDate',
            actionUnselectDate: 'unselectDate',
            cssClassWeekend: '-weekend-',
          },
          n = {
            classes: '',
            inline: !1,
            locale: {
              days: [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
              ],
              daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
              daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
              months: [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь',
              ],
              monthsShort: [
                'Янв',
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июн',
                'Июл',
                'Авг',
                'Сен',
                'Окт',
                'Ноя',
                'Дек',
              ],
              today: 'Сегодня',
              clear: 'Очистить',
              dateFormat: 'dd.MM.yyyy',
              timeFormat: 'HH:mm',
              firstDay: 1,
            },
            startDate: new Date(),
            firstDay: '',
            weekends: [6, 0],
            dateFormat: '',
            altField: '',
            altFieldDateFormat: 'T',
            toggleSelected: !0,
            keyboardNav: !0,
            selectedDates: !1,
            container: '',
            isMobile: !1,
            visible: !1,
            position: 'bottom left',
            offset: 12,
            view: i.days,
            minView: i.days,
            showOtherMonths: !0,
            selectOtherMonths: !0,
            moveToOtherMonthsOnSelect: !0,
            showOtherYears: !0,
            selectOtherYears: !0,
            moveToOtherYearsOnSelect: !0,
            minDate: '',
            maxDate: '',
            disableNavWhenOutOfRange: !0,
            multipleDates: !1,
            multipleDatesSeparator: ', ',
            range: !1,
            dynamicRange: !0,
            buttons: !1,
            monthsField: 'monthsShort',
            showEvent: 'focus',
            autoClose: !1,
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
              days: 'MMMM, <i>yyyy</i>',
              months: 'yyyy',
              years: 'yyyy1 - yyyy2',
            },
            timepicker: !1,
            onlyTimepicker: !1,
            dateTimeSeparator: ' ',
            timeFormat: '',
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            onSelect: !1,
            onChangeViewDate: !1,
            onChangeView: !1,
            onRenderCell: !1,
            onShow: !1,
            onHide: !1,
          };
        function s(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
          return 'string' == typeof t ? e.querySelector(t) : t;
        }
        function r() {
          let {
              tagName: t = 'div',
              className: e = '',
              innerHtml: i = '',
              id: n = '',
              attrs: s = {},
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = document.createElement(t);
          if (
            (e && r.classList.add(...e.split(' ')),
            n && (r.id = n),
            i && (r.innerHTML = i),
            s)
          )
            for (let t in s) r.setAttribute(t, s[t]);
          return r;
        }
        function a(t, e) {
          for (let [i, n] of Object.entries(e)) t.setAttribute(i, n);
          return t;
        }
        function o(t) {
          return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
        }
        function l(t) {
          let e = t.getHours(),
            i = e % 12 == 0 ? 12 : e % 12;
          return {
            year: t.getFullYear(),
            month: t.getMonth(),
            fullMonth:
              t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1,
            date: t.getDate(),
            fullDate: t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
            day: t.getDay(),
            hours: e,
            fullHours: c(e),
            hours12: i,
            fullHours12: c(i),
            minutes: t.getMinutes(),
            fullMinutes: t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes(),
          };
        }
        function c(t) {
          return t < 10 ? '0' + t : t;
        }
        function h(t) {
          let e = 10 * Math.floor(t.getFullYear() / 10);
          return [e, e + 9];
        }
        function d() {
          let t = [];
          for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
            i[n] = arguments[n];
          return (
            i.forEach(e => {
              if ('object' == typeof e) for (let i in e) e[i] && t.push(i);
              else e && t.push(e);
            }),
            t.join(' ')
          );
        }
        function u(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
          if (!t || !e) return !1;
          let s = l(t),
            r = l(e);
          return {
            [i.days]: s.date === r.date && s.month === r.month && s.year === r.year,
            [i.months]: s.month === r.month && s.year === r.year,
            [i.years]: s.year === r.year,
          }[n];
        }
        function p(t, e, i) {
          let n = g(t, !1).getTime(),
            s = g(e, !1).getTime();
          return i ? n >= s : n > s;
        }
        function f(t, e) {
          return !p(t, e, !0);
        }
        function g(t) {
          let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = new Date(t.getTime());
          return 'boolean' != typeof e || e || m(i), i;
        }
        function m(t) {
          return t.setHours(0, 0, 0, 0), t;
        }
        function v(t, e, i) {
          t.length
            ? t.forEach(t => {
                t.addEventListener(e, i);
              })
            : t.addEventListener(e, i);
        }
        function b(t, e) {
          return (
            !(!t || t === document || t instanceof DocumentFragment) &&
            (t.matches(e) ? t : b(t.parentNode, e))
          );
        }
        function y(t, e, i) {
          return t > i ? i : t < e ? e : t;
        }
        function x(t) {
          for (
            var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            i[n - 1] = arguments[n];
          return (
            i
              .filter(t => t)
              .forEach(e => {
                for (let [i, n] of Object.entries(e))
                  if (void 0 !== n && '[object Object]' === n.toString()) {
                    let e = void 0 !== t[i] ? t[i].toString() : void 0,
                      s = n.toString(),
                      r = Array.isArray(n) ? [] : {};
                    (t[i] = t[i] ? (e !== s ? r : t[i]) : r), x(t[i], n);
                  } else t[i] = n;
              }),
            t
          );
        }
        function w(t) {
          let e = t;
          return (
            t instanceof Date || (e = new Date(t)),
            isNaN(e.getTime()) &&
              (console.log('Unable to convert value "'.concat(t, '" to Date object')),
              (e = !1)),
            e
          );
        }
        function _(t) {
          let e = '\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;';
          return new RegExp('(^|>|' + e + ')(' + t + ')($|<|' + e + ')', 'g');
        }
        function k(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        class C {
          constructor() {
            let {
              type: t,
              date: e,
              dp: i,
              opts: n,
              body: s,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            k(this, 'focus', () => {
              this.$cell.classList.add('-focus-'), (this.focused = !0);
            }),
              k(this, 'removeFocus', () => {
                this.$cell.classList.remove('-focus-'), (this.focused = !1);
              }),
              k(this, 'select', () => {
                this.$cell.classList.add('-selected-'), (this.selected = !0);
              }),
              k(this, 'removeSelect', () => {
                this.$cell.classList.remove('-selected-', '-range-from-', '-range-to-'),
                  (this.selected = !1);
              }),
              k(this, 'onChangeSelectedDate', () => {
                this.isDisabled ||
                  (this._handleSelectedStatus(),
                  this.opts.range && this._handleRangeStatus());
              }),
              k(this, 'onChangeFocusDate', t => {
                if (!t) return void (this.focused && this.removeFocus());
                let e = u(t, this.date, this.type);
                e ? this.focus() : !e && this.focused && this.removeFocus(),
                  this.opts.range && this._handleRangeStatus();
              }),
              k(
                this,
                'render',
                () => (
                  (this.$cell.innerHTML = this._getHtml()),
                  (this.$cell.adpCell = this),
                  this.$cell
                ),
              ),
              (this.type = t),
              (this.singleType = this.type.slice(0, -1)),
              (this.date = e),
              (this.dp = i),
              (this.opts = n),
              (this.body = s),
              (this.customData = !1),
              this.init();
          }
          init() {
            let { range: t, onRenderCell: e } = this.opts;
            e &&
              (this.customData = e({
                date: this.date,
                cellType: this.singleType,
                datepicker: this.dp,
              })),
              this._createElement(),
              this._bindDatepickerEvents(),
              this._handleInitialFocusStatus(),
              this.dp.hasSelectedDates &&
                (this._handleSelectedStatus(), t && this._handleRangeStatus());
          }
          _bindDatepickerEvents() {
            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
              this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
          }
          unbindDatepickerEvents() {
            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
              this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
          }
          _createElement() {
            let { year: t, month: e, date: i } = l(this.date);
            this.$cell = r({
              className: this._getClassName(),
              attrs: { 'data-year': t, 'data-month': e, 'data-date': i },
            });
          }
          _getClassName() {
            var t, e;
            let n = new Date(),
              { selectOtherMonths: s, selectOtherYears: r } = this.opts,
              { minDate: a, maxDate: o } = this.dp,
              { day: c } = l(this.date),
              h = this._isOutOfMinMaxRange(),
              p = null === (t = this.customData) || void 0 === t ? void 0 : t.disabled,
              f = d('air-datepicker-cell', '-'.concat(this.singleType, '-'), {
                '-current-': u(n, this.date, this.type),
                '-min-date-': a && u(a, this.date, this.type),
                '-max-date-': o && u(o, this.date, this.type),
              }),
              g = '';
            switch (this.type) {
              case i.days:
                g = d({
                  '-weekend-': this.dp.isWeekend(c),
                  '-other-month-': this.isOtherMonth,
                  '-disabled-': (this.isOtherMonth && !s) || h || p,
                });
                break;
              case i.months:
                g = d({ '-disabled-': h || p });
                break;
              case i.years:
                g = d({
                  '-other-decade-': this.isOtherDecade,
                  '-disabled-': h || (this.isOtherDecade && !r) || p,
                });
            }
            return d(
              f,
              g,
              null === (e = this.customData) || void 0 === e ? void 0 : e.classes,
            );
          }
          _getHtml() {
            var t;
            let { year: e, month: n, date: s } = l(this.date),
              { showOtherMonths: r, showOtherYears: a } = this.opts;
            if (null !== (t = this.customData) && void 0 !== t && t.html)
              return this.customData.html;
            switch (this.type) {
              case i.days:
                return !r && this.isOtherMonth ? '' : s;
              case i.months:
                return this.dp.locale[this.opts.monthsField][n];
              case i.years:
                return !a && this.isOtherDecade ? '' : e;
            }
          }
          _isOutOfMinMaxRange() {
            let { minDate: t, maxDate: e } = this.dp,
              { type: n, date: s } = this,
              { month: r, year: a, date: o } = l(s),
              c = n === i.days,
              h = n === i.years,
              d = !!t && new Date(a, h ? t.getMonth() : r, c ? o : t.getDate()),
              u = !!e && new Date(a, h ? e.getMonth() : r, c ? o : e.getDate());
            return t && e ? f(d, t) || p(u, e) : t ? f(d, t) : e ? p(u, e) : void 0;
          }
          destroy() {
            this.unbindDatepickerEvents();
          }
          _handleRangeStatus() {
            let { rangeDateFrom: t, rangeDateTo: e } = this.dp,
              i = d({
                '-in-range-':
                  t && e && ((n = this.date), (s = t), (r = e), p(n, s) && f(n, r)),
                '-range-from-': t && u(this.date, t, this.type),
                '-range-to-': e && u(this.date, e, this.type),
              });
            var n, s, r;
            this.$cell.classList.remove('-range-from-', '-range-to-', '-in-range-'),
              i && this.$cell.classList.add(...i.split(' '));
          }
          _handleSelectedStatus() {
            let t = this.dp._checkIfDateIsSelected(this.date, this.type);
            t ? this.select() : !t && this.selected && this.removeSelect();
          }
          _handleInitialFocusStatus() {
            u(this.dp.focusDate, this.date, this.type) && this.focus();
          }
          get isDisabled() {
            return this.$cell.matches('.-disabled-');
          }
          get isOtherMonth() {
            return this.dp.isOtherMonth(this.date);
          }
          get isOtherDecade() {
            return this.dp.isOtherDecade(this.date);
          }
        }
        function S(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        let T = {
          [i.days]:
            '<div class="air-datepicker-body--day-names"></div>' +
            '<div class="air-datepicker-body--cells -'.concat(i.days, '-"></div>'),
          [i.months]: '<div class="air-datepicker-body--cells -'.concat(
            i.months,
            '-"></div>',
          ),
          [i.years]: '<div class="air-datepicker-body--cells -'.concat(
            i.years,
            '-"></div>',
          ),
        };
        class D {
          constructor(t) {
            let { dp: e, type: n, opts: s } = t;
            S(this, 'handleClick', t => {
              let e = b(t.target, '.air-datepicker-cell');
              if (!e) return;
              let i = e.adpCell;
              if (i.isDisabled) return;
              if (!this.dp.isMinViewReached) return void this.dp.down();
              let n = this.dp._checkIfDateIsSelected(i.date, i.type);
              n
                ? this.dp._handleAlreadySelectedDates(n, i.date)
                : this.dp.selectDate(i.date);
            }),
              S(this, 'onChangeCurrentView', t => {
                t !== this.type ? this.hide() : (this.show(), this.render());
              }),
              S(this, 'onMouseOverCell', t => {
                let e = b(t.target, '.air-datepicker-cell');
                this.dp.setFocusDate(!!e && e.adpCell.date);
              }),
              S(this, 'onMouseOutCell', () => {
                this.dp.setFocusDate(!1);
              }),
              S(this, 'onClickCell', t => {
                this.handleClick(t);
              }),
              S(this, 'onMouseDown', t => {
                this.pressed = !0;
                let e = b(t.target, '.air-datepicker-cell'),
                  i = e && e.adpCell;
                u(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0),
                  u(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
              }),
              S(this, 'onMouseMove', t => {
                if (!this.pressed || !this.dp.isMinViewReached) return;
                t.preventDefault();
                let e = b(t.target, '.air-datepicker-cell'),
                  i = e && e.adpCell,
                  { selectedDates: n, rangeDateTo: s, rangeDateFrom: r } = this.dp;
                if (!i || i.isDisabled) return;
                let { date: a } = i;
                if (2 === n.length) {
                  if (this.rangeFromFocused && !p(a, s)) {
                    let { hours: t, minutes: e } = l(r);
                    a.setHours(t),
                      a.setMinutes(e),
                      (this.dp.rangeDateFrom = a),
                      this.dp.replaceDate(r, a);
                  }
                  if (this.rangeToFocused && !f(a, r)) {
                    let { hours: t, minutes: e } = l(s);
                    a.setHours(t),
                      a.setMinutes(e),
                      (this.dp.rangeDateTo = a),
                      this.dp.replaceDate(s, a);
                  }
                }
              }),
              S(this, 'onMouseUp', () => {
                (this.pressed = !1),
                  (this.rangeFromFocused = !1),
                  (this.rangeToFocused = !1);
              }),
              S(this, 'onChangeViewDate', (t, e) => {
                if (!this.isVisible) return;
                let n = h(t),
                  s = h(e);
                switch (this.dp.currentView) {
                  case i.days:
                    if (u(t, e, i.months)) return;
                    break;
                  case i.months:
                    if (u(t, e, i.years)) return;
                    break;
                  case i.years:
                    if (n[0] === s[0] && n[1] === s[1]) return;
                }
                this.render();
              }),
              S(this, 'render', () => {
                this.destroyCells(),
                  this._generateCells(),
                  this.cells.forEach(t => {
                    this.$cells.appendChild(t.render());
                  });
              }),
              (this.dp = e),
              (this.type = n),
              (this.opts = s),
              (this.cells = []),
              (this.$el = ''),
              (this.pressed = !1),
              (this.isVisible = !0),
              this.init();
          }
          init() {
            this._buildBaseHtml(),
              this.type === i.days && this.renderDayNames(),
              this.render(),
              this._bindEvents(),
              this._bindDatepickerEvents();
          }
          _bindEvents() {
            let { range: t, dynamicRange: e } = this.opts;
            v(this.$el, 'mouseover', this.onMouseOverCell),
              v(this.$el, 'mouseout', this.onMouseOutCell),
              v(this.$el, 'click', this.onClickCell),
              t &&
                e &&
                (v(this.$el, 'mousedown', this.onMouseDown),
                v(this.$el, 'mousemove', this.onMouseMove),
                v(window.document, 'mouseup', this.onMouseUp));
          }
          _bindDatepickerEvents() {
            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
              this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
          }
          _buildBaseHtml() {
            (this.$el = r({
              className: 'air-datepicker-body -'.concat(this.type, '-'),
              innerHtml: T[this.type],
            })),
              (this.$names = s('.air-datepicker-body--day-names', this.$el)),
              (this.$cells = s('.air-datepicker-body--cells', this.$el));
          }
          _getDayNamesHtml() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.dp.locale.firstDay,
              e = '',
              n = this.dp.isWeekend,
              s = t,
              r = 0;
            for (; r < 7; ) {
              let t = s % 7,
                a = d('air-datepicker-body--day-name', { [i.cssClassWeekend]: n(t) }),
                o = this.dp.locale.daysMin[t];
              (e += '<div class="'.concat(a, '">').concat(o, '</div>')), r++, s++;
            }
            return e;
          }
          _getDaysCells() {
            let {
                viewDate: t,
                locale: { firstDay: e },
              } = this.dp,
              i = o(t),
              { year: n, month: s } = l(t),
              r = new Date(n, s, 1),
              a = new Date(n, s, i),
              c = r.getDay() - e,
              h = 6 - a.getDay() + e;
            (c = c < 0 ? c + 7 : c), (h = h > 6 ? h - 7 : h);
            let d = (function (t, e) {
                let { year: i, month: n, date: s } = l(t);
                return new Date(i, n, s - e);
              })(r, c),
              u = i + c + h,
              p = d.getDate(),
              { year: f, month: g } = l(d),
              m = 0;
            for (; m < u; ) {
              let t = new Date(f, g, p + m);
              this._generateCell(t), m++;
            }
          }
          _generateCell(t) {
            let { type: e, dp: i, opts: n } = this,
              s = new C({ type: e, dp: i, opts: n, date: t, body: this });
            return this.cells.push(s), s;
          }
          _generateDayCells() {
            this._getDaysCells();
          }
          _generateMonthCells() {
            let { year: t } = this.dp.parsedViewDate,
              e = 0;
            for (; e < 12; ) this.cells.push(this._generateCell(new Date(t, e))), e++;
          }
          _generateYearCells() {
            let t = h(this.dp.viewDate),
              e = t[0] - 1,
              i = t[1] + 1,
              n = e;
            for (; n <= i; ) this.cells.push(this._generateCell(new Date(n, 0))), n++;
          }
          renderDayNames() {
            this.$names.innerHTML = this._getDayNamesHtml();
          }
          _generateCells() {
            switch (this.type) {
              case i.days:
                this._generateDayCells();
                break;
              case i.months:
                this._generateMonthCells();
                break;
              case i.years:
                this._generateYearCells();
            }
          }
          show() {
            (this.isVisible = !0), this.$el.classList.remove('-hidden-');
          }
          hide() {
            (this.isVisible = !1), this.$el.classList.add('-hidden-');
          }
          destroyCells() {
            this.cells.forEach(t => t.destroy()),
              (this.cells = []),
              (this.$cells.innerHTML = '');
          }
          destroy() {
            this.destroyCells(),
              this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
              this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
          }
        }
        function M(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        class E {
          constructor(t) {
            let { dp: e, opts: i } = t;
            M(this, 'onClickNav', t => {
              let e = b(t.target, '.air-datepicker-nav--action');
              if (!e) return;
              let i = e.dataset.action;
              this.dp[i]();
            }),
              M(this, 'onChangeViewDate', () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }),
              M(this, 'onChangeCurrentView', () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }),
              M(this, 'onClickNavTitle', () => {
                this.dp.isFinalView || this.dp.up();
              }),
              M(this, 'update', () => {
                let { prevHtml: t, nextHtml: e } = this.opts;
                (this.$prev.innerHTML = t),
                  (this.$next.innerHTML = e),
                  this._resetNavStatus(),
                  this.render(),
                  this.handleNavStatus();
              }),
              M(this, 'renderDelay', () => {
                setTimeout(this.render);
              }),
              M(this, 'render', () => {
                (this.$title.innerHTML = this._getTitle()),
                  (function (t, e) {
                    for (let i in e) e[i] ? t.classList.add(i) : t.classList.remove(i);
                  })(this.$title, { '-disabled-': this.dp.isFinalView });
              }),
              (this.dp = e),
              (this.opts = i),
              this.init();
          }
          init() {
            this._createElement(),
              this._buildBaseHtml(),
              this._defineDOM(),
              this.render(),
              this.handleNavStatus(),
              this._bindEvents(),
              this._bindDatepickerEvents();
          }
          _defineDOM() {
            (this.$title = s('.air-datepicker-nav--title', this.$el)),
              (this.$prev = s('[data-action="prev"]', this.$el)),
              (this.$next = s('[data-action="next"]', this.$el));
          }
          _bindEvents() {
            this.$el.addEventListener('click', this.onClickNav),
              this.$title.addEventListener('click', this.onClickNavTitle);
          }
          _bindDatepickerEvents() {
            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
              this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView),
              this.isNavIsFunction &&
                (this.dp.on(i.eventChangeSelectedDate, this.renderDelay),
                this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
          }
          destroy() {
            this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
              this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView),
              this.isNavIsFunction &&
                (this.dp.off(i.eventChangeSelectedDate, this.renderDelay),
                this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
          }
          _createElement() {
            this.$el = r({ tagName: 'nav', className: 'air-datepicker-nav' });
          }
          _getTitle() {
            let { dp: t, opts: e } = this,
              i = e.navTitles[t.currentView];
            return 'function' == typeof i ? i(t) : t.formatDate(t.viewDate, i);
          }
          handleNavStatus() {
            let { disableNavWhenOutOfRange: t } = this.opts,
              { minDate: e, maxDate: n } = this.dp;
            if ((!e && !n) || !t) return;
            let { year: s, month: r } = this.dp.parsedViewDate,
              a = !!e && l(e),
              o = !!n && l(n);
            switch (this.dp.currentView) {
              case i.days:
                e && a.month >= r && a.year >= s && this._disableNav('prev'),
                  n && o.month <= r && o.year <= s && this._disableNav('next');
                break;
              case i.months:
                e && a.year >= s && this._disableNav('prev'),
                  n && o.year <= s && this._disableNav('next');
                break;
              case i.years: {
                let t = h(this.dp.viewDate);
                e && a.year >= t[0] && this._disableNav('prev'),
                  n && o.year <= t[1] && this._disableNav('next');
                break;
              }
            }
          }
          _disableNav(t) {
            s('[data-action="' + t + '"]', this.$el).classList.add('-disabled-');
          }
          _resetNavStatus() {
            !(function (t) {
              for (
                var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
                n < e;
                n++
              )
                i[n - 1] = arguments[n];
              t.length
                ? t.forEach(t => {
                    t.classList.remove(...i);
                  })
                : t.classList.remove(...i);
            })(this.$el.querySelectorAll('.air-datepicker-nav--action'), '-disabled-');
          }
          _buildBaseHtml() {
            let { prevHtml: t, nextHtml: e } = this.opts;
            this.$el.innerHTML =
              '<div class="air-datepicker-nav--action" data-action="prev">'.concat(
                t,
                '</div>',
              ) +
              '<div class="air-datepicker-nav--title"></div>' +
              '<div class="air-datepicker-nav--action" data-action="next">'.concat(
                e,
                '</div>',
              );
          }
          get isNavIsFunction() {
            let { navTitles: t } = this.opts;
            return Object.keys(t).find(e => 'function' == typeof t[e]);
          }
        }
        var P = {
          today: {
            content: t => t.locale.today,
            onClick: t => t.setViewDate(new Date()),
          },
          clear: { content: t => t.locale.clear, onClick: t => t.clear() },
        };
        class A {
          constructor(t) {
            let { dp: e, opts: i } = t;
            (this.dp = e), (this.opts = i), this.init();
          }
          init() {
            this.createElement(), this.render();
          }
          createElement() {
            this.$el = r({ className: 'air-datepicker-buttons' });
          }
          destroy() {
            this.$el.parentNode.removeChild(this.$el);
          }
          clearHtml() {
            return (this.$el.innerHTML = ''), this;
          }
          generateButtons() {
            let { buttons: t } = this.opts;
            Array.isArray(t) || (t = [t]),
              t.forEach(t => {
                let e = t;
                'string' == typeof t && P[t] && (e = P[t]);
                let i = this.createButton(e);
                e.onClick && this.attachEventToButton(i, e.onClick),
                  this.$el.appendChild(i);
              });
          }
          attachEventToButton(t, e) {
            t.addEventListener('click', () => {
              e(this.dp);
            });
          }
          createButton(t) {
            let { content: e, className: i, tagName: n = 'button', attrs: s = {} } = t,
              a = 'function' == typeof e ? e(this.dp) : e;
            return r({
              tagName: n,
              innerHtml: "<span tabindex='-1'>".concat(a, '</span>'),
              className: d('air-datepicker-button', i),
              attrs: s,
            });
          }
          render() {
            this.generateButtons();
          }
        }
        function L(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        class O {
          constructor() {
            let { opts: t, dp: e } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            L(this, 'toggleTimepickerIsActive', t => {
              this.dp.timepickerIsActive = t;
            }),
              L(this, 'onChangeSelectedDate', t => {
                let { date: e, updateTime: i = !1 } = t;
                e &&
                  (this.setMinMaxTime(e),
                  this.setCurrentTime(!!i && e),
                  this.addTimeToDate(e));
              }),
              L(this, 'onChangeLastSelectedDate', t => {
                t && (this.setTime(t), this.render());
              }),
              L(this, 'onChangeInputRange', t => {
                let e = t.target;
                (this[e.getAttribute('name')] = e.value),
                  this.updateText(),
                  this.dp.trigger(i.eventChangeTime, {
                    hours: this.hours,
                    minutes: this.minutes,
                  });
              }),
              L(this, 'onMouseEnterLeave', t => {
                let e = t.target.getAttribute('name'),
                  i = this.$minutesText;
                'hours' === e && (i = this.$hoursText), i.classList.toggle('-focus-');
              }),
              L(this, 'onFocus', () => {
                this.toggleTimepickerIsActive(!0);
              }),
              L(this, 'onBlur', () => {
                this.toggleTimepickerIsActive(!1);
              }),
              (this.opts = t),
              (this.dp = e);
            let { timeFormat: n } = this.dp.locale;
            n && (n.match(_('h')) || n.match(_('hh'))) && (this.ampm = !0), this.init();
          }
          init() {
            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
              this.createElement(),
              this.buildHtml(),
              this.defineDOM(),
              this.render(),
              this.bindDatepickerEvents(),
              this.bindDOMEvents();
          }
          bindDatepickerEvents() {
            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
              this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
          }
          bindDOMEvents() {
            let t = 'input';
            navigator.userAgent.match(/trident/gi) && (t = 'change'),
              v(this.$ranges, t, this.onChangeInputRange),
              v(this.$ranges, 'mouseenter', this.onMouseEnterLeave),
              v(this.$ranges, 'mouseleave', this.onMouseEnterLeave),
              v(this.$ranges, 'focus', this.onFocus),
              v(this.$ranges, 'mousedown', this.onFocus),
              v(this.$ranges, 'blur', this.onBlur);
          }
          createElement() {
            this.$el = r({
              className: d('air-datepicker-time', { '-am-pm-': this.dp.ampm }),
            });
          }
          destroy() {
            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
              this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate),
              this.$el.parentNode.removeChild(this.$el);
          }
          buildHtml() {
            let {
              ampm: t,
              hours: e,
              displayHours: i,
              minutes: n,
              minHours: s,
              minMinutes: r,
              maxHours: a,
              maxMinutes: o,
              dayPeriod: l,
              opts: { hoursStep: h, minutesStep: d },
            } = this;
            this.$el.innerHTML =
              '<div class="air-datepicker-time--current">' +
              '   <span class="air-datepicker-time--current-hours">'.concat(
                c(i),
                '</span>',
              ) +
              '   <span class="air-datepicker-time--current-colon">:</span>' +
              '   <span class="air-datepicker-time--current-minutes">'.concat(
                c(n),
                '</span>',
              ) +
              '   '.concat(
                t
                  ? "<span class='air-datepicker-time--current-ampm'>".concat(
                      l,
                      '</span>',
                    )
                  : '',
              ) +
              '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
              '      <input type="range" name="hours" value="'
                .concat(e, '" min="')
                .concat(s, '" max="')
                .concat(a, '" step="')
                .concat(h, '"/>') +
              '   </div>   <div class="air-datepicker-time--row">' +
              '      <input type="range" name="minutes" value="'
                .concat(n, '" min="')
                .concat(r, '" max="')
                .concat(o, '" step="')
                .concat(d, '"/>') +
              '   </div></div>';
          }
          defineDOM() {
            let t = t => s(t, this.$el);
            (this.$ranges = this.$el.querySelectorAll('[type="range"]')),
              (this.$hours = t('[name="hours"]')),
              (this.$minutes = t('[name="minutes"]')),
              (this.$hoursText = t('.air-datepicker-time--current-hours')),
              (this.$minutesText = t('.air-datepicker-time--current-minutes')),
              (this.$ampm = t('.air-datepicker-time--current-ampm'));
          }
          setTime(t) {
            this.setMinMaxTime(t), this.setCurrentTime(t);
          }
          addTimeToDate(t) {
            t && (t.setHours(this.hours), t.setMinutes(this.minutes));
          }
          setMinMaxTime(t) {
            if ((this.setMinMaxTimeFromOptions(), t)) {
              let { minDate: e, maxDate: i } = this.dp;
              e && u(t, e) && this.setMinTimeFromMinDate(e),
                i && u(t, i) && this.setMaxTimeFromMaxDate(i);
            }
          }
          setCurrentTime(t) {
            let { hours: e, minutes: i } = t ? l(t) : this;
            (this.hours = y(e, this.minHours, this.maxHours)),
              (this.minutes = y(i, this.minMinutes, this.maxMinutes));
          }
          setMinMaxTimeFromOptions() {
            let { minHours: t, minMinutes: e, maxHours: i, maxMinutes: n } = this.opts;
            (this.minHours = y(t, 0, 23)),
              (this.minMinutes = y(e, 0, 59)),
              (this.maxHours = y(i, 0, 23)),
              (this.maxMinutes = y(n, 0, 59));
          }
          setMinTimeFromMinDate(t) {
            let { lastSelectedDate: e } = this.dp;
            (this.minHours = t.getHours()),
              e && e.getHours() > t.getHours()
                ? (this.minMinutes = this.opts.minMinutes)
                : (this.minMinutes = t.getMinutes());
          }
          setMaxTimeFromMaxDate(t) {
            let { lastSelectedDate: e } = this.dp;
            (this.maxHours = t.getHours()),
              e && e.getHours() < t.getHours()
                ? (this.maxMinutes = this.opts.maxMinutes)
                : (this.maxMinutes = t.getMinutes());
          }
          getDayPeriod(t, e) {
            let i = t,
              n = Number(t);
            t instanceof Date && ((i = l(t)), (n = Number(i.hours)));
            let s = 'am';
            if (e || this.ampm) {
              switch (!0) {
                case 12 === n:
                case n > 11:
                  s = 'pm';
              }
              n = n % 12 == 0 ? 12 : n % 12;
            }
            return { hours: n, dayPeriod: s };
          }
          updateSliders() {
            (a(this.$hours, { min: this.minHours, max: this.maxHours }).value =
              this.hours),
              (a(this.$minutes, { min: this.minMinutes, max: this.maxMinutes }).value =
                this.minutes);
          }
          updateText() {
            (this.$hoursText.innerHTML = c(this.displayHours)),
              (this.$minutesText.innerHTML = c(this.minutes)),
              this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
          }
          set hours(t) {
            this._hours = t;
            let { hours: e, dayPeriod: i } = this.getDayPeriod(t);
            (this.displayHours = e), (this.dayPeriod = i);
          }
          get hours() {
            return this._hours;
          }
          render() {
            this.updateSliders(), this.updateText();
          }
        }
        function N(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        class I {
          constructor(t) {
            let { dp: e, opts: i } = t;
            N(this, 'pressedKeys', new Set()),
              N(
                this,
                'hotKeys',
                new Map([
                  [
                    [
                      ['Control', 'ArrowRight'],
                      ['Control', 'ArrowUp'],
                    ],
                    t => t.month++,
                  ],
                  [
                    [
                      ['Control', 'ArrowLeft'],
                      ['Control', 'ArrowDown'],
                    ],
                    t => t.month--,
                  ],
                  [
                    [
                      ['Shift', 'ArrowRight'],
                      ['Shift', 'ArrowUp'],
                    ],
                    t => t.year++,
                  ],
                  [
                    [
                      ['Shift', 'ArrowLeft'],
                      ['Shift', 'ArrowDown'],
                    ],
                    t => t.year--,
                  ],
                  [
                    [
                      ['Alt', 'ArrowRight'],
                      ['Alt', 'ArrowUp'],
                    ],
                    t => (t.year += 10),
                  ],
                  [
                    [
                      ['Alt', 'ArrowLeft'],
                      ['Alt', 'ArrowDown'],
                    ],
                    t => (t.year -= 10),
                  ],
                  [['Control', 'Shift', 'ArrowUp'], (t, e) => e.up()],
                ]),
              ),
              N(this, 'handleHotKey', t => {
                let e = this.hotKeys.get(t),
                  i = l(this.getInitialFocusDate());
                e(i, this.dp);
                let { year: n, month: s, date: r } = i,
                  a = o(new Date(n, s));
                a < r && (r = a);
                let c = this.dp.getClampedDate(new Date(n, s, r));
                this.dp.setFocusDate(c, { viewDateTransition: !0 });
              }),
              N(this, 'isHotKeyPressed', () => {
                let t = !1,
                  e = this.pressedKeys.size,
                  i = t => this.pressedKeys.has(t);
                for (let [n] of this.hotKeys) {
                  if (t) break;
                  if (Array.isArray(n[0]))
                    n.forEach(s => {
                      t || e !== s.length || (t = s.every(i) && n);
                    });
                  else {
                    if (e !== n.length) continue;
                    t = n.every(i) && n;
                  }
                }
                return t;
              }),
              N(this, 'isArrow', t => t >= 37 && t <= 40),
              N(this, 'onKeyDown', t => {
                let { key: e, which: i } = t,
                  {
                    dp: n,
                    dp: { focusDate: s },
                    opts: r,
                  } = this;
                this.registerKey(e);
                let a = this.isHotKeyPressed();
                if (a) return t.preventDefault(), void this.handleHotKey(a);
                if (this.isArrow(i))
                  return t.preventDefault(), void this.focusNextCell(e);
                if ('Enter' === e) {
                  if (n.currentView !== r.minView) return void n.down();
                  if (s) {
                    let t = n._checkIfDateIsSelected(s);
                    return void (t
                      ? n._handleAlreadySelectedDates(t, s)
                      : n.selectDate(s));
                  }
                }
                'Escape' === e && this.dp.hide();
              }),
              N(this, 'onKeyUp', t => {
                this.removeKey(t.key);
              }),
              (this.dp = e),
              (this.opts = i),
              this.init();
          }
          init() {
            this.bindKeyboardEvents();
          }
          bindKeyboardEvents() {
            let { $el: t } = this.dp;
            t.addEventListener('keydown', this.onKeyDown),
              t.addEventListener('keyup', this.onKeyUp);
          }
          destroy() {
            let { $el: t } = this.dp;
            t.removeEventListener('keydown', this.onKeyDown),
              t.removeEventListener('keyup', this.onKeyUp),
              (this.hotKeys = null),
              (this.pressedKeys = null);
          }
          getInitialFocusDate() {
            let {
                focusDate: t,
                currentView: e,
                selectedDates: n,
                parsedViewDate: { year: s, month: r },
              } = this.dp,
              a = t || n[n.length - 1];
            if (!a)
              switch (e) {
                case i.days:
                  a = new Date(s, r, new Date().getDate());
                  break;
                case i.months:
                  a = new Date(s, r, 1);
                  break;
                case i.years:
                  a = new Date(s, 0, 1);
              }
            return a;
          }
          focusNextCell(t) {
            let e = this.getInitialFocusDate(),
              { currentView: n } = this.dp,
              { days: s, months: r, years: a } = i,
              o = l(e),
              c = o.year,
              h = o.month,
              d = o.date;
            switch (t) {
              case 'ArrowLeft':
                n === s && (d -= 1), n === r && (h -= 1), n === a && (c -= 1);
                break;
              case 'ArrowUp':
                n === s && (d -= 7), n === r && (h -= 3), n === a && (c -= 4);
                break;
              case 'ArrowRight':
                n === s && (d += 1), n === r && (h += 1), n === a && (c += 1);
                break;
              case 'ArrowDown':
                n === s && (d += 7), n === r && (h += 3), n === a && (c += 4);
            }
            let u = this.dp.getClampedDate(new Date(c, h, d));
            this.dp.setFocusDate(u, { viewDateTransition: !0 });
          }
          registerKey(t) {
            this.pressedKeys.add(t);
          }
          removeKey(t) {
            this.pressedKeys.delete(t);
          }
        }
        let $ = {
          on(t, e) {
            this.__events || (this.__events = {}),
              this.__events[t] ? this.__events[t].push(e) : (this.__events[t] = [e]);
          },
          off(t, e) {
            this.__events &&
              this.__events[t] &&
              (this.__events[t] = this.__events[t].filter(t => t !== e));
          },
          removeAllEvents() {
            this.__events = {};
          },
          trigger(t) {
            for (
              var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              i[n - 1] = arguments[n];
            this.__events &&
              this.__events[t] &&
              this.__events[t].forEach(t => {
                t(...i);
              });
          },
        };
        function F(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        let R = '',
          H = '',
          j = '',
          z = !1;
        class V {
          constructor(t, e) {
            var a = this;
            if (
              (F(this, 'viewIndexes', [i.days, i.months, i.years]),
              F(this, 'next', () => {
                let { year: t, month: e } = this.parsedViewDate;
                switch (this.currentView) {
                  case i.days:
                    this.setViewDate(new Date(t, e + 1, 1));
                    break;
                  case i.months:
                    this.setViewDate(new Date(t + 1, e, 1));
                    break;
                  case i.years:
                    this.setViewDate(new Date(t + 10, 0, 1));
                }
              }),
              F(this, 'prev', () => {
                let { year: t, month: e } = this.parsedViewDate;
                switch (this.currentView) {
                  case i.days:
                    this.setViewDate(new Date(t, e - 1, 1));
                    break;
                  case i.months:
                    this.setViewDate(new Date(t - 1, e, 1));
                    break;
                  case i.years:
                    this.setViewDate(new Date(t - 10, 0, 1));
                }
              }),
              F(this, '_finishHide', () => {
                (this.hideAnimation = !1),
                  this._destroyComponents(),
                  this.$container.removeChild(this.$datepicker);
              }),
              F(this, 'setPosition', function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ('function' == typeof (t = t || a.opts.position))
                  return void (a.customHide = t({
                    $datepicker: a.$datepicker,
                    $target: a.$el,
                    $pointer: a.$pointer,
                    isViewChange: e,
                    done: a._finishHide,
                  }));
                let i,
                  n,
                  { isMobile: s } = a.opts,
                  r = a.$el.getBoundingClientRect(),
                  o = a.$el.getBoundingClientRect(),
                  l = a.$datepicker.offsetParent,
                  c = a.$el.offsetParent,
                  h = a.$datepicker.getBoundingClientRect(),
                  d = t.split(' '),
                  u = window.scrollY,
                  p = window.scrollX,
                  f = a.opts.offset,
                  g = d[0],
                  m = d[1];
                if (s) a.$datepicker.style.cssText = 'left: 50%; top: 50%';
                else {
                  if (
                    (l === c &&
                      l !== document.body &&
                      ((o = {
                        top: a.$el.offsetTop,
                        left: a.$el.offsetLeft,
                        width: r.width,
                        height: a.$el.offsetHeight,
                      }),
                      (u = 0),
                      (p = 0)),
                    l !== c && l !== document.body)
                  ) {
                    let t = l.getBoundingClientRect();
                    (o = {
                      top: r.top - t.top,
                      left: r.left - t.left,
                      width: r.width,
                      height: r.height,
                    }),
                      (u = 0),
                      (p = 0);
                  }
                  switch (g) {
                    case 'top':
                      i = o.top - h.height - f;
                      break;
                    case 'right':
                      n = o.left + o.width + f;
                      break;
                    case 'bottom':
                      i = o.top + o.height + f;
                      break;
                    case 'left':
                      n = o.left - h.width - f;
                  }
                  switch (m) {
                    case 'top':
                      i = o.top;
                      break;
                    case 'right':
                      n = o.left + o.width - h.width;
                      break;
                    case 'bottom':
                      i = o.top + o.height - h.height;
                      break;
                    case 'left':
                      n = o.left;
                      break;
                    case 'center':
                      /left|right/.test(g)
                        ? (i = o.top + o.height / 2 - h.height / 2)
                        : (n = o.left + o.width / 2 - h.width / 2);
                  }
                  a.$datepicker.style.cssText = 'left: '
                    .concat(n + p, 'px; top: ')
                    .concat(i + u, 'px');
                }
              }),
              F(this, '_setInputValue', () => {
                let {
                    opts: t,
                    $altField: e,
                    locale: { dateFormat: i },
                  } = this,
                  { altFieldDateFormat: n, altField: s } = t;
                s && e && (e.value = this._getInputValue(n)),
                  (this.$el.value = this._getInputValue(i));
              }),
              F(this, '_getInputValue', t => {
                let { selectedDates: e, opts: i } = this,
                  { multipleDates: n, multipleDatesSeparator: s } = i;
                if (!e.length) return '';
                let r = 'function' == typeof t,
                  a = r ? t(n ? e : e[0]) : e.map(e => this.formatDate(e, t));
                return (a = r ? a : a.join(s)), a;
              }),
              F(this, '_checkIfDateIsSelected', function (t) {
                let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : i.days,
                  n = !1;
                return (
                  a.selectedDates.some(i => {
                    let s = u(t, i, e);
                    return (n = s && i), s;
                  }),
                  n
                );
              }),
              F(this, '_scheduleCallAfterTransition', t => {
                this._cancelScheduledCall(),
                  t && t(!1),
                  (this._onTransitionEnd = () => {
                    t && t(!0);
                  }),
                  this.$datepicker.addEventListener(
                    'transitionend',
                    this._onTransitionEnd,
                    { once: !0 },
                  );
              }),
              F(this, '_cancelScheduledCall', () => {
                this.$datepicker.removeEventListener(
                  'transitionend',
                  this._onTransitionEnd,
                );
              }),
              F(this, 'setViewDate', t => {
                if (!((t = w(t)) instanceof Date)) return;
                if (u(t, this.viewDate)) return;
                let e = this.viewDate;
                this.viewDate = t;
                let { onChangeViewDate: n } = this.opts;
                if (n) {
                  let { month: t, year: e } = this.parsedViewDate;
                  n({ month: t, year: e, decade: this.curDecade });
                }
                this.trigger(i.eventChangeViewDate, t, e);
              }),
              F(this, 'setFocusDate', function (t) {
                let e =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (!t || (t = w(t)) instanceof Date) &&
                  ((a.focusDate = t),
                  a.opts.range && t && a._handleRangeOnFocus(),
                  a.trigger(i.eventChangeFocusDate, t, e));
              }),
              F(this, 'setCurrentView', t => {
                if (this.viewIndexes.includes(t)) {
                  if (
                    ((this.currentView = t),
                    this.elIsInput && this.visible && this.setPosition(void 0, !0),
                    this.trigger(i.eventChangeCurrentView, t),
                    !this.views[t])
                  ) {
                    let e = (this.views[t] = new D({
                      dp: this,
                      opts: this.opts,
                      type: t,
                    }));
                    this.$content.appendChild(e.$el);
                  }
                  this.opts.onChangeView && this.opts.onChangeView(t);
                }
              }),
              F(this, '_updateLastSelectedDate', t => {
                (this.lastSelectedDate = t),
                  this.trigger(i.eventChangeLastSelectedDate, t);
              }),
              F(this, 'destroy', () => {
                let { showEvent: t, isMobile: e } = this.opts,
                  i = this.$datepicker.parentNode;
                i && i.removeChild(this.$datepicker),
                  this.$el.removeEventListener(t, this._onFocus),
                  this.$el.removeEventListener('blur', this._onBlur),
                  window.removeEventListener('resize', this._onResize),
                  e && this._removeMobileAttributes(),
                  this.keyboardNav && this.keyboardNav.destroy(),
                  (this.views = null),
                  (this.nav = null),
                  (this.$datepicker = null),
                  (this.opts = null),
                  (this.$customContainer = null),
                  (this.viewDate = null),
                  (this.focusDate = null),
                  (this.selectedDates = null),
                  (this.rangeDateFrom = null),
                  (this.rangeDateTo = null);
              }),
              F(this, 'update', t => {
                let e = x({}, this.opts);
                x(this.opts, t);
                let {
                    timepicker: n,
                    buttons: s,
                    range: r,
                    selectedDates: a,
                    isMobile: o,
                  } = this.opts,
                  l = this.visible || this.treatAsInline;
                this._createMinMaxDates(),
                  this._limitViewDateByMaxMinDates(),
                  this._handleLocale(),
                  !e.selectedDates && a && this.selectDate(a),
                  t.view && this.setCurrentView(t.view),
                  this._setInputValue(),
                  e.range && !r
                    ? ((this.rangeDateTo = !1), (this.rangeDateFrom = !1))
                    : !e.range &&
                      r &&
                      this.selectedDates.length &&
                      ((this.rangeDateFrom = this.selectedDates[0]),
                      (this.rangeDateTo = this.selectedDates[1])),
                  e.timepicker && !n
                    ? (l && this.timepicker.destroy(),
                      (this.timepicker = !1),
                      this.$timepicker.parentNode.removeChild(this.$timepicker))
                    : !e.timepicker && n && this._addTimepicker(),
                  !e.buttons && s
                    ? this._addButtons()
                    : e.buttons && !s
                    ? (this.buttons.destroy(),
                      this.$buttons.parentNode.removeChild(this.$buttons))
                    : l && e.buttons && s && this.buttons.clearHtml().render(),
                  !e.isMobile && o
                    ? (this.treatAsInline || j || this._createMobileOverlay(),
                      this._addMobileAttributes(),
                      this.visible && this._showMobileOverlay())
                    : e.isMobile &&
                      !o &&
                      (this._removeMobileAttributes(),
                      this.visible &&
                        (j.classList.remove('-active-'),
                        'function' != typeof this.opts.position && this.setPosition())),
                  l &&
                    (this.nav.update(),
                    this.views[this.currentView].render(),
                    this.currentView === i.days &&
                      this.views[this.currentView].renderDayNames());
              }),
              F(this, 'isOtherMonth', t => {
                let { month: e } = l(t);
                return e !== this.parsedViewDate.month;
              }),
              F(this, 'isOtherYear', t => {
                let { year: e } = l(t);
                return e !== this.parsedViewDate.year;
              }),
              F(this, 'isOtherDecade', t => {
                let { year: e } = l(t),
                  [i, n] = h(this.viewDate);
                return e < i || e > n;
              }),
              F(this, '_onChangeSelectedDate', t => {
                let { silent: e } = t;
                setTimeout(() => {
                  this._setInputValue(),
                    this.opts.onSelect && !e && this._triggerOnSelect();
                });
              }),
              F(this, '_onChangeFocusedDate', function (t) {
                let { viewDateTransition: e } =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t) return;
                let i = !1;
                e && (i = a.isOtherMonth(t) || a.isOtherYear(t) || a.isOtherDecade(t)),
                  i && a.setViewDate(t);
              }),
              F(this, '_onChangeTime', t => {
                let { hours: e, minutes: i } = t,
                  n = new Date(),
                  {
                    lastSelectedDate: s,
                    opts: { onSelect: r },
                  } = this,
                  a = s;
                s || (a = n);
                let o = this.getCell(a, this.currentViewSingular),
                  l = o && o.adpCell;
                (l && l.isDisabled) ||
                  (a.setHours(e),
                  a.setMinutes(i),
                  s
                    ? (this._setInputValue(), r && this._triggerOnSelect())
                    : this.selectDate(a));
              }),
              F(this, '_onFocus', t => {
                this.visible || this.show();
              }),
              F(this, '_onBlur', t => {
                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
              }),
              F(this, '_onMouseDown', t => {
                this.inFocus = !0;
              }),
              F(this, '_onMouseUp', t => {
                (this.inFocus = !1), this.$el.focus();
              }),
              F(this, '_onResize', () => {
                this.visible &&
                  'function' != typeof this.opts.position &&
                  this.setPosition();
              }),
              F(this, '_onClickOverlay', () => {
                this.visible && this.hide();
              }),
              F(this, 'isWeekend', t => this.opts.weekends.includes(t)),
              F(this, 'getClampedDate', t => {
                let { minDate: e, maxDate: i } = this,
                  n = t;
                return i && p(t, i) ? (n = i) : e && f(t, e) && (n = e), n;
              }),
              (this.$el = s(t)),
              !this.$el)
            )
              return;
            (this.$datepicker = r({ className: 'air-datepicker' })),
              (this.opts = x({}, n, e)),
              (this.$customContainer = !!this.opts.container && s(this.opts.container)),
              (this.$altField = s(this.opts.altField || !1)),
              R || (R = s('body'));
            let { view: o, startDate: c } = this.opts;
            c || (this.opts.startDate = new Date()),
              'INPUT' === this.$el.nodeName && (this.elIsInput = !0),
              (this.inited = !1),
              (this.visible = !1),
              (this.viewDate = w(this.opts.startDate)),
              (this.focusDate = !1),
              (this.initialReadonly = this.$el.getAttribute('readonly')),
              (this.customHide = !1),
              (this.currentView = o),
              (this.selectedDates = []),
              (this.views = {}),
              (this.keys = []),
              (this.rangeDateFrom = ''),
              (this.rangeDateTo = ''),
              (this.timepickerIsActive = !1),
              (this.treatAsInline = this.opts.inline || !this.elIsInput),
              this.init();
          }
          init() {
            let {
              opts: t,
              treatAsInline: e,
              opts: {
                inline: i,
                isMobile: n,
                selectedDates: s,
                keyboardNav: a,
                onlyTimepicker: o,
              },
            } = this;
            var l;
            z ||
              i ||
              !this.elIsInput ||
              ((z = !0),
              (H = r({ className: (l = V.defaultContainerId), id: l })),
              R.appendChild(H)),
              !n || j || e || this._createMobileOverlay(),
              this._handleLocale(),
              this._bindSubEvents(),
              this._createMinMaxDates(),
              this._limitViewDateByMaxMinDates(),
              this.elIsInput &&
                (i || this._bindEvents(),
                a && !o && (this.keyboardNav = new I({ dp: this, opts: t }))),
              s && this.selectDate(s, { silent: !0 }),
              this.opts.visible && !e && this.show(),
              e && this._createComponents();
          }
          _createMobileOverlay() {
            (j = r({ className: 'air-datepicker-overlay' })), H.appendChild(j);
          }
          _createComponents() {
            let {
              opts: t,
              treatAsInline: e,
              opts: {
                inline: i,
                buttons: n,
                timepicker: s,
                position: r,
                classes: a,
                onlyTimepicker: o,
                isMobile: l,
              },
            } = this;
            this._buildBaseHtml(),
              this.elIsInput && (i || this._setPositionClasses(r)),
              (!i && this.elIsInput) || this.$datepicker.classList.add('-inline-'),
              a && this.$datepicker.classList.add(...a.split(' ')),
              o && this.$datepicker.classList.add('-only-timepicker-'),
              l && !e && this._addMobileAttributes(),
              (this.views[this.currentView] = new D({
                dp: this,
                type: this.currentView,
                opts: t,
              })),
              (this.nav = new E({ dp: this, opts: t })),
              s && this._addTimepicker(),
              n && this._addButtons(),
              this.$content.appendChild(this.views[this.currentView].$el),
              this.$nav.appendChild(this.nav.$el);
          }
          _destroyComponents() {
            for (let t in this.views) this.views[t].destroy();
            (this.views = {}),
              this.nav.destroy(),
              this.timepicker && this.timepicker.destroy();
          }
          _addMobileAttributes() {
            j.addEventListener('click', this._onClickOverlay),
              this.$datepicker.classList.add('-is-mobile-'),
              this.$el.setAttribute('readonly', !0);
          }
          _removeMobileAttributes() {
            j.removeEventListener('click', this._onClickOverlay),
              this.$datepicker.classList.remove('-is-mobile-'),
              this.initialReadonly ||
                '' === this.initialReadonly ||
                this.$el.removeAttribute('readonly');
          }
          _createMinMaxDates() {
            let { minDate: t, maxDate: e } = this.opts;
            (this.minDate = !!t && w(t)), (this.maxDate = !!e && w(e));
          }
          _addTimepicker() {
            (this.$timepicker = r({ className: 'air-datepicker--time' })),
              this.$datepicker.appendChild(this.$timepicker),
              (this.timepicker = new O({ dp: this, opts: this.opts })),
              this.$timepicker.appendChild(this.timepicker.$el);
          }
          _addButtons() {
            (this.$buttons = r({ className: 'air-datepicker--buttons' })),
              this.$datepicker.appendChild(this.$buttons),
              (this.buttons = new A({ dp: this, opts: this.opts })),
              this.$buttons.appendChild(this.buttons.$el);
          }
          _bindSubEvents() {
            this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate),
              this.on(i.eventChangeFocusDate, this._onChangeFocusedDate),
              this.on(i.eventChangeTime, this._onChangeTime);
          }
          _buildBaseHtml() {
            let { inline: t } = this.opts;
            var e, i;
            this.elIsInput
              ? t
                ? ((e = this.$datepicker),
                  (i = this.$el).parentNode.insertBefore(e, i.nextSibling))
                : this.$container.appendChild(this.$datepicker)
              : this.$el.appendChild(this.$datepicker),
              (this.$datepicker.innerHTML =
                '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
              (this.$content = s('.air-datepicker--content', this.$datepicker)),
              (this.$pointer = s('.air-datepicker--pointer', this.$datepicker)),
              (this.$nav = s('.air-datepicker--navigation', this.$datepicker));
          }
          _handleLocale() {
            let {
              locale: t,
              dateFormat: e,
              firstDay: i,
              timepicker: n,
              onlyTimepicker: s,
              timeFormat: r,
              dateTimeSeparator: a,
            } = this.opts;
            var o;
            (this.locale = ((o = t), JSON.parse(JSON.stringify(o)))),
              e && (this.locale.dateFormat = e),
              void 0 !== r && '' !== r && (this.locale.timeFormat = r);
            let { timeFormat: l } = this.locale;
            if (('' !== i && (this.locale.firstDay = i), n && 'function' != typeof e)) {
              let t = l ? a : '';
              this.locale.dateFormat = [this.locale.dateFormat, l || ''].join(t);
            }
            s && (this.locale.dateFormat = this.locale.timeFormat);
          }
          _setPositionClasses(t) {
            if ('function' == typeof t)
              return void this.$datepicker.classList.add('-custom-position-');
            let e = (t = t.split(' '))[0],
              i = t[1],
              n = 'air-datepicker -'.concat(e, '-').concat(i, '- -from-').concat(e, '-');
            this.$datepicker.classList.add(...n.split(' '));
          }
          _bindEvents() {
            this.$el.addEventListener(this.opts.showEvent, this._onFocus),
              this.$el.addEventListener('blur', this._onBlur),
              this.$datepicker.addEventListener('mousedown', this._onMouseDown),
              this.$datepicker.addEventListener('mouseup', this._onMouseUp),
              window.addEventListener('resize', this._onResize);
          }
          _limitViewDateByMaxMinDates() {
            let { viewDate: t, minDate: e, maxDate: i } = this;
            i && p(t, i) && this.setViewDate(i), e && f(t, e) && this.setViewDate(e);
          }
          formatDate() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.viewDate,
              e = arguments.length > 1 ? arguments[1] : void 0;
            if (((t = w(t)), !(t instanceof Date))) return;
            let i = e,
              n = this.locale,
              s = l(t),
              r = h(t),
              a = V.replacer,
              o = 'am';
            this.opts.timepicker &&
              this.timepicker &&
              (o = this.timepicker.getDayPeriod(t).dayPeriod);
            let c = {
              T: t.getTime(),
              m: s.minutes,
              mm: s.fullMinutes,
              h: s.hours12,
              hh: s.fullHours12,
              H: s.hours,
              HH: s.fullHours,
              aa: o,
              AA: o.toUpperCase(),
              E: n.daysShort[s.day],
              EEEE: n.days[s.day],
              d: s.date,
              dd: s.fullDate,
              M: s.month + 1,
              MM: s.fullMonth,
              MMM: n.monthsShort[s.month],
              MMMM: n.months[s.month],
              yy: s.year.toString().slice(-2),
              yyyy: s.year,
              yyyy1: r[0],
              yyyy2: r[1],
            };
            for (let [t, e] of Object.entries(c)) i = a(i, _(t), e);
            return i;
          }
          down(t) {
            this._handleUpDownActions(t, 'down');
          }
          up(t) {
            this._handleUpDownActions(t, 'up');
          }
          selectDate(t) {
            let e,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              { currentView: s, parsedViewDate: r, selectedDates: a } = this,
              { updateTime: o } = n,
              {
                moveToOtherMonthsOnSelect: l,
                moveToOtherYearsOnSelect: c,
                multipleDates: h,
                range: d,
                autoClose: u,
              } = this.opts,
              f = a.length;
            if (Array.isArray(t))
              return (
                t.forEach(t => {
                  this.selectDate(t, n);
                }),
                new Promise(t => {
                  setTimeout(t);
                })
              );
            if ((t = w(t)) instanceof Date) {
              if (
                (s === i.days &&
                  t.getMonth() !== r.month &&
                  l &&
                  (e = new Date(t.getFullYear(), t.getMonth(), 1)),
                s === i.years &&
                  t.getFullYear() !== r.year &&
                  c &&
                  (e = new Date(t.getFullYear(), 0, 1)),
                e && this.setViewDate(e),
                h && !d)
              ) {
                if (f === h) return;
                this._checkIfDateIsSelected(t) || a.push(t);
              } else if (d)
                switch (f) {
                  case 1:
                    a.push(t),
                      this.rangeDateTo || (this.rangeDateTo = t),
                      p(this.rangeDateFrom, this.rangeDateTo) &&
                        ((this.rangeDateTo = this.rangeDateFrom),
                        (this.rangeDateFrom = t)),
                      (this.selectedDates = [this.rangeDateFrom, this.rangeDateTo]);
                    break;
                  case 2:
                    (this.selectedDates = [t]),
                      (this.rangeDateFrom = t),
                      (this.rangeDateTo = '');
                    break;
                  default:
                    (this.selectedDates = [t]), (this.rangeDateFrom = t);
                }
              else this.selectedDates = [t];
              return (
                this.trigger(i.eventChangeSelectedDate, {
                  action: i.actionSelectDate,
                  silent: null == n ? void 0 : n.silent,
                  date: t,
                  updateTime: o,
                }),
                this._updateLastSelectedDate(t),
                u &&
                  !this.timepickerIsActive &&
                  this.visible &&
                  (h || d ? d && 1 === f && this.hide() : this.hide()),
                new Promise(t => {
                  setTimeout(t);
                })
              );
            }
          }
          unselectDate(t) {
            let e = this.selectedDates,
              n = this;
            if ((t = w(t)) instanceof Date)
              return e.some((s, r) => {
                if (u(s, t))
                  return (
                    e.splice(r, 1),
                    n.selectedDates.length
                      ? n._updateLastSelectedDate(
                          n.selectedDates[n.selectedDates.length - 1],
                        )
                      : ((n.rangeDateFrom = ''),
                        (n.rangeDateTo = ''),
                        n._updateLastSelectedDate(!1)),
                    this.trigger(i.eventChangeSelectedDate, {
                      action: i.actionUnselectDate,
                      date: t,
                    }),
                    !0
                  );
              });
          }
          replaceDate(t, e) {
            let n = this.selectedDates.find(e => u(e, t, this.currentView)),
              s = this.selectedDates.indexOf(n);
            s < 0 ||
              u(this.selectedDates[s], e, this.currentView) ||
              ((this.selectedDates[s] = e),
              this.trigger(i.eventChangeSelectedDate, {
                action: i.actionSelectDate,
                date: e,
                updateTime: !0,
              }),
              this._updateLastSelectedDate(e));
          }
          clear() {
            (this.selectedDates = []),
              (this.rangeDateFrom = !1),
              (this.rangeDateTo = !1),
              this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate });
          }
          show() {
            let { onShow: t, isMobile: e } = this.opts;
            this._cancelScheduledCall(),
              this.visible || this.hideAnimation || this._createComponents(),
              this.setPosition(this.opts.position),
              this.$datepicker.classList.add('-active-'),
              (this.visible = !0),
              t && this._scheduleCallAfterTransition(t),
              e && this._showMobileOverlay();
          }
          hide() {
            let { onHide: t, isMobile: e } = this.opts,
              i = this._hasTransition();
            (this.visible = !1),
              (this.hideAnimation = !0),
              this.$datepicker.classList.remove('-active-'),
              this.customHide && this.customHide(),
              this.elIsInput && this.$el.blur(),
              this._scheduleCallAfterTransition(e => {
                !this.customHide && ((e && i) || (!e && !i)) && this._finishHide(),
                  t && t(e);
              }),
              e && j.classList.remove('-active-');
          }
          _triggerOnSelect() {
            let t = [],
              e = [],
              {
                selectedDates: i,
                locale: n,
                opts: { onSelect: s, multipleDates: r, range: a },
              } = this,
              o = r || a,
              l = 'function' == typeof n.dateFormat;
            i.length &&
              ((t = i.map(g)),
              (e = l
                ? r
                  ? n.dateFormat(t)
                  : t.map(t => n.dateFormat(t))
                : t.map(t => this.formatDate(t, n.dateFormat)))),
              s({ date: o ? t : t[0], formattedDate: o ? e : e[0], datepicker: this });
          }
          _handleAlreadySelectedDates(t, e) {
            let { range: i, toggleSelected: n } = this.opts;
            i
              ? n
                ? this.unselectDate(e)
                : 2 !== this.selectedDates.length && this.selectDate(e)
              : n && this.unselectDate(e),
              n || this._updateLastSelectedDate(t);
          }
          _handleUpDownActions(t, e) {
            if (!((t = w(t || this.focusDate || this.viewDate)) instanceof Date)) return;
            let i = 'up' === e ? this.viewIndex + 1 : this.viewIndex - 1;
            i > 2 && (i = 2),
              i < 0 && (i = 0),
              this.setViewDate(new Date(t.getFullYear(), t.getMonth(), 1)),
              this.setCurrentView(this.viewIndexes[i]);
          }
          _handleRangeOnFocus() {
            1 === this.selectedDates.length &&
              (p(this.selectedDates[0], this.focusDate)
                ? ((this.rangeDateTo = this.selectedDates[0]),
                  (this.rangeDateFrom = this.focusDate))
                : ((this.rangeDateTo = this.focusDate),
                  (this.rangeDateFrom = this.selectedDates[0])));
          }
          getCell(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
            if (!((t = w(t)) instanceof Date)) return;
            let { year: n, month: s, date: r } = l(t),
              a = '[data-year="'.concat(n, '"]'),
              o = '[data-month="'.concat(s, '"]'),
              c = '[data-date="'.concat(r, '"]'),
              h = {
                [i.day]: ''.concat(a).concat(o).concat(c),
                [i.month]: ''.concat(a).concat(o),
                [i.year]: ''.concat(a),
              };
            return this.views[this.currentView].$el.querySelector(h[e]);
          }
          _showMobileOverlay() {
            j.classList.add('-active-');
          }
          _hasTransition() {
            return (
              window
                .getComputedStyle(this.$datepicker)
                .getPropertyValue('transition-duration')
                .split(', ')
                .reduce((t, e) => parseFloat(e) + t, 0) > 0
            );
          }
          get parsedViewDate() {
            return l(this.viewDate);
          }
          get currentViewSingular() {
            return this.currentView.slice(0, -1);
          }
          get curDecade() {
            return h(this.viewDate);
          }
          get viewIndex() {
            return this.viewIndexes.indexOf(this.currentView);
          }
          get isFinalView() {
            return this.currentView === i.years;
          }
          get hasSelectedDates() {
            return this.selectedDates.length > 0;
          }
          get isMinViewReached() {
            return this.currentView === this.opts.minView || this.currentView === i.days;
          }
          get $container() {
            return this.$customContainer || H;
          }
          static replacer(t, e, i) {
            return t.replace(e, function (t, e, n, s) {
              return e + i + s;
            });
          }
        }
        var B;
        return (
          F(V, 'defaults', n),
          F(V, 'version', '3.1.0'),
          F(V, 'defaultContainerId', 'air-datepicker-global-container'),
          (B = V.prototype),
          Object.assign(B, $),
          e.default
        );
      })();
    },
    522: function (t, e, i) {
      'use strict';
      var n = i(183),
        s = i.n(n);
      e.Z = /^(535|685|909)$/.test(i.j) ? null : s();
    },
    900: function (t, e, i) {
      'use strict';
      i.d(e, {
        kL: function () {
          return cs;
        },
        zX: function () {
          return Vr;
        },
      });
      const n =
        'undefined' == typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function s(t, e, i) {
        const s = i || (t => Array.prototype.slice.call(t));
        let r = !1,
          a = [];
        return function (...i) {
          (a = s(i)),
            r ||
              ((r = !0),
              n.call(window, () => {
                (r = !1), t.apply(e, a);
              }));
        };
      }
      const r = t => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
        a = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2);
      function o() {}
      const l = (function () {
        let t = 0;
        return function () {
          return t++;
        };
      })();
      function c(t) {
        return null == t;
      }
      function h(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return '[object' === e.substr(0, 7) && 'Array]' === e.substr(-6);
      }
      function d(t) {
        return null !== t && '[object Object]' === Object.prototype.toString.call(t);
      }
      const u = t => ('number' == typeof t || t instanceof Number) && isFinite(+t);
      function p(t, e) {
        return u(t) ? t : e;
      }
      function f(t, e) {
        return void 0 === t ? e : t;
      }
      const g = (t, e) =>
        'string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t;
      function m(t, e, i) {
        if (t && 'function' == typeof t.call) return t.apply(i, e);
      }
      function v(t, e, i, n) {
        let s, r, a;
        if (h(t))
          if (((r = t.length), n)) for (s = r - 1; s >= 0; s--) e.call(i, t[s], s);
          else for (s = 0; s < r; s++) e.call(i, t[s], s);
        else if (d(t))
          for (a = Object.keys(t), r = a.length, s = 0; s < r; s++)
            e.call(i, t[a[s]], a[s]);
      }
      function b(t, e) {
        let i, n, s, r;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, n = t.length; i < n; ++i)
          if (
            ((s = t[i]),
            (r = e[i]),
            s.datasetIndex !== r.datasetIndex || s.index !== r.index)
          )
            return !1;
        return !0;
      }
      function y(t) {
        if (h(t)) return t.map(y);
        if (d(t)) {
          const e = Object.create(null),
            i = Object.keys(t),
            n = i.length;
          let s = 0;
          for (; s < n; ++s) e[i[s]] = y(t[i[s]]);
          return e;
        }
        return t;
      }
      function x(t) {
        return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
      }
      function w(t, e, i, n) {
        if (!x(t)) return;
        const s = e[t],
          r = i[t];
        d(s) && d(r) ? _(s, r, n) : (e[t] = y(r));
      }
      function _(t, e, i) {
        const n = h(e) ? e : [e],
          s = n.length;
        if (!d(t)) return t;
        const r = (i = i || {}).merger || w;
        for (let a = 0; a < s; ++a) {
          if (!d((e = n[a]))) continue;
          const s = Object.keys(e);
          for (let n = 0, a = s.length; n < a; ++n) r(s[n], t, e, i);
        }
        return t;
      }
      function k(t, e) {
        return _(t, e, { merger: C });
      }
      function C(t, e, i) {
        if (!x(t)) return;
        const n = e[t],
          s = i[t];
        d(n) && d(s)
          ? k(n, s)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = y(s));
      }
      function S(t, e) {
        const i = t.indexOf('.', e);
        return -1 === i ? t.length : i;
      }
      function T(t, e) {
        if ('' === e) return t;
        let i = 0,
          n = S(e, i);
        for (; t && n > i; ) (t = t[e.substr(i, n - i)]), (i = n + 1), (n = S(e, i));
        return t;
      }
      function D(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const M = t => void 0 !== t,
        E = t => 'function' == typeof t,
        P = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const i of t) if (!e.has(i)) return !1;
          return !0;
        },
        A = Math.PI,
        L = 2 * A,
        O = L + A,
        N = Number.POSITIVE_INFINITY,
        I = A / 180,
        $ = A / 2,
        F = A / 4,
        R = (2 * A) / 3,
        H = Math.log10,
        j = Math.sign;
      function z(t) {
        const e = Math.round(t);
        t = B(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(H(t))),
          n = t / i;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
      }
      function V(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function B(t, e, i) {
        return Math.abs(t - e) < i;
      }
      function W(t, e, i) {
        let n, s, r;
        for (n = 0, s = t.length; n < s; n++)
          (r = t[n][i]),
            isNaN(r) || ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r)));
      }
      function q(t) {
        return t * (A / 180);
      }
      function G(t) {
        return t * (180 / A);
      }
      function Y(t) {
        if (!u(t)) return;
        let e = 1,
          i = 0;
        for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
        return i;
      }
      function U(t, e) {
        const i = e.x - t.x,
          n = e.y - t.y,
          s = Math.sqrt(i * i + n * n);
        let r = Math.atan2(n, i);
        return r < -0.5 * A && (r += L), { angle: r, distance: s };
      }
      function X(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function K(t, e) {
        return ((t - e + O) % L) - A;
      }
      function J(t) {
        return ((t % L) + L) % L;
      }
      function Z(t, e, i, n) {
        const s = J(t),
          r = J(e),
          a = J(i),
          o = J(r - s),
          l = J(a - s),
          c = J(s - r),
          h = J(s - a);
        return s === r || s === a || (n && r === a) || (o > l && c < h);
      }
      function Q(t, e, i) {
        return Math.max(e, Math.min(i, t));
      }
      function tt(t, e, i, n = 1e-6) {
        return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n;
      }
      const et = t => 0 === t || 1 === t,
        it = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * L) / i),
        nt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * L) / i) + 1,
        st = {
          linear: t => t,
          easeInQuad: t => t * t,
          easeOutQuad: t => -t * (t - 2),
          easeInOutQuad: t => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
          easeInCubic: t => t * t * t,
          easeOutCubic: t => (t -= 1) * t * t + 1,
          easeInOutCubic: t =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
          easeInQuart: t => t * t * t * t,
          easeOutQuart: t => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: t =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: t => t * t * t * t * t,
          easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: t =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: t => 1 - Math.cos(t * $),
          easeOutSine: t => Math.sin(t * $),
          easeInOutSine: t => -0.5 * (Math.cos(A * t) - 1),
          easeInExpo: t => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: t => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: t =>
            et(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: t => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: t =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: t => (et(t) ? t : it(t, 0.075, 0.3)),
          easeOutElastic: t => (et(t) ? t : nt(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return et(t)
              ? t
              : t < 0.5
              ? 0.5 * it(2 * t, e, 0.45)
              : 0.5 + 0.5 * nt(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: t => 1 - st.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              i = 2.75;
            return t < 1 / i
              ? e * t * t
              : t < 2 / i
              ? e * (t -= 1.5 / i) * t + 0.75
              : t < 2.5 / i
              ? e * (t -= 2.25 / i) * t + 0.9375
              : e * (t -= 2.625 / i) * t + 0.984375;
          },
          easeInOutBounce: t =>
            t < 0.5
              ? 0.5 * st.easeInBounce(2 * t)
              : 0.5 * st.easeOutBounce(2 * t - 1) + 0.5,
        },
        rt = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        at = '0123456789ABCDEF',
        ot = t => at[15 & t],
        lt = t => at[(240 & t) >> 4] + at[15 & t],
        ct = t => (240 & t) >> 4 == (15 & t);
      function ht(t) {
        return (t + 0.5) | 0;
      }
      const dt = (t, e, i) => Math.max(Math.min(t, i), e);
      function ut(t) {
        return dt(ht(2.55 * t), 0, 255);
      }
      function pt(t) {
        return dt(ht(255 * t), 0, 255);
      }
      function ft(t) {
        return dt(ht(t / 2.55) / 100, 0, 1);
      }
      function gt(t) {
        return dt(ht(100 * t), 0, 100);
      }
      const mt =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        vt =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function bt(t, e, i) {
        const n = e * Math.min(i, 1 - i),
          s = (e, s = (e + t / 30) % 12) =>
            i - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
        return [s(0), s(8), s(4)];
      }
      function yt(t, e, i) {
        const n = (n, s = (n + t / 60) % 6) =>
          i - i * e * Math.max(Math.min(s, 4 - s, 1), 0);
        return [n(5), n(3), n(1)];
      }
      function xt(t, e, i) {
        const n = bt(t, 1, 0.5);
        let s;
        for (e + i > 1 && ((s = 1 / (e + i)), (e *= s), (i *= s)), s = 0; s < 3; s++)
          (n[s] *= 1 - e - i), (n[s] += e);
        return n;
      }
      function wt(t) {
        const e = t.r / 255,
          i = t.g / 255,
          n = t.b / 255,
          s = Math.max(e, i, n),
          r = Math.min(e, i, n),
          a = (s + r) / 2;
        let o, l, c;
        return (
          s !== r &&
            ((c = s - r),
            (l = a > 0.5 ? c / (2 - s - r) : c / (s + r)),
            (o =
              s === e
                ? (i - n) / c + (i < n ? 6 : 0)
                : s === i
                ? (n - e) / c + 2
                : (e - i) / c + 4),
            (o = 60 * o + 0.5)),
          [0 | o, l || 0, a]
        );
      }
      function _t(t, e, i, n) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(pt);
      }
      function kt(t, e, i) {
        return _t(bt, t, e, i);
      }
      function Ct(t) {
        return ((t % 360) + 360) % 360;
      }
      const St = {
          x: 'dark',
          Z: 'light',
          Y: 're',
          X: 'blu',
          W: 'gr',
          V: 'medium',
          U: 'slate',
          A: 'ee',
          T: 'ol',
          S: 'or',
          B: 'ra',
          C: 'lateg',
          D: 'ights',
          R: 'in',
          Q: 'turquois',
          E: 'hi',
          P: 'ro',
          O: 'al',
          N: 'le',
          M: 'de',
          L: 'yello',
          F: 'en',
          K: 'ch',
          G: 'arks',
          H: 'ea',
          I: 'ightg',
          J: 'wh',
        },
        Tt = {
          OiceXe: 'f0f8ff',
          antiquewEte: 'faebd7',
          aqua: 'ffff',
          aquamarRe: '7fffd4',
          azuY: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '0',
          blanKedOmond: 'ffebcd',
          Xe: 'ff',
          XeviTet: '8a2be2',
          bPwn: 'a52a2a',
          burlywood: 'deb887',
          caMtXe: '5f9ea0',
          KartYuse: '7fff00',
          KocTate: 'd2691e',
          cSO: 'ff7f50',
          cSnflowerXe: '6495ed',
          cSnsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: 'ffff',
          xXe: '8b',
          xcyan: '8b8b',
          xgTMnPd: 'b8860b',
          xWay: 'a9a9a9',
          xgYF: '6400',
          xgYy: 'a9a9a9',
          xkhaki: 'bdb76b',
          xmagFta: '8b008b',
          xTivegYF: '556b2f',
          xSange: 'ff8c00',
          xScEd: '9932cc',
          xYd: '8b0000',
          xsOmon: 'e9967a',
          xsHgYF: '8fbc8f',
          xUXe: '483d8b',
          xUWay: '2f4f4f',
          xUgYy: '2f4f4f',
          xQe: 'ced1',
          xviTet: '9400d3',
          dAppRk: 'ff1493',
          dApskyXe: 'bfff',
          dimWay: '696969',
          dimgYy: '696969',
          dodgerXe: '1e90ff',
          fiYbrick: 'b22222',
          flSOwEte: 'fffaf0',
          foYstWAn: '228b22',
          fuKsia: 'ff00ff',
          gaRsbSo: 'dcdcdc',
          ghostwEte: 'f8f8ff',
          gTd: 'ffd700',
          gTMnPd: 'daa520',
          Way: '808080',
          gYF: '8000',
          gYFLw: 'adff2f',
          gYy: '808080',
          honeyMw: 'f0fff0',
          hotpRk: 'ff69b4',
          RdianYd: 'cd5c5c',
          Rdigo: '4b0082',
          ivSy: 'fffff0',
          khaki: 'f0e68c',
          lavFMr: 'e6e6fa',
          lavFMrXsh: 'fff0f5',
          lawngYF: '7cfc00',
          NmoncEffon: 'fffacd',
          ZXe: 'add8e6',
          ZcSO: 'f08080',
          Zcyan: 'e0ffff',
          ZgTMnPdLw: 'fafad2',
          ZWay: 'd3d3d3',
          ZgYF: '90ee90',
          ZgYy: 'd3d3d3',
          ZpRk: 'ffb6c1',
          ZsOmon: 'ffa07a',
          ZsHgYF: '20b2aa',
          ZskyXe: '87cefa',
          ZUWay: '778899',
          ZUgYy: '778899',
          ZstAlXe: 'b0c4de',
          ZLw: 'ffffe0',
          lime: 'ff00',
          limegYF: '32cd32',
          lRF: 'faf0e6',
          magFta: 'ff00ff',
          maPon: '800000',
          VaquamarRe: '66cdaa',
          VXe: 'cd',
          VScEd: 'ba55d3',
          VpurpN: '9370db',
          VsHgYF: '3cb371',
          VUXe: '7b68ee',
          VsprRggYF: 'fa9a',
          VQe: '48d1cc',
          VviTetYd: 'c71585',
          midnightXe: '191970',
          mRtcYam: 'f5fffa',
          mistyPse: 'ffe4e1',
          moccasR: 'ffe4b5',
          navajowEte: 'ffdead',
          navy: '80',
          Tdlace: 'fdf5e6',
          Tive: '808000',
          TivedBb: '6b8e23',
          Sange: 'ffa500',
          SangeYd: 'ff4500',
          ScEd: 'da70d6',
          pOegTMnPd: 'eee8aa',
          pOegYF: '98fb98',
          pOeQe: 'afeeee',
          pOeviTetYd: 'db7093',
          papayawEp: 'ffefd5',
          pHKpuff: 'ffdab9',
          peru: 'cd853f',
          pRk: 'ffc0cb',
          plum: 'dda0dd',
          powMrXe: 'b0e0e6',
          purpN: '800080',
          YbeccapurpN: '663399',
          Yd: 'ff0000',
          Psybrown: 'bc8f8f',
          PyOXe: '4169e1',
          saddNbPwn: '8b4513',
          sOmon: 'fa8072',
          sandybPwn: 'f4a460',
          sHgYF: '2e8b57',
          sHshell: 'fff5ee',
          siFna: 'a0522d',
          silver: 'c0c0c0',
          skyXe: '87ceeb',
          UXe: '6a5acd',
          UWay: '708090',
          UgYy: '708090',
          snow: 'fffafa',
          sprRggYF: 'ff7f',
          stAlXe: '4682b4',
          tan: 'd2b48c',
          teO: '8080',
          tEstN: 'd8bfd8',
          tomato: 'ff6347',
          Qe: '40e0d0',
          viTet: 'ee82ee',
          JHt: 'f5deb3',
          wEte: 'ffffff',
          wEtesmoke: 'f5f5f5',
          Lw: 'ffff00',
          LwgYF: '9acd32',
        };
      let Dt;
      function Mt(t, e, i) {
        if (t) {
          let n = wt(t);
          (n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
            (n = kt(n)),
            (t.r = n[0]),
            (t.g = n[1]),
            (t.b = n[2]);
        }
      }
      function Et(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function Pt(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = pt(t[3])))
            : ((e = Et(t, { r: 0, g: 0, b: 0, a: 1 })).a = pt(e.a)),
          e
        );
      }
      function At(t) {
        return 'r' === t.charAt(0)
          ? (function (t) {
              const e = mt.exec(t);
              let i,
                n,
                s,
                r = 255;
              if (e) {
                if (e[7] !== i) {
                  const t = +e[7];
                  r = 255 & (e[8] ? ut(t) : 255 * t);
                }
                return (
                  (i = +e[1]),
                  (n = +e[3]),
                  (s = +e[5]),
                  (i = 255 & (e[2] ? ut(i) : i)),
                  (n = 255 & (e[4] ? ut(n) : n)),
                  (s = 255 & (e[6] ? ut(s) : s)),
                  { r: i, g: n, b: s, a: r }
                );
              }
            })(t)
          : (function (t) {
              const e = vt.exec(t);
              let i,
                n = 255;
              if (!e) return;
              e[5] !== i && (n = e[6] ? ut(+e[5]) : pt(+e[5]));
              const s = Ct(+e[2]),
                r = +e[3] / 100,
                a = +e[4] / 100;
              return (
                (i =
                  'hwb' === e[1]
                    ? (function (t, e, i) {
                        return _t(xt, t, e, i);
                      })(s, r, a)
                    : 'hsv' === e[1]
                    ? (function (t, e, i) {
                        return _t(yt, t, e, i);
                      })(s, r, a)
                    : kt(s, r, a)),
                { r: i[0], g: i[1], b: i[2], a: n }
              );
            })(t);
      }
      class Lt {
        constructor(t) {
          if (t instanceof Lt) return t;
          const e = typeof t;
          let i;
          var n, s, r;
          'object' === e
            ? (i = Pt(t))
            : 'string' === e &&
              ((r = (n = t).length),
              '#' === n[0] &&
                (4 === r || 5 === r
                  ? (s = {
                      r: 255 & (17 * rt[n[1]]),
                      g: 255 & (17 * rt[n[2]]),
                      b: 255 & (17 * rt[n[3]]),
                      a: 5 === r ? 17 * rt[n[4]] : 255,
                    })
                  : (7 !== r && 9 !== r) ||
                    (s = {
                      r: (rt[n[1]] << 4) | rt[n[2]],
                      g: (rt[n[3]] << 4) | rt[n[4]],
                      b: (rt[n[5]] << 4) | rt[n[6]],
                      a: 9 === r ? (rt[n[7]] << 4) | rt[n[8]] : 255,
                    })),
              (i =
                s ||
                (function (t) {
                  Dt ||
                    ((Dt = (function () {
                      const t = {},
                        e = Object.keys(Tt),
                        i = Object.keys(St);
                      let n, s, r, a, o;
                      for (n = 0; n < e.length; n++) {
                        for (a = o = e[n], s = 0; s < i.length; s++)
                          (r = i[s]), (o = o.replace(r, St[r]));
                        (r = parseInt(Tt[a], 16)),
                          (t[o] = [(r >> 16) & 255, (r >> 8) & 255, 255 & r]);
                      }
                      return t;
                    })()),
                    (Dt.transparent = [0, 0, 0, 0]));
                  const e = Dt[t.toLowerCase()];
                  return (
                    e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
                  );
                })(t) ||
                At(t))),
            (this._rgb = i),
            (this._valid = !!i);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = Et(this._rgb);
          return t && (t.a = ft(t.a)), t;
        }
        set rgb(t) {
          this._rgb = Pt(t);
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? `rgba(${t.r}, ${t.g}, ${t.b}, ${ft(t.a)})`
                  : `rgb(${t.r}, ${t.g}, ${t.b})`)
            : this._rgb;
          var t;
        }
        hexString() {
          return this._valid
            ? ((t = this._rgb),
              (e = (function (t) {
                return ct(t.r) && ct(t.g) && ct(t.b) && ct(t.a);
              })(t)
                ? ot
                : lt),
              t ? '#' + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : '') : t)
            : this._rgb;
          var t, e;
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return;
                const e = wt(t),
                  i = e[0],
                  n = gt(e[1]),
                  s = gt(e[2]);
                return t.a < 255
                  ? `hsla(${i}, ${n}%, ${s}%, ${ft(t.a)})`
                  : `hsl(${i}, ${n}%, ${s}%)`;
              })(this._rgb)
            : this._rgb;
        }
        mix(t, e) {
          const i = this;
          if (t) {
            const n = i.rgb,
              s = t.rgb;
            let r;
            const a = e === r ? 0.5 : e,
              o = 2 * a - 1,
              l = n.a - s.a,
              c = ((o * l == -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
            (r = 1 - c),
              (n.r = 255 & (c * n.r + r * s.r + 0.5)),
              (n.g = 255 & (c * n.g + r * s.g + 0.5)),
              (n.b = 255 & (c * n.b + r * s.b + 0.5)),
              (n.a = a * n.a + (1 - a) * s.a),
              (i.rgb = n);
          }
          return i;
        }
        clone() {
          return new Lt(this.rgb);
        }
        alpha(t) {
          return (this._rgb.a = pt(t)), this;
        }
        clearer(t) {
          return (this._rgb.a *= 1 - t), this;
        }
        greyscale() {
          const t = this._rgb,
            e = ht(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        }
        opaquer(t) {
          return (this._rgb.a *= 1 + t), this;
        }
        negate() {
          const t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        }
        lighten(t) {
          return Mt(this._rgb, 2, t), this;
        }
        darken(t) {
          return Mt(this._rgb, 2, -t), this;
        }
        saturate(t) {
          return Mt(this._rgb, 1, t), this;
        }
        desaturate(t) {
          return Mt(this._rgb, 1, -t), this;
        }
        rotate(t) {
          return (
            (function (t, e) {
              var i = wt(t);
              (i[0] = Ct(i[0] + e)),
                (i = kt(i)),
                (t.r = i[0]),
                (t.g = i[1]),
                (t.b = i[2]);
            })(this._rgb, t),
            this
          );
        }
      }
      function Ot(t) {
        return new Lt(t);
      }
      const Nt = t => t instanceof CanvasGradient || t instanceof CanvasPattern;
      function It(t) {
        return Nt(t) ? t : Ot(t);
      }
      function $t(t) {
        return Nt(t) ? t : Ot(t).saturate(0.5).darken(0.1).hexString();
      }
      const Ft = Object.create(null),
        Rt = Object.create(null);
      function Ht(t, e) {
        if (!e) return t;
        const i = e.split('.');
        for (let e = 0, n = i.length; e < n; ++e) {
          const n = i[e];
          t = t[n] || (t[n] = Object.create(null));
        }
        return t;
      }
      function jt(t, e, i) {
        return 'string' == typeof e ? _(Ht(t, e), i) : _(Ht(t, ''), e);
      }
      var zt = new (class {
        constructor(t) {
          (this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: 'normal',
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => $t(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => $t(e.borderColor)),
            (this.hoverColor = (t, e) => $t(e.color)),
            (this.indexAxis = 'x'),
            (this.interaction = { mode: 'nearest', intersect: !0 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t);
        }
        set(t, e) {
          return jt(this, t, e);
        }
        get(t) {
          return Ht(this, t);
        }
        describe(t, e) {
          return jt(Rt, t, e);
        }
        override(t, e) {
          return jt(Ft, t, e);
        }
        route(t, e, i, n) {
          const s = Ht(this, t),
            r = Ht(this, i),
            a = '_' + e;
          Object.defineProperties(s, {
            [a]: { value: s[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[a],
                  e = r[n];
                return d(t) ? Object.assign({}, e, t) : f(t, e);
              },
              set(t) {
                this[a] = t;
              },
            },
          });
        }
      })({
        _scriptable: t => !t.startsWith('on'),
        _indexable: t => 'events' !== t,
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function Vt(t, e, i, n, s) {
        let r = e[s];
        return r || ((r = e[s] = t.measureText(s).width), i.push(s)), r > n && (n = r), n;
      }
      function Bt(t, e, i, n) {
        let s = ((n = n || {}).data = n.data || {}),
          r = (n.garbageCollect = n.garbageCollect || []);
        n.font !== e && ((s = n.data = {}), (r = n.garbageCollect = []), (n.font = e)),
          t.save(),
          (t.font = e);
        let a = 0;
        const o = i.length;
        let l, c, d, u, p;
        for (l = 0; l < o; l++)
          if (((u = i[l]), null != u && !0 !== h(u))) a = Vt(t, s, r, a, u);
          else if (h(u))
            for (c = 0, d = u.length; c < d; c++)
              (p = u[c]), null == p || h(p) || (a = Vt(t, s, r, a, p));
        t.restore();
        const f = r.length / 2;
        if (f > i.length) {
          for (l = 0; l < f; l++) delete s[r[l]];
          r.splice(0, f);
        }
        return a;
      }
      function Wt(t, e, i) {
        const n = t.currentDevicePixelRatio,
          s = 0 !== i ? Math.max(i / 2, 0.5) : 0;
        return Math.round((e - s) * n) / n + s;
      }
      function qt(t, e) {
        (e = e || t.getContext('2d')).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore();
      }
      function Gt(t, e, i, n) {
        let s, r, a, o, l;
        const c = e.pointStyle,
          h = e.rotation,
          d = e.radius;
        let u = (h || 0) * I;
        if (
          c &&
          'object' == typeof c &&
          ((s = c.toString()),
          '[object HTMLImageElement]' === s || '[object HTMLCanvasElement]' === s)
        )
          return (
            t.save(),
            t.translate(i, n),
            t.rotate(u),
            t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
            void t.restore()
          );
        if (!(isNaN(d) || d <= 0)) {
          switch ((t.beginPath(), c)) {
            default:
              t.arc(i, n, d, 0, L), t.closePath();
              break;
            case 'triangle':
              t.moveTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
                (u += R),
                t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
                (u += R),
                t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
                t.closePath();
              break;
            case 'rectRounded':
              (l = 0.516 * d),
                (o = d - l),
                (r = Math.cos(u + F) * o),
                (a = Math.sin(u + F) * o),
                t.arc(i - r, n - a, l, u - A, u - $),
                t.arc(i + a, n - r, l, u - $, u),
                t.arc(i + r, n + a, l, u, u + $),
                t.arc(i - a, n + r, l, u + $, u + A),
                t.closePath();
              break;
            case 'rect':
              if (!h) {
                (o = Math.SQRT1_2 * d), t.rect(i - o, n - o, 2 * o, 2 * o);
                break;
              }
              u += F;
            case 'rectRot':
              (r = Math.cos(u) * d),
                (a = Math.sin(u) * d),
                t.moveTo(i - r, n - a),
                t.lineTo(i + a, n - r),
                t.lineTo(i + r, n + a),
                t.lineTo(i - a, n + r),
                t.closePath();
              break;
            case 'crossRot':
              u += F;
            case 'cross':
              (r = Math.cos(u) * d),
                (a = Math.sin(u) * d),
                t.moveTo(i - r, n - a),
                t.lineTo(i + r, n + a),
                t.moveTo(i + a, n - r),
                t.lineTo(i - a, n + r);
              break;
            case 'star':
              (r = Math.cos(u) * d),
                (a = Math.sin(u) * d),
                t.moveTo(i - r, n - a),
                t.lineTo(i + r, n + a),
                t.moveTo(i + a, n - r),
                t.lineTo(i - a, n + r),
                (u += F),
                (r = Math.cos(u) * d),
                (a = Math.sin(u) * d),
                t.moveTo(i - r, n - a),
                t.lineTo(i + r, n + a),
                t.moveTo(i + a, n - r),
                t.lineTo(i - a, n + r);
              break;
            case 'line':
              (r = Math.cos(u) * d),
                (a = Math.sin(u) * d),
                t.moveTo(i - r, n - a),
                t.lineTo(i + r, n + a);
              break;
            case 'dash':
              t.moveTo(i, n), t.lineTo(i + Math.cos(u) * d, n + Math.sin(u) * d);
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function Yt(t, e, i) {
        return (
          (i = i || 0.5),
          !e ||
            (t &&
              t.x > e.left - i &&
              t.x < e.right + i &&
              t.y > e.top - i &&
              t.y < e.bottom + i)
        );
      }
      function Ut(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function Xt(t) {
        t.restore();
      }
      function Kt(t, e, i, n, s) {
        if (!e) return t.lineTo(i.x, i.y);
        if ('middle' === s) {
          const n = (e.x + i.x) / 2;
          t.lineTo(n, e.y), t.lineTo(n, i.y);
        } else ('after' === s) != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y);
      }
      function Jt(t, e, i, n) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(
          n ? e.cp1x : e.cp2x,
          n ? e.cp1y : e.cp2y,
          n ? i.cp2x : i.cp1x,
          n ? i.cp2y : i.cp1y,
          i.x,
          i.y,
        );
      }
      function Zt(t, e, i, n, s, r = {}) {
        const a = h(e) ? e : [e],
          o = r.strokeWidth > 0 && '' !== r.strokeColor;
        let l, d;
        for (
          t.save(),
            t.font = s.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]),
                c(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, r),
            l = 0;
          l < a.length;
          ++l
        )
          (d = a[l]),
            o &&
              (r.strokeColor && (t.strokeStyle = r.strokeColor),
              c(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
              t.strokeText(d, i, n, r.maxWidth)),
            t.fillText(d, i, n, r.maxWidth),
            Qt(t, i, n, d, r),
            (n += s.lineHeight);
        t.restore();
      }
      function Qt(t, e, i, n, s) {
        if (s.strikethrough || s.underline) {
          const r = t.measureText(n),
            a = e - r.actualBoundingBoxLeft,
            o = e + r.actualBoundingBoxRight,
            l = i - r.actualBoundingBoxAscent,
            c = i + r.actualBoundingBoxDescent,
            h = s.strikethrough ? (l + c) / 2 : c;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = s.decorationWidth || 2),
            t.moveTo(a, h),
            t.lineTo(o, h),
            t.stroke();
        }
      }
      function te(t, e) {
        const { x: i, y: n, w: s, h: r, radius: a } = e;
        t.arc(i + a.topLeft, n + a.topLeft, a.topLeft, -$, A, !0),
          t.lineTo(i, n + r - a.bottomLeft),
          t.arc(i + a.bottomLeft, n + r - a.bottomLeft, a.bottomLeft, A, $, !0),
          t.lineTo(i + s - a.bottomRight, n + r),
          t.arc(i + s - a.bottomRight, n + r - a.bottomRight, a.bottomRight, $, 0, !0),
          t.lineTo(i + s, n + a.topRight),
          t.arc(i + s - a.topRight, n + a.topRight, a.topRight, 0, -$, !0),
          t.lineTo(i + a.topLeft, n);
      }
      const ee = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        ie = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
        );
      function ne(t, e) {
        const i = ('' + t).match(ee);
        if (!i || 'normal' === i[1]) return 1.2 * e;
        switch (((t = +i[2]), i[3])) {
          case 'px':
            return t;
          case '%':
            t /= 100;
        }
        return e * t;
      }
      function se(t, e) {
        const i = {},
          n = d(e),
          s = n ? Object.keys(e) : e,
          r = d(t) ? (n ? i => f(t[i], t[e[i]]) : e => t[e]) : () => t;
        for (const t of s) i[t] = +r(t) || 0;
        return i;
      }
      function re(t) {
        return se(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
      }
      function ae(t) {
        return se(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
      }
      function oe(t) {
        const e = re(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function le(t, e) {
        (t = t || {}), (e = e || zt.font);
        let i = f(t.size, e.size);
        'string' == typeof i && (i = parseInt(i, 10));
        let n = f(t.style, e.style);
        n &&
          !('' + n).match(ie) &&
          (console.warn('Invalid font style specified: "' + n + '"'), (n = ''));
        const s = {
          family: f(t.family, e.family),
          lineHeight: ne(f(t.lineHeight, e.lineHeight), i),
          size: i,
          style: n,
          weight: f(t.weight, e.weight),
          string: '',
        };
        return (
          (s.string = (function (t) {
            return !t || c(t.size) || c(t.family)
              ? null
              : (t.style ? t.style + ' ' : '') +
                  (t.weight ? t.weight + ' ' : '') +
                  t.size +
                  'px ' +
                  t.family;
          })(s)),
          s
        );
      }
      function ce(t, e, i, n) {
        let s,
          r,
          a,
          o = !0;
        for (s = 0, r = t.length; s < r; ++s)
          if (
            ((a = t[s]),
            void 0 !== a &&
              (void 0 !== e && 'function' == typeof a && ((a = a(e)), (o = !1)),
              void 0 !== i && h(a) && ((a = a[i % a.length]), (o = !1)),
              void 0 !== a))
          )
            return n && !o && (n.cacheable = !1), a;
      }
      function he(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function de(t, e, i) {
        i = i || (i => t[i] < e);
        let n,
          s = t.length - 1,
          r = 0;
        for (; s - r > 1; ) (n = (r + s) >> 1), i(n) ? (r = n) : (s = n);
        return { lo: r, hi: s };
      }
      const ue = (t, e, i) => de(t, i, n => t[n][e] < i),
        pe = (t, e, i) => de(t, i, n => t[n][e] >= i),
        fe = ['push', 'pop', 'shift', 'splice', 'unshift'];
      function ge(t, e) {
        const i = t._chartjs;
        if (!i) return;
        const n = i.listeners,
          s = n.indexOf(e);
        -1 !== s && n.splice(s, 1),
          n.length > 0 ||
            (fe.forEach(e => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function me(t) {
        const e = new Set();
        let i, n;
        for (i = 0, n = t.length; i < n; ++i) e.add(t[i]);
        return e.size === n ? t : Array.from(e);
      }
      function ve(t, e = [''], i = t, n, s = () => t[0]) {
        M(n) || (n = Me('_fallback', t));
        const r = {
          [Symbol.toStringTag]: 'Object',
          _cacheable: !0,
          _scopes: t,
          _rootScopes: i,
          _fallback: n,
          _getTarget: s,
          override: s => ve([s, ...t], e, i, n),
        };
        return new Proxy(r, {
          deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
          get: (i, n) =>
            _e(i, n, () =>
              (function (t, e, i, n) {
                let s;
                for (const r of e)
                  if (((s = Me(xe(r, t), i)), M(s))) return we(t, s) ? Te(i, n, t, s) : s;
              })(n, e, t, i),
            ),
          getOwnPropertyDescriptor: (t, e) =>
            Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => Ee(t).includes(e),
          ownKeys: t => Ee(t),
          set(t, e, i) {
            const n = t._storage || (t._storage = s());
            return (t[e] = n[e] = i), delete t._keys, !0;
          },
        });
      }
      function be(t, e, i, n) {
        const s = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: i,
          _stack: new Set(),
          _descriptors: ye(t, n),
          setContext: e => be(t, e, i, n),
          override: s => be(t.override(s), e, i, n),
        };
        return new Proxy(s, {
          deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
          get: (t, e, i) =>
            _e(t, e, () =>
              (function (t, e, i) {
                const { _proxy: n, _context: s, _subProxy: r, _descriptors: a } = t;
                let o = n[e];
                return (
                  E(o) &&
                    a.isScriptable(e) &&
                    (o = (function (t, e, i, n) {
                      const { _proxy: s, _context: r, _subProxy: a, _stack: o } = i;
                      if (o.has(t))
                        throw new Error(
                          'Recursion detected: ' + Array.from(o).join('->') + '->' + t,
                        );
                      return (
                        o.add(t),
                        (e = e(r, a || n)),
                        o.delete(t),
                        we(t, e) && (e = Te(s._scopes, s, t, e)),
                        e
                      );
                    })(e, o, t, i)),
                  h(o) &&
                    o.length &&
                    (o = (function (t, e, i, n) {
                      const { _proxy: s, _context: r, _subProxy: a, _descriptors: o } = i;
                      if (M(r.index) && n(t)) e = e[r.index % e.length];
                      else if (d(e[0])) {
                        const i = e,
                          n = s._scopes.filter(t => t !== i);
                        e = [];
                        for (const l of i) {
                          const i = Te(n, s, t, l);
                          e.push(be(i, r, a && a[t], o));
                        }
                      }
                      return e;
                    })(e, o, t, a.isIndexable)),
                  we(e, o) && (o = be(o, s, r && r[e], a)),
                  o
                );
              })(t, e, i),
            ),
          getOwnPropertyDescriptor: (e, i) =>
            e._descriptors.allKeys
              ? Reflect.has(t, i)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, i) => Reflect.has(t, i),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, i, n) => ((t[i] = n), delete e[i], !0),
        });
      }
      function ye(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: i = e.scriptable,
          _indexable: n = e.indexable,
          _allKeys: s = e.allKeys,
        } = t;
        return {
          allKeys: s,
          scriptable: i,
          indexable: n,
          isScriptable: E(i) ? i : () => i,
          isIndexable: E(n) ? n : () => n,
        };
      }
      const xe = (t, e) => (t ? t + D(e) : e),
        we = (t, e) =>
          d(e) &&
          'adapters' !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function _e(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        const n = i();
        return (t[e] = n), n;
      }
      function ke(t, e, i) {
        return E(t) ? t(e, i) : t;
      }
      const Ce = (t, e) => (!0 === t ? e : 'string' == typeof t ? T(e, t) : void 0);
      function Se(t, e, i, n, s) {
        for (const r of e) {
          const e = Ce(i, r);
          if (e) {
            t.add(e);
            const r = ke(e._fallback, i, s);
            if (M(r) && r !== i && r !== n) return r;
          } else if (!1 === e && M(n) && i !== n) return null;
        }
        return !1;
      }
      function Te(t, e, i, n) {
        const s = e._rootScopes,
          r = ke(e._fallback, i, n),
          a = [...t, ...s],
          o = new Set();
        o.add(n);
        let l = De(o, a, i, r || i, n);
        return (
          null !== l &&
          (!M(r) || r === i || ((l = De(o, a, r, l, n)), null !== l)) &&
          ve(Array.from(o), [''], s, r, () =>
            (function (t, e, i) {
              const n = t._getTarget();
              e in n || (n[e] = {});
              const s = n[e];
              return h(s) && d(i) ? i : s;
            })(e, i, n),
          )
        );
      }
      function De(t, e, i, n, s) {
        for (; i; ) i = Se(t, e, i, n, s);
        return i;
      }
      function Me(t, e) {
        for (const i of e) {
          if (!i) continue;
          const e = i[t];
          if (M(e)) return e;
        }
      }
      function Ee(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set();
                for (const i of t)
                  for (const t of Object.keys(i).filter(t => !t.startsWith('_')))
                    e.add(t);
                return Array.from(e);
              })(t._scopes)),
          e
        );
      }
      const Pe = Number.EPSILON || 1e-14,
        Ae = (t, e) => e < t.length && !t[e].skip && t[e],
        Le = t => ('x' === t ? 'y' : 'x');
      function Oe(t, e, i, n) {
        const s = t.skip ? e : t,
          r = e,
          a = i.skip ? e : i,
          o = X(r, s),
          l = X(a, r);
        let c = o / (o + l),
          h = l / (o + l);
        (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
        const d = n * c,
          u = n * h;
        return {
          previous: { x: r.x - d * (a.x - s.x), y: r.y - d * (a.y - s.y) },
          next: { x: r.x + u * (a.x - s.x), y: r.y + u * (a.y - s.y) },
        };
      }
      function Ne(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }
      function Ie(t, e, i, n, s) {
        let r, a, o, l;
        if (
          (e.spanGaps && (t = t.filter(t => !t.skip)),
          'monotone' === e.cubicInterpolationMode)
        )
          !(function (t, e = 'x') {
            const i = Le(e),
              n = t.length,
              s = Array(n).fill(0),
              r = Array(n);
            let a,
              o,
              l,
              c = Ae(t, 0);
            for (a = 0; a < n; ++a)
              if (((o = l), (l = c), (c = Ae(t, a + 1)), l)) {
                if (c) {
                  const t = c[e] - l[e];
                  s[a] = 0 !== t ? (c[i] - l[i]) / t : 0;
                }
                r[a] = o
                  ? c
                    ? j(s[a - 1]) !== j(s[a])
                      ? 0
                      : (s[a - 1] + s[a]) / 2
                    : s[a - 1]
                  : s[a];
              }
            !(function (t, e, i) {
              const n = t.length;
              let s,
                r,
                a,
                o,
                l,
                c = Ae(t, 0);
              for (let h = 0; h < n - 1; ++h)
                (l = c),
                  (c = Ae(t, h + 1)),
                  l &&
                    c &&
                    (B(e[h], 0, Pe)
                      ? (i[h] = i[h + 1] = 0)
                      : ((s = i[h] / e[h]),
                        (r = i[h + 1] / e[h]),
                        (o = Math.pow(s, 2) + Math.pow(r, 2)),
                        o <= 9 ||
                          ((a = 3 / Math.sqrt(o)),
                          (i[h] = s * a * e[h]),
                          (i[h + 1] = r * a * e[h]))));
            })(t, s, r),
              (function (t, e, i = 'x') {
                const n = Le(i),
                  s = t.length;
                let r,
                  a,
                  o,
                  l = Ae(t, 0);
                for (let c = 0; c < s; ++c) {
                  if (((a = o), (o = l), (l = Ae(t, c + 1)), !o)) continue;
                  const s = o[i],
                    h = o[n];
                  a &&
                    ((r = (s - a[i]) / 3),
                    (o[`cp1${i}`] = s - r),
                    (o[`cp1${n}`] = h - r * e[c])),
                    l &&
                      ((r = (l[i] - s) / 3),
                      (o[`cp2${i}`] = s + r),
                      (o[`cp2${n}`] = h + r * e[c]));
                }
              })(t, r, e);
          })(t, s);
        else {
          let i = n ? t[t.length - 1] : t[0];
          for (r = 0, a = t.length; r < a; ++r)
            (o = t[r]),
              (l = Oe(i, o, t[Math.min(r + 1, a - (n ? 0 : 1)) % a], e.tension)),
              (o.cp1x = l.previous.x),
              (o.cp1y = l.previous.y),
              (o.cp2x = l.next.x),
              (o.cp2y = l.next.y),
              (i = o);
        }
        e.capBezierPoints &&
          (function (t, e) {
            let i,
              n,
              s,
              r,
              a,
              o = Yt(t[0], e);
            for (i = 0, n = t.length; i < n; ++i)
              (a = r),
                (r = o),
                (o = i < n - 1 && Yt(t[i + 1], e)),
                r &&
                  ((s = t[i]),
                  a &&
                    ((s.cp1x = Ne(s.cp1x, e.left, e.right)),
                    (s.cp1y = Ne(s.cp1y, e.top, e.bottom))),
                  o &&
                    ((s.cp2x = Ne(s.cp2x, e.left, e.right)),
                    (s.cp2y = Ne(s.cp2y, e.top, e.bottom))));
          })(t, i);
      }
      function $e() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
      }
      function Fe(t) {
        let e = t.parentNode;
        return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
      }
      function Re(t, e, i) {
        let n;
        return (
          'string' == typeof t
            ? ((n = parseInt(t, 10)),
              -1 !== t.indexOf('%') && (n = (n / 100) * e.parentNode[i]))
            : (n = t),
          n
        );
      }
      const He = t => window.getComputedStyle(t, null),
        je = ['top', 'right', 'bottom', 'left'];
      function ze(t, e, i) {
        const n = {};
        i = i ? '-' + i : '';
        for (let s = 0; s < 4; s++) {
          const r = je[s];
          n[r] = parseFloat(t[e + '-' + r + i]) || 0;
        }
        return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
      }
      function Ve(t, e) {
        const { canvas: i, currentDevicePixelRatio: n } = e,
          s = He(i),
          r = 'border-box' === s.boxSizing,
          a = ze(s, 'padding'),
          o = ze(s, 'border', 'width'),
          {
            x: l,
            y: c,
            box: h,
          } = (function (t, e) {
            const i = t.native || t,
              n = i.touches,
              s = n && n.length ? n[0] : i,
              { offsetX: r, offsetY: a } = s;
            let o,
              l,
              c = !1;
            if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(r, a, i.target))
              (o = r), (l = a);
            else {
              const t = e.getBoundingClientRect();
              (o = s.clientX - t.left), (l = s.clientY - t.top), (c = !0);
            }
            return { x: o, y: l, box: c };
          })(t, i),
          d = a.left + (h && o.left),
          u = a.top + (h && o.top);
        let { width: p, height: f } = e;
        return (
          r && ((p -= a.width + o.width), (f -= a.height + o.height)),
          {
            x: Math.round((((l - d) / p) * i.width) / n),
            y: Math.round((((c - u) / f) * i.height) / n),
          }
        );
      }
      const Be = t => Math.round(10 * t) / 10;
      function We(t, e, i) {
        const n = e || 1,
          s = Math.floor(t.height * n),
          r = Math.floor(t.width * n);
        (t.height = s / n), (t.width = r / n);
        const a = t.canvas;
        return (
          a.style &&
            (i || (!a.style.height && !a.style.width)) &&
            ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
          (t.currentDevicePixelRatio !== n || a.height !== s || a.width !== r) &&
            ((t.currentDevicePixelRatio = n),
            (a.height = s),
            (a.width = r),
            t.ctx.setTransform(n, 0, 0, n, 0, 0),
            !0)
        );
      }
      const qe = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          window.addEventListener('test', null, e),
            window.removeEventListener('test', null, e);
        } catch (t) {}
        return t;
      })();
      function Ge(t, e) {
        const i = (function (t, e) {
            return He(t).getPropertyValue(e);
          })(t, e),
          n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? +n[1] : void 0;
      }
      function Ye(t, e, i, n) {
        return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
      }
      function Ue(t, e, i, n) {
        return {
          x: t.x + i * (e.x - t.x),
          y:
            'middle' === n
              ? i < 0.5
                ? t.y
                : e.y
              : 'after' === n
              ? i < 1
                ? t.y
                : e.y
              : i > 0
              ? e.y
              : t.y,
        };
      }
      function Xe(t, e, i, n) {
        const s = { x: t.cp2x, y: t.cp2y },
          r = { x: e.cp1x, y: e.cp1y },
          a = Ye(t, s, i),
          o = Ye(s, r, i),
          l = Ye(r, e, i),
          c = Ye(a, o, i),
          h = Ye(o, l, i);
        return Ye(c, h, i);
      }
      const Ke = new Map();
      function Je(t, e, i) {
        return (function (t, e) {
          e = e || {};
          const i = t + JSON.stringify(e);
          let n = Ke.get(i);
          return n || ((n = new Intl.NumberFormat(t, e)), Ke.set(i, n)), n;
        })(e, i).format(t);
      }
      function Ze(t, e, i) {
        return t
          ? (function (t, e) {
              return {
                x: i => t + t + e - i,
                setWidth(t) {
                  e = t;
                },
                textAlign: t => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              };
            })(e, i)
          : {
              x: t => t,
              setWidth(t) {},
              textAlign: t => t,
              xPlus: (t, e) => t + e,
              leftForLtr: (t, e) => t,
            };
      }
      function Qe(t, e) {
        let i, n;
        ('ltr' !== e && 'rtl' !== e) ||
          ((i = t.canvas.style),
          (n = [i.getPropertyValue('direction'), i.getPropertyPriority('direction')]),
          i.setProperty('direction', e, 'important'),
          (t.prevTextDirection = n));
      }
      function ti(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty('direction', e[0], e[1]));
      }
      function ei(t) {
        return 'angle' === t
          ? { between: Z, compare: K, normalize: J }
          : { between: tt, compare: (t, e) => t - e, normalize: t => t };
      }
      function ii({ start: t, end: e, count: i, loop: n, style: s }) {
        return { start: t % i, end: e % i, loop: n && (e - t + 1) % i == 0, style: s };
      }
      function ni(t, e, i) {
        if (!i) return [t];
        const { property: n, start: s, end: r } = i,
          a = e.length,
          { compare: o, between: l, normalize: c } = ei(n),
          {
            start: h,
            end: d,
            loop: u,
            style: p,
          } = (function (t, e, i) {
            const { property: n, start: s, end: r } = i,
              { between: a, normalize: o } = ei(n),
              l = e.length;
            let c,
              h,
              { start: d, end: u, loop: p } = t;
            if (p) {
              for (d += l, u += l, c = 0, h = l; c < h && a(o(e[d % l][n]), s, r); ++c)
                d--, u--;
              (d %= l), (u %= l);
            }
            return u < d && (u += l), { start: d, end: u, loop: p, style: t.style };
          })(t, e, i),
          f = [];
        let g,
          m,
          v,
          b = !1,
          y = null;
        for (let t = h, i = h; t <= d; ++t)
          (m = e[t % a]),
            m.skip ||
              ((g = c(m[n])),
              g !== v &&
                ((b = l(g, s, r)),
                null === y &&
                  (b || (l(s, v, g) && 0 !== o(s, v))) &&
                  (y = 0 === o(g, s) ? t : i),
                null !== y &&
                  (!b || 0 === o(r, g) || l(r, v, g)) &&
                  (f.push(ii({ start: y, end: t, loop: u, count: a, style: p })),
                  (y = null)),
                (i = t),
                (v = g)));
        return (
          null !== y && f.push(ii({ start: y, end: d, loop: u, count: a, style: p })), f
        );
      }
      function si(t, e) {
        const i = [],
          n = t.segments;
        for (let s = 0; s < n.length; s++) {
          const r = ni(n[s], t.points, e);
          r.length && i.push(...r);
        }
        return i;
      }
      function ri(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function ai(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e);
      }
      var oi = new (class {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(t, e, i, n) {
          const s = e.listeners[n],
            r = e.duration;
          s.forEach(n =>
            n({
              chart: t,
              initial: e.initial,
              numSteps: r,
              currentStep: Math.min(i - e.start, r),
            }),
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = n.call(window, () => {
              this._update(), (this._request = null), this._running && this._refresh();
            })));
        }
        _update(t = Date.now()) {
          let e = 0;
          this._charts.forEach((i, n) => {
            if (!i.running || !i.items.length) return;
            const s = i.items;
            let r,
              a = s.length - 1,
              o = !1;
            for (; a >= 0; --a)
              (r = s[a]),
                r._active
                  ? (r._total > i.duration && (i.duration = r._total),
                    r.tick(t),
                    (o = !0))
                  : ((s[a] = s[s.length - 1]), s.pop());
            o && (n.draw(), this._notify(n, i, t, 'progress')),
              s.length ||
                ((i.running = !1), this._notify(n, i, t, 'complete'), (i.initial = !1)),
              (e += s.length);
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1);
        }
        _getAnims(t) {
          const e = this._charts;
          let i = e.get(t);
          return (
            i ||
              ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, i)),
            i
          );
        }
        listen(t, e, i) {
          this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const i = e.items;
          let n = i.length - 1;
          for (; n >= 0; --n) i[n].cancel();
          (e.items = []), this._notify(t, e, Date.now(), 'complete');
        }
        remove(t) {
          return this._charts.delete(t);
        }
      })();
      const li = 'transparent',
        ci = {
          boolean: (t, e, i) => (i > 0.5 ? e : t),
          color(t, e, i) {
            const n = It(t || li),
              s = n.valid && It(e || li);
            return s && s.valid ? s.mix(n, i).hexString() : e;
          },
          number: (t, e, i) => t + (e - t) * i,
        };
      class hi {
        constructor(t, e, i, n) {
          const s = e[i];
          n = ce([t.to, n, s, t.from]);
          const r = ce([t.from, s, n]);
          (this._active = !0),
            (this._fn = t.fn || ci[t.type || typeof r]),
            (this._easing = st[t.easing] || st.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = i),
            (this._from = r),
            (this._to = n),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(t, e, i) {
          if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop],
              s = i - this._start,
              r = this._duration - s;
            (this._start = i),
              (this._duration = Math.floor(Math.max(r, t.duration))),
              (this._total += s),
              (this._loop = !!t.loop),
              (this._to = ce([t.to, e, n, t.from])),
              (this._from = ce([t.from, n, e]));
          }
        }
        cancel() {
          this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
          const e = t - this._start,
            i = this._duration,
            n = this._prop,
            s = this._from,
            r = this._loop,
            a = this._to;
          let o;
          if (((this._active = s !== a && (r || e < i)), !this._active))
            return (this._target[n] = a), void this._notify(!0);
          e < 0
            ? (this._target[n] = s)
            : ((o = (e / i) % 2),
              (o = r && o > 1 ? 2 - o : o),
              (o = this._easing(Math.min(1, Math.max(0, o)))),
              (this._target[n] = this._fn(s, a, o)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, i) => {
            t.push({ res: e, rej: i });
          });
        }
        _notify(t) {
          const e = t ? 'res' : 'rej',
            i = this._promises || [];
          for (let t = 0; t < i.length; t++) i[t][e]();
        }
      }
      zt.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      const di = Object.keys(zt.animation);
      zt.describe('animation', {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
      }),
        zt.set('animations', {
          colors: {
            type: 'color',
            properties: ['color', 'borderColor', 'backgroundColor'],
          },
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'borderWidth', 'radius', 'tension'],
          },
        }),
        zt.describe('animations', { _fallback: 'animation' }),
        zt.set('transitions', {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: 'transparent' },
              visible: { type: 'boolean', duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: 'transparent' },
              visible: { type: 'boolean', easing: 'linear', fn: t => 0 | t },
            },
          },
        });
      class ui {
        constructor(t, e) {
          (this._chart = t), (this._properties = new Map()), this.configure(e);
        }
        configure(t) {
          if (!d(t)) return;
          const e = this._properties;
          Object.getOwnPropertyNames(t).forEach(i => {
            const n = t[i];
            if (!d(n)) return;
            const s = {};
            for (const t of di) s[t] = n[t];
            ((h(n.properties) && n.properties) || [i]).forEach(t => {
              (t !== i && e.has(t)) || e.set(t, s);
            });
          });
        }
        _animateOptions(t, e) {
          const i = e.options,
            n = (function (t, e) {
              if (!e) return;
              let i = t.options;
              if (i)
                return (
                  i.$shared &&
                    (t.options = i =
                      Object.assign({}, i, { $shared: !1, $animations: {} })),
                  i
                );
              t.options = e;
            })(t, i);
          if (!n) return [];
          const s = this._createAnimations(n, i);
          return (
            i.$shared &&
              (function (t, e) {
                const i = [],
                  n = Object.keys(e);
                for (let e = 0; e < n.length; e++) {
                  const s = t[n[e]];
                  s && s.active() && i.push(s.wait());
                }
                return Promise.all(i);
              })(t.options.$animations, i).then(
                () => {
                  t.options = i;
                },
                () => {},
              ),
            s
          );
        }
        _createAnimations(t, e) {
          const i = this._properties,
            n = [],
            s = t.$animations || (t.$animations = {}),
            r = Object.keys(e),
            a = Date.now();
          let o;
          for (o = r.length - 1; o >= 0; --o) {
            const l = r[o];
            if ('$' === l.charAt(0)) continue;
            if ('options' === l) {
              n.push(...this._animateOptions(t, e));
              continue;
            }
            const c = e[l];
            let h = s[l];
            const d = i.get(l);
            if (h) {
              if (d && h.active()) {
                h.update(d, c, a);
                continue;
              }
              h.cancel();
            }
            d && d.duration ? ((s[l] = h = new hi(d, t, l, c)), n.push(h)) : (t[l] = c);
          }
          return n;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const i = this._createAnimations(t, e);
          return i.length ? (oi.add(this._chart, i), !0) : void 0;
        }
      }
      function pi(t, e) {
        const i = (t && t.options) || {},
          n = i.reverse,
          s = void 0 === i.min ? e : 0,
          r = void 0 === i.max ? e : 0;
        return { start: n ? r : s, end: n ? s : r };
      }
      function fi(t, e) {
        const i = [],
          n = t._getSortedDatasetMetas(e);
        let s, r;
        for (s = 0, r = n.length; s < r; ++s) i.push(n[s].index);
        return i;
      }
      function gi(t, e, i, n = {}) {
        const s = t.keys,
          r = 'single' === n.mode;
        let a, o, l, c;
        if (null !== e) {
          for (a = 0, o = s.length; a < o; ++a) {
            if (((l = +s[a]), l === i)) {
              if (n.all) continue;
              break;
            }
            (c = t.values[l]), u(c) && (r || 0 === e || j(e) === j(c)) && (e += c);
          }
          return e;
        }
      }
      function mi(t, e) {
        const i = t && t.options.stacked;
        return i || (void 0 === i && void 0 !== e.stack);
      }
      function vi(t, e, i) {
        const n = t[e] || (t[e] = {});
        return n[i] || (n[i] = {});
      }
      function bi(t, e, i, n) {
        for (const s of e.getMatchingVisibleMetas(n).reverse()) {
          const e = t[s.index];
          if ((i && e > 0) || (!i && e < 0)) return s.index;
        }
        return null;
      }
      function yi(t, e) {
        const { chart: i, _cachedMeta: n } = t,
          s = i._stacks || (i._stacks = {}),
          { iScale: r, vScale: a, index: o } = n,
          l = r.axis,
          c = a.axis,
          h = (function (t, e, i) {
            return `${t.id}.${e.id}.${i.stack || i.type}`;
          })(r, a, n),
          d = e.length;
        let u;
        for (let t = 0; t < d; ++t) {
          const i = e[t],
            { [l]: r, [c]: d } = i;
          (u = (i._stacks || (i._stacks = {}))[c] = vi(s, h, r)),
            (u[o] = d),
            (u._top = bi(u, a, !0, n.type)),
            (u._bottom = bi(u, a, !1, n.type));
        }
      }
      function xi(t, e) {
        const i = t.scales;
        return Object.keys(i)
          .filter(t => i[t].axis === e)
          .shift();
      }
      function wi(t, e) {
        const i = t.controller.index,
          n = t.vScale && t.vScale.axis;
        if (n) {
          e = e || t._parsed;
          for (const t of e) {
            const e = t._stacks;
            if (!e || void 0 === e[n] || void 0 === e[n][i]) return;
            delete e[n][i];
          }
        }
      }
      const _i = t => 'reset' === t || 'none' === t,
        ki = (t, e) => (e ? t : Object.assign({}, t));
      class Ci {
        constructor(t, e) {
          (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.$context = void 0),
            (this._syncList = []),
            this.initialize();
        }
        initialize() {
          const t = this._cachedMeta;
          this.configure(),
            this.linkScales(),
            (t._stacked = mi(t.vScale, t)),
            this.addElements();
        }
        updateIndex(t) {
          this.index !== t && wi(this._cachedMeta), (this.index = t);
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            n = (t, e, i, n) => ('x' === t ? e : 'r' === t ? n : i),
            s = (e.xAxisID = f(i.xAxisID, xi(t, 'x'))),
            r = (e.yAxisID = f(i.yAxisID, xi(t, 'y'))),
            a = (e.rAxisID = f(i.rAxisID, xi(t, 'r'))),
            o = e.indexAxis,
            l = (e.iAxisID = n(o, s, r, a)),
            c = (e.vAxisID = n(o, r, s, a));
          (e.xScale = this.getScaleForId(s)),
            (e.yScale = this.getScaleForId(r)),
            (e.rScale = this.getScaleForId(a)),
            (e.iScale = this.getScaleForId(l)),
            (e.vScale = this.getScaleForId(c));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update('reset');
        }
        _destroy() {
          const t = this._cachedMeta;
          this._data && ge(this._data, this), t._stacked && wi(t);
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
          if (d(e))
            this._data = (function (t) {
              const e = Object.keys(t),
                i = new Array(e.length);
              let n, s, r;
              for (n = 0, s = e.length; n < s; ++n)
                (r = e[n]), (i[n] = { x: r, y: t[r] });
              return i;
            })(e);
          else if (i !== e) {
            if (i) {
              ge(i, this);
              const t = this._cachedMeta;
              wi(t), (t._parsed = []);
            }
            e &&
              Object.isExtensible(e) &&
              (this,
              (n = e)._chartjs
                ? n._chartjs.listeners.push(this)
                : (Object.defineProperty(n, '_chartjs', {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [this] },
                  }),
                  fe.forEach(t => {
                    const e = '_onData' + D(t),
                      i = n[t];
                    Object.defineProperty(n, t, {
                      configurable: !0,
                      enumerable: !1,
                      value(...t) {
                        const s = i.apply(this, t);
                        return (
                          n._chartjs.listeners.forEach(i => {
                            'function' == typeof i[e] && i[e](...t);
                          }),
                          s
                        );
                      },
                    });
                  }))),
              (this._syncList = []),
              (this._data = e);
          }
          var n;
        }
        addElements() {
          const t = this._cachedMeta;
          this._dataCheck(),
            this.datasetElementType && (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            i = this.getDataset();
          let n = !1;
          this._dataCheck();
          const s = e._stacked;
          (e._stacked = mi(e.vScale, e)),
            e.stack !== i.stack && ((n = !0), wi(e), (e.stack = i.stack)),
            this._resyncElements(t),
            (n || s !== e._stacked) && yi(this, e._parsed);
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
          (this.options = t.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
        }
        parse(t, e) {
          const { _cachedMeta: i, _data: n } = this,
            { iScale: s, _stacked: r } = i,
            a = s.axis;
          let o,
            l,
            c,
            u = (0 === t && e === n.length) || i._sorted,
            p = t > 0 && i._parsed[t - 1];
          if (!1 === this._parsing) (i._parsed = n), (i._sorted = !0), (c = n);
          else {
            c = h(n[t])
              ? this.parseArrayData(i, n, t, e)
              : d(n[t])
              ? this.parseObjectData(i, n, t, e)
              : this.parsePrimitiveData(i, n, t, e);
            const s = () => null === l[a] || (p && l[a] < p[a]);
            for (o = 0; o < e; ++o)
              (i._parsed[o + t] = l = c[o]), u && (s() && (u = !1), (p = l));
            i._sorted = u;
          }
          r && yi(this, c);
        }
        parsePrimitiveData(t, e, i, n) {
          const { iScale: s, vScale: r } = t,
            a = s.axis,
            o = r.axis,
            l = s.getLabels(),
            c = s === r,
            h = new Array(n);
          let d, u, p;
          for (d = 0, u = n; d < u; ++d)
            (p = d + i), (h[d] = { [a]: c || s.parse(l[p], p), [o]: r.parse(e[p], p) });
          return h;
        }
        parseArrayData(t, e, i, n) {
          const { xScale: s, yScale: r } = t,
            a = new Array(n);
          let o, l, c, h;
          for (o = 0, l = n; o < l; ++o)
            (c = o + i),
              (h = e[c]),
              (a[o] = { x: s.parse(h[0], c), y: r.parse(h[1], c) });
          return a;
        }
        parseObjectData(t, e, i, n) {
          const { xScale: s, yScale: r } = t,
            { xAxisKey: a = 'x', yAxisKey: o = 'y' } = this._parsing,
            l = new Array(n);
          let c, h, d, u;
          for (c = 0, h = n; c < h; ++c)
            (d = c + i),
              (u = e[d]),
              (l[c] = { x: s.parse(T(u, a), d), y: r.parse(T(u, o), d) });
          return l;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
          const n = this.chart,
            s = this._cachedMeta,
            r = e[t.axis];
          return gi({ keys: fi(n, !0), values: e._stacks[t.axis] }, r, s.index, {
            mode: i,
          });
        }
        updateRangeFromParsed(t, e, i, n) {
          const s = i[e.axis];
          let r = null === s ? NaN : s;
          const a = n && i._stacks[e.axis];
          n && a && ((n.values = a), (r = gi(n, s, this._cachedMeta.index))),
            (t.min = Math.min(t.min, r)),
            (t.max = Math.max(t.max, r));
        }
        getMinMax(t, e) {
          const i = this._cachedMeta,
            n = i._parsed,
            s = i._sorted && t === i.iScale,
            r = n.length,
            a = this._getOtherScale(t),
            o = ((t, e, i) =>
              t && !e.hidden && e._stacked && { keys: fi(i, !0), values: null })(
              e,
              i,
              this.chart,
            ),
            l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: c, max: h } = (function (t) {
              const { min: e, max: i, minDefined: n, maxDefined: s } = t.getUserBounds();
              return {
                min: n ? e : Number.NEGATIVE_INFINITY,
                max: s ? i : Number.POSITIVE_INFINITY,
              };
            })(a);
          let d, p;
          function f() {
            p = n[d];
            const e = p[a.axis];
            return !u(p[t.axis]) || c > e || h < e;
          }
          for (
            d = 0;
            d < r && (f() || (this.updateRangeFromParsed(l, t, p, o), !s));
            ++d
          );
          if (s)
            for (d = r - 1; d >= 0; --d)
              if (!f()) {
                this.updateRangeFromParsed(l, t, p, o);
                break;
              }
          return l;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            i = [];
          let n, s, r;
          for (n = 0, s = e.length; n < s; ++n) (r = e[n][t.axis]), u(r) && i.push(r);
          return i;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = e.iScale,
            n = e.vScale,
            s = this.getParsed(t);
          return {
            label: i ? '' + i.getLabelForValue(s[i.axis]) : '',
            value: n ? '' + n.getLabelForValue(s[n.axis]) : '',
          };
        }
        _update(t) {
          const e = this._cachedMeta;
          this.update(t || 'default'),
            (e._clip = (function (t) {
              let e, i, n, s;
              return (
                d(t)
                  ? ((e = t.top), (i = t.right), (n = t.bottom), (s = t.left))
                  : (e = i = n = s = t),
                { top: e, right: i, bottom: n, left: s, disabled: !1 === t }
              );
            })(
              f(
                this.options.clip,
                (function (t, e, i) {
                  if (!1 === i) return !1;
                  const n = pi(t, i),
                    s = pi(e, i);
                  return { top: s.end, right: n.end, bottom: s.start, left: n.start };
                })(e.xScale, e.yScale, this.getMaxOverflow()),
              ),
            ));
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            n = i.data || [],
            s = e.chartArea,
            r = [],
            a = this._drawStart || 0,
            o = this._drawCount || n.length - a,
            l = this.options.drawActiveElementsOnTop;
          let c;
          for (i.dataset && i.dataset.draw(t, s, a, o), c = a; c < a + o; ++c) {
            const e = n[c];
            e.hidden || (e.active && l ? r.push(e) : e.draw(t, s));
          }
          for (c = 0; c < r.length; ++c) r[c].draw(t, s);
        }
        getStyle(t, e) {
          const i = e ? 'active' : 'default';
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(t || 0, i);
        }
        getContext(t, e, i) {
          const n = this.getDataset();
          let s;
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t];
            (s =
              e.$context ||
              (e.$context = (function (t, e, i) {
                return he(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: i,
                  index: e,
                  mode: 'default',
                  type: 'data',
                });
              })(this.getContext(), t, e))),
              (s.parsed = this.getParsed(t)),
              (s.raw = n.data[t]),
              (s.index = s.dataIndex = t);
          } else
            (s =
              this.$context ||
              (this.$context = (function (t, e) {
                return he(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: 'default',
                  type: 'dataset',
                });
              })(this.chart.getContext(), this.index))),
              (s.dataset = n),
              (s.index = s.datasetIndex = this.index);
          return (s.active = !!e), (s.mode = i), s;
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = 'default', i) {
          const n = 'active' === e,
            s = this._cachedDataOpts,
            r = t + '-' + e,
            a = s[r],
            o = this.enableOptionSharing && M(i);
          if (a) return ki(a, o);
          const l = this.chart.config,
            c = l.datasetElementScopeKeys(this._type, t),
            h = n ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
            d = l.getOptionScopes(this.getDataset(), c),
            u = Object.keys(zt.elements[t]),
            p = l.resolveNamedOptions(d, u, () => this.getContext(i, n), h);
          return p.$shared && ((p.$shared = o), (s[r] = Object.freeze(ki(p, o)))), p;
        }
        _resolveAnimations(t, e, i) {
          const n = this.chart,
            s = this._cachedDataOpts,
            r = `animation-${e}`,
            a = s[r];
          if (a) return a;
          let o;
          if (!1 !== n.options.animation) {
            const n = this.chart.config,
              s = n.datasetAnimationScopeKeys(this._type, e),
              r = n.getOptionScopes(this.getDataset(), s);
            o = n.createResolver(r, this.getContext(t, i, e));
          }
          const l = new ui(n, o && o.animations);
          return o && o._cacheable && (s[r] = Object.freeze(l)), l;
        }
        getSharedOptions(t) {
          if (t.$shared)
            return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
        }
        includeOptions(t, e) {
          return !e || _i(t) || this.chart._animationsDisabled;
        }
        updateElement(t, e, i, n) {
          _i(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
        }
        updateSharedOptions(t, e, i) {
          t && !_i(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, n) {
          t.active = n;
          const s = this.getStyle(e, n);
          this._resolveAnimations(e, i, n).update(t, {
            options: (!n && this.getSharedOptions(s)) || s,
          });
        }
        removeHoverStyle(t, e, i) {
          this._setStyle(t, i, 'active', !1);
        }
        setHoverStyle(t, e, i) {
          this._setStyle(t, i, 'active', !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, 'active', !0);
        }
        _resyncElements(t) {
          const e = this._data,
            i = this._cachedMeta.data;
          for (const [t, e, i] of this._syncList) this[t](e, i);
          this._syncList = [];
          const n = i.length,
            s = e.length,
            r = Math.min(s, n);
          r && this.parse(0, r),
            s > n
              ? this._insertElements(n, s - n, t)
              : s < n && this._removeElements(s, n - s);
        }
        _insertElements(t, e, i = !0) {
          const n = this._cachedMeta,
            s = n.data,
            r = t + e;
          let a;
          const o = t => {
            for (t.length += e, a = t.length - 1; a >= r; a--) t[a] = t[a - e];
          };
          for (o(s), a = t; a < r; ++a) s[a] = new this.dataElementType();
          this._parsing && o(n._parsed),
            this.parse(t, e),
            i && this.updateElements(s, t, e, 'reset');
        }
        updateElements(t, e, i, n) {}
        _removeElements(t, e) {
          const i = this._cachedMeta;
          if (this._parsing) {
            const n = i._parsed.splice(t, e);
            i._stacked && wi(i, n);
          }
          i.data.splice(t, e);
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t);
          else {
            const [e, i, n] = t;
            this[e](i, n);
          }
          this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
          const t = arguments.length;
          this._sync(['_insertElements', this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
          this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(['_removeElements', 0, 1]);
        }
        _onDataSplice(t, e) {
          e && this._sync(['_removeElements', t, e]);
          const i = arguments.length - 2;
          i && this._sync(['_insertElements', t, i]);
        }
        _onDataUnshift() {
          this._sync(['_insertElements', 0, arguments.length]);
        }
      }
      function Si(t) {
        const e = t.iScale,
          i = (function (t, e) {
            if (!t._cache.$bar) {
              const i = t.getMatchingVisibleMetas(e);
              let n = [];
              for (let e = 0, s = i.length; e < s; e++)
                n = n.concat(i[e].controller.getAllParsedValues(t));
              t._cache.$bar = me(n.sort((t, e) => t - e));
            }
            return t._cache.$bar;
          })(e, t.type);
        let n,
          s,
          r,
          a,
          o = e._length;
        const l = () => {
          32767 !== r &&
            -32768 !== r &&
            (M(a) && (o = Math.min(o, Math.abs(r - a) || o)), (a = r));
        };
        for (n = 0, s = i.length; n < s; ++n) (r = e.getPixelForValue(i[n])), l();
        for (a = void 0, n = 0, s = e.ticks.length; n < s; ++n)
          (r = e.getPixelForTick(n)), l();
        return o;
      }
      function Ti(t, e, i, n) {
        return (
          h(t)
            ? (function (t, e, i, n) {
                const s = i.parse(t[0], n),
                  r = i.parse(t[1], n),
                  a = Math.min(s, r),
                  o = Math.max(s, r);
                let l = a,
                  c = o;
                Math.abs(a) > Math.abs(o) && ((l = o), (c = a)),
                  (e[i.axis] = c),
                  (e._custom = {
                    barStart: l,
                    barEnd: c,
                    start: s,
                    end: r,
                    min: a,
                    max: o,
                  });
              })(t, e, i, n)
            : (e[i.axis] = i.parse(t, n)),
          e
        );
      }
      function Di(t, e, i, n) {
        const s = t.iScale,
          r = t.vScale,
          a = s.getLabels(),
          o = s === r,
          l = [];
        let c, h, d, u;
        for (c = i, h = i + n; c < h; ++c)
          (u = e[c]),
            (d = {}),
            (d[s.axis] = o || s.parse(a[c], c)),
            l.push(Ti(u, d, r, c));
        return l;
      }
      function Mi(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function Ei(t, e, i, n) {
        let s = e.borderSkipped;
        const r = {};
        if (!s) return void (t.borderSkipped = r);
        const {
          start: a,
          end: o,
          reverse: l,
          top: c,
          bottom: h,
        } = (function (t) {
          let e, i, n, s, r;
          return (
            t.horizontal
              ? ((e = t.base > t.x), (i = 'left'), (n = 'right'))
              : ((e = t.base < t.y), (i = 'bottom'), (n = 'top')),
            e ? ((s = 'end'), (r = 'start')) : ((s = 'start'), (r = 'end')),
            { start: i, end: n, reverse: e, top: s, bottom: r }
          );
        })(t);
        'middle' === s &&
          i &&
          ((t.enableBorderRadius = !0),
          (i._top || 0) === n
            ? (s = c)
            : (i._bottom || 0) === n
            ? (s = h)
            : ((r[Pi(h, a, o, l)] = !0), (s = c))),
          (r[Pi(s, a, o, l)] = !0),
          (t.borderSkipped = r);
      }
      function Pi(t, e, i, n) {
        var s, r, a;
        return (
          n
            ? ((a = i), (t = Ai((t = (s = t) === (r = e) ? a : s === a ? r : s), i, e)))
            : (t = Ai(t, e, i)),
          t
        );
      }
      function Ai(t, e, i) {
        return 'start' === t ? e : 'end' === t ? i : t;
      }
      function Li(t, { inflateAmount: e }, i) {
        t.inflateAmount = 'auto' === e ? (1 === i ? 0.33 : 0) : e;
      }
      (Ci.defaults = {}),
        (Ci.prototype.datasetElementType = null),
        (Ci.prototype.dataElementType = null);
      class Oi extends Ci {
        parsePrimitiveData(t, e, i, n) {
          return Di(t, e, i, n);
        }
        parseArrayData(t, e, i, n) {
          return Di(t, e, i, n);
        }
        parseObjectData(t, e, i, n) {
          const { iScale: s, vScale: r } = t,
            { xAxisKey: a = 'x', yAxisKey: o = 'y' } = this._parsing,
            l = 'x' === s.axis ? a : o,
            c = 'x' === r.axis ? a : o,
            h = [];
          let d, u, p, f;
          for (d = i, u = i + n; d < u; ++d)
            (f = e[d]),
              (p = {}),
              (p[s.axis] = s.parse(T(f, l), d)),
              h.push(Ti(T(f, c), p, r, d));
          return h;
        }
        updateRangeFromParsed(t, e, i, n) {
          super.updateRangeFromParsed(t, e, i, n);
          const s = i._custom;
          s &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: i, vScale: n } = e,
            s = this.getParsed(t),
            r = s._custom,
            a = Mi(r)
              ? '[' + r.start + ', ' + r.end + ']'
              : '' + n.getLabelForValue(s[n.axis]);
          return { label: '' + i.getLabelForValue(s[i.axis]), value: a };
        }
        initialize() {
          (this.enableOptionSharing = !0),
            super.initialize(),
            (this._cachedMeta.stack = this.getDataset().stack);
        }
        update(t) {
          const e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            {
              index: r,
              _cachedMeta: { vScale: a },
            } = this,
            o = a.getBasePixel(),
            l = a.isHorizontal(),
            h = this._getRuler(),
            d = this.resolveDataElementOptions(e, n),
            u = this.getSharedOptions(d),
            p = this.includeOptions(n, u);
          this.updateSharedOptions(u, n, d);
          for (let d = e; d < e + i; d++) {
            const e = this.getParsed(d),
              i =
                s || c(e[a.axis])
                  ? { base: o, head: o }
                  : this._calculateBarValuePixels(d),
              f = this._calculateBarIndexPixels(d, h),
              g = (e._stacks || {})[a.axis],
              m = {
                horizontal: l,
                base: i.base,
                enableBorderRadius:
                  !g || Mi(e._custom) || r === g._top || r === g._bottom,
                x: l ? i.head : f.center,
                y: l ? f.center : i.head,
                height: l ? f.size : Math.abs(i.size),
                width: l ? Math.abs(i.size) : f.size,
              };
            p &&
              (m.options =
                u || this.resolveDataElementOptions(d, t[d].active ? 'active' : n));
            const v = m.options || t[d].options;
            Ei(m, v, g, r), Li(m, v, h.ratio), this.updateElement(t[d], d, m, n);
          }
        }
        _getStacks(t, e) {
          const i = this._cachedMeta.iScale,
            n = i.getMatchingVisibleMetas(this._type),
            s = i.options.stacked,
            r = n.length,
            a = [];
          let o, l;
          for (o = 0; o < r; ++o)
            if (((l = n[o]), l.controller.options.grouped)) {
              if (void 0 !== e) {
                const t = l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];
                if (c(t) || isNaN(t)) continue;
              }
              if (
                ((!1 === s ||
                  -1 === a.indexOf(l.stack) ||
                  (void 0 === s && void 0 === l.stack)) &&
                  a.push(l.stack),
                l.index === t)
              )
                break;
            }
          return a.length || a.push(void 0), a;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, i) {
          const n = this._getStacks(t, i),
            s = void 0 !== e ? n.indexOf(e) : -1;
          return -1 === s ? n.length - 1 : s;
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            n = [];
          let s, r;
          for (s = 0, r = e.data.length; s < r; ++s)
            n.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
          const a = t.barThickness;
          return {
            min: a || Si(e),
            pixels: n,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: i },
              options: { base: n, minBarLength: s },
            } = this,
            r = n || 0,
            a = this.getParsed(t),
            o = a._custom,
            l = Mi(o);
          let h,
            d,
            u = a[e.axis],
            p = 0,
            f = i ? this.applyStack(e, a, i) : u;
          f !== u && ((p = f - u), (f = u)),
            l &&
              ((u = o.barStart),
              (f = o.barEnd - o.barStart),
              0 !== u && j(u) !== j(o.barEnd) && (p = 0),
              (p += u));
          const g = c(n) || l ? p : n;
          let m = e.getPixelForValue(g);
          if (
            ((h = this.chart.getDataVisibility(t) ? e.getPixelForValue(p + f) : m),
            (d = h - m),
            Math.abs(d) < s &&
              ((d =
                (function (t, e, i) {
                  return 0 !== t
                    ? j(t)
                    : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                })(d, e, r) * s),
              u === r && (m -= d / 2),
              (h = m + d)),
            m === e.getPixelForValue(r))
          ) {
            const t = (j(d) * e.getLineWidthForValue(r)) / 2;
            (m += t), (d -= t);
          }
          return { size: d, base: m, head: h, center: h + d / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const i = e.scale,
            n = this.options,
            s = n.skipNull,
            r = f(n.maxBarThickness, 1 / 0);
          let a, o;
          if (e.grouped) {
            const i = s ? this._getStackCount(t) : e.stackCount,
              l =
                'flex' === n.barThickness
                  ? (function (t, e, i, n) {
                      const s = e.pixels,
                        r = s[t];
                      let a = t > 0 ? s[t - 1] : null,
                        o = t < s.length - 1 ? s[t + 1] : null;
                      const l = i.categoryPercentage;
                      null === a && (a = r - (null === o ? e.end - e.start : o - r)),
                        null === o && (o = r + r - a);
                      const c = r - ((r - Math.min(a, o)) / 2) * l;
                      return {
                        chunk: ((Math.abs(o - a) / 2) * l) / n,
                        ratio: i.barPercentage,
                        start: c,
                      };
                    })(t, e, n, i)
                  : (function (t, e, i, n) {
                      const s = i.barThickness;
                      let r, a;
                      return (
                        c(s)
                          ? ((r = e.min * i.categoryPercentage), (a = i.barPercentage))
                          : ((r = s * n), (a = 1)),
                        { chunk: r / n, ratio: a, start: e.pixels[t] - r / 2 }
                      );
                    })(t, e, n, i),
              h = this._getStackIndex(this.index, this._cachedMeta.stack, s ? t : void 0);
            (a = l.start + l.chunk * h + l.chunk / 2),
              (o = Math.min(r, l.chunk * l.ratio));
          } else
            (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
              (o = Math.min(r, e.min * e.ratio));
          return { base: a - o / 2, head: a + o / 2, center: a, size: o };
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            n = i.length;
          let s = 0;
          for (; s < n; ++s) null !== this.getParsed(s)[e.axis] && i[s].draw(this._ctx);
        }
      }
      (Oi.id = 'bar'),
        (Oi.defaults = {
          datasetElementType: !1,
          dataElementType: 'bar',
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'base', 'width', 'height'],
            },
          },
        }),
        (Oi.overrides = {
          scales: {
            _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
            _value_: { type: 'linear', beginAtZero: !0 },
          },
        });
      class Ni extends Ci {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parsePrimitiveData(t, e, i, n) {
          const s = super.parsePrimitiveData(t, e, i, n);
          for (let t = 0; t < s.length; t++)
            s[t]._custom = this.resolveDataElementOptions(t + i).radius;
          return s;
        }
        parseArrayData(t, e, i, n) {
          const s = super.parseArrayData(t, e, i, n);
          for (let t = 0; t < s.length; t++) {
            const n = e[i + t];
            s[t]._custom = f(n[2], this.resolveDataElementOptions(t + i).radius);
          }
          return s;
        }
        parseObjectData(t, e, i, n) {
          const s = super.parseObjectData(t, e, i, n);
          for (let t = 0; t < s.length; t++) {
            const n = e[i + t];
            s[t]._custom = f(
              n && n.r && +n.r,
              this.resolveDataElementOptions(t + i).radius,
            );
          }
          return s;
        }
        getMaxOverflow() {
          const t = this._cachedMeta.data;
          let e = 0;
          for (let i = t.length - 1; i >= 0; --i)
            e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
          return e > 0 && e;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { xScale: i, yScale: n } = e,
            s = this.getParsed(t),
            r = i.getLabelForValue(s.x),
            a = n.getLabelForValue(s.y),
            o = s._custom;
          return {
            label: e.label,
            value: '(' + r + ', ' + a + (o ? ', ' + o : '') + ')',
          };
        }
        update(t) {
          const e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            { iScale: r, vScale: a } = this._cachedMeta,
            o = this.resolveDataElementOptions(e, n),
            l = this.getSharedOptions(o),
            c = this.includeOptions(n, l),
            h = r.axis,
            d = a.axis;
          for (let o = e; o < e + i; o++) {
            const e = t[o],
              i = !s && this.getParsed(o),
              l = {},
              u = (l[h] = s ? r.getPixelForDecimal(0.5) : r.getPixelForValue(i[h])),
              p = (l[d] = s ? a.getBasePixel() : a.getPixelForValue(i[d]));
            (l.skip = isNaN(u) || isNaN(p)),
              c &&
                ((l.options = this.resolveDataElementOptions(o, e.active ? 'active' : n)),
                s && (l.options.radius = 0)),
              this.updateElement(e, o, l, n);
          }
          this.updateSharedOptions(l, n, o);
        }
        resolveDataElementOptions(t, e) {
          const i = this.getParsed(t);
          let n = super.resolveDataElementOptions(t, e);
          n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
          const s = n.radius;
          return 'active' !== e && (n.radius = 0), (n.radius += f(i && i._custom, s)), n;
        }
      }
      (Ni.id = 'bubble'),
        (Ni.defaults = {
          datasetElementType: !1,
          dataElementType: 'point',
          animations: {
            numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] },
          },
        }),
        (Ni.overrides = {
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
          plugins: { tooltip: { callbacks: { title: () => '' } } },
        });
      class Ii extends Ci {
        constructor(t, e) {
          super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
        }
        linkScales() {}
        parse(t, e) {
          const i = this.getDataset().data,
            n = this._cachedMeta;
          if (!1 === this._parsing) n._parsed = i;
          else {
            let s,
              r,
              a = t => +i[t];
            if (d(i[t])) {
              const { key: t = 'value' } = this._parsing;
              a = e => +T(i[e], t);
            }
            for (s = t, r = t + e; s < r; ++s) n._parsed[s] = a(s);
          }
        }
        _getRotation() {
          return q(this.options.rotation - 90);
        }
        _getCircumference() {
          return q(this.options.circumference);
        }
        _getRotationExtents() {
          let t = L,
            e = -L;
          for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (this.chart.isDatasetVisible(i)) {
              const n = this.chart.getDatasetMeta(i).controller,
                s = n._getRotation(),
                r = n._getCircumference();
              (t = Math.min(t, s)), (e = Math.max(e, s + r));
            }
          return { rotation: t, circumference: e - t };
        }
        update(t) {
          const e = this.chart,
            { chartArea: i } = e,
            n = this._cachedMeta,
            s = n.data,
            r = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
            a = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
            o = Math.min(
              ((c = a),
              'string' == typeof (l = this.options.cutout) && l.endsWith('%')
                ? parseFloat(l) / 100
                : l / c),
              1,
            );
          var l, c;
          const h = this._getRingWeight(this.index),
            { circumference: d, rotation: u } = this._getRotationExtents(),
            {
              ratioX: p,
              ratioY: f,
              offsetX: m,
              offsetY: v,
            } = (function (t, e, i) {
              let n = 1,
                s = 1,
                r = 0,
                a = 0;
              if (e < L) {
                const o = t,
                  l = o + e,
                  c = Math.cos(o),
                  h = Math.sin(o),
                  d = Math.cos(l),
                  u = Math.sin(l),
                  p = (t, e, n) => (Z(t, o, l, !0) ? 1 : Math.max(e, e * i, n, n * i)),
                  f = (t, e, n) => (Z(t, o, l, !0) ? -1 : Math.min(e, e * i, n, n * i)),
                  g = p(0, c, d),
                  m = p($, h, u),
                  v = f(A, c, d),
                  b = f(A + $, h, u);
                (n = (g - v) / 2),
                  (s = (m - b) / 2),
                  (r = -(g + v) / 2),
                  (a = -(m + b) / 2);
              }
              return { ratioX: n, ratioY: s, offsetX: r, offsetY: a };
            })(u, d, o),
            b = (i.width - r) / p,
            y = (i.height - r) / f,
            x = Math.max(Math.min(b, y) / 2, 0),
            w = g(this.options.radius, x),
            _ = (w - Math.max(w * o, 0)) / this._getVisibleDatasetWeightTotal();
          (this.offsetX = m * w),
            (this.offsetY = v * w),
            (n.total = this.calculateTotal()),
            (this.outerRadius = w - _ * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - _ * h, 0)),
            this.updateElements(s, 0, s.length, t);
        }
        _circumference(t, e) {
          const i = this.options,
            n = this._cachedMeta,
            s = this._getCircumference();
          return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === n._parsed[t] ||
            n.data[t].hidden
            ? 0
            : this.calculateCircumference((n._parsed[t] * s) / L);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            r = this.chart,
            a = r.chartArea,
            o = r.options.animation,
            l = (a.left + a.right) / 2,
            c = (a.top + a.bottom) / 2,
            h = s && o.animateScale,
            d = h ? 0 : this.innerRadius,
            u = h ? 0 : this.outerRadius,
            p = this.resolveDataElementOptions(e, n),
            f = this.getSharedOptions(p),
            g = this.includeOptions(n, f);
          let m,
            v = this._getRotation();
          for (m = 0; m < e; ++m) v += this._circumference(m, s);
          for (m = e; m < e + i; ++m) {
            const e = this._circumference(m, s),
              i = t[m],
              r = {
                x: l + this.offsetX,
                y: c + this.offsetY,
                startAngle: v,
                endAngle: v + e,
                circumference: e,
                outerRadius: u,
                innerRadius: d,
              };
            g &&
              (r.options =
                f || this.resolveDataElementOptions(m, i.active ? 'active' : n)),
              (v += e),
              this.updateElement(i, m, r, n);
          }
          this.updateSharedOptions(f, n, p);
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data;
          let i,
            n = 0;
          for (i = 0; i < e.length; i++) {
            const s = t._parsed[i];
            null === s ||
              isNaN(s) ||
              !this.chart.getDataVisibility(i) ||
              e[i].hidden ||
              (n += Math.abs(s));
          }
          return n;
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? L * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            s = Je(e._parsed[t], i.options.locale);
          return { label: n[t] || '', value: s };
        }
        getMaxBorderWidth(t) {
          let e = 0;
          const i = this.chart;
          let n, s, r, a, o;
          if (!t)
            for (n = 0, s = i.data.datasets.length; n < s; ++n)
              if (i.isDatasetVisible(n)) {
                (r = i.getDatasetMeta(n)), (t = r.data), (a = r.controller);
                break;
              }
          if (!t) return 0;
          for (n = 0, s = t.length; n < s; ++n)
            (o = a.resolveDataElementOptions(n)),
              'inner' !== o.borderAlign &&
                (e = Math.max(e, o.borderWidth || 0, o.hoverBorderWidth || 0));
          return e;
        }
        getMaxOffset(t) {
          let e = 0;
          for (let i = 0, n = t.length; i < n; ++i) {
            const t = this.resolveDataElementOptions(i);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
          }
          return e;
        }
        _getRingWeightOffset(t) {
          let e = 0;
          for (let i = 0; i < t; ++i)
            this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
          return e;
        }
        _getRingWeight(t) {
          return Math.max(f(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
      }
      (Ii.id = 'doughnut'),
        (Ii.defaults = {
          datasetElementType: !1,
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
              ],
            },
          },
          cutout: '50%',
          rotation: 0,
          circumference: 360,
          radius: '100%',
          spacing: 0,
          indexAxis: 'r',
        }),
        (Ii.descriptors = {
          _scriptable: t => 'spacing' !== t,
          _indexable: t => 'spacing' !== t,
        }),
        (Ii.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i },
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const s = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: s.backgroundColor,
                        strokeStyle: s.borderColor,
                        lineWidth: s.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: () => '',
                label(t) {
                  let e = t.label;
                  const i = ': ' + t.formattedValue;
                  return h(e) ? ((e = e.slice()), (e[0] += i)) : (e += i), e;
                },
              },
            },
          },
        });
      class $i extends Ci {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: i, data: n = [], _dataset: s } = e,
            r = this.chart._animationsDisabled;
          let { start: a, count: o } = (function (t, e, i) {
            const n = e.length;
            let s = 0,
              r = n;
            if (t._sorted) {
              const { iScale: a, _parsed: o } = t,
                l = a.axis,
                { min: c, max: h, minDefined: d, maxDefined: u } = a.getUserBounds();
              d &&
                (s = Q(
                  Math.min(
                    ue(o, a.axis, c).lo,
                    i ? n : ue(e, l, a.getPixelForValue(c)).lo,
                  ),
                  0,
                  n - 1,
                )),
                (r = u
                  ? Q(
                      Math.max(
                        ue(o, a.axis, h).hi + 1,
                        i ? 0 : ue(e, l, a.getPixelForValue(h)).hi + 1,
                      ),
                      s,
                      n,
                    ) - s
                  : n - s);
            }
            return { start: s, count: r };
          })(e, n, r);
          (this._drawStart = a),
            (this._drawCount = o),
            (function (t) {
              const { xScale: e, yScale: i, _scaleRanges: n } = t,
                s = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
              if (!n) return (t._scaleRanges = s), !0;
              const r =
                n.xmin !== e.min ||
                n.xmax !== e.max ||
                n.ymin !== i.min ||
                n.ymax !== i.max;
              return Object.assign(n, s), r;
            })(e) && ((a = 0), (o = n.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!s._decimated),
            (i.points = n);
          const l = this.resolveDatasetElementOptions(t);
          this.options.showLine || (l.borderWidth = 0),
            (l.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !r, options: l }, t),
            this.updateElements(n, a, o, t);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            { iScale: r, vScale: a, _stacked: o, _dataset: l } = this._cachedMeta,
            h = this.resolveDataElementOptions(e, n),
            d = this.getSharedOptions(h),
            u = this.includeOptions(n, d),
            p = r.axis,
            f = a.axis,
            { spanGaps: g, segment: m } = this.options,
            v = V(g) ? g : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || s || 'none' === n;
          let y = e > 0 && this.getParsed(e - 1);
          for (let h = e; h < e + i; ++h) {
            const e = t[h],
              i = this.getParsed(h),
              g = b ? e : {},
              x = c(i[f]),
              w = (g[p] = r.getPixelForValue(i[p], h)),
              _ = (g[f] =
                s || x
                  ? a.getBasePixel()
                  : a.getPixelForValue(o ? this.applyStack(a, i, o) : i[f], h));
            (g.skip = isNaN(w) || isNaN(_) || x),
              (g.stop = h > 0 && i[p] - y[p] > v),
              m && ((g.parsed = i), (g.raw = l.data[h])),
              u &&
                (g.options =
                  d || this.resolveDataElementOptions(h, e.active ? 'active' : n)),
              b || this.updateElement(e, h, g, n),
              (y = i);
          }
          this.updateSharedOptions(d, n, h);
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            n = t.data || [];
          if (!n.length) return i;
          const s = n[0].size(this.resolveDataElementOptions(0)),
            r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
          return Math.max(i, s, r) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      }
      ($i.id = 'line'),
        ($i.defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          showLine: !0,
          spanGaps: !1,
        }),
        ($i.overrides = {
          scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
        });
      class Fi extends Ci {
        constructor(t, e) {
          super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            s = Je(e._parsed[t].r, i.options.locale);
          return { label: n[t] || '', value: s };
        }
        update(t) {
          const e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
        _updateRadius() {
          const t = this.chart,
            e = t.chartArea,
            i = t.options,
            n = Math.min(e.right - e.left, e.bottom - e.top),
            s = Math.max(n / 2, 0),
            r =
              (s - Math.max(i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1, 0)) /
              t.getVisibleDatasetCount();
          (this.outerRadius = s - r * this.index),
            (this.innerRadius = this.outerRadius - r);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            r = this.chart,
            a = this.getDataset(),
            o = r.options.animation,
            l = this._cachedMeta.rScale,
            c = l.xCenter,
            h = l.yCenter,
            d = l.getIndexAngle(0) - 0.5 * A;
          let u,
            p = d;
          const f = 360 / this.countVisibleElements();
          for (u = 0; u < e; ++u) p += this._computeAngle(u, n, f);
          for (u = e; u < e + i; u++) {
            const e = t[u];
            let i = p,
              g = p + this._computeAngle(u, n, f),
              m = r.getDataVisibility(u) ? l.getDistanceFromCenterForValue(a.data[u]) : 0;
            (p = g), s && (o.animateScale && (m = 0), o.animateRotate && (i = g = d));
            const v = {
              x: c,
              y: h,
              innerRadius: 0,
              outerRadius: m,
              startAngle: i,
              endAngle: g,
              options: this.resolveDataElementOptions(u, e.active ? 'active' : n),
            };
            this.updateElement(e, u, v, n);
          }
        }
        countVisibleElements() {
          const t = this.getDataset(),
            e = this._cachedMeta;
          let i = 0;
          return (
            e.data.forEach((e, n) => {
              !isNaN(t.data[n]) && this.chart.getDataVisibility(n) && i++;
            }),
            i
          );
        }
        _computeAngle(t, e, i) {
          return this.chart.getDataVisibility(t)
            ? q(this.resolveDataElementOptions(t, e).angle || i)
            : 0;
        }
      }
      (Fi.id = 'polarArea'),
        (Fi.defaults = {
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
              ],
            },
          },
          indexAxis: 'r',
          startAngle: 0,
        }),
        (Fi.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i },
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const s = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: s.backgroundColor,
                        strokeStyle: s.borderColor,
                        lineWidth: s.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: () => '',
                label: t => t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue,
              },
            },
          },
          scales: {
            r: {
              type: 'radialLinear',
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      class Ri extends Ii {}
      (Ri.id = 'pie'),
        (Ri.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' });
      class Hi extends Ci {
        getLabelAndValue(t) {
          const e = this._cachedMeta.vScale,
            i = this.getParsed(t);
          return { label: e.getLabels()[t], value: '' + e.getLabelForValue(i[e.axis]) };
        }
        update(t) {
          const e = this._cachedMeta,
            i = e.dataset,
            n = e.data || [],
            s = e.iScale.getLabels();
          if (((i.points = n), 'resize' !== t)) {
            const e = this.resolveDatasetElementOptions(t);
            this.options.showLine || (e.borderWidth = 0);
            const r = { _loop: !0, _fullLoop: s.length === n.length, options: e };
            this.updateElement(i, void 0, r, t);
          }
          this.updateElements(n, 0, n.length, t);
        }
        updateElements(t, e, i, n) {
          const s = this.getDataset(),
            r = this._cachedMeta.rScale,
            a = 'reset' === n;
          for (let o = e; o < e + i; o++) {
            const e = t[o],
              i = this.resolveDataElementOptions(o, e.active ? 'active' : n),
              l = r.getPointPositionForValue(o, s.data[o]),
              c = a ? r.xCenter : l.x,
              h = a ? r.yCenter : l.y,
              d = { x: c, y: h, angle: l.angle, skip: isNaN(c) || isNaN(h), options: i };
            this.updateElement(e, o, d, n);
          }
        }
      }
      (Hi.id = 'radar'),
        (Hi.defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          indexAxis: 'r',
          showLine: !0,
          elements: { line: { fill: 'start' } },
        }),
        (Hi.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } });
      class ji extends $i {}
      (ji.id = 'scatter'),
        (ji.defaults = { showLine: !1, fill: !1 }),
        (ji.overrides = {
          interaction: { mode: 'point' },
          plugins: {
            tooltip: {
              callbacks: {
                title: () => '',
                label: t => '(' + t.label + ', ' + t.formattedValue + ')',
              },
            },
          },
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
        });
      var zi = Object.freeze({
        __proto__: null,
        BarController: Oi,
        BubbleController: Ni,
        DoughnutController: Ii,
        LineController: $i,
        PolarAreaController: Fi,
        PieController: Ri,
        RadarController: Hi,
        ScatterController: ji,
      });
      function Vi() {
        throw new Error(
          'This method is not implemented: Check that a complete date adapter is provided.',
        );
      }
      class Bi {
        constructor(t) {
          this.options = t || {};
        }
        formats() {
          return Vi();
        }
        parse(t, e) {
          return Vi();
        }
        format(t, e) {
          return Vi();
        }
        add(t, e, i) {
          return Vi();
        }
        diff(t, e, i) {
          return Vi();
        }
        startOf(t, e, i) {
          return Vi();
        }
        endOf(t, e) {
          return Vi();
        }
      }
      Bi.override = function (t) {
        Object.assign(Bi.prototype, t);
      };
      var Wi = { _date: Bi };
      function qi(t, e) {
        return 'native' in t ? { x: t.x, y: t.y } : Ve(t, e);
      }
      function Gi(t, e, i, n) {
        const { controller: s, data: r, _sorted: a } = t,
          o = s._cachedMeta.iScale;
        if (o && e === o.axis && 'r' !== e && a && r.length) {
          const t = o._reversePixels ? pe : ue;
          if (!n) return t(r, e, i);
          if (s._sharedOptions) {
            const n = r[0],
              s = 'function' == typeof n.getRange && n.getRange(e);
            if (s) {
              const n = t(r, e, i - s),
                a = t(r, e, i + s);
              return { lo: n.lo, hi: a.hi };
            }
          }
        }
        return { lo: 0, hi: r.length - 1 };
      }
      function Yi(t, e, i, n, s) {
        const r = t.getSortedVisibleDatasetMetas(),
          a = i[e];
        for (let t = 0, i = r.length; t < i; ++t) {
          const { index: i, data: o } = r[t],
            { lo: l, hi: c } = Gi(r[t], e, a, s);
          for (let t = l; t <= c; ++t) {
            const e = o[t];
            e.skip || n(e, i, t);
          }
        }
      }
      function Ui(t, e, i, n) {
        const s = [];
        return Yt(e, t.chartArea, t._minPadding)
          ? (Yi(
              t,
              i,
              e,
              function (t, i, r) {
                t.inRange(e.x, e.y, n) &&
                  s.push({ element: t, datasetIndex: i, index: r });
              },
              !0,
            ),
            s)
          : s;
      }
      function Xi(t, e, i, n, s) {
        return Yt(e, t.chartArea, t._minPadding)
          ? 'r' !== i || n
            ? (function (t, e, i, n, s) {
                let r = [];
                const a = (function (t) {
                  const e = -1 !== t.indexOf('x'),
                    i = -1 !== t.indexOf('y');
                  return function (t, n) {
                    const s = e ? Math.abs(t.x - n.x) : 0,
                      r = i ? Math.abs(t.y - n.y) : 0;
                    return Math.sqrt(Math.pow(s, 2) + Math.pow(r, 2));
                  };
                })(i);
                let o = Number.POSITIVE_INFINITY;
                return (
                  Yi(t, i, e, function (i, l, c) {
                    const h = i.inRange(e.x, e.y, s);
                    if (n && !h) return;
                    const d = i.getCenterPoint(s);
                    if (!Yt(d, t.chartArea, t._minPadding) && !h) return;
                    const u = a(e, d);
                    u < o
                      ? ((r = [{ element: i, datasetIndex: l, index: c }]), (o = u))
                      : u === o && r.push({ element: i, datasetIndex: l, index: c });
                  }),
                  r
                );
              })(t, e, i, n, s)
            : (function (t, e, i, n) {
                let s = [];
                return (
                  Yi(t, i, e, function (t, i, r) {
                    const { startAngle: a, endAngle: o } = t.getProps(
                        ['startAngle', 'endAngle'],
                        n,
                      ),
                      { angle: l } = U(t, { x: e.x, y: e.y });
                    Z(l, a, o) && s.push({ element: t, datasetIndex: i, index: r });
                  }),
                  s
                );
              })(t, e, i, s)
          : [];
      }
      function Ki(t, e, i, n) {
        const s = qi(e, t),
          r = [],
          a = i.axis,
          o = 'x' === a ? 'inXRange' : 'inYRange';
        let l = !1;
        return (
          (function (t, e) {
            const i = t.getSortedVisibleDatasetMetas();
            let n, s, r;
            for (let t = 0, a = i.length; t < a; ++t) {
              ({ index: n, data: s } = i[t]);
              for (let t = 0, i = s.length; t < i; ++t) (r = s[t]), r.skip || e(r, n, t);
            }
          })(t, (t, e, i) => {
            t[o](s[a], n) && r.push({ element: t, datasetIndex: e, index: i }),
              t.inRange(s.x, s.y, n) && (l = !0);
          }),
          i.intersect && !l ? [] : r
        );
      }
      var Ji = {
        modes: {
          index(t, e, i, n) {
            const s = qi(e, t),
              r = i.axis || 'x',
              a = i.intersect ? Ui(t, s, r, n) : Xi(t, s, r, !1, n),
              o = [];
            return a.length
              ? (t.getSortedVisibleDatasetMetas().forEach(t => {
                  const e = a[0].index,
                    i = t.data[e];
                  i && !i.skip && o.push({ element: i, datasetIndex: t.index, index: e });
                }),
                o)
              : [];
          },
          dataset(t, e, i, n) {
            const s = qi(e, t),
              r = i.axis || 'xy';
            let a = i.intersect ? Ui(t, s, r, n) : Xi(t, s, r, !1, n);
            if (a.length > 0) {
              const e = a[0].datasetIndex,
                i = t.getDatasetMeta(e).data;
              a = [];
              for (let t = 0; t < i.length; ++t)
                a.push({ element: i[t], datasetIndex: e, index: t });
            }
            return a;
          },
          point: (t, e, i, n) => Ui(t, qi(e, t), i.axis || 'xy', n),
          nearest: (t, e, i, n) => Xi(t, qi(e, t), i.axis || 'xy', i.intersect, n),
          x: (t, e, i, n) => Ki(t, e, { axis: 'x', intersect: i.intersect }, n),
          y: (t, e, i, n) => Ki(t, e, { axis: 'y', intersect: i.intersect }, n),
        },
      };
      const Zi = ['left', 'top', 'right', 'bottom'];
      function Qi(t, e) {
        return t.filter(t => t.pos === e);
      }
      function tn(t, e) {
        return t.filter(t => -1 === Zi.indexOf(t.pos) && t.box.axis === e);
      }
      function en(t, e) {
        return t.sort((t, i) => {
          const n = e ? i : t,
            s = e ? t : i;
          return n.weight === s.weight ? n.index - s.index : n.weight - s.weight;
        });
      }
      function nn(t, e, i, n) {
        return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
      }
      function sn(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function rn(t, e, i, n) {
        const { pos: s, box: r } = i,
          a = t.maxPadding;
        if (!d(s)) {
          i.size && (t[s] -= i.size);
          const e = n[i.stack] || { size: 0, count: 1 };
          (e.size = Math.max(e.size, i.horizontal ? r.height : r.width)),
            (i.size = e.size / e.count),
            (t[s] += i.size);
        }
        r.getPadding && sn(a, r.getPadding());
        const o = Math.max(0, e.outerWidth - nn(a, t, 'left', 'right')),
          l = Math.max(0, e.outerHeight - nn(a, t, 'top', 'bottom')),
          c = o !== t.w,
          h = l !== t.h;
        return (
          (t.w = o),
          (t.h = l),
          i.horizontal ? { same: c, other: h } : { same: h, other: c }
        );
      }
      function an(t, e) {
        const i = e.maxPadding;
        return (function (t) {
          const n = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach(t => {
              n[t] = Math.max(e[t], i[t]);
            }),
            n
          );
        })(t ? ['left', 'right'] : ['top', 'bottom']);
      }
      function on(t, e, i, n) {
        const s = [];
        let r, a, o, l, c, h;
        for (r = 0, a = t.length, c = 0; r < a; ++r) {
          (o = t[r]),
            (l = o.box),
            l.update(o.width || e.w, o.height || e.h, an(o.horizontal, e));
          const { same: a, other: d } = rn(e, i, o, n);
          (c |= a && s.length), (h = h || d), l.fullSize || s.push(o);
        }
        return (c && on(s, e, i, n)) || h;
      }
      function ln(t, e, i, n, s) {
        (t.top = i),
          (t.left = e),
          (t.right = e + n),
          (t.bottom = i + s),
          (t.width = n),
          (t.height = s);
      }
      function cn(t, e, i, n) {
        const s = i.padding;
        let { x: r, y: a } = e;
        for (const o of t) {
          const t = o.box,
            l = n[o.stack] || { count: 1, placed: 0, weight: 1 },
            c = o.stackWeight / l.weight || 1;
          if (o.horizontal) {
            const n = e.w * c,
              r = l.size || t.height;
            M(l.start) && (a = l.start),
              t.fullSize
                ? ln(t, s.left, a, i.outerWidth - s.right - s.left, r)
                : ln(t, e.left + l.placed, a, n, r),
              (l.start = a),
              (l.placed += n),
              (a = t.bottom);
          } else {
            const n = e.h * c,
              a = l.size || t.width;
            M(l.start) && (r = l.start),
              t.fullSize
                ? ln(t, r, s.top, a, i.outerHeight - s.bottom - s.top)
                : ln(t, r, e.top + l.placed, a, n),
              (l.start = r),
              (l.placed += n),
              (r = t.right);
          }
        }
        (e.x = r), (e.y = a);
      }
      zt.set('layout', {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      var hn = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        removeBox(t, e) {
          const i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure(t, e, i) {
          (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
        },
        update(t, e, i, n) {
          if (!t) return;
          const s = oe(t.options.layout.padding),
            r = Math.max(e - s.width, 0),
            a = Math.max(i - s.height, 0),
            o = (function (t) {
              const e = (function (t) {
                  const e = [];
                  let i, n, s, r, a, o;
                  for (i = 0, n = (t || []).length; i < n; ++i)
                    (s = t[i]),
                      ({
                        position: r,
                        options: { stack: a, stackWeight: o = 1 },
                      } = s),
                      e.push({
                        index: i,
                        box: s,
                        pos: r,
                        horizontal: s.isHorizontal(),
                        weight: s.weight,
                        stack: a && r + a,
                        stackWeight: o,
                      });
                  return e;
                })(t),
                i = en(
                  e.filter(t => t.box.fullSize),
                  !0,
                ),
                n = en(Qi(e, 'left'), !0),
                s = en(Qi(e, 'right')),
                r = en(Qi(e, 'top'), !0),
                a = en(Qi(e, 'bottom')),
                o = tn(e, 'x'),
                l = tn(e, 'y');
              return {
                fullSize: i,
                leftAndTop: n.concat(r),
                rightAndBottom: s.concat(l).concat(a).concat(o),
                chartArea: Qi(e, 'chartArea'),
                vertical: n.concat(s).concat(l),
                horizontal: r.concat(a).concat(o),
              };
            })(t.boxes),
            l = o.vertical,
            c = o.horizontal;
          v(t.boxes, t => {
            'function' == typeof t.beforeLayout && t.beforeLayout();
          });
          const h =
              l.reduce(
                (t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1),
                0,
              ) || 1,
            d = Object.freeze({
              outerWidth: e,
              outerHeight: i,
              padding: s,
              availableWidth: r,
              availableHeight: a,
              vBoxMaxWidth: r / 2 / h,
              hBoxMaxHeight: a / 2,
            }),
            u = Object.assign({}, s);
          sn(u, oe(n));
          const p = Object.assign({ maxPadding: u, w: r, h: a, x: s.left, y: s.top }, s),
            f = (function (t, e) {
              const i = (function (t) {
                  const e = {};
                  for (const i of t) {
                    const { stack: t, pos: n, stackWeight: s } = i;
                    if (!t || !Zi.includes(n)) continue;
                    const r =
                      e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                    r.count++, (r.weight += s);
                  }
                  return e;
                })(t),
                { vBoxMaxWidth: n, hBoxMaxHeight: s } = e;
              let r, a, o;
              for (r = 0, a = t.length; r < a; ++r) {
                o = t[r];
                const { fullSize: a } = o.box,
                  l = i[o.stack],
                  c = l && o.stackWeight / l.weight;
                o.horizontal
                  ? ((o.width = c ? c * n : a && e.availableWidth), (o.height = s))
                  : ((o.width = n), (o.height = c ? c * s : a && e.availableHeight));
              }
              return i;
            })(l.concat(c), d);
          on(o.fullSize, p, d, f),
            on(l, p, d, f),
            on(c, p, d, f) && on(l, p, d, f),
            (function (t) {
              const e = t.maxPadding;
              function i(i) {
                const n = Math.max(e[i] - t[i], 0);
                return (t[i] += n), n;
              }
              (t.y += i('top')), (t.x += i('left')), i('right'), i('bottom');
            })(p),
            cn(o.leftAndTop, p, d, f),
            (p.x += p.w),
            (p.y += p.h),
            cn(o.rightAndBottom, p, d, f),
            (t.chartArea = {
              left: p.left,
              top: p.top,
              right: p.left + p.w,
              bottom: p.top + p.h,
              height: p.h,
              width: p.w,
            }),
            v(o.chartArea, e => {
              const i = e.box;
              Object.assign(i, t.chartArea),
                i.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class dn {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, i, n) {
          return (
            (e = Math.max(0, e || t.width)),
            (i = i || t.height),
            { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
          );
        }
        isAttached(t) {
          return !0;
        }
        updateConfig(t) {}
      }
      class un extends dn {
        acquireContext(t) {
          return (t && t.getContext && t.getContext('2d')) || null;
        }
        updateConfig(t) {
          t.options.animation = !1;
        }
      }
      const pn = {
          touchstart: 'mousedown',
          touchmove: 'mousemove',
          touchend: 'mouseup',
          pointerenter: 'mouseenter',
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointerleave: 'mouseout',
          pointerout: 'mouseout',
        },
        fn = t => null === t || '' === t,
        gn = !!qe && { passive: !0 };
      function mn(t, e, i) {
        t.canvas.removeEventListener(e, i, gn);
      }
      function vn(t, e) {
        for (const i of t) if (i === e || i.contains(e)) return !0;
      }
      function bn(t, e, i) {
        const n = t.canvas,
          s = new MutationObserver(t => {
            let e = !1;
            for (const i of t)
              (e = e || vn(i.addedNodes, n)), (e = e && !vn(i.removedNodes, n));
            e && i();
          });
        return s.observe(document, { childList: !0, subtree: !0 }), s;
      }
      function yn(t, e, i) {
        const n = t.canvas,
          s = new MutationObserver(t => {
            let e = !1;
            for (const i of t)
              (e = e || vn(i.removedNodes, n)), (e = e && !vn(i.addedNodes, n));
            e && i();
          });
        return s.observe(document, { childList: !0, subtree: !0 }), s;
      }
      const xn = new Map();
      let wn = 0;
      function _n() {
        const t = window.devicePixelRatio;
        t !== wn &&
          ((wn = t),
          xn.forEach((e, i) => {
            i.currentDevicePixelRatio !== t && e();
          }));
      }
      function kn(t, e, i) {
        const n = t.canvas,
          r = n && Fe(n);
        if (!r) return;
        const a = s((t, e) => {
            const n = r.clientWidth;
            i(t, e), n < r.clientWidth && i();
          }, window),
          o = new ResizeObserver(t => {
            const e = t[0],
              i = e.contentRect.width,
              n = e.contentRect.height;
            (0 === i && 0 === n) || a(i, n);
          });
        return (
          o.observe(r),
          (function (t, e) {
            xn.size || window.addEventListener('resize', _n), xn.set(t, e);
          })(t, a),
          o
        );
      }
      function Cn(t, e, i) {
        i && i.disconnect(),
          'resize' === e &&
            (function (t) {
              xn.delete(t), xn.size || window.removeEventListener('resize', _n);
            })(t);
      }
      function Sn(t, e, i) {
        const n = t.canvas,
          r = s(
            e => {
              null !== t.ctx &&
                i(
                  (function (t, e) {
                    const i = pn[t.type] || t.type,
                      { x: n, y: s } = Ve(t, e);
                    return {
                      type: i,
                      chart: e,
                      native: t,
                      x: void 0 !== n ? n : null,
                      y: void 0 !== s ? s : null,
                    };
                  })(e, t),
                );
            },
            t,
            t => {
              const e = t[0];
              return [e, e.offsetX, e.offsetY];
            },
          );
        return (
          (function (t, e, i) {
            t.addEventListener(e, i, gn);
          })(n, e, r),
          r
        );
      }
      class Tn extends dn {
        acquireContext(t, e) {
          const i = t && t.getContext && t.getContext('2d');
          return i && i.canvas === t
            ? ((function (t, e) {
                const i = t.style,
                  n = t.getAttribute('height'),
                  s = t.getAttribute('width');
                if (
                  ((t.$chartjs = {
                    initial: {
                      height: n,
                      width: s,
                      style: { display: i.display, height: i.height, width: i.width },
                    },
                  }),
                  (i.display = i.display || 'block'),
                  (i.boxSizing = i.boxSizing || 'border-box'),
                  fn(s))
                ) {
                  const e = Ge(t, 'width');
                  void 0 !== e && (t.width = e);
                }
                if (fn(n))
                  if ('' === t.style.height) t.height = t.width / (e || 2);
                  else {
                    const e = Ge(t, 'height');
                    void 0 !== e && (t.height = e);
                  }
              })(t, e),
              i)
            : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e.$chartjs) return !1;
          const i = e.$chartjs.initial;
          ['height', 'width'].forEach(t => {
            const n = i[t];
            c(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
          });
          const n = i.style || {};
          return (
            Object.keys(n).forEach(t => {
              e.style[t] = n[t];
            }),
            (e.width = e.width),
            delete e.$chartjs,
            !0
          );
        }
        addEventListener(t, e, i) {
          this.removeEventListener(t, e);
          const n = t.$proxies || (t.$proxies = {}),
            s = { attach: bn, detach: yn, resize: kn }[e] || Sn;
          n[e] = s(t, e, i);
        }
        removeEventListener(t, e) {
          const i = t.$proxies || (t.$proxies = {}),
            n = i[e];
          n &&
            (({ attach: Cn, detach: Cn, resize: Cn }[e] || mn)(t, e, n), (i[e] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, i, n) {
          return (function (t, e, i, n) {
            const s = He(t),
              r = ze(s, 'margin'),
              a = Re(s.maxWidth, t, 'clientWidth') || N,
              o = Re(s.maxHeight, t, 'clientHeight') || N,
              l = (function (t, e, i) {
                let n, s;
                if (void 0 === e || void 0 === i) {
                  const r = Fe(t);
                  if (r) {
                    const t = r.getBoundingClientRect(),
                      a = He(r),
                      o = ze(a, 'border', 'width'),
                      l = ze(a, 'padding');
                    (e = t.width - l.width - o.width),
                      (i = t.height - l.height - o.height),
                      (n = Re(a.maxWidth, r, 'clientWidth')),
                      (s = Re(a.maxHeight, r, 'clientHeight'));
                  } else (e = t.clientWidth), (i = t.clientHeight);
                }
                return { width: e, height: i, maxWidth: n || N, maxHeight: s || N };
              })(t, e, i);
            let { width: c, height: h } = l;
            if ('content-box' === s.boxSizing) {
              const t = ze(s, 'border', 'width'),
                e = ze(s, 'padding');
              (c -= e.width + t.width), (h -= e.height + t.height);
            }
            return (
              (c = Math.max(0, c - r.width)),
              (h = Math.max(0, n ? Math.floor(c / n) : h - r.height)),
              (c = Be(Math.min(c, a, l.maxWidth))),
              (h = Be(Math.min(h, o, l.maxHeight))),
              c && !h && (h = Be(c / 2)),
              { width: c, height: h }
            );
          })(t, e, i, n);
        }
        isAttached(t) {
          const e = Fe(t);
          return !(!e || !e.isConnected);
        }
      }
      class Dn {
        constructor() {
          (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
        }
        tooltipPosition(t) {
          const { x: e, y: i } = this.getProps(['x', 'y'], t);
          return { x: e, y: i };
        }
        hasValue() {
          return V(this.x) && V(this.y);
        }
        getProps(t, e) {
          const i = this.$animations;
          if (!e || !i) return this;
          const n = {};
          return (
            t.forEach(t => {
              n[t] = i[t] && i[t].active() ? i[t]._to : this[t];
            }),
            n
          );
        }
      }
      (Dn.defaults = {}), (Dn.defaultRoutes = void 0);
      const Mn = {
        values: t => (h(t) ? t : '' + t),
        numeric(t, e, i) {
          if (0 === t) return '0';
          const n = this.chart.options.locale;
          let s,
            r = t;
          if (i.length > 1) {
            const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
            (e < 1e-4 || e > 1e15) && (s = 'scientific'),
              (r = (function (t, e) {
                let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                return (
                  Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i
                );
              })(t, i));
          }
          const a = H(Math.abs(r)),
            o = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            l = { notation: s, minimumFractionDigits: o, maximumFractionDigits: o };
          return Object.assign(l, this.options.ticks.format), Je(t, n, l);
        },
        logarithmic(t, e, i) {
          if (0 === t) return '0';
          const n = t / Math.pow(10, Math.floor(H(t)));
          return 1 === n || 2 === n || 5 === n ? Mn.numeric.call(this, t, e, i) : '';
        },
      };
      var En = { formatters: Mn };
      function Pn(t, e, i, n, s) {
        const r = f(n, 0),
          a = Math.min(f(s, t.length), t.length);
        let o,
          l,
          c,
          h = 0;
        for (
          i = Math.ceil(i), s && ((o = s - n), (i = o / Math.floor(o / i))), c = r;
          c < 0;

        )
          h++, (c = Math.round(r + h * i));
        for (l = Math.max(r, 0); l < a; l++)
          l === c && (e.push(t[l]), h++, (c = Math.round(r + h * i)));
      }
      zt.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (t, e) => e.lineWidth,
          tickColor: (t, e) => e.color,
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: '',
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: En.formatters.values,
          minor: {},
          major: {},
          align: 'center',
          crossAlign: 'near',
          showLabelBackdrop: !1,
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          backdropPadding: 2,
        },
      }),
        zt.route('scale.ticks', 'color', '', 'color'),
        zt.route('scale.grid', 'color', '', 'borderColor'),
        zt.route('scale.grid', 'borderColor', '', 'borderColor'),
        zt.route('scale.title', 'color', '', 'color'),
        zt.describe('scale', {
          _fallback: !1,
          _scriptable: t =>
            !t.startsWith('before') &&
            !t.startsWith('after') &&
            'callback' !== t &&
            'parser' !== t,
          _indexable: t => 'borderDash' !== t && 'tickBorderDash' !== t,
        }),
        zt.describe('scales', { _fallback: 'scale' }),
        zt.describe('scale.ticks', {
          _scriptable: t => 'backdropPadding' !== t && 'callback' !== t,
          _indexable: t => 'backdropPadding' !== t,
        });
      const An = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i);
      function Ln(t, e) {
        const i = [],
          n = t.length / e,
          s = t.length;
        let r = 0;
        for (; r < s; r += n) i.push(t[Math.floor(r)]);
        return i;
      }
      function On(t, e, i) {
        const n = t.ticks.length,
          s = Math.min(e, n - 1),
          r = t._startPixel,
          a = t._endPixel,
          o = 1e-6;
        let l,
          c = t.getPixelForTick(s);
        if (
          !(
            i &&
            ((l =
              1 === n
                ? Math.max(c - r, a - c)
                : 0 === e
                ? (t.getPixelForTick(1) - c) / 2
                : (c - t.getPixelForTick(s - 1)) / 2),
            (c += s < e ? l : -l),
            c < r - o || c > a + o)
          )
        )
          return c;
      }
      function Nn(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function In(t, e) {
        if (!t.display) return 0;
        const i = le(t.font, e),
          n = oe(t.padding);
        return (h(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
      }
      function $n(t, e, i) {
        let n = r(t);
        return (
          ((i && 'right' !== e) || (!i && 'right' === e)) &&
            (n = (t => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(n)),
          n
        );
      }
      class Fn extends Dn {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(t) {
          (this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: n } = this;
          return (
            (t = p(t, Number.POSITIVE_INFINITY)),
            (e = p(e, Number.NEGATIVE_INFINITY)),
            (i = p(i, Number.POSITIVE_INFINITY)),
            (n = p(n, Number.NEGATIVE_INFINITY)),
            { min: p(t, i), max: p(e, n), minDefined: u(t), maxDefined: u(e) }
          );
        }
        getMinMax(t) {
          let e,
            { min: i, max: n, minDefined: s, maxDefined: r } = this.getUserBounds();
          if (s && r) return { min: i, max: n };
          const a = this.getMatchingVisibleMetas();
          for (let o = 0, l = a.length; o < l; ++o)
            (e = a[o].controller.getMinMax(this, t)),
              s || (i = Math.min(i, e.min)),
              r || (n = Math.max(n, e.max));
          return (
            (i = r && i > n ? n : i),
            (n = s && i > n ? i : n),
            { min: p(i, p(n, i)), max: p(n, p(i, n)) }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          m(this.options.beforeUpdate, [this]);
        }
        update(t, e, i) {
          const { beginAtZero: n, grace: s, ticks: r } = this.options,
            a = r.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, i) {
                const { min: n, max: s } = t,
                  r = g(e, (s - n) / 2),
                  a = (t, e) => (i && 0 === t ? 0 : t + e);
                return { min: a(n, -Math.abs(r)), max: a(s, r) };
              })(this, s, n)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const o = a < this.ticks.length;
          this._convertTicksToLabels(o ? Ln(this.ticks, a) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            r.display &&
              (r.autoSkip || 'auto' === r.source) &&
              ((this.ticks = (function (t, e) {
                const i = t.options.ticks,
                  n =
                    i.maxTicksLimit ||
                    (function (t) {
                      const e = t.options.offset,
                        i = t._tickSize(),
                        n = t._length / i + (e ? 0 : 1),
                        s = t._maxLength / i;
                      return Math.floor(Math.min(n, s));
                    })(t),
                  s = i.major.enabled
                    ? (function (t) {
                        const e = [];
                        let i, n;
                        for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
                        return e;
                      })(e)
                    : [],
                  r = s.length,
                  a = s[0],
                  o = s[r - 1],
                  l = [];
                if (r > n)
                  return (
                    (function (t, e, i, n) {
                      let s,
                        r = 0,
                        a = i[0];
                      for (n = Math.ceil(n), s = 0; s < t.length; s++)
                        s === a && (e.push(t[s]), r++, (a = i[r * n]));
                    })(e, l, s, r / n),
                    l
                  );
                const h = (function (t, e, i) {
                  const n = (function (t) {
                      const e = t.length;
                      let i, n;
                      if (e < 2) return !1;
                      for (n = t[0], i = 1; i < e; ++i)
                        if (t[i] - t[i - 1] !== n) return !1;
                      return n;
                    })(t),
                    s = e.length / i;
                  if (!n) return Math.max(s, 1);
                  const r = (function (t) {
                    const e = [],
                      i = Math.sqrt(t);
                    let n;
                    for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
                    return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
                  })(n);
                  for (let t = 0, e = r.length - 1; t < e; t++) {
                    const e = r[t];
                    if (e > s) return e;
                  }
                  return Math.max(s, 1);
                })(s, e, n);
                if (r > 0) {
                  let t, i;
                  const n = r > 1 ? Math.round((o - a) / (r - 1)) : null;
                  for (Pn(e, l, h, c(n) ? 0 : a - n, a), t = 0, i = r - 1; t < i; t++)
                    Pn(e, l, h, s[t], s[t + 1]);
                  return Pn(e, l, h, o, c(n) ? e.length : o + n), l;
                }
                return Pn(e, l, h), l;
              })(this, this.ticks)),
              (this._labelSizes = null)),
            o && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            e,
            i = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (i = !i)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = i),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          m(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          m(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          m(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()), m(this.options[t], [this]);
        }
        beforeDataLimits() {
          this._callHooks('beforeDataLimits');
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks('afterDataLimits');
        }
        beforeBuildTicks() {
          this._callHooks('beforeBuildTicks');
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks('afterBuildTicks');
        }
        beforeTickToLabelConversion() {
          m(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let i, n, s;
          for (i = 0, n = t.length; i < n; i++)
            (s = t[i]), (s.label = m(e.callback, [s.value, i, t], this));
        }
        afterTickToLabelConversion() {
          m(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          m(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            i = this.ticks.length,
            n = e.minRotation || 0,
            s = e.maxRotation;
          let r,
            a,
            o,
            l = n;
          if (
            !this._isVisible() ||
            !e.display ||
            n >= s ||
            i <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = n);
          const c = this._getLabelSizes(),
            h = c.widest.width,
            d = c.highest.height,
            u = Q(this.chart.width - h, 0, this.maxWidth);
          (r = t.offset ? this.maxWidth / i : u / (i - 1)),
            h + 6 > r &&
              ((r = u / (i - (t.offset ? 0.5 : 1))),
              (a =
                this.maxHeight -
                Nn(t.grid) -
                e.padding -
                In(t.title, this.chart.options.font)),
              (o = Math.sqrt(h * h + d * d)),
              (l = G(
                Math.min(
                  Math.asin(Q((c.highest.height + 6) / r, -1, 1)),
                  Math.asin(Q(a / o, -1, 1)) - Math.asin(Q(d / o, -1, 1)),
                ),
              )),
              (l = Math.max(n, Math.min(s, l)))),
            (this.labelRotation = l);
        }
        afterCalculateLabelRotation() {
          m(this.options.afterCalculateLabelRotation, [this]);
        }
        beforeFit() {
          m(this.options.beforeFit, [this]);
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: i, title: n, grid: s },
            } = this,
            r = this._isVisible(),
            a = this.isHorizontal();
          if (r) {
            const r = In(n, e.options.font);
            if (
              (a
                ? ((t.width = this.maxWidth), (t.height = Nn(s) + r))
                : ((t.height = this.maxHeight), (t.width = Nn(s) + r)),
              i.display && this.ticks.length)
            ) {
              const { first: e, last: n, widest: s, highest: r } = this._getLabelSizes(),
                o = 2 * i.padding,
                l = q(this.labelRotation),
                c = Math.cos(l),
                h = Math.sin(l);
              if (a) {
                const e = i.mirror ? 0 : h * s.width + c * r.height;
                t.height = Math.min(this.maxHeight, t.height + e + o);
              } else {
                const e = i.mirror ? 0 : c * s.width + h * r.height;
                t.width = Math.min(this.maxWidth, t.width + e + o);
              }
              this._calculatePadding(e, n, h, c);
            }
          }
          this._handleMargins(),
            a
              ? ((this.width = this._length =
                  e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length =
                  e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, i, n) {
          const {
              ticks: { align: s, padding: r },
              position: a,
            } = this.options,
            o = 0 !== this.labelRotation,
            l = 'top' !== a && 'x' === this.axis;
          if (this.isHorizontal()) {
            const a = this.getPixelForTick(0) - this.left,
              c = this.right - this.getPixelForTick(this.ticks.length - 1);
            let h = 0,
              d = 0;
            o
              ? l
                ? ((h = n * t.width), (d = i * e.height))
                : ((h = i * t.height), (d = n * e.width))
              : 'start' === s
              ? (d = e.width)
              : 'end' === s
              ? (h = t.width)
              : ((h = t.width / 2), (d = e.width / 2)),
              (this.paddingLeft = Math.max(
                ((h - a + r) * this.width) / (this.width - a),
                0,
              )),
              (this.paddingRight = Math.max(
                ((d - c + r) * this.width) / (this.width - c),
                0,
              ));
          } else {
            let i = e.height / 2,
              n = t.height / 2;
            'start' === s
              ? ((i = 0), (n = t.height))
              : 'end' === s && ((i = e.height), (n = 0)),
              (this.paddingTop = i + r),
              (this.paddingBottom = n + r);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
            (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
        }
        afterFit() {
          m(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return 'top' === e || 'bottom' === e || 'x' === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          let e, i;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(t),
              e = 0,
              i = t.length;
            e < i;
            e++
          )
            c(t[e].label) && (t.splice(e, 1), i--, e--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let t = this._labelSizes;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let i = this.ticks;
            e < i.length && (i = Ln(i, e)),
              (this._labelSizes = t = this._computeLabelSizes(i, i.length));
          }
          return t;
        }
        _computeLabelSizes(t, e) {
          const { ctx: i, _longestTextCache: n } = this,
            s = [],
            r = [];
          let a,
            o,
            l,
            d,
            u,
            p,
            f,
            g,
            m,
            b,
            y,
            x = 0,
            w = 0;
          for (a = 0; a < e; ++a) {
            if (
              ((d = t[a].label),
              (u = this._resolveTickFontOptions(a)),
              (i.font = p = u.string),
              (f = n[p] = n[p] || { data: {}, gc: [] }),
              (g = u.lineHeight),
              (m = b = 0),
              c(d) || h(d))
            ) {
              if (h(d))
                for (o = 0, l = d.length; o < l; ++o)
                  (y = d[o]), c(y) || h(y) || ((m = Vt(i, f.data, f.gc, m, y)), (b += g));
            } else (m = Vt(i, f.data, f.gc, m, d)), (b = g);
            s.push(m), r.push(b), (x = Math.max(m, x)), (w = Math.max(b, w));
          }
          !(function (t, e) {
            v(t, t => {
              const i = t.gc,
                n = i.length / 2;
              let s;
              if (n > e) {
                for (s = 0; s < n; ++s) delete t.data[i[s]];
                i.splice(0, n);
              }
            });
          })(n, e);
          const _ = s.indexOf(x),
            k = r.indexOf(w),
            C = t => ({ width: s[t] || 0, height: r[t] || 0 });
          return {
            first: C(0),
            last: C(e - 1),
            widest: C(_),
            highest: C(k),
            widths: s,
            heights: r,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          const e = this._startPixel + t * this._length;
          return Q(this._alignToPixels ? Wt(this.chart, e, 0) : e, -32768, 32767);
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (
              i.$context ||
              (i.$context = (function (t, e, i) {
                return he(t, { tick: i, index: e, type: 'tick' });
              })(this.getContext(), t, i))
            );
          }
          return (
            this.$context ||
            (this.$context = he(this.chart.getContext(), { scale: this, type: 'scale' }))
          );
        }
        _tickSize() {
          const t = this.options.ticks,
            e = q(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            n = Math.abs(Math.sin(e)),
            s = this._getLabelSizes(),
            r = t.autoSkipPadding || 0,
            a = s ? s.widest.width + r : 0,
            o = s ? s.highest.height + r : 0;
          return this.isHorizontal()
            ? o * i > a * n
              ? a / i
              : o / n
            : o * n < a * i
            ? o / i
            : a / n;
        }
        _isVisible() {
          const t = this.options.display;
          return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            i = this.chart,
            n = this.options,
            { grid: s, position: r } = n,
            a = s.offset,
            o = this.isHorizontal(),
            l = this.ticks.length + (a ? 1 : 0),
            c = Nn(s),
            h = [],
            u = s.setContext(this.getContext()),
            p = u.drawBorder ? u.borderWidth : 0,
            g = p / 2,
            m = function (t) {
              return Wt(i, t, p);
            };
          let v, b, y, x, w, _, k, C, S, T, D, M;
          if ('top' === r)
            (v = m(this.bottom)),
              (_ = this.bottom - c),
              (C = v - g),
              (T = m(t.top) + g),
              (M = t.bottom);
          else if ('bottom' === r)
            (v = m(this.top)),
              (T = t.top),
              (M = m(t.bottom) - g),
              (_ = v + g),
              (C = this.top + c);
          else if ('left' === r)
            (v = m(this.right)),
              (w = this.right - c),
              (k = v - g),
              (S = m(t.left) + g),
              (D = t.right);
          else if ('right' === r)
            (v = m(this.left)),
              (S = t.left),
              (D = m(t.right) - g),
              (w = v + g),
              (k = this.left + c);
          else if ('x' === e) {
            if ('center' === r) v = m((t.top + t.bottom) / 2 + 0.5);
            else if (d(r)) {
              const t = Object.keys(r)[0],
                e = r[t];
              v = m(this.chart.scales[t].getPixelForValue(e));
            }
            (T = t.top), (M = t.bottom), (_ = v + g), (C = _ + c);
          } else if ('y' === e) {
            if ('center' === r) v = m((t.left + t.right) / 2);
            else if (d(r)) {
              const t = Object.keys(r)[0],
                e = r[t];
              v = m(this.chart.scales[t].getPixelForValue(e));
            }
            (w = v - g), (k = w - c), (S = t.left), (D = t.right);
          }
          const E = f(n.ticks.maxTicksLimit, l),
            P = Math.max(1, Math.ceil(l / E));
          for (b = 0; b < l; b += P) {
            const t = s.setContext(this.getContext(b)),
              e = t.lineWidth,
              n = t.color,
              r = s.borderDash || [],
              l = t.borderDashOffset,
              c = t.tickWidth,
              d = t.tickColor,
              u = t.tickBorderDash || [],
              p = t.tickBorderDashOffset;
            (y = On(this, b, a)),
              void 0 !== y &&
                ((x = Wt(i, y, e)),
                o ? (w = k = S = D = x) : (_ = C = T = M = x),
                h.push({
                  tx1: w,
                  ty1: _,
                  tx2: k,
                  ty2: C,
                  x1: S,
                  y1: T,
                  x2: D,
                  y2: M,
                  width: e,
                  color: n,
                  borderDash: r,
                  borderDashOffset: l,
                  tickWidth: c,
                  tickColor: d,
                  tickBorderDash: u,
                  tickBorderDashOffset: p,
                }));
          }
          return (this._ticksLength = l), (this._borderValue = v), h;
        }
        _computeLabelItems(t) {
          const e = this.axis,
            i = this.options,
            { position: n, ticks: s } = i,
            r = this.isHorizontal(),
            a = this.ticks,
            { align: o, crossAlign: l, padding: c, mirror: u } = s,
            p = Nn(i.grid),
            f = p + c,
            g = u ? -c : f,
            m = -q(this.labelRotation),
            v = [];
          let b,
            y,
            x,
            w,
            _,
            k,
            C,
            S,
            T,
            D,
            M,
            E,
            P = 'middle';
          if ('top' === n) (k = this.bottom - g), (C = this._getXAxisLabelAlignment());
          else if ('bottom' === n)
            (k = this.top + g), (C = this._getXAxisLabelAlignment());
          else if ('left' === n) {
            const t = this._getYAxisLabelAlignment(p);
            (C = t.textAlign), (_ = t.x);
          } else if ('right' === n) {
            const t = this._getYAxisLabelAlignment(p);
            (C = t.textAlign), (_ = t.x);
          } else if ('x' === e) {
            if ('center' === n) k = (t.top + t.bottom) / 2 + f;
            else if (d(n)) {
              const t = Object.keys(n)[0],
                e = n[t];
              k = this.chart.scales[t].getPixelForValue(e) + f;
            }
            C = this._getXAxisLabelAlignment();
          } else if ('y' === e) {
            if ('center' === n) _ = (t.left + t.right) / 2 - f;
            else if (d(n)) {
              const t = Object.keys(n)[0],
                e = n[t];
              _ = this.chart.scales[t].getPixelForValue(e);
            }
            C = this._getYAxisLabelAlignment(p).textAlign;
          }
          'y' === e && ('start' === o ? (P = 'top') : 'end' === o && (P = 'bottom'));
          const A = this._getLabelSizes();
          for (b = 0, y = a.length; b < y; ++b) {
            (x = a[b]), (w = x.label);
            const t = s.setContext(this.getContext(b));
            (S = this.getPixelForTick(b) + s.labelOffset),
              (T = this._resolveTickFontOptions(b)),
              (D = T.lineHeight),
              (M = h(w) ? w.length : 1);
            const e = M / 2,
              i = t.color,
              o = t.textStrokeColor,
              c = t.textStrokeWidth;
            let d;
            if (
              (r
                ? ((_ = S),
                  (E =
                    'top' === n
                      ? 'near' === l || 0 !== m
                        ? -M * D + D / 2
                        : 'center' === l
                        ? -A.highest.height / 2 - e * D + D
                        : -A.highest.height + D / 2
                      : 'near' === l || 0 !== m
                      ? D / 2
                      : 'center' === l
                      ? A.highest.height / 2 - e * D
                      : A.highest.height - M * D),
                  u && (E *= -1))
                : ((k = S), (E = ((1 - M) * D) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = oe(t.backdropPadding),
                i = A.heights[b],
                n = A.widths[b];
              let s = k + E - e.top,
                r = _ - e.left;
              switch (P) {
                case 'middle':
                  s -= i / 2;
                  break;
                case 'bottom':
                  s -= i;
              }
              switch (C) {
                case 'center':
                  r -= n / 2;
                  break;
                case 'right':
                  r -= n;
              }
              d = {
                left: r,
                top: s,
                width: n + e.width,
                height: i + e.height,
                color: t.backdropColor,
              };
            }
            v.push({
              rotation: m,
              label: w,
              font: T,
              color: i,
              strokeColor: o,
              strokeWidth: c,
              textOffset: E,
              textAlign: C,
              textBaseline: P,
              translation: [_, k],
              backdrop: d,
            });
          }
          return v;
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options;
          if (-q(this.labelRotation)) return 'top' === t ? 'left' : 'right';
          let i = 'center';
          return (
            'start' === e.align ? (i = 'left') : 'end' === e.align && (i = 'right'), i
          );
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: i, mirror: n, padding: s },
            } = this.options,
            r = t + s,
            a = this._getLabelSizes().widest.width;
          let o, l;
          return (
            'left' === e
              ? n
                ? ((l = this.right + s),
                  'near' === i
                    ? (o = 'left')
                    : 'center' === i
                    ? ((o = 'center'), (l += a / 2))
                    : ((o = 'right'), (l += a)))
                : ((l = this.right - r),
                  'near' === i
                    ? (o = 'right')
                    : 'center' === i
                    ? ((o = 'center'), (l -= a / 2))
                    : ((o = 'left'), (l = this.left)))
              : 'right' === e
              ? n
                ? ((l = this.left + s),
                  'near' === i
                    ? (o = 'right')
                    : 'center' === i
                    ? ((o = 'center'), (l -= a / 2))
                    : ((o = 'left'), (l -= a)))
                : ((l = this.left + r),
                  'near' === i
                    ? (o = 'left')
                    : 'center' === i
                    ? ((o = 'center'), (l += a / 2))
                    : ((o = 'right'), (l = this.right)))
              : (o = 'right'),
            { textAlign: o, x: l }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return 'left' === e || 'right' === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : 'top' === e || 'bottom' === e
            ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: i,
            top: n,
            width: s,
            height: r,
          } = this;
          e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, s, r), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this._isVisible() || !e.display) return 0;
          const i = this.ticks.findIndex(e => e.value === t);
          return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
        }
        drawGrid(t) {
          const e = this.options.grid,
            i = this.ctx,
            n =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(t));
          let s, r;
          const a = (t, e, n) => {
            n.width &&
              n.color &&
              (i.save(),
              (i.lineWidth = n.width),
              (i.strokeStyle = n.color),
              i.setLineDash(n.borderDash || []),
              (i.lineDashOffset = n.borderDashOffset),
              i.beginPath(),
              i.moveTo(t.x, t.y),
              i.lineTo(e.x, e.y),
              i.stroke(),
              i.restore());
          };
          if (e.display)
            for (s = 0, r = n.length; s < r; ++s) {
              const t = n[s];
              e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  a(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    },
                  );
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { grid: i },
            } = this,
            n = i.setContext(this.getContext()),
            s = i.drawBorder ? n.borderWidth : 0;
          if (!s) return;
          const r = i.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
          let o, l, c, h;
          this.isHorizontal()
            ? ((o = Wt(t, this.left, s) - s / 2),
              (l = Wt(t, this.right, r) + r / 2),
              (c = h = a))
            : ((c = Wt(t, this.top, s) - s / 2),
              (h = Wt(t, this.bottom, r) + r / 2),
              (o = l = a)),
            e.save(),
            (e.lineWidth = n.borderWidth),
            (e.strokeStyle = n.borderColor),
            e.beginPath(),
            e.moveTo(o, c),
            e.lineTo(l, h),
            e.stroke(),
            e.restore();
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            i = this._computeLabelArea();
          i && Ut(e, i);
          const n = this._labelItems || (this._labelItems = this._computeLabelItems(t));
          let s, r;
          for (s = 0, r = n.length; s < r; ++s) {
            const t = n[s],
              i = t.font,
              r = t.label;
            t.backdrop &&
              ((e.fillStyle = t.backdrop.color),
              e.fillRect(
                t.backdrop.left,
                t.backdrop.top,
                t.backdrop.width,
                t.backdrop.height,
              )),
              Zt(e, r, 0, t.textOffset, i, t);
          }
          i && Xt(e);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: i, reverse: n },
          } = this;
          if (!i.display) return;
          const s = le(i.font),
            r = oe(i.padding),
            o = i.align;
          let l = s.lineHeight / 2;
          'bottom' === e || 'center' === e || d(e)
            ? ((l += r.bottom), h(i.text) && (l += s.lineHeight * (i.text.length - 1)))
            : (l += r.top);
          const {
            titleX: c,
            titleY: u,
            maxWidth: p,
            rotation: f,
          } = (function (t, e, i, n) {
            const { top: s, left: r, bottom: o, right: l, chart: c } = t,
              { chartArea: h, scales: u } = c;
            let p,
              f,
              g,
              m = 0;
            const v = o - s,
              b = l - r;
            if (t.isHorizontal()) {
              if (((f = a(n, r, l)), d(i))) {
                const t = Object.keys(i)[0],
                  n = i[t];
                g = u[t].getPixelForValue(n) + v - e;
              } else g = 'center' === i ? (h.bottom + h.top) / 2 + v - e : An(t, i, e);
              p = l - r;
            } else {
              if (d(i)) {
                const t = Object.keys(i)[0],
                  n = i[t];
                f = u[t].getPixelForValue(n) - b + e;
              } else f = 'center' === i ? (h.left + h.right) / 2 - b + e : An(t, i, e);
              (g = a(n, o, s)), (m = 'left' === i ? -$ : $);
            }
            return { titleX: f, titleY: g, maxWidth: p, rotation: m };
          })(this, l, e, o);
          Zt(t, i.text, 0, 0, s, {
            color: i.color,
            maxWidth: p,
            rotation: f,
            textAlign: $n(o, e, n),
            textBaseline: 'middle',
            translation: [c, u],
          });
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            i = f(t.grid && t.grid.z, -1);
          return this._isVisible() && this.draw === Fn.prototype.draw
            ? [
                {
                  z: i,
                  draw: t => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle();
                  },
                },
                {
                  z: i + 1,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: e,
                  draw: t => {
                    this.drawLabels(t);
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: t => {
                    this.draw(t);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + 'AxisID',
            n = [];
          let s, r;
          for (s = 0, r = e.length; s < r; ++s) {
            const r = e[s];
            r[i] !== this.id || (t && r.type !== t) || n.push(r);
          }
          return n;
        }
        _resolveTickFontOptions(t) {
          return le(this.options.ticks.setContext(this.getContext(t)).font);
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }
      class Rn {
        constructor(t, e, i) {
          (this.type = t),
            (this.scope = e),
            (this.override = i),
            (this.items = Object.create(null));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let i;
          (function (t) {
            return 'id' in t && 'defaults' in t;
          })(e) && (i = this.register(e));
          const n = this.items,
            s = t.id,
            r = this.scope + '.' + s;
          if (!s) throw new Error('class does not have id: ' + t);
          return (
            s in n ||
              ((n[s] = t),
              (function (t, e, i) {
                const n = _(Object.create(null), [
                  i ? zt.get(i) : {},
                  zt.get(e),
                  t.defaults,
                ]);
                zt.set(e, n),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach(i => {
                        const n = i.split('.'),
                          s = n.pop(),
                          r = [t].concat(n).join('.'),
                          a = e[i].split('.'),
                          o = a.pop(),
                          l = a.join('.');
                        zt.route(r, s, l, o);
                      });
                    })(e, t.defaultRoutes),
                  t.descriptors && zt.describe(e, t.descriptors);
              })(t, r, i),
              this.override && zt.override(t.id, t.overrides)),
            r
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            i = t.id,
            n = this.scope;
          i in e && delete e[i],
            n && i in zt[n] && (delete zt[n][i], this.override && delete Ft[i]);
        }
      }
      var Hn = new (class {
        constructor() {
          (this.controllers = new Rn(Ci, 'datasets', !0)),
            (this.elements = new Rn(Dn, 'elements')),
            (this.plugins = new Rn(Object, 'plugins')),
            (this.scales = new Rn(Fn, 'scales')),
            (this._typedRegistries = [this.controllers, this.scales, this.elements]);
        }
        add(...t) {
          this._each('register', t);
        }
        remove(...t) {
          this._each('unregister', t);
        }
        addControllers(...t) {
          this._each('register', t, this.controllers);
        }
        addElements(...t) {
          this._each('register', t, this.elements);
        }
        addPlugins(...t) {
          this._each('register', t, this.plugins);
        }
        addScales(...t) {
          this._each('register', t, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, 'controller');
        }
        getElement(t) {
          return this._get(t, this.elements, 'element');
        }
        getPlugin(t) {
          return this._get(t, this.plugins, 'plugin');
        }
        getScale(t) {
          return this._get(t, this.scales, 'scale');
        }
        removeControllers(...t) {
          this._each('unregister', t, this.controllers);
        }
        removeElements(...t) {
          this._each('unregister', t, this.elements);
        }
        removePlugins(...t) {
          this._each('unregister', t, this.plugins);
        }
        removeScales(...t) {
          this._each('unregister', t, this.scales);
        }
        _each(t, e, i) {
          [...e].forEach(e => {
            const n = i || this._getRegistryForType(e);
            i || n.isForType(e) || (n === this.plugins && e.id)
              ? this._exec(t, n, e)
              : v(e, e => {
                  const n = i || this._getRegistryForType(e);
                  this._exec(t, n, e);
                });
          });
        }
        _exec(t, e, i) {
          const n = D(t);
          m(i['before' + n], [], i), e[t](i), m(i['after' + n], [], i);
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const i = this._typedRegistries[e];
            if (i.isForType(t)) return i;
          }
          return this.plugins;
        }
        _get(t, e, i) {
          const n = e.get(t);
          if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + '.');
          return n;
        }
      })();
      class jn {
        constructor() {
          this._init = [];
        }
        notify(t, e, i, n) {
          'beforeInit' === e &&
            ((this._init = this._createDescriptors(t, !0)),
            this._notify(this._init, t, 'install'));
          const s = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            r = this._notify(s, t, e, i);
          return (
            'afterDestroy' === e &&
              (this._notify(s, t, 'stop'), this._notify(this._init, t, 'uninstall')),
            r
          );
        }
        _notify(t, e, i, n) {
          n = n || {};
          for (const s of t) {
            const t = s.plugin;
            if (!1 === m(t[i], [e, n, s.options], t) && n.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          c(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
          const i = t && t.config,
            n = f(i.options && i.options.plugins, {}),
            s = (function (t) {
              const e = [],
                i = Object.keys(Hn.plugins.items);
              for (let t = 0; t < i.length; t++) e.push(Hn.getPlugin(i[t]));
              const n = t.plugins || [];
              for (let t = 0; t < n.length; t++) {
                const i = n[t];
                -1 === e.indexOf(i) && e.push(i);
              }
              return e;
            })(i);
          return !1 !== n || e
            ? (function (t, e, i, n) {
                const s = [],
                  r = t.getContext();
                for (let a = 0; a < e.length; a++) {
                  const o = e[a],
                    l = zn(i[o.id], n);
                  null !== l && s.push({ plugin: o, options: Vn(t.config, o, l, r) });
                }
                return s;
              })(t, s, n, e)
            : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            i = this._cache,
            n = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
          this._notify(n(e, i), t, 'stop'), this._notify(n(i, e), t, 'start');
        }
      }
      function zn(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function Vn(t, e, i, n) {
        const s = t.pluginScopeKeys(e),
          r = t.getOptionScopes(i, s);
        return t.createResolver(r, n, [''], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        });
      }
      function Bn(t, e) {
        const i = zt.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || 'x'
        );
      }
      function Wn(t, e) {
        return 'x' === t || 'y' === t
          ? t
          : e.axis ||
              ('top' === (i = e.position) || 'bottom' === i
                ? 'x'
                : 'left' === i || 'right' === i
                ? 'y'
                : void 0) ||
              t.charAt(0).toLowerCase();
        var i;
      }
      function qn(t) {
        const e = t.options || (t.options = {});
        (e.plugins = f(e.plugins, {})),
          (e.scales = (function (t, e) {
            const i = Ft[t.type] || { scales: {} },
              n = e.scales || {},
              s = Bn(t.type, e),
              r = Object.create(null),
              a = Object.create(null);
            return (
              Object.keys(n).forEach(t => {
                const e = n[t];
                if (!d(e))
                  return console.error(`Invalid scale configuration for scale: ${t}`);
                if (e._proxy)
                  return console.warn(
                    `Ignoring resolver passed as options for scale: ${t}`,
                  );
                const o = Wn(t, e),
                  l = (function (t, e) {
                    return t === e ? '_index_' : '_value_';
                  })(o, s),
                  c = i.scales || {};
                (r[o] = r[o] || t),
                  (a[t] = k(Object.create(null), [{ axis: o }, e, c[o], c[l]]));
              }),
              t.data.datasets.forEach(i => {
                const s = i.type || t.type,
                  o = i.indexAxis || Bn(s, e),
                  l = (Ft[s] || {}).scales || {};
                Object.keys(l).forEach(t => {
                  const e = (function (t, e) {
                      let i = t;
                      return (
                        '_index_' === t
                          ? (i = e)
                          : '_value_' === t && (i = 'x' === e ? 'y' : 'x'),
                        i
                      );
                    })(t, o),
                    s = i[e + 'AxisID'] || r[e] || e;
                  (a[s] = a[s] || Object.create(null)),
                    k(a[s], [{ axis: e }, n[s], l[t]]);
                });
              }),
              Object.keys(a).forEach(t => {
                const e = a[t];
                k(e, [zt.scales[e.type], zt.scale]);
              }),
              a
            );
          })(t, e));
      }
      function Gn(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
        );
      }
      const Yn = new Map(),
        Un = new Set();
      function Xn(t, e) {
        let i = Yn.get(t);
        return i || ((i = e()), Yn.set(t, i), Un.add(i)), i;
      }
      const Kn = (t, e, i) => {
        const n = T(e, i);
        void 0 !== n && t.add(n);
      };
      class Jn {
        constructor(t) {
          (this._config = (function (t) {
            return ((t = t || {}).data = Gn(t.data)), qn(t), t;
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = Gn(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          this.clearCache(), qn(t);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
          return Xn(t, () => [[`datasets.${t}`, '']]);
        }
        datasetAnimationScopeKeys(t, e) {
          return Xn(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
            [`datasets.${t}`, ''],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return Xn(`${t}-${e}`, () => [
            [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id;
          return Xn(`${this.type}-plugin-${e}`, () => [
            [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const i = this._scopeCache;
          let n = i.get(t);
          return (n && !e) || ((n = new Map()), i.set(t, n)), n;
        }
        getOptionScopes(t, e, i) {
          const { options: n, type: s } = this,
            r = this._cachedScopes(t, i),
            a = r.get(e);
          if (a) return a;
          const o = new Set();
          e.forEach(e => {
            t && (o.add(t), e.forEach(e => Kn(o, t, e))),
              e.forEach(t => Kn(o, n, t)),
              e.forEach(t => Kn(o, Ft[s] || {}, t)),
              e.forEach(t => Kn(o, zt, t)),
              e.forEach(t => Kn(o, Rt, t));
          });
          const l = Array.from(o);
          return (
            0 === l.length && l.push(Object.create(null)), Un.has(e) && r.set(e, l), l
          );
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, Ft[e] || {}, zt.datasets[e] || {}, { type: e }, zt, Rt];
        }
        resolveNamedOptions(t, e, i, n = ['']) {
          const s = { $shared: !0 },
            { resolver: r, subPrefixes: a } = Zn(this._resolverCache, t, n);
          let o = r;
          (function (t, e) {
            const { isScriptable: i, isIndexable: n } = ye(t);
            for (const s of e) {
              const e = i(s),
                r = n(s),
                a = (r || e) && t[s];
              if ((e && (E(a) || Qn(a))) || (r && h(a))) return !0;
            }
            return !1;
          })(r, e) &&
            ((s.$shared = !1),
            (o = be(r, (i = E(i) ? i() : i), this.createResolver(t, i, a))));
          for (const t of e) s[t] = o[t];
          return s;
        }
        createResolver(t, e, i = [''], n) {
          const { resolver: s } = Zn(this._resolverCache, t, i);
          return d(e) ? be(s, e, void 0, n) : s;
        }
      }
      function Zn(t, e, i) {
        let n = t.get(e);
        n || ((n = new Map()), t.set(e, n));
        const s = i.join();
        let r = n.get(s);
        return (
          r ||
            ((r = {
              resolver: ve(e, i),
              subPrefixes: i.filter(t => !t.toLowerCase().includes('hover')),
            }),
            n.set(s, r)),
          r
        );
      }
      const Qn = t =>
          d(t) && Object.getOwnPropertyNames(t).reduce((e, i) => e || E(t[i]), !1),
        ts = ['top', 'bottom', 'left', 'right', 'chartArea'];
      function es(t, e) {
        return 'top' === t || 'bottom' === t || (-1 === ts.indexOf(t) && 'x' === e);
      }
      function is(t, e) {
        return function (i, n) {
          return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
        };
      }
      function ns(t) {
        const e = t.chart,
          i = e.options.animation;
        e.notifyPlugins('afterRender'), m(i && i.onComplete, [t], e);
      }
      function ss(t) {
        const e = t.chart,
          i = e.options.animation;
        m(i && i.onProgress, [t], e);
      }
      function rs(t) {
        return (
          $e() && 'string' == typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const as = {},
        os = t => {
          const e = rs(t);
          return Object.values(as)
            .filter(t => t.canvas === e)
            .pop();
        };
      function ls(t, e, i) {
        const n = Object.keys(t);
        for (const s of n) {
          const n = +s;
          if (n >= e) {
            const r = t[s];
            delete t[s], (i > 0 || n > e) && (t[n + i] = r);
          }
        }
      }
      class cs {
        constructor(t, e) {
          const i = (this.config = new Jn(e)),
            n = rs(t),
            s = os(n);
          if (s)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                s.id +
                "' must be destroyed before the canvas can be reused.",
            );
          const r = i.createResolver(i.chartOptionScopes(), this.getContext());
          (this.platform = new (i.platform ||
            (function (t) {
              return !$e() ||
                ('undefined' != typeof OffscreenCanvas && t instanceof OffscreenCanvas)
                ? un
                : Tn;
            })(n))()),
            this.platform.updateConfig(i);
          const a = this.platform.acquireContext(n, r.aspectRatio),
            o = a && a.canvas,
            c = o && o.height,
            h = o && o.width;
          (this.id = l()),
            (this.ctx = a),
            (this.canvas = o),
            (this.width = h),
            (this.height = c),
            (this._options = r),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new jn()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let i;
              return function (...n) {
                return (
                  e ? (clearTimeout(i), (i = setTimeout(t, e, n))) : t.apply(this, n), e
                );
              };
            })(t => this.update(t), r.resizeDelay || 0)),
            (this._dataChanges = []),
            (as[this.id] = this),
            a && o
              ? (oi.listen(this, 'complete', ns),
                oi.listen(this, 'progress', ss),
                this._initialize(),
                this.attached && this.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item",
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: i,
            height: n,
            _aspectRatio: s,
          } = this;
          return c(t) ? (e && s ? s : n ? i / n : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        _initialize() {
          return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive
              ? this.resize()
              : We(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
          );
        }
        clear() {
          return qt(this.canvas, this.ctx), this;
        }
        stop() {
          return oi.stop(this), this;
        }
        resize(t, e) {
          oi.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const i = this.options,
            n = this.canvas,
            s = i.maintainAspectRatio && this.aspectRatio,
            r = this.platform.getMaximumSize(n, t, e, s),
            a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            o = this.width ? 'resize' : 'attach';
          (this.width = r.width),
            (this.height = r.height),
            (this._aspectRatio = this.aspectRatio),
            We(this, a, !0) &&
              (this.notifyPlugins('resize', { size: r }),
              m(i.onResize, [this, r], this),
              this.attached && this._doResize(o) && this.render());
        }
        ensureScalesHaveIDs() {
          v(this.options.scales || {}, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            i = this.scales,
            n = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
          let s = [];
          e &&
            (s = s.concat(
              Object.keys(e).map(t => {
                const i = e[t],
                  n = Wn(t, i),
                  s = 'r' === n,
                  r = 'x' === n;
                return {
                  options: i,
                  dposition: s ? 'chartArea' : r ? 'bottom' : 'left',
                  dtype: s ? 'radialLinear' : r ? 'category' : 'linear',
                };
              }),
            )),
            v(s, e => {
              const s = e.options,
                r = s.id,
                a = Wn(r, s),
                o = f(s.type, e.dtype);
              (void 0 !== s.position && es(s.position, a) === es(e.dposition)) ||
                (s.position = e.dposition),
                (n[r] = !0);
              let l = null;
              r in i && i[r].type === o
                ? (l = i[r])
                : ((l = new (Hn.getScale(o))({
                    id: r,
                    type: o,
                    ctx: this.ctx,
                    chart: this,
                  })),
                  (i[l.id] = l)),
                l.init(s, t);
            }),
            v(n, (t, e) => {
              t || delete i[e];
            }),
            v(i, t => {
              hn.configure(this, t, t.options), hn.addBox(this, t);
            });
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            i = t.length;
          if ((t.sort((t, e) => t.index - e.index), i > e)) {
            for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
            t.splice(e, i - e);
          }
          this._sortedMetasets = t.slice(0).sort(is('order', 'index'));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this;
          t.length > e.length && delete this._stacks,
            t.forEach((t, i) => {
              0 === e.filter(e => e === t._dataset).length && this._destroyDatasetMeta(i);
            });
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let i, n;
          for (this._removeUnreferencedMetasets(), i = 0, n = e.length; i < n; i++) {
            const n = e[i];
            let s = this.getDatasetMeta(i);
            const r = n.type || this.config.type;
            if (
              (s.type &&
                s.type !== r &&
                (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
              (s.type = r),
              (s.indexAxis = n.indexAxis || Bn(r, this.options)),
              (s.order = n.order || 0),
              (s.index = i),
              (s.label = '' + n.label),
              (s.visible = this.isDatasetVisible(i)),
              s.controller)
            )
              s.controller.updateIndex(i), s.controller.linkScales();
            else {
              const e = Hn.getController(r),
                { datasetElementType: n, dataElementType: a } = zt.datasets[r];
              Object.assign(e.prototype, {
                dataElementType: Hn.getElement(a),
                datasetElementType: n && Hn.getElement(n),
              }),
                (s.controller = new e(this, i)),
                t.push(s.controller);
            }
          }
          return this._updateMetasets(), t;
        }
        _resetElements() {
          v(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset();
            },
            this,
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins('reset');
        }
        update(t) {
          const e = this.config;
          e.update();
          const i = (this._options = e.createResolver(
              e.chartOptionScopes(),
              this.getContext(),
            )),
            n = (this._animationsDisabled = !i.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 === this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
          )
            return;
          const s = this.buildOrUpdateControllers();
          this.notifyPlugins('beforeElementsUpdate');
          let r = 0;
          for (let t = 0, e = this.data.datasets.length; t < e; t++) {
            const { controller: e } = this.getDatasetMeta(t),
              i = !n && -1 === s.indexOf(e);
            e.buildOrUpdateElements(i), (r = Math.max(+e.getMaxOverflow(), r));
          }
          (r = this._minPadding = i.layout.autoPadding ? r : 0),
            this._updateLayout(r),
            n ||
              v(s, t => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins('afterUpdate', { mode: t }),
            this._layers.sort(is('z', '_idx'));
          const { _active: a, _lastEvent: o } = this;
          o ? this._eventHandler(o, !0) : a.length && this._updateHoverStyles(a, a, !0),
            this.render();
        }
        _updateScales() {
          v(this.scales, t => {
            hn.removeBox(this, t);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
          (P(e, i) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || [];
          for (const { method: i, start: n, count: s } of e)
            ls(t, n, '_removeElements' === i ? -s : s);
        }
        _getUniformDataChanges() {
          const t = this._dataChanges;
          if (!t || !t.length) return;
          this._dataChanges = [];
          const e = this.data.datasets.length,
            i = e =>
              new Set(
                t.filter(t => t[0] === e).map((t, e) => e + ',' + t.splice(1).join(',')),
              ),
            n = i(0);
          for (let t = 1; t < e; t++) if (!P(n, i(t))) return;
          return Array.from(n)
            .map(t => t.split(','))
            .map(t => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 })) return;
          hn.update(this, this.width, this.height, t);
          const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
          (this._layers = []),
            v(
              this.boxes,
              t => {
                (i && 'chartArea' === t.position) ||
                  (t.configure && t.configure(), this._layers.push(...t._layers()));
              },
              this,
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins('afterLayout');
        }
        _updateDatasets(t) {
          if (
            !1 !== this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })
          ) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let e = 0, i = this.data.datasets.length; e < i; ++e)
              this._updateDataset(e, E(t) ? t({ datasetIndex: e }) : t);
            this.notifyPlugins('afterDatasetsUpdate', { mode: t });
          }
        }
        _updateDataset(t, e) {
          const i = this.getDatasetMeta(t),
            n = { meta: i, index: t, mode: e, cancelable: !0 };
          !1 !== this.notifyPlugins('beforeDatasetUpdate', n) &&
            (i.controller._update(e),
            (n.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', n));
        }
        render() {
          !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
            (oi.has(this)
              ? this.attached && !oi.running(this) && oi.start(this)
              : (this.draw(), ns({ chart: this })));
        }
        draw() {
          let t;
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw;
            this._resize(t, e), (this._resizeBeforeDraw = null);
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
          if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return;
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
          this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            i = [];
          let n, s;
          for (n = 0, s = e.length; n < s; ++n) {
            const s = e[n];
            (t && !s.visible) || i.push(s);
          }
          return i;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })) return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
          this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(t) {
          const e = this.ctx,
            i = t._clip,
            n = !i.disabled,
            s = this.chartArea,
            r = { meta: t, index: t.index, cancelable: !0 };
          !1 !== this.notifyPlugins('beforeDatasetDraw', r) &&
            (n &&
              Ut(e, {
                left: !1 === i.left ? 0 : s.left - i.left,
                right: !1 === i.right ? this.width : s.right + i.right,
                top: !1 === i.top ? 0 : s.top - i.top,
                bottom: !1 === i.bottom ? this.height : s.bottom + i.bottom,
              }),
            t.controller.draw(),
            n && Xt(e),
            (r.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', r));
        }
        getElementsAtEventForMode(t, e, i, n) {
          const s = Ji.modes[e];
          return 'function' == typeof s ? s(this, t, i, n) : [];
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            i = this._metasets;
          let n = i.filter(t => t && t._dataset === e).pop();
          return (
            n ||
              ((n = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              i.push(n)),
            n
          );
        }
        getContext() {
          return (
            this.$context || (this.$context = he(null, { chart: this, type: 'chart' }))
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const i = this.getDatasetMeta(t);
          return 'boolean' == typeof i.hidden ? !i.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, i) {
          const n = i ? 'show' : 'hide',
            s = this.getDatasetMeta(t),
            r = s.controller._resolveAnimations(void 0, n);
          M(e)
            ? ((s.data[e].hidden = !i), this.update())
            : (this.setDatasetVisibility(t, i),
              r.update(s, { visible: i }),
              this.update(e => (e.datasetIndex === t ? n : void 0)));
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
        show(t, e) {
          this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t];
          e && e.controller && e.controller._destroy(), delete this._metasets[t];
        }
        _stop() {
          let t, e;
          for (
            this.stop(), oi.remove(this), t = 0, e = this.data.datasets.length;
            t < e;
            ++t
          )
            this._destroyDatasetMeta(t);
        }
        destroy() {
          this.notifyPlugins('beforeDestroy');
          const { canvas: t, ctx: e } = this;
          this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              qt(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            this.notifyPlugins('destroy'),
            delete as[this.id],
            this.notifyPlugins('afterDestroy');
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            i = (i, n) => {
              e.addEventListener(this, i, n), (t[i] = n);
            },
            n = (t, e, i) => {
              (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
            };
          v(this.options.events, t => i(t, n));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const t = this._responsiveListeners,
            e = this.platform,
            i = (i, n) => {
              e.addEventListener(this, i, n), (t[i] = n);
            },
            n = (i, n) => {
              t[i] && (e.removeEventListener(this, i, n), delete t[i]);
            },
            s = (t, e) => {
              this.canvas && this.resize(t, e);
            };
          let r;
          const a = () => {
            n('attach', a),
              (this.attached = !0),
              this.resize(),
              i('resize', s),
              i('detach', r);
          };
          (r = () => {
            (this.attached = !1),
              n('resize', s),
              this._stop(),
              this._resize(0, 0),
              i('attach', a);
          }),
            e.isAttached(this.canvas) ? a() : r();
        }
        unbindEvents() {
          v(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
            (this._listeners = {}),
            v(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
            (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, i) {
          const n = i ? 'set' : 'remove';
          let s, r, a, o;
          for (
            'dataset' === e &&
              ((s = this.getDatasetMeta(t[0].datasetIndex)),
              s.controller['_' + n + 'DatasetHoverStyle']()),
              a = 0,
              o = t.length;
            a < o;
            ++a
          ) {
            r = t[a];
            const e = r && this.getDatasetMeta(r.datasetIndex).controller;
            e && e[n + 'HoverStyle'](r.element, r.datasetIndex, r.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this._active || [],
            i = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.getDatasetMeta(t);
              if (!i) throw new Error('No dataset found at index ' + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            });
          !b(i, e) &&
            ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
        }
        notifyPlugins(t, e, i) {
          return this._plugins.notify(this, t, e, i);
        }
        _updateHoverStyles(t, e, i) {
          const n = this.options.hover,
            s = (t, e) =>
              t.filter(
                t =>
                  !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index),
              ),
            r = s(e, t),
            a = i ? t : s(t, e);
          r.length && this.updateHoverStyle(r, n.mode, !1),
            a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
        }
        _eventHandler(t, e) {
          const i = {
              event: t,
              replay: e,
              cancelable: !0,
              inChartArea: Yt(t, this.chartArea, this._minPadding),
            },
            n = e => (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins('beforeEvent', i, n)) return;
          const s = this._handleEvent(t, e, i.inChartArea);
          return (
            (i.cancelable = !1),
            this.notifyPlugins('afterEvent', i, n),
            (s || i.changed) && this.render(),
            this
          );
        }
        _handleEvent(t, e, i) {
          const { _active: n = [], options: s } = this,
            r = e,
            a = this._getActiveElements(t, n, i, r),
            o = (function (t) {
              return (
                'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type
              );
            })(t),
            l = (function (t, e, i, n) {
              return i && 'mouseout' !== t.type ? (n ? e : t) : null;
            })(t, this._lastEvent, i, o);
          i &&
            ((this._lastEvent = null),
            m(s.onHover, [t, a, this], this),
            o && m(s.onClick, [t, a, this], this));
          const c = !b(a, n);
          return (
            (c || e) && ((this._active = a), this._updateHoverStyles(a, n, e)),
            (this._lastEvent = l),
            c
          );
        }
        _getActiveElements(t, e, i, n) {
          if ('mouseout' === t.type) return [];
          if (!i) return e;
          const s = this.options.hover;
          return this.getElementsAtEventForMode(t, s.mode, s, n);
        }
      }
      const hs = () => v(cs.instances, t => t._plugins.invalidate()),
        ds = !0;
      function us(t, e, i) {
        const {
          startAngle: n,
          pixelMargin: s,
          x: r,
          y: a,
          outerRadius: o,
          innerRadius: l,
        } = e;
        let c = s / o;
        t.beginPath(),
          t.arc(r, a, o, n - c, i + c),
          l > s
            ? ((c = s / l), t.arc(r, a, l, i + c, n - c, !0))
            : t.arc(r, a, s, i + $, n - $),
          t.closePath(),
          t.clip();
      }
      function ps(t, e, i, n) {
        return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
      }
      function fs(t, e, i, n, s) {
        const { x: r, y: a, startAngle: o, pixelMargin: l, innerRadius: c } = e,
          h = Math.max(e.outerRadius + n + i - l, 0),
          d = c > 0 ? c + n + i + l : 0;
        let u = 0;
        const p = s - o;
        if (n) {
          const t = ((c > 0 ? c - n : 0) + (h > 0 ? h - n : 0)) / 2;
          u = (p - (0 !== t ? (p * t) / (t + n) : p)) / 2;
        }
        const f = (p - Math.max(0.001, p * h - i / A) / h) / 2,
          g = o + f + u,
          m = s - f - u,
          {
            outerStart: v,
            outerEnd: b,
            innerStart: y,
            innerEnd: x,
          } = (function (t, e, i, n) {
            const s = se(t.options.borderRadius, [
                'outerStart',
                'outerEnd',
                'innerStart',
                'innerEnd',
              ]),
              r = (i - e) / 2,
              a = Math.min(r, (n * e) / 2),
              o = t => {
                const e = ((i - Math.min(r, t)) * n) / 2;
                return Q(t, 0, Math.min(r, e));
              };
            return {
              outerStart: o(s.outerStart),
              outerEnd: o(s.outerEnd),
              innerStart: Q(s.innerStart, 0, a),
              innerEnd: Q(s.innerEnd, 0, a),
            };
          })(e, d, h, m - g),
          w = h - v,
          _ = h - b,
          k = g + v / w,
          C = m - b / _,
          S = d + y,
          T = d + x,
          D = g + y / S,
          M = m - x / T;
        if ((t.beginPath(), t.arc(r, a, h, k, C), b > 0)) {
          const e = ps(_, C, r, a);
          t.arc(e.x, e.y, b, C, m + $);
        }
        const E = ps(T, m, r, a);
        if ((t.lineTo(E.x, E.y), x > 0)) {
          const e = ps(T, M, r, a);
          t.arc(e.x, e.y, x, m + $, M + Math.PI);
        }
        if ((t.arc(r, a, d, m - x / d, g + y / d, !0), y > 0)) {
          const e = ps(S, D, r, a);
          t.arc(e.x, e.y, y, D + Math.PI, g - $);
        }
        const P = ps(w, g, r, a);
        if ((t.lineTo(P.x, P.y), v > 0)) {
          const e = ps(w, k, r, a);
          t.arc(e.x, e.y, v, g - $, k);
        }
        t.closePath();
      }
      Object.defineProperties(cs, {
        defaults: { enumerable: ds, value: zt },
        instances: { enumerable: ds, value: as },
        overrides: { enumerable: ds, value: Ft },
        registry: { enumerable: ds, value: Hn },
        version: { enumerable: ds, value: '3.7.0' },
        getChart: { enumerable: ds, value: os },
        register: {
          enumerable: ds,
          value: (...t) => {
            Hn.add(...t), hs();
          },
        },
        unregister: {
          enumerable: ds,
          value: (...t) => {
            Hn.remove(...t), hs();
          },
        },
      });
      class gs extends Dn {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          const n = this.getProps(['x', 'y'], i),
            { angle: s, distance: r } = U(n, { x: t, y: e }),
            {
              startAngle: a,
              endAngle: o,
              innerRadius: l,
              outerRadius: c,
              circumference: h,
            } = this.getProps(
              ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
              i,
            ),
            d = this.options.spacing / 2,
            u = f(h, o - a) >= L || Z(s, a, o),
            p = tt(r, l + d, c + d);
          return u && p;
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: i,
              startAngle: n,
              endAngle: s,
              innerRadius: r,
              outerRadius: a,
            } = this.getProps(
              [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference',
              ],
              t,
            ),
            { offset: o, spacing: l } = this.options,
            c = (n + s) / 2,
            h = (r + a + l + o) / 2;
          return { x: e + Math.cos(c) * h, y: i + Math.sin(c) * h };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(t) {
          const { options: e, circumference: i } = this,
            n = (e.offset || 0) / 2,
            s = (e.spacing || 0) / 2;
          if (
            ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
            (this.fullCircles = i > L ? Math.floor(i / L) : 0),
            0 === i || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          t.save();
          let r = 0;
          if (n) {
            r = n / 2;
            const e = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(e) * r, Math.sin(e) * r),
              this.circumference >= A && (r = n);
          }
          (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
          const a = (function (t, e, i, n) {
            const { fullCircles: s, startAngle: r, circumference: a } = e;
            let o = e.endAngle;
            if (s) {
              fs(t, e, i, n, r + L);
              for (let e = 0; e < s; ++e) t.fill();
              isNaN(a) || ((o = r + (a % L)), a % L == 0 && (o += L));
            }
            return fs(t, e, i, n, o), t.fill(), o;
          })(t, this, r, s);
          (function (t, e, i, n, s) {
            const { options: r } = e,
              { borderWidth: a, borderJoinStyle: o } = r,
              l = 'inner' === r.borderAlign;
            a &&
              (l
                ? ((t.lineWidth = 2 * a), (t.lineJoin = o || 'round'))
                : ((t.lineWidth = a), (t.lineJoin = o || 'bevel')),
              e.fullCircles &&
                (function (t, e, i) {
                  const { x: n, y: s, startAngle: r, pixelMargin: a, fullCircles: o } = e,
                    l = Math.max(e.outerRadius - a, 0),
                    c = e.innerRadius + a;
                  let h;
                  for (
                    i && us(t, e, r + L),
                      t.beginPath(),
                      t.arc(n, s, c, r + L, r, !0),
                      h = 0;
                    h < o;
                    ++h
                  )
                    t.stroke();
                  for (t.beginPath(), t.arc(n, s, l, r, r + L), h = 0; h < o; ++h)
                    t.stroke();
                })(t, e, l),
              l && us(t, e, s),
              fs(t, e, i, n, s),
              t.stroke());
          })(t, this, r, s, a),
            t.restore();
        }
      }
      function ms(t, e, i = e) {
        (t.lineCap = f(i.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(f(i.borderDash, e.borderDash)),
          (t.lineDashOffset = f(i.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = f(i.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = f(i.borderWidth, e.borderWidth)),
          (t.strokeStyle = f(i.borderColor, e.borderColor));
      }
      function vs(t, e, i) {
        t.lineTo(i.x, i.y);
      }
      function bs(t, e, i = {}) {
        const n = t.length,
          { start: s = 0, end: r = n - 1 } = i,
          { start: a, end: o } = e,
          l = Math.max(s, a),
          c = Math.min(r, o),
          h = (s < a && r < a) || (s > o && r > o);
        return {
          count: n,
          start: l,
          loop: e.loop,
          ilen: c < l && !h ? n + c - l : c - l,
        };
      }
      function ys(t, e, i, n) {
        const { points: s, options: r } = e,
          { count: a, start: o, loop: l, ilen: c } = bs(s, i, n),
          h = (function (t) {
            return t.stepped
              ? Kt
              : t.tension || 'monotone' === t.cubicInterpolationMode
              ? Jt
              : vs;
          })(r);
        let d,
          u,
          p,
          { move: f = !0, reverse: g } = n || {};
        for (d = 0; d <= c; ++d)
          (u = s[(o + (g ? c - d : d)) % a]),
            u.skip ||
              (f ? (t.moveTo(u.x, u.y), (f = !1)) : h(t, p, u, g, r.stepped), (p = u));
        return l && ((u = s[(o + (g ? c : 0)) % a]), h(t, p, u, g, r.stepped)), !!l;
      }
      function xs(t, e, i, n) {
        const s = e.points,
          { count: r, start: a, ilen: o } = bs(s, i, n),
          { move: l = !0, reverse: c } = n || {};
        let h,
          d,
          u,
          p,
          f,
          g,
          m = 0,
          v = 0;
        const b = t => (a + (c ? o - t : t)) % r,
          y = () => {
            p !== f && (t.lineTo(m, f), t.lineTo(m, p), t.lineTo(m, g));
          };
        for (l && ((d = s[b(0)]), t.moveTo(d.x, d.y)), h = 0; h <= o; ++h) {
          if (((d = s[b(h)]), d.skip)) continue;
          const e = d.x,
            i = d.y,
            n = 0 | e;
          n === u
            ? (i < p ? (p = i) : i > f && (f = i), (m = (v * m + e) / ++v))
            : (y(), t.lineTo(e, i), (u = n), (v = 0), (p = f = i)),
            (g = i);
        }
        y();
      }
      function ws(t) {
        const e = t.options,
          i = e.borderDash && e.borderDash.length;
        return t._decimated ||
          t._loop ||
          e.tension ||
          'monotone' === e.cubicInterpolationMode ||
          e.stepped ||
          i
          ? ys
          : xs;
      }
      (gs.id = 'arc'),
        (gs.defaults = {
          borderAlign: 'center',
          borderColor: '#fff',
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
        }),
        (gs.defaultRoutes = { backgroundColor: 'backgroundColor' });
      const _s = 'function' == typeof Path2D;
      class ks extends Dn {
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
          const i = this.options;
          if (
            (i.tension || 'monotone' === i.cubicInterpolationMode) &&
            !i.stepped &&
            !this._pointsUpdated
          ) {
            const n = i.spanGaps ? this._loop : this._fullLoop;
            Ie(this._points, i, t, n, e), (this._pointsUpdated = !0);
          }
        }
        set points(t) {
          (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const i = t.points,
                n = t.options.spanGaps,
                s = i.length;
              if (!s) return [];
              const r = !!t._loop,
                { start: a, end: o } = (function (t, e, i, n) {
                  let s = 0,
                    r = e - 1;
                  if (i && !n) for (; s < e && !t[s].skip; ) s++;
                  for (; s < e && t[s].skip; ) s++;
                  for (s %= e, i && (r += s); r > s && t[r % e].skip; ) r--;
                  return (r %= e), { start: s, end: r };
                })(i, s, r, n);
              return (function (t, e, i, n) {
                return n && n.setContext && i
                  ? (function (t, e, i, n) {
                      const s = t._chart.getContext(),
                        r = ri(t.options),
                        {
                          _datasetIndex: a,
                          options: { spanGaps: o },
                        } = t,
                        l = i.length,
                        c = [];
                      let h = r,
                        d = e[0].start,
                        u = d;
                      function p(t, e, n, s) {
                        const r = o ? -1 : 1;
                        if (t !== e) {
                          for (t += l; i[t % l].skip; ) t -= r;
                          for (; i[e % l].skip; ) e += r;
                          t % l != e % l &&
                            (c.push({ start: t % l, end: e % l, loop: n, style: s }),
                            (h = s),
                            (d = e % l));
                        }
                      }
                      for (const t of e) {
                        d = o ? d : t.start;
                        let e,
                          r = i[d % l];
                        for (u = d + 1; u <= t.end; u++) {
                          const o = i[u % l];
                          (e = ri(
                            n.setContext(
                              he(s, {
                                type: 'segment',
                                p0: r,
                                p1: o,
                                p0DataIndex: (u - 1) % l,
                                p1DataIndex: u % l,
                                datasetIndex: a,
                              }),
                            ),
                          )),
                            ai(e, h) && p(d, u - 1, t.loop, h),
                            (r = o),
                            (h = e);
                        }
                        d < u - 1 && p(d, u - 1, t.loop, h);
                      }
                      return c;
                    })(t, e, i, n)
                  : e;
              })(
                t,
                !0 === n
                  ? [{ start: a, end: o, loop: r }]
                  : (function (t, e, i, n) {
                      const s = t.length,
                        r = [];
                      let a,
                        o = e,
                        l = t[e];
                      for (a = e + 1; a <= i; ++a) {
                        const i = t[a % s];
                        i.skip || i.stop
                          ? l.skip ||
                            ((n = !1),
                            r.push({ start: e % s, end: (a - 1) % s, loop: n }),
                            (e = o = i.stop ? a : null))
                          : ((o = a), l.skip && (e = a)),
                          (l = i);
                      }
                      return (
                        null !== o && r.push({ start: e % s, end: o % s, loop: n }), r
                      );
                    })(i, a, o < a ? o + s : o, !!t._fullLoop && 0 === a && o === s - 1),
                i,
                e,
              );
            })(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end];
        }
        interpolate(t, e) {
          const i = this.options,
            n = t[e],
            s = this.points,
            r = si(this, { property: e, start: n, end: n });
          if (!r.length) return;
          const a = [],
            o = (function (t) {
              return t.stepped
                ? Ue
                : t.tension || 'monotone' === t.cubicInterpolationMode
                ? Xe
                : Ye;
            })(i);
          let l, c;
          for (l = 0, c = r.length; l < c; ++l) {
            const { start: c, end: h } = r[l],
              d = s[c],
              u = s[h];
            if (d === u) {
              a.push(d);
              continue;
            }
            const p = o(d, u, Math.abs((n - d[e]) / (u[e] - d[e])), i.stepped);
            (p[e] = t[e]), a.push(p);
          }
          return 1 === a.length ? a[0] : a;
        }
        pathSegment(t, e, i) {
          return ws(this)(t, this, e, i);
        }
        path(t, e, i) {
          const n = this.segments,
            s = ws(this);
          let r = this._loop;
          (e = e || 0), (i = i || this.points.length - e);
          for (const a of n) r &= s(t, this, a, { start: e, end: e + i - 1 });
          return !!r;
        }
        draw(t, e, i, n) {
          const s = this.options || {};
          (this.points || []).length &&
            s.borderWidth &&
            (t.save(),
            (function (t, e, i, n) {
              _s && !e.options.segment
                ? (function (t, e, i, n) {
                    let s = e._path;
                    s || ((s = e._path = new Path2D()), e.path(s, i, n) && s.closePath()),
                      ms(t, e.options),
                      t.stroke(s);
                  })(t, e, i, n)
                : (function (t, e, i, n) {
                    const { segments: s, options: r } = e,
                      a = ws(e);
                    for (const o of s)
                      ms(t, r, o.style),
                        t.beginPath(),
                        a(t, e, o, { start: i, end: i + n - 1 }) && t.closePath(),
                        t.stroke();
                  })(t, e, i, n);
            })(t, this, i, n),
            t.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
        }
      }
      function Cs(t, e, i, n) {
        const s = t.options,
          { [i]: r } = t.getProps([i], n);
        return Math.abs(e - r) < s.radius + s.hitRadius;
      }
      (ks.id = 'line'),
        (ks.defaults = {
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: 'miter',
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: 'default',
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (ks.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        }),
        (ks.descriptors = {
          _scriptable: !0,
          _indexable: t => 'borderDash' !== t && 'fill' !== t,
        });
      class Ss extends Dn {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          const n = this.options,
            { x: s, y: r } = this.getProps(['x', 'y'], i);
          return (
            Math.pow(t - s, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2)
          );
        }
        inXRange(t, e) {
          return Cs(this, t, 'x', e);
        }
        inYRange(t, e) {
          return Cs(this, t, 'y', e);
        }
        getCenterPoint(t) {
          const { x: e, y: i } = this.getProps(['x', 'y'], t);
          return { x: e, y: i };
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0;
          return (
            (e = Math.max(e, (e && t.hoverRadius) || 0)),
            2 * (e + ((e && t.borderWidth) || 0))
          );
        }
        draw(t, e) {
          const i = this.options;
          this.skip ||
            i.radius < 0.1 ||
            !Yt(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            Gt(t, i, this.x, this.y));
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius;
        }
      }
      function Ts(t, e) {
        const {
          x: i,
          y: n,
          base: s,
          width: r,
          height: a,
        } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
        let o, l, c, h, d;
        return (
          t.horizontal
            ? ((d = a / 2),
              (o = Math.min(i, s)),
              (l = Math.max(i, s)),
              (c = n - d),
              (h = n + d))
            : ((d = r / 2),
              (o = i - d),
              (l = i + d),
              (c = Math.min(n, s)),
              (h = Math.max(n, s))),
          { left: o, top: c, right: l, bottom: h }
        );
      }
      function Ds(t, e, i, n) {
        return t ? 0 : Q(e, i, n);
      }
      function Ms(t, e, i, n) {
        const s = null === e,
          r = null === i,
          a = t && !(s && r) && Ts(t, n);
        return a && (s || tt(e, a.left, a.right)) && (r || tt(i, a.top, a.bottom));
      }
      function Es(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function Ps(t, e, i = {}) {
        const n = t.x !== i.x ? -e : 0,
          s = t.y !== i.y ? -e : 0,
          r = (t.x + t.w !== i.x + i.w ? e : 0) - n,
          a = (t.y + t.h !== i.y + i.h ? e : 0) - s;
        return { x: t.x + n, y: t.y + s, w: t.w + r, h: t.h + a, radius: t.radius };
      }
      (Ss.id = 'point'),
        (Ss.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: 'circle',
          radius: 3,
          rotation: 0,
        }),
        (Ss.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        });
      class As extends Dn {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: i, backgroundColor: n },
            } = this,
            { inner: s, outer: r } = (function (t) {
              const e = Ts(t),
                i = e.right - e.left,
                n = e.bottom - e.top,
                s = (function (t, e, i) {
                  const n = t.options.borderWidth,
                    s = t.borderSkipped,
                    r = re(n);
                  return {
                    t: Ds(s.top, r.top, 0, i),
                    r: Ds(s.right, r.right, 0, e),
                    b: Ds(s.bottom, r.bottom, 0, i),
                    l: Ds(s.left, r.left, 0, e),
                  };
                })(t, i / 2, n / 2),
                r = (function (t, e, i) {
                  const { enableBorderRadius: n } = t.getProps(['enableBorderRadius']),
                    s = t.options.borderRadius,
                    r = ae(s),
                    a = Math.min(e, i),
                    o = t.borderSkipped,
                    l = n || d(s);
                  return {
                    topLeft: Ds(!l || o.top || o.left, r.topLeft, 0, a),
                    topRight: Ds(!l || o.top || o.right, r.topRight, 0, a),
                    bottomLeft: Ds(!l || o.bottom || o.left, r.bottomLeft, 0, a),
                    bottomRight: Ds(!l || o.bottom || o.right, r.bottomRight, 0, a),
                  };
                })(t, i / 2, n / 2);
              return {
                outer: { x: e.left, y: e.top, w: i, h: n, radius: r },
                inner: {
                  x: e.left + s.l,
                  y: e.top + s.t,
                  w: i - s.l - s.r,
                  h: n - s.t - s.b,
                  radius: {
                    topLeft: Math.max(0, r.topLeft - Math.max(s.t, s.l)),
                    topRight: Math.max(0, r.topRight - Math.max(s.t, s.r)),
                    bottomLeft: Math.max(0, r.bottomLeft - Math.max(s.b, s.l)),
                    bottomRight: Math.max(0, r.bottomRight - Math.max(s.b, s.r)),
                  },
                },
              };
            })(this),
            a =
              (o = r.radius).topLeft || o.topRight || o.bottomLeft || o.bottomRight
                ? te
                : Es;
          var o;
          t.save(),
            (r.w === s.w && r.h === s.h) ||
              (t.beginPath(),
              a(t, Ps(r, e, s)),
              t.clip(),
              a(t, Ps(s, -e, r)),
              (t.fillStyle = i),
              t.fill('evenodd')),
            t.beginPath(),
            a(t, Ps(s, e)),
            (t.fillStyle = n),
            t.fill(),
            t.restore();
        }
        inRange(t, e, i) {
          return Ms(this, t, e, i);
        }
        inXRange(t, e) {
          return Ms(this, t, null, e);
        }
        inYRange(t, e) {
          return Ms(this, null, t, e);
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: i,
            base: n,
            horizontal: s,
          } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
          return { x: s ? (e + n) / 2 : e, y: s ? i : (i + n) / 2 };
        }
        getRange(t) {
          return 'x' === t ? this.width / 2 : this.height / 2;
        }
      }
      (As.id = 'bar'),
        (As.defaults = {
          borderSkipped: 'start',
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: 'auto',
          pointStyle: void 0,
        }),
        (As.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        });
      var Ls = Object.freeze({
        __proto__: null,
        ArcElement: gs,
        LineElement: ks,
        PointElement: Ss,
        BarElement: As,
      });
      function Os(t) {
        if (t._decimated) {
          const e = t._data;
          delete t._decimated,
            delete t._data,
            Object.defineProperty(t, 'data', { value: e });
        }
      }
      function Ns(t) {
        t.data.datasets.forEach(t => {
          Os(t);
        });
      }
      var Is = {
        id: 'decimation',
        defaults: { algorithm: 'min-max', enabled: !1 },
        beforeElementsUpdate: (t, e, i) => {
          if (!i.enabled) return void Ns(t);
          const n = t.width;
          t.data.datasets.forEach((e, s) => {
            const { _data: r, indexAxis: a } = e,
              o = t.getDatasetMeta(s),
              l = r || e.data;
            if ('y' === ce([a, t.options.indexAxis])) return;
            if ('line' !== o.type) return;
            const h = t.scales[o.xAxisID];
            if ('linear' !== h.type && 'time' !== h.type) return;
            if (t.options.parsing) return;
            let d,
              { start: u, count: p } = (function (t, e) {
                const i = e.length;
                let n,
                  s = 0;
                const { iScale: r } = t,
                  { min: a, max: o, minDefined: l, maxDefined: c } = r.getUserBounds();
                return (
                  l && (s = Q(ue(e, r.axis, a).lo, 0, i - 1)),
                  (n = c ? Q(ue(e, r.axis, o).hi + 1, s, i) - s : i - s),
                  { start: s, count: n }
                );
              })(o, l);
            if (p <= (i.threshold || 4 * n)) Os(e);
            else {
              switch (
                (c(r) &&
                  ((e._data = l),
                  delete e.data,
                  Object.defineProperty(e, 'data', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this._decimated;
                    },
                    set: function (t) {
                      this._data = t;
                    },
                  })),
                i.algorithm)
              ) {
                case 'lttb':
                  d = (function (t, e, i, n, s) {
                    const r = s.samples || n;
                    if (r >= i) return t.slice(e, e + i);
                    const a = [],
                      o = (i - 2) / (r - 2);
                    let l = 0;
                    const c = e + i - 1;
                    let h,
                      d,
                      u,
                      p,
                      f,
                      g = e;
                    for (a[l++] = t[g], h = 0; h < r - 2; h++) {
                      let n,
                        s = 0,
                        r = 0;
                      const c = Math.floor((h + 1) * o) + 1 + e,
                        m = Math.min(Math.floor((h + 2) * o) + 1, i) + e,
                        v = m - c;
                      for (n = c; n < m; n++) (s += t[n].x), (r += t[n].y);
                      (s /= v), (r /= v);
                      const b = Math.floor(h * o) + 1 + e,
                        y = Math.min(Math.floor((h + 1) * o) + 1, i) + e,
                        { x: x, y: w } = t[g];
                      for (u = p = -1, n = b; n < y; n++)
                        (p =
                          0.5 *
                          Math.abs((x - s) * (t[n].y - w) - (x - t[n].x) * (r - w))),
                          p > u && ((u = p), (d = t[n]), (f = n));
                      (a[l++] = d), (g = f);
                    }
                    return (a[l++] = t[c]), a;
                  })(l, u, p, n, i);
                  break;
                case 'min-max':
                  d = (function (t, e, i, n) {
                    let s,
                      r,
                      a,
                      o,
                      l,
                      h,
                      d,
                      u,
                      p,
                      f,
                      g = 0,
                      m = 0;
                    const v = [],
                      b = e + i - 1,
                      y = t[e].x,
                      x = t[b].x - y;
                    for (s = e; s < e + i; ++s) {
                      (r = t[s]), (a = ((r.x - y) / x) * n), (o = r.y);
                      const e = 0 | a;
                      if (e === l)
                        o < p ? ((p = o), (h = s)) : o > f && ((f = o), (d = s)),
                          (g = (m * g + r.x) / ++m);
                      else {
                        const i = s - 1;
                        if (!c(h) && !c(d)) {
                          const e = Math.min(h, d),
                            n = Math.max(h, d);
                          e !== u && e !== i && v.push({ ...t[e], x: g }),
                            n !== u && n !== i && v.push({ ...t[n], x: g });
                        }
                        s > 0 && i !== u && v.push(t[i]),
                          v.push(r),
                          (l = e),
                          (m = 0),
                          (p = f = o),
                          (h = d = u = s);
                      }
                    }
                    return v;
                  })(l, u, p, n);
                  break;
                default:
                  throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
              }
              e._decimated = d;
            }
          });
        },
        destroy(t) {
          Ns(t);
        },
      };
      function $s(t, e, i) {
        const n = (function (t) {
          const e = t.options,
            i = e.fill;
          let n = f(i && i.target, i);
          return (
            void 0 === n && (n = !!e.backgroundColor),
            !1 !== n && null !== n && (!0 === n ? 'origin' : n)
          );
        })(t);
        if (d(n)) return !isNaN(n.value) && n;
        let s = parseFloat(n);
        return u(s) && Math.floor(s) === s
          ? (('-' !== n[0] && '+' !== n[0]) || (s = e + s),
            !(s === e || s < 0 || s >= i) && s)
          : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(n) >= 0 && n;
      }
      class Fs {
        constructor(t) {
          (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
        }
        pathSegment(t, e, i) {
          const { x: n, y: s, radius: r } = this;
          return (
            (e = e || { start: 0, end: L }), t.arc(n, s, r, e.end, e.start, !0), !i.bounds
          );
        }
        interpolate(t) {
          const { x: e, y: i, radius: n } = this,
            s = t.angle;
          return { x: e + Math.cos(s) * n, y: i + Math.sin(s) * n, angle: s };
        }
      }
      function Rs(t, e, i) {
        for (; e > t; e--) {
          const t = i[e];
          if (!isNaN(t.x) && !isNaN(t.y)) break;
        }
        return e;
      }
      function Hs(t, e, i) {
        const n = [];
        for (let s = 0; s < i.length; s++) {
          const r = i[s],
            { first: a, last: o, point: l } = js(r, e, 'x');
          if (!(!l || (a && o)))
            if (a) n.unshift(l);
            else if ((t.push(l), !o)) break;
        }
        t.push(...n);
      }
      function js(t, e, i) {
        const n = t.interpolate(e, i);
        if (!n) return {};
        const s = n[i],
          r = t.segments,
          a = t.points;
        let o = !1,
          l = !1;
        for (let t = 0; t < r.length; t++) {
          const e = r[t],
            n = a[e.start][i],
            c = a[e.end][i];
          if (tt(s, n, c)) {
            (o = s === n), (l = s === c);
            break;
          }
        }
        return { first: o, last: l, point: n };
      }
      function zs(t) {
        const { chart: e, fill: i, line: n } = t;
        if (u(i))
          return (function (t, e) {
            const i = t.getDatasetMeta(e);
            return i && t.isDatasetVisible(e) ? i.dataset : null;
          })(e, i);
        if ('stack' === i)
          return (function (t) {
            const { scale: e, index: i, line: n } = t,
              s = [],
              r = n.segments,
              a = n.points,
              o = (function (t, e) {
                const i = [],
                  n = t.getMatchingVisibleMetas('line');
                for (let t = 0; t < n.length; t++) {
                  const s = n[t];
                  if (s.index === e) break;
                  s.hidden || i.unshift(s.dataset);
                }
                return i;
              })(e, i);
            o.push(Vs({ x: null, y: e.bottom }, n));
            for (let t = 0; t < r.length; t++) {
              const e = r[t];
              for (let t = e.start; t <= e.end; t++) Hs(s, a[t], o);
            }
            return new ks({ points: s, options: {} });
          })(t);
        if ('shape' === i) return !0;
        const s = (function (t) {
          return (t.scale || {}).getPointPositionForValue
            ? (function (t) {
                const { scale: e, fill: i } = t,
                  n = e.options,
                  s = e.getLabels().length,
                  r = [],
                  a = n.reverse ? e.max : e.min,
                  o = n.reverse ? e.min : e.max;
                let l, c, h;
                if (
                  ((h =
                    'start' === i
                      ? a
                      : 'end' === i
                      ? o
                      : d(i)
                      ? i.value
                      : e.getBaseValue()),
                  n.grid.circular)
                )
                  return (
                    (c = e.getPointPositionForValue(0, a)),
                    new Fs({ x: c.x, y: c.y, radius: e.getDistanceFromCenterForValue(h) })
                  );
                for (l = 0; l < s; ++l) r.push(e.getPointPositionForValue(l, h));
                return r;
              })(t)
            : (function (t) {
                const { scale: e = {}, fill: i } = t;
                let n,
                  s = null;
                return (
                  'start' === i
                    ? (s = e.bottom)
                    : 'end' === i
                    ? (s = e.top)
                    : d(i)
                    ? (s = e.getPixelForValue(i.value))
                    : e.getBasePixel && (s = e.getBasePixel()),
                  u(s)
                    ? ((n = e.isHorizontal()), { x: n ? s : null, y: n ? null : s })
                    : null
                );
              })(t);
        })(t);
        return s instanceof Fs ? s : Vs(s, n);
      }
      function Vs(t, e) {
        let i = [],
          n = !1;
        return (
          h(t)
            ? ((n = !0), (i = t))
            : (i = (function (t, e) {
                const { x: i = null, y: n = null } = t || {},
                  s = e.points,
                  r = [];
                return (
                  e.segments.forEach(({ start: t, end: e }) => {
                    e = Rs(t, e, s);
                    const a = s[t],
                      o = s[e];
                    null !== n
                      ? (r.push({ x: a.x, y: n }), r.push({ x: o.x, y: n }))
                      : null !== i &&
                        (r.push({ x: i, y: a.y }), r.push({ x: i, y: o.y }));
                  }),
                  r
                );
              })(t, e)),
          i.length
            ? new ks({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n })
            : null
        );
      }
      function Bs(t, e, i) {
        let n = t[e].fill;
        const s = [e];
        let r;
        if (!i) return n;
        for (; !1 !== n && -1 === s.indexOf(n); ) {
          if (!u(n)) return n;
          if (((r = t[n]), !r)) return !1;
          if (r.visible) return n;
          s.push(n), (n = r.fill);
        }
        return !1;
      }
      function Ws(t, e, i) {
        t.beginPath(),
          e.path(t),
          t.lineTo(e.last().x, i),
          t.lineTo(e.first().x, i),
          t.closePath(),
          t.clip();
      }
      function qs(t, e, i, n) {
        if (n) return;
        let s = e[t],
          r = i[t];
        return (
          'angle' === t && ((s = J(s)), (r = J(r))), { property: t, start: s, end: r }
        );
      }
      function Gs(t, e, i, n) {
        return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
      }
      function Ys(t, e, i) {
        const { top: n, bottom: s } = e.chart.chartArea,
          { property: r, start: a, end: o } = i || {};
        'x' === r && (t.beginPath(), t.rect(a, n, o - a, s - n), t.clip());
      }
      function Us(t, e, i, n) {
        const s = e.interpolate(i, n);
        s && t.lineTo(s.x, s.y);
      }
      function Xs(t, e) {
        const { line: i, target: n, property: s, color: r, scale: a } = e,
          o = (function (t, e, i) {
            const n = t.segments,
              s = t.points,
              r = e.points,
              a = [];
            for (const t of n) {
              let { start: n, end: o } = t;
              o = Rs(n, o, s);
              const l = qs(i, s[n], s[o], t.loop);
              if (!e.segments) {
                a.push({ source: t, target: l, start: s[n], end: s[o] });
                continue;
              }
              const c = si(e, l);
              for (const e of c) {
                const n = qs(i, r[e.start], r[e.end], e.loop),
                  o = ni(t, s, n);
                for (const t of o)
                  a.push({
                    source: t,
                    target: e,
                    start: { [i]: Gs(l, n, 'start', Math.max) },
                    end: { [i]: Gs(l, n, 'end', Math.min) },
                  });
              }
            }
            return a;
          })(i, n, s);
        for (const { source: e, target: l, start: c, end: h } of o) {
          const { style: { backgroundColor: o = r } = {} } = e,
            d = !0 !== n;
          t.save(), (t.fillStyle = o), Ys(t, a, d && qs(s, c, h)), t.beginPath();
          const u = !!i.pathSegment(t, e);
          let p;
          if (d) {
            u ? t.closePath() : Us(t, n, h, s);
            const e = !!n.pathSegment(t, l, { move: u, reverse: !0 });
            (p = u && e), p || Us(t, n, c, s);
          }
          t.closePath(), t.fill(p ? 'evenodd' : 'nonzero'), t.restore();
        }
      }
      function Ks(t, e, i) {
        const n = zs(e),
          { line: s, scale: r, axis: a } = e,
          o = s.options,
          l = o.fill,
          c = o.backgroundColor,
          { above: h = c, below: d = c } = l || {};
        n &&
          s.points.length &&
          (Ut(t, i),
          (function (t, e) {
            const { line: i, target: n, above: s, below: r, area: a, scale: o } = e,
              l = i._loop ? 'angle' : e.axis;
            t.save(),
              'x' === l &&
                r !== s &&
                (Ws(t, n, a.top),
                Xs(t, { line: i, target: n, color: s, scale: o, property: l }),
                t.restore(),
                t.save(),
                Ws(t, n, a.bottom)),
              Xs(t, { line: i, target: n, color: r, scale: o, property: l }),
              t.restore();
          })(t, { line: s, target: n, above: h, below: d, area: i, scale: r, axis: a }),
          Xt(t));
      }
      var Js = {
        id: 'filler',
        afterDatasetsUpdate(t, e, i) {
          const n = (t.data.datasets || []).length,
            s = [];
          let r, a, o, l;
          for (a = 0; a < n; ++a)
            (r = t.getDatasetMeta(a)),
              (o = r.dataset),
              (l = null),
              o &&
                o.options &&
                o instanceof ks &&
                (l = {
                  visible: t.isDatasetVisible(a),
                  index: a,
                  fill: $s(o, a, n),
                  chart: t,
                  axis: r.controller.options.indexAxis,
                  scale: r.vScale,
                  line: o,
                }),
              (r.$filler = l),
              s.push(l);
          for (a = 0; a < n; ++a)
            (l = s[a]), l && !1 !== l.fill && (l.fill = Bs(s, a, i.propagate));
        },
        beforeDraw(t, e, i) {
          const n = 'beforeDraw' === i.drawTime,
            s = t.getSortedVisibleDatasetMetas(),
            r = t.chartArea;
          for (let e = s.length - 1; e >= 0; --e) {
            const i = s[e].$filler;
            i && (i.line.updateControlPoints(r, i.axis), n && Ks(t.ctx, i, r));
          }
        },
        beforeDatasetsDraw(t, e, i) {
          if ('beforeDatasetsDraw' !== i.drawTime) return;
          const n = t.getSortedVisibleDatasetMetas();
          for (let e = n.length - 1; e >= 0; --e) {
            const i = n[e].$filler;
            i && Ks(t.ctx, i, t.chartArea);
          }
        },
        beforeDatasetDraw(t, e, i) {
          const n = e.meta.$filler;
          n &&
            !1 !== n.fill &&
            'beforeDatasetDraw' === i.drawTime &&
            Ks(t.ctx, n, t.chartArea);
        },
        defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
      };
      const Zs = (t, e) => {
        let { boxHeight: i = e, boxWidth: n = e } = t;
        return (
          t.usePointStyle && ((i = Math.min(i, e)), (n = Math.min(n, e))),
          { boxWidth: n, boxHeight: i, itemHeight: Math.max(e, i) }
        );
      };
      class Qs extends Dn {
        constructor(t) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e, i) {
          (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = m(t.generateLabels, [this.chart], this) || [];
          t.filter && (e = e.filter(e => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e);
        }
        fit() {
          const { options: t, ctx: e } = this;
          if (!t.display) return void (this.width = this.height = 0);
          const i = t.labels,
            n = le(i.font),
            s = n.size,
            r = this._computeTitleHeight(),
            { boxWidth: a, itemHeight: o } = Zs(i, s);
          let l, c;
          (e.font = n.string),
            this.isHorizontal()
              ? ((l = this.maxWidth), (c = this._fitRows(r, s, a, o) + 10))
              : ((c = this.maxHeight), (l = this._fitCols(r, s, a, o) + 10)),
            (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(c, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, i, n) {
          const {
              ctx: s,
              maxWidth: r,
              options: {
                labels: { padding: a },
              },
            } = this,
            o = (this.legendHitBoxes = []),
            l = (this.lineWidths = [0]),
            c = n + a;
          let h = t;
          (s.textAlign = 'left'), (s.textBaseline = 'middle');
          let d = -1,
            u = -c;
          return (
            this.legendItems.forEach((t, p) => {
              const f = i + e / 2 + s.measureText(t.text).width;
              (0 === p || l[l.length - 1] + f + 2 * a > r) &&
                ((h += c), (l[l.length - (p > 0 ? 0 : 1)] = 0), (u += c), d++),
                (o[p] = { left: 0, top: u, row: d, width: f, height: n }),
                (l[l.length - 1] += f + a);
            }),
            h
          );
        }
        _fitCols(t, e, i, n) {
          const {
              ctx: s,
              maxHeight: r,
              options: {
                labels: { padding: a },
              },
            } = this,
            o = (this.legendHitBoxes = []),
            l = (this.columnSizes = []),
            c = r - t;
          let h = a,
            d = 0,
            u = 0,
            p = 0,
            f = 0;
          return (
            this.legendItems.forEach((t, r) => {
              const g = i + e / 2 + s.measureText(t.text).width;
              r > 0 &&
                u + n + 2 * a > c &&
                ((h += d + a),
                l.push({ width: d, height: u }),
                (p += d + a),
                f++,
                (d = u = 0)),
                (o[r] = { left: p, top: u, col: f, width: g, height: n }),
                (d = Math.max(d, g)),
                (u += n + a);
            }),
            (h += d),
            l.push({ width: d, height: u }),
            h
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: i,
                labels: { padding: n },
                rtl: s,
              },
            } = this,
            r = Ze(s, this.left, this.width);
          if (this.isHorizontal()) {
            let s = 0,
              o = a(i, this.left + n, this.right - this.lineWidths[s]);
            for (const l of e)
              s !== l.row &&
                ((s = l.row), (o = a(i, this.left + n, this.right - this.lineWidths[s]))),
                (l.top += this.top + t + n),
                (l.left = r.leftForLtr(r.x(o), l.width)),
                (o += l.width + n);
          } else {
            let s = 0,
              o = a(i, this.top + t + n, this.bottom - this.columnSizes[s].height);
            for (const l of e)
              l.col !== s &&
                ((s = l.col),
                (o = a(i, this.top + t + n, this.bottom - this.columnSizes[s].height))),
                (l.top = o),
                (l.left += this.left + n),
                (l.left = r.leftForLtr(r.x(l.left), l.width)),
                (o += l.height + n);
          }
        }
        isHorizontal() {
          return 'top' === this.options.position || 'bottom' === this.options.position;
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            Ut(t, this), this._draw(), Xt(t);
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
            { align: s, labels: r } = t,
            o = zt.color,
            l = Ze(t.rtl, this.left, this.width),
            c = le(r.font),
            { color: h, padding: d } = r,
            u = c.size,
            p = u / 2;
          let g;
          this.drawTitle(),
            (n.textAlign = l.textAlign('left')),
            (n.textBaseline = 'middle'),
            (n.lineWidth = 0.5),
            (n.font = c.string);
          const { boxWidth: m, boxHeight: v, itemHeight: b } = Zs(r, u),
            y = this.isHorizontal(),
            x = this._computeTitleHeight();
          (g = y
            ? { x: a(s, this.left + d, this.right - i[0]), y: this.top + d + x, line: 0 }
            : {
                x: this.left + d,
                y: a(s, this.top + x + d, this.bottom - e[0].height),
                line: 0,
              }),
            Qe(this.ctx, t.textDirection);
          const w = b + d;
          this.legendItems.forEach((_, k) => {
            (n.strokeStyle = _.fontColor || h), (n.fillStyle = _.fontColor || h);
            const C = n.measureText(_.text).width,
              S = l.textAlign(_.textAlign || (_.textAlign = r.textAlign)),
              T = m + p + C;
            let D = g.x,
              M = g.y;
            l.setWidth(this.width),
              y
                ? k > 0 &&
                  D + T + d > this.right &&
                  ((M = g.y += w),
                  g.line++,
                  (D = g.x = a(s, this.left + d, this.right - i[g.line])))
                : k > 0 &&
                  M + w > this.bottom &&
                  ((D = g.x = D + e[g.line].width + d),
                  g.line++,
                  (M = g.y = a(s, this.top + x + d, this.bottom - e[g.line].height))),
              (function (t, e, i) {
                if (isNaN(m) || m <= 0 || isNaN(v) || v < 0) return;
                n.save();
                const s = f(i.lineWidth, 1);
                if (
                  ((n.fillStyle = f(i.fillStyle, o)),
                  (n.lineCap = f(i.lineCap, 'butt')),
                  (n.lineDashOffset = f(i.lineDashOffset, 0)),
                  (n.lineJoin = f(i.lineJoin, 'miter')),
                  (n.lineWidth = s),
                  (n.strokeStyle = f(i.strokeStyle, o)),
                  n.setLineDash(f(i.lineDash, [])),
                  r.usePointStyle)
                ) {
                  const r = {
                      radius: (m * Math.SQRT2) / 2,
                      pointStyle: i.pointStyle,
                      rotation: i.rotation,
                      borderWidth: s,
                    },
                    a = l.xPlus(t, m / 2);
                  Gt(n, r, a, e + p);
                } else {
                  const r = e + Math.max((u - v) / 2, 0),
                    a = l.leftForLtr(t, m),
                    o = ae(i.borderRadius);
                  n.beginPath(),
                    Object.values(o).some(t => 0 !== t)
                      ? te(n, { x: a, y: r, w: m, h: v, radius: o })
                      : n.rect(a, r, m, v),
                    n.fill(),
                    0 !== s && n.stroke();
                }
                n.restore();
              })(l.x(D), M, _),
              (D = ((t, e, i, n) =>
                t === (n ? 'left' : 'right') ? i : 'center' === t ? (e + i) / 2 : e)(
                S,
                D + m + p,
                y ? D + T : this.right,
                t.rtl,
              )),
              (function (t, e, i) {
                Zt(n, i.text, t, e + b / 2, c, {
                  strikethrough: i.hidden,
                  textAlign: l.textAlign(i.textAlign),
                });
              })(l.x(D), M, _),
              y ? (g.x += T + d) : (g.y += w);
          }),
            ti(this.ctx, t.textDirection);
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            i = le(e.font),
            n = oe(e.padding);
          if (!e.display) return;
          const s = Ze(t.rtl, this.left, this.width),
            o = this.ctx,
            l = e.position,
            c = i.size / 2,
            h = n.top + c;
          let d,
            u = this.left,
            p = this.width;
          if (this.isHorizontal())
            (p = Math.max(...this.lineWidths)),
              (d = this.top + h),
              (u = a(t.align, u, this.right - p));
          else {
            const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
            d =
              h +
              a(
                t.align,
                this.top,
                this.bottom - e - t.labels.padding - this._computeTitleHeight(),
              );
          }
          const f = a(l, u, u + p);
          (o.textAlign = s.textAlign(r(l))),
            (o.textBaseline = 'middle'),
            (o.strokeStyle = e.color),
            (o.fillStyle = e.color),
            (o.font = i.string),
            Zt(o, e.text, f, d, i);
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = le(t.font),
            i = oe(t.padding);
          return t.display ? e.lineHeight + i.height : 0;
        }
        _getLegendItemAt(t, e) {
          let i, n, s;
          if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom))
            for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
              if (
                ((n = s[i]),
                tt(t, n.left, n.left + n.width) && tt(e, n.top, n.top + n.height))
              )
                return this.legendItems[i];
          return null;
        }
        handleEvent(t) {
          const e = this.options;
          if (
            !(function (t, e) {
              return (
                !('mousemove' !== t || (!e.onHover && !e.onLeave)) ||
                !(!e.onClick || ('click' !== t && 'mouseup' !== t))
              );
            })(t.type, e)
          )
            return;
          const i = this._getLegendItemAt(t.x, t.y);
          if ('mousemove' === t.type) {
            const r = this._hoveredItem,
              a =
                ((s = i),
                null !== (n = r) &&
                  null !== s &&
                  n.datasetIndex === s.datasetIndex &&
                  n.index === s.index);
            r && !a && m(e.onLeave, [t, r, this], this),
              (this._hoveredItem = i),
              i && !a && m(e.onHover, [t, i, this], this);
          } else i && m(e.onClick, [t, i, this], this);
          var n, s;
        }
      }
      var tr = {
        id: 'legend',
        _element: Qs,
        start(t, e, i) {
          const n = (t.legend = new Qs({ ctx: t.ctx, options: i, chart: t }));
          hn.configure(t, n, i), hn.addBox(t, n);
        },
        stop(t) {
          hn.removeBox(t, t.legend), delete t.legend;
        },
        beforeUpdate(t, e, i) {
          const n = t.legend;
          hn.configure(t, n, i), (n.options = i);
        },
        afterUpdate(t) {
          const e = t.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: 'top',
          align: 'center',
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, i) {
            const n = e.datasetIndex,
              s = i.chart;
            s.isDatasetVisible(n)
              ? (s.hide(n), (e.hidden = !0))
              : (s.show(n), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: t => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: { usePointStyle: i, pointStyle: n, textAlign: s, color: r },
                } = t.legend.options;
              return t._getSortedDatasetMetas().map(t => {
                const a = t.controller.getStyle(i ? 0 : void 0),
                  o = oe(a.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: a.backgroundColor,
                  fontColor: r,
                  hidden: !t.visible,
                  lineCap: a.borderCapStyle,
                  lineDash: a.borderDash,
                  lineDashOffset: a.borderDashOffset,
                  lineJoin: a.borderJoinStyle,
                  lineWidth: (o.width + o.height) / 4,
                  strokeStyle: a.borderColor,
                  pointStyle: n || a.pointStyle,
                  rotation: a.rotation,
                  textAlign: s || a.textAlign,
                  borderRadius: 0,
                  datasetIndex: t.index,
                };
              }, this);
            },
          },
          title: {
            color: t => t.chart.options.color,
            display: !1,
            position: 'center',
            text: '',
          },
        },
        descriptors: {
          _scriptable: t => !t.startsWith('on'),
          labels: { _scriptable: t => !['generateLabels', 'filter', 'sort'].includes(t) },
        },
      };
      class er extends Dn {
        constructor(t) {
          super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e) {
          const i = this.options;
          if (((this.left = 0), (this.top = 0), !i.display))
            return void (this.width = this.height = this.right = this.bottom = 0);
          (this.width = this.right = t), (this.height = this.bottom = e);
          const n = h(i.text) ? i.text.length : 1;
          this._padding = oe(i.padding);
          const s = n * le(i.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = s) : (this.width = s);
        }
        isHorizontal() {
          const t = this.options.position;
          return 'top' === t || 'bottom' === t;
        }
        _drawArgs(t) {
          const { top: e, left: i, bottom: n, right: s, options: r } = this,
            o = r.align;
          let l,
            c,
            h,
            d = 0;
          return (
            this.isHorizontal()
              ? ((c = a(o, i, s)), (h = e + t), (l = s - i))
              : ('left' === r.position
                  ? ((c = i + t), (h = a(o, n, e)), (d = -0.5 * A))
                  : ((c = s - t), (h = a(o, e, n)), (d = 0.5 * A)),
                (l = n - e)),
            { titleX: c, titleY: h, maxWidth: l, rotation: d }
          );
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const i = le(e.font),
            n = i.lineHeight / 2 + this._padding.top,
            { titleX: s, titleY: a, maxWidth: o, rotation: l } = this._drawArgs(n);
          Zt(t, e.text, 0, 0, i, {
            color: e.color,
            maxWidth: o,
            rotation: l,
            textAlign: r(e.align),
            textBaseline: 'middle',
            translation: [s, a],
          });
        }
      }
      var ir = {
        id: 'title',
        _element: er,
        start(t, e, i) {
          !(function (t, e) {
            const i = new er({ ctx: t.ctx, options: e, chart: t });
            hn.configure(t, i, e), hn.addBox(t, i), (t.titleBlock = i);
          })(t, i);
        },
        stop(t) {
          const e = t.titleBlock;
          hn.removeBox(t, e), delete t.titleBlock;
        },
        beforeUpdate(t, e, i) {
          const n = t.titleBlock;
          hn.configure(t, n, i), (n.options = i);
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'bold' },
          fullSize: !0,
          padding: 10,
          position: 'top',
          text: '',
          weight: 2e3,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const nr = new WeakMap();
      var sr = {
        id: 'subtitle',
        start(t, e, i) {
          const n = new er({ ctx: t.ctx, options: i, chart: t });
          hn.configure(t, n, i), hn.addBox(t, n), nr.set(t, n);
        },
        stop(t) {
          hn.removeBox(t, nr.get(t)), nr.delete(t);
        },
        beforeUpdate(t, e, i) {
          const n = nr.get(t);
          hn.configure(t, n, i), (n.options = i);
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'normal' },
          fullSize: !0,
          padding: 0,
          position: 'top',
          text: '',
          weight: 1500,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const rr = {
        average(t) {
          if (!t.length) return !1;
          let e,
            i,
            n = 0,
            s = 0,
            r = 0;
          for (e = 0, i = t.length; e < i; ++e) {
            const i = t[e].element;
            if (i && i.hasValue()) {
              const t = i.tooltipPosition();
              (n += t.x), (s += t.y), ++r;
            }
          }
          return { x: n / r, y: s / r };
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let i,
            n,
            s,
            r = e.x,
            a = e.y,
            o = Number.POSITIVE_INFINITY;
          for (i = 0, n = t.length; i < n; ++i) {
            const n = t[i].element;
            if (n && n.hasValue()) {
              const t = X(e, n.getCenterPoint());
              t < o && ((o = t), (s = n));
            }
          }
          if (s) {
            const t = s.tooltipPosition();
            (r = t.x), (a = t.y);
          }
          return { x: r, y: a };
        },
      };
      function ar(t, e) {
        return e && (h(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function or(t) {
        return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1
          ? t.split('\n')
          : t;
      }
      function lr(t, e) {
        const { element: i, datasetIndex: n, index: s } = e,
          r = t.getDatasetMeta(n).controller,
          { label: a, value: o } = r.getLabelAndValue(s);
        return {
          chart: t,
          label: a,
          parsed: r.getParsed(s),
          raw: t.data.datasets[n].data[s],
          formattedValue: o,
          dataset: r.getDataset(),
          dataIndex: s,
          datasetIndex: n,
          element: i,
        };
      }
      function cr(t, e) {
        const i = t.chart.ctx,
          { body: n, footer: s, title: r } = t,
          { boxWidth: a, boxHeight: o } = e,
          l = le(e.bodyFont),
          c = le(e.titleFont),
          h = le(e.footerFont),
          d = r.length,
          u = s.length,
          p = n.length,
          f = oe(e.padding);
        let g = f.height,
          m = 0,
          b = n.reduce(
            (t, e) => t + e.before.length + e.lines.length + e.after.length,
            0,
          );
        (b += t.beforeBody.length + t.afterBody.length),
          d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
          b &&
            (g +=
              p * (e.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight) +
              (b - p) * l.lineHeight +
              (b - 1) * e.bodySpacing),
          u && (g += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
        let y = 0;
        const x = function (t) {
          m = Math.max(m, i.measureText(t).width + y);
        };
        return (
          i.save(),
          (i.font = c.string),
          v(t.title, x),
          (i.font = l.string),
          v(t.beforeBody.concat(t.afterBody), x),
          (y = e.displayColors ? a + 2 + e.boxPadding : 0),
          v(n, t => {
            v(t.before, x), v(t.lines, x), v(t.after, x);
          }),
          (y = 0),
          (i.font = h.string),
          v(t.footer, x),
          i.restore(),
          (m += f.width),
          { width: m, height: g }
        );
      }
      function hr(t, e, i, n) {
        const { x: s, width: r } = i,
          {
            width: a,
            chartArea: { left: o, right: l },
          } = t;
        let c = 'center';
        return (
          'center' === n
            ? (c = s <= (o + l) / 2 ? 'left' : 'right')
            : s <= r / 2
            ? (c = 'left')
            : s >= a - r / 2 && (c = 'right'),
          (function (t, e, i, n) {
            const { x: s, width: r } = n,
              a = i.caretSize + i.caretPadding;
            return (
              ('left' === t && s + r + a > e.width) ||
              ('right' === t && s - r - a < 0) ||
              void 0
            );
          })(c, t, e, i) && (c = 'center'),
          c
        );
      }
      function dr(t, e, i) {
        const n =
          i.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: i, height: n } = e;
            return i < n / 2 ? 'top' : i > t.height - n / 2 ? 'bottom' : 'center';
          })(t, i);
        return { xAlign: i.xAlign || e.xAlign || hr(t, e, i, n), yAlign: n };
      }
      function ur(t, e, i, n) {
        const { caretSize: s, caretPadding: r, cornerRadius: a } = t,
          { xAlign: o, yAlign: l } = i,
          c = s + r,
          { topLeft: h, topRight: d, bottomLeft: u, bottomRight: p } = ae(a);
        let f = (function (t, e) {
          let { x: i, width: n } = t;
          return 'right' === e ? (i -= n) : 'center' === e && (i -= n / 2), i;
        })(e, o);
        const g = (function (t, e, i) {
          let { y: n, height: s } = t;
          return 'top' === e ? (n += i) : (n -= 'bottom' === e ? s + i : s / 2), n;
        })(e, l, c);
        return (
          'center' === l
            ? 'left' === o
              ? (f += c)
              : 'right' === o && (f -= c)
            : 'left' === o
            ? (f -= Math.max(h, u) + s)
            : 'right' === o && (f += Math.max(d, p) + s),
          { x: Q(f, 0, n.width - e.width), y: Q(g, 0, n.height - e.height) }
        );
      }
      function pr(t, e, i) {
        const n = oe(i.padding);
        return 'center' === e
          ? t.x + t.width / 2
          : 'right' === e
          ? t.x + t.width - n.right
          : t.x + n.left;
      }
      function fr(t) {
        return ar([], or(t));
      }
      function gr(t, e) {
        const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t;
      }
      class mr extends Dn {
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart || t._chart),
            (this._chart = this.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
        }
        initialize(t) {
          (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
        }
        _resolveAnimations() {
          const t = this._cachedAnimations;
          if (t) return t;
          const e = this.chart,
            i = this.options.setContext(this.getContext()),
            n = i.enabled && e.options.animation && i.animations,
            s = new ui(this.chart, n);
          return n._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              (this,
              he(this.chart.getContext(), {
                tooltip: this,
                tooltipItems: this._tooltipItems,
                type: 'tooltip',
              })))
          );
        }
        getTitle(t, e) {
          const { callbacks: i } = e,
            n = i.beforeTitle.apply(this, [t]),
            s = i.title.apply(this, [t]),
            r = i.afterTitle.apply(this, [t]);
          let a = [];
          return (a = ar(a, or(n))), (a = ar(a, or(s))), (a = ar(a, or(r))), a;
        }
        getBeforeBody(t, e) {
          return fr(e.callbacks.beforeBody.apply(this, [t]));
        }
        getBody(t, e) {
          const { callbacks: i } = e,
            n = [];
          return (
            v(t, t => {
              const e = { before: [], lines: [], after: [] },
                s = gr(i, t);
              ar(e.before, or(s.beforeLabel.call(this, t))),
                ar(e.lines, s.label.call(this, t)),
                ar(e.after, or(s.afterLabel.call(this, t))),
                n.push(e);
            }),
            n
          );
        }
        getAfterBody(t, e) {
          return fr(e.callbacks.afterBody.apply(this, [t]));
        }
        getFooter(t, e) {
          const { callbacks: i } = e,
            n = i.beforeFooter.apply(this, [t]),
            s = i.footer.apply(this, [t]),
            r = i.afterFooter.apply(this, [t]);
          let a = [];
          return (a = ar(a, or(n))), (a = ar(a, or(s))), (a = ar(a, or(r))), a;
        }
        _createItems(t) {
          const e = this._active,
            i = this.chart.data,
            n = [],
            s = [],
            r = [];
          let a,
            o,
            l = [];
          for (a = 0, o = e.length; a < o; ++a) l.push(lr(this.chart, e[a]));
          return (
            t.filter && (l = l.filter((e, n, s) => t.filter(e, n, s, i))),
            t.itemSort && (l = l.sort((e, n) => t.itemSort(e, n, i))),
            v(l, e => {
              const i = gr(t.callbacks, e);
              n.push(i.labelColor.call(this, e)),
                s.push(i.labelPointStyle.call(this, e)),
                r.push(i.labelTextColor.call(this, e));
            }),
            (this.labelColors = n),
            (this.labelPointStyles = s),
            (this.labelTextColors = r),
            (this.dataPoints = l),
            l
          );
        }
        update(t, e) {
          const i = this.options.setContext(this.getContext()),
            n = this._active;
          let s,
            r = [];
          if (n.length) {
            const t = rr[i.position].call(this, n, this._eventPosition);
            (r = this._createItems(i)),
              (this.title = this.getTitle(r, i)),
              (this.beforeBody = this.getBeforeBody(r, i)),
              (this.body = this.getBody(r, i)),
              (this.afterBody = this.getAfterBody(r, i)),
              (this.footer = this.getFooter(r, i));
            const e = (this._size = cr(this, i)),
              a = Object.assign({}, t, e),
              o = dr(this.chart, i, a),
              l = ur(i, a, o, this.chart);
            (this.xAlign = o.xAlign),
              (this.yAlign = o.yAlign),
              (s = {
                opacity: 1,
                x: l.x,
                y: l.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              });
          } else 0 !== this.opacity && (s = { opacity: 0 });
          (this._tooltipItems = r),
            (this.$context = void 0),
            s && this._resolveAnimations().update(this, s),
            t &&
              i.external &&
              i.external.call(this, { chart: this.chart, tooltip: this, replay: e });
        }
        drawCaret(t, e, i, n) {
          const s = this.getCaretPosition(t, i, n);
          e.lineTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineTo(s.x3, s.y3);
        }
        getCaretPosition(t, e, i) {
          const { xAlign: n, yAlign: s } = this,
            { caretSize: r, cornerRadius: a } = i,
            { topLeft: o, topRight: l, bottomLeft: c, bottomRight: h } = ae(a),
            { x: d, y: u } = t,
            { width: p, height: f } = e;
          let g, m, v, b, y, x;
          return (
            'center' === s
              ? ((y = u + f / 2),
                'left' === n
                  ? ((g = d), (m = g - r), (b = y + r), (x = y - r))
                  : ((g = d + p), (m = g + r), (b = y - r), (x = y + r)),
                (v = g))
              : ((m =
                  'left' === n
                    ? d + Math.max(o, c) + r
                    : 'right' === n
                    ? d + p - Math.max(l, h) - r
                    : this.caretX),
                'top' === s
                  ? ((b = u), (y = b - r), (g = m - r), (v = m + r))
                  : ((b = u + f), (y = b + r), (g = m + r), (v = m - r)),
                (x = b)),
            { x1: g, x2: m, x3: v, y1: b, y2: y, y3: x }
          );
        }
        drawTitle(t, e, i) {
          const n = this.title,
            s = n.length;
          let r, a, o;
          if (s) {
            const l = Ze(i.rtl, this.x, this.width);
            for (
              t.x = pr(this, i.titleAlign, i),
                e.textAlign = l.textAlign(i.titleAlign),
                e.textBaseline = 'middle',
                r = le(i.titleFont),
                a = i.titleSpacing,
                e.fillStyle = i.titleColor,
                e.font = r.string,
                o = 0;
              o < s;
              ++o
            )
              e.fillText(n[o], l.x(t.x), t.y + r.lineHeight / 2),
                (t.y += r.lineHeight + a),
                o + 1 === s && (t.y += i.titleMarginBottom - a);
          }
        }
        _drawColorBox(t, e, i, n, s) {
          const r = this.labelColors[i],
            a = this.labelPointStyles[i],
            { boxHeight: o, boxWidth: l, boxPadding: c } = s,
            h = le(s.bodyFont),
            d = pr(this, 'left', s),
            u = n.x(d),
            p = o < h.lineHeight ? (h.lineHeight - o) / 2 : 0,
            f = e.y + p;
          if (s.usePointStyle) {
            const e = {
                radius: Math.min(l, o) / 2,
                pointStyle: a.pointStyle,
                rotation: a.rotation,
                borderWidth: 1,
              },
              i = n.leftForLtr(u, l) + l / 2,
              c = f + o / 2;
            (t.strokeStyle = s.multiKeyBackground),
              (t.fillStyle = s.multiKeyBackground),
              Gt(t, e, i, c),
              (t.strokeStyle = r.borderColor),
              (t.fillStyle = r.backgroundColor),
              Gt(t, e, i, c);
          } else {
            (t.lineWidth = r.borderWidth || 1),
              (t.strokeStyle = r.borderColor),
              t.setLineDash(r.borderDash || []),
              (t.lineDashOffset = r.borderDashOffset || 0);
            const e = n.leftForLtr(u, l - c),
              i = n.leftForLtr(n.xPlus(u, 1), l - c - 2),
              a = ae(r.borderRadius);
            Object.values(a).some(t => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = s.multiKeyBackground),
                te(t, { x: e, y: f, w: l, h: o, radius: a }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = r.backgroundColor),
                t.beginPath(),
                te(t, { x: i, y: f + 1, w: l - 2, h: o - 2, radius: a }),
                t.fill())
              : ((t.fillStyle = s.multiKeyBackground),
                t.fillRect(e, f, l, o),
                t.strokeRect(e, f, l, o),
                (t.fillStyle = r.backgroundColor),
                t.fillRect(i, f + 1, l - 2, o - 2));
          }
          t.fillStyle = this.labelTextColors[i];
        }
        drawBody(t, e, i) {
          const { body: n } = this,
            {
              bodySpacing: s,
              bodyAlign: r,
              displayColors: a,
              boxHeight: o,
              boxWidth: l,
              boxPadding: c,
            } = i,
            h = le(i.bodyFont);
          let d = h.lineHeight,
            u = 0;
          const p = Ze(i.rtl, this.x, this.width),
            f = function (i) {
              e.fillText(i, p.x(t.x + u), t.y + d / 2), (t.y += d + s);
            },
            g = p.textAlign(r);
          let m, b, y, x, w, _, k;
          for (
            e.textAlign = r,
              e.textBaseline = 'middle',
              e.font = h.string,
              t.x = pr(this, g, i),
              e.fillStyle = i.bodyColor,
              v(this.beforeBody, f),
              u = a && 'right' !== g ? ('center' === r ? l / 2 + c : l + 2 + c) : 0,
              x = 0,
              _ = n.length;
            x < _;
            ++x
          ) {
            for (
              m = n[x],
                b = this.labelTextColors[x],
                e.fillStyle = b,
                v(m.before, f),
                y = m.lines,
                a &&
                  y.length &&
                  (this._drawColorBox(e, t, x, p, i), (d = Math.max(h.lineHeight, o))),
                w = 0,
                k = y.length;
              w < k;
              ++w
            )
              f(y[w]), (d = h.lineHeight);
            v(m.after, f);
          }
          (u = 0), (d = h.lineHeight), v(this.afterBody, f), (t.y -= s);
        }
        drawFooter(t, e, i) {
          const n = this.footer,
            s = n.length;
          let r, a;
          if (s) {
            const o = Ze(i.rtl, this.x, this.width);
            for (
              t.x = pr(this, i.footerAlign, i),
                t.y += i.footerMarginTop,
                e.textAlign = o.textAlign(i.footerAlign),
                e.textBaseline = 'middle',
                r = le(i.footerFont),
                e.fillStyle = i.footerColor,
                e.font = r.string,
                a = 0;
              a < s;
              ++a
            )
              e.fillText(n[a], o.x(t.x), t.y + r.lineHeight / 2),
                (t.y += r.lineHeight + i.footerSpacing);
          }
        }
        drawBackground(t, e, i, n) {
          const { xAlign: s, yAlign: r } = this,
            { x: a, y: o } = t,
            { width: l, height: c } = i,
            {
              topLeft: h,
              topRight: d,
              bottomLeft: u,
              bottomRight: p,
            } = ae(n.cornerRadius);
          (e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(a + h, o),
            'top' === r && this.drawCaret(t, e, i, n),
            e.lineTo(a + l - d, o),
            e.quadraticCurveTo(a + l, o, a + l, o + d),
            'center' === r && 'right' === s && this.drawCaret(t, e, i, n),
            e.lineTo(a + l, o + c - p),
            e.quadraticCurveTo(a + l, o + c, a + l - p, o + c),
            'bottom' === r && this.drawCaret(t, e, i, n),
            e.lineTo(a + u, o + c),
            e.quadraticCurveTo(a, o + c, a, o + c - u),
            'center' === r && 'left' === s && this.drawCaret(t, e, i, n),
            e.lineTo(a, o + h),
            e.quadraticCurveTo(a, o, a + h, o),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            i = this.$animations,
            n = i && i.x,
            s = i && i.y;
          if (n || s) {
            const i = rr[t.position].call(this, this._active, this._eventPosition);
            if (!i) return;
            const r = (this._size = cr(this, t)),
              a = Object.assign({}, i, this._size),
              o = dr(e, t, a),
              l = ur(t, a, o, e);
            (n._to === l.x && s._to === l.y) ||
              ((this.xAlign = o.xAlign),
              (this.yAlign = o.yAlign),
              (this.width = r.width),
              (this.height = r.height),
              (this.caretX = i.x),
              (this.caretY = i.y),
              this._resolveAnimations().update(this, l));
          }
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let i = this.opacity;
          if (!i) return;
          this._updateAnimationTarget(e);
          const n = { width: this.width, height: this.height },
            s = { x: this.x, y: this.y };
          i = Math.abs(i) < 0.001 ? 0 : i;
          const r = oe(e.padding),
            a =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(s, t, n, e),
            Qe(t, e.textDirection),
            (s.y += r.top),
            this.drawTitle(s, t, e),
            this.drawBody(s, t, e),
            this.drawFooter(s, t, e),
            ti(t, e.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const i = this._active,
            n = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.chart.getDatasetMeta(t);
              if (!i) throw new Error('Cannot find a dataset at index ' + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            }),
            s = !b(i, n),
            r = this._positionChanged(n, e);
          (s || r) &&
            ((this._active = n),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
        }
        handleEvent(t, e, i = !0) {
          if (e && this._ignoreReplayEvents) return !1;
          this._ignoreReplayEvents = !1;
          const n = this.options,
            s = this._active || [],
            r = this._getActiveElements(t, s, e, i),
            a = this._positionChanged(r, t),
            o = e || !b(r, s) || a;
          return (
            o &&
              ((this._active = r),
              (n.enabled || n.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
            o
          );
        }
        _getActiveElements(t, e, i, n) {
          const s = this.options;
          if ('mouseout' === t.type) return [];
          if (!n) return e;
          const r = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
          return s.reverse && r.reverse(), r;
        }
        _positionChanged(t, e) {
          const { caretX: i, caretY: n, options: s } = this,
            r = rr[s.position].call(this, t, e);
          return !1 !== r && (i !== r.x || n !== r.y);
        }
      }
      mr.positioners = rr;
      var vr = {
          id: 'tooltip',
          _element: mr,
          positioners: rr,
          afterInit(t, e, i) {
            i && (t.tooltip = new mr({ chart: t, options: i }));
          },
          beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          afterDraw(t) {
            const e = t.tooltip,
              i = { tooltip: e };
            !1 !== t.notifyPlugins('beforeTooltipDraw', i) &&
              (e && e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i));
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              const i = e.replay;
              t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
              },
              opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: {
              beforeTitle: o,
              title(t) {
                if (t.length > 0) {
                  const e = t[0],
                    i = e.chart.data.labels,
                    n = i ? i.length : 0;
                  if (this && this.options && 'dataset' === this.options.mode)
                    return e.dataset.label || '';
                  if (e.label) return e.label;
                  if (n > 0 && e.dataIndex < n) return i[e.dataIndex];
                }
                return '';
              },
              afterTitle: o,
              beforeBody: o,
              beforeLabel: o,
              label(t) {
                if (this && this.options && 'dataset' === this.options.mode)
                  return t.label + ': ' + t.formattedValue || t.formattedValue;
                let e = t.dataset.label || '';
                e && (e += ': ');
                const i = t.formattedValue;
                return c(i) || (e += i), e;
              },
              labelColor(t) {
                const e = t.chart
                  .getDatasetMeta(t.datasetIndex)
                  .controller.getStyle(t.dataIndex);
                return {
                  borderColor: e.borderColor,
                  backgroundColor: e.backgroundColor,
                  borderWidth: e.borderWidth,
                  borderDash: e.borderDash,
                  borderDashOffset: e.borderDashOffset,
                  borderRadius: 0,
                };
              },
              labelTextColor() {
                return this.options.bodyColor;
              },
              labelPointStyle(t) {
                const e = t.chart
                  .getDatasetMeta(t.datasetIndex)
                  .controller.getStyle(t.dataIndex);
                return { pointStyle: e.pointStyle, rotation: e.rotation };
              },
              afterLabel: o,
              afterBody: o,
              beforeFooter: o,
              footer: o,
              afterFooter: o,
            },
          },
          defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
          descriptors: {
            _scriptable: t => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
          },
          additionalOptionScopes: ['interaction'],
        },
        br = Object.freeze({
          __proto__: null,
          Decimation: Is,
          Filler: Js,
          Legend: tr,
          SubTitle: sr,
          Title: ir,
          Tooltip: vr,
        });
      class yr extends Fn {
        constructor(t) {
          super(t),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(t) {
          const e = this._addedLabels;
          if (e.length) {
            const t = this.getLabels();
            for (const { index: i, label: n } of e) t[i] === n && t.splice(i, 1);
            this._addedLabels = [];
          }
          super.init(t);
        }
        parse(t, e) {
          if (c(t)) return null;
          const i = this.getLabels();
          return ((t, e) => (null === t ? null : Q(Math.round(t), 0, e)))(
            (e =
              isFinite(e) && i[e] === t
                ? e
                : (function (t, e, i, n) {
                    const s = t.indexOf(e);
                    return -1 === s
                      ? ((t, e, i, n) => (
                          'string' == typeof e
                            ? ((i = t.push(e) - 1), n.unshift({ index: i, label: e }))
                            : isNaN(e) && (i = null),
                          i
                        ))(t, e, i, n)
                      : s !== t.lastIndexOf(e)
                      ? i
                      : s;
                  })(i, t, f(e, t), this._addedLabels)),
            i.length - 1,
          );
        }
        determineDataLimits() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: i, max: n } = this.getMinMax(!0);
          'ticks' === this.options.bounds &&
            (t || (i = 0), e || (n = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = n);
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            i = this.options.offset,
            n = [];
          let s = this.getLabels();
          (s = 0 === t && e === s.length - 1 ? s : s.slice(t, e + 1)),
            (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
          for (let i = t; i <= e; i++) n.push({ value: i });
          return n;
        }
        getLabelForValue(t) {
          const e = this.getLabels();
          return t >= 0 && t < e.length ? e[t] : t;
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
          return (
            'number' != typeof t && (t = this.parse(t)),
            null === t
              ? NaN
              : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
          );
        }
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange,
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      function xr(t, e, { horizontal: i, minRotation: n }) {
        const s = q(n),
          r = (i ? Math.sin(s) : Math.cos(s)) || 0.001,
          a = 0.75 * e * ('' + t).length;
        return Math.min(e / r, a);
      }
      (yr.id = 'category'),
        (yr.defaults = { ticks: { callback: yr.prototype.getLabelForValue } });
      class wr extends Fn {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          return c(t) || (('number' == typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: i } = this.getUserBounds();
          let { min: n, max: s } = this;
          const r = t => (n = e ? n : t),
            a = t => (s = i ? s : t);
          if (t) {
            const t = j(n),
              e = j(s);
            t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && r(0);
          }
          if (n === s) {
            let e = 1;
            (s >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) &&
              (e = Math.abs(0.05 * s)),
              a(s + e),
              t || r(n - e);
          }
          (this.min = n), (this.max = s);
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e,
            { maxTicksLimit: i, stepSize: n } = t;
          return (
            n
              ? ((e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
                e > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`,
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (i = i || 11)),
            i && (e = Math.min(i, e)),
            e
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let i = this.getTickLimit();
          i = Math.max(2, i);
          const n = (function (t, e) {
            const i = [],
              {
                bounds: n,
                step: s,
                min: r,
                max: a,
                precision: o,
                count: l,
                maxTicks: h,
                maxDigits: d,
                includeBounds: u,
              } = t,
              p = s || 1,
              f = h - 1,
              { min: g, max: m } = e,
              v = !c(r),
              b = !c(a),
              y = !c(l),
              x = (m - g) / (d + 1);
            let w,
              _,
              k,
              C,
              S = z((m - g) / f / p) * p;
            if (S < 1e-14 && !v && !b) return [{ value: g }, { value: m }];
            (C = Math.ceil(m / S) - Math.floor(g / S)),
              C > f && (S = z((C * S) / f / p) * p),
              c(o) || ((w = Math.pow(10, o)), (S = Math.ceil(S * w) / w)),
              'ticks' === n
                ? ((_ = Math.floor(g / S) * S), (k = Math.ceil(m / S) * S))
                : ((_ = g), (k = m)),
              v &&
              b &&
              s &&
              (function (t, e) {
                const i = Math.round(t);
                return i - e <= t && i + e >= t;
              })((a - r) / s, S / 1e3)
                ? ((C = Math.round(Math.min((a - r) / S, h))),
                  (S = (a - r) / C),
                  (_ = r),
                  (k = a))
                : y
                ? ((_ = v ? r : _), (k = b ? a : k), (C = l - 1), (S = (k - _) / C))
                : ((C = (k - _) / S),
                  (C = B(C, Math.round(C), S / 1e3) ? Math.round(C) : Math.ceil(C)));
            const T = Math.max(Y(S), Y(_));
            (w = Math.pow(10, c(o) ? T : o)),
              (_ = Math.round(_ * w) / w),
              (k = Math.round(k * w) / w);
            let D = 0;
            for (
              v &&
              (u && _ !== r
                ? (i.push({ value: r }),
                  _ < r && D++,
                  B(Math.round((_ + D * S) * w) / w, r, xr(r, x, t)) && D++)
                : _ < r && D++);
              D < C;
              ++D
            )
              i.push({ value: Math.round((_ + D * S) * w) / w });
            return (
              b && u && k !== a
                ? i.length && B(i[i.length - 1].value, a, xr(a, x, t))
                  ? (i[i.length - 1].value = a)
                  : i.push({ value: a })
                : (b && k !== a) || i.push({ value: k }),
              i
            );
          })(
            {
              maxTicks: i,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this,
          );
          return (
            'ticks' === t.bounds && W(n, this, 'value'),
            t.reverse
              ? (n.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            n
          );
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            i = this.max;
          if ((super.configure(), this.options.offset && t.length)) {
            const n = (i - e) / Math.max(t.length - 1, 1) / 2;
            (e -= n), (i += n);
          }
          (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
        }
        getLabelForValue(t) {
          return Je(t, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class _r extends wr {
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = u(t) ? t : 0),
            (this.max = u(e) ? e : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = q(this.options.ticks.minRotation),
            n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            s = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, s.lineHeight / n));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
        getValueForPixel(t) {
          return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        }
      }
      function kr(t) {
        return 1 == t / Math.pow(10, Math.floor(H(t)));
      }
      (_r.id = 'linear'), (_r.defaults = { ticks: { callback: En.formatters.numeric } });
      class Cr extends Fn {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          const i = wr.prototype.parse.apply(this, [t, e]);
          if (0 !== i) return u(i) && i > 0 ? i : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = u(t) ? Math.max(0, t) : null),
            (this.max = u(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let i = this.min,
            n = this.max;
          const s = e => (i = t ? i : e),
            r = t => (n = e ? n : t),
            a = (t, e) => Math.pow(10, Math.floor(H(t)) + e);
          i === n && (i <= 0 ? (s(1), r(10)) : (s(a(i, -1)), r(a(n, 1)))),
            i <= 0 && s(a(n, -1)),
            n <= 0 && r(a(i, 1)),
            this._zero &&
              this.min !== this._suggestedMin &&
              i === a(this.min, 0) &&
              s(a(i, -1)),
            (this.min = i),
            (this.max = n);
        }
        buildTicks() {
          const t = this.options,
            e = (function (t, e) {
              const i = Math.floor(H(e.max)),
                n = Math.ceil(e.max / Math.pow(10, i)),
                s = [];
              let r = p(t.min, Math.pow(10, Math.floor(H(e.min)))),
                a = Math.floor(H(r)),
                o = Math.floor(r / Math.pow(10, a)),
                l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
              do {
                s.push({ value: r, major: kr(r) }),
                  ++o,
                  10 === o && ((o = 1), ++a, (l = a >= 0 ? 1 : l)),
                  (r = Math.round(o * Math.pow(10, a) * l) / l);
              } while (a < i || (a === i && o < n));
              const c = p(t.max, r);
              return s.push({ value: c, major: kr(r) }), s;
            })({ min: this._userMin, max: this._userMax }, this);
          return (
            'ticks' === t.bounds && W(e, this, 'value'),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(t) {
          return void 0 === t
            ? '0'
            : Je(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const t = this.min;
          super.configure(),
            (this._startValue = H(t)),
            (this._valueRange = H(this.max) - H(t));
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min ? 0 : (H(t) - this._startValue) / this._valueRange,
                )
          );
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        }
      }
      function Sr(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = oe(e.backdropPadding);
          return f(e.font && e.font.size, zt.font.size) + t.height;
        }
        return 0;
      }
      function Tr(t, e, i, n, s) {
        return t === n || t === s
          ? { start: e - i / 2, end: e + i / 2 }
          : t < n || t > s
          ? { start: e - i, end: e }
          : { start: e, end: e + i };
      }
      function Dr(t, e, i, n, s) {
        const r = Math.abs(Math.sin(i)),
          a = Math.abs(Math.cos(i));
        let o = 0,
          l = 0;
        n.start < e.l
          ? ((o = (e.l - n.start) / r), (t.l = Math.min(t.l, e.l - o)))
          : n.end > e.r && ((o = (n.end - e.r) / r), (t.r = Math.max(t.r, e.r + o))),
          s.start < e.t
            ? ((l = (e.t - s.start) / a), (t.t = Math.min(t.t, e.t - l)))
            : s.end > e.b && ((l = (s.end - e.b) / a), (t.b = Math.max(t.b, e.b + l)));
      }
      function Mr(t) {
        return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
      }
      function Er(t, e, i) {
        return 90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e), t;
      }
      function Pr(t, e, i, n) {
        const { ctx: s } = t;
        if (i) s.arc(t.xCenter, t.yCenter, e, 0, L);
        else {
          let i = t.getPointPosition(0, e);
          s.moveTo(i.x, i.y);
          for (let r = 1; r < n; r++) (i = t.getPointPosition(r, e)), s.lineTo(i.x, i.y);
        }
      }
      (Cr.id = 'logarithmic'),
        (Cr.defaults = {
          ticks: { callback: En.formatters.logarithmic, major: { enabled: !0 } },
        });
      class Ar extends wr {
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const t = (this._padding = oe(Sr(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
          (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2));
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1);
          (this.min = u(t) && !isNaN(t) ? t : 0),
            (this.max = u(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / Sr(this.options));
        }
        generateTickLabels(t) {
          wr.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const i = m(this.options.pointLabels.callback, [t, e], this);
                return i || 0 === i ? i : '';
              })
              .filter((t, e) => this.chart.getDataVisibility(e)));
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display
            ? (function (t) {
                const e = {
                    l: t.left + t._padding.left,
                    r: t.right - t._padding.right,
                    t: t.top + t._padding.top,
                    b: t.bottom - t._padding.bottom,
                  },
                  i = Object.assign({}, e),
                  n = [],
                  s = [],
                  r = t._pointLabels.length,
                  a = t.options.pointLabels,
                  o = a.centerPointLabels ? A / r : 0;
                for (let u = 0; u < r; u++) {
                  const r = a.setContext(t.getPointLabelContext(u));
                  s[u] = r.padding;
                  const p = t.getPointPosition(u, t.drawingArea + s[u], o),
                    f = le(r.font),
                    g =
                      ((l = t.ctx),
                      (c = f),
                      (d = h((d = t._pointLabels[u])) ? d : [d]),
                      { w: Bt(l, c.string, d), h: d.length * c.lineHeight });
                  n[u] = g;
                  const m = J(t.getIndexAngle(u) + o),
                    v = Math.round(G(m));
                  Dr(i, e, m, Tr(v, p.x, g.w, 0, 180), Tr(v, p.y, g.h, 90, 270));
                }
                var l, c, d;
                t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
                  (t._pointLabelItems = (function (t, e, i) {
                    const n = [],
                      s = t._pointLabels.length,
                      r = t.options,
                      a = Sr(r) / 2,
                      o = t.drawingArea,
                      l = r.pointLabels.centerPointLabels ? A / s : 0;
                    for (let r = 0; r < s; r++) {
                      const s = t.getPointPosition(r, o + a + i[r], l),
                        u = Math.round(G(J(s.angle + $))),
                        p = e[r],
                        f = Er(s.y, p.h, u),
                        g = Mr(u),
                        m =
                          ((c = s.x),
                          (h = p.w),
                          'right' === (d = g) ? (c -= h) : 'center' === d && (c -= h / 2),
                          c);
                      n.push({
                        x: s.x,
                        y: f,
                        textAlign: g,
                        left: m,
                        top: f,
                        right: m + p.w,
                        bottom: f + p.h,
                      });
                    }
                    var c, h, d;
                    return n;
                  })(t, n, s));
              })(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, i, n) {
          (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - n) / 2)),
            (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, n)));
        }
        getIndexAngle(t) {
          return J(
            t * (L / (this._pointLabels.length || 1)) + q(this.options.startAngle || 0),
          );
        }
        getDistanceFromCenterForValue(t) {
          if (c(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
          if (c(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (function (t, e, i) {
              return he(t, { label: i, index: e, type: 'pointLabel' });
            })(this.getContext(), t, i);
          }
        }
        getPointPosition(t, e, i = 0) {
          const n = this.getIndexAngle(t) - $ + i;
          return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n,
          };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const { left: e, top: i, right: n, bottom: s } = this._pointLabelItems[t];
          return { left: e, top: i, right: n, bottom: s };
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options;
          if (t) {
            const i = this.ctx;
            i.save(),
              i.beginPath(),
              Pr(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length,
              ),
              i.closePath(),
              (i.fillStyle = t),
              i.fill(),
              i.restore();
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: i, grid: n } = e,
            s = this._pointLabels.length;
          let r, a, o;
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: i,
                  options: { pointLabels: n },
                } = t;
                for (let s = e - 1; s >= 0; s--) {
                  const e = n.setContext(t.getPointLabelContext(s)),
                    r = le(e.font),
                    {
                      x: a,
                      y: o,
                      textAlign: l,
                      left: h,
                      top: d,
                      right: u,
                      bottom: p,
                    } = t._pointLabelItems[s],
                    { backdropColor: f } = e;
                  if (!c(f)) {
                    const t = oe(e.backdropPadding);
                    (i.fillStyle = f),
                      i.fillRect(
                        h - t.left,
                        d - t.top,
                        u - h + t.width,
                        p - d + t.height,
                      );
                  }
                  Zt(i, t._pointLabels[s], a, o + r.lineHeight / 2, r, {
                    color: e.color,
                    textAlign: l,
                    textBaseline: 'middle',
                  });
                }
              })(this, s),
            n.display &&
              this.ticks.forEach((t, e) => {
                0 !== e &&
                  ((a = this.getDistanceFromCenterForValue(t.value)),
                  (function (t, e, i, n) {
                    const s = t.ctx,
                      r = e.circular,
                      { color: a, lineWidth: o } = e;
                    (!r && !n) ||
                      !a ||
                      !o ||
                      i < 0 ||
                      (s.save(),
                      (s.strokeStyle = a),
                      (s.lineWidth = o),
                      s.setLineDash(e.borderDash),
                      (s.lineDashOffset = e.borderDashOffset),
                      s.beginPath(),
                      Pr(t, i, r, n),
                      s.closePath(),
                      s.stroke(),
                      s.restore());
                  })(this, n.setContext(this.getContext(e - 1)), a, s));
              }),
            i.display)
          ) {
            for (t.save(), r = s - 1; r >= 0; r--) {
              const n = i.setContext(this.getPointLabelContext(r)),
                { color: s, lineWidth: l } = n;
              l &&
                s &&
                ((t.lineWidth = l),
                (t.strokeStyle = s),
                t.setLineDash(n.borderDash),
                (t.lineDashOffset = n.borderDashOffset),
                (a = this.getDistanceFromCenterForValue(
                  e.ticks.reverse ? this.min : this.max,
                )),
                (o = this.getPointPosition(r, a)),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(o.x, o.y),
                t.stroke());
            }
            t.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            i = e.ticks;
          if (!i.display) return;
          const n = this.getIndexAngle(0);
          let s, r;
          t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(n),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((n, a) => {
              if (0 === a && !e.reverse) return;
              const o = i.setContext(this.getContext(a)),
                l = le(o.font);
              if (
                ((s = this.getDistanceFromCenterForValue(this.ticks[a].value)),
                o.showLabelBackdrop)
              ) {
                (t.font = l.string),
                  (r = t.measureText(n.label).width),
                  (t.fillStyle = o.backdropColor);
                const e = oe(o.backdropPadding);
                t.fillRect(
                  -r / 2 - e.left,
                  -s - l.size / 2 - e.top,
                  r + e.width,
                  l.size + e.height,
                );
              }
              Zt(t, n.label, 0, -s, l, { color: o.color });
            }),
            t.restore();
        }
        drawTitle() {}
      }
      (Ar.id = 'radialLinear'),
        (Ar.defaults = {
          display: !0,
          animate: !0,
          position: 'chartArea',
          angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: En.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: t => t,
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (Ar.defaultRoutes = {
          'angleLines.color': 'borderColor',
          'pointLabels.color': 'color',
          'ticks.color': 'color',
        }),
        (Ar.descriptors = { angleLines: { _fallback: 'grid' } });
      const Lr = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Or = Object.keys(Lr);
      function Nr(t, e) {
        return t - e;
      }
      function Ir(t, e) {
        if (c(e)) return null;
        const i = t._adapter,
          { parser: n, round: s, isoWeekday: r } = t._parseOpts;
        let a = e;
        return (
          'function' == typeof n && (a = n(a)),
          u(a) || (a = 'string' == typeof n ? i.parse(a, n) : i.parse(a)),
          null === a
            ? null
            : (s &&
                (a =
                  'week' !== s || (!V(r) && !0 !== r)
                    ? i.startOf(a, s)
                    : i.startOf(a, 'isoWeek', r)),
              +a)
        );
      }
      function $r(t, e, i, n) {
        const s = Or.length;
        for (let r = Or.indexOf(t); r < s - 1; ++r) {
          const t = Lr[Or[r]],
            s = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((i - e) / (s * t.size)) <= n) return Or[r];
        }
        return Or[s - 1];
      }
      function Fr(t, e, i) {
        if (i) {
          if (i.length) {
            const { lo: n, hi: s } = de(i, e);
            t[i[n] >= e ? i[n] : i[s]] = !0;
          }
        } else t[e] = !0;
      }
      function Rr(t, e, i) {
        const n = [],
          s = {},
          r = e.length;
        let a, o;
        for (a = 0; a < r; ++a) (o = e[a]), (s[o] = a), n.push({ value: o, major: !1 });
        return 0 !== r && i
          ? (function (t, e, i, n) {
              const s = t._adapter,
                r = +s.startOf(e[0].value, n),
                a = e[e.length - 1].value;
              let o, l;
              for (o = r; o <= a; o = +s.add(o, 1, n))
                (l = i[o]), l >= 0 && (e[l].major = !0);
              return e;
            })(t, n, s, i)
          : n;
      }
      class Hr extends Fn {
        constructor(t) {
          super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
        }
        init(t, e) {
          const i = t.time || (t.time = {}),
            n = (this._adapter = new Wi._date(t.adapters.date));
          k(i.displayFormats, n.formats()),
            (this._parseOpts = {
              parser: i.parser,
              round: i.round,
              isoWeekday: i.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
        }
        parse(t, e) {
          return void 0 === t ? null : Ir(this, t);
        }
        beforeLayout() {
          super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
        }
        determineDataLimits() {
          const t = this.options,
            e = this._adapter,
            i = t.time.unit || 'day';
          let { min: n, max: s, minDefined: r, maxDefined: a } = this.getUserBounds();
          function o(t) {
            r || isNaN(t.min) || (n = Math.min(n, t.min)),
              a || isNaN(t.max) || (s = Math.max(s, t.max));
          }
          (r && a) ||
            (o(this._getLabelBounds()),
            ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
              o(this.getMinMax(!1))),
            (n = u(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
            (s = u(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(n, s - 1)),
            (this.max = Math.max(n + 1, s));
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps();
          let e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            i = t.ticks,
            n = 'labels' === i.source ? this.getLabelTimestamps() : this._generate();
          'ticks' === t.bounds &&
            n.length &&
            ((this.min = this._userMin || n[0]),
            (this.max = this._userMax || n[n.length - 1]));
          const s = this.min,
            r = (function (t, e, i) {
              let n = 0,
                s = t.length;
              for (; n < s && t[n] < e; ) n++;
              for (; s > n && t[s - 1] > i; ) s--;
              return n > 0 || s < t.length ? t.slice(n, s) : t;
            })(n, s, this.max);
          return (
            (this._unit =
              e.unit ||
              (i.autoSkip
                ? $r(e.minUnit, this.min, this.max, this._getLabelCapacity(s))
                : (function (t, e, i, n, s) {
                    for (let r = Or.length - 1; r >= Or.indexOf(i); r--) {
                      const i = Or[r];
                      if (Lr[i].common && t._adapter.diff(s, n, i) >= e - 1) return i;
                    }
                    return Or[i ? Or.indexOf(i) : 0];
                  })(this, r.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              i.major.enabled && 'year' !== this._unit
                ? (function (t) {
                    for (let e = Or.indexOf(t) + 1, i = Or.length; e < i; ++e)
                      if (Lr[Or[e]].common) return Or[e];
                  })(this._unit)
                : void 0),
            this.initOffsets(n),
            t.reverse && r.reverse(),
            Rr(this, r, this._majorUnit)
          );
        }
        initOffsets(t) {
          let e,
            i,
            n = 0,
            s = 0;
          this.options.offset &&
            t.length &&
            ((e = this.getDecimalForValue(t[0])),
            (n = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
            (i = this.getDecimalForValue(t[t.length - 1])),
            (s =
              1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
          const r = t.length < 3 ? 0.5 : 0.25;
          (n = Q(n, 0, r)),
            (s = Q(s, 0, r)),
            (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) });
        }
        _generate() {
          const t = this._adapter,
            e = this.min,
            i = this.max,
            n = this.options,
            s = n.time,
            r = s.unit || $r(s.minUnit, e, i, this._getLabelCapacity(e)),
            a = f(s.stepSize, 1),
            o = 'week' === r && s.isoWeekday,
            l = V(o) || !0 === o,
            c = {};
          let h,
            d,
            u = e;
          if (
            (l && (u = +t.startOf(u, 'isoWeek', o)),
            (u = +t.startOf(u, l ? 'day' : r)),
            t.diff(i, e, r) > 1e5 * a)
          )
            throw new Error(
              e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + r,
            );
          const p = 'data' === n.ticks.source && this.getDataTimestamps();
          for (h = u, d = 0; h < i; h = +t.add(h, a, r), d++) Fr(c, h, p);
          return (
            (h !== i && 'ticks' !== n.bounds && 1 !== d) || Fr(c, h, p),
            Object.keys(c)
              .sort((t, e) => t - e)
              .map(t => +t)
          );
        }
        getLabelForValue(t) {
          const e = this._adapter,
            i = this.options.time;
          return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime);
        }
        _tickFormatFunction(t, e, i, n) {
          const s = this.options,
            r = s.time.displayFormats,
            a = this._unit,
            o = this._majorUnit,
            l = a && r[a],
            c = o && r[o],
            h = i[e],
            d = o && c && h && h.major,
            u = this._adapter.format(t, n || (d ? c : l)),
            p = s.ticks.callback;
          return p ? m(p, [u, e, i], this) : u;
        }
        generateTickLabels(t) {
          let e, i, n;
          for (e = 0, i = t.length; e < i; ++e)
            (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        }
        getPixelForValue(t) {
          const e = this._offsets,
            i = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + i) * e.factor);
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + i * (this.max - this.min);
        }
        _getLabelSize(t) {
          const e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = q(this.isHorizontal() ? e.maxRotation : e.minRotation),
            s = Math.cos(n),
            r = Math.sin(n),
            a = this._resolveTickFontOptions(0).size;
          return { w: i * s + a * r, h: i * r + a * s };
        }
        _getLabelCapacity(t) {
          const e = this.options.time,
            i = e.displayFormats,
            n = i[e.unit] || i.millisecond,
            s = this._tickFormatFunction(t, 0, Rr(this, [t], this._majorUnit), n),
            r = this._getLabelSize(s),
            a =
              Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
          return a > 0 ? a : 1;
        }
        getDataTimestamps() {
          let t,
            e,
            i = this._cache.data || [];
          if (i.length) return i;
          const n = this.getMatchingVisibleMetas();
          if (this._normalized && n.length)
            return (this._cache.data = n[0].controller.getAllParsedValues(this));
          for (t = 0, e = n.length; t < e; ++t)
            i = i.concat(n[t].controller.getAllParsedValues(this));
          return (this._cache.data = this.normalize(i));
        }
        getLabelTimestamps() {
          const t = this._cache.labels || [];
          let e, i;
          if (t.length) return t;
          const n = this.getLabels();
          for (e = 0, i = n.length; e < i; ++e) t.push(Ir(this, n[e]));
          return (this._cache.labels = this._normalized ? t : this.normalize(t));
        }
        normalize(t) {
          return me(t.sort(Nr));
        }
      }
      function jr(t, e, i) {
        let n,
          s,
          r,
          a,
          o = 0,
          l = t.length - 1;
        i
          ? (e >= t[o].pos && e <= t[l].pos && ({ lo: o, hi: l } = ue(t, 'pos', e)),
            ({ pos: n, time: r } = t[o]),
            ({ pos: s, time: a } = t[l]))
          : (e >= t[o].time && e <= t[l].time && ({ lo: o, hi: l } = ue(t, 'time', e)),
            ({ time: n, pos: r } = t[o]),
            ({ time: s, pos: a } = t[l]));
        const c = s - n;
        return c ? r + ((a - r) * (e - n)) / c : r;
      }
      (Hr.id = 'time'),
        (Hr.defaults = {
          bounds: 'data',
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
          },
          ticks: { source: 'auto', major: { enabled: !1 } },
        });
      class zr extends Hr {
        constructor(t) {
          super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
          (this._minPos = jr(e, this.min)),
            (this._tableRange = jr(e, this.max) - this._minPos),
            super.initOffsets(t);
        }
        buildLookupTable(t) {
          const { min: e, max: i } = this,
            n = [],
            s = [];
          let r, a, o, l, c;
          for (r = 0, a = t.length; r < a; ++r) (l = t[r]), l >= e && l <= i && n.push(l);
          if (n.length < 2)
            return [
              { time: e, pos: 0 },
              { time: i, pos: 1 },
            ];
          for (r = 0, a = n.length; r < a; ++r)
            (c = n[r + 1]),
              (o = n[r - 1]),
              (l = n[r]),
              Math.round((c + o) / 2) !== l && s.push({ time: l, pos: r / (a - 1) });
          return s;
        }
        _getTimestampsForTable() {
          let t = this._cache.all || [];
          if (t.length) return t;
          const e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
          return (
            (t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i),
            (t = this._cache.all = t),
            t
          );
        }
        getDecimalForValue(t) {
          return (jr(this._table, t) - this._minPos) / this._tableRange;
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return jr(this._table, i * this._tableRange + this._minPos, !0);
        }
      }
      (zr.id = 'timeseries'), (zr.defaults = Hr.defaults);
      const Vr = [
        zi,
        Ls,
        br,
        Object.freeze({
          __proto__: null,
          CategoryScale: yr,
          LinearScale: _r,
          LogarithmicScale: Cr,
          RadialLinearScale: Ar,
          TimeScale: Hr,
          TimeSeriesScale: zr,
        }),
      ];
    },
    831: function (t, e, i) {
      var n, s, r;
      (s = [i(563)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              var e,
                i = navigator.userAgent,
                n = /iphone/i.test(i),
                s = /chrome/i.test(i),
                r = /android/i.test(i);
              (t.mask = {
                definitions: { 9: '[0-9]', a: '[A-Za-z]', '*': '[A-Za-z0-9]' },
                autoclear: !0,
                dataName: 'rawMaskFn',
                placeholder: '_',
              }),
                t.fn.extend({
                  caret: function (t, e) {
                    var i;
                    if (
                      0 !== this.length &&
                      !this.is(':hidden') &&
                      this.get(0) === document.activeElement
                    )
                      return 'number' == typeof t
                        ? ((e = 'number' == typeof e ? e : t),
                          this.each(function () {
                            this.setSelectionRange
                              ? this.setSelectionRange(t, e)
                              : this.createTextRange &&
                                ((i = this.createTextRange()).collapse(!0),
                                i.moveEnd('character', e),
                                i.moveStart('character', t),
                                i.select());
                          }))
                        : (this[0].setSelectionRange
                            ? ((t = this[0].selectionStart), (e = this[0].selectionEnd))
                            : document.selection &&
                              document.selection.createRange &&
                              ((i = document.selection.createRange()),
                              (t = 0 - i.duplicate().moveStart('character', -1e5)),
                              (e = t + i.text.length)),
                          { begin: t, end: e });
                  },
                  unmask: function () {
                    return this.trigger('unmask');
                  },
                  mask: function (i, a) {
                    var o, l, c, h, d, u, p;
                    if (!i && this.length > 0) {
                      var f = t(this[0]).data(t.mask.dataName);
                      return f ? f() : void 0;
                    }
                    return (
                      (a = t.extend(
                        {
                          autoclear: t.mask.autoclear,
                          placeholder: t.mask.placeholder,
                          completed: null,
                        },
                        a,
                      )),
                      (o = t.mask.definitions),
                      (l = []),
                      (c = u = i.length),
                      (h = null),
                      (i = String(i)),
                      t.each(i.split(''), function (t, e) {
                        '?' == e
                          ? (u--, (c = t))
                          : o[e]
                          ? (l.push(new RegExp(o[e])),
                            null === h && (h = l.length - 1),
                            t < c && (d = l.length - 1))
                          : l.push(null);
                      }),
                      this.trigger('unmask').each(function () {
                        var f = t(this),
                          g = t.map(i.split(''), function (t, e) {
                            if ('?' != t) return o[t] ? y(e) : t;
                          }),
                          m = g.join(''),
                          v = f.val();
                        function b() {
                          if (a.completed) {
                            for (var t = h; t <= d; t++)
                              if (l[t] && g[t] === y(t)) return;
                            a.completed.call(f);
                          }
                        }
                        function y(t) {
                          return t < a.placeholder.length
                            ? a.placeholder.charAt(t)
                            : a.placeholder.charAt(0);
                        }
                        function x(t) {
                          for (; ++t < u && !l[t]; );
                          return t;
                        }
                        function w(t, e) {
                          var i, n;
                          if (!(t < 0)) {
                            for (i = t, n = x(e); i < u; i++)
                              if (l[i]) {
                                if (!(n < u && l[i].test(g[n]))) break;
                                (g[i] = g[n]), (g[n] = y(n)), (n = x(n));
                              }
                            C(), f.caret(Math.max(h, t));
                          }
                        }
                        function _(t) {
                          S(), f.val() != v && f.change();
                        }
                        function k(t, e) {
                          var i;
                          for (i = t; i < e && i < u; i++) l[i] && (g[i] = y(i));
                        }
                        function C() {
                          f.val(g.join(''));
                        }
                        function S(t) {
                          var e,
                            i,
                            n,
                            s = f.val(),
                            r = -1;
                          for (e = 0, n = 0; e < u; e++)
                            if (l[e]) {
                              for (g[e] = y(e); n++ < s.length; )
                                if (((i = s.charAt(n - 1)), l[e].test(i))) {
                                  (g[e] = i), (r = e);
                                  break;
                                }
                              if (n > s.length) {
                                k(e + 1, u);
                                break;
                              }
                            } else g[e] === s.charAt(n) && n++, e < c && (r = e);
                          return (
                            t
                              ? C()
                              : r + 1 < c
                              ? a.autoclear || g.join('') === m
                                ? (f.val() && f.val(''), k(0, u))
                                : C()
                              : (C(), f.val(f.val().substring(0, r + 1))),
                            c ? e : h
                          );
                        }
                        f.data(t.mask.dataName, function () {
                          return t
                            .map(g, function (t, e) {
                              return l[e] && t != y(e) ? t : null;
                            })
                            .join('');
                        }),
                          f
                            .one('unmask', function () {
                              f.off('.mask').removeData(t.mask.dataName);
                            })
                            .on('focus.mask', function () {
                              var t;
                              f.prop('readonly') ||
                                (clearTimeout(e),
                                (v = f.val()),
                                (t = S()),
                                (e = setTimeout(function () {
                                  f.get(0) === document.activeElement &&
                                    (C(),
                                    t == i.replace('?', '').length
                                      ? f.caret(0, t)
                                      : f.caret(t));
                                }, 10)));
                            })
                            .on('blur.mask', _)
                            .on('keydown.mask', function (t) {
                              if (!f.prop('readonly')) {
                                var e,
                                  i,
                                  s,
                                  r = t.which || t.keyCode;
                                (p = f.val()),
                                  8 === r || 46 === r || (n && 127 === r)
                                    ? ((i = (e = f.caret()).begin),
                                      (s = e.end) - i == 0 &&
                                        ((i =
                                          46 !== r
                                            ? (function (t) {
                                                for (; --t >= 0 && !l[t]; );
                                                return t;
                                              })(i)
                                            : (s = x(i - 1))),
                                        (s = 46 === r ? x(s) : s)),
                                      k(i, s),
                                      w(i, s - 1),
                                      t.preventDefault())
                                    : 13 === r
                                    ? _.call(this, t)
                                    : 27 === r &&
                                      (f.val(v), f.caret(0, S()), t.preventDefault());
                              }
                            })
                            .on('keypress.mask', function (e) {
                              if (!f.prop('readonly')) {
                                var i,
                                  n,
                                  s,
                                  a = e.which || e.keyCode,
                                  o = f.caret();
                                e.ctrlKey ||
                                  e.altKey ||
                                  e.metaKey ||
                                  a < 32 ||
                                  !a ||
                                  13 === a ||
                                  (o.end - o.begin != 0 &&
                                    (k(o.begin, o.end), w(o.begin, o.end - 1)),
                                  (i = x(o.begin - 1)) < u &&
                                    ((n = String.fromCharCode(a)), l[i].test(n)) &&
                                    ((function (t) {
                                      var e, i, n, s;
                                      for (e = t, i = y(t); e < u; e++)
                                        if (l[e]) {
                                          if (
                                            ((n = x(e)),
                                            (s = g[e]),
                                            (g[e] = i),
                                            !(n < u && l[n].test(s)))
                                          )
                                            break;
                                          i = s;
                                        }
                                    })(i),
                                    (g[i] = n),
                                    C(),
                                    (s = x(i)),
                                    r
                                      ? setTimeout(function () {
                                          t.proxy(t.fn.caret, f, s)();
                                        }, 0)
                                      : f.caret(s),
                                    o.begin <= d && b()),
                                  e.preventDefault());
                              }
                            })
                            .on('input.mask paste.mask', function () {
                              f.prop('readonly') ||
                                setTimeout(function () {
                                  var t = S(!0);
                                  f.caret(t), b();
                                }, 0);
                            }),
                          s &&
                            r &&
                            f.off('input.mask').on('input.mask', function (t) {
                              var e = f.val(),
                                i = f.caret();
                              if (p && p.length && p.length > e.length) {
                                for (S(!0); i.begin > 0 && !l[i.begin - 1]; ) i.begin--;
                                if (0 === i.begin)
                                  for (; i.begin < h && !l[i.begin]; ) i.begin++;
                                f.caret(i.begin, i.begin);
                              } else {
                                S(!0);
                                var n = e.charAt(i.begin);
                                i.begin < u &&
                                  (l[i.begin] || i.begin++,
                                  l[i.begin].test(n) && i.begin++),
                                  f.caret(i.begin, i.begin);
                              }
                              b();
                            }),
                          S();
                      })
                    );
                  },
                });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    563: function (t, e) {
      var i;
      !(function (e, i) {
        'use strict';
        'object' == typeof t.exports
          ? (t.exports = e.document
              ? i(e, !0)
              : function (t) {
                  if (!t.document)
                    throw new Error('jQuery requires a window with a document');
                  return i(t);
                })
          : i(e);
      })('undefined' != typeof window ? window : this, function (n, s) {
        'use strict';
        var r = [],
          a = Object.getPrototypeOf,
          o = r.slice,
          l = r.flat
            ? function (t) {
                return r.flat.call(t);
              }
            : function (t) {
                return r.concat.apply([], t);
              },
          c = r.push,
          h = r.indexOf,
          d = {},
          u = d.toString,
          p = d.hasOwnProperty,
          f = p.toString,
          g = f.call(Object),
          m = {},
          v = function (t) {
            return (
              'function' == typeof t &&
              'number' != typeof t.nodeType &&
              'function' != typeof t.item
            );
          },
          b = function (t) {
            return null != t && t === t.window;
          },
          y = n.document,
          x = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(t, e, i) {
          var n,
            s,
            r = (i = i || y).createElement('script');
          if (((r.text = t), e))
            for (n in x)
              (s = e[n] || (e.getAttribute && e.getAttribute(n))) && r.setAttribute(n, s);
          i.head.appendChild(r).parentNode.removeChild(r);
        }
        function _(t) {
          return null == t
            ? t + ''
            : 'object' == typeof t || 'function' == typeof t
            ? d[u.call(t)] || 'object'
            : typeof t;
        }
        var k = '3.6.0',
          C = function (t, e) {
            return new C.fn.init(t, e);
          };
        function S(t) {
          var e = !!t && 'length' in t && t.length,
            i = _(t);
          return (
            !v(t) &&
            !b(t) &&
            ('array' === i || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t))
          );
        }
        (C.fn = C.prototype =
          {
            jquery: k,
            constructor: C,
            length: 0,
            toArray: function () {
              return o.call(this);
            },
            get: function (t) {
              return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t];
            },
            pushStack: function (t) {
              var e = C.merge(this.constructor(), t);
              return (e.prevObject = this), e;
            },
            each: function (t) {
              return C.each(this, t);
            },
            map: function (t) {
              return this.pushStack(
                C.map(this, function (e, i) {
                  return t.call(e, i, e);
                }),
              );
            },
            slice: function () {
              return this.pushStack(o.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                C.grep(this, function (t, e) {
                  return (e + 1) % 2;
                }),
              );
            },
            odd: function () {
              return this.pushStack(
                C.grep(this, function (t, e) {
                  return e % 2;
                }),
              );
            },
            eq: function (t) {
              var e = this.length,
                i = +t + (t < 0 ? e : 0);
              return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: r.sort,
            splice: r.splice,
          }),
          (C.extend = C.fn.extend =
            function () {
              var t,
                e,
                i,
                n,
                s,
                r,
                a = arguments[0] || {},
                o = 1,
                l = arguments.length,
                c = !1;
              for (
                'boolean' == typeof a && ((c = a), (a = arguments[o] || {}), o++),
                  'object' == typeof a || v(a) || (a = {}),
                  o === l && ((a = this), o--);
                o < l;
                o++
              )
                if (null != (t = arguments[o]))
                  for (e in t)
                    (n = t[e]),
                      '__proto__' !== e &&
                        a !== n &&
                        (c && n && (C.isPlainObject(n) || (s = Array.isArray(n)))
                          ? ((i = a[e]),
                            (r =
                              s && !Array.isArray(i)
                                ? []
                                : s || C.isPlainObject(i)
                                ? i
                                : {}),
                            (s = !1),
                            (a[e] = C.extend(c, r, n)))
                          : void 0 !== n && (a[e] = n));
              return a;
            }),
          C.extend({
            expando: 'jQuery' + (k + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function (t) {
              throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
              var e, i;
              return !(
                !t ||
                '[object Object]' !== u.call(t) ||
                ((e = a(t)) &&
                  ('function' != typeof (i = p.call(e, 'constructor') && e.constructor) ||
                    f.call(i) !== g))
              );
            },
            isEmptyObject: function (t) {
              var e;
              for (e in t) return !1;
              return !0;
            },
            globalEval: function (t, e, i) {
              w(t, { nonce: e && e.nonce }, i);
            },
            each: function (t, e) {
              var i,
                n = 0;
              if (S(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
              else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
              return t;
            },
            makeArray: function (t, e) {
              var i = e || [];
              return (
                null != t &&
                  (S(Object(t))
                    ? C.merge(i, 'string' == typeof t ? [t] : t)
                    : c.call(i, t)),
                i
              );
            },
            inArray: function (t, e, i) {
              return null == e ? -1 : h.call(e, t, i);
            },
            merge: function (t, e) {
              for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
              return (t.length = s), t;
            },
            grep: function (t, e, i) {
              for (var n = [], s = 0, r = t.length, a = !i; s < r; s++)
                !e(t[s], s) !== a && n.push(t[s]);
              return n;
            },
            map: function (t, e, i) {
              var n,
                s,
                r = 0,
                a = [];
              if (S(t))
                for (n = t.length; r < n; r++) null != (s = e(t[r], r, i)) && a.push(s);
              else for (r in t) null != (s = e(t[r], r, i)) && a.push(s);
              return l(a);
            },
            guid: 1,
            support: m,
          }),
          'function' == typeof Symbol && (C.fn[Symbol.iterator] = r[Symbol.iterator]),
          C.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
              ' ',
            ),
            function (t, e) {
              d['[object ' + e + ']'] = e.toLowerCase();
            },
          );
        var T = (function (t) {
          var e,
            i,
            n,
            s,
            r,
            a,
            o,
            l,
            c,
            h,
            d,
            u,
            p,
            f,
            g,
            m,
            v,
            b,
            y,
            x = 'sizzle' + 1 * new Date(),
            w = t.document,
            _ = 0,
            k = 0,
            C = lt(),
            S = lt(),
            T = lt(),
            D = lt(),
            M = function (t, e) {
              return t === e && (d = !0), 0;
            },
            E = {}.hasOwnProperty,
            P = [],
            A = P.pop,
            L = P.push,
            O = P.push,
            N = P.slice,
            I = function (t, e) {
              for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
              return -1;
            },
            $ =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            F = '[\\x20\\t\\r\\n\\f]',
            R =
              '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
            H =
              '\\[[\\x20\\t\\r\\n\\f]*(' +
              R +
              ')(?:' +
              F +
              '*([*^$|!~]?=)' +
              F +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              R +
              '))|)' +
              F +
              '*\\]',
            j =
              ':(' +
              R +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              H +
              ')*)|.*)\\)|)',
            z = new RegExp(F + '+', 'g'),
            V = new RegExp(
              '^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$',
              'g',
            ),
            B = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'),
            W = new RegExp(
              '^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*',
            ),
            q = new RegExp(F + '|>'),
            G = new RegExp(j),
            Y = new RegExp('^' + R + '$'),
            U = {
              ID: new RegExp('^#(' + R + ')'),
              CLASS: new RegExp('^\\.(' + R + ')'),
              TAG: new RegExp('^(' + R + '|[*])'),
              ATTR: new RegExp('^' + H),
              PSEUDO: new RegExp('^' + j),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
                'i',
              ),
              bool: new RegExp('^(?:' + $ + ')$', 'i'),
              needsContext: new RegExp(
                '^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
                'i',
              ),
            },
            X = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp(
              '\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])',
              'g',
            ),
            it = function (t, e) {
              var i = '0x' + t.slice(1) - 65536;
              return (
                e ||
                (i < 0
                  ? String.fromCharCode(i + 65536)
                  : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
              );
            },
            nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            st = function (t, e) {
              return e
                ? '\0' === t
                  ? '�'
                  : t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' '
                : '\\' + t;
            },
            rt = function () {
              u();
            },
            at = xt(
              function (t) {
                return !0 === t.disabled && 'fieldset' === t.nodeName.toLowerCase();
              },
              { dir: 'parentNode', next: 'legend' },
            );
          try {
            O.apply((P = N.call(w.childNodes)), w.childNodes),
              P[w.childNodes.length].nodeType;
          } catch (t) {
            O = {
              apply: P.length
                ? function (t, e) {
                    L.apply(t, N.call(e));
                  }
                : function (t, e) {
                    for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                    t.length = i - 1;
                  },
            };
          }
          function ot(t, e, n, s) {
            var r,
              o,
              c,
              h,
              d,
              f,
              v,
              b = e && e.ownerDocument,
              w = e ? e.nodeType : 9;
            if (
              ((n = n || []),
              'string' != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
            )
              return n;
            if (!s && (u(e), (e = e || p), g)) {
              if (11 !== w && (d = Q.exec(t)))
                if ((r = d[1])) {
                  if (9 === w) {
                    if (!(c = e.getElementById(r))) return n;
                    if (c.id === r) return n.push(c), n;
                  } else if (b && (c = b.getElementById(r)) && y(e, c) && c.id === r)
                    return n.push(c), n;
                } else {
                  if (d[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                  if ((r = d[3]) && i.getElementsByClassName && e.getElementsByClassName)
                    return O.apply(n, e.getElementsByClassName(r)), n;
                }
              if (
                i.qsa &&
                !D[t + ' '] &&
                (!m || !m.test(t)) &&
                (1 !== w || 'object' !== e.nodeName.toLowerCase())
              ) {
                if (((v = t), (b = e), 1 === w && (q.test(t) || W.test(t)))) {
                  for (
                    ((b = (tt.test(t) && vt(e.parentNode)) || e) === e && i.scope) ||
                      ((h = e.getAttribute('id'))
                        ? (h = h.replace(nt, st))
                        : e.setAttribute('id', (h = x))),
                      o = (f = a(t)).length;
                    o--;

                  )
                    f[o] = (h ? '#' + h : ':scope') + ' ' + yt(f[o]);
                  v = f.join(',');
                }
                try {
                  return O.apply(n, b.querySelectorAll(v)), n;
                } catch (e) {
                  D(t, !0);
                } finally {
                  h === x && e.removeAttribute('id');
                }
              }
            }
            return l(t.replace(V, '$1'), e, n, s);
          }
          function lt() {
            var t = [];
            return function e(i, s) {
              return (
                t.push(i + ' ') > n.cacheLength && delete e[t.shift()], (e[i + ' '] = s)
              );
            };
          }
          function ct(t) {
            return (t[x] = !0), t;
          }
          function ht(t) {
            var e = p.createElement('fieldset');
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function dt(t, e) {
            for (var i = t.split('|'), s = i.length; s--; ) n.attrHandle[i[s]] = e;
          }
          function ut(t, e) {
            var i = e && t,
              n =
                i &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
            return t ? 1 : -1;
          }
          function pt(t) {
            return function (e) {
              return 'input' === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ft(t) {
            return function (e) {
              var i = e.nodeName.toLowerCase();
              return ('input' === i || 'button' === i) && e.type === t;
            };
          }
          function gt(t) {
            return function (e) {
              return 'form' in e
                ? e.parentNode && !1 === e.disabled
                  ? 'label' in e
                    ? 'label' in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                  : e.disabled === t
                : 'label' in e && e.disabled === t;
            };
          }
          function mt(t) {
            return ct(function (e) {
              return (
                (e = +e),
                ct(function (i, n) {
                  for (var s, r = t([], i.length, e), a = r.length; a--; )
                    i[(s = r[a])] && (i[s] = !(n[s] = i[s]));
                })
              );
            });
          }
          function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((i = ot.support = {}),
          (r = ot.isXML =
            function (t) {
              var e = t && t.namespaceURI,
                i = t && (t.ownerDocument || t).documentElement;
              return !X.test(e || (i && i.nodeName) || 'HTML');
            }),
          (u = ot.setDocument =
            function (t) {
              var e,
                s,
                a = t ? t.ownerDocument || t : w;
              return a != p && 9 === a.nodeType && a.documentElement
                ? ((f = (p = a).documentElement),
                  (g = !r(p)),
                  w != p &&
                    (s = p.defaultView) &&
                    s.top !== s &&
                    (s.addEventListener
                      ? s.addEventListener('unload', rt, !1)
                      : s.attachEvent && s.attachEvent('onunload', rt)),
                  (i.scope = ht(function (t) {
                    return (
                      f.appendChild(t).appendChild(p.createElement('div')),
                      void 0 !== t.querySelectorAll &&
                        !t.querySelectorAll(':scope fieldset div').length
                    );
                  })),
                  (i.attributes = ht(function (t) {
                    return (t.className = 'i'), !t.getAttribute('className');
                  })),
                  (i.getElementsByTagName = ht(function (t) {
                    return (
                      t.appendChild(p.createComment('')),
                      !t.getElementsByTagName('*').length
                    );
                  })),
                  (i.getElementsByClassName = Z.test(p.getElementsByClassName)),
                  (i.getById = ht(function (t) {
                    return (
                      (f.appendChild(t).id = x),
                      !p.getElementsByName || !p.getElementsByName(x).length
                    );
                  })),
                  i.getById
                    ? ((n.filter.ID = function (t) {
                        var e = t.replace(et, it);
                        return function (t) {
                          return t.getAttribute('id') === e;
                        };
                      }),
                      (n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                          var i = e.getElementById(t);
                          return i ? [i] : [];
                        }
                      }))
                    : ((n.filter.ID = function (t) {
                        var e = t.replace(et, it);
                        return function (t) {
                          var i =
                            void 0 !== t.getAttributeNode && t.getAttributeNode('id');
                          return i && i.value === e;
                        };
                      }),
                      (n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                          var i,
                            n,
                            s,
                            r = e.getElementById(t);
                          if (r) {
                            if ((i = r.getAttributeNode('id')) && i.value === t)
                              return [r];
                            for (s = e.getElementsByName(t), n = 0; (r = s[n++]); )
                              if ((i = r.getAttributeNode('id')) && i.value === t)
                                return [r];
                          }
                          return [];
                        }
                      })),
                  (n.find.TAG = i.getElementsByTagName
                    ? function (t, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : i.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, e) {
                        var i,
                          n = [],
                          s = 0,
                          r = e.getElementsByTagName(t);
                        if ('*' === t) {
                          for (; (i = r[s++]); ) 1 === i.nodeType && n.push(i);
                          return n;
                        }
                        return r;
                      }),
                  (n.find.CLASS =
                    i.getElementsByClassName &&
                    function (t, e) {
                      if (void 0 !== e.getElementsByClassName && g)
                        return e.getElementsByClassName(t);
                    }),
                  (v = []),
                  (m = []),
                  (i.qsa = Z.test(p.querySelectorAll)) &&
                    (ht(function (t) {
                      var e;
                      (f.appendChild(t).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          m.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                        t.querySelectorAll('[selected]').length ||
                          m.push('\\[[\\x20\\t\\r\\n\\f]*(?:value|' + $ + ')'),
                        t.querySelectorAll('[id~=' + x + '-]').length || m.push('~='),
                        (e = p.createElement('input')).setAttribute('name', ''),
                        t.appendChild(e),
                        t.querySelectorAll("[name='']").length ||
                          m.push(
                            '\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")',
                          ),
                        t.querySelectorAll(':checked').length || m.push(':checked'),
                        t.querySelectorAll('a#' + x + '+*').length || m.push('.#.+[+~]'),
                        t.querySelectorAll('\\\f'),
                        m.push('[\\r\\n\\f]');
                    }),
                    ht(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = p.createElement('input');
                      e.setAttribute('type', 'hidden'),
                        t.appendChild(e).setAttribute('name', 'D'),
                        t.querySelectorAll('[name=d]').length &&
                          m.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                        2 !== t.querySelectorAll(':enabled').length &&
                          m.push(':enabled', ':disabled'),
                        (f.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(':disabled').length &&
                          m.push(':enabled', ':disabled'),
                        t.querySelectorAll('*,:x'),
                        m.push(',.*:');
                    })),
                  (i.matchesSelector = Z.test(
                    (b =
                      f.matches ||
                      f.webkitMatchesSelector ||
                      f.mozMatchesSelector ||
                      f.oMatchesSelector ||
                      f.msMatchesSelector),
                  )) &&
                    ht(function (t) {
                      (i.disconnectedMatch = b.call(t, '*')),
                        b.call(t, "[s!='']:x"),
                        v.push('!=', j);
                    }),
                  (m = m.length && new RegExp(m.join('|'))),
                  (v = v.length && new RegExp(v.join('|'))),
                  (e = Z.test(f.compareDocumentPosition)),
                  (y =
                    e || Z.test(f.contains)
                      ? function (t, e) {
                          var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                          return (
                            t === n ||
                            !(
                              !n ||
                              1 !== n.nodeType ||
                              !(i.contains
                                ? i.contains(n)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(n))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                          return !1;
                        }),
                  (M = e
                    ? function (t, e) {
                        if (t === e) return (d = !0), 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return (
                          n ||
                          (1 &
                            (n =
                              (t.ownerDocument || t) == (e.ownerDocument || e)
                                ? t.compareDocumentPosition(e)
                                : 1) ||
                          (!i.sortDetached && e.compareDocumentPosition(t) === n)
                            ? t == p || (t.ownerDocument == w && y(w, t))
                              ? -1
                              : e == p || (e.ownerDocument == w && y(w, e))
                              ? 1
                              : h
                              ? I(h, t) - I(h, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (t, e) {
                        if (t === e) return (d = !0), 0;
                        var i,
                          n = 0,
                          s = t.parentNode,
                          r = e.parentNode,
                          a = [t],
                          o = [e];
                        if (!s || !r)
                          return t == p
                            ? -1
                            : e == p
                            ? 1
                            : s
                            ? -1
                            : r
                            ? 1
                            : h
                            ? I(h, t) - I(h, e)
                            : 0;
                        if (s === r) return ut(t, e);
                        for (i = t; (i = i.parentNode); ) a.unshift(i);
                        for (i = e; (i = i.parentNode); ) o.unshift(i);
                        for (; a[n] === o[n]; ) n++;
                        return n ? ut(a[n], o[n]) : a[n] == w ? -1 : o[n] == w ? 1 : 0;
                      }),
                  p)
                : p;
            }),
          (ot.matches = function (t, e) {
            return ot(t, null, null, e);
          }),
          (ot.matchesSelector = function (t, e) {
            if (
              (u(t),
              i.matchesSelector &&
                g &&
                !D[e + ' '] &&
                (!v || !v.test(e)) &&
                (!m || !m.test(e)))
            )
              try {
                var n = b.call(t, e);
                if (
                  n ||
                  i.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return n;
              } catch (t) {
                D(e, !0);
              }
            return ot(e, p, null, [t]).length > 0;
          }),
          (ot.contains = function (t, e) {
            return (t.ownerDocument || t) != p && u(t), y(t, e);
          }),
          (ot.attr = function (t, e) {
            (t.ownerDocument || t) != p && u(t);
            var s = n.attrHandle[e.toLowerCase()],
              r = s && E.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
            return void 0 !== r
              ? r
              : i.attributes || !g
              ? t.getAttribute(e)
              : (r = t.getAttributeNode(e)) && r.specified
              ? r.value
              : null;
          }),
          (ot.escape = function (t) {
            return (t + '').replace(nt, st);
          }),
          (ot.error = function (t) {
            throw new Error('Syntax error, unrecognized expression: ' + t);
          }),
          (ot.uniqueSort = function (t) {
            var e,
              n = [],
              s = 0,
              r = 0;
            if (
              ((d = !i.detectDuplicates), (h = !i.sortStable && t.slice(0)), t.sort(M), d)
            ) {
              for (; (e = t[r++]); ) e === t[r] && (s = n.push(r));
              for (; s--; ) t.splice(n[s], 1);
            }
            return (h = null), t;
          }),
          (s = ot.getText =
            function (t) {
              var e,
                i = '',
                n = 0,
                r = t.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ('string' == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
                } else if (3 === r || 4 === r) return t.nodeValue;
              } else for (; (e = t[n++]); ) i += s(e);
              return i;
            }),
          (n = ot.selectors =
            {
              cacheLength: 50,
              createPseudo: ct,
              match: U,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(et, it)),
                    (t[3] = (t[3] || t[4] || t[5] || '').replace(et, it)),
                    '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    'nth' === t[1].slice(0, 3)
                      ? (t[3] || ot.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ('even' === t[3] || 'odd' === t[3]))),
                        (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
                      : t[3] && ot.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    i = !t[6] && t[2];
                  return U.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || '')
                        : i &&
                          G.test(i) &&
                          (e = a(i, !0)) &&
                          (e = i.indexOf(')', i.length - e) - i.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(et, it).toLowerCase();
                  return '*' === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function (t) {
                  var e = C[t + ' '];
                  return (
                    e ||
                    ((e = new RegExp('(^|[\\x20\\t\\r\\n\\f])' + t + '(' + F + '|$)')) &&
                      C(t, function (t) {
                        return e.test(
                          ('string' == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute && t.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function (t, e, i) {
                  return function (n) {
                    var s = ot.attr(n, t);
                    return null == s
                      ? '!=' === e
                      : !e ||
                          ((s += ''),
                          '=' === e
                            ? s === i
                            : '!=' === e
                            ? s !== i
                            : '^=' === e
                            ? i && 0 === s.indexOf(i)
                            : '*=' === e
                            ? i && s.indexOf(i) > -1
                            : '$=' === e
                            ? i && s.slice(-i.length) === i
                            : '~=' === e
                            ? (' ' + s.replace(z, ' ') + ' ').indexOf(i) > -1
                            : '|=' === e &&
                              (s === i || s.slice(0, i.length + 1) === i + '-'));
                  };
                },
                CHILD: function (t, e, i, n, s) {
                  var r = 'nth' !== t.slice(0, 3),
                    a = 'last' !== t.slice(-4),
                    o = 'of-type' === e;
                  return 1 === n && 0 === s
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (e, i, l) {
                        var c,
                          h,
                          d,
                          u,
                          p,
                          f,
                          g = r !== a ? 'nextSibling' : 'previousSibling',
                          m = e.parentNode,
                          v = o && e.nodeName.toLowerCase(),
                          b = !l && !o,
                          y = !1;
                        if (m) {
                          if (r) {
                            for (; g; ) {
                              for (u = e; (u = u[g]); )
                                if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)
                                  return !1;
                              f = g = 'only' === t && !f && 'nextSibling';
                            }
                            return !0;
                          }
                          if (((f = [a ? m.firstChild : m.lastChild]), a && b)) {
                            for (
                              y =
                                (p =
                                  (c =
                                    (h =
                                      (d = (u = m)[x] || (u[x] = {}))[u.uniqueID] ||
                                      (d[u.uniqueID] = {}))[t] || [])[0] === _ && c[1]) &&
                                c[2],
                                u = p && m.childNodes[p];
                              (u = (++p && u && u[g]) || (y = p = 0) || f.pop());

                            )
                              if (1 === u.nodeType && ++y && u === e) {
                                h[t] = [_, p, y];
                                break;
                              }
                          } else if (
                            (b &&
                              (y = p =
                                (c =
                                  (h =
                                    (d = (u = e)[x] || (u[x] = {}))[u.uniqueID] ||
                                    (d[u.uniqueID] = {}))[t] || [])[0] === _ && c[1]),
                            !1 === y)
                          )
                            for (
                              ;
                              (u = (++p && u && u[g]) || (y = p = 0) || f.pop()) &&
                              ((o ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) ||
                                !++y ||
                                (b &&
                                  ((h =
                                    (d = u[x] || (u[x] = {}))[u.uniqueID] ||
                                    (d[u.uniqueID] = {}))[t] = [_, y]),
                                u !== e));

                            );
                          return (y -= s) === n || (y % n == 0 && y / n >= 0);
                        }
                      };
                },
                PSEUDO: function (t, e) {
                  var i,
                    s =
                      n.pseudos[t] ||
                      n.setFilters[t.toLowerCase()] ||
                      ot.error('unsupported pseudo: ' + t);
                  return s[x]
                    ? s(e)
                    : s.length > 1
                    ? ((i = [t, t, '', e]),
                      n.setFilters.hasOwnProperty(t.toLowerCase())
                        ? ct(function (t, i) {
                            for (var n, r = s(t, e), a = r.length; a--; )
                              t[(n = I(t, r[a]))] = !(i[n] = r[a]);
                          })
                        : function (t) {
                            return s(t, 0, i);
                          })
                    : s;
                },
              },
              pseudos: {
                not: ct(function (t) {
                  var e = [],
                    i = [],
                    n = o(t.replace(V, '$1'));
                  return n[x]
                    ? ct(function (t, e, i, s) {
                        for (var r, a = n(t, null, s, []), o = t.length; o--; )
                          (r = a[o]) && (t[o] = !(e[o] = r));
                      })
                    : function (t, s, r) {
                        return (e[0] = t), n(e, null, r, i), (e[0] = null), !i.pop();
                      };
                }),
                has: ct(function (t) {
                  return function (e) {
                    return ot(t, e).length > 0;
                  };
                }),
                contains: ct(function (t) {
                  return (
                    (t = t.replace(et, it)),
                    function (e) {
                      return (e.textContent || s(e)).indexOf(t) > -1;
                    }
                  );
                }),
                lang: ct(function (t) {
                  return (
                    Y.test(t || '') || ot.error('unsupported lang: ' + t),
                    (t = t.replace(et, it).toLowerCase()),
                    function (e) {
                      var i;
                      do {
                        if (
                          (i = g
                            ? e.lang
                            : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                        )
                          return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + '-');
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var i = t.location && t.location.hash;
                  return i && i.slice(1) === e.id;
                },
                root: function (t) {
                  return t === f;
                },
                focus: function (t) {
                  return (
                    t === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: gt(!1),
                disabled: gt(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ('input' === e && !!t.checked) || ('option' === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !n.pseudos.empty(t);
                },
                header: function (t) {
                  return J.test(t.nodeName);
                },
                input: function (t) {
                  return K.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return ('input' === e && 'button' === t.type) || 'button' === e;
                },
                text: function (t) {
                  var e;
                  return (
                    'input' === t.nodeName.toLowerCase() &&
                    'text' === t.type &&
                    (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase())
                  );
                },
                first: mt(function () {
                  return [0];
                }),
                last: mt(function (t, e) {
                  return [e - 1];
                }),
                eq: mt(function (t, e, i) {
                  return [i < 0 ? i + e : i];
                }),
                even: mt(function (t, e) {
                  for (var i = 0; i < e; i += 2) t.push(i);
                  return t;
                }),
                odd: mt(function (t, e) {
                  for (var i = 1; i < e; i += 2) t.push(i);
                  return t;
                }),
                lt: mt(function (t, e, i) {
                  for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0; ) t.push(n);
                  return t;
                }),
                gt: mt(function (t, e, i) {
                  for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                  return t;
                }),
              },
            }),
          (n.pseudos.nth = n.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            n.pseudos[e] = pt(e);
          for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ft(e);
          function bt() {}
          function yt(t) {
            for (var e = 0, i = t.length, n = ''; e < i; e++) n += t[e].value;
            return n;
          }
          function xt(t, e, i) {
            var n = e.dir,
              s = e.next,
              r = s || n,
              a = i && 'parentNode' === r,
              o = k++;
            return e.first
              ? function (e, i, s) {
                  for (; (e = e[n]); ) if (1 === e.nodeType || a) return t(e, i, s);
                  return !1;
                }
              : function (e, i, l) {
                  var c,
                    h,
                    d,
                    u = [_, o];
                  if (l) {
                    for (; (e = e[n]); )
                      if ((1 === e.nodeType || a) && t(e, i, l)) return !0;
                  } else
                    for (; (e = e[n]); )
                      if (1 === e.nodeType || a)
                        if (
                          ((h =
                            (d = e[x] || (e[x] = {}))[e.uniqueID] ||
                            (d[e.uniqueID] = {})),
                          s && s === e.nodeName.toLowerCase())
                        )
                          e = e[n] || e;
                        else {
                          if ((c = h[r]) && c[0] === _ && c[1] === o)
                            return (u[2] = c[2]);
                          if (((h[r] = u), (u[2] = t(e, i, l)))) return !0;
                        }
                  return !1;
                };
          }
          function wt(t) {
            return t.length > 1
              ? function (e, i, n) {
                  for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                  return !0;
                }
              : t[0];
          }
          function _t(t, e, i, n, s) {
            for (var r, a = [], o = 0, l = t.length, c = null != e; o < l; o++)
              (r = t[o]) && ((i && !i(r, n, s)) || (a.push(r), c && e.push(o)));
            return a;
          }
          function kt(t, e, i, n, s, r) {
            return (
              n && !n[x] && (n = kt(n)),
              s && !s[x] && (s = kt(s, r)),
              ct(function (r, a, o, l) {
                var c,
                  h,
                  d,
                  u = [],
                  p = [],
                  f = a.length,
                  g =
                    r ||
                    (function (t, e, i) {
                      for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                      return i;
                    })(e || '*', o.nodeType ? [o] : o, []),
                  m = !t || (!r && e) ? g : _t(g, u, t, o, l),
                  v = i ? (s || (r ? t : f || n) ? [] : a) : m;
                if ((i && i(m, v, o, l), n))
                  for (c = _t(v, p), n(c, [], o, l), h = c.length; h--; )
                    (d = c[h]) && (v[p[h]] = !(m[p[h]] = d));
                if (r) {
                  if (s || t) {
                    if (s) {
                      for (c = [], h = v.length; h--; ) (d = v[h]) && c.push((m[h] = d));
                      s(null, (v = []), c, l);
                    }
                    for (h = v.length; h--; )
                      (d = v[h]) && (c = s ? I(r, d) : u[h]) > -1 && (r[c] = !(a[c] = d));
                  }
                } else (v = _t(v === a ? v.splice(f, v.length) : v)), s ? s(null, a, v, l) : O.apply(a, v);
              })
            );
          }
          function Ct(t) {
            for (
              var e,
                i,
                s,
                r = t.length,
                a = n.relative[t[0].type],
                o = a || n.relative[' '],
                l = a ? 1 : 0,
                h = xt(
                  function (t) {
                    return t === e;
                  },
                  o,
                  !0,
                ),
                d = xt(
                  function (t) {
                    return I(e, t) > -1;
                  },
                  o,
                  !0,
                ),
                u = [
                  function (t, i, n) {
                    var s =
                      (!a && (n || i !== c)) ||
                      ((e = i).nodeType ? h(t, i, n) : d(t, i, n));
                    return (e = null), s;
                  },
                ];
              l < r;
              l++
            )
              if ((i = n.relative[t[l].type])) u = [xt(wt(u), i)];
              else {
                if ((i = n.filter[t[l].type].apply(null, t[l].matches))[x]) {
                  for (s = ++l; s < r && !n.relative[t[s].type]; s++);
                  return kt(
                    l > 1 && wt(u),
                    l > 1 &&
                      yt(
                        t
                          .slice(0, l - 1)
                          .concat({ value: ' ' === t[l - 2].type ? '*' : '' }),
                      ).replace(V, '$1'),
                    i,
                    l < s && Ct(t.slice(l, s)),
                    s < r && Ct((t = t.slice(s))),
                    s < r && yt(t),
                  );
                }
                u.push(i);
              }
            return wt(u);
          }
          return (
            (bt.prototype = n.filters = n.pseudos),
            (n.setFilters = new bt()),
            (a = ot.tokenize =
              function (t, e) {
                var i,
                  s,
                  r,
                  a,
                  o,
                  l,
                  c,
                  h = S[t + ' '];
                if (h) return e ? 0 : h.slice(0);
                for (o = t, l = [], c = n.preFilter; o; ) {
                  for (a in ((i && !(s = B.exec(o))) ||
                    (s && (o = o.slice(s[0].length) || o), l.push((r = []))),
                  (i = !1),
                  (s = W.exec(o)) &&
                    ((i = s.shift()),
                    r.push({ value: i, type: s[0].replace(V, ' ') }),
                    (o = o.slice(i.length))),
                  n.filter))
                    !(s = U[a].exec(o)) ||
                      (c[a] && !(s = c[a](s))) ||
                      ((i = s.shift()),
                      r.push({ value: i, type: a, matches: s }),
                      (o = o.slice(i.length)));
                  if (!i) break;
                }
                return e ? o.length : o ? ot.error(t) : S(t, l).slice(0);
              }),
            (o = ot.compile =
              function (t, e) {
                var i,
                  s = [],
                  r = [],
                  o = T[t + ' '];
                if (!o) {
                  for (e || (e = a(t)), i = e.length; i--; )
                    (o = Ct(e[i]))[x] ? s.push(o) : r.push(o);
                  (o = T(
                    t,
                    (function (t, e) {
                      var i = e.length > 0,
                        s = t.length > 0,
                        r = function (r, a, o, l, h) {
                          var d,
                            f,
                            m,
                            v = 0,
                            b = '0',
                            y = r && [],
                            x = [],
                            w = c,
                            k = r || (s && n.find.TAG('*', h)),
                            C = (_ += null == w ? 1 : Math.random() || 0.1),
                            S = k.length;
                          for (
                            h && (c = a == p || a || h);
                            b !== S && null != (d = k[b]);
                            b++
                          ) {
                            if (s && d) {
                              for (
                                f = 0, a || d.ownerDocument == p || (u(d), (o = !g));
                                (m = t[f++]);

                              )
                                if (m(d, a || p, o)) {
                                  l.push(d);
                                  break;
                                }
                              h && (_ = C);
                            }
                            i && ((d = !m && d) && v--, r && y.push(d));
                          }
                          if (((v += b), i && b !== v)) {
                            for (f = 0; (m = e[f++]); ) m(y, x, a, o);
                            if (r) {
                              if (v > 0) for (; b--; ) y[b] || x[b] || (x[b] = A.call(l));
                              x = _t(x);
                            }
                            O.apply(l, x),
                              h &&
                                !r &&
                                x.length > 0 &&
                                v + e.length > 1 &&
                                ot.uniqueSort(l);
                          }
                          return h && ((_ = C), (c = w)), y;
                        };
                      return i ? ct(r) : r;
                    })(r, s),
                  )),
                    (o.selector = t);
                }
                return o;
              }),
            (l = ot.select =
              function (t, e, i, s) {
                var r,
                  l,
                  c,
                  h,
                  d,
                  u = 'function' == typeof t && t,
                  p = !s && a((t = u.selector || t));
                if (((i = i || []), 1 === p.length)) {
                  if (
                    (l = p[0] = p[0].slice(0)).length > 2 &&
                    'ID' === (c = l[0]).type &&
                    9 === e.nodeType &&
                    g &&
                    n.relative[l[1].type]
                  ) {
                    if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0]))
                      return i;
                    u && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                  }
                  for (
                    r = U.needsContext.test(t) ? 0 : l.length;
                    r-- && ((c = l[r]), !n.relative[(h = c.type)]);

                  )
                    if (
                      (d = n.find[h]) &&
                      (s = d(
                        c.matches[0].replace(et, it),
                        (tt.test(l[0].type) && vt(e.parentNode)) || e,
                      ))
                    ) {
                      if ((l.splice(r, 1), !(t = s.length && yt(l))))
                        return O.apply(i, s), i;
                      break;
                    }
                }
                return (
                  (u || o(t, p))(
                    s,
                    e,
                    !g,
                    i,
                    !e || (tt.test(t) && vt(e.parentNode)) || e,
                  ),
                  i
                );
              }),
            (i.sortStable = x.split('').sort(M).join('') === x),
            (i.detectDuplicates = !!d),
            u(),
            (i.sortDetached = ht(function (t) {
              return 1 & t.compareDocumentPosition(p.createElement('fieldset'));
            })),
            ht(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                '#' === t.firstChild.getAttribute('href')
              );
            }) ||
              dt('type|href|height|width', function (t, e, i) {
                if (!i) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
              }),
            (i.attributes &&
              ht(function (t) {
                return (
                  (t.innerHTML = '<input/>'),
                  t.firstChild.setAttribute('value', ''),
                  '' === t.firstChild.getAttribute('value')
                );
              })) ||
              dt('value', function (t, e, i) {
                if (!i && 'input' === t.nodeName.toLowerCase()) return t.defaultValue;
              }),
            ht(function (t) {
              return null == t.getAttribute('disabled');
            }) ||
              dt($, function (t, e, i) {
                var n;
                if (!i)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (n = t.getAttributeNode(e)) && n.specified
                    ? n.value
                    : null;
              }),
            ot
          );
        })(n);
        (C.find = T),
          (C.expr = T.selectors),
          (C.expr[':'] = C.expr.pseudos),
          (C.uniqueSort = C.unique = T.uniqueSort),
          (C.text = T.getText),
          (C.isXMLDoc = T.isXML),
          (C.contains = T.contains),
          (C.escapeSelector = T.escape);
        var D = function (t, e, i) {
            for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
              if (1 === t.nodeType) {
                if (s && C(t).is(i)) break;
                n.push(t);
              }
            return n;
          },
          M = function (t, e) {
            for (var i = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && i.push(t);
            return i;
          },
          E = C.expr.match.needsContext;
        function P(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(t, e, i) {
          return v(e)
            ? C.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i;
              })
            : e.nodeType
            ? C.grep(t, function (t) {
                return (t === e) !== i;
              })
            : 'string' != typeof e
            ? C.grep(t, function (t) {
                return h.call(e, t) > -1 !== i;
              })
            : C.filter(e, t, i);
        }
        (C.filter = function (t, e, i) {
          var n = e[0];
          return (
            i && (t = ':not(' + t + ')'),
            1 === e.length && 1 === n.nodeType
              ? C.find.matchesSelector(n, t)
                ? [n]
                : []
              : C.find.matches(
                  t,
                  C.grep(e, function (t) {
                    return 1 === t.nodeType;
                  }),
                )
          );
        }),
          C.fn.extend({
            find: function (t) {
              var e,
                i,
                n = this.length,
                s = this;
              if ('string' != typeof t)
                return this.pushStack(
                  C(t).filter(function () {
                    for (e = 0; e < n; e++) if (C.contains(s[e], this)) return !0;
                  }),
                );
              for (i = this.pushStack([]), e = 0; e < n; e++) C.find(t, s[e], i);
              return n > 1 ? C.uniqueSort(i) : i;
            },
            filter: function (t) {
              return this.pushStack(L(this, t || [], !1));
            },
            not: function (t) {
              return this.pushStack(L(this, t || [], !0));
            },
            is: function (t) {
              return !!L(this, 'string' == typeof t && E.test(t) ? C(t) : t || [], !1)
                .length;
            },
          });
        var O,
          N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((C.fn.init = function (t, e, i) {
          var n, s;
          if (!t) return this;
          if (((i = i || O), 'string' == typeof t)) {
            if (
              !(n =
                '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3
                  ? [null, t, null]
                  : N.exec(t)) ||
              (!n[1] && e)
            )
              return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
              if (
                ((e = e instanceof C ? e[0] : e),
                C.merge(
                  this,
                  C.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : y, !0),
                ),
                A.test(n[1]) && C.isPlainObject(e))
              )
                for (n in e) v(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
              return this;
            }
            return (
              (s = y.getElementById(n[2])) && ((this[0] = s), (this.length = 1)), this
            );
          }
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : v(t)
            ? void 0 !== i.ready
              ? i.ready(t)
              : t(C)
            : C.makeArray(t, this);
        }).prototype = C.fn),
          (O = C(y));
        var I = /^(?:parents|prev(?:Until|All))/,
          $ = { children: !0, contents: !0, next: !0, prev: !0 };
        function F(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType; );
          return t;
        }
        C.fn.extend({
          has: function (t) {
            var e = C(t, this),
              i = e.length;
            return this.filter(function () {
              for (var t = 0; t < i; t++) if (C.contains(this, e[t])) return !0;
            });
          },
          closest: function (t, e) {
            var i,
              n = 0,
              s = this.length,
              r = [],
              a = 'string' != typeof t && C(t);
            if (!E.test(t))
              for (; n < s; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                  if (
                    i.nodeType < 11 &&
                    (a
                      ? a.index(i) > -1
                      : 1 === i.nodeType && C.find.matchesSelector(i, t))
                  ) {
                    r.push(i);
                    break;
                  }
            return this.pushStack(r.length > 1 ? C.uniqueSort(r) : r);
          },
          index: function (t) {
            return t
              ? 'string' == typeof t
                ? h.call(C(t), this[0])
                : h.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (t, e) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
          },
          addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
          },
        }),
          C.each(
            {
              parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
              },
              parents: function (t) {
                return D(t, 'parentNode');
              },
              parentsUntil: function (t, e, i) {
                return D(t, 'parentNode', i);
              },
              next: function (t) {
                return F(t, 'nextSibling');
              },
              prev: function (t) {
                return F(t, 'previousSibling');
              },
              nextAll: function (t) {
                return D(t, 'nextSibling');
              },
              prevAll: function (t) {
                return D(t, 'previousSibling');
              },
              nextUntil: function (t, e, i) {
                return D(t, 'nextSibling', i);
              },
              prevUntil: function (t, e, i) {
                return D(t, 'previousSibling', i);
              },
              siblings: function (t) {
                return M((t.parentNode || {}).firstChild, t);
              },
              children: function (t) {
                return M(t.firstChild);
              },
              contents: function (t) {
                return null != t.contentDocument && a(t.contentDocument)
                  ? t.contentDocument
                  : (P(t, 'template') && (t = t.content || t), C.merge([], t.childNodes));
              },
            },
            function (t, e) {
              C.fn[t] = function (i, n) {
                var s = C.map(this, e, i);
                return (
                  'Until' !== t.slice(-5) && (n = i),
                  n && 'string' == typeof n && (s = C.filter(n, s)),
                  this.length > 1 && ($[t] || C.uniqueSort(s), I.test(t) && s.reverse()),
                  this.pushStack(s)
                );
              };
            },
          );
        var R = /[^\x20\t\r\n\f]+/g;
        function H(t) {
          return t;
        }
        function j(t) {
          throw t;
        }
        function z(t, e, i, n) {
          var s;
          try {
            t && v((s = t.promise))
              ? s.call(t).done(e).fail(i)
              : t && v((s = t.then))
              ? s.call(t, e, i)
              : e.apply(void 0, [t].slice(n));
          } catch (t) {
            i.apply(void 0, [t]);
          }
        }
        (C.Callbacks = function (t) {
          t =
            'string' == typeof t
              ? (function (t) {
                  var e = {};
                  return (
                    C.each(t.match(R) || [], function (t, i) {
                      e[i] = !0;
                    }),
                    e
                  );
                })(t)
              : C.extend({}, t);
          var e,
            i,
            n,
            s,
            r = [],
            a = [],
            o = -1,
            l = function () {
              for (s = s || t.once, n = e = !0; a.length; o = -1)
                for (i = a.shift(); ++o < r.length; )
                  !1 === r[o].apply(i[0], i[1]) &&
                    t.stopOnFalse &&
                    ((o = r.length), (i = !1));
              t.memory || (i = !1), (e = !1), s && (r = i ? [] : '');
            },
            c = {
              add: function () {
                return (
                  r &&
                    (i && !e && ((o = r.length - 1), a.push(i)),
                    (function e(i) {
                      C.each(i, function (i, n) {
                        v(n)
                          ? (t.unique && c.has(n)) || r.push(n)
                          : n && n.length && 'string' !== _(n) && e(n);
                      });
                    })(arguments),
                    i && !e && l()),
                  this
                );
              },
              remove: function () {
                return (
                  C.each(arguments, function (t, e) {
                    for (var i; (i = C.inArray(e, r, i)) > -1; )
                      r.splice(i, 1), i <= o && o--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? C.inArray(t, r) > -1 : r.length > 0;
              },
              empty: function () {
                return r && (r = []), this;
              },
              disable: function () {
                return (s = a = []), (r = i = ''), this;
              },
              disabled: function () {
                return !r;
              },
              lock: function () {
                return (s = a = []), i || e || (r = i = ''), this;
              },
              locked: function () {
                return !!s;
              },
              fireWith: function (t, i) {
                return (
                  s ||
                    ((i = [t, (i = i || []).slice ? i.slice() : i]), a.push(i), e || l()),
                  this
                );
              },
              fire: function () {
                return c.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!n;
              },
            };
          return c;
        }),
          C.extend({
            Deferred: function (t) {
              var e = [
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
                i = 'pending',
                s = {
                  state: function () {
                    return i;
                  },
                  always: function () {
                    return r.done(arguments).fail(arguments), this;
                  },
                  catch: function (t) {
                    return s.then(null, t);
                  },
                  pipe: function () {
                    var t = arguments;
                    return C.Deferred(function (i) {
                      C.each(e, function (e, n) {
                        var s = v(t[n[4]]) && t[n[4]];
                        r[n[1]](function () {
                          var t = s && s.apply(this, arguments);
                          t && v(t.promise)
                            ? t
                                .promise()
                                .progress(i.notify)
                                .done(i.resolve)
                                .fail(i.reject)
                            : i[n[0] + 'With'](this, s ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    }).promise();
                  },
                  then: function (t, i, s) {
                    var r = 0;
                    function a(t, e, i, s) {
                      return function () {
                        var o = this,
                          l = arguments,
                          c = function () {
                            var n, c;
                            if (!(t < r)) {
                              if ((n = i.apply(o, l)) === e.promise())
                                throw new TypeError('Thenable self-resolution');
                              (c =
                                n &&
                                ('object' == typeof n || 'function' == typeof n) &&
                                n.then),
                                v(c)
                                  ? s
                                    ? c.call(n, a(r, e, H, s), a(r, e, j, s))
                                    : (r++,
                                      c.call(
                                        n,
                                        a(r, e, H, s),
                                        a(r, e, j, s),
                                        a(r, e, H, e.notifyWith),
                                      ))
                                  : (i !== H && ((o = void 0), (l = [n])),
                                    (s || e.resolveWith)(o, l));
                            }
                          },
                          h = s
                            ? c
                            : function () {
                                try {
                                  c();
                                } catch (n) {
                                  C.Deferred.exceptionHook &&
                                    C.Deferred.exceptionHook(n, h.stackTrace),
                                    t + 1 >= r &&
                                      (i !== j && ((o = void 0), (l = [n])),
                                      e.rejectWith(o, l));
                                }
                              };
                        t
                          ? h()
                          : (C.Deferred.getStackHook &&
                              (h.stackTrace = C.Deferred.getStackHook()),
                            n.setTimeout(h));
                      };
                    }
                    return C.Deferred(function (n) {
                      e[0][3].add(a(0, n, v(s) ? s : H, n.notifyWith)),
                        e[1][3].add(a(0, n, v(t) ? t : H)),
                        e[2][3].add(a(0, n, v(i) ? i : j));
                    }).promise();
                  },
                  promise: function (t) {
                    return null != t ? C.extend(t, s) : s;
                  },
                },
                r = {};
              return (
                C.each(e, function (t, n) {
                  var a = n[2],
                    o = n[5];
                  (s[n[1]] = a.add),
                    o &&
                      a.add(
                        function () {
                          i = o;
                        },
                        e[3 - t][2].disable,
                        e[3 - t][3].disable,
                        e[0][2].lock,
                        e[0][3].lock,
                      ),
                    a.add(n[3].fire),
                    (r[n[0]] = function () {
                      return (
                        r[n[0] + 'With'](this === r ? void 0 : this, arguments), this
                      );
                    }),
                    (r[n[0] + 'With'] = a.fireWith);
                }),
                s.promise(r),
                t && t.call(r, r),
                r
              );
            },
            when: function (t) {
              var e = arguments.length,
                i = e,
                n = Array(i),
                s = o.call(arguments),
                r = C.Deferred(),
                a = function (t) {
                  return function (i) {
                    (n[t] = this),
                      (s[t] = arguments.length > 1 ? o.call(arguments) : i),
                      --e || r.resolveWith(n, s);
                  };
                };
              if (
                e <= 1 &&
                (z(t, r.done(a(i)).resolve, r.reject, !e),
                'pending' === r.state() || v(s[i] && s[i].then))
              )
                return r.then();
              for (; i--; ) z(s[i], a(i), r.reject);
              return r.promise();
            },
          });
        var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (C.Deferred.exceptionHook = function (t, e) {
          n.console &&
            n.console.warn &&
            t &&
            V.test(t.name) &&
            n.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, e);
        }),
          (C.readyException = function (t) {
            n.setTimeout(function () {
              throw t;
            });
          });
        var B = C.Deferred();
        function W() {
          y.removeEventListener('DOMContentLoaded', W),
            n.removeEventListener('load', W),
            C.ready();
        }
        (C.fn.ready = function (t) {
          return (
            B.then(t).catch(function (t) {
              C.readyException(t);
            }),
            this
          );
        }),
          C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
              (!0 === t ? --C.readyWait : C.isReady) ||
                ((C.isReady = !0),
                (!0 !== t && --C.readyWait > 0) || B.resolveWith(y, [C]));
            },
          }),
          (C.ready.then = B.then),
          'complete' === y.readyState ||
          ('loading' !== y.readyState && !y.documentElement.doScroll)
            ? n.setTimeout(C.ready)
            : (y.addEventListener('DOMContentLoaded', W), n.addEventListener('load', W));
        var q = function (t, e, i, n, s, r, a) {
            var o = 0,
              l = t.length,
              c = null == i;
            if ('object' === _(i)) for (o in ((s = !0), i)) q(t, e, o, i[o], !0, r, a);
            else if (
              void 0 !== n &&
              ((s = !0),
              v(n) || (a = !0),
              c &&
                (a
                  ? (e.call(t, n), (e = null))
                  : ((c = e),
                    (e = function (t, e, i) {
                      return c.call(C(t), i);
                    }))),
              e)
            )
              for (; o < l; o++) e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : r;
          },
          G = /^-ms-/,
          Y = /-([a-z])/g;
        function U(t, e) {
          return e.toUpperCase();
        }
        function X(t) {
          return t.replace(G, 'ms-').replace(Y, U);
        }
        var K = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function J() {
          this.expando = C.expando + J.uid++;
        }
        (J.uid = 1),
          (J.prototype = {
            cache: function (t) {
              var e = t[this.expando];
              return (
                e ||
                  ((e = {}),
                  K(t) &&
                    (t.nodeType
                      ? (t[this.expando] = e)
                      : Object.defineProperty(t, this.expando, {
                          value: e,
                          configurable: !0,
                        }))),
                e
              );
            },
            set: function (t, e, i) {
              var n,
                s = this.cache(t);
              if ('string' == typeof e) s[X(e)] = i;
              else for (n in e) s[X(n)] = e[n];
              return s;
            },
            get: function (t, e) {
              return void 0 === e
                ? this.cache(t)
                : t[this.expando] && t[this.expando][X(e)];
            },
            access: function (t, e, i) {
              return void 0 === e || (e && 'string' == typeof e && void 0 === i)
                ? this.get(t, e)
                : (this.set(t, e, i), void 0 !== i ? i : e);
            },
            remove: function (t, e) {
              var i,
                n = t[this.expando];
              if (void 0 !== n) {
                if (void 0 !== e) {
                  i = (e = Array.isArray(e)
                    ? e.map(X)
                    : (e = X(e)) in n
                    ? [e]
                    : e.match(R) || []).length;
                  for (; i--; ) delete n[e[i]];
                }
                (void 0 === e || C.isEmptyObject(n)) &&
                  (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
              }
            },
            hasData: function (t) {
              var e = t[this.expando];
              return void 0 !== e && !C.isEmptyObject(e);
            },
          });
        var Z = new J(),
          Q = new J(),
          tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          et = /[A-Z]/g;
        function it(t, e, i) {
          var n;
          if (void 0 === i && 1 === t.nodeType)
            if (
              ((n = 'data-' + e.replace(et, '-$&').toLowerCase()),
              'string' == typeof (i = t.getAttribute(n)))
            ) {
              try {
                i = (function (t) {
                  return (
                    'true' === t ||
                    ('false' !== t &&
                      ('null' === t
                        ? null
                        : t === +t + ''
                        ? +t
                        : tt.test(t)
                        ? JSON.parse(t)
                        : t))
                  );
                })(i);
              } catch (t) {}
              Q.set(t, e, i);
            } else i = void 0;
          return i;
        }
        C.extend({
          hasData: function (t) {
            return Q.hasData(t) || Z.hasData(t);
          },
          data: function (t, e, i) {
            return Q.access(t, e, i);
          },
          removeData: function (t, e) {
            Q.remove(t, e);
          },
          _data: function (t, e, i) {
            return Z.access(t, e, i);
          },
          _removeData: function (t, e) {
            Z.remove(t, e);
          },
        }),
          C.fn.extend({
            data: function (t, e) {
              var i,
                n,
                s,
                r = this[0],
                a = r && r.attributes;
              if (void 0 === t) {
                if (
                  this.length &&
                  ((s = Q.get(r)), 1 === r.nodeType && !Z.get(r, 'hasDataAttrs'))
                ) {
                  for (i = a.length; i--; )
                    a[i] &&
                      0 === (n = a[i].name).indexOf('data-') &&
                      ((n = X(n.slice(5))), it(r, n, s[n]));
                  Z.set(r, 'hasDataAttrs', !0);
                }
                return s;
              }
              return 'object' == typeof t
                ? this.each(function () {
                    Q.set(this, t);
                  })
                : q(
                    this,
                    function (e) {
                      var i;
                      if (r && void 0 === e)
                        return void 0 !== (i = Q.get(r, t)) || void 0 !== (i = it(r, t))
                          ? i
                          : void 0;
                      this.each(function () {
                        Q.set(this, t, e);
                      });
                    },
                    null,
                    e,
                    arguments.length > 1,
                    null,
                    !0,
                  );
            },
            removeData: function (t) {
              return this.each(function () {
                Q.remove(this, t);
              });
            },
          }),
          C.extend({
            queue: function (t, e, i) {
              var n;
              if (t)
                return (
                  (e = (e || 'fx') + 'queue'),
                  (n = Z.get(t, e)),
                  i &&
                    (!n || Array.isArray(i)
                      ? (n = Z.access(t, e, C.makeArray(i)))
                      : n.push(i)),
                  n || []
                );
            },
            dequeue: function (t, e) {
              e = e || 'fx';
              var i = C.queue(t, e),
                n = i.length,
                s = i.shift(),
                r = C._queueHooks(t, e);
              'inprogress' === s && ((s = i.shift()), n--),
                s &&
                  ('fx' === e && i.unshift('inprogress'),
                  delete r.stop,
                  s.call(
                    t,
                    function () {
                      C.dequeue(t, e);
                    },
                    r,
                  )),
                !n && r && r.empty.fire();
            },
            _queueHooks: function (t, e) {
              var i = e + 'queueHooks';
              return (
                Z.get(t, i) ||
                Z.access(t, i, {
                  empty: C.Callbacks('once memory').add(function () {
                    Z.remove(t, [e + 'queue', i]);
                  }),
                })
              );
            },
          }),
          C.fn.extend({
            queue: function (t, e) {
              var i = 2;
              return (
                'string' != typeof t && ((e = t), (t = 'fx'), i--),
                arguments.length < i
                  ? C.queue(this[0], t)
                  : void 0 === e
                  ? this
                  : this.each(function () {
                      var i = C.queue(this, t, e);
                      C._queueHooks(this, t),
                        'fx' === t && 'inprogress' !== i[0] && C.dequeue(this, t);
                    })
              );
            },
            dequeue: function (t) {
              return this.each(function () {
                C.dequeue(this, t);
              });
            },
            clearQueue: function (t) {
              return this.queue(t || 'fx', []);
            },
            promise: function (t, e) {
              var i,
                n = 1,
                s = C.Deferred(),
                r = this,
                a = this.length,
                o = function () {
                  --n || s.resolveWith(r, [r]);
                };
              for ('string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx'; a--; )
                (i = Z.get(r[a], t + 'queueHooks')) && i.empty && (n++, i.empty.add(o));
              return o(), s.promise(e);
            },
          });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          st = new RegExp('^(?:([+-])=|)(' + nt + ')([a-z%]*)$', 'i'),
          rt = ['Top', 'Right', 'Bottom', 'Left'],
          at = y.documentElement,
          ot = function (t) {
            return C.contains(t.ownerDocument, t);
          },
          lt = { composed: !0 };
        at.getRootNode &&
          (ot = function (t) {
            return (
              C.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
            );
          });
        var ct = function (t, e) {
          return (
            'none' === (t = e || t).style.display ||
            ('' === t.style.display && ot(t) && 'none' === C.css(t, 'display'))
          );
        };
        function ht(t, e, i, n) {
          var s,
            r,
            a = 20,
            o = n
              ? function () {
                  return n.cur();
                }
              : function () {
                  return C.css(t, e, '');
                },
            l = o(),
            c = (i && i[3]) || (C.cssNumber[e] ? '' : 'px'),
            h =
              t.nodeType &&
              (C.cssNumber[e] || ('px' !== c && +l)) &&
              st.exec(C.css(t, e));
          if (h && h[3] !== c) {
            for (l /= 2, c = c || h[3], h = +l || 1; a--; )
              C.style(t, e, h + c),
                (1 - r) * (1 - (r = o() / l || 0.5)) <= 0 && (a = 0),
                (h /= r);
            (h *= 2), C.style(t, e, h + c), (i = i || []);
          }
          return (
            i &&
              ((h = +h || +l || 0),
              (s = i[1] ? h + (i[1] + 1) * i[2] : +i[2]),
              n && ((n.unit = c), (n.start = h), (n.end = s))),
            s
          );
        }
        var dt = {};
        function ut(t) {
          var e,
            i = t.ownerDocument,
            n = t.nodeName,
            s = dt[n];
          return (
            s ||
            ((e = i.body.appendChild(i.createElement(n))),
            (s = C.css(e, 'display')),
            e.parentNode.removeChild(e),
            'none' === s && (s = 'block'),
            (dt[n] = s),
            s)
          );
        }
        function pt(t, e) {
          for (var i, n, s = [], r = 0, a = t.length; r < a; r++)
            (n = t[r]).style &&
              ((i = n.style.display),
              e
                ? ('none' === i &&
                    ((s[r] = Z.get(n, 'display') || null),
                    s[r] || (n.style.display = '')),
                  '' === n.style.display && ct(n) && (s[r] = ut(n)))
                : 'none' !== i && ((s[r] = 'none'), Z.set(n, 'display', i)));
          for (r = 0; r < a; r++) null != s[r] && (t[r].style.display = s[r]);
          return t;
        }
        C.fn.extend({
          show: function () {
            return pt(this, !0);
          },
          hide: function () {
            return pt(this);
          },
          toggle: function (t) {
            return 'boolean' == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ct(this) ? C(this).show() : C(this).hide();
                });
          },
        });
        var ft,
          gt,
          mt = /^(?:checkbox|radio)$/i,
          vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          bt = /^$|^module$|\/(?:java|ecma)script/i;
        (ft = y.createDocumentFragment().appendChild(y.createElement('div'))),
          (gt = y.createElement('input')).setAttribute('type', 'radio'),
          gt.setAttribute('checked', 'checked'),
          gt.setAttribute('name', 't'),
          ft.appendChild(gt),
          (m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ft.innerHTML = '<textarea>x</textarea>'),
          (m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue),
          (ft.innerHTML = '<option></option>'),
          (m.option = !!ft.lastChild);
        var yt = {
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', ''],
        };
        function xt(t, e) {
          var i;
          return (
            (i =
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e || '*')
                : void 0 !== t.querySelectorAll
                ? t.querySelectorAll(e || '*')
                : []),
            void 0 === e || (e && P(t, e)) ? C.merge([t], i) : i
          );
        }
        function wt(t, e) {
          for (var i = 0, n = t.length; i < n; i++)
            Z.set(t[i], 'globalEval', !e || Z.get(e[i], 'globalEval'));
        }
        (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
          (yt.th = yt.td),
          m.option ||
            (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", '</select>']);
        var _t = /<|&#?\w+;/;
        function kt(t, e, i, n, s) {
          for (
            var r,
              a,
              o,
              l,
              c,
              h,
              d = e.createDocumentFragment(),
              u = [],
              p = 0,
              f = t.length;
            p < f;
            p++
          )
            if ((r = t[p]) || 0 === r)
              if ('object' === _(r)) C.merge(u, r.nodeType ? [r] : r);
              else if (_t.test(r)) {
                for (
                  a = a || d.appendChild(e.createElement('div')),
                    o = (vt.exec(r) || ['', ''])[1].toLowerCase(),
                    l = yt[o] || yt._default,
                    a.innerHTML = l[1] + C.htmlPrefilter(r) + l[2],
                    h = l[0];
                  h--;

                )
                  a = a.lastChild;
                C.merge(u, a.childNodes), ((a = d.firstChild).textContent = '');
              } else u.push(e.createTextNode(r));
          for (d.textContent = '', p = 0; (r = u[p++]); )
            if (n && C.inArray(r, n) > -1) s && s.push(r);
            else if (((c = ot(r)), (a = xt(d.appendChild(r), 'script')), c && wt(a), i))
              for (h = 0; (r = a[h++]); ) bt.test(r.type || '') && i.push(r);
          return d;
        }
        var Ct = /^([^.]*)(?:\.(.+)|)/;
        function St() {
          return !0;
        }
        function Tt() {
          return !1;
        }
        function Dt(t, e) {
          return (
            (t ===
              (function () {
                try {
                  return y.activeElement;
                } catch (t) {}
              })()) ==
            ('focus' === e)
          );
        }
        function Mt(t, e, i, n, s, r) {
          var a, o;
          if ('object' == typeof e) {
            for (o in ('string' != typeof i && ((n = n || i), (i = void 0)), e))
              Mt(t, o, i, n, e[o], r);
            return t;
          }
          if (
            (null == n && null == s
              ? ((s = i), (n = i = void 0))
              : null == s &&
                ('string' == typeof i
                  ? ((s = n), (n = void 0))
                  : ((s = n), (n = i), (i = void 0))),
            !1 === s)
          )
            s = Tt;
          else if (!s) return t;
          return (
            1 === r &&
              ((a = s),
              (s = function (t) {
                return C().off(t), a.apply(this, arguments);
              }),
              (s.guid = a.guid || (a.guid = C.guid++))),
            t.each(function () {
              C.event.add(this, e, s, n, i);
            })
          );
        }
        function Et(t, e, i) {
          i
            ? (Z.set(t, e, !1),
              C.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                  var n,
                    s,
                    r = Z.get(this, e);
                  if (1 & t.isTrigger && this[e]) {
                    if (r.length)
                      (C.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (
                      ((r = o.call(arguments)),
                      Z.set(this, e, r),
                      (n = i(this, e)),
                      this[e](),
                      r !== (s = Z.get(this, e)) || n ? Z.set(this, e, !1) : (s = {}),
                      r !== s)
                    )
                      return (
                        t.stopImmediatePropagation(), t.preventDefault(), s && s.value
                      );
                  } else
                    r.length &&
                      (Z.set(this, e, {
                        value: C.event.trigger(
                          C.extend(r[0], C.Event.prototype),
                          r.slice(1),
                          this,
                        ),
                      }),
                      t.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(t, e) && C.event.add(t, e, St);
        }
        (C.event = {
          global: {},
          add: function (t, e, i, n, s) {
            var r,
              a,
              o,
              l,
              c,
              h,
              d,
              u,
              p,
              f,
              g,
              m = Z.get(t);
            if (K(t))
              for (
                i.handler && ((i = (r = i).handler), (s = r.selector)),
                  s && C.find.matchesSelector(at, s),
                  i.guid || (i.guid = C.guid++),
                  (l = m.events) || (l = m.events = Object.create(null)),
                  (a = m.handle) ||
                    (a = m.handle =
                      function (e) {
                        return void 0 !== C && C.event.triggered !== e.type
                          ? C.event.dispatch.apply(t, arguments)
                          : void 0;
                      }),
                  c = (e = (e || '').match(R) || ['']).length;
                c--;

              )
                (p = g = (o = Ct.exec(e[c]) || [])[1]),
                  (f = (o[2] || '').split('.').sort()),
                  p &&
                    ((d = C.event.special[p] || {}),
                    (p = (s ? d.delegateType : d.bindType) || p),
                    (d = C.event.special[p] || {}),
                    (h = C.extend(
                      {
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && C.expr.match.needsContext.test(s),
                        namespace: f.join('.'),
                      },
                      r,
                    )),
                    (u = l[p]) ||
                      (((u = l[p] = []).delegateCount = 0),
                      (d.setup && !1 !== d.setup.call(t, n, f, a)) ||
                        (t.addEventListener && t.addEventListener(p, a))),
                    d.add &&
                      (d.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)),
                    s ? u.splice(u.delegateCount++, 0, h) : u.push(h),
                    (C.event.global[p] = !0));
          },
          remove: function (t, e, i, n, s) {
            var r,
              a,
              o,
              l,
              c,
              h,
              d,
              u,
              p,
              f,
              g,
              m = Z.hasData(t) && Z.get(t);
            if (m && (l = m.events)) {
              for (c = (e = (e || '').match(R) || ['']).length; c--; )
                if (
                  ((p = g = (o = Ct.exec(e[c]) || [])[1]),
                  (f = (o[2] || '').split('.').sort()),
                  p)
                ) {
                  for (
                    d = C.event.special[p] || {},
                      u = l[(p = (n ? d.delegateType : d.bindType) || p)] || [],
                      o =
                        o[2] &&
                        new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                      a = r = u.length;
                    r--;

                  )
                    (h = u[r]),
                      (!s && g !== h.origType) ||
                        (i && i.guid !== h.guid) ||
                        (o && !o.test(h.namespace)) ||
                        (n && n !== h.selector && ('**' !== n || !h.selector)) ||
                        (u.splice(r, 1),
                        h.selector && u.delegateCount--,
                        d.remove && d.remove.call(t, h));
                  a &&
                    !u.length &&
                    ((d.teardown && !1 !== d.teardown.call(t, f, m.handle)) ||
                      C.removeEvent(t, p, m.handle),
                    delete l[p]);
                } else for (p in l) C.event.remove(t, p + e[c], i, n, !0);
              C.isEmptyObject(l) && Z.remove(t, 'handle events');
            }
          },
          dispatch: function (t) {
            var e,
              i,
              n,
              s,
              r,
              a,
              o = new Array(arguments.length),
              l = C.event.fix(t),
              c = (Z.get(this, 'events') || Object.create(null))[l.type] || [],
              h = C.event.special[l.type] || {};
            for (o[0] = l, e = 1; e < arguments.length; e++) o[e] = arguments[e];
            if (
              ((l.delegateTarget = this),
              !h.preDispatch || !1 !== h.preDispatch.call(this, l))
            ) {
              for (
                a = C.event.handlers.call(this, l, c), e = 0;
                (s = a[e++]) && !l.isPropagationStopped();

              )
                for (
                  l.currentTarget = s.elem, i = 0;
                  (r = s.handlers[i++]) && !l.isImmediatePropagationStopped();

                )
                  (l.rnamespace &&
                    !1 !== r.namespace &&
                    !l.rnamespace.test(r.namespace)) ||
                    ((l.handleObj = r),
                    (l.data = r.data),
                    void 0 !==
                      (n = (
                        (C.event.special[r.origType] || {}).handle || r.handler
                      ).apply(s.elem, o)) &&
                      !1 === (l.result = n) &&
                      (l.preventDefault(), l.stopPropagation()));
              return h.postDispatch && h.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (t, e) {
            var i,
              n,
              s,
              r,
              a,
              o = [],
              l = e.delegateCount,
              c = t.target;
            if (l && c.nodeType && !('click' === t.type && t.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (1 === c.nodeType && ('click' !== t.type || !0 !== c.disabled)) {
                  for (r = [], a = {}, i = 0; i < l; i++)
                    void 0 === a[(s = (n = e[i]).selector + ' ')] &&
                      (a[s] = n.needsContext
                        ? C(s, this).index(c) > -1
                        : C.find(s, this, null, [c]).length),
                      a[s] && r.push(n);
                  r.length && o.push({ elem: c, handlers: r });
                }
            return (
              (c = this), l < e.length && o.push({ elem: c, handlers: e.slice(l) }), o
            );
          },
          addProp: function (t, e) {
            Object.defineProperty(C.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: v(e)
                ? function () {
                    if (this.originalEvent) return e(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[t];
                  },
              set: function (e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function (t) {
            return t[C.expando] ? t : new C.Event(t);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (t) {
                var e = this || t;
                return (
                  mt.test(e.type) && e.click && P(e, 'input') && Et(e, 'click', St), !1
                );
              },
              trigger: function (t) {
                var e = this || t;
                return mt.test(e.type) && e.click && P(e, 'input') && Et(e, 'click'), !0;
              },
              _default: function (t) {
                var e = t.target;
                return (
                  (mt.test(e.type) && e.click && P(e, 'input') && Z.get(e, 'click')) ||
                  P(e, 'a')
                );
              },
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result &&
                  t.originalEvent &&
                  (t.originalEvent.returnValue = t.result);
              },
            },
          },
        }),
          (C.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i);
          }),
          (C.Event = function (t, e) {
            if (!(this instanceof C.Event)) return new C.Event(t, e);
            t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? St
                    : Tt),
                (this.target =
                  t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                (this.currentTarget = t.currentTarget),
                (this.relatedTarget = t.relatedTarget))
              : (this.type = t),
              e && C.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              (this[C.expando] = !0);
          }),
          (C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Tt,
            isPropagationStopped: Tt,
            isImmediatePropagationStopped: Tt,
            isSimulated: !1,
            preventDefault: function () {
              var t = this.originalEvent;
              (this.isDefaultPrevented = St),
                t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
              var t = this.originalEvent;
              (this.isPropagationStopped = St),
                t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var t = this.originalEvent;
              (this.isImmediatePropagationStopped = St),
                t && !this.isSimulated && t.stopImmediatePropagation(),
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
          C.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
            C.event.special[t] = {
              setup: function () {
                return Et(this, t, Dt), !1;
              },
              trigger: function () {
                return Et(this, t), !0;
              },
              _default: function () {
                return !0;
              },
              delegateType: e,
            };
          }),
          C.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout',
            },
            function (t, e) {
              C.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                  var i,
                    n = this,
                    s = t.relatedTarget,
                    r = t.handleObj;
                  return (
                    (s && (s === n || C.contains(n, s))) ||
                      ((t.type = r.origType),
                      (i = r.handler.apply(this, arguments)),
                      (t.type = e)),
                    i
                  );
                },
              };
            },
          ),
          C.fn.extend({
            on: function (t, e, i, n) {
              return Mt(this, t, e, i, n);
            },
            one: function (t, e, i, n) {
              return Mt(this, t, e, i, n, 1);
            },
            off: function (t, e, i) {
              var n, s;
              if (t && t.preventDefault && t.handleObj)
                return (
                  (n = t.handleObj),
                  C(t.delegateTarget).off(
                    n.namespace ? n.origType + '.' + n.namespace : n.origType,
                    n.selector,
                    n.handler,
                  ),
                  this
                );
              if ('object' == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this;
              }
              return (
                (!1 !== e && 'function' != typeof e) || ((i = e), (e = void 0)),
                !1 === i && (i = Tt),
                this.each(function () {
                  C.event.remove(this, t, i, e);
                })
              );
            },
          });
        var Pt = /<script|<style|<link/i,
          At = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ot(t, e) {
          return (
            (P(t, 'table') &&
              P(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
              C(t).children('tbody')[0]) ||
            t
          );
        }
        function Nt(t) {
          return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
        }
        function It(t) {
          return (
            'true/' === (t.type || '').slice(0, 5)
              ? (t.type = t.type.slice(5))
              : t.removeAttribute('type'),
            t
          );
        }
        function $t(t, e) {
          var i, n, s, r, a, o;
          if (1 === e.nodeType) {
            if (Z.hasData(t) && (o = Z.get(t).events))
              for (s in (Z.remove(e, 'handle events'), o))
                for (i = 0, n = o[s].length; i < n; i++) C.event.add(e, s, o[s][i]);
            Q.hasData(t) && ((r = Q.access(t)), (a = C.extend({}, r)), Q.set(e, a));
          }
        }
        function Ft(t, e) {
          var i = e.nodeName.toLowerCase();
          'input' === i && mt.test(t.type)
            ? (e.checked = t.checked)
            : ('input' !== i && 'textarea' !== i) || (e.defaultValue = t.defaultValue);
        }
        function Rt(t, e, i, n) {
          e = l(e);
          var s,
            r,
            a,
            o,
            c,
            h,
            d = 0,
            u = t.length,
            p = u - 1,
            f = e[0],
            g = v(f);
          if (g || (u > 1 && 'string' == typeof f && !m.checkClone && At.test(f)))
            return t.each(function (s) {
              var r = t.eq(s);
              g && (e[0] = f.call(this, s, r.html())), Rt(r, e, i, n);
            });
          if (
            u &&
            ((r = (s = kt(e, t[0].ownerDocument, !1, t, n)).firstChild),
            1 === s.childNodes.length && (s = r),
            r || n)
          ) {
            for (o = (a = C.map(xt(s, 'script'), Nt)).length; d < u; d++)
              (c = s),
                d !== p && ((c = C.clone(c, !0, !0)), o && C.merge(a, xt(c, 'script'))),
                i.call(t[d], c, d);
            if (o)
              for (h = a[a.length - 1].ownerDocument, C.map(a, It), d = 0; d < o; d++)
                (c = a[d]),
                  bt.test(c.type || '') &&
                    !Z.access(c, 'globalEval') &&
                    C.contains(h, c) &&
                    (c.src && 'module' !== (c.type || '').toLowerCase()
                      ? C._evalUrl &&
                        !c.noModule &&
                        C._evalUrl(
                          c.src,
                          { nonce: c.nonce || c.getAttribute('nonce') },
                          h,
                        )
                      : w(c.textContent.replace(Lt, ''), c, h));
          }
          return t;
        }
        function Ht(t, e, i) {
          for (var n, s = e ? C.filter(e, t) : t, r = 0; null != (n = s[r]); r++)
            i || 1 !== n.nodeType || C.cleanData(xt(n)),
              n.parentNode &&
                (i && ot(n) && wt(xt(n, 'script')), n.parentNode.removeChild(n));
          return t;
        }
        C.extend({
          htmlPrefilter: function (t) {
            return t;
          },
          clone: function (t, e, i) {
            var n,
              s,
              r,
              a,
              o = t.cloneNode(!0),
              l = ot(t);
            if (
              !(
                m.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                C.isXMLDoc(t)
              )
            )
              for (a = xt(o), n = 0, s = (r = xt(t)).length; n < s; n++) Ft(r[n], a[n]);
            if (e)
              if (i)
                for (r = r || xt(t), a = a || xt(o), n = 0, s = r.length; n < s; n++)
                  $t(r[n], a[n]);
              else $t(t, o);
            return (a = xt(o, 'script')).length > 0 && wt(a, !l && xt(t, 'script')), o;
          },
          cleanData: function (t) {
            for (var e, i, n, s = C.event.special, r = 0; void 0 !== (i = t[r]); r++)
              if (K(i)) {
                if ((e = i[Z.expando])) {
                  if (e.events)
                    for (n in e.events)
                      s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
                  i[Z.expando] = void 0;
                }
                i[Q.expando] && (i[Q.expando] = void 0);
              }
          },
        }),
          C.fn.extend({
            detach: function (t) {
              return Ht(this, t, !0);
            },
            remove: function (t) {
              return Ht(this, t);
            },
            text: function (t) {
              return q(
                this,
                function (t) {
                  return void 0 === t
                    ? C.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = t);
                      });
                },
                null,
                t,
                arguments.length,
              );
            },
            append: function () {
              return Rt(this, arguments, function (t) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                  Ot(this, t).appendChild(t);
              });
            },
            prepend: function () {
              return Rt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var e = Ot(this, t);
                  e.insertBefore(t, e.firstChild);
                }
              });
            },
            before: function () {
              return Rt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
              });
            },
            after: function () {
              return Rt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
              });
            },
            empty: function () {
              for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (C.cleanData(xt(t, !1)), (t.textContent = ''));
              return this;
            },
            clone: function (t, e) {
              return (
                (t = null != t && t),
                (e = null == e ? t : e),
                this.map(function () {
                  return C.clone(this, t, e);
                })
              );
            },
            html: function (t) {
              return q(
                this,
                function (t) {
                  var e = this[0] || {},
                    i = 0,
                    n = this.length;
                  if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                  if (
                    'string' == typeof t &&
                    !Pt.test(t) &&
                    !yt[(vt.exec(t) || ['', ''])[1].toLowerCase()]
                  ) {
                    t = C.htmlPrefilter(t);
                    try {
                      for (; i < n; i++)
                        1 === (e = this[i] || {}).nodeType &&
                          (C.cleanData(xt(e, !1)), (e.innerHTML = t));
                      e = 0;
                    } catch (t) {}
                  }
                  e && this.empty().append(t);
                },
                null,
                t,
                arguments.length,
              );
            },
            replaceWith: function () {
              var t = [];
              return Rt(
                this,
                arguments,
                function (e) {
                  var i = this.parentNode;
                  C.inArray(this, t) < 0 &&
                    (C.cleanData(xt(this)), i && i.replaceChild(e, this));
                },
                t,
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
            function (t, e) {
              C.fn[t] = function (t) {
                for (var i, n = [], s = C(t), r = s.length - 1, a = 0; a <= r; a++)
                  (i = a === r ? this : this.clone(!0)),
                    C(s[a])[e](i),
                    c.apply(n, i.get());
                return this.pushStack(n);
              };
            },
          );
        var jt = new RegExp('^(' + nt + ')(?!px)[a-z%]+$', 'i'),
          zt = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e && e.opener) || (e = n), e.getComputedStyle(t);
          },
          Vt = function (t, e, i) {
            var n,
              s,
              r = {};
            for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
            for (s in ((n = i.call(t)), e)) t.style[s] = r[s];
            return n;
          },
          Bt = new RegExp(rt.join('|'), 'i');
        function Wt(t, e, i) {
          var n,
            s,
            r,
            a,
            o = t.style;
          return (
            (i = i || zt(t)) &&
              ('' !== (a = i.getPropertyValue(e) || i[e]) || ot(t) || (a = C.style(t, e)),
              !m.pixelBoxStyles() &&
                jt.test(a) &&
                Bt.test(e) &&
                ((n = o.width),
                (s = o.minWidth),
                (r = o.maxWidth),
                (o.minWidth = o.maxWidth = o.width = a),
                (a = i.width),
                (o.width = n),
                (o.minWidth = s),
                (o.maxWidth = r))),
            void 0 !== a ? a + '' : a
          );
        }
        function qt(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function t() {
            if (h) {
              (c.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                (h.style.cssText =
                  'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                at.appendChild(c).appendChild(h);
              var t = n.getComputedStyle(h);
              (i = '1%' !== t.top),
                (l = 12 === e(t.marginLeft)),
                (h.style.right = '60%'),
                (a = 36 === e(t.right)),
                (s = 36 === e(t.width)),
                (h.style.position = 'absolute'),
                (r = 12 === e(h.offsetWidth / 3)),
                at.removeChild(c),
                (h = null);
            }
          }
          function e(t) {
            return Math.round(parseFloat(t));
          }
          var i,
            s,
            r,
            a,
            o,
            l,
            c = y.createElement('div'),
            h = y.createElement('div');
          h.style &&
            ((h.style.backgroundClip = 'content-box'),
            (h.cloneNode(!0).style.backgroundClip = ''),
            (m.clearCloneStyle = 'content-box' === h.style.backgroundClip),
            C.extend(m, {
              boxSizingReliable: function () {
                return t(), s;
              },
              pixelBoxStyles: function () {
                return t(), a;
              },
              pixelPosition: function () {
                return t(), i;
              },
              reliableMarginLeft: function () {
                return t(), l;
              },
              scrollboxSize: function () {
                return t(), r;
              },
              reliableTrDimensions: function () {
                var t, e, i, s;
                return (
                  null == o &&
                    ((t = y.createElement('table')),
                    (e = y.createElement('tr')),
                    (i = y.createElement('div')),
                    (t.style.cssText =
                      'position:absolute;left:-11111px;border-collapse:separate'),
                    (e.style.cssText = 'border:1px solid'),
                    (e.style.height = '1px'),
                    (i.style.height = '9px'),
                    (i.style.display = 'block'),
                    at.appendChild(t).appendChild(e).appendChild(i),
                    (s = n.getComputedStyle(e)),
                    (o =
                      parseInt(s.height, 10) +
                        parseInt(s.borderTopWidth, 10) +
                        parseInt(s.borderBottomWidth, 10) ===
                      e.offsetHeight),
                    at.removeChild(t)),
                  o
                );
              },
            }));
        })();
        var Gt = ['Webkit', 'Moz', 'ms'],
          Yt = y.createElement('div').style,
          Ut = {};
        function Xt(t) {
          return (
            C.cssProps[t] ||
            Ut[t] ||
            (t in Yt
              ? t
              : (Ut[t] =
                  (function (t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), i = Gt.length; i--; )
                      if ((t = Gt[i] + e) in Yt) return t;
                  })(t) || t))
          );
        }
        var Kt = /^(none|table(?!-c[ea]).+)/,
          Jt = /^--/,
          Zt = { position: 'absolute', visibility: 'hidden', display: 'block' },
          Qt = { letterSpacing: '0', fontWeight: '400' };
        function te(t, e, i) {
          var n = st.exec(e);
          return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || 'px') : e;
        }
        function ee(t, e, i, n, s, r) {
          var a = 'width' === e ? 1 : 0,
            o = 0,
            l = 0;
          if (i === (n ? 'border' : 'content')) return 0;
          for (; a < 4; a += 2)
            'margin' === i && (l += C.css(t, i + rt[a], !0, s)),
              n
                ? ('content' === i && (l -= C.css(t, 'padding' + rt[a], !0, s)),
                  'margin' !== i && (l -= C.css(t, 'border' + rt[a] + 'Width', !0, s)))
                : ((l += C.css(t, 'padding' + rt[a], !0, s)),
                  'padding' !== i
                    ? (l += C.css(t, 'border' + rt[a] + 'Width', !0, s))
                    : (o += C.css(t, 'border' + rt[a] + 'Width', !0, s)));
          return (
            !n &&
              r >= 0 &&
              (l +=
                Math.max(
                  0,
                  Math.ceil(
                    t['offset' + e[0].toUpperCase() + e.slice(1)] - r - l - o - 0.5,
                  ),
                ) || 0),
            l
          );
        }
        function ie(t, e, i) {
          var n = zt(t),
            s =
              (!m.boxSizingReliable() || i) &&
              'border-box' === C.css(t, 'boxSizing', !1, n),
            r = s,
            a = Wt(t, e, n),
            o = 'offset' + e[0].toUpperCase() + e.slice(1);
          if (jt.test(a)) {
            if (!i) return a;
            a = 'auto';
          }
          return (
            ((!m.boxSizingReliable() && s) ||
              (!m.reliableTrDimensions() && P(t, 'tr')) ||
              'auto' === a ||
              (!parseFloat(a) && 'inline' === C.css(t, 'display', !1, n))) &&
              t.getClientRects().length &&
              ((s = 'border-box' === C.css(t, 'boxSizing', !1, n)),
              (r = o in t) && (a = t[o])),
            (a = parseFloat(a) || 0) +
              ee(t, e, i || (s ? 'border' : 'content'), r, n, a) +
              'px'
          );
        }
        function ne(t, e, i, n, s) {
          return new ne.prototype.init(t, e, i, n, s);
        }
        C.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) {
                  var i = Wt(t, 'opacity');
                  return '' === i ? '1' : i;
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
          style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var s,
                r,
                a,
                o = X(e),
                l = Jt.test(e),
                c = t.style;
              if ((l || (e = Xt(o)), (a = C.cssHooks[e] || C.cssHooks[o]), void 0 === i))
                return a && 'get' in a && void 0 !== (s = a.get(t, !1, n)) ? s : c[e];
              'string' == (r = typeof i) &&
                (s = st.exec(i)) &&
                s[1] &&
                ((i = ht(t, e, s)), (r = 'number')),
                null != i &&
                  i == i &&
                  ('number' !== r ||
                    l ||
                    (i += (s && s[3]) || (C.cssNumber[o] ? '' : 'px')),
                  m.clearCloneStyle ||
                    '' !== i ||
                    0 !== e.indexOf('background') ||
                    (c[e] = 'inherit'),
                  (a && 'set' in a && void 0 === (i = a.set(t, i, n))) ||
                    (l ? c.setProperty(e, i) : (c[e] = i)));
            }
          },
          css: function (t, e, i, n) {
            var s,
              r,
              a,
              o = X(e);
            return (
              Jt.test(e) || (e = Xt(o)),
              (a = C.cssHooks[e] || C.cssHooks[o]) && 'get' in a && (s = a.get(t, !0, i)),
              void 0 === s && (s = Wt(t, e, n)),
              'normal' === s && e in Qt && (s = Qt[e]),
              '' === i || i
                ? ((r = parseFloat(s)), !0 === i || isFinite(r) ? r || 0 : s)
                : s
            );
          },
        }),
          C.each(['height', 'width'], function (t, e) {
            C.cssHooks[e] = {
              get: function (t, i, n) {
                if (i)
                  return !Kt.test(C.css(t, 'display')) ||
                    (t.getClientRects().length && t.getBoundingClientRect().width)
                    ? ie(t, e, n)
                    : Vt(t, Zt, function () {
                        return ie(t, e, n);
                      });
              },
              set: function (t, i, n) {
                var s,
                  r = zt(t),
                  a = !m.scrollboxSize() && 'absolute' === r.position,
                  o = (a || n) && 'border-box' === C.css(t, 'boxSizing', !1, r),
                  l = n ? ee(t, e, n, o, r) : 0;
                return (
                  o &&
                    a &&
                    (l -= Math.ceil(
                      t['offset' + e[0].toUpperCase() + e.slice(1)] -
                        parseFloat(r[e]) -
                        ee(t, e, 'border', !1, r) -
                        0.5,
                    )),
                  l &&
                    (s = st.exec(i)) &&
                    'px' !== (s[3] || 'px') &&
                    ((t.style[e] = i), (i = C.css(t, e))),
                  te(0, i, l)
                );
              },
            };
          }),
          (C.cssHooks.marginLeft = qt(m.reliableMarginLeft, function (t, e) {
            if (e)
              return (
                (parseFloat(Wt(t, 'marginLeft')) ||
                  t.getBoundingClientRect().left -
                    Vt(t, { marginLeft: 0 }, function () {
                      return t.getBoundingClientRect().left;
                    })) + 'px'
              );
          })),
          C.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
            (C.cssHooks[t + e] = {
              expand: function (i) {
                for (
                  var n = 0, s = {}, r = 'string' == typeof i ? i.split(' ') : [i];
                  n < 4;
                  n++
                )
                  s[t + rt[n] + e] = r[n] || r[n - 2] || r[0];
                return s;
              },
            }),
              'margin' !== t && (C.cssHooks[t + e].set = te);
          }),
          C.fn.extend({
            css: function (t, e) {
              return q(
                this,
                function (t, e, i) {
                  var n,
                    s,
                    r = {},
                    a = 0;
                  if (Array.isArray(e)) {
                    for (n = zt(t), s = e.length; a < s; a++)
                      r[e[a]] = C.css(t, e[a], !1, n);
                    return r;
                  }
                  return void 0 !== i ? C.style(t, e, i) : C.css(t, e);
                },
                t,
                e,
                arguments.length > 1,
              );
            },
          }),
          (C.Tween = ne),
          (ne.prototype = {
            constructor: ne,
            init: function (t, e, i, n, s, r) {
              (this.elem = t),
                (this.prop = i),
                (this.easing = s || C.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = n),
                (this.unit = r || (C.cssNumber[i] ? '' : 'px'));
            },
            cur: function () {
              var t = ne.propHooks[this.prop];
              return t && t.get ? t.get(this) : ne.propHooks._default.get(this);
            },
            run: function (t) {
              var e,
                i = ne.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e =
                      C.easing[this.easing](
                        t,
                        this.options.duration * t,
                        0,
                        1,
                        this.options.duration,
                      ))
                  : (this.pos = e = t),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : ne.propHooks._default.set(this),
                this
              );
            },
          }),
          (ne.prototype.init.prototype = ne.prototype),
          (ne.propHooks = {
            _default: {
              get: function (t) {
                var e;
                return 1 !== t.elem.nodeType ||
                  (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                  ? t.elem[t.prop]
                  : (e = C.css(t.elem, t.prop, '')) && 'auto' !== e
                  ? e
                  : 0;
              },
              set: function (t) {
                C.fx.step[t.prop]
                  ? C.fx.step[t.prop](t)
                  : 1 !== t.elem.nodeType ||
                    (!C.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)])
                  ? (t.elem[t.prop] = t.now)
                  : C.style(t.elem, t.prop, t.now + t.unit);
              },
            },
          }),
          (ne.propHooks.scrollTop = ne.propHooks.scrollLeft =
            {
              set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
              },
            }),
          (C.easing = {
            linear: function (t) {
              return t;
            },
            swing: function (t) {
              return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: 'swing',
          }),
          (C.fx = ne.prototype.init),
          (C.fx.step = {});
        var se,
          re,
          ae = /^(?:toggle|show|hide)$/,
          oe = /queueHooks$/;
        function le() {
          re &&
            (!1 === y.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(le)
              : n.setTimeout(le, C.fx.interval),
            C.fx.tick());
        }
        function ce() {
          return (
            n.setTimeout(function () {
              se = void 0;
            }),
            (se = Date.now())
          );
        }
        function he(t, e) {
          var i,
            n = 0,
            s = { height: t };
          for (e = e ? 1 : 0; n < 4; n += 2 - e)
            s['margin' + (i = rt[n])] = s['padding' + i] = t;
          return e && (s.opacity = s.width = t), s;
        }
        function de(t, e, i) {
          for (
            var n,
              s = (ue.tweeners[e] || []).concat(ue.tweeners['*']),
              r = 0,
              a = s.length;
            r < a;
            r++
          )
            if ((n = s[r].call(i, e, t))) return n;
        }
        function ue(t, e, i) {
          var n,
            s,
            r = 0,
            a = ue.prefilters.length,
            o = C.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (s) return !1;
              for (
                var e = se || ce(),
                  i = Math.max(0, c.startTime + c.duration - e),
                  n = 1 - (i / c.duration || 0),
                  r = 0,
                  a = c.tweens.length;
                r < a;
                r++
              )
                c.tweens[r].run(n);
              return (
                o.notifyWith(t, [c, n, i]),
                n < 1 && a
                  ? i
                  : (a || o.notifyWith(t, [c, 1, 0]), o.resolveWith(t, [c]), !1)
              );
            },
            c = o.promise({
              elem: t,
              props: C.extend({}, e),
              opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, i),
              originalProperties: e,
              originalOptions: i,
              startTime: se || ce(),
              duration: i.duration,
              tweens: [],
              createTween: function (e, i) {
                var n = C.Tween(
                  t,
                  c.opts,
                  e,
                  i,
                  c.opts.specialEasing[e] || c.opts.easing,
                );
                return c.tweens.push(n), n;
              },
              stop: function (e) {
                var i = 0,
                  n = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) c.tweens[i].run(1);
                return (
                  e
                    ? (o.notifyWith(t, [c, 1, 0]), o.resolveWith(t, [c, e]))
                    : o.rejectWith(t, [c, e]),
                  this
                );
              },
            }),
            h = c.props;
          for (
            (function (t, e) {
              var i, n, s, r, a;
              for (i in t)
                if (
                  ((s = e[(n = X(i))]),
                  (r = t[i]),
                  Array.isArray(r) && ((s = r[1]), (r = t[i] = r[0])),
                  i !== n && ((t[n] = r), delete t[i]),
                  (a = C.cssHooks[n]) && ('expand' in a))
                )
                  for (i in ((r = a.expand(r)), delete t[n], r))
                    (i in t) || ((t[i] = r[i]), (e[i] = s));
                else e[n] = s;
            })(h, c.opts.specialEasing);
            r < a;
            r++
          )
            if ((n = ue.prefilters[r].call(c, t, h, c.opts)))
              return (
                v(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n
              );
          return (
            C.map(h, de, c),
            v(c.opts.start) && c.opts.start.call(t, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            C.fx.timer(C.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (C.Animation = C.extend(ue, {
          tweeners: {
            '*': [
              function (t, e) {
                var i = this.createTween(t, e);
                return ht(i.elem, t, st.exec(e), i), i;
              },
            ],
          },
          tweener: function (t, e) {
            v(t) ? ((e = t), (t = ['*'])) : (t = t.match(R));
            for (var i, n = 0, s = t.length; n < s; n++)
              (i = t[n]),
                (ue.tweeners[i] = ue.tweeners[i] || []),
                ue.tweeners[i].unshift(e);
          },
          prefilters: [
            function (t, e, i) {
              var n,
                s,
                r,
                a,
                o,
                l,
                c,
                h,
                d = 'width' in e || 'height' in e,
                u = this,
                p = {},
                f = t.style,
                g = t.nodeType && ct(t),
                m = Z.get(t, 'fxshow');
              for (n in (i.queue ||
                (null == (a = C._queueHooks(t, 'fx')).unqueued &&
                  ((a.unqueued = 0),
                  (o = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || o();
                  })),
                a.unqueued++,
                u.always(function () {
                  u.always(function () {
                    a.unqueued--, C.queue(t, 'fx').length || a.empty.fire();
                  });
                })),
              e))
                if (((s = e[n]), ae.test(s))) {
                  if (
                    (delete e[n], (r = r || 'toggle' === s), s === (g ? 'hide' : 'show'))
                  ) {
                    if ('show' !== s || !m || void 0 === m[n]) continue;
                    g = !0;
                  }
                  p[n] = (m && m[n]) || C.style(t, n);
                }
              if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(p))
                for (n in (d &&
                  1 === t.nodeType &&
                  ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                  null == (c = m && m.display) && (c = Z.get(t, 'display')),
                  'none' === (h = C.css(t, 'display')) &&
                    (c
                      ? (h = c)
                      : (pt([t], !0),
                        (c = t.style.display || c),
                        (h = C.css(t, 'display')),
                        pt([t]))),
                  ('inline' === h || ('inline-block' === h && null != c)) &&
                    'none' === C.css(t, 'float') &&
                    (l ||
                      (u.done(function () {
                        f.display = c;
                      }),
                      null == c && ((h = f.display), (c = 'none' === h ? '' : h))),
                    (f.display = 'inline-block'))),
                i.overflow &&
                  ((f.overflow = 'hidden'),
                  u.always(function () {
                    (f.overflow = i.overflow[0]),
                      (f.overflowX = i.overflow[1]),
                      (f.overflowY = i.overflow[2]);
                  })),
                (l = !1),
                p))
                  l ||
                    (m
                      ? 'hidden' in m && (g = m.hidden)
                      : (m = Z.access(t, 'fxshow', { display: c })),
                    r && (m.hidden = !g),
                    g && pt([t], !0),
                    u.done(function () {
                      for (n in (g || pt([t]), Z.remove(t, 'fxshow'), p))
                        C.style(t, n, p[n]);
                    })),
                    (l = de(g ? m[n] : 0, n, u)),
                    n in m || ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (t, e) {
            e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
          },
        })),
          (C.speed = function (t, e, i) {
            var n =
              t && 'object' == typeof t
                ? C.extend({}, t)
                : {
                    complete: i || (!i && e) || (v(t) && t),
                    duration: t,
                    easing: (i && e) || (e && !v(e) && e),
                  };
            return (
              C.fx.off
                ? (n.duration = 0)
                : 'number' != typeof n.duration &&
                  (n.duration in C.fx.speeds
                    ? (n.duration = C.fx.speeds[n.duration])
                    : (n.duration = C.fx.speeds._default)),
              (null != n.queue && !0 !== n.queue) || (n.queue = 'fx'),
              (n.old = n.complete),
              (n.complete = function () {
                v(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue);
              }),
              n
            );
          }),
          C.fn.extend({
            fadeTo: function (t, e, i, n) {
              return this.filter(ct)
                .css('opacity', 0)
                .show()
                .end()
                .animate({ opacity: e }, t, i, n);
            },
            animate: function (t, e, i, n) {
              var s = C.isEmptyObject(t),
                r = C.speed(e, i, n),
                a = function () {
                  var e = ue(this, C.extend({}, t), r);
                  (s || Z.get(this, 'finish')) && e.stop(!0);
                };
              return (
                (a.finish = a),
                s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
              );
            },
            stop: function (t, e, i) {
              var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i);
              };
              return (
                'string' != typeof t && ((i = e), (e = t), (t = void 0)),
                e && this.queue(t || 'fx', []),
                this.each(function () {
                  var e = !0,
                    s = null != t && t + 'queueHooks',
                    r = C.timers,
                    a = Z.get(this);
                  if (s) a[s] && a[s].stop && n(a[s]);
                  else for (s in a) a[s] && a[s].stop && oe.test(s) && n(a[s]);
                  for (s = r.length; s--; )
                    r[s].elem !== this ||
                      (null != t && r[s].queue !== t) ||
                      (r[s].anim.stop(i), (e = !1), r.splice(s, 1));
                  (!e && i) || C.dequeue(this, t);
                })
              );
            },
            finish: function (t) {
              return (
                !1 !== t && (t = t || 'fx'),
                this.each(function () {
                  var e,
                    i = Z.get(this),
                    n = i[t + 'queue'],
                    s = i[t + 'queueHooks'],
                    r = C.timers,
                    a = n ? n.length : 0;
                  for (
                    i.finish = !0,
                      C.queue(this, t, []),
                      s && s.stop && s.stop.call(this, !0),
                      e = r.length;
                    e--;

                  )
                    r[e].elem === this &&
                      r[e].queue === t &&
                      (r[e].anim.stop(!0), r.splice(e, 1));
                  for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                  delete i.finish;
                })
              );
            },
          }),
          C.each(['toggle', 'show', 'hide'], function (t, e) {
            var i = C.fn[e];
            C.fn[e] = function (t, n, s) {
              return null == t || 'boolean' == typeof t
                ? i.apply(this, arguments)
                : this.animate(he(e, !0), t, n, s);
            };
          }),
          C.each(
            {
              slideDown: he('show'),
              slideUp: he('hide'),
              slideToggle: he('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' },
            },
            function (t, e) {
              C.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n);
              };
            },
          ),
          (C.timers = []),
          (C.fx.tick = function () {
            var t,
              e = 0,
              i = C.timers;
            for (se = Date.now(); e < i.length; e++)
              (t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || C.fx.stop(), (se = void 0);
          }),
          (C.fx.timer = function (t) {
            C.timers.push(t), C.fx.start();
          }),
          (C.fx.interval = 13),
          (C.fx.start = function () {
            re || ((re = !0), le());
          }),
          (C.fx.stop = function () {
            re = null;
          }),
          (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (C.fn.delay = function (t, e) {
            return (
              (t = (C.fx && C.fx.speeds[t]) || t),
              (e = e || 'fx'),
              this.queue(e, function (e, i) {
                var s = n.setTimeout(e, t);
                i.stop = function () {
                  n.clearTimeout(s);
                };
              })
            );
          }),
          (function () {
            var t = y.createElement('input'),
              e = y.createElement('select').appendChild(y.createElement('option'));
            (t.type = 'checkbox'),
              (m.checkOn = '' !== t.value),
              (m.optSelected = e.selected),
              ((t = y.createElement('input')).value = 't'),
              (t.type = 'radio'),
              (m.radioValue = 't' === t.value);
          })();
        var pe,
          fe = C.expr.attrHandle;
        C.fn.extend({
          attr: function (t, e) {
            return q(this, C.attr, t, e, arguments.length > 1);
          },
          removeAttr: function (t) {
            return this.each(function () {
              C.removeAttr(this, t);
            });
          },
        }),
          C.extend({
            attr: function (t, e, i) {
              var n,
                s,
                r = t.nodeType;
              if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === t.getAttribute
                  ? C.prop(t, e, i)
                  : ((1 === r && C.isXMLDoc(t)) ||
                      (s =
                        C.attrHooks[e.toLowerCase()] ||
                        (C.expr.match.bool.test(e) ? pe : void 0)),
                    void 0 !== i
                      ? null === i
                        ? void C.removeAttr(t, e)
                        : s && 'set' in s && void 0 !== (n = s.set(t, i, e))
                        ? n
                        : (t.setAttribute(e, i + ''), i)
                      : s && 'get' in s && null !== (n = s.get(t, e))
                      ? n
                      : null == (n = C.find.attr(t, e))
                      ? void 0
                      : n);
            },
            attrHooks: {
              type: {
                set: function (t, e) {
                  if (!m.radioValue && 'radio' === e && P(t, 'input')) {
                    var i = t.value;
                    return t.setAttribute('type', e), i && (t.value = i), e;
                  }
                },
              },
            },
            removeAttr: function (t, e) {
              var i,
                n = 0,
                s = e && e.match(R);
              if (s && 1 === t.nodeType) for (; (i = s[n++]); ) t.removeAttribute(i);
            },
          }),
          (pe = {
            set: function (t, e, i) {
              return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i;
            },
          }),
          C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = fe[e] || C.find.attr;
            fe[e] = function (t, e, n) {
              var s,
                r,
                a = e.toLowerCase();
              return (
                n ||
                  ((r = fe[a]),
                  (fe[a] = s),
                  (s = null != i(t, e, n) ? a : null),
                  (fe[a] = r)),
                s
              );
            };
          });
        var ge = /^(?:input|select|textarea|button)$/i,
          me = /^(?:a|area)$/i;
        function ve(t) {
          return (t.match(R) || []).join(' ');
        }
        function be(t) {
          return (t.getAttribute && t.getAttribute('class')) || '';
        }
        function ye(t) {
          return Array.isArray(t) ? t : ('string' == typeof t && t.match(R)) || [];
        }
        C.fn.extend({
          prop: function (t, e) {
            return q(this, C.prop, t, e, arguments.length > 1);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[C.propFix[t] || t];
            });
          },
        }),
          C.extend({
            prop: function (t, e, i) {
              var n,
                s,
                r = t.nodeType;
              if (3 !== r && 8 !== r && 2 !== r)
                return (
                  (1 === r && C.isXMLDoc(t)) ||
                    ((e = C.propFix[e] || e), (s = C.propHooks[e])),
                  void 0 !== i
                    ? s && 'set' in s && void 0 !== (n = s.set(t, i, e))
                      ? n
                      : (t[e] = i)
                    : s && 'get' in s && null !== (n = s.get(t, e))
                    ? n
                    : t[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (t) {
                  var e = C.find.attr(t, 'tabindex');
                  return e
                    ? parseInt(e, 10)
                    : ge.test(t.nodeName) || (me.test(t.nodeName) && t.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: 'htmlFor', class: 'className' },
          }),
          m.optSelected ||
            (C.propHooks.selected = {
              get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
              },
              set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
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
            addClass: function (t) {
              var e,
                i,
                n,
                s,
                r,
                a,
                o,
                l = 0;
              if (v(t))
                return this.each(function (e) {
                  C(this).addClass(t.call(this, e, be(this)));
                });
              if ((e = ye(t)).length)
                for (; (i = this[l++]); )
                  if (((s = be(i)), (n = 1 === i.nodeType && ' ' + ve(s) + ' '))) {
                    for (a = 0; (r = e[a++]); )
                      n.indexOf(' ' + r + ' ') < 0 && (n += r + ' ');
                    s !== (o = ve(n)) && i.setAttribute('class', o);
                  }
              return this;
            },
            removeClass: function (t) {
              var e,
                i,
                n,
                s,
                r,
                a,
                o,
                l = 0;
              if (v(t))
                return this.each(function (e) {
                  C(this).removeClass(t.call(this, e, be(this)));
                });
              if (!arguments.length) return this.attr('class', '');
              if ((e = ye(t)).length)
                for (; (i = this[l++]); )
                  if (((s = be(i)), (n = 1 === i.nodeType && ' ' + ve(s) + ' '))) {
                    for (a = 0; (r = e[a++]); )
                      for (; n.indexOf(' ' + r + ' ') > -1; )
                        n = n.replace(' ' + r + ' ', ' ');
                    s !== (o = ve(n)) && i.setAttribute('class', o);
                  }
              return this;
            },
            toggleClass: function (t, e) {
              var i = typeof t,
                n = 'string' === i || Array.isArray(t);
              return 'boolean' == typeof e && n
                ? e
                  ? this.addClass(t)
                  : this.removeClass(t)
                : v(t)
                ? this.each(function (i) {
                    C(this).toggleClass(t.call(this, i, be(this), e), e);
                  })
                : this.each(function () {
                    var e, s, r, a;
                    if (n)
                      for (s = 0, r = C(this), a = ye(t); (e = a[s++]); )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else
                      (void 0 !== t && 'boolean' !== i) ||
                        ((e = be(this)) && Z.set(this, '__className__', e),
                        this.setAttribute &&
                          this.setAttribute(
                            'class',
                            e || !1 === t ? '' : Z.get(this, '__className__') || '',
                          ));
                  });
            },
            hasClass: function (t) {
              var e,
                i,
                n = 0;
              for (e = ' ' + t + ' '; (i = this[n++]); )
                if (1 === i.nodeType && (' ' + ve(be(i)) + ' ').indexOf(e) > -1)
                  return !0;
              return !1;
            },
          });
        var xe = /\r/g;
        C.fn.extend({
          val: function (t) {
            var e,
              i,
              n,
              s = this[0];
            return arguments.length
              ? ((n = v(t)),
                this.each(function (i) {
                  var s;
                  1 === this.nodeType &&
                    (null == (s = n ? t.call(this, i, C(this).val()) : t)
                      ? (s = '')
                      : 'number' == typeof s
                      ? (s += '')
                      : Array.isArray(s) &&
                        (s = C.map(s, function (t) {
                          return null == t ? '' : t + '';
                        })),
                    ((e =
                      C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in e &&
                      void 0 !== e.set(this, s, 'value')) ||
                      (this.value = s));
                }))
              : s
              ? (e = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) &&
                'get' in e &&
                void 0 !== (i = e.get(s, 'value'))
                ? i
                : 'string' == typeof (i = s.value)
                ? i.replace(xe, '')
                : null == i
                ? ''
                : i
              : void 0;
          },
        }),
          C.extend({
            valHooks: {
              option: {
                get: function (t) {
                  var e = C.find.attr(t, 'value');
                  return null != e ? e : ve(C.text(t));
                },
              },
              select: {
                get: function (t) {
                  var e,
                    i,
                    n,
                    s = t.options,
                    r = t.selectedIndex,
                    a = 'select-one' === t.type,
                    o = a ? null : [],
                    l = a ? r + 1 : s.length;
                  for (n = r < 0 ? l : a ? r : 0; n < l; n++)
                    if (
                      ((i = s[n]).selected || n === r) &&
                      !i.disabled &&
                      (!i.parentNode.disabled || !P(i.parentNode, 'optgroup'))
                    ) {
                      if (((e = C(i).val()), a)) return e;
                      o.push(e);
                    }
                  return o;
                },
                set: function (t, e) {
                  for (var i, n, s = t.options, r = C.makeArray(e), a = s.length; a--; )
                    ((n = s[a]).selected = C.inArray(C.valHooks.option.get(n), r) > -1) &&
                      (i = !0);
                  return i || (t.selectedIndex = -1), r;
                },
              },
            },
          }),
          C.each(['radio', 'checkbox'], function () {
            (C.valHooks[this] = {
              set: function (t, e) {
                if (Array.isArray(e)) return (t.checked = C.inArray(C(t).val(), e) > -1);
              },
            }),
              m.checkOn ||
                (C.valHooks[this].get = function (t) {
                  return null === t.getAttribute('value') ? 'on' : t.value;
                });
          }),
          (m.focusin = 'onfocusin' in n);
        var we = /^(?:focusinfocus|focusoutblur)$/,
          _e = function (t) {
            t.stopPropagation();
          };
        C.extend(C.event, {
          trigger: function (t, e, i, s) {
            var r,
              a,
              o,
              l,
              c,
              h,
              d,
              u,
              f = [i || y],
              g = p.call(t, 'type') ? t.type : t,
              m = p.call(t, 'namespace') ? t.namespace.split('.') : [];
            if (
              ((a = u = o = i = i || y),
              3 !== i.nodeType &&
                8 !== i.nodeType &&
                !we.test(g + C.event.triggered) &&
                (g.indexOf('.') > -1 && ((m = g.split('.')), (g = m.shift()), m.sort()),
                (c = g.indexOf(':') < 0 && 'on' + g),
                ((t = t[C.expando]
                  ? t
                  : new C.Event(g, 'object' == typeof t && t)).isTrigger = s ? 2 : 3),
                (t.namespace = m.join('.')),
                (t.rnamespace = t.namespace
                  ? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (t.result = void 0),
                t.target || (t.target = i),
                (e = null == e ? [t] : C.makeArray(e, [t])),
                (d = C.event.special[g] || {}),
                s || !d.trigger || !1 !== d.trigger.apply(i, e)))
            ) {
              if (!s && !d.noBubble && !b(i)) {
                for (
                  l = d.delegateType || g, we.test(l + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  f.push(a), (o = a);
                o === (i.ownerDocument || y) &&
                  f.push(o.defaultView || o.parentWindow || n);
              }
              for (r = 0; (a = f[r++]) && !t.isPropagationStopped(); )
                (u = a),
                  (t.type = r > 1 ? l : d.bindType || g),
                  (h =
                    (Z.get(a, 'events') || Object.create(null))[t.type] &&
                    Z.get(a, 'handle')) && h.apply(a, e),
                  (h = c && a[c]) &&
                    h.apply &&
                    K(a) &&
                    ((t.result = h.apply(a, e)), !1 === t.result && t.preventDefault());
              return (
                (t.type = g),
                s ||
                  t.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(f.pop(), e)) ||
                  !K(i) ||
                  (c &&
                    v(i[g]) &&
                    !b(i) &&
                    ((o = i[c]) && (i[c] = null),
                    (C.event.triggered = g),
                    t.isPropagationStopped() && u.addEventListener(g, _e),
                    i[g](),
                    t.isPropagationStopped() && u.removeEventListener(g, _e),
                    (C.event.triggered = void 0),
                    o && (i[c] = o))),
                t.result
              );
            }
          },
          simulate: function (t, e, i) {
            var n = C.extend(new C.Event(), i, { type: t, isSimulated: !0 });
            C.event.trigger(n, null, e);
          },
        }),
          C.fn.extend({
            trigger: function (t, e) {
              return this.each(function () {
                C.event.trigger(t, e, this);
              });
            },
            triggerHandler: function (t, e) {
              var i = this[0];
              if (i) return C.event.trigger(t, e, i, !0);
            },
          }),
          m.focusin ||
            C.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
              var i = function (t) {
                C.event.simulate(e, t.target, C.event.fix(t));
              };
              C.event.special[e] = {
                setup: function () {
                  var n = this.ownerDocument || this.document || this,
                    s = Z.access(n, e);
                  s || n.addEventListener(t, i, !0), Z.access(n, e, (s || 0) + 1);
                },
                teardown: function () {
                  var n = this.ownerDocument || this.document || this,
                    s = Z.access(n, e) - 1;
                  s
                    ? Z.access(n, e, s)
                    : (n.removeEventListener(t, i, !0), Z.remove(n, e));
                },
              };
            });
        var ke = n.location,
          Ce = { guid: Date.now() },
          Se = /\?/;
        C.parseXML = function (t) {
          var e, i;
          if (!t || 'string' != typeof t) return null;
          try {
            e = new n.DOMParser().parseFromString(t, 'text/xml');
          } catch (t) {}
          return (
            (i = e && e.getElementsByTagName('parsererror')[0]),
            (e && !i) ||
              C.error(
                'Invalid XML: ' +
                  (i
                    ? C.map(i.childNodes, function (t) {
                        return t.textContent;
                      }).join('\n')
                    : t),
              ),
            e
          );
        };
        var Te = /\[\]$/,
          De = /\r?\n/g,
          Me = /^(?:submit|button|image|reset|file)$/i,
          Ee = /^(?:input|select|textarea|keygen)/i;
        function Pe(t, e, i, n) {
          var s;
          if (Array.isArray(e))
            C.each(e, function (e, s) {
              i || Te.test(t)
                ? n(t, s)
                : Pe(
                    t + '[' + ('object' == typeof s && null != s ? e : '') + ']',
                    s,
                    i,
                    n,
                  );
            });
          else if (i || 'object' !== _(e)) n(t, e);
          else for (s in e) Pe(t + '[' + s + ']', e[s], i, n);
        }
        (C.param = function (t, e) {
          var i,
            n = [],
            s = function (t, e) {
              var i = v(e) ? e() : e;
              n[n.length] =
                encodeURIComponent(t) + '=' + encodeURIComponent(null == i ? '' : i);
            };
          if (null == t) return '';
          if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
            C.each(t, function () {
              s(this.name, this.value);
            });
          else for (i in t) Pe(i, t[i], e, s);
          return n.join('&');
        }),
          C.fn.extend({
            serialize: function () {
              return C.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var t = C.prop(this, 'elements');
                return t ? C.makeArray(t) : this;
              })
                .filter(function () {
                  var t = this.type;
                  return (
                    this.name &&
                    !C(this).is(':disabled') &&
                    Ee.test(this.nodeName) &&
                    !Me.test(t) &&
                    (this.checked || !mt.test(t))
                  );
                })
                .map(function (t, e) {
                  var i = C(this).val();
                  return null == i
                    ? null
                    : Array.isArray(i)
                    ? C.map(i, function (t) {
                        return { name: e.name, value: t.replace(De, '\r\n') };
                      })
                    : { name: e.name, value: i.replace(De, '\r\n') };
                })
                .get();
            },
          });
        var Ae = /%20/g,
          Le = /#.*$/,
          Oe = /([?&])_=[^&]*/,
          Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ie = /^(?:GET|HEAD)$/,
          $e = /^\/\//,
          Fe = {},
          Re = {},
          He = '*/'.concat('*'),
          je = y.createElement('a');
        function ze(t) {
          return function (e, i) {
            'string' != typeof e && ((i = e), (e = '*'));
            var n,
              s = 0,
              r = e.toLowerCase().match(R) || [];
            if (v(i))
              for (; (n = r[s++]); )
                '+' === n[0]
                  ? ((n = n.slice(1) || '*'), (t[n] = t[n] || []).unshift(i))
                  : (t[n] = t[n] || []).push(i);
          };
        }
        function Ve(t, e, i, n) {
          var s = {},
            r = t === Re;
          function a(o) {
            var l;
            return (
              (s[o] = !0),
              C.each(t[o] || [], function (t, o) {
                var c = o(e, i, n);
                return 'string' != typeof c || r || s[c]
                  ? r
                    ? !(l = c)
                    : void 0
                  : (e.dataTypes.unshift(c), a(c), !1);
              }),
              l
            );
          }
          return a(e.dataTypes[0]) || (!s['*'] && a('*'));
        }
        function Be(t, e) {
          var i,
            n,
            s = C.ajaxSettings.flatOptions || {};
          for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
          return n && C.extend(!0, t, n), t;
        }
        (je.href = ke.href),
          C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: ke.href,
              type: 'GET',
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                ke.protocol,
              ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': He,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript',
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON',
              },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': C.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
              return e ? Be(Be(t, C.ajaxSettings), e) : Be(C.ajaxSettings, t);
            },
            ajaxPrefilter: ze(Fe),
            ajaxTransport: ze(Re),
            ajax: function (t, e) {
              'object' == typeof t && ((e = t), (t = void 0)), (e = e || {});
              var i,
                s,
                r,
                a,
                o,
                l,
                c,
                h,
                d,
                u,
                p = C.ajaxSetup({}, e),
                f = p.context || p,
                g = p.context && (f.nodeType || f.jquery) ? C(f) : C.event,
                m = C.Deferred(),
                v = C.Callbacks('once memory'),
                b = p.statusCode || {},
                x = {},
                w = {},
                _ = 'canceled',
                k = {
                  readyState: 0,
                  getResponseHeader: function (t) {
                    var e;
                    if (c) {
                      if (!a)
                        for (a = {}; (e = Ne.exec(r)); )
                          a[e[1].toLowerCase() + ' '] = (
                            a[e[1].toLowerCase() + ' '] || []
                          ).concat(e[2]);
                      e = a[t.toLowerCase() + ' '];
                    }
                    return null == e ? null : e.join(', ');
                  },
                  getAllResponseHeaders: function () {
                    return c ? r : null;
                  },
                  setRequestHeader: function (t, e) {
                    return (
                      null == c &&
                        ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t), (x[t] = e)),
                      this
                    );
                  },
                  overrideMimeType: function (t) {
                    return null == c && (p.mimeType = t), this;
                  },
                  statusCode: function (t) {
                    var e;
                    if (t)
                      if (c) k.always(t[k.status]);
                      else for (e in t) b[e] = [b[e], t[e]];
                    return this;
                  },
                  abort: function (t) {
                    var e = t || _;
                    return i && i.abort(e), S(0, e), this;
                  },
                };
              if (
                (m.promise(k),
                (p.url = ((t || p.url || ke.href) + '').replace($e, ke.protocol + '//')),
                (p.type = e.method || e.type || p.method || p.type),
                (p.dataTypes = (p.dataType || '*').toLowerCase().match(R) || ['']),
                null == p.crossDomain)
              ) {
                l = y.createElement('a');
                try {
                  (l.href = p.url),
                    (l.href = l.href),
                    (p.crossDomain =
                      je.protocol + '//' + je.host != l.protocol + '//' + l.host);
                } catch (t) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  'string' != typeof p.data &&
                  (p.data = C.param(p.data, p.traditional)),
                Ve(Fe, p, e, k),
                c)
              )
                return k;
              for (d in ((h = C.event && p.global) &&
                0 == C.active++ &&
                C.event.trigger('ajaxStart'),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Ie.test(p.type)),
              (s = p.url.replace(Le, '')),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  (p.data = p.data.replace(Ae, '+'))
                : ((u = p.url.slice(s.length)),
                  p.data &&
                    (p.processData || 'string' == typeof p.data) &&
                    ((s += (Se.test(s) ? '&' : '?') + p.data), delete p.data),
                  !1 === p.cache &&
                    ((s = s.replace(Oe, '$1')),
                    (u = (Se.test(s) ? '&' : '?') + '_=' + Ce.guid++ + u)),
                  (p.url = s + u)),
              p.ifModified &&
                (C.lastModified[s] &&
                  k.setRequestHeader('If-Modified-Since', C.lastModified[s]),
                C.etag[s] && k.setRequestHeader('If-None-Match', C.etag[s])),
              ((p.data && p.hasContent && !1 !== p.contentType) || e.contentType) &&
                k.setRequestHeader('Content-Type', p.contentType),
              k.setRequestHeader(
                'Accept',
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ('*' !== p.dataTypes[0] ? ', ' + He + '; q=0.01' : '')
                  : p.accepts['*'],
              ),
              p.headers))
                k.setRequestHeader(d, p.headers[d]);
              if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || c))
                return k.abort();
              if (
                ((_ = 'abort'),
                v.add(p.complete),
                k.done(p.success),
                k.fail(p.error),
                (i = Ve(Re, p, e, k)))
              ) {
                if (((k.readyState = 1), h && g.trigger('ajaxSend', [k, p]), c)) return k;
                p.async &&
                  p.timeout > 0 &&
                  (o = n.setTimeout(function () {
                    k.abort('timeout');
                  }, p.timeout));
                try {
                  (c = !1), i.send(x, S);
                } catch (t) {
                  if (c) throw t;
                  S(-1, t);
                }
              } else S(-1, 'No Transport');
              function S(t, e, a, l) {
                var d,
                  u,
                  y,
                  x,
                  w,
                  _ = e;
                c ||
                  ((c = !0),
                  o && n.clearTimeout(o),
                  (i = void 0),
                  (r = l || ''),
                  (k.readyState = t > 0 ? 4 : 0),
                  (d = (t >= 200 && t < 300) || 304 === t),
                  a &&
                    (x = (function (t, e, i) {
                      for (
                        var n, s, r, a, o = t.contents, l = t.dataTypes;
                        '*' === l[0];

                      )
                        l.shift(),
                          void 0 === n &&
                            (n = t.mimeType || e.getResponseHeader('Content-Type'));
                      if (n)
                        for (s in o)
                          if (o[s] && o[s].test(n)) {
                            l.unshift(s);
                            break;
                          }
                      if (l[0] in i) r = l[0];
                      else {
                        for (s in i) {
                          if (!l[0] || t.converters[s + ' ' + l[0]]) {
                            r = s;
                            break;
                          }
                          a || (a = s);
                        }
                        r = r || a;
                      }
                      if (r) return r !== l[0] && l.unshift(r), i[r];
                    })(p, k, a)),
                  !d &&
                    C.inArray('script', p.dataTypes) > -1 &&
                    C.inArray('json', p.dataTypes) < 0 &&
                    (p.converters['text script'] = function () {}),
                  (x = (function (t, e, i, n) {
                    var s,
                      r,
                      a,
                      o,
                      l,
                      c = {},
                      h = t.dataTypes.slice();
                    if (h[1])
                      for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                    for (r = h.shift(); r; )
                      if (
                        (t.responseFields[r] && (i[t.responseFields[r]] = e),
                        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        (l = r),
                        (r = h.shift()))
                      )
                        if ('*' === r) r = l;
                        else if ('*' !== l && l !== r) {
                          if (!(a = c[l + ' ' + r] || c['* ' + r]))
                            for (s in c)
                              if (
                                (o = s.split(' '))[1] === r &&
                                (a = c[l + ' ' + o[0]] || c['* ' + o[0]])
                              ) {
                                !0 === a
                                  ? (a = c[s])
                                  : !0 !== c[s] && ((r = o[0]), h.unshift(o[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else
                              try {
                                e = a(e);
                              } catch (t) {
                                return {
                                  state: 'parsererror',
                                  error: a ? t : 'No conversion from ' + l + ' to ' + r,
                                };
                              }
                        }
                    return { state: 'success', data: e };
                  })(p, x, k, d)),
                  d
                    ? (p.ifModified &&
                        ((w = k.getResponseHeader('Last-Modified')) &&
                          (C.lastModified[s] = w),
                        (w = k.getResponseHeader('etag')) && (C.etag[s] = w)),
                      204 === t || 'HEAD' === p.type
                        ? (_ = 'nocontent')
                        : 304 === t
                        ? (_ = 'notmodified')
                        : ((_ = x.state), (u = x.data), (d = !(y = x.error))))
                    : ((y = _), (!t && _) || ((_ = 'error'), t < 0 && (t = 0))),
                  (k.status = t),
                  (k.statusText = (e || _) + ''),
                  d ? m.resolveWith(f, [u, _, k]) : m.rejectWith(f, [k, _, y]),
                  k.statusCode(b),
                  (b = void 0),
                  h && g.trigger(d ? 'ajaxSuccess' : 'ajaxError', [k, p, d ? u : y]),
                  v.fireWith(f, [k, _]),
                  h &&
                    (g.trigger('ajaxComplete', [k, p]),
                    --C.active || C.event.trigger('ajaxStop')));
              }
              return k;
            },
            getJSON: function (t, e, i) {
              return C.get(t, e, i, 'json');
            },
            getScript: function (t, e) {
              return C.get(t, void 0, e, 'script');
            },
          }),
          C.each(['get', 'post'], function (t, e) {
            C[e] = function (t, i, n, s) {
              return (
                v(i) && ((s = s || n), (n = i), (i = void 0)),
                C.ajax(
                  C.extend(
                    { url: t, type: e, dataType: s, data: i, success: n },
                    C.isPlainObject(t) && t,
                  ),
                )
              );
            };
          }),
          C.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers)
              'content-type' === e.toLowerCase() && (t.contentType = t.headers[e] || '');
          }),
          (C._evalUrl = function (t, e, i) {
            return C.ajax({
              url: t,
              type: 'GET',
              dataType: 'script',
              cache: !0,
              async: !1,
              global: !1,
              converters: { 'text script': function () {} },
              dataFilter: function (t) {
                C.globalEval(t, e, i);
              },
            });
          }),
          C.fn.extend({
            wrapAll: function (t) {
              var e;
              return (
                this[0] &&
                  (v(t) && (t = t.call(this[0])),
                  (e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (t) {
              return v(t)
                ? this.each(function (e) {
                    C(this).wrapInner(t.call(this, e));
                  })
                : this.each(function () {
                    var e = C(this),
                      i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t);
                  });
            },
            wrap: function (t) {
              var e = v(t);
              return this.each(function (i) {
                C(this).wrapAll(e ? t.call(this, i) : t);
              });
            },
            unwrap: function (t) {
              return (
                this.parent(t)
                  .not('body')
                  .each(function () {
                    C(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (C.expr.pseudos.hidden = function (t) {
            return !C.expr.pseudos.visible(t);
          }),
          (C.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
          }),
          (C.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (t) {}
          });
        var We = { 0: 200, 1223: 204 },
          qe = C.ajaxSettings.xhr();
        (m.cors = !!qe && 'withCredentials' in qe),
          (m.ajax = qe = !!qe),
          C.ajaxTransport(function (t) {
            var e, i;
            if (m.cors || (qe && !t.crossDomain))
              return {
                send: function (s, r) {
                  var a,
                    o = t.xhr();
                  if (
                    (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                  )
                    for (a in t.xhrFields) o[a] = t.xhrFields[a];
                  for (a in (t.mimeType &&
                    o.overrideMimeType &&
                    o.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    s['X-Requested-With'] ||
                    (s['X-Requested-With'] = 'XMLHttpRequest'),
                  s))
                    o.setRequestHeader(a, s[a]);
                  (e = function (t) {
                    return function () {
                      e &&
                        ((e =
                          i =
                          o.onload =
                          o.onerror =
                          o.onabort =
                          o.ontimeout =
                          o.onreadystatechange =
                            null),
                        'abort' === t
                          ? o.abort()
                          : 'error' === t
                          ? 'number' != typeof o.status
                            ? r(0, 'error')
                            : r(o.status, o.statusText)
                          : r(
                              We[o.status] || o.status,
                              o.statusText,
                              'text' !== (o.responseType || 'text') ||
                                'string' != typeof o.responseText
                                ? { binary: o.response }
                                : { text: o.responseText },
                              o.getAllResponseHeaders(),
                            ));
                    };
                  }),
                    (o.onload = e()),
                    (i = o.onerror = o.ontimeout = e('error')),
                    void 0 !== o.onabort
                      ? (o.onabort = i)
                      : (o.onreadystatechange = function () {
                          4 === o.readyState &&
                            n.setTimeout(function () {
                              e && i();
                            });
                        }),
                    (e = e('abort'));
                  try {
                    o.send((t.hasContent && t.data) || null);
                  } catch (t) {
                    if (e) throw t;
                  }
                },
                abort: function () {
                  e && e();
                },
              };
          }),
          C.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
          }),
          C.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              'text script': function (t) {
                return C.globalEval(t), t;
              },
            },
          }),
          C.ajaxPrefilter('script', function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET');
          }),
          C.ajaxTransport('script', function (t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs)
              return {
                send: function (n, s) {
                  (e = C('<script>')
                    .attr(t.scriptAttrs || {})
                    .prop({ charset: t.scriptCharset, src: t.url })
                    .on(
                      'load error',
                      (i = function (t) {
                        e.remove(),
                          (i = null),
                          t && s('error' === t.type ? 404 : 200, t.type);
                      }),
                    )),
                    y.head.appendChild(e[0]);
                },
                abort: function () {
                  i && i();
                },
              };
          });
        var Ge,
          Ye = [],
          Ue = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function () {
            var t = Ye.pop() || C.expando + '_' + Ce.guid++;
            return (this[t] = !0), t;
          },
        }),
          C.ajaxPrefilter('json jsonp', function (t, e, i) {
            var s,
              r,
              a,
              o =
                !1 !== t.jsonp &&
                (Ue.test(t.url)
                  ? 'url'
                  : 'string' == typeof t.data &&
                    0 ===
                      (t.contentType || '').indexOf(
                        'application/x-www-form-urlencoded',
                      ) &&
                    Ue.test(t.data) &&
                    'data');
            if (o || 'jsonp' === t.dataTypes[0])
              return (
                (s = t.jsonpCallback =
                  v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                o
                  ? (t[o] = t[o].replace(Ue, '$1' + s))
                  : !1 !== t.jsonp &&
                    (t.url += (Se.test(t.url) ? '&' : '?') + t.jsonp + '=' + s),
                (t.converters['script json'] = function () {
                  return a || C.error(s + ' was not called'), a[0];
                }),
                (t.dataTypes[0] = 'json'),
                (r = n[s]),
                (n[s] = function () {
                  a = arguments;
                }),
                i.always(function () {
                  void 0 === r ? C(n).removeProp(s) : (n[s] = r),
                    t[s] && ((t.jsonpCallback = e.jsonpCallback), Ye.push(s)),
                    a && v(r) && r(a[0]),
                    (a = r = void 0);
                }),
                'script'
              );
          }),
          (m.createHTMLDocument =
            (((Ge = y.implementation.createHTMLDocument('').body).innerHTML =
              '<form></form><form></form>'),
            2 === Ge.childNodes.length)),
          (C.parseHTML = function (t, e, i) {
            return 'string' != typeof t
              ? []
              : ('boolean' == typeof e && ((i = e), (e = !1)),
                e ||
                  (m.createHTMLDocument
                    ? (((n = (e = y.implementation.createHTMLDocument('')).createElement(
                        'base',
                      )).href = y.location.href),
                      e.head.appendChild(n))
                    : (e = y)),
                (r = !i && []),
                (s = A.exec(t))
                  ? [e.createElement(s[1])]
                  : ((s = kt([t], e, r)),
                    r && r.length && C(r).remove(),
                    C.merge([], s.childNodes)));
            var n, s, r;
          }),
          (C.fn.load = function (t, e, i) {
            var n,
              s,
              r,
              a = this,
              o = t.indexOf(' ');
            return (
              o > -1 && ((n = ve(t.slice(o))), (t = t.slice(0, o))),
              v(e) ? ((i = e), (e = void 0)) : e && 'object' == typeof e && (s = 'POST'),
              a.length > 0 &&
                C.ajax({ url: t, type: s || 'GET', dataType: 'html', data: e })
                  .done(function (t) {
                    (r = arguments),
                      a.html(n ? C('<div>').append(C.parseHTML(t)).find(n) : t);
                  })
                  .always(
                    i &&
                      function (t, e) {
                        a.each(function () {
                          i.apply(this, r || [t.responseText, e, t]);
                        });
                      },
                  ),
              this
            );
          }),
          (C.expr.pseudos.animated = function (t) {
            return C.grep(C.timers, function (e) {
              return t === e.elem;
            }).length;
          }),
          (C.offset = {
            setOffset: function (t, e, i) {
              var n,
                s,
                r,
                a,
                o,
                l,
                c = C.css(t, 'position'),
                h = C(t),
                d = {};
              'static' === c && (t.style.position = 'relative'),
                (o = h.offset()),
                (r = C.css(t, 'top')),
                (l = C.css(t, 'left')),
                ('absolute' === c || 'fixed' === c) && (r + l).indexOf('auto') > -1
                  ? ((a = (n = h.position()).top), (s = n.left))
                  : ((a = parseFloat(r) || 0), (s = parseFloat(l) || 0)),
                v(e) && (e = e.call(t, i, C.extend({}, o))),
                null != e.top && (d.top = e.top - o.top + a),
                null != e.left && (d.left = e.left - o.left + s),
                'using' in e ? e.using.call(t, d) : h.css(d);
            },
          }),
          C.fn.extend({
            offset: function (t) {
              if (arguments.length)
                return void 0 === t
                  ? this
                  : this.each(function (e) {
                      C.offset.setOffset(this, t, e);
                    });
              var e,
                i,
                n = this[0];
              return n
                ? n.getClientRects().length
                  ? ((e = n.getBoundingClientRect()),
                    (i = n.ownerDocument.defaultView),
                    { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var t,
                  e,
                  i,
                  n = this[0],
                  s = { top: 0, left: 0 };
                if ('fixed' === C.css(n, 'position')) e = n.getBoundingClientRect();
                else {
                  for (
                    e = this.offset(),
                      i = n.ownerDocument,
                      t = n.offsetParent || i.documentElement;
                    t &&
                    (t === i.body || t === i.documentElement) &&
                    'static' === C.css(t, 'position');

                  )
                    t = t.parentNode;
                  t &&
                    t !== n &&
                    1 === t.nodeType &&
                    (((s = C(t).offset()).top += C.css(t, 'borderTopWidth', !0)),
                    (s.left += C.css(t, 'borderLeftWidth', !0)));
                }
                return {
                  top: e.top - s.top - C.css(n, 'marginTop', !0),
                  left: e.left - s.left - C.css(n, 'marginLeft', !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var t = this.offsetParent; t && 'static' === C.css(t, 'position'); )
                  t = t.offsetParent;
                return t || at;
              });
            },
          }),
          C.each(
            { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
            function (t, e) {
              var i = 'pageYOffset' === e;
              C.fn[t] = function (n) {
                return q(
                  this,
                  function (t, n, s) {
                    var r;
                    if (
                      (b(t) ? (r = t) : 9 === t.nodeType && (r = t.defaultView),
                      void 0 === s)
                    )
                      return r ? r[e] : t[n];
                    r
                      ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset)
                      : (t[n] = s);
                  },
                  t,
                  n,
                  arguments.length,
                );
              };
            },
          ),
          C.each(['top', 'left'], function (t, e) {
            C.cssHooks[e] = qt(m.pixelPosition, function (t, i) {
              if (i) return (i = Wt(t, e)), jt.test(i) ? C(t).position()[e] + 'px' : i;
            });
          }),
          C.each({ Height: 'height', Width: 'width' }, function (t, e) {
            C.each(
              { padding: 'inner' + t, content: e, '': 'outer' + t },
              function (i, n) {
                C.fn[n] = function (s, r) {
                  var a = arguments.length && (i || 'boolean' != typeof s),
                    o = i || (!0 === s || !0 === r ? 'margin' : 'border');
                  return q(
                    this,
                    function (e, i, s) {
                      var r;
                      return b(e)
                        ? 0 === n.indexOf('outer')
                          ? e['inner' + t]
                          : e.document.documentElement['client' + t]
                        : 9 === e.nodeType
                        ? ((r = e.documentElement),
                          Math.max(
                            e.body['scroll' + t],
                            r['scroll' + t],
                            e.body['offset' + t],
                            r['offset' + t],
                            r['client' + t],
                          ))
                        : void 0 === s
                        ? C.css(e, i, o)
                        : C.style(e, i, s, o);
                    },
                    e,
                    a ? s : void 0,
                    a,
                  );
                };
              },
            );
          }),
          C.each(
            [
              'ajaxStart',
              'ajaxStop',
              'ajaxComplete',
              'ajaxError',
              'ajaxSuccess',
              'ajaxSend',
            ],
            function (t, e) {
              C.fn[e] = function (t) {
                return this.on(e, t);
              };
            },
          ),
          C.fn.extend({
            bind: function (t, e, i) {
              return this.on(t, null, e, i);
            },
            unbind: function (t, e) {
              return this.off(t, null, e);
            },
            delegate: function (t, e, i, n) {
              return this.on(e, t, i, n);
            },
            undelegate: function (t, e, i) {
              return 1 === arguments.length
                ? this.off(t, '**')
                : this.off(e, t || '**', i);
            },
            hover: function (t, e) {
              return this.mouseenter(t).mouseleave(e || t);
            },
          }),
          C.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
              ' ',
            ),
            function (t, e) {
              C.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
              };
            },
          );
        var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (C.proxy = function (t, e) {
          var i, n, s;
          if (('string' == typeof e && ((i = t[e]), (e = t), (t = i)), v(t)))
            return (
              (n = o.call(arguments, 2)),
              (s = function () {
                return t.apply(e || this, n.concat(o.call(arguments)));
              }),
              (s.guid = t.guid = t.guid || C.guid++),
              s
            );
        }),
          (C.holdReady = function (t) {
            t ? C.readyWait++ : C.ready(!0);
          }),
          (C.isArray = Array.isArray),
          (C.parseJSON = JSON.parse),
          (C.nodeName = P),
          (C.isFunction = v),
          (C.isWindow = b),
          (C.camelCase = X),
          (C.type = _),
          (C.now = Date.now),
          (C.isNumeric = function (t) {
            var e = C.type(t);
            return ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t));
          }),
          (C.trim = function (t) {
            return null == t ? '' : (t + '').replace(Xe, '');
          }),
          void 0 ===
            (i = function () {
              return C;
            }.apply(e, [])) || (t.exports = i);
        var Ke = n.jQuery,
          Je = n.$;
        return (
          (C.noConflict = function (t) {
            return n.$ === C && (n.$ = Je), t && n.jQuery === C && (n.jQuery = Ke), C;
          }),
          void 0 === s && (n.jQuery = n.$ = C),
          C
        );
      });
    },
    457: function (t, e, i) {
      var n,
        s = i(563);
      !(function (r, a) {
        void 0 === a && h('Pagination requires jQuery.');
        var o = 'pagination',
          l = '__pagination-';
        a.fn.pagination && (o = 'pagination2'),
          (a.fn[o] = function (t) {
            if (void 0 === t) return this;
            var e = a(this),
              i = a.extend({}, a.fn[o].defaults, t),
              n = {
                initialize: function () {
                  var t = this;
                  if (
                    (e.data('pagination') || e.data('pagination', {}),
                    !1 !== t.callHook('beforeInit'))
                  ) {
                    e.data('pagination').initialized && a('.paginationjs', e).remove(),
                      (t.disabled = !!i.disabled);
                    var n = (t.model = { pageRange: i.pageRange, pageSize: i.pageSize });
                    t.parseDataSource(i.dataSource, function (s) {
                      (t.isAsync = c.isString(s)),
                        c.isArray(s) && (n.totalNumber = i.totalNumber = s.length),
                        (t.isDynamicTotalNumber = t.isAsync && i.totalNumberLocator);
                      var r = t.render(!0);
                      i.className && r.addClass(i.className),
                        (n.el = r),
                        e['bottom' === i.position ? 'append' : 'prepend'](r),
                        t.observer(),
                        (e.data('pagination').initialized = !0),
                        t.callHook('afterInit', r);
                    });
                  }
                },
                render: function (t) {
                  var e = this,
                    n = e.model,
                    s = n.el || a('<div class="paginationjs"></div>'),
                    r = !0 !== t;
                  e.callHook('beforeRender', r);
                  var o = n.pageNumber || i.pageNumber,
                    l = i.pageRange || 0,
                    c = e.getTotalPage(),
                    h = o - l,
                    d = o + l;
                  return (
                    d > c && ((d = c), (h = (h = c - 2 * l) < 1 ? 1 : h)),
                    h <= 1 && ((h = 1), (d = Math.min(2 * l + 1, c))),
                    s.html(
                      e.generateHTML({
                        currentPage: o,
                        pageRange: l,
                        rangeStart: h,
                        rangeEnd: d,
                      }),
                    ),
                    i.hideWhenLessThanOnePage && s[c <= 1 ? 'hide' : 'show'](),
                    e.callHook('afterRender', r),
                    s
                  );
                },
                generatePageNumbersHTML: function (t) {
                  var e,
                    n = t.currentPage,
                    s = this.getTotalPage(),
                    r = t.rangeStart,
                    a = t.rangeEnd,
                    o = '',
                    l = i.pageLink,
                    c = i.ellipsisText,
                    h = i.classPrefix,
                    d = i.activeClassName,
                    u = i.disableClassName;
                  if (null === i.pageRange) {
                    for (e = 1; e <= s; e++)
                      o +=
                        e == n
                          ? '<li class="' +
                            h +
                            '-page J-paginationjs-page ' +
                            d +
                            '" data-num="' +
                            e +
                            '"><a>' +
                            e +
                            '</a></li>'
                          : '<li class="' +
                            h +
                            '-page J-paginationjs-page" data-num="' +
                            e +
                            '"><a href="' +
                            l +
                            '">' +
                            e +
                            '</a></li>';
                    return o;
                  }
                  if (r <= 3)
                    for (e = 1; e < r; e++)
                      o +=
                        e == n
                          ? '<li class="' +
                            h +
                            '-page J-paginationjs-page ' +
                            d +
                            '" data-num="' +
                            e +
                            '"><a>' +
                            e +
                            '</a></li>'
                          : '<li class="' +
                            h +
                            '-page J-paginationjs-page" data-num="' +
                            e +
                            '"><a href="' +
                            l +
                            '">' +
                            e +
                            '</a></li>';
                  else
                    i.showFirstOnEllipsisShow &&
                      (o +=
                        '<li class="' +
                        h +
                        '-page ' +
                        h +
                        '-first J-paginationjs-page" data-num="1"><a href="' +
                        l +
                        '">1</a></li>'),
                      (o +=
                        '<li class="' + h + '-ellipsis ' + u + '"><a>' + c + '</a></li>');
                  for (e = r; e <= a; e++)
                    o +=
                      e == n
                        ? '<li class="' +
                          h +
                          '-page J-paginationjs-page ' +
                          d +
                          '" data-num="' +
                          e +
                          '"><a>' +
                          e +
                          '</a></li>'
                        : '<li class="' +
                          h +
                          '-page J-paginationjs-page" data-num="' +
                          e +
                          '"><a href="' +
                          l +
                          '">' +
                          e +
                          '</a></li>';
                  if (a >= s - 2)
                    for (e = a + 1; e <= s; e++)
                      o +=
                        '<li class="' +
                        h +
                        '-page J-paginationjs-page" data-num="' +
                        e +
                        '"><a href="' +
                        l +
                        '">' +
                        e +
                        '</a></li>';
                  else
                    (o +=
                      '<li class="' + h + '-ellipsis ' + u + '"><a>' + c + '</a></li>'),
                      i.showLastOnEllipsisShow &&
                        (o +=
                          '<li class="' +
                          h +
                          '-page ' +
                          h +
                          '-last J-paginationjs-page" data-num="' +
                          s +
                          '"><a href="' +
                          l +
                          '">' +
                          s +
                          '</a></li>');
                  return o;
                },
                generateHTML: function (t) {
                  var e = this,
                    n = t.currentPage,
                    s = e.getTotalPage(),
                    r = e.getTotalNumber(),
                    o = i.showPrevious,
                    l = i.showNext,
                    c = i.showPageNumbers,
                    h = i.showNavigator,
                    d = i.showGoInput,
                    u = i.showGoButton,
                    p = i.pageLink,
                    f = i.prevText,
                    g = i.nextText,
                    m = i.goButtonText,
                    v = i.classPrefix,
                    b = i.disableClassName,
                    y = i.ulClassName,
                    x = '',
                    w = '<input type="text" class="J-paginationjs-go-pagenumber">',
                    _ =
                      '<input type="button" class="J-paginationjs-go-button" value="' +
                      m +
                      '">',
                    k = a.isFunction(i.formatNavigator)
                      ? i.formatNavigator(n, s, r)
                      : i.formatNavigator,
                    C = a.isFunction(i.formatGoInput)
                      ? i.formatGoInput(w, n, s, r)
                      : i.formatGoInput,
                    S = a.isFunction(i.formatGoButton)
                      ? i.formatGoButton(_, n, s, r)
                      : i.formatGoButton,
                    T = a.isFunction(i.autoHidePrevious)
                      ? i.autoHidePrevious()
                      : i.autoHidePrevious,
                    D = a.isFunction(i.autoHideNext) ? i.autoHideNext() : i.autoHideNext,
                    M = a.isFunction(i.header) ? i.header(n, s, r) : i.header,
                    E = a.isFunction(i.footer) ? i.footer(n, s, r) : i.footer;
                  return (
                    M &&
                      (x += e.replaceVariables(M, {
                        currentPage: n,
                        totalPage: s,
                        totalNumber: r,
                      })),
                    (o || c || l) &&
                      ((x += '<div class="paginationjs-pages">'),
                      (x += y ? '<ul class="' + y + '">' : '<ul>'),
                      o &&
                        (n <= 1
                          ? T ||
                            (x +=
                              '<li class="' +
                              v +
                              '-prev ' +
                              b +
                              '"><a>' +
                              f +
                              '</a></li>')
                          : (x +=
                              '<li class="' +
                              v +
                              '-prev J-paginationjs-previous" data-num="' +
                              (n - 1) +
                              '" title="Previous page"><a href="' +
                              p +
                              '">' +
                              f +
                              '</a></li>')),
                      c && (x += e.generatePageNumbersHTML(t)),
                      l &&
                        (n >= s
                          ? D ||
                            (x +=
                              '<li class="' +
                              v +
                              '-next ' +
                              b +
                              '"><a>' +
                              g +
                              '</a></li>')
                          : (x +=
                              '<li class="' +
                              v +
                              '-next J-paginationjs-next" data-num="' +
                              (n + 1) +
                              '" title="Next page"><a href="' +
                              p +
                              '">' +
                              g +
                              '</a></li>')),
                      (x += '</ul></div>')),
                    h &&
                      k &&
                      (x +=
                        '<div class="' +
                        v +
                        '-nav J-paginationjs-nav">' +
                        e.replaceVariables(k, {
                          currentPage: n,
                          totalPage: s,
                          totalNumber: r,
                        }) +
                        '</div>'),
                    d &&
                      C &&
                      (x +=
                        '<div class="' +
                        v +
                        '-go-input">' +
                        e.replaceVariables(C, {
                          currentPage: n,
                          totalPage: s,
                          totalNumber: r,
                          input: w,
                        }) +
                        '</div>'),
                    u &&
                      S &&
                      (x +=
                        '<div class="' +
                        v +
                        '-go-button">' +
                        e.replaceVariables(S, {
                          currentPage: n,
                          totalPage: s,
                          totalNumber: r,
                          button: _,
                        }) +
                        '</div>'),
                    E &&
                      (x += e.replaceVariables(E, {
                        currentPage: n,
                        totalPage: s,
                        totalNumber: r,
                      })),
                    x
                  );
                },
                findTotalNumberFromRemoteResponse: function (t) {
                  this.model.totalNumber = i.totalNumberLocator(t);
                },
                go: function (t, n) {
                  var s = this,
                    r = s.model;
                  if (!s.disabled) {
                    var o = t;
                    if ((o = parseInt(o)) && !(o < 1)) {
                      var l = i.pageSize,
                        h = s.getTotalNumber(),
                        d = s.getTotalPage();
                      if (!(h > 0 && o > d))
                        if (s.isAsync) {
                          var u = {},
                            p = i.alias || {};
                          (u[p.pageSize ? p.pageSize : 'pageSize'] = l),
                            (u[p.pageNumber ? p.pageNumber : 'pageNumber'] = o);
                          var f = a.isFunction(i.ajax) ? i.ajax() : i.ajax,
                            g = {
                              type: 'get',
                              cache: !1,
                              data: {},
                              contentType:
                                'application/x-www-form-urlencoded; charset=UTF-8',
                              dataType: 'json',
                              async: !0,
                            };
                          a.extend(!0, g, f),
                            a.extend(g.data, u),
                            (g.url = i.dataSource),
                            (g.success = function (t) {
                              s.isDynamicTotalNumber
                                ? s.findTotalNumberFromRemoteResponse(t)
                                : (s.model.totalNumber = i.totalNumber),
                                m(s.filterDataByLocator(t));
                            }),
                            (g.error = function (t, e, n) {
                              i.formatAjaxError && i.formatAjaxError(t, e, n), s.enable();
                            }),
                            s.disable(),
                            a.ajax(g);
                        } else m(s.getDataFragment(o));
                    }
                  }
                  function m(t) {
                    if (!1 === s.callHook('beforePaging', o)) return !1;
                    if (
                      ((r.direction =
                        void 0 === r.pageNumber ? 0 : o > r.pageNumber ? 1 : -1),
                      (r.pageNumber = o),
                      s.render(),
                      s.disabled && s.isAsync && s.enable(),
                      (e.data('pagination').model = r),
                      i.formatResult)
                    ) {
                      var l = a.extend(!0, [], t);
                      c.isArray((t = i.formatResult(l))) || (t = l);
                    }
                    (e.data('pagination').currentPageData = t),
                      s.doCallback(t, n),
                      s.callHook('afterPaging', o),
                      1 == o && s.callHook('afterIsFirstPage'),
                      o == s.getTotalPage() && s.callHook('afterIsLastPage');
                  }
                },
                doCallback: function (t, e) {
                  var n = this.model;
                  a.isFunction(e)
                    ? e(t, n)
                    : a.isFunction(i.callback) && i.callback(t, n);
                },
                destroy: function () {
                  !1 !== this.callHook('beforeDestroy') &&
                    (this.model.el.remove(),
                    e.off(),
                    a('#paginationjs-style').remove(),
                    this.callHook('afterDestroy'));
                },
                previous: function (t) {
                  this.go(this.model.pageNumber - 1, t);
                },
                next: function (t) {
                  this.go(this.model.pageNumber + 1, t);
                },
                disable: function () {
                  var t = this,
                    e = t.isAsync ? 'async' : 'sync';
                  !1 !== t.callHook('beforeDisable', e) &&
                    ((t.disabled = !0),
                    (t.model.disabled = !0),
                    t.callHook('afterDisable', e));
                },
                enable: function () {
                  var t = this,
                    e = t.isAsync ? 'async' : 'sync';
                  !1 !== t.callHook('beforeEnable', e) &&
                    ((t.disabled = !1),
                    (t.model.disabled = !1),
                    t.callHook('afterEnable', e));
                },
                refresh: function (t) {
                  this.go(this.model.pageNumber, t);
                },
                show: function () {
                  this.model.el.is(':visible') || this.model.el.show();
                },
                hide: function () {
                  this.model.el.is(':visible') && this.model.el.hide();
                },
                replaceVariables: function (t, e) {
                  var i;
                  for (var n in e) {
                    var s = e[n],
                      r = new RegExp('<%=\\s*' + n + '\\s*%>', 'img');
                    i = (i || t).replace(r, s);
                  }
                  return i;
                },
                getDataFragment: function (t) {
                  var e = i.pageSize,
                    n = i.dataSource,
                    s = this.getTotalNumber(),
                    r = e * (t - 1) + 1,
                    a = Math.min(t * e, s);
                  return n.slice(r - 1, a);
                },
                getTotalNumber: function () {
                  return this.model.totalNumber || i.totalNumber || 0;
                },
                getTotalPage: function () {
                  return Math.ceil(this.getTotalNumber() / i.pageSize);
                },
                getLocator: function (t) {
                  var e;
                  return (
                    'string' == typeof t
                      ? (e = t)
                      : a.isFunction(t)
                      ? (e = t())
                      : h('"locator" is incorrect. (String | Function)'),
                    e
                  );
                },
                filterDataByLocator: function (t) {
                  var e,
                    n = this.getLocator(i.locator);
                  if (c.isObject(t)) {
                    try {
                      a.each(n.split('.'), function (i, n) {
                        e = (e || t)[n];
                      });
                    } catch (t) {}
                    e
                      ? c.isArray(e) || h('dataSource.' + n + ' must be an Array.')
                      : h('dataSource.' + n + ' is undefined.');
                  }
                  return e || t;
                },
                parseDataSource: function (t, e) {
                  var n = this;
                  c.isObject(t)
                    ? e((i.dataSource = n.filterDataByLocator(t)))
                    : c.isArray(t)
                    ? e((i.dataSource = t))
                    : a.isFunction(t)
                    ? i.dataSource(function (t) {
                        c.isArray(t) ||
                          h('The parameter of "done" Function should be an Array.'),
                          n.parseDataSource.call(n, t, e);
                      })
                    : 'string' == typeof t
                    ? (/^https?|file:/.test(t) && (i.ajaxDataType = 'jsonp'), e(t))
                    : h('Unexpected type of "dataSource".');
                },
                callHook: function (t) {
                  var n,
                    s = e.data('pagination'),
                    o = Array.prototype.slice.apply(arguments);
                  return (
                    o.shift(),
                    i[t] && a.isFunction(i[t]) && !1 === i[t].apply(r, o) && (n = !1),
                    s.hooks &&
                      s.hooks[t] &&
                      a.each(s.hooks[t], function (t, e) {
                        !1 === e.apply(r, o) && (n = !1);
                      }),
                    !1 !== n
                  );
                },
                observer: function () {
                  var t = this,
                    n = t.model.el;
                  e.on(l + 'go', function (e, i, n) {
                    (i = parseInt(a.trim(i))) &&
                      (a.isNumeric(i) || h('"pageNumber" is incorrect. (Number)'),
                      t.go(i, n));
                  }),
                    n.delegate('.J-paginationjs-page', 'click', function (e) {
                      var n = a(e.currentTarget),
                        s = a.trim(n.attr('data-num'));
                      if (
                        s &&
                        !n.hasClass(i.disableClassName) &&
                        !n.hasClass(i.activeClassName)
                      )
                        return (
                          !1 !== t.callHook('beforePageOnClick', e, s) &&
                          (t.go(s),
                          t.callHook('afterPageOnClick', e, s),
                          !!i.pageLink && void 0)
                        );
                    }),
                    n.delegate('.J-paginationjs-previous', 'click', function (e) {
                      var n = a(e.currentTarget),
                        s = a.trim(n.attr('data-num'));
                      if (s && !n.hasClass(i.disableClassName))
                        return (
                          !1 !== t.callHook('beforePreviousOnClick', e, s) &&
                          (t.go(s),
                          t.callHook('afterPreviousOnClick', e, s),
                          !!i.pageLink && void 0)
                        );
                    }),
                    n.delegate('.J-paginationjs-next', 'click', function (e) {
                      var n = a(e.currentTarget),
                        s = a.trim(n.attr('data-num'));
                      if (s && !n.hasClass(i.disableClassName))
                        return (
                          !1 !== t.callHook('beforeNextOnClick', e, s) &&
                          (t.go(s),
                          t.callHook('afterNextOnClick', e, s),
                          !!i.pageLink && void 0)
                        );
                    }),
                    n.delegate('.J-paginationjs-go-button', 'click', function (i) {
                      var s = a('.J-paginationjs-go-pagenumber', n).val();
                      if (!1 === t.callHook('beforeGoButtonOnClick', i, s)) return !1;
                      e.trigger(l + 'go', s), t.callHook('afterGoButtonOnClick', i, s);
                    }),
                    n.delegate('.J-paginationjs-go-pagenumber', 'keyup', function (i) {
                      if (13 === i.which) {
                        var s = a(i.currentTarget).val();
                        if (!1 === t.callHook('beforeGoInputOnEnter', i, s)) return !1;
                        e.trigger(l + 'go', s),
                          a('.J-paginationjs-go-pagenumber', n).focus(),
                          t.callHook('afterGoInputOnEnter', i, s);
                      }
                    }),
                    e.on(l + 'previous', function (e, i) {
                      t.previous(i);
                    }),
                    e.on(l + 'next', function (e, i) {
                      t.next(i);
                    }),
                    e.on(l + 'disable', function () {
                      t.disable();
                    }),
                    e.on(l + 'enable', function () {
                      t.enable();
                    }),
                    e.on(l + 'refresh', function (e, i) {
                      t.refresh(i);
                    }),
                    e.on(l + 'show', function () {
                      t.show();
                    }),
                    e.on(l + 'hide', function () {
                      t.hide();
                    }),
                    e.on(l + 'destroy', function () {
                      t.destroy();
                    });
                  var s = Math.max(t.getTotalPage(), 1),
                    r = i.pageNumber;
                  t.isDynamicTotalNumber && (r = 1),
                    i.triggerPagingOnInit && e.trigger(l + 'go', Math.min(r, s));
                },
              };
            if (e.data('pagination') && !0 === e.data('pagination').initialized) {
              if (a.isNumeric(t))
                return e.trigger.call(this, l + 'go', t, arguments[1]), this;
              if ('string' == typeof t) {
                var s = Array.prototype.slice.apply(arguments);
                switch (((s[0] = l + s[0]), t)) {
                  case 'previous':
                  case 'next':
                  case 'go':
                  case 'disable':
                  case 'enable':
                  case 'refresh':
                  case 'show':
                  case 'hide':
                  case 'destroy':
                    e.trigger.apply(this, s);
                    break;
                  case 'getSelectedPageNum':
                    return e.data('pagination').model
                      ? e.data('pagination').model.pageNumber
                      : e.data('pagination').attributes.pageNumber;
                  case 'getTotalPage':
                    return Math.ceil(
                      e.data('pagination').model.totalNumber /
                        e.data('pagination').model.pageSize,
                    );
                  case 'getSelectedPageData':
                    return e.data('pagination').currentPageData;
                  case 'isDisabled':
                    return !0 === e.data('pagination').model.disabled;
                  default:
                    h('Unknown action: ' + t);
                }
                return this;
              }
              u(e);
            } else c.isObject(t) || h('Illegal options');
            return d(i), n.initialize(), this;
          }),
          (a.fn[o].defaults = {
            totalNumber: 0,
            pageNumber: 1,
            pageSize: 10,
            pageRange: 2,
            showPrevious: !0,
            showNext: !0,
            showPageNumbers: !0,
            showNavigator: !1,
            showGoInput: !1,
            showGoButton: !1,
            pageLink: '',
            prevText: '&laquo;',
            nextText: '&raquo;',
            ellipsisText: '...',
            goButtonText: 'Go',
            classPrefix: 'paginationjs',
            activeClassName: 'active',
            disableClassName: 'disabled',
            inlineStyle: !0,
            formatNavigator: '<%= currentPage %> / <%= totalPage %>',
            formatGoInput: '<%= input %>',
            formatGoButton: '<%= button %>',
            position: 'bottom',
            autoHidePrevious: !1,
            autoHideNext: !1,
            triggerPagingOnInit: !0,
            hideWhenLessThanOnePage: !1,
            showFirstOnEllipsisShow: !0,
            showLastOnEllipsisShow: !0,
            callback: function () {},
          }),
          (a.fn.addHook = function (t, e) {
            arguments.length < 2 && h('Missing argument.'),
              a.isFunction(e) || h('callback must be a function.');
            var i = a(this),
              n = i.data('pagination');
            n || (i.data('pagination', {}), (n = i.data('pagination'))),
              !n.hooks && (n.hooks = {}),
              (n.hooks[t] = n.hooks[t] || []),
              n.hooks[t].push(e);
          }),
          (a[o] = function (t, e) {
            var i;
            if (
              (arguments.length < 2 && h('Requires two parameters.'),
              (i = 'string' != typeof t && t instanceof s ? t : a(t)).length)
            )
              return i.pagination(e), i;
          });
        var c = {};
        function h(t) {
          throw new Error('Pagination: ' + t);
        }
        function d(t) {
          t.dataSource || h('"dataSource" is required.'),
            'string' == typeof t.dataSource
              ? void 0 === t.totalNumberLocator
                ? void 0 === t.totalNumber
                  ? h('"totalNumber" is required.')
                  : a.isNumeric(t.totalNumber) ||
                    h('"totalNumber" is incorrect. (Number)')
                : a.isFunction(t.totalNumberLocator) ||
                  h('"totalNumberLocator" should be a Function.')
              : c.isObject(t.dataSource) &&
                (void 0 === t.locator
                  ? h('"dataSource" is an Object, please specify "locator".')
                  : 'string' == typeof t.locator ||
                    a.isFunction(t.locator) ||
                    h(t.locator + ' is incorrect. (String | Function)')),
            void 0 === t.formatResult ||
              a.isFunction(t.formatResult) ||
              h('"formatResult" should be a Function.');
        }
        function u(t) {
          a.each(
            [
              'go',
              'previous',
              'next',
              'disable',
              'enable',
              'refresh',
              'show',
              'hide',
              'destroy',
            ],
            function (e, i) {
              t.off(l + i);
            },
          ),
            t.data('pagination', {}),
            a('.paginationjs', t).remove();
        }
        a.each(['Object', 'Array', 'String'], function (t, e) {
          c['is' + e] = function (t) {
            return (
              (function (t, e) {
                return (
                  'object' == (e = typeof t)
                    ? null == t
                      ? 'null'
                      : Object.prototype.toString.call(t).slice(8, -1)
                    : e
                ).toLowerCase();
              })(t) === e.toLowerCase()
            );
          };
        }),
          void 0 ===
            (n = function () {
              return a;
            }.call(e, i, e, t)) || (t.exports = n);
      })(this, i(563));
    },
    561: function (t, e, i) {
      'use strict';
      function n({ swiper: t, runCallbacks: e, direction: i, step: n }) {
        const { activeIndex: s, previousIndex: r } = t;
        let a = i;
        if (
          (a || (a = s > r ? 'next' : s < r ? 'prev' : 'reset'),
          t.emit(`transition${n}`),
          e && s !== r)
        ) {
          if ('reset' === a) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`),
            'next' === a
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      i.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    112: function (t, e, i) {
      'use strict';
      function n(t = '') {
        return `.${t
          .trim()
          .replace(/([\.:!\/])/g, '\\$1')
          .replace(/ /g, '.')}`;
      }
      i.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    829: function (t, e, i) {
      'use strict';
      function n(t) {
        return (
          null !== t &&
          'object' == typeof t &&
          'constructor' in t &&
          t.constructor === Object
        );
      }
      function s(t = {}, e = {}) {
        Object.keys(e).forEach(i => {
          void 0 === t[i]
            ? (t[i] = e[i])
            : n(e[i]) && n(t[i]) && Object.keys(e[i]).length > 0 && s(t[i], e[i]);
        });
      }
      i.d(e, {
        W_: function () {
          return Z;
        },
        tl: function () {
          return tt;
        },
        ZP: function () {
          return K;
        },
      });
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function a() {
        const t = 'undefined' != typeof document ? document : {};
        return s(t, r), t;
      }
      const o = {
        document: r,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: t =>
          'undefined' == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
          'undefined' != typeof setTimeout && clearTimeout(t);
        },
      };
      function l() {
        const t = 'undefined' != typeof window ? window : {};
        return s(t, o), t;
      }
      class c extends Array {
        constructor(t) {
          'number' == typeof t
            ? super(t)
            : (super(...(t || [])),
              (function (t) {
                const e = t.__proto__;
                Object.defineProperty(t, '__proto__', {
                  get: () => e,
                  set(t) {
                    e.__proto__ = t;
                  },
                });
              })(this));
        }
      }
      function h(t = []) {
        const e = [];
        return (
          t.forEach(t => {
            Array.isArray(t) ? e.push(...h(t)) : e.push(t);
          }),
          e
        );
      }
      function d(t, e) {
        return Array.prototype.filter.call(t, e);
      }
      function u(t, e) {
        const i = l(),
          n = a();
        let s = [];
        if (!e && t instanceof c) return t;
        if (!t) return new c(s);
        if ('string' == typeof t) {
          const i = t.trim();
          if (i.indexOf('<') >= 0 && i.indexOf('>') >= 0) {
            let t = 'div';
            0 === i.indexOf('<li') && (t = 'ul'),
              0 === i.indexOf('<tr') && (t = 'tbody'),
              (0 !== i.indexOf('<td') && 0 !== i.indexOf('<th')) || (t = 'tr'),
              0 === i.indexOf('<tbody') && (t = 'table'),
              0 === i.indexOf('<option') && (t = 'select');
            const e = n.createElement(t);
            e.innerHTML = i;
            for (let t = 0; t < e.childNodes.length; t += 1) s.push(e.childNodes[t]);
          } else
            s = (function (t, e) {
              if ('string' != typeof t) return [t];
              const i = [],
                n = e.querySelectorAll(t);
              for (let t = 0; t < n.length; t += 1) i.push(n[t]);
              return i;
            })(t.trim(), e || n);
        } else if (t.nodeType || t === i || t === n) s.push(t);
        else if (Array.isArray(t)) {
          if (t instanceof c) return t;
          s = t;
        }
        return new c(
          (function (t) {
            const e = [];
            for (let i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
            return e;
          })(s),
        );
      }
      u.fn = c.prototype;
      const p = 'resize scroll'.split(' ');
      function f(t) {
        return function (...e) {
          if (void 0 === e[0]) {
            for (let e = 0; e < this.length; e += 1)
              p.indexOf(t) < 0 && (t in this[e] ? this[e][t]() : u(this[e]).trigger(t));
            return this;
          }
          return this.on(t, ...e);
        };
      }
      f('click'),
        f('blur'),
        f('focus'),
        f('focusin'),
        f('focusout'),
        f('keyup'),
        f('keydown'),
        f('keypress'),
        f('submit'),
        f('change'),
        f('mousedown'),
        f('mousemove'),
        f('mouseup'),
        f('mouseenter'),
        f('mouseleave'),
        f('mouseout'),
        f('mouseover'),
        f('touchstart'),
        f('touchend'),
        f('touchmove'),
        f('resize'),
        f('scroll');
      const g = {
        addClass: function (...t) {
          const e = h(t.map(t => t.split(' ')));
          return (
            this.forEach(t => {
              t.classList.add(...e);
            }),
            this
          );
        },
        removeClass: function (...t) {
          const e = h(t.map(t => t.split(' ')));
          return (
            this.forEach(t => {
              t.classList.remove(...e);
            }),
            this
          );
        },
        hasClass: function (...t) {
          const e = h(t.map(t => t.split(' ')));
          return (
            d(this, t => e.filter(e => t.classList.contains(e)).length > 0).length > 0
          );
        },
        toggleClass: function (...t) {
          const e = h(t.map(t => t.split(' ')));
          this.forEach(t => {
            e.forEach(e => {
              t.classList.toggle(e);
            });
          });
        },
        attr: function (t, e) {
          if (1 === arguments.length && 'string' == typeof t)
            return this[0] ? this[0].getAttribute(t) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(t, e);
            else for (const e in t) (this[i][e] = t[e]), this[i].setAttribute(e, t[e]);
          return this;
        },
        removeAttr: function (t) {
          for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
          return this;
        },
        transform: function (t) {
          for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
          return this;
        },
        transition: function (t) {
          for (let e = 0; e < this.length; e += 1)
            this[e].style.transitionDuration = 'string' != typeof t ? `${t}ms` : t;
          return this;
        },
        on: function (...t) {
          let [e, i, n, s] = t;
          function r(t) {
            const e = t.target;
            if (!e) return;
            const s = t.target.dom7EventData || [];
            if ((s.indexOf(t) < 0 && s.unshift(t), u(e).is(i))) n.apply(e, s);
            else {
              const t = u(e).parents();
              for (let e = 0; e < t.length; e += 1) u(t[e]).is(i) && n.apply(t[e], s);
            }
          }
          function a(t) {
            const e = (t && t.target && t.target.dom7EventData) || [];
            e.indexOf(t) < 0 && e.unshift(t), n.apply(this, e);
          }
          'function' == typeof t[1] && (([e, n, s] = t), (i = void 0)), s || (s = !1);
          const o = e.split(' ');
          let l;
          for (let t = 0; t < this.length; t += 1) {
            const e = this[t];
            if (i)
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({ listener: n, proxyListener: r }),
                  e.addEventListener(t, r, s);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: n, proxyListener: a }),
                  e.addEventListener(t, a, s);
              }
          }
          return this;
        },
        off: function (...t) {
          let [e, i, n, s] = t;
          'function' == typeof t[1] && (([e, n, s] = t), (i = void 0)), s || (s = !1);
          const r = e.split(' ');
          for (let t = 0; t < r.length; t += 1) {
            const e = r[t];
            for (let t = 0; t < this.length; t += 1) {
              const r = this[t];
              let a;
              if (
                (!i && r.dom7Listeners
                  ? (a = r.dom7Listeners[e])
                  : i && r.dom7LiveListeners && (a = r.dom7LiveListeners[e]),
                a && a.length)
              )
                for (let t = a.length - 1; t >= 0; t -= 1) {
                  const i = a[t];
                  (n && i.listener === n) ||
                  (n && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === n)
                    ? (r.removeEventListener(e, i.proxyListener, s), a.splice(t, 1))
                    : n || (r.removeEventListener(e, i.proxyListener, s), a.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...t) {
          const e = l(),
            i = t[0].split(' '),
            n = t[1];
          for (let s = 0; s < i.length; s += 1) {
            const r = i[s];
            for (let i = 0; i < this.length; i += 1) {
              const s = this[i];
              if (e.CustomEvent) {
                const i = new e.CustomEvent(r, {
                  detail: n,
                  bubbles: !0,
                  cancelable: !0,
                });
                (s.dom7EventData = t.filter((t, e) => e > 0)),
                  s.dispatchEvent(i),
                  (s.dom7EventData = []),
                  delete s.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (t) {
          const e = this;
          return (
            t &&
              e.on('transitionend', function i(n) {
                n.target === this && (t.call(this, n), e.off('transitionend', i));
              }),
            this
          );
        },
        outerWidth: function (t) {
          if (this.length > 0) {
            if (t) {
              const t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue('margin-right')) +
                parseFloat(t.getPropertyValue('margin-left'))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (t) {
          if (this.length > 0) {
            if (t) {
              const t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue('margin-top')) +
                parseFloat(t.getPropertyValue('margin-bottom'))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const t = l();
          return this[0] ? t.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const t = l(),
              e = a(),
              i = this[0],
              n = i.getBoundingClientRect(),
              s = e.body,
              r = i.clientTop || s.clientTop || 0,
              o = i.clientLeft || s.clientLeft || 0,
              c = i === t ? t.scrollY : i.scrollTop,
              h = i === t ? t.scrollX : i.scrollLeft;
            return { top: n.top + c - r, left: n.left + h - o };
          }
          return null;
        },
        css: function (t, e) {
          const i = l();
          let n;
          if (1 === arguments.length) {
            if ('string' != typeof t) {
              for (n = 0; n < this.length; n += 1)
                for (const e in t) this[n].style[e] = t[e];
              return this;
            }
            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(t);
          }
          if (2 === arguments.length && 'string' == typeof t) {
            for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
            return this;
          }
          return this;
        },
        each: function (t) {
          return t
            ? (this.forEach((e, i) => {
                t.apply(e, [e, i]);
              }),
              this)
            : this;
        },
        html: function (t) {
          if (void 0 === t) return this[0] ? this[0].innerHTML : null;
          for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
          return this;
        },
        text: function (t) {
          if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
          for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
          return this;
        },
        is: function (t) {
          const e = l(),
            i = a(),
            n = this[0];
          let s, r;
          if (!n || void 0 === t) return !1;
          if ('string' == typeof t) {
            if (n.matches) return n.matches(t);
            if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
            if (n.msMatchesSelector) return n.msMatchesSelector(t);
            for (s = u(t), r = 0; r < s.length; r += 1) if (s[r] === n) return !0;
            return !1;
          }
          if (t === i) return n === i;
          if (t === e) return n === e;
          if (t.nodeType || t instanceof c) {
            for (s = t.nodeType ? [t] : t, r = 0; r < s.length; r += 1)
              if (s[r] === n) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let t,
            e = this[0];
          if (e) {
            for (t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && (t += 1);
            return t;
          }
        },
        eq: function (t) {
          if (void 0 === t) return this;
          const e = this.length;
          if (t > e - 1) return u([]);
          if (t < 0) {
            const i = e + t;
            return u(i < 0 ? [] : [this[i]]);
          }
          return u([this[t]]);
        },
        append: function (...t) {
          let e;
          const i = a();
          for (let n = 0; n < t.length; n += 1) {
            e = t[n];
            for (let t = 0; t < this.length; t += 1)
              if ('string' == typeof e) {
                const n = i.createElement('div');
                for (n.innerHTML = e; n.firstChild; ) this[t].appendChild(n.firstChild);
              } else if (e instanceof c)
                for (let i = 0; i < e.length; i += 1) this[t].appendChild(e[i]);
              else this[t].appendChild(e);
          }
          return this;
        },
        prepend: function (t) {
          const e = a();
          let i, n;
          for (i = 0; i < this.length; i += 1)
            if ('string' == typeof t) {
              const s = e.createElement('div');
              for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n -= 1)
                this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
            } else if (t instanceof c)
              for (n = 0; n < t.length; n += 1)
                this[i].insertBefore(t[n], this[i].childNodes[0]);
            else this[i].insertBefore(t, this[i].childNodes[0]);
          return this;
        },
        next: function (t) {
          return this.length > 0
            ? t
              ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(t)
                ? u([this[0].nextElementSibling])
                : u([])
              : this[0].nextElementSibling
              ? u([this[0].nextElementSibling])
              : u([])
            : u([]);
        },
        nextAll: function (t) {
          const e = [];
          let i = this[0];
          if (!i) return u([]);
          for (; i.nextElementSibling; ) {
            const n = i.nextElementSibling;
            t ? u(n).is(t) && e.push(n) : e.push(n), (i = n);
          }
          return u(e);
        },
        prev: function (t) {
          if (this.length > 0) {
            const e = this[0];
            return t
              ? e.previousElementSibling && u(e.previousElementSibling).is(t)
                ? u([e.previousElementSibling])
                : u([])
              : e.previousElementSibling
              ? u([e.previousElementSibling])
              : u([]);
          }
          return u([]);
        },
        prevAll: function (t) {
          const e = [];
          let i = this[0];
          if (!i) return u([]);
          for (; i.previousElementSibling; ) {
            const n = i.previousElementSibling;
            t ? u(n).is(t) && e.push(n) : e.push(n), (i = n);
          }
          return u(e);
        },
        parent: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (t
                ? u(this[i].parentNode).is(t) && e.push(this[i].parentNode)
                : e.push(this[i].parentNode));
          return u(e);
        },
        parents: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1) {
            let n = this[i].parentNode;
            for (; n; ) t ? u(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
          }
          return u(e);
        },
        closest: function (t) {
          let e = this;
          return void 0 === t ? u([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
        },
        find: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1) {
            const n = this[i].querySelectorAll(t);
            for (let t = 0; t < n.length; t += 1) e.push(n[t]);
          }
          return u(e);
        },
        children: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1) {
            const n = this[i].children;
            for (let i = 0; i < n.length; i += 1) (t && !u(n[i]).is(t)) || e.push(n[i]);
          }
          return u(e);
        },
        filter: function (t) {
          return u(d(this, t));
        },
        remove: function () {
          for (let t = 0; t < this.length; t += 1)
            this[t].parentNode && this[t].parentNode.removeChild(this[t]);
          return this;
        },
      };
      Object.keys(g).forEach(t => {
        Object.defineProperty(u.fn, t, { value: g[t], writable: !0 });
      });
      var m = u;
      function v(t, e = 0) {
        return setTimeout(t, e);
      }
      function b() {
        return Date.now();
      }
      function y(t) {
        return (
          'object' == typeof t &&
          null !== t &&
          t.constructor &&
          'Object' === Object.prototype.toString.call(t).slice(8, -1)
        );
      }
      function x(...t) {
        const e = Object(t[0]),
          i = ['__proto__', 'constructor', 'prototype'];
        for (let s = 1; s < t.length; s += 1) {
          const r = t[s];
          if (
            null != r &&
            ((n = r),
            !('undefined' != typeof window && void 0 !== window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const t = Object.keys(Object(r)).filter(t => i.indexOf(t) < 0);
            for (let i = 0, n = t.length; i < n; i += 1) {
              const n = t[i],
                s = Object.getOwnPropertyDescriptor(r, n);
              void 0 !== s &&
                s.enumerable &&
                (y(e[n]) && y(r[n])
                  ? r[n].__swiper__
                    ? (e[n] = r[n])
                    : x(e[n], r[n])
                  : !y(e[n]) && y(r[n])
                  ? ((e[n] = {}), r[n].__swiper__ ? (e[n] = r[n]) : x(e[n], r[n]))
                  : (e[n] = r[n]));
            }
          }
        }
        var n;
        return e;
      }
      function w(t, e, i) {
        t.style.setProperty(e, i);
      }
      function _({ swiper: t, targetPosition: e, side: i }) {
        const n = l(),
          s = -t.translate;
        let r,
          a = null;
        const o = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = 'none'),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const c = e > s ? 'next' : 'prev',
          h = (t, e) => ('next' === c && t >= e) || ('prev' === c && t <= e),
          d = () => {
            (r = new Date().getTime()), null === a && (a = r);
            const l = Math.max(Math.min((r - a) / o, 1), 0),
              c = 0.5 - Math.cos(l * Math.PI) / 2;
            let u = s + c * (e - s);
            if ((h(u, e) && (u = e), t.wrapperEl.scrollTo({ [i]: u }), h(u, e)))
              return (
                (t.wrapperEl.style.overflow = 'hidden'),
                (t.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [i]: u });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(d);
          };
        d();
      }
      let k, C, S;
      function T() {
        return (
          k ||
            (k = (function () {
              const t = l(),
                e = a();
              return {
                smoothScroll:
                  e.documentElement && 'scrollBehavior' in e.documentElement.style,
                touch: !!(
                  'ontouchstart' in t ||
                  (t.DocumentTouch && e instanceof t.DocumentTouch)
                ),
                passiveListener: (function () {
                  let e = !1;
                  try {
                    const i = Object.defineProperty({}, 'passive', {
                      get() {
                        e = !0;
                      },
                    });
                    t.addEventListener('testPassiveListener', null, i);
                  } catch (t) {}
                  return e;
                })(),
                gestures: 'ongesturestart' in t,
              };
            })()),
          k
        );
      }
      var D = {
          on(t, e, i) {
            const n = this;
            if ('function' != typeof e) return n;
            const s = i ? 'unshift' : 'push';
            return (
              t.split(' ').forEach(t => {
                n.eventsListeners[t] || (n.eventsListeners[t] = []),
                  n.eventsListeners[t][s](e);
              }),
              n
            );
          },
          once(t, e, i) {
            const n = this;
            if ('function' != typeof e) return n;
            function s(...i) {
              n.off(t, s), s.__emitterProxy && delete s.__emitterProxy, e.apply(n, i);
            }
            return (s.__emitterProxy = e), n.on(t, s, i);
          },
          onAny(t, e) {
            const i = this;
            if ('function' != typeof t) return i;
            const n = e ? 'unshift' : 'push';
            return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i;
          },
          offAny(t) {
            const e = this;
            if (!e.eventsAnyListeners) return e;
            const i = e.eventsAnyListeners.indexOf(t);
            return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
          },
          off(t, e) {
            const i = this;
            return i.eventsListeners
              ? (t.split(' ').forEach(t => {
                  void 0 === e
                    ? (i.eventsListeners[t] = [])
                    : i.eventsListeners[t] &&
                      i.eventsListeners[t].forEach((n, s) => {
                        (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                          i.eventsListeners[t].splice(s, 1);
                      });
                }),
                i)
              : i;
          },
          emit(...t) {
            const e = this;
            if (!e.eventsListeners) return e;
            let i, n, s;
            return (
              'string' == typeof t[0] || Array.isArray(t[0])
                ? ((i = t[0]), (n = t.slice(1, t.length)), (s = e))
                : ((i = t[0].events), (n = t[0].data), (s = t[0].context || e)),
              n.unshift(s),
              (Array.isArray(i) ? i : i.split(' ')).forEach(t => {
                e.eventsAnyListeners &&
                  e.eventsAnyListeners.length &&
                  e.eventsAnyListeners.forEach(e => {
                    e.apply(s, [t, ...n]);
                  }),
                  e.eventsListeners &&
                    e.eventsListeners[t] &&
                    e.eventsListeners[t].forEach(t => {
                      t.apply(s, n);
                    });
              }),
              e
            );
          },
        },
        M = {
          updateSize: function () {
            const t = this;
            let e, i;
            const n = t.$el;
            (e =
              void 0 !== t.params.width && null !== t.params.width
                ? t.params.width
                : n[0].clientWidth),
              (i =
                void 0 !== t.params.height && null !== t.params.height
                  ? t.params.height
                  : n[0].clientHeight),
              (0 === e && t.isHorizontal()) ||
                (0 === i && t.isVertical()) ||
                ((e =
                  e -
                  parseInt(n.css('padding-left') || 0, 10) -
                  parseInt(n.css('padding-right') || 0, 10)),
                (i =
                  i -
                  parseInt(n.css('padding-top') || 0, 10) -
                  parseInt(n.css('padding-bottom') || 0, 10)),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(i) && (i = 0),
                Object.assign(t, {
                  width: e,
                  height: i,
                  size: t.isHorizontal() ? e : i,
                }));
          },
          updateSlides: function () {
            const t = this;
            function e(e) {
              return t.isHorizontal()
                ? e
                : {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                  }[e];
            }
            function i(t, i) {
              return parseFloat(t.getPropertyValue(e(i)) || 0);
            }
            const n = t.params,
              { $wrapperEl: s, size: r, rtlTranslate: a, wrongRTL: o } = t,
              l = t.virtual && n.virtual.enabled,
              c = l ? t.virtual.slides.length : t.slides.length,
              h = s.children(`.${t.params.slideClass}`),
              d = l ? t.virtual.slides.length : h.length;
            let u = [];
            const p = [],
              f = [];
            let g = n.slidesOffsetBefore;
            'function' == typeof g && (g = n.slidesOffsetBefore.call(t));
            let m = n.slidesOffsetAfter;
            'function' == typeof m && (m = n.slidesOffsetAfter.call(t));
            const v = t.snapGrid.length,
              b = t.slidesGrid.length;
            let y = n.spaceBetween,
              x = -g,
              _ = 0,
              k = 0;
            if (void 0 === r) return;
            'string' == typeof y &&
              y.indexOf('%') >= 0 &&
              (y = (parseFloat(y.replace('%', '')) / 100) * r),
              (t.virtualSize = -y),
              a
                ? h.css({ marginLeft: '', marginBottom: '', marginTop: '' })
                : h.css({ marginRight: '', marginBottom: '', marginTop: '' }),
              n.centeredSlides &&
                n.cssMode &&
                (w(t.wrapperEl, '--swiper-centered-offset-before', ''),
                w(t.wrapperEl, '--swiper-centered-offset-after', ''));
            const C = n.grid && n.grid.rows > 1 && t.grid;
            let S;
            C && t.grid.initSlides(d);
            const T =
              'auto' === n.slidesPerView &&
              n.breakpoints &&
              Object.keys(n.breakpoints).filter(
                t => void 0 !== n.breakpoints[t].slidesPerView,
              ).length > 0;
            for (let s = 0; s < d; s += 1) {
              S = 0;
              const a = h.eq(s);
              if ((C && t.grid.updateSlide(s, a, d, e), 'none' !== a.css('display'))) {
                if ('auto' === n.slidesPerView) {
                  T && (h[s].style[e('width')] = '');
                  const r = getComputedStyle(a[0]),
                    o = a[0].style.transform,
                    l = a[0].style.webkitTransform;
                  if (
                    (o && (a[0].style.transform = 'none'),
                    l && (a[0].style.webkitTransform = 'none'),
                    n.roundLengths)
                  )
                    S = t.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                  else {
                    const t = i(r, 'width'),
                      e = i(r, 'padding-left'),
                      n = i(r, 'padding-right'),
                      s = i(r, 'margin-left'),
                      o = i(r, 'margin-right'),
                      l = r.getPropertyValue('box-sizing');
                    if (l && 'border-box' === l) S = t + s + o;
                    else {
                      const { clientWidth: i, offsetWidth: r } = a[0];
                      S = t + e + n + s + o + (r - i);
                    }
                  }
                  o && (a[0].style.transform = o),
                    l && (a[0].style.webkitTransform = l),
                    n.roundLengths && (S = Math.floor(S));
                } else
                  (S = (r - (n.slidesPerView - 1) * y) / n.slidesPerView),
                    n.roundLengths && (S = Math.floor(S)),
                    h[s] && (h[s].style[e('width')] = `${S}px`);
                h[s] && (h[s].swiperSlideSize = S),
                  f.push(S),
                  n.centeredSlides
                    ? ((x = x + S / 2 + _ / 2 + y),
                      0 === _ && 0 !== s && (x = x - r / 2 - y),
                      0 === s && (x = x - r / 2 - y),
                      Math.abs(x) < 0.001 && (x = 0),
                      n.roundLengths && (x = Math.floor(x)),
                      k % n.slidesPerGroup == 0 && u.push(x),
                      p.push(x))
                    : (n.roundLengths && (x = Math.floor(x)),
                      (k - Math.min(t.params.slidesPerGroupSkip, k)) %
                        t.params.slidesPerGroup ==
                        0 && u.push(x),
                      p.push(x),
                      (x = x + S + y)),
                  (t.virtualSize += S + y),
                  (_ = S),
                  (k += 1);
              }
            }
            if (
              ((t.virtualSize = Math.max(t.virtualSize, r) + m),
              a &&
                o &&
                ('slide' === n.effect || 'coverflow' === n.effect) &&
                s.css({ width: `${t.virtualSize + n.spaceBetween}px` }),
              n.setWrapperSize &&
                s.css({ [e('width')]: `${t.virtualSize + n.spaceBetween}px` }),
              C && t.grid.updateWrapperSize(S, u, e),
              !n.centeredSlides)
            ) {
              const e = [];
              for (let i = 0; i < u.length; i += 1) {
                let s = u[i];
                n.roundLengths && (s = Math.floor(s)),
                  u[i] <= t.virtualSize - r && e.push(s);
              }
              (u = e),
                Math.floor(t.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                  u.push(t.virtualSize - r);
            }
            if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
              const i = t.isHorizontal() && a ? 'marginLeft' : e('marginRight');
              h.filter((t, e) => !n.cssMode || e !== h.length - 1).css({ [i]: `${y}px` });
            }
            if (n.centeredSlides && n.centeredSlidesBounds) {
              let t = 0;
              f.forEach(e => {
                t += e + (n.spaceBetween ? n.spaceBetween : 0);
              }),
                (t -= n.spaceBetween);
              const e = t - r;
              u = u.map(t => (t < 0 ? -g : t > e ? e + m : t));
            }
            if (n.centerInsufficientSlides) {
              let t = 0;
              if (
                (f.forEach(e => {
                  t += e + (n.spaceBetween ? n.spaceBetween : 0);
                }),
                (t -= n.spaceBetween),
                t < r)
              ) {
                const e = (r - t) / 2;
                u.forEach((t, i) => {
                  u[i] = t - e;
                }),
                  p.forEach((t, i) => {
                    p[i] = t + e;
                  });
              }
            }
            if (
              (Object.assign(t, {
                slides: h,
                snapGrid: u,
                slidesGrid: p,
                slidesSizesGrid: f,
              }),
              n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
            ) {
              w(t.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
                w(
                  t.wrapperEl,
                  '--swiper-centered-offset-after',
                  t.size / 2 - f[f.length - 1] / 2 + 'px',
                );
              const e = -t.snapGrid[0],
                i = -t.slidesGrid[0];
              (t.snapGrid = t.snapGrid.map(t => t + e)),
                (t.slidesGrid = t.slidesGrid.map(t => t + i));
            }
            d !== c && t.emit('slidesLengthChange'),
              u.length !== v &&
                (t.params.watchOverflow && t.checkOverflow(),
                t.emit('snapGridLengthChange')),
              p.length !== b && t.emit('slidesGridLengthChange'),
              n.watchSlidesProgress && t.updateSlidesOffset();
          },
          updateAutoHeight: function (t) {
            const e = this,
              i = [],
              n = e.virtual && e.params.virtual.enabled;
            let s,
              r = 0;
            'number' == typeof t
              ? e.setTransition(t)
              : !0 === t && e.setTransition(e.params.speed);
            const a = t =>
              n
                ? e.slides.filter(
                    e => parseInt(e.getAttribute('data-swiper-slide-index'), 10) === t,
                  )[0]
                : e.slides.eq(t)[0];
            if ('auto' !== e.params.slidesPerView && e.params.slidesPerView > 1)
              if (e.params.centeredSlides)
                e.visibleSlides.each(t => {
                  i.push(t);
                });
              else
                for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                  const t = e.activeIndex + s;
                  if (t > e.slides.length && !n) break;
                  i.push(a(t));
                }
            else i.push(a(e.activeIndex));
            for (s = 0; s < i.length; s += 1)
              if (void 0 !== i[s]) {
                const t = i[s].offsetHeight;
                r = t > r ? t : r;
              }
            (r || 0 === r) && e.$wrapperEl.css('height', `${r}px`);
          },
          updateSlidesOffset: function () {
            const t = this,
              e = t.slides;
            for (let i = 0; i < e.length; i += 1)
              e[i].swiperSlideOffset = t.isHorizontal()
                ? e[i].offsetLeft
                : e[i].offsetTop;
          },
          updateSlidesProgress: function (t = (this && this.translate) || 0) {
            const e = this,
              i = e.params,
              { slides: n, rtlTranslate: s, snapGrid: r } = e;
            if (0 === n.length) return;
            void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
            let a = -t;
            s && (a = t),
              n.removeClass(i.slideVisibleClass),
              (e.visibleSlidesIndexes = []),
              (e.visibleSlides = []);
            for (let t = 0; t < n.length; t += 1) {
              const o = n[t];
              let l = o.swiperSlideOffset;
              i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
              const c =
                  (a + (i.centeredSlides ? e.minTranslate() : 0) - l) /
                  (o.swiperSlideSize + i.spaceBetween),
                h =
                  (a - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - l) /
                  (o.swiperSlideSize + i.spaceBetween),
                d = -(a - l),
                u = d + e.slidesSizesGrid[t];
              ((d >= 0 && d < e.size - 1) ||
                (u > 1 && u <= e.size) ||
                (d <= 0 && u >= e.size)) &&
                (e.visibleSlides.push(o),
                e.visibleSlidesIndexes.push(t),
                n.eq(t).addClass(i.slideVisibleClass)),
                (o.progress = s ? -c : c),
                (o.originalProgress = s ? -h : h);
            }
            e.visibleSlides = m(e.visibleSlides);
          },
          updateProgress: function (t) {
            const e = this;
            if (void 0 === t) {
              const i = e.rtlTranslate ? -1 : 1;
              t = (e && e.translate && e.translate * i) || 0;
            }
            const i = e.params,
              n = e.maxTranslate() - e.minTranslate();
            let { progress: s, isBeginning: r, isEnd: a } = e;
            const o = r,
              l = a;
            0 === n
              ? ((s = 0), (r = !0), (a = !0))
              : ((s = (t - e.minTranslate()) / n), (r = s <= 0), (a = s >= 1)),
              Object.assign(e, { progress: s, isBeginning: r, isEnd: a }),
              (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                e.updateSlidesProgress(t),
              r && !o && e.emit('reachBeginning toEdge'),
              a && !l && e.emit('reachEnd toEdge'),
              ((o && !r) || (l && !a)) && e.emit('fromEdge'),
              e.emit('progress', s);
          },
          updateSlidesClasses: function () {
            const t = this,
              { slides: e, params: i, $wrapperEl: n, activeIndex: s, realIndex: r } = t,
              a = t.virtual && i.virtual.enabled;
            let o;
            e.removeClass(
              `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`,
            ),
              (o = a
                ? t.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${s}"]`)
                : e.eq(s)),
              o.addClass(i.slideActiveClass),
              i.loop &&
                (o.hasClass(i.slideDuplicateClass)
                  ? n
                      .children(
                        `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`,
                      )
                      .addClass(i.slideDuplicateActiveClass)
                  : n
                      .children(
                        `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`,
                      )
                      .addClass(i.slideDuplicateActiveClass));
            let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && ((l = e.eq(0)), l.addClass(i.slideNextClass));
            let c = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === c.length && ((c = e.eq(-1)), c.addClass(i.slidePrevClass)),
              i.loop &&
                (l.hasClass(i.slideDuplicateClass)
                  ? n
                      .children(
                        `.${i.slideClass}:not(.${
                          i.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          'data-swiper-slide-index',
                        )}"]`,
                      )
                      .addClass(i.slideDuplicateNextClass)
                  : n
                      .children(
                        `.${i.slideClass}.${
                          i.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          'data-swiper-slide-index',
                        )}"]`,
                      )
                      .addClass(i.slideDuplicateNextClass),
                c.hasClass(i.slideDuplicateClass)
                  ? n
                      .children(
                        `.${i.slideClass}:not(.${
                          i.slideDuplicateClass
                        })[data-swiper-slide-index="${c.attr(
                          'data-swiper-slide-index',
                        )}"]`,
                      )
                      .addClass(i.slideDuplicatePrevClass)
                  : n
                      .children(
                        `.${i.slideClass}.${
                          i.slideDuplicateClass
                        }[data-swiper-slide-index="${c.attr(
                          'data-swiper-slide-index',
                        )}"]`,
                      )
                      .addClass(i.slideDuplicatePrevClass)),
              t.emitSlidesClasses();
          },
          updateActiveIndex: function (t) {
            const e = this,
              i = e.rtlTranslate ? e.translate : -e.translate,
              {
                slidesGrid: n,
                snapGrid: s,
                params: r,
                activeIndex: a,
                realIndex: o,
                snapIndex: l,
              } = e;
            let c,
              h = t;
            if (void 0 === h) {
              for (let t = 0; t < n.length; t += 1)
                void 0 !== n[t + 1]
                  ? i >= n[t] && i < n[t + 1] - (n[t + 1] - n[t]) / 2
                    ? (h = t)
                    : i >= n[t] && i < n[t + 1] && (h = t + 1)
                  : i >= n[t] && (h = t);
              r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if (s.indexOf(i) >= 0) c = s.indexOf(i);
            else {
              const t = Math.min(r.slidesPerGroupSkip, h);
              c = t + Math.floor((h - t) / r.slidesPerGroup);
            }
            if ((c >= s.length && (c = s.length - 1), h === a))
              return void (c !== l && ((e.snapIndex = c), e.emit('snapIndexChange')));
            const d = parseInt(e.slides.eq(h).attr('data-swiper-slide-index') || h, 10);
            Object.assign(e, {
              snapIndex: c,
              realIndex: d,
              previousIndex: a,
              activeIndex: h,
            }),
              e.emit('activeIndexChange'),
              e.emit('snapIndexChange'),
              o !== d && e.emit('realIndexChange'),
              (e.initialized || e.params.runCallbacksOnInit) && e.emit('slideChange');
          },
          updateClickedSlide: function (t) {
            const e = this,
              i = e.params,
              n = m(t).closest(`.${i.slideClass}`)[0];
            let s,
              r = !1;
            if (n)
              for (let t = 0; t < e.slides.length; t += 1)
                if (e.slides[t] === n) {
                  (r = !0), (s = t);
                  break;
                }
            if (!n || !r)
              return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
            (e.clickedSlide = n),
              e.virtual && e.params.virtual.enabled
                ? (e.clickedIndex = parseInt(m(n).attr('data-swiper-slide-index'), 10))
                : (e.clickedIndex = s),
              i.slideToClickedSlide &&
                void 0 !== e.clickedIndex &&
                e.clickedIndex !== e.activeIndex &&
                e.slideToClickedSlide();
          },
        },
        E = {
          getTranslate: function (t = this.isHorizontal() ? 'x' : 'y') {
            const { params: e, rtlTranslate: i, translate: n, $wrapperEl: s } = this;
            if (e.virtualTranslate) return i ? -n : n;
            if (e.cssMode) return n;
            let r = (function (t, e = 'x') {
              const i = l();
              let n, s, r;
              const a = (function (t) {
                const e = l();
                let i;
                return (
                  e.getComputedStyle && (i = e.getComputedStyle(t, null)),
                  !i && t.currentStyle && (i = t.currentStyle),
                  i || (i = t.style),
                  i
                );
              })(t);
              return (
                i.WebKitCSSMatrix
                  ? ((s = a.transform || a.webkitTransform),
                    s.split(',').length > 6 &&
                      (s = s
                        .split(', ')
                        .map(t => t.replace(',', '.'))
                        .join(', ')),
                    (r = new i.WebKitCSSMatrix('none' === s ? '' : s)))
                  : ((r =
                      a.MozTransform ||
                      a.OTransform ||
                      a.MsTransform ||
                      a.msTransform ||
                      a.transform ||
                      a
                        .getPropertyValue('transform')
                        .replace('translate(', 'matrix(1, 0, 0, 1,')),
                    (n = r.toString().split(','))),
                'x' === e &&
                  (s = i.WebKitCSSMatrix
                    ? r.m41
                    : 16 === n.length
                    ? parseFloat(n[12])
                    : parseFloat(n[4])),
                'y' === e &&
                  (s = i.WebKitCSSMatrix
                    ? r.m42
                    : 16 === n.length
                    ? parseFloat(n[13])
                    : parseFloat(n[5])),
                s || 0
              );
            })(s[0], t);
            return i && (r = -r), r || 0;
          },
          setTranslate: function (t, e) {
            const i = this,
              {
                rtlTranslate: n,
                params: s,
                $wrapperEl: r,
                wrapperEl: a,
                progress: o,
              } = i;
            let l,
              c = 0,
              h = 0;
            i.isHorizontal() ? (c = n ? -t : t) : (h = t),
              s.roundLengths && ((c = Math.floor(c)), (h = Math.floor(h))),
              s.cssMode
                ? (a[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal()
                    ? -c
                    : -h)
                : s.virtualTranslate || r.transform(`translate3d(${c}px, ${h}px, 0px)`),
              (i.previousTranslate = i.translate),
              (i.translate = i.isHorizontal() ? c : h);
            const d = i.maxTranslate() - i.minTranslate();
            (l = 0 === d ? 0 : (t - i.minTranslate()) / d),
              l !== o && i.updateProgress(t),
              i.emit('setTranslate', i.translate, e);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (t = 0, e = this.params.speed, i = !0, n = !0, s) {
            const r = this,
              { params: a, wrapperEl: o } = r;
            if (r.animating && a.preventInteractionOnTransition) return !1;
            const l = r.minTranslate(),
              c = r.maxTranslate();
            let h;
            if (
              ((h = n && t > l ? l : n && t < c ? c : t), r.updateProgress(h), a.cssMode)
            ) {
              const t = r.isHorizontal();
              if (0 === e) o[t ? 'scrollLeft' : 'scrollTop'] = -h;
              else {
                if (!r.support.smoothScroll)
                  return (
                    _({ swiper: r, targetPosition: -h, side: t ? 'left' : 'top' }), !0
                  );
                o.scrollTo({ [t ? 'left' : 'top']: -h, behavior: 'smooth' });
              }
              return !0;
            }
            return (
              0 === e
                ? (r.setTransition(0),
                  r.setTranslate(h),
                  i && (r.emit('beforeTransitionStart', e, s), r.emit('transitionEnd')))
                : (r.setTransition(e),
                  r.setTranslate(h),
                  i && (r.emit('beforeTransitionStart', e, s), r.emit('transitionStart')),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (t) {
                        r &&
                          !r.destroyed &&
                          t.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            r.onTranslateToWrapperTransitionEnd,
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            r.onTranslateToWrapperTransitionEnd,
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          i && r.emit('transitionEnd'));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      'transitionend',
                      r.onTranslateToWrapperTransitionEnd,
                    ),
                    r.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      r.onTranslateToWrapperTransitionEnd,
                    ))),
              !0
            );
          },
        },
        P = i(561),
        A = {
          slideTo: function (t = 0, e = this.params.speed, i = !0, n, s) {
            if ('number' != typeof t && 'string' != typeof t)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`,
              );
            if ('string' == typeof t) {
              const e = parseInt(t, 10);
              if (!isFinite(e))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`,
                );
              t = e;
            }
            const r = this;
            let a = t;
            a < 0 && (a = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: c,
              previousIndex: h,
              activeIndex: d,
              rtlTranslate: u,
              wrapperEl: p,
              enabled: f,
            } = r;
            if ((r.animating && o.preventInteractionOnTransition) || (!f && !n && !s))
              return !1;
            const g = Math.min(r.params.slidesPerGroupSkip, a);
            let m = g + Math.floor((a - g) / r.params.slidesPerGroup);
            m >= l.length && (m = l.length - 1),
              (d || o.initialSlide || 0) === (h || 0) &&
                i &&
                r.emit('beforeSlideChangeStart');
            const v = -l[m];
            if ((r.updateProgress(v), o.normalizeSlideIndex))
              for (let t = 0; t < c.length; t += 1) {
                const e = -Math.floor(100 * v),
                  i = Math.floor(100 * c[t]),
                  n = Math.floor(100 * c[t + 1]);
                void 0 !== c[t + 1]
                  ? e >= i && e < n - (n - i) / 2
                    ? (a = t)
                    : e >= i && e < n && (a = t + 1)
                  : e >= i && (a = t);
              }
            if (r.initialized && a !== d) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (d || 0) !== a
              )
                return !1;
            }
            let b;
            if (
              ((b = a > d ? 'next' : a < d ? 'prev' : 'reset'),
              (u && -v === r.translate) || (!u && v === r.translate))
            )
              return (
                r.updateActiveIndex(a),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                'slide' !== o.effect && r.setTranslate(v),
                'reset' !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
                !1
              );
            if (o.cssMode) {
              const t = r.isHorizontal(),
                i = u ? v : -v;
              if (0 === e) {
                const e = r.virtual && r.params.virtual.enabled;
                e &&
                  ((r.wrapperEl.style.scrollSnapType = 'none'),
                  (r._immediateVirtual = !0)),
                  (p[t ? 'scrollLeft' : 'scrollTop'] = i),
                  e &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ''),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    _({ swiper: r, targetPosition: i, side: t ? 'left' : 'top' }), !0
                  );
                p.scrollTo({ [t ? 'left' : 'top']: i, behavior: 'smooth' });
              }
              return !0;
            }
            return (
              r.setTransition(e),
              r.setTranslate(v),
              r.updateActiveIndex(a),
              r.updateSlidesClasses(),
              r.emit('beforeTransitionStart', e, n),
              r.transitionStart(i, b),
              0 === e
                ? r.transitionEnd(i, b)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (t) {
                      r &&
                        !r.destroyed &&
                        t.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          r.onSlideToWrapperTransitionEnd,
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          r.onSlideToWrapperTransitionEnd,
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(i, b));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    'transitionend',
                    r.onSlideToWrapperTransitionEnd,
                  ),
                  r.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    r.onSlideToWrapperTransitionEnd,
                  )),
              !0
            );
          },
          slideToLoop: function (t = 0, e = this.params.speed, i = !0, n) {
            const s = this;
            let r = t;
            return s.params.loop && (r += s.loopedSlides), s.slideTo(r, e, i, n);
          },
          slideNext: function (t = this.params.speed, e = !0, i) {
            const n = this,
              { animating: s, enabled: r, params: a } = n;
            if (!r) return n;
            let o = a.slidesPerGroup;
            'auto' === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              (o = Math.max(n.slidesPerViewDynamic('current', !0), 1));
            const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
            if (a.loop) {
              if (s && a.loopPreventsSlide) return !1;
              n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
            }
            return a.rewind && n.isEnd
              ? n.slideTo(0, t, e, i)
              : n.slideTo(n.activeIndex + l, t, e, i);
          },
          slidePrev: function (t = this.params.speed, e = !0, i) {
            const n = this,
              {
                params: s,
                animating: r,
                snapGrid: a,
                slidesGrid: o,
                rtlTranslate: l,
                enabled: c,
              } = n;
            if (!c) return n;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
            }
            function h(t) {
              return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
            }
            const d = h(l ? n.translate : -n.translate),
              u = a.map(t => h(t));
            let p = a[u.indexOf(d) - 1];
            if (void 0 === p && s.cssMode) {
              let t;
              a.forEach((e, i) => {
                d >= e && (t = i);
              }),
                void 0 !== t && (p = a[t > 0 ? t - 1 : t]);
            }
            let f = 0;
            return (
              void 0 !== p &&
                ((f = o.indexOf(p)),
                f < 0 && (f = n.activeIndex - 1),
                'auto' === s.slidesPerView &&
                  1 === s.slidesPerGroup &&
                  s.slidesPerGroupAuto &&
                  ((f = f - n.slidesPerViewDynamic('previous', !0) + 1),
                  (f = Math.max(f, 0)))),
              s.rewind && n.isBeginning
                ? n.slideTo(n.slides.length - 1, t, e, i)
                : n.slideTo(f, t, e, i)
            );
          },
          slideReset: function (t = this.params.speed, e = !0, i) {
            return this.slideTo(this.activeIndex, t, e, i);
          },
          slideToClosest: function (t = this.params.speed, e = !0, i, n = 0.5) {
            const s = this;
            let r = s.activeIndex;
            const a = Math.min(s.params.slidesPerGroupSkip, r),
              o = a + Math.floor((r - a) / s.params.slidesPerGroup),
              l = s.rtlTranslate ? s.translate : -s.translate;
            if (l >= s.snapGrid[o]) {
              const t = s.snapGrid[o];
              l - t > (s.snapGrid[o + 1] - t) * n && (r += s.params.slidesPerGroup);
            } else {
              const t = s.snapGrid[o - 1];
              l - t <= (s.snapGrid[o] - t) * n && (r -= s.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, s.slidesGrid.length - 1)),
              s.slideTo(r, t, e, i)
            );
          },
          slideToClickedSlide: function () {
            const t = this,
              { params: e, $wrapperEl: i } = t,
              n = 'auto' === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
            let s,
              r = t.clickedIndex;
            if (e.loop) {
              if (t.animating) return;
              (s = parseInt(m(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
                e.centeredSlides
                  ? r < t.loopedSlides - n / 2 ||
                    r > t.slides.length - t.loopedSlides + n / 2
                    ? (t.loopFix(),
                      (r = i
                        .children(
                          `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`,
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        t.slideTo(r);
                      }))
                    : t.slideTo(r)
                  : r > t.slides.length - n
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`,
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r);
            } else t.slideTo(r);
          },
        },
        L = {
          loopCreate: function () {
            const t = this,
              e = a(),
              { params: i, $wrapperEl: n } = t,
              s = n.children().length > 0 ? m(n.children()[0].parentNode) : n;
            s.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
            let r = s.children(`.${i.slideClass}`);
            if (i.loopFillGroupWithBlank) {
              const t = i.slidesPerGroup - (r.length % i.slidesPerGroup);
              if (t !== i.slidesPerGroup) {
                for (let n = 0; n < t; n += 1) {
                  const t = m(e.createElement('div')).addClass(
                    `${i.slideClass} ${i.slideBlankClass}`,
                  );
                  s.append(t);
                }
                r = s.children(`.${i.slideClass}`);
              }
            }
            'auto' !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
              (t.loopedSlides = Math.ceil(
                parseFloat(i.loopedSlides || i.slidesPerView, 10),
              )),
              (t.loopedSlides += i.loopAdditionalSlides),
              t.loopedSlides > r.length && (t.loopedSlides = r.length);
            const o = [],
              l = [];
            r.each((e, i) => {
              const n = m(e);
              i < t.loopedSlides && l.push(e),
                i < r.length && i >= r.length - t.loopedSlides && o.push(e),
                n.attr('data-swiper-slide-index', i);
            });
            for (let t = 0; t < l.length; t += 1)
              s.append(m(l[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (let t = o.length - 1; t >= 0; t -= 1)
              s.prepend(m(o[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function () {
            const t = this;
            t.emit('beforeLoopFix');
            const {
              activeIndex: e,
              slides: i,
              loopedSlides: n,
              allowSlidePrev: s,
              allowSlideNext: r,
              snapGrid: a,
              rtlTranslate: o,
            } = t;
            let l;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            const c = -a[e] - t.getTranslate();
            e < n
              ? ((l = i.length - 3 * n + e),
                (l += n),
                t.slideTo(l, 0, !1, !0) &&
                  0 !== c &&
                  t.setTranslate((o ? -t.translate : t.translate) - c))
              : e >= i.length - n &&
                ((l = -i.length + e + n),
                (l += n),
                t.slideTo(l, 0, !1, !0) &&
                  0 !== c &&
                  t.setTranslate((o ? -t.translate : t.translate) - c)),
              (t.allowSlidePrev = s),
              (t.allowSlideNext = r),
              t.emit('loopFix');
          },
          loopDestroy: function () {
            const { $wrapperEl: t, params: e, slides: i } = this;
            t
              .children(
                `.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`,
              )
              .remove(),
              i.removeAttr('data-swiper-slide-index');
          },
        };
      function O(t) {
        const e = this,
          i = a(),
          n = l(),
          s = e.touchEventsData,
          { params: r, touches: o, enabled: c } = e;
        if (!c) return;
        if (e.animating && r.preventInteractionOnTransition) return;
        !e.animating && r.cssMode && r.loop && e.loopFix();
        let h = t;
        h.originalEvent && (h = h.originalEvent);
        let d = m(h.target);
        if ('wrapper' === r.touchEventsTarget && !d.closest(e.wrapperEl).length) return;
        if (
          ((s.isTouchEvent = 'touchstart' === h.type),
          !s.isTouchEvent && 'which' in h && 3 === h.which)
        )
          return;
        if (!s.isTouchEvent && 'button' in h && h.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        r.noSwipingClass &&
          '' !== r.noSwipingClass &&
          h.target &&
          h.target.shadowRoot &&
          t.path &&
          t.path[0] &&
          (d = m(t.path[0]));
        const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          p = !(!h.target || !h.target.shadowRoot);
        if (
          r.noSwiping &&
          (p
            ? (function (t, e = this) {
                return (function e(i) {
                  return i && i !== a() && i !== l()
                    ? (i.assignedSlot && (i = i.assignedSlot),
                      i.closest(t) || e(i.getRootNode().host))
                    : null;
                })(e);
              })(u, h.target)
            : d.closest(u)[0])
        )
          return void (e.allowClick = !0);
        if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
        (o.currentX = 'touchstart' === h.type ? h.targetTouches[0].pageX : h.pageX),
          (o.currentY = 'touchstart' === h.type ? h.targetTouches[0].pageY : h.pageY);
        const f = o.currentX,
          g = o.currentY,
          v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (v && (f <= y || f >= n.innerWidth - y)) {
          if ('prevent' !== v) return;
          t.preventDefault();
        }
        if (
          (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = f),
          (o.startY = g),
          (s.touchStartTime = b()),
          (e.allowClick = !0),
          e.updateSize(),
          (e.swipeDirection = void 0),
          r.threshold > 0 && (s.allowThresholdMove = !1),
          'touchstart' !== h.type)
        ) {
          let t = !0;
          d.is(s.focusableElements) && (t = !1),
            i.activeElement &&
              m(i.activeElement).is(s.focusableElements) &&
              i.activeElement !== d[0] &&
              i.activeElement.blur();
          const n = t && e.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !n) ||
            d[0].isContentEditable ||
            h.preventDefault();
        }
        e.emit('touchStart', h);
      }
      function N(t) {
        const e = a(),
          i = this,
          n = i.touchEventsData,
          { params: s, touches: r, rtlTranslate: o, enabled: l } = i;
        if (!l) return;
        let c = t;
        if ((c.originalEvent && (c = c.originalEvent), !n.isTouched))
          return void (n.startMoving && n.isScrolling && i.emit('touchMoveOpposite', c));
        if (n.isTouchEvent && 'touchmove' !== c.type) return;
        const h =
            'touchmove' === c.type &&
            c.targetTouches &&
            (c.targetTouches[0] || c.changedTouches[0]),
          d = 'touchmove' === c.type ? h.pageX : c.pageX,
          u = 'touchmove' === c.type ? h.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
        if (!i.allowTouchMove)
          return (
            (i.allowClick = !1),
            void (
              n.isTouched &&
              (Object.assign(r, { startX: d, startY: u, currentX: d, currentY: u }),
              (n.touchStartTime = b()))
            )
          );
        if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (i.isVertical()) {
            if (
              (u < r.startY && i.translate <= i.maxTranslate()) ||
              (u > r.startY && i.translate >= i.minTranslate())
            )
              return (n.isTouched = !1), void (n.isMoved = !1);
          } else if (
            (d < r.startX && i.translate <= i.maxTranslate()) ||
            (d > r.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          n.isTouchEvent &&
          e.activeElement &&
          c.target === e.activeElement &&
          m(c.target).is(n.focusableElements)
        )
          return (n.isMoved = !0), void (i.allowClick = !1);
        if (
          (n.allowTouchCallbacks && i.emit('touchMove', c),
          c.targetTouches && c.targetTouches.length > 1)
        )
          return;
        (r.currentX = d), (r.currentY = u);
        const p = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let t;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (n.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((t = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (n.isScrolling = i.isHorizontal()
                ? t > s.touchAngle
                : 90 - t > s.touchAngle));
        }
        if (
          (n.isScrolling && i.emit('touchMoveOpposite', c),
          void 0 === n.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (n.startMoving = !0)),
          n.isScrolling)
        )
          return void (n.isTouched = !1);
        if (!n.startMoving) return;
        (i.allowClick = !1),
          !s.cssMode && c.cancelable && c.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && c.stopPropagation(),
          n.isMoved ||
            (s.loop && !s.cssMode && i.loopFix(),
            (n.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating && i.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (n.allowMomentumBounce = !1),
            !s.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit('sliderFirstMove', c)),
          i.emit('sliderMove', c),
          (n.isMoved = !0);
        let g = i.isHorizontal() ? p : f;
        (r.diff = g),
          (g *= s.touchRatio),
          o && (g = -g),
          (i.swipeDirection = g > 0 ? 'prev' : 'next'),
          (n.currentTranslate = g + n.startTranslate);
        let v = !0,
          y = s.resistanceRatio;
        if (
          (s.touchReleaseOnEdges && (y = 0),
          g > 0 && n.currentTranslate > i.minTranslate()
            ? ((v = !1),
              s.resistance &&
                (n.currentTranslate =
                  i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + g) ** y))
            : g < 0 &&
              n.currentTranslate < i.maxTranslate() &&
              ((v = !1),
              s.resistance &&
                (n.currentTranslate =
                  i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - g) ** y)),
          v && (c.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            'next' === i.swipeDirection &&
            n.currentTranslate < n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          !i.allowSlidePrev &&
            'prev' === i.swipeDirection &&
            n.currentTranslate > n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate),
          s.threshold > 0)
        ) {
          if (!(Math.abs(g) > s.threshold || n.allowThresholdMove))
            return void (n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove)
            return (
              (n.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (n.currentTranslate = n.startTranslate),
              void (r.diff = i.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        s.followFinger &&
          !s.cssMode &&
          (((s.freeMode && s.freeMode.enabled && i.freeMode) || s.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            s.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(n.currentTranslate),
          i.setTranslate(n.currentTranslate));
      }
      function I(t) {
        const e = this,
          i = e.touchEventsData,
          { params: n, touches: s, rtlTranslate: r, slidesGrid: a, enabled: o } = e;
        if (!o) return;
        let l = t;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && e.emit('touchEnd', l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && n.grabCursor && e.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        n.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
          e.setGrabCursor(!1);
        const c = b(),
          h = c - i.touchStartTime;
        if (e.allowClick) {
          const t = l.path || (l.composedPath && l.composedPath());
          e.updateClickedSlide((t && t[0]) || l.target),
            e.emit('tap click', l),
            h < 300 && c - i.lastClickTime < 300 && e.emit('doubleTap doubleClick', l);
        }
        if (
          ((i.lastClickTime = b()),
          v(() => {
            e.destroyed || (e.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !e.swipeDirection ||
            0 === s.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
        let d;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (d = n.followFinger ? (r ? e.translate : -e.translate) : -i.currentTranslate),
          n.cssMode)
        )
          return;
        if (e.params.freeMode && n.freeMode.enabled)
          return void e.freeMode.onTouchEnd({ currentPos: d });
        let u = 0,
          p = e.slidesSizesGrid[0];
        for (
          let t = 0;
          t < a.length;
          t += t < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
        ) {
          const e = t < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== a[t + e]
            ? d >= a[t] && d < a[t + e] && ((u = t), (p = a[t + e] - a[t]))
            : d >= a[t] && ((u = t), (p = a[a.length - 1] - a[a.length - 2]));
        }
        const f = (d - a[u]) / p,
          g = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (h > n.longSwipesMs) {
          if (!n.longSwipes) return void e.slideTo(e.activeIndex);
          'next' === e.swipeDirection &&
            (f >= n.longSwipesRatio ? e.slideTo(u + g) : e.slideTo(u)),
            'prev' === e.swipeDirection &&
              (f > 1 - n.longSwipesRatio ? e.slideTo(u + g) : e.slideTo(u));
        } else {
          if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
          !e.navigation ||
          (l.target !== e.navigation.nextEl && l.target !== e.navigation.prevEl)
            ? ('next' === e.swipeDirection && e.slideTo(u + g),
              'prev' === e.swipeDirection && e.slideTo(u))
            : l.target === e.navigation.nextEl
            ? e.slideTo(u + g)
            : e.slideTo(u);
        }
      }
      function $() {
        const t = this,
          { params: e, el: i } = t;
        if (i && 0 === i.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const { allowSlideNext: n, allowSlidePrev: s, snapGrid: r } = t;
        (t.allowSlideNext = !0),
          (t.allowSlidePrev = !0),
          t.updateSize(),
          t.updateSlides(),
          t.updateSlidesClasses(),
          ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
          t.isEnd &&
          !t.isBeginning &&
          !t.params.centeredSlides
            ? t.slideTo(t.slides.length - 1, 0, !1, !0)
            : t.slideTo(t.activeIndex, 0, !1, !0),
          t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
          (t.allowSlidePrev = s),
          (t.allowSlideNext = n),
          t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
      }
      function F(t) {
        const e = this;
        e.enabled &&
          (e.allowClick ||
            (e.params.preventClicks && t.preventDefault(),
            e.params.preventClicksPropagation &&
              e.animating &&
              (t.stopPropagation(), t.stopImmediatePropagation())));
      }
      function R() {
        const t = this,
          { wrapperEl: e, rtlTranslate: i, enabled: n } = t;
        if (!n) return;
        let s;
        (t.previousTranslate = t.translate),
          t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop),
          -0 === t.translate && (t.translate = 0),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
        const r = t.maxTranslate() - t.minTranslate();
        (s = 0 === r ? 0 : (t.translate - t.minTranslate()) / r),
          s !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
          t.emit('setTranslate', t.translate, !1);
      }
      let H = !1;
      function j() {}
      const z = (t, e) => {
        const i = a(),
          { params: n, touchEvents: s, el: r, wrapperEl: o, device: l, support: c } = t,
          h = !!n.nested,
          d = 'on' === e ? 'addEventListener' : 'removeEventListener',
          u = e;
        if (c.touch) {
          const e = !(
            'touchstart' !== s.start ||
            !c.passiveListener ||
            !n.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[d](s.start, t.onTouchStart, e),
            r[d](
              s.move,
              t.onTouchMove,
              c.passiveListener ? { passive: !1, capture: h } : h,
            ),
            r[d](s.end, t.onTouchEnd, e),
            s.cancel && r[d](s.cancel, t.onTouchEnd, e);
        } else
          r[d](s.start, t.onTouchStart, !1),
            i[d](s.move, t.onTouchMove, h),
            i[d](s.end, t.onTouchEnd, !1);
        (n.preventClicks || n.preventClicksPropagation) && r[d]('click', t.onClick, !0),
          n.cssMode && o[d]('scroll', t.onScroll),
          n.updateOnWindowResize
            ? t[u](
                l.ios || l.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                $,
                !0,
              )
            : t[u]('observerUpdate', $, !0);
      };
      var V = {
        attachEvents: function () {
          const t = this,
            e = a(),
            { params: i, support: n } = t;
          (t.onTouchStart = O.bind(t)),
            (t.onTouchMove = N.bind(t)),
            (t.onTouchEnd = I.bind(t)),
            i.cssMode && (t.onScroll = R.bind(t)),
            (t.onClick = F.bind(t)),
            n.touch && !H && (e.addEventListener('touchstart', j), (H = !0)),
            z(t, 'on');
        },
        detachEvents: function () {
          z(this, 'off');
        },
      };
      const B = (t, e) => t.grid && e.grid && e.grid.rows > 1;
      var W = {
          addClasses: function () {
            const t = this,
              { classNames: e, params: i, rtl: n, $el: s, device: r, support: a } = t,
              o = (function (t, e) {
                const i = [];
                return (
                  t.forEach(t => {
                    'object' == typeof t
                      ? Object.keys(t).forEach(n => {
                          t[n] && i.push(e + n);
                        })
                      : 'string' == typeof t && i.push(e + t);
                  }),
                  i
                );
              })(
                [
                  'initialized',
                  i.direction,
                  { 'pointer-events': !a.touch },
                  { 'free-mode': t.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: n },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    'grid-column': i.grid && i.grid.rows > 1 && 'column' === i.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { 'css-mode': i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                ],
                i.containerModifierClass,
              );
            e.push(...o), s.addClass([...e].join(' ')), t.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: t, classNames: e } = this;
            t.removeClass(e.join(' ')), this.emitContainerClasses();
          },
        },
        q = {
          init: !0,
          direction: 'horizontal',
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: 'input, select, option, textarea, button, video, label',
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          breakpointsBase: 'window',
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: 'swiper-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function G(t, e) {
        return function (i = {}) {
          const n = Object.keys(i)[0],
            s = i[n];
          'object' == typeof s && null !== s
            ? (['navigation', 'pagination', 'scrollbar'].indexOf(n) >= 0 &&
                !0 === t[n] &&
                (t[n] = { auto: !0 }),
              n in t && 'enabled' in s
                ? (!0 === t[n] && (t[n] = { enabled: !0 }),
                  'object' != typeof t[n] || 'enabled' in t[n] || (t[n].enabled = !0),
                  t[n] || (t[n] = { enabled: !1 }),
                  x(e, i))
                : x(e, i))
            : x(e, i);
        };
      }
      const Y = {
          eventsEmitter: D,
          update: M,
          translate: E,
          transition: {
            setTransition: function (t, e) {
              const i = this;
              i.params.cssMode || i.$wrapperEl.transition(t),
                i.emit('setTransition', t, e);
            },
            transitionStart: function (t = !0, e) {
              const i = this,
                { params: n } = i;
              n.cssMode ||
                (n.autoHeight && i.updateAutoHeight(),
                (0, P.Z)({ swiper: i, runCallbacks: t, direction: e, step: 'Start' }));
            },
            transitionEnd: function (t = !0, e) {
              const i = this,
                { params: n } = i;
              (i.animating = !1),
                n.cssMode ||
                  (i.setTransition(0),
                  (0, P.Z)({ swiper: i, runCallbacks: t, direction: e, step: 'End' }));
            },
          },
          slide: A,
          loop: L,
          grabCursor: {
            setGrabCursor: function (t) {
              const e = this;
              if (
                e.support.touch ||
                !e.params.simulateTouch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode
              )
                return;
              const i = 'container' === e.params.touchEventsTarget ? e.el : e.wrapperEl;
              (i.style.cursor = 'move'),
                (i.style.cursor = t ? '-webkit-grabbing' : '-webkit-grab'),
                (i.style.cursor = t ? '-moz-grabbin' : '-moz-grab'),
                (i.style.cursor = t ? 'grabbing' : 'grab');
            },
            unsetGrabCursor: function () {
              const t = this;
              t.support.touch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode ||
                (t[
                  'container' === t.params.touchEventsTarget ? 'el' : 'wrapperEl'
                ].style.cursor = '');
            },
          },
          events: V,
          breakpoints: {
            setBreakpoint: function () {
              const t = this,
                {
                  activeIndex: e,
                  initialized: i,
                  loopedSlides: n = 0,
                  params: s,
                  $el: r,
                } = t,
                a = s.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
              if (!o || t.currentBreakpoint === o) return;
              const l = (o in a ? a[o] : void 0) || t.originalParams,
                c = B(t, s),
                h = B(t, l),
                d = s.enabled;
              c && !h
                ? (r.removeClass(
                    `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`,
                  ),
                  t.emitContainerClasses())
                : !c &&
                  h &&
                  (r.addClass(`${s.containerModifierClass}grid`),
                  ((l.grid.fill && 'column' === l.grid.fill) ||
                    (!l.grid.fill && 'column' === s.grid.fill)) &&
                    r.addClass(`${s.containerModifierClass}grid-column`),
                  t.emitContainerClasses());
              const u = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || u);
              u && i && t.changeDirection(), x(t.params, l);
              const f = t.params.enabled;
              Object.assign(t, {
                allowTouchMove: t.params.allowTouchMove,
                allowSlideNext: t.params.allowSlideNext,
                allowSlidePrev: t.params.allowSlidePrev,
              }),
                d && !f ? t.disable() : !d && f && t.enable(),
                (t.currentBreakpoint = o),
                t.emit('_beforeBreakpoint', l),
                p &&
                  i &&
                  (t.loopDestroy(),
                  t.loopCreate(),
                  t.updateSlides(),
                  t.slideTo(e - n + t.loopedSlides, 0, !1)),
                t.emit('breakpoint', l);
            },
            getBreakpoint: function (t, e = 'window', i) {
              if (!t || ('container' === e && !i)) return;
              let n = !1;
              const s = l(),
                r = 'window' === e ? s.innerHeight : i.clientHeight,
                a = Object.keys(t).map(t => {
                  if ('string' == typeof t && 0 === t.indexOf('@')) {
                    const e = parseFloat(t.substr(1));
                    return { value: r * e, point: t };
                  }
                  return { value: t, point: t };
                });
              a.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
              for (let t = 0; t < a.length; t += 1) {
                const { point: r, value: o } = a[t];
                'window' === e
                  ? s.matchMedia(`(min-width: ${o}px)`).matches && (n = r)
                  : o <= i.clientWidth && (n = r);
              }
              return n || 'max';
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const t = this,
                { isLocked: e, params: i } = t,
                { slidesOffsetBefore: n } = i;
              if (n) {
                const e = t.slides.length - 1,
                  i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n;
                t.isLocked = t.size > i;
              } else t.isLocked = 1 === t.snapGrid.length;
              !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
                !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
                e && e !== t.isLocked && (t.isEnd = !1),
                e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock');
            },
          },
          classes: W,
          images: {
            loadImage: function (t, e, i, n, s, r) {
              const a = l();
              let o;
              function c() {
                r && r();
              }
              m(t).parent('picture')[0] || (t.complete && s)
                ? c()
                : e
                ? ((o = new a.Image()),
                  (o.onload = c),
                  (o.onerror = c),
                  n && (o.sizes = n),
                  i && (o.srcset = i),
                  e && (o.src = e))
                : c();
            },
            preloadImages: function () {
              const t = this;
              function e() {
                null != t &&
                  t &&
                  !t.destroyed &&
                  (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                  t.imagesLoaded === t.imagesToLoad.length &&
                    (t.params.updateOnImagesReady && t.update(), t.emit('imagesReady')));
              }
              t.imagesToLoad = t.$el.find('img');
              for (let i = 0; i < t.imagesToLoad.length; i += 1) {
                const n = t.imagesToLoad[i];
                t.loadImage(
                  n,
                  n.currentSrc || n.getAttribute('src'),
                  n.srcset || n.getAttribute('srcset'),
                  n.sizes || n.getAttribute('sizes'),
                  !0,
                  e,
                );
              }
            },
          },
        },
        U = {};
      class X {
        constructor(...t) {
          let e, i;
          if (
            (1 === t.length &&
            t[0].constructor &&
            'Object' === Object.prototype.toString.call(t[0]).slice(8, -1)
              ? (i = t[0])
              : ([e, i] = t),
            i || (i = {}),
            (i = x({}, i)),
            e && !i.el && (i.el = e),
            i.el && m(i.el).length > 1)
          ) {
            const t = [];
            return (
              m(i.el).each(e => {
                const n = x({}, i, { el: e });
                t.push(new X(n));
              }),
              t
            );
          }
          const n = this;
          (n.__swiper__ = !0),
            (n.support = T()),
            (n.device = (function (t = {}) {
              return (
                C ||
                  (C = (function ({ userAgent: t } = {}) {
                    const e = T(),
                      i = l(),
                      n = i.navigator.platform,
                      s = t || i.navigator.userAgent,
                      r = { ios: !1, android: !1 },
                      a = i.screen.width,
                      o = i.screen.height,
                      c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let h = s.match(/(iPad).*OS\s([\d_]+)/);
                    const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                      u = !h && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      p = 'Win32' === n;
                    let f = 'MacIntel' === n;
                    return (
                      !h &&
                        f &&
                        e.touch &&
                        [
                          '1024x1366',
                          '1366x1024',
                          '834x1194',
                          '1194x834',
                          '834x1112',
                          '1112x834',
                          '768x1024',
                          '1024x768',
                          '820x1180',
                          '1180x820',
                          '810x1080',
                          '1080x810',
                        ].indexOf(`${a}x${o}`) >= 0 &&
                        ((h = s.match(/(Version)\/([\d.]+)/)),
                        h || (h = [0, 1, '13_0_0']),
                        (f = !1)),
                      c && !p && ((r.os = 'android'), (r.android = !0)),
                      (h || u || d) && ((r.os = 'ios'), (r.ios = !0)),
                      r
                    );
                  })(t)),
                C
              );
            })({ userAgent: i.userAgent })),
            (n.browser =
              (S ||
                (S = (function () {
                  const t = l();
                  return {
                    isSafari: (function () {
                      const e = t.navigator.userAgent.toLowerCase();
                      return (
                        e.indexOf('safari') >= 0 &&
                        e.indexOf('chrome') < 0 &&
                        e.indexOf('android') < 0
                      );
                    })(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      t.navigator.userAgent,
                    ),
                  };
                })()),
              S)),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
          const s = {};
          n.modules.forEach(t => {
            t({
              swiper: n,
              extendParams: G(i, s),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const r = x({}, q, s);
          return (
            (n.params = x({}, r, U, i)),
            (n.originalParams = x({}, n.params)),
            (n.passedParams = x({}, i)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach(t => {
                n.on(t, n.params.on[t]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            (n.$ = m),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: e,
              classNames: [],
              slides: m(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === n.params.direction,
              isVertical: () => 'vertical' === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents: (function () {
                const t = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
                  e = ['pointerdown', 'pointermove', 'pointerup'];
                return (
                  (n.touchEventsTouch = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                    cancel: t[3],
                  }),
                  (n.touchEventsDesktop = { start: e[0], move: e[1], end: e[2] }),
                  n.support.touch || !n.params.simulateTouch
                    ? n.touchEventsTouch
                    : n.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: b(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit('_swiper'),
            n.params.init && n.init(),
            n
          );
        }
        enable() {
          const t = this;
          t.enabled ||
            ((t.enabled = !0),
            t.params.grabCursor && t.setGrabCursor(),
            t.emit('enable'));
        }
        disable() {
          const t = this;
          t.enabled &&
            ((t.enabled = !1),
            t.params.grabCursor && t.unsetGrabCursor(),
            t.emit('disable'));
        }
        setProgress(t, e) {
          const i = this;
          t = Math.min(Math.max(t, 0), 1);
          const n = i.minTranslate(),
            s = (i.maxTranslate() - n) * t + n;
          i.translateTo(s, void 0 === e ? 0 : e),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = t.el.className
            .split(' ')
            .filter(
              e =>
                0 === e.indexOf('swiper') ||
                0 === e.indexOf(t.params.containerModifierClass),
            );
          t.emit('_containerClasses', e.join(' '));
        }
        getSlideClasses(t) {
          const e = this;
          return t.className
            .split(' ')
            .filter(
              t =>
                0 === t.indexOf('swiper-slide') || 0 === t.indexOf(e.params.slideClass),
            )
            .join(' ');
        }
        emitSlidesClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = [];
          t.slides.each(i => {
            const n = t.getSlideClasses(i);
            e.push({ slideEl: i, classNames: n }), t.emit('_slideClass', i, n);
          }),
            t.emit('_slideClasses', e);
        }
        slidesPerViewDynamic(t = 'current', e = !1) {
          const {
            params: i,
            slides: n,
            slidesGrid: s,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let t,
              e = n[o].swiperSlideSize;
            for (let i = o + 1; i < n.length; i += 1)
              n[i] && !t && ((e += n[i].swiperSlideSize), (l += 1), e > a && (t = !0));
            for (let i = o - 1; i >= 0; i -= 1)
              n[i] && !t && ((e += n[i].swiperSlideSize), (l += 1), e > a && (t = !0));
          } else if ('current' === t)
            for (let t = o + 1; t < n.length; t += 1)
              (e ? s[t] + r[t] - s[o] < a : s[t] - s[o] < a) && (l += 1);
          else for (let t = o - 1; t >= 0; t -= 1) s[o] - s[t] < a && (l += 1);
          return l;
        }
        update() {
          const t = this;
          if (!t || t.destroyed) return;
          const { snapGrid: e, params: i } = t;
          function n() {
            const e = t.rtlTranslate ? -1 * t.translate : t.translate,
              i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          let s;
          i.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.params.freeMode && t.params.freeMode.enabled
              ? (n(), t.params.autoHeight && t.updateAutoHeight())
              : ((s =
                  ('auto' === t.params.slidesPerView || t.params.slidesPerView > 1) &&
                  t.isEnd &&
                  !t.params.centeredSlides
                    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                    : t.slideTo(t.activeIndex, 0, !1, !0)),
                s || n()),
            i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
            t.emit('update');
        }
        changeDirection(t, e = !0) {
          const i = this,
            n = i.params.direction;
          return (
            t || (t = 'horizontal' === n ? 'vertical' : 'horizontal'),
            t === n ||
              ('horizontal' !== t && 'vertical' !== t) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${n}`)
                .addClass(`${i.params.containerModifierClass}${t}`),
              i.emitContainerClasses(),
              (i.params.direction = t),
              i.slides.each(e => {
                'vertical' === t ? (e.style.width = '') : (e.style.height = '');
              }),
              i.emit('changeDirection'),
              e && i.update()),
            i
          );
        }
        mount(t) {
          const e = this;
          if (e.mounted) return !0;
          const i = m(t || e.params.el);
          if (!(t = i[0])) return !1;
          t.swiper = e;
          const n = () => `.${(e.params.wrapperClass || '').trim().split(' ').join('.')}`;
          let s = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
              const e = m(t.shadowRoot.querySelector(n()));
              return (e.children = t => i.children(t)), e;
            }
            return i.children(n());
          })();
          if (0 === s.length && e.params.createElements) {
            const t = a().createElement('div');
            (s = m(t)),
              (t.className = e.params.wrapperClass),
              i.append(t),
              i.children(`.${e.params.slideClass}`).each(t => {
                s.append(t);
              });
          }
          return (
            Object.assign(e, {
              $el: i,
              el: t,
              $wrapperEl: s,
              wrapperEl: s[0],
              mounted: !0,
              rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === i.css('direction'),
              rtlTranslate:
                'horizontal' === e.params.direction &&
                ('rtl' === t.dir.toLowerCase() || 'rtl' === i.css('direction')),
              wrongRTL: '-webkit-box' === s.css('display'),
            }),
            !0
          );
        }
        init(t) {
          const e = this;
          return (
            e.initialized ||
              !1 === e.mount(t) ||
              (e.emit('beforeInit'),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.enabled && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit,
                    !1,
                    !0,
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit,
                    !1,
                    !0,
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit('init'),
              e.emit('afterInit')),
            e
          );
        }
        destroy(t = !0, e = !0) {
          const i = this,
            { params: n, $el: s, $wrapperEl: r, slides: a } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              n.loop && i.loopDestroy(),
              e &&
                (i.removeClasses(),
                s.removeAttr('style'),
                r.removeAttr('style'),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        n.slideVisibleClass,
                        n.slideActiveClass,
                        n.slideNextClass,
                        n.slidePrevClass,
                      ].join(' '),
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach(t => {
                i.off(t);
              }),
              !1 !== t &&
                ((i.$el[0].swiper = null),
                (function (t) {
                  const e = t;
                  Object.keys(e).forEach(t => {
                    try {
                      e[t] = null;
                    } catch (t) {}
                    try {
                      delete e[t];
                    } catch (t) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(t) {
          x(U, t);
        }
        static get extendedDefaults() {
          return U;
        }
        static get defaults() {
          return q;
        }
        static installModule(t) {
          X.prototype.__modules__ || (X.prototype.__modules__ = []);
          const e = X.prototype.__modules__;
          'function' == typeof t && e.indexOf(t) < 0 && e.push(t);
        }
        static use(t) {
          return Array.isArray(t)
            ? (t.forEach(t => X.installModule(t)), X)
            : (X.installModule(t), X);
        }
      }
      Object.keys(Y).forEach(t => {
        Object.keys(Y[t]).forEach(e => {
          X.prototype[e] = Y[t][e];
        });
      }),
        X.use([
          function ({ swiper: t, on: e, emit: i }) {
            const n = l();
            let s = null;
            const r = () => {
                t && !t.destroyed && t.initialized && (i('beforeResize'), i('resize'));
              },
              a = () => {
                t && !t.destroyed && t.initialized && i('orientationchange');
              };
            e('init', () => {
              t.params.resizeObserver && void 0 !== n.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver(e => {
                    const { width: i, height: n } = t;
                    let s = i,
                      a = n;
                    e.forEach(({ contentBoxSize: e, contentRect: i, target: n }) => {
                      (n && n !== t.el) ||
                        ((s = i ? i.width : (e[0] || e).inlineSize),
                        (a = i ? i.height : (e[0] || e).blockSize));
                    }),
                      (s === i && a === n) || r();
                  })),
                  s.observe(t.el))
                : (n.addEventListener('resize', r),
                  n.addEventListener('orientationchange', a));
            }),
              e('destroy', () => {
                s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  n.removeEventListener('resize', r),
                  n.removeEventListener('orientationchange', a);
              });
          },
          function ({ swiper: t, extendParams: e, on: i, emit: n }) {
            const s = [],
              r = l(),
              a = (t, e = {}) => {
                const i = new (r.MutationObserver || r.WebkitMutationObserver)(t => {
                  if (1 === t.length) return void n('observerUpdate', t[0]);
                  const e = function () {
                    n('observerUpdate', t[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(e)
                    : r.setTimeout(e, 0);
                });
                i.observe(t, {
                  attributes: void 0 === e.attributes || e.attributes,
                  childList: void 0 === e.childList || e.childList,
                  characterData: void 0 === e.characterData || e.characterData,
                }),
                  s.push(i);
              };
            e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i('init', () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i('destroy', () => {
                s.forEach(t => {
                  t.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      var K = X;
      function J(t, e, i, n) {
        const s = a();
        return (
          t.params.createElements &&
            Object.keys(n).forEach(r => {
              if (!i[r] && !0 === i.auto) {
                let a = t.$el.children(`.${n[r]}`)[0];
                a ||
                  ((a = s.createElement('div')), (a.className = n[r]), t.$el.append(a)),
                  (i[r] = a),
                  (e[r] = a);
              }
            }),
          i
        );
      }
      function Z({ swiper: t, extendParams: e, on: i, emit: n }) {
        function s(e) {
          let i;
          return (
            e &&
              ((i = m(e)),
              t.params.uniqueNavElements &&
                'string' == typeof e &&
                i.length > 1 &&
                1 === t.$el.find(e).length &&
                (i = t.$el.find(e))),
            i
          );
        }
        function r(e, i) {
          const n = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[i ? 'addClass' : 'removeClass'](n.disabledClass),
            e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? 'addClass' : 'removeClass'](n.lockClass));
        }
        function a() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: i } = t.navigation;
          r(i, t.isBeginning && !t.params.rewind), r(e, t.isEnd && !t.params.rewind);
        }
        function o(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
        }
        function l(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function c() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = J(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const i = s(e.nextEl),
            n = s(e.prevEl);
          i && i.length > 0 && i.on('click', l),
            n && n.length > 0 && n.on('click', o),
            Object.assign(t.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: n,
              prevEl: n && n[0],
            }),
            t.enabled || (i && i.addClass(e.lockClass), n && n.addClass(e.lockClass));
        }
        function h() {
          const { $nextEl: e, $prevEl: i } = t.navigation;
          e &&
            e.length &&
            (e.off('click', l), e.removeClass(t.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off('click', o), i.removeClass(t.params.navigation.disabledClass));
        }
        e({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        }),
          (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
          i('init', () => {
            c(), a();
          }),
          i('toEdge fromEdge lock unlock', () => {
            a();
          }),
          i('destroy', () => {
            h();
          }),
          i('enable disable', () => {
            const { $nextEl: e, $prevEl: i } = t.navigation;
            e && e[t.enabled ? 'removeClass' : 'addClass'](t.params.navigation.lockClass),
              i &&
                i[t.enabled ? 'removeClass' : 'addClass'](t.params.navigation.lockClass);
          }),
          i('click', (e, i) => {
            const { $nextEl: s, $prevEl: r } = t.navigation,
              a = i.target;
            if (t.params.navigation.hideOnClick && !m(a).is(r) && !m(a).is(s)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              let e;
              s
                ? (e = s.hasClass(t.params.navigation.hiddenClass))
                : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                n(!0 === e ? 'navigationShow' : 'navigationHide'),
                s && s.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: a, init: c, destroy: h });
      }
      var Q = i(112);
      function tt({ swiper: t, extendParams: e, on: i, emit: n }) {
        const s = 'swiper-pagination';
        let r;
        e({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: t => t,
            formatFractionTotal: t => t,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function o() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function l(e, i) {
          const { bulletActiveClass: n } = t.params.pagination;
          e[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`);
        }
        function c() {
          const e = t.rtl,
            i = t.params.pagination;
          if (o()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            c = t.pagination.$el;
          let h;
          const d = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((h = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup,
                )),
                h > s - 1 - 2 * t.loopedSlides && (h -= s - 2 * t.loopedSlides),
                h > d - 1 && (h -= d),
                h < 0 && 'bullets' !== t.params.paginationType && (h = d + h))
              : (h = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            'bullets' === i.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const n = t.pagination.bullets;
            let s, o, d;
            if (
              (i.dynamicBullets &&
                ((r = n.eq(0)[t.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                c.css(
                  t.isHorizontal() ? 'width' : 'height',
                  r * (i.dynamicMainBullets + 4) + 'px',
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += h - (t.previousIndex - t.loopedSlides || 0)),
                  a > i.dynamicMainBullets - 1
                    ? (a = i.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (s = Math.max(h - a, 0)),
                (o = s + (Math.min(n.length, i.dynamicMainBullets) - 1)),
                (d = (o + s) / 2)),
              n.removeClass(
                ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                  .map(t => `${i.bulletActiveClass}${t}`)
                  .join(' '),
              ),
              c.length > 1)
            )
              n.each(t => {
                const e = m(t),
                  n = e.index();
                n === h && e.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (n >= s && n <= o && e.addClass(`${i.bulletActiveClass}-main`),
                    n === s && l(e, 'prev'),
                    n === o && l(e, 'next'));
              });
            else {
              const e = n.eq(h),
                r = e.index();
              if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const e = n.eq(s),
                  a = n.eq(o);
                for (let t = s; t <= o; t += 1)
                  n.eq(t).addClass(`${i.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= n.length) {
                    for (let t = i.dynamicMainBullets; t >= 0; t -= 1)
                      n.eq(n.length - t).addClass(`${i.bulletActiveClass}-main`);
                    n.eq(n.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`,
                    );
                  } else l(e, 'prev'), l(a, 'next');
                else l(e, 'prev'), l(a, 'next');
              }
            }
            if (i.dynamicBullets) {
              const s = Math.min(n.length, i.dynamicMainBullets + 4),
                a = (r * s - r) / 2 - d * r,
                o = e ? 'right' : 'left';
              n.css(t.isHorizontal() ? o : 'top', `${a}px`);
            }
          }
          if (
            ('fraction' === i.type &&
              (c.find((0, Q.Z)(i.currentClass)).text(i.formatFractionCurrent(h + 1)),
              c.find((0, Q.Z)(i.totalClass)).text(i.formatFractionTotal(d))),
            'progressbar' === i.type)
          ) {
            let e;
            e = i.progressbarOpposite
              ? t.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : t.isHorizontal()
              ? 'horizontal'
              : 'vertical';
            const n = (h + 1) / d;
            let s = 1,
              r = 1;
            'horizontal' === e ? (s = n) : (r = n),
              c
                .find((0, Q.Z)(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${r})`)
                .transition(t.params.speed);
          }
          'custom' === i.type && i.renderCustom
            ? (c.html(i.renderCustom(t, h + 1, d)), n('paginationRender', c[0]))
            : n('paginationUpdate', c[0]),
            t.params.watchOverflow &&
              t.enabled &&
              c[t.isLocked ? 'addClass' : 'removeClass'](i.lockClass);
        }
        function h() {
          const e = t.params.pagination;
          if (o()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let r = '';
          if ('bullets' === e.type) {
            let n = t.params.loop
              ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              n > i &&
              (n = i);
            for (let i = 0; i < n; i += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(t, i, e.bulletClass))
                : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            s.html(r), (t.pagination.bullets = s.find((0, Q.Z)(e.bulletClass)));
          }
          'fraction' === e.type &&
            ((r = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            s.html(r)),
            'progressbar' === e.type &&
              ((r = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              s.html(r)),
            'custom' !== e.type && n('paginationRender', t.pagination.$el[0]);
        }
        function d() {
          t.params.pagination = J(t, t.originalParams.pagination, t.params.pagination, {
            el: 'swiper-pagination',
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let i = m(e.el);
          0 !== i.length &&
            (t.params.uniqueNavElements &&
              'string' == typeof e.el &&
              i.length > 1 &&
              ((i = t.$el.find(e.el)),
              i.length > 1 && (i = i.filter(e => m(e).parents('.swiper')[0] === t.el))),
            'bullets' === e.type && e.clickable && i.addClass(e.clickableClass),
            i.addClass(e.modifierClass + e.type),
            i.addClass(e.modifierClass + t.params.direction),
            'bullets' === e.type &&
              e.dynamicBullets &&
              (i.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            'progressbar' === e.type &&
              e.progressbarOpposite &&
              i.addClass(e.progressbarOppositeClass),
            e.clickable &&
              i.on('click', (0, Q.Z)(e.bulletClass), function (e) {
                e.preventDefault();
                let i = m(this).index() * t.params.slidesPerGroup;
                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
              }),
            Object.assign(t.pagination, { $el: i, el: i[0] }),
            t.enabled || i.addClass(e.lockClass));
        }
        function u() {
          const e = t.params.pagination;
          if (o()) return;
          const i = t.pagination.$el;
          i.removeClass(e.hiddenClass),
            i.removeClass(e.modifierClass + e.type),
            i.removeClass(e.modifierClass + t.params.direction),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && i.off('click', (0, Q.Z)(e.bulletClass));
        }
        i('init', () => {
          d(), h(), c();
        }),
          i('activeIndexChange', () => {
            (t.params.loop || void 0 === t.snapIndex) && c();
          }),
          i('snapIndexChange', () => {
            t.params.loop || c();
          }),
          i('slidesLengthChange', () => {
            t.params.loop && (h(), c());
          }),
          i('snapGridLengthChange', () => {
            t.params.loop || (h(), c());
          }),
          i('destroy', () => {
            u();
          }),
          i('enable disable', () => {
            const { $el: e } = t.pagination;
            e && e[t.enabled ? 'removeClass' : 'addClass'](t.params.pagination.lockClass);
          }),
          i('lock unlock', () => {
            c();
          }),
          i('click', (e, i) => {
            const s = i.target,
              { $el: r } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              r.length > 0 &&
              !m(s).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                  (t.navigation.prevEl && s === t.navigation.prevEl))
              )
                return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              n(!0 === e ? 'paginationShow' : 'paginationHide'),
                r.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, { render: h, update: c, init: d, destroy: u });
      }
    },
  },
]);
