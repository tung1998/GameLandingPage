<template>
  <section id="features" class="dg-features text-align-center">
    <img src="~/assets/images/decor/sectionseparate.png" class="section-separator" alt="separator">
    <div class="dg-st-title-holder">
      <h2 class="dg-st-title">
        <span>{{ $t('Features') }}</span>
      </h2><img src="~/assets/images/decor/section-title-border.png" alt="dg-separator-image" style="display: inline"><br>
      <h1 class="dg-st-title challenge-to-earn">
        <span>Experience, Play, and Earn!</span>
      </h1>
      <div class="feature-wrapper">
        <vue-slick-carousel
          ref="DiscussionsSection"
          v-bind="setting"
        >
          <div v-for="index in 5" :key="index">
            <div class="feature-item-wrapper animation-bounce" tabindex="-1" style="width: 100%; display: inline-block;">
              <img :src="require(`~/assets/images/features/${index}.png`)" alt="feature item">
            </div>
          </div>
          <template #prevArrow>
            <img src="~/assets/images/icon/arrow_left.png" alt="arrow">
          </template>
          <template #nextArrow>
            <img src="~/assets/images/icon/arrow_right.png" alt="arrow">
          </template>
        </vue-slick-carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      setting: {
        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        rows: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.slick-list {
  position: relative;
}

.slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  height: 30px;
}

.slick-prev {
  left: -30px;

}

.slick-next {
  right: -30px;
}
</style>
