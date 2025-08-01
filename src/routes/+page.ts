import { browser } from '$app/environment';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';
import type { PageLoad } from './$types';

if (browser) {
    // gsap.registerPlugin(ScrollTrigger);
    // const lenis = new Lenis({ lerp: 0.2 });
    // lenis.on('scroll', ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //     lenis.raf(time * 1000);
    // });
    // gsap.ticker.lagSmoothing(0);
    const lenis = new Lenis({
        autoRaf: true,
    });
}

export const load: PageLoad = async () => {
    return {
        codeSnippets,
    };
};

const codeSnippets = [
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
];
