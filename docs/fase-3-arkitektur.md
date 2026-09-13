# Fase 3: Arkitektur og Design

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| System/Solution Architect | A/R | Ejer arkitekturdesignet, trusselsmodellering og sikkerhedsmæssige designbeslutninger |
| Engineering Lead | R | Bidrager til tekniske designvalg og vurderer implementeringsmæssige konsekvenser |
| Security Engineer | C/A ved middel/høj risiko | Validerer trusselsmodel, sikkerhedsarkitektur og designbeslutninger |
| Product Owner | C | Godkender at designet afspejler forretningsformålet og accepterede risici |
| Tester/QA | C | Bidrager til testbarhed af arkitekturvalg og identificerer testimplikationer |
| DevOps/Ops | C | Vurderer deployment- og driftsmæssige konsekvenser af arkitekturvalg |

## 1. Formål

Fase 3 omsætter kravgrundlaget fra fase 2 til konkrete arkitektur- og designbeslutninger inden implementering påbegyndes. Det centrale output er en trusselsmodel og et sikkerhedsarkitekturdesign, der dokumenterer hvilke trusler der er identificeret, hvilke kontroller der adresserer dem, og hvilke designvalg der er truffet for at reducere angrebsoverfladen.

Fasen eksisterer i SSDLC'en fordi sikkerhedsproblemer der opstår i arkitektur og design er markant dyrere at rette jo senere de opdages. En trusselsmodel produceret parallelt med arkitekturarbejdet sikrer at sikkerhedsbeslutninger træffes som en integreret del af designprocessen og ikke som efterrationalisering. Det er også i denne fase at sporbarhedskæden fra sikkerhedskrav til konkrete kontroller etableres, hvilket er forudsætningen for at kunne verificere kravene i fase 5.

## 2. Roller og Ansvar

### 2.1 System/Solution Architect

- Ejer arkitekturdesignet og er ansvarlig for at sikkerhedsmæssige hensyn er indlejret i designet
- Leder trusselsmodelleringsaktiviteten i samarbejde med **Security Engineer**
- Træffer og dokumenterer arkitekturmæssige designbeslutninger, herunder valg af sikkerhedsprotokoller, krypteringsmekanismer og adgangskontroldesign
- Identificerer og dokumenterer ændringer i trust boundaries, dataflows og systemgrænser
- Godkendelsesautoritet for arkitekturdesignet

**Ansvarlig for følgende:**

- Arkitekturdiagram med opdaterede komponenter, dataflows og trust boundaries
- Dokumenteret trusselsmodel
- Designbeslutninger dokumenteret med begrundelse

### 2.2 Engineering Lead

- Bidrager til tekniske designvalg på implementeringsniveau
- Vurderer om designet er implementerbart inden for de tekniske og tidsmæssige rammer
- Identificerer teknisk gæld eller risici der kan opstå som konsekvens af designvalg

**Ansvarlig for følgende:**

- Tekniske designbemærkninger dokumenteret som kommentar eller i designdokumentet
- Eventuelle implementeringsrisici noteret eksplicit

### 2.3 Security Engineer

- Deltager aktivt i trusselsmodelleringsaktiviteten og validerer at relevante trusler er identificeret
- Vurderer om de valgte kontroller er tilstrækkelige i forhold til risikoklassificeringen fra fase 1
- Godkendelsesautoritet for trusselsmodel og sikkerhedsarkitektur ved middel/høj risiko

**Ansvarlig for følgende:**

- Godkendelse af trusselsmodel dokumenteret som issue-kommentar ved middel/høj risiko
- Eventuelle manglende kontroller eller åbne risici noteret eksplicit

### 2.4 Product Owner

- Godkender at designet afspejler det ønskede forretningsudkomme
- Tager stilling til eventuelle restrisici der præsenteres af **Security Engineer**

**Ansvarlig for følgende:**

- Godkendelse af designet dokumenteret som issue-kommentar
- Eventuel accept af restrisiko dokumenteret eksplicit med begrundelse

### 2.5 Tester/QA

- Gennemgår designet med henblik på testbarhed
- Identificerer arkitekturvalg der kan vanskeliggøre sikkerhedstest i fase 5
- Opdaterer indledende testscenarier fra fase 2 på baggrund af designet

**Ansvarlig for følgende:**

- Eventuelle testbarhedsbemærkninger dokumenteret som issue-kommentar

### 2.6 DevOps/Ops

