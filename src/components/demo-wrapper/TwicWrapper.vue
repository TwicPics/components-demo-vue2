<template>
  <div id="twic-demo-wrapper">
    <header id="twic-header">
      <a href="/" title="Home">
        <h1 class="heading-primary">
          <img
            class="twicpics-logo"
            src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics-by-frontify.svg"
            alt="TwicPics logo"
          />
          <span>x</span>
          <img class="framework-logo" :src="frameworkLogo" alt="React Logo" />
        </h1>
      </a>
      <div class="ribbon">
        <div>
          <a
            target="_blank"
            :href="gitHubUrl"
            rel="noreferrer"
            title="Open in Github"
          >
            <img class="github" :src="gitHubLogo" alt="Open in Github" />
          </a>
          <a
            target="_blank"
            :href="onlineUrl"
            rel="noreferrer"
            title="Open in StackBlitz"
          >
            <img
              class="github"
              :src="stackBlitzLogo"
              alt="Open in StackBlitz"
            />
          </a>
        </div>
      </div>
      <div class="tags-container">
        <div class="tag tag-components">@twicpics-components</div>
        <a
          :href="documentationUrl"
          target="_blank"
          class="documentation-link tag tag--bg-purple-rain"
          rel="noreferrer"
        >
          Documentation
        </a>
      </div>
    </header>
    <main id="twic-demo-container"><slot></slot></main>
  </div>
</template>

<script>
const GITHUB_REPO_NAME = `TwicPics/components-demo-vue2`;
const GITHUB = `https://github.com/${GITHUB_REPO_NAME}`;
export default {
  name: "TwicWrapper",
  props: {
    filename: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      onlineUrl: ``,
      documentationUrl: `https://www.twicpics.com/docs/components/vue2?utm_source=github&utm_medium=organic&utm_campaign=components`,
      frameworkLogo: `https://assets.twicpics.com/demo/@twicpics-components/logos/vue.png`,
      gitHubLogo: `assets/github-mark-white.svg`,
      gitHubUrl: ``,
      stackBlitzLogo: `/assets/stackblitz.svg`,
    };
  },
  created() {
    this.onlineUrl = `https://stackblitz.com/github/${GITHUB_REPO_NAME}?file=${
      this.filename || "README.md"
    }`;
    if (this.filename) {
      const test = /src\/components\/Twic(.*)\./.exec(this.filename);
      if (test) {
        // eslint-disable-next-line no-unused-vars
        let [_, initialPath] = test;
        initialPath = initialPath
          .replace(/([A-Z])/g, " $1")
          .trim()
          .split(" ")
          .join("-")
          .toLowerCase();
        this.onlineUrl = `${this.onlineUrl}&initialpath=${initialPath}`;
      }
    }
    this.gitHubUrl = this.filename
      ? `${GITHUB}/blob/main/${this.filename}`
      : GITHUB;
  },
};
</script>

<style lang="scss">
$bg-color: #f9fafb;
$bg-github: #6d6d6d;
$deep-purple: #8f00ff;
$ribbon-height: 30px;
$green: #06ffa3;
$height: 100px;

#twic-demo-wrapper {
  & #twic-demo-container {
    margin: 40px;
    margin-top: $height + 40px;
    max-width: 1500px;

    @media screen and (min-width: 768px) {
      margin: 80px 60px;
      margin-top: $height + 80px;
    }
    @media screen and (min-width: 1600px) {
      margin: 2rem auto;
      margin-top: calc($height + 2rem);
    }
  }
}

#twic-header {
  height: $height;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #e3e3e4;
  background-color: $bg-color;
  z-index: 10;
  & a {
    text-decoration: none;
    color: initial;
  }
  & .heading-primary {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0px;
    font-size: 1.2em;
    font-weight: 400;
  }
  & .twicpics-logo {
      aspect-ratio: 300/58;
      width: 165px;
      @media (min-width: 640px) {
        width: 250px;
      }
    }
  & .framework-logo {
    aspect-ratio: 16/9;
    width: 80px;
    position: relative;
    left: -8px;
    @media (min-width: 640px) {
        width: 120px;
      }
  }

  & .tags-container {
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 0.7em;
    width: 100%;

    @media (min-width: 640px) {
      font-size: 0.9em;
    }

    & .tag {
      align-items: center;
      background-color: $green;
      border-radius: 30px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      font-weight: 600;
      gap: 4px;
      padding: 4px 8px;

      &.tag--bg-purple-rain {
        color: #fff;
        background-color: $deep-purple;
      }
      &.documentation-link {
        &:link,
        &:visited {
          text-decoration: none;
          transition: all 0.3s;
        }
        &:hover,
        &:active {
          transform: translateY(-5px);
          box-shadow: 0 9px 4px rgba(0, 0, 0, 0.09);
          background: linear-gradient(to right, $green, $deep-purple);
        }
        &:after {
          content: url("../../assets/arrow-icon.svg");
          width: 20px;
          height: 20px;
        }
      }
      @media (min-width: 640px) {
        padding: 8px 16px;
      }
    }
  }

  .ribbon {
    background-color: $bg-github;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    left: -33px;
    top: 20px;
    transform: rotate(-45deg);
    box-shadow: 0 0 5px #888;
    & div {
      color: #fff;
      display: block;
      font: bold 81.25% "Helvetica Neue", Helvetica, Arial, sans-serif;
      width: 1.42 * $height;
      line-height: $ribbon-height;
      text-align: center;
      & a {
        margin-right: 10px;
        & img {
          height: 23px;
          line-height: 23px;
          vertical-align: middle;
          margin-top: -4px;
          transition-duration: 200ms;
          width: 23px;
          &:hover {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  @media (min-width: 640px) {
    padding: 15px;
  }
}
</style>
