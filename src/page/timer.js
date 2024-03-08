import { useEffect, useRef, useState } from "react";

const Timer = () => {
    const [showTimer, setShowTimer] = useState(false);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef();
    const countRef = useRef(0);
    const handleOnOff = () => {
        setShowTimer((prev) => !prev);
    };
    useEffect(() => {
        if (showTimer) {
            alert("Tada!");
        } else {
            alert("okay, Bye...");
        }
    }, [showTimer]);
    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
    }, [isActive]);
    const handleStart = () => {
        setIsActive(true);
    };
    const handleStop = () => {
        setIsActive(false);
    };
    const handleReset = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setTime(0);
            countRef.current = 0;
        }
    };
    const handleTenAdd = () => {
        setTime((time) => time + 10);
        countRef.current += 1;
        alert(`증가되었습니다,${countRef.current}`);
    };

    return (
        <div>
            <button onClick={handleOnOff}>
                {showTimer ? "숨기기" : "보이기"}
            </button>
            {showTimer && (
                <>
                    <div>{time}</div>
                    <button onClick={handleStart}>시작</button>
                    <button onClick={handleStop}>중지</button>
                    <button onClick={handleReset}>초기화</button>
                    <button onClick={handleTenAdd}>10초증가</button>
                </>
            )}
        </div>
    );
};
export default Timer;
// (1) 타이머 보이기 버튼을 누르면 타이머가 '마운트'되며 alert로 Tada!가 나타나야해요.//(trueflase...?)
// (2) 숨기기 버튼을 누르면 타이머가 '언마운트'되며 alert로 Okay, Bye...가 나타나야해요.
// (3) 타이머에는 시작, 중지, 초기화, 10초 증가가 있어요!

// 	- 시작: 타이머가 시작됩니다. 중지 상태에서 시작버튼을 누르면 타이머가 재시작 됩니다.
//   - 중지: 타이머가 중지됩니다 (시간 고정)
//   - 초기화: 타이머가 0으로 초기화 됩니다. 타이머가 실행 중이었다면 타이머가 중지됩니다.
//   - 10초 증가: 타이머 실행, 중지 여부와 상관없이 10초가 증가합니다.

// (4) 카운트가 UI에서 증가할 때마다 "증가되었습니다, {count}"가 출력 되어야해요.
// (5) useRef를 사용하지 않아도 구현이 가능합니다. 그러나 ref, effect, state를 모두 사용해야해요.
//마운트, 언마운트, 의존성배열?
/*타이머가 보여지는 버튼에따라 기능을 작동하며 , 기능은 시작,중지,초기화,10초증가가 있습니다
 * {showTimer} : 타이머가 보여짐의 상태를 보관하는 변수명입니다
 * {false} : 현재 상태는 보여지지않는것을 설정하기 위해 두었습니다
 * {time} : 화면에 보여지는 시간을 담는 변수명입니다
 * {isActive} : 타이머가 작동하는것을 설정하기위한 변수명임니다
 * {timerRef} : 시간이 흐는 것을 조정하는것을 담는 변수명입니다
 * {useRef} : 안에 담긴 변수?내용물? 이바뀔때마다 랜더링되진않지만 변화하는것을 감지하고 저장하는 훅함수
 * {countRef} : handleTenAdd 가 몇번 눌렸는지 체크하는 변수명입니다
 * {handleOnOff} : setShowTimer 가 prev할수있게 하는 변수명및 버튼 이벤트 입니다
 * {useEffect} : 처음 화면이 켜젔을때 실행되게 하는 훅삼수
 * {[]} : useEffect안에 있는[]안에 들어잇는 것이 변화하거나 실행될때마다 useEffect가 재실행
 * {current} : Ref값을 바꾸기위해 사용하는 함수
 * {setInterval} : 정해둔 시간에 흐름에따라 변화를 줄수잇게사용하는거
 * {1000} : 1초에 한번 실행하나는 숫자 1000ms
 * {setTime} : time의 useState안의 내용물을 변화 시켜줄때쓰는 변수명
 * {clearInterval} : 저장되잇는 setInterval을 지워줘서 정지시키게 해주는것
 * {handleStart} : timer을 시작하게하는 변수명
 * {handleStop} : timer을 멈추게 하는 변수명
 * {handleReset} : timer가 시작되잇으면 timer을 멈추게 하고 멈춰저있으면 초기화하는 변수명
 * {handleTenAdd} : timer가 어떤상태건간에 10초늘려 주는 변수명
 * {&&} : 제시된 함수가 true일경우 뒤에나오는 함수를 실행한다
 */
