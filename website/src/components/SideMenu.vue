<template>
    <div>
        <div class="side-menu">
            <div class="menu-options-wrapper">
                <div class="menu-option" v-on:click="$emit('tabChanged', 1)" @click="selected = 1" :class="{active:selected == 1}">Home</div>
                <div class="menu-option" v-on:click="$emit('tabChanged', 2)" @click="selected = 2" :class="{active:selected == 2}">Discover</div>
                <div class="menu-option" v-on:click="$emit('tabChanged', 3)" @click="selected = 3" :class="{active:selected == 3}">My Groups</div>
                <div class="menu-option" v-on:click="$emit('tabChanged', 4)" @click="selected = 4" :class="{active:selected == 4}">Conversations</div>
                <div class="menu-option" v-on:click="$emit('tabChanged', 5)" @click="selected = 5" :class="{active:selected == 5}">Notifications</div>
            </div>
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
    background-color: rgb(228, 228, 228);
}

.menu-option {
    height: 30px;
    width: 100%;
    padding-top: 15px;
    font-weight: 700;
    text-align: left;
    text-indent: 35px;
    cursor: pointer;
    border-bottom: solid 1px;
}

.menu-option.active {
    transition: 1s;
    background: var(--disc-blue);
    background: linear-gradient(90deg, var(--disc-blue) 0%, rgba(228,228,228,1) 5%, rgba(228,228,228,1) 100%);
    border-bottom-color: var(--disc-blue);
}

</style>