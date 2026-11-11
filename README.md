# vibesocial-site

Landing page pública de **vibesocial.com.br** + release público de **assets TFLite/tokenizer** consumidos pelo app mobile (vibe-social-base).

## Estrutura

- `src/` — site Vite + React + Tailwind v4 (dark, coral #FF6B6B)
- `releases/` — staging local dos binários de cada release do GH (binários são gitignored, só README versionado)
- `dist/` — build do site (gerado por `pnpm build`)

## Assets consumidos pelo mobile

Os modelos TFLite e o tokenizer ficam em **GitHub Releases públicos** deste repo (até 2GiB/asset, sem limite de bandwidth). Cloudflare Pages limita 25MiB/arquivo — por isso o `toxic.tflite` (86M) não caberia no Pages.

**Proxy estável**: `assets.vibesocial.com.br` é CNAME para `vibesocial-site.pages.dev` (Cloudflare Pages, zona `vibesocial.com.br`, proxied). O Pages serve redirect para o GH Release correspondente.

Mobile baixa sempre via `https://assets.vibesocial.com.br/<asset>` — URL estável, independente de qual release o asset mora.

## Releases publicados

| Release | Asset | Tamanho | Consumidor |
|---|---|---|---|
| `models-v1` | `toxic.tflite` | 90,612,288 B | `MODELS.text.url` (moderação toxicidade on-device) |
| `models-v1` | `tokenizer-v2.bin` | 1,444,459 B | `TOKENIZER_URL` (tokenizer sentencepiece) |
| `nsfw-v1` | `nsfw.tflite` | 17,355,548 B | `MODELS.image.url` (**ativo desde 2026-11-11**) |

**Regra**: cada asset em 1 release só. Nunca duplicar nome entre releases — o redirect do Pages serve por nome de arquivo, não por release.

URLs diretas no GH: `https://github.com/sophiehf35/vibe-social-site/releases/download/<release>/<asset>`

## Build + deploy

    pnpm install
    pnpm build          # gera dist/
    pnpm preview        # testa local

Deploy via Cloudflare Pages (`wrangler pages deploy dist --project-name=vibesocial-site`) ou GitHub Pages, a decidir.

## Atualizar um asset

1. Gera o binário novo localmente e salva em `releases/<release>/`
2. `gh release upload <release> <arquivo> --repo sophiehf35/vibe-social-site --clobber` (precisa PAT com `contents:write`) — ou UI do release
3. Atualiza `packages/mobile/src/moderation/config.ts` no vibe-social-base se o path mudou

Se for um modelo novo (não substituição), cria release nova: `gh release create <release> releases/<release>/<asset> --title "<título>"` e adiciona o asset também na tabela "Releases publicados" acima.

## Licença

Proprietário.
