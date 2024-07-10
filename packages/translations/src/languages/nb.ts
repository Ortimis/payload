import type { DefaultTranslationsObject, Language } from '../types.js'

export const nbTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Konto',
    accountOfCurrentUser: 'Konto til nåværende bruker',
    accountVerified: 'Konto bekreftet vellykket.',
    alreadyActivated: 'Allerede aktivert',
    alreadyLoggedIn: 'Allerede logget inn',
    apiKey: 'API-nøkkel',
    authenticated: 'Autentisert',
    backToLogin: 'Tilbake til innlogging',
    beginCreateFirstUser: 'Opprett din første bruker for å fortsette.',
    changePassword: 'Endre passord',
    checkYourEmailForPasswordReset:
      'Sjekk e-posten din for en lenke som lar deg tilbakestille passordet ditt.',
    confirmGeneration: 'Bekreft generering',
    confirmPassword: 'Bekreft passord',
    createFirstUser: 'Opprett første bruker',
    emailNotValid: 'E-posten er ikke gyldig',
    emailOrUsername: undefined,
    emailSent: 'E-post sendt',
    emailVerified: 'E-post bekreftet med hell.',
    enableAPIKey: 'Aktiver API-nøkkel',
    failedToUnlock: 'Kunne ikke låse opp',
    forceUnlock: 'Tving opplåsing',
    forgotPassword: 'Glemt passord',
    forgotPasswordEmailInstructions:
      'Skriv inn e-postadressen din nedenfor, og vi vil sende deg en e-post med instruksjoner om hvordan du tilbakestiller passordet ditt.',
    forgotPasswordQuestion: 'Glemt passord?',
    forgotPasswordUsernameInstructions:
      'Vennligst skriv inn brukernavnet ditt nedenfor. Instruksjoner om hvordan du tilbakestiller passordet ditt vil bli sendt til e-postadressen som er knyttet til brukernavnet ditt.',
    generate: 'Generer',
    generateNewAPIKey: 'Generer ny API-nøkkel',
    generatingNewAPIKeyWillInvalidate:
      'Å generere en ny API-nøkkel vil <1>ugyldiggjøre</1> den forrige nøkkelen. Er du sikker på at du vil fortsette?',
    lockUntil: 'Lås til',
    logBackIn: 'Logg inn igjen',
    logOut: 'Logg ut',
    loggedIn: 'For å logge inn med en annen bruker, må du <0>logge ut</0> først.',
    loggedInChangePassword:
      'For å endre passordet ditt, gå til <0>kontoen</0> din og endre passordet der.',
    loggedOutInactivity: 'Du har blitt logget ut på grunn av inaktivitet.',
    loggedOutSuccessfully: 'Du har blitt logget ut.',
    loggingOut: 'Logger ut...',
    login: 'Logg inn',
    loginAttempts: 'Innloggingsforsøk',
    loginUser: 'Logg inn bruker',
    loginWithAnotherUser: 'For å logge inn med en annen bruker, må du <0>logge ut</0> først.',
    logout: 'Logg ut',
    logoutSuccessful: 'Utlogging vellykket.',
    logoutUser: 'Logg ut bruker',
    newAPIKeyGenerated: 'Ny API-nøkkel generert.',
    newAccountCreated:
      'En ny konto har blitt opprettet for deg på <a href="{{serverURL}}">{{serverURL}}</a> Klikk på lenken nedenfor eller lim inn URLen i nettleseren din for å bekrefte e-postadressen din: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Etter at du har bekreftet e-postadressen din, kan du logge inn.',
    newPassword: 'Nytt passord',
    passed: 'Autentisering bestått',
    passwordResetSuccessfully: 'Passordet er tilbakestilt.',
    resetPassword: 'Tilbakestill passord',
    resetPasswordExpiration: 'Tilbakestill passordets utløpsdato',
    resetPasswordToken: 'Tilbakestill passordet-token',
    resetYourPassword: 'Tilbakestill passordet ditt',
    stayLoggedIn: 'Forbli logget inn',
    successfullyRegisteredFirstUser: 'Registrerte første bruker vellykket.',
    successfullyUnlocked: 'Låst opp',
    tokenRefreshSuccessful: 'Token-oppdatering vellykket.',
    unableToVerify: 'Kunne ikke bekrefte',
    username: 'Brukernavn',
    usernameNotValid: 'Brukernavnet som er oppgitt er ikke gyldig.',
    verified: 'Bekreftet',
    verifiedSuccessfully: 'Bekreftet',
    verify: 'Bekreft',
    verifyUser: 'Bekreft bruker',
    verifyYourEmail: 'Bekreft e-postadressen din',
    youAreInactive:
      'Du har ikke vært aktiv i en stund, og vil snart bli logget ut automatisk for din egen sikkerhet. Vil du forbli innlogget?',
    youAreReceivingResetPassword:
      'Du mottar denne e-posten fordi du (eller noen andre) har bedt om tilbakestilling av passordet til kontoen din. Klikk på lenken nedenfor, eller lim den inn i nettleseren din for å fullføre prosessen:',
    youDidNotRequestPassword:
      'Hvis du ikke har bedt om dette, kan du ignorere denne e-posten, og passordet ditt vil forbli uendret.',
  },
  error: {
    accountAlreadyActivated: 'Denne kontoen er allerede aktivert.',
    autosaving: 'Det oppstod et problem under automatisk lagring av dokumentet.',
    correctInvalidFields: 'Korriger ugyldige felt.',
    deletingFile: 'Det oppstod en feil under sletting av filen.',
    deletingTitle:
      'Det oppstod en feil under sletting av {{title}}. Sjekk tilkoblingen og prøv igjen.',
    emailOrPasswordIncorrect: 'E-postadressen eller passordet er feil.',
    followingFieldsInvalid_one: 'Følgende felt er ugyldig:',
    followingFieldsInvalid_other: 'Følgende felter er ugyldige:',
    incorrectCollection: 'Ugyldig samling',
    invalidFileType: 'Ugyldig filtype',
    invalidFileTypeValue: 'Ugyldig filtype: {{value}}',
    loadingDocument: 'Det oppstod et problem under lasting av dokumentet med ID {{id}}.',
    localesNotSaved_one: 'Følgende lokalisering kunne ikke lagres:',
    localesNotSaved_other: 'Følgende lokaliseringer kunne ikke lagres:',
    logoutFailed: 'Utlogging mislyktes.',
    missingEmail: 'Mangler e-postadresse.',
    missingIDOfDocument: 'Mangler ID for dokumentet som skal oppdateres.',
    missingIDOfVersion: 'Mangler ID for versjonen.',
    missingRequiredData: 'Mangler påkrevd data.',
    noFilesUploaded: 'Ingen filer ble lastet opp.',
    noMatchedField: 'Ingen matchende felt funnet for "{{label}}"',
    noUser: 'Ingen bruker',
    notAllowedToAccessPage: 'Du har ikke tilgang til denne siden.',
    notAllowedToPerformAction: 'Du har ikke tillatelse til å utføre denne handlingen.',
    notFound: 'Den forespurte ressursen ble ikke funnet.',
    previewing: 'Det oppstod et problem under forhåndsvisning av dokumentet.',
    problemUploadingFile: 'Det oppstod et problem under opplasting av filen.',
    tokenInvalidOrExpired: 'Token er enten ugyldig eller har utløpt.',
    tokenNotProvided: 'Token ikke angitt.',
    unPublishingDocument: 'Det oppstod et problem under avpublisering av dokumentet.',
    unableToDeleteCount: 'Kan ikke slette {{count}} av {{total}} {{label}}.',
    unableToUpdateCount: 'Kan ikke oppdatere {{count}} av {{total}} {{label}}.',
    unauthorized: 'Uautorisert, du må være innlogget for å gjøre denne forespørselen.',
    unknown: 'En ukjent feil har oppstått.',
    unspecific: 'En feil har oppstått.',
    userEmailAlreadyRegistered: 'En bruker med den oppgitte e-posten er allerede registrert.',
    userLocked: 'Denne brukeren er låst på grunn av for mange mislykkede innloggingsforsøk.',
    usernameAlreadyRegistered: 'En bruker med det gitte brukernavnet er allerede registrert.',
    usernameOrPasswordIncorrect: 'Brukernavnet eller passordet som ble oppgitt er feil.',
    valueMustBeUnique: 'Verdien må være unik',
    verificationTokenInvalid: 'Verifiseringskoden er ugyldig.',
  },
  fields: {
    addLabel: 'Legg til {{label}}',
    addLink: 'Legg til Lenke',
    addNew: 'Legg til ny',
    addNewLabel: 'Legg til ny {{label}}',
    addRelationship: 'Legg til Relasjon',
    addUpload: 'Legg til Opplasting',
    block: 'blokk',
    blockType: 'Blokktype',
    blocks: 'blokker',
    chooseBetweenCustomTextOrDocument:
      'Velg mellom å skrive inn en egen tekst-URL eller å lenke til et annet dokument.',
    chooseDocumentToLink: 'Velg et dokument å lenke til',
    chooseFromExisting: 'Velg fra eksisterende',
    chooseLabel: 'Velg {{label}}',
    collapseAll: 'Skjul alle',
    customURL: 'Egendefinert URL',
    editLabelData: 'Rediger {{label}}-data',
    editLink: 'Rediger lenke',
    editRelationship: 'Rediger relasjon',
    enterURL: 'Skriv inn en URL',
    internalLink: 'Intern lenke',
    itemsAndMore: '{{items}} og {{count}} flere',
    labelRelationship: '{{label}}-relasjon',
    latitude: 'Breddegrad',
    linkType: 'Lenketype',
    linkedTo: 'Lenket til <0>{{label}}</0>',
    longitude: 'Lengdegrad',
    newLabel: 'Ny {{label}}',
    openInNewTab: 'Åpne i ny fane',
    passwordsDoNotMatch: 'Passordene er ikke like.',
    relatedDocument: 'Relatert dokument',
    relationTo: 'Relasjon til',
    removeRelationship: 'Fjern Forhold',
    removeUpload: 'Fjern Opplasting',
    saveChanges: 'Lagre endringer',
    searchForBlock: 'Søk etter en blokk',
    selectExistingLabel: 'Velg eksisterende {{label}}',
    selectFieldsToEdit: 'Velg felt som skal redigeres',
    showAll: 'Vis alle',
    swapRelationship: 'Bytte Forhold',
    swapUpload: 'Bytt Opplasting',
    textToDisplay: 'Tekst som skal vises',
    toggleBlock: 'Veksle blokk',
    uploadNewLabel: 'Last opp ny {{label}}',
  },
  general: {
    aboutToDelete: 'Du er i ferd med å slette {{label}} <1>{{title}}</1>. Er du sikker?',
    aboutToDeleteCount_many: 'Du er i ferd med å slette {{count}} {{label}}',
    aboutToDeleteCount_one: 'Du er i ferd med å slette {{count}} {{label}}',
    aboutToDeleteCount_other: 'Du er i ferd med å slette {{count}} {{label}}',
    addBelow: 'Legg til under',
    addFilter: 'Legg til filter',
    adminTheme: 'Admin-tema',
    and: 'Og',
    applyChanges: 'Bruk endringer',
    ascending: 'Stigende',
    automatic: 'Automatisk',
    backToDashboard: 'Tilbake til kontrollpanel',
    cancel: 'Avbryt',
    changesNotSaved:
      'Endringene dine er ikke lagret. Hvis du forlater nå, vil du miste endringene dine.',
    close: 'Lukk',
    collapse: 'Skjul',
    collections: 'Samlinger',
    columnToSort: 'Kolonne å sortere',
    columns: 'Kolonner',
    confirm: 'Bekreft',
    confirmDeletion: 'Bekreft sletting',
    confirmDuplication: 'Bekreft duplisering',
    copied: 'Kopiert',
    copy: 'Kopiér',
    create: 'Opprett',
    createNew: 'Opprett ny',
    createNewLabel: 'Opprett ny {{label}}',
    created: 'Opprettet',
    createdAt: 'Opprettet',
    creating: 'Oppretter',
    creatingNewLabel: 'Oppretter ny {{label}}',
    custom: 'Tilpasset',
    dark: 'Mørk',
    dashboard: 'Kontrollpanel',
    delete: 'Slett',
    deletedCountSuccessfully: 'Slettet {{count}} {{label}}.',
    deletedSuccessfully: 'Slettet.',
    deleting: 'Sletter...',
    depth: 'Dybde',
    descending: 'Synkende',
    deselectAllRows: 'Fjern markeringen fra alle rader',
    document: 'Dokument',
    documents: 'Dokumenter',
    duplicate: 'Dupliser',
    duplicateWithoutSaving: 'Dupliser uten å lagre endringer',
    edit: 'Redigere',
    editLabel: 'Rediger {{label}}',
    editing: 'Redigerer',
    editingLabel_many: 'Redigerer {{count}} {{label}}',
    editingLabel_one: 'Redigerer {{count}} {{label}}',
    editingLabel_other: 'Redigerer {{count}} {{label}}',
    email: 'E-post',
    emailAddress: 'E-postadresse',
    enterAValue: 'Skriv inn en verdi',
    error: 'Feil',
    errors: 'Feil',
    fallbackToDefaultLocale: 'Tilbakestilling til standard lokalitet',
    false: 'Falsk',
    filter: 'Filtrer',
    filterWhere: 'Filtrer {{label}} der',
    filters: 'Filter',
    globals: 'Globale variabler',
    language: 'Språk',
    lastModified: 'Sist endret',
    leaveAnyway: 'Forlat likevel',
    leaveWithoutSaving: 'Forlat uten å lagre',
    light: 'Lys',
    livePreview: 'Forhåndsvisning',
    loading: 'Laster',
    locale: 'Lokalitet',
    locales: 'Språk',
    menu: 'Meny',
    moveDown: 'Flytt ned',
    moveUp: 'Flytt opp',
    newPassword: 'Nytt passord',
    noFiltersSet: 'Ingen filtre satt',
    noLabel: '<Ingen {{label}}>',
    noOptions: 'Ingen alternativer',
    noResults:
      'Ingen {{label}} funnet. Enten finnes det ingen {{label}} enda eller ingen matcher filterne du har spesifisert ovenfor.',
    noValue: 'Ingen verdi',
    none: 'Ingen',
    notFound: 'Ikke funnet',
    nothingFound: 'Ingenting funnet',
    of: 'av',
    open: 'Åpne',
    or: 'Eller',
    order: 'Rekkefølge',
    pageNotFound: 'Siden ble ikke funnet',
    password: 'Passord',
    payloadSettings: 'Payload-innstillinger',
    perPage: 'Per side: {{limit}}',
    remove: 'Fjern',
    reset: 'Tilbakestill',
    row: 'Rad',
    rows: 'Rader',
    save: 'Lagre',
    saving: 'Lagrer...',
    searchBy: 'Søk etter {{label}}',
    selectAll: 'Velg alle {{count}} {{label}}',
    selectAllRows: 'Velg alle rader',
    selectValue: 'Velg en verdi',
    selectedCount: '{{count}} {{label}} valgt',
    showAllLabel: 'Vis alle {{label}}',
    sorryNotFound: 'Beklager, det er ingenting som samsvarer med forespørselen din.',
    sort: 'Sortér',
    sortByLabelDirection: 'Sorter etter {{label}} {{direction}}',
    stayOnThisPage: 'Bli på denne siden',
    submissionSuccessful: 'Innsending vellykket.',
    submit: 'Send inn',
    submitting: 'Innsending...',
    success: 'Suksess',
    successfullyCreated: '{{label}} ble opprettet.',
    successfullyDuplicated: '{{label}} ble duplisert.',
    thisLanguage: 'Norsk',
    titleDeleted: '{{label}} "{{title}}" ble slettet.',
    true: 'Sann',
    unauthorized: 'Ikke autorisert',
    unsavedChangesDuplicate: 'Du har ulagrede endringer. Vil du fortsette å duplisere?',
    untitled: 'Uten tittel',
    updatedAt: 'Oppdatert',
    updatedCountSuccessfully: 'Oppdaterte {{count}} {{label}} vellykket.',
    updatedSuccessfully: 'Oppdatert.',
    updating: 'Oppdatering',
    uploading: 'Opplasting',
    user: 'Bruker',
    username: undefined,
    users: 'Brukere',
    value: 'Verdi',
    welcome: 'Velkommen',
  },
  operators: {
    contains: 'contains',
    equals: 'lik',
    exists: 'eksisterer',
    intersects: 'krysser',
    isGreaterThan: 'er større enn',
    isGreaterThanOrEqualTo: 'er større enn eller lik',
    isIn: 'er i',
    isLessThan: 'er mindre enn',
    isLessThanOrEqualTo: 'er mindre enn eller lik',
    isLike: 'er som',
    isNotEqualTo: 'er ikke lik',
    isNotIn: 'er ikke med',
    near: 'nær',
    within: 'innen',
  },
  upload: {
    crop: 'Beskjær',
    cropToolDescription:
      'Dra hjørnene av det valgte området, tegn et nytt område eller juster verdiene nedenfor.',
    dragAndDrop: 'Dra og slipp en fil',
    dragAndDropHere: 'eller dra og slipp en fil her',
    editImage: 'Rediger bilde',
    fileName: 'Filnavn',
    fileSize: 'Filstørrelse',
    focalPoint: 'Fokuspunkt',
    focalPointDescription:
      'Dra fokuspunktet direkte på forhåndsvisningen eller juster verdiene nedenfor.',
    height: 'Høyde',
    lessInfo: 'Mindre info',
    moreInfo: 'Mer info',
    previewSizes: 'Forhåndsvisningsstørrelser',
    selectCollectionToBrowse: 'Velg en samling å bla i',
    selectFile: 'Velg en fil',
    setCropArea: 'Angi beskjæringsområde',
    setFocalPoint: 'Angi fokuspunkt',
    sizes: 'Størrelser',
    sizesFor: 'Størrelser for {{label}}',
    width: 'Bredde',
  },
  validation: {
    emailAddress: 'Vennligst skriv inn en gyldig e-postadresse.',
    enterNumber: 'Vennligst skriv inn et gyldig tall.',
    fieldHasNo: 'Dette feltet har ingen {{label}}',
    greaterThanMax: '{{value}} er større enn den tillatte maksimale {{label}} på {{max}}.',
    invalidInput: 'Dette feltet har en ugyldig inndata.',
    invalidSelection: 'Dette feltet har en ugyldig utvalg.',
    invalidSelections: 'Dette feltet har følgende ugyldige utvalg:',
    lessThanMin: '{{value}} er mindre enn den tillatte minimale {{label}} på {{min}}.',
    limitReached: 'Begrensning nådd, bare {{max}} elementer kan legges til.',
    longerThanMin: 'Denne verdien må være lengre enn minimumslengden på {{minLength}} tegn.',
    notValidDate: '"{{value}}" er ikke en gyldig dato.',
    required: 'Dette feltet er påkrevd.',
    requiresAtLeast: 'Dette feltet krever minst {{count}} {{label}}.',
    requiresNoMoreThan: 'Dette feltet krever maksimalt {{count}} {{label}}.',
    requiresTwoNumbers: 'Dette feltet krever to tall.',
    shorterThanMax: 'Denne verdien må være kortere enn maksimal lengde på {{maxLength}} tegn.',
    trueOrFalse: 'Dette feltet kan bare være likt true eller false.',
    username:
      'Vennligst oppgi et gyldig brukernavn. Kan inneholde bokstaver, nummer, bindestreker, punktum og understrek.',
    validUploadID: 'Dette feltet er ikke en gyldig opplastings-ID.',
  },
  version: {
    type: 'Type',
    aboutToPublishSelection:
      'Du er i ferd med å publisere alle {{label}} i utvalget. Er du sikker?',
    aboutToRestore:
      'Du er i ferd med å gjenopprette denne {{label}} dokumentet til tilstanden det var i på {{versionDate}}.',
    aboutToRestoreGlobal:
      'Du er i ferd med å gjenopprette den globale variabelen {{label}} til tilstanden det var i på {{versionDate}}.',
    aboutToRevertToPublished:
      'Du er i ferd med å tilbakestille endringene i dette dokumentet til den publiserte tilstanden. Er du sikker?',
    aboutToUnpublish: 'Du er i ferd med å avpublisere dette dokumentet. Er du sikker?',
    aboutToUnpublishSelection:
      'Du er i ferd med å oppheve publiseringen av alle {{label}} i utvalget. Er du sikker?',
    autosave: 'Lagre automatisk',
    autosavedSuccessfully: 'Lagret automatisk.',
    autosavedVersion: 'Automatisk lagret versjon',
    changed: 'Endret',
    compareVersion: 'Sammenlign versjon mot:',
    confirmPublish: 'Bekreft publisering',
    confirmRevertToSaved: 'Bekreft tilbakestilling til lagret',
    confirmUnpublish: 'Bekreft avpublisering',
    confirmVersionRestoration: 'Bekreft versjon-gjenoppretting',
    currentDocumentStatus: 'Nåværende {{docStatus}} dokument',
    draft: 'Utkast',
    draftSavedSuccessfully: 'Utkast lagret.',
    lastSavedAgo: 'Sist lagret {{distance}} siden',
    noFurtherVersionsFound: 'Ingen flere versjoner funnet',
    noRowsFound: 'Ingen {{label}} funnet',
    preview: 'Forhåndsvisning',
    problemRestoringVersion: 'Det oppstod et problem med gjenoppretting av denne versjonen',
    publish: 'Publisere',
    publishChanges: 'Publiser endringer',
    published: 'Publisert',
    publishing: 'Publisering',
    restoreThisVersion: 'Gjenopprett denne versjonen',
    restoredSuccessfully: 'Gjenopprettet.',
    restoring: 'Gjenoppretter...',
    revertToPublished: 'Tilbakestill til publisert',
    reverting: 'Tilbakestiller...',
    saveDraft: 'Lagre utkast',
    selectLocales: 'Velg språk å vise',
    selectVersionToCompare: 'Velg en versjon å sammenligne',
    showLocales: 'Vis språk:',
    showingVersionsFor: 'Viser versjoner for:',
    status: 'Status',
    unpublish: 'Avpubliser',
    unpublishing: 'Avpubliserer...',
    version: 'Versjon',
    versionCount_many: '{{count}} versjoner funnet',
    versionCount_none: 'Ingen versjoner funnet',
    versionCount_one: '{{count}} versjon funnet',
    versionCount_other: '{{count}} versjoner funnet',
    versionCreatedOn: '{{version}} opprettet:',
    versionID: 'Versjons-ID',
    versions: 'Versjoner',
    viewingVersion: 'Viser versjon for {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Viser versjon for den globale variabelen {{entityLabel}}',
    viewingVersions: 'Viser versjoner for {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Viser versjoner for den globale variabelen {{entityLabel}}',
  },
}

export const nb: Language = {
  dateFNSKey: 'nb',
  translations: nbTranslations,
}
