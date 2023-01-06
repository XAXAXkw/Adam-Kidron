<template>
    <div>
<button  @click="getNews">News</button> 

<h1>{{ NYTdata }}</h1>
    </div>
</template>

<script>
// import axios from 'axios'
    export default {
        name:'ExportLog',
        data(){
            APIurl:'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=nnE1j6rZx24YXAWAoLEHj2q2NlAl2749'
          
        },
       /* methods:{
            getNews(){
                NYTdata = axios.get(APIurl).then(json_data = this.NYTdata.json());
                console.log(this.NYTdata)
               
                }
            }
        }*/
    }
</script>

<style lang="scss" scoped>

</style>