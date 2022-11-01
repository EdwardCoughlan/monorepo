import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Typography } from '@mui/material'
import Grid from '@/shared/components/Grid/Grid'
import { sampleRows, sampleColumns } from '@/shared/components/Grid/PlayerGrid'
import PlayerDetails from '@/shared/components/PlayerDetails'
import { samplePlayer } from '@/data/SamplePlayer'

const Player: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kjeldsen</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Box>
        <PlayerDetails player={samplePlayer} />
        <Box sx={{ marginBottom: '1rem' }}>
          <Button variant="contained" color="secondary" sx={{ marginRight: '8px', marginBottom: '8px' }}>
            <strong>Main Action</strong>
          </Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: '8px', marginBottom: '8px' }}>
            <strong>Other Action</strong>
          </Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: '8px', marginBottom: '8px' }}>
            <strong>Other Action</strong>
          </Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: '8px', marginBottom: '8px' }}>
            <strong>Other Action</strong>
          </Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: '8px', marginBottom: '8px' }}>
            <strong>...</strong>
          </Button>
        </Box>

        <Typography sx={{ marginBottom: '1rem', borderBottom: '1px solid' }}>Current Season</Typography>
        <Grid rows={sampleRows} columns={sampleColumns} />
        <Typography sx={{ marginBottom: '1rem', marginTop: '2rem', borderBottom: '1px solid' }}>Previous Season</Typography>
        <Grid rows={sampleRows} columns={sampleColumns} />
        <Typography sx={{ marginBottom: '1rem', marginTop: '2rem', borderBottom: '1px solid' }}>This Season</Typography>

        <Grid rows={sampleRows} columns={sampleColumns} />
      </Box>
    </>
  )
}

export default Player
