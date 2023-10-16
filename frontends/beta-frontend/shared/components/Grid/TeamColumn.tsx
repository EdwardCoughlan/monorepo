import { GridCellParams, GridValueFormatterParams, GridValueGetterParams } from '@mui/x-data-grid'
import { GridAlignment } from '@mui/x-data-grid'
import Link from 'next/link'
import { css } from '@emotion/react';
import clsx from 'clsx';

const linkStyle = css`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const teamColumn = [
  // { field: 'status', headerName: 'Health', headerAlign: 'center' as GridAlignment, align: 'center' as GridAlignment, minWidth: 70, flex: 1 },
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'center' as GridAlignment,
    minWidth: 130, flex: 1,
    renderCell: (params: GridCellParams) => <Link
      passHref href={`/player/${params.row.id}`}><a css={linkStyle}>{params.row.name}</a></Link>
  },
  { field: 'age', headerName: 'Age', headerAlign: 'center' as GridAlignment, align: 'center' as GridAlignment, minWidth: 70, flex: 1 },
  {
    // field: 'position',
    field: 'position',
    valueFormatter: (params: GridValueFormatterParams<any>) => {
      switch (params.value) {
        case 'GOALKEEPER':
          return 'GK';
        case 'DEFENDER':
          return 'DF';
        case 'MIDDLE':
          return 'MD';
        case 'FORWARD':
          return 'FW';
        default:
          return params.value;
      }
    },
    headerName: 'Position',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 70,
    flex: 1,
    // Assign Css class based on position
    cellClassName: (params: GridCellParams<string>) => {
      if (params.value == null) {
        return '';
      }

      return clsx('super-app', {
        goalkeeper: params.value === 'GOALKEEPER',
        defender: params.value === 'DEFENDER',
        middle: params.value === 'MIDDLE',
        forward: params.value === 'FORWARD',
      });
    },
  },
  {
    field: 'DEFENSE_POSITION',
    headerName: 'DP',
    minWidth: 50,
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.DEFENSE_POSITION,
  },
  {
    field: 'BALL_CONTROL',
    headerName: 'BC',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 50,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.BALL_CONTROL,
  },
  {
    field: 'SCORE',
    headerName: 'SC',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 50,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.SCORE,
  },
  {
    field: 'PASSING',
    headerName: 'PA',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 50,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.PASSING,
  },
  {
    field: 'OFFENSIVE_POSITION',
    headerName: 'OP',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 50,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.OFFENSIVE_POSITION,
  },
  {
    field: 'TACKLING',
    headerName: 'TA',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 50,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.TACKLING,
  },
  {
    field: 'CO',
    headerName: 'CO',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    minWidth: 50,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  },
  // {
  //   field: 'GP',
  //   headerName: 'GP',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'GOALS',
  //   headerName: 'GLs',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'ASSISTS',
  //   headerName: 'As',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'TAKEDOWNS',
  //   headerName: 'Ta',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'CRD',
  //   headerName: 'Crd',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'MOM',
  //   headerName: 'MoM',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'RATING',
  //   headerName: 'Rating',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   minWidth: 50,
  //   flex: 1,
  //   valueGetter: (params: GridValueGetterParams) => params.row.actualSkills.CO,
  // },
  // {
  //   field: 'playerOrder1',
  //   headerName: 'PO1',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   renderCell: (params: GridCellParams) => <PlayerOrderSelect />,
  //   minWidth: 70,
  //   flex: 1,
  // },
  // {
  //   field: 'playerOrder2',
  //   headerName: 'PO2',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   renderCell: (params: GridCellParams) => <PlayerOrderSelect />,
  //   minWidth: 70,
  //   flex: 1,
  // },
  // {
  //   field: 'playerOrder3',
  //   headerName: 'PO3',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   renderCell: (params: GridCellParams) => <PlayerOrderSelect />,
  //   minWidth: 70,
  //   flex: 1,
  // },
  // {
  //   field: 'playerOrder4',
  //   headerName: 'PO4',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   renderCell: (params: GridCellParams) => <PlayerOrderSelect />,
  //   minWidth: 70,
  //   flex: 1,
  // },
  // {
  //   field: 'playerOrder5',
  //   headerName: 'PO5',
  //   headerAlign: 'center' as GridAlignment,
  //   align: 'center' as GridAlignment,
  //   renderCell: (params: GridCellParams) => <PlayerOrderSelect />,
  //   minWidth: 70,
  //   flex: 1,
  // },
]
