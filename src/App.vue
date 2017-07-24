<template>
   <div id="app">
    <div class="ace-wrapper">
      <my-header></my-header>
      <!-- #ace-header -->
      <my-nav></my-nav>
      <!-- #ace-tab-nav-sm -->

      <my-article></my-article>
      <!-- #ace-card -->

      <my-content :aName = "getName"></my-content>
      <!-- #ace-content -->

      <Sidebar></Sidebar>
      <!-- #ace-sidebar -->

      <my-footer></my-footer>
      <!-- #ace-footer -->

      <!-- Triangle Shapes -->
      <my-svg></my-svg>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Nav from './components/Nav/Nav.vue'
import Article from './components/Article/Article.vue'
import Content from './components/Content/Content.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import Footer from './components/Footer/Footer.vue'
import Svg from './components/Svg/Svg.vue'
export default {
  data() {
    return {
      getName:{
		  accountName:'',
	  }
    }
  },
  components:{
    'my-header':Header,
    'my-nav':Nav,
    'my-article':Article,
    'my-content':Content,
    'my-footer':Footer,
    'my-svg':Svg,
    Sidebar
  },
  mounted(){
    this.$http.get('/api/account').then(response=>{
		var data = response.body.data;
		this.getName.accountName = data.EgName;
    });
  }
}
</script>

<style>

</style>
