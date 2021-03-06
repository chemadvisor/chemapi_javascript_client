/**
 * chemadvisor.io api
 * REST api to access ChemADVISOR maintained substance and regulatory data.
 *
 * OpenAPI spec version: 0.9.6 beta
 * Contact: support@chemadvisor.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.Link = factory(root.ChemadvisorChemApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Link model module.
   * @module chemadvisor.chemApi.model/Link
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new <code>Link</code>.
   * @alias module:chemadvisor.chemApi.model/Link
   * @class
   * @param rel {String} 
   * @param allow {String} The HTTP methods allowed on the href
   * @param href {String} 
   * @param contentType {String} 
   */
  var exports = function(rel, allow, href, contentType) {
    var _this = this;

    _this['rel'] = rel;
    _this['allow'] = allow;
    _this['href'] = href;
    _this['content_type'] = contentType;
  };

  /**
   * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:chemadvisor.chemApi.model/Link} obj Optional instance to populate.
   * @return {module:chemadvisor.chemApi.model/Link} The populated <code>Link</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rel')) {
        obj['rel'] = ApiClient.convertToType(data['rel'], 'String');
      }
      if (data.hasOwnProperty('allow')) {
        obj['allow'] = ApiClient.convertToType(data['allow'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} rel
   */
  exports.prototype['rel'] = undefined;
  /**
   * The HTTP methods allowed on the href
   * @member {String} allow
   */
  exports.prototype['allow'] = undefined;
  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} content_type
   */
  exports.prototype['content_type'] = undefined;



  return exports;
}));


