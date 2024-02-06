import './App.css';
import {useState} from "react";

function App() {

    // Destructurung 문법
    // state 문법을 쓰면 변수에 담긴 데이터가 변경되면 state를 쓰는 html은 자동으로 재렌더링 된다.
    // 자주 변경되는 것만 state로 하면 좋음.
    let [title, titleState] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [good, numberMod] = useState( [0,1,2]);
    let [modal, setModal] = useState(false);
    let [postTitle,setPostTitle] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">`
                <h4 style={ { fontSize: '20px'} }>React Blog</h4>
            </div>
            <button onClick={ () =>{
                let titleSort = [...title];
                titleSort.sort();
                titleState(titleSort);
            }}>가나다순정렬</button>

            {/* 같은 형태의 html을 반복하고 싶을 때 사용하는 map함수*/}
            {
                title.map(function(index,i) {

                    return (
                        <div className="list" key={i}>
                            <h4 onClick={ () => {setModal(!modal); setPostTitle(i)} }>{ index }
                                <span onClick={() => {
                                    let copy = [...good];
                                    copy[i] += 1;
                                    numberMod(copy)
                                }}> 👍</span> {good[i]}
                            </h4>
                            <p>1월 30일 발행</p>
                        </div>);
                })
            }

            {/*component를 태그형태로 삽입*/}
            {
                modal === true ? <Modal postTitle = { postTitle } title={ title } titleState= { titleState } modTitle = '여자 코트 추천'/> : null
            }
            <Footer/>
        </div>
    );
}

// component
/*function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}*/

const Modal = ({title,postTitle,titleState,modTitle}) => {
    return (
        <div className="modal">
            <h4>{ title[postTitle] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={ () => {
                let copy = [...title];
                copy[0] = modTitle;
                titleState(copy);
            } }>글수정버튼</button>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <p>여기는 footer 영역입니다.</p>
        </div>
    )
}

export default App;
