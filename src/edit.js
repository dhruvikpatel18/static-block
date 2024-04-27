/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
} from '@wordpress/block-editor';

import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


export default function Edit() {
  return (
    <div {...useBlockProps()} className="block-container">
      <main>
        <div className="main__logo">
          <img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/logo.svg" alt="logo" />
        </div>
        <div className="main__hero-image" />

        <div className="main__hero-content">
          <div className="hero-content__heading">
            <h1>Publish your podcasts <span>everywhere.</span></h1>
          </div>
          <div className="hero-content__description">
            <p>
              Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts, and more!
            </p>
          </div>
          <div className="hero-content__request-form-brand">
            <form id="hero_content__request-form">
              <input
                className="request-form__email"
                type="email"
                placeholder="Email Address"
              />
              <button type="submit">Request Access</button>
            </form>
            <div className="hero-content__brands-logo">
              <img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/spotify.svg" alt="spotify" />
              <img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/apple-podcast.svg" alt="apple" />
              <img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/google-podcasts.svg" alt="google" />
              <img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/pocket-casts.svg" alt="pocket" />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/bg-pattern-dots.svg" alt="dot-patterns" />
      </footer>
    </div>
  );
}

