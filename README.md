# Portfolio

Portfólio pessoal de Douglas Ramos Pimenta, construído com React 19, TypeScript e Vite.

## Estrutura

- `index.html`: entrada do Vite, metadados de SEO/Open Graph
- `src/data/`: conteúdo do site (perfil, experiência, projetos, habilidades) separado da apresentação
- `src/sections/`: seções da página (Hero, Sobre, Experiência, Projetos, Habilidades, Contato)
- `src/components/`: componentes reutilizáveis (Navbar, Carousel, CaseModal, Icon, Footer)
- `src/styles/global.css`: tokens de design e primitivas compartilhadas; cada componente tem seu CSS Module
- `public/images` e `public/movies`: assets estáticos

## Scripts

```bash
npm install
npm run dev        # servidor local
npm run typecheck  # verificação de tipos
npm run build      # build de produção em dist/
npm run preview    # preview do build
```

## Deploy

Hospedado na Vercel. O framework Vite é detectado automaticamente (`npm run build`, saída em `dist/`).
