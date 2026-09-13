# Fase 4: Implementering og Sikker Kodning

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| Engineering Lead | A/R | Ejer implementeringsprocessen, code review og teknisk kvalitet |
| Udviklere | R | Implementerer ændringer i overensstemmelse med retningslinjer for sikker kodning og designbeslutninger fra fase 3 |
| Security Engineer | C/A ved middel/høj risiko | Validerer sikkerhedsrelevant implementering og vurderer sikkerhedsfund fra automatiserede scanninger |
| System/Solution Architect | C | Rådgiver ved arkitekturafvigelser og uforudsete designproblemer under implementering |
| Tester/QA | C | Følger implementeringen med henblik på testforberedelse og identificerer testimplikationer |
| DevOps/Ops | C/R | Vedligeholder CI/CD-konfiguration og sikrer at sikkerhedsgates er aktive i pipeline |

## 1. Formål

Fase 4 er der hvor designbeslutningerne fra fase 3 omsættes til kode. Fasens formål er at sikre at implementeringen sker i overensstemmelse med de sikkerhedsarkitekturmæssige beslutninger der er truffet, og at der ikke introduceres nye sårbarheder i kodebasen undervejs.

Det sker gennem en kombination af strukturerede manuelle aktiviteter og automatiserede kontroller. Retningslinjer for sikker kodning sætter rammen for hvordan udviklerne skriver kode. Pull request-processen med sikkerhedsfokuserede templates og required reviewers sikrer at ændringer bliver gennemgået inden de merges. Automatiserede scanninger i CI/CD-pipelinen kører ved hver pull request og blokerer merge ved kritiske fund. Tilsammen udgør disse mekanismer det enforcement-lag der medierer de sikkerhedsrelevante handlinger i implementeringsfasen.

## 2. Roller og Ansvar

### 2.1 Engineering Lead

- Ejer implementeringsprocessen og er ansvarlig for at code review gennemføres konsistent
- Godkender pull requests inden merge til main-branch
- Eskalerer sikkerhedsrelevante fund fra code review eller automatiserede scanninger til **Security Engineer**
- Godkendelsesautoritet for merge til main-branch

**Ansvarlig for følgende:**

- Godkendte pull requests dokumenteret i GitHub
- Eskalerede sikkerhedsfund dokumenteret som GitHub Issues med korrekte labels

### 2.2 Udviklere

- Implementerer ændringer i overensstemmelse med NordVaults retningslinjer for sikker kodning
- Opretter pull requests med udfyldt PR-template, herunder beskrivelse af sikkerhedsrelevante ændringer
- Håndterer fund fra automatiserede scanninger og dokumenterer beslutninger om accepterede fund
- Refererer til det tilknyttede GitHub Issue i pull request-beskrivelsen så sporbarhed opretholdes

**Ansvarlig for følgende:**

- Udfyldt pull request med reference til issue og beskrivelse af ændringen
- Håndtering af automatiserede fund dokumenteret i PR-kommentarer

### 2.3 Security Engineer

- Gennemfører sikkerhedsfokuseret code review ved middel og høj risiko ændringer
- Vurderer og prioriterer sikkerhedsfund fra automatiserede scanninger
- Godkender at sikkerhedsrelevant implementering er i overensstemmelse med trusselsmodellen og designbeslutningerne fra fase 3
- Godkendelsesautoritet for sikkerhedsrelevant implementering ved middel/høj risiko

**Ansvarlig for følgende:**

- Sikkerhedsfokuseret code review dokumenteret som PR-kommentar ved middel/høj risiko
- Vurdering og prioritering af automatiserede fund dokumenteret i GitHub

### 2.4 System/Solution Architect

- Rådgiver ved implementeringsproblemer der kan kræve afvigelse fra det godkendte design
- Godkender arkitekturafvigelser der opstår under implementering

**Ansvarlig for følgende:**

- Godkendelse af arkitekturafvigelser dokumenteret som PR-kommentar eller issue-kommentar

### 2.5 Tester/QA

- Følger implementeringen løbende og opdaterer testscenarier ved ændringer i implementeringen
- Identificerer testimplikationer der skal adresseres i fase 5

**Ansvarlig for følgende:**

- Opdaterede testscenarier dokumenteret i tilknyttede test-issues

### 2.6 DevOps/Ops

- Vedligeholder og konfigurerer CI/CD-pipelines og sikkerhedsgates
- Sikrer at SAST, SCA og hemmelighedsscanning er aktive og konfigureret korrekt
- Håndterer pipeline-fejl og konfigurationsproblemer der blokerer udviklernes workflow

**Ansvarlig for følgende:**

- CI/CD-konfiguration dokumenteret og versioneret i repository
- Pipeline-fejl og konfigurationsændringer dokumenteret

