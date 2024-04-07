import { useAllTeamsRepository } from '../../api/team/useAllTeamsRepository'
import Grid from '@/shared/components/Grid/Grid'
import { Box } from '@mui/material'
import { leagueColumns } from './LeagueColumns'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Moment } from 'moment'
import { useSession } from 'next-auth/react'
import { useAllPlayerMatchesRepository } from '@/pages/api/match/useAllPlayerMatchesRepository'

const PAGE_SIZE = 10

interface LeagueGridProps {}

const LeagueGrid: React.FC<LeagueGridProps> = () => {
  const { data: userData } = useSession({ required: true })

  const { allMatches } = useAllPlayerMatchesRepository(undefined, undefined, userData?.user.id)

  const { t } = useTranslation('common')
  const [selectedPage, setSelectedPage] = useState<number>(0)
  const { allTeams } = useAllTeamsRepository(selectedPage, PAGE_SIZE)

  const handleChallengeButtonClick = (id: number, date: Moment) => {
    console.log(id, date.toDate())
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        isRowSelectable={() => false}
        rows={allTeams ?? []}
        columns={leagueColumns(t, handleChallengeButtonClick, allMatches?.map((match) => match.dateTime.getTime()) ?? [])}
        paginationMode="server"
        pagination
        pageSize={PAGE_SIZE}
        hideFooter={false}
        onPageChange={(value) => setSelectedPage(value)}
        // TODO: Get total of teams from the API
        rowCount={10}
      />
    </Box>
  )
}

export { LeagueGrid }
export default LeagueGrid
