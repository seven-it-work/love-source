---
title: 世上最浪漫的事，就是与心爱的人一起慢慢的变老
date: 2023-09-05 18:44:23
password: 123
---
{% mdHtml %}
<style lang="less" scoped>
    .countDown1container {
        color: #333;
        margin: 0 auto;
        text-align: center;
    }

    .countDown1container > h1 {
        font-weight: normal;
        letter-spacing: .125vw;
        text-transform: uppercase;
    }

    .countDown1ul > li {
        display: inline-block;
        font-size: 1.5em;
        list-style-type: none;
        padding: 1em;
        text-transform: uppercase;
    }

    .countDown1ul > li span {
        display: block;
        font-size: 4.5vw;
    }

    .countDown1ul > .emoji {
        display: none;
        padding: 1vw;
    }

    .countDown1ul > .emoji span {
        font-size: 4vw;
        padding: 0 .5vw;
    }
</style>
<style>
    .progress {
        font-size: 1.2em;
        height: 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 2px;
        border: 1px solid black;
    }

    .progress--active .progress__bar {
        opacity: 1;
    }

    .progress__text {
        width: 20em;
        padding: 0 0.9em;
        position: absolute;
    }

    .progress__text em {
        font-style: normal;
    }

    .progress__bar {
        color: black;
        font-size: 12px;
        font-weight: normal;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
        line-height: 19px;
        display: block;
        position: relative;
        top: -1px;
        left: -1px;
        width: 0%;
        height: 100%;
        opacity: 0;
        border: 1px solid;
        border-radius: 2px 0 0 2px;
        background-size: 100px 30px, 130px 30px, 130px 30px;
        background-position: -20% center, right center, left center;
        background-repeat: no-repeat, no-repeat, no-repeat;
        transition: opacity 0.2s ease, width 0.8s ease-out, background-color 1s ease, border-color 0.3s ease, box-shadow 1s ease;
        -webkit-animation: pulse 2s ease-out infinite;
        animation: pulse 2s ease-out infinite;
        background-color: rgba(201, 4, 20, 0.95);
        background-image: linear-gradient(90deg, rgba(226, 4, 22, 0) 10%, rgba(250, 6, 26, 0.8) 30%, #fb1f31 70%, rgba(250, 6, 26, 0.8) 80%, rgba(226, 4, 22, 0) 90%), linear-gradient(to right, rgba(251, 31, 49, 0) 0%, #fb1f31 100%), linear-gradient(to left, rgba(251, 31, 49, 0) 0%, #fb1f31 100%);
        border-color: #fb3848;
        box-shadow: 0 0 0.6em #fa061a inset, 0 0 0.4em #e20416 inset, 0 0 0.5em rgba(201, 4, 20, 0.5), 0 0 0.1em rgba(254, 206, 210, 0.5);
    }

    .progress__bar--orange {
        background-color: rgba(201, 47, 0, 0.95);
        background-image: linear-gradient(90deg, rgba(227, 53, 0, 0) 10%, rgba(252, 59, 0, 0.8) 30%, #ff4d17 70%, rgba(252, 59, 0, 0.8) 80%, rgba(227, 53, 0, 0) 90%), linear-gradient(to right, rgba(255, 77, 23, 0) 0%, #ff4d17 100%), linear-gradient(to left, rgba(255, 77, 23, 0) 0%, #ff4d17 100%);
        border-color: #ff6030;
        box-shadow: 0 0 0.6em #fc3b00 inset, 0 0 0.4em #e33500 inset, 0 0 0.5em rgba(201, 47, 0, 0.5), 0 0 0.1em rgba(255, 214, 201, 0.5);
    }

    .progress__bar--yellow {
        background-color: rgba(232, 158, 0, 0.95);
        background-image: linear-gradient(90deg, rgba(255, 174, 3, 0) 10%, rgba(255, 183, 28, 0.8) 30%, #ffbf36 70%, rgba(255, 183, 28, 0.8) 80%, rgba(255, 174, 3, 0) 90%), linear-gradient(to right, rgba(255, 191, 54, 0) 0%, #ffbf36 100%), linear-gradient(to left, rgba(255, 191, 54, 0) 0%, #ffbf36 100%);
        border-color: #ffc74f;
        box-shadow: 0 0 0.6em #ffb71c inset, 0 0 0.4em #ffae03 inset, 0 0 0.5em rgba(232, 158, 0, 0.5), 0 0 0.1em rgba(255, 248, 232, 0.5);
    }

    .progress__bar--green {
        background-color: rgba(0, 178, 23, 0.95);
        background-image: linear-gradient(90deg, rgba(0, 204, 26, 0) 10%, rgba(0, 229, 30, 0.8) 30%, #00ff21 70%, rgba(0, 229, 30, 0.8) 80%, rgba(0, 204, 26, 0) 90%), linear-gradient(to right, rgba(0, 255, 33, 0) 0%, #00ff21 100%), linear-gradient(to left, rgba(0, 255, 33, 0) 0%, #00ff21 100%);
        border-color: #19ff37;
        box-shadow: 0 0 0.6em #00e51e inset, 0 0 0.4em #00cc1a inset, 0 0 0.5em rgba(0, 178, 23, 0.5), 0 0 0.1em rgba(178, 255, 188, 0.5);
    }

    .progress__bar--blue {
        background-color: rgba(18, 135, 204, 0.95);
        background-image: linear-gradient(90deg, rgba(20, 151, 227, 0) 10%, rgba(37, 162, 236, 0.8) 30%, #3dacee 70%, rgba(37, 162, 236, 0.8) 80%, rgba(20, 151, 227, 0) 90%), linear-gradient(to right, rgba(61, 172, 238, 0) 0%, #3dacee 100%), linear-gradient(to left, rgba(61, 172, 238, 0) 0%, #3dacee 100%);
        border-color: #54b6f0;
        box-shadow: 0 0 0.6em #25a2ec inset, 0 0 0.4em #1497e3 inset, 0 0 0.5em rgba(18, 135, 204, 0.5), 0 0 0.1em rgba(225, 242, 252, 0.5);
    }

    .progress__bar:before, .progress__bar:after {
        content: "";
        position: absolute;
        right: -1px;
        top: -10px;
        width: 1px;
        height: 40px;
    }

    .progress__bar:before {
        width: 7px;
        right: -4px;
        background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 75%);
    }

    .progress__bar:after {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);
    }

    .progress--complete .progress__bar {
        -webkit-animation: none;
        animation: none;
        border-radius: 2px;
    }

    .progress--complete .progress__bar:after, .progress--complete .progress__bar:before {
        opacity: 0;
    }

    @-webkit-keyframes pulse {
        0% {
            background-position: -50% center, right center, left center;
        }
        100% {
            background-position: 150% center, right center, left center;
        }
    }

    @keyframes pulse {
        0% {
            background-position: -50% center, right center, left center;
        }
        100% {
            background-position: 150% center, right center, left center;
        }
    }

    #progressList > div {
        margin: 10px;
    }

</style>
<div class="countDown1container">
    <h1 id="headline">纪念日xxx</h1>
    <div id="countdown">
        <ul class="countDown1ul">
            <li><span id="days"></span>天</li>
            <li><span id="hours"></span>时</li>
            <li><span id="minutes"></span>分</li>
            <li><span id="seconds"></span>秒</li>
        </ul>
    </div>
    <div id="content" class="emoji">
        <span>🥳</span>
        <span>🎉</span>
        <span>🎂</span>
    </div>
</div>
<div id="progressList">
</div>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script>
    const dataList = [
        {
            text: '结婚纪念日',
            year: 2023,
            dateInfo: '09-07'
        },
        {
            text: '1',
            year: 2022,
            dateInfo: '01-06'
        },
        {
            text: '2',
            year: 2023,
            dateInfo: '07-06'
        },
        {
            text: '2',
            year: 2023,
            dateInfo: '09-05'
        },
    ]
    let $progressList = document.getElementById("progressList");
    let result = ''
    const orange = 25,
        yellow = 50,
        green = 75;
    const formatNowDate = dayjs().format("YYYY-MM-DD");
    for (let i = 0; i < dataList.length; i++) {
        let percent = 0;
        const dataListElement = dataList[i];
        const yearNow = dayjs().year();
        dataListElement.nextDate = yearNow + '-' + dataListElement.dateInfo
        let diffDays = dayjs(dataListElement.nextDate).diff(formatNowDate, 'days');
        if (diffDays < 0) {
            dataListElement.nextDate = (yearNow + 1) + '-' + dataListElement.dateInfo
            diffDays = dayjs(dataListElement.nextDate).diff(formatNowDate, 'days');
        }
        if (diffDays !== 365) {
            percent = (365 - diffDays) / 365 * 100
        }
        dataListElement.percent = percent
        dataListElement.diffDays = diffDays
    }
    let dataSortList = dataList.sort((d1, d2) => d1.diffDays - d2.diffDays)
    for (let i = 0; i < dataSortList.length; i++) {
        const dataListElement = dataSortList[i];
        const percent = dataListElement.percent
        let progressClass = 'progress progress--active'
        let progress__barClass = 'progress__bar'
        let progress__barStyle = `width:  ${percent}%`
        let emText = `还剩${dataListElement.diffDays}天`
        if (percent >= 100) {
            progressClass += " progress--complete ";
            progress__barClass += " progress__bar--blue ";
            emText = "就是今天";
        } else {
            if (percent >= green) {
                progress__barClass += " progress__bar--green ";
            } else if (percent >= yellow) {
                progress__barClass += " progress__bar--yellow ";
            } else if (percent >= orange) {
                progress__barClass += " progress__bar--orange ";
            }
        }
        result += `<div class="${progressClass}">
                        <b style="${progress__barStyle}" class="${progress__barClass}">
                            <span class="progress__text">
                              ${dataListElement.text}: <em>${emText}</em>
                            </span>
                        </b>
                    </div>`
    }
    $progressList.innerHTML = result
    // 倒计时，取最近的
    const dataSortListElement = dataSortList[0];
    let $headline = document.getElementById("headline");
    $headline.innerText = dataSortListElement.text
    let $days = document.getElementById("days");
    $days.innerText = dataSortListElement.diffDays
    // 时分秒
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    const countDown = new Date(dataSortListElement.nextDate).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 0)
</script>
{% endmdHtml %}