import Container from 'react-bootstrap/Container';
import HeaderNavbar from './components/HeaderNavbar.jsx';
import NewsCarousel from './components/NewsCarousel.jsx';
import SalaryTable from './components/SalaryTable.jsx';

const noticias = [
  {
    id: 1,
    titulo: 'Assembleia dos trabalhadores da TIVIT',
    descricao: 'Reajustes salariais, direitos e representação sindical.',
    imagem: '/images/1.png',
    link: 'https://sindadosba.org.br/2026/11/06/sindados-ba-convoca-trabalhadores-da-tivit-para-assembleia-sobre-reajustes-salariais-direitos-e-representacao-sindical/',
  },
  {
    id: 2,
    titulo: 'Aditivo Econômico 2026',
    descricao: 'A redação final do aditivo está em análise.',
    imagem: '/images/2.png',
    link: 'https://sindadosba.org.br/2026/09/29/aditivo-economico-2026-redacao-final-esta-em-analise/',
  },
  {
    id: 3,
    titulo: 'Eleição da OLT Pixeon 2026',
    descricao: 'Confira o resultado preliminar divulgado pelo sindicato.',
    imagem: '/images/3.png',
    link: 'https://sindadosba.org.br/2026/09/30/resultado-preliminar-da-eleicao-da-olt-pixeon-2026/',
  },
];

// Valores de exemplo: o exercício não informa os pisos oficiais de 2026.
const cargos = [
  { id: 1, cargo: 'Desenvolvedor', nivel: 'Júnior', piso: 3500, reajuste: '6%', cargaHoraria: '40 horas semanais', descricao: 'Desenvolvimento e manutenção de sistemas.' },
  { id: 2, cargo: 'Analista de Suporte', nivel: 'Pleno', piso: 3200, reajuste: '6%', cargaHoraria: '40 horas semanais', descricao: 'Atendimento técnico aos usuários.' },
  { id: 3, cargo: 'DBA', nivel: 'Pleno', piso: 4800, reajuste: '6%', cargaHoraria: '40 horas semanais', descricao: 'Administração de bancos de dados.' },
  { id: 4, cargo: 'DevOps', nivel: 'Sênior', piso: 5600, reajuste: '6%', cargaHoraria: '40 horas semanais', descricao: 'Automação e infraestrutura de sistemas.' },
];

function App() {
  return (
    <>
      <HeaderNavbar />
      <main id="inicio">
        <section id="noticias" aria-label="Notícias em destaque">
          <NewsCarousel noticias={noticias} />
        </section>
        <section id="pisos" className="py-5">
          <Container>
            <h1 className="h2 mb-4">Pisos salariais 2026</h1>
            <SalaryTable cargos={cargos} />
          </Container>
        </section>
      </main>
      <footer className="site-footer text-white py-3 text-center small">
        SINDADOS-BA — Projeto acadêmico em React e Bootstrap
      </footer>
    </>
  );
}

export default App;
