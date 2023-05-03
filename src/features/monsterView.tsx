import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  Monster,
  MonsterInfo,
  Id,
  monsterActions,
  monster,
  fetchMonsters,
} from './monsterSlice';
import { DataGrid, GridRowsProp, GridColDef, GridEventListener } from '@mui/x-data-grid';

export type MonsterRow = {id: Id} & MonsterInfo;

const store: Monster = {
  1: {
    name: "Charmander", hp: 70, types: ["Fire"], image: ""
  },
  6: {
    name: "Snorunt", hp: 50, types: ["Water"], image: ""
  },
  7: {
    name: "Oshawott", hp: 60, types: ["Water"], image: ""
  },
  4: {
    name: "Fennekin", hp: 60, types: ["Fire"], image: "" 
  },
  5: {
    name: "Cyndaquil", hp: 40, types: ["Fire"], image: ""
  },
  2: {
    name: "Bagon", hp: 50, types: ["Fire"], image: ""
  },
  3: {
    name: "Darumaka", hp: 70, types: ["Fire"], image: ""
  },
  8: {
    name: "Panpour", hp: 60, types: ["Water"], image: ""
  },
  9: {
    name: "Krabby", hp: 70, types: ["Water"], image: ""
  },
  10: {
    name: "Lapras", hp: 110, types: ["Water"], image: ""
  },
  11: {
    name: "Dewpider", hp: 50, types: ["Plant"], image: ""
  },
};

const MonsterView: React.FunctionComponent = () => {
  const monsterzzz = useAppSelector(monster);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMonsters());
  }, []);

  const handleEvent: GridEventListener<'rowClick'> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    dispatch(monsterActions.select(params.row.id));
  };

  const fillDataGrid = () => {
    const arr: MonsterRow[] = [];
  
    Object.entries(monsterzzz.monsters).forEach(([key, value]) => {
      arr.push({id: key as unknown as string, ...value});
    })
    
    return arr;
  };
  
  const rows: GridRowsProp = fillDataGrid();
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'hp', headerName: 'HP', width: 30 },
    { field: 'energy', headerName: 'Energy', width: 100 }
  ];

  return (
    <div className="content">
      <div className="catalog">
        <DataGrid rows={rows} columns={columns} onRowClick={handleEvent}/>
      </div>
      <div className="bio">
        <h3>Selected Monster: {monsterzzz.selectedId}</h3>
          {monsterzzz.loading && <div>Loading...</div>}
          {!monsterzzz.loading && monsterzzz.error && <div>Error: {monsterzzz.error}</div>}
          {!monsterzzz.loading && monsterzzz.monsters && Object.keys(monsterzzz.monsters).length ? (
            <ul style={{margin: '5px', border: '1px solid black', borderRadius: '5px', padding: '5px'}}>
              {Object.keys(monsterzzz.monsters).map((key) => {
                return <li key={key}>{`${key}, ${monsterzzz.monsters[key].name}`}</li>
              })}
            </ul>
          ) : null}
      </div>
    </div>
  );
}

MonsterView.displayName = 'MonsterView';

export default MonsterView;
