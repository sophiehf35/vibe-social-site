# releases/

Copias locais dos binarios que vivem no **GitHub Releases publico** do repo `vibe-social-site`. Os binarios em si NAO sao commitados (`*.tflite`, `*.bin` no `.gitignore`) - so a estrutura e os READMEs. GitHub Releases e a fonte de verdade para download; esta pasta e backup/staging local.

Estrutura = 1 pasta por release no GitHub:

- `models-v1/` -> `github.com/sophiehf35/vibe-social-site/releases/tag/models-v1`
- `nsfw-v1/` -> `github.com/sophiehf35/vibe-social-site/releases/tag/nsfw-v1`

## Redirect em prod

`https://assets.vibesocial.com.br/<asset>` resolve via **CF Redirect Rule**
na zona `vibesocial.com.br` da conta rd-01, não via Pages Function. Duas rules:
fallback `models-v1` (exceto `/nsfw*`) + rule específica `/nsfw*` → `nsfw-v1`.
Detalhes em `vibe-social-base/docs/05-storage.md` §Redirect Rules.

## Refazer local

    cd "/Users/sophie/Documents/Projetos VS Code/vibe-social-base"
    git show <commit>:pages-config-assets/... > releases/...

Ou baixar via `gh release download`.
