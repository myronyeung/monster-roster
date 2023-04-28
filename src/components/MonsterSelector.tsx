import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  selectId,
  select,
} from './monsterSelectorSlice';
import { DataGrid, GridRowsProp, GridColDef, GridEventListener } from '@mui/x-data-grid';

type Monster = {
  id: number
  name: string
  hp: number
  energy: string
  image: string
}

type Id = string;
interface MonsterInfo {
  name: string;
  hp: number;
  energy: string
  image: string
}

const store: Record<Id, MonsterInfo> = {
  1: {
    name: "Charmander", hp: 70, energy: "Fire", image: ""
  },
  6: {
    name: "Snorunt", hp: 50, energy: "Water", image: ""
  },
  7: {
    name: "Oshawott", hp: 60, energy: "Water", image: ""
  },
  4: {
    name: "Fennekin", hp: 60, energy: "Fire", image: "" 
  },
  5: {
    name: "Cyndaquil", hp: 40, energy: "Fire", image: ""
  },
  2: {
    name: "Bagon", hp: 50, energy: "Fire", image: ""
  },
  3: {
    name: "Darumaka", hp: 70, energy: "Fire", image: ""
  },
  8: {
    name: "Panpour", hp: 60, energy: "Water", image: ""
  },
  9: {
    name: "Krabby", hp: 70, energy: "Water", image: ""
  },
  10: {
    name: "Lapras", hp: 110, energy: "Water", image: ""
  },
  11: {
    name: "Dewpider", hp: 50, energy: "Plant", image: ""
  },
}

const fillDataGrid = () => {
  const arr: Monster[] = [];

  Object.entries(store).forEach(([key, value]) => {
    arr.push({id: key as unknown as number, ...value});
  })
  
  return arr;
};

const rows: GridRowsProp = fillDataGrid();

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 30 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'hp', headerName: 'HP', width: 30 },
  { field: 'energy', headerName: 'Energy', width: 100 }
];

export function MonsterSelector() {
  const monster = useAppSelector(select);
  const dispatch = useAppDispatch();

  const handleEvent: GridEventListener<'rowClick'> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    dispatch(selectId(params.row.id));
  };

  return (

    <div className="content">
      <div className="catalog">
        <DataGrid rows={rows} columns={columns} onRowClick={handleEvent}/>
      </div>
      <div className="bio">
        <h3>Selected Id: {monster.id}</h3>
      </div>
    </div>
  );
}
