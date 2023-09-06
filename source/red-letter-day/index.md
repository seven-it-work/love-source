---
title: 世上最浪漫的事，就是与心爱的人一起慢慢的变老
date: 2023-09-05 18:44:23
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
        letter-spacing: .125rem;
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
        font-size: 4.5rem;
    }

    .countDown1ul > .emoji {
        display: none;
        padding: 1rem;
    }

    .countDown1ul > .emoji span {
        font-size: 4rem;
        padding: 0 .5rem;
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
<script>
    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
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
                //seconds
            }, 0)
    }());
</script>
{% endmdHtml %}