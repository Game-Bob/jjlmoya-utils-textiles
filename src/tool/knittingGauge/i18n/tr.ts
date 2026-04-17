import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KnittingGaugeUI } from '../ui';

const slug = 'orgu-gauge-ilmek-gerginlik-hesaplayici';
const title = 'Örgü Gauge ve İlmek Gerginliği Hesaplayıcı';
const description =
  'Herhangi bir örgü veya tığ işi modelinin ilmek ve sıra sayılarını kolayca yeniden hesaplayın. Profesyonel bir sonuç için gauge değerini motif katlarına ve ölçek faktörüne göre ayarlayın.';

const faqData = [
  {
    question: 'Örgüde gerginlik veya gauge (ölçek) nedir?',
    answer:
      'Belirli bir alana (genellikle 10x10 cm) kaç ilmek ve sıranın sığdığının ölçüsüdür. Kullanılan şiş ve ipliğe göre giysinin son boyutunu belirlediği için temeldir.',
  },
  {
    question: 'Gauge değişikliği boyutu nasıl etkiler?',
    answer:
      'Gerginliğiniz modelde belirtilenden santimetre başına daha fazla ilmeğe sahipse, giysi daha küçük olacaktır. Daha az ilmeğe sahipseniz, giysi daha büyük olacaktır. Bu nedenle ilmekleri yeniden hesaplamak veya şiş numarasını değiştirmek hayati önem taşır.',
  },
  {
    question: 'Katlara göre ayarlama neden önemlidir?',
    answer:
      'Birçok modelin tamamlanması için belirli bir ilmek sayısına (katlarına) ihtiyaç duyan motifleri (ajurlar, saç örgüleri, desenler) vardır. Hesaplayıcımız, tasarımı bozmamak için toplamı en yakın kata ayarlar.',
  },
  {
    question: 'Ölçüm yapmadan önce numuneyi yıkamalı mıyım?',
    answer:
      'Evet, her zaman. "Bloklama" (yıkama ve şekil verme) lifleri rahatlatır ve giysinin ilk kullanım ve yıkamadan sonra sahip olacağı gerçek gerginliği gösterir.',
  },
];