## 3. Scope

Fasen gælder for al implementering af ændringer der er godkendt gennem fase 1 til 3. Det omfatter ny funktionalitet, refaktorering, ændringer i eksisterende sikkerhedsrelevante komponenter og dependency-opdateringer der introduceres som led i en ændring.

For lavrisiko ændringer er fuld automatiseret scanning obligatorisk, men sikkerhedsfokuseret code review fra **Security Engineer** er ikke påkrævet. **Engineering Lead** er tilstrækkelig reviewer, og PR-templaten kan anvendes i forkortet form.

For middel og høj risiko ændringer er sikkerhedsfokuseret code review fra **Security Engineer** obligatorisk, og alle automatiserede fund skal være vurderet og dokumenteret inden pull request kan godkendes til merge.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- Fase 3 er afsluttet med godkendt arkitekturdesign og trusselsmodel
- Sikkerhedskrav fra fase 2 og designbeslutninger fra fase 3 er tilgængelige for udviklerne
- Feature branch er oprettet med korrekt reference til GitHub Issue
- CI/CD-pipeline med sikkerhedsgates er aktiv og konfigureret korrekt

### 4.2 Exit Criteria

- Al implementering er gennemført og alle automatiserede scanninger er kørt uden ubehandlede kritiske fund
- Pull request er oprettet med udfyldt PR-template og reference til tilknyttet issue
- Code review er gennemført og godkendt af **Engineering Lead**
- Sikkerhedsfokuseret code review er gennemført og godkendt af **Security Engineer** ved middel/høj risiko
- Alle sikkerhedsfund fra automatiserede scanninger er vurderet og enten rettet eller accepteret med dokumenteret begrundelse
- SBOM er genereret og gemt som pipeline-artefakt
- Pull request er merget til main-branch via godkendt merge-proces

## 5. Process Trigger

Fasen udløses når:

- Fase 3 er afsluttet med godkendt design
- En feature branch oprettes og implementering påbegyndes
- En dependency-opdatering fra Dependabot kræver manuel vurdering og implementering
- En sikkerhedsopdatering skal implementeres som følge af en identificeret sårbarhed i drift

## 6. Obligatoriske aktiviteter

### 6.1 Implementering efter retningslinjer for sikker kodning

Udviklerne implementerer ændringen i overensstemmelse med NordVaults retningslinjer for sikker kodning. Retningslinjerne dækker de kodepraksisser der er mest relevante for NordVaults TypeScript- og Node.js-stack, herunder inputvalidering, outputencoding, håndtering af autentifikations- og sessionslogik, sikker brug af tredjepartsbiblioteker og undgåelse af kendte sårbarhedsmønstre fra OWASP Top 10. Retningslinjerne er tilgængelige i repositoryets [`/docs/security/`](./security/)-mappe og udgør det fælles referencepunkt for både udviklere og reviewers.

**Artefakter fra aktiviteten:**

- Implementeret kode på feature branch med reference til GitHub Issue
- Commit-historik med beskrivende commit-beskeder der refererer til issue-ID

### 6.2 Automatiserede sikkerhedsscanninger i CI/CD

Ved push til feature branch og ved oprettelse af pull request kører CI/CD-pipelinen automatisk et sæt sikkerhedsscanninger. For NordVault omfatter det som minimum:

- **SAST** via CodeQL til statisk analyse af TypeScript- og Node.js-kode for kendte sårbarhedsmønstre
- **SCA og afhængighedsscanning** via Dependabot og en SCA-scanning i pipeline til identifikation af kendte sårbarheder i tredjepartsafhængigheder
- **Hemmelighedsscanning** via GitHubs push protection der blokerer push hvis hemmeligheder detekteres i koden

Scanninger der identificerer kritiske eller høje fund blokerer merge via required status checks indtil fund er håndteret. Resultater uploades som pipeline-artefakter og udgør sporbar evidens for at scanning er gennemført.

**Artefakter fra aktiviteten:**

- SAST-rapport uploadet som GitHub Actions artifact
- SCA-rapport uploadet som GitHub Actions artifact
- Hemmelighedsscanningslog
- Pipeline-kørselslog med status for alle sikkerhedskontroller

### 6.3 Generering af SBOM

Som del af CI/CD-pipelinen genereres en Software Bill of Materials for den aktuelle build. SBOM'en dokumenterer alle afhængigheder og deres versioner og udgør et centralt artefakt i forhold til CRA-relaterede krav om software supply chain security. SBOM'en gemmes som pipeline-artefakt og versioneres sammen med den tilhørende release.

**Artefakter fra aktiviteten:**

- SBOM i SPDX- eller CycloneDX-format uploadet som GitHub Actions artifact

