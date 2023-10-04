---
title: 物品清单
date: 2023-10-04 16:17:00
---

{% mdHtml %}
<script src="https://cdn.jsdelivr.net/combine/npm/jquery@latest/dist/jquery.min.js"></script>
<style>
.main {
            width: 500px;
            height: 500px;
            background-color: #ff8181;
            border-radius: 50%;
            /* overflow: hidden; */
            position: relative;
            margin: 50px auto 0;
            box-shadow: 1px 1px 5px 2px #999;
        }

        .cj-disc {
            width: 460px;
            height: 460px;
            border-radius: 50%;
            border: 10px dotted #ffec89;
            position: absolute;
            top: 18px;
            left: 18px;
            transform: rotate(90deg);
            transition-timing-function: cubic-bezier(0.5, 0.2, 0, 1);
        }

        .cj-disc .list {
            width: 440px;
            height: 440px;
            border-radius: 50%;
            position: absolute;
            /* background-color: #007bff; */
            overflow: hidden;
            box-shadow: 0 0 3px 1px #333;
        }

        .cj-disc .center {
            width: 0px;
            height: 0px;
            position: absolute;
            left: 220px;
            top: 220px;
        }

        .cj-disc .list .item {
            position: absolute;
            width: 0px;
            height: 0px;
            top: -220px;
            border-color: transparent;
            border-style: solid;
            border-width: 220px;

            /* transform-origin: 0px 0px; */
            /* transform: rotate(5deg); */

        }

        .item:nth-child(3n) {
            border-top-color: #ff814f !important;
        }

        .item:nth-child(3n+1) {
            border-top-color: #ffec89 !important;
        }

        .item:nth-child(3n+2) {
            border-top-color: #ff5959 !important;
        }

        .item p {
            position: absolute;
            top: -215px;
            line-height: 17px;
            font-size: 16px;
            left: -7.5px;
        }

        .pointer {
            width: 60px;
            height: 60px;
            position: absolute;
            border-radius: 50%;
            top: 220px;
            left: 220px;
            z-index: 1;
            background-color: #ff5959;
            box-shadow: 0 3px 5px 1px #333;
        }

        .before {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            border-radius: 50%;
            background-color: #ff5959;
            text-align: center;
            cursor: pointer;

        }

        .before:hover p {

            text-shadow: 0 0 10px #ffec89;
        }

        .before p {
            cursor: pointer;
            line-height: 16px;
            color: #ffec89;
        }

        .before p:nth-child(1) {
            margin-top: 13px;
        }

        .pointer .line {
            width: 120px;
            position: relative;
            height: 10px;
            background-color: #ff5959;
            margin-top: 25px;
            margin-left: 50px;
            box-shadow: 0 3px 5px 1px #333;
        }

        .line-before {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            background-color: #ff5959;

        }

        .arrow {
            width: 0;
            height: 0;
            position: absolute;
            right: -30px;
            top: -10px;
            color: #ff5959;
            font-size: 30px;
            transform: rotate(90deg);
            text-shadow: 3px 0px 5px #333;
        }
</style>
<div class="main">
    <div class="cj-disc">
        <div class="list">
            <div class="center">
            </div>
        </div>
    </div>
    <div class="pointer">
        <div class="before">
            <p>开始</p>
            <p>摇奖</p>
        </div>
        <div class="line">
            <div class="line-before"></div>
            <div class="arrow">▲</div>
        </div>
    </div>
</div>
<script>
    // 数字越大 概率越高
    const conArr = [ //奖项+概率
        ['1', 100],
        ['2', 100],
        ['3', 100],
        ['4', 100]
    ];
    let maxNum = 0; //概率总数,添加元素时自动计算
    const count = conArr.length;
    const jiao = 360 / count;
    const bxj = 220;
    const bc = bxj * (Math.tan(Math.PI / 180 * jiao / 2)); //求边长


    function grn(n, m) {
        const c = m - n + 1;
        return Math.floor(Math.random() * c + n);
    }

    $(function () {
        function createItem(c) {
            for (let i = 0; i < c; i++) {
                maxNum += conArr[i][1];
                const item = $('<div class="item"><p>' + conArr[i][0] + '</p></div>');
                $('.center').append(item)
                item.css({
                    "transform": 'rotate(' + jiao * i + 'deg)',
                    'left': -bc + 'px'
                });
                item.css('border-left-width', (bc) + 'px');
                item.css('border-right-width', (bc) + 'px');
            }
        }

        createItem(count);
        $('.before').on('click', function () {
            $('.before').css({
                visibility: 'hidden'
            })
            $('.cj-disc').css({
                'transition-duration': '0s',
                'transform': 'rotate(90deg)'
            })
            const zCount = grn(5, 8);
            const b = grn(1, maxNum);
            let temp1 = 0,
                temp2 = 0;
            let conIndex = 0;
            for (let i = 0; i < count; i++) {
                temp2 = temp1;
                temp1 += conArr[i][1];

                if (i === 0) {
                    if (b <= temp1) {
                        conIndex = i;
                        break;
                    }
                } else {
                    if (b > temp2 && b <= temp1) {
                        conIndex = i;
                        break;
                    }
                }

            }
            const rotate = grn((count - conIndex) * jiao - jiao / 2 + 1, (count - conIndex) * jiao + jiao /
                2 -
                1); //旋转角度区间
            setTimeout(function () {
                $('.cj-disc').css({
                    'transition-duration': zCount + 2 + 's',
                    'transform': 'rotate(' + (90 + (360 * zCount + rotate)) + 'deg)',
                })
                setTimeout(() => {
                    $('.before').css({
                        visibility: 'unset'
                    })
                    // alert("中奖了"+conArr[conIndex][0])
                }, (zCount + 2) * 1000)
            }, 100)
        })
    })
</script>

{% endmdHtml %}
