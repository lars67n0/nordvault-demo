# Fase 1: Planlægning og Risikoklassificering

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| Product Owner | A/R | Ejer ændringens formål, scope, funktionelle krav og prioritering |
| Engineering Lead | R | Vurderer teknisk påvirkning, non-funktionelle krav og berørte systemer |
| System/Solution Arkitekt | C/A ved middel/høj risiko | Vurderer arkitekturpåvirkning og ændringer i systemgrænser |
| Security Engineer | C/A | Bidrager til sikkerhedskrav, risikoklassificering og sikkerhedsreview ved middel/høj risiko |
| Tester/QA | C | Bidrager til testbare acceptkriterier og indledende testvurdering |
| DevOps/Ops | C | Vurderer påvirkning på CI/CD, deployment, logging, monitorering og drift |

## 1. Formål

Fasen etablerer det fælles grundlag for en ændring, inden konkret kravspecificering og design påbegyndes. Det indebærer at afklare ændringens formål og scope, identificere funktionelle og ikke-funktionelle krav på overordnet niveau, formulere indledende security requirements og tildele ændringen en risikoklassificering.

Risikoklassificeringen er fasens primære styringsoutput og afgør hvilke sikkerhedsaktiviteter og governance-krav der er obligatoriske i de efterfølgende faser. Den sikrer at kontrolniveauet er proportionalt med den faktiske risiko.

## 2. Roller og Ansvar

### 2.1 Product Owner

- Beskriver ændringens formål, forretningsmæssige rationale og ønskede mål
- Definerer og prioriterer overordnede funktionelle krav
- Godkender at acceptkriterier matcher forretningsformålet
- Godkendelsesautoritet for scope og prioritering

**Ansvarlig for følgende:**

- Udfyldt GitHub Issue med formål, scope og forretningsmæssig begrundelse
- Godkendte acceptkriterier dokumenteret i Issue

### 2.2 Engineering Lead

- Vurderer teknisk gennemførlighed og estimerer implementeringsomfang
- Identificerer overordnede ikke-funktionelle krav, herunder ydeevne, skalerbarhed og vedligeholdbarhed
- Identificerer berørte systemkomponenter og tekniske afhængigheder
- Bidrager til acceptkriterier på teknisk niveau

**Ansvarlig for følgende:**

- Indledende ikke-funktionelle krav dokumenteret i GitHub Issue og klart markeret som draft
- Tekniske acceptkriterier

### 2.3 System/Solution Arkitekt

- Vurderer arkitekturpåvirkning og ændringer i systemgrænser
- Identificerer berørte integrationer, dataflows og trust boundaries
- Godkendelsesautoritet for arkitekturpåvirkning ved middel/høj risiko

**Ansvarlig for følgende:**

- Komponent- og dataflowoversigt med eventuelle trust boundary-ændringer dokumenteret i GitHub Issue

### 2.4 Security Engineer

- Bidrager til identifikation af sikkerhedskrav baseret på ændringstype og dataklassificering
- Udfører eller validerer risikoklassificeringen ved middel/høj risiko
- Vurderer behov for sikkerhedsreviews og threat modeling i efterfølgende faser
- Godkendelsesautoritet for risikoklassificering

**Ansvarlig for følgende:**

- Indledende sikkerhedskrav dokumenteret i GitHub Issue
- GitHub Labels `risk:low` / `risk:medium` / `risk:high` med skriftlig begrundelse som issue-kommentar
- Issue-kommentar med beslutning om obligatoriske sikkerhedsaktiviteter i efterfølgende faser

### 2.5 Tester/QA

- Bidrager til at formulere testbare acceptkriterier
- Vurderer testbarhed og identificerer indledende testovervejelser

**Ansvarlig for følgende:**

- Godkendelse af acceptkriterier som testbare, dokumenteret som issue-kommentar

### 2.6 DevOps/Ops

- Vurderer påvirkning på CI/CD-pipelines, deployment, logging og monitorering der hvor det er relevant
- Identificerer driftsmæssige krav og afhængigheder tidligt i forløbet

**Ansvarlig for følgende:**

- Driftsmæssige krav og CI/CD-påvirkning dokumenteret som afsnit eller kommentar i GitHub Issue

## 3. Scope

Fasen gælder for alle nye features, større ændringer, ændringer i sikkerhedsrelevante komponenter, og ændringer der påvirker autentifikation, autorisation, databehandling, integrationer eller eksisterende trust boundaries.

