<template>
  <div id="twic-ratio-container">
    <TwicWrapper filename="src/components/TwicRatio.vue">
      <TwicAbstract title="ratio property">
        <p>
          <strong>
            The <dfn>ratio</dfn> property determines the value of the
            width/height ratio of the image display area.
          </strong>
        </p>
        <p>Its value can be:</p>
        <ul>
          <li>
            a ratio expression of the form <b>width/height</b> or
            <b>width:height</b> like
            <Code>4/3</Code>,<Code>4:3</Code>,<Code>800/600</Code>...
          </li>
          <li>
            a number that is the result of such an expression like
            <Code>1.85</Code>,<Code>2</Code>, or <Code>0.5</Code>.
          </li>
          <li>
            "none" as in<Code>ratio="none"</Code>. In this case the media
            displayed has a "free" ratio defined by the dimensions of its
            container. Particularly useful in the case of&nbsp;
            <a href="/hero" target="_blank" rel="noreferrer"
              >image or video hero</a
            >.
          </li>
        </ul>
        <p>
          A square area (<Code>ratio="1"</Code>) will be created by default.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="onChangeRatio">
          Click to change the aspect-ratio
        </button>
        <button
          class="twic-button"
          @click="() => (fullWidthAera = !fullWidthAera)"
        >
          Click to change the area width
        </button>
      </div>
      <div :class="`twic-grid ${fullWidthAera && `half-width`}`">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" :ratio="ratioValues[ratioIndex]" />
          <span>
            <span class="twic-code">
              ratio={{ ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1 }}
            </span>
            (mode is<Code>cover</Code>)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            mode="contain"
            :ratio="ratioValues[ratioIndex]"
          />
          <span>
            <span class="twic-code">
              ratio={{ ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1 }}
            </span>
            (mode is<Code>contain</Code>)
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: "TwicRatio",
  data() {
    return {
      IMG_URL: `components/woman-and-winter.jpg`,
      ratioValues: [`2.39`, `16/9`, `4/3`, ``, `0.75`],
      ratioIndex: 0,
      fullWidthAera: true,
      // trick to force reload TwicImg
      show: true,
    };
  },
  methods: {
    onChangeRatio() {
      setTimeout(() => (this.show = false));
      this.ratioIndex = (this.ratioIndex + 1) % this.ratioValues.length;
      setTimeout(() => (this.show = true));
    },
  },
};
</script>

<style lang="scss">
#twic-ratio-container {
  .twic-grid {
    --twic-grid-columns-width: 40%;

    &.full-width {
      .twic-item {
        width: 100%;
      }
    }

    &.half-width {
      .twic-item {
        width: 50%;
        margin: auto;
      }
    }
  }

  .twic-item .twic-w {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
