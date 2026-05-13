export default {
  base: "/vitepress-homework/", 
  title: "我的作业文档",
  description: "学习作业提交",

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "LeetCode", link: "/leetcode/" },
      { text: "课堂练习", link: "/practice/" },
      { text: "大作业", link: "/project/" }
    ],

    sidebar: {
      "/leetcode/": [
        {
          text: "LeetCode 题解",
          items: [{ text: "1041 困于环中的机器人", link: "/leetcode/1041" }]
        }
      ],
      "/practice/": [
        {
          text: "课堂练习",
          items: [{ text: "补全两个方法", link: "/practice/homework" }]
        }
      ],
      "/project/": [
        {
          text: "大作业",
          items: [{ text: "选题说明", link: "/project/topic" }]
        }
      ]
    }
  }
}
