package com.kjeldsen.player.domain;

import lombok.Getter;

@Getter
public enum PlayerPosition {

    CENTRE_BACK,
    AERIAL_CENTRE_BACK,
    SWEEPER,
    LEFT_BACK,
    RIGHT_BACK,
    LEFT_WINGBACK,
    RIGHT_WINGBACK,

    DEFENSIVE_MIDFIELDER,
    CENTRE_MIDFIELDER,
    LEFT_MIDFIELDER,
    RIGHT_MIDFIELDER,
    LEFT_WINGER,
    OFFENSIVE_MIDFIELDER,
    RIGHT_WINGER,

    FORWARD,
    AERIAL_FORWARD,
    STRIKER,
    AERIAL_STRIKER,

    GOALKEEPER
}
