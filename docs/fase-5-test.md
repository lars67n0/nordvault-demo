# Fase 5: Test og Verificering

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| Tester/QA | A/R | Ejer testprocessen og er ansvarlig for at acceptkriterier verificeres systematisk |
| Engineering Lead | R | Bidrager til teknisk testgennemførelse og håndtering af fund |
| Security Engineer | C/A ved middel/høj risiko | Validerer sikkerhedstest og vurderer sikkerhedsfund fra test |
| System/Solution Architect | C | Rådgiver ved fund der kan indikere arkitekturelle svagheder |
| DevOps/Ops | C/R | Vedligeholder testmiljø og sikrer at automatiserede tests kører korrekt i pipeline |
| Product Owner | C | Godkender at funktionelle acceptkriterier er opfyldt inden fasen afsluttes |

## 1. Formål

Fase 5 verificerer at ændringen opfylder de acceptkriterier der blev formuleret i fase 2, og at de kontroller der blev designet i fase 3 og implementeret i fase 4 faktisk fungerer som forventet. Fasen adskiller sig fra den løbende automatiserede scanning i fase 4 ved at have et eksplicit verifikationsformål. Det er her sporbarhedskæden fra krav til evidens afsluttes.

Det centrale output er en testrapport der dokumenterer hvilke acceptkriterier der er verificeret, hvilke fund der er identificeret, og hvordan de er håndteret. Testrapporten udgør det primære evidensgrundlag for releasebeslutningen i fase 6 og er samtidig en central del af det dokumentationsspor der understøtter CRA-relateret efterlevelse.

## 2. Roller og Ansvar

### 2.1 Tester/QA

- Ejer testplanen og er ansvarlig for at alle acceptkriterier verificeres
- Gennemfører funktionel test og verificerer sikkerhedsrelaterede acceptkriterier
- Dokumenterer testresultater og udarbejder testrapport
- Godkendelsesautoritet for om acceptkriterier er opfyldt

**Ansvarlig for følgende:**

- Testplan dokumenteret med reference til acceptkriterier fra fase 2
- Testrapport med resultater per acceptkriterie
- Dokumenterede og håndterede testfund

### 2.2 Engineering Lead

- Bidrager til teknisk testgennemførelse, herunder opsætning af testdata og testmiljø
- Håndterer fund der kræver rettelse i kodebasen
- Sikrer at rettelser efter test gennemgår samme review-proces som i fase 4

**Ansvarlig for følgende:**

- Rettelser dokumenteret som pull requests med reference til testfund
- Bekræftelse af at rettelser er implementeret og verificeret

### 2.3 Security Engineer

- Gennemfører eller validerer sikkerhedsspecifik test ved middel og høj risiko
- Vurderer sikkerhedsfund fra test og afgør om de blokerer release
- Godkendelsesautoritet for sikkerhedsmæssig testgodkendelse ved middel/høj risiko

**Ansvarlig for følgende:**

- Sikkerhedstest dokumenteret med metode og resultater
- Godkendelse af sikkerhedsmæssig teststatus dokumenteret som issue-kommentar ved middel/høj risiko

### 2.4 System/Solution Architect

- Vurderer fund der kan indikere arkitekturelle svagheder der ikke blev identificeret i fase 3
- Rådgiver om rettelsesstrategier ved arkitekturrelaterede fund

**Ansvarlig for følgende:**

- Arkitekturmæssige bemærkninger til fund dokumenteret som issue-kommentar

### 2.5 DevOps/Ops

- Vedligeholder og konfigurerer testmiljø
- Sikrer at automatiserede sikkerhedstest kører korrekt i pipeline
- Håndterer infrastrukturrelaterede testproblemer

**Ansvarlig for følgende:**

- Testmiljøkonfiguration dokumenteret og versioneret

### 2.6 Product Owner

- Godkender at funktionelle acceptkriterier er opfyldt og at ændringen er klar til release
- Tager stilling til eventuelle åbne fund der foreslås accepteret frem for rettet

**Ansvarlig for følgende:**

- Godkendelse af funktionel teststatus dokumenteret som issue-kommentar
- Eventuel accept af åbne fund dokumenteret med begrundelse

## 3. Scope

Fasen gælder for alle ændringer der er merget til main-branch via fase 4. Testomfanget skaleres efter risikoklassificeringen fra fase 1.

