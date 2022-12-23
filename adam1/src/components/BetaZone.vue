<template>
    <div>
    <hr />
<div class="container">
<h1>BetaZone</h1>
<div class="container border border-dark m-4 p-1">
<div class="row p-2">

<div class="col-12 col-md-6 col-lg-6">

<h6>mapState1 Users List : {{ USERLIST.length}}</h6>
<p>mapState2 USERLIST index0 : {{ USERLIST[0] }} index1 :{{ USERLIST[2]}} 
<br />
ex? Placeat, aut illum.</p>

</div>
<div class="col-12 col-md-6 col-lg-6">

<div class="container">
<p>Loop v-for Test:</p>
<h4>Sort Projects:</h4>
<button class="btn btn-sm btn-warning m-2">By Year</button>
<button class="btn btn-sm btn-warning m-2">By Name</button>
</div>


<ul>
<li 
v-for="(item, index) in LIST" 
:key="index"
>

<div class="capsule d-flex">


<h6>
{{ item.id}}
</h6>
<h5>
{{ item.name }}
</h5>

<p>
 {{ item.year }}
</p>
</div>





</li>
</ul>

</div>
</div>





</div>

</div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

    export default {
        name:'BetaZone',
        computed:{
            ...mapState(['USERLIST','LIST','data1'])
        }

    }
</script>

<style lang="css" scoped>
.capsule{

    color:goldenrod;
    background-color: whitesmoke;
    border:solid 1px dimgray;
    width:50%;
    padding:10px;
    margin:10px;
    font-size: 10px;
}
li{
    list-style: none;
}

</style>