const howToData = [
  {
    name: 'Modelin gerginliğini belirleyin',
    text: 'Model talimatlarında 10x10 cm veya 4x4 inçlik bir numune için kaç ilmek ve sıra belirtildiğini bulun.',
  },
  {
    name: 'Kendi numunenizi örün ve ölçün',
    text: 'Kendi ipliğiniz ve şişlerinizle bir numune örün, bloklayın ve aynı alanda kaç ilmek ve sıranız olduğunu ölçün.',
  },
  {
    name: 'Hesaplayıcıyı yapılandırın',
    text: 'Model numune verilerini ve kendi gerçek numune verilerinizi girin. Bedeninizin toplam ilmek sayısını ve varsa motif katlarını ekleyin.',
  },
  {
    name: 'Sonuçları alın',
    text: 'Başlanacak yeni ilmek sayısını ve giysi boyunu da ayarlamanız gerekip gerekmediğini anlamak için ölçek faktörünü inceleyin.',
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

export const content: ToolLocaleContent<KnittingGaugeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'The Importance of Gauge - Tin Can Knits',
      url: 'https://blog.tincanknits.com/2013/08/17/gauge/',
    },
    {
      name: 'Knitting Gauge: How to Measure Stitches and Rows',
      url: 'https://elizabethsmithknits.com/2020/10/30/how-to-measure-your-gauge-swatch/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Örgü Gauge ve Gerginlik Hesaplayıcı: Teknik Kılavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eğer bir dev için tasarlanmış gibi görünen bir kazak veya başınızın tepesini zor örten bir bere bitirdiyseniz, <strong>gauge (ölçek) veya gerginliğin</strong> önemini zaten biliyorsunuzdur. Örgü ve tığ işi dünyasında gerginlik, ipliğin kalınlığı, şiş boyutu ve her örücünün ilmeği işleme gücü arasındaki ilişkidir. Hiçbir iki örücü birbirinin aynısı değildir ve bu nedenle iki gerginlik de aynı olamaz.',
    },
    {
      type: 'title',
      text: 'Örgüde Gerginlik veya Gauge Neden Hayatidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu örgü gauge hesaplayıcısı, matematiksel tahminleri ortadan kaldırmak ve yaratıcılığa odaklanmanıza izin vermek için tasarlanmış teknik bir araçtır. Modeldeki numune verilerini ve kendi numunenizi girerek, tam olarak beklediğiniz boyutlara sahip son giysiyi elde etmenizi sağlayacak hassas ilmek ve sıra ayarlamaları alırsınız.',
    },
    {
      type: 'title',
      text: 'Örgü gerginlik hesaplayıcısı nasıl kullanılır?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bir numune örün:</strong> Kendinizi 10x10 cm ile sınırlamayın. Kenarların merkezi ölçümü bozmaması için en az 15x15 cm örün.',
        '<strong>Numunenizi bloklayın:</strong> Bitmiş giysiye yapacağınız gibi numuneyi yıkayın ve kurutun. Birçok yün lifi ıslandığında genişler veya büyür.',
        '<strong>Hassas ölçün:</strong> Sert bir cetvel veya 10 cm\'lik gauge ölçer kullanın. Yatay olarak kaç ilmek ve dikey olarak kaç sıra sığdığını sayın.',
        '<strong>Verileri girin:</strong> Sol sütuna model değerlerini ve sağ sütuna kendi gerçek değerlerinizi yerleştirin. Araç, istediğiniz genişliğe ulaşmak için kaç ilmeğe ihtiyacınız olduğunu otomatik olarak yeniden hesaplayacaktır.',
      ],
    },
    {
      type: 'title',
      text: 'Sonuçların Yorumlanması: Ölçek Faktörü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ölçek faktörü, modeldeki her talimata uyguladığımız çarpandır. Gerginliğiniz 22 ilmekse ve model 20 istiyorsa, ölçek faktörünüz 1.1\'dir. Bu, aynı fiziksel genişliği elde etmek için %10 daha fazla ilmeğe ihtiyacınız olduğu anlamına gelir. %0-2 sapma idealdir, %2-10 orta düzeydedir, %10-25 zorunlu yeniden hesaplama gerektirir ve %25\'ten fazlası yapısal bir risk oluşturur.',
    },
    {
      type: 'title',
      text: 'Katların ve Motiflerin İşlenmesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir modeli yeniden hesaplarken karşılaşılan en büyük zorluklardan biri ajurların, saç örgülerinin veya motiflerin bütünlüğünü korumaktır. Eğer tasarım her 8 ilmekte bir tekrarlanıyorsa, sadece 3 ilmek ekleyemezsiniz; toplamın 8\'in katı olarak kalması için ayarlama yapmalısınız. Bu hesaplayıcının <strong>katlara göre ayarlama</strong> işlevi, tasarımın mimarisine saygı duyan en yakın ilmek sayısını önerir.',
    },
    {
      type: 'tip',
      title: 'Uzman Tavsiyesi',
      html: '<p>Şiş numarasını kökten değiştirerek gerginliği zorlamak yerine, bu hesaplayıcıyı kullanarak ipliğinizin doğal gerginliğiyle çalışmak ve ilmek sayısını uyarlamak genellikle daha iyidir; çünkü şiş boyutunu değiştirmek dokunun dökümünü ve yumuşaklığını bozabilir.</p>',
    },
    {
      type: 'title',
      text: 'Ayarlama aracımızı kullanmanın avantajları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Hassas ölçek faktörü ile ilmek ve sıraların otomatik ayarlanması.',
        'Motif bütünlüğünü korumak için karmaşık katlar (X + Y) desteği.',
        'Tüm proje için gereken yün gramaj tahmini.',
        'Örgü yoğunluğunu gerçek zamanlı gösteren dinamik numune görselleştirici.',
      ],
    },
    {
      type: 'card',
      title: 'Gauge / Gerginlik',
      icon: 'mdi:ruler',
      html: '<strong>10x10 cm</strong> veya <strong>4x4 inçlik</strong> bir kare içindeki ilmek ve sıra sayısıdır. Tüm örgü modellerinin evrensel referansıdır.',
    },
    {
      type: 'card',
      title: 'Bloklama',
      icon: 'mdi:water',
      html: 'İlmeklerin yerleşmesi için giysiyi nemlendirme ve şekil verme işlemidir. Giysinin ilk kullanım ve yıkamadan sonra sahip olacağı <strong>gerçek gerginliği</strong> ortaya çıkarır.',
    },
    {
      type: 'card',
      title: 'Ölçek Faktörü',
      icon: 'mdi:scale',
      html: 'Model numunesi ile örücünün gerçek numunesi arasındaki matematiksel orandır. <strong>Doğru boyutları</strong> korumak için kaç ilmek ve sıranın ayarlanacağını belirler.',
    },
  ],
  ui: {
    sectionOriginalGauge: 'Orijinal Gerginlik',
    sectionMyGauge: 'Mevcut Numuneniz',
    sectionProject: 'Proje Yapısı',
    labelStitches: 'İlmekler',
    labelRows: 'Sıralar',
    labelWidth: 'Genişlik',
    labelLength: 'Uzunluk',
    labelUnit: 'Ölçü Birimi',
    labelNeedle: 'Şiş',
    labelNeedleMm: 'Şiş (mm)',
    labelWeight: 'Ağırlık (g)',
    labelWeightOptional: 'isteğe bağlı',
    labelPatternSts: 'Model İlmekleri',
    labelPatternRows: 'Model Sıraları',
    labelMultiples: 'Katlar',
    labelMultiplesExample: 'Örn: 10 + 2',
    labelMultiplesPlaceholder: 'Kat + Kenar',
    unitEU: '10 x 10 cm (AB Standardı)',
    unitUS: '4 x 4 inç (ABD Standardı)',
    btnClear: 'Temizle',
    btnShare: 'Paylaş',
    btnCopied: 'Kopyalandı!',
    resSuggestedSts: 'Başlanması önerilen ilmek sayısı',
    resNewRows: 'Yeni Sıra Sayısı',
    resNewRowsTooltip: 'Mevcut gerginliğinizle orijinal model boyuna ulaşmak için gereken sıra sayısı.',
    resScaleFactor: 'Ölçek Faktörü',
    resScaleFactorTooltip: 'Örgünüz ile model arasındaki boyut ilişkisi. Negatif bir değer örgünüzün daha sıkı olduğunu gösterir.',
    resSuggestion: 'Öneri',
    resSuggestionTooltip: 'Modelin her ilmeğini yeniden hesaplamak zorunda kalmadan gerginliğinizi ayarlamak için teknik öneri.',
    suggestionIdeal: 'İdeal',
    suggestionDown: 'Şiş Numarasını Düşürün',
    suggestionUp: 'Şiş Numarasını Yükseltin',
    suggestionDownDetail: '{n}mm veya daha küçük numara şiş kullanın.',
    suggestionUpDetail: '{n}mm veya daha büyük numara şiş kullanın.',
    multiplesNoteFormat: '{n} ilmeğe göre ayarlandı (Kat {m})',
    yarnTitle: 'Proje İçin İplik Tahmini',
    yarnResultFormat: 'Tahmini iplik: <strong>{g}g</strong>',
    yarnSafetyFormat: '(+{s}g güvenlik payı)',
    alertDanger: 'Aşırı fark (>%25). Giysinin dökümü ve yapısı bozulacaktır.',
  },
};
