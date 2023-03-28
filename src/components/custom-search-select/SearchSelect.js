import styles from './SearchSelect.module.scss';
import { useState, useEffect, React } from 'react';

var wid = null;

function SearchSelect({classes, datas, fun}) {

    let [show, setShow] = useState(false)
    let [text, setText] = useState("")
    let [arrSizeTemp, setArrSizeTemp] = useState(0)
    let [arr, setArr] = useState()
    let temp;
    
    if(arrSizeTemp !== datas.length){
        setArrSizeTemp(datas.length);
        setText("")
        fun(null);
    }
    
    useEffect(() => {
        document.addEventListener("mouseup", (event) => {
            setShow(false);
        })
    },[]);

    const openOptions = (e) => {
        wid = e.target.getBoundingClientRect().width + "px";
        setArr(datas);
        setShow(!show);
    }
  
    const setValue = (val, lab) => {
        setText(lab)
        fun(val);
    }

    let filter = (e) => {
        setShow(true);
        setText(e.target.value);
        if(e.target.value !== "") {
            temp = datas.filter(row => {
                if(row.label.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){
                    return row;
                }else{
                    return null;
                }
            });
            setArr(temp);
        }else{
            setArr(datas);
        }
    }

    return (
        <>
            <input type="text" placeholder="Selecione" className={[classes, "styleInput"].join(" ")} value={text} onClick={openOptions} onChange={(e) => filter(e)} />
                <ul id="list" className={[styles.styleUl, (show ? "visible" : "invisible")].join(" ")} style={{width: wid}} >
                {arr && arr.map((data) => <li onClick={(e) => setValue(data.value, data.label)} key={data.value} >{data.label}</li>)}
            </ul>
        </>
    )
}

export default SearchSelect