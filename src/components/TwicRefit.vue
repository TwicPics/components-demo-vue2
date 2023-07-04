<template>
  <div id="twic-color-blindness-container">
    <TwicWrapper filename="src/components/TwicRefit.vue">
      <TwicAbstract title="refit property">
        <p>
          <strong>
            The <dfn>refit</dfn> property resizes the image while maximizing the
            area occupied by the main object (or objects) found within said
            image.
          </strong>
        </p>
        <p>
          To enable <dfn>refit</dfn>, simply add the <Code>refit</Code> property
          to the <Code>TwicImg</Code> component like in
          <Code>&lt;TwicImg src="image.jpg" refit/&gt;</Code>
        </p>
        <p>
          By default, the subject will be placed at the center of the resulting
          image but
          <strong>it is possible to align the subject</strong> with a given
          border by specifying an
          <a href="/anchor" target="_blank" rel="noreferrer"> anchor </a>
          .
        </p>
        <p>
          Also by default, the subject will touch the borders of the resulting
          image. This can be avoided by <strong>adding padding</strong> like in
          <Code>&lt;TwicImg src="image.jpg" refit="5p"/&gt;</Code>.
        </p>
        <p>
          <a
            href="https://www.twicpics.com/blog/discover-the-refit-transformation?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalachromatopsiaspan"
            target="_blank"
            rel="noreferrer"
          >
            Want to see more examples?
          </a>
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="updateIndice">
          Click to change props
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" :mode="actualConfig.mode" />
          <span> Original image + mode="{{ actualConfig.mode }}" </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            :mode="actualConfig.mode"
            ratio="4/3"
            :refit="actualConfig.refit"
          />
          <span>
            {{
              actualConfig.refit === true
                ? "refit"
                : "refit=''" + actualConfig.refit + "''"
            }}
            + mode='{{ actualConfig.mode }}'
          </span>
        </div>

        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            anchor="top"
            :mode="actualConfig.mode"
            ratio="4/3"
            :refit="actualConfig.refit"
          />
          <span>
            {{
              actualConfig.refit === true
                ? "refit"
                : "refit=''" + actualConfig.refit + "''"
            }}
            + mode='{{ actualConfig.mode }}' + anchor="top"</span
          >
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            anchor="bottom"
            :mode="actualConfig.mode"
            ratio="4/3"
            :refit="actualConfig.refit"
          />
          <span>
            {{
              actualConfig.refit === true
                ? "refit"
                : "refit=''" + actualConfig.refit + "''"
            }}
            {{ actualConfig.mode }}" + anchor="bottom"</span
          >
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
export default {
  name: "TwicRefit",
  data() {
    return {
      config: [
        {
          mode: `cover`,
          refit: true,
        },
        {
          mode: `cover`,
          refit: `5p`,
        },
        {
          mode: `contain`,
          refit: true,
        },
        {
          mode: `contain`,
          refit: `5p`,
        },
      ],
      indiceConfig: 0,
      IMG_URL: `components/refit/yellow-combi.jpg`,
    };
  },
  computed: {
    actualConfig() {
      return this.config[this.indiceConfig];
    },
  },
  methods: {
    updateIndice() {
      this.indiceConfig = (this.indiceConfig + 1) % this.config.length;
    },
  },
};
</script>
