import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const tr: QuiltLocaleCopy = {
  slug: 'yorgan-bloklari-arka-kumas-hesaplayici',
  title: 'Yorgan blokları ve arka kumaş hesaplayıcı',
  description: 'Kare bloklar ve arka paneller için dikiş payı, kesim firesi ve metrik ya da imperial birimlerle kumaş miktarını hesaplayın.',
  ui: makeUi([
    'Ölçü sistemi', 'Metrik cm', 'Imperial in', 'Kesim haritası', 'Yorganı planla', 'Yaygın ölçüler', 'Özel', 'Bebek', 'Koltuk şalı',
    'Tek kişilik', 'Queen', 'King', 'Bitmiş genişlik', 'Bitmiş uzunluk', 'Bitmiş kare blok', 'Kullanılabilir kumaş genişliği',
    'Dikiş payı', 'Her kenarda arka kumaş fazlası', 'Üst kesim fire payı', 'bitmiş kenardan kenara', 'bitmiş kenardan kenara',
    'görünen blok ölçüsü', 'kenarlar çıkarıldıktan sonra', 'her blok kenarında', 'dört kenarın tamamında', 'Yüzde 5', 'Yüzde 10',
    'Yüzde 15', 'Kumaş satın alma planı', 'Kesim haritası için pozitif ölçüler girin.', 'Kesilecek bloklar', 'Blok ızgarası',
    'Kesim karesi', 'Kumaş genişliğindeki kareler', 'Üst için kumaş', 'Arka için kumaş', 'Arka paneller', 'Arka yönü',
    'Boyuna paneller', 'Enine paneller', 'Üst ve arka toplamı', 'Kesim planı hazır', 'Planı gözden geçir',
    'Bitmiş ölçüler blok ölçüsünün tam katı değil. Dış sıra veya sütunda kırpılmış bloklar ya da bordür gerekir.',
    'Kullanılabilir genişliğe yalnızca bir kare sığıyor. Daha geniş kumaş veya daha küçük blok miktarı azaltabilir.',
    'Pozitif ölçüler ve en az bir kesim karesini alan kumaş kullanın.', 'Örneği sıfırla', 'Satın alma planını kopyala',
    'Satın alma planı kopyalandı', 'Hesap notlarını aç', 'Sütunlar ve sıralar, bitmiş yorgan ölçülerinin blok ölçüsüne bölünmesiyle yukarı yuvarlanır. Kesim karesi iki dikiş payı ekler. Arka kumaş dikiş kayıplarından sonra iki yönü karşılaştırır.',
    'Planlama sınırı.', 'Bu model tek üst kumaştan eşit kare bloklar varsayar. Ara şeritleri, bordürleri, birden çok rengi, yönlü desenleri, elyafı veya biyeyi içermez.',
    'Patchwork ızgarası en verimli arka panel düzeninin yanında görünür.',
  ]),
  faq: [
    { question: 'Bu yorgan hesaplayıcı hangi kumaşları hesaplar?', answer: 'Üstteki tüm kare bloklar için bir kumaşı ve arka için ayrı kumaşı hesaplar. Elyaf ve biye dahil değildir.' },
    { question: 'Kesim karesi neden bitmiş bloktan daha büyüktür?', answer: 'Bitmiş blok dikimden sonra görünen ölçüdür. Kesim ölçüsü her boyutun iki tarafına seçilen dikiş payını ekler.' },
    { question: 'Arka paneller nasıl hesaplanır?', answer: 'Hesap çevre fazlasını ekler, dikiş kaybını çıkarır ve boyuna düzen ile enine düzeni karşılaştırır.' },
    { question: 'Bir patchworkte birkaç kumaş hesaplayabilir miyim?', answer: 'Her renk grubunu aynı kesim karesi ve o kumaşa ait blok sayısıyla ayrı ayrı hesaplayın.' },
    { question: 'Gösterilen miktarı tam olarak almalı mıyım?', answer: 'Mağazanın satış aralığına yukarı yuvarlayın. Yönlü desen, tekrar, çekme ve hatalar daha fazla kumaş gerektirebilir.' },
  ],
  howTo: [
    { name: 'Bitmiş ölçüyü ayarlayın', text: 'Yaygın bir ölçü seçin veya bitmiş genişlik ve uzunluğu girin.' },
    { name: 'Blokları ve kumaşı tanımlayın', text: 'Bitmiş blok ölçüsünü, kenarsız kumaş genişliğini ve dikiş payını girin.' },
    { name: 'Payları ayarlayın', text: 'Arka fazlasını girin ve yüzde beş, on veya on beş fire seçin.' },
    { name: 'İki satın alma miktarını okuyun', text: 'Üst ve arka miktarlarını ayrı kullanın ve satış aralığına yuvarlayın.' },
  ],
  seo: createSeo({
    overviewTitle: 'Kumaşı satın almadan önce planlayın', overview: 'Yorgan üstü ve arkası farklı kesim planlarına sahiptir. Üst, tüm bloklar için yeterli kare sırasına ihtiyaç duyar. Arka ise birleştirilen uzun paneller gerektirebilir. Hesaplayıcı iki satın almayı ayırır ve bütçe için toplamı gösterir.',
    methodTitle: 'Kare blok kumaşı nasıl hesaplanır', method: 'Bitmiş blok ölçüsü kesim ölçüsü değildir. İki tarafa dikiş payı eklenir ve kullanılabilir genişliğe kaç kare sığdığı bulunur. Blok sayısı bu kapasiteye bölünür, tam kesim geçişine yukarı yuvarlanır ve ardından fire eklenir.',
    tableHeaders: ['Girdi', 'Belirlediği değer', 'Nasıl ölçülür'], tableRows: [['Yorgan ölçüsü', 'Sıra ve sütunlar', 'Dikilmiş ölçü'], ['Bitmiş blok', 'Sayı ve kesim', 'Pay hariç'], ['Kullanılabilir genişlik', 'Geçiş başına kare', 'Kenarlar hariç'], ['Arka fazlası', 'Çalışma alanı', 'Her tarafta']],
    backingTitle: 'Arka kumaş neden döndürülebilir', backing: 'Arka kumaş top genişliğini aştığında paneller birleştirilir. Hesaplayıcı yorgan boyunca ve döndürülmüş panel düzenlerini dener, birleşim kaybını çıkarır ve rulodan daha az uzunluk kullanan seçeneği belirler.',
    advice: ['Kenarları çıkardıktan sonra genişliği ölçün.', 'Her satın almayı satış aralığına yuvarlayın.', 'Yönlü desen ve çekme için pay ekleyin.', 'Kesmeden önce kısmi blokları çözün.'],
    patternTitle: 'Tahmini kalıpla karşılaştırın', pattern: 'Tahmin, eşit kare bloklardan ve tek kumaştan oluşan basit bir ızgarada en güçlüdür. Gerçek bir kalıp renkleri dağıtabilir, ara şerit veya bordür ekleyebilir ve arka dikişin yerini belirleyebilir. Sonucu kesim listesiyle karşılaştırın.',
    limitTitle: 'Sonucun garanti edemeyeceği şeyler', limit: 'Kumaşlar farklı çeker, mağazalar farklı aralıklarla satar ve motifler verimsiz kesimleri zorunlu kılabilir. Sonuç şeffaf bir başlangıç noktasıdır, belirli bir kalıbın kesim şemasının yerine geçmez.',
  }),
};
