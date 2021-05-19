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
        background-color: lightblue;
        border-radius: 20px;
    }

</style>