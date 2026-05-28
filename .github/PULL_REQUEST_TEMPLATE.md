<!--
NordVault Pull Request Template
Reference: Fase 4 §6.4 - Oprettelse og udfyldning af pull request

Templaten kræver eksplicit stillingtagen til sikkerhedsrelevante aspekter,
så enforcement-laget understøttes af bevidst, dokumenteret review.
-->

## Sammenhæng

<!-- Reference: Fase 4 §6.4 - PR skal linkes til tilknyttet Issue. -->

Closes #

## Beskrivelse

<!--s Kort: hvad ændrer denne PR, og hvorfor? -->



## Type af ændring

- [ ] Ny funktionalitet
- [ ] Bugfix
- [ ] Refaktorering (ingen funktionel ændring)
- [ ] Dokumentation
- [ ] CI/CD eller workflow-ændring
- [ ] Dependency-opdatering
- [ ] Andet:

## Risikoklassificering

<!--
Reference: Fase 1 §6.7. Vælg én. Sæt det tilsvarende GitHub-label
(risk:low / risk:medium / risk:high) på PR'en.
-->

- [ ] **risk:low** — ingen ændringer i sikkerhedsrelevante komponenter, autentifikation, autorisation eller eksponerede interfaces
- [ ] **risk:medium** — ændringer i eksisterende sikkerhedsrelevante flows, nye integrationer, udvidelse af databehandling eller ændringer i adgangskontrol
- [ ] **risk:high** — ændringer i autentifikation, autorisation, kryptering, eksponering af nye API-endpoints mod følsomme data, ændringer i trust boundaries, eller behandling af særligt følsomme personoplysninger

## Sikkerhedsrelevans

<!--
Reference: Fase 4 §6.4 - eksplicit stillingtagen til om ændringen
påvirker sikkerhedsrelevante områder. Markér alle der gælder.
-->

Påvirker denne PR følgende?

- [ ] Autentifikation (login, JWT, session-håndtering)
- [ ] Autorisation (adgangskontrol, ejerskab, roller)
- [ ] Databehandling (personoplysninger, kryptering, lagring)
- [ ] Eksponerede interfaces (nye eller ændrede API-endpoints)
- [ ] Trust boundaries (services-grænser, ekstern integration)
- [ ] Tredjeparts-afhængigheder (nye dependencies, version-bumps)
- [ ] Ingen af ovenstående

Hvis ét eller flere felter er markeret, skal trusselsmodelnotat (se nedenfor) udfyldes.

## Verifikation

<!-- Reference: Fase 4 §6.5 og §6.6 - håndtering af automatiserede fund. -->

- [ ] Tests kører lokalt
- [ ] CI er grønt (build, lint, test)
- [ ] CodeQL har ikke rapporteret nye fund (eller fund er dokumenteret accepteret)
- [ ] dependency-review er grøn (eller licens/CVE-fund er dokumenteret accepteret)
- [ ] Eventuelle accepterede fund har begrundelse i kommentar nedenfor

## Threat-model og designnotater

<!--
Reference: Fase 3 §6.2 - trusselsmodel.
Udfyld kun ved risk:medium og risk:high. Slet sektionen ved risk:low.
-->

**Identificerede trusler:**

**Kontroller der adresserer dem:**

**Eventuelle restrisici (skal accepteres af Product Owner):**

## Yderligere kontekst

<!-- Skærmbilleder, breaking changes, særlige overvejelser, links til diskussion. -->