For lavrisiko ændringer er automatiserede pipeline-tests og verifikation af de primære acceptkriterier tilstrækkelige. En forkortet testrapport dokumenterer testresultaterne, og **Security Engineer** behøver ikke godkende teststatus.

For middel og høj risiko ændringer er sikkerhedsspecifik test obligatorisk, og **Security Engineer** skal godkende den sikkerhedsmæssige teststatus inden fasen afsluttes. Alle sikkerhedsrelaterede acceptkriterier fra fase 2 skal verificeres eksplicit og dokumenteres i testrapporten.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- Fase 4 er afsluttet med merget kode på main-branch
- Alle automatiserede sikkerhedsscanninger fra fase 4 er bestået uden ubehandlede kritiske fund
- Acceptkriterier fra fase 2 er tilgængelige og udgør grundlaget for testplanen
- Testmiljø er tilgængeligt og konfigureret korrekt

### 4.2 Exit Criteria

- Alle acceptkriterier er verificeret og resultater dokumenteret i testrapport
- Alle sikkerhedsrelaterede acceptkriterier er verificeret eksplicit
- Alle testfund er håndteret, enten rettet og reverificeret eller accepteret med dokumenteret begrundelse
- Testrapport er udarbejdet og godkendt
- **Security Engineer** har godkendt sikkerhedsmæssig teststatus ved middel/høj risiko
- **Product Owner** har godkendt funktionel teststatus
- Ingen kritiske eller høje ubehandlede sikkerhedsfund eksisterer ved fasens afslutning

## 5. Process Trigger

Fasen udløses når:

- Fase 4 er afsluttet med merget og godkendt kode på main-branch
- En rettelse efter tidligere test kræver reverifikation
- En sikkerhedsopdatering er implementeret og skal verificeres inden release
- Regression i eksisterende funktionalitet er identificeret og kræver målrettet testindsats

## 6. Obligatoriske aktiviteter

### 6.1 Udarbejdelse af testplan

**Tester/QA** udarbejder en testplan med udgangspunkt i acceptkriterierne fra fase 2. Testplanen beskriver hvilke acceptkriterier der verificeres, hvilken testmetode der anvendes for hvert kriterie, og hvilke testdata der er nødvendige. Sikkerhedsrelaterede acceptkriterier markeres eksplicit i testplanen så det er klart hvilke kriterier der kræver sikkerhedsspecifik testindsats frem for funktionel test.

**Artefakter fra aktiviteten:**

- Testplan med reference til acceptkriterier fra fase 2
- Testmetode specificeret per acceptkriterie
- Markering af sikkerhedsrelaterede acceptkriterier

### 6.2 Funktionel test

**Tester/QA** gennemfører funktionel test af ændringen med udgangspunkt i testplanen. Testresultater dokumenteres per acceptkriterie med en klar markering af bestået eller ikke bestået. Fund der ikke opfylder acceptkriterier dokumenteres som testfund og eskaleres til **Engineering Lead** til rettelse.

**Artefakter fra aktiviteten:**

- Testresultater dokumenteret per acceptkriterie
- Testfund dokumenteret som GitHub Issues med label `testfund` og reference til det acceptkriterie de vedrører

### 6.3 Sikkerhedsspecifik test

Ved middel og høj risiko ændringer gennemfører **Security Engineer** sikkerhedsspecifik test med udgangspunkt i de sikkerhedsrelaterede acceptkriterier og trusselsmodellen fra fase 3. Testindsatsen tilpasses ændringstypen og kan omfatte manuel verifikation af adgangskontrol og autorisationslogik, verifikation af inputvalidering og outputencoding, samt dynamisk applikationstest mod et deployet testmiljø for ændringer der eksponerer nye eller ændrede API-endpoints.

Sikkerhedstest der kræver manuel vurdering dokumenteres med en beskrivelse af testmetoden, de udførte testhandlinger og de observerede resultater, så testen udgør sporbar evidens og ikke blot en konklusion.

**Artefakter fra aktiviteten:**

- Sikkerhedstestrapport med metode, udførte tests og resultater
- Dynamisk applikationsscanningsrapport uploadet som pipeline-artefakt ved relevante ændringer
- Sikkerhedsfund dokumenteret som GitHub Issues med label `sikkerhedsfund`

