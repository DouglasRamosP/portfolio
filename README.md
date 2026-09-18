# Portfolio

Portfólio pessoal de Douglas Ramos Pimenta, construído com React 19, TypeScript e Vite.

## Estrutura

- `index.html`: entrada do Vite, metadados de SEO/Open Graph
- `src/data/`: conteúdo do site (perfil, experiência, projetos, habilidades) separado da apresentação
- `src/sections/`: seções da página (Hero, Sobre, Experiência, Projetos, Habilidades, Contato)
- `src/components/`: componentes reutilizáveis (Navbar, Carousel, CaseModal, Icon, Footer)
- `src/styles/global.css`: tokens de design e primitivas compartilhadas; cada componente tem seu CSS Module
- `public/images`: assets estáticos

## Scripts

```bash
npm install
npm run dev        # servidor local
npm run typecheck  # verificação de tipos
npm run build      # build de produção em dist/
npm run preview    # preview do build
```

## Deploy

Hospedado na StayCloud por integração com o GitHub. O framework Vite é detectado automaticamente, com `npm run build` e saída em `dist/`. O projeto não requer variáveis de ambiente.
