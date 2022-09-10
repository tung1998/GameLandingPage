<template>
  <section id="Heroes" class="dg-characters text-align-center">
    <img src="~/assets/images/decor/sectionseparate.png" class="section-separator" alt="separator">
    <div data-dg-parallax-speed="1" class="dg-character-container m-auto container-xxl">
      <div class="wpb_wrapper">
        <div class="dg-section-title dg-section-align-center">
          <div class="dg-st-inner">
            <div class="dg-st-title-holder">
              <h2 class="dg-st-title">
                <span>Heroes</span>
              </h2>
            </div>
          </div>
          <div class="lazy-div" style="opacity: 1; transform: none;">
            <img src="~/assets/images/decor/section-title-border.png" alt="dg-separator-image" style="display: inline"><br>
            <div class="race-list-container">
              <div class="race-list-flex">
                <div
                  v-for="(hero, index) in heroesList"
                  :key="index"
                  class="animation-bounce character-avatar-wrapper"
                  :title="hero.name"
                  :class="{'border-avatar': currentHeroIndex === index}"
                  @click="currentHeroIndex = index"
                >
                  <img class="race-logo" :src="require(`~/assets/images/character/${hero.avatarUrl}`)" :alt="hero.name">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lazy-div" style="opacity: 1; transform: none;">
          <div class="dg-elements-holder dg-responsive-mode-1024">
            <div class="dg-elements-holder-item dg-width-1-2 dg-vertical-alignment-top" style="z-index: 999;">
              <div class=" dg-elements-holder-item dg-width-1-3" />
              <div class=" dg-elements-holder-item dg-width-1-1 dg-horizontal-alignment-left">
                <div class="hide-md">
                  <div class="wpb_wrapper">
                    <h2><span>{{ currentHero.name }}</span></h2>
                  </div><div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper character-info" v-html="currentHero.description" />
                  </div>
                </div>
              </div>
            </div>
            <div class="dg-elements-holder-item dg-width-1-1 dg-horizontal-alignment-right race-image-container">
              <div class="character-images-container">
                <img :src="require(`~/assets/images/character/${currentHero.characterBgUrl}`)" :alt="currentHero.name" class="vc_single_image-img attachment-full race-image-background" loading="eager">
                <img :src="require(`~/assets/images/character/${currentHero.modelUrl}`)" :alt="currentHero.name" class="character-img" loading="eager">
              </div>
            </div>
            <div class="dg-elements-holder-item dg-width-1-2 dg-horizontal-alignment-left" />
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
      heroesList: this.$heroesList,
      currentHeroIndex: 0
    }
  },
  computed: {
    currentHero () {
      return this.heroesList[this.currentHeroIndex]
    }
  }
}
</script>

<style>
</style>
