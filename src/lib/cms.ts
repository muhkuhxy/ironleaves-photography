import CMS from "netlify-cms-app";
import StoryPreview from "../components/admin/StoryPreview";

CMS.init();
CMS.registerPreviewStyle("/src/layouts/main.css");
CMS.registerPreviewStyle("https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css");
CMS.registerPreviewTemplate("stories", StoryPreview);
