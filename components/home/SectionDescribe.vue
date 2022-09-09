<template>
  <section class="dg-describe text-align-center">
    <img src="~/assets/images/decor/sectionseparate.png" class="section-separator" alt="separator">
    <div class="dg-game-describe-warper" style="margin: auto 1.2vw;">
      <h2>The best Turn based Strategy Game on The Fastest Blockchain</h2>
      <img src="~/assets/images/decor/section-title-border.png" alt="dg-separator-image" style="display: inline">
      <div class="screenshot-frame" :style="`background-image: url(${require('~/assets/images/decor/boxframe2.png')});`">
        <div classname="screenshot-container">
          <iframe
            style="max-width: 100%"
            width="700"
            height="410"
            src="https://www.youtube.com/embed/R0w8V5S52d4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            data-gtm-yt-inspected-2="true"
          />
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
