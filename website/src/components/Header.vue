<template>
    <div class="header">
        <div class="header-logo-text">Discovr</div>
        <input class="header-search-bar" type="text" placeholder="Search for anything">
        <div class="header-subtext">SHIT HERE</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.header-logo-text {
    float: left;
    font-size: 40px;
    margin-left: 10px;
}

.header-search-bar {
    border-radius: 30px;
    width: 30%;
    height: 30px;
    margin-top: 0px;
    text-indent: 10px;
}

.header-search-bar:focus {
    outline: none;
}

.header-subtext {
    float: right;
}

.header {
    padding: 10px;
}


</style>
