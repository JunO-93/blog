import './App.css';
import {useState} from "react";

function App() {

    // Destructurung 문법
    // state 문법을 쓰면 변수에 담긴 데이터가 변경되면 state를 쓰는 html은 자동으로 재렌더링 된다.
    // 자주 변경되는 것만 state로 하면 좋음.
    let [title, titleState] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [good, numberMod] = useState( [0,1,2]);
    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">`
                <h4 style={ {color: 'red', fontSize: '20px'} }>React Blog</h4>
            </div>
            <button onClick={ () =>{
                let titleSort = [...title];
                titleSort.sort();
                titleState(titleSort);
            }}>가나다순정렬</button>
            <button onClick={ ()=>{
                let titleCopy = [...title];
                titleCopy[0]= '여자 코트 추천';
                titleState(titleCopy)
            }} > 글 수정</button>

            {/*<div className="list">*/}
            {/*    <h4 onClick={ () =>*/}
            {/*        setModal(!modal)*/}
            {/*    }>{ title[0]}<span onClick={ ()=>{ numberMod( good+1 )} }>👍</span> { good }</h4>*/}
            {/*    <p>1월 30일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{ title[1] }</h4>*/}
            {/*    <p>1월 30일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{ title[2] }</h4>*/}
            {/*    <p>1월 30일 발행</p>*/}
            {/*</div>*/}

            {/* 같은 형태의 html을 반복하고 싶을 때 사용하는 map함수*/}
            {
                title.map(function(index,i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => setModal(!modal) }>{ index }
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
                modal === true ? <Modal/> : null
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

const Modal = () => {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
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