Mindre vedligeholdelsesopgaver og lavrisiko bugfixes som ikke berører sikkerhedsrelevante komponenter kan gennemløbe en forenklet version af fasen, hvor risikoklassificering sættes til lav og sikkerhedskrav ikke kræves dokumenteret separat. Denne forenkling skal eksplicit markeres i issue trackeren.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- En change request, feature request eller backlog item er oprettet i issue trackeren
- Et overordnet formål og foreløbigt scope er beskrevet

### 4.2 Exit Criteria

- Ændringens formål og scope er dokumenteret og godkendt af **Product Owner**
- Funktionelle krav er identificeret på overordnet niveau og dokumenteret som grundlag for fuld specificering i fase 2
- Ikke-funktionelle krav er identificeret på overordnet niveau og dokumenteret som grundlag for fuld specificering i fase 2
- Indledende sikkerhedskrav er identificeret på baggrund af ændringstype og dataklassificering. Disse overføres til fuld specificering og kobling til funktionelle krav i fase 2
- Acceptkriterier er formuleret på overordnet niveau og godkendt som udgangspunkt for fase 2 af **Product Owner** og **Tester**
- Risikoklassificering er tildelt, begrundet og dokumenteret med korrekte labels i **GitHub**
- Berørte systemkomponenter, dataflows og integrationer er identificeret
- Det er afklaret og dokumenteret hvilke sikkerhedsaktiviteter der anses for obligatoriske i de efterfølgende faser

## 5. Process Trigger

Fasen udløses når:

- En ny feature eller større ændring tilføjes til backlog
- En ændring berører autentifikation, autorisation, databehandling, tredjepartsintegrationer eller eksponerede API-endpoints
- En sikkerhedsopdatering kræver vurdering af implementeringsomfang og risiko
- En change request modtages fra en kunde eller intern interessent
- En eksisterende komponent skal udskiftes eller opdateres på en måde der kan påvirke systemets sikkerhedsprofil

## 6. Obligatoriske aktiviteter

### 6.1 Change Description

**Product Owner** dokumenterer ændringens formål, forretningsmæssige rationale og afgrænsning i et GitHub Issue ved brug af et standardiseret Issue Template. Scopet skal være præcist nok til at **Engineering Lead** og **Security Engineer** kan vurdere teknisk og sikkerhedsmæssig påvirkning.

**Artefakter fra aktiviteten:**

- Udfyldt GitHub Issue med felterne titel, formål, scope og forretningsmæssig begrundelse
- Issue tildelt relevante milestones og assignees

### 6.2 Funktionelle krav

**Engineering Lead** og **Product Owner** identificerer de funktionelle krav i fællesskab. Kravene dokumenteres direkte i GitHub Issue eller som tilknyttede GitHub Issues i samme milestone.

**Artefakter fra aktiviteten:**

- Funktionelle krav dokumenteret som afsnit i GitHub Issue eller som child issues
- User stories eller backlog items oprettet og linket korrekt til parent issue

### 6.3 Ikke-funktionelle krav

**Engineering Lead** identificerer ikke-funktionelle krav på overordnet niveau, herunder indledende overvejelser om ydeevne, skalerbarhed, tilgængelighed og vedligeholdbarhed. **System/Solution Arkitekt** bidrager ved arkitekturrelevante krav. Formålet er primært at sikre, at væsentlige ikke-funktionelle begrænsninger er synlige for risikoklassificeringen.

**Artefakter fra aktiviteten:**

- Overordnede ikke-funktionelle krav dokumenteret som GitHub Issue og markeret som indledende

### 6.4 Sikkerhedskrav

**Security Engineer** identificerer indledende sikkerhedskrav baseret på ændringstype, berørte komponenter og dataklassificering. I denne fase handler det om at kortlægge hvilke sikkerhedsområder der er relevante for ændringen, ikke om at specificere kravene fuldt ud. De indledende sikkerhedskrav bruges primært som input til risikoklassificeringen og som udgangspunkt for den fulde specificering i fase 2.

Ved lavrisiko ændringer noteres det eksplicit, at ingen særlige sikkerhedskrav er identificeret.

**Artefakter fra aktiviteten:**

- Indledende sikkerhedskrav dokumenteret i GitHub Issue, herunder eksplicit notat ved lav risiko og markeret som draft
- Indledende dataklassificering noteret i issue, eksempelvis personoplysninger, løndata eller identitetsdokumenter

### 6.5 Komponent- og dataflowoversigt

**System/Solution Arkitekt** kortlægger hvilke systemkomponenter, integrationer, API-endpoints, dataflows og trust boundaries der berøres af ændringen. Kortlægningen dokumenteres i GitHub Issue og bruges som input til risikoklassificeringen og som grundlag for eventuel threat modeling i fase 3.

**Artefakter fra aktiviteten:**

