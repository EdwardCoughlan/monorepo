import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@mui/material'
import Grid from '@/shared/components/Grid/Grid'
import { GridColDef } from '@mui/x-data-grid'
import useSWR from 'swr'
import { SampleTeam } from 'data/SampleTeam'
import TeamDetails from '@/shared/components/TeamDetails'
import PlayerTactics from '@/shared/components/PlayerTactics'
import TeamTactics from '@/shared/components/TeamTactics'
import fetcher from '@/libs/fetcher'

const Team: NextPage = () => {
  const { data, isLoading } = useSWR('/players', fetcher)

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      type: 'string',
      sortable: true
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      sortable: true
    },
    {
      field: 'position',
      headerName: 'Position',
      type: 'string',
      sortable: true
    }
  ]

  return (
    <>
      <Head>
        <title>Kjeldsen</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Box>
        <Box sx={{ display: 'flex', marginBottom: '2rem', alignItems: 'center' }}>
          <TeamDetails {...SampleTeam} />
          <PlayerTactics />
          <TeamTactics />
        </Box>
        {isLoading ? <span>Loading</span> : <Grid rows={data || []} columns={columns} />}
      </Box>
    </>
  )
}

export default Team
