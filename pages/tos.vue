<template>
    <h1>利用規約</h1>
    <div class="tos">
        <p>このサイトからダウンロードしたものの再配布、自作発言をしないでください。</p>
        <p>ダウンロードは自己責任でお願いします。損害や問題に対しても責任を負いません。</p>
        <p>このサイトのアイコンは全て<a href="https://primer.style/design/foundations/icons" target="_blank"
            rel="noopener noreferrer">octicon</a>のものです。</p>
    </div>
</template>

<style lang="scss">
.tos {
    ul {
        margin-left: 30px;
        list-style: decimal;
    }

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
}</style>

<script setup>
useHead ({
    title: "利用規約"
})</script>
