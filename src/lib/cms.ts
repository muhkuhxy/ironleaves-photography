import CMS from "@staticcms/core";
import StoryPreview from "../components/admin/StoryPreview";
import styles from '../layouts/main.css?url'

CMS.init();

if (import.meta.env.DEV) {
  CMS.registerPreviewStyle(styles);
} else {
  // console.log({ stylesheets: Array.from(document?.head?.children ?? []).filter(c => c.tagName === 'LINK' && c.getAttribute('rel') === 'stylesheet') })
  Array.from(document?.head?.children ?? []).filter(c => c.tagName === 'LINK' && c.getAttribute('rel') === 'stylesheet')
    .forEach(c => {
      const href = c.getAttribute('href')
      // console.log('adding ' + href)
      href && CMS.registerPreviewStyle(href)
    })
}

CMS.registerPreviewStyle("https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css");
CMS.registerPreviewTemplate("stories", StoryPreview);
