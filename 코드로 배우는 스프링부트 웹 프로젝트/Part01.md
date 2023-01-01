# Part 1. 스프링 부트 도전하기
## ORM (Object Relational Mapping)
`객체지향 패러다임을 관계형 데이터베이스에 보존하는 기술`   
__객체지향__ 의 구조가 __관계형 데이터베이스__ 와 유사하다는 점에서 시작 

- 클래스(class) -> 테이블(table)
- 인스턴스(instance) -> 튜플(row) 
- 관계(relation) -> 참조(reference)

이러한 __객체지향__ 과 __관계형__ 사이의 변환 기법이  `ORM`

## JPA (Java Persistence API)
- ORM을 Java에 맞게 사용하는 __스펙__
- 따라서 ORM이 좀 더 상위 개념, JPA는 Java에 국한된 개념

## Hibernate
- __단순 스펙인 JPA를 구현한 회사의 프레임워크 이름__
- 단독으로 프로젝트 적용 가능한 독립된 프레임워크 -> Spring Boot 뿐만 아니라 Spring에 연동 가능

## Spring Data JPA
- Spring Boot에서 Hibernate를 쉽게 사용하도록 추가적인 API를 제공하는 라이브러리

### @Entity
- Spring Data JPA에서 엔티티 클래스로 사용하기 위한 필수 어노테이션  
- 해당 클래스가 엔티티를 위한 클래스이며, 해당 클래스의 인스턴스들이 JPA로 관리되는 엔티티 객체라는 의미

### @Table
- `@Entity`와 같이 사용 가능한 어노테이션
- DB에서 엔티티 클래스를 __어떠한 테이블로 생성할 것인지__ 에 대한 정보를 담는 역할

### @Id
- 특정 필드를 PK로 지정

### @GeneratedValue
- PK의 값 지정 방법
  - AUTO, __IDENTITY__, SEQUENCE, TABLE 등 존재

### @Column
- 추가적인 필드(칼럼)을 사용 할 경우 지정
- 칼럼으로 생성하지 않을 경우 `@Transient` 사용

## JpaRepository
- 단순 JpaRepository 상속 만으로 JPA 사용 가능
```java
public interface MemoRepository extends JpaRepository<Memo, Long> {
    
}
```

### 조회 작업
- findById()
  - Optional 타입 반환 -> 한번 더 결과가 존재하는지 체크
- getOne()
  - 실제 객체가 필요한 순간까지 SQL 실행 X
  - 트랜잭션 처리를 위한 `@Transactional` 어노테이션 필수

### 수정 작업
- save()
  1. @Id 값 일치여부 확인 
  2. insert 혹은 update 작업 처리

### 삭제 작업
- deleteById()

## 쿼리 메소드
- 메서드 이름 자체가 쿼리의 구문으로 처리되는 기능
  - `findByMnoBetweenOrderByMnoDesc` 등 과 같은 형태

## @Query 어노테이션
- 쿼리 메소드로 해결할 수 없는 복잡한 쿼리 수행시 사용
- 일반 SQL과 약간 다른 JPQL(Java Persistence Query Language) 사용
  - 예시) `@Query("select m from Memo m order by m.mno desc)`

## Thymeleaf
- 실제 화면 구성을 위한 기술
- Model에 담긴 객체를 화면에서 처리하기 용이
- .html 파일로 생성

### 반복문
- th:each = "변수: ${목록}"
```html
<li th:each="dto : ${list}">
  [[${dto}]]
</li>
```

### 제어문
- th:if ~ unless
```html
<li th:each="dto, state : ${list}" th:if="${dto.sno % 5 == 0}">
  [[${dto}]]
</li>
```

### 링크
- th:href= "@{주소}"
```html
<a th:href="@{/sample/exView}">
  [[${dto}]]
</a>
```

