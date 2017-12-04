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
    define(['ApiClient', 'chemadvisor.chemApi.model/Links', 'chemadvisor.chemApi.model/RegulatoryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./RegulatoryList'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.RegulatoryLists = factory(root.ChemadvisorChemApi.ApiClient, root.ChemadvisorChemApi.Links, root.ChemadvisorChemApi.RegulatoryList);
  }
}(this, function(ApiClient, Links, RegulatoryList) {
  'use strict';




  /**
   * The RegulatoryLists model module.
   * @module chemadvisor.chemApi.model/RegulatoryLists
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new <code>RegulatoryLists</code>.
   * @alias module:chemadvisor.chemApi.model/RegulatoryLists
   * @class
   * @param regulatoryList {Array.<module:chemadvisor.chemApi.model/RegulatoryList>} A collection of regulatory_list objects
   */
  var exports = function(regulatoryList) {
    var _this = this;

    _this['regulatory_list'] = regulatoryList;

  };

  /**
   * Constructs a <code>RegulatoryLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:chemadvisor.chemApi.model/RegulatoryLists} obj Optional instance to populate.
   * @return {module:chemadvisor.chemApi.model/RegulatoryLists} The populated <code>RegulatoryLists</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('regulatory_list')) {
        obj['regulatory_list'] = ApiClient.convertToType(data['regulatory_list'], [RegulatoryList]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * A collection of regulatory_list objects
   * @member {Array.<module:chemadvisor.chemApi.model/RegulatoryList>} regulatory_list
   */
  exports.prototype['regulatory_list'] = undefined;
  /**
   * @member {module:chemadvisor.chemApi.model/Links} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));

