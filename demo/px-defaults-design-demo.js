/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-defaults-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-defaults-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-defaults-design" description="The defaults module contains variables and settings that are required for using nearly all Predix UI CSS modules. Use it to set the default font color, size, and vertical rhythm for your project." layer="settings" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-functions-design&quot;
  ]" hide-demo-container="" selected-options="{{selectedOptions}}">

<!-- 2: Provide Usage Info -->
<section slot="usage">
This module defines default style variables that many modules in your project will rely on.

The defaults provided are a good starting point for most projects. To change any of the variables, override them in your project Sass file by adding the new definitions above your \`@import\` line.

\`\`\`
<!-- Tiny base spacing unit -->
<!-- 5px -->
\$inuit-base-spacing-unit--tiny


<!-- Small base spacing unit -->
<!-- 10px -->
\$inuit-base-spacing-unit--small


<!-- Base spacing unit -->
<!-- 15px -->
\$inuit-base-spacing-unit


<!-- Large base spacing unit -->
<!-- 20px -->
\$inuit-base-spacing-unit--large


<!-- Huge base spacing unit -->
<!-- 30px -->
\$inuit-base-spacing-unit--huge
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-defaults-design-demo'
});
