package com.kjeldsen.player.persistence.mongo.repositories;

import com.kjeldsen.player.domain.events.PlayerTrainingBloomEvent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerTrainingBloomEventMongoRepository extends MongoRepository<PlayerTrainingBloomEvent, String> {
}
