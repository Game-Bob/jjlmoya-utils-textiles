import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShoeSizeConverterUI } from '../ui';

const slug = 'ayakkabi-numarasi-donusturucu';
const title = 'Ayakkabı Numarası Dönüştürücü';
const description = 'Ayakkabı numaralarını Amerika Birleşik Devletleri (US), Avrupa (EU), Birleşik Krallık (UK) ve santimetre (CM) sistemleri arasında dönüştürün. Erkek ve kadın ayakkabı rehberi.';

const faqData = [
  {
    question: 'Amerika Birleşik Devletleri (US) ayakkabı numaramı nasıl öğrenebilirim?',
    answer: 'Erkekler için US numarası genellikle UK numarasından bir birim daha yüksektir. Kadınlar için ölçek farklıdır. En doğru yöntem, ayağınızı santimetre cinsinden ölçmek ve tam US numaranızı elde etmek için dönüştürücümüzü kullanmaktır.',
  },
  {
    question: 'UK ve US ayakkabı numarası arasındaki fark nedir?',
    answer: 'Her ikisi de emperyal sistemi kullanmasına rağmen başlangıç noktaları farklıdır. Genellikle, erkek ayakkabısında 8 UK numara, 9 US numaraya eşittir.',
  },
  {
    question: 'CM numarasını bilmek için ayağımı nasıl ölçerim?',
    answer: 'Topuğunuzu bir duvara yaslayın, en uzun parmağınızın bittiği yeri işaretleyin ve mesafeyi ölçün. Santimetre (CM) cinsinden bu ölçüm, uluslararası markalardan ayakkabı alırken en güvenilir olanıdır.',
  },
];

