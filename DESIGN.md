# DESIGN.md — contrato visual da LP Avance

Fonte da verdade dos tokens: bloco `:root` no topo de `app/globals.css`. Cores medidas na logo oficial.
Regra: nenhum valor de cor, fonte, raio ou sombra vai fixo (hardcoded) em componente; use os tokens abaixo.

## Cores
| Token | Valor | Uso |
|---|---|---|
| `--navy-deep` | #14224a | fundos escuros (hero, pedagógico, rodapé) |
| `--navy` | #263b6e | títulos, botão primário (cor da logo) |
| `--blue` | #0098da | foco, destaques (cor da logo) |
| `--blue-ink` | #00689f | texto azul sobre fundo claro (contraste AA) |
| `--green` | #a8cf45 | destaque e CTA principal (cor da logo) |
| `--green-soft` | #eef6d6 | selos e fundos suaves |
| `--wa` / `--wa-hover` | #0f6b3a / #0b5a30 | WhatsApp (contraste AA com texto branco) |
| `--ink` / `--muted` | #17233b / #56637a | texto / texto secundário |
| `--paper` / `--line` | #f5f8fb / #dde5ec | superfícies e bordas |

## Tipografia
Manrope (títulos, `--font-h`) e DM Sans (texto, `--font-b`), auto-hospedadas via `@fontsource-variable`.
Títulos de seção `clamp(30px,5vw,50px)`; corpo 17px; legendas 13–15px.

## Forma, movimento e alvos de toque
- Raios: `--r` 18px, `--r-lg` 28px, botões em pílula. Sombra: `--shadow`. Easing: `--ease`.
- Alvo de toque mínimo 44 px (botões e links); botões principais 48–54 px.
- Microinterações: elevação no hover, escala 0,97 no toque, brilho que atravessa o botão, ícone que inclina,
  pulso curto (3x) no CTA do hero. Tudo desligado sob `prefers-reduced-motion`.

## Componentes (todos em `app/page.tsx`, estilos em `globals.css`)
`.btn` (+ `-primary`, `-lime`, `-ghost`, `-outline`, `-pulse`), `.finder` (seletor de etapa), `.stage` (card de etapa),
`.pillars li`, `.course-grid article`, `.unit`, `.visit-card`, `.lead-form` (pré-atendimento → WhatsApp), `.faq details`,
`.mbar` + `.fab` (barra fixa no celular / botão flutuante no desktop).
Comportamentos em `app/enhance.tsx`; destaque semântico de palavras-chave em `app/rich.tsx`.

## Conteúdo
Textos, horários, WhatsApps e endereços em `app/data.ts`. Só entra dado confirmado (catálogo Rematrículas 2027 ou código original).
Pendências de confirmação com a cliente: `PENDENCIAS.md`.
