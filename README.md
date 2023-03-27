# weibo_visualization
项目简介：一个Web端微博数据可视化平台。对Python爬虫得到的微博热搜以及热门话题评论等数据进行展示：包括指定话题在不同时间下热度的统计图表（显示热度随时间变化的关系），近一小时微博热搜热度变化的动态图表等；同时使用SinglePass算法对同一话题的评论内容进行聚类分析，提取主要的五个簇，并分析文本相似性，对每个簇的摘要进行展示。

## 首页
1、在用户登录操作之后，前端拿到用户token，将token持久化存储在localstorage中。随后登录进入首页。
2、首页主要展示微博热搜排行及动态排序、不同地区的微博话题关键词等。
![image](https://user-images.githubusercontent.com/88093402/227863730-e7f2e134-8c9c-45dd-8c85-fe940d06f424.png)
![image](https://user-images.githubusercontent.com/88093402/227864524-55c0f41b-4567-4dcb-8862-d3a09c855a05.png)

## 话题分类统计
1、统计不同分类中不同话题下的微博信息：包括用户名、微博内容、点赞数、评论数、微博链接（可以进行点击跳转）。
2、做不同分类下的统计图表。
![image](https://user-images.githubusercontent.com/88093402/227864933-05e66a61-7c5a-4602-a78c-31eef5abfc1e.png)
![image](https://user-images.githubusercontent.com/88093402/227864974-d5f84b0c-9685-4ee6-9a61-4cbd9d0ce092.png)


## 舆情走势分析
1、分析不同关键词下舆情的变化（热度随时间的变化情况）、展示此话题下影响力最高的5个用户。
2、利用singlepass算法将该话题下的微博内容进行聚类，得到该话题下按照相似信息总数降序top5的微博内容，并对每个聚类簇进行摘要总结。
![image](https://user-images.githubusercontent.com/88093402/227865920-a42c4663-7e16-4e58-88c9-f8db0c814973.png)
![image](https://user-images.githubusercontent.com/88093402/227865960-52130195-8653-41f7-a2c1-f34f9c948f67.png)


## 微博用户分析
1、从年龄、性别、增长率这几个方面分析微博用户数量的走势。
2、展示微博日活跃用户与月活跃用户。
![image](https://user-images.githubusercontent.com/88093402/227866057-5ca5518e-3bdd-4afa-b884-cf847e94bba4.png)


## 项目初始化
```
npm install
```

### 项目运行
```
npm run serve
```

