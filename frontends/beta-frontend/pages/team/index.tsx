import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@mui/material'
import Grid from '@/shared/components/Grid/Grid'
import { SampleTeam } from '@/data/SampleTeam'
import TeamDetails from '@/shared/components/TeamDetails'
import PlayerTactics from '@/shared/components/PlayerTactics'
import TeamTactics from '@/shared/components/TeamTactics'
import { samplePlayerColumn } from '@/data/samplePlayerColumn'
import { getPlayers } from '../api/players/players'

const Team: NextPage = () => {
  const data = getPlayers()

  return (
    <>
      <Head>
        <title>Kjeldsen</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Box>
        <Box sx={{ display: 'flex', marginBottom: '2rem', alignItems: 'center' }}>
          <TeamDetails {...SampleTeam} />
          <PlayerTactics />
          <TeamTactics />
        </Box>
        <Box sx={{ minWidth: '80vw' }}>
          <Grid rows={data} columns={samplePlayerColumn} />
        </Box>
      </Box>
    </>
  )
}

export default Team
