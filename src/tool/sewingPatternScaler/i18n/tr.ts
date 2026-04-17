import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SewingPatternScalerUI } from '../ui';

const slug = 'dikis-kalibi-olceklendirici';
const title = 'Online Dikiş Kalıbı Ölçeklendirme (Serileme) Aracı';
const description = 'Herhangi bir dikiş kalıbını gerçek vücut ölçülerinize göre ayarlayın. Güncellenmiş kalıp önizlemeli diferansiyel ölçeklendirme hesaplayıcısı.';

const faqData = [
  {
    question: 'Omuz neden göğüsle aynı oranda büyümüyor?',
    answer: 'İnsan vücudu bir küre değildir. Gövde hacmi önemli ölçüde değişebilirken, iskelet ve omuz gibi eklem noktaları çok daha statiktir. Profesyonel bir serileme (grading), giysinin dengesini bozmamak için bölgelere göre farklı katsayılar uygular.',
  },
  {
    question: '"Rahatlık payı" veya "ease" nedir?',
    answer: 'Vücudunuz ile kumaş arasındaki fazladan boşluktur. Rahatlık payı olmasaydı hareket edemezdiniz. Hesaplayıcımız bu payı korur, böylece giysi tasarımcının hayal ettiği gibi durur ancak sizin gerçek hatlarınıza uyarlanır.',
  },
  {
    question: 'Örgü veya jarse kalıbını ölçeklendirebilir miyim?',
    answer: 'Evet, ancak elastik kumaşların genellikle negatif rahatlık payına sahip olduğunu unutmayın. Kalıp çok darsa, seçeceğiniz yeni kumaşın esneklik faktörünün orijinaliyle aynı olduğundan emin olun.',
  },
];

