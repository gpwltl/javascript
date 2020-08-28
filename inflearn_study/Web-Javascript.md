# Web-Javascript

> **javascript** 
>
> > 사용자와 상호작용하는 언어
> >
> > HTML을 제어하는 언어



## 1. HTML과 JS

#### 1-1. 이벤트

```html
<input type="button" value="hi" onclick="alert('hi')">
```

> onclick= "js코드"실행   (버튼을 클릭했을 때 alert()을 기억하고 있다가 출력)

```html
<input type="text" onchange="alert('changed')">
```

> onchange는 입력창에 변화가 있을 때  	//문자를 넣고 enter를 눌러야 alert  발생

```html
<input type="text" onkeydown="alert('key down')">
```

> onkeydown는 입력창에 변화가 있자마자  	//문자를 넣자마자 alert 발생



#### 1-2. Console

> `F12` 키를 누르면 console창 확인 가능 (도구 더보기 -> 개발자 도구)

문자의 개수를 확인하는 명령어  `.length`



## 2. 데이터타입

#### 2-1. 문자열

String

"Hello World"

'Hello World' 

> 소문자를 대문자로 바꿔주는 명령어 `.toUpperCase()` 
>
> 해당 문자는 어디에 위치하는지. 몇번 째에서 시작하는 지 `indexOf('o')`  //4 출력
>
> 공백 없애주는 명령어 `.trim`

#### 2-2. 숫자

Number

> 산술연산자: + - * / %



## 3. 변수와 대입 연산자

`var name='hyeji'`변수를 사용한다면, 
본문에서 `"+name+"` 을 추가했을 때 내가 name이라고 준 부분에 hyeji라는 문자열이 들어가게 됨.

-> hyeji라고 써있는 부분을 yoon이라고 바꾸고 싶다면 본문을 살펴 볼 필요없이 해당 name만 `name='yoon'`이라고 바꿔주면 완료