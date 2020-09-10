# Node 객체

모든 DOM 객체는 Node 객체를 상속 받는다 !

## 1. 관계

- `Node.childNodes` 자식 노드들 유사배열에 담아서 리턴
- `Node.firstChild`  첫번째 자식노드
- `Node.lastChild`  마지막 자식노드
- `Node.nextSibling`  다음 형제 노드
- `Node.previousSibling`  이전 형제 노드
- Node.contains()
- Node.hasChildNodes()

<small> **공백/ 줄바꿈 부분은 `#text`로 출력된다.</small>



## 2. 노드의 종류

*각각의 구성요소가 어떤 카테고리에 속하는 것인지를 알려주는 식별자를 제공*

- Node.nodeType
- Node.nodeName



> 재귀함수

```js
function traverse(target, callback){
    if(target.nodeType === Node.ELEMENT_NODE){
        if(target.nodeName === 'A') //a태그만 필터링하고 싶다면
        callback(target);
        var c = target.childNodes;
        for(var i=0; i<c.length; i++){
            traverse(c[i], callback);       
        }   
    }
}
traverse(document.getElementById('start'), function(elem){
    console.log(elem);
});
```

for문 안에 traverse함수를 또 사용했기 때문에 (=재귀함수)
childNodes가 없을 때까지 해당 함수를 진행하는 것이다. 



## 3. 값

*Node 객체의 값을 제공하는 API*

- Node.nodeValue
- Node.textContent



## 4. 자식 관리

*Node 객체의 자식을 추가하는 방법에 대한 API*

- `Node.appendChild(child)`	노드의 마지막 자식으로 주어진 엘리먼트 추가
  원래 태그가 \<ul> \<li>a\</li>\<li>b\</li> \</ul>인데 "li.appendchild(c)" c를 추가하고 싶다? 그렇다면 결과는 abc

  - `insertBefore(newElement, referenceElement)` 유사한 기능이지만 두번째 인자 앞에 추가가 됨
    \<ul> \<li>a\</li>\<li>b\</li> \</ul>인데 "ul.insertBefore(li, ul.firstChild)"이면 firstChild인 #text(공백)의 앞에 붙게되어 결과는 cab

- `Node.removeChild(child)`  노드 제거하려면 삭제 대상의 부모 노드 객체의 것을 실행해야 함

- `Node.replaceChild(newChild, oldChild)`  

  ```js
  function callReplaceChild(){
          var a = document.createElement('a');
          a.setAttribute('href', 'http://opentutorials.org/module/904/6701');
          a.appendChild(document.createTextNode('Web browser JavaScript'));
   
          var target = document.getElementById('target');
          target.replaceChild(a,target.firstChild);
      }
  ```

  - a를 생성한 뒤, setAttribute으로 경로를 설정하고 
  - 이름을 'Web browser Javascript'인 노드를 추가한 뒤, a에 appendChild로 추가해준다. 
  - target을 찾아서 그 위치에 다음(firstChild) 부분을 a로 대체해준다.