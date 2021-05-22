<template>
    <div class="home-page">
        <div>
            <div class="page-header">Home</div>
            <BrowseRecommendedGroups/>
        </div>
        <div class="bottom-rec-group-line"></div>
    </div>
</template>

<script>
import BrowseRecommendedGroups from './BrowseRecommendedGroups'

export default {
    components: {
       BrowseRecommendedGroups
    } 
}
</script>


<style>
    .home-page {
        background-color: white;
        font-family: 'Playfair Display', serif;
    }

    .bottom-rec-group-line {
        width: 67.5%;
        height: 1px;
        margin-top: 25px;
        margin-left: 15px;
        background-color: rgb(168, 168, 168);
    }

    .page-header {
        text-align: left;
        font-size: 30px;
        padding: 20px 15px 0px;
    }

</style>