import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const highlighter = await createHighlighterCore({
        themes: [import('@shikijs/themes/rose-pine'), import('@shikijs/themes/rose-pine-dawn')],
        langs: [import('@shikijs/langs/typescript'), import('@shikijs/langs/css')],
        engine: createOnigurumaEngine(import('shiki/wasm')),
    });
    return {
        highlighter,
        codeSnippets,
    };
};

const codeSnippets: {
  lang: string;
  snippet: string;
  signatureHelps: Record<string, string>;
}[] = [
    {
        lang: 'typescript',
        snippet: `
const handlePress = async () => {
  const result = await getDocumentAsync();

  const created = await createTransfer(supabase)({
    // omit for brevity
  });

  if (created.failed) {
    console.error('Error creating transfer:', created.error);
    return;
  }

  const transferId = created.data.id;
  const copied = copyAssetsToDocumentDir(transferId, result.assets);
  if (copied.failed) {
    console.error('Error moving assets to document directory:', copied.error);
    return;
  }
  // omit for brevity
};
        `.trim(),
        signatureHelps: {
            created: `
/**
 * My favourite type \`Attempt<A, E>\` from \`@duydang2311/attempt\` library for explicit error handling.
 */
const created: Attempt<CreateTransferResult, PostgresError>;
`.trim(),
            createTransfer: `
/**
  * Instead of combining dependencies and operational parameters in a single function signature,
  * this implementation uses a higher-order function \`createTransfer\`.
  * In this case, it takes the \`supabase\` instance, which is a dependency,
  * and returns a new function that will actually perform the main action.
  * By separating the dependencies from the function's primary logic, the intention becomes clear.
  *
  * This new function attempts to copy an array of assets, such as files or images selected by the user,
  * to a persistent location in the application's document directory.
  *
  * To handle errors, instead of throwing and catching them the traditional way,
  * which sometimes make control flow less clear, I use the \`Attempt<A, E>\` type.
  * This approach treats and returns errors as values, a common practice in functional programming
  * that explicitly shows that a function can fail, forcing the caller to handle the possible error
  * before being able to access the result.
  */
const createTransfer: (supabase: AppSupabase) => (values: TransferRow) => Promise<Attempt<TransferRow, PostgresError>>;
const createTransfer =
  (supabase: AppSupabase) =>
  async (values: Database['public']['Tables']['transfers']['Insert']) => {
    const transfer = await supabase
      .from('transfers')
      .insert(values)
      .select('id')
      .single();

    if (transfer.error) {
      console.error('Error creating transfer:', transfer.error);
      return attempt.fail(transfer.error);
    }

    return attempt.ok(transfer.data);
  };
`.trim(),
            copyAssetsToDocumentDir: `
/**
 * Using the \`attempt\` API, you can map the error type to a more specific type,
 * but sometimes I just want to log the error and not handle it in a specific way.
 */
const copyAssetsToDocumentDir: (transferId: string, assets: DocumentPickerAsset[]) => Attempt<void, unknown>;
const copyAssetsToDocumentDir = (
  transferId: string,
  assets: DocumentPickerAsset[]
) => {
  /**
   * Wrapping any unsafe functions in \`attempt.sync\` allows you to catch any errors that may occur
   * and handle them in a more controlled way.
   * But it's recommended that you wrap unsafe functions separately so that you can
   * know specifically which errors are coming from which part of the code.
   */
  return attempt.sync(() => {
    const files = assets.map((a) => new File(a.uri));
    const transferIdDir = new Directory(
      Paths.document,
      'transfers',
      transferId
    );
    if (!transferIdDir.exists) {
      transferIdDir.create({ intermediates: true }); // unsafe
    }
    for (const file of files) {
      file.copy(transferIdDir); // unsafe
    }
  })(/* optionally map error from \`unknown\` to your type here, e.g. (e) => new MyCustomError(e) */);
};
`.trim(),
        },
    },
    {
        lang: 'css',
        snippet: `

/*
 * Are you a TailwindCSS user? Instead of abusing tailwind-merge, you can have the best of both worlds.
 * Utilizing CSS layers and class priority to style components and using TailwindCSS where it shines (utility classes).
 */
.c-button {
    --_text: var(--color-base-fg);
    --_text-hover: var(--color-base-fg-hover);
    --_text-active: var(--color-base-fg);
    --_bg: transparent;
    --_bg-hover: transparent;
    --_bg-active: transparent;
    --_border: transparent;

    &:where(.c-button--filled) {
        --_bg: var(--color-base-light);
        --_bg-hover: var(--color-base-hover);
        --_bg-active: var(--color-base-active);
    }

    &:where(.c-button--outlined) {
        --_border: var(--color-base-border);
    }
}

.c-button--primary {
    --_text: var(--color-primary);
    --_text-hover: var(--color-primary-hover);
    --_text-active: var(--color-primary-active);
    --_bg: transparent;
    --_bg-hover: transparent;
    --_bg-active: transparent;
    --_border: transparent;

    &:where(.c-button--filled) {
        --_text: var(--color-primary-fg);
        --_text-hover: var(--color-primary-fg);
        --_text-active: var(--color-primary-fg);
        --_bg: var(--color-primary);
        --_bg-hover: var(--color-primary-hover);
        --_bg-active: var(--color-primary-active);
    }

    &:where(.c-button--outlined) {
        --_border: var(--color-primary-border);
    }
}

.c-button--accent {
    /* omit for brevity */
}

.c-button {
    color: var(--_text);
    background-color: var(--_bg);
    border: 1px solid var(--_border);
    /* other styles - omit for brevity */

    &:where(:hover) {
        color: var(--_text-hover);
        background-color: var(--_bg-hover);
    }

    &:where(:active) {
        color: var(--_text-active);
        background-color: var(--_bg-active);
    }
}`.trim(),
        signatureHelps: {
            'c-button': '/* Define some default styles for the button */',
            'c-button--primary': '/* Define styles for primary variant */',
        },
    },
];
