/**
 * Retrieves the translation of text using the i18n package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook used to mark the block wrapper element.
 * It provides the necessary props, such as class names.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * This function describes how the block's attributes are combined into
 * the final markup. It defines the structure of the block when it's
 * rendered on the front end.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} attributes - Block attributes that are used to build the final output.
 * @return {Element} JSX element representing the saved state of the block.
 */
export default function Save({ attributes }) {
  // Destructure block attributes for easier access
  const { title, description, buttonText, backgroundImage } = attributes;

  return (
    // Use block props to mark the block wrapper, including class names
    <div {...useBlockProps.save()} className="block-container">
      {/* The main section of the block */}
      <main>
        {/* Display the logo in the main section */}
        <div className="main__logo">
          <img
            src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/logo.svg"
            alt={__('Logo')}
          />
        </div>

        {/* Background image with dynamic content */}
        <div
          className="main__hero-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Content within the hero section */}
        <div className="main__hero-content">
          {/* Heading for the hero content, using RichText.Content for saved content */}
          <div className="hero-content__heading">
            <RichText.Content
              tagName="h1"
              value={title}
            />
          </div>

          {/* Description within the hero content */}
          <div className="hero-content__description">
            <RichText.Content
              tagName="p"
              value={description}
            />
          </div>

          {/* Form for collecting email addresses */}
          <div className="hero-content__request-form-brand">
            <form id="hero_content__request-form">
              <input
                className="request-form__email"
                type="email"
                placeholder={__('Email Address')}
              />
              {/* Button with customizable text */}
              <RichText.Content
                tagName="button"
                value={buttonText}
              />
            </form>

            {/* Display logos of associated brands */}
            <div className="hero-content__brands-logo">
              <img
                src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/spotify.svg"
                alt={__('Spotify')}
              />
              <img
                src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/apple-podcast.svg"
                alt={__('Apple Podcasts')}
              />
              <img
                src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/google-podcasts.svg"
                alt={__('Google Podcasts')}
              />
              <img
                src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/pocket-casts.svg"
                alt={__('Pocket Casts')}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer>
        <img
          src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/bg-pattern-dots.svg"
          alt={__('Dot Patterns')}
        />
      </footer>
    </div>
  );
}
