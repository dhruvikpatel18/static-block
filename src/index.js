/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

// Use the dynamic plugin URL provided by PHP
const PLUGIN_URL = StaticBlockData.pluginUrl;

// Define block attributes with dynamic paths
const blockAttributes = {
  title: {
    type: 'string',
    default: 'Publish your podcasts everywhere.',
  },
  description: {
    type: 'string',
    default: 'Upload your audio to Pod with a single click...',
  },
  buttonText: {
    type: 'string',
    default: 'Request Access',
  },
  backgroundImage: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/desktop/image-host.jpg`, // Dynamic path
  },
  logoImage: {
    type: 'string',
    default: `${PLUGIN_URL}/assets/desktop/logo.svg`, // Dynamic path
  },
};


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

	attributes: blockAttributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
