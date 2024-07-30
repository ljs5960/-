import './Editor.css';
import {useEffect, useState} from "react";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import {emotionList, getFormattedDate} from "../util";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        date: '',
        emotionId: 3,
        content: '',
    });

    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    }, [initData]);

    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };

    const handleOnGoBack = () => {
        navigate(-1);
    }

    const handleSubmit = () => {
        onSubmit(state);
    };

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    };

    return (
        <div className='Editor'>
            <div className='editor_section'>
                <h4>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    <input type='date' value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className='editor_section'>
                <h4>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {emotionList.map((it) => (
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id}
                        />
                    ))}
                </div>
            </div>
            <div className='editor_section'>
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea
                        placeholder='Write your diary here'
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className='editor_section bottom_section'>
                <Button text='취소' onCLick={handleOnGoBack}/>
                <Button text='저장' type='positive' onCLick={handleSubmit} />
            </div>
        </div>
    );
};
export default Editor;