- Komponent- og dataflowoversigt dokumenteret i GitHub Issue
- Trust boundary-ændringer noteret eksplicit, hvis relevant

### 6.6 Acceptkriterier

**Engineering Lead** og **Tester** formulerer overordnede acceptkriterier i samarbejde med **Product Owner**. Acceptkriterierne skal være specifikke nok til at understøtte risikoklassificeringen og afgrænse ændringens omfang, men fuld specificering, sikkerhedskobling og verifikation af testbarhed sker først i fase 2. **Product Owner** godkender at acceptkriterierne afspejler forretningsformålet.

**Artefakter fra aktiviteten:**

- Overordnede acceptkriterier dokumenteret per krav i GitHub Issue med tydelig markering af sikkerhedsrelaterede kriterier, markeret som draft

### 6.7 Risikoklassificering

**Security Engineer** gennemfører risikoklassificeringen baseret på ændringstypen, berørte komponenter, dataklassificering og systemeksponering. Klassificeringen sker ud fra et tredelt skema:

| Risikoniveau | Karakteristika |
| --- | --- |
| Lav | Ingen ændringer i sikkerhedsrelevante komponenter, autentifikation, autorisation eller eksponerede interfaces. Ingen behandling af følsomme data. |
| Middel | Ændringer i eksisterende sikkerhedsrelevante flows, nye integrationer, udvidelse af databehandling eller ændringer i adgangskontrol. |
| Høj | Ændringer i autentifikation, autorisation, kryptering, eksponering af nye API-endpoints mod følsomme data, ændringer i trust boundaries, eller behandling af særligt følsomme personoplysninger. |

Risikoklassificeringen dokumenteres som et GitHub Label `risk:low`, `risk:medium` eller `risk:high` på det tilknyttede issue, og en skriftlig begrundelse tilføjes som issue-kommentar af **Security Engineer**. Kombinationen af label og skriftlig begrundelse udgør det sporbare bevis for at klassificeringen er foretaget og godkendt.

**Artefakter fra aktiviteten:**

- GitHub Label påsat issue
- Skriftlig begrundelse for klassificeringen som issue-kommentar fra **Security Engineer**

### 6.8 Beslutning om sikkerhedsaktiviteter

På baggrund af risikoklassificeringen dokumenteres det i issue-kommentaren hvilke sikkerhedsaktiviteter der er obligatoriske i de efterfølgende faser. Beslutningen dokumenteres eksplicit, så den kan følges og verificeres i de efterfølgende faser.

**Artefakter fra aktiviteten:**

- Issue-kommentar fra **Security Engineer** med beslutning om obligatoriske aktiviteter i efterfølgende faser
- Korrekte labels påsat issue baseret på beslutningen og risikoklassificeringen

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 1 er alle dokumenteret i GitHub Issue:

- Udfyldt issue med formål, scope og forretningsmæssig begrundelse
- Indledende funktionelle og ikke-funktionelle krav
- Indledende sikkerhedskrav
- Komponent- og dataflowoversigt med eventuelle trust boundary-ændringer
- Indledende acceptkriterier med markering af sikkerhedsrelaterede kriterier
- GitHub Label `risk:low` / `risk:medium` / `risk:high` med skriftlig begrundelse som issue-kommentar
- Issue labels med relevante obligatoriske aktiviteter baseret på risikoklassificering og sikkerhedsbeslutning

### 7.2 Exit Gate

Fasen er først afsluttet når alle påkrævede felter i issue templaten er udfyldt, risikoklassificeringen er påsat som label med tilhørende begrundelse, og acceptkriterier er godkendt af både **Product Owner** og **Tester**.

## 8. Compliance & Enforcement

Fase 1 håndhæves primært gennem GitHub Issue templates. NordVault anvender et standardiseret issue template der indeholder obligatoriske afsnit for formål, scope, forretningsmæssig begrundelse, indledende krav og dataklassificering. Et issue der ikke er udfyldt i overensstemmelse med templaten kan ikke godkendes af **Product Owner** og må ikke gå videre til fase 2.

Risikoklassificeringen håndhæves ved at **Security Engineer** er påkrævet reviewer på det tilknyttede issue ved middel og høj risiko. Labels `risk:low`, `risk:medium` og `risk:high` påsættes manuelt af **Security Engineer** og er en forudsætning for at fasen kan afsluttes. Et issue uden risikoklassificering betragtes ikke som godkendt til videre behandling.

For lavrisiko ændringer er processen forenklet, men forenklingen skal markeres eksplicit i issue med label `simplified-process`. Det sikrer at forenklinger er synlige og sporbare frem for stiltiende.