### 6.4 Verifikation af sikkerhedskrav

**Tester/QA** og **Security Engineer** verificerer i fællesskab at de sikkerhedskrav der blev specificeret i fase 2 er implementeret og fungerer som forventet. Verifikationen sker med udgangspunkt i mappingen fra sikkerhedskrav til kontroller der blev udarbejdet i fase 3. Hvert sikkerhedskrav markeres som verificeret i testrapporten med reference til den testaktivitet der verificerede det.

**Artefakter fra aktiviteten:**

- Sikkerhedskrav markeret som verificeret i testrapport med reference til testaktivitet
- Eventuelle manglende eller utilstrækkelige kontroller dokumenteret som sikkerhedsfund

### 6.5 Håndtering af testfund

Alle fund fra test skal håndteres inden fasen kan afsluttes. Et fund kan rettes og reverificeres, accepteres med dokumenteret begrundelse ved lav risiko, eller eskaleres som et separat issue til håndtering i en efterfølgende ændring ved fund der ikke blokerer release. Kritiske og høje sikkerhedsfund kan ikke accepteres eller eskaleres uden godkendelse fra **Security Engineer**. Rettelser der adresserer fund fra fase 5 gennemgår samme pull request- og code review-proces som i fase 4 for at sikre at rettelserne ikke introducerer nye problemer.

**Artefakter fra aktiviteten:**

- Håndtering af fund dokumenteret per fund med status og begrundelse
- Rettelser implementeret som pull requests med reference til testfund-issue
- Accepterede fund dokumenteret med begrundelse og godkendelse fra **Security Engineer**

### 6.6 Udarbejdelse af testrapport

**Tester/QA** udarbejder en samlet testrapport der dokumenterer testaktiviteterne, resultaterne per acceptkriterie, identificerede og håndterede fund, og en samlet konklusion om hvorvidt ændringen er klar til release. Testrapporten er det primære evidensgrundlag for releasebeslutningen i fase 6 og gemmes som et versioneret dokument i repositoryets [`/docs/security/`](./security/)-mappe.

**Artefakter fra aktiviteten:**

- Testrapport med resultater per acceptkriterie, fund og samlet konklusion
- Testrapport gemt i `/docs/security/` med reference til issue-ID og versionsnummer

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 5 er:

- Testplan med reference til acceptkriterier fra fase 2
- Testrapport med resultater per acceptkriterie og samlet konklusion
- Sikkerhedstestrapport med metode og resultater ved middel/høj risiko
- Dynamisk applikationsscanningsrapport ved relevante ændringer
- Dokumenterede og håndterede testfund
- Godkendelseskommentarer fra **Tester/QA**, **Security Engineer** og **Product Owner**

### 7.2 Exit Gate

Fasen er først afsluttet når alle acceptkriterier er verificeret og dokumenteret i testrapporten, alle kritiske og høje sikkerhedsfund er håndteret, **Security Engineer** har godkendt sikkerhedsmæssig teststatus ved middel/høj risiko, og **Product Owner** har godkendt funktionel teststatus. Ingen ændring må gå videre til fase 6 uden en godkendt og komplet testrapport.

## 8. Compliance & Enforcement

Fase 5 håndhæves primært gennem exit gate-strukturen og godkendelseskravene i GitHub Issues. Testrapporten er et obligatorisk artefakt der skal være til stede og godkendt inden fase 6 kan påbegyndes. Det håndhæves proceduremæssigt ved at **Engineering Lead** ikke må oprette et release-issue uden at testrapporten er dokumenteret i `/docs/security/` og godkendelseskommentarerne fra **Tester/QA**, **Security Engineer** ved middel og høj risiko, og **Product Owner** er på plads i det tilknyttede issue.

Automatiserede pipeline-tests kører som required status checks og blokerer videre progression ved fejl. Dynamiske applikationsscanninger konfigureres til at køre mod et dedikeret testmiljø og uploades som pipeline-artefakter, så scanning er gennemført og dokumenteret som forudsætning for release.

Rettelser der adresserer fund fra fase 5 gennemgår pull request- og code review-processen fra fase 4. Det sikrer at rettelser ikke omgår de enforcement-mekanismer der er etableret i implementeringsfasen, og forhindrer at testfasen skaber en sidekanal hvor kode kan merges uden review.
