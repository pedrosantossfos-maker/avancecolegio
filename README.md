# Avance Colégio e Cursos — Landing Page

Next.js 16 (App Router) + TypeScript + CSS próprio. Exportação estática (`out/`).

## Rodar / publicar
```bash
npm ci
npm run dev        # http://localhost:3000
NEXT_PUBLIC_SITE_URL=https://SEU-DOMINIO.com.br npm run build   # gera a pasta out/
```
Envie o conteúdo de `out/` para qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, cPanel).
**Defina `NEXT_PUBLIC_SITE_URL` com o domínio definitivo** — ele alimenta canonical, Open Graph, sitemap.xml, robots.txt e dados estruturados (schema.org).

## Onde editar
- `app/data.ts` — WhatsApps, endereços, etapas, horários, diferenciais e FAQ (conteúdo do Catálogo Rematrículas 2027).
- `app/page.tsx` — seções e textos da página.
- `app/globals.css` — design (variáveis de cor no topo, medidas na logo oficial).
- `public/img/` — fotos (WebP). `public/` — logos e selos.
- Fontes (Manrope e DM Sans) são auto-hospedadas via `@fontsource`, sem chamadas ao Google.

## SEO incluído
Title/description com palavras-chave locais, H1 com "Colégio em Tangará da Serra", Open Graph/Twitter, canonical, JSON-LD `School` (2 unidades) e `FAQPage`, sitemap, robots, HTML semântico, `lang="pt-BR"`.

## Auditoria (Lighthouse mobile, servidor local sem compressão)
Performance 89 · Acessibilidade 100 · Boas práticas 100 · SEO 100.
Em hospedagem com gzip/brotli e cache o desempenho tende a subir.
