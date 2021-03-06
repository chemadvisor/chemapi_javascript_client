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
    define(['ApiClient', 'chemadvisor.chemApi.model/ApiResponseMessage', 'chemadvisor.chemApi.model/Releases'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../chemadvisor.chemApi.model/ApiResponseMessage'), require('../chemadvisor.chemApi.model/Releases'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.ReleasesApi = factory(root.ChemadvisorChemApi.ApiClient, root.ChemadvisorChemApi.ApiResponseMessage, root.ChemadvisorChemApi.Releases);
  }
}(this, function(ApiClient, ApiResponseMessage, Releases) {
  'use strict';

  /**
   * Releases service.
   * @module chemadvisor.chemApi.client/ReleasesApi
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new ReleasesApi. 
   * @alias module:chemadvisor.chemApi.client/ReleasesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getReleases operation.
     * @callback module:chemadvisor.chemApi.client/ReleasesApi~getReleasesCallback
     * @param {String} error Error message, if any.
     * @param {module:chemadvisor.chemApi.model/Releases} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * All Releases
     * A paginated collection of Releases
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Number of items to retrieve (default to 10)
     * @param {Integer} opts.offset Offset of the first item returned (default to 0)
     * @param {String} opts.q Search filter is based on the syntax used for find in mongoDB.  For more information, visit &lt;a href&#x3D;\&quot;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ\&quot; target&#x3D;\&quot;blank\&quot;&gt;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ&lt;/a&gt;.
     * @param {String} opts.appKey 
     * @param {String} opts.appId 
     * @param {module:chemadvisor.chemApi.client/ReleasesApi~getReleasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:chemadvisor.chemApi.model/Releases}
     */
    this.getReleases = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'q': opts['q']
      };
      var headerParams = {
        'app_key': opts['appKey'],
        'app_id': opts['appId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Releases;

      return this.apiClient.callApi(
        '/releases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
