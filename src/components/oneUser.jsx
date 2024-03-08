const OneUser = ({ name, nickName, age, close, upDate }) => {
    return (
        <div>
            <div>
                이름: {name}
                <br />
                별명 : {nickName}
                <br />
                나이 : {age}
            </div>

            <button onClick={close}>삭제</button>
            <button onClick={upDate}>수정</button>
        </div>
    );
};
export default OneUser;
/* 위 코드는
 * {const} :변수 선언을 위해쓰입니다
 * {=} : 오른쪽 결과를 왼쪽에 담습니다
 * {()} : 받아온 props를 정의 해주는 부분입니다
 * {{}} : 구조 분해 할당으로 안에 들어잇는 props를 이름 그대로 사용가능하게 해줘
 * {=>} : 화살표 함수를 뜻할때 사용
 * {{}} : 함수가 동작할 내용을 적어주는곳
 return
 * {button} : 버튼태그입니다 
 * {onclick} : 클릭될시 {}안에 있는 함수가 실행됩니다 
 * {export} : 다른 컴포넌트에서 import하여 사용할수있게 해줌
 * {default} : import하는부분에서 이름을 마음대로 정의할수있어
 */
