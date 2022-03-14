# Weather Serching 

이번 프로젝트 목표는

NEXT JS를 활용

Static Props  => 기본 지역을 서울로 해서 서울 날씨와 앞으로 +N 일 날씨 정보를 추가
Server Side Props => 도시를 검색해서 해당 도시의 날씨 정보, 그리고 가능하면 추가 여행팁을 붙여보자.

두 방식을 확실하게 익히기. 및
SSR방식을 활용한 백엔드에서 redirect / rewrite 사용해보기


2022.03.14 

1. Static Props 와 Server Side Props를 활용해 언제 데이터를 가져올지, Asset 을 다룰지 선택할 수 있는 장점이 있다.
단, Next Page 타입(page component) 내에서만 사용이 가능하고, 두 개를 동시에 사용할 수 없다.

2. NEXT JS 를 통해 SSR 개념을 익히다보면 클라이언트 단계와 서버단계, 브라우저에서의 렌더링 타이밍에 대한 개념이 구체적으로 어떻게 되는지 체감하기 쉽다.
게다가 자체적인 HTML tag Extension 들이 있는데, prerendering 이 기본이기 때문에 어떤 상황에서 활용해야하는게 좋은지 판단해야한다.
무조건 server-side가 아닌 state사용을 해야하거나, 유저의 동의를 얻어야 하는 경우 등등 client에서 구현해야할 부분을 미리 계획해나가야 할 것같다.
