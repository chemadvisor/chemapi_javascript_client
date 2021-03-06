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
    define(['ApiClient', 'chemadvisor.chemApi.model/BaseDataType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseDataType'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.Range = factory(root.ChemadvisorChemApi.ApiClient, root.ChemadvisorChemApi.BaseDataType);
  }
}(this, function(ApiClient, BaseDataType) {
  'use strict';




  /**
   * The Range model module.
   * @module chemadvisor.chemApi.model/Range
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new <code>Range</code>.
   * @alias module:chemadvisor.chemApi.model/Range
   * @class
   * @extends module:chemadvisor.chemApi.model/BaseDataType
   * @param dataType {String} 
   * @param name {String} 
   * @param prompt {String} 
   * @param value {String} 
   * @param lowerOp {String} 
   * @param lowerVal {Number} 
   * @param upperOp {String} 
   * @param upperVal {Number} 
   * @param unit {String} 
   * @param unitType {String} 
   */
  var exports = function(dataType, name, prompt, value, lowerOp, lowerVal, upperOp, upperVal, unit, unitType) {
    var _this = this;
    BaseDataType.call(_this, dataType, name, prompt, value);
    _this['lower_op'] = lowerOp;
    _this['lower_val'] = lowerVal;
    _this['upper_op'] = upperOp;
    _this['upper_val'] = upperVal;
    _this['unit'] = unit;
    _this['unit_type'] = unitType;
  };

  /**
   * Constructs a <code>Range</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:chemadvisor.chemApi.model/Range} obj Optional instance to populate.
   * @return {module:chemadvisor.chemApi.model/Range} The populated <code>Range</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BaseDataType.constructFromObject(data, obj);
      if (data.hasOwnProperty('lower_op')) {
        obj['lower_op'] = ApiClient.convertToType(data['lower_op'], 'String');
      }
      if (data.hasOwnProperty('lower_val')) {
        obj['lower_val'] = ApiClient.convertToType(data['lower_val'], 'Number');
      }
      if (data.hasOwnProperty('upper_op')) {
        obj['upper_op'] = ApiClient.convertToType(data['upper_op'], 'String');
      }
      if (data.hasOwnProperty('upper_val')) {
        obj['upper_val'] = ApiClient.convertToType(data['upper_val'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('unit_type')) {
        obj['unit_type'] = ApiClient.convertToType(data['unit_type'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BaseDataType.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {String} lower_op
   */
  exports.prototype['lower_op'] = undefined;
  /**
   * @member {Number} lower_val
   */
  exports.prototype['lower_val'] = undefined;
  /**
   * @member {String} upper_op
   */
  exports.prototype['upper_op'] = undefined;
  /**
   * @member {Number} upper_val
   */
  exports.prototype['upper_val'] = undefined;
  /**
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * @member {String} unit_type
   */
  exports.prototype['unit_type'] = undefined;



  return exports;
}));


