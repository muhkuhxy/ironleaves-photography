import CMS, { Entry, ObjectValue } from "@staticcms/core";
import StoryPreview, {
  StoryPreviewProps,
} from "../components/admin/StoryPreview";
import { config } from "./cms-config";

config.local_backend =
  import.meta.env.DEV || document?.location?.hostname === "localhost";
CMS.init({ config });

CMS.registerPreviewTemplate("stories", StoryPreview);

CMS.registerEventListener({
  name: "preSave",
  handler: async ({ entry }) => {
    const data = entry.data as StoryPreviewProps;
    if (
      data?.testimonial != null &&
      !data?.testimonial?.name &&
      !data?.testimonial?.text
    ) {
      data.testimonial = undefined;
    }
    console.log("preSave");
    return data;
  },
});
