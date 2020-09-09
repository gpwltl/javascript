## Element 객체

#### 주요기능

------

##### 식별자

문서내에서 특정한 엘리먼트를 식별하기 위한 용도로 사용되는 API

- `Element.classList`  -DOMTokenLIst(유사배열)을 가지고 있음

  - 추가하려면 **.classList.add(' ');**
  - 삭제하려면  **.classList.remove(' ');**
  - 온오프하려면  **.classList.toggole(' ');**

- Element.className  -보통 classList를 사용(변경 가능)

  ​									 -추가하려면 해당 클래스를 찾아야 하고, 삭제도 삭제하지 않을 것을 재지정하고 삭제해야함

- `Element.id`  -단 한번만 등장할 수 있음(변경 가능)

- `Element.tagName`  -only read



##### 조회

엘리먼트의 하위 엘리먼트를 조회하는 API

> document.getElementsBy*는 문서 전체에서 엘리먼트들을 조회하지만, 범위를 좁혀서 엘리먼트를 조회하고 싶다면 `Element.`

- Element.getElementsByClassName
- Element.getElementsByTagName
- Element.querySelector
- Element.querySelectorAll



##### 속성

엘리먼트의 속성을 알아내고 변경하는 API

- Element.getAttribute(name)
- Element.setAttribute(name, value)
- Element.hasAttribute(name)
- Element.removeAttribute(name)



> **속성과 프로퍼티**
>
> > 클래스명을 바꿔주고 싶을 때
>
> - target.setAttribute('class', 'important') : attribute방식
> - target.className='important' : property방식
>
> > 주의할 점 : 이름 규칙
>
> | 속성        | 프로퍼티    |
> | ----------- | ----------- |
> | class       | className   |
> | readonly    | readOnly    |
> | rowspan     | rowSpan     |
> | colspan     | colSpan     |
> | usermap     | userMap     |
> | frameborder | frameBorder |
> | for         | htmlFor     |
> | maxlength   | maxLength   |