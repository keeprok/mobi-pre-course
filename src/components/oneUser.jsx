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
