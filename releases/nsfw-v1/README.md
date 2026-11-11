# nsfw-v1

Release: https://github.com/sophiehf35/vibe-social-site/releases/tag/nsfw-v1

| Asset | Bytes | SHA-256 | Consumidor mobile |
|---|---|---|---|
| `nsfw.tflite` | 17,355,548 | `380f98f7...` | `MODELS.image.url` (ativo desde 2026-11-11) |

**Lifecycle independente** do `models-v1`. **Ativo desde 2026-11-11** — consumido via `https://assets.vibesocial.com.br/nsfw.tflite` (CF Redirect Rule na zona `vibesocial.com.br` da conta rd-01, phase `http_request_dynamic_redirect`). Se precisar de versão nova, criar release `nsfw-v2` + adicionar rule específica ANTES do fallback.
