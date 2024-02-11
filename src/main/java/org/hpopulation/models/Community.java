package org.hpopulation.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public record Community(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        Long community_id,

        String community_name
) {
}
