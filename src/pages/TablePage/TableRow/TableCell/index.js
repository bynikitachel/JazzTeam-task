import { useRef, useState } from 'react';
import CellChange from './CellChange';

const TableCell = ({ keyI, value }) => {

    const [isChanged, setIsChanged] = useState(false);
    const [cellValue, setCellValue] = useState(value);
    const tableTd = useRef(null);

    const changeTd = () => {
        setIsChanged(true);
    }

    const cellText = cellValue ? cellValue : value;

    const change = isChanged ?
        <CellChange
            tableTd={tableTd}
            isChanged={isChanged}
            setIsChanged={setIsChanged}
            cellValue={cellValue}
            value={value}
            setCellValue={setCellValue}
        /> : cellText;

    return (
        <td key={keyI} ref={tableTd} onDoubleClick={() => changeTd()}>{change}</td>
    )
}

export default TableCell;