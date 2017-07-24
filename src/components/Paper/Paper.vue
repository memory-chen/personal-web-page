<template>
  <div class="ace-paper-stock">
    <main class="ace-paper clearfix">
      <div class="ace-paper-cont clear-mrg">
  
        <!-- START: PAGE CONTENT -->
        <div class="padd-box clear-mrg">
          <section class="section brd-btm">
            <div class="row">
              <div class="col-sm-12 clear-mrg text-box">
                <h2 class="title-lg text-upper">About Me</h2>
  
                <p>
                  <b>Helo, I’m {{name.accountName}}!</b>
                  <br>{{text}} </p>
  
                <p class="text-right">
                  <!-- <img src="src/assets/logo.png" alt=""> -->
                  <span class="ace-logo">memory-chfs</span>
                </p>
              </div>
            </div>
          </section>
          <!-- .section -->
  
          <section class="section brd-btm">
            <div class="row">
              <div class="col-sm-6 clear-mrg">
                <h2 class="title-thin text-muted">personal information</h2><span>个人信息</span>
  
                <dl class="dl-horizontal clear-mrg">
					<div v-for="(val,key) in selectData">  
                  		<dt class="text-upper">{{key}}</dt>
                  		<dd>{{val}}</dd>
				  	</div>	
                </dl>
              </div>
              <!-- .col-sm-6 -->
  
              <div class="col-sm-6 clear-mrg">
                <h2 class="title-thin text-muted">others</h2>
				<span>其他</span>
                 <dl class="dl-horizontal clear-mrg">
					<div v-for="(val,key) in selectData2">  
                  		<dt class="text-upper">{{key}}</dt>
                  		<dd>{{val}}</dd>
				  	</div>	
                </dl>
              </div>
              <!-- .col-sm-6 -->
            </div>
            <!-- .row -->
          </section>
          <!-- .section -->
  
          <section class="section brd-btm">
            <div class="row">
              <div class="col-sm-6 clear-mrg">
                <h2 class="title-thin text-muted">professional skills</h2>
  
                <div class="row">
                  <div class="col-xs-4">
                    <div class="progress-chart ace-animate" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                       	 <div class="progress-bar" data-text="95%" data-value="0.95"></div>
                      <strong class="progress-title">html/css/js</strong>
                    </div>
                  </div>
                  <!-- .col-xs-4 -->
  
                  <div class="col-xs-4">
                    <div class="progress-chart ace-animate" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar" data-text="90%" data-value="0.9"></div>
                      <strong class="progress-title">zepto &amp; jQuery</strong>
                    </div>
                  </div>
                  <!-- .col-xs-4 -->
  
                  <div class="col-xs-4">
                    <div class="progress-chart ace-animate" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar" data-text="80%" data-value="0.8"></div>
                      <strong class="progress-title">H5+/MUI  </strong>
                    </div>
                  </div>
                  <!-- .col-xs-4 -->
                </div>
                <!-- .row -->
              </div>
              <!-- .col-sm-6 -->
  
              <div class="col-sm-6 clear-mrg">
                <h2 class="title-thin text-muted">professional skills</h2>
  
                <div class="progress-line ace-animate" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  <strong class="progress-title">vue &amp; boostrap</strong>
                  <div class="progress-bar" data-text="" data-value="0.9"></div>
                </div>
  
                <div class="progress-line ace-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <strong class="progress-title">OOP</strong>
                  <div class="progress-bar" data-text="" data-value="0.8"></div>
                </div>
  
                <div class="progress-line ace-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <strong class="progress-title">ps</strong>
                  <div class="progress-bar" data-text="" data-value="0.8"></div>
                </div>
  
                
              </div>
              <!-- .col-sm-6 -->
            </div>
            <!-- .row -->
          </section>
          <!-- .section -->
  
          <!-- <section class="section brd-btm">
            <div class="row">
              <div class="col-sm-6 clear-mrg">
                <h2 class="title-thin text-muted">professional skills</h2>
  
                <div class="progress-line ace-animate" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  <strong class="progress-title">Php &amp; MySQL</strong>
                  <div class="progress-bar" data-text="90%" data-value="0.9"></div>
                </div>
  
                <div class="progress-line ace-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <strong class="progress-title">Javascript</strong>
                  <div class="progress-bar" data-text="80%" data-value="0.8"></div>
                </div>
  
                <div class="progress-line ace-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <strong class="progress-title">UX Design</strong>
                  <div class="progress-bar" data-text="80%" data-value="0.8"></div>
                </div>
              </div> -->
              <!-- .col-sm-6 -->
  
              <!-- <div class="col-sm-6 clear-mrg">
                <h2 class="title-thin text-muted">personal characteristics</h2>
  
                <ul class="styled-list clear-mrg">
                  <li>Lake Marcelview</li>
                  <li>New Tara</li>
                  <li>Abbeyshire</li>
                  <li>Kassulkechester</li>
                </ul>
              </div> -->
              <!-- .col-sm-6 -->
            <!-- </div> -->
            <!-- .row -->
          <!-- </section> -->
          <!-- .section -->
  
          <!-- <section class="section brd-btm">
            <div class="row">
              <div class="col-sm-12 clear-mrg">
                <h2 class="title-thin text-muted">interests</h2>
  
                <ul class="icon-list icon-list-col3 clearfix">
                  <li>
                    <span class="ace-icon ace-icon-music"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-blog"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-blog"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-blog"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-blog"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-music"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-blog"></span> North Adella</li>
                  <li>
                    <span class="ace-icon ace-icon-blog"></span> North Adella</li>
                </ul>
              </div>
            </div>
          </section> -->
          <!-- .section -->
  
          
          <!-- .section -->
        </div>
        <!-- .padd-box -->
        <!-- END: PAGE CONTENT -->
  
      </div>
      <!-- .ace-paper-cont -->
    </main>
    <!-- .ace-paper -->
  </div>
</template>

<script>
export default {
	props:{
		aName:{
			type:Object
		}
	},
	created(){
		// console.log(this.aName)
		this.$http.get('/api/selfAssessment').then(response=>{
			var data = response.body.data;
			this.text = data.text;
		});
		this.$http.get('/api/account').then(response=>{
			var data = response.body.data;
			this.acccount = data;
		});
	},
	data(){
		return {
			name:this.aName,
			text:'',
			acccount:{}
		}
	},
	computed:{
		selectData(){
			return {
				'full name':this.acccount.EgName,
				'D.o.b.':this.acccount.birthday,
				'address':this.acccount.address,
				'e-mail':this.acccount.email,
				'phone':this.acccount.telphone
			}
		},
		selectData2(){
			return {
				'profession':this.acccount.profession,
				'year':this.acccount.year,
				'github':this.acccount.github
			}
		}
	}
}
</script>

