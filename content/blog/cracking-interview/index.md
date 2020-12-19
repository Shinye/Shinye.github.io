---
title: Back to the basic
date: "2020-12-20T00:50:00.121Z"
category: "love"
---

하나씩 대답해볼게요

### CS Basic
* BFS 와 DFS 의 차이
* 해시테이블의 시간 복잡도에 대해 설명해주세요
* 퀵소트의 시간복잡도?
* 스테이블/언스테이블 소트?
* Linked List 와 array 에서 특정 요소를 찾는 시간 복잡도
* 메모리 구조에서 스택과 힙의 차이
* thread-safe 의 의미 / thread-safe 하지 않은 객체를 멀티 스레드 환경에서 사용할 때 문제점 및 해결 방법
* TCP / UDP?
* Horizontal vs. Vertical scaling? (scale out vs. scale up)
* JAVA
    * Map 을 iterate 할 때 순서가 어떻게 될까?
    * HashMap 은 thread-safe 한가? 대안은?
    * Overloading 과 Overriding 의 차이
    * 가비지 컬렉션이란?  동작 방법은? 가비지 컬렉터의 종류?
    * Checked exception vs Runtime Exception
### Database
* ACID
* Transaction isolation level
* 인덱스가 무엇인지? 왜 쓰는지? 어떻게 만들어지는지?
* NoSQL 의 장단점
### OOP / FP
* SOLID
* 인터페이스와 추상 클래스의 차이
* Imperative vs. Declarative programming
* Design Pattern
    * 디자인 패턴이란?
    * 알고 있는 디자인패턴에 대해 설명해주세요
    * 명시적으로 직접 객체를 생성하는 것을 대체하는 대표적인 방법에는 어떤 것이 있을까? 그 장점은?
### Distributed System / MSA
* CAP
* Eventual Consistency?
* Zipkin 과 같은 분산 트레이싱 시스템의 작동 원리
* 서킷브레이커의 작동 원리
* 서비스 디스커버리의 종류 및 차이점
* MSA 환경에서 메세지 큐를 이용했을 때 얻을 수 있는 장점
### Security
* SQL Injection 이란? 방지 방법?
* DB 에 사용자 비밀번호를 저장하는 방법?
* SSL / HTTPS?
### Spring
* @Transactional 로 마킹된 로직 안에서 다른 스레드를 만들었을 때 트랜잭션이 정상 동작할까? 이유는?
* 메서드 안에서 동일한 클래스 내부의 함수를 호출할 때에 @Transactional 이 동작하지 않는 이유
* JPA
    * Entity Lifecycle
    * findById 를 호출했을 때 데이터를 어디에서 가져올까?
    * 2nd level cache 란?
* Webflux 가 MVC 보다 효율적인가? 이유는?
### Open Questions
* 8자리의 전화번호를 저장하는 가장 효율적인 방법
    * 공간 사용률을 최소화
    * 되도륵 빠르게 검색이 가능해야 함