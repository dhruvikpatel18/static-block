/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save() {
	return (
	  <div {...useBlockProps.save()} className="block-container">
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
				<img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/apple-podcast.svg" alt="apple-podcast" />
				<img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/google-podcasts.svg" alt="google-podcasts" />
				<img src="http://localhost:1234/wp-test/wp-content/plugins/static-block/assets/desktop/pocket-casts.svg" alt="pocket-casts" />
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