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
    define(['ApiClient', 'chemadvisor.chemApi.model/ApiResponseMessage', 'chemadvisor.chemApi.model/Entries', 'chemadvisor.chemApi.model/Entry', 'chemadvisor.chemApi.model/RegulatoryList', 'chemadvisor.chemApi.model/RegulatoryLists'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../chemadvisor.chemApi.model/ApiResponseMessage'), require('../chemadvisor.chemApi.model/Entries'), require('../chemadvisor.chemApi.model/Entry'), require('../chemadvisor.chemApi.model/RegulatoryList'), require('../chemadvisor.chemApi.model/RegulatoryLists'));
  } else {
    // Browser globals (root is window)
    if (!root.ChemadvisorChemApi) {
      root.ChemadvisorChemApi = {};
    }
    root.ChemadvisorChemApi.ListsApi = factory(root.ChemadvisorChemApi.ApiClient, root.ChemadvisorChemApi.ApiResponseMessage, root.ChemadvisorChemApi.Entries, root.ChemadvisorChemApi.Entry, root.ChemadvisorChemApi.RegulatoryList, root.ChemadvisorChemApi.RegulatoryLists);
  }
}(this, function(ApiClient, ApiResponseMessage, Entries, Entry, RegulatoryList, RegulatoryLists) {
  'use strict';

  /**
   * Lists service.
   * @module chemadvisor.chemApi.client/ListsApi
   * @version 0.9.6 beta
   */

  /**
   * Constructs a new ListsApi. 
   * @alias module:chemadvisor.chemApi.client/ListsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEntries operation.
     * @callback module:chemadvisor.chemApi.client/ListsApi~getEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:chemadvisor.chemApi.model/Entries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a paginated collection of entries for a single Regulatory List
     * 
     * @param {String} regulatoryListId Regulatory List ID
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Number of items to retrieve (default to 10)
     * @param {Integer} opts.offset Offset of the first item returned (default to 0)
     * @param {String} opts.q Search filter, for more information &lt;http://chemadvisor.io/docs/api/v2/filtering.html&gt;
     * @param {String} opts.appKey 
     * @param {String} opts.appId 
     * @param {module:chemadvisor.chemApi.client/ListsApi~getEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:chemadvisor.chemApi.model/Entries}
     */
    this.getEntries = function(regulatoryListId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'regulatoryListId' is set
      if (regulatoryListId == undefined || regulatoryListId == null) {
        throw "Missing the required parameter 'regulatoryListId' when calling getEntries";
      }


      var pathParams = {
        'regulatory_list_id': regulatoryListId
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
      var returnType = Entries;

      return this.apiClient.callApi(
        '/regulatory_lists/{regulatory_list_id}/entries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEntry operation.
     * @callback module:chemadvisor.chemApi.client/ListsApi~getEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:chemadvisor.chemApi.model/Entry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find the entries for a specific Substance on List
     * Returns a collection of entries for a single Substance from a single Regulatory List
     * @param {String} regulatoryListId Regulatory List ID
     * @param {String} substanceId Substance ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.appKey 
     * @param {String} opts.appId 
     * @param {module:chemadvisor.chemApi.client/ListsApi~getEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:chemadvisor.chemApi.model/Entry}
     */
    this.getEntry = function(regulatoryListId, substanceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'regulatoryListId' is set
      if (regulatoryListId == undefined || regulatoryListId == null) {
        throw "Missing the required parameter 'regulatoryListId' when calling getEntry";
      }

      // verify the required parameter 'substanceId' is set
      if (substanceId == undefined || substanceId == null) {
        throw "Missing the required parameter 'substanceId' when calling getEntry";
      }


      var pathParams = {
        'regulatory_list_id': regulatoryListId,
        'substance_id': substanceId
      };
      var queryParams = {
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
      var returnType = Entry;

      return this.apiClient.callApi(
        '/regulatory_lists/{regulatory_list_id}/entries/{substance_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getList operation.
     * @callback module:chemadvisor.chemApi.client/ListsApi~getListCallback
     * @param {String} error Error message, if any.
     * @param {module:chemadvisor.chemApi.model/RegulatoryList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a Regulatory List by ID
     * Returns a single Regulatory List
     * @param {String} regulatoryListId Regulatory List ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.appKey 
     * @param {String} opts.appId 
     * @param {module:chemadvisor.chemApi.client/ListsApi~getListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:chemadvisor.chemApi.model/RegulatoryList}
     */
    this.getList = function(regulatoryListId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'regulatoryListId' is set
      if (regulatoryListId == undefined || regulatoryListId == null) {
        throw "Missing the required parameter 'regulatoryListId' when calling getList";
      }


      var pathParams = {
        'regulatory_list_id': regulatoryListId
      };
      var queryParams = {
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
      var returnType = RegulatoryList;

      return this.apiClient.callApi(
        '/regulatory_lists/{regulatory_list_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLists operation.
     * @callback module:chemadvisor.chemApi.client/ListsApi~getListsCallback
     * @param {String} error Error message, if any.
     * @param {module:chemadvisor.chemApi.model/RegulatoryLists} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * All Lists
     * A paginated collection of Regulatory Lists
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Number of items to retrieve (default to 10)
     * @param {Integer} opts.offset Offset of the first item returned (default to 0)
     * @param {String} opts.q Search filter is based on the syntax used for find in mongoDB.  For more information, visit &lt;a href&#x3D;\&quot;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ\&quot; target&#x3D;\&quot;blank\&quot;&gt;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ&lt;/a&gt;.
     * @param {String} opts.appKey 
     * @param {String} opts.appId 
     * @param {module:chemadvisor.chemApi.client/ListsApi~getListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:chemadvisor.chemApi.model/RegulatoryLists}
     */
    this.getLists = function(opts, callback) {
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
      var returnType = RegulatoryLists;

      return this.apiClient.callApi(
        '/regulatory_lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
