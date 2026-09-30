import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const pl: QuiltLocaleCopy = {
  slug: 'kalkulator-tkaniny-na-koldre-bloki-spod',
  title: 'Kalkulator tkaniny na quilt z bloków i spód',
  description: 'Oblicz tkaninę na kwadratowe bloki i panele spodu z zapasem na szwy, odpadem oraz jednostkami metrycznymi lub imperialnymi.',
  ui: makeUi([
    'System miar', 'Metryczny cm', 'Imperialny in', 'Mapa cięcia', 'Zaplanuj quilt', 'Popularne rozmiary', 'Własny', 'Niemowlęcy', 'Narzuta',
    'Pojedynczy', 'Queen', 'King', 'Skończona szerokość', 'Skończona długość', 'Skończony kwadratowy blok', 'Użyteczna szerokość tkaniny',
    'Zapas na szew', 'Naddatek spodu na stronę', 'Zapas cięcia wierzchu', 'od gotowej krawędzi do krawędzi', 'od gotowej krawędzi do krawędzi',
    'widoczny rozmiar bloku', 'po usunięciu krajek', 'na każdej krawędzi bloku', 'na wszystkich czterech stronach', '5 procent',
    '10 procent', '15 procent', 'Plan zakupu tkaniny', 'Wpisz dodatnie wymiary, aby narysować mapę cięcia.', 'Bloki do wycięcia',
    'Siatka bloków', 'Kwadrat cięcia', 'Kwadraty na szerokości', 'Tkanina na wierzch', 'Tkanina na spód', 'Panele spodu',
    'Kierunek spodu', 'Panele wzdłużne', 'Panele poprzeczne', 'Suma wierzchu i spodu', 'Plan cięcia gotowy', 'Sprawdź plan',
    'Gotowe wymiary nie są całkowitą wielokrotnością bloku. Zewnętrzny rząd lub kolumna wymaga przyciętych bloków albo obramowania.',
    'Na użytecznej szerokości mieści się tylko jeden kwadrat. Szersza tkanina lub mniejszy blok może zmniejszyć zużycie.',
    'Użyj dodatnich wymiarów i tkaniny mieszczącej co najmniej jeden kwadrat cięcia.', 'Przywróć przykład', 'Kopiuj plan zakupu',
    'Plan zakupu skopiowany', 'Otwórz notatki obliczeń', 'Kolumny i rzędy są zaokrąglane w górę po podzieleniu gotowych wymiarów przez rozmiar bloku. Kwadrat cięcia dodaje dwa zapasy. Spód porównuje dwa kierunki po stratach na szwach.',
    'Granica planowania.', 'Model zakłada równe kwadratowe bloki z jednej tkaniny wierzchniej. Nie obejmuje pasów, obramowań, wielu kolorów, wzorów kierunkowych, ociepliny ani lamówki.',
    'Siatka patchworku znajduje się obok najoszczędniejszego układu paneli spodu.',
  ]),
  faq: [
    { question: 'Jaką tkaninę oblicza ten kalkulator quiltu?', answer: 'Oblicza jedną tkaninę na wszystkie kwadratowe bloki wierzchu oraz osobną na spód. Nie obejmuje ociepliny ani lamówki.' },
    { question: 'Dlaczego kwadrat cięcia jest większy od gotowego bloku?', answer: 'Gotowy blok jest widoczny po zszyciu. Wymiar cięcia dodaje wybrany zapas z obu stron.' },
    { question: 'Jak obliczane są panele spodu?', answer: 'Obliczenie dodaje naddatek, odejmuje straty na szwach i porównuje układ wzdłużny z poprzecznym.' },
    { question: 'Czy mogę obliczyć kilka tkanin w jednym patchworku?', answer: 'Oblicz każdą grupę kolorów osobno, używając tego samego kwadratu cięcia i właściwej liczby bloków.' },
    { question: 'Czy kupić dokładnie wskazaną ilość?', answer: 'Zaokrąglij do jednostki sprzedaży. Wzory kierunkowe, raport, kurczenie i błędy mogą wymagać większej ilości.' },
  ],
  howTo: [
    { name: 'Ustaw gotowy rozmiar', text: 'Wybierz popularny rozmiar albo wpisz gotową szerokość i długość.' },
    { name: 'Opisz bloki i tkaninę', text: 'Wpisz gotowy blok, szerokość bez krajek i zapas na szew.' },
    { name: 'Ustaw naddatki', text: 'Podaj dodatkowy spód i wybierz pięć, dziesięć lub piętnaście procent odpadu.' },
    { name: 'Odczytaj dwa zakupy', text: 'Użyj osobno ilości na wierzch i spód, a następnie zaokrąglij je do jednostki sprzedaży.' },
  ],
  seo: createSeo({
    overviewTitle: 'Zaplanuj tkaninę przed zakupem', overview: 'Wierzch i spód wymagają różnych planów cięcia. Wierzch potrzebuje dość rzędów kwadratów na wszystkie bloki, a spód może wymagać kilku długich zszytych paneli. Kalkulator rozdziela oba zakupy i pokazuje ich sumę.',
    methodTitle: 'Jak obliczana jest tkanina na bloki', method: 'Gotowy rozmiar bloku nie jest rozmiarem cięcia. Zapas dodaje się po obu stronach, a następnie sprawdza, ile kwadratów mieści użyteczna szerokość. Liczbę bloków dzieli się przez tę pojemność i zaokrągla do pełnych przejść przed dodaniem odpadu.',
    tableHeaders: ['Dane', 'Co określają', 'Jak mierzyć'], tableRows: [['Rozmiar quiltu', 'Rzędy i kolumny', 'Wymiar po zszyciu'], ['Gotowy blok', 'Liczba i cięcie', 'Bez zapasu'], ['Szerokość użyteczna', 'Kwadraty na przejście', 'Bez krajek'], ['Naddatek spodu', 'Przestrzeń robocza', 'Na każdej stronie']],
    backingTitle: 'Dlaczego spód można obrócić', backing: 'Gdy spód jest szerszy od tkaniny, trzeba połączyć panele. Kalkulator sprawdza panele biegnące wzdłuż quiltu i układ obrócony, odejmuje straty na łączeniach i wybiera wariant zużywający mniej długości belki.',
    advice: ['Mierz szerokość bez krajek.', 'Zaokrąglaj zakup do jednostki sklepu.', 'Dodaj zapas na wzory i kurczenie.', 'Rozwiąż częściowe bloki przed cięciem.'],
    patternTitle: 'Porównaj wynik z wykrojem', pattern: 'Obliczenie najlepiej działa dla prostej siatki równych kwadratowych bloków z jednej tkaniny. Projekt może rozdzielać kolory, dodawać pasy lub obramowania i wymagać konkretnego położenia szwu spodu. Porównaj wynik z listą cięcia.',
    limitTitle: 'Czego wynik nie gwarantuje', limit: 'Tkaniny kurczą się różnie, sklepy sprzedają w różnych odcinkach, a motywy mogą wymuszać mniej wydajne cięcie. Wynik jest przejrzystą podstawą, lecz nie zastępuje diagramu konkretnego projektu.',
  }),
};
