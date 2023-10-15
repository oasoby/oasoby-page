<script setup>
useHead ({
    title: "Home"
})</script>

<template>
    <div class="bg_img">
        <div class="about">
            <h1>おあそび</h1>
            <p>Js,Py,C#とか書いてるプログラミング初心者です。Javaは一度触ったけど頭が痛くなったのでやめました()</p>
            <p>好きなゲームはマイクラと原神です。</p>
            <p>このサイトはNuxt3を使用しています。</p>
            <br>
            <h1>SNS</h1>
            <button onclick="window.open(`https://youtube.com/@oasoby`)">YouTube</button>
            <button onclick="window.open(`https://x.com/oasoby`)">Twitter</button>
            <button onclick="window.open(`https://github.com/oasoby`)">GitHub</button>
        </div>
    </div>
    <div>

    </div>
</template>

<style lang="scss">
.bg_img {
    background-image: url("~/assets/images/site/bgi.png");
    background-repeat: no-repeat;
    width: auto;
    height: 94.45vh;
    margin-left: -10px;

    button {
        border: white solid 2px;
        cursor: pointer;
        border-radius: 30px;
        font-size: 15px;
        width: 130px;
        height: 50px;
        margin-top: 10px;
        margin-right: 20px;
        color: #ffffff;
        background: rgb(27, 27, 27);
    }
}

.about {
    margin-left: 40px;
    margin-top: -10px;
    padding-top: 100px;
}
</style>

