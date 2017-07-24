<template>
    <nav id="ace-nav-sm" class="ace-nav hidden-lg hidden-md">
        <ul class="clear-list">
            <li>
                <!-- <a href="index.html" data-tooltip="Home">
                    <img class="avatar avatar-42" src="src/assets/logo.png" alt="">
                </a> -->
                <router-link to = "/paper"><img class="avatar avatar-42" src="./logo.png" alt=""></router-link>
            </li>
            <!-- <li>
                <a href="experience.html" data-tooltip="Experience">
                    <span class="ace-icon ace-icon-experience"></span>
                </a>
            </li> -->
            <li>
                <a href="portfolio.html" data-tooltip="Portfolio">
                    <span class="ace-icon ace-icon-portfolio"></span>
                </a>
            </li>
            <li>
                <a href="testimonials.html" data-tooltip="References">
                    <span class="ace-icon ace-icon-references"></span>
                </a>
            </li>
            <li>
                <!-- <a href="contact.html" data-tooltip="Contact">
                    <span class="ace-icon ace-icon-contact"></span>
                </a> -->
                <router-link to = "/contact"><span class="ace-icon ace-icon-contact"></span></router-link>
            </li>
            <li>
                <a href="category.html" data-tooltip="Blog">
                    <span class="ace-icon ace-icon-blog"></span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

