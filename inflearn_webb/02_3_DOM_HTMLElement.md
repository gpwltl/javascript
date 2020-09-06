# DOM

## 3. HTMLElement

> getElement* 을 이용해 원하는 객체를 조회했다면 이 객체들을 구체적인 작업으로 처리해야 함. 획득한 객체가 무엇인지 알아야 적절한 메소드나 프로퍼티를 사용가능함

```js
var li = document.getElementById('active');
console.log(li.constructor.name);	//HTMLLIELEMENT

var lis = document.getElementsByTagName('li');
console.log(lis.constructor.name);	//HTMLCollection
```

1) id가 active인 엘리먼트를 li에 저장

 - 리턴값은 `HTMLLIElement`   (중간에 들어간 LI는 조회한 엘리먼트 태그가 li이니까)
   	- HTMLLIElement : li 태그
      	- HTMLAnchorElement : a태그
   	- HTMLInputElement : input 태그

2) li태그의 엘리먼트들을 lis에 저장

- 리턴 값은 `HTMLCollection` (유사배열)

> constructor.name : 객체의 이름

--> 결국, 실행 결과가 하나면 HTMLLIElement, 복수면 HTMLCollection



**상속 관계**

부모 객체 : HTMLElement

자식 객체 : HTMLLIElement, HTMLAnchorElement,,,,,,

=> 상속 관계이기 때문에 자식 객체들은 부모 객체의 속성을 가지고 있다. 



**DOM Tree**

![image-20200906224709290](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200906224709290.png)



## 4. HTMLCollection

HTMLCollection은 리턴 결과가 복수인 경우에 사용하게 되는 객체

> 유사배열로 배열과 비슷한 사용방법을 가지고 있지만 **배열은 아니다.**