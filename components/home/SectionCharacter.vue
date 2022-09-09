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
      heroesList: [{
        name: 'Human',
        description: `<p><span style="color:#f1c40f">The Human</span> took over the most fertile land, located on the North of Eragard called <span style="color:#f39c12">Darmid</span>.</p>
                      <p>The bonus stat for Dragon's team is Balance between Attack, Defense, HP:</p>
                      <p>
                        BONUS DRAGON ATTACK: 5%<br>
                        BONUS DRAGON DEFENSE: 5%<br>
                        BONUS DRAGON HP: 5%
                      </p>`,
        avatarUrl: 'human_avatar.png',
        characterBgUrl: 'character_bg_human.png',
        modelUrl: 'chr_human.gif'
      }, {
        name: 'Dark Elf',
        description: `<p><span style="color:#f1c40f">The Wizards</span> had a territory in <span style="color:#f39c12">Vanirm</span>. This land was said to be the intersection of the elements and was the source of ancient magic&nbsp;</p>
                      <p>The bonus stat for Dragon's team is Priority Strengthen in Attack:</p>
                      <p>BONUS DRAGON ATTACK: 7%<br>
                      BONUS DRAGON DEFENSE: 4%<br>
                      BONUS DRAGON HP: 4%</p>`,
        avatarUrl: 'wizard_avatar.png',
        characterBgUrl: 'character_bg_dark_elf.png',
        modelUrl: 'chr_dark_elf.gif'
      }, {
        name: 'Elf',
        description: `<p><span style="color:#f1c40f">The Elf</span> race lived hidden deep in the forest spirit in the land called <span style="color:#f39c12">Flamheim</span>, where the elves are a legend.</p>
                      <p>The bonus stat for Dragon's team is Priority Strengthen in Defense:</p>
                      <p>BONUS DRAGON ATTACK: 4%<br>
                      BONUS DRAGON DEFENSE: 7%<br>
                      BONUS DRAGON HP: 4%</p>`,
        avatarUrl: 'elf_avatar.png',
        characterBgUrl: 'character_bg_elf.png',
        modelUrl: 'chr_elf.gif'
      }, {
        name: 'Orc',
        description: `<p><span style="color:#f1c40f">The Orc</span> had their territory in <span style="color:#f39c12">Jotun </span>lying close to the border of Vanirm, behind the Sephera mountains.</p>
                      <p>The bonus stat for Dragon's team is Priority Strengthen in Defense:</p>
                      <p>BONUS DRAGON ATTACK: 4%<br>
                      BONUS DRAGON DEFENSE: 4%<br>
                      BONUS DRAGON HP: 7%</p>`,
        avatarUrl: 'ore_avatar.png',
        characterBgUrl: 'character_bg_orc.png',
        modelUrl: 'chr_ore.gif'
      }],
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
