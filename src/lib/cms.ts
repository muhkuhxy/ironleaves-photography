import CMS from "@staticcms/core";
import StoryPreview from "../components/admin/StoryPreview";
import { config } from './cms-config'

config.local_backend = import.meta.env.DEV || document?.location?.hostname === 'localhost'
CMS.init({ config });

CMS.registerPreviewTemplate("stories", StoryPreview);
