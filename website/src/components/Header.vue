<template>
    <div class="header">
        <div class="header-logo-text">Discovr</div>
        <input class="header-search-bar" type="text" placeholder="Search for anything">
        <div class="header-al">Add a Link</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.header-al {
    text-align: center;
    width: 100px;
    background-color: rgb(58, 58, 58);
    color: white;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
}

.header-logo-text {
    text-align: left;
    font-size: 40px;
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

.header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.header * {
    align-self: center;
}


</style>
