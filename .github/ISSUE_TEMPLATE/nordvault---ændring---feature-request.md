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

> 📎 Felter markeret med _Evidens:_ skal linke til det relevante artefakt (issue-kommentar, PR, fil i repo, pipeline-artefakt, GitHub Release el.lign.)

---

<details>
<summary><strong>Fase 1 — Planlægning og Risikoklassificering</strong></summary>

> Ejer: Product Owner (A/R) · Security Engineer (C/A)

- [ ] Ændringens formål og scope er dokumenteret og godkendt af Product Owner
  - _Evidens:_
- [ ] Funktionelle krav er identificeret på overordnet niveau
  - _Evidens:_
- [ ] Ikke-funktionelle krav er identificeret på overordnet niveau
  - _Evidens:_
- [ ] Indledende sikkerhedskrav er identificeret ud fra ændringstype og dataklassificering
  - _Evidens:_
- [ ] Dataklassificering er noteret (fx personoplysninger, løndata, identitetsdokumenter)
  - _Evidens:_
- [ ] Komponent- og dataflow-oversigt er dokumenteret, inkl. evt. trust boundary-ændringer
  - _Evidens:_
- [ ] Overordnede acceptkriterier er formuleret (draft) og godkendt af Product Owner og Tester
  - _Evidens:_
- [ ] Risikoklassificering er tildelt, begrundet og påsat som label (`risk:low` / `risk:medium` / `risk:high`)
  - _Evidens:_
- [ ] Skriftlig begrundelse for klassificering er tilføjet som issue-kommentar af Security Engineer
  - _Evidens:_
- [ ] Obligatoriske sikkerhedsaktiviteter for de efterfølgende faser er besluttet og dokumenteret
  - _Evidens:_
- [ ] Ved lavrisiko: forenklet proces er markeret eksplicit med label `simplified-process`
  - _Evidens:_

**Exit gate:** Alle påkrævede felter er udfyldt, risikoklassificering er påsat med begrundelse, og acceptkriterier er godkendt af Product Owner og Tester.

</details>

<details>
<summary><strong>Fase 2 — Krav og Acceptkriterier</strong></summary>

