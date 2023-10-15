<template>
    <h1>マイクラScriptAPI講座#1</h1>
    <br>

    <h1>事前準備</h1>
    <p>Visual Studio Codeをインストールしておいてください。(導入方法は調べてください)</p>
    <br>
    <h1>拡張機能をインストールする</h1>
    <p>Script APIを使うのに必要な拡張機能をインストールします。</p>
    <p>拡張機能の検索ボックスに"Minecraft Bedrock Edition Debugger"と入力し、一番上にでてきたものをクリックして、インストールをクリックします。</p>
    <p>または<a href="https://marketplace.visualstudio.com/items?itemName=mojang-studios.minecraft-debugger" target="_blank"
            rel="noopener noreferrer">これ</a>を開いて、"install"を押します。</p>
    <br>
    <img src="~assets\docs-imgs\Minecraft_Bedrock_Edition_Debugger.png" alt="Minecraft Bedrock Edition Debugger">
    <br>
    <br>
    <p><a href="../../download\MCAddonGenerator">MCAddonGenerator</a>を使用した場合は、以下の作業は行わなくても問題ありません。</p>
    <h1>作業用のフォルダを作成する</h1>
    <p>最初に、エクスプローラーの設定を変更して、隠しファイルを表示させます。</p>
    <p>エクスプローラーを開き、"表示 > 表示 > 隠しファイル" にチェックを入れてください。</p>
    <br>
    <p>次に、win + r を押し、</p>
    <p>"%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_behavior_packs"
    </p>

    <p>をコピーしてテキストボックスに貼り付け、enterを押します。</p>
    <p>開いたら、そのフォルダに新しくフォルダーを作ります。</p>
    <p>そしたらそのフォルダの中に、manifest.jsonとscriptsフォルダを作り、scriptsフォルダの中にmain.jsを作成します。</p>
    <br>
    <div class="code">
        <span>folder</span>
        <p>test addon</p>
        <p>|- manifest.json</p>
        <p>|- scripts</p>
        <p>ㅤㅤㅤ&ensp;|- main.js</p>
        <br>
    </div>
    <br>
    <h1>manifest.jsonを設定</h1>
    <p>manifest.jsonには下のコードを入力します。また、pack nameにアドオンの名前、pack descriptionにアドオンの説明を書いてください。</p>
    <p>uuidのところは<a href="https://www.uuidgenerator.net/" target="_blank"
            rel="noopener noreferrer">ここ</a>のサイトに行って、copyを押します。下のコードの "ここにuuid" のところに貼り付けます。(3箇所、別々のidを入れてください。)</p>
    <p>このidをちゃんと設定しないとエラーが出ます。</p>
    <br>
    <div class="code">
        <span>manifest.json</span>
        <pre>
            {
	"format_version": 2,
	"header": {
		"name": "pack name",
		"description": "pack description",
		"min_engine_version": [
			1,
			20,
			0
		],
		"uuid": "ここにuuid",
		"version": [
			1,
			0,
			0
		]
	},
	"modules": [
		{
			"type": "data",
			"uuid": "ここにuuid",
			"version": [
				1,
				0,
				0
			]
		},
		{
			"type": "script",
			"language": "javascript",
			"uuid": "ここにuuid",
			"entry": "scripts/main.js",
			"version": [
				1,
				0,
				0
			]
		}
	],
	"dependencies": [
		{
			"module_name": "@minecraft/server",
			"version": "1.6.0-beta"
		},
		{
			"module_name": "@minecraft/server-ui",
			"version": "1.2.0-beta"
		}
	]
}
        </pre>
    </div>
    <br>
    <h1>main.jsを編集する</h1>
    <br>
    <p>今回は試しに、チャットの色を変えてみます。</p>
    <p>まず、ctrl + shift + @ を押して、ターミナルを開き、下のコードをコピペして、enterを押します。</p>
    <br>
    <div class="code">
        <span>npm</span>
        <p>npm init -y</p>
        <br>
    </div>
    <br>
    <img src="~assets\docs-imgs\npm_init.png" alt="npm init -y">
    <br>
    <br>
    <p>できたら次はこのコードをターミナルにコピペしてenterを押します。</p>
    <br>
    <div class="code">
        <span>npm</span>
        <p>npm i @minecraft/server@1.6.0-beta.1.20.30-stable</p>
        <br>
    </div>
    <br>
    <img src="~assets\docs-imgs\minecraft_server.png" alt="npm init -y">
    <br>
    <br>
    <p>ここで準備は終わりです。</p>
    <br>
    <hr>
    <br>
    <p>今回は試しにチャットの色を変えてみます。</p>
    <p>main.jsに下のコードを入力します。</p>
    <br>
    <div class="code">
        <span>main.js</span>
        <pre>
//モジュールをインポート
import { world } from "@minecraft/server"; 
//チャットが送信されたとき
world.beforeEvents.chatSend.subscribe(ev => { 
    //送った人と送った内容を取り出す
    const { sender, message } = ev; 
    //送った人がredというtagがついているか調べる
    if (sender.hasTag("red")) { 
        //チャット送信をキャンセル
        ev.cancel = true; 
        //書き換えたチャットを送信
        world.sendMessage(`&sect;c&lt;{sender.name}&sect;r> &#36;{message}`); 
    } else if (sender.hasTag("blue")) { //送った人がblueというtagがついているか調べる
        //チャット送信をキャンセル
        ev.cancel = true;
        //書き換えたチャットを送信
        world.sendMessage(`&sect;9&lt;{sender.name}&sect;r> &#36;{message}`); 
    }
});
    </pre>
    </div>
    <br>
    <img src="~assets\docs-imgs\script_api_tutorial.png" alt="script_api_tutorial">
    <br>
    <br>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200&display=swap');

p {
    width: 90%;
    color: white;
    word-wrap: break-word;
}

span {
    color: white;
    cursor: pointer;
    background: rgb(15, 15, 15);
    border-radius: 0px 0px 5px 5px;
}

.code {
    background: rgb(43, 43, 43);
    padding-left: 10px;
    width: 75%;
    border-radius: 10px;
}

h1 {
    font-size: 30px;
}

h3 {
    color: white;
}

img {
    width: 75%;
}

pre {
    color: white;
    font-family: 'Noto Sans JP', sans-serif;
}

a {
    color: rgb(0, 236, 205);
}
</style>

<script setup>
useHead ({
    title: "ScriptAPIチュートリアル"
})</script>