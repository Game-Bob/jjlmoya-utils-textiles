import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FabricProjectCalculatorUI } from '../ui';

const slug = 'kumas-ihtiyaci-hesaplama-proje';
const title = 'Ürün Başına Kumaş Sarfiyat Hesaplayıcı';
const description =
  'Etek, pantolon, elbise veya gömlek dikmek için ne kadar kumaşa ihtiyacınız olduğunu kolayca hesaplayın. Profesyonel bir kesim için kumaş genişliği ve bedene göre ayarlayın.';

const faqData = [
  {
    question: 'Bir etek için ne kadar kumaşa ihtiyacım var?',
    answer:
      'Kumaş genişliğine bağlıdır. 140-150 cm genişliğindeki kumaşlarda düz bir etek için genellikle 1.20 metre yeterlidir. Kumaş 90-110 cm genişliğindeyse 2.00 metreye ihtiyacınız olacaktır.',
  },
  {
    question: 'Kumaş genişliği sarfiyatı nasıl etkiler?',
    answer:
      'Genişlik azaldığında, kalıp parçaları yan yana (paralel) sığmaz, bu nedenle parçaları alt alta yerleştirmek zorunda kalacağınız için sarfiyat genellikle iki katına çıkar.',
  },
  {
    question: 'Daha fazla kumaş almak daha mı iyi?',
    answer:
      'Evet, çekme, kumaş hataları veya beklenmedik dikiş paylarını telafi etmek için %10\'luk bir marj (yaklaşık 20 cm) önerilir.',
  },
  {
    question: 'Kumaşın boy ipliği nedir ve dikişi nasıl etkiler?',
    answer:
      'Kumaşın kenarlarına paralel olan yöndür. Giysinin kullanım sırasında deforme olmaması için kalıpların bu ipliğe göre hizalanması gerekir.',
  },
];

