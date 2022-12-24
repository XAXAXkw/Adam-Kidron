<template>
    <div>
<div class="container bg-warning border rounded-2 text-dark p-2 mt-5 w-50">
<h3> {{ title }}</h3>
<input type="text" class="form-control my-3" v-model="newTask"  v-om:keyup.enter="addTask" />
<button class="btn btn-light m-2" @click="addTask">ADD</button>

<div class="m-3" v-for="(item, index) in this.TODOLIST" :key="index">



<div role="alert" :class="['alert', item.estate ? 'alert-warning' : 'alert-dark']" >
<div class="d-flex justify-content-between align-items-center">
<div>
<h5>{{ index+1}}- {{ item.task }} - {{ item.estate }}</h5>


</div>
<div>
<button class="btn btn-sm btn-success p-1 m-2" @click="editTask(index)">OK</button>
<button class="btn btn-sm btn-danger p-1 " @click="deleteTask(index)">X</button>
</div>

</div>




</div>
</div>



</div>


    </div>
</template>

<script>
    export default {
        name:'ToDo',
        data(){
            return{
                TODOLIST:[],title:'To Do List',newTask:''
            }
        },
        created(){
            let todoDB = JSON.parse(localStorage.getItem('todo-vue'));
            if(todoDB === null ){
                this.TODOLIST = [];
            }
        },
        methods:{
            addTask(){

                if( this.newTask == ''){
                     
               alert('Insert Task First')
                }else{
                        this.TODOLIST.push({task:this.newTask, estate:false});
                       
                        localStorage.setItem('todo-vue',JSON.stringify(this.TODOLIST));
                        this.newTask = '';
                }
           
                
            },
            editTask(index){
                this.TODOLIST[index].estate = !this.TODOLIST[index].estate;
                localStorage.setItem('todo-vue',JSON.stringify(this.TODOLIST));
            },
            deleteTask(index){
                this.TODOLIST.splice(index,1);
                localStorage.setItem('todo-vue',JSON.stringify(this.TODOLIST));
            }
        }
        }
</script>

<style lang="scss" scoped>

</style>