<template>
  <div id="twic-style-driven-container">
      <TwicWrapper gitHubUrl="src/components/TwicStyleDriven.vue">
        <TwicAbstract title="CSS style driven">
          <p>
            You can set up the TwicPics components using pure CSS and the power of CSS variables.
          </p>
        </TwicAbstract>
        <p>
          <b>1.</b> Set up aspect ratio with<Code>--twic-ratio</Code>css variable.
        </p>
        <div class="twic-grid">
          <div class="twic-item square">
            <TwicImg :src="IMG_URL" />
            <span>
              class
              <Code>square</Code>
            </span>
          </div>
          <div class="twic-item portrait">
            <TwicImg :src="IMG_URL" />
            <span>
              class
              <Code>portrait</Code>
            </span>
          </div>
          <div class="twic-item landscape">
            <TwicImg :src="IMG_URL" />
            <span>
              class
              <Code>landscape</Code>
            </span>
          </div>
        </div>
        <p>
          <b>2.</b> Class combination: you can set up multiples props as<Code>object-fit</Code>and
          <Code>position</Code>with
          <Code>--twic-mode</Code>and
          <Code>twic-position</Code>
        </p>
        <br>
        <div class="twic-grid">
          <div class="twic-item contain left">
            <TwicImg :src="IMG_URL" ratio="16/9" />
            <span>
              class
              <Code>contain</Code>& class
              <Code>left</Code>
            </span>
          </div>
          <div class="twic-item contain right">
            <TwicImg :src="IMG_URL" ratio="16/9" />
            <span>
              class
              <Code>contain</Code>& class
              <Code>right</Code>
            </span>
          </div>
          <div class="twic-item cover">
            <TwicImg :src="IMG_URL" focus="50px100p" ratio="16/9" />
            <span>
              class
              <Code>cover</Code>
            </span>
          </div>
        </div>
        <p>
          <b>3.</b> Other classical settings (here with
          <Code>width</Code>)
        </p>
        <br></br>
        <div class="twic-grid">
          <div class="twic-item lg">
            <TwicImg :src="IMG_URL" />
            <span>
              class
              <Code>lg</Code>
            </span>
          </div>
          <div class="twic-item md">
            <TwicImg :src="IMG_URL" />
            <span>
              class
              <Code>md</Code>
            </span>
          </div>
          <div class="twic-item sm">
            <TwicImg :src="IMG_URL" />
            <span>
              class
              <Code>sm</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
</template>

<script>
export default {
  name: "TwicStyleDriven",
  data() {
    return {
      IMG_URL: `components/horse.jpg`,
    };
  },
};
</script>

<style lang="scss">
#twic-style-driven-container {
  .twic-grid {
    margin-bottom: 60px;
  }
  .twic-item .twic-w {
    background-color: #00ffa3;
    display: block;
  }
  .landscape {
    --twic-ratio: calc(4 / 3);
  }
  .portrait {
    --twic-ratio: calc(3 / 4);
  }
  .square {
    --twic-ratio: calc(1);
  }
  .contain {
    --twic-mode: contain;
  }
  .cover {
    --twic-mode: cover;
  }
  .left {
    --twic-position: left;
  }
  .right {
    --twic-position: right;
  }
  .lg {
    width: 300px;
  }
  .md {
    width: 150px;
  }
  .sm {
    width: 100px;
  }
}
</style>
