package org.hpopulation;

import org.hpopulation.models.Client;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PopulationApplicationTests {

    @Test
    void shouldCreateClient() {
        var test = new Client(2, 1, 89742071,,null, "Y",
                "Owen",
                 "Bergeron",
                "Male",
                 "Duncan",
                "N",
                 "N",
                "N",
                 "Y",
                 "N",
                 "N",
                 "N",
                 "N",
                "",
                 "",
                 "28-Feb-61");
    }

}
