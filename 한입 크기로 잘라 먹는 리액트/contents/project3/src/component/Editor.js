import './Editor.css';
import {useState} from "react";
import Button from "./Button";

const Editor = ({ initData, onSubmit }) => {
    const [state, setState] = useState({
        date: '',
        emotionId: 3,
        content: '',
    });

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

    const handleSubmit = () => {
        onSubmit(state);
    };

    return (
        <div className='Editor'>
            <div className='editor_section'>
                <h4>Date</h4>
                <div className='input_wrapper'>
                    <input type='date' value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className='editor_section'>
                <h4>Emotion</h4>
            </div>
            <div className='editor_section'>
                <h4>Diary</h4>
                <div className='input_wrapper'>
                    <textarea
                        placeholder='Write your diary here'
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className='editor_section bottom_section'>
                <Button text='취소'/>
                <Button text='저장' type='positive' onCLick={handleSubmit} />
            </div>
        </div>
    );
};
export default Editor;