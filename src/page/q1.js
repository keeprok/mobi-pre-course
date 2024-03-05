// 1. 상태의 추가, 조회, 갱신, 삭제하기 문제입니다.
// 목표: 나는 상태의 변경을 자유롭게 할 수 있다.

import { useState } from "react";
import OneUser from "../components/oneUser";

const MainPage = () => {
    const [users, setUsers] = useState([
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
    ]);
    const addUser = (e) => {
        e.preventDefault();
        const Data = e.target;
        const newUser = {
            id: Math.floor(Math.random() * 10000),
            name: Data.name.value,
            nickName: Data.nickName.value,
            age: Data.age.value,
        };
        setUsers([newUser, ...users]);
    };
    const deleteUser = (userId) => {
        // console.log("삭제기원");
        setUsers(users.filter((user) => user.id !== userId));
    };
    const upDateNickname = () => {};
    return (
        <div>
            {users.map((user) => (
                <>
                    <OneUser
                        name={user.name}
                        nickName={user.nickName}
                        age={user.age}
                        // close={deleteUser(user.id)}
                        close={() => deleteUser(user.id)}
                        upDate={upDateNickname}
                    />
                    <br />
                </>
            ))}
            <form onSubmit={addUser}>
                <input type="text" name="name" placeholder="이름" />
                <input type="text" name="nickName" placeholder="닉네임" />
                <input type="number" name="age" placeholder="나이" />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};
export default MainPage;

// q1. users 배열을 순회하여 jsx element인 요소의 길이만큼 <OneUser/>를 반환하세요
// 		OneUser에는 name과 nickname, age가 보여지며 삭제 버튼이 필요합니다.

// q2. nickName과 age는 입력 받은 값이며 id는 랜덤한 숫자입니다.
// 		이를 이용하여 새로운 user 객체를 jsx element의 상단에 노출되도록 추가해보세요 //추가및 조회

// q3. 각 <OneUser/>의 삭제 버튼을 클릭하면 users의 선택 유저가 삭제됩니다.
