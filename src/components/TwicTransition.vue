<template>
  <div id="twic-transition-container">
    <TwicWrapper gitHubUrl="src/components/TwicTransition.vue">
      <TwicAbstract title="transition properties">
        <p>
          <strong>
            The <dfn>transition</dfn> properties allow you to customize the
            effect used to reveal the image once it has been loaded
          </strong>
          .
        </p>
        <ul>
          <li>
            <Code>transition</Code>: determines how the image will be revealed
            once loaded (default: <Code>fade</Code>). The possible values are:
            <br />-<Code>fade</Code>, for a <em>fade in</em> effect
            <br />-<Code>zoom</Code>, for a <em>zoom</em> effect
            <br />-<Code>fade+zoom</Code>, for both&nbsp; <em>fade</em> and
            <em>zoom</em> effects <br />- or<Code>none</Code>, for no transition
          </li>
          <li>
            <Code>transitionDelay</Code>: transition delay of the transition
            effect (default:&nbsp; <Code>0ms</Code>).
          </li>
          <li>
            <Code>transitionDuration</Code>: duration of the transition effect
            (default:&nbsp; <Code>400ms</Code>).
          </li>
          <li>
            <Code>transitionTimingFunction</Code>: CSS timing function applied
            to the transition effect (default: <Code>ease</Code>).
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button
          class="twic-button"
          @click="() => (showTransitions = !showTransitions)"
        >
          {{ showTransitions ? IMG_TEXT : TRANSITIONS_TEXT }}
        </button>
      </div>
      <div :class="`twic-grid ${showTransitions && `show-transitions`}`">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" placeholder="preview" />
          <span>Default values</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="none" placeholder="preview" />
          <span>
            <Code>transition="none"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="zoom" />
          <span>
            <Code>transition="zoom"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="fade" />
          <span>
            <Code>transition="fade"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" transition="fade+zoom" />
          <span>
            <Code>transition="fade+zoom"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            transitionDuration="2000ms"
            placeholder="preview"
          />
          <span>
            <Code>transitionDuration="2000ms"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            transitionDuration="2000ms"
            transitionTimingFunction="linear"
            placeholder="preview"
          />
          <span>
            <Code>transitionDuration="2000ms"</Code>
            and<Code>transitionTimingFunction="linear"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            transitionDelay="2000ms"
            transitionTimingFunction="linear"
            placeholder="preview"
          />
          <span>
            <Code>transitionDelay="2000ms"</Code>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: "TwicTransition",
  data() {
    return {
      IMG_TEXT: `Click to show the images`,
      IMG_URL: `components/peacock.jpg`,
      TRANSITIONS_TEXT: `Click to reveal the transitions`,
      showTransitions: false,
      togglePlaceholderBtnText: `Click to reveal the transitions`,
    };
  },
};
</script>

<style lang="scss">
#twic-transition-container {
  .show-transitions {
    .twic-tf img:hover {
      opacity: 0 !important;
    }

    .twic-tf img + div {
      opacity: 1 !important;
    }

    .twic-tz img {
      transform: scale(0) !important;
    }
  }
}
</style>
