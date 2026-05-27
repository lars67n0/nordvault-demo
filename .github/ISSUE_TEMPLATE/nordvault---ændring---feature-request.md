---
name: NordVault - Ændring / Feature Request
about: "... Test"
title: "[Item-ID/Name]"
labels: ''
assignees: ''

---

---
title: "[CHANGE] "
labels: []
assignees: []
---

## Oversigt

**Formål / forretningsmæssig begrundelse:**
<!-- Beskriv kort hvad ændringen går ud på og hvorfor -->

**Scope / afgrænsning:**
<!-- Hvad er inkluderet, og hvad er eksplicit ude af scope -->

**Risikoklassificering:** `risk:low` / `risk:medium` / `risk:high`
<!-- Sæt det relevante label på issuet -->

---

<details>
<summary><strong>Fase 1 — Planlægning og Risikoklassificering</strong></summary>

> Ejer: Product Owner (A/R) · Security Engineer (C/A)

- [ ] Ændringens formål og scope er dokumenteret og godkendt af Product Owner
- [ ] Funktionelle krav er identificeret på overordnet niveau
- [ ] Ikke-funktionelle krav er identificeret på overordnet niveau
- [ ] Indledende sikkerhedskrav er identificeret ud fra ændringstype og dataklassificering
- [ ] Dataklassificering er noteret (fx personoplysninger, løndata, identitetsdokumenter)
- [ ] Komponent- og dataflow-oversigt er dokumenteret, inkl. evt. trust boundary-ændringer
- [ ] Overordnede acceptkriterier er formuleret (markeret som draft) og godkendt af Product Owner og Tester
- [ ] Risikoklassificering er tildelt, begrundet og påsat som label (`risk:low` / `risk:medium` / `risk:high`)
- [ ] Skriftlig begrundelse for klassificering er tilføjet som issue-kommentar af Security Engineer
- [ ] Obligatoriske sikkerhedsaktiviteter for de efterfølgende faser er besluttet og dokumenteret
- [ ] Ved lavrisiko: forenklet proces er markeret eksplicit med label `simplified-process`

**Exit gate:** Alle påkrævede felter er udfyldt, risikoklassificering er påsat med begrundelse, og acceptkriterier er godkendt af Product Owner og Tester.

</details>

<details>
<summary><strong>Fase 2 — Krav og Acceptkriterier</strong></summary>

