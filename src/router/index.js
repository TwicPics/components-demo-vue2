import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import TwicAnchor from "../components/TwicAnchor.vue";
import TwicArtDirections from "../components/TwicArtDirections.vue";
import TwicBasicGrid from "../components/TwicBasicGrid.vue";
import TwicBulkLoading from "../components/TwicBulkLoading.vue";
import TwicBot from "../components/TwicBot.vue";
import TwicColorBlindness from "../components/TwicColorBlindness.vue";
import TwicEager from "../components/TwicEager.vue";
import TwicFlipCards from "../components/TwicFlipCards.vue";
import TwicFocus from "../components/TwicFocus.vue";
import TwicGridAndZoom from "../components/TwicGridAndZoom.vue";
import TwicHero from "../components/TwicHero.vue";
import TwicIntrinsic from "../components/TwicIntrinsic.vue";
import TwicMode from "../components/TwicMode.vue";
import TwicModal from "../components/TwicModal.vue";
import TwicPageTemplating from "../components/TwicPageTemplating.vue";
import TwicPreTransform from "../components/TwicPreTransform.vue";
import TwicPlaceholder from "../components/TwicPlaceholder.vue";
import TwicPosition from "../components/TwicPosition.vue";
import TwicRatio from "../components/TwicRatio.vue";
import TwicSlider from "../components/TwicSlider.vue";
import TwicShortVideos from "../components/TwicShortVideos.vue";
import TwicState from "../components/TwicState.vue";
import TwicSlideshow from "../components/TwicSlideshow.vue";
import TwicStyleDriven from "../components/TwicStyleDriven.vue";
import TwicTransition from "../components/TwicTransition.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/anchor",
    name: "TwicAnchor",
    component: TwicAnchor,
  },
  {
    path: "/art-directions",
    name: "TwicArtDirections",
    component: TwicArtDirections,
  },
  {
    path: "/basic-grid",
    name: "TwicBasicGrid",
    component: TwicBasicGrid,
  },
  {
    path: "/bot",
    name: "TwicBot",
    component: TwicBot,
  },
  {
    path: "/bulk-loading",
    name: "TwicBulkLoading",
    component: TwicBulkLoading,
  },
  {
    path: "/color-blindness",
    name: "TwicColorBlindness",
    component: TwicColorBlindness,
  },
  {
    path: "/eager",
    name: "TwicEager",
    component: TwicEager,
  },
  {
    path: "/flip-cards",
    name: "TwicFlipCards",
    component: TwicFlipCards,
  },
  {
    path: "/focus",
    name: "TwicFocus",
    component: TwicFocus,
  },
  {
    path: "/grid-and-zoom",
    name: "TwicGridAndZoom",
    component: TwicGridAndZoom,
  },
  {
    path: "/hero",
    name: "TwicHero",
    component: TwicHero,
  },
  {
    path: "/intrinsic",
    name: "TwicIntrinsic",
    component: TwicIntrinsic,
  },
  {
    path: "/mode",
    name: "TwicMode",
    component: TwicMode,
  },
  {
    path: "/modal",
    name: "TwicModal",
    component: TwicModal,
  },
  {
    path: "/page-templating",
    name: "TwicPageTemplating",
    component: TwicPageTemplating,
  },
  {
    path: "/placeholder",
    name: "TwicPlaceholder",
    component: TwicPlaceholder,
  },
  {
    path: "/pretransform",
    name: "TwicPreTransform",
    component: TwicPreTransform,
  },
  {
    path: "/short-videos",
    name: "TwicShortVideos",
    component: TwicShortVideos,
  },
  {
    path: "/position",
    name: "TwicPosition",
    component: TwicPosition,
  },
  {
    path: "/ratio",
    name: "TwicRatio",
    component: TwicRatio,
  },
  {
    path: "/slider",
    name: "TwicSlider",
    component: TwicSlider,
  },
  {
    path: "/slideshow",
    name: "TwicSlideshow",
    component: TwicSlideshow,
  },
  {
    path: "/state",
    name: "TwicState",
    component: TwicState,
  },
  {
    path: "/style-driven",
    name: "TwicStyleDriven",
    component: TwicStyleDriven,
  },
  {
    path: "/transition",
    name: "TwicTransition",
    component: TwicTransition,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
