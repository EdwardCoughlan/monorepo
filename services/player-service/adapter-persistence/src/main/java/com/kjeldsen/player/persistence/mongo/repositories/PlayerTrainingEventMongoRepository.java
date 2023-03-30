package com.kjeldsen.player.persistence.mongo.repositories;

import com.kjeldsen.player.domain.PlayerId;
import com.kjeldsen.player.domain.events.EventId;
import com.kjeldsen.player.domain.events.PlayerTrainingEvent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerTrainingEventMongoRepository extends MongoRepository<PlayerTrainingEvent, EventId> {

    List<PlayerTrainingEvent> findAllByPlayerId(PlayerId playerId);

}
