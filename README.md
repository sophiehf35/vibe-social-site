# vibesocial-site

Landing page pública de **vibesocial.com.br** + release público de **assets TFLite/tokenizer** consumidos pelo app mobile (vibe-social-base).

## Estrutura

- `src/` — site Vite + React + Tailwind v4 (dark, coral #FF6B6B)
- `releases/models-v1/` — binários que o mobile baixa em runtime
- `dist/` — build do site (gerado por `pnpm build`)

## Release `models-v1`

Assets públicos consumidos pelo mobile:

| Asset | Tamanho | Consumidor |
|---|---|---|
| `toxic.tflite` | 86M | `MODELS.text.url` (moderação toxicidade on-device) |
| `nsfw.tflite` | 17M | `MODELS.image.url` (futuro, hoje desligado) |
| `tokenizer-v2.bin` | 1.4M | `TOKENIZER_URL` (tokenizer sentencepiece) |

Razão: GitHub Release aceita até 2GiB/asset, sem limite de bandwidth. Cloudflare Pages limita 25MiB/arquivo (não cabia o toxic). Pages só hospeda o site.

URLs base: `https://github.com/sophiehf35/vibe-social-site/releases/download/models-v1/<asset>`

## Build + deploy

    pnpm install
    pnpm build          # gera dist/
    pnpm preview        # testa local

Deploy via Cloudflare Pages (`wrangler pages deploy dist --project-name=vibesocial-site`) ou GitHub Pages, a decidir.

## Atualizar um asset

1. Gera o binário novo localmente
2. `gh release upload models-v1 <arquivo> --repo sophiehf35/vibe-social-site --clobber` (precisa PAT com `contents:write`) — ou UI do release
3. Atualiza `packages/mobile/src/moderation/config.ts` no vibe-social-base se o path mudou

## Licença

Proprietário.