### 6.4 Oprettelse og udfyldning af pull request

Udvikleren opretter en pull request mod main-branch ved brug af NordVaults PR-template. Templaten kræver at udvikleren forholder sig eksplicit til sikkerhedsrelevante aspekter af ændringen, herunder om ændringen påvirker autentifikation, autorisation, databehandling eller eksponerede interfaces, samt om automatiserede fund er håndteret. Pull request linkes til det tilknyttede GitHub Issue og relevante labels påsættes baseret på risikoklassificeringen fra fase 1.

**Artefakter fra aktiviteten:**

- Oprettet pull request med udfyldt PR-template
- Labels påsat svarende til risikoklassificering
- Reference til tilknyttet GitHub Issue

### 6.5 Code review

**Engineering Lead** gennemfører code review med fokus på både kodekvalitet og sikkerhed. Reviewet verificerer at implementeringen er i overensstemmelse med designbeslutningerne fra fase 3, at retningslinjer for sikker kodning er fulgt, og at PR-templaten er udfyldt korrekt. Ved middel og høj risiko gennemfører **Security Engineer** et dedikeret sikkerhedsfokuseret code review, hvor trusselsmodellen fra fase 3 bruges som referencepunkt for at vurdere om implementeringen håndterer de identificerede trusler korrekt.

Fund fra code review dokumenteres som PR-kommentarer. Fund der kræver rettelse skal adresseres og bekræftes af reviewer inden godkendelse.

**Artefakter fra aktiviteten:**

- PR-kommentarer fra **Engineering Lead** med godkendelse
- PR-kommentarer fra **Security Engineer** med sikkerhedsfokuseret review ved middel/høj risiko
- Dokumenterede og lukkede review-fund

### 6.6 Håndtering af sikkerhedsfund

Alle fund fra automatiserede scanninger og code review skal vurderes og håndteres inden pull request kan godkendes. Et fund kan håndteres på tre måder. Det rettes i koden, det accepteres med en dokumenteret begrundelse hvis det vurderes som et falsk positivt eller en accepteret risiko, eller det eskaleres som et separat sikkerhedsrelateret issue til håndtering i en efterfølgende ændring. Ubehandlede kritiske fund blokerer merge via required status checks og kan ikke omgås uden en eksplicit bypass-beslutning godkendt af **Security Engineer**.

**Artefakter fra aktiviteten:**

- Håndtering af fund dokumenteret som PR-kommentarer
- Accepterede fund dokumenteret med begrundelse
- Eskalerede fund oprettet som separate GitHub Issues med label `sikkerhedsfund`

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 4 er:

- Implementeret og merget kode på main-branch
- Udfyldt og godkendt pull request med reference til GitHub Issue
- SAST-rapport, SCA-rapport og hemmelighedsscanningslog uploadet som pipeline-artefakter
- SBOM i SPDX- eller CycloneDX-format
- Dokumenterede og håndterede sikkerhedsfund
- Godkendelseskommentarer fra **Engineering Lead** og **Security Engineer**

### 7.2 Exit Gate

Fasen er først afsluttet når alle automatiserede sikkerhedsscanninger er kørt uden ubehandlede kritiske fund, pull request er godkendt af **Engineering Lead** og **Security Engineer** ved middel/høj risiko, SBOM er genereret, og koden er merget til main-branch via den godkendte merge-proces. Direkte push til main-branch uden pull request er ikke tilladt og håndhæves via branch protection rules.

## 8. Compliance & Enforcement

Enforcement i fase 4 er det mest lagdelte i hele SSDLC'en, da det er her størstedelen af kodeændringerne introduceres og dermed også hvor risikoen for at introducere nye sårbarheder er størst.

På repository-niveau håndhæves fasen via branch protection rules på main-branch. Direkte push er blokeret og alle ændringer skal gennem en pull request. Required status checks sikrer at SAST, SCA og hemmelighedsscanning er kørt og bestået inden merge er muligt. Required reviewers sikrer at **Engineering Lead** og **Security Engineer** ved middel og høj risiko har godkendt pull requesten.

På pipeline-niveau konfigureres sikkerhedsgates til at fejle ved kritiske fund så merge blokeres automatisk. Pipeline-konfigurationen er selv versionsstyret i repository og kan ikke ændres uden en pull request, hvilket forhindrer at gates deaktiveres uden sporbarhed.

PR-templaten er implementeret som en GitHub pull request template og indlæses automatisk ved oprettelse af en ny pull request. Felterne er ikke teknisk obligatoriske i GitHub, men exit gate-kravet om udfyldt template håndhæves af reviewer som del af godkendelsesprocessen. Et pull request med en mangelfuldt udfyldt template må ikke godkendes af **Engineering Lead**.
