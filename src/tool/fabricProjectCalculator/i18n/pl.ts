import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'kalkulator-tkaniny-projekt';
const title = 'Kalkulator Zużycia Tkaniny na Ubranie';
const description =
  'Łatwo oblicz, ile materiału potrzebujesz na uszycie spódnicy, spodni, sukienki lub koszuli. Dostosuj do szerokości tkaniny i rozmiaru, aby uzyskać profesjonalne cięcie.';

const faqData = [
  {
    question: 'Ile materiału potrzebuję na spódnicę?',
    answer:
      'To zależy od szerokości tkaniny. Na prostą spódnicę przy materiale o szerokości 140-150 cm zazwyczaj wystarcza 1,20 metra. Jeśli tkanina ma 90-110 cm szerokości, będziesz potrzebować 2,00 metrów.',
  },
  {
    question: 'Jak szerokość tkaniny wpływa na zużycie?',
    answer:
      'Przy mniejszej szerokości elementy wykroju nie mieszczą się obok siebie (równolegle), dlatego zużycie zazwyczaj wzrasta dwukrotnie, ponieważ trzeba je układać jeden pod drugim.',
  },
  {
    question: 'Czy lepiej kupić więcej materiału?',
    answer:
      'Tak, zaleca się 10% marginesu (około 20 cm), aby zrekompensować kurczenie się, błędy w tkactwie lub nieoczekiwane naddatki na szwy.',
  },
  {
    question: 'Co to jest nitka osnowy i jak wpływa na szycie?',
    answer:
      'Jest to kierunek równoległy do brzegów fabrycznych tkaniny. Wykroje muszą być wyrównane do tej nitki, aby ubranie nie deformowało się podczas użytkowania.',
  },
];

