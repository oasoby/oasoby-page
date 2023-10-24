<template>
    <div class="des">
        <h1>MCAddonGenerator (windows only)</h1>
        <p>マイクラ統合版のScriptAPIアドオンを作りやすくするツール。</p>
        <p>ダウンロードすると<a href="../tos">利用規約</a>に同意したことになります。</p>

        <button
            onclick="location.assign(`https://github.com/oasoby/MCAddonGenerator/releases/download/latest/MCAddonGenerator.zip`)"
            type="button" disabled>MCAddonGeneratorをダウンロード</button>
        <h1>使い方</h1>
        <div class="htu">
            <ul>
                <li>ダウンロードしたzipファイルを解凍します。</li>
                <li>解凍したフォルダを開き、MCAddonGenerator.exeを起動します。</li>
                <li>SmartScreenにブロックされた場合、詳細情報をクリックし、実行をクリックします。</li>
                <video src="~/assets\images\blog\MCAG\ss.mp4" type="video/mp4" controls />
                <li>コンソールにアドオンの名前を決めてくださいと表示されるので、半角英数字で名前を入力して、エンターを押します。</li>
                <li>コンソールにアドオンの説明を書いてくださいと表示されるので、半角英数字で説明を書いて、エンターキーを押してください。</li>
                <li>しばらく待つと、勝手にエクスプローラーでフォルダが開かれます。これで完了です。</li>
                なにも書かずにエンターを押した場合、addon_nameとaddon_descriptionに設定されます。
            </ul>
            <h1>manifest.json、main.jsのデフォルトの内容をを変更する</h1>
            <p>MCAddonGenerator.exeと同じフォルダにある、manifestjson.txt、mainjs.txtの内容を変更することで可能です。</p>
        </div>
        <br>
    </div>
</template>

<style lang="scss">
.des {
    p {
        font-size: 20px;
    }

    button {
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 5px;
        background: rgb(2, 72, 223);
        border: none;
        width: 340px;
        height: 50px;
        cursor: pointer;
        font-size: 15px;
        color: #d3d3dc;
    }

}


.htu {
    ul {
        margin-left: 20px;
        list-style: decimal;
    }
}

video {
    margin-top: 20px;
    margin-left: -15px;
    width: 600px;
}
</style>

<script setup>
useHead({
    title: "MCAddonGenerator"
})
</script>
