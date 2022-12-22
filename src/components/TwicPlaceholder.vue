<template>
  <div id="twic-placeholder-container">
    <TwicWrapper filename="src/components/TwicPlaceholder.vue">
      <TwicAbstract title="placeholder property">
        <p>
          <strong>
            The <dfn>placeholder</dfn> property helps you optimize user
            experience, CLS, and implement the LQIP technique.
          </strong>
        </p>
        <p>
          TwicPics Components automatically adds a background placeholder to
          your images: their size are reserved in the page before the images are
          actually loaded.
        </p>
        <p>
          The<Code>placeholder</Code>values can be:
          <Code>preview</Code>,<Code>meancolor</Code>,<Code>maincolor</Code>or
          <Code>none</Code>.
        </p>
        <p>
          The browser is told to load a SVG version as a background image first,
          then to replace it with the full version later on.
        </p>
        <p>
          When set to<Code>preview</Code>(the default value), a blurry version
          of your image is used as a background image.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button
          class="twic-button"
          @click="() => (showPlaceholders = !showPlaceholders)"
        >
          {{
            showPlaceholders
              ? `Click to reveal images`
              : `Click to reveal placeholders`
          }}
        </button>
      </div>
      <div :class="`twic-grid ${showPlaceholders ? `show-placeholders` : ``}`">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="preview" />
          <span>
            <Code>placeholder="preview"</Code>
            (default value)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="meancolor" />
          <span>
            <Code>placeholder="meancolor"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="maincolor" />
          <span>
            <Code>placeholder="maincolor"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="none" />
          <span>
            <Code>placeholder="none"</Code>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: "TwicPlaceholder",
  data() {
    return {
      IMG_URL: `components/cat.jpg`,
      showPlaceholders: false,
      togglePlaceholderBtnText: `Click to reveal the placeholders`,
    };
  },
};
</script>

<style lang="scss">
#twic-placeholder-container {
  .show-placeholders {
    img {
      visibility: hidden !important;
    }
    img + div {
      opacity: 1 !important;
    }
  }
}
</style>
