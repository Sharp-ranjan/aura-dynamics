<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared site branding uses uploaded logo asset pointers with a light-lettered footer variant; the favicon uses a padded square crop of the same uploaded symbol to keep branding consistent.
- Keep legacy navy/gold class names mapped to the current neutral/accent theme tokens so all existing pages adopt brand color updates together.
- Mobile navigation uses a body portal with Radix Dialog focus management so the sticky header cannot constrain the drawer.
- Every content route passes its own path to the shared SEO helper to keep canonical and social URLs self-referencing.
- Canvas quality and legal alias normalization live in browser-safe helpers so their viewport thresholds and mappings can be tested independently.
