<template>
  <section id="dragons" class="dg-dragons text-align-center dg-preload-background dragon-background">
    <img class="background-img" alt="dragon background" :src="require(`~/assets/images/background/${currentDragon.backgroundUrl}`)">
    <img src="~/assets/images/decor/sectionseparate.png" class="section-separator" alt="separator">
    <div class="dg-section-title dg-section-align-center" style="margin: auto 1.2vw;">
      <div class="dg-st-inner">
        <div class="dg-st-title-holder">
          <h2 class="dg-st-title">
            <span>{{ $t('Dragons') }}</span>
          </h2>
        </div>
      </div>
      <img src="~/assets/images/decor/section-title-border.png" alt="dg-separator-image" style="display: inline"><br>
      <div style="margin: 0px auto; text-align: center; max-width: 900px;">
        <div class="">
          <div class="wpb_text_column wpb_content_element ">
            <div class="wpb_wrapper character-info">
              <p style="font-family: 'Univers LT Std'">
                There are a diversity of dragons, which comes from the perfect combination of 5 Dragon Classes and Elements, and 6 Body Parts with different Rarities Levels from Common to Rare. Each dragon will become unique and worthwhile in your dragon collection.
              </p>
            </div>
          </div>
        </div>
      </div><div style="display: table; margin: 0px auto;">
        <div class="dg-element-container">
          <div v-for="(dragon, index) in dragonsList" :key="index" class="hide-xs" style="margin-left: -20px; margin-right: -20px;">
            <img
              class="element-icon"
              :src="require(`~/assets/images/dragon/${dragon.elementalUrl}`)"
              alt="element of dragon"
              :style="index === currentDragonIndex ? `background-image: url(${require('~/assets/images/decor/element_outline.png')});` : ''"
              @click="currentDragonIndex = index"
            >
          </div>
        </div>
      </div>
      <div class="dg-elements-holder dg-responsive-mode-600">
        <div class="dg-elements-holder-item dg-width-1-4 dg-vertical-alignment-middle dg-horizontal-alignment-left" /><div class="dg-elements-holder-item dg-width-1-1 dg-vertical-alignment-middle dg-horizontal-alignment-right dragon-info">
          <div class="dg-elements-holder dg-responsive-mode-600">
            <div class="dg-elements-holder-item dg-width-1-2 dg-vertical-alignment-middle dg-horizontal-alignment-right">
              <img alt="" class="dragon-image" :src="require(`~/assets/images/dragon/${currentDragon.modelUrl}`)">
            </div>
            <div class="dg-elements-holder-item dg-width-1-3 dg-vertical-alignment-middle dg-horizontal-alignment-left">
              <div class="MuiBox-root jss16">
                <div class="MuiGrid-container MuiGrid-spacing-xs-2">
                  <div class="MuiGrid-grid-xs-3 MuiGrid-grid-sm-3 MuiGrid-grid-md-3" />
                  <div class="dragon-role-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image-role" :src="require(`~/assets/images/dragon/${currentDragon.roleIconUrl}`)">
                    <div class="dragon-role-wraper">
                      <div class="dragon-role-wraper-middle">
                        <h4 class="dragon-bodypart-name">
                          {{ $t(currentDragon.type) }}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="MuiGrid-grid-xs-3 MuiGrid-grid-sm-3 MuiGrid-grid-md-3" />
                  <div class="dragon-part-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image" src="~/assets/images/dragon/chest.png"><div>
                      <h4 class="dragon-bodypart-name">
                        Gem
                      </h4><h5 class="dragon-bodypart-rate" style="color: rgb(166, 124, 82);">
                        Epic
                      </h5>
                    </div>
                  </div>
                  <div class="dragon-part-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image" src="~/assets/images/dragon/rune.png"><div>
                      <h4 class="dragon-bodypart-name">
                        Rune
                      </h4><h5 class="dragon-bodypart-rate" style="color: rgb(166, 124, 82);">
                        Epic
                      </h5>
                    </div>
                  </div>
                  <div class="dragon-part-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image" src="~/assets/images/dragon/claw.png"><div>
                      <h4 class="dragon-bodypart-name">
                        Claws
                      </h4><h5 class="dragon-bodypart-rate" style="color: rgb(166, 124, 82);">
                        Epic
                      </h5>
                    </div>
                  </div>
                  <div class="dragon-part-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image" src="~/assets/images/dragon/eye.png"><div>
                      <h4 class="dragon-bodypart-name">
                        Eyes
                      </h4><h5 class="dragon-bodypart-rate" style="color: rgb(166, 124, 82);">
                        Epic
                      </h5>
                    </div>
                  </div>
                  <div class="dragon-part-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image" src="~/assets/images/dragon/horn.png"><div>
                      <h4 class="dragon-bodypart-name">
                        Horn
                      </h4><h5 class="dragon-bodypart-rate" style="color: rgb(166, 124, 82);">
                        Epic
                      </h5>
                    </div>
                  </div>
                  <div class="dragon-part-container MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6">
                    <img alt="moonrock" class="dragon-part-image" src="~/assets/images/dragon/tail.png"><div>
                      <h4 class="dragon-bodypart-name">
                        Tail
                      </h4><h5 class="dragon-bodypart-rate" style="color: rgb(166, 124, 82);">
                        Epic
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dg-dragon-container" style="display: flex">
            <div v-for="(dragon, index) in dragonsList" :key="index" class="control-item">
              <div class="img">
                <img
                  class="dragon-logo img fade-in loaded"
                  :src="require(`~/assets/images/dragon/${dragon.avatarUrl}`)"
                  :alt="dragon.name"
                  loading="lazy"
                  @click="currentDragonIndex = index"
                >
                <img v-if="index === currentDragonIndex" src="~/assets/images/decor/avata_outline.png" alt="selected" style="object-fit: contain;">
              </div>
            </div>
          </div>
        </div>
        <div class="dg-elements-holder-item dg-width-1-3 dg-vertical-alignment-middle dg-horizontal-alignment-left" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dragonsList: [{
        name: 'Earth',
        type: 'Tanker',
        modelUrl: 'earth.gif',
        avatarUrl: 'earthavatar.png',
        roleIconUrl: 'role_earth.png',
        backgroundUrl: 'background_earth.png',
        elementalUrl: 'element_earth.png'
      }, {
        name: 'Fire',
        type: 'Warrior',
        modelUrl: 'fire.gif',
        avatarUrl: 'fireavatar.png',
        roleIconUrl: 'role_earth.png',
        backgroundUrl: 'background_fire.png',
        elementalUrl: 'element_fire.png'
      }, {
        name: 'Water',
        type: 'Ranger',
        modelUrl: 'water.gif',
        avatarUrl: 'wateravatar.png',
        roleIconUrl: 'role_water.png',
        backgroundUrl: 'background_water.png',
        elementalUrl: 'element_water.png'
      }, {
        name: 'Grass',
        type: 'Support/Healer',
        modelUrl: 'grass.gif',
        avatarUrl: 'grassavatar.png',
        roleIconUrl: 'role_grass.png',
        backgroundUrl: 'background_grass.png',
        elementalUrl: 'element_grass.png'
      }, {
        name: 'Thunder',
        type: 'Mage',
        modelUrl: 'thunder.gif',
        avatarUrl: 'thunderavatar.png',
        roleIconUrl: 'role_thunder.png',
        backgroundUrl: 'background_thunder.png',
        elementalUrl: 'element_thunder.png'
      }],
      currentDragonIndex: 0
    }
  },
  computed: {
    currentDragon () {
      return this.dragonsList[this.currentDragonIndex]
    }
  }
}
</script>

<style>
</style>
