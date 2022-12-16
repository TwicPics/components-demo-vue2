<template>
  <div id="twic-focus-container">
    <TwicWrapper gitHubUrl="src/components/TwicFocus.vue">
      <TwicAbstract title="focus property">
        <p>
          <strong>
            The <dfn>focus</dfn> property will change the focus point
            coordinates of the image
          </strong>
          (only useful with
          <Code>mode="cover"</Code>).
          <br />
          It allows to determine what should be visible when the image is
          cropped.
        </p>
        <p>
          You can set the focus by using coordinates or
          <Code>auto</Code>values:
        </p>
        <ul>
          <li>
            <strong>Coordinates</strong> represent a point in the image,
            specified as a couple of positive lengths, separated by the
            character<Code>x</Code>.
            <br />
            As an example, in
            <Code>focus="1920x1282"</Code>:<br />-<Code>1920</Code>is the
            coordinate along the x-axis (following the width of the image)
            <br />- and<Code>1282</Code>is the coordinate along the y-axis
            (following the height of the image)
          </li>
          <li>
            If<Code>auto</Code>is used in place of actual coordinates, the focus
            point will be chosen automatically for you!
          </li>
        </ul>
        <p>
          If you only need border-based positionning
          (<Code>top</Code>,<Code>bottom</Code>, etc), use&nbsp;
          <a href="/anchor" target="_blank" rel="noreferrer"> anchor </a>
          &nbsp;instead.
        </p>
      </TwicAbstract>

      <div class="twic-grid">
        <div class="twic-item">
          <button class="twic-button" @click="onChangeFocus">
            Click to change the focus point
          </button>
          <TwicImg
            :src="IMG_URL"
            :focus="focusArray[focusIndex]"
            ratio="4/5"
            placeholder="preview"
          />
          <span v-if="focusArray[focusIndex]"
            >focus="{{ focusArray[focusIndex] }}"</span
          >
          <span v-else>No focus(default) </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" ratio="4/5" placeholder="preview" />
          <span>
            <span>No focus</span>
            (default)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            ratio="4/5"
            focus="1920x1282"
            placeholder="preview"
          />
          <span>
            <Code>focus="1920x1282"</Code>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="IMG_URL"
            ratio="4/5"
            focus="auto"
            placeholder="preview"
          />
          <span>
            <Code>focus="auto"</Code>
          </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: "TwicFocus",
  data() {
    return {
      IMG_URL: `components/puppy.jpg`,
      focusArray: [``, `1920x1282`, `auto`],
      focusIndex: 0,
    };
  },
  methods: {
    onChangeFocus: function () {
      this.focusIndex = (this.focusIndex + 1) % this.focusArray.length;
    },
  },
};
</script>

<style lang="scss"></style>
