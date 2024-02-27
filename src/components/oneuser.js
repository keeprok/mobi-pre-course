const OneUser = ({ name, nickName, age, close }) => {
    return (
        <div>
            <div>
                이름: {name}
                <br />
                별명 : {nickName}
                <br />
                나이 : {age}
            </div>

            <button onclick={close}>삭제</button>
        </div>
    );
};
export default OneUser;
