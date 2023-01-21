package com.kjeldsen.match.application.usecases;

import com.kjeldsen.match.domain.event.EventId;
import com.kjeldsen.match.domain.event.PlayStartedEvent;
import com.kjeldsen.match.domain.id.DuelId;
import com.kjeldsen.match.domain.id.OpportunityId;
import com.kjeldsen.match.domain.id.PlayId;
import com.kjeldsen.match.domain.id.PlayerId;
import com.kjeldsen.match.domain.provider.InstantProvider;
import com.kjeldsen.match.domain.type.PlayAction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayStartUseCase {

    public void start(OpportunityId opportunityId) {
        // TODO add validations
        // TODO logs


        List<PlayerId> playerIds = List.of();
        PlayAction playAction = PlayAction.PASS;
        List<DuelId> duelsIds = List.of();

        PlayStartedEvent.builder()
            .eventId(EventId.generate())
            .date(InstantProvider.now())
            .playId(PlayId.generate())
            .opportunityId(opportunityId)
            // TODO following values should be generated by the engine
            .players(playerIds)
            .action(playAction)
            .duelsIds(duelsIds)
            .build();
    }

}
