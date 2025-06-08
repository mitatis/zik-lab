import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};
export default getSortedPosts;

/** 洞察集合倒序（按修改时间或发布时间） */
export function getSortedInsights(
  posts: CollectionEntry<'insights'>[]
): CollectionEntry<'insights'>[] {
  return posts.sort(
    (a, b) =>
      new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() -
      new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime()
  );
}

/** 新闻集合倒序（按修改时间或发布时间） */
export function getSortedNews(
  posts: CollectionEntry<'news'>[]
): CollectionEntry<'news'>[] {
  return posts.sort(
    (a, b) =>
      new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() -
      new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime()
  );
}