const howToData = [
  {
    name: 'Ürün Türünü Seçin',
    text: 'Temel sarfiyat tablosunu yüklemek için dikeceğiniz modeli (etek, pantolon vb.) seçin.',
  },
  {
    name: 'Kumaş Genişliğini Girin',
    text: 'Satın almayı planladığınız kumaşın kenardan kenara genişliğini (90, 115, 140 veya 150 cm) ölçün.',
  },
  {
    name: 'Bedeni Seçin',
    text: 'Çarpan faktörünü yeniden hesaplamak için ürünün hacmini bedene göre (XS-S, M-L, XL-XXL) ayarlayın.',
  },
  {
    name: 'Toplam Metreyi Alın',
    text: 'Mağazada tam olarak ne kadar isteyeceğinizi bilmek için dikiş payı olan ve olmayan nihai sonucu kontrol edin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<FabricProjectCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
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
      text: 'Konfeksiyon İçin Kumaş Metre Hesaplayıcı: Sarfiyat Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dikiş atölyesinde en sık sorulan sorulardan biri, belirli bir proje için ne kadar kumaş satın alınacağını belirlemektir. Kumaş sarfiyatı kökten üç faktöre bağlıdır: giysinin modeli, kişinin bedeni ve her şeyden önemlisi, kumaş parçasının genişliği (genellikle 90 cm ile 150 cm arasında değişir). Bu teknik hesaplayıcı, fazla satın almamanız veya kesimin ortasında kumaşsız kalmamanız için hesaplamayı sistemleştirir.',
    },
    {
      type: 'title',
      text: 'Bir elbise veya pantolon için ne kadar kumaşa ihtiyacım var?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geleneksel hesaplama, giysi boyuna kol boyunun eklenmesi ve temizleme payları ile etek baskısı için bir marj eklenmesine dayanır. Ancak kumaş dar olduğunda (90-110 cm), parçalar genellikle yan yana sığmaz, bu da boyun iki katı kadar kumaş satın almanızı zorunlu kılar. Aracımız, tekstil endüstrisi standartlarına göre bu varyasyonları otomatik olarak dikkate alır.',
    },
    {
      type: 'title',
      text: 'Kumaş Genişliğine Göre Tahmini Sarfiyat (M-L beden)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Düz Etek:</strong> 90 cm kumaşta 2.00 m · 140/150 cm kumaşta 1.20 m.',
        '<strong>Uzun Pantolon:</strong> 90 cm kumaşta 2.50 m · 140/150 cm kumaşta 1.50 m.',
        '<strong>Uzun Kollu Gömlek:</strong> 90 cm kumaşta 2.20 m · 140/150 cm kumaşta 1.40 m.',
        '<strong>Temel Elbise:</strong> 90 cm kumaşta 3.50 m · 140/150 cm kumaşta 2.20 m.',
      ],
    },
    {
      type: 'title',
      text: 'Kumaş Sarfiyatını Değiştiren Faktörler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Desen yönü (Rapport):</strong> Kumaşın net bir yönü olan bir deseni veya eşleşmesi gereken kareleri varsa, %15 ile %20 arasında ekstra malzemeye ihtiyacınız olacaktır.',
        '<strong>Verev yönü (Al bies):</strong> Verev kesimler veya dairesel kesimler (kloş etekler gibi), açılardaki fire nedeniyle önemli ölçüde daha fazla kumaş tüketir.',
        '<strong>Tüy yönü:</strong> Kadife veya fitilli kadife gibi dokumalarda, tüm parçalar aynı yönde kesilmelidir, bu da alan optimizasyonunu kısıtlar.',
        '<strong>Çekme:</strong> Birçok doğal dokuma (pamuk, keten, yün) ilk yıkamadan sonra çeker. Kumaşı kesmeden önce ön yıkama yapmak hayati önem taşır.',
      ],
    },
    {
      type: 'tip',
      title: 'Terzi Tavsiyesi',
      html: '<p>Büyük bir deseni veya kareleri (plaid) olan bir kumaş kullanacaksanız, yalnızca standart ölçüye güvenmeyin. Yan dikişlerde desenlerin çakışmasını garanti etmek için hesaplanan toplam metreye daima desenin tam bir tekrarını (rapport) ekleyin.</p>',
    },
    {
      type: 'title',
      text: 'Bu Hesaplayıcının Avantajları ve Sınırlamaları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Beden ayarı ile birden fazla kumaş genişliği için anında hesaplama.',
        'Özelleştirilebilir dikiş payı tahmini içerir.',
        'Kumaş üzerindeki parça yerleşimine dair görsel kılavuz.',
        'Gerçek bir kalıp yerleşiminin (pastal) yerini tutmaz. Büyük bedenler ek manuel ayarlamalar gerektirebilir.',
      ],
    },
    {
      type: 'card',
      title: 'Kumaş eni',
      icon: 'mdi:arrow-expand-horizontal',
      html: 'Kumaşın <strong>kenardan kenara</strong> olan enlemesine ölçüsüdür. Kalıp parçalarının yan yana mı yoksa arka arkaya mı yerleştirileceğini belirler.',
    },
    {
      type: 'card',
      title: 'Dikiş payı',
      icon: 'mdi:tape-measure',
      html: 'Kalıp kenarı ile <strong>nihai dikiş hattı</strong> arasındaki mesafedir. Giysi dikişleri için standart bir değer 1.5 cm\'dir.',
    },
    {
      type: 'card',
      title: 'Kumaş kenarı (Selvedge)',
      icon: 'mdi:content-cut',
      html: 'Kumaşın <strong>sökülmeyen</strong> takviyeli yan kenarlarıdır. İplik yönünü gösterir ve kesim için referans işlevi görür.',
    },
  ],
  ui: {
    sectionProject: 'Proje',
    sectionMaterial: 'Malzeme',
    labelGarmentType: 'Ürün türü',
    labelSize: 'Beden',
    labelFabricWidth: 'Kumaş genişliği (cm)',
    labelSeamAllowance: 'Dikiş payı (cm)',
    garmentSkirt: 'Etek (Düz/Çan)',
    garmentPants: 'Pantolon',
    garmentDress: 'Elbise',
    garmentShirt: 'Gömlek / Bluz',
    garmentCoat: 'Palto / Ceket',
    garmentTote: 'Tote Bag',
    garmentMerceria: {
      skirt: '1 fermuar 20cm, 1 düğme',
      pants: '1 fermuar 20cm, 1 düğme, 30cm tela',
      dress: '1 fermuar 60cm, 50cm tela',
      shirt: '7 düğme, 1m ince tela',
      coat: '3 büyük düğme, 1.5m tela, astar',
      tote: '2m tutacak şeridi',
    },
    sizeXS: 'XS-S',
    sizeM: 'M-L',
    sizeXL: 'XL-XXL',
    width90: '90 cm (Dar)',
    width115: '115 cm (Patchwork)',
    width140: '140 cm (Standart EU)',
    width150: '150 cm (Döşemelik)',
    btnClear: 'Temizle',
    btnShare: 'Paylaş',
    btnCopied: 'Kopyalandı!',
    btnCopyList: 'Listeyi kopyala',
    resultLabel: 'İhtiyacınız olan:',
    resultUnit: 'Metre',
    shopAdviceFormat: 'Mağazada {m}m isteyin',
    boardEmpty: 'Yerleşimi görmek için bir proje seçin',
    boardDescFormat: 'En: {w}cm | Boy: {m}m',
    merchTitle: 'Tuhafiye ve Malzemeler',
    checklistThread: 'Uygun renkte iplik',
    warningSerialFormat: '{w}cm genişliğindeki kumaşlarda bedeninizin parçaları yan yana sığmaz. Sarfiyat seri kesim için ayarlanmıştır.',
    foldLabel: '⊟ kumaş katı',
    pieceNames: {
      front: 'Ön',
      back: 'Arka',
      waistband: 'Kemer',
      waistbelt: 'Kemer Köprüsü',
      sleeve: 'Kol',
      collar: 'Yaka',
      cuffs: 'Manşetler',
      facings: 'Pervazlar',
      lapels: 'Klapa',
      pocket: 'Cep',
      body: 'Gövde',
      handleA: 'Tutacak A',
      handleB: 'Tutacak B',
    },
  },
};
