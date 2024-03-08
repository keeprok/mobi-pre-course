import { useState } from "react";

const SubPage = () => {
    const [productList, setProductList] = useState([
        {
            prodId: 1,
            place: "서울시 역삼구",
            isLiked: false,
            name: "구멍난 양말",
            price: 500000,
            User: {
                nickname: "zl존성용123",
            },
        },

        {
            prodId: 2,
            place: "서울시 역삼구",
            isLiked: false,
            name: "구멍난 양말",
            price: 500000,
            User: {
                nickname: "zl존성용123",
            },
        },
    ]);
    const [product, setProduct] = useState({
        prodId: 3,
        place: "서울시 역삼구",
        isLiked: false,
        name: "구멍난 양말",
        price: 500000,
        User: {
            nickname: "zl존성용123",
        },
    });
    // const newLiked = [...productList];
    // newLiked[1].isLiked = true;
    // setProductList(newLiked);
    // console.log(productList); 불변성으로 안되는걸 알게됨 그래서 찾아봄
    const updateIsLike = () => {
        setProductList((currentList) =>
            currentList.map((product) =>
                product.prodId === 2 ? { ...product, isLiked: true } : product
            )
        );
    };
    const updateNickname = () => {
        setProductList((currentList) =>
            currentList.map((product) =>
                product.prodId === 1
                    ? {
                          ...product,
                          User: { ...product.User, nickname: "성함" },
                      }
                    : product
            )
        );
    };
    const updateIsLikes = () => {
        setProduct((product) => ({ ...product, isLiked: true }));
    };
    return (
        <div>
            {productList.map((product, index) => (
                <li key={index}>
                    <p>제품 ID: {product.prodId}</p>
                    <p>위치: {product.place}</p>
                    <p>
                        좋아요 상태:{product.isLiked ? "좋아요" : "좋아요 안함"}
                    </p>
                    <p>제품명: {product.name}</p>
                    <p>가격: {product.price}원</p>
                    <p>사용자 닉네임: {product.User.nickname}</p>
                </li>
            ))}

            <p>제품 ID: {product.prodId}</p>
            <p>위치: {product.place}</p>
            <p>좋아요 상태:{product.isLiked ? "좋아요" : "좋아요 안함"}</p>
            <p>제품명: {product.name}</p>
            <p>가격: {product.price}원</p>
            <p>사용자 닉네임: {product.User.nickname}</p>

            <button onClick={updateIsLike}>선택</button>
            <button onClick={updateNickname}>닉네임</button>
            <button onClick={updateIsLikes}>선택</button>
        </div>
    );
};
export default SubPage;
/*useState안의 값을 변경하는 코드입니다
 *{updateIsLike} : isLike 상태를 변환시켜주는 함수입니다
 *{(currentList.map())} : 배열중 하나의 객체를 특정하기위해 map을 돌려 찾앗습니다
 *{? : } :  true ,false가 실행되는것을 구분하기 위해 사용합니다
 *{updateNickname} : nickName을 변환시켜주는 함수입니다
 *{updateIsLikes} : 배열이 아니고 객체 하나만있으면 어떻게 되는 미리 실험 해볼려고 넣은 함수입니다
 *{{product.isLiked ? "좋아요" : "좋아요 안함"}} :true false상태를 ui로 보기위해 넣어둔 것입니다
 */
