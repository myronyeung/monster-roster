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

const store = [
  {
    id: 1, name: "Charmander", hp: 70, energy: "Fire", image: "" 
  },
  {
    id: 6, name: "Snorunt", hp: 50, energy: "Water", image: "" 
  },
  {
    id: 7, name: "Oshawott", hp: 60, energy: "Water", image: "" 
  },
  {
    id: 4, name: "Fennekin", hp: 60, energy: "Fire", image: "" 
  },
  {
    id: 5, name: "Cyndaquil", hp: 40, energy: "Fire", image: "" 
  },
  {
    id: 2, name: "Bagon", hp: 50, energy: "Fire", image: "" 
  },
  {
    id: 3, name: "Darumaka", hp: 70, energy: "Fire", image: "" 
  },
  {
    id: 8, name: "Panpour", hp: 60, energy: "Water", image: "" 
  },
  {
    id: 9, name: "Krabby", hp: 70, energy: "Water", image: "" 
  },
  {
    id: 10, name: "Lapras", hp: 110, energy: "Water", image: "" 
  },
  {
    id: 11, name: "Dewpider", hp: 50, energy: "Plant", image: "" 
  }
]

const rows: GridRowsProp = store.map((monster: Monster) => {
  return monster;
});

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
