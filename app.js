const modulos = {
  visao: {
    topo: 'topo_visao_geral.png',
    titulo: 'Visão Geral',
    texto: 'Dashboard central com todas as pendências, todos os status e filtros operacionais.'
  },
  pendencias: {
    topo: 'topo_pendencias.png',
    titulo: 'Pendências',
    texto: 'Aqui fica apenas o cadastro de nova pendência, materiais da pendência e status inicial.'
  },
  planejamento: {
    topo: 'topo_planejamento.png',
    titulo: 'Planejamento',
    texto: 'Aqui entra o Gerar Dia, com filtro de setor, área e prioridade parametrizada.'
  },
  materiais: {
    topo: 'topo_materiais.png',
    titulo: 'Materiais',
    texto: 'Consulta rápida com filtro inteligente para buscar código e descrição de material.'
  },
  cadastro: {
    topo: 'topo_cadastrar_materiais.png',
    titulo: 'Cadastrar Materiais',
    texto: 'Cadastro manual por texto ou importação por CSV.'
  },
  equipe: {
    topo: 'topo_equipe.png',
    titulo: 'Equipe',
    texto: 'Leitura do dia gerado por manutentor, com carga horária e esforço.'
  },
  config: {
    topo: 'topo_configuracao.png',
    titulo: 'Configuração',
    texto: 'Regras, parâmetros e funções técnicas do sistema.'
  },
  regras: {
    topo: 'topo_regras.png',
    titulo: 'Regras',
    texto: 'Consulta das regras do sistema e critérios operacionais.'
  }
};

function marcarAtivo(btn){
  document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function abrir(mod, btn){
  const cfg = modulos[mod];
  if(!cfg) return;

  marcarAtivo(btn || document.querySelector(`.icon-btn[data-mod="${mod}"]`));
  document.getElementById('moduleTopPanel').classList.remove('hidden');
  document.getElementById('moduleTopImage').src = cfg.topo;

  document.getElementById('conteudo').innerHTML = `
    <div class="module-card">
      <h2 class="module-title">${cfg.titulo}</h2>
      <div class="module-text">${cfg.texto}</div>
    </div>
  `;
}

function voltarHome(){
  document.getElementById('moduleTopPanel').classList.add('hidden');
  document.getElementById('conteudo').innerHTML = '';
  document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.icon-btn[data-mod="visao"]').classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  voltarHome();
});
