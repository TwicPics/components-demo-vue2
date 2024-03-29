<template>
  <div id="twic-short-videos-container">
    <TwicWrapper filename="pages/short-videos.vue">
      <TwicAbstract title="Short Videos">
        <p>
          The ideal candidates for TwicPics video integration are hero videos,
          product videos, and thumbnails.
        </p>
        <p>
          All videos generated by the TwicPics API are muted, to be looped and
          played automatically. You can think of them as GIFs, but with high
          quality.
        </p>
        <p>
          The TwicVideo component automatically handles CLS, LQIP and the
          display of a generated poster until the video is actually viewable.
        </p>
        <p>
          The TwicPics API features three transformations that can be used to
          <a
            href="https://www.twicpics.com/docs/guides/video-optimization#video-slicing?utm_source=github&utm_medium=organic&utm_campaign=components#vue2"
            target="_blank"
            rel="noreferrer"
          >
            extract a portion of the original video
          </a>
          .
        </p>
        <br />
        Here the properties used in this example:
        <ul>
          <li>
            <Code>from, to and duration</Code>:
            <span>used to extract a portion of the original video.</span>
          </li>
          <li>
            <Code>intrinsic</Code>:
            <span>
              prevents video upscaling and limits the number of generated
              variants.
            </span>
          </li>
          <li>
            <Code>mode</Code>:
            <span>
              determines if the image fills or sits inside the area.
            </span>
          </li>
          <li>
            <Code>preTransform</Code>:
            <span>
              allows to perfom
              <a
                href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#vue2"
                target="_blank"
                rel="noreferrer"
              >
                TwicPics API transformations
              </a>
              .
            </span>
          </li>
          <li>
            <Code>ratio</Code>:
            <span>
              determines the value of the width/height ratio of the image
              display area.
            </span>
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicVideo src="video/skater.mp4" intrinsic="1280x720"></TwicVideo>
          <span>Default values</span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            placeholder="meancolor"
            mode="contain"
          ></TwicVideo>
          <span> ratio="1" mode="contain" </span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            ratio="16/9"
          ></TwicVideo>
          <span> ratio="16/9" </span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            pre-transform="flip=x"
          ></TwicVideo>
          <span>preTransform="flip=x"</span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            from="5.1"
          ></TwicVideo>
          <span>from="5.1"</span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            to="5.1"
          ></TwicVideo>
          <span>to="5.1"</span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            from="15.4"
            to="16.6"
          ></TwicVideo>
          <span>from="15.4" to="16.6"</span>
        </div>
        <div class="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            from="15.4"
            duration="1.2"
          ></TwicVideo>
          <span>from="15.4" duration="1.2"</span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
export default {
  name: 'TwicShortVideo',
}
</script>
<style lang="scss">
#twic-short-videos-container {
  .twic-item {
    background-color: #1fffa6;
  }
}
</style>
