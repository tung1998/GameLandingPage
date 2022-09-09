<template>
  <header id="header" class="dg-page-header">
    <div id="stickyHeader" class="dg-sticky-header header-appear  animate__animated  animate__fadeInDown">
      <div class="dg-sticky-holder">
        <div class="dg-vertical-align-containers" style="padding-right: 0px;">
          <div class="dg-position-center">
            <div class="dg-position-center-inner">
              <nav class="dg-main-menu dg-drop-down dg-sticky-nav">
                <ul>
                  <li class="menu-item narrow dg-active-item">
                    <a href="/" class="dg-header-logo-container"><img class="dg-normal-logo" src="~/assets/images/logo/logo-dark.png" alt="dark logo" style="max-height: 12vh;"></a>
                  </li>

                  <li v-for="(item, index) in menuList" :key="index" class="menu-item narrow">
                    <a :href="item.url" class=""><span class="item_outer"><span class="item_inner"><span class="bold-item">{{ $t(item.name) }}
                      <img v-if="item.childMenu" src="~/assets/images/button/vector_down.png" width="13" alt="vectordown" style="display: inline;"></span></span></span></a>
                    <div class="second">
                      <div v-if="item.childMenu" class="inner">
                        <ul>
                          <li v-for="(childItem, childIndex) in item.childMenu" :key="childIndex" class="menu-item ">
                            <a :href="childItem.url" class=""><span class="item_outer"><span class="item_inner"><span class="item_text">{{ childItem.name }}</span></span></span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-item wide">
                    <a href="#playnow" class="dg-header-logo-container"><img class="dg-normal-logo playnow-btn" src="~/assets/images/button/play-btn.png" alt="dark logo"></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import mixinHeader from '~/mixins/header'

export default {
  mixins: [mixinHeader]
}
</script>

<style>
</style>
