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

    var css = '.hide-furigana rt { color: transparent; }',
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
    
    var container = document.getElementById('newsarticle');
   
    container.classList.add('hide-furigana');
    
    container.addEventListener('mouseenter', function () {
        container.classList.remove('hide-furigana');
    });
    
    container.addEventListener('mouseleave', function () {
        container.classList.add('hide-furigana');
    });
})();
