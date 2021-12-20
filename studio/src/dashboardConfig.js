export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61c0038c2671bcffc971076e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6uhkxwjr",
                  apiId: "9399723b-04d8-441a-b5d6-26465e27c029",
                },
                {
                  buildHookId: "61c0038dccad56c505ed4f6a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ayi11yog",
                  apiId: "abc7c2bb-5455-40e3-9b53-19994f9589c2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/chumakov-azoft/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ayi11yog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
