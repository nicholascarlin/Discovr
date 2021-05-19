<template>
    <div class="side-menu">
        <div class="menu-options-wrapper">
            <div class="menu-option" @click="selected = 1" :class="{active:selected == 1}">Home</div>
            <div class="menu-option" @click="selected = 2" :class="{active:selected == 2}">Discover</div>
            <div class="menu-option" @click="selected = 3" :class="{active:selected == 3}">My Groups</div>
            <div class="menu-option" @click="selected = 4" :class="{active:selected == 4}">Notifications</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1
        }
    }
}
</script>

<style>
:root {
    --disc-blue: rgb(0,132,255);
}

.side-menu {
    float: left;
    position: fixed;
    width: 250px;
    height: 100%;
}

.menu-option {
    height: 30px;
    width: 100%;
    padding-top: 15px;
    font-weight: 700;
    text-align: left;
    text-indent: 35px;
    cursor: pointer;
}

.menu-option.active {
    background: var(--disc-blue);
    background: linear-gradient(90deg, var(--disc-blue) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%);
    transition: ease 2s;
}

</style>