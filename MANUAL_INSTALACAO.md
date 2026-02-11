# Manual de Instalação e Uso Local - Análise Competitiva Kairos IT

## Visão Geral

Este manual orienta você a instalar e executar o site de análise competitiva da Kairos IT Solutions em seu computador local. O site é uma aplicação web moderna construída com React e pode ser acessado através de um navegador.

---

## Pré-requisitos

Antes de começar, você precisará ter instalado em seu computador:

### 1. Node.js e npm
O Node.js é um ambiente de execução JavaScript que permite rodar a aplicação. O npm é o gerenciador de pacotes que vem junto com o Node.js.

**Como verificar se já tem instalado:**
Abra o terminal (Prompt de Comando no Windows, Terminal no Mac/Linux) e digite:

```bash
node --version
npm --version
```

Se aparecer um número de versão (ex: v18.0.0), você já tem instalado. Caso contrário, siga para a instalação.

**Instalação do Node.js:**
- Acesse [https://nodejs.org/](https://nodejs.org/)
- Baixe a versão LTS (Long Term Support) - a mais estável
- Execute o instalador e siga as instruções padrão
- Reinicie seu computador após a instalação

### 2. Git (Opcional, mas recomendado)
Git é um sistema de controle de versão. Você pode usar para clonar o projeto facilmente.

**Instalação do Git:**
- Acesse [https://git-scm.com/](https://git-scm.com/)
- Baixe e instale seguindo as instruções padrão

---

## Passo 1: Obter os Arquivos do Projeto

Você tem duas opções para obter os arquivos:

### Opção A: Usando Git (Recomendado)

1. Abra o terminal/prompt de comando
2. Navegue até a pasta onde deseja salvar o projeto:
   ```bash
   cd Desktop
   ```
   ou
   ```bash
   cd Documentos
   ```

3. Clone o repositório (substitua pela URL correta se aplicável):
   ```bash
   git clone https://github.com/seu-usuario/kairos-analise-competitiva.git
   ```

4. Entre na pasta do projeto:
   ```bash
   cd kairos-analise-competitiva
   ```

### Opção B: Usando Arquivo ZIP

1. Baixe o arquivo ZIP do projeto
2. Extraia em uma pasta de sua escolha (Desktop, Documentos, etc.)
3. Abra o terminal/prompt de comando
4. Navegue até a pasta extraída:
   ```bash
   cd caminho/para/kairos-analise-competitiva
   ```

---

## Passo 2: Instalar as Dependências

As dependências são bibliotecas e pacotes que o projeto precisa para funcionar.

1. Com o terminal aberto na pasta do projeto, digite:
   ```bash
   npm install
   ```

2. Aguarde a instalação completar. Isso pode levar alguns minutos na primeira vez.

3. Você verá uma mensagem indicando que as dependências foram instaladas com sucesso.

---

## Passo 3: Iniciar o Servidor de Desenvolvimento

Agora você pode executar o site localmente.

1. Com o terminal ainda na pasta do projeto, digite:
   ```bash
   npm run dev
   ```

2. Você verá uma mensagem similar a esta:
   ```
   ➜  Local:   http://localhost:3000/
   ```

3. Copie o endereço `http://localhost:3000/` e cole em seu navegador (Chrome, Firefox, Safari, Edge, etc.)

4. O site deve carregar e exibir a página inicial com o título "Análise Competitiva - Kairos IT Solutions"

---

## Passo 4: Navegando pelo Site

Uma vez que o site está aberto em seu navegador, você pode explorar as seguintes seções:

| Seção | Descrição |
| :--- | :--- |
| **Início** | Página inicial com resumo da análise |
| **Concorrentes** | Análise dos 3 principais concorrentes da região |
| **SWOT** | Análise interativa de Forças, Fraquezas, Oportunidades e Ameaças |
| **Oportunidades** | Bairros estratégicos na Grande São Paulo para expansão |
| **Mapa** | Visualização geográfica interativa com 15 regiões mapeadas |
| **ROI** | Calculadora interativa de retorno sobre investimento |
| **Pacotes** | Recomendador inteligente de pacotes de serviços |
| **Recomendações** | Estratégias para se diferenciar no mercado |
| **Conclusão** | Síntese e próximos passos recomendados |

### Funcionalidades Interativas

**SWOT Interativo:** Clique nos cards de Forças, Fraquezas, Oportunidades e Ameaças para expandir e ver os detalhes.

**Calculadora de ROI:** Ajuste os sliders para simular diferentes cenários de negócio e veja o retorno estimado em 3 anos.

**Mapa Interativo:** Clique nos pontos coloridos no mapa para ver informações detalhadas sobre cada região, incluindo tipo de cliente, serviços demandados e orçamento médio.

**Recomendador de Pacotes:** Responda 4 perguntas simples sobre seu negócio para receber uma recomendação personalizada de pacote de serviços.

---

## Passo 5: Parar o Servidor

Quando terminar de usar o site, você pode parar o servidor:

1. No terminal, pressione `Ctrl + C` (ou `Cmd + C` no Mac)
2. Confirme digitando `Y` se solicitado
3. O servidor será interrompido

---

## Solução de Problemas

### Problema: "npm: command not found"

**Solução:** Node.js não está instalado ou não foi reconhecido. Tente:
1. Reinstalar Node.js
2. Reiniciar o computador
3. Abrir um novo terminal/prompt de comando

### Problema: "Port 3000 is already in use"

**Solução:** Outra aplicação está usando a porta 3000. Você pode:
1. Fechar a outra aplicação
2. Ou usar uma porta diferente:
   ```bash
   npm run dev -- --port 3001
   ```

### Problema: A página fica em branco ou não carrega

**Solução:** Tente:
1. Atualizar a página (F5 ou Cmd+R)
2. Limpar o cache do navegador (Ctrl+Shift+Delete)
3. Abrir em modo anônimo/privado
4. Verificar se o servidor está rodando (deve ver mensagens no terminal)

### Problema: Erros no terminal durante a instalação

**Solução:** Tente:
1. Limpar o cache do npm:
   ```bash
   npm cache clean --force
   ```
2. Deletar a pasta `node_modules` e `package-lock.json`
3. Reinstalar:
   ```bash
   npm install
   ```

---

## Estrutura do Projeto

Para sua referência, aqui está a estrutura básica dos arquivos:

```
kairos-analise-competitiva/
├── client/                 # Código da aplicação web
│   ├── public/            # Arquivos estáticos (imagens, etc)
│   ├── src/
│   │   ├── components/    # Componentes React (SWOT, ROI, Mapa, etc)
│   │   ├── pages/         # Páginas principais
│   │   └── index.css      # Estilos globais
│   └── index.html         # Arquivo HTML principal
├── package.json           # Configuração do projeto
└── MANUAL_INSTALACAO.md   # Este arquivo
```

---

## Personalizando o Site

Se desejar fazer alterações no site:

### Editar Textos
Os textos estão nos arquivos dentro de `client/src/components/`. Use um editor de texto como:
- Visual Studio Code (recomendado)
- Sublime Text
- Notepad++

### Editar Cores
As cores estão definidas em `client/src/index.css`. Procure por valores em formato OKLCH (ex: `oklch(0.55 0.18 250)`)

### Adicionar Novas Regiões ao Mapa
Edite o arquivo `client/src/components/InteractiveMap.tsx` e adicione novos objetos ao array `regions`

---

## Dicas Úteis

**Atalho para abrir o terminal na pasta do projeto:**
- Windows: Clique com botão direito na pasta, selecione "Abrir PowerShell aqui"
- Mac: Abra o Terminal e arraste a pasta para dentro
- Linux: Clique com botão direito, selecione "Abrir Terminal aqui"

**Visualizar o site em outros dispositivos:**
Se quiser acessar o site de outro computador na mesma rede:
1. Descubra seu IP local (no terminal, digite `ipconfig` no Windows ou `ifconfig` no Mac/Linux)
2. Acesse `http://seu-ip:3000` de outro dispositivo

**Salvar o site como arquivo HTML estático:**
Para compartilhar o site sem precisar do servidor Node.js:
```bash
npm run build
```
Os arquivos compilados estarão em `dist/`

---

## Suporte e Dúvidas

Se encontrar problemas não cobertos neste manual:

1. Verifique se todas as dependências estão instaladas: `npm install`
2. Tente limpar o cache: `npm cache clean --force`
3. Reinicie o servidor: `npm run dev`
4. Reinicie seu computador

Para dúvidas técnicas mais específicas, consulte a documentação do Node.js em [https://nodejs.org/docs/](https://nodejs.org/docs/)

---

## Próximos Passos

Após explorar o site localmente, você pode:

1. **Compartilhar com a equipe:** Envie os arquivos ou o link do repositório
2. **Fazer alterações:** Personalize cores, textos e dados conforme necessário
3. **Publicar online:** Use serviços como Vercel, Netlify ou Manus para publicar o site na internet
4. **Integrar com backend:** Conecte a um servidor para armazenar dados de contatos

---

**Desenvolvido por Manus AI**
**Versão 1.0 - Janeiro 2026**
