<template>
  <section id="playnow" class="dg-banner dg-preload-background ag-sparkS">
    <custom-fire-animate />
    <img class="dg-banner-main" src="~/assets/images/background/banner.jpg" alt="banner" style="display: block;">
    <img class="dg-banner-comming-soon" src="~/assets/images/decor/comingsoon.png" alt="banner">
    <div v-if="isShowPlatform" class="dragonwar-info-container" style="background: url(&quot;https://dragonwar.io/assets/images/platform_bg.png&quot;) 0% 0% / 100% 100%;">
      <div style="display: table; margin: 0px auto;">
        <div class="dg-platform-container">
          <div class="platform-item">
            <a href="#"><img class="platform-icon" src="~/assets/images/icon/platform_web.png" alt="platform of dragonwar"></a><p>{{ $t('Play on Web') }}</p>
          </div><div class="platform-item">
            <a href="#"><img class="platform-icon" src="~/assets/images/icon/platform_android.png" alt="platform of dragonwar"></a><p>{{ $t('Play on Android') }}</p>
          </div><div class="platform-item">
            <a href="#"><img class="platform-icon" src="~/assets/images/icon/platform_ios.png" alt="platform of dragonwar"></a><p>{{ $t('Play on IOS') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isShowPlatform: true
    }
  }
}
</script>

<style>
</style>
