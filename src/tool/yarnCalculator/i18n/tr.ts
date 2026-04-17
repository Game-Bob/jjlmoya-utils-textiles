import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YarnCalculatorUI } from '../ui';

const slug = 'yun-hesaplama-orgu-metik';
const title = 'Yün Hesaplayıcı: Kaç metre ve çile ipe ihtiyacım var?';
const description =
  'Örgü ve tığ işi projeleriniz için gereken yün veya ip miktarını desen ve bedene göre metrik hassasiyetle hesaplayın.';

const faqData = [
  {
    question: 'Neden tığ işi (crochet), şiş örgüsünden daha fazla yün harcar?',
    answer:
      'Tığ işi, üst üste binen düğümler ve halkalar oluşturmaya dayanır, bu da santimetrekare başına daha yoğun ve kalın bir doku oluşturur. Ortalama olarak, bir tığ işi projesi, aynı projenin iki şişle (düz örgü) örülmesine kıyasla %25 ile %35 arasında daha fazla ip tüketir.',
  },
  {
    question: 'Farklı boya lotlarından (Dye Lot) yün alırsam ne olur?',
    answer:
      'Renk mağazada özdeş görünse bile, boyama sırasındaki minimum kimyasal varyasyonlar, birlikte örüldüğünde bitmiş giyside görünür "çizgiler" oluşturabilir. Lot kodunun aynı olduğunu doğrulayarak tüm yünü bir kerede almanız şiddetle tavsiye edilir.',
  },
  {
    question: 'Gerginlik (gauge) nihai tüketimi nasıl etkiler?',
    answer:
      'Gevşek örerseniz, her ilmek daha fazla metre ip tüketir. Eğer gerginlik örneğiniz desende belirtilenden daha büyükse (örneğin 15 ilmek yerine 13 ilmek), yün tüketiminiz önemli ölçüde artacaktır. Önceden bir gerginlik örneği hazırlamak hayati önem taşır.',
  },
  {
    question: 'Sadece çilenin ağırlığına sahipsem metre miktarını nasıl hesaplarım?',
    answer:
      'Metraj bilgisi olmadan bunu belirlemek zordur. Çoğu ipin etiketinde metre bilgisi bulunur. Eğer yoksa, 50g veya 100g başına tam uzunluğu bulmak için Ravelry gibi veritabanlarında ipin adıyla arama yapın.',
  },
];