- Vurderer deployment- og driftsmæssige konsekvenser af arkitekturvalget
- Identificerer krav til infrastruktur, konfiguration og monitorering der følger af designet

**Ansvarlig for følgende:**

- Drifts- og deploymentrelaterede bemærkninger dokumenteret som issue-kommentar

## 3. Scope

Fasen gælder for alle ændringer klassificeret som middel eller høj risiko i fase 1, samt for lavrisiko ændringer der introducerer nye komponenter, ændrer eksisterende dataflows eller påvirker integrationer med eksterne systemer.

For lavrisiko ændringer der ikke berører arkitektur, trust boundaries eller sikkerhedsrelevante komponenter kan fasen reduceres til en kort vurdering af om eksisterende arkitektur og kontroller er tilstrækkelige. Vurderingen dokumenteres som en kommentar i GitHub Issue og kræver ikke en fuld trusselsmodel.

For middel og høj risiko ændringer er trusselsmodellering og et opdateret arkitekturdiagram obligatoriske aktiviteter, og **Security Engineer** skal godkende trusselsmodellen inden fasen afsluttes.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- Fase 2 er afsluttet med godkendt kravgrundlag, sikkerhedskrav og acceptkriterier
- Risikoklassificering fra fase 1 er tilgængelig og kommunikeret til **System/Solution Architect**

### 4.2 Exit Criteria

- Arkitekturdiagram er opdateret med relevante komponenter, dataflows og trust boundaries
- Trusselsmodel er udarbejdet og dokumenterer identificerede trusler, berørte aktiver og valgte kontroller
- Sikkerhedsrelaterede designbeslutninger er dokumenteret med begrundelse
- Sikkerhedskrav fra fase 2 er koblet til konkrete kontroller i designet
- Eventuelle restrisici er identificeret, dokumenteret og accepteret af rette godkendelsesautoritet
- **Security Engineer** har godkendt trusselsmodel og sikkerhedsarkitektur ved middel/høj risiko
- Designet er godkendt af **System/Solution Architect** inden implementering påbegyndes

## 5. Process Trigger

Fasen udløses når:

- Fase 2 er afsluttet med godkendt kravgrundlag
- En ændring introducerer nye komponenter, services eller integrationer
- En ændring påvirker autentifikation, autorisation, kryptering eller dataflows
- En ændring ændrer trust boundaries eller eksponerer nye API-endpoints
- **Security Engineer** har i fase 1 eller 2 identificeret behov for trusselsmodellering som obligatorisk aktivitet

## 6. Obligatoriske aktiviteter

### 6.1 Opdatering af arkitekturdiagram

**System/Solution Architect** opdaterer arkitekturdiagrammet til at afspejle de komponenter, dataflows, integrationer og trust boundaries der berøres af ændringen. Diagrammet udgør det visuelle grundlag for trusselsmodelleringsaktiviteten og for de designbeslutninger der dokumenteres i fasen. For lavrisiko ændringer uden arkitekturpåvirkning dokumenteres det eksplicit at eksisterende arkitektur er uændret.

**Artefakter fra aktiviteten:**

- Opdateret arkitekturdiagram med komponenter, dataflows og trust boundaries
- Eksplicit notat ved lavrisiko ændringer uden arkitekturpåvirkning

### 6.2 Trusselsmodellering

**System/Solution Architect** og **Security Engineer** gennemfører trusselsmodellering med udgangspunkt i arkitekturdiagrammet og sikkerhedskravene fra fase 2. Trusselsmodelleringen identificerer relevante trusler mod de berørte aktiver, vurderer sandsynlighed og konsekvens, og kortlægger hvilke kontroller der adresserer de identificerede trusler. NordVault anvender STRIDE som strukturerende ramme for trusselsidentifikation, da det giver en systematisk dækning af de trusselsklasser der er relevante for en webbaseret platform der håndterer følsomme personoplysninger.

Trusselsmodellen dokumenteres i et versioneret dokument og gemmes i repositoryets [`/docs/security/`](./security/)-mappe, så den er tilgængelig som sporbar evidens og som input til fase 5.

**Artefakter fra aktiviteten:**

- Trusselsmodel dokumenteret med identificerede trusler, berørte aktiver, risikovurdering og valgte kontroller
- Trusselsmodel versioneret og gemt i `/docs/security/`

### 6.3 Sikkerhedsarkitekturdesign

