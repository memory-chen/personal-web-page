<template>
  <div id="ace-content" class="ace-container-shift">
    <div class="ace-container">
      <div id="ace-nav-wrap" class="hidden-sm hidden-xs">
        <div class="ace-nav-cont">
          <div id="ace-nav-scroll">
            <nav id="ace-nav" class="ace-nav">
              <ul class="clear-list">
                <li>
                  <!-- <a href="index.html" data-tooltip="Home"><img class="avatar avatar-42" src="src/assets/logo.png" alt=""></a>    -->
                  <router-link to="/paper">
                    <img class="avatar avatar-42" src="./logo.png" alt="">
                  </router-link>
                </li>
                <!-- <li>
                        <a href="experience.html" data-tooltip="Experience"><span class="ace-icon ace-icon-experience"></span></a>
                      </li> -->
                <li>
                  <!-- <a href="portfolio.html" data-tooltip="Portfolio"><span class="ace-icon ace-icon-portfolio"></span></a> -->
                  <router-link to="/portfolio">
                    <span class="ace-icon ace-icon-portfolio"></span>
                  </router-link>
                </li>
                <!-- <li>
                  <a href="testimonials.html" data-tooltip="References">
                    <span class="ace-icon ace-icon-references"></span>
                  </a>
                </li> -->
                <li>
                  <!-- <a href="contact.html" data-tooltip="Contact"><span class="ace-icon ace-icon-contact"></span></a> -->
                  <router-link to="/contact">
                    <span class="ace-icon ace-icon-contact"></span>
                  </router-link>
                </li>
                <!-- <li>
                  <a href="category.html" data-tooltip="Blog">
                    <span class="ace-icon ace-icon-blog"></span>
                  </a>
                </li> -->
              </ul>
            </nav>
          </div>
  
          <div id="ace-nav-tools" class="hidden">
            <span class="ace-icon ace-icon-dots-three-horizontal"></span>
  
            <button id="ace-nav-arrow" class="clear-btn">
              <span class="ace-icon ace-icon-chevron-thin-down"></span>
            </button>
          </div>
        </div>
        <div class="ace-nav-btm"></div>
      </div>
      <!-- .ace-nav-wrap -->
      <router-view :aName = "getName"></router-view>
      <!-- <Paper></Paper> -->
      <!-- .ace-paper-stock -->
  
    </div>
    <!-- .ace-container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Paper from '../Paper/Paper.vue'
import Contact from '../Contact/Contact.vue'
import Portfolio from '../Portfolio/Portfolio.vue'
export default {
	components: {
		Paper,
		Contact,
		Portfolio
	},
	props: ['aName'],
	mounted() {
		// console.log(this.aName)
	},
	data() {
		return {
			getName:this.aName
		}
	}
}
</script>

