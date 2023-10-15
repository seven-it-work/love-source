---
title: 足迹地图
date: 2023-09-14 19:49:59
---

{% mdHtml %}
<style>

</style>
<div id="myMap" style="height:100vh;"></div>
<!-- MAP[END] -->


<script src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AvfgntqoiU4NADAHQajrTZODiPAhoh5KCtFmdgX4y8npxuqZ0ssxwp76mhjYx1Dg' async defer></script>
<script src="https://cdn.jsdelivr.net/gh/yamazakidaisuke/BmapQuery/js/BmapQuery.js"></script>
<script>
    //init
    function GetMap() {
        //------------------------------------------------------------------------
        //1. Instance
        //------------------------------------------------------------------------
        const map = new Bmap("#myMap");
        //------------------------------------------------------------------------
        //2. Display Map
        //------------------------------------------------------------------------
        map.startMap(34.542793929470484, 104.60221188708677, "aerial", 4);

        //----------------------------------------------------
        //3. Infobox
        //   options = new Array();
        //   options[index] = { lat, lon, width, height, title, pinColor, description, show };
        //----------------------------------------------------
        const options = [
            {
                "lat":18.613956957240887,
                "lon":110.20463188805498,
                "title":"日月湾",
                "pinColor":"#ff0000",
                "height":300,
                "width":320,
                "description": `<div>测试<a href="#">123</a></div>`,
                "show":false
            },
            {
                "lat":18.675326,
                "lon":110.364246,
                "title":"神州岛",
                "pinColor":"#ff0000",
                "height":300,
                "width":320,
                "description": `<div>测试<a href="#">123</a></div>`,
                "show":false
            },
            {
                "lat":18.294968,
                "lon":109.394405,
                "title":"三亚",
                "pinColor":"#ff0000",
                "height":300,
                "width":320,
                "description": `<div>婚纱照<a href="#">123</a></div>`,
                "show":false
            },
            {
                "lat":37.505453,
                "lon":105.196264,
                "title":"中卫",
                "pinColor":"#ff0000",
                "height":300,
                "width":320,
                "description": `<div>婚纱照<a href="#">123</a></div>`,
                "show":false
            },
        ];
        //----------------------------------------------------
        //4. Switch infoboxs
        //   infoboxLayers(options, true); //true=one, false=Multiple
        //----------------------------------------------------
        map.infoboxLayers(options,true);
    }
</script>
{% endmdHtml %}
