import highlight from "rehype-highlight";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Challenge = defineDocumentType(() => ({
  name: "Challenge",
  filePathPattern: `challenges/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (challenge) => `/challenges/${challenge._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "challenges",
  documentTypes: [Challenge],
  mdx: { rehypePlugins: [highlight] },
});
