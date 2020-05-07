/**
 * The entry point for theme scripts.
 *
 * Modules are imported and compiled into one resulting `script.js` file.
 *
 * @package Responsive_Child_Starter
 */

// Import the toggle function from the Responsive Foundation module.
import { toggle } from 'responsive-foundation/js-dev/dist/toggle';

// Example of how to import a module from the modules folder,
// just like you would import a Sass partial in Sass.
import { helloResponsive } from './modules/example-module';

// Run the toggle function for our navigation.
toggle();