> Ejer: Product Owner (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Funktionelle krav er specificeret som user stories / backlog items og dokumenteret i GitHub
- [ ] Ikke-funktionelle krav er specificeret og dokumenteret
- [ ] Sikkerhedskrav er specificeret og eksplicit koblet til de funktionelle krav de adresserer
- [ ] OWASP ASVS-referencer er noteret hvor relevant
- [ ] Alle acceptkriterier er dokumenteret per krav og godkendt som testbare af Tester/QA
- [ ] Sikkerhedsrelaterede acceptkriterier er markeret og kan genfindes i fase 5
- [ ] Manuel vs. automatiseret verifikation er noteret per kriterie
- [ ] Eventuelle nye arkitekturpåvirkninger er noteret og vurderet af System/Solution Architect
- [ ] Security Engineer har godkendt sikkerhedskrav (ved middel/høj risiko)
- [ ] Product Owner har godkendt det samlede kravgrundlag
- [ ] Ved lavrisiko: eksplicit notat hvis ingen yderligere sikkerhedskrav er identificeret

**Exit gate:** Alle krav er dokumenteret og godkendt i GitHub, sikkerhedskrav valideret af Security Engineer (middel/høj), og alle acceptkriterier bekræftet testbare af Tester/QA.

</details>

<details>
<summary><strong>Fase 3 — Arkitektur og Design</strong></summary>

> Ejer: System/Solution Architect (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Arkitekturdiagram er opdateret med relevante komponenter, dataflows og trust boundaries
- [ ] Trusselsmodel er udarbejdet (STRIDE) med identificerede trusler, berørte aktiver og valgte kontroller
- [ ] Trusselsmodel er versioneret og gemt i `/docs/security/`
- [ ] Sikkerhedsrelaterede designbeslutninger er dokumenteret med begrundelse
- [ ] Sikkerhedskrav fra fase 2 er koblet til konkrete kontroller (mapping er komplet)
- [ ] Eventuelle restrisici er identificeret, dokumenteret og formelt accepteret af Product Owner
- [ ] Designreview er gennemført (Security Engineer + Engineering Lead deltager)
- [ ] Security Engineer har godkendt trusselsmodel og sikkerhedsarkitektur (ved middel/høj risiko)
- [ ] System/Solution Architect har godkendt arkitekturdesignet
- [ ] Ved lavrisiko uden arkitekturpåvirkning: eksplicit notat om at eksisterende arkitektur er uændret

**Exit gate:** Trusselsmodel godkendt (middel/høj), alle sikkerhedskrav koblet til kontroller, restrisici formelt accepteret, og arkitekturdesign godkendt af Architect.

</details>

<details>
<summary><strong>Fase 4 — Implementering og Sikker Kodning</strong></summary>

> Ejer: Engineering Lead (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Implementering følger NordVaults retningslinjer for sikker kodning
- [ ] Feature branch med korrekt reference til dette issue
- [ ] Pull request er oprettet med udfyldt PR-template og reference til issuet
- [ ] Labels påsat svarende til risikoklassificering
- [ ] SAST (CodeQL) er kørt uden ubehandlede kritiske fund
- [ ] SCA / afhængighedsscanning er kørt uden ubehandlede kritiske fund
- [ ] Hemmelighedsscanning (push protection) er aktiv og bestået
- [ ] Alle sikkerhedsfund er vurderet og enten rettet eller accepteret med dokumenteret begrundelse
- [ ] SBOM (SPDX eller CycloneDX) er genereret og gemt som pipeline-artefakt
- [ ] Code review gennemført og godkendt af Engineering Lead
- [ ] Sikkerhedsfokuseret code review gennemført og godkendt af Security Engineer (ved middel/høj risiko)
- [ ] Pull request er merget til main-branch via godkendt merge-proces

**Exit gate:** Alle scanninger kørt uden ubehandlede kritiske fund, PR godkendt af de påkrævede roller, SBOM genereret, og kode merget via den godkendte proces.

</details>

<details>
<summary><strong>Fase 5 — Test og Verificering</strong></summary>

> Ejer: Tester/QA (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Testplan er udarbejdet med reference til acceptkriterier fra fase 2
- [ ] Funktionel test er gennemført med resultater dokumenteret per acceptkriterie
- [ ] Sikkerhedsspecifik test er gennemført (ved middel/høj risiko) med metode og resultater
- [ ] Sikkerhedskrav fra fase 2 er markeret som verificeret i testrapport med reference til testaktivitet
- [ ] Alle testfund er håndteret (rettet og reverificeret, eller accepteret med begrundelse)
- [ ] Kritiske/høje sikkerhedsfund er ikke accepteret/eskaleret uden godkendelse fra Security Engineer
- [ ] Testrapport er udarbejdet og gemt i `/docs/security/` med reference til issue-ID og versionsnummer
- [ ] Security Engineer har godkendt sikkerhedsmæssig teststatus (ved middel/høj risiko)
- [ ] Product Owner har godkendt funktionel teststatus
- [ ] Ingen kritiske eller høje ubehandlede sikkerhedsfund eksisterer ved fasens afslutning

**Exit gate:** Alle acceptkriterier verificeret og dokumenteret i testrapporten, alle kritiske/høje fund håndteret, og teststatus godkendt af de påkrævede roller. Ingen ændring går videre uden en godkendt og komplet testrapport.

</details>

<details>
<summary><strong>Fase 6 — Kontrolleret Release og Deployment</strong></summary>

> Ejer: Engineering Lead (A/R) · Product Owner (A) · Security Engineer (C/A ved middel/høj)

- [ ] Releasearterfakter er samlet (testrapport, SBOM, sikkerhedsfund og deres håndtering)
- [ ] Releasenotater er udarbejdet med ændringslog, sikkerhedsrelevante ændringer og sikkerhedstilstand
- [ ] Releasenotater er gemt i `/docs/releases/` med reference til versionsnummer
- [ ] Engineering Lead har bekræftet at alle exit criteria fra fase 5 er opfyldt
- [ ] Product Owner har godkendt release forretningsmæssigt
- [ ] Security Engineer har godkendt sikkerhedstilstanden (ved middel/høj risiko)
- [ ] Deployment er gennemført og verificeret i produktionsmiljøet
- [ ] Smoke test efter deployment er gennemført og bestået
- [ ] Deployment-log er gemt som sporbar evidens (pipeline-artefakt)
- [ ] SBOM er arkiveret og koblet til den specifikke release
- [ ] Eventuelle deploymentproblemer / rollback er dokumenteret med begrundelse

**Exit gate:** Deployment gennemført og verificeret, smoke test bestået, alle releasearterfakter arkiveret med korrekte referencer, og godkendelseskommentarer fra de påkrævede roller dokumenteret.

</details>

<details>
<summary><strong>Fase 7 — Operations, Monitorering og Kontinuerlig Forbedring</strong></summary>

> Ejer: DevOps/Ops (A/R) · Security Engineer (R/A) — kontinuerlig fase

- [ ] Monitorerings- og loggingkonfiguration er aktiv, dokumenteret og versioneret
- [ ] Alerting er konfigureret og testet (notificerer Security Engineer og DevOps/Ops)
- [ ] Dependabot og automatiserede scanningsværktøjer er aktive for releasen
- [ ] Identificerede sårbarheder er dokumenteret som issues med label `sikkerhedsfund` og prioritering
- [ ] Sårbarhedshåndteringslog er opdateret med status (Kritisk: 72t · Høj: 14d · Middel: 90d · Lav: næste release)
- [ ] Accepterede restrisici er dokumenteret med begrundelse og godkendelse fra Product Owner
- [ ] Sikkerhedsopdateringer er distribueret og dokumenteret (GitHub Release + releasenotater)
- [ ] SBOM er opdateret og arkiveret for den nye release
- [ ] Aktivt udnyttede sårbarheder / alvorlige hændelser er rapporteret iht. CRA artikel 14 (24t notifikation, 72t opfølgning)
- [ ] Periodisk tilbagekobling til SSDLC'en er gennemført og omsat til konkrete backlog items

**Exit gate (løbende):** Sårbarhedshåndteringsloggen er opdateret og komplet, kritiske/høje sårbarheder håndteret inden for svartider, sikkerhedsopdateringer distribueret og dokumenteret, og tilbagekoblinger gennemført og sporbare. Fasen afsluttes først når produktet udgår af aktiv support.

</details>