const howToData = [
  {
    name: 'Kalıbınızı ölçün',
    text: 'Orijinal kağıt kalıp parçalarınız üzerindeki temel yatay çizgileri (göğüs, bel ve kalça) dikişten dikişe ölçün.',
  },
  {
    name: 'Kaynağı yapılandırın',
    text: 'Kalıp bedenini veya aldığınız ölçüleri aracımızdaki "Kaynak" (Origin) sütununa girin.',
  },
  {
    name: 'Hedefi girin',
    text: 'Gerçek ölçülerinizi veya ulaşmak istediğiniz hedef bedeni girin. Araç, bölge başına tam farkı hesaplayacaktır.',
  },
  {
    name: 'Kesim masasında uygulayın',
    text: 'Parçalarınızın yanlarına ve etek uçlarına santimetre eklemek veya çıkarmak için "Kesim Masası İşlemleri" talimatlarını izleyin.',
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

export const content: ToolLocaleContent<SewingPatternScalerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'Patronaje: Las Bases - Teresa Gilewska',
      url: 'https://www.scribd.com/document/696165843/patronaje-las-bases-by-teresa-gilewska',
    },
    {
      name: 'Metric Pattern Cutting for Women\'s Wear - Winifred Aldrich',
      url: 'https://download.e-bookshelf.de/download/0000/5989/88/L-G-0000598988-0002339537.pdf',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dikiş Kalıpları Nasıl Ölçeklendirilir: Teknik ve Pratik Kılavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kalıp ölçeklendirme</strong> (grading), konfeksiyon dünyasındaki en kritik becerilerden biridir. Bu sadece bir çizimi orantılı olarak büyütmek veya küçültmek değildir; iki boyutlu bir yapıyı, doğrusal olarak büyümeyen insan vücudunun karmaşık kıvrımlarına ve oranlarına uyarlamakla ilgilidir.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Çevrimdışı', label: 'Yerel Hesaplamalar', icon: 'mdi:calculator' },
        { value: 'Diferansiyel', label: 'Orantılı Ölçeklendirme', icon: 'mdi:resize' },
        { value: '100%', label: 'Güvenli ve Özel', icon: 'mdi:lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Kalıp ölçeklendirme tam olarak nedir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ölçeklendirme (veya <em>serileme</em>), bir dizi farklı beden oluşturmak için temel bir kalıbın boyutunu artırma veya azaltma teknik sürecidir. Basit bir yakınlaştırmanın aksine ölçeklendirme, vücudun belirli bölümlerinin diğerlerinden daha fazla büyüyeceğini dikkate alır. Örneğin, göğüs çevresi bedenler arasında genellikle omuz genişliği veya gövde boyundan daha fazla değişir.',
    },
    {
      type: 'title',
      text: 'Başarının Sırrı: Rahatlık Payı (Ease)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Hareket rahatlığı:</strong> Nefes alabilmeniz, oturabilmeniz ve kollarınızı hareket ettirebilmeniz için kumaşın yırtılmamasını sağlayan fazladan santimetreler.',
        '<strong>Tasarım rahatlığı:</strong> Tasarımcının belirli bir siluet (örneğin, oversize bir palto veya dökümlü bir bluz) oluşturmak için eklediği santimetreler.',
      ],
    },
    {
      type: 'title',
      text: 'Yatay ve Dikey Ölçeklendirme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Yatay Eksen (Çevreler):</strong> Göğüs, Bel, Kalça. En büyük ayarlamayı gerektirir. Her bir kalıp parçası için dörde bölünür.',
        '<strong>Dikey Eksen (Boylar):</strong> Ön boy, arka boy, toplam boy. Penslerin konumunu ve bel hattını etkiler. Ardışık bedenler arasındaki varyasyon daha düşüktür.',
      ],
    },
    {
      type: 'title',
      text: 'Kalıp Ölçeklendirici Nasıl Kullanılır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kalıbınızı ölçün:</strong> Kağıt kalıp parçasını alın ve göğüs, bel ve kalça çizgilerinde kenardan kenara ölçün.',
        '<strong>Kaynak ölçüleri girin:</strong> Bu ölçüleri sol sütuna yazın ve bu kalıbın hangi bedeni temsil ettiğini belirtin.',
        '<strong>Kendi ölçülerinizi veya hedef bedeni girin:</strong> Sağ sütuna gerçek ölçülerinizi veya ulaşmak istediğiniz bedeni girin.',
        '<strong>Sonuçları yorumlayın:</strong> Hesaplayıcı, her bir spesifik alanda ne kadar ekleme veya çıkarma yapmanız gerektiğini gösterecektir.',
      ],
    },
    {
      type: 'tip',
      title: 'Profesyonel Serileme İçin Tavsiye',
      html: '<p><strong>İki veya üç bedenden fazla ölçeklendirmeyin:</strong> 36 bedenden 52 bedene geçmeye çalışırsanız, kol oyuntusunun (pazu) deforme olması ve yaka açıklığının çok büyük kalması kuvvetle muhtemeldir. Bu durumlarda, temel kalıbı kendi ölçülerinizle sıfırdan çizmek daha iyidir.</p>',
    },
    {
      type: 'title',
      text: 'Dijital ölçeklendirmenin avantajları',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Orijinal tasarımın tam oranını korur.',
          con: 'Kol oyuntuları hafif bir manuel düzeltme gerektirebilir.',
        },
        {
          pro: 'Gerekli rahatlık payının anında hesaplanması.',
          con: 'Kalıbın dikiş payı içerip içermediğini otomatik olarak algılamaz.',
        },
        {
          pro: 'Parçanın büyümesinin grafiksel görselleştirmesi.',
          con: 'Çok hassas bir ilk ölçüm alımı gerektirir.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diferansiyel', definition: 'İki ardışık beden arasındaki ölçü farkı.' },
        { term: 'Sabitleme Noktaları', definition: 'Kalıbın hareket etmeyen bölgeleri (genellikle ön/arka orta çizgi).' },
        { term: 'Serileme Yuvası (Grading Nest)', definition: 'Ölçeklendirilmiş tüm bedenlerin üst üste binmiş çizimi.' },
        { term: 'Temel Kalıp', definition: 'Vücut ölçülerine karşılık gelen, tasarım veya pay içermeyen şablon.' },
      ],
    },
  ],
  ui: {
    labelSystem: 'ÇALIŞMA SİSTEMİ',
    modeStandard: 'Standart Bedenler',
    modeCustom: 'Gerçek Ölçüler',
    labelPatternSize: 'Kalıp Bedeni',
    labelTargetSize: 'Hedef Beden',
    labelOriginMeasures: 'KAYNAK ÖLÇÜLER',
    labelTargetMeasures: 'ÖLÇÜLERİNİZ',
    labelEase: 'Mevcut Rahatlık Payı (Ease)',
    labelChest: 'Göğüs',
    labelWaist: 'Bel',
    labelHips: 'Kalça',
    labelLength: 'Boy',
    resBust: 'Göğüs',
    resWaist: 'Bel',
    resHips: 'Kalça',
    resLength: 'Boy',
    actionLatAdd: 'Ekle',
    actionLatRemove: 'Çıkar',
    actionLatSuffix: 'parçanın yanından',
    actionLatNote: 'Kalıp çeyreği başına ayarlama',
    actionLenExtend: 'Kalıbı uzat',
    actionLenShorten: 'Kalıbı kısalt',
    actionLenNote: 'Etek ucu çizgisinde ayarlama',
    legendOriginal: 'Orijinal',
    legendUpdated: 'Güncellendi',
    warnText: '3 bedenden fazla ölçeklendirme. Kol oyuntusunda deformasyon riski.',
    sizePrefix: 'Beden',
  },
};
