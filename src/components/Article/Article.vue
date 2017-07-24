<template>
    <article id="ace-card" class="ace-card bg-primary">
        <div class="ace-card-inner text-center">
            <img class="avatar avatar-195" src="./m-chen.png" width="195" height="195" alt="">
            <h1>{{EgName}}</h1>
            <p class="text-muted">{{name}}</p>
            <ul class="ace-social clear-list">
                <li><a href="https://github.com/memory-chen" title="memory-chfs"><span class="ace-icon ace-icon-github"></span></a>{{github}}</li>
                 <li><a><span class="ace-icon ace-icon-phone"></span></a>{{telphone}}</li> 
                 <li><a><span class="ace-icon ace-icon-mail-forward"></span></a>{{email}}</li>
            </ul>
        </div>

        <footer class="ace-card-footer">
            <a class="btn btn-lg btn-block btn-thin btn-upper " href="#">Hello Everybody</a>
        </footer>
    </article>
</template>

<script>
    export default {
        data(){
            return {
                url:"./m-chen.png",
                EgName:'',
                name:'',
                github:'',
                telphone:123456789,
                email:''
            }
        },
        mounted(){
            this.$http.get('/api/account').then(response=>{
                // console.log(response.body);
                var data = response.body.data;
                for(var name in data){
                    this[name] = data[name];
                }
            });
        }
    }
</script>
