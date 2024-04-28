/**
 * Retrieves the translation of text using the i18n package.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that provides block properties such as class names.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

/**
 * WordPress component package for user interface elements.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { PanelBody, Button } from "@wordpress/components";

/**
 * Loads CSS styles for the block in the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

// Get the plugin URL from localized data
const PLUGIN_URL = StaticBlockData.pluginUrl;

// Re-define the image paths using the dynamic plugin URL
const imagePaths = {
    spotify: `${PLUGIN_URL}/assets/desktop/spotify.svg`,
    applePodcasts: `${PLUGIN_URL}/assets/desktop/apple-podcast.svg`,
    googlePodcasts: `${PLUGIN_URL}/assets/desktop/google-podcasts.svg`,
    pocketCasts: `${PLUGIN_URL}/assets/desktop/pocket-casts.svg`,
    bgPatternDots: `${PLUGIN_URL}/assets/desktop/bg-pattern-dots.svg`,
};


/**
 * The edit function renders the block structure within the Gutenberg editor.
 * This includes customizable content like RichText, image uploads, and Inspector controls.
 *
 * @param {Object} attributes - Block attributes, including text, images, and button text.
 * @param {Function} setAttributes - Function to update block attributes.
 *
 * @return {Element} JSX element representing the block in the editor.
 */
export default function Edit({ attributes, setAttributes }) {
	// Destructure block attributes
	const { title, description, buttonText, backgroundImage, logoImage } = attributes;

	/**
	 * Prevents the default form submission behavior to avoid unwanted page refresh.
	 *
	 * @param {Event} event - The form submission event.
	 */
	const preventDefaultSubmission = (event) => {
		event.preventDefault();
	};

	return (
		<div {...useBlockProps()} className="block-container">
			{/* Inspector controls for block settings in the sidebar */}
			<InspectorControls>
				<PanelBody title={__("Background Image")}>
					{/* Media upload control for selecting the background image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ backgroundImage: media.url })
								}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select Background Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected background image */}
							{backgroundImage && (
								<img
									src={backgroundImage}
									alt={__("Background Image Preview")}
									style={{ width: "100%", marginTop: "10px" }} // Simple preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>

					{/* Media upload control for selecting the logo image */}
					<MediaUploadCheck>
						<div>
							<MediaUpload
								onSelect={(media) => setAttributes({ logoImage: media.url })}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{__("Select Logo Image")}
									</Button>
								)}
							/>
							{/* Display a preview of the selected logo image */}
							{logoImage && (
								<img
									src={logoImage}
									alt={__("Logo Preview")}
									style={{ width: "100%", marginTop: "10px" }} // Preview styling
								/>
							)}
						</div>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			{/* Main content of the block */}
			<main>
				{/* Display the logo */}
				<div className="main__logo">
					<img src={logoImage} alt={__("Logo")} />
				</div>

				{/* Hero image section with background image */}
				<div
					className="main__hero-image"
					style={{ backgroundImage: `url(${backgroundImage})` }}
				/>

				{/* Hero content with editable title and description */}
				<div className="main__hero-content">
					<div className="hero-content__heading">
						<RichText
							tagName="h1"
							value={title}
							onChange={(newTitle) => setAttributes({ title: newTitle })}
							placeholder={__("Enter Title")}
						/>
					</div>

					<div className="hero-content__description">
						<RichText
							tagName="p"
							value={description}
							onChange={(newDescription) =>
								setAttributes({ description: newDescription })
							}
							placeholder={__("Enter Description")}
						/>
					</div>

					{/* Form with preventDefaultSubmission event handler */}
					<div className="hero-content__request-form-brand">
						<form
							id="hero_content__request-form"
							onSubmit={preventDefaultSubmission}
						>
							<input
								className="request-form__email"
								type="email"
								placeholder={__("Email Address")}
							/>
							{/* Button with editable text */}
							<RichText
								tagName="button"
								value={buttonText}
								onChange={(newButtonText) =>
									setAttributes({ buttonText: newButtonText })
								}
								multiline={false}
							/>
						</form>

						{/* Displaying brand logos */}
						<div className="hero-content__brands-logo">
							<img
								src={imagePaths.spotify}
								alt={__('Spotify')}
							/>
							<img
								src={imagePaths.applePodcasts}
								alt={__('Apple Podcasts')}
							/>
							<img
								src={imagePaths.googlePodcasts}
								alt={__('Google Podcasts')}
							/>
							<img
								src={imagePaths.pocketCasts}
								alt={__('Pocket Casts')}
							/>
						</div>
					</div>
				</div>
			</main>

			{/* Footer with decorative elements */}
			<footer>
				<img
					src={imagePaths.bgPatternDots}
					alt={__("Dot Patterns")}
				/>
			</footer>
		</div>
	);
}
