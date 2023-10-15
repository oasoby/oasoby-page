<template>
    <div class="contact">
        <h1>TwitterのDMまでお願いします</h1>
        <a href="https://twitter.com/messages/compose?recipient_id=1667762399846481920" target="_brank" rel="noopener noreferrer">
            <button>Twitter</button>
        </a>
    </div>
</template>

<style lang="scss">
.contact {
    text-align: center;
}
a {
    color: #d3d3d3;
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
</style>

<script setup>
useHead ({
    title: "Contact"
})</script>