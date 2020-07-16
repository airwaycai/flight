---
group:
    title: 日期 Date
---

## dateFormate 方法

```
flight.dateFormate(date, [fmt])
```

##### 参数

```
 	date (Date): 被格式化的日期
  	[fmt]: 格式化的形式
```

##### 返回值

```
	date (Date): 被格式化之后返回的日期
```

##### 例子

```
var date = new Date();
var formateDate = flight.dateFormate(date, 'yyyy-MM-dd');

console.log(formateDate);

// => 2020-07-15
```
