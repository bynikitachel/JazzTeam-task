import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TableRow from './TableRow';
import superHeroes from '../../JSON/superHeroes.json';
import {useSelector} from "react-redux";

import './index.css';

const TablePage = () => {

    const isAuthorised = useSelector(({auth}) => auth.isAuthorised);
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const allRows = superHeroes.members.length;

    useEffect(() => {
        if (!isAuthorised) {
            return navigate('/');
        }
    }, [isAuthorised, navigate]);

    const changeCounterFunc = (changeCounter) => {
        const newCounter = changeCounter ? counter + 1 : counter - 1;
        setCounter(newCounter);
    }

    const newTableHead = (key) => {
        let index = 0;
        let newKey;

        for (let i = 0; i < key.length; i++) {
            if (key[i] === key[i].toLocaleUpperCase() && !parseInt(key[index])) {
                index = i;
            }
            if (index === 0) {
                newKey = key.split('')[index].toUpperCase() + key.slice(1);
            } else {
                let firstLetter = '';
                let bigLetter = '';

                firstLetter = key.split('')[0].toUpperCase();
                bigLetter = key.split('')[index].toLowerCase();
                newKey = key.split('');
                newKey.splice(0, 1, firstLetter)
                newKey.splice(index, 1, ' ', bigLetter);
                newKey = newKey.join('');
            }
        }
        return newKey;
    }

    const getTableHead = () => {
        return Object.keys(superHeroes.members[0]).map((key, i) => {
            return <th key={i}>{newTableHead(key)}</th>
        })
    };

    const getTableRows = () => {
        return superHeroes.members.map((member, i) => (
            <TableRow
                changeCounterFunc={changeCounterFunc}
                key={i}
                member={member}
            />
        ));
    };

    const getHead = getTableHead();
    const tableRows = getTableRows();

    return isAuthorised ? (
        <div>
            <h1>Table</h1>
            <div className='container-table'>
                <div className='container-info'>
                    <div>Selected rows: {counter}</div>
                    <div>All rows: {allRows}</div>
                </div>
                <table className="table-body">
                    <thead>
                    <tr className='table-head'>
                        <th className='first-column'>Select</th>
                        {getHead}
                    </tr>
                    </thead>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    ) : null;
}

export default TablePage;