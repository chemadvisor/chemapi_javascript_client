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
    define(['ApiClient', 'chemadvisor.chemApi.model/Links', 'chemadvisor.chemApi.model/Substance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./Substance'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.Substances = factory(root.ChemadvisorChemApi.ApiClient, root.ChemadvisorChemApi.Links, root.ChemadvisorChemApi.Substance);
  }
}(this, function(ApiClient, Links, Substance) {
  'use strict';




  /**
   * The Substances model module.
   * @module chemadvisor.chemApi.model/Substances
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new <code>Substances</code>.
   * @alias module:chemadvisor.chemApi.model/Substances
   * @class
   * @param substance {Array.<module:chemadvisor.chemApi.model/Substance>} A collection of substance objects
   */
  var exports = function(substance) {
    var _this = this;

    _this['substance'] = substance;

  };

  /**
   * Constructs a <code>Substances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:chemadvisor.chemApi.model/Substances} obj Optional instance to populate.
   * @return {module:chemadvisor.chemApi.model/Substances} The populated <code>Substances</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('substance')) {
        obj['substance'] = ApiClient.convertToType(data['substance'], [Substance]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * A collection of substance objects
   * @member {Array.<module:chemadvisor.chemApi.model/Substance>} substance
   */
  exports.prototype['substance'] = undefined;
  /**
   * @member {module:chemadvisor.chemApi.model/Links} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


