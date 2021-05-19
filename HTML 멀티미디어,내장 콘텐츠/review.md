
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