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
    define(['ApiClient', 'chemadvisor.chemApi.model/Identifiers', 'chemadvisor.chemApi.model/Links', 'chemadvisor.chemApi.model/RelatedSubstances', 'chemadvisor.chemApi.model/SubstanceNames'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Identifiers'), require('./Links'), require('./RelatedSubstances'), require('./SubstanceNames'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.Substance = factory(root.ChemadvisorChemApi.ApiClient, root.ChemadvisorChemApi.Identifiers, root.ChemadvisorChemApi.Links, root.ChemadvisorChemApi.RelatedSubstances, root.ChemadvisorChemApi.SubstanceNames);
  }
}(this, function(ApiClient, Identifiers, Links, RelatedSubstances, SubstanceNames) {
  'use strict';




  /**
   * The Substance model module.
   * @module chemadvisor.chemApi.model/Substance
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new <code>Substance</code>.
   * Contains information about the substance
   * @alias module:chemadvisor.chemApi.model/Substance
   * @class
   * @param id {Integer} 
   * @param primaryName {String} 
   */
  var exports = function(id, primaryName) {
    var _this = this;

    _this['_id'] = id;
    _this['primary_name'] = primaryName;





  };

  /**
   * Constructs a <code>Substance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:chemadvisor.chemApi.model/Substance} obj Optional instance to populate.
   * @return {module:chemadvisor.chemApi.model/Substance} The populated <code>Substance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'Integer');
      }
      if (data.hasOwnProperty('primary_name')) {
        obj['primary_name'] = ApiClient.convertToType(data['primary_name'], 'String');
      }
      if (data.hasOwnProperty('regulatory_burden')) {
        obj['regulatory_burden'] = ApiClient.convertToType(data['regulatory_burden'], 'Number');
      }
      if (data.hasOwnProperty('identifiers')) {
        obj['identifiers'] = Identifiers.constructFromObject(data['identifiers']);
      }
      if (data.hasOwnProperty('names')) {
        obj['names'] = SubstanceNames.constructFromObject(data['names']);
      }
      if (data.hasOwnProperty('related_substances')) {
        obj['related_substances'] = RelatedSubstances.constructFromObject(data['related_substances']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} primary_name
   */
  exports.prototype['primary_name'] = undefined;
  /**
   * @member {Number} regulatory_burden
   */
  exports.prototype['regulatory_burden'] = undefined;
  /**
   * @member {module:chemadvisor.chemApi.model/Identifiers} identifiers
   */
  exports.prototype['identifiers'] = undefined;
  /**
   * @member {module:chemadvisor.chemApi.model/SubstanceNames} names
   */
  exports.prototype['names'] = undefined;
  /**
   * @member {module:chemadvisor.chemApi.model/RelatedSubstances} related_substances
   */
  exports.prototype['related_substances'] = undefined;
  /**
   * @member {module:chemadvisor.chemApi.model/Links} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


