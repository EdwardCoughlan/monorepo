package com.kjeldsen.player.domain.provider;

import java.time.Instant;

public class InstantProvider {

    public static Instant now() {
        return Instant.now();
    }

}
