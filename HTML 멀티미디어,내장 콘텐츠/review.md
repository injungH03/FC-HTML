
<img src="./img/img1.png" width= "450px" height="250px" title="스크린샷 크기 설정" alt="screenshot"></img>

```
img { display: inline; }

Ex)

<!-- srcset, sizes -->
<!-- 다양한 디스플레이 해상도에 맞는 최적의 이미지를 브라우저가 선택해서 사용 -->
<img srcset="./small.jpg 320w,
             ./medium.jpg 640w,
             ./large.jpg 1024w"
     sizes="(max-width: 480px) 300px,
            (max-width: 800px) 600px,
            900px"
     src="./small.jpg"
     alt="The image" />
<img srcset="./image.jpg,
             ./image-1.5x.jpg 1.5x,
             ./image-2x.jpg 2x"
     src="./image.jpg"
     alt="The image" />
```

[HTML IMG의 srcset과 sizes 속성](https://heropy.blog/2019/06/16/html-img-srcset-and-sizes")
```


일반적으로 반응형 웹에서 이미지를 지원하기 위해, ‘미디어쿼리’라고 부르는 CSS Media Rule(@media)에서 background-image 속성을 많이 사용하는데, 반응형 이미지를 처리하기 위해 뷰포트(Viewport)의 크기부터 사용자 화면의 해상도 등 많은 환경을 고려해야 한다.
하지만 우리는 HTML IMG의 srcset과 sizes를 통해 쉽게는 이미지의 크기를 설정하는 것만으로 대부분의 고려 사항을 사용자 브라우저(User agent)에 떠넘길 수 있다.
```
