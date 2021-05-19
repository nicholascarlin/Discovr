<template>
    <div class="group-icon">{{groupName}}</div>
</template>

<script>
export default {
    props: {
        groupName: {required: true, type: String},
    }
}
</script>

<style>

    :root {
        --disc-blue: rgb(0,132,255);
    }

    .group-icon {
        display: inline-block;
        text-align: center;
        width: 150px;
        margin-top: 40px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: var(--disc-blue);
        border-radius: 20px;
        cursor: pointer;
        color: white;
    }

    .group-icon:hover {
        transition: .5s;
        background-color: rgb(3, 118, 226);
    }

</style>