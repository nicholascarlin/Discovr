<template>
    <div class="header">
        <div class="header-logo-text">Discovr</div>
        <input class="header-search-bar" type="text" placeholder="Search for anything">
        <div class="header-log-in">Log in</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

:root {
    --disc-blue: rgb(0,132,255);
}

.header-log-in {
    text-align: center;
    width: 100px;
    background-color: var(--disc-blue);
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.header-log-in:hover {
    transition: .5s;
    background-color: rgb(3, 118, 226);
}

.header-logo-text {
    text-align: left;
    font-size: 40px;
    text-indent: 30px;
}

.header-search-bar {
    border-radius: 30px;
    border: none;
    width: 30%;
    height: 30px;
    margin-top: 0px;
    text-indent: 10px;
}

.header-search-bar:focus {
    box-shadow: 0 0 3px var(--disc-blue);
    transition: .25s;
    outline: none;
}

.header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: solid 1px;
}

.header * {
    align-self: center;
}


</style>