const howToData = [
  {
    name: 'Projeyi seçin',
    text: 'Özel tüketim temellerini yüklemek için kazağı, atkıyı, bereyi, çorabı veya battaniyeyi seçin.',
  },
  {
    name: 'Beden ve kalınlığı tanımlayın',
    text: 'Nihai boyutları (S, M, L, XL) ve kullanacağınız ipin kalınlığını (Fingering, DK, Worsted, Bulky) belirtin.',
  },
  {
    name: 'Çarpanları etkinleştirin',
    text: 'Eğer deseninizde saç örgüsü veya karmaşık dokular varsa, gerekli eklemeyi yapmak için doku anahtarını etkinleştirin.',
  },
  {
    name: 'Alışveriş listesini alın',
    text: 'Sepete tam olarak kaç adet eklemeniz gerektiğini görmek için seçtiğiniz ipin çile başına metresini yazın.',
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

export const content: ToolLocaleContent<YarnCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'Craft Yarn Council: Standard Yarn Weights & Yardages',
      url: 'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    },
    {
      name: 'Interweave Essentials: Yarn Substitution and Estimation',
      url: 'https://www.interweave.com/article/knitting/yarn-substitution-angelina-take-two/',
    },
    {
      name: 'The Woolery: Fibers and Calculation of Yarn Usage',
      url: 'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Yün Tüketim Rehberi: Projeleriniz için metre ve çile hesabı nasıl yapılır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Örgü planlamasında ustalaşın ve şiş ile tığ işi projeleriniz için hazırladığımız hassas teknik hesaplayıcımızla ipinizin bitmesini önleyin. Örgü ören herkesin en büyük korkularından biri <strong>"Yarn Chicken"</strong>dır: Projenin sonunda, son ilmekleri kapatmadan hemen önce ipin bitecekmiş gibi göründüğü o kritik an. Bu hesaplayıcı, endüstriyel metraj ve gramaj standartlarına dayalı tahminler sunmak için geliştirilmiştir.',
    },
    {
      type: 'stats',
      items: [
        { value: '+10%', label: 'Güvenlik Marjı', icon: 'mdi:security' },
        { value: 'Metrik', label: 'Metre ile Hesaplama', icon: 'mdi:ruler' },
        { value: 'Çevrimdışı', label: 'Yerel Veritabanı', icon: 'mdi:wifi-off' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'İp çilelerinin gramajı neden yanıltıcıdır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pek çok yeni başlayan, yünü sadece ağırlığına göre (örneğin "100g\'lık 6 çile") alma hatasına düşer. Ancak ağırlık bir kütle birimidir, uzunluk değil. Her ikisi de 100g olan iki ipin uzunlukları radikal bir şekilde farklı olabilir: <strong>Bulky</strong> tipi bir ip sadece 80 metre olabilirken, <strong>Fingering / Lace</strong> tipi bir ip aynı ağırlıkta 450 metreyi aşabilir.',
    },
    {
      type: 'paragraph',
      html: 'Bu nedenle hesaplayıcımız her zaman <strong>toplam metreyi</strong> önceliklendirir. Bedeniniz ve projeniz için gereken uzunluğu bildiğinizde, satın almanız gereken kesin birim sayısını elde etmek için bunu seçtiğiniz ipin etiketinde belirtilen metraja bölebilirsiniz.',
    },
    {
      type: 'title',
      text: 'Kalınlığa Göre Standart Metraj Tablosu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elinde orijinal etiket yoksa, tahminlerin için bu referans metrajları (her 100g elyaf için) kullanabilirsin:',
    },
    {
      type: 'table',
      headers: ['Kalınlık (Weight)', 'Yaklaşık Metre / 100g', 'Önerilen Kullanım', 'Önerilen Şişler'],
      rows: [
        ['<strong>Lace / 0</strong>', '600 - 900m', 'Dantel şallar, ajurlu örgüler', '1.5 - 2.5mm'],
        ['<strong>Fingering / 1</strong>', '360 - 450m', 'Çoraplar, bebek kıyafetleri', '2.25 - 3.25mm'],
        ['<strong>Sport / 2</strong>', '270 - 320m', 'Hafif ceketler', '3.25 - 3.75mm'],
        ['<strong>DK / 3</strong>', '200 - 250m', 'Kazaklar, bereler', '3.75 - 4.5mm'],
        ['<strong>Worsted / 4</strong>', '180 - 220m', 'Battaniyeler, paltolar', '4.5 - 5.5mm'],
        ['<strong>Bulky / 5</strong>', '100 - 140m', 'XXL atkılar, battaniyeler', '6.0 - 8.0mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Gerginlik Faktörü (Gauge)',
      html: '<p>Unutmayın, çok gevşek örerseniz ilmekleriniz daha büyük olacak ve sıkı örmeye göre daha fazla ip tüketecektir. Hesaplayıcımız bir güvenlik marjı uygular; ancak gerginliğinizin aşırı gevşek olduğunu biliyorsanız, sürprizleri önlemek için sonuçlara %5-10 eklemeyi düşünün.</p>',
    },
    {
      type: 'title',
      text: 'İp tüketimini artıran değişkenler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tüm örgüler aynı miktarda elyaf tüketmez. Tasarımınızı seçerken bu çarpan faktörlerini göz önünde bulundurun:',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Düz Örgü / Jarse',
          description: 'Herhangi bir giysi için temel tüketimi ve maksimum ip verimliliğini temsil eder.',
          icon: 'mdi:minus-circle-outline',
          points: ['Yeni başlayanlar için ideal', 'Kumaşın doğal dökümü'],
        },
        {
          title: 'Saç Örgüsü / Doku',
          description: 'Liflerin çaprazlanması parçayı "kısaltır", tüketimi yaklaşık %25 oranında artırır.',
          icon: 'mdi:texture-box',
          points: ['Daha fazla metre gerektirir', 'Daha yoğun ve ağır doku'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Tığ İşi (Crochet)',
          description: 'Tığ düğümleri, şiş örgüsüne göre %30 daha fazla ip kullanır.',
          icon: 'mdi:hook',
          points: ['Hızlı ip tüketimi', 'Üç boyutlu doku'],
          pointIcon: 'mdi:alert-circle-outline',
        },
        {
          title: 'Lastik Örgü (Ribbing)',
          description: 'Düz/ters yapısı santimetrekare başına daha fazla yün biriktirir.',
          icon: 'mdi:unfold-more-horizontal',
          points: ['Orta düzey tüketim (+%15)', 'Yüksek esneklik dönüşü'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Tedbirli Örgücü Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dye Lot (Boya Lotu)',
          definition:
            'Yünün boyandığı kazanı tanımlayan numara. Farklı lotlar çilede fark edilmeyen ancak bitmiş üründe çok belirgin renk değişimlerine sahip olabilir.',
        },
        {
          term: 'Stash (Zula)',
          definition:
            'Bir örgücünün kişisel ip koleksiyonu. Etiketsiz kalan iplerin ağırlığını belirlemek küçük projeleri hesaplamak için hayati önem taşır.',
        },
        {
          term: 'Put-up',
          definition:
            'İpin sunulma şekli (çile, yumak veya koni), bu da kullanmadan önce sarılması gerekip gerekmediğini etkiler.',
        },
        {
          term: 'Yarn Chicken',
          definition:
            'Yetersiz görünen bir miktar iple örgünün bir bölümünü bitirmeye çalışma mücadelesi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu hesaplayıcının sonuçları nasıl kullanılır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Araç size metre ve çile sayısını verdiğinde, aşağıdaki manuel doğrulama adımlarını yapmanızı öneririz:',
    },
    {
      type: 'list',
      items: [
        '<strong>Gerçek ipinizin metrajını kontrol edin:</strong> Her 100g\'lık çile 200m olmayabilir. Nihai hesabı ayarlamak için bu veriyi etikette doğrulayın.',
        '<strong>Detaylar için metraj ekleyin:</strong> Eğer bir atkıya püskül veya bereye ponpon ekleyecekseniz, toplama 50-80 metre ekstra ekleyin.',
        '<strong>Gerginlik örneği:</strong> 10x10 cm\'lik bir kare örün. Hassas bir terazide tartın. Eğer 20g geliyorsa ve battaniyeniz 100x100 (100 kare) ise, tam olarak 2kg yüne ihtiyacınız olacaktır.',
        '<strong>Her zaman aynı lottan satın alın:</strong> Eğer hesaplama 7 çile diyorsa, farklı lot olma ihtimaline karşı dikişler için pay olması amacıyla 8 çile alın.',
      ],
    },
    {
      type: 'summary',
      title: 'Yün Alımı İçin Stratejik Tavsiyeler',
      items: [
        'Gereken uzunluğu garantilemek için gramdan ziyade metreye öncelik verin.',
        'Tığ işi, şiş örgüsüne göre önemli ölçüde daha fazla yün tüketir; tür seçicini ayarlayın.',
        'Yoğun dokular (saç örgüleri) ip bütçesinde %25 artış gerektirir.',
        'Renk yedeği istemeniz gerekebileceği için her lottan bir etiketi mutlaka saklayın.',
        'Zorunlu gerginlik örneğini örmek için %10\'luk güvenlik marjını kullanın.',
      ],
    },
  ],
  ui: {
    sectionProject: '1. PROJE TÜRÜ',
    sectionSize: '2. BOYUTLAR / BEDEN',
    sectionWeight: '3. İP KALINLIĞI',
    sectionPattern: '4. DESEN ÖZELLİKLERİ',
    sectionBall: '5. ÇİLE VERİLERİ',
    labelCables: 'Saç örgüsü veya yoğun dokular var mı?',
    labelGrams: 'GRAM / ÇİLE',
    labelMeters: 'METRE / ÇİLE',
    weightFine: 'İnce',
    weightMedium: 'Orta',
    weightThick: 'Kalın',
    weightXXL: 'XXL',
    projectSweater: 'KAZAK',
    projectScarf: 'ATKI',
    projectHat: 'BERE',
    projectSocks: 'ÇORAP',
    projectBlanket: 'BATTANİYE',
    projectCardigan: 'HIRKA',
    statPrefix: 'TAHMİNİ TOPLAM TÜKETİM',
    statSuffix: 'M',
    statNote: '%10 yedek stok ile hesaplanmış nihai metraj.',
    ballsFormatSingular: '{n} çile satın alın',
    ballsFormatPlural: '{n} çile satın alın',
    ballsDetailFormat: 'Her biri {w}g / {m}m olan çileler.',
    alertTitle: 'Stratejik güvenlik:',
    alertText:
      'Bu hesaplama ipinizin bitmeyeceğini zaten garanti eder. Renk sıçramalarını önlemek için çilelerinizi alırken lot numarasını (dye lot) doğrulamayı unutmayın.',
    schemeSleeveLabel: 'Kollar',
    schemeSleeveEach: 'her biri',
    schemeBodyLabel: 'Gövde',
    schemeTotalHat: 'Toplam Bere',
    schemeTotalFlat: 'Toplam Parça',
    schemeTotalSocks: 'Toplam Çift',
    sizeLabels: {
      sweater: ['S', 'M', 'L', 'XL'],
      cardigan: ['S', 'M', 'L', 'XL'],
      hat: ['Çocuk', 'S', 'M', 'L'],
      scarf: ['Mini', 'M', 'Büyük', 'Maksi'],
      socks: ['Çocuk', 'Yet. S', 'Yet. M', 'Yet. L'],
      blanket: ['Bebek', 'Koltuk', 'Yatak 90', 'Yatak 150'],
    },
  },
};