**System/Solution Architect** dokumenterer de sikkerhedsmæssige designbeslutninger der træffes på baggrund af trusselsmodellen. Det omfatter valg af autentifikationsmekanismer, autorisationsmodel, krypteringsvalg, inputvalideringsdesign og håndtering af sessioner og tokens. Hvert designvalg dokumenteres med en kort begrundelse, så beslutningerne kan spores og evalueres i forbindelse med fremtidige ændringer.

Sikkerhedskrav fra fase 2 kobles eksplicit til de kontroller der implementerer dem, så sporbarhedskæden fra krav til design er komplet.

**Artefakter fra aktiviteten:**

- Sikkerhedsarkitekturdokument med designbeslutninger og begrundelser
- Mapping fra sikkerhedskrav til konkrete kontroller

### 6.4 Identifikation og håndtering af restrisici

**Security Engineer** identificerer eventuelle restrisici, det vil sige trusler der ikke fuldt ud adresseres af de valgte kontroller, enten fordi en kontrol er delvis eller fordi en risiko bevidst accepteres af forretningsmæssige årsager. Restrisici dokumenteres eksplicit med begrundelse og skal accepteres formelt af **Product Owner** inden fasen kan afsluttes. En udokumenteret restrisiko er ikke en accepteret restrisiko.

**Artefakter fra aktiviteten:**

- Restrisici dokumenteret i trusselsmodellen eller som separat afsnit i sikkerhedsarkitekturdokumentet
- Formel accept af restrisiko dokumenteret som issue-kommentar fra **Product Owner**

### 6.5 Designreview

**System/Solution Architect** og **Security Engineer** gennemfører et struktureret designreview med deltagelse af **Engineering Lead**. Formålet er at verificere at designet adresserer de identificerede trusler, at sikkerhedskrav er afspejlet i de valgte kontroller, og at implementeringen er realistisk inden for de givne rammer. Ved middel og høj risiko dokumenteres reviewet som en godkendelseskommentar i GitHub Issue.

**Artefakter fra aktiviteten:**

- Godkendelseskommentar fra **Security Engineer** i GitHub Issue ved middel/høj risiko
- Eventuelle åbne punkter fra designreview dokumenteret som separate issues med kobling til parent issue

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 3 er:

- Opdateret arkitekturdiagram versioneret i repository
- Trusselsmodel gemt i `/docs/security/` med identificerede trusler, aktiver og kontroller
- Sikkerhedsarkitekturdokument med designbeslutninger og mapping fra sikkerhedskrav til kontroller
- Dokumenterede restrisici med formel accept fra **Product Owner**
- Godkendelseskommentarer fra **System/Solution Architect** og **Security Engineer** i GitHub Issue

### 7.2 Exit Gate

Fasen er først afsluttet når trusselsmodellen er godkendt af **Security Engineer** ved middel/høj risiko, alle sikkerhedskrav fra fase 2 er koblet til konkrete kontroller i designet, eventuelle restrisici er formelt accepteret, og **System/Solution Architect** har godkendt arkitekturdesignet. Ingen ændring må gå videre til fase 4 uden at dette er opfyldt.

## 8. Compliance & Enforcement

Fase 3 håndhæves gennem godkendelsesstrukturen i GitHub Issues og gennem versionsstyringen af trusselsmodellen og sikkerhedsarkitekturdokumentet i repository. Ved middel og høj risiko er godkendelseskommentar fra **Security Engineer** et exit-krav der skal være opfyldt inden **Engineering Lead** må åbne en feature branch og påbegynde implementering i fase 4.

Trusselsmodellen og sikkerhedsarkitekturdokumentet gemmes som versionerede filer i `/docs/security/` og navngives efter et fast skema, eksempelvis `threat-model-[issue-id]-[dato].md`. Det giver automatisk sporbarhed gennem Git-historikken og sikrer at dokumenterne kan genfindes og refereres i pull requests og releasedokumentation i de efterfølgende faser.

For lavrisiko ændringer uden arkitekturpåvirkning dokumenteres vurderingen som en kommentar i GitHub Issue. Kommentaren udgør den minimumsevidens der kræves for at fasen er gennemført, og skal være til stede inden ændringen går videre til fase 4.

Der er ikke etableret automatiseret enforcement på dette stadie, da trusselsmodellering og designreview er aktiviteter der forudsætter menneskelig vurdering. Enforcement sker gennem exit gate-strukturen og de dokumenterede godkendelseskrav.
