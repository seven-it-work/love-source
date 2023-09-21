---
title: 待一起完成清单
date: 2023-09-16 18:05:29
---

{% mdHtml %}
<style>
    @import url(https://fonts.googleapis.com/css2?family=Muli:wght@600;800&display=swap);

    .header {
        max-width: 720px;
        margin: 0 auto;
        padding: 20px 0 55px;
        color: #fff;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -moz-justify-content: space-between;
        -ms-justify-content: space-between;
        justify-content: space-between;
        -ms-flex-pack: space-between
    }

    .header__date {
        letter-spacing: .02rem;
        font-size: 1.2rem
    }

    .title {
        max-width: 720px;
        margin: 0 auto;
        letter-spacing: .03rem;
        color: #fff
    }

    .title__text {
        cursor: default;
        font-size: 1.6rem;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        flex-wrap: wrap;
        text-overflow: ellipsis
    }

    .title .wrap, .title__text {
        overflow: hidden;
        white-space: nowrap
    }

    .title .wrap {
        position: relative
    }

    .title__message {
        margin-right: .4rem;
        -ms-flex-shrink: 0;
        flex-shrink: 0
    }

    .title__message, .title__name {
        display: block;
        min-height: 2.7rem
    }

    .title__name {
        background: 0;
        border: 0;
        outline: 0;
        color: inherit;
        font-size: inherit;
        min-width: 1rem;
        overflow: hidden;
        -ms-flex-shrink: 1;
        flex-shrink: 1
    }

    .title__name br {
        display: none
    }

    .title__name:hover {
        text-decoration: underline;
        cursor: text
    }

    .title__name:focus {
        opacity: .8;
        background: hsla(0, 0%, 100%, .15);
        text-decoration: underline
    }

    .title__task {
        margin-top: 3.5rem;
        margin-bottom: 5rem;
        font-weight: 700
    }

    .title__task-top {
        display: block;
        font-size: 2.6rem
    }

    .title__task-count {
        display: block;
        font-size: 5.4rem
    }

    .title__task-total {
        font-size: 50%
    }

    .title__task-bottom {
        display: block;
        font-size: 2.8rem;
        line-height: 50%
    }

    .title__text {
        -webkit-animation-delay: 0;
        -webkit-animation-duration: .5s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: 0;
        -moz-animation-duration: .5s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: 0;
        -o-animation-duration: .5s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: 0;
        animation-duration: .5s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .title__task-top {
        -webkit-animation-delay: .4s;
        -webkit-animation-duration: .6s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .4s;
        -moz-animation-duration: .6s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .4s;
        -o-animation-duration: .6s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .4s;
        animation-duration: .6s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .title__task-count {
        -webkit-animation-delay: .55s;
        -webkit-animation-duration: .6s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .55s;
        -moz-animation-duration: .6s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .55s;
        -o-animation-duration: .6s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .55s;
        animation-duration: .6s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .title__task-bottom {
        -webkit-animation-delay: .7s;
        -webkit-animation-duration: .6s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .7s;
        -moz-animation-duration: .6s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .7s;
        -o-animation-duration: .6s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .7s;
        animation-duration: .6s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .add {
        position: relative;
        max-width: 720px;
        margin: 0 auto
    }

    .add .main-input {
        -webkit-animation-delay: .9s;
        -webkit-animation-duration: .8s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .9s;
        -moz-animation-duration: .8s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .9s;
        -o-animation-duration: .8s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .9s;
        animation-duration: .8s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .controller {
        padding-top: 20px;
        max-width: 720px;
        margin: 0 auto;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -moz-justify-content: space-between;
        -ms-justify-content: space-between;
        justify-content: space-between;
        -ms-flex-pack: space-between
    }

    .controller .clear {
        letter-spacing: .014rem;
        font-size: 1.4rem;
        color: #ababab;
        transition: color .2s
    }

    .controller .clear:hover {
        color: #8e8e8e
    }

    .selectbox {
        display: block;
        width: 9.2rem;
        height: 3rem;
        padding: .5rem 1rem;
        font-size: 1.4rem;
        color: #747474;
        border: 1px solid #cbcbcb;
        background-color: #fff;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 0;
        outline: 0;
        background-position: right .8rem top 55%;
        background-size: 1.15rem 1.15rem;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9"><path d="M5.61 8l-4.5-7h9l-4.5 7z" fill="%23717171"/></svg>');
        background-repeat: no-repeat;
        cursor: pointer;
        transition: border .2s
    }

    .selectbox:hover {
        border-color: #a9a9a9
    }

    .list {
        position: relative;
        max-width: 720px;
        margin: 2.1rem auto 0
    }

    .list:after {
        opacity: 0;
        display: block;
        text-align: center;
        font-size: 2.2rem;
        color: #c4c4c4;
        letter-spacing: .4rem;
        content: "ଘ(੭˘꒳˘)੭✧";
        transition: opacity 0s
    }

    .list__item {
        position: relative;
        width: 100%;
        padding: 0 1.4rem 0 4.5rem;
        background-color: #fff;
        border-radius: 4px;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center
    }

    .list__item:not(:first-child) {
        margin-top: 1.2rem
    }

    .list input {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px
    }

    .list input:checked + label .icon-check:before {
        height: .74rem
    }

    .list input:checked + label:after {
        opacity: 1
    }

    .list input:checked + label .list__text {
        color: #bababa;
        text-decoration: line-through
    }

    .list__label {
        padding: 1.6rem 0;
        font-size: 1.65rem;
        line-height: 1.24;
        letter-spacing: .017rem;
        color: #141313;
        min-width: 0;
        flex-basis: 100%;
        cursor: pointer
    }

    .list__label:before {
        display: inline-block;
        border: 1px solid #818181;
        background-color: #fff;
        cursor: pointer
    }

    .list__label:after, .list__label:before {
        position: absolute;
        top: 50%;
        left: 1.4rem;
        transform: translateY(-50%);
        width: 2rem;
        height: 2rem;
        content: ""
    }

    .list__label:after {
        opacity: 0;
        display: block;
        background-size: 1.4rem 1.4rem;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 13 10" xml:space="preserve"><g id="Group_21" transform="translate(-47.584 -537.01)"><path id="Line_6" class="st0" d="M49.19 541.18l3.66 4.29" fill="none" stroke="%23363636" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_7" class="st0" d="M59.19 538.18l-6.34 7.29" fill="none" stroke="%23363636" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></g></svg>');
        transition: opacity .15s
    }

    .list__text {
        position: relative;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: color .15s
    }

    .list__right {
        margin-left: 1.3rem;
        text-align: right
    }

    .list__delete {
        position: relative;
        width: 1rem;
        height: 1rem;
        padding: .4rem;
        padding-right: 0;
        box-sizing: content-box;
        margin-left: auto;
        margin-bottom: .3rem
    }

    .list__delete:after, .list__delete:before {
        top: .2rem;
        right: .4rem;
        position: absolute;
        display: block;
        content: "";
        width: .1rem;
        height: 1.2rem;
        background-color: #b8b8b8;
        transition: background-color .15s
    }

    .list__delete:before {
        transform: rotate(-40deg)
    }

    .list__delete:after {
        transform: rotate(40deg)
    }

    .list__delete:hover:after, .list__delete:hover:before {
        background-color: #343434
    }

    .list__date {
        font-size: 1.1rem;
        color: #939393;
        letter-spacing: .02rem
    }

    .list.list--empty:after {
        opacity: 1;
        margin: 11rem 0 12rem;
        -webkit-animation: emptyAnimation 1s 1s;
        animation: emptyAnimation 1s 1s;
        transition: opacity 1s .3s
    }

    @-webkit-keyframes emptyAnimation {
        to {
            transform: translateZ(0) rotateY(1turn)
        }
    }

    @keyframes emptyAnimation {
        to {
            transform: translateZ(0) rotateY(1turn)
        }
    }

    .list-enter {
        opacity: 0;
        transform: translateX(-30px)
    }

    .list-enter-active, .list-leave-active {
        transition: transform .5s, opacity .5s
    }

    .list-leave-to {
        opacity: 0;
        transform: translateX(30px)
    }

    .footer {
        display: flex;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
        margin-top: 8rem;
        margin-bottom: 3px;
        font-size: 1.2rem;
        color: #bdbdbd
    }

    .footer__link {
        margin-left: .42rem
    }

    .footer__link:hover {
        color: #a7a7a7;
        text-decoration: underline
    }

    .hello {
        max-width: 720px;
        margin: 0 auto;
        letter-spacing: .03rem;
        color: #fff
    }

    .hello label {
        display: none
    }

    .hello__guide {
        padding-top: 2.4rem;
        margin-bottom: 6rem;
        font-size: 1.6rem;
        line-height: 1.75;
        letter-spacing: .03rem
    }

    .hello__guide-text {
        display: block
    }

    .hello__ask {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 4rem
    }

    .hello__guide-text:first-child {
        -webkit-animation-delay: .2s;
        -webkit-animation-duration: .45s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .2s;
        -moz-animation-duration: .45s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .2s;
        -o-animation-duration: .45s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .2s;
        animation-duration: .45s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .hello__guide-text:nth-child(2) {
        -webkit-animation-delay: .4s;
        -webkit-animation-duration: .45s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .4s;
        -moz-animation-duration: .45s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .4s;
        -o-animation-duration: .45s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .4s;
        animation-duration: .45s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .hello__ask {
        -webkit-animation-delay: .9s;
        -webkit-animation-duration: .75s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: .9s;
        -moz-animation-duration: .75s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: .9s;
        -o-animation-duration: .75s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: .9s;
        animation-duration: .75s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .hello .main-input {
        -webkit-animation-delay: 1.1s;
        -webkit-animation-duration: .85s;
        -webkit-animation-name: fadeShow;
        -webkit-animation-fill-mode: both;
        -moz-animation-delay: 1.1s;
        -moz-animation-duration: .85s;
        -moz-animation-name: fadeShow;
        -moz-animation-fill-mode: both;
        -o-animation-delay: 1.1s;
        -o-animation-duration: .85s;
        -o-animation-name: fadeShow;
        -o-animation-fill-mode: both;
        animation-delay: 1.1s;
        animation-duration: .85s;
        animation-name: fadeShow;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }

    .modal__dim {
        display: flex;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4)
    }

    .modal__content {
        min-width: 34rem;
        margin: 0 auto;
        padding: 3rem;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 10px 30px -4px rgba(10, 10, 10, .2);
        transition: all .3s ease
    }

    .modal__text {
        text-align: center;
        font-size: 1.4rem;
        color: #4a4a4a
    }

    .modal__text:before {
        display: block;
        margin: 0 auto;
        text-align: center;
        line-height: 5rem;
        font-size: 2.2rem;
        font-weight: 700;
        content: "Oops !"
    }

    .modal__close {
        text-align: center;
        margin: 2.5rem auto 0;
        padding: .4rem 1rem;
        border: 1px solid #b1b1b1;
        border-radius: .2rem;
        font-size: 1.2rem;
        color: #555
    }

    .modal__close:hover {
        color: #323232;
        border-color: #4a4a4a
    }

    .modal-enter {
        opacity: 0
    }

    .modal-enter .modal__content {
        transform: translateY(30px);
        transition: transform .6s
    }

    .modal-enter-active {
        transition: opacity .3s
    }

    .modal-leave-active {
        transition: opacity .3s .05s
    }

    .modal-leave-to {
        opacity: 0
    }

    .modal-leave-to .modal__content {
        transform: translateY(30px);
        transition: transform .6s
    }

    .main-input {
        position: relative
    }

    .main-input input {
        display: block;
        width: 100%;
        font-size: 1.5rem;
        box-sizing: border-box;
        padding: 0 4.2rem 0 2.5rem;
        height: 5.2rem;
        border-radius: 30px;
        background-color: hsla(0, 0%, 100%, .48);
        box-shadow: 0 15px 45px 0 rgba(0, 0, 0, .27);
        border: 0;
        outline: 0;
        transition: background-color .3s;
        cursor: text
    }

    .main-input input::-webkit-input-placeholder {
        letter-spacing: .04rem;
        font-family: Muli, sans-serif;
        color: hsla(0, 0%, 100%, .8)
    }

    .main-input input:-moz-placeholder, .main-input input::-moz-placeholder {
        letter-spacing: .04rem;
        font-family: Muli, sans-serif;
        color: hsla(0, 0%, 100%, .8)
    }

    .main-input input:-ms-input-placeholder {
        letter-spacing: .04rem;
        font-family: Muli, sans-serif;
        color: hsla(0, 0%, 100%, .8)
    }

    .main-input input:focus {
        background-color: hsla(0, 0%, 100%, .64)
    }

    .main-input input:focus + button {
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 18 18" xml:space="preserve"><g id="Group_11" transform="translate(-308.8 -357.51)"><path id="Line_1" class="st0" d="M323.8 366.01h-12.5" fill="none" stroke="%23333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_2" class="st0" d="M318.8 361.01l5 5" fill="none" stroke="%23333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_3" class="st0" d="M318.8 371.01l5-5" fill="none" stroke="%23333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>')
    }

    .main-input button {
        position: absolute;
        top: 50%;
        right: 1.2rem;
        transform: translateY(-50%);
        width: 3.3rem;
        height: 3.3rem;
        background-color: #fafafa;
        border-radius: 50%;
        background-size: 1.62rem 1.62rem;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 18 18" xml:space="preserve"><g id="Group_11" transform="translate(-308.8 -357.51)"><path id="Line_1" class="st0" d="M323.8 366.01h-12.5" fill="none" stroke="%23717171" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_2" class="st0" d="M318.8 361.01l5 5" fill="none" stroke="%23717171" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_3" class="st0" d="M318.8 371.01l5-5" fill="none" stroke="%23717171" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>')
    }

    .main-input button:hover {
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 18 18" xml:space="preserve"><g id="Group_11" transform="translate(-308.8 -357.51)"><path id="Line_1" class="st0" d="M323.8 366.01h-12.5" fill="none" stroke="%23333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_2" class="st0" d="M318.8 361.01l5 5" fill="none" stroke="%23333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path id="Line_3" class="st0" d="M318.8 371.01l5-5" fill="none" stroke="%23333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>')
    }

    @-webkit-keyframes fadeShow {
        0% {
            opacity: 0;
            transform: translate3d(0, 10px, 0)
        }
        to {
            opacity: 1;
            transform: translateZ(0)
        }
    }

    @keyframes fadeShow {
        0% {
            opacity: 0;
            transform: translate3d(0, 10px, 0)
        }
        to {
            opacity: 1;
            transform: translateZ(0)
        }
    }

    @-webkit-keyframes randomBackground {
        0% {
            background-position: 0 50%
        }
        50% {
            background-position: 100% 50%
        }
        to {
            background-position: 0 50%
        }
    }

    @keyframes randomBackground {
        0% {
            background-position: 0 50%
        }
        50% {
            background-position: 100% 50%
        }
        to {
            background-position: 0 50%
        }
    }

    *, :after, :before {
        box-sizing: border-box
    }


    [tabindex="-1"]:focus {
        outline: 0 !important
    }

    dl, li, ol, ul {
        list-style: none
    }

    a:active, a:hover, a:link, a:visited {
        text-decoration: none;
        color: inherit
    }

    a:active, a:focus, a:hover {
        outline: 0
    }

    a:focus {
        opacity: 1
    }

    a, button {
        font-family: inherit
    }

    button {
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        -webkit-border-radius: 0;
        background: none;
        cursor: pointer;
        font-family: Muli, sans-serif
    }

    button:focus {
        outline: 0
    }

    i {
        font-style: normal
    }

    [role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
        touch-action: manipulation;
        font-family: Muli, Apple SD Gothic Neo, Malgun Gothic, sans-serif
    }

    @media screen and (min-width: 540px) {
        html {
            font-size: 73%
        }
    }


    .top {
        width: 100%;
        min-height: 43.6rem;
        padding: 0 30px 4.5rem;
        background-image: linear-gradient(145deg, #3770cc 20%, #ce91c9 84%)
    }


    @import url(//fonts.googleapis.com/css?family=Lato:300:400);


    .headerShowDetail {
        position: relative;
        text-align: center;
        background-image: linear-gradient(145deg, #ce91c9 20%, #3770cc 84%)
    }

    .inner-header {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .flex {
        padding: 20px;
        align-items: center;
        text-align: left;
    }

    .waves {
        position: relative;
        width: 100%;
        height: 15vh;
        margin-bottom: -7px; /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
    }

    /* Animation */

    .parallax > use {
        animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
    }

    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }

    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }

    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }

    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }

    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }


    /* 9 */
    .btn-9 {
        border: none;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .btn-9:after {
        position: absolute;
        content: " ";
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1fd1f9;
        background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        transition: all 0.3s ease;
    }

    .btn-9:hover {
        background: transparent;
        box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
        -4px -4px 6px 0 rgba(116, 125, 136, .2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .5),
        inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
        color: #fff;
    }

    .btn-9:hover:after {
        -webkit-transform: scale(2) rotate(180deg);
        transform: scale(2) rotate(180deg);
        box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
        -4px -4px 6px 0 rgba(116, 125, 136, .2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .5),
        inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
    }

    .custom-btn {
        width: 130px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
        outline: none;
    }
</style>
<script src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"></script>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"></script>
<div id="app">
    <div class="top">
        <header class="header">
            <h1 class="logo">
                <svg t="1694946151094" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1528" width="32" height="32">
                    <path d="M112 16h728v990.4H112z" fill="#FDBF5E" p-id="1529"></path>
                    <path d="M840 1024H112c-9.601 0-16.001-6.4-16.001-16V16c0-9.6 6.4-16 16-16H840c9.601 0 16.001 6.4 16.001 16v992.001c-0.002 7.999-8 15.999-16 15.999z m-712-32h696.001V32h-696v960z"
                          fill="#193651" p-id="1530"></path>
                    <path d="M174.896 81.104h600v862.399h-600z" fill="#FFFFFF" p-id="1531"></path>
                    <path d="M164.8 134.4H59.2c-24 0-43.2 19.2-43.2 43.2s19.2 43.199 43.2 43.199h104a43.02 43.02 0 0 0 43.198-43.2c1.6-23.998-17.599-43.198-41.598-43.198z"
                          fill="#FFFFFF" p-id="1532"></path>
                    <path d="M164.8 236.8H59.2C25.6 236.8 0 209.6 0 177.6s27.2-59.2 59.2-59.2h104c33.6 0 59.2 27.2 59.2 59.2s-25.6 59.2-57.6 59.2zM59.2 150.4c-16.001 0-27.2 12.8-27.2 27.2 0 16 12.8 27.2 27.2 27.2h104c16 0 27.2-12.8 27.2-27.2 0-16.001-12.8-27.2-27.2-27.2h-104z"
                          fill="#193651" p-id="1533"></path>
                    <path d="M164.8 356.8H59.2A43.02 43.02 0 0 0 16 400a43.02 43.02 0 0 0 43.2 43.198h104A43.02 43.02 0 0 0 206.397 400c1.6-24-17.599-43.199-41.598-43.199z"
                          fill="#FFFFFF" p-id="1534"></path>
                    <path d="M164.8 460.8H59.2C27.2 460.8 0 433.6 0 400s27.2-59.2 59.2-59.2h104c33.6 0 59.2 27.2 59.2 59.2s-25.6 60.8-57.6 60.8z m-105.6-88c-16.001 0-27.2 12.8-27.2 27.201 0 16.001 12.8 27.2 27.2 27.2h104c16 0 27.2-12.8 27.2-27.2 0-16-12.8-27.2-27.2-27.2h-104z"
                          fill="#193651" p-id="1535"></path>
                    <path d="M164.8 579.2H59.2c-24 0-43.2 20.8-43.2 44.799a43.02 43.02 0 0 0 43.2 43.199h104a43.02 43.02 0 0 0 43.198-43.2C207.998 600 188.8 579.2 164.8 579.2z"
                          fill="#FFFFFF" p-id="1536"></path>
                    <path d="M164.8 683.2H59.2C27.2 683.2 0 656 0 624c0-32 27.2-59.2 59.2-59.2h104c33.6 0 59.2 27.2 59.2 59.2 0 32.002-25.6 59.202-57.6 59.202z m-105.6-88C44.8 595.2 32 608 32 624s12.8 27.201 27.2 27.201h104c16 0 27.2-12.8 27.2-27.2 0-16-12.8-27.2-27.2-27.2h-104v-1.6z"
                          fill="#193651" p-id="1537"></path>
                    <path d="M164.8 803.2H59.2A43.02 43.02 0 0 0 16 846.397a43.02 43.02 0 0 0 43.2 43.2h104a43.02 43.02 0 0 0 43.198-43.2c1.6-24-17.599-43.199-41.598-43.199z"
                          fill="#FFFFFF" p-id="1538"></path>
                    <path d="M164.8 905.6H59.2C27.2 905.6 0 880 0 846.4s27.2-59.2 59.2-59.2h104c33.6 0 59.2 27.2 59.2 59.2s-25.6 59.2-57.6 59.2zM59.2 819.2C43.199 819.2 32 832 32 846.4c0 16.001 12.8 27.2 27.2 27.2h104c16 0 27.2-12.8 27.2-27.2 0-16-12.8-27.2-27.2-27.2h-104z"
                          fill="#193651" p-id="1539"></path>
                    <path d="M942.4 758.4h-104v131.2h104c36.798 0 65.6-28.801 65.6-65.6 0-35.201-28.8-65.6-65.6-65.6z"
                          fill="#4FBF9F" p-id="1540"></path>
                    <path d="M942.4 905.6h-104c-9.601 0-16.001-6.4-16.001-16V758.4c0-9.601 6.4-16.001 16-16.001h104c44.8 0 81.601 36.799 81.601 81.6S987.199 905.6 942.4 905.6z m-88-32h88.001c27.2 0 49.6-22.4 49.6-49.599 0-27.2-22.401-49.598-49.6-49.598h-88V873.6z"
                          fill="#193651" p-id="1541"></path>
                    <path d="M838.4 758.4H596.8c-83.198 0-163.199 22.4-233.6 65.6 70.4 43.198 152 65.6 233.6 65.6h241.6V758.4z"
                          fill="#FFFFFF" p-id="1542"></path>
                    <path d="M838.4 905.6H596.8c-84.799 0-169.599-24-241.598-68.8-4.8-3.202-8-8.001-8-14.401s3.2-11.2 8-14.4c73.6-44.8 156.799-68.801 241.599-68.801H838.4c9.6 0 16 6.4 16 16v131.2c0 12.802-8 19.202-16 19.202zM395.2 824c62.4 32 131.2 49.598 201.599 49.598h225.6v-99.2H596.8C526.399 774.4 456 792 395.2 824z"
                          fill="#193651" p-id="1543"></path>
                    <path d="M361.6 840h-30.4c-9.6 0-16-6.4-16-16s6.4-16.001 16-16.001h30.4c9.6 0 16 6.4 16 16S371.2 840 361.6 840z m168-32h32v32h-32z m86.4 0h32v32h-32z m86.4 0h32v32h-32z"
                          fill="#193651" p-id="1544"></path>
                    <path d="M288 144h86.4v86.4H288z m0 152h86.4v86.4H288z m0 150.4h86.4v86.4H288z m0 150.4h86.4v86.4H288z"
                          fill="#F16051" p-id="1545"></path>
                    <path d="M715.2 204.8h-240c-9.601 0-16.001-6.4-16.001-16s6.4-16.002 16-16.002H713.6c9.601 0 16 6.4 16 16.001 1.6 8-6.401 16.001-14.4 16.001z m0 150.4h-240c-9.601 0-16.001-6.4-16.001-16.001s6.4-16.001 16-16.001H713.6c9.601 0 16 6.4 16 16 1.6 8.001-6.401 16.002-14.4 16.002z m0 150.399h-240c-9.601 0-16.001-6.4-16.001-16 0-9.602 6.4-16.002 16-16.002H713.6c9.601 0 16 6.4 16 16.001 1.6 9.601-6.401 16.001-14.4 16.001z m0 150.402h-240c-9.601 0-16.001-6.4-16.001-16.001s6.4-16.001 16-16.001H713.6c9.601 0 16 6.4 16 16 1.6 9.602-6.401 16.002-14.4 16.002z"
                          fill="#193651" p-id="1546"></path>
                </svg>
            </h1>
            <p class="header__date">我们的生活清单</p></header>
        <div>
            <div class="title"><p class="title__text"><span class="title__message">生活目标清单</span><span
                    contenteditable="true" class="title__name">记录我们的目标</span> . </p>
                <p class="title__task"><span class="title__task-top">共同记录我们想做得事情</span><span
                        class="title__task-count"><em class="title__task-left">{% raw %}{{getFinishObjList().length}}{% endraw %}</em><em
                        class="title__task-total"> / {% raw %}{{todoList.length}}{% endraw %}</em></span><span
                        class="title__task-bottom">小目标，努力达成中...</span><span
                        class="title__task-info"></span></p></div>
            <div class="add">
                <div class="main-input">
                    <input type="text" placeholder="输入目标" @keyup.enter.native="addTodoObj" class="add__input"
                           v-model="inputText">
                    <button class="add__buttonn" @click="addTodoObj"></button>
                </div>
            </div>
        </div>
    </div>
    <div style="background-color: #efefef;">
        <div v-if="!isShowDetail">
            <div class="controller">
                <div class="select"><label for="order" class="blind">排序</label>
                    <select name="order" id="order" class="selectbox" v-model="orderInfo">
                        <option value="date-asc">倒序</option>
                        <option value="date-desc">正序</option>
                    </select></div>
                <button class="clear" @click="cleanAll">清理所有清单</button>
            </div>
            <ul class="list">
                <li class="list__item" v-for="todoObj in todoList" :key="todoObj.id">
                    <input type="checkbox" :id="todoObj.id" v-model="todoObj.isFinish" @click="changeTodo(todoObj)">
                    <label :for="todoObj.id" class="list__label"><span
                            class="icon-check"></span>
                        <p class="list__text">{% raw %}{{todoObj.text}}{% endraw %}</p>
                    </label>
                    <div class="list__right">
                        <button class="list__delete" @click="deleteTodoObj(todoObj.id)">
                        </button>
                        <button @click="showDetail(todoObj)">
                            查看详情
                        </button>
                        <p class="list__date">{% raw %}{{todoObj.createDate}}{% endraw %}</p></div>
                </li>
            </ul>
        </div>
        <div v-if="isShowDetail">
            <div class="headerShowDetail">
                <!--Content before waves-->
                <div class="inner-header flex">
                    <div>
                        <button class="custom-btn btn-9" @click="isShowDetail=false">返回</button>
                    </div>
                    <div><h2>{% raw %}{{showDetailObjInfo.text}}{% endraw %}</h2></div>
                </div>
                <!--Waves Container-->
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave"
                                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                        </defs>
                        <g class="parallax">
                            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
                            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>
                        </g>
                    </svg>
                </div>
                <!--Waves end-->
            </div>
        </div>
        <footer class="footer"> 代码来源 <a href="https://github.com/nana-like/vue-mytodo" target="_blank" rel="noopener"
                                        class="footer__link"
                                        one-link-mark="yes">nana-like</a></footer>
    </div>
</div>
<script>
    const userKey = 'test'
    const userPassword = 'userPassword'
    const errorUrl='/'
    passwordCheck(userKey,userPassword,errorUrl);

    // js 加密https://www.jsjiami.com/
    // 字符串 加密https://www.jsjiami.com/
    /**
     *  disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'
     *  src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"
     *  src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"
     * @param userKey
     * @param userPassword
     * @param errorUrl
     */
    function passwordCheck(userKey,userPassword,errorUrl) {
        DisableDevtool({
            ondevtoolopen: (type) => {
                const info = 'devtool opened!; type =' + type;
                alert(info); // If you are worried about blocking the page, use console.warn(info); and open the console to view
            },
        })
        const userMd5Key = md5(userKey)

        // 加密实现
        function encrypt(plaintext, key) {
            const encrypted = CryptoJS.AES.encrypt(plaintext, key);
            return encrypted.toString();
        }

        // 解密实现
        function decrypt(ciphertext, key) {
            return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
        }


        function setCookie(cname, cvalue, exTime) {
            const d = new Date();
            d.setTime(d.getTime() + (exTime));
            const expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

        function getCookie(cname) {
            const name = cname + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                const c = ca[i].trim();
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        function password(passwordStr) {
            let count = 1;
            let input = prompt('请输入密码：', '');
            while (count < 3) {
                if (input + "" === passwordStr + "") {
                    const passwordEncrypt = encrypt(passwordStr, userMd5Key);
                    setCookie(userMd5Key, passwordEncrypt, 7 * 24 * 60 * 60 * 1000)
                    return
                }
                count += 1;
                input = prompt(`密码错误！你还有${4 - count}次机会请重新输入:`);
                if (input !== password && count >= 3) {
                    let waitTime = getCookie(userMd5Key+"_t") || 1;
                    if (waitTime){
                        waitTime = Number.parseInt(waitTime+"") * 2
                    }
                    setCookie(userMd5Key+"_t", waitTime, waitTime * 60 * 1000)
                    window.location.href = errorUrl
                    alert(`密码错误，请${waitTime}分钟后重试`)
                    return
                }
            }
        }
        if (getCookie(userMd5Key+"_t")){
            window.location.href = errorUrl
            alert(`请等待，不要试图破解`)
            return
        }
        const cookie = getCookie(userMd5Key);
        if (!cookie || decrypt(cookie, userMd5Key) !== userPassword) {
            password(userPassword)
        }
    }
</script>
<script>
    function getUuid() {
        if (typeof crypto === 'object') {
            if (typeof crypto.randomUUID === 'function') {
                return crypto.randomUUID();
            }
            if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
                const callback = (c) => {
                    const num = Number(c);
                    return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
                };
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, callback);
            }
        }
        let timestamp = new Date().getTime();
        let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let random = Math.random() * 16;
            if (timestamp > 0) {
                random = (timestamp + random) % 16 | 0;
                timestamp = Math.floor(timestamp / 16);
            } else {
                random = (perforNow + random) % 16 | 0;
                perforNow = Math.floor(perforNow / 16);
            }
            return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
        });
    }

    console.log('初始化阿里存储')
    var decoder = new TextDecoder('utf8');
    const client = new OSS({
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI5tNssQun7VUWmmVzqFMG',
        accessKeySecret: 'WRdZfC58QFpOpkcDHln0n3P8ERVxLk',
        bucket: 'jsonyjl'
    });
    const headers = {
        // 指定Object的存储类型。
        'x-oss-storage-class': 'Standard',
        // 指定Object的访问权限。
        'x-oss-object-acl': 'private',
        // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.jpg。
        // 'Content-Disposition': 'attachment; filename="example.jpg"'
        // 设置Object的标签，可同时设置多个标签。
        'x-oss-tagging': 'Tag1=1&Tag2=2',
        // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
        'x-oss-forbid-overwrite': 'true',
    };

    async function putJsonStr(fileName, str) {
        try {
            await client.put(fileName, new OSS.Buffer.from(str));
            return true;
        } catch (e) {
            return false;
        }
    }

    async function getJsonStr(fileName) {
        try {
            const result = await client.get(fileName);
            return decoder.decode(result.content)
        } catch (e) {
            throw new Error("获取失败")
        }
    }

    async function getJsonObj(fileName) {
        const jsonStr = await getJsonStr(fileName);
        return JSON.parse(jsonStr);
    }

    function getDateNowStr() {
        const date = new Date();
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }

    console.log(getDateNowStr())

    const {createApp, ref, nextTick} = Vue
    const fileName = "live_todo.json";
    createApp({
        data() {
            return {
                todoList: [],
                orderInfo: ref('date-asc'),
                inputText: ref(''),
                isShowDetail: false,
                showDetailObjInfo: {}
            }
        },
        created() {
            getJsonObj(fileName).then(data => {
                this.todoList = data
            })
        },
        watch: {
            orderInfo() {
                this.changeOrder(this.orderInfo === 'date-asc')
            },
        },
        methods: {
            getFinishObjList() {
                return this.todoList.filter(todoObj => todoObj.isFinish);
            },
            showDetail(todoObj) {
                this.isShowDetail = true
                this.showDetailObjInfo = todoObj
            },
            deleteTodoObj(id) {
                this.todoList = this.todoList.filter(todoObj => todoObj.id !== id)
                putJsonStr(fileName, JSON.stringify(this.todoList))
            },
            changeOrder(isAsc) {
                if (isAsc) {
                    this.todoList = this.todoList.sort((v1, v2) => {
                        return v1.createDate.localeCompare(v2.ccreateDate)
                    })
                } else {
                    this.todoList = this.todoList.sort((v1, v2) => {
                        return !v1.createDate.localeCompare(v2.ccreateDate)
                    })
                }
            },
            changeTodo(todoObj) {
                nextTick(() => {
                    todoObj.isFinish = !todoObj.isFinish
                    putJsonStr(fileName, JSON.stringify(this.todoList))
                })
            },
            cleanAll() {
                this.todoList = [];
                putJsonStr(fileName, JSON.stringify(this.todoList))
            },
            addTodoObj() {
                if (!this.inputText) {
                    return
                }
                this.todoList.push({id: getUuid(), createDate: getDateNowStr(), text: this.inputText, isFinish: false})
                this.inputText = ''
                putJsonStr(fileName, JSON.stringify(this.todoList))
            },
        },
    }).mount('#app')
</script>
{% endmdHtml %}