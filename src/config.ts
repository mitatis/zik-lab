export const SITE = {
  website: "https://lab.zik-3.com/", // replace this with your deployed domain
  author: "Mitatis",
  profile: "https://zik-3.com/",
  desc: "Mitatis 的AI信息站",
  title: "ZIK Lab",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "联系我",
    url: "https://letterbird.co/mitatis",
  },
  dynamicOgImage: true,
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
