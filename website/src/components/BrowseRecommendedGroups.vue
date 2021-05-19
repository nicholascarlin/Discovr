<template>
    <div class="browse-groups">
        <div class="your-groups-subheader">Your Groups</div>
        <div class="group-icon-scroll-window">
            <li class="group-icon-list" v-for="group in Groups" :key="group.groupName">
                <dynamic-group-icons :groupName="group.groupName"></dynamic-group-icons>
            </li>
        </div>
        <div class="dynamic-groups">
        </div>
    </div>
</template>

<script>
import DynamicGroupIcons from './DynamicGroupIcons.vue';

export default {
    components: {
       DynamicGroupIcons
    },
    data() {
        return {
            Groups: [
                { groupName: "Guitar" },
                { groupName: "Banjo" },
                { groupName: "Dobro" },
                { groupName: "Bass" },
                { groupName: "Drums" }
            ]
        };
    } 
};
</script>

<style>

    .group-icon-scroll-window {
        clear: both;
        width: 65%;
        height: 100px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        margin-left: 50px;
    }

    .browse-groups {
        margin: 30px 0px 0px 15px;
    }

    .group-icon-list {
        margin-top: -20px;
        text-align: center;
        display: inline-block;
        list-style: none;
    }

    .your-groups-subheader {
        float: left;
        font-size: 20px;
    }

    .dg-icons {
        float: left;
    }

</style>