import { useEffect, useRef, useState } from 'react';
import './index.css';

const CellChange = ({ setIsChanged, cellValue, setCellValue }) => {

    const [newCellValue, setNewCellValue] = useState(cellValue);
    const textarea = useRef(null);

    useEffect(() => {
        const onClick = e => textarea.current?.contains(e.target) || setIsChanged(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [setIsChanged]);

    const handleCloseChange = () => {
        changeCellValue(cellValue);
        setIsChanged(false);
    }

    const handleOkChange = () => {
        changeCellValue(newCellValue);
        setIsChanged(false);

    }

    const changeCellValue = (e) => {
        setCellValue(e);
    }

    return (
        <div className='container-change'>
            <textarea
                autoFocus
                ref={textarea}
                value={newCellValue}
                onChange={e => setNewCellValue(e.target.value)}
            />
            <div className='container-textarea-buttons'>
                <button className='cell-ok' onClick={() => handleOkChange()}>OK</button>
                <button className='cell-cancel' onClick={() => handleCloseChange()}>CANCEL</button>
            </div>
        </div>
    )
}

export default CellChange;