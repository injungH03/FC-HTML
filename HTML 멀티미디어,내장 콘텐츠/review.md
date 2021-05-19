```
<img />
이미지를 삽입.
```
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


<img
  srcset="경로 원본크기,
          경로 원본크기,
          경로 원본크기"
  sizes="(미디어조건) 최적화출력크기,
         (미디어조건) 최적화출력크기,
         기본출력크기"
  src="경로"
  alt="대체텍스트" />


srcset 속성은 쉼표(,)로 구분된 사용할 이미지들의 경로와 해당 이미지의 원본 크기를 지정하고,
sizes 속성은 쉼표(,)로 구분된 미디어조건(선택적)과 그에 따라 최적화되어 출력될 이미지 크기를 지정합니다.
```

[HTML IMG의 srcset과 sizes 속성](https://heropy.blog/2019/06/16/html-img-srcset-and-sizes")
```


일반적으로 반응형 웹에서 이미지를 지원하기 위해, ‘미디어쿼리’라고 부르는 CSS Media Rule(@media)에서 background-image 속성을 많이 사용하는데, 
반응형 이미지를 처리하기 위해 뷰포트(Viewport)의 크기부터 사용자 화면의 해상도 등 많은 환경을 고려해야 한다.
하지만 우리는 HTML IMG의 srcset과 sizes를 통해 쉽게는 이미지의 크기를 설정하는 것만으로 대부분의 고려 사항을 사용자 브라우저(User agent)에 떠넘길 수 있다.
```

```
srcset
srcset은 브라우저에 제시할(사용할) 이미지들과 그 이미지들의 원본 크기를 지정합니다.

사용 방법은 간단합니다.

사용할 이미지를 사이즈별로 2장 이상 준비하여 srcset 속성에 작성합니다.
단, 주의사항은 이미지의 크기로 px단위가 아닌 w 디스크립터 혹은 x 디스크립터를 입력해야 하며, 작은 크기 이미지부터 순서대로 입력합니다.
```
```
w 디스크립터(Width descriptor)는 이미지의 원본 크기(가로 너비)를 의미합니다.
예를 들어 400x300(px) 크기 이미지의 w 값은 400w입니다.

브라우저(User agent)는 지정된 w 디스크립터를 통해 각 이미지의 최적화된 픽셀 밀도를 계산합니다.
```
```
Ex)
<img srcset="images/heropy_small.png 400w,
          images/heropy_medium.png 700w,
          images/heropy_large.png 1000w"
  src="images/heropy.png"
  alt="HEROPY" />

아래와 같이 단지 3장의 이미지와 그 크기만 srcset에 입력했을 뿐인데 브라우저는 각 이미지 중 현재 뷰포트 너비에 최적화된 이미지를 선택해 출력합니다.
마치 다음의 CSS 미디어조건과 비슷합니다.

CSS로 똑같은 효과를 주려면 아래와 같이 작성해야된다.
.some-image {
  width: 400px;
  height: 400px;
  background-image: url("images/heropy_small.png");   
  background-repeat: no-repeat;
}
@media (min-width: 401px) {
  .some-image {
    width: 700px;
    height: 700px;
    background-image: url("images/heropy_medium.png");   
  }
}
@media (min-width: 701px) {
  .some-image {
    width: 1000px;
    height: 1000px;
    background-image: url("images/heropy_large.png");   
  }
}
```
<img src="./img/example_1.jpeg" title="예제" alt="screenshot"></img>

```
고정된 이미지 크기를 유지하려면 width 속성을 추가할 수 있습니다.
(sizes 속성과는 다른 개념입니다!)

<img
  srcset="images/heropy_small.png 400w,
          images/heropy_medium.png 700w,
          images/heropy_large.png 1000w"
  width="400"
  src="images/heropy.png"
  alt="HEROPY" />
```
<img src="./img/example_2.jpeg" title="예제" alt="screenshot"></img>