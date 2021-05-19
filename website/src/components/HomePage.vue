<template>
    <div class="home-page">
        <div>
            <div class="page-header">Home</div>
            <BrowseGroups/>
        </div>   
    </div>
</template>

<script>
import BrowseGroups from './BrowseGroups'

export default {
    components: {
       BrowseGroups
    } 
}
</script>


<style>
    .home-page {
        background-color: white;
    }

    .page-header {
        text-align: left;
        font-size: 30px;
        padding: 20px 15px 0px;
    }

</style>