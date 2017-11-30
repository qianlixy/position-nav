# 定位导航 jquery.position-nav.js
[示例看这里](http://qianlixy.github.io/blog/position-nav.html)

## 用法
```html
    <div class="position-nav">
        <ul>
            <li pnav="nav1">NAV1</li>
            <li pnav="nav2">NAV2</li>
            <li pnav="nav3">NAV3</li>
            <li pnav="nav4">NAV4</li>
            <li pnav="nav5">NAV5</li>
        </ul>
    </div>
    <div class="content">
        <div pnav="nav1"><h2>This is nav1</h2></div>
        <div pnav="nav2"><h2>This is nav2</h2></div>
        <div pnav="nav3"><h2>This is nav3</h2></div>
        <div pnav="nav4"><h2>This is nav4</h2></div>
        <div pnav="nav5"><h2>This is nav5</h2></div>
    </div>
```
```javascript
    $(".position-nav").positionNav();
```

## 参数
- style：导航的class样式，默认为`active`
- attr：通过该属性对应导航和定位信息，默认为`pnav`
- speed：定位的速度，单位毫秒，默认为`300`

## 反馈
有问题欢迎指正<qianli_xy@163.com>