const howToData = [
  {
    name: 'Wybierz rodzaj ubrania',
    text: 'Wybierz model, który zamierzasz uszyć (spódnica, spodnie itp.), aby załadować tabelę podstawowego zużycia.',
  },
  {
    name: 'Wprowadź szerokość tkaniny',
    text: 'Zmierz szerokość od brzegu do brzegu tkaniny, którą planujesz kupić (90, 115, 140 lub 150 cm).',
  },
  {
    name: 'Wybierz rozmiar',
    text: 'Dostosuj objętość ubrania do rozmiaru (XS-S, M-L, XL-XXL), aby przeliczyć współczynnik mnożnikowy.',
  },
  {
    name: 'Pobierz całkowitą liczbę metrów',
    text: 'Sprawdź wynik końcowy z naddatkiem na szew i bez niego, aby dokładnie wiedzieć, o ile metrów poprosić w sklepie.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Fabric Estimation Guide - Threads Magazine',
      url: 'https://www.threadsmagazine.com/forum/measuring-fabric',
    },
    {
      name: 'How much fabric do I need? - Seamwork',
      url: 'https://www.seamwork.com/sewing-tutorials/the-anatomy-of-a-sewing-pattern',
    },
    {
      name: 'Standard Fabric Consumption Charts - Textile School',
      url: 'https://www.textileschool.com/209/fabric-consumption-in-garment-making/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Metrów Tkaniny do Szycia: Przewodnik Zużycia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jedną z najczęstszych wątpliwości w pracowni krawieckiej jest ustalenie, ile tkaniny kupić na konkretny projekt. Zużycie materiału zależy zasadniczo od trzech czynników: modelu ubrania, rozmiaru osoby oraz, przede wszystkim, szerokości beli materiału (która zazwyczaj waha się od 90 cm do 150 cm). Ten techniczny kalkulator systematyzuje obliczenia, abyś nie kupował za dużo ani nie został z brakiem materiału w połowie krojenia.',
    },
    {
      type: 'title',
      text: 'Ile materiału potrzebuję na sukienkę lub spodnie?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tradycyjne obliczenia opierają się na długości ubrania plus długości rękawów, z dodaniem marginesu na obłożenia i podłożenia. Jednakże, gdy tkanina jest wąska (90-110 cm), elementy zazwyczaj nie mieszczą się obok siebie, co zmusza do zakupu podwójnej długości. Nasze narzędzie automatycznie uwzględnia te różnice zgodnie ze standardem przemysłu tekstylnego.',
    },
    {
      type: 'title',
      text: 'Szacowane Zużycie według Szerokości Tkaniny (rozmiar M-L)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Prosta Spódnica:</strong> 2.00 m przy szerokości 90 cm · 1.20 m przy szerokości 140/150 cm.',
        '<strong>Długie Spodnie:</strong> 2.50 m przy szerokości 90 cm · 1.50 m przy szerokości 140/150 cm.',
        '<strong>Koszula z Długim Rękawem:</strong> 2.20 m przy szerokości 90 cm · 1.40 m przy szerokości 140/150 cm.',
        '<strong>Podstawowa Sukienka:</strong> 3.50 m przy szerokości 90 cm · 2.20 m przy szerokości 140/150 cm.',
      ],
    },
    {
      type: 'title',
      text: 'Czynniki Zmieniające Zużycie Tkaniny',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kierunek wzoru (Raport):</strong> Jeśli tkanina ma wzór z wyraźnym kierunkiem lub kratkę, którą należy dopasować, będziesz potrzebować od 15% do 20% więcej materiału.',
        '<strong>Kierunek nitki (Ze skosu):</strong> Cięcia ze skosu lub kołowe (jak spódnice z koła) zużywają znacznie więcej tkaniny ze względu na odpady w kątach.',
        '<strong>Kierunek włosa:</strong> W tkaninach takich jak aksamit czy sztruks, wszystkie elementy muszą być krojone w tym samym kierunku, co ogranicza optymalizację miejsca.',
        '<strong>Kurczenie się:</strong> Wiele tkanin naturalnych (bawełna, len, wełna) kurczy się po pierwszym praniu. Kluczowe jest dekatyzowanie tkaniny przed krojeniem.',
      ],
    },
    {
      type: 'tip',
      title: 'Porada Krawiecka',
      html: '<p>Jeśli zamierzasz użyć tkaniny z dużym wzorem lub w kratę (plaid), nie polegaj wyłącznie na standardowej mierze. Zawsze dodaj jedno pełne powtórzenie wzoru (raport) do całkowitej liczby obliczonych metrów, aby zagwarantować, że wzory zgrają się na szwach bocznych.</p>',
    },
    {
      type: 'title',
      text: 'Zalety i Ograniczenia tego Kalkulatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Natychmiastowe obliczenia dla wielu szerokości tkanin z korektą rozmiaru.',
        'Zawiera szacunkowy, konfigurowalny naddatek na szwy.',
        'Wizualny przewodnik rozmieszczenia elementów na materiale.',
        'Nie zastępuje rzeczywistego układu form (marker). Rozmiary Plus mogą wymagać dodatkowych ręcznych adjustacji.',
      ],
    },
    {
      type: 'card',
      title: 'Szerokość beli',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'Wymiar poprzeczny tkaniny od <strong>brzegu do brzegu</strong>. Określa, czy elementy wykroju mieszczą się równolegle, czy muszą być ukrojone szeregowo.',
    },
    {
      type: 'card',
      title: 'Naddatek na szew',
      icon: 'mdi:tape-measure',
      html: 'Odległość między brzegiem wykroju a <strong>linią szwu końcowego</strong>. Standardowa wartość to 1,5 cm dla szwów odzieżowych.',
    },
    {
      type: 'card',
      title: 'Brzeg fabryczny (Krajka)',
      icon: 'mdi:content-cut',
      html: 'Wzmocnione boczne krawędzie tkaniny, które <strong>nie strzępią się</strong>. Wskazują kierunek nitki i służą jako odniesienie do krojenia.',
    },
  ],
  ui: {
    sectionProject: 'Projekt',
    sectionMaterial: 'Materiał',
    labelGarmentType: 'Rodzaj ubrania',
    labelSize: 'Rozmiar',
    labelFabricWidth: 'Szerokość tkaniny (cm)',
    labelSeamAllowance: 'Naddatek na szew (cm)',
    garmentSkirt: 'Spódnica (Prosta/A-linia)',
    garmentPants: 'Spodnie',
    garmentDress: 'Sukienka',
    garmentShirt: 'Koszula / Bluzka',
    garmentCoat: 'Płaszcz / Kurtka',
    garmentTote: 'Eko-torba (Tote Bag)',
    garmentMerceria: {
      skirt: '1 zam. 20cm, 1 guzik',
      pants: '1 zam. 20cm, 1 guzik, 30cm fizeliny',
      dress: '1 zam. 60cm, 50cm fizeliny',
      shirt: '7 guzików, 1m cienkiej fizeliny',
      coat: '3 duże guziki, 1.5m fizeliny, podszewka',
      tote: '2m taśmy na rączki',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Wąska)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Standard EU)',
    width150: '150 cm (Obiciowa)',
    btnClear: 'Wyczyść',
    btnShare: 'Udostępnij',
    btnCopied: 'Skopiowano!',
    btnCopyList: 'Kopiuj listę',
    resultLabel: 'Potrzebujesz:',
    resultUnit: 'Metry',
    shopAdviceFormat: 'Poproś o {m}m w sklepie',
    boardEmpty: 'Wybierz projekt, aby zobaczyć układ',
    boardDescFormat: 'Szerokość: {w}cm | Długość: {m}m',
    merchTitle: 'Pasmanteria i Materiały',
    checklistThread: 'Dopasowane nici',
    warningSerialFormat: 'Przy tkaninach o szerokości {w}cm elementy Twojego rozmiaru nie mieszczą się równolegle. Zużycie dostosowane do krojenia szeregowego.',
    foldLabel: '⊟ złożenie',
    pieceNames: {
      front: 'Przód',
      back: 'Tył',
      waistband: 'Pasek',
      waistbelt: 'Szlufka',
      sleeve: 'Rękaw',
      collar: 'Kołnierz',
      cuffs: 'Mankiety',
      facings: 'Obłożenia',
      lapels: 'Patki',
      pocket: 'Kieszeń',
      body: 'Body',
      handleA: 'Rączka A',
      handleB: 'Rączka B',
    },
  },
};