> Ejer: Product Owner (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Funktionelle krav er specificeret som user stories / backlog items og dokumenteret i GitHub
  - _Evidens:_
- [ ] Ikke-funktionelle krav er specificeret og dokumenteret
  - _Evidens:_
- [ ] Sikkerhedskrav er specificeret og eksplicit koblet til de funktionelle krav de adresserer
  - _Evidens:_
- [ ] OWASP ASVS-referencer er noteret hvor relevant
  - _Evidens:_
- [ ] Alle acceptkriterier er dokumenteret per krav og godkendt som testbare af Tester/QA
  - _Evidens:_
- [ ] Sikkerhedsrelaterede acceptkriterier er markeret og kan genfindes i fase 5
  - _Evidens:_
- [ ] Manuel vs. automatiseret verifikation er noteret per kriterie
  - _Evidens:_
- [ ] Eventuelle nye arkitekturpåvirkninger er noteret og vurderet af System/Solution Architect
  - _Evidens:_
- [ ] Security Engineer har godkendt sikkerhedskrav (ved middel/høj risiko)
  - _Evidens:_
- [ ] Product Owner har godkendt det samlede kravgrundlag
  - _Evidens:_
- [ ] Ved lavrisiko: eksplicit notat hvis ingen yderligere sikkerhedskrav er identificeret
  - _Evidens:_

**Exit gate:** Alle krav er dokumenteret og godkendt i GitHub, sikkerhedskrav valideret af Security Engineer (middel/høj), og alle acceptkriterier bekræftet testbare af Tester/QA.

</details>

<details>
<summary><strong>Fase 3 — Arkitektur og Design</strong></summary>

> Ejer: System/Solution Architect (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Arkitekturdiagram er opdateret med relevante komponenter, dataflows og trust boundaries
  - _Evidens:_
- [ ] Trusselsmodel er udarbejdet (STRIDE) med identificerede trusler, berørte aktiver og valgte kontroller
  - _Evidens:_
- [ ] Trusselsmodel er versioneret og gemt i `/docs/security/`
  - _Evidens:_
- [ ] Sikkerhedsrelaterede designbeslutninger er dokumenteret med begrundelse
  - _Evidens:_
- [ ] Sikkerhedskrav fra fase 2 er koblet til konkrete kontroller (mapping er komplet)
  - _Evidens:_
- [ ] Eventuelle restrisici er identificeret, dokumenteret og formelt accepteret af Product Owner
  - _Evidens:_
- [ ] Designreview er gennemført (Security Engineer + Engineering Lead deltager)
  - _Evidens:_
- [ ] Security Engineer har godkendt trusselsmodel og sikkerhedsarkitektur (ved middel/høj risiko)
  - _Evidens:_
- [ ] System/Solution Architect har godkendt arkitekturdesignet
  - _Evidens:_
- [ ] Ved lavrisiko uden arkitekturpåvirkning: eksplicit notat om at eksisterende arkitektur er uændret
  - _Evidens:_

**Exit gate:** Trusselsmodel godkendt (middel/høj), alle sikkerhedskrav koblet til kontroller, restrisici formelt accepteret, og arkitekturdesign godkendt af Architect.

</details>

<details>
<summary><strong>Fase 4 — Implementering og Sikker Kodning</strong></summary>

> Ejer: Engineering Lead (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Implementering følger NordVaults retningslinjer for sikker kodning
  - _Evidens:_
- [ ] Feature branch med korrekt reference til dette issue
  - _Evidens:_
- [ ] Pull request er oprettet med udfyldt PR-template og reference til issuet
  - _Evidens:_
- [ ] Labels påsat svarende til risikoklassificering
  - _Evidens:_
- [ ] SAST (CodeQL) er kørt uden ubehandlede kritiske fund
  - _Evidens:_
- [ ] SCA / afhængighedsscanning er kørt uden ubehandlede kritiske fund
  - _Evidens:_
- [ ] Hemmelighedsscanning (push protection) er aktiv og bestået
  - _Evidens:_
- [ ] Alle sikkerhedsfund er vurderet og enten rettet eller accepteret med dokumenteret begrundelse
  - _Evidens:_
- [ ] SBOM (SPDX eller CycloneDX) er genereret og gemt som pipeline-artefakt
  - _Evidens:_
- [ ] Code review gennemført og godkendt af Engineering Lead
  - _Evidens:_
- [ ] Sikkerhedsfokuseret code review gennemført og godkendt af Security Engineer (ved middel/høj risiko)
  - _Evidens:_
- [ ] Pull request er merget til main-branch via godkendt merge-proces
  - _Evidens:_

**Exit gate:** Alle scanninger kørt uden ubehandlede kritiske fund, PR godkendt af de påkrævede roller, SBOM genereret, og kode merget via den godkendte proces.

</details>

<details>
<summary><strong>Fase 5 — Test og Verificering</strong></summary>

> Ejer: Tester/QA (A/R) · Security Engineer (C/A ved middel/høj)

- [ ] Testplan er udarbejdet med reference til acceptkriterier fra fase 2
  - _Evidens:_
- [ ] Funktionel test er gennemført med resultater dokumenteret per acceptkriterie
  - _Evidens:_
- [ ] Sikkerhedsspecifik test er gennemført (ved middel/høj risiko) med metode og resultater
  - _Evidens:_
- [ ] Sikkerhedskrav fra fase 2 er markeret som verificeret i testrapport med reference til testaktivitet
  - _Evidens:_
- [ ] Alle testfund er håndteret (rettet og reverificeret, eller accepteret med begrundelse)
  - _Evidens:_
- [ ] Kritiske/høje sikkerhedsfund er ikke accepteret/eskaleret uden godkendelse fra Security Engineer
  - _Evidens:_
- [ ] Testrapport er udarbejdet og gemt i `/docs/security/` med reference til issue-ID og versionsnummer
  - _Evidens:_
- [ ] Security Engineer har godkendt sikkerhedsmæssig teststatus (ved middel/høj risiko)
  - _Evidens:_
- [ ] Product Owner har godkendt funktionel teststatus
  - _Evidens:_
- [ ] Ingen kritiske eller høje ubehandlede sikkerhedsfund eksisterer ved fasens afslutning
  - _Evidens:_

**Exit gate:** Alle acceptkriterier verificeret og dokumenteret i testrapporten, alle kritiske/høje fund håndteret, og teststatus godkendt af de påkrævede roller. Ingen ændring går videre uden en godkendt og komplet testrapport.

</details>

<details>
<summary><strong>Fase 6 — Kontrolleret Release og Deployment</strong></summary>

> Ejer: Engineering Lead (A/R) · Product Owner (A) · Security Engineer (C/A ved middel/høj)

- [ ] Releasearterfakter er samlet (testrapport, SBOM, sikkerhedsfund og deres håndtering)
  - _Evidens:_
- [ ] Releasenotater er udarbejdet med ændringslog, sikkerhedsrelevante ændringer og sikkerhedstilstand
  - _Evidens:_
- [ ] Releasenotater er gemt i `/docs/releases/` med reference til versionsnummer
  - _Evidens:_
- [ ] Engineering Lead har bekræftet at alle exit criteria fra fase 5 er opfyldt
  - _Evidens:_
- [ ] Product Owner har godkendt release forretningsmæssigt
  - _Evidens:_
- [ ] Security Engineer har godkendt sikkerhedstilstanden (ved middel/høj risiko)
  - _Evidens:_
- [ ] Deployment er gennemført og verificeret i produktionsmiljøet
  - _Evidens:_
- [ ] Smoke test efter deployment er gennemført og bestået
  - _Evidens:_
- [ ] Deployment-log er gemt som sporbar evidens (pipeline-artefakt)
  - _Evidens:_
- [ ] SBOM er arkiveret og koblet til den specifikke release
  - _Evidens:_
- [ ] Eventuelle deploymentproblemer / rollback er dokumenteret med begrundelse
  - _Evidens:_

**Exit gate:** Deployment gennemført og verificeret, smoke test bestået, alle releasearterfakter arkiveret med korrekte referencer, og godkendelseskommentarer fra de påkrævede roller dokumenteret.

</details>

<details>
<summary><strong>Fase 7 — Operations, Monitorering og Kontinuerlig Forbedring</strong></summary>

> Ejer: DevOps/Ops (A/R) · Security Engineer (R/A) — kontinuerlig fase

- [ ] Monitorerings- og loggingkonfiguration er aktiv, dokumenteret og versioneret
  - _Evidens:_
- [ ] Alerting er konfigureret og testet (notificerer Security Engineer og DevOps/Ops)
  - _Evidens:_
- [ ] Dependabot og automatiserede scanningsværktøjer er aktive for releasen
  - _Evidens:_
- [ ] Identificerede sårbarheder er dokumenteret som issues med label `sikkerhedsfund` og prioritering
  - _Evidens:_
- [ ] Sårbarhedshåndteringslog er opdateret med status (Kritisk: 72t · Høj: 14d · Middel: 90d · Lav: næste release)
  - _Evidens:_
- [ ] Accepterede restrisici er dokumenteret med begrundelse og godkendelse fra Product Owner
  - _Evidens:_
- [ ] Sikkerhedsopdateringer er distribueret og dokumenteret (GitHub Release + releasenotater)
  - _Evidens:_
- [ ] SBOM er opdateret og arkiveret for den nye release
  - _Evidens:_
- [ ] Aktivt udnyttede sårbarheder / alvorlige hændelser er rapporteret iht. CRA artikel 14 (24t notifikation, 72t opfølgning)
  - _Evidens:_
- [ ] Periodisk tilbagekobling til SSDLC'en er gennemført og omsat til konkrete backlog items
  - _Evidens:_

**Exit gate (løbende):** Sårbarhedshåndteringsloggen er opdateret og komplet, kritiske/høje sårbarheder håndteret inden for svartider, sikkerhedsopdateringer distribueret og dokumenteret, og tilbagekoblinger gennemført og sporbare. Fasen afsluttes først når produktet udgår af aktiv support.

</details>
