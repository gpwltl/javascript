## CSS 기초

### 1. style 속성 이용

```html
<h2 style="color: powderblue">Javascript</h2>
```

style을 적용해줄 건데 `color`라는 속성을 주는 것 

- `color` 글자의 색
- `background-color` 배경색



```html
<div style="font-weigth:bold">Javascript</div>
```

- `div` 어떠한 의미도 기능도 없는 태그 (어떤 정보를 제어하고 싶을 때 사용하는 태그

  > 줄바꿈이 되는 태그 
  >
  > \* 줄바꿈이 되지 않는 태그 : `span`

- `font-weight` 폰트의 무게 (`:bold`  글자를 진하게)



### 2. style 태그를 이용

###### 그렇다면, "Javascript" 문자열이 1억개라면 ? 하나하나마다 속성을 붙여줄 것인가?

`class`를 이용하여 해당 css를 설정해주기 !

> 클래스는 \<style>에서 .js로 지정

```html
<head>
    <style>
        .js{font-weight: bold}
    </style>
</head>
<body>
    <p>
        <span class="js">Javascript</span>
        hellohellohellohellohellohellohellohellohellohellohellohello
    </p>
</body>
```



### 3. 선택자

###### class로 묶인 1억개의 "Javascript"에서 첫번째 문자열만 초록색으로 바꿔주고 싶다?

```html
<head>
    <style>
        .js{font-weight: bold}
        #first{color: green}
        span{color: blue}
    </style>
</head>
<body>
    <p>
        <span id="first" class="js">Javascript</span>
        <span class="js">Javascript</span>
        hellohellohellohellohellohellohellohellohellohellohellohello
        <span>HTML-CSS</span>
    </p>
</body>
```

- class가 지정된 글자 중에서 첫 번째만 바꿔주고 싶을 땐 `id` 를 붙여 해당 태그만 css를 적용

- span 태그에 대해서 바꾸고 싶은 css가 생긴다면 `span{color: blue}`라고만 작성하여 span으로만 묶인 태그만 css 적용

> 클래스 : 무언가를 그룹핑한다 (.js로 가져옴)
>
> id: 어떤 한가지 대상을 식별한다 (#first로 가져옴)



### 4. 제어할 태그 선택

```html
<!-- ex1.html 파일 참조 -->
<body>
    <input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('body').style.color = 'white'                 
    ">
	<input type="button" value="day" onclick="
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('body').style.color = 'black'                           ">
    <p>hellohellohellohellohellohellohellohellohellohellohellohello</p>
</body>
```

> `querySelector(".myclass")`
> 모든 태그 중에 클래스명이 myclass인 태그를 선택하는 선택자

- `querySelector('body')`에 들어간 body는 전체를 아우르는 \<body> 태그를 말한다.
  - night 버튼을 눌렀을 땐, 배경은 검은색, \<p>태그의 글자들은 하얀색으로 
  - day 버튼을 눌렀을 땐, 배경은 흰색, \<p>태그의 글자들은 검은색으로 



**여기서 `document.querySelector('body').style.backgroundColor = 'black'`은 **

**`document.getElementById('body').style.backgroundColor='black'`와 동일한 표현**

