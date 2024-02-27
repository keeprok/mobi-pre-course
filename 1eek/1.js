// 1. 상태의 추가, 조회, 갱신, 삭제하기 문제입니다.
// 목표: 나는 상태의 변경을 자유롭게 할 수 있다.

const user = {
    name: "김성용",
    nickName: "zl존성용123",
    age: 20,
};

const users = [
    {
        id: 1,
        name: "김성용",
        nickName: "zl존성용123",
        age: 20,
    },
    {
        id: 2,
        name: "신짱구",
        nickName: "나는야신짱구",
        age: 20,
    },
    {
        id: 3,
        name: "신짱아",
        nickName: "짱구여동생",
        age: 20,
    },
];

// q1. users 배열을 순회하여 jsx element인 요소의 길이만큼 <OneUser/>를 반환하세요
// 		OneUser에는 name과 nickname, age가 보여지며 삭제 버튼이 필요합니다.

// q2. nickName과 age는 입력 받은 값이며 id는 랜덤한 숫자입니다.
// 		이를 이용하여 새로운 user 객체를 jsx element의 상단에 노출되도록 추가해보세요

// q3. 각 <OneUser/>의 삭제 버튼을 클릭하면 users의 선택 유저가 삭제됩니다.
