// ==UserScript==
// @name         NHK News Web Easy - Hide Furigana
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides furigana on main news article.
// @author       Ernesto Hegi <ernesto.hegi@gmail.com>
// @match        http://www3.nhk.or.jp/news/easy/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var NHKHideFurigana = (function () {
        'use strict';

        var container;

        var HIDE_FURIGANA_CLASS_NAME = 'hide-furigana',
            NEWS_ARTICLE_ID_SELECTOR = 'newsarticle',
            MOUSE_ENTER_EVENT_NAME   = 'mouseenter',
            MOUSE_LEAVE_EVENT_NAME   = 'mouseleave'
        ;

        var setElements = function () {
            container = document.getElementById(NEWS_ARTICLE_ID_SELECTOR);
        };

        var appendStyle = function () {
            var css = '.' + HIDE_FURIGANA_CLASS_NAME + ' rt { color: transparent; }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style')
            ;

            style.type = 'text/css';

            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        };

        var setContainerClass = function (className) {
            container.classList.add(className);
        };

        var bindEvents = function () {
            container.addEventListener(MOUSE_ENTER_EVENT_NAME, function () {
                container.classList.remove(HIDE_FURIGANA_CLASS_NAME);
            });

            container.addEventListener(MOUSE_LEAVE_EVENT_NAME, function () {
                container.classList.add(HIDE_FURIGANA_CLASS_NAME);
            });
        };

        return {
            init: function () {
                appendStyle();
                setElements();
                setContainerClass(HIDE_FURIGANA_CLASS_NAME);
                bindEvents();
            }
        };
    })();

    NHKHideFurigana.init();
})();
