<template>
  <div id="twic-position-container">
    <TwicWrapper filename="src/components/TwicPosition.vue">
      <TwicAbstract title="position property">
        <p>
          In<Code>contain</Code>mode,
          <strong>
            the <dfn>position</dfn> property changes the location of the image
            inside the area of the component.
          </strong>
        </p>
        <p>
          The syntax is the same as for CSS position properties (e.g.
          <Code>background-position</Code>or <Code>object-position</Code>).
        </p>
        <p>
          Useful values
          are<Code>top</Code>,<Code>bottom</Code>,<Code>left</Code>, and
          <Code>right</Code>, but all valid CSS position values are valid.
        </p>
        <p>
          If you only need border-based positionning, you can also use&nbsp;
          <a href="/anchor" target="_blank" rel="noreferrer">anchor</a>
          property.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="onChangePosition">
          Click to change the position
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg
            :src="landscapeImgUrl"
            mode="contain"
            placeholder="none"
            :position="verticalPositionArray[verticalPositionIndex]"
          >
          </TwicImg>
          <span>
            <Code
              >position="{{
                verticalPositionArray[verticalPositionIndex]
              }}"</Code
            >
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="portraitImgUrl"
            mode="contain"
            placeholder="none"
            :position="horizontalPositionArray[horizontalPositionIndex]"
          >
          </TwicImg>
          <span>
            <Code
              >position="{{
                horizontalPositionArray[horizontalPositionIndex]
              }}"</Code
            ></span
          >
        </div>
        <div class="twic-item">
          <TwicImg :src="landscapeImgUrl" mode="contain" placeholder="none">
          </TwicImg>
          <span> No position set (<Code>center</Code>by default) </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="portraitImgUrl" mode="contain" placeholder="none">
          </TwicImg>
          <span> No position set (<Code>center</Code>by default) </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>

<script>
export default {
  name: "TwicPosition",
  data() {
    return {
      landscapeImgUrl: `components/position/horse.jpg`,
      portraitImgUrl: `components/position/forest.jpg`,
      horizontalPositionArray: [`left`, `right`, `center`],
      horizontalPositionIndex: 0,
      verticalPositionArray: [`top`, `bottom`, `center`],
      verticalPositionIndex: 0,
    };
  },
  methods: {
    onChangePosition() {
      this.horizontalPositionIndex =
        (this.horizontalPositionIndex + 1) %
        this.horizontalPositionArray.length;
      this.verticalPositionIndex =
        (this.verticalPositionIndex + 1) % this.verticalPositionArray.length;
    },
  },
};
</script>
