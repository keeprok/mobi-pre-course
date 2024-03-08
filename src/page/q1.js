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
/*위 코드는 one User에서의 형식에 기능과 데이터값을 넣어서 실행시키는 코드입니다
 * {const} :변수 선언을 위해쓰입니다
 * {=} : 오른쪽 결과를 왼쪽에 담습니다
 * {()} : 받아온 props를 함수에 사용하게 하는부분입니다
 * {{}} : 구조 분해 할당으로 안에 들어잇는 props를 이름 그대로 사용가능하게 해줍니다
 * {[]} : useState 에 서 용도 맞춰 사용할수잇게 변수명을 구분해서 하는용도입니다
 * {users} : 현재 지정되있는값을 사용할때 사용합니다
 * {setUsers} : 현재 지정되있는값을 변형할려고할때 사용하는 변수명입니다
 * {()} : useState 에 초기값을넣기 위해서 사용합니다
 * {[]} : useState 안에 배열로 넣기 위해사용합니다
 * {{}} : useState 안에  여러개의 key값을 하나의 객체로 묵기위해 사용합니다
 * {addUser} : user를 추가하기 위해 선언한 변수명입니다
 * {preventDefault()} : addUser안에서 여러번 실행되는것을 막기위해 사용합니다
 * {target} : 지정된 태그를 지칭?하기위해 사용합니다
 * {newUser} : 새로운 userData를 객체 형태로 묶기위해 사용합니다
 * {Math.floor} : 소숫점을 반환하지않기위해 반올림하는 매서드 입니다
 * {Math.random() * 10000} : 지정해준숫자(10000)안에서 랜덤한 숫자를 배출하기위해 사용합니다
 * {[]}: setUsers를 배열로 정의 할꺼다라는의미입니다
 * {newUser, ...users} : 현재 새로운데이터를 가장 앞순서에 둘거고 기존의 데이터값을 후순위에 둘거라는의미입니다
 * {deleteUser} : 특정 데이터값을 삭제하는 변수명입니다
 * {filter} : 특정 요소를 걸러내는데 사용하는 매서드입니다
 * {user.id !== userId} : userId와 같지않은것들을 특정하는 것입니다
 * return
 * {map} : 배열을 순회해서 만들어내는?
 * {()=>deleteUser(user.id)} : 클릭되고 나서 실행되게 하기위해 =>()후반에 넣었습니다
 * {onsubmit} : type=submit에이 실행됨에따라 실행되는 메서드 입니다
 * {name} : 폼의 요소중 name을뜻합니다
 * {value} : 폼의요소중name에 해당하는 값
 *
 */
