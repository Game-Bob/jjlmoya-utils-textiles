import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const pt: QuiltLocaleCopy = {
  slug: 'calculadora-tecido-colcha-blocos-costas',
  title: 'Calculadora de tecido para quilt de blocos e costas',
  description: 'Estime tecido para blocos quadrados e painéis das costas com margem de costura, desperdício e unidades métricas ou imperiais.',
  ui: makeUi([
    'Sistema de medida', 'Métrico cm', 'Imperial in', 'Mapa de corte', 'Planear o quilt', 'Tamanhos comuns', 'Personalizado', 'Berço', 'Manta',
    'Solteiro', 'Queen', 'King', 'Largura acabada', 'Comprimento acabado', 'Bloco quadrado acabado', 'Largura útil do tecido',
    'Margem de costura', 'Extra das costas por lado', 'Margem de corte do topo', 'de bordo acabado a bordo acabado',
    'de bordo acabado a bordo acabado', 'tamanho visível do bloco', 'depois de retirar as ourelas', 'em cada bordo do bloco',
    'extra nos quatro lados', '5 por cento', '10 por cento', '15 por cento', 'Plano de compra de tecido',
    'Introduza medidas positivas para desenhar o mapa de corte.', 'Blocos a cortar', 'Grelha de blocos', 'Quadrado de corte',
    'Quadrados na largura', 'Tecido para o topo', 'Tecido para as costas', 'Painéis das costas', 'Orientação das costas',
    'Painéis longitudinais', 'Painéis transversais', 'Total do topo e costas', 'Plano de corte pronto', 'Rever o plano',
    'As medidas acabadas não são múltiplos inteiros do bloco. A linha ou coluna exterior precisa de blocos aparados ou de uma borda.',
    'Só cabe um quadrado na largura útil. Um tecido mais largo ou um bloco menor pode reduzir a quantidade.',
    'Use medidas positivas e tecido onde caiba pelo menos um quadrado de corte.', 'Repor exemplo', 'Copiar plano de compra',
    'Plano de compra copiado', 'Abrir notas do cálculo', 'As colunas e linhas são arredondadas para cima ao dividir as medidas acabadas pelo bloco. O quadrado de corte soma duas margens. As costas comparam duas orientações depois da perda nas costuras.',
    'Limite do planeamento.', 'O modelo assume blocos quadrados iguais cortados num único tecido para o topo. Não inclui faixas, bordas, várias cores, estampados direcionais, enchimento ou viés.',
    'Uma grelha de patchwork aparece ao lado da disposição mais eficiente dos painéis das costas.',
  ]),
  faq: [
    { question: 'Que tecido calcula esta calculadora de quilt?', answer: 'Calcula um tecido para todos os blocos quadrados do topo e outro para as costas. Não calcula enchimento nem viés.' },
    { question: 'Porque é que o quadrado de corte é maior do que o bloco acabado?', answer: 'O bloco acabado é a parte visível depois de coser. O corte acrescenta a margem escolhida aos dois lados de cada dimensão.' },
    { question: 'Como são calculados os painéis das costas?', answer: 'O cálculo acrescenta a folga, desconta a perda nas costuras e compara disposições longitudinais e transversais.' },
    { question: 'Posso calcular vários tecidos no mesmo patchwork?', answer: 'Calcule cada grupo de cor separadamente com o mesmo quadrado de corte e o número de blocos dessa cor.' },
    { question: 'Devo comprar exatamente a quantidade apresentada?', answer: 'Arredonde para a fração vendida pela loja. Estampados direcionais, repetição, encolhimento e erros podem exigir mais tecido.' },
  ],
  howTo: [
    { name: 'Definir o tamanho acabado', text: 'Escolha um tamanho comum ou introduza largura e comprimento acabados.' },
    { name: 'Descrever blocos e tecido', text: 'Introduza o bloco acabado, a largura útil sem ourelas e a margem.' },
    { name: 'Definir as folgas', text: 'Indique o extra das costas e escolha cinco, dez ou quinze por cento de desperdício.' },
    { name: 'Ler as duas compras', text: 'Use separadamente as quantidades do topo e das costas e arredonde ambas.' },
  ],
  seo: createSeo({
    overviewTitle: 'Planear o tecido antes da compra', overview: 'O topo e as costas obedecem a planos de corte diferentes. O topo precisa de filas suficientes de quadrados para todos os blocos, enquanto as costas podem precisar de vários painéis longos unidos. A calculadora separa as compras e mostra o total.',
    methodTitle: 'Como é calculado o tecido dos blocos', method: 'O tamanho acabado não é o tamanho de corte. A margem é acrescentada aos dois lados e calcula-se quantos quadrados cabem na largura útil. O número de blocos é dividido por essa capacidade e arredondado para passagens inteiras antes de aplicar o desperdício.',
    tableHeaders: ['Entrada', 'O que controla', 'Como medir'], tableRows: [['Tamanho do quilt', 'Linhas e colunas', 'Medida cosida'], ['Bloco acabado', 'Número e corte', 'Sem margem'], ['Largura útil', 'Quadrados por passagem', 'Sem ourelas'], ['Extra das costas', 'Espaço de trabalho', 'Em cada lado']],
    backingTitle: 'Porque podem rodar as costas', backing: 'Quando as costas são mais largas do que o tecido é preciso unir painéis. A calculadora testa painéis ao longo do quilt e painéis rodados, desconta a perda nas uniões e escolhe a opção que consome menos comprimento do rolo.',
    advice: ['Meça a largura útil sem ourelas.', 'Arredonde cada compra à fração vendida.', 'Acrescente reserva para estampados e encolhimento.', 'Resolva os blocos parciais antes de cortar.'],
    patternTitle: 'Comparar a estimativa com o molde', pattern: 'A estimativa é mais forte para uma grelha simples de blocos quadrados iguais e um único tecido. Um molde real pode distribuir várias cores, acrescentar faixas ou bordas e exigir uma posição para a costura das costas. Compare o resultado com a lista de corte.',
    limitTitle: 'O que o resultado não garante', limit: 'Os tecidos encolhem de forma diferente, as lojas vendem frações distintas e os motivos podem obrigar a cortes ineficientes. O resultado oferece uma base transparente, mas não substitui o diagrama de corte do molde.',
  }),
};
