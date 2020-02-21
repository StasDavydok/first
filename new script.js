Vue.component ('task',{
    props:['data'],
    methods: {
        task_done() {
            this.$emit('task_done')

        }
    },
    template: `
    <div class='task'>
    <div>
      <h3 class="task_title" >{{data.title}}</h3>
      <p class="task_desc" >{{data.desc}}</p>
    </div>
    <button @click="task_done()" class="task__dell" >✔️</button>
    <button @click="task_done()" class="task__dell" >X</button>
  </div>    
    `
})

var vue = new Vue({
 el: '#app',
 data: {
     new_task: {
         title:'',
         desc:''
     },
     tasks: [
         {
             title:'new target',
             desc:'description'
         }
     ]

 },
 methods:{
     
     delete_task(index){
         this.tasks.splice(index, 1)
     },

     add_task() {
         if(this.new_task.title!=''){
             this.tasks.push({
                 title:  this.new_task.title,
                 desc: this.new_task.desc  
             });
             this.new_task.title='';
             this.new_task.desc='';
         }
     }
 }
});