const howToData = [
  {
    name: 'Cinsiyet Seçin',
    text: 'Ölçekler değiştiği için erkek veya kadın numarası aradığınızı belirtin.',
  },
  {
    name: 'Bölge Seçin',
    text: 'Bildiğiniz numara sistemini belirtin (EU, US, UK veya CM).',
  },
  {
    name: 'Numaranızı Seçin',
    text: 'Seçiciyi kullanın veya doğrudan Avrupa numaraları tablosuna tıklayın.',
  },
  {
    name: 'Karşılıkları Görün',
    text: 'Dünyanın geri kalan bölgelerindeki karşılık gelen numarayı anında görün.',
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

export const content: ToolLocaleContent<ShoeSizeConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    { name: 'Shoe size conversion - Wikipedia', url: 'https://en.wikipedia.org/wiki/Shoe_size' },
    { name: 'ISO 9407: Shoe sizes - Mondopoint system', url: 'https://www.iso.org/standard/17157.html' },
    { name: 'Shoe size conversion - Zappos', url: 'https://www.zappos.com/c/shoe-size-conversion' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ayakkabı Numarası Dönüştürücü: Tam Uluslararası Rehber',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uluslararası mağazalardan ayakkabı satın almak lojistik bir zorluk olabilir. <strong>Ayakkabı numarası dönüştürücü</strong>, gereksiz iadeleri önlemek ve Amazon, AliExpress veya özel bir spor mağazasından yapılan her alışverişin başarılı olmasını sağlamak için temel bir araçtır.',
    },
    {
      type: 'title',
      text: 'Ayakkabı numarası karşılıkları nasıl çalışır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ayakkabı dünyası birleşik değildir. Tarihsel olarak her bölge, inç veya "Paris noktası" gibi yerel ölçü birimlerine dayalı kendi sistemini geliştirmiştir.',
    },
    {
      type: 'list',
      items: [
        '<span><strong>EU Numaraları (Avrupa):</strong> 2/3 santimetreye eşit olan "Paris Noktası"na dayanır. Türkiye\'de en yaygın sistemdir.</span>',
        '<span><strong>US Numaraları (Amerika Birleşik Devletleri):</strong> Erkekler ve kadınlar için farklı bir başlangıç noktasıyla inç kullanırlar.</span>',
        '<span><strong>UK Numaraları (Birleşik Krallık):</strong> Yine emperyal sistemdedir ancak ABD numaralarından bir birim daha düşük ölçeklere sahiptir.</span>',
        '<span><strong>CM Numara / Mondopoint:</strong> En doğru olanıdır. Doğrudan ayağın santimetre cinsinden uzunluğunu kullanır.</span>',
      ],
    },
    {
      type: 'title',
      text: 'Ayağınızı ölçmek ve tam numaranızı bulmak için rehber',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dönüştürücüyü kullanmadan önce, ayağınızın gerçek ölçüsünü bilmek hayati önem taşır. Ayakkabılarda temel ölçüm, topuktan en uzun parmağa kadar olan ayak uzunluğudur.',
    },
    {
      type: 'tip',
      title: 'Profesyonel Tavsiye',
      html: 'Ayaklarınızı günün sonunda ölçün. Ayaklar aktivite ve ısı ile şişme eğilimindedir, bu nedenle sabah yapılan bir ölçüm, öğleden sonra sizi sıkan ayakkabılara neden olabilir.',
    },
    {
      type: 'title',
      text: 'Numaralar neden spor ayakkabı markaları arasında değişir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Neden Nike\'da 42 numara giyerken Adidas\'ta 41 1/3 giyiyorsunuz? Markalar kendi "kalıplarını" kullanırlar. Bazı spor markaları küçük kalıba sahip olma eğilimindedir, bu da normalden yarım numara daha büyük almayı zorunlu kılar.',
    },
  ],
  ui: {
    genderMenTitle: 'Erkek Ayakkabı',
    genderWomenTitle: 'Kadın Ayakkabı',
    regionLabel: 'Numara Sisteminiz',
    regionEU: 'Avrupa (EU)',
    regionUS: 'Amerika Birleşik Devletleri (US)',
    regionUK: 'Birleşik Krallık (UK)',
    regionCM: 'Mondopoint (CM)',
    gridTitle: 'Numaranızı Seçin',
    gridDesc: 'Uluslararası karşılıkları görmek için tıklayın',
    labelEU: 'Avrupa (EU)',
    labelUS: 'ABD (US)',
    labelUK: 'Birleşik Krallık (UK)',
    labelCM: 'Mondopoint',
    unitCM: 'cm',
    infoBannerHtml: '<strong>CM</strong> numarası, ayağın fiziksel uzunluğunu temsil eder. Uluslararası markalardan spor ayakkabı almak için en güvenilir yöntemdir.',
    menData: [
      { EU: '39', US: '6.5', UK: '6', CM: '24.5' },
      { EU: '40', US: '7.5', UK: '7', CM: '25.0' },
      { EU: '40.5', US: '8', UK: '7.5', CM: '25.5' },
      { EU: '41', US: '8.5', UK: '8', CM: '26.0' },
      { EU: '42', US: '9', UK: '8.5', CM: '26.5' },
      { EU: '42.5', US: '9.5', UK: '9', CM: '27.0' },
      { EU: '43', US: '10', UK: '9.5', CM: '27.5' },
      { EU: '44', US: '10.5', UK: '10', CM: '28.0' },
      { EU: '44.5', US: '11', UK: '10.5', CM: '28.5' },
      { EU: '45', US: '11.5', UK: '11', CM: '29.0' },
      { EU: '46', US: '12', UK: '11.5', CM: '30.0' },
    ],
    womenData: [
      { EU: '35', US: '5', UK: '3', CM: '22.0' },
      { EU: '36', US: '6', UK: '4', CM: '22.5' },
      { EU: '37', US: '6.5', UK: '4.5', CM: '23.5' },
      { EU: '37.5', US: '7', UK: '5', CM: '23.8' },
      { EU: '38', US: '7.5', UK: '5.5', CM: '24.0' },
      { EU: '38.5', US: '8', UK: '6', CM: '24.5' },
      { EU: '39', US: '8.5', UK: '6.5', CM: '25.0' },
      { EU: '40', US: '9', UK: '7', CM: '25.5' },
      { EU: '41', US: '10', UK: '8', CM: '26.5' },
      { EU: '42', US: '11', UK: '9', CM: '27.0' },
    ],
  },
};
