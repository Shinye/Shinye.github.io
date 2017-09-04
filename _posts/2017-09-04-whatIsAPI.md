---
layout: post
title: "[번역] 그래서 API가 대체 뭔가요?"
author: "Shinye Song"
---

> 원작자 [Grant Winney](https://grantwinney.com/) 의 허락을 받고 해외 개발자 커뮤니티 사이트 [The Practical Dev](https://dev.to/) 에 올라온 글인 [What do we mean by API?](https://dev.to/grantwinney/what-is-an-api) 를 번역하였습니다.<br>오역, 의역에 대한 지적은 항상 환영합니다! 글에 비유가 많아 의역도 많기 때문에 내용 이해에 어려움이 있으시다면 원글을 함께 봐주시는 것을 추천합니다 :)

<br>

API는 Application Programming Interface의 줄임말입니다. 하지만 이것이 정확하게 의미하는 것이 무엇일까요?<br>좀 더 실용적인 의미에서, API는 (아마도 복잡한) 디테일한 코드를 보기 좋게 숨겨놓아 해당 프로그램을 사용하는 유저들의 편의를 돕습니다. 

### 우선, API에서 ‘Interface’ 는 무엇일까요?

프로그래밍적인 관점에서 이해하기 전에, ‘인터페이스’ 라는 단어 자체가 무엇을 의미하는지 알아봅시다. <br>우리는 인터페이스를 생활 속에서 굉장히 많이 이용하고 있습니다. 사실 좋은 인터페이스일수록 우리가 인터페이스를 사용한다는 자각을 하지 못합니다! 유저들의 편리한 이용을 위해 작은 디스플레이 화면이나 심플한 버튼 뒤에 복잡한 세부 구현 사항을 숨겨놓기 때문이지요.

차 안의 대시보드가 인터페이스의 좋은 예시가 될 수 있겠습니다.<br>대시보드는 주행거리 등과 같이 차량 운행에 도움이 되는 정보들을 보여줍니다. 우리는 엔진 크랭크 축이 회전하는 횟수를 셀 필요가 없습니다. 그저 대시 보드가 보여주는 RPM게이지를 살펴보면 됩니다. <br>또한 연료 탱크의 가스 레벨을 수동으로 검사하거나 낮은 연료 센서의 출력을 읽을 필요가 없습니다. 이 또한 대시 보드와 전용 표시기 라이트를 읽으면 됩니다.

정리하자면 이 대시보드 라는 ‘인터페이스’를 통해, 차량 내에 수십 개의 센서가 장착된 각종 장치의 상황을 복잡함 없이 한눈에 파악할 수 있도록 해 줍니다. 

당신의 주방 역시도 많은 인터페이스를 가지고 있을 것입니다. (토스트기, 전자레인지, 커피머신 등…)<br>이러한 주방기기들은 일반적으로 몇 가지의 버튼을 누르는 것으로, 사용자들이 기기 내부의 복잡한 동작 과정을 신경쓰지 않고 기기를 사용할 수 있도록 해줍니다. 주방기기들에 인터페이스가 존재하지 않는다면 요리가 매우 힘들어질 것입니다.

### 그래서 이것들이 프로그래밍과 무슨 상관이냐구요?

프로그래밍 언어에도 추상화 계층을 제공하는 고유한 인터페이스가 있습니다.<br>많은 코드들이 클래스와 모듈들로 구성되어 있습니다. 그리고 이 코드 조각들에게 “public” 이나 “exported” 등과 같은 표시를 해두어 해당 코드를 사용할 수 있음을 나타냅니다. 

이해를 돕기 위해 임의의 “Person” 이라는 class를 예로 들어봅시다 (코드는 C#으로 작성). <br>“PersonReport” 라는 또 다른 클래스가 있고, 이 클래스는 여러 사람들 중에서 누가 성인인지, 또는 누가 부모인지에 대한 질문에 답을 할 수 있다고 가정합시다.

코드의 구조는 다음과 같습니다.

```c#
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public List<Person> Children { get; set; }
}

public class PersonReport
{
    public List<Person> GetAdults(List<Person> persons)
    {
        return persons.Where(x => x.Age >= 18).ToList();
    }

    public List<Person> GetParents(List<Person> persons)
    {
        return persons.Where(x => x.Children.Count > 0).ToList();
    }
}
```



방금 언급한 “자동차 안의 대시보드” 예시와 동일하게, 우리는 자세한 세부 구현에 대해서 굳이 알 필요가 없습니다.<br> 예시 코드의 경우 우리가 말하던 “복잡한 세부 구현” 은 그저 한 줄의 LINQ(PersonReport 클래스의 return 부분) 뿐이지만, 예시보다 훨씬 더 많은 함수들과 다른 클래스들을 호출해 더욱 복잡해질 수도 있을 것입니다. 

하지만 중요한 것은 복잡한 세부구현은 신경 쓸 필요가 없다는 것입니다! 디테일한 부분은 깔끔한 인터페이스를 통해 가려져 있습니다. 우리는 단지 인터페이스를 통해서 부모인 사람이 누구인지 물어보고 결과를 받아오는 것만 하면 됩니다. (get,set함수 이용)

### 다시 돌아와서, 그렇다면 API는 무엇일까요?

음…또 다른 예를 들어볼게요.<br> 다른 개발자가 작성한 어떤 코드 (아마도 우리는 잘 모르는 대규모 조직의 팀이 작성한 코드일 것입니다.) 가 있고, 그 코드는 프레임워크나 라이브러리로써 제공이 된다고 해봅시다. <br>최근의 많은 프로그래밍 언어들은 프레임워크를 가지고 있습니다. 이 프레임워크는 프로그램이라는 건물을 짓는데 필요한 블럭이라고 볼 수 있습니다. 이를 이용해 같은 기능을 하는 수천 수만 줄의 코드를 우리가 매번 다시 개발할 필요가 없게 해줍니다.

✔ C#의 경우는 .NET Framework

✔ Python의 경우 Flask/Django

✔ Javascript에는 Angular JS

등 굉장히 많은 케이스가 있죠. 

위의 코드를 다시 예로 들어봅시다. PersonReport 클래스 내의 함수 return 부분 <br>`persons.Where(x => x.Children.Count > 0).ToList();` <br>또한 LINQ가 제공하는 API ( `Where()` )를 사용하고 있음을 알 수 있습니다. 

우리는 C#의 LINQ 라이브러리가, 어떤 과정을 거쳐 persons list를 특정 조건 하에 필터링하는지 알 필요가 없습니다. 그저 어떤 조건 하에 데이터를 필터링 할 것인지 정하고, 그 조건에 따라 Where() 함수를 사용하면 되는 것입니다.



### API calls in the cloud, and the REST interface

지금까지 로컬로 끌어와 컴파일 혹은 인터프리팅 하는 라이브러리, 프레임워크에 대해 이야기를 했습니다.

하지만 만약 코드가 로컬이 아닌 클라우드 내에 있다면 어떻게 할까요?<br>물론 “클라우드” 라는 용어 자체가 중요한 것은 아닙니다. 우리는 여전히 코드에 대해 이야기하고 있습니다. 다만 이 코드가 당신의 로컬에 있는 것이 아닌 다른 컴퓨터 내에 있다는 차이죠. 

그렇다면 사용하고자 하는 코드를 직접 컴파일 할 수 있는 권한은 없을텐데, 그럼 어떻게 코드에 안전하게 접근할 수 있을까요?

![..](https://res.cloudinary.com/practicaldev/image/fetch/s--7GTIV42T--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://grantwinney.com/content/images/2017/07/nocloud.png)



여기서부터가 바로 대부분의 사람들이 알고 있는 API에 대한 설명일테죠.<br>이 세상에는 다양한 프로그래밍 언어로 작성된 수 많은 서비스들이 존재합니다. 하지만 어떻게 하면 우리가 사용하는 언어에 관계없이, 서비스에 이용되는 기능이나 서비스 자체를 쓸 수 있을 까요? <br>당연하게도 이 서비스 및 코드에 접근하기 위해 반드시 해당 프로그래밍 언어(서비스를 만든 언어)를 알아야만 하지는 않습니다. 이에 대해 여러 해결책들이 존재하고, 그 중 가장 잘 알려진 방법은 REST interface를 이용하는 것입니다.

웹페이지에 접근할 때 마다 해당 페이지의 URL에 “GET”메세지를 전달하고, 메세지를 받은 (이 세상 어딘가에 존재할) 웹 서버는 해당 페이지에 맞는 html마크업 파일을 전송해줍니다. 브라우저는 이 마크업 파일을 읽어가며 페이지를 그릴 것이고, 이 과정에서 이미지 등 페이지를 그리는데 필요한 추가적인 파일들을 “GET” 을 통해 요청하는 과정을 반복할 것입니다.

비슷한 예로 회원정보 작성을 위한 form을 채운 후 회원가입 버튼을 누르면, 브라우저는 “POST”(혹은 “PUT”) 메세지를 특정 URL("http://www.example.com/registration" 과 같은) 에 당신이 채워넣은 아이디, 성별, 이름 등의 정보를 전송합니다. 

또한 만약 당신이 웹페이지에 작성한 어떤 데이터를 지우고 싶다면, (아마도) 해당 글 옆에 있을 삭제 버튼을 클릭합니다. 버튼을 클릭하면 또 다른 특정 URL에 “DELETE” 메세지를 보내 서버 내의 해당 정보를 삭제할 것입니다.

이러한 과정을 조금 더 깔끔하게 보고 싶으시다면, [Postman](https://www.getpostman.com/)을 다운받으셔서 임의의 웹사이트 주소를 작성하시고 “GET”을 클릭해 보세요. “GET”을 통해 웹사이트에 대한 request를 보냈을 때 받을 수 있는 마크업 파일에 대한 정보를 볼 수 있습니다. 그 외에 “POST”, “DELETE” 등도 가능합니다.

![https://res.cloudinary.com/practicaldev/image/fetch/s--0z02oez1--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://grantwinney.com/content/images/2017/07/postman-get.png](https://res.cloudinary.com/practicaldev/image/fetch/s--0z02oez1--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://grantwinney.com/content/images/2017/07/postman-get.png)

이 글에서 REST가 구체적으로 어떻게 작동되는지에 대해 다루지는 않겠습니다. 

당연하게도, 브라우저에서 REST 개념을 사용할 수 있다면 다른 프로그램에서도 사용할 수 있을 것입니다.<br>우리가 만든 프로그램 또한 REST의 개념을 통해 “저 멀리 클라우드 너머에 있는” 또 다른 코드에 접근할 수 있습니다.<br> 당신이 현재 로컬에서 돌리고 있는 프로그램도 “GET” 방식을 통해 특정 url에 접근할 수 있고<br> ("http://www.example.com/users/1234"), 이 request를 받은 서버는<br> “..저 users 라는 endpoint는 지금 내게 foo라는 메소드(우리는 뭔지 몰라도 됨)를 실행시켜 1234라는 유저에게 리턴 받은 데이터를 전달하라는 말이군” 이라고 이해할 것입니다.

브라우저 예시와의 차이점이라면, <br>브라우저 처럼 html마크업 파일을 받는 대신 JSON과 같은 데이터 형태로써 원하는 데이터를 받습니다. (이에 대한 설명은 너무 길어서 생략합니다..이미 글이 너무 길어요😂)

그래서 결론은… 만약 누군가 당신에게 API가 무엇이냐고 묻는다면! (영문으로 보는게 더 직관적일 수도 있을 것 같아 원글을 함께 첨부합니다.)



An API is some code running on someone else's machine (where? how? who cares!), which they've made accessible to you. And the way you typically access it is using REST, very similar to how your web browser does it! 

**API는 내 컴퓨터가 아닌 다른 곳에서 실행되고 있는 코드를, 우리와 같은 다른 사용자들이 접근할 수 있도록 만든 것입니다. 그리고 이 API는 주로 “REST” 라는 방법을 사용합니다. 이는 웹 브라우저가 HTTP method를 통해 request/response를 주고받는 방법과 매우 유사합니다.**
