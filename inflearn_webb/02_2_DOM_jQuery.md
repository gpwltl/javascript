# DOM

## 2. jQuery

DOM을 내부에 감추고 보다 쉽게 웹페이지를 조작할 수 있도록 돕는 도구 

> 라이브러리.
> 이용하게 되면 자주 사용하는 것들을 보다 효율성을 높임



jQuery 기본 사용 형태

```html
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
jQuery( document ).ready(function( $ ) {
    
/////

});
</script>
```



## 2-1. jQuery 제어 대상 조회

### 1) 기본 문법

`$('li').css('color', 'red');`

> - $() : 제이쿼리 함수
> - 함수의 인자로 css 선택자(li)를 전달하면 jQuery 객체를 리턴
> - 이 객체는 선택자에 해당하는 엘리먼트를 제어하는 다양한 메소드를 가지고 있다. (css-style)



### 2) 엘리먼트 제어

![image-20200906221929530](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200906221929530.png)



> 위의 2개의 박스 (첫번째 execute 버튼)

1) DOM을 이용한 코드

2) jQuery코드



### 3) jQuery 객체







추가예정...