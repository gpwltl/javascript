# BOM

Browser Object Model

- 웹 브라우저를 제어하기 위해 브라우저가 제공해주는 객체들

- 자바스크립트를 통해 새 창을 열거나 현재 동작하고 있는 웹 브라우저에 대해 알게하는 것.

> **ObjectModel**
>
> > 웹페이지를 읽어내려가다가 태그를 발견.
> >
> > 각 태그별로 객체를 만들어두고 준비하는 것 .
> >
> > 태그에 해당되는 객체를 찾아서 그 객체의 메소드나 프로포티를 호출함 
> > -> 객체를 제어.
> >
> > 객체를 제어는 태그를 제어하는 것과 마찬가지. (웹 브라우저를 제어하는 것)



## 1. Window

- 가장 상위에 있는 객체
- 전역 객체

![image-20200906171525239](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200906171525239.png)



보통 alert('hello'); 를 사용하게 되는데 
사실 window가 상위 객체이기 때문에 window.alert('hello'); 라고 사용해야 하지만
생략하고 사용하여도 된다. 



## 2. 사용자와 커뮤니케이션 하기

### 1) alert

경고창. (확인 누르기 전까지 다른 실행을 하지 않음)

사용자에게 정보를 제공하거나 디버깅등의 용도로 많이 사용
(but. 요즘은 console.log() 를 사용하고 있는 추세.)



### 2) confirm

확인을 알려주는 창. ('확인'과 '취소' 버튼이 존재)

> 확인을 누르면 console창에 `true` 출력
>
> 취소를 누르면 console창에 `false` 출력

 

### 3) prompt

입력창.

> 입력창에 abc를 입력하게 되면 console창에 abc가 출력되게 됨





## 3. Location 객체

### 1) 문서의 주소정보를 알아내기

현재 위치의 url을 알아내고 싶다면 ?

`console.log(location.toString(), location.href);`		

//두 개의 결과는 동일 - 둘 중에 아무거나 사용해도 되지만, href 추천함

-> location만 출력하게 된다면 해당 객체의 내용들이 나오기 때문에 주소만 알고싶다면 위 방법으로 !

- location.protocol - `http:` 웹 브라우저와 웹 서버가 연결할 때 사용하는 프로토콜
- location.host -  `opentutorials.org`  도메인
- location.port - `8080` 포트(컴퓨터에서 돌아가는 서버 sw를 식별하는 번호)
- location.pathname - `/module/904/6608` 웹서버가 가지고 있는 구체적인 정보
- location.search - `?id=10` ?뒤에 들어오는 부분을 찾게 됨
- location.hash - `#bookmark` 특정한 위치를 지정하게 되면 북마크를 할 수 있음



### 2) 주소 변경하기

`location.href = 'http://egoing.net'`





## 4. Navigator 객체

- navigator.appName : 웹 브라우저의 이름 (크롬은 'Nescape')
- navigator.appVersion : 브라우저의 버전
- navigator.userAgent : 헤더의 내용 (appVersion과 비슷)
- navigator.platform : 브라우저가 동작하고 있는 운영체제



## 5. 창 제어

### 1) window.open

- 기본 형태 window.open() `window.open('demo2.html');`

- \_self : 같은 창에서 로드 `window.open('demo2.html', '_self');`
- \_blank : 새창 생성(여러번 누르면 계속 새창 생성)
- 'ot' : ot 등 창의 이름을 붙일 수 있음(여러번 눌러도 해당 페이지로 가서 리로드)

*example 폴더의 open.html 확인 !!* 