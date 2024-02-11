DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS fraser_health;
DROP TABLE IF EXISTS interior_health;
DROP TABLE IF EXISTS island_health;
DROP TABLE IF EXISTS northern_health;
DROP TABLE IF EXISTS vancouver_coastal_health;
DROP TABLE IF EXISTS communities;

CREATE TABLE clients
(
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    year                INT         NOT NULL,
    active              CHAR(1)     NOT NULL,
    client_id           INT         NOT NULL,
    first_name          VARCHAR(50) NOT NULL,
    last_name           VARCHAR(50) NOT NULL,
    gender              VARCHAR(10) NOT NULL,
    date_of_birth       DATE        NOT NULL,
    city                VARCHAR(50) NOT NULL,
    indigenous          CHAR(1)     NOT NULL,
    PWD                 CHAR(1)     NOT NULL,
    vet                 CHAR(1)     NOT NULL,
    emergency_sheltered CHAR(1)     NOT NULL,
    bus_pass            CHAR(1)     NOT NULL,
    clothing_supplement CHAR(1)     NOT NULL,
    pet_deposit         CHAR(1)     NOT NULL,
    PSSG                CHAR(1),
    status              VARCHAR(50),
    deceased            CHAR(1),
--     community_name VARCHAR(255),
--     FOREIGN KEY (community_name) REFERENCES communities(community_name)
);


CREATE TABLE communities
(
    community_id   INT PRIMARY KEY,
    community_name VARCHAR(255)
);

CREATE TABLE fraser_health
(
    community_name VARCHAR(255),
    FOREIGN KEY (community_name) REFERENCES communities (community_name)
);

CREATE TABLE interior_health
(
    community_name VARCHAR(255),
    FOREIGN KEY (community_name) REFERENCES communities (community_name)
);

CREATE TABLE island_health
(
    community_name VARCHAR(255),
    FOREIGN KEY (community_name) REFERENCES communities (community_name)
);

CREATE TABLE northern_health
(
    community_name VARCHAR(255),
    FOREIGN KEY (community_name) REFERENCES communities (community_name)
);

CREATE TABLE vancouver_coastal_health
(
    community_name VARCHAR(255),
    FOREIGN KEY (community_name) REFERENCES communities (community_